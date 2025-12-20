// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#annotations ClusterTemplate#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Cluster template description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#description ClusterTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#id ClusterTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#labels ClusterTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Cluster template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#name ClusterTemplate#name}
  */
  readonly name: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#members ClusterTemplate#members}
  */
  readonly members?: ClusterTemplateMembers[] | cdktf.IResolvable;
  /**
  * template_revisions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#template_revisions ClusterTemplate#template_revisions}
  */
  readonly templateRevisions?: ClusterTemplateTemplateRevisions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#timeouts ClusterTemplate#timeouts}
  */
  readonly timeouts?: ClusterTemplateTimeouts;
}
export interface ClusterTemplateMembers {
  /**
  * Member access type: member, owner, read-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#access_type ClusterTemplate#access_type}
  */
  readonly accessType?: string;
  /**
  * Member group principal id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#group_principal_id ClusterTemplate#group_principal_id}
  */
  readonly groupPrincipalId?: string;
  /**
  * Member user principal id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#user_principal_id ClusterTemplate#user_principal_id}
  */
  readonly userPrincipalId?: string;
}

export function clusterTemplateMembersToTerraform(struct?: ClusterTemplateMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    group_principal_id: cdktf.stringToTerraform(struct!.groupPrincipalId),
    user_principal_id: cdktf.stringToTerraform(struct!.userPrincipalId),
  }
}


export function clusterTemplateMembersToHclTerraform(struct?: ClusterTemplateMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_principal_id: {
      value: cdktf.stringToHclTerraform(struct!.groupPrincipalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_principal_id: {
      value: cdktf.stringToHclTerraform(struct!.userPrincipalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._groupPrincipalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupPrincipalId = this._groupPrincipalId;
    }
    if (this._userPrincipalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPrincipalId = this._userPrincipalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessType = undefined;
      this._groupPrincipalId = undefined;
      this._userPrincipalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessType = value.accessType;
      this._groupPrincipalId = value.groupPrincipalId;
      this._userPrincipalId = value.userPrincipalId;
    }
  }

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // group_principal_id - computed: false, optional: true, required: false
  private _groupPrincipalId?: string; 
  public get groupPrincipalId() {
    return this.getStringAttribute('group_principal_id');
  }
  public set groupPrincipalId(value: string) {
    this._groupPrincipalId = value;
  }
  public resetGroupPrincipalId() {
    this._groupPrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPrincipalIdInput() {
    return this._groupPrincipalId;
  }

  // user_principal_id - computed: false, optional: true, required: false
  private _userPrincipalId?: string; 
  public get userPrincipalId() {
    return this.getStringAttribute('user_principal_id');
  }
  public set userPrincipalId(value: string) {
    this._userPrincipalId = value;
  }
  public resetUserPrincipalId() {
    this._userPrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrincipalIdInput() {
    return this._userPrincipalId;
  }
}

export class ClusterTemplateMembersList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateMembers[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateMembersOutputReference {
    return new ClusterTemplateMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ca_certs ClusterTemplate#ca_certs}
  */
  readonly caCerts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#enabled ClusterTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#fqdn ClusterTemplate#fqdn}
  */
  readonly fqdn?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointOutputReference | ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certs: cdktf.stringToTerraform(struct!.caCerts),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointOutputReference | ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certs: {
      value: cdktf.stringToHclTerraform(struct!.caCerts),
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
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCerts = undefined;
      this._enabled = undefined;
      this._fqdn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCerts = value.caCerts;
      this._enabled = value.enabled;
      this._fqdn = value.fqdn;
    }
  }

  // ca_certs - computed: false, optional: true, required: false
  private _caCerts?: string; 
  public get caCerts() {
    return this.getStringAttribute('ca_certs');
  }
  public set caCerts(value: string) {
    this._caCerts = value;
  }
  public resetCaCerts() {
    this._caCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts;
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

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#sans ClusterTemplate#sans}
  */
  readonly sans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#strategy ClusterTemplate#strategy}
  */
  readonly strategy?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sans),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sans !== undefined) {
      hasAnyValues = true;
      internalValueResult.sans = this._sans;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sans = undefined;
      this._strategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sans = value.sans;
      this._strategy = value.strategy;
    }
  }

  // sans - computed: true, optional: true, required: false
  private _sans?: string[]; 
  public get sans() {
    return this.getListAttribute('sans');
  }
  public set sans(value: string[]) {
    this._sans = value;
  }
  public resetSans() {
    this._sans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#mode ClusterTemplate#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#options ClusterTemplate#options}
  */
  readonly options?: { [key: string]: string };
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._options = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._options = value.options;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#address ClusterTemplate#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#port ClusterTemplate#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ssh_agent_auth ClusterTemplate#ssh_agent_auth}
  */
  readonly sshAgentAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ssh_key ClusterTemplate#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ssh_key_path ClusterTemplate#ssh_key_path}
  */
  readonly sshKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#user ClusterTemplate#user}
  */
  readonly user: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    port: cdktf.stringToTerraform(struct!.port),
    ssh_agent_auth: cdktf.booleanToTerraform(struct!.sshAgentAuth),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    ssh_key_path: cdktf.stringToTerraform(struct!.sshKeyPath),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_agent_auth: {
      value: cdktf.booleanToHclTerraform(struct!.sshAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_path: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sshAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAgentAuth = this._sshAgentAuth;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._sshKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyPath = this._sshKeyPath;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._port = undefined;
      this._sshAgentAuth = undefined;
      this._sshKey = undefined;
      this._sshKeyPath = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._port = value.port;
      this._sshAgentAuth = value.sshAgentAuth;
      this._sshKey = value.sshKey;
      this._sshKeyPath = value.sshKeyPath;
      this._user = value.user;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssh_agent_auth - computed: false, optional: true, required: false
  private _sshAgentAuth?: boolean | cdktf.IResolvable; 
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }
  public set sshAgentAuth(value: boolean | cdktf.IResolvable) {
    this._sshAgentAuth = value;
  }
  public resetSshAgentAuth() {
    this._sshAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAgentAuthInput() {
    return this._sshAgentAuth;
  }

  // ssh_key - computed: true, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // ssh_key_path - computed: true, optional: true, required: false
  private _sshKeyPath?: string; 
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }
  public set sshKeyPath(value: string) {
    this._sshKeyPath = value;
  }
  public resetSshKeyPath() {
    this._sshKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyPathInput() {
    return this._sshKeyPath;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#disable_security_group_ingress ClusterTemplate#disable_security_group_ingress}
  */
  readonly disableSecurityGroupIngress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#disable_strict_zone_check ClusterTemplate#disable_strict_zone_check}
  */
  readonly disableStrictZoneCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#elb_security_group ClusterTemplate#elb_security_group}
  */
  readonly elbSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kubernetes_cluster_id ClusterTemplate#kubernetes_cluster_id}
  */
  readonly kubernetesClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kubernetes_cluster_tag ClusterTemplate#kubernetes_cluster_tag}
  */
  readonly kubernetesClusterTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#role_arn ClusterTemplate#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#route_table_id ClusterTemplate#route_table_id}
  */
  readonly routeTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#subnet_id ClusterTemplate#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#vpc ClusterTemplate#vpc}
  */
  readonly vpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#zone ClusterTemplate#zone}
  */
  readonly zone?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_security_group_ingress: cdktf.booleanToTerraform(struct!.disableSecurityGroupIngress),
    disable_strict_zone_check: cdktf.booleanToTerraform(struct!.disableStrictZoneCheck),
    elb_security_group: cdktf.stringToTerraform(struct!.elbSecurityGroup),
    kubernetes_cluster_id: cdktf.stringToTerraform(struct!.kubernetesClusterId),
    kubernetes_cluster_tag: cdktf.stringToTerraform(struct!.kubernetesClusterTag),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    route_table_id: cdktf.stringToTerraform(struct!.routeTableId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc: cdktf.stringToTerraform(struct!.vpc),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_security_group_ingress: {
      value: cdktf.booleanToHclTerraform(struct!.disableSecurityGroupIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_strict_zone_check: {
      value: cdktf.booleanToHclTerraform(struct!.disableStrictZoneCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    elb_security_group: {
      value: cdktf.stringToHclTerraform(struct!.elbSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_cluster_tag: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesClusterTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.routeTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSecurityGroupIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSecurityGroupIngress = this._disableSecurityGroupIngress;
    }
    if (this._disableStrictZoneCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStrictZoneCheck = this._disableStrictZoneCheck;
    }
    if (this._elbSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.elbSecurityGroup = this._elbSecurityGroup;
    }
    if (this._kubernetesClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesClusterId = this._kubernetesClusterId;
    }
    if (this._kubernetesClusterTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesClusterTag = this._kubernetesClusterTag;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._routeTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableId = this._routeTableId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSecurityGroupIngress = undefined;
      this._disableStrictZoneCheck = undefined;
      this._elbSecurityGroup = undefined;
      this._kubernetesClusterId = undefined;
      this._kubernetesClusterTag = undefined;
      this._roleArn = undefined;
      this._routeTableId = undefined;
      this._subnetId = undefined;
      this._vpc = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSecurityGroupIngress = value.disableSecurityGroupIngress;
      this._disableStrictZoneCheck = value.disableStrictZoneCheck;
      this._elbSecurityGroup = value.elbSecurityGroup;
      this._kubernetesClusterId = value.kubernetesClusterId;
      this._kubernetesClusterTag = value.kubernetesClusterTag;
      this._roleArn = value.roleArn;
      this._routeTableId = value.routeTableId;
      this._subnetId = value.subnetId;
      this._vpc = value.vpc;
      this._zone = value.zone;
    }
  }

  // disable_security_group_ingress - computed: false, optional: true, required: false
  private _disableSecurityGroupIngress?: boolean | cdktf.IResolvable; 
  public get disableSecurityGroupIngress() {
    return this.getBooleanAttribute('disable_security_group_ingress');
  }
  public set disableSecurityGroupIngress(value: boolean | cdktf.IResolvable) {
    this._disableSecurityGroupIngress = value;
  }
  public resetDisableSecurityGroupIngress() {
    this._disableSecurityGroupIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecurityGroupIngressInput() {
    return this._disableSecurityGroupIngress;
  }

  // disable_strict_zone_check - computed: false, optional: true, required: false
  private _disableStrictZoneCheck?: boolean | cdktf.IResolvable; 
  public get disableStrictZoneCheck() {
    return this.getBooleanAttribute('disable_strict_zone_check');
  }
  public set disableStrictZoneCheck(value: boolean | cdktf.IResolvable) {
    this._disableStrictZoneCheck = value;
  }
  public resetDisableStrictZoneCheck() {
    this._disableStrictZoneCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStrictZoneCheckInput() {
    return this._disableStrictZoneCheck;
  }

  // elb_security_group - computed: true, optional: true, required: false
  private _elbSecurityGroup?: string; 
  public get elbSecurityGroup() {
    return this.getStringAttribute('elb_security_group');
  }
  public set elbSecurityGroup(value: string) {
    this._elbSecurityGroup = value;
  }
  public resetElbSecurityGroup() {
    this._elbSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbSecurityGroupInput() {
    return this._elbSecurityGroup;
  }

  // kubernetes_cluster_id - computed: true, optional: true, required: false
  private _kubernetesClusterId?: string; 
  public get kubernetesClusterId() {
    return this.getStringAttribute('kubernetes_cluster_id');
  }
  public set kubernetesClusterId(value: string) {
    this._kubernetesClusterId = value;
  }
  public resetKubernetesClusterId() {
    this._kubernetesClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterIdInput() {
    return this._kubernetesClusterId;
  }

  // kubernetes_cluster_tag - computed: true, optional: true, required: false
  private _kubernetesClusterTag?: string; 
  public get kubernetesClusterTag() {
    return this.getStringAttribute('kubernetes_cluster_tag');
  }
  public set kubernetesClusterTag(value: string) {
    this._kubernetesClusterTag = value;
  }
  public resetKubernetesClusterTag() {
    this._kubernetesClusterTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterTagInput() {
    return this._kubernetesClusterTag;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // subnet_id - computed: true, optional: true, required: false
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

  // vpc - computed: true, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#region ClusterTemplate#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#service ClusterTemplate#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#signing_method ClusterTemplate#signing_method}
  */
  readonly signingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#signing_name ClusterTemplate#signing_name}
  */
  readonly signingName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#signing_region ClusterTemplate#signing_region}
  */
  readonly signingRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#url ClusterTemplate#url}
  */
  readonly url?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    service: cdktf.stringToTerraform(struct!.service),
    signing_method: cdktf.stringToTerraform(struct!.signingMethod),
    signing_name: cdktf.stringToTerraform(struct!.signingName),
    signing_region: cdktf.stringToTerraform(struct!.signingRegion),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_method: {
      value: cdktf.stringToHclTerraform(struct!.signingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_name: {
      value: cdktf.stringToHclTerraform(struct!.signingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_region: {
      value: cdktf.stringToHclTerraform(struct!.signingRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._signingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingMethod = this._signingMethod;
    }
    if (this._signingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingName = this._signingName;
    }
    if (this._signingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRegion = this._signingRegion;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._service = undefined;
      this._signingMethod = undefined;
      this._signingName = undefined;
      this._signingRegion = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._service = value.service;
      this._signingMethod = value.signingMethod;
      this._signingName = value.signingName;
      this._signingRegion = value.signingRegion;
      this._url = value.url;
    }
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // signing_method - computed: true, optional: true, required: false
  private _signingMethod?: string; 
  public get signingMethod() {
    return this.getStringAttribute('signing_method');
  }
  public set signingMethod(value: string) {
    this._signingMethod = value;
  }
  public resetSigningMethod() {
    this._signingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingMethodInput() {
    return this._signingMethod;
  }

  // signing_name - computed: true, optional: true, required: false
  private _signingName?: string; 
  public get signingName() {
    return this.getStringAttribute('signing_name');
  }
  public set signingName(value: string) {
    this._signingName = value;
  }
  public resetSigningName() {
    this._signingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingNameInput() {
    return this._signingName;
  }

  // signing_region - computed: true, optional: true, required: false
  private _signingRegion?: string; 
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
  public set signingRegion(value: string) {
    this._signingRegion = value;
  }
  public resetSigningRegion() {
    this._signingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRegionInput() {
    return this._signingRegion;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideOutputReference {
    return new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider {
  /**
  * global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#global ClusterTemplate#global}
  */
  readonly global?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal;
  /**
  * service_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#service_override ClusterTemplate#service_override}
  */
  readonly serviceOverride?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride[] | cdktf.IResolvable;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalToTerraform(struct!.global),
    service_override: cdktf.listMapper(clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideToTerraform, true)(struct!.serviceOverride),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalList",
    },
    service_override: {
      value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideToHclTerraform, true)(struct!.serviceOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._serviceOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceOverride = this._serviceOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._global.internalValue = undefined;
      this._serviceOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._global.internalValue = value.global;
      this._serviceOverride.internalValue = value.serviceOverride;
    }
  }

  // global - computed: false, optional: true, required: false
  private _global = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // service_override - computed: false, optional: true, required: false
  private _serviceOverride = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideList(this, "service_override", false);
  public get serviceOverride() {
    return this._serviceOverride;
  }
  public putServiceOverride(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride[] | cdktf.IResolvable) {
    this._serviceOverride.internalValue = value;
  }
  public resetServiceOverride() {
    this._serviceOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceOverrideInput() {
    return this._serviceOverride.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#aad_client_cert_password ClusterTemplate#aad_client_cert_password}
  */
  readonly aadClientCertPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#aad_client_cert_path ClusterTemplate#aad_client_cert_path}
  */
  readonly aadClientCertPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#aad_client_id ClusterTemplate#aad_client_id}
  */
  readonly aadClientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#aad_client_secret ClusterTemplate#aad_client_secret}
  */
  readonly aadClientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud ClusterTemplate#cloud}
  */
  readonly cloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud_provider_backoff ClusterTemplate#cloud_provider_backoff}
  */
  readonly cloudProviderBackoff?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud_provider_backoff_duration ClusterTemplate#cloud_provider_backoff_duration}
  */
  readonly cloudProviderBackoffDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud_provider_backoff_exponent ClusterTemplate#cloud_provider_backoff_exponent}
  */
  readonly cloudProviderBackoffExponent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud_provider_backoff_jitter ClusterTemplate#cloud_provider_backoff_jitter}
  */
  readonly cloudProviderBackoffJitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud_provider_backoff_retries ClusterTemplate#cloud_provider_backoff_retries}
  */
  readonly cloudProviderBackoffRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud_provider_rate_limit ClusterTemplate#cloud_provider_rate_limit}
  */
  readonly cloudProviderRateLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud_provider_rate_limit_bucket ClusterTemplate#cloud_provider_rate_limit_bucket}
  */
  readonly cloudProviderRateLimitBucket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud_provider_rate_limit_qps ClusterTemplate#cloud_provider_rate_limit_qps}
  */
  readonly cloudProviderRateLimitQps?: number;
  /**
  * Load balancer type (basic | standard). Must be standard for auto-scaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#load_balancer_sku ClusterTemplate#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#location ClusterTemplate#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#maximum_load_balancer_rule_count ClusterTemplate#maximum_load_balancer_rule_count}
  */
  readonly maximumLoadBalancerRuleCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#primary_availability_set_name ClusterTemplate#primary_availability_set_name}
  */
  readonly primaryAvailabilitySetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#primary_scale_set_name ClusterTemplate#primary_scale_set_name}
  */
  readonly primaryScaleSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#resource_group ClusterTemplate#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#route_table_name ClusterTemplate#route_table_name}
  */
  readonly routeTableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#security_group_name ClusterTemplate#security_group_name}
  */
  readonly securityGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#subnet_name ClusterTemplate#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#subscription_id ClusterTemplate#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#tenant_id ClusterTemplate#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#use_instance_metadata ClusterTemplate#use_instance_metadata}
  */
  readonly useInstanceMetadata?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#use_managed_identity_extension ClusterTemplate#use_managed_identity_extension}
  */
  readonly useManagedIdentityExtension?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#vm_type ClusterTemplate#vm_type}
  */
  readonly vmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#vnet_name ClusterTemplate#vnet_name}
  */
  readonly vnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#vnet_resource_group ClusterTemplate#vnet_resource_group}
  */
  readonly vnetResourceGroup?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aad_client_cert_password: cdktf.stringToTerraform(struct!.aadClientCertPassword),
    aad_client_cert_path: cdktf.stringToTerraform(struct!.aadClientCertPath),
    aad_client_id: cdktf.stringToTerraform(struct!.aadClientId),
    aad_client_secret: cdktf.stringToTerraform(struct!.aadClientSecret),
    cloud: cdktf.stringToTerraform(struct!.cloud),
    cloud_provider_backoff: cdktf.booleanToTerraform(struct!.cloudProviderBackoff),
    cloud_provider_backoff_duration: cdktf.numberToTerraform(struct!.cloudProviderBackoffDuration),
    cloud_provider_backoff_exponent: cdktf.numberToTerraform(struct!.cloudProviderBackoffExponent),
    cloud_provider_backoff_jitter: cdktf.numberToTerraform(struct!.cloudProviderBackoffJitter),
    cloud_provider_backoff_retries: cdktf.numberToTerraform(struct!.cloudProviderBackoffRetries),
    cloud_provider_rate_limit: cdktf.booleanToTerraform(struct!.cloudProviderRateLimit),
    cloud_provider_rate_limit_bucket: cdktf.numberToTerraform(struct!.cloudProviderRateLimitBucket),
    cloud_provider_rate_limit_qps: cdktf.numberToTerraform(struct!.cloudProviderRateLimitQps),
    load_balancer_sku: cdktf.stringToTerraform(struct!.loadBalancerSku),
    location: cdktf.stringToTerraform(struct!.location),
    maximum_load_balancer_rule_count: cdktf.numberToTerraform(struct!.maximumLoadBalancerRuleCount),
    primary_availability_set_name: cdktf.stringToTerraform(struct!.primaryAvailabilitySetName),
    primary_scale_set_name: cdktf.stringToTerraform(struct!.primaryScaleSetName),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    route_table_name: cdktf.stringToTerraform(struct!.routeTableName),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    use_instance_metadata: cdktf.booleanToTerraform(struct!.useInstanceMetadata),
    use_managed_identity_extension: cdktf.booleanToTerraform(struct!.useManagedIdentityExtension),
    vm_type: cdktf.stringToTerraform(struct!.vmType),
    vnet_name: cdktf.stringToTerraform(struct!.vnetName),
    vnet_resource_group: cdktf.stringToTerraform(struct!.vnetResourceGroup),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aad_client_cert_password: {
      value: cdktf.stringToHclTerraform(struct!.aadClientCertPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_client_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.aadClientCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_client_id: {
      value: cdktf.stringToHclTerraform(struct!.aadClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.aadClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud: {
      value: cdktf.stringToHclTerraform(struct!.cloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_provider_backoff: {
      value: cdktf.booleanToHclTerraform(struct!.cloudProviderBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_provider_backoff_duration: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_backoff_exponent: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffExponent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_backoff_jitter: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_backoff_retries: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderBackoffRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_rate_limit: {
      value: cdktf.booleanToHclTerraform(struct!.cloudProviderRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_provider_rate_limit_bucket: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderRateLimitBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_provider_rate_limit_qps: {
      value: cdktf.numberToHclTerraform(struct!.cloudProviderRateLimitQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_balancer_sku: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_load_balancer_rule_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumLoadBalancerRuleCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_availability_set_name: {
      value: cdktf.stringToHclTerraform(struct!.primaryAvailabilitySetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_scale_set_name: {
      value: cdktf.stringToHclTerraform(struct!.primaryScaleSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_table_name: {
      value: cdktf.stringToHclTerraform(struct!.routeTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_instance_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.useInstanceMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_managed_identity_extension: {
      value: cdktf.booleanToHclTerraform(struct!.useManagedIdentityExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_type: {
      value: cdktf.stringToHclTerraform(struct!.vmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aadClientCertPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientCertPassword = this._aadClientCertPassword;
    }
    if (this._aadClientCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientCertPath = this._aadClientCertPath;
    }
    if (this._aadClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientId = this._aadClientId;
    }
    if (this._aadClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientSecret = this._aadClientSecret;
    }
    if (this._cloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud;
    }
    if (this._cloudProviderBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoff = this._cloudProviderBackoff;
    }
    if (this._cloudProviderBackoffDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffDuration = this._cloudProviderBackoffDuration;
    }
    if (this._cloudProviderBackoffExponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffExponent = this._cloudProviderBackoffExponent;
    }
    if (this._cloudProviderBackoffJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffJitter = this._cloudProviderBackoffJitter;
    }
    if (this._cloudProviderBackoffRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderBackoffRetries = this._cloudProviderBackoffRetries;
    }
    if (this._cloudProviderRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderRateLimit = this._cloudProviderRateLimit;
    }
    if (this._cloudProviderRateLimitBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderRateLimitBucket = this._cloudProviderRateLimitBucket;
    }
    if (this._cloudProviderRateLimitQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderRateLimitQps = this._cloudProviderRateLimitQps;
    }
    if (this._loadBalancerSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSku = this._loadBalancerSku;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._maximumLoadBalancerRuleCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLoadBalancerRuleCount = this._maximumLoadBalancerRuleCount;
    }
    if (this._primaryAvailabilitySetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryAvailabilitySetName = this._primaryAvailabilitySetName;
    }
    if (this._primaryScaleSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryScaleSetName = this._primaryScaleSetName;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._routeTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableName = this._routeTableName;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._useInstanceMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInstanceMetadata = this._useInstanceMetadata;
    }
    if (this._useManagedIdentityExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.useManagedIdentityExtension = this._useManagedIdentityExtension;
    }
    if (this._vmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmType = this._vmType;
    }
    if (this._vnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetName = this._vnetName;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aadClientCertPassword = undefined;
      this._aadClientCertPath = undefined;
      this._aadClientId = undefined;
      this._aadClientSecret = undefined;
      this._cloud = undefined;
      this._cloudProviderBackoff = undefined;
      this._cloudProviderBackoffDuration = undefined;
      this._cloudProviderBackoffExponent = undefined;
      this._cloudProviderBackoffJitter = undefined;
      this._cloudProviderBackoffRetries = undefined;
      this._cloudProviderRateLimit = undefined;
      this._cloudProviderRateLimitBucket = undefined;
      this._cloudProviderRateLimitQps = undefined;
      this._loadBalancerSku = undefined;
      this._location = undefined;
      this._maximumLoadBalancerRuleCount = undefined;
      this._primaryAvailabilitySetName = undefined;
      this._primaryScaleSetName = undefined;
      this._resourceGroup = undefined;
      this._routeTableName = undefined;
      this._securityGroupName = undefined;
      this._subnetName = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
      this._useInstanceMetadata = undefined;
      this._useManagedIdentityExtension = undefined;
      this._vmType = undefined;
      this._vnetName = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aadClientCertPassword = value.aadClientCertPassword;
      this._aadClientCertPath = value.aadClientCertPath;
      this._aadClientId = value.aadClientId;
      this._aadClientSecret = value.aadClientSecret;
      this._cloud = value.cloud;
      this._cloudProviderBackoff = value.cloudProviderBackoff;
      this._cloudProviderBackoffDuration = value.cloudProviderBackoffDuration;
      this._cloudProviderBackoffExponent = value.cloudProviderBackoffExponent;
      this._cloudProviderBackoffJitter = value.cloudProviderBackoffJitter;
      this._cloudProviderBackoffRetries = value.cloudProviderBackoffRetries;
      this._cloudProviderRateLimit = value.cloudProviderRateLimit;
      this._cloudProviderRateLimitBucket = value.cloudProviderRateLimitBucket;
      this._cloudProviderRateLimitQps = value.cloudProviderRateLimitQps;
      this._loadBalancerSku = value.loadBalancerSku;
      this._location = value.location;
      this._maximumLoadBalancerRuleCount = value.maximumLoadBalancerRuleCount;
      this._primaryAvailabilitySetName = value.primaryAvailabilitySetName;
      this._primaryScaleSetName = value.primaryScaleSetName;
      this._resourceGroup = value.resourceGroup;
      this._routeTableName = value.routeTableName;
      this._securityGroupName = value.securityGroupName;
      this._subnetName = value.subnetName;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
      this._useInstanceMetadata = value.useInstanceMetadata;
      this._useManagedIdentityExtension = value.useManagedIdentityExtension;
      this._vmType = value.vmType;
      this._vnetName = value.vnetName;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // aad_client_cert_password - computed: true, optional: true, required: false
  private _aadClientCertPassword?: string; 
  public get aadClientCertPassword() {
    return this.getStringAttribute('aad_client_cert_password');
  }
  public set aadClientCertPassword(value: string) {
    this._aadClientCertPassword = value;
  }
  public resetAadClientCertPassword() {
    this._aadClientCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientCertPasswordInput() {
    return this._aadClientCertPassword;
  }

  // aad_client_cert_path - computed: true, optional: true, required: false
  private _aadClientCertPath?: string; 
  public get aadClientCertPath() {
    return this.getStringAttribute('aad_client_cert_path');
  }
  public set aadClientCertPath(value: string) {
    this._aadClientCertPath = value;
  }
  public resetAadClientCertPath() {
    this._aadClientCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientCertPathInput() {
    return this._aadClientCertPath;
  }

  // aad_client_id - computed: false, optional: false, required: true
  private _aadClientId?: string; 
  public get aadClientId() {
    return this.getStringAttribute('aad_client_id');
  }
  public set aadClientId(value: string) {
    this._aadClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientIdInput() {
    return this._aadClientId;
  }

  // aad_client_secret - computed: false, optional: false, required: true
  private _aadClientSecret?: string; 
  public get aadClientSecret() {
    return this.getStringAttribute('aad_client_secret');
  }
  public set aadClientSecret(value: string) {
    this._aadClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientSecretInput() {
    return this._aadClientSecret;
  }

  // cloud - computed: true, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // cloud_provider_backoff - computed: true, optional: true, required: false
  private _cloudProviderBackoff?: boolean | cdktf.IResolvable; 
  public get cloudProviderBackoff() {
    return this.getBooleanAttribute('cloud_provider_backoff');
  }
  public set cloudProviderBackoff(value: boolean | cdktf.IResolvable) {
    this._cloudProviderBackoff = value;
  }
  public resetCloudProviderBackoff() {
    this._cloudProviderBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffInput() {
    return this._cloudProviderBackoff;
  }

  // cloud_provider_backoff_duration - computed: true, optional: true, required: false
  private _cloudProviderBackoffDuration?: number; 
  public get cloudProviderBackoffDuration() {
    return this.getNumberAttribute('cloud_provider_backoff_duration');
  }
  public set cloudProviderBackoffDuration(value: number) {
    this._cloudProviderBackoffDuration = value;
  }
  public resetCloudProviderBackoffDuration() {
    this._cloudProviderBackoffDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffDurationInput() {
    return this._cloudProviderBackoffDuration;
  }

  // cloud_provider_backoff_exponent - computed: true, optional: true, required: false
  private _cloudProviderBackoffExponent?: number; 
  public get cloudProviderBackoffExponent() {
    return this.getNumberAttribute('cloud_provider_backoff_exponent');
  }
  public set cloudProviderBackoffExponent(value: number) {
    this._cloudProviderBackoffExponent = value;
  }
  public resetCloudProviderBackoffExponent() {
    this._cloudProviderBackoffExponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffExponentInput() {
    return this._cloudProviderBackoffExponent;
  }

  // cloud_provider_backoff_jitter - computed: true, optional: true, required: false
  private _cloudProviderBackoffJitter?: number; 
  public get cloudProviderBackoffJitter() {
    return this.getNumberAttribute('cloud_provider_backoff_jitter');
  }
  public set cloudProviderBackoffJitter(value: number) {
    this._cloudProviderBackoffJitter = value;
  }
  public resetCloudProviderBackoffJitter() {
    this._cloudProviderBackoffJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffJitterInput() {
    return this._cloudProviderBackoffJitter;
  }

  // cloud_provider_backoff_retries - computed: true, optional: true, required: false
  private _cloudProviderBackoffRetries?: number; 
  public get cloudProviderBackoffRetries() {
    return this.getNumberAttribute('cloud_provider_backoff_retries');
  }
  public set cloudProviderBackoffRetries(value: number) {
    this._cloudProviderBackoffRetries = value;
  }
  public resetCloudProviderBackoffRetries() {
    this._cloudProviderBackoffRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderBackoffRetriesInput() {
    return this._cloudProviderBackoffRetries;
  }

  // cloud_provider_rate_limit - computed: true, optional: true, required: false
  private _cloudProviderRateLimit?: boolean | cdktf.IResolvable; 
  public get cloudProviderRateLimit() {
    return this.getBooleanAttribute('cloud_provider_rate_limit');
  }
  public set cloudProviderRateLimit(value: boolean | cdktf.IResolvable) {
    this._cloudProviderRateLimit = value;
  }
  public resetCloudProviderRateLimit() {
    this._cloudProviderRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderRateLimitInput() {
    return this._cloudProviderRateLimit;
  }

  // cloud_provider_rate_limit_bucket - computed: true, optional: true, required: false
  private _cloudProviderRateLimitBucket?: number; 
  public get cloudProviderRateLimitBucket() {
    return this.getNumberAttribute('cloud_provider_rate_limit_bucket');
  }
  public set cloudProviderRateLimitBucket(value: number) {
    this._cloudProviderRateLimitBucket = value;
  }
  public resetCloudProviderRateLimitBucket() {
    this._cloudProviderRateLimitBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderRateLimitBucketInput() {
    return this._cloudProviderRateLimitBucket;
  }

  // cloud_provider_rate_limit_qps - computed: true, optional: true, required: false
  private _cloudProviderRateLimitQps?: number; 
  public get cloudProviderRateLimitQps() {
    return this.getNumberAttribute('cloud_provider_rate_limit_qps');
  }
  public set cloudProviderRateLimitQps(value: number) {
    this._cloudProviderRateLimitQps = value;
  }
  public resetCloudProviderRateLimitQps() {
    this._cloudProviderRateLimitQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderRateLimitQpsInput() {
    return this._cloudProviderRateLimitQps;
  }

  // load_balancer_sku - computed: false, optional: true, required: false
  private _loadBalancerSku?: string; 
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }
  public set loadBalancerSku(value: string) {
    this._loadBalancerSku = value;
  }
  public resetLoadBalancerSku() {
    this._loadBalancerSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSkuInput() {
    return this._loadBalancerSku;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // maximum_load_balancer_rule_count - computed: true, optional: true, required: false
  private _maximumLoadBalancerRuleCount?: number; 
  public get maximumLoadBalancerRuleCount() {
    return this.getNumberAttribute('maximum_load_balancer_rule_count');
  }
  public set maximumLoadBalancerRuleCount(value: number) {
    this._maximumLoadBalancerRuleCount = value;
  }
  public resetMaximumLoadBalancerRuleCount() {
    this._maximumLoadBalancerRuleCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLoadBalancerRuleCountInput() {
    return this._maximumLoadBalancerRuleCount;
  }

  // primary_availability_set_name - computed: true, optional: true, required: false
  private _primaryAvailabilitySetName?: string; 
  public get primaryAvailabilitySetName() {
    return this.getStringAttribute('primary_availability_set_name');
  }
  public set primaryAvailabilitySetName(value: string) {
    this._primaryAvailabilitySetName = value;
  }
  public resetPrimaryAvailabilitySetName() {
    this._primaryAvailabilitySetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryAvailabilitySetNameInput() {
    return this._primaryAvailabilitySetName;
  }

  // primary_scale_set_name - computed: true, optional: true, required: false
  private _primaryScaleSetName?: string; 
  public get primaryScaleSetName() {
    return this.getStringAttribute('primary_scale_set_name');
  }
  public set primaryScaleSetName(value: string) {
    this._primaryScaleSetName = value;
  }
  public resetPrimaryScaleSetName() {
    this._primaryScaleSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryScaleSetNameInput() {
    return this._primaryScaleSetName;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // route_table_name - computed: true, optional: true, required: false
  private _routeTableName?: string; 
  public get routeTableName() {
    return this.getStringAttribute('route_table_name');
  }
  public set routeTableName(value: string) {
    this._routeTableName = value;
  }
  public resetRouteTableName() {
    this._routeTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableNameInput() {
    return this._routeTableName;
  }

  // security_group_name - computed: true, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }

  // subnet_name - computed: true, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_instance_metadata - computed: true, optional: true, required: false
  private _useInstanceMetadata?: boolean | cdktf.IResolvable; 
  public get useInstanceMetadata() {
    return this.getBooleanAttribute('use_instance_metadata');
  }
  public set useInstanceMetadata(value: boolean | cdktf.IResolvable) {
    this._useInstanceMetadata = value;
  }
  public resetUseInstanceMetadata() {
    this._useInstanceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInstanceMetadataInput() {
    return this._useInstanceMetadata;
  }

  // use_managed_identity_extension - computed: true, optional: true, required: false
  private _useManagedIdentityExtension?: boolean | cdktf.IResolvable; 
  public get useManagedIdentityExtension() {
    return this.getBooleanAttribute('use_managed_identity_extension');
  }
  public set useManagedIdentityExtension(value: boolean | cdktf.IResolvable) {
    this._useManagedIdentityExtension = value;
  }
  public resetUseManagedIdentityExtension() {
    this._useManagedIdentityExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagedIdentityExtensionInput() {
    return this._useManagedIdentityExtension;
  }

  // vm_type - computed: true, optional: true, required: false
  private _vmType?: string; 
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }
  public set vmType(value: string) {
    this._vmType = value;
  }
  public resetVmType() {
    this._vmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTypeInput() {
    return this._vmType;
  }

  // vnet_name - computed: true, optional: true, required: false
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  public resetVnetName() {
    this._vnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }

  // vnet_resource_group - computed: true, optional: true, required: false
  private _vnetResourceGroup?: string; 
  public get vnetResourceGroup() {
    return this.getStringAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: string) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#bs_version ClusterTemplate#bs_version}
  */
  readonly bsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ignore_volume_az ClusterTemplate#ignore_volume_az}
  */
  readonly ignoreVolumeAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#trust_device_path ClusterTemplate#trust_device_path}
  */
  readonly trustDevicePath?: boolean | cdktf.IResolvable;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bs_version: cdktf.stringToTerraform(struct!.bsVersion),
    ignore_volume_az: cdktf.booleanToTerraform(struct!.ignoreVolumeAz),
    trust_device_path: cdktf.booleanToTerraform(struct!.trustDevicePath),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bs_version: {
      value: cdktf.stringToHclTerraform(struct!.bsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_volume_az: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreVolumeAz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_device_path: {
      value: cdktf.booleanToHclTerraform(struct!.trustDevicePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsVersion = this._bsVersion;
    }
    if (this._ignoreVolumeAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreVolumeAz = this._ignoreVolumeAz;
    }
    if (this._trustDevicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustDevicePath = this._trustDevicePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bsVersion = undefined;
      this._ignoreVolumeAz = undefined;
      this._trustDevicePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bsVersion = value.bsVersion;
      this._ignoreVolumeAz = value.ignoreVolumeAz;
      this._trustDevicePath = value.trustDevicePath;
    }
  }

  // bs_version - computed: true, optional: true, required: false
  private _bsVersion?: string; 
  public get bsVersion() {
    return this.getStringAttribute('bs_version');
  }
  public set bsVersion(value: string) {
    this._bsVersion = value;
  }
  public resetBsVersion() {
    this._bsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsVersionInput() {
    return this._bsVersion;
  }

  // ignore_volume_az - computed: true, optional: true, required: false
  private _ignoreVolumeAz?: boolean | cdktf.IResolvable; 
  public get ignoreVolumeAz() {
    return this.getBooleanAttribute('ignore_volume_az');
  }
  public set ignoreVolumeAz(value: boolean | cdktf.IResolvable) {
    this._ignoreVolumeAz = value;
  }
  public resetIgnoreVolumeAz() {
    this._ignoreVolumeAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreVolumeAzInput() {
    return this._ignoreVolumeAz;
  }

  // trust_device_path - computed: true, optional: true, required: false
  private _trustDevicePath?: boolean | cdktf.IResolvable; 
  public get trustDevicePath() {
    return this.getBooleanAttribute('trust_device_path');
  }
  public set trustDevicePath(value: boolean | cdktf.IResolvable) {
    this._trustDevicePath = value;
  }
  public resetTrustDevicePath() {
    this._trustDevicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDevicePathInput() {
    return this._trustDevicePath;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#auth_url ClusterTemplate#auth_url}
  */
  readonly authUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ca_file ClusterTemplate#ca_file}
  */
  readonly caFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#domain_id ClusterTemplate#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#domain_name ClusterTemplate#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#password ClusterTemplate#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#region ClusterTemplate#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#tenant_id ClusterTemplate#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#tenant_name ClusterTemplate#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#trust_id ClusterTemplate#trust_id}
  */
  readonly trustId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#username ClusterTemplate#username}
  */
  readonly username: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
    trust_id: cdktf.stringToTerraform(struct!.trustId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_id: {
      value: cdktf.stringToHclTerraform(struct!.trustId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    if (this._trustId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustId = this._trustId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authUrl = undefined;
      this._caFile = undefined;
      this._domainId = undefined;
      this._domainName = undefined;
      this._password = undefined;
      this._region = undefined;
      this._tenantId = undefined;
      this._tenantName = undefined;
      this._trustId = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authUrl = value.authUrl;
      this._caFile = value.caFile;
      this._domainId = value.domainId;
      this._domainName = value.domainName;
      this._password = value.password;
      this._region = value.region;
      this._tenantId = value.tenantId;
      this._tenantName = value.tenantName;
      this._trustId = value.trustId;
      this._username = value.username;
    }
  }

  // auth_url - computed: false, optional: false, required: true
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // ca_file - computed: true, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_name - computed: true, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // trust_id - computed: true, optional: true, required: false
  private _trustId?: string; 
  public get trustId() {
    return this.getStringAttribute('trust_id');
  }
  public set trustId(value: string) {
    this._trustId = value;
  }
  public resetTrustId() {
    this._trustId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIdInput() {
    return this._trustId;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#create_monitor ClusterTemplate#create_monitor}
  */
  readonly createMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#floating_network_id ClusterTemplate#floating_network_id}
  */
  readonly floatingNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#lb_method ClusterTemplate#lb_method}
  */
  readonly lbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#lb_provider ClusterTemplate#lb_provider}
  */
  readonly lbProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#lb_version ClusterTemplate#lb_version}
  */
  readonly lbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#manage_security_groups ClusterTemplate#manage_security_groups}
  */
  readonly manageSecurityGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#monitor_delay ClusterTemplate#monitor_delay}
  */
  readonly monitorDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#monitor_max_retries ClusterTemplate#monitor_max_retries}
  */
  readonly monitorMaxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#monitor_timeout ClusterTemplate#monitor_timeout}
  */
  readonly monitorTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#subnet_id ClusterTemplate#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#use_octavia ClusterTemplate#use_octavia}
  */
  readonly useOctavia?: boolean | cdktf.IResolvable;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_monitor: cdktf.booleanToTerraform(struct!.createMonitor),
    floating_network_id: cdktf.stringToTerraform(struct!.floatingNetworkId),
    lb_method: cdktf.stringToTerraform(struct!.lbMethod),
    lb_provider: cdktf.stringToTerraform(struct!.lbProvider),
    lb_version: cdktf.stringToTerraform(struct!.lbVersion),
    manage_security_groups: cdktf.booleanToTerraform(struct!.manageSecurityGroups),
    monitor_delay: cdktf.stringToTerraform(struct!.monitorDelay),
    monitor_max_retries: cdktf.numberToTerraform(struct!.monitorMaxRetries),
    monitor_timeout: cdktf.stringToTerraform(struct!.monitorTimeout),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    use_octavia: cdktf.booleanToTerraform(struct!.useOctavia),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.createMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    floating_network_id: {
      value: cdktf.stringToHclTerraform(struct!.floatingNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_method: {
      value: cdktf.stringToHclTerraform(struct!.lbMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_provider: {
      value: cdktf.stringToHclTerraform(struct!.lbProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lb_version: {
      value: cdktf.stringToHclTerraform(struct!.lbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage_security_groups: {
      value: cdktf.booleanToHclTerraform(struct!.manageSecurityGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_delay: {
      value: cdktf.stringToHclTerraform(struct!.monitorDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_max_retries: {
      value: cdktf.numberToHclTerraform(struct!.monitorMaxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_timeout: {
      value: cdktf.stringToHclTerraform(struct!.monitorTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_octavia: {
      value: cdktf.booleanToHclTerraform(struct!.useOctavia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.createMonitor = this._createMonitor;
    }
    if (this._floatingNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingNetworkId = this._floatingNetworkId;
    }
    if (this._lbMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbMethod = this._lbMethod;
    }
    if (this._lbProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbProvider = this._lbProvider;
    }
    if (this._lbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbVersion = this._lbVersion;
    }
    if (this._manageSecurityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageSecurityGroups = this._manageSecurityGroups;
    }
    if (this._monitorDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDelay = this._monitorDelay;
    }
    if (this._monitorMaxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMaxRetries = this._monitorMaxRetries;
    }
    if (this._monitorTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorTimeout = this._monitorTimeout;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._useOctavia !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOctavia = this._useOctavia;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createMonitor = undefined;
      this._floatingNetworkId = undefined;
      this._lbMethod = undefined;
      this._lbProvider = undefined;
      this._lbVersion = undefined;
      this._manageSecurityGroups = undefined;
      this._monitorDelay = undefined;
      this._monitorMaxRetries = undefined;
      this._monitorTimeout = undefined;
      this._subnetId = undefined;
      this._useOctavia = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createMonitor = value.createMonitor;
      this._floatingNetworkId = value.floatingNetworkId;
      this._lbMethod = value.lbMethod;
      this._lbProvider = value.lbProvider;
      this._lbVersion = value.lbVersion;
      this._manageSecurityGroups = value.manageSecurityGroups;
      this._monitorDelay = value.monitorDelay;
      this._monitorMaxRetries = value.monitorMaxRetries;
      this._monitorTimeout = value.monitorTimeout;
      this._subnetId = value.subnetId;
      this._useOctavia = value.useOctavia;
    }
  }

  // create_monitor - computed: true, optional: true, required: false
  private _createMonitor?: boolean | cdktf.IResolvable; 
  public get createMonitor() {
    return this.getBooleanAttribute('create_monitor');
  }
  public set createMonitor(value: boolean | cdktf.IResolvable) {
    this._createMonitor = value;
  }
  public resetCreateMonitor() {
    this._createMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMonitorInput() {
    return this._createMonitor;
  }

  // floating_network_id - computed: true, optional: true, required: false
  private _floatingNetworkId?: string; 
  public get floatingNetworkId() {
    return this.getStringAttribute('floating_network_id');
  }
  public set floatingNetworkId(value: string) {
    this._floatingNetworkId = value;
  }
  public resetFloatingNetworkId() {
    this._floatingNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingNetworkIdInput() {
    return this._floatingNetworkId;
  }

  // lb_method - computed: true, optional: true, required: false
  private _lbMethod?: string; 
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }
  public set lbMethod(value: string) {
    this._lbMethod = value;
  }
  public resetLbMethod() {
    this._lbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbMethodInput() {
    return this._lbMethod;
  }

  // lb_provider - computed: true, optional: true, required: false
  private _lbProvider?: string; 
  public get lbProvider() {
    return this.getStringAttribute('lb_provider');
  }
  public set lbProvider(value: string) {
    this._lbProvider = value;
  }
  public resetLbProvider() {
    this._lbProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbProviderInput() {
    return this._lbProvider;
  }

  // lb_version - computed: true, optional: true, required: false
  private _lbVersion?: string; 
  public get lbVersion() {
    return this.getStringAttribute('lb_version');
  }
  public set lbVersion(value: string) {
    this._lbVersion = value;
  }
  public resetLbVersion() {
    this._lbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbVersionInput() {
    return this._lbVersion;
  }

  // manage_security_groups - computed: true, optional: true, required: false
  private _manageSecurityGroups?: boolean | cdktf.IResolvable; 
  public get manageSecurityGroups() {
    return this.getBooleanAttribute('manage_security_groups');
  }
  public set manageSecurityGroups(value: boolean | cdktf.IResolvable) {
    this._manageSecurityGroups = value;
  }
  public resetManageSecurityGroups() {
    this._manageSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageSecurityGroupsInput() {
    return this._manageSecurityGroups;
  }

  // monitor_delay - computed: false, optional: true, required: false
  private _monitorDelay?: string; 
  public get monitorDelay() {
    return this.getStringAttribute('monitor_delay');
  }
  public set monitorDelay(value: string) {
    this._monitorDelay = value;
  }
  public resetMonitorDelay() {
    this._monitorDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDelayInput() {
    return this._monitorDelay;
  }

  // monitor_max_retries - computed: false, optional: true, required: false
  private _monitorMaxRetries?: number; 
  public get monitorMaxRetries() {
    return this.getNumberAttribute('monitor_max_retries');
  }
  public set monitorMaxRetries(value: number) {
    this._monitorMaxRetries = value;
  }
  public resetMonitorMaxRetries() {
    this._monitorMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMaxRetriesInput() {
    return this._monitorMaxRetries;
  }

  // monitor_timeout - computed: false, optional: true, required: false
  private _monitorTimeout?: string; 
  public get monitorTimeout() {
    return this.getStringAttribute('monitor_timeout');
  }
  public set monitorTimeout(value: string) {
    this._monitorTimeout = value;
  }
  public resetMonitorTimeout() {
    this._monitorTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTimeoutInput() {
    return this._monitorTimeout;
  }

  // subnet_id - computed: true, optional: true, required: false
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

  // use_octavia - computed: true, optional: true, required: false
  private _useOctavia?: boolean | cdktf.IResolvable; 
  public get useOctavia() {
    return this.getBooleanAttribute('use_octavia');
  }
  public set useOctavia(value: boolean | cdktf.IResolvable) {
    this._useOctavia = value;
  }
  public resetUseOctavia() {
    this._useOctavia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOctaviaInput() {
    return this._useOctavia;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#request_timeout ClusterTemplate#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#search_order ClusterTemplate#search_order}
  */
  readonly searchOrder?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
    search_order: cdktf.stringToTerraform(struct!.searchOrder),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_order: {
      value: cdktf.stringToHclTerraform(struct!.searchOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._searchOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchOrder = this._searchOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestTimeout = undefined;
      this._searchOrder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestTimeout = value.requestTimeout;
      this._searchOrder = value.searchOrder;
    }
  }

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // search_order - computed: true, optional: true, required: false
  private _searchOrder?: string; 
  public get searchOrder() {
    return this.getStringAttribute('search_order');
  }
  public set searchOrder(value: string) {
    this._searchOrder = value;
  }
  public resetSearchOrder() {
    this._searchOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchOrderInput() {
    return this._searchOrder;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#router_id ClusterTemplate#router_id}
  */
  readonly routerId?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routerId = value.routerId;
    }
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider {
  /**
  * block_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#block_storage ClusterTemplate#block_storage}
  */
  readonly blockStorage?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage;
  /**
  * global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#global ClusterTemplate#global}
  */
  readonly global: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#load_balancer ClusterTemplate#load_balancer}
  */
  readonly loadBalancer?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#metadata ClusterTemplate#metadata}
  */
  readonly metadata?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#route ClusterTemplate#route}
  */
  readonly route?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageToTerraform(struct!.blockStorage),
    global: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalToTerraform(struct!.global),
    load_balancer: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerToTerraform(struct!.loadBalancer),
    metadata: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataToTerraform(struct!.metadata),
    route: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteToTerraform(struct!.route),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageToHclTerraform(struct!.blockStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageList",
    },
    global: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalList",
    },
    load_balancer: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerList",
    },
    metadata: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataList",
    },
    route: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorage = this._blockStorage?.internalValue;
    }
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorage.internalValue = undefined;
      this._global.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._route.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorage.internalValue = value.blockStorage;
      this._global.internalValue = value.global;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._metadata.internalValue = value.metadata;
      this._route.internalValue = value.route;
    }
  }

  // block_storage - computed: false, optional: true, required: false
  private _blockStorage = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageOutputReference(this, "block_storage");
  public get blockStorage() {
    return this._blockStorage;
  }
  public putBlockStorage(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage) {
    this._blockStorage.internalValue = value;
  }
  public resetBlockStorage() {
    this._blockStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageInput() {
    return this._blockStorage.internalValue;
  }

  // global - computed: false, optional: false, required: true
  private _global = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal) {
    this._global.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#scsi_controller_type ClusterTemplate#scsi_controller_type}
  */
  readonly scsiControllerType?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scsi_controller_type: cdktf.stringToTerraform(struct!.scsiControllerType),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scsi_controller_type: {
      value: cdktf.stringToHclTerraform(struct!.scsiControllerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scsiControllerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsiControllerType = this._scsiControllerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scsiControllerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scsiControllerType = value.scsiControllerType;
    }
  }

  // scsi_controller_type - computed: true, optional: true, required: false
  private _scsiControllerType?: string; 
  public get scsiControllerType() {
    return this.getStringAttribute('scsi_controller_type');
  }
  public set scsiControllerType(value: string) {
    this._scsiControllerType = value;
  }
  public resetScsiControllerType() {
    this._scsiControllerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsiControllerTypeInput() {
    return this._scsiControllerType;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#datacenters ClusterTemplate#datacenters}
  */
  readonly datacenters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#graceful_shutdown_timeout ClusterTemplate#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#insecure_flag ClusterTemplate#insecure_flag}
  */
  readonly insecureFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#password ClusterTemplate#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#port ClusterTemplate#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#soap_roundtrip_count ClusterTemplate#soap_roundtrip_count}
  */
  readonly soapRoundtripCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#user ClusterTemplate#user}
  */
  readonly user?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.stringToTerraform(struct!.datacenters),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    insecure_flag: cdktf.booleanToTerraform(struct!.insecureFlag),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    soap_roundtrip_count: cdktf.numberToTerraform(struct!.soapRoundtripCount),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenters: {
      value: cdktf.stringToHclTerraform(struct!.datacenters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_flag: {
      value: cdktf.booleanToHclTerraform(struct!.insecureFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soap_roundtrip_count: {
      value: cdktf.numberToHclTerraform(struct!.soapRoundtripCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._insecureFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureFlag = this._insecureFlag;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._soapRoundtripCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.soapRoundtripCount = this._soapRoundtripCount;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenters = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._insecureFlag = undefined;
      this._password = undefined;
      this._port = undefined;
      this._soapRoundtripCount = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenters = value.datacenters;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._insecureFlag = value.insecureFlag;
      this._password = value.password;
      this._port = value.port;
      this._soapRoundtripCount = value.soapRoundtripCount;
      this._user = value.user;
    }
  }

  // datacenters - computed: true, optional: true, required: false
  private _datacenters?: string; 
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }
  public set datacenters(value: string) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // insecure_flag - computed: true, optional: true, required: false
  private _insecureFlag?: boolean | cdktf.IResolvable; 
  public get insecureFlag() {
    return this.getBooleanAttribute('insecure_flag');
  }
  public set insecureFlag(value: boolean | cdktf.IResolvable) {
    this._insecureFlag = value;
  }
  public resetInsecureFlag() {
    this._insecureFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureFlagInput() {
    return this._insecureFlag;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // soap_roundtrip_count - computed: true, optional: true, required: false
  private _soapRoundtripCount?: number; 
  public get soapRoundtripCount() {
    return this.getNumberAttribute('soap_roundtrip_count');
  }
  public set soapRoundtripCount(value: number) {
    this._soapRoundtripCount = value;
  }
  public resetSoapRoundtripCount() {
    this._soapRoundtripCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapRoundtripCountInput() {
    return this._soapRoundtripCount;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#public_network ClusterTemplate#public_network}
  */
  readonly publicNetwork?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_network: cdktf.stringToTerraform(struct!.publicNetwork),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_network: {
      value: cdktf.stringToHclTerraform(struct!.publicNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetwork = this._publicNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicNetwork = value.publicNetwork;
    }
  }

  // public_network - computed: true, optional: true, required: false
  private _publicNetwork?: string; 
  public get publicNetwork() {
    return this.getStringAttribute('public_network');
  }
  public set publicNetwork(value: string) {
    this._publicNetwork = value;
  }
  public resetPublicNetwork() {
    this._publicNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkInput() {
    return this._publicNetwork;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#datacenters ClusterTemplate#datacenters}
  */
  readonly datacenters: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#name ClusterTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#password ClusterTemplate#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#port ClusterTemplate#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#soap_roundtrip_count ClusterTemplate#soap_roundtrip_count}
  */
  readonly soapRoundtripCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#user ClusterTemplate#user}
  */
  readonly user: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.stringToTerraform(struct!.datacenters),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    soap_roundtrip_count: cdktf.numberToTerraform(struct!.soapRoundtripCount),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenters: {
      value: cdktf.stringToHclTerraform(struct!.datacenters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soap_roundtrip_count: {
      value: cdktf.numberToHclTerraform(struct!.soapRoundtripCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._soapRoundtripCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.soapRoundtripCount = this._soapRoundtripCount;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenters = undefined;
      this._name = undefined;
      this._password = undefined;
      this._port = undefined;
      this._soapRoundtripCount = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenters = value.datacenters;
      this._name = value.name;
      this._password = value.password;
      this._port = value.port;
      this._soapRoundtripCount = value.soapRoundtripCount;
      this._user = value.user;
    }
  }

  // datacenters - computed: false, optional: false, required: true
  private _datacenters?: string; 
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }
  public set datacenters(value: string) {
    this._datacenters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // soap_roundtrip_count - computed: true, optional: true, required: false
  private _soapRoundtripCount?: number; 
  public get soapRoundtripCount() {
    return this.getNumberAttribute('soap_roundtrip_count');
  }
  public set soapRoundtripCount(value: number) {
    this._soapRoundtripCount = value;
  }
  public resetSoapRoundtripCount() {
    this._soapRoundtripCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapRoundtripCountInput() {
    return this._soapRoundtripCount;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterOutputReference {
    return new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#datacenter ClusterTemplate#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#default_datastore ClusterTemplate#default_datastore}
  */
  readonly defaultDatastore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#folder ClusterTemplate#folder}
  */
  readonly folder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#resourcepool_path ClusterTemplate#resourcepool_path}
  */
  readonly resourcepoolPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#server ClusterTemplate#server}
  */
  readonly server: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    default_datastore: cdktf.stringToTerraform(struct!.defaultDatastore),
    folder: cdktf.stringToTerraform(struct!.folder),
    resourcepool_path: cdktf.stringToTerraform(struct!.resourcepoolPath),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_datastore: {
      value: cdktf.stringToHclTerraform(struct!.defaultDatastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcepool_path: {
      value: cdktf.stringToHclTerraform(struct!.resourcepoolPath),
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

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._defaultDatastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatastore = this._defaultDatastore;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._resourcepoolPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcepoolPath = this._resourcepoolPath;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenter = undefined;
      this._defaultDatastore = undefined;
      this._folder = undefined;
      this._resourcepoolPath = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenter = value.datacenter;
      this._defaultDatastore = value.defaultDatastore;
      this._folder = value.folder;
      this._resourcepoolPath = value.resourcepoolPath;
      this._server = value.server;
    }
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // default_datastore - computed: true, optional: true, required: false
  private _defaultDatastore?: string; 
  public get defaultDatastore() {
    return this.getStringAttribute('default_datastore');
  }
  public set defaultDatastore(value: string) {
    this._defaultDatastore = value;
  }
  public resetDefaultDatastore() {
    this._defaultDatastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatastoreInput() {
    return this._defaultDatastore;
  }

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // resourcepool_path - computed: true, optional: true, required: false
  private _resourcepoolPath?: string; 
  public get resourcepoolPath() {
    return this.getStringAttribute('resourcepool_path');
  }
  public set resourcepoolPath(value: string) {
    this._resourcepoolPath = value;
  }
  public resetResourcepoolPath() {
    this._resourcepoolPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcepoolPathInput() {
    return this._resourcepoolPath;
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
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#disk ClusterTemplate#disk}
  */
  readonly disk?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk;
  /**
  * global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#global ClusterTemplate#global}
  */
  readonly global?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#network ClusterTemplate#network}
  */
  readonly network?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork;
  /**
  * virtual_center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#virtual_center ClusterTemplate#virtual_center}
  */
  readonly virtualCenter: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter[] | cdktf.IResolvable;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#workspace ClusterTemplate#workspace}
  */
  readonly workspace: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskToTerraform(struct!.disk),
    global: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalToTerraform(struct!.global),
    network: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkToTerraform(struct!.network),
    virtual_center: cdktf.listMapper(clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterToTerraform, true)(struct!.virtualCenter),
    workspace: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceToTerraform(struct!.workspace),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskToHclTerraform(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskList",
    },
    global: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalList",
    },
    network: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkList",
    },
    virtual_center: {
      value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterToHclTerraform, true)(struct!.virtualCenter),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterList",
    },
    workspace: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._virtualCenter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualCenter = this._virtualCenter?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disk.internalValue = undefined;
      this._global.internalValue = undefined;
      this._network.internalValue = undefined;
      this._virtualCenter.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disk.internalValue = value.disk;
      this._global.internalValue = value.global;
      this._network.internalValue = value.network;
      this._virtualCenter.internalValue = value.virtualCenter;
      this._workspace.internalValue = value.workspace;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // global - computed: false, optional: true, required: false
  private _global = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // virtual_center - computed: false, optional: false, required: true
  private _virtualCenter = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterList(this, "virtual_center", false);
  public get virtualCenter() {
    return this._virtualCenter;
  }
  public putVirtualCenter(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter[] | cdktf.IResolvable) {
    this._virtualCenter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualCenterInput() {
    return this._virtualCenter.internalValue;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace) {
    this._workspace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#custom_cloud_provider ClusterTemplate#custom_cloud_provider}
  */
  readonly customCloudProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#name ClusterTemplate#name}
  */
  readonly name?: string;
  /**
  * aws_cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#aws_cloud_provider ClusterTemplate#aws_cloud_provider}
  */
  readonly awsCloudProvider?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider;
  /**
  * azure_cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#azure_cloud_provider ClusterTemplate#azure_cloud_provider}
  */
  readonly azureCloudProvider?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider;
  /**
  * openstack_cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#openstack_cloud_provider ClusterTemplate#openstack_cloud_provider}
  */
  readonly openstackCloudProvider?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider;
  /**
  * vsphere_cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#vsphere_cloud_provider ClusterTemplate#vsphere_cloud_provider}
  */
  readonly vsphereCloudProvider?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_cloud_provider: cdktf.stringToTerraform(struct!.customCloudProvider),
    name: cdktf.stringToTerraform(struct!.name),
    aws_cloud_provider: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderToTerraform(struct!.awsCloudProvider),
    azure_cloud_provider: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderToTerraform(struct!.azureCloudProvider),
    openstack_cloud_provider: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderToTerraform(struct!.openstackCloudProvider),
    vsphere_cloud_provider: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderToTerraform(struct!.vsphereCloudProvider),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.customCloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_cloud_provider: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderToHclTerraform(struct!.awsCloudProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderList",
    },
    azure_cloud_provider: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderToHclTerraform(struct!.azureCloudProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderList",
    },
    openstack_cloud_provider: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderToHclTerraform(struct!.openstackCloudProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderList",
    },
    vsphere_cloud_provider: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderToHclTerraform(struct!.vsphereCloudProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCloudProvider = this._customCloudProvider;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._awsCloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCloudProvider = this._awsCloudProvider?.internalValue;
    }
    if (this._azureCloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCloudProvider = this._azureCloudProvider?.internalValue;
    }
    if (this._openstackCloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openstackCloudProvider = this._openstackCloudProvider?.internalValue;
    }
    if (this._vsphereCloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereCloudProvider = this._vsphereCloudProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customCloudProvider = undefined;
      this._name = undefined;
      this._awsCloudProvider.internalValue = undefined;
      this._azureCloudProvider.internalValue = undefined;
      this._openstackCloudProvider.internalValue = undefined;
      this._vsphereCloudProvider.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customCloudProvider = value.customCloudProvider;
      this._name = value.name;
      this._awsCloudProvider.internalValue = value.awsCloudProvider;
      this._azureCloudProvider.internalValue = value.azureCloudProvider;
      this._openstackCloudProvider.internalValue = value.openstackCloudProvider;
      this._vsphereCloudProvider.internalValue = value.vsphereCloudProvider;
    }
  }

  // custom_cloud_provider - computed: true, optional: true, required: false
  private _customCloudProvider?: string; 
  public get customCloudProvider() {
    return this.getStringAttribute('custom_cloud_provider');
  }
  public set customCloudProvider(value: string) {
    this._customCloudProvider = value;
  }
  public resetCustomCloudProvider() {
    this._customCloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCloudProviderInput() {
    return this._customCloudProvider;
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

  // aws_cloud_provider - computed: false, optional: true, required: false
  private _awsCloudProvider = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderOutputReference(this, "aws_cloud_provider");
  public get awsCloudProvider() {
    return this._awsCloudProvider;
  }
  public putAwsCloudProvider(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider) {
    this._awsCloudProvider.internalValue = value;
  }
  public resetAwsCloudProvider() {
    this._awsCloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudProviderInput() {
    return this._awsCloudProvider.internalValue;
  }

  // azure_cloud_provider - computed: false, optional: true, required: false
  private _azureCloudProvider = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderOutputReference(this, "azure_cloud_provider");
  public get azureCloudProvider() {
    return this._azureCloudProvider;
  }
  public putAzureCloudProvider(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider) {
    this._azureCloudProvider.internalValue = value;
  }
  public resetAzureCloudProvider() {
    this._azureCloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCloudProviderInput() {
    return this._azureCloudProvider.internalValue;
  }

  // openstack_cloud_provider - computed: false, optional: true, required: false
  private _openstackCloudProvider = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderOutputReference(this, "openstack_cloud_provider");
  public get openstackCloudProvider() {
    return this._openstackCloudProvider;
  }
  public putOpenstackCloudProvider(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider) {
    this._openstackCloudProvider.internalValue = value;
  }
  public resetOpenstackCloudProvider() {
    this._openstackCloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackCloudProviderInput() {
    return this._openstackCloudProvider.internalValue;
  }

  // vsphere_cloud_provider - computed: false, optional: true, required: false
  private _vsphereCloudProvider = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderOutputReference(this, "vsphere_cloud_provider");
  public get vsphereCloudProvider() {
    return this._vsphereCloudProvider;
  }
  public putVsphereCloudProvider(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider) {
    this._vsphereCloudProvider.internalValue = value;
  }
  public resetVsphereCloudProvider() {
    this._vsphereCloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereCloudProviderInput() {
    return this._vsphereCloudProvider.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cores_per_replica ClusterTemplate#cores_per_replica}
  */
  readonly coresPerReplica?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max ClusterTemplate#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#min ClusterTemplate#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#nodes_per_replica ClusterTemplate#nodes_per_replica}
  */
  readonly nodesPerReplica?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#prevent_single_point_failure ClusterTemplate#prevent_single_point_failure}
  */
  readonly preventSinglePointFailure?: boolean | cdktf.IResolvable;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cores_per_replica: cdktf.numberToTerraform(struct!.coresPerReplica),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    nodes_per_replica: cdktf.numberToTerraform(struct!.nodesPerReplica),
    prevent_single_point_failure: cdktf.booleanToTerraform(struct!.preventSinglePointFailure),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cores_per_replica: {
      value: cdktf.numberToHclTerraform(struct!.coresPerReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nodes_per_replica: {
      value: cdktf.numberToHclTerraform(struct!.nodesPerReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prevent_single_point_failure: {
      value: cdktf.booleanToHclTerraform(struct!.preventSinglePointFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coresPerReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.coresPerReplica = this._coresPerReplica;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._nodesPerReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodesPerReplica = this._nodesPerReplica;
    }
    if (this._preventSinglePointFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventSinglePointFailure = this._preventSinglePointFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coresPerReplica = undefined;
      this._max = undefined;
      this._min = undefined;
      this._nodesPerReplica = undefined;
      this._preventSinglePointFailure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coresPerReplica = value.coresPerReplica;
      this._max = value.max;
      this._min = value.min;
      this._nodesPerReplica = value.nodesPerReplica;
      this._preventSinglePointFailure = value.preventSinglePointFailure;
    }
  }

  // cores_per_replica - computed: false, optional: true, required: false
  private _coresPerReplica?: number; 
  public get coresPerReplica() {
    return this.getNumberAttribute('cores_per_replica');
  }
  public set coresPerReplica(value: number) {
    this._coresPerReplica = value;
  }
  public resetCoresPerReplica() {
    this._coresPerReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresPerReplicaInput() {
    return this._coresPerReplica;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // nodes_per_replica - computed: false, optional: true, required: false
  private _nodesPerReplica?: number; 
  public get nodesPerReplica() {
    return this.getNumberAttribute('nodes_per_replica');
  }
  public set nodesPerReplica(value: number) {
    this._nodesPerReplica = value;
  }
  public resetNodesPerReplica() {
    this._nodesPerReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesPerReplicaInput() {
    return this._nodesPerReplica;
  }

  // prevent_single_point_failure - computed: false, optional: true, required: false
  private _preventSinglePointFailure?: boolean | cdktf.IResolvable; 
  public get preventSinglePointFailure() {
    return this.getBooleanAttribute('prevent_single_point_failure');
  }
  public set preventSinglePointFailure(value: boolean | cdktf.IResolvable) {
    this._preventSinglePointFailure = value;
  }
  public resetPreventSinglePointFailure() {
    this._preventSinglePointFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventSinglePointFailureInput() {
    return this._preventSinglePointFailure;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ip_address ClusterTemplate#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Node selector key pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#node_selector ClusterTemplate#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._nodeSelector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddress = value.ipAddress;
      this._nodeSelector = value.nodeSelector;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#effect ClusterTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#key ClusterTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#operator ClusterTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#seconds ClusterTemplate#seconds}
  */
  readonly seconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#value ClusterTemplate#value}
  */
  readonly value?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._seconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._seconds = value.seconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
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

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsOutputReference {
    return new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate {
  /**
  * Rolling update max surge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_surge ClusterTemplate#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * Rolling update max unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_unavailable ClusterTemplate#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy {
  /**
  * Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#strategy ClusterTemplate#strategy}
  */
  readonly strategy?: string;
  /**
  * rolling_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#rolling_update ClusterTemplate#rolling_update}
  */
  readonly rollingUpdate?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
    rolling_update: clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolling_update: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strategy = undefined;
      this._rollingUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strategy = value.strategy;
      this._rollingUpdate.internalValue = value.rollingUpdate;
    }
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#node_selector ClusterTemplate#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#options ClusterTemplate#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#provider ClusterTemplate#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#reverse_cidrs ClusterTemplate#reverse_cidrs}
  */
  readonly reverseCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#upstream_nameservers ClusterTemplate#upstream_nameservers}
  */
  readonly upstreamNameservers?: string[];
  /**
  * linear_autoscaler_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#linear_autoscaler_params ClusterTemplate#linear_autoscaler_params}
  */
  readonly linearAutoscalerParams?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams;
  /**
  * nodelocal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#nodelocal ClusterTemplate#nodelocal}
  */
  readonly nodelocal?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#tolerations ClusterTemplate#tolerations}
  */
  readonly tolerations?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations[] | cdktf.IResolvable;
  /**
  * update_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#update_strategy ClusterTemplate#update_strategy}
  */
  readonly updateStrategy?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
    reverse_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reverseCidrs),
    upstream_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upstreamNameservers),
    linear_autoscaler_params: clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsToTerraform(struct!.linearAutoscalerParams),
    nodelocal: clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalToTerraform(struct!.nodelocal),
    tolerations: cdktf.listMapper(clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsToTerraform, true)(struct!.tolerations),
    update_strategy: clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyToTerraform(struct!.updateStrategy),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reverse_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reverseCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upstream_nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upstreamNameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    linear_autoscaler_params: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsToHclTerraform(struct!.linearAutoscalerParams),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsList",
    },
    nodelocal: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalToHclTerraform(struct!.nodelocal),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsList",
    },
    update_strategy: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._reverseCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseCidrs = this._reverseCidrs;
    }
    if (this._upstreamNameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamNameservers = this._upstreamNameservers;
    }
    if (this._linearAutoscalerParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearAutoscalerParams = this._linearAutoscalerParams?.internalValue;
    }
    if (this._nodelocal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodelocal = this._nodelocal?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelector = undefined;
      this._options = undefined;
      this._provider = undefined;
      this._reverseCidrs = undefined;
      this._upstreamNameservers = undefined;
      this._linearAutoscalerParams.internalValue = undefined;
      this._nodelocal.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._updateStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelector = value.nodeSelector;
      this._options = value.options;
      this._provider = value.provider;
      this._reverseCidrs = value.reverseCidrs;
      this._upstreamNameservers = value.upstreamNameservers;
      this._linearAutoscalerParams.internalValue = value.linearAutoscalerParams;
      this._nodelocal.internalValue = value.nodelocal;
      this._tolerations.internalValue = value.tolerations;
      this._updateStrategy.internalValue = value.updateStrategy;
    }
  }

  // node_selector - computed: true, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
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

  // reverse_cidrs - computed: true, optional: true, required: false
  private _reverseCidrs?: string[]; 
  public get reverseCidrs() {
    return this.getListAttribute('reverse_cidrs');
  }
  public set reverseCidrs(value: string[]) {
    this._reverseCidrs = value;
  }
  public resetReverseCidrs() {
    this._reverseCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseCidrsInput() {
    return this._reverseCidrs;
  }

  // upstream_nameservers - computed: true, optional: true, required: false
  private _upstreamNameservers?: string[]; 
  public get upstreamNameservers() {
    return this.getListAttribute('upstream_nameservers');
  }
  public set upstreamNameservers(value: string[]) {
    this._upstreamNameservers = value;
  }
  public resetUpstreamNameservers() {
    this._upstreamNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNameserversInput() {
    return this._upstreamNameservers;
  }

  // linear_autoscaler_params - computed: false, optional: true, required: false
  private _linearAutoscalerParams = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsOutputReference(this, "linear_autoscaler_params");
  public get linearAutoscalerParams() {
    return this._linearAutoscalerParams;
  }
  public putLinearAutoscalerParams(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams) {
    this._linearAutoscalerParams.internalValue = value;
  }
  public resetLinearAutoscalerParams() {
    this._linearAutoscalerParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearAutoscalerParamsInput() {
    return this._linearAutoscalerParams.internalValue;
  }

  // nodelocal - computed: false, optional: true, required: false
  private _nodelocal = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalOutputReference(this, "nodelocal");
  public get nodelocal() {
    return this._nodelocal;
  }
  public putNodelocal(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal) {
    this._nodelocal.internalValue = value;
  }
  public resetNodelocal() {
    this._nodelocal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodelocalInput() {
    return this._nodelocal.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#effect ClusterTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#key ClusterTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#operator ClusterTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#seconds ClusterTemplate#seconds}
  */
  readonly seconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#value ClusterTemplate#value}
  */
  readonly value?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._seconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._seconds = value.seconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
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

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsOutputReference {
    return new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate {
  /**
  * Rolling update max unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_unavailable ClusterTemplate#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy {
  /**
  * Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#strategy ClusterTemplate#strategy}
  */
  readonly strategy?: string;
  /**
  * rolling_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#rolling_update ClusterTemplate#rolling_update}
  */
  readonly rollingUpdate?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
    rolling_update: clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolling_update: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strategy = undefined;
      this._rollingUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strategy = value.strategy;
      this._rollingUpdate.internalValue = value.rollingUpdate;
    }
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#default_backend ClusterTemplate#default_backend}
  */
  readonly defaultBackend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#dns_policy ClusterTemplate#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_args ClusterTemplate#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#http_port ClusterTemplate#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#https_port ClusterTemplate#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#network_mode ClusterTemplate#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#node_selector ClusterTemplate#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#options ClusterTemplate#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#provider ClusterTemplate#provider}
  */
  readonly provider?: string;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#tolerations ClusterTemplate#tolerations}
  */
  readonly tolerations?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations[] | cdktf.IResolvable;
  /**
  * update_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#update_strategy ClusterTemplate#update_strategy}
  */
  readonly updateStrategy?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_backend: cdktf.booleanToTerraform(struct!.defaultBackend),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
    tolerations: cdktf.listMapper(clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsToTerraform, true)(struct!.tolerations),
    update_strategy: clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyToTerraform(struct!.updateStrategy),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_backend: {
      value: cdktf.booleanToHclTerraform(struct!.defaultBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsList",
    },
    update_strategy: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBackend = this._defaultBackend;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultBackend = undefined;
      this._dnsPolicy = undefined;
      this._extraArgs = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._networkMode = undefined;
      this._nodeSelector = undefined;
      this._options = undefined;
      this._provider = undefined;
      this._tolerations.internalValue = undefined;
      this._updateStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultBackend = value.defaultBackend;
      this._dnsPolicy = value.dnsPolicy;
      this._extraArgs = value.extraArgs;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._networkMode = value.networkMode;
      this._nodeSelector = value.nodeSelector;
      this._options = value.options;
      this._provider = value.provider;
      this._tolerations.internalValue = value.tolerations;
      this._updateStrategy.internalValue = value.updateStrategy;
    }
  }

  // default_backend - computed: false, optional: true, required: false
  private _defaultBackend?: boolean | cdktf.IResolvable; 
  public get defaultBackend() {
    return this.getBooleanAttribute('default_backend');
  }
  public set defaultBackend(value: boolean | cdktf.IResolvable) {
    this._defaultBackend = value;
  }
  public resetDefaultBackend() {
    this._defaultBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBackendInput() {
    return this._defaultBackend;
  }

  // dns_policy - computed: true, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: true, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // network_mode - computed: true, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // node_selector - computed: true, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // provider - computed: true, optional: true, required: false
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#effect ClusterTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#key ClusterTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#operator ClusterTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#seconds ClusterTemplate#seconds}
  */
  readonly seconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#value ClusterTemplate#value}
  */
  readonly value?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._seconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._seconds = value.seconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
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

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsOutputReference {
    return new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate {
  /**
  * Rolling update max surge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_surge ClusterTemplate#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * Rolling update max unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_unavailable ClusterTemplate#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy {
  /**
  * Strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#strategy ClusterTemplate#strategy}
  */
  readonly strategy?: string;
  /**
  * rolling_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#rolling_update ClusterTemplate#rolling_update}
  */
  readonly rollingUpdate?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
    rolling_update: clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolling_update: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strategy = undefined;
      this._rollingUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strategy = value.strategy;
      this._rollingUpdate.internalValue = value.rollingUpdate;
    }
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#node_selector ClusterTemplate#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#options ClusterTemplate#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#provider ClusterTemplate#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#replicas ClusterTemplate#replicas}
  */
  readonly replicas?: number;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#tolerations ClusterTemplate#tolerations}
  */
  readonly tolerations?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations[] | cdktf.IResolvable;
  /**
  * update_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#update_strategy ClusterTemplate#update_strategy}
  */
  readonly updateStrategy?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    provider: cdktf.stringToTerraform(struct!.provider),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    tolerations: cdktf.listMapper(clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsToTerraform, true)(struct!.tolerations),
    update_strategy: clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyToTerraform(struct!.updateStrategy),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsList",
    },
    update_strategy: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelector = undefined;
      this._options = undefined;
      this._provider = undefined;
      this._replicas = undefined;
      this._tolerations.internalValue = undefined;
      this._updateStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelector = value.nodeSelector;
      this._options = value.options;
      this._provider = value.provider;
      this._replicas = value.replicas;
      this._tolerations.internalValue = value.tolerations;
      this._updateStrategy.internalValue = value.updateStrategy;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // provider - computed: true, optional: true, required: false
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

  // replicas - computed: true, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#aep ClusterTemplate#aep}
  */
  readonly aep: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#apic_hosts ClusterTemplate#apic_hosts}
  */
  readonly apicHosts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#apic_refresh_ticker_adjust ClusterTemplate#apic_refresh_ticker_adjust}
  */
  readonly apicRefreshTickerAdjust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#apic_refresh_time ClusterTemplate#apic_refresh_time}
  */
  readonly apicRefreshTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#apic_subscription_delay ClusterTemplate#apic_subscription_delay}
  */
  readonly apicSubscriptionDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#apic_user_crt ClusterTemplate#apic_user_crt}
  */
  readonly apicUserCrt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#apic_user_key ClusterTemplate#apic_user_key}
  */
  readonly apicUserKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#apic_user_name ClusterTemplate#apic_user_name}
  */
  readonly apicUserName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#capic ClusterTemplate#capic}
  */
  readonly capic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#controller_log_level ClusterTemplate#controller_log_level}
  */
  readonly controllerLogLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#disable_periodic_snat_global_info_sync ClusterTemplate#disable_periodic_snat_global_info_sync}
  */
  readonly disablePeriodicSnatGlobalInfoSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#disable_wait_for_network ClusterTemplate#disable_wait_for_network}
  */
  readonly disableWaitForNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#drop_log_enable ClusterTemplate#drop_log_enable}
  */
  readonly dropLogEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#duration_wait_for_network ClusterTemplate#duration_wait_for_network}
  */
  readonly durationWaitForNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#enable_endpoint_slice ClusterTemplate#enable_endpoint_slice}
  */
  readonly enableEndpointSlice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#encap_type ClusterTemplate#encap_type}
  */
  readonly encapType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ep_registry ClusterTemplate#ep_registry}
  */
  readonly epRegistry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extern_dynamic ClusterTemplate#extern_dynamic}
  */
  readonly externDynamic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extern_static ClusterTemplate#extern_static}
  */
  readonly externStatic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#gbp_pod_subnet ClusterTemplate#gbp_pod_subnet}
  */
  readonly gbpPodSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#host_agent_log_level ClusterTemplate#host_agent_log_level}
  */
  readonly hostAgentLogLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#image_pull_policy ClusterTemplate#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#image_pull_secret ClusterTemplate#image_pull_secret}
  */
  readonly imagePullSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#infra_vlan ClusterTemplate#infra_vlan}
  */
  readonly infraVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#install_istio ClusterTemplate#install_istio}
  */
  readonly installIstio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#istio_profile ClusterTemplate#istio_profile}
  */
  readonly istioProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kafka_brokers ClusterTemplate#kafka_brokers}
  */
  readonly kafkaBrokers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kafka_client_crt ClusterTemplate#kafka_client_crt}
  */
  readonly kafkaClientCrt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kafka_client_key ClusterTemplate#kafka_client_key}
  */
  readonly kafkaClientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kube_api_vlan ClusterTemplate#kube_api_vlan}
  */
  readonly kubeApiVlan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#l3out ClusterTemplate#l3out}
  */
  readonly l3Out: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#l3out_external_networks ClusterTemplate#l3out_external_networks}
  */
  readonly l3OutExternalNetworks: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_nodes_svc_graph ClusterTemplate#max_nodes_svc_graph}
  */
  readonly maxNodesSvcGraph?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#mcast_range_end ClusterTemplate#mcast_range_end}
  */
  readonly mcastRangeEnd: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#mcast_range_start ClusterTemplate#mcast_range_start}
  */
  readonly mcastRangeStart: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#mtu_head_room ClusterTemplate#mtu_head_room}
  */
  readonly mtuHeadRoom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#multus_disable ClusterTemplate#multus_disable}
  */
  readonly multusDisable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#no_priority_class ClusterTemplate#no_priority_class}
  */
  readonly noPriorityClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#node_pod_if_enable ClusterTemplate#node_pod_if_enable}
  */
  readonly nodePodIfEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#node_subnet ClusterTemplate#node_subnet}
  */
  readonly nodeSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#node_svc_subnet ClusterTemplate#node_svc_subnet}
  */
  readonly nodeSvcSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#opflex_client_ssl ClusterTemplate#opflex_client_ssl}
  */
  readonly opflexClientSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#opflex_device_delete_timeout ClusterTemplate#opflex_device_delete_timeout}
  */
  readonly opflexDeviceDeleteTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#opflex_log_level ClusterTemplate#opflex_log_level}
  */
  readonly opflexLogLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#opflex_mode ClusterTemplate#opflex_mode}
  */
  readonly opflexMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#opflex_server_port ClusterTemplate#opflex_server_port}
  */
  readonly opflexServerPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#overlay_vrf_name ClusterTemplate#overlay_vrf_name}
  */
  readonly overlayVrfName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ovs_memory_limit ClusterTemplate#ovs_memory_limit}
  */
  readonly ovsMemoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#pbr_tracking_non_snat ClusterTemplate#pbr_tracking_non_snat}
  */
  readonly pbrTrackingNonSnat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#pod_subnet_chunk_size ClusterTemplate#pod_subnet_chunk_size}
  */
  readonly podSubnetChunkSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#run_gbp_container ClusterTemplate#run_gbp_container}
  */
  readonly runGbpContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#run_opflex_server_container ClusterTemplate#run_opflex_server_container}
  */
  readonly runOpflexServerContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#service_monitor_interval ClusterTemplate#service_monitor_interval}
  */
  readonly serviceMonitorInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#service_vlan ClusterTemplate#service_vlan}
  */
  readonly serviceVlan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#snat_contract_scope ClusterTemplate#snat_contract_scope}
  */
  readonly snatContractScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#snat_namespace ClusterTemplate#snat_namespace}
  */
  readonly snatNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#snat_port_range_end ClusterTemplate#snat_port_range_end}
  */
  readonly snatPortRangeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#snat_port_range_start ClusterTemplate#snat_port_range_start}
  */
  readonly snatPortRangeStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#snat_ports_per_node ClusterTemplate#snat_ports_per_node}
  */
  readonly snatPortsPerNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#sriov_enable ClusterTemplate#sriov_enable}
  */
  readonly sriovEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#subnet_domain_name ClusterTemplate#subnet_domain_name}
  */
  readonly subnetDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#system_id ClusterTemplate#system_id}
  */
  readonly systemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#tenant ClusterTemplate#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#token ClusterTemplate#token}
  */
  readonly token: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#use_aci_anywhere_crd ClusterTemplate#use_aci_anywhere_crd}
  */
  readonly useAciAnywhereCrd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#use_aci_cni_priority_class ClusterTemplate#use_aci_cni_priority_class}
  */
  readonly useAciCniPriorityClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#use_cluster_role ClusterTemplate#use_cluster_role}
  */
  readonly useClusterRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#use_host_netns_volume ClusterTemplate#use_host_netns_volume}
  */
  readonly useHostNetnsVolume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#use_opflex_server_volume ClusterTemplate#use_opflex_server_volume}
  */
  readonly useOpflexServerVolume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#use_privileged_container ClusterTemplate#use_privileged_container}
  */
  readonly usePrivilegedContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#vmm_controller ClusterTemplate#vmm_controller}
  */
  readonly vmmController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#vmm_domain ClusterTemplate#vmm_domain}
  */
  readonly vmmDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#vrf_name ClusterTemplate#vrf_name}
  */
  readonly vrfName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#vrf_tenant ClusterTemplate#vrf_tenant}
  */
  readonly vrfTenant: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aep: cdktf.stringToTerraform(struct!.aep),
    apic_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apicHosts),
    apic_refresh_ticker_adjust: cdktf.stringToTerraform(struct!.apicRefreshTickerAdjust),
    apic_refresh_time: cdktf.stringToTerraform(struct!.apicRefreshTime),
    apic_subscription_delay: cdktf.stringToTerraform(struct!.apicSubscriptionDelay),
    apic_user_crt: cdktf.stringToTerraform(struct!.apicUserCrt),
    apic_user_key: cdktf.stringToTerraform(struct!.apicUserKey),
    apic_user_name: cdktf.stringToTerraform(struct!.apicUserName),
    capic: cdktf.stringToTerraform(struct!.capic),
    controller_log_level: cdktf.stringToTerraform(struct!.controllerLogLevel),
    disable_periodic_snat_global_info_sync: cdktf.stringToTerraform(struct!.disablePeriodicSnatGlobalInfoSync),
    disable_wait_for_network: cdktf.stringToTerraform(struct!.disableWaitForNetwork),
    drop_log_enable: cdktf.stringToTerraform(struct!.dropLogEnable),
    duration_wait_for_network: cdktf.stringToTerraform(struct!.durationWaitForNetwork),
    enable_endpoint_slice: cdktf.stringToTerraform(struct!.enableEndpointSlice),
    encap_type: cdktf.stringToTerraform(struct!.encapType),
    ep_registry: cdktf.stringToTerraform(struct!.epRegistry),
    extern_dynamic: cdktf.stringToTerraform(struct!.externDynamic),
    extern_static: cdktf.stringToTerraform(struct!.externStatic),
    gbp_pod_subnet: cdktf.stringToTerraform(struct!.gbpPodSubnet),
    host_agent_log_level: cdktf.stringToTerraform(struct!.hostAgentLogLevel),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secret: cdktf.stringToTerraform(struct!.imagePullSecret),
    infra_vlan: cdktf.stringToTerraform(struct!.infraVlan),
    install_istio: cdktf.stringToTerraform(struct!.installIstio),
    istio_profile: cdktf.stringToTerraform(struct!.istioProfile),
    kafka_brokers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kafkaBrokers),
    kafka_client_crt: cdktf.stringToTerraform(struct!.kafkaClientCrt),
    kafka_client_key: cdktf.stringToTerraform(struct!.kafkaClientKey),
    kube_api_vlan: cdktf.stringToTerraform(struct!.kubeApiVlan),
    l3out: cdktf.stringToTerraform(struct!.l3Out),
    l3out_external_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.l3OutExternalNetworks),
    max_nodes_svc_graph: cdktf.stringToTerraform(struct!.maxNodesSvcGraph),
    mcast_range_end: cdktf.stringToTerraform(struct!.mcastRangeEnd),
    mcast_range_start: cdktf.stringToTerraform(struct!.mcastRangeStart),
    mtu_head_room: cdktf.stringToTerraform(struct!.mtuHeadRoom),
    multus_disable: cdktf.stringToTerraform(struct!.multusDisable),
    no_priority_class: cdktf.stringToTerraform(struct!.noPriorityClass),
    node_pod_if_enable: cdktf.stringToTerraform(struct!.nodePodIfEnable),
    node_subnet: cdktf.stringToTerraform(struct!.nodeSubnet),
    node_svc_subnet: cdktf.stringToTerraform(struct!.nodeSvcSubnet),
    opflex_client_ssl: cdktf.stringToTerraform(struct!.opflexClientSsl),
    opflex_device_delete_timeout: cdktf.stringToTerraform(struct!.opflexDeviceDeleteTimeout),
    opflex_log_level: cdktf.stringToTerraform(struct!.opflexLogLevel),
    opflex_mode: cdktf.stringToTerraform(struct!.opflexMode),
    opflex_server_port: cdktf.stringToTerraform(struct!.opflexServerPort),
    overlay_vrf_name: cdktf.stringToTerraform(struct!.overlayVrfName),
    ovs_memory_limit: cdktf.stringToTerraform(struct!.ovsMemoryLimit),
    pbr_tracking_non_snat: cdktf.stringToTerraform(struct!.pbrTrackingNonSnat),
    pod_subnet_chunk_size: cdktf.stringToTerraform(struct!.podSubnetChunkSize),
    run_gbp_container: cdktf.stringToTerraform(struct!.runGbpContainer),
    run_opflex_server_container: cdktf.stringToTerraform(struct!.runOpflexServerContainer),
    service_monitor_interval: cdktf.stringToTerraform(struct!.serviceMonitorInterval),
    service_vlan: cdktf.stringToTerraform(struct!.serviceVlan),
    snat_contract_scope: cdktf.stringToTerraform(struct!.snatContractScope),
    snat_namespace: cdktf.stringToTerraform(struct!.snatNamespace),
    snat_port_range_end: cdktf.stringToTerraform(struct!.snatPortRangeEnd),
    snat_port_range_start: cdktf.stringToTerraform(struct!.snatPortRangeStart),
    snat_ports_per_node: cdktf.stringToTerraform(struct!.snatPortsPerNode),
    sriov_enable: cdktf.stringToTerraform(struct!.sriovEnable),
    subnet_domain_name: cdktf.stringToTerraform(struct!.subnetDomainName),
    system_id: cdktf.stringToTerraform(struct!.systemId),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    token: cdktf.stringToTerraform(struct!.token),
    use_aci_anywhere_crd: cdktf.stringToTerraform(struct!.useAciAnywhereCrd),
    use_aci_cni_priority_class: cdktf.stringToTerraform(struct!.useAciCniPriorityClass),
    use_cluster_role: cdktf.stringToTerraform(struct!.useClusterRole),
    use_host_netns_volume: cdktf.stringToTerraform(struct!.useHostNetnsVolume),
    use_opflex_server_volume: cdktf.stringToTerraform(struct!.useOpflexServerVolume),
    use_privileged_container: cdktf.stringToTerraform(struct!.usePrivilegedContainer),
    vmm_controller: cdktf.stringToTerraform(struct!.vmmController),
    vmm_domain: cdktf.stringToTerraform(struct!.vmmDomain),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
    vrf_tenant: cdktf.stringToTerraform(struct!.vrfTenant),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aep: {
      value: cdktf.stringToHclTerraform(struct!.aep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apic_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apicHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    apic_refresh_ticker_adjust: {
      value: cdktf.stringToHclTerraform(struct!.apicRefreshTickerAdjust),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apic_refresh_time: {
      value: cdktf.stringToHclTerraform(struct!.apicRefreshTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apic_subscription_delay: {
      value: cdktf.stringToHclTerraform(struct!.apicSubscriptionDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apic_user_crt: {
      value: cdktf.stringToHclTerraform(struct!.apicUserCrt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apic_user_key: {
      value: cdktf.stringToHclTerraform(struct!.apicUserKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apic_user_name: {
      value: cdktf.stringToHclTerraform(struct!.apicUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capic: {
      value: cdktf.stringToHclTerraform(struct!.capic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_log_level: {
      value: cdktf.stringToHclTerraform(struct!.controllerLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_periodic_snat_global_info_sync: {
      value: cdktf.stringToHclTerraform(struct!.disablePeriodicSnatGlobalInfoSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_wait_for_network: {
      value: cdktf.stringToHclTerraform(struct!.disableWaitForNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_log_enable: {
      value: cdktf.stringToHclTerraform(struct!.dropLogEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration_wait_for_network: {
      value: cdktf.stringToHclTerraform(struct!.durationWaitForNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_endpoint_slice: {
      value: cdktf.stringToHclTerraform(struct!.enableEndpointSlice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encap_type: {
      value: cdktf.stringToHclTerraform(struct!.encapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ep_registry: {
      value: cdktf.stringToHclTerraform(struct!.epRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extern_dynamic: {
      value: cdktf.stringToHclTerraform(struct!.externDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extern_static: {
      value: cdktf.stringToHclTerraform(struct!.externStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gbp_pod_subnet: {
      value: cdktf.stringToHclTerraform(struct!.gbpPodSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_agent_log_level: {
      value: cdktf.stringToHclTerraform(struct!.hostAgentLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secret: {
      value: cdktf.stringToHclTerraform(struct!.imagePullSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infra_vlan: {
      value: cdktf.stringToHclTerraform(struct!.infraVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install_istio: {
      value: cdktf.stringToHclTerraform(struct!.installIstio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    istio_profile: {
      value: cdktf.stringToHclTerraform(struct!.istioProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_brokers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kafkaBrokers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kafka_client_crt: {
      value: cdktf.stringToHclTerraform(struct!.kafkaClientCrt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_client_key: {
      value: cdktf.stringToHclTerraform(struct!.kafkaClientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_api_vlan: {
      value: cdktf.stringToHclTerraform(struct!.kubeApiVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l3out: {
      value: cdktf.stringToHclTerraform(struct!.l3Out),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l3out_external_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.l3OutExternalNetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_nodes_svc_graph: {
      value: cdktf.stringToHclTerraform(struct!.maxNodesSvcGraph),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mcast_range_end: {
      value: cdktf.stringToHclTerraform(struct!.mcastRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mcast_range_start: {
      value: cdktf.stringToHclTerraform(struct!.mcastRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu_head_room: {
      value: cdktf.stringToHclTerraform(struct!.mtuHeadRoom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multus_disable: {
      value: cdktf.stringToHclTerraform(struct!.multusDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_priority_class: {
      value: cdktf.stringToHclTerraform(struct!.noPriorityClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_pod_if_enable: {
      value: cdktf.stringToHclTerraform(struct!.nodePodIfEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_subnet: {
      value: cdktf.stringToHclTerraform(struct!.nodeSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_svc_subnet: {
      value: cdktf.stringToHclTerraform(struct!.nodeSvcSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opflex_client_ssl: {
      value: cdktf.stringToHclTerraform(struct!.opflexClientSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opflex_device_delete_timeout: {
      value: cdktf.stringToHclTerraform(struct!.opflexDeviceDeleteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opflex_log_level: {
      value: cdktf.stringToHclTerraform(struct!.opflexLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opflex_mode: {
      value: cdktf.stringToHclTerraform(struct!.opflexMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opflex_server_port: {
      value: cdktf.stringToHclTerraform(struct!.opflexServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.overlayVrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ovs_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.ovsMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pbr_tracking_non_snat: {
      value: cdktf.stringToHclTerraform(struct!.pbrTrackingNonSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_subnet_chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.podSubnetChunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_gbp_container: {
      value: cdktf.stringToHclTerraform(struct!.runGbpContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_opflex_server_container: {
      value: cdktf.stringToHclTerraform(struct!.runOpflexServerContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_monitor_interval: {
      value: cdktf.stringToHclTerraform(struct!.serviceMonitorInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_vlan: {
      value: cdktf.stringToHclTerraform(struct!.serviceVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_contract_scope: {
      value: cdktf.stringToHclTerraform(struct!.snatContractScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_namespace: {
      value: cdktf.stringToHclTerraform(struct!.snatNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_port_range_end: {
      value: cdktf.stringToHclTerraform(struct!.snatPortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_port_range_start: {
      value: cdktf.stringToHclTerraform(struct!.snatPortRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_ports_per_node: {
      value: cdktf.stringToHclTerraform(struct!.snatPortsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sriov_enable: {
      value: cdktf.stringToHclTerraform(struct!.sriovEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_aci_anywhere_crd: {
      value: cdktf.stringToHclTerraform(struct!.useAciAnywhereCrd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_aci_cni_priority_class: {
      value: cdktf.stringToHclTerraform(struct!.useAciCniPriorityClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cluster_role: {
      value: cdktf.stringToHclTerraform(struct!.useClusterRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_host_netns_volume: {
      value: cdktf.stringToHclTerraform(struct!.useHostNetnsVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_opflex_server_volume: {
      value: cdktf.stringToHclTerraform(struct!.useOpflexServerVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_privileged_container: {
      value: cdktf.stringToHclTerraform(struct!.usePrivilegedContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmm_controller: {
      value: cdktf.stringToHclTerraform(struct!.vmmController),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmm_domain: {
      value: cdktf.stringToHclTerraform(struct!.vmmDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_tenant: {
      value: cdktf.stringToHclTerraform(struct!.vrfTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aep !== undefined) {
      hasAnyValues = true;
      internalValueResult.aep = this._aep;
    }
    if (this._apicHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicHosts = this._apicHosts;
    }
    if (this._apicRefreshTickerAdjust !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicRefreshTickerAdjust = this._apicRefreshTickerAdjust;
    }
    if (this._apicRefreshTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicRefreshTime = this._apicRefreshTime;
    }
    if (this._apicSubscriptionDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicSubscriptionDelay = this._apicSubscriptionDelay;
    }
    if (this._apicUserCrt !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicUserCrt = this._apicUserCrt;
    }
    if (this._apicUserKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicUserKey = this._apicUserKey;
    }
    if (this._apicUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicUserName = this._apicUserName;
    }
    if (this._capic !== undefined) {
      hasAnyValues = true;
      internalValueResult.capic = this._capic;
    }
    if (this._controllerLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerLogLevel = this._controllerLogLevel;
    }
    if (this._disablePeriodicSnatGlobalInfoSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePeriodicSnatGlobalInfoSync = this._disablePeriodicSnatGlobalInfoSync;
    }
    if (this._disableWaitForNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWaitForNetwork = this._disableWaitForNetwork;
    }
    if (this._dropLogEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropLogEnable = this._dropLogEnable;
    }
    if (this._durationWaitForNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationWaitForNetwork = this._durationWaitForNetwork;
    }
    if (this._enableEndpointSlice !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEndpointSlice = this._enableEndpointSlice;
    }
    if (this._encapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapType = this._encapType;
    }
    if (this._epRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.epRegistry = this._epRegistry;
    }
    if (this._externDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.externDynamic = this._externDynamic;
    }
    if (this._externStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.externStatic = this._externStatic;
    }
    if (this._gbpPodSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.gbpPodSubnet = this._gbpPodSubnet;
    }
    if (this._hostAgentLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAgentLogLevel = this._hostAgentLogLevel;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecret = this._imagePullSecret;
    }
    if (this._infraVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraVlan = this._infraVlan;
    }
    if (this._installIstio !== undefined) {
      hasAnyValues = true;
      internalValueResult.installIstio = this._installIstio;
    }
    if (this._istioProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioProfile = this._istioProfile;
    }
    if (this._kafkaBrokers !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaBrokers = this._kafkaBrokers;
    }
    if (this._kafkaClientCrt !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaClientCrt = this._kafkaClientCrt;
    }
    if (this._kafkaClientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaClientKey = this._kafkaClientKey;
    }
    if (this._kubeApiVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiVlan = this._kubeApiVlan;
    }
    if (this._l3Out !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Out = this._l3Out;
    }
    if (this._l3OutExternalNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3OutExternalNetworks = this._l3OutExternalNetworks;
    }
    if (this._maxNodesSvcGraph !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodesSvcGraph = this._maxNodesSvcGraph;
    }
    if (this._mcastRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastRangeEnd = this._mcastRangeEnd;
    }
    if (this._mcastRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastRangeStart = this._mcastRangeStart;
    }
    if (this._mtuHeadRoom !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuHeadRoom = this._mtuHeadRoom;
    }
    if (this._multusDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.multusDisable = this._multusDisable;
    }
    if (this._noPriorityClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPriorityClass = this._noPriorityClass;
    }
    if (this._nodePodIfEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePodIfEnable = this._nodePodIfEnable;
    }
    if (this._nodeSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSubnet = this._nodeSubnet;
    }
    if (this._nodeSvcSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSvcSubnet = this._nodeSvcSubnet;
    }
    if (this._opflexClientSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.opflexClientSsl = this._opflexClientSsl;
    }
    if (this._opflexDeviceDeleteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.opflexDeviceDeleteTimeout = this._opflexDeviceDeleteTimeout;
    }
    if (this._opflexLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.opflexLogLevel = this._opflexLogLevel;
    }
    if (this._opflexMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.opflexMode = this._opflexMode;
    }
    if (this._opflexServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.opflexServerPort = this._opflexServerPort;
    }
    if (this._overlayVrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayVrfName = this._overlayVrfName;
    }
    if (this._ovsMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovsMemoryLimit = this._ovsMemoryLimit;
    }
    if (this._pbrTrackingNonSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbrTrackingNonSnat = this._pbrTrackingNonSnat;
    }
    if (this._podSubnetChunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnetChunkSize = this._podSubnetChunkSize;
    }
    if (this._runGbpContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.runGbpContainer = this._runGbpContainer;
    }
    if (this._runOpflexServerContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOpflexServerContainer = this._runOpflexServerContainer;
    }
    if (this._serviceMonitorInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMonitorInterval = this._serviceMonitorInterval;
    }
    if (this._serviceVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVlan = this._serviceVlan;
    }
    if (this._snatContractScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatContractScope = this._snatContractScope;
    }
    if (this._snatNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatNamespace = this._snatNamespace;
    }
    if (this._snatPortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPortRangeEnd = this._snatPortRangeEnd;
    }
    if (this._snatPortRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPortRangeStart = this._snatPortRangeStart;
    }
    if (this._snatPortsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPortsPerNode = this._snatPortsPerNode;
    }
    if (this._sriovEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sriovEnable = this._sriovEnable;
    }
    if (this._subnetDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetDomainName = this._subnetDomainName;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._useAciAnywhereCrd !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAciAnywhereCrd = this._useAciAnywhereCrd;
    }
    if (this._useAciCniPriorityClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAciCniPriorityClass = this._useAciCniPriorityClass;
    }
    if (this._useClusterRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.useClusterRole = this._useClusterRole;
    }
    if (this._useHostNetnsVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostNetnsVolume = this._useHostNetnsVolume;
    }
    if (this._useOpflexServerVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOpflexServerVolume = this._useOpflexServerVolume;
    }
    if (this._usePrivilegedContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrivilegedContainer = this._usePrivilegedContainer;
    }
    if (this._vmmController !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmmController = this._vmmController;
    }
    if (this._vmmDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmmDomain = this._vmmDomain;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    if (this._vrfTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfTenant = this._vrfTenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aep = undefined;
      this._apicHosts = undefined;
      this._apicRefreshTickerAdjust = undefined;
      this._apicRefreshTime = undefined;
      this._apicSubscriptionDelay = undefined;
      this._apicUserCrt = undefined;
      this._apicUserKey = undefined;
      this._apicUserName = undefined;
      this._capic = undefined;
      this._controllerLogLevel = undefined;
      this._disablePeriodicSnatGlobalInfoSync = undefined;
      this._disableWaitForNetwork = undefined;
      this._dropLogEnable = undefined;
      this._durationWaitForNetwork = undefined;
      this._enableEndpointSlice = undefined;
      this._encapType = undefined;
      this._epRegistry = undefined;
      this._externDynamic = undefined;
      this._externStatic = undefined;
      this._gbpPodSubnet = undefined;
      this._hostAgentLogLevel = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecret = undefined;
      this._infraVlan = undefined;
      this._installIstio = undefined;
      this._istioProfile = undefined;
      this._kafkaBrokers = undefined;
      this._kafkaClientCrt = undefined;
      this._kafkaClientKey = undefined;
      this._kubeApiVlan = undefined;
      this._l3Out = undefined;
      this._l3OutExternalNetworks = undefined;
      this._maxNodesSvcGraph = undefined;
      this._mcastRangeEnd = undefined;
      this._mcastRangeStart = undefined;
      this._mtuHeadRoom = undefined;
      this._multusDisable = undefined;
      this._noPriorityClass = undefined;
      this._nodePodIfEnable = undefined;
      this._nodeSubnet = undefined;
      this._nodeSvcSubnet = undefined;
      this._opflexClientSsl = undefined;
      this._opflexDeviceDeleteTimeout = undefined;
      this._opflexLogLevel = undefined;
      this._opflexMode = undefined;
      this._opflexServerPort = undefined;
      this._overlayVrfName = undefined;
      this._ovsMemoryLimit = undefined;
      this._pbrTrackingNonSnat = undefined;
      this._podSubnetChunkSize = undefined;
      this._runGbpContainer = undefined;
      this._runOpflexServerContainer = undefined;
      this._serviceMonitorInterval = undefined;
      this._serviceVlan = undefined;
      this._snatContractScope = undefined;
      this._snatNamespace = undefined;
      this._snatPortRangeEnd = undefined;
      this._snatPortRangeStart = undefined;
      this._snatPortsPerNode = undefined;
      this._sriovEnable = undefined;
      this._subnetDomainName = undefined;
      this._systemId = undefined;
      this._tenant = undefined;
      this._token = undefined;
      this._useAciAnywhereCrd = undefined;
      this._useAciCniPriorityClass = undefined;
      this._useClusterRole = undefined;
      this._useHostNetnsVolume = undefined;
      this._useOpflexServerVolume = undefined;
      this._usePrivilegedContainer = undefined;
      this._vmmController = undefined;
      this._vmmDomain = undefined;
      this._vrfName = undefined;
      this._vrfTenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aep = value.aep;
      this._apicHosts = value.apicHosts;
      this._apicRefreshTickerAdjust = value.apicRefreshTickerAdjust;
      this._apicRefreshTime = value.apicRefreshTime;
      this._apicSubscriptionDelay = value.apicSubscriptionDelay;
      this._apicUserCrt = value.apicUserCrt;
      this._apicUserKey = value.apicUserKey;
      this._apicUserName = value.apicUserName;
      this._capic = value.capic;
      this._controllerLogLevel = value.controllerLogLevel;
      this._disablePeriodicSnatGlobalInfoSync = value.disablePeriodicSnatGlobalInfoSync;
      this._disableWaitForNetwork = value.disableWaitForNetwork;
      this._dropLogEnable = value.dropLogEnable;
      this._durationWaitForNetwork = value.durationWaitForNetwork;
      this._enableEndpointSlice = value.enableEndpointSlice;
      this._encapType = value.encapType;
      this._epRegistry = value.epRegistry;
      this._externDynamic = value.externDynamic;
      this._externStatic = value.externStatic;
      this._gbpPodSubnet = value.gbpPodSubnet;
      this._hostAgentLogLevel = value.hostAgentLogLevel;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecret = value.imagePullSecret;
      this._infraVlan = value.infraVlan;
      this._installIstio = value.installIstio;
      this._istioProfile = value.istioProfile;
      this._kafkaBrokers = value.kafkaBrokers;
      this._kafkaClientCrt = value.kafkaClientCrt;
      this._kafkaClientKey = value.kafkaClientKey;
      this._kubeApiVlan = value.kubeApiVlan;
      this._l3Out = value.l3Out;
      this._l3OutExternalNetworks = value.l3OutExternalNetworks;
      this._maxNodesSvcGraph = value.maxNodesSvcGraph;
      this._mcastRangeEnd = value.mcastRangeEnd;
      this._mcastRangeStart = value.mcastRangeStart;
      this._mtuHeadRoom = value.mtuHeadRoom;
      this._multusDisable = value.multusDisable;
      this._noPriorityClass = value.noPriorityClass;
      this._nodePodIfEnable = value.nodePodIfEnable;
      this._nodeSubnet = value.nodeSubnet;
      this._nodeSvcSubnet = value.nodeSvcSubnet;
      this._opflexClientSsl = value.opflexClientSsl;
      this._opflexDeviceDeleteTimeout = value.opflexDeviceDeleteTimeout;
      this._opflexLogLevel = value.opflexLogLevel;
      this._opflexMode = value.opflexMode;
      this._opflexServerPort = value.opflexServerPort;
      this._overlayVrfName = value.overlayVrfName;
      this._ovsMemoryLimit = value.ovsMemoryLimit;
      this._pbrTrackingNonSnat = value.pbrTrackingNonSnat;
      this._podSubnetChunkSize = value.podSubnetChunkSize;
      this._runGbpContainer = value.runGbpContainer;
      this._runOpflexServerContainer = value.runOpflexServerContainer;
      this._serviceMonitorInterval = value.serviceMonitorInterval;
      this._serviceVlan = value.serviceVlan;
      this._snatContractScope = value.snatContractScope;
      this._snatNamespace = value.snatNamespace;
      this._snatPortRangeEnd = value.snatPortRangeEnd;
      this._snatPortRangeStart = value.snatPortRangeStart;
      this._snatPortsPerNode = value.snatPortsPerNode;
      this._sriovEnable = value.sriovEnable;
      this._subnetDomainName = value.subnetDomainName;
      this._systemId = value.systemId;
      this._tenant = value.tenant;
      this._token = value.token;
      this._useAciAnywhereCrd = value.useAciAnywhereCrd;
      this._useAciCniPriorityClass = value.useAciCniPriorityClass;
      this._useClusterRole = value.useClusterRole;
      this._useHostNetnsVolume = value.useHostNetnsVolume;
      this._useOpflexServerVolume = value.useOpflexServerVolume;
      this._usePrivilegedContainer = value.usePrivilegedContainer;
      this._vmmController = value.vmmController;
      this._vmmDomain = value.vmmDomain;
      this._vrfName = value.vrfName;
      this._vrfTenant = value.vrfTenant;
    }
  }

  // aep - computed: false, optional: false, required: true
  private _aep?: string; 
  public get aep() {
    return this.getStringAttribute('aep');
  }
  public set aep(value: string) {
    this._aep = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aepInput() {
    return this._aep;
  }

  // apic_hosts - computed: false, optional: false, required: true
  private _apicHosts?: string[]; 
  public get apicHosts() {
    return this.getListAttribute('apic_hosts');
  }
  public set apicHosts(value: string[]) {
    this._apicHosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apicHostsInput() {
    return this._apicHosts;
  }

  // apic_refresh_ticker_adjust - computed: false, optional: true, required: false
  private _apicRefreshTickerAdjust?: string; 
  public get apicRefreshTickerAdjust() {
    return this.getStringAttribute('apic_refresh_ticker_adjust');
  }
  public set apicRefreshTickerAdjust(value: string) {
    this._apicRefreshTickerAdjust = value;
  }
  public resetApicRefreshTickerAdjust() {
    this._apicRefreshTickerAdjust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicRefreshTickerAdjustInput() {
    return this._apicRefreshTickerAdjust;
  }

  // apic_refresh_time - computed: false, optional: true, required: false
  private _apicRefreshTime?: string; 
  public get apicRefreshTime() {
    return this.getStringAttribute('apic_refresh_time');
  }
  public set apicRefreshTime(value: string) {
    this._apicRefreshTime = value;
  }
  public resetApicRefreshTime() {
    this._apicRefreshTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicRefreshTimeInput() {
    return this._apicRefreshTime;
  }

  // apic_subscription_delay - computed: false, optional: true, required: false
  private _apicSubscriptionDelay?: string; 
  public get apicSubscriptionDelay() {
    return this.getStringAttribute('apic_subscription_delay');
  }
  public set apicSubscriptionDelay(value: string) {
    this._apicSubscriptionDelay = value;
  }
  public resetApicSubscriptionDelay() {
    this._apicSubscriptionDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicSubscriptionDelayInput() {
    return this._apicSubscriptionDelay;
  }

  // apic_user_crt - computed: false, optional: false, required: true
  private _apicUserCrt?: string; 
  public get apicUserCrt() {
    return this.getStringAttribute('apic_user_crt');
  }
  public set apicUserCrt(value: string) {
    this._apicUserCrt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apicUserCrtInput() {
    return this._apicUserCrt;
  }

  // apic_user_key - computed: false, optional: false, required: true
  private _apicUserKey?: string; 
  public get apicUserKey() {
    return this.getStringAttribute('apic_user_key');
  }
  public set apicUserKey(value: string) {
    this._apicUserKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apicUserKeyInput() {
    return this._apicUserKey;
  }

  // apic_user_name - computed: false, optional: false, required: true
  private _apicUserName?: string; 
  public get apicUserName() {
    return this.getStringAttribute('apic_user_name');
  }
  public set apicUserName(value: string) {
    this._apicUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apicUserNameInput() {
    return this._apicUserName;
  }

  // capic - computed: false, optional: true, required: false
  private _capic?: string; 
  public get capic() {
    return this.getStringAttribute('capic');
  }
  public set capic(value: string) {
    this._capic = value;
  }
  public resetCapic() {
    this._capic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capicInput() {
    return this._capic;
  }

  // controller_log_level - computed: false, optional: true, required: false
  private _controllerLogLevel?: string; 
  public get controllerLogLevel() {
    return this.getStringAttribute('controller_log_level');
  }
  public set controllerLogLevel(value: string) {
    this._controllerLogLevel = value;
  }
  public resetControllerLogLevel() {
    this._controllerLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerLogLevelInput() {
    return this._controllerLogLevel;
  }

  // disable_periodic_snat_global_info_sync - computed: false, optional: true, required: false
  private _disablePeriodicSnatGlobalInfoSync?: string; 
  public get disablePeriodicSnatGlobalInfoSync() {
    return this.getStringAttribute('disable_periodic_snat_global_info_sync');
  }
  public set disablePeriodicSnatGlobalInfoSync(value: string) {
    this._disablePeriodicSnatGlobalInfoSync = value;
  }
  public resetDisablePeriodicSnatGlobalInfoSync() {
    this._disablePeriodicSnatGlobalInfoSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePeriodicSnatGlobalInfoSyncInput() {
    return this._disablePeriodicSnatGlobalInfoSync;
  }

  // disable_wait_for_network - computed: false, optional: true, required: false
  private _disableWaitForNetwork?: string; 
  public get disableWaitForNetwork() {
    return this.getStringAttribute('disable_wait_for_network');
  }
  public set disableWaitForNetwork(value: string) {
    this._disableWaitForNetwork = value;
  }
  public resetDisableWaitForNetwork() {
    this._disableWaitForNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWaitForNetworkInput() {
    return this._disableWaitForNetwork;
  }

  // drop_log_enable - computed: false, optional: true, required: false
  private _dropLogEnable?: string; 
  public get dropLogEnable() {
    return this.getStringAttribute('drop_log_enable');
  }
  public set dropLogEnable(value: string) {
    this._dropLogEnable = value;
  }
  public resetDropLogEnable() {
    this._dropLogEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropLogEnableInput() {
    return this._dropLogEnable;
  }

  // duration_wait_for_network - computed: false, optional: true, required: false
  private _durationWaitForNetwork?: string; 
  public get durationWaitForNetwork() {
    return this.getStringAttribute('duration_wait_for_network');
  }
  public set durationWaitForNetwork(value: string) {
    this._durationWaitForNetwork = value;
  }
  public resetDurationWaitForNetwork() {
    this._durationWaitForNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationWaitForNetworkInput() {
    return this._durationWaitForNetwork;
  }

  // enable_endpoint_slice - computed: false, optional: true, required: false
  private _enableEndpointSlice?: string; 
  public get enableEndpointSlice() {
    return this.getStringAttribute('enable_endpoint_slice');
  }
  public set enableEndpointSlice(value: string) {
    this._enableEndpointSlice = value;
  }
  public resetEnableEndpointSlice() {
    this._enableEndpointSlice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEndpointSliceInput() {
    return this._enableEndpointSlice;
  }

  // encap_type - computed: false, optional: false, required: true
  private _encapType?: string; 
  public get encapType() {
    return this.getStringAttribute('encap_type');
  }
  public set encapType(value: string) {
    this._encapType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTypeInput() {
    return this._encapType;
  }

  // ep_registry - computed: false, optional: true, required: false
  private _epRegistry?: string; 
  public get epRegistry() {
    return this.getStringAttribute('ep_registry');
  }
  public set epRegistry(value: string) {
    this._epRegistry = value;
  }
  public resetEpRegistry() {
    this._epRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epRegistryInput() {
    return this._epRegistry;
  }

  // extern_dynamic - computed: false, optional: false, required: true
  private _externDynamic?: string; 
  public get externDynamic() {
    return this.getStringAttribute('extern_dynamic');
  }
  public set externDynamic(value: string) {
    this._externDynamic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externDynamicInput() {
    return this._externDynamic;
  }

  // extern_static - computed: false, optional: false, required: true
  private _externStatic?: string; 
  public get externStatic() {
    return this.getStringAttribute('extern_static');
  }
  public set externStatic(value: string) {
    this._externStatic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externStaticInput() {
    return this._externStatic;
  }

  // gbp_pod_subnet - computed: false, optional: true, required: false
  private _gbpPodSubnet?: string; 
  public get gbpPodSubnet() {
    return this.getStringAttribute('gbp_pod_subnet');
  }
  public set gbpPodSubnet(value: string) {
    this._gbpPodSubnet = value;
  }
  public resetGbpPodSubnet() {
    this._gbpPodSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gbpPodSubnetInput() {
    return this._gbpPodSubnet;
  }

  // host_agent_log_level - computed: false, optional: true, required: false
  private _hostAgentLogLevel?: string; 
  public get hostAgentLogLevel() {
    return this.getStringAttribute('host_agent_log_level');
  }
  public set hostAgentLogLevel(value: string) {
    this._hostAgentLogLevel = value;
  }
  public resetHostAgentLogLevel() {
    this._hostAgentLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAgentLogLevelInput() {
    return this._hostAgentLogLevel;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: string; 
  public get imagePullSecret() {
    return this.getStringAttribute('image_pull_secret');
  }
  public set imagePullSecret(value: string) {
    this._imagePullSecret = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret;
  }

  // infra_vlan - computed: false, optional: true, required: false
  private _infraVlan?: string; 
  public get infraVlan() {
    return this.getStringAttribute('infra_vlan');
  }
  public set infraVlan(value: string) {
    this._infraVlan = value;
  }
  public resetInfraVlan() {
    this._infraVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraVlanInput() {
    return this._infraVlan;
  }

  // install_istio - computed: false, optional: true, required: false
  private _installIstio?: string; 
  public get installIstio() {
    return this.getStringAttribute('install_istio');
  }
  public set installIstio(value: string) {
    this._installIstio = value;
  }
  public resetInstallIstio() {
    this._installIstio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installIstioInput() {
    return this._installIstio;
  }

  // istio_profile - computed: false, optional: true, required: false
  private _istioProfile?: string; 
  public get istioProfile() {
    return this.getStringAttribute('istio_profile');
  }
  public set istioProfile(value: string) {
    this._istioProfile = value;
  }
  public resetIstioProfile() {
    this._istioProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioProfileInput() {
    return this._istioProfile;
  }

  // kafka_brokers - computed: false, optional: true, required: false
  private _kafkaBrokers?: string[]; 
  public get kafkaBrokers() {
    return this.getListAttribute('kafka_brokers');
  }
  public set kafkaBrokers(value: string[]) {
    this._kafkaBrokers = value;
  }
  public resetKafkaBrokers() {
    this._kafkaBrokers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaBrokersInput() {
    return this._kafkaBrokers;
  }

  // kafka_client_crt - computed: false, optional: true, required: false
  private _kafkaClientCrt?: string; 
  public get kafkaClientCrt() {
    return this.getStringAttribute('kafka_client_crt');
  }
  public set kafkaClientCrt(value: string) {
    this._kafkaClientCrt = value;
  }
  public resetKafkaClientCrt() {
    this._kafkaClientCrt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClientCrtInput() {
    return this._kafkaClientCrt;
  }

  // kafka_client_key - computed: false, optional: true, required: false
  private _kafkaClientKey?: string; 
  public get kafkaClientKey() {
    return this.getStringAttribute('kafka_client_key');
  }
  public set kafkaClientKey(value: string) {
    this._kafkaClientKey = value;
  }
  public resetKafkaClientKey() {
    this._kafkaClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClientKeyInput() {
    return this._kafkaClientKey;
  }

  // kube_api_vlan - computed: false, optional: false, required: true
  private _kubeApiVlan?: string; 
  public get kubeApiVlan() {
    return this.getStringAttribute('kube_api_vlan');
  }
  public set kubeApiVlan(value: string) {
    this._kubeApiVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiVlanInput() {
    return this._kubeApiVlan;
  }

  // l3out - computed: false, optional: false, required: true
  private _l3Out?: string; 
  public get l3Out() {
    return this.getStringAttribute('l3out');
  }
  public set l3Out(value: string) {
    this._l3Out = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutInput() {
    return this._l3Out;
  }

  // l3out_external_networks - computed: false, optional: false, required: true
  private _l3OutExternalNetworks?: string[]; 
  public get l3OutExternalNetworks() {
    return this.getListAttribute('l3out_external_networks');
  }
  public set l3OutExternalNetworks(value: string[]) {
    this._l3OutExternalNetworks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutExternalNetworksInput() {
    return this._l3OutExternalNetworks;
  }

  // max_nodes_svc_graph - computed: false, optional: true, required: false
  private _maxNodesSvcGraph?: string; 
  public get maxNodesSvcGraph() {
    return this.getStringAttribute('max_nodes_svc_graph');
  }
  public set maxNodesSvcGraph(value: string) {
    this._maxNodesSvcGraph = value;
  }
  public resetMaxNodesSvcGraph() {
    this._maxNodesSvcGraph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesSvcGraphInput() {
    return this._maxNodesSvcGraph;
  }

  // mcast_range_end - computed: false, optional: false, required: true
  private _mcastRangeEnd?: string; 
  public get mcastRangeEnd() {
    return this.getStringAttribute('mcast_range_end');
  }
  public set mcastRangeEnd(value: string) {
    this._mcastRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastRangeEndInput() {
    return this._mcastRangeEnd;
  }

  // mcast_range_start - computed: false, optional: false, required: true
  private _mcastRangeStart?: string; 
  public get mcastRangeStart() {
    return this.getStringAttribute('mcast_range_start');
  }
  public set mcastRangeStart(value: string) {
    this._mcastRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastRangeStartInput() {
    return this._mcastRangeStart;
  }

  // mtu_head_room - computed: false, optional: true, required: false
  private _mtuHeadRoom?: string; 
  public get mtuHeadRoom() {
    return this.getStringAttribute('mtu_head_room');
  }
  public set mtuHeadRoom(value: string) {
    this._mtuHeadRoom = value;
  }
  public resetMtuHeadRoom() {
    this._mtuHeadRoom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuHeadRoomInput() {
    return this._mtuHeadRoom;
  }

  // multus_disable - computed: false, optional: true, required: false
  private _multusDisable?: string; 
  public get multusDisable() {
    return this.getStringAttribute('multus_disable');
  }
  public set multusDisable(value: string) {
    this._multusDisable = value;
  }
  public resetMultusDisable() {
    this._multusDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multusDisableInput() {
    return this._multusDisable;
  }

  // no_priority_class - computed: false, optional: true, required: false
  private _noPriorityClass?: string; 
  public get noPriorityClass() {
    return this.getStringAttribute('no_priority_class');
  }
  public set noPriorityClass(value: string) {
    this._noPriorityClass = value;
  }
  public resetNoPriorityClass() {
    this._noPriorityClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPriorityClassInput() {
    return this._noPriorityClass;
  }

  // node_pod_if_enable - computed: false, optional: true, required: false
  private _nodePodIfEnable?: string; 
  public get nodePodIfEnable() {
    return this.getStringAttribute('node_pod_if_enable');
  }
  public set nodePodIfEnable(value: string) {
    this._nodePodIfEnable = value;
  }
  public resetNodePodIfEnable() {
    this._nodePodIfEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePodIfEnableInput() {
    return this._nodePodIfEnable;
  }

  // node_subnet - computed: false, optional: false, required: true
  private _nodeSubnet?: string; 
  public get nodeSubnet() {
    return this.getStringAttribute('node_subnet');
  }
  public set nodeSubnet(value: string) {
    this._nodeSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSubnetInput() {
    return this._nodeSubnet;
  }

  // node_svc_subnet - computed: false, optional: false, required: true
  private _nodeSvcSubnet?: string; 
  public get nodeSvcSubnet() {
    return this.getStringAttribute('node_svc_subnet');
  }
  public set nodeSvcSubnet(value: string) {
    this._nodeSvcSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSvcSubnetInput() {
    return this._nodeSvcSubnet;
  }

  // opflex_client_ssl - computed: false, optional: true, required: false
  private _opflexClientSsl?: string; 
  public get opflexClientSsl() {
    return this.getStringAttribute('opflex_client_ssl');
  }
  public set opflexClientSsl(value: string) {
    this._opflexClientSsl = value;
  }
  public resetOpflexClientSsl() {
    this._opflexClientSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opflexClientSslInput() {
    return this._opflexClientSsl;
  }

  // opflex_device_delete_timeout - computed: false, optional: true, required: false
  private _opflexDeviceDeleteTimeout?: string; 
  public get opflexDeviceDeleteTimeout() {
    return this.getStringAttribute('opflex_device_delete_timeout');
  }
  public set opflexDeviceDeleteTimeout(value: string) {
    this._opflexDeviceDeleteTimeout = value;
  }
  public resetOpflexDeviceDeleteTimeout() {
    this._opflexDeviceDeleteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opflexDeviceDeleteTimeoutInput() {
    return this._opflexDeviceDeleteTimeout;
  }

  // opflex_log_level - computed: false, optional: true, required: false
  private _opflexLogLevel?: string; 
  public get opflexLogLevel() {
    return this.getStringAttribute('opflex_log_level');
  }
  public set opflexLogLevel(value: string) {
    this._opflexLogLevel = value;
  }
  public resetOpflexLogLevel() {
    this._opflexLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opflexLogLevelInput() {
    return this._opflexLogLevel;
  }

  // opflex_mode - computed: false, optional: true, required: false
  private _opflexMode?: string; 
  public get opflexMode() {
    return this.getStringAttribute('opflex_mode');
  }
  public set opflexMode(value: string) {
    this._opflexMode = value;
  }
  public resetOpflexMode() {
    this._opflexMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opflexModeInput() {
    return this._opflexMode;
  }

  // opflex_server_port - computed: false, optional: true, required: false
  private _opflexServerPort?: string; 
  public get opflexServerPort() {
    return this.getStringAttribute('opflex_server_port');
  }
  public set opflexServerPort(value: string) {
    this._opflexServerPort = value;
  }
  public resetOpflexServerPort() {
    this._opflexServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opflexServerPortInput() {
    return this._opflexServerPort;
  }

  // overlay_vrf_name - computed: false, optional: true, required: false
  private _overlayVrfName?: string; 
  public get overlayVrfName() {
    return this.getStringAttribute('overlay_vrf_name');
  }
  public set overlayVrfName(value: string) {
    this._overlayVrfName = value;
  }
  public resetOverlayVrfName() {
    this._overlayVrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayVrfNameInput() {
    return this._overlayVrfName;
  }

  // ovs_memory_limit - computed: false, optional: true, required: false
  private _ovsMemoryLimit?: string; 
  public get ovsMemoryLimit() {
    return this.getStringAttribute('ovs_memory_limit');
  }
  public set ovsMemoryLimit(value: string) {
    this._ovsMemoryLimit = value;
  }
  public resetOvsMemoryLimit() {
    this._ovsMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovsMemoryLimitInput() {
    return this._ovsMemoryLimit;
  }

  // pbr_tracking_non_snat - computed: false, optional: true, required: false
  private _pbrTrackingNonSnat?: string; 
  public get pbrTrackingNonSnat() {
    return this.getStringAttribute('pbr_tracking_non_snat');
  }
  public set pbrTrackingNonSnat(value: string) {
    this._pbrTrackingNonSnat = value;
  }
  public resetPbrTrackingNonSnat() {
    this._pbrTrackingNonSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbrTrackingNonSnatInput() {
    return this._pbrTrackingNonSnat;
  }

  // pod_subnet_chunk_size - computed: false, optional: true, required: false
  private _podSubnetChunkSize?: string; 
  public get podSubnetChunkSize() {
    return this.getStringAttribute('pod_subnet_chunk_size');
  }
  public set podSubnetChunkSize(value: string) {
    this._podSubnetChunkSize = value;
  }
  public resetPodSubnetChunkSize() {
    this._podSubnetChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetChunkSizeInput() {
    return this._podSubnetChunkSize;
  }

  // run_gbp_container - computed: false, optional: true, required: false
  private _runGbpContainer?: string; 
  public get runGbpContainer() {
    return this.getStringAttribute('run_gbp_container');
  }
  public set runGbpContainer(value: string) {
    this._runGbpContainer = value;
  }
  public resetRunGbpContainer() {
    this._runGbpContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runGbpContainerInput() {
    return this._runGbpContainer;
  }

  // run_opflex_server_container - computed: false, optional: true, required: false
  private _runOpflexServerContainer?: string; 
  public get runOpflexServerContainer() {
    return this.getStringAttribute('run_opflex_server_container');
  }
  public set runOpflexServerContainer(value: string) {
    this._runOpflexServerContainer = value;
  }
  public resetRunOpflexServerContainer() {
    this._runOpflexServerContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOpflexServerContainerInput() {
    return this._runOpflexServerContainer;
  }

  // service_monitor_interval - computed: false, optional: true, required: false
  private _serviceMonitorInterval?: string; 
  public get serviceMonitorInterval() {
    return this.getStringAttribute('service_monitor_interval');
  }
  public set serviceMonitorInterval(value: string) {
    this._serviceMonitorInterval = value;
  }
  public resetServiceMonitorInterval() {
    this._serviceMonitorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMonitorIntervalInput() {
    return this._serviceMonitorInterval;
  }

  // service_vlan - computed: false, optional: false, required: true
  private _serviceVlan?: string; 
  public get serviceVlan() {
    return this.getStringAttribute('service_vlan');
  }
  public set serviceVlan(value: string) {
    this._serviceVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVlanInput() {
    return this._serviceVlan;
  }

  // snat_contract_scope - computed: false, optional: true, required: false
  private _snatContractScope?: string; 
  public get snatContractScope() {
    return this.getStringAttribute('snat_contract_scope');
  }
  public set snatContractScope(value: string) {
    this._snatContractScope = value;
  }
  public resetSnatContractScope() {
    this._snatContractScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatContractScopeInput() {
    return this._snatContractScope;
  }

  // snat_namespace - computed: false, optional: true, required: false
  private _snatNamespace?: string; 
  public get snatNamespace() {
    return this.getStringAttribute('snat_namespace');
  }
  public set snatNamespace(value: string) {
    this._snatNamespace = value;
  }
  public resetSnatNamespace() {
    this._snatNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatNamespaceInput() {
    return this._snatNamespace;
  }

  // snat_port_range_end - computed: false, optional: true, required: false
  private _snatPortRangeEnd?: string; 
  public get snatPortRangeEnd() {
    return this.getStringAttribute('snat_port_range_end');
  }
  public set snatPortRangeEnd(value: string) {
    this._snatPortRangeEnd = value;
  }
  public resetSnatPortRangeEnd() {
    this._snatPortRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPortRangeEndInput() {
    return this._snatPortRangeEnd;
  }

  // snat_port_range_start - computed: false, optional: true, required: false
  private _snatPortRangeStart?: string; 
  public get snatPortRangeStart() {
    return this.getStringAttribute('snat_port_range_start');
  }
  public set snatPortRangeStart(value: string) {
    this._snatPortRangeStart = value;
  }
  public resetSnatPortRangeStart() {
    this._snatPortRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPortRangeStartInput() {
    return this._snatPortRangeStart;
  }

  // snat_ports_per_node - computed: false, optional: true, required: false
  private _snatPortsPerNode?: string; 
  public get snatPortsPerNode() {
    return this.getStringAttribute('snat_ports_per_node');
  }
  public set snatPortsPerNode(value: string) {
    this._snatPortsPerNode = value;
  }
  public resetSnatPortsPerNode() {
    this._snatPortsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPortsPerNodeInput() {
    return this._snatPortsPerNode;
  }

  // sriov_enable - computed: false, optional: true, required: false
  private _sriovEnable?: string; 
  public get sriovEnable() {
    return this.getStringAttribute('sriov_enable');
  }
  public set sriovEnable(value: string) {
    this._sriovEnable = value;
  }
  public resetSriovEnable() {
    this._sriovEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovEnableInput() {
    return this._sriovEnable;
  }

  // subnet_domain_name - computed: false, optional: true, required: false
  private _subnetDomainName?: string; 
  public get subnetDomainName() {
    return this.getStringAttribute('subnet_domain_name');
  }
  public set subnetDomainName(value: string) {
    this._subnetDomainName = value;
  }
  public resetSubnetDomainName() {
    this._subnetDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetDomainNameInput() {
    return this._subnetDomainName;
  }

  // system_id - computed: false, optional: false, required: true
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // use_aci_anywhere_crd - computed: false, optional: true, required: false
  private _useAciAnywhereCrd?: string; 
  public get useAciAnywhereCrd() {
    return this.getStringAttribute('use_aci_anywhere_crd');
  }
  public set useAciAnywhereCrd(value: string) {
    this._useAciAnywhereCrd = value;
  }
  public resetUseAciAnywhereCrd() {
    this._useAciAnywhereCrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAciAnywhereCrdInput() {
    return this._useAciAnywhereCrd;
  }

  // use_aci_cni_priority_class - computed: false, optional: true, required: false
  private _useAciCniPriorityClass?: string; 
  public get useAciCniPriorityClass() {
    return this.getStringAttribute('use_aci_cni_priority_class');
  }
  public set useAciCniPriorityClass(value: string) {
    this._useAciCniPriorityClass = value;
  }
  public resetUseAciCniPriorityClass() {
    this._useAciCniPriorityClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAciCniPriorityClassInput() {
    return this._useAciCniPriorityClass;
  }

  // use_cluster_role - computed: false, optional: true, required: false
  private _useClusterRole?: string; 
  public get useClusterRole() {
    return this.getStringAttribute('use_cluster_role');
  }
  public set useClusterRole(value: string) {
    this._useClusterRole = value;
  }
  public resetUseClusterRole() {
    this._useClusterRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClusterRoleInput() {
    return this._useClusterRole;
  }

  // use_host_netns_volume - computed: false, optional: true, required: false
  private _useHostNetnsVolume?: string; 
  public get useHostNetnsVolume() {
    return this.getStringAttribute('use_host_netns_volume');
  }
  public set useHostNetnsVolume(value: string) {
    this._useHostNetnsVolume = value;
  }
  public resetUseHostNetnsVolume() {
    this._useHostNetnsVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostNetnsVolumeInput() {
    return this._useHostNetnsVolume;
  }

  // use_opflex_server_volume - computed: false, optional: true, required: false
  private _useOpflexServerVolume?: string; 
  public get useOpflexServerVolume() {
    return this.getStringAttribute('use_opflex_server_volume');
  }
  public set useOpflexServerVolume(value: string) {
    this._useOpflexServerVolume = value;
  }
  public resetUseOpflexServerVolume() {
    this._useOpflexServerVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOpflexServerVolumeInput() {
    return this._useOpflexServerVolume;
  }

  // use_privileged_container - computed: false, optional: true, required: false
  private _usePrivilegedContainer?: string; 
  public get usePrivilegedContainer() {
    return this.getStringAttribute('use_privileged_container');
  }
  public set usePrivilegedContainer(value: string) {
    this._usePrivilegedContainer = value;
  }
  public resetUsePrivilegedContainer() {
    this._usePrivilegedContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivilegedContainerInput() {
    return this._usePrivilegedContainer;
  }

  // vmm_controller - computed: false, optional: true, required: false
  private _vmmController?: string; 
  public get vmmController() {
    return this.getStringAttribute('vmm_controller');
  }
  public set vmmController(value: string) {
    this._vmmController = value;
  }
  public resetVmmController() {
    this._vmmController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmControllerInput() {
    return this._vmmController;
  }

  // vmm_domain - computed: false, optional: true, required: false
  private _vmmDomain?: string; 
  public get vmmDomain() {
    return this.getStringAttribute('vmm_domain');
  }
  public set vmmDomain(value: string) {
    this._vmmDomain = value;
  }
  public resetVmmDomain() {
    this._vmmDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmDomainInput() {
    return this._vmmDomain;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // vrf_tenant - computed: false, optional: false, required: true
  private _vrfTenant?: string; 
  public get vrfTenant() {
    return this.getStringAttribute('vrf_tenant');
  }
  public set vrfTenant(value: string) {
    this._vrfTenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTenantInput() {
    return this._vrfTenant;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud_provider ClusterTemplate#cloud_provider}
  */
  readonly cloudProvider?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProvider = value.cloudProvider;
    }
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#iface ClusterTemplate#iface}
  */
  readonly iface?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iface: cdktf.stringToTerraform(struct!.iface),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iface: {
      value: cdktf.stringToHclTerraform(struct!.iface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iface = this._iface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iface = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iface = value.iface;
    }
  }

  // iface - computed: true, optional: true, required: false
  private _iface?: string; 
  public get iface() {
    return this.getStringAttribute('iface');
  }
  public set iface(value: string) {
    this._iface = value;
  }
  public resetIface() {
    this._iface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceInput() {
    return this._iface;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#iface ClusterTemplate#iface}
  */
  readonly iface?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iface: cdktf.stringToTerraform(struct!.iface),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iface: {
      value: cdktf.stringToHclTerraform(struct!.iface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iface = this._iface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iface = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iface = value.iface;
    }
  }

  // iface - computed: true, optional: true, required: false
  private _iface?: string; 
  public get iface() {
    return this.getStringAttribute('iface');
  }
  public set iface(value: string) {
    this._iface = value;
  }
  public resetIface() {
    this._iface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifaceInput() {
    return this._iface;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#effect ClusterTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#key ClusterTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#operator ClusterTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#seconds ClusterTemplate#seconds}
  */
  readonly seconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#value ClusterTemplate#value}
  */
  readonly value?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    seconds: cdktf.numberToTerraform(struct!.seconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._seconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._seconds = value.seconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // seconds - computed: true, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
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

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsOutputReference {
    return new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#password ClusterTemplate#password}
  */
  readonly password: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#mtu ClusterTemplate#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#options ClusterTemplate#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#plugin ClusterTemplate#plugin}
  */
  readonly plugin?: string;
  /**
  * aci_network_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#aci_network_provider ClusterTemplate#aci_network_provider}
  */
  readonly aciNetworkProvider?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider;
  /**
  * calico_network_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#calico_network_provider ClusterTemplate#calico_network_provider}
  */
  readonly calicoNetworkProvider?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider;
  /**
  * canal_network_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#canal_network_provider ClusterTemplate#canal_network_provider}
  */
  readonly canalNetworkProvider?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider;
  /**
  * flannel_network_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#flannel_network_provider ClusterTemplate#flannel_network_provider}
  */
  readonly flannelNetworkProvider?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#tolerations ClusterTemplate#tolerations}
  */
  readonly tolerations?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations[] | cdktf.IResolvable;
  /**
  * weave_network_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#weave_network_provider ClusterTemplate#weave_network_provider}
  */
  readonly weaveNetworkProvider?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtu: cdktf.numberToTerraform(struct!.mtu),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    plugin: cdktf.stringToTerraform(struct!.plugin),
    aci_network_provider: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderToTerraform(struct!.aciNetworkProvider),
    calico_network_provider: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderToTerraform(struct!.calicoNetworkProvider),
    canal_network_provider: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderToTerraform(struct!.canalNetworkProvider),
    flannel_network_provider: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderToTerraform(struct!.flannelNetworkProvider),
    tolerations: cdktf.listMapper(clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsToTerraform, true)(struct!.tolerations),
    weave_network_provider: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderToTerraform(struct!.weaveNetworkProvider),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    plugin: {
      value: cdktf.stringToHclTerraform(struct!.plugin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aci_network_provider: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderToHclTerraform(struct!.aciNetworkProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderList",
    },
    calico_network_provider: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderToHclTerraform(struct!.calicoNetworkProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderList",
    },
    canal_network_provider: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderToHclTerraform(struct!.canalNetworkProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderList",
    },
    flannel_network_provider: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderToHclTerraform(struct!.flannelNetworkProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsList",
    },
    weave_network_provider: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderToHclTerraform(struct!.weaveNetworkProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._plugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin;
    }
    if (this._aciNetworkProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aciNetworkProvider = this._aciNetworkProvider?.internalValue;
    }
    if (this._calicoNetworkProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoNetworkProvider = this._calicoNetworkProvider?.internalValue;
    }
    if (this._canalNetworkProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canalNetworkProvider = this._canalNetworkProvider?.internalValue;
    }
    if (this._flannelNetworkProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flannelNetworkProvider = this._flannelNetworkProvider?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._weaveNetworkProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weaveNetworkProvider = this._weaveNetworkProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mtu = undefined;
      this._options = undefined;
      this._plugin = undefined;
      this._aciNetworkProvider.internalValue = undefined;
      this._calicoNetworkProvider.internalValue = undefined;
      this._canalNetworkProvider.internalValue = undefined;
      this._flannelNetworkProvider.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._weaveNetworkProvider.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mtu = value.mtu;
      this._options = value.options;
      this._plugin = value.plugin;
      this._aciNetworkProvider.internalValue = value.aciNetworkProvider;
      this._calicoNetworkProvider.internalValue = value.calicoNetworkProvider;
      this._canalNetworkProvider.internalValue = value.canalNetworkProvider;
      this._flannelNetworkProvider.internalValue = value.flannelNetworkProvider;
      this._tolerations.internalValue = value.tolerations;
      this._weaveNetworkProvider.internalValue = value.weaveNetworkProvider;
    }
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // plugin - computed: true, optional: true, required: false
  private _plugin?: string; 
  public get plugin() {
    return this.getStringAttribute('plugin');
  }
  public set plugin(value: string) {
    this._plugin = value;
  }
  public resetPlugin() {
    this._plugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // aci_network_provider - computed: false, optional: true, required: false
  private _aciNetworkProvider = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderOutputReference(this, "aci_network_provider");
  public get aciNetworkProvider() {
    return this._aciNetworkProvider;
  }
  public putAciNetworkProvider(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider) {
    this._aciNetworkProvider.internalValue = value;
  }
  public resetAciNetworkProvider() {
    this._aciNetworkProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aciNetworkProviderInput() {
    return this._aciNetworkProvider.internalValue;
  }

  // calico_network_provider - computed: false, optional: true, required: false
  private _calicoNetworkProvider = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderOutputReference(this, "calico_network_provider");
  public get calicoNetworkProvider() {
    return this._calicoNetworkProvider;
  }
  public putCalicoNetworkProvider(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider) {
    this._calicoNetworkProvider.internalValue = value;
  }
  public resetCalicoNetworkProvider() {
    this._calicoNetworkProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoNetworkProviderInput() {
    return this._calicoNetworkProvider.internalValue;
  }

  // canal_network_provider - computed: false, optional: true, required: false
  private _canalNetworkProvider = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderOutputReference(this, "canal_network_provider");
  public get canalNetworkProvider() {
    return this._canalNetworkProvider;
  }
  public putCanalNetworkProvider(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider) {
    this._canalNetworkProvider.internalValue = value;
  }
  public resetCanalNetworkProvider() {
    this._canalNetworkProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canalNetworkProviderInput() {
    return this._canalNetworkProvider.internalValue;
  }

  // flannel_network_provider - computed: false, optional: true, required: false
  private _flannelNetworkProvider = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderOutputReference(this, "flannel_network_provider");
  public get flannelNetworkProvider() {
    return this._flannelNetworkProvider;
  }
  public putFlannelNetworkProvider(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider) {
    this._flannelNetworkProvider.internalValue = value;
  }
  public resetFlannelNetworkProvider() {
    this._flannelNetworkProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flannelNetworkProviderInput() {
    return this._flannelNetworkProvider.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // weave_network_provider - computed: false, optional: true, required: false
  private _weaveNetworkProvider = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderOutputReference(this, "weave_network_provider");
  public get weaveNetworkProvider() {
    return this._weaveNetworkProvider;
  }
  public putWeaveNetworkProvider(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider) {
    this._weaveNetworkProvider.internalValue = value;
  }
  public resetWeaveNetworkProvider() {
    this._weaveNetworkProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weaveNetworkProviderInput() {
    return this._weaveNetworkProvider.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#address ClusterTemplate#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#docker_socket ClusterTemplate#docker_socket}
  */
  readonly dockerSocket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#hostname_override ClusterTemplate#hostname_override}
  */
  readonly hostnameOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#internal_address ClusterTemplate#internal_address}
  */
  readonly internalAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#labels ClusterTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#node_id ClusterTemplate#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#port ClusterTemplate#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#role ClusterTemplate#role}
  */
  readonly role: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ssh_agent_auth ClusterTemplate#ssh_agent_auth}
  */
  readonly sshAgentAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ssh_key ClusterTemplate#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ssh_key_path ClusterTemplate#ssh_key_path}
  */
  readonly sshKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#user ClusterTemplate#user}
  */
  readonly user: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    docker_socket: cdktf.stringToTerraform(struct!.dockerSocket),
    hostname_override: cdktf.stringToTerraform(struct!.hostnameOverride),
    internal_address: cdktf.stringToTerraform(struct!.internalAddress),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    port: cdktf.stringToTerraform(struct!.port),
    role: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.role),
    ssh_agent_auth: cdktf.booleanToTerraform(struct!.sshAgentAuth),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    ssh_key_path: cdktf.stringToTerraform(struct!.sshKeyPath),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_socket: {
      value: cdktf.stringToHclTerraform(struct!.dockerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_override: {
      value: cdktf.stringToHclTerraform(struct!.hostnameOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_address: {
      value: cdktf.stringToHclTerraform(struct!.internalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.role),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssh_agent_auth: {
      value: cdktf.booleanToHclTerraform(struct!.sshAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_path: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._dockerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerSocket = this._dockerSocket;
    }
    if (this._hostnameOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameOverride = this._hostnameOverride;
    }
    if (this._internalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAddress = this._internalAddress;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._sshAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAgentAuth = this._sshAgentAuth;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._sshKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyPath = this._sshKeyPath;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._dockerSocket = undefined;
      this._hostnameOverride = undefined;
      this._internalAddress = undefined;
      this._labels = undefined;
      this._nodeId = undefined;
      this._port = undefined;
      this._role = undefined;
      this._sshAgentAuth = undefined;
      this._sshKey = undefined;
      this._sshKeyPath = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._dockerSocket = value.dockerSocket;
      this._hostnameOverride = value.hostnameOverride;
      this._internalAddress = value.internalAddress;
      this._labels = value.labels;
      this._nodeId = value.nodeId;
      this._port = value.port;
      this._role = value.role;
      this._sshAgentAuth = value.sshAgentAuth;
      this._sshKey = value.sshKey;
      this._sshKeyPath = value.sshKeyPath;
      this._user = value.user;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // docker_socket - computed: true, optional: true, required: false
  private _dockerSocket?: string; 
  public get dockerSocket() {
    return this.getStringAttribute('docker_socket');
  }
  public set dockerSocket(value: string) {
    this._dockerSocket = value;
  }
  public resetDockerSocket() {
    this._dockerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerSocketInput() {
    return this._dockerSocket;
  }

  // hostname_override - computed: false, optional: true, required: false
  private _hostnameOverride?: string; 
  public get hostnameOverride() {
    return this.getStringAttribute('hostname_override');
  }
  public set hostnameOverride(value: string) {
    this._hostnameOverride = value;
  }
  public resetHostnameOverride() {
    this._hostnameOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameOverrideInput() {
    return this._hostnameOverride;
  }

  // internal_address - computed: false, optional: true, required: false
  private _internalAddress?: string; 
  public get internalAddress() {
    return this.getStringAttribute('internal_address');
  }
  public set internalAddress(value: string) {
    this._internalAddress = value;
  }
  public resetInternalAddress() {
    this._internalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAddressInput() {
    return this._internalAddress;
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

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string[]; 
  public get role() {
    return this.getListAttribute('role');
  }
  public set role(value: string[]) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // ssh_agent_auth - computed: false, optional: true, required: false
  private _sshAgentAuth?: boolean | cdktf.IResolvable; 
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }
  public set sshAgentAuth(value: boolean | cdktf.IResolvable) {
    this._sshAgentAuth = value;
  }
  public resetSshAgentAuth() {
    this._sshAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAgentAuthInput() {
    return this._sshAgentAuth;
  }

  // ssh_key - computed: true, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // ssh_key_path - computed: true, optional: true, required: false
  private _sshKeyPath?: string; 
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }
  public set sshKeyPath(value: string) {
    this._sshKeyPath = value;
  }
  public resetSshKeyPath() {
    this._sshKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyPathInput() {
    return this._sshKeyPath;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesOutputReference {
    return new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#aws_access_key_id ClusterTemplate#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#aws_secret_access_key ClusterTemplate#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#aws_session_token ClusterTemplate#aws_session_token}
  */
  readonly awsSessionToken?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
    aws_session_token: cdktf.stringToTerraform(struct!.awsSessionToken),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_session_token: {
      value: cdktf.stringToHclTerraform(struct!.awsSessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    if (this._awsSessionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSessionToken = this._awsSessionToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
      this._awsSessionToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
      this._awsSessionToken = value.awsSessionToken;
    }
  }

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // aws_session_token - computed: false, optional: true, required: false
  private _awsSessionToken?: string; 
  public get awsSessionToken() {
    return this.getStringAttribute('aws_session_token');
  }
  public set awsSessionToken(value: string) {
    this._awsSessionToken = value;
  }
  public resetAwsSessionToken() {
    this._awsSessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSessionTokenInput() {
    return this._awsSessionToken;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#is_default ClusterTemplate#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#password ClusterTemplate#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#url ClusterTemplate#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#user ClusterTemplate#user}
  */
  readonly user?: string;
  /**
  * ecr_credential_plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ecr_credential_plugin ClusterTemplate#ecr_credential_plugin}
  */
  readonly ecrCredentialPlugin?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
    ecr_credential_plugin: clusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginToTerraform(struct!.ecrCredentialPlugin),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecr_credential_plugin: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginToHclTerraform(struct!.ecrCredentialPlugin),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._ecrCredentialPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrCredentialPlugin = this._ecrCredentialPlugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDefault = undefined;
      this._password = undefined;
      this._url = undefined;
      this._user = undefined;
      this._ecrCredentialPlugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDefault = value.isDefault;
      this._password = value.password;
      this._url = value.url;
      this._user = value.user;
      this._ecrCredentialPlugin.internalValue = value.ecrCredentialPlugin;
    }
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // ecr_credential_plugin - computed: false, optional: true, required: false
  private _ecrCredentialPlugin = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginOutputReference(this, "ecr_credential_plugin");
  public get ecrCredentialPlugin() {
    return this._ecrCredentialPlugin;
  }
  public putEcrCredentialPlugin(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin) {
    this._ecrCredentialPlugin.internalValue = value;
  }
  public resetEcrCredentialPlugin() {
    this._ecrCredentialPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrCredentialPluginInput() {
    return this._ecrCredentialPlugin.internalValue;
  }
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesOutputReference {
    return new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#access_key ClusterTemplate#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#bucket_name ClusterTemplate#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#custom_ca ClusterTemplate#custom_ca}
  */
  readonly customCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#endpoint ClusterTemplate#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#folder ClusterTemplate#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#region ClusterTemplate#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#secret_key ClusterTemplate#secret_key}
  */
  readonly secretKey?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    custom_ca: cdktf.stringToTerraform(struct!.customCa),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    folder: cdktf.stringToTerraform(struct!.folder),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_ca: {
      value: cdktf.stringToHclTerraform(struct!.customCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._customCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCa = this._customCa;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucketName = undefined;
      this._customCa = undefined;
      this._endpoint = undefined;
      this._folder = undefined;
      this._region = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucketName = value.bucketName;
      this._customCa = value.customCa;
      this._endpoint = value.endpoint;
      this._folder = value.folder;
      this._region = value.region;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // custom_ca - computed: false, optional: true, required: false
  private _customCa?: string; 
  public get customCa() {
    return this.getStringAttribute('custom_ca');
  }
  public set customCa(value: string) {
    this._customCa = value;
  }
  public resetCustomCa() {
    this._customCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCaInput() {
    return this._customCa;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#enabled ClusterTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#interval_hours ClusterTemplate#interval_hours}
  */
  readonly intervalHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#retention ClusterTemplate#retention}
  */
  readonly retention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#safe_timestamp ClusterTemplate#safe_timestamp}
  */
  readonly safeTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#timeout ClusterTemplate#timeout}
  */
  readonly timeout?: number;
  /**
  * s3_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#s3_backup_config ClusterTemplate#s3_backup_config}
  */
  readonly s3BackupConfig?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval_hours: cdktf.numberToTerraform(struct!.intervalHours),
    retention: cdktf.numberToTerraform(struct!.retention),
    safe_timestamp: cdktf.booleanToTerraform(struct!.safeTimestamp),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    s3_backup_config: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigToTerraform(struct!.s3BackupConfig),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig): any {
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
    interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.intervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention: {
      value: cdktf.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    safe_timestamp: {
      value: cdktf.booleanToHclTerraform(struct!.safeTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_backup_config: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigToHclTerraform(struct!.s3BackupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._intervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalHours = this._intervalHours;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._safeTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeTimestamp = this._safeTimestamp;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._s3BackupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BackupConfig = this._s3BackupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._intervalHours = undefined;
      this._retention = undefined;
      this._safeTimestamp = undefined;
      this._timeout = undefined;
      this._s3BackupConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._intervalHours = value.intervalHours;
      this._retention = value.retention;
      this._safeTimestamp = value.safeTimestamp;
      this._timeout = value.timeout;
      this._s3BackupConfig.internalValue = value.s3BackupConfig;
    }
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

  // interval_hours - computed: false, optional: true, required: false
  private _intervalHours?: number; 
  public get intervalHours() {
    return this.getNumberAttribute('interval_hours');
  }
  public set intervalHours(value: number) {
    this._intervalHours = value;
  }
  public resetIntervalHours() {
    this._intervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalHoursInput() {
    return this._intervalHours;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // safe_timestamp - computed: false, optional: true, required: false
  private _safeTimestamp?: boolean | cdktf.IResolvable; 
  public get safeTimestamp() {
    return this.getBooleanAttribute('safe_timestamp');
  }
  public set safeTimestamp(value: boolean | cdktf.IResolvable) {
    this._safeTimestamp = value;
  }
  public resetSafeTimestamp() {
    this._safeTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeTimestampInput() {
    return this._safeTimestamp;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // s3_backup_config - computed: false, optional: true, required: false
  private _s3BackupConfig = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigOutputReference(this, "s3_backup_config");
  public get s3BackupConfig() {
    return this._s3BackupConfig;
  }
  public putS3BackupConfig(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig) {
    this._s3BackupConfig.internalValue = value;
  }
  public resetS3BackupConfig() {
    this._s3BackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupConfigInput() {
    return this._s3BackupConfig.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ca_cert ClusterTemplate#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cert ClusterTemplate#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#creation ClusterTemplate#creation}
  */
  readonly creation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#external_urls ClusterTemplate#external_urls}
  */
  readonly externalUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_args ClusterTemplate#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_binds ClusterTemplate#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_env ClusterTemplate#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#gid ClusterTemplate#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#image ClusterTemplate#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#key ClusterTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#path ClusterTemplate#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#retention ClusterTemplate#retention}
  */
  readonly retention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#snapshot ClusterTemplate#snapshot}
  */
  readonly snapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#uid ClusterTemplate#uid}
  */
  readonly uid?: number;
  /**
  * backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#backup_config ClusterTemplate#backup_config}
  */
  readonly backupConfig?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    cert: cdktf.stringToTerraform(struct!.cert),
    creation: cdktf.stringToTerraform(struct!.creation),
    external_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalUrls),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    gid: cdktf.numberToTerraform(struct!.gid),
    image: cdktf.stringToTerraform(struct!.image),
    key: cdktf.stringToTerraform(struct!.key),
    path: cdktf.stringToTerraform(struct!.path),
    retention: cdktf.stringToTerraform(struct!.retention),
    snapshot: cdktf.booleanToTerraform(struct!.snapshot),
    uid: cdktf.numberToTerraform(struct!.uid),
    backup_config: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigToTerraform(struct!.backupConfig),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creation: {
      value: cdktf.stringToHclTerraform(struct!.creation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_config: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigToHclTerraform(struct!.backupConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._creation !== undefined) {
      hasAnyValues = true;
      internalValueResult.creation = this._creation;
    }
    if (this._externalUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrls = this._externalUrls;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._backupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfig = this._backupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCert = undefined;
      this._cert = undefined;
      this._creation = undefined;
      this._externalUrls = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._gid = undefined;
      this._image = undefined;
      this._key = undefined;
      this._path = undefined;
      this._retention = undefined;
      this._snapshot = undefined;
      this._uid = undefined;
      this._backupConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCert = value.caCert;
      this._cert = value.cert;
      this._creation = value.creation;
      this._externalUrls = value.externalUrls;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._gid = value.gid;
      this._image = value.image;
      this._key = value.key;
      this._path = value.path;
      this._retention = value.retention;
      this._snapshot = value.snapshot;
      this._uid = value.uid;
      this._backupConfig.internalValue = value.backupConfig;
    }
  }

  // ca_cert - computed: true, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // cert - computed: true, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // creation - computed: true, optional: true, required: false
  private _creation?: string; 
  public get creation() {
    return this.getStringAttribute('creation');
  }
  public set creation(value: string) {
    this._creation = value;
  }
  public resetCreation() {
    this._creation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationInput() {
    return this._creation;
  }

  // external_urls - computed: false, optional: true, required: false
  private _externalUrls?: string[]; 
  public get externalUrls() {
    return this.getListAttribute('external_urls');
  }
  public set externalUrls(value: string[]) {
    this._externalUrls = value;
  }
  public resetExternalUrls() {
    this._externalUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlsInput() {
    return this._externalUrls;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: false, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: false, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // retention - computed: true, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // snapshot - computed: true, optional: true, required: false
  private _snapshot?: boolean | cdktf.IResolvable; 
  public get snapshot() {
    return this.getBooleanAttribute('snapshot');
  }
  public set snapshot(value: boolean | cdktf.IResolvable) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // backup_config - computed: false, optional: true, required: false
  private _backupConfig = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigOutputReference(this, "backup_config");
  public get backupConfig() {
    return this._backupConfig;
  }
  public putBackupConfig(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig) {
    this._backupConfig.internalValue = value;
  }
  public resetBackupConfig() {
    this._backupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigInput() {
    return this._backupConfig.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins {
  /**
  * Plugin configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#configuration ClusterTemplate#configuration}
  */
  readonly configuration?: string;
  /**
  * Plugin name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#name ClusterTemplate#name}
  */
  readonly name?: string;
  /**
  * Plugin path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#path ClusterTemplate#path}
  */
  readonly path?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._name = value.name;
      this._path = value.path;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // name - computed: true, optional: true, required: false
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsOutputReference {
    return new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration {
  /**
  * Admission configuration ApiVersion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#api_version ClusterTemplate#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Admission configuration Kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kind ClusterTemplate#kind}
  */
  readonly kind?: string;
  /**
  * plugins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#plugins ClusterTemplate#plugins}
  */
  readonly plugins?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins[] | cdktf.IResolvable;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    plugins: cdktf.listMapper(clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsToTerraform, true)(struct!.plugins),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugins: {
      value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsToHclTerraform, true)(struct!.plugins),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._plugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._plugins.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._plugins.internalValue = value.plugins;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
  public putPlugins(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins[] | cdktf.IResolvable) {
    this._plugins.internalValue = value;
  }
  public resetPlugins() {
    this._plugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#format ClusterTemplate#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_age ClusterTemplate#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_backup ClusterTemplate#max_backup}
  */
  readonly maxBackup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_size ClusterTemplate#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#path ClusterTemplate#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#policy ClusterTemplate#policy}
  */
  readonly policy?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    max_backup: cdktf.numberToTerraform(struct!.maxBackup),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    path: cdktf.stringToTerraform(struct!.path),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_backup: {
      value: cdktf.numberToHclTerraform(struct!.maxBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maxBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackup = this._maxBackup;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
      this._maxAge = undefined;
      this._maxBackup = undefined;
      this._maxSize = undefined;
      this._path = undefined;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
      this._maxAge = value.maxAge;
      this._maxBackup = value.maxBackup;
      this._maxSize = value.maxSize;
      this._path = value.path;
      this._policy = value.policy;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // max_backup - computed: false, optional: true, required: false
  private _maxBackup?: number; 
  public get maxBackup() {
    return this.getNumberAttribute('max_backup');
  }
  public set maxBackup(value: number) {
    this._maxBackup = value;
  }
  public resetMaxBackup() {
    this._maxBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackupInput() {
    return this._maxBackup;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#enabled ClusterTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#configuration ClusterTemplate#configuration}
  */
  readonly configuration?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    configuration: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationToTerraform(struct!.configuration),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog): any {
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
    configuration: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._configuration.internalValue = value.configuration;
    }
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#configuration ClusterTemplate#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#enabled ClusterTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#custom_config ClusterTemplate#custom_config}
  */
  readonly customConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#enabled ClusterTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_config: cdktf.stringToTerraform(struct!.customConfig),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_config: {
      value: cdktf.stringToHclTerraform(struct!.customConfig),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfig = this._customConfig;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customConfig = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customConfig = value.customConfig;
      this._enabled = value.enabled;
    }
  }

  // custom_config - computed: false, optional: true, required: false
  private _customConfig?: string; 
  public get customConfig() {
    return this.getStringAttribute('custom_config');
  }
  public set customConfig(value: string) {
    this._customConfig = value;
  }
  public resetCustomConfig() {
    this._customConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig;
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
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#always_pull_images ClusterTemplate#always_pull_images}
  */
  readonly alwaysPullImages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_args ClusterTemplate#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_binds ClusterTemplate#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_env ClusterTemplate#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#image ClusterTemplate#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#service_cluster_ip_range ClusterTemplate#service_cluster_ip_range}
  */
  readonly serviceClusterIpRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#service_node_port_range ClusterTemplate#service_node_port_range}
  */
  readonly serviceNodePortRange?: string;
  /**
  * admission_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#admission_configuration ClusterTemplate#admission_configuration}
  */
  readonly admissionConfiguration?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration;
  /**
  * audit_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#audit_log ClusterTemplate#audit_log}
  */
  readonly auditLog?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog;
  /**
  * event_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#event_rate_limit ClusterTemplate#event_rate_limit}
  */
  readonly eventRateLimit?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit;
  /**
  * secrets_encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#secrets_encryption_config ClusterTemplate#secrets_encryption_config}
  */
  readonly secretsEncryptionConfig?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_pull_images: cdktf.booleanToTerraform(struct!.alwaysPullImages),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
    service_cluster_ip_range: cdktf.stringToTerraform(struct!.serviceClusterIpRange),
    service_node_port_range: cdktf.stringToTerraform(struct!.serviceNodePortRange),
    admission_configuration: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationToTerraform(struct!.admissionConfiguration),
    audit_log: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogToTerraform(struct!.auditLog),
    event_rate_limit: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitToTerraform(struct!.eventRateLimit),
    secrets_encryption_config: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigToTerraform(struct!.secretsEncryptionConfig),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_pull_images: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysPullImages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cluster_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.serviceClusterIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_node_port_range: {
      value: cdktf.stringToHclTerraform(struct!.serviceNodePortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admission_configuration: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationToHclTerraform(struct!.admissionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationList",
    },
    audit_log: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogToHclTerraform(struct!.auditLog),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogList",
    },
    event_rate_limit: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitToHclTerraform(struct!.eventRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitList",
    },
    secrets_encryption_config: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigToHclTerraform(struct!.secretsEncryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysPullImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysPullImages = this._alwaysPullImages;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._serviceClusterIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceClusterIpRange = this._serviceClusterIpRange;
    }
    if (this._serviceNodePortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNodePortRange = this._serviceNodePortRange;
    }
    if (this._admissionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionConfiguration = this._admissionConfiguration?.internalValue;
    }
    if (this._auditLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLog = this._auditLog?.internalValue;
    }
    if (this._eventRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventRateLimit = this._eventRateLimit?.internalValue;
    }
    if (this._secretsEncryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsEncryptionConfig = this._secretsEncryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysPullImages = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
      this._serviceClusterIpRange = undefined;
      this._serviceNodePortRange = undefined;
      this._admissionConfiguration.internalValue = undefined;
      this._auditLog.internalValue = undefined;
      this._eventRateLimit.internalValue = undefined;
      this._secretsEncryptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysPullImages = value.alwaysPullImages;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
      this._serviceClusterIpRange = value.serviceClusterIpRange;
      this._serviceNodePortRange = value.serviceNodePortRange;
      this._admissionConfiguration.internalValue = value.admissionConfiguration;
      this._auditLog.internalValue = value.auditLog;
      this._eventRateLimit.internalValue = value.eventRateLimit;
      this._secretsEncryptionConfig.internalValue = value.secretsEncryptionConfig;
    }
  }

  // always_pull_images - computed: false, optional: true, required: false
  private _alwaysPullImages?: boolean | cdktf.IResolvable; 
  public get alwaysPullImages() {
    return this.getBooleanAttribute('always_pull_images');
  }
  public set alwaysPullImages(value: boolean | cdktf.IResolvable) {
    this._alwaysPullImages = value;
  }
  public resetAlwaysPullImages() {
    this._alwaysPullImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysPullImagesInput() {
    return this._alwaysPullImages;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: false, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: false, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // service_cluster_ip_range - computed: true, optional: true, required: false
  private _serviceClusterIpRange?: string; 
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }
  public set serviceClusterIpRange(value: string) {
    this._serviceClusterIpRange = value;
  }
  public resetServiceClusterIpRange() {
    this._serviceClusterIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClusterIpRangeInput() {
    return this._serviceClusterIpRange;
  }

  // service_node_port_range - computed: true, optional: true, required: false
  private _serviceNodePortRange?: string; 
  public get serviceNodePortRange() {
    return this.getStringAttribute('service_node_port_range');
  }
  public set serviceNodePortRange(value: string) {
    this._serviceNodePortRange = value;
  }
  public resetServiceNodePortRange() {
    this._serviceNodePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodePortRangeInput() {
    return this._serviceNodePortRange;
  }

  // admission_configuration - computed: false, optional: true, required: false
  private _admissionConfiguration = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationOutputReference(this, "admission_configuration");
  public get admissionConfiguration() {
    return this._admissionConfiguration;
  }
  public putAdmissionConfiguration(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration) {
    this._admissionConfiguration.internalValue = value;
  }
  public resetAdmissionConfiguration() {
    this._admissionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionConfigurationInput() {
    return this._admissionConfiguration.internalValue;
  }

  // audit_log - computed: false, optional: true, required: false
  private _auditLog = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogOutputReference(this, "audit_log");
  public get auditLog() {
    return this._auditLog;
  }
  public putAuditLog(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog) {
    this._auditLog.internalValue = value;
  }
  public resetAuditLog() {
    this._auditLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogInput() {
    return this._auditLog.internalValue;
  }

  // event_rate_limit - computed: false, optional: true, required: false
  private _eventRateLimit = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitOutputReference(this, "event_rate_limit");
  public get eventRateLimit() {
    return this._eventRateLimit;
  }
  public putEventRateLimit(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit) {
    this._eventRateLimit.internalValue = value;
  }
  public resetEventRateLimit() {
    this._eventRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRateLimitInput() {
    return this._eventRateLimit.internalValue;
  }

  // secrets_encryption_config - computed: false, optional: true, required: false
  private _secretsEncryptionConfig = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigOutputReference(this, "secrets_encryption_config");
  public get secretsEncryptionConfig() {
    return this._secretsEncryptionConfig;
  }
  public putSecretsEncryptionConfig(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig) {
    this._secretsEncryptionConfig.internalValue = value;
  }
  public resetSecretsEncryptionConfig() {
    this._secretsEncryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsEncryptionConfigInput() {
    return this._secretsEncryptionConfig.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cluster_cidr ClusterTemplate#cluster_cidr}
  */
  readonly clusterCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_args ClusterTemplate#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_binds ClusterTemplate#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_env ClusterTemplate#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#image ClusterTemplate#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#service_cluster_ip_range ClusterTemplate#service_cluster_ip_range}
  */
  readonly serviceClusterIpRange?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_cidr: cdktf.stringToTerraform(struct!.clusterCidr),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
    service_cluster_ip_range: cdktf.stringToTerraform(struct!.serviceClusterIpRange),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_cidr: {
      value: cdktf.stringToHclTerraform(struct!.clusterCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cluster_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.serviceClusterIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCidr = this._clusterCidr;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._serviceClusterIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceClusterIpRange = this._serviceClusterIpRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterCidr = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
      this._serviceClusterIpRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterCidr = value.clusterCidr;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
      this._serviceClusterIpRange = value.serviceClusterIpRange;
    }
  }

  // cluster_cidr - computed: true, optional: true, required: false
  private _clusterCidr?: string; 
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }
  public set clusterCidr(value: string) {
    this._clusterCidr = value;
  }
  public resetClusterCidr() {
    this._clusterCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCidrInput() {
    return this._clusterCidr;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: false, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: false, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // service_cluster_ip_range - computed: true, optional: true, required: false
  private _serviceClusterIpRange?: string; 
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }
  public set serviceClusterIpRange(value: string) {
    this._serviceClusterIpRange = value;
  }
  public resetServiceClusterIpRange() {
    this._serviceClusterIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClusterIpRangeInput() {
    return this._serviceClusterIpRange;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cluster_dns_server ClusterTemplate#cluster_dns_server}
  */
  readonly clusterDnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cluster_domain ClusterTemplate#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_args ClusterTemplate#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_binds ClusterTemplate#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_env ClusterTemplate#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#fail_swap_on ClusterTemplate#fail_swap_on}
  */
  readonly failSwapOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#generate_serving_certificate ClusterTemplate#generate_serving_certificate}
  */
  readonly generateServingCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#image ClusterTemplate#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#infra_container_image ClusterTemplate#infra_container_image}
  */
  readonly infraContainerImage?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_dns_server: cdktf.stringToTerraform(struct!.clusterDnsServer),
    cluster_domain: cdktf.stringToTerraform(struct!.clusterDomain),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    fail_swap_on: cdktf.booleanToTerraform(struct!.failSwapOn),
    generate_serving_certificate: cdktf.booleanToTerraform(struct!.generateServingCertificate),
    image: cdktf.stringToTerraform(struct!.image),
    infra_container_image: cdktf.stringToTerraform(struct!.infraContainerImage),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.clusterDnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fail_swap_on: {
      value: cdktf.booleanToHclTerraform(struct!.failSwapOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate_serving_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.generateServingCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infra_container_image: {
      value: cdktf.stringToHclTerraform(struct!.infraContainerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsServer = this._clusterDnsServer;
    }
    if (this._clusterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomain = this._clusterDomain;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._failSwapOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.failSwapOn = this._failSwapOn;
    }
    if (this._generateServingCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateServingCertificate = this._generateServingCertificate;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._infraContainerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraContainerImage = this._infraContainerImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterDnsServer = undefined;
      this._clusterDomain = undefined;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._failSwapOn = undefined;
      this._generateServingCertificate = undefined;
      this._image = undefined;
      this._infraContainerImage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterDnsServer = value.clusterDnsServer;
      this._clusterDomain = value.clusterDomain;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._failSwapOn = value.failSwapOn;
      this._generateServingCertificate = value.generateServingCertificate;
      this._image = value.image;
      this._infraContainerImage = value.infraContainerImage;
    }
  }

  // cluster_dns_server - computed: true, optional: true, required: false
  private _clusterDnsServer?: string; 
  public get clusterDnsServer() {
    return this.getStringAttribute('cluster_dns_server');
  }
  public set clusterDnsServer(value: string) {
    this._clusterDnsServer = value;
  }
  public resetClusterDnsServer() {
    this._clusterDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsServerInput() {
    return this._clusterDnsServer;
  }

  // cluster_domain - computed: true, optional: true, required: false
  private _clusterDomain?: string; 
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }
  public set clusterDomain(value: string) {
    this._clusterDomain = value;
  }
  public resetClusterDomain() {
    this._clusterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainInput() {
    return this._clusterDomain;
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: false, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: false, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // fail_swap_on - computed: true, optional: true, required: false
  private _failSwapOn?: boolean | cdktf.IResolvable; 
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }
  public set failSwapOn(value: boolean | cdktf.IResolvable) {
    this._failSwapOn = value;
  }
  public resetFailSwapOn() {
    this._failSwapOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failSwapOnInput() {
    return this._failSwapOn;
  }

  // generate_serving_certificate - computed: false, optional: true, required: false
  private _generateServingCertificate?: boolean | cdktf.IResolvable; 
  public get generateServingCertificate() {
    return this.getBooleanAttribute('generate_serving_certificate');
  }
  public set generateServingCertificate(value: boolean | cdktf.IResolvable) {
    this._generateServingCertificate = value;
  }
  public resetGenerateServingCertificate() {
    this._generateServingCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateServingCertificateInput() {
    return this._generateServingCertificate;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // infra_container_image - computed: true, optional: true, required: false
  private _infraContainerImage?: string; 
  public get infraContainerImage() {
    return this.getStringAttribute('infra_container_image');
  }
  public set infraContainerImage(value: string) {
    this._infraContainerImage = value;
  }
  public resetInfraContainerImage() {
    this._infraContainerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraContainerImageInput() {
    return this._infraContainerImage;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_args ClusterTemplate#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_binds ClusterTemplate#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_env ClusterTemplate#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#image ClusterTemplate#image}
  */
  readonly image?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
    }
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: false, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: false, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_args ClusterTemplate#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_binds ClusterTemplate#extra_binds}
  */
  readonly extraBinds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#extra_env ClusterTemplate#extra_env}
  */
  readonly extraEnv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#image ClusterTemplate#image}
  */
  readonly image?: string;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_binds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraBinds),
    extra_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraEnv),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_binds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraBinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraBinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraBinds = this._extraBinds;
    }
    if (this._extraEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnv = this._extraEnv;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extraArgs = undefined;
      this._extraBinds = undefined;
      this._extraEnv = undefined;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extraArgs = value.extraArgs;
      this._extraBinds = value.extraBinds;
      this._extraEnv = value.extraEnv;
      this._image = value.image;
    }
  }

  // extra_args - computed: true, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_binds - computed: false, optional: true, required: false
  private _extraBinds?: string[]; 
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }
  public set extraBinds(value: string[]) {
    this._extraBinds = value;
  }
  public resetExtraBinds() {
    this._extraBinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraBindsInput() {
    return this._extraBinds;
  }

  // extra_env - computed: false, optional: true, required: false
  private _extraEnv?: string[]; 
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }
  public set extraEnv(value: string[]) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices {
  /**
  * etcd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#etcd ClusterTemplate#etcd}
  */
  readonly etcd?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd;
  /**
  * kube_api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kube_api ClusterTemplate#kube_api}
  */
  readonly kubeApi?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi;
  /**
  * kube_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kube_controller ClusterTemplate#kube_controller}
  */
  readonly kubeController?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController;
  /**
  * kubelet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kubelet ClusterTemplate#kubelet}
  */
  readonly kubelet?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet;
  /**
  * kubeproxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kubeproxy ClusterTemplate#kubeproxy}
  */
  readonly kubeproxy?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy;
  /**
  * scheduler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#scheduler ClusterTemplate#scheduler}
  */
  readonly scheduler?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etcd: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdToTerraform(struct!.etcd),
    kube_api: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiToTerraform(struct!.kubeApi),
    kube_controller: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerToTerraform(struct!.kubeController),
    kubelet: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletToTerraform(struct!.kubelet),
    kubeproxy: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyToTerraform(struct!.kubeproxy),
    scheduler: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerToTerraform(struct!.scheduler),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etcd: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdToHclTerraform(struct!.etcd),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdList",
    },
    kube_api: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiToHclTerraform(struct!.kubeApi),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiList",
    },
    kube_controller: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerToHclTerraform(struct!.kubeController),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerList",
    },
    kubelet: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletToHclTerraform(struct!.kubelet),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletList",
    },
    kubeproxy: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyToHclTerraform(struct!.kubeproxy),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyList",
    },
    scheduler: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerToHclTerraform(struct!.scheduler),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etcd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcd = this._etcd?.internalValue;
    }
    if (this._kubeApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApi = this._kubeApi?.internalValue;
    }
    if (this._kubeController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeController = this._kubeController?.internalValue;
    }
    if (this._kubelet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubelet = this._kubelet?.internalValue;
    }
    if (this._kubeproxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeproxy = this._kubeproxy?.internalValue;
    }
    if (this._scheduler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._etcd.internalValue = undefined;
      this._kubeApi.internalValue = undefined;
      this._kubeController.internalValue = undefined;
      this._kubelet.internalValue = undefined;
      this._kubeproxy.internalValue = undefined;
      this._scheduler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._etcd.internalValue = value.etcd;
      this._kubeApi.internalValue = value.kubeApi;
      this._kubeController.internalValue = value.kubeController;
      this._kubelet.internalValue = value.kubelet;
      this._kubeproxy.internalValue = value.kubeproxy;
      this._scheduler.internalValue = value.scheduler;
    }
  }

  // etcd - computed: false, optional: true, required: false
  private _etcd = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdOutputReference(this, "etcd");
  public get etcd() {
    return this._etcd;
  }
  public putEtcd(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd) {
    this._etcd.internalValue = value;
  }
  public resetEtcd() {
    this._etcd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdInput() {
    return this._etcd.internalValue;
  }

  // kube_api - computed: false, optional: true, required: false
  private _kubeApi = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiOutputReference(this, "kube_api");
  public get kubeApi() {
    return this._kubeApi;
  }
  public putKubeApi(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi) {
    this._kubeApi.internalValue = value;
  }
  public resetKubeApi() {
    this._kubeApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiInput() {
    return this._kubeApi.internalValue;
  }

  // kube_controller - computed: false, optional: true, required: false
  private _kubeController = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerOutputReference(this, "kube_controller");
  public get kubeController() {
    return this._kubeController;
  }
  public putKubeController(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController) {
    this._kubeController.internalValue = value;
  }
  public resetKubeController() {
    this._kubeController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeControllerInput() {
    return this._kubeController.internalValue;
  }

  // kubelet - computed: false, optional: true, required: false
  private _kubelet = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletOutputReference(this, "kubelet");
  public get kubelet() {
    return this._kubelet;
  }
  public putKubelet(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet) {
    this._kubelet.internalValue = value;
  }
  public resetKubelet() {
    this._kubelet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletInput() {
    return this._kubelet.internalValue;
  }

  // kubeproxy - computed: false, optional: true, required: false
  private _kubeproxy = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyOutputReference(this, "kubeproxy");
  public get kubeproxy() {
    return this._kubeproxy;
  }
  public putKubeproxy(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy) {
    this._kubeproxy.internalValue = value;
  }
  public resetKubeproxy() {
    this._kubeproxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeproxyInput() {
    return this._kubeproxy.internalValue;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerOutputReference(this, "scheduler");
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler) {
    this._scheduler.internalValue = value;
  }
  public resetScheduler() {
    this._scheduler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#delete_local_data ClusterTemplate#delete_local_data}
  */
  readonly deleteLocalData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#force ClusterTemplate#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#grace_period ClusterTemplate#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ignore_daemon_sets ClusterTemplate#ignore_daemon_sets}
  */
  readonly ignoreDaemonSets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#timeout ClusterTemplate#timeout}
  */
  readonly timeout?: number;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_local_data: cdktf.booleanToTerraform(struct!.deleteLocalData),
    force: cdktf.booleanToTerraform(struct!.force),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    ignore_daemon_sets: cdktf.booleanToTerraform(struct!.ignoreDaemonSets),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_local_data: {
      value: cdktf.booleanToHclTerraform(struct!.deleteLocalData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_daemon_sets: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDaemonSets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteLocalData !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteLocalData = this._deleteLocalData;
    }
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._ignoreDaemonSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDaemonSets = this._ignoreDaemonSets;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteLocalData = undefined;
      this._force = undefined;
      this._gracePeriod = undefined;
      this._ignoreDaemonSets = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteLocalData = value.deleteLocalData;
      this._force = value.force;
      this._gracePeriod = value.gracePeriod;
      this._ignoreDaemonSets = value.ignoreDaemonSets;
      this._timeout = value.timeout;
    }
  }

  // delete_local_data - computed: false, optional: true, required: false
  private _deleteLocalData?: boolean | cdktf.IResolvable; 
  public get deleteLocalData() {
    return this.getBooleanAttribute('delete_local_data');
  }
  public set deleteLocalData(value: boolean | cdktf.IResolvable) {
    this._deleteLocalData = value;
  }
  public resetDeleteLocalData() {
    this._deleteLocalData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteLocalDataInput() {
    return this._deleteLocalData;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // ignore_daemon_sets - computed: false, optional: true, required: false
  private _ignoreDaemonSets?: boolean | cdktf.IResolvable; 
  public get ignoreDaemonSets() {
    return this.getBooleanAttribute('ignore_daemon_sets');
  }
  public set ignoreDaemonSets(value: boolean | cdktf.IResolvable) {
    this._ignoreDaemonSets = value;
  }
  public resetIgnoreDaemonSets() {
    this._ignoreDaemonSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDaemonSetsInput() {
    return this._ignoreDaemonSets;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#drain ClusterTemplate#drain}
  */
  readonly drain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_unavailable_controlplane ClusterTemplate#max_unavailable_controlplane}
  */
  readonly maxUnavailableControlplane?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#max_unavailable_worker ClusterTemplate#max_unavailable_worker}
  */
  readonly maxUnavailableWorker?: string;
  /**
  * drain_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#drain_input ClusterTemplate#drain_input}
  */
  readonly drainInput?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain: cdktf.booleanToTerraform(struct!.drain),
    max_unavailable_controlplane: cdktf.stringToTerraform(struct!.maxUnavailableControlplane),
    max_unavailable_worker: cdktf.stringToTerraform(struct!.maxUnavailableWorker),
    drain_input: clusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputToTerraform(struct!.drainInput),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain: {
      value: cdktf.booleanToHclTerraform(struct!.drain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_unavailable_controlplane: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailableControlplane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable_worker: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailableWorker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drain_input: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputToHclTerraform(struct!.drainInput),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drain !== undefined) {
      hasAnyValues = true;
      internalValueResult.drain = this._drain;
    }
    if (this._maxUnavailableControlplane !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailableControlplane = this._maxUnavailableControlplane;
    }
    if (this._maxUnavailableWorker !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailableWorker = this._maxUnavailableWorker;
    }
    if (this._drainInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainInput = this._drainInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drain = undefined;
      this._maxUnavailableControlplane = undefined;
      this._maxUnavailableWorker = undefined;
      this._drainInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drain = value.drain;
      this._maxUnavailableControlplane = value.maxUnavailableControlplane;
      this._maxUnavailableWorker = value.maxUnavailableWorker;
      this._drainInput.internalValue = value.drainInput;
    }
  }

  // drain - computed: false, optional: true, required: false
  private _drain?: boolean | cdktf.IResolvable; 
  public get drain() {
    return this.getBooleanAttribute('drain');
  }
  public set drain(value: boolean | cdktf.IResolvable) {
    this._drain = value;
  }
  public resetDrain() {
    this._drain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainTfInput() {
    return this._drain;
  }

  // max_unavailable_controlplane - computed: false, optional: true, required: false
  private _maxUnavailableControlplane?: string; 
  public get maxUnavailableControlplane() {
    return this.getStringAttribute('max_unavailable_controlplane');
  }
  public set maxUnavailableControlplane(value: string) {
    this._maxUnavailableControlplane = value;
  }
  public resetMaxUnavailableControlplane() {
    this._maxUnavailableControlplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableControlplaneInput() {
    return this._maxUnavailableControlplane;
  }

  // max_unavailable_worker - computed: false, optional: true, required: false
  private _maxUnavailableWorker?: string; 
  public get maxUnavailableWorker() {
    return this.getStringAttribute('max_unavailable_worker');
  }
  public set maxUnavailableWorker(value: string) {
    this._maxUnavailableWorker = value;
  }
  public resetMaxUnavailableWorker() {
    this._maxUnavailableWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableWorkerInput() {
    return this._maxUnavailableWorker;
  }

  // drain_input - computed: false, optional: true, required: false
  private _drainInput = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputOutputReference(this, "drain_input");
  public get drainInput() {
    return this._drainInput;
  }
  public putDrainInput(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput) {
    this._drainInput.internalValue = value;
  }
  public resetDrainInput() {
    this._drainInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainInputInput() {
    return this._drainInput.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfigRkeConfig {
  /**
  * Optional duration in seconds of addon job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#addon_job_timeout ClusterTemplate#addon_job_timeout}
  */
  readonly addonJobTimeout?: number;
  /**
  * Optional addons descripton to deploy on rke cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#addons ClusterTemplate#addons}
  */
  readonly addons?: string;
  /**
  * Optional addons yaml manisfest to deploy on rke cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#addons_include ClusterTemplate#addons_include}
  */
  readonly addonsInclude?: string[];
  /**
  * Enable/disable using cri-dockerd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#enable_cri_dockerd ClusterTemplate#enable_cri_dockerd}
  */
  readonly enableCriDockerd?: boolean | cdktf.IResolvable;
  /**
  * Optional ignore docker version on nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ignore_docker_version ClusterTemplate#ignore_docker_version}
  */
  readonly ignoreDockerVersion?: boolean | cdktf.IResolvable;
  /**
  * Optional kubernetes version to deploy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#kubernetes_version ClusterTemplate#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Optional prefix to customize kubernetes path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#prefix_path ClusterTemplate#prefix_path}
  */
  readonly prefixPath?: string;
  /**
  * Optional use ssh agent auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ssh_agent_auth ClusterTemplate#ssh_agent_auth}
  */
  readonly sshAgentAuth?: boolean | cdktf.IResolvable;
  /**
  * Optional cluster level SSH certificate path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ssh_cert_path ClusterTemplate#ssh_cert_path}
  */
  readonly sshCertPath?: string;
  /**
  * Optional cluster level SSH private key path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ssh_key_path ClusterTemplate#ssh_key_path}
  */
  readonly sshKeyPath?: string;
  /**
  * Optional prefix to customize kubernetes path for windows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#win_prefix_path ClusterTemplate#win_prefix_path}
  */
  readonly winPrefixPath?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#authentication ClusterTemplate#authentication}
  */
  readonly authentication?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#authorization ClusterTemplate#authorization}
  */
  readonly authorization?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization;
  /**
  * bastion_host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#bastion_host ClusterTemplate#bastion_host}
  */
  readonly bastionHost?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost;
  /**
  * cloud_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cloud_provider ClusterTemplate#cloud_provider}
  */
  readonly cloudProvider?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#dns ClusterTemplate#dns}
  */
  readonly dns?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns;
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#ingress ClusterTemplate#ingress}
  */
  readonly ingress?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#monitoring ClusterTemplate#monitoring}
  */
  readonly monitoring?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#network ClusterTemplate#network}
  */
  readonly network?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#nodes ClusterTemplate#nodes}
  */
  readonly nodes?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes[] | cdktf.IResolvable;
  /**
  * private_registries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#private_registries ClusterTemplate#private_registries}
  */
  readonly privateRegistries?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#services ClusterTemplate#services}
  */
  readonly services?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices;
  /**
  * upgrade_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#upgrade_strategy ClusterTemplate#upgrade_strategy}
  */
  readonly upgradeStrategy?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy;
}

export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addon_job_timeout: cdktf.numberToTerraform(struct!.addonJobTimeout),
    addons: cdktf.stringToTerraform(struct!.addons),
    addons_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addonsInclude),
    enable_cri_dockerd: cdktf.booleanToTerraform(struct!.enableCriDockerd),
    ignore_docker_version: cdktf.booleanToTerraform(struct!.ignoreDockerVersion),
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    prefix_path: cdktf.stringToTerraform(struct!.prefixPath),
    ssh_agent_auth: cdktf.booleanToTerraform(struct!.sshAgentAuth),
    ssh_cert_path: cdktf.stringToTerraform(struct!.sshCertPath),
    ssh_key_path: cdktf.stringToTerraform(struct!.sshKeyPath),
    win_prefix_path: cdktf.stringToTerraform(struct!.winPrefixPath),
    authentication: clusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationToTerraform(struct!.authentication),
    authorization: clusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationToTerraform(struct!.authorization),
    bastion_host: clusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostToTerraform(struct!.bastionHost),
    cloud_provider: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderToTerraform(struct!.cloudProvider),
    dns: clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsToTerraform(struct!.dns),
    ingress: clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressToTerraform(struct!.ingress),
    monitoring: clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringToTerraform(struct!.monitoring),
    network: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkToTerraform(struct!.network),
    nodes: cdktf.listMapper(clusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesToTerraform, true)(struct!.nodes),
    private_registries: cdktf.listMapper(clusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesToTerraform, true)(struct!.privateRegistries),
    services: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesToTerraform(struct!.services),
    upgrade_strategy: clusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyToTerraform(struct!.upgradeStrategy),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigRkeConfigToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigOutputReference | ClusterTemplateTemplateRevisionsClusterConfigRkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addon_job_timeout: {
      value: cdktf.numberToHclTerraform(struct!.addonJobTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    addons: {
      value: cdktf.stringToHclTerraform(struct!.addons),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addons_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addonsInclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_cri_dockerd: {
      value: cdktf.booleanToHclTerraform(struct!.enableCriDockerd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_docker_version: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDockerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kubernetes_version: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_path: {
      value: cdktf.stringToHclTerraform(struct!.prefixPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_agent_auth: {
      value: cdktf.booleanToHclTerraform(struct!.sshAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.sshCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_path: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    win_prefix_path: {
      value: cdktf.stringToHclTerraform(struct!.winPrefixPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationList",
    },
    authorization: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationList",
    },
    bastion_host: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostToHclTerraform(struct!.bastionHost),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostList",
    },
    cloud_provider: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderToHclTerraform(struct!.cloudProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderList",
    },
    dns: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsList",
    },
    ingress: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressList",
    },
    monitoring: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringList",
    },
    network: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkList",
    },
    nodes: {
      value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesList",
    },
    private_registries: {
      value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesToHclTerraform, true)(struct!.privateRegistries),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesList",
    },
    services: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesList",
    },
    upgrade_strategy: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyToHclTerraform(struct!.upgradeStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigRkeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfigRkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonJobTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonJobTimeout = this._addonJobTimeout;
    }
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._addonsInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonsInclude = this._addonsInclude;
    }
    if (this._enableCriDockerd !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCriDockerd = this._enableCriDockerd;
    }
    if (this._ignoreDockerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDockerVersion = this._ignoreDockerVersion;
    }
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._prefixPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPath = this._prefixPath;
    }
    if (this._sshAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAgentAuth = this._sshAgentAuth;
    }
    if (this._sshCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshCertPath = this._sshCertPath;
    }
    if (this._sshKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyPath = this._sshKeyPath;
    }
    if (this._winPrefixPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.winPrefixPath = this._winPrefixPath;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._bastionHost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionHost = this._bastionHost?.internalValue;
    }
    if (this._cloudProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._privateRegistries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateRegistries = this._privateRegistries?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._upgradeStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeStrategy = this._upgradeStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addonJobTimeout = undefined;
      this._addons = undefined;
      this._addonsInclude = undefined;
      this._enableCriDockerd = undefined;
      this._ignoreDockerVersion = undefined;
      this._kubernetesVersion = undefined;
      this._prefixPath = undefined;
      this._sshAgentAuth = undefined;
      this._sshCertPath = undefined;
      this._sshKeyPath = undefined;
      this._winPrefixPath = undefined;
      this._authentication.internalValue = undefined;
      this._authorization.internalValue = undefined;
      this._bastionHost.internalValue = undefined;
      this._cloudProvider.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._monitoring.internalValue = undefined;
      this._network.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._privateRegistries.internalValue = undefined;
      this._services.internalValue = undefined;
      this._upgradeStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addonJobTimeout = value.addonJobTimeout;
      this._addons = value.addons;
      this._addonsInclude = value.addonsInclude;
      this._enableCriDockerd = value.enableCriDockerd;
      this._ignoreDockerVersion = value.ignoreDockerVersion;
      this._kubernetesVersion = value.kubernetesVersion;
      this._prefixPath = value.prefixPath;
      this._sshAgentAuth = value.sshAgentAuth;
      this._sshCertPath = value.sshCertPath;
      this._sshKeyPath = value.sshKeyPath;
      this._winPrefixPath = value.winPrefixPath;
      this._authentication.internalValue = value.authentication;
      this._authorization.internalValue = value.authorization;
      this._bastionHost.internalValue = value.bastionHost;
      this._cloudProvider.internalValue = value.cloudProvider;
      this._dns.internalValue = value.dns;
      this._ingress.internalValue = value.ingress;
      this._monitoring.internalValue = value.monitoring;
      this._network.internalValue = value.network;
      this._nodes.internalValue = value.nodes;
      this._privateRegistries.internalValue = value.privateRegistries;
      this._services.internalValue = value.services;
      this._upgradeStrategy.internalValue = value.upgradeStrategy;
    }
  }

  // addon_job_timeout - computed: true, optional: true, required: false
  private _addonJobTimeout?: number; 
  public get addonJobTimeout() {
    return this.getNumberAttribute('addon_job_timeout');
  }
  public set addonJobTimeout(value: number) {
    this._addonJobTimeout = value;
  }
  public resetAddonJobTimeout() {
    this._addonJobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonJobTimeoutInput() {
    return this._addonJobTimeout;
  }

  // addons - computed: false, optional: true, required: false
  private _addons?: string; 
  public get addons() {
    return this.getStringAttribute('addons');
  }
  public set addons(value: string) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // addons_include - computed: false, optional: true, required: false
  private _addonsInclude?: string[]; 
  public get addonsInclude() {
    return this.getListAttribute('addons_include');
  }
  public set addonsInclude(value: string[]) {
    this._addonsInclude = value;
  }
  public resetAddonsInclude() {
    this._addonsInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsIncludeInput() {
    return this._addonsInclude;
  }

  // enable_cri_dockerd - computed: false, optional: true, required: false
  private _enableCriDockerd?: boolean | cdktf.IResolvable; 
  public get enableCriDockerd() {
    return this.getBooleanAttribute('enable_cri_dockerd');
  }
  public set enableCriDockerd(value: boolean | cdktf.IResolvable) {
    this._enableCriDockerd = value;
  }
  public resetEnableCriDockerd() {
    this._enableCriDockerd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCriDockerdInput() {
    return this._enableCriDockerd;
  }

  // ignore_docker_version - computed: false, optional: true, required: false
  private _ignoreDockerVersion?: boolean | cdktf.IResolvable; 
  public get ignoreDockerVersion() {
    return this.getBooleanAttribute('ignore_docker_version');
  }
  public set ignoreDockerVersion(value: boolean | cdktf.IResolvable) {
    this._ignoreDockerVersion = value;
  }
  public resetIgnoreDockerVersion() {
    this._ignoreDockerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDockerVersionInput() {
    return this._ignoreDockerVersion;
  }

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // prefix_path - computed: true, optional: true, required: false
  private _prefixPath?: string; 
  public get prefixPath() {
    return this.getStringAttribute('prefix_path');
  }
  public set prefixPath(value: string) {
    this._prefixPath = value;
  }
  public resetPrefixPath() {
    this._prefixPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPathInput() {
    return this._prefixPath;
  }

  // ssh_agent_auth - computed: false, optional: true, required: false
  private _sshAgentAuth?: boolean | cdktf.IResolvable; 
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }
  public set sshAgentAuth(value: boolean | cdktf.IResolvable) {
    this._sshAgentAuth = value;
  }
  public resetSshAgentAuth() {
    this._sshAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAgentAuthInput() {
    return this._sshAgentAuth;
  }

  // ssh_cert_path - computed: true, optional: true, required: false
  private _sshCertPath?: string; 
  public get sshCertPath() {
    return this.getStringAttribute('ssh_cert_path');
  }
  public set sshCertPath(value: string) {
    this._sshCertPath = value;
  }
  public resetSshCertPath() {
    this._sshCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertPathInput() {
    return this._sshCertPath;
  }

  // ssh_key_path - computed: true, optional: true, required: false
  private _sshKeyPath?: string; 
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }
  public set sshKeyPath(value: string) {
    this._sshKeyPath = value;
  }
  public resetSshKeyPath() {
    this._sshKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyPathInput() {
    return this._sshKeyPath;
  }

  // win_prefix_path - computed: true, optional: true, required: false
  private _winPrefixPath?: string; 
  public get winPrefixPath() {
    return this.getStringAttribute('win_prefix_path');
  }
  public set winPrefixPath(value: string) {
    this._winPrefixPath = value;
  }
  public resetWinPrefixPath() {
    this._winPrefixPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winPrefixPathInput() {
    return this._winPrefixPath;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // bastion_host - computed: false, optional: true, required: false
  private _bastionHost = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostOutputReference(this, "bastion_host");
  public get bastionHost() {
    return this._bastionHost;
  }
  public putBastionHost(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost) {
    this._bastionHost.internalValue = value;
  }
  public resetBastionHost() {
    this._bastionHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionHostInput() {
    return this._bastionHost.internalValue;
  }

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOutputReference(this, "cloud_provider");
  public get cloudProvider() {
    return this._cloudProvider;
  }
  public putCloudProvider(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider) {
    this._cloudProvider.internalValue = value;
  }
  public resetCloudProvider() {
    this._cloudProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // private_registries - computed: false, optional: true, required: false
  private _privateRegistries = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesList(this, "private_registries", false);
  public get privateRegistries() {
    return this._privateRegistries;
  }
  public putPrivateRegistries(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries[] | cdktf.IResolvable) {
    this._privateRegistries.internalValue = value;
  }
  public resetPrivateRegistries() {
    this._privateRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistriesInput() {
    return this._privateRegistries.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // upgrade_strategy - computed: false, optional: true, required: false
  private _upgradeStrategy = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyOutputReference(this, "upgrade_strategy");
  public get upgradeStrategy() {
    return this._upgradeStrategy;
  }
  public putUpgradeStrategy(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy) {
    this._upgradeStrategy.internalValue = value;
  }
  public resetUpgradeStrategy() {
    this._upgradeStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeStrategyInput() {
    return this._upgradeStrategy.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsClusterConfig {
  /**
  * Default cluster role for project members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#default_cluster_role_for_project_members ClusterTemplate#default_cluster_role_for_project_members}
  */
  readonly defaultClusterRoleForProjectMembers?: string;
  /**
  * Default pod security admission configuration template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#default_pod_security_admission_configuration_template_name ClusterTemplate#default_pod_security_admission_configuration_template_name}
  */
  readonly defaultPodSecurityAdmissionConfigurationTemplateName?: string;
  /**
  * Desired agent image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#desired_agent_image ClusterTemplate#desired_agent_image}
  */
  readonly desiredAgentImage?: string;
  /**
  * Desired auth image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#desired_auth_image ClusterTemplate#desired_auth_image}
  */
  readonly desiredAuthImage?: string;
  /**
  * Docker Root Dir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#docker_root_dir ClusterTemplate#docker_root_dir}
  */
  readonly dockerRootDir?: string;
  /**
  * Enable project network isolation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#enable_network_policy ClusterTemplate#enable_network_policy}
  */
  readonly enableNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Windows prefered cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#windows_prefered_cluster ClusterTemplate#windows_prefered_cluster}
  */
  readonly windowsPreferedCluster?: boolean | cdktf.IResolvable;
  /**
  * cluster_auth_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cluster_auth_endpoint ClusterTemplate#cluster_auth_endpoint}
  */
  readonly clusterAuthEndpoint?: ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint;
  /**
  * rke_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#rke_config ClusterTemplate#rke_config}
  */
  readonly rkeConfig: ClusterTemplateTemplateRevisionsClusterConfigRkeConfig;
}

export function clusterTemplateTemplateRevisionsClusterConfigToTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigOutputReference | ClusterTemplateTemplateRevisionsClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_cluster_role_for_project_members: cdktf.stringToTerraform(struct!.defaultClusterRoleForProjectMembers),
    default_pod_security_admission_configuration_template_name: cdktf.stringToTerraform(struct!.defaultPodSecurityAdmissionConfigurationTemplateName),
    desired_agent_image: cdktf.stringToTerraform(struct!.desiredAgentImage),
    desired_auth_image: cdktf.stringToTerraform(struct!.desiredAuthImage),
    docker_root_dir: cdktf.stringToTerraform(struct!.dockerRootDir),
    enable_network_policy: cdktf.booleanToTerraform(struct!.enableNetworkPolicy),
    windows_prefered_cluster: cdktf.booleanToTerraform(struct!.windowsPreferedCluster),
    cluster_auth_endpoint: clusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointToTerraform(struct!.clusterAuthEndpoint),
    rke_config: clusterTemplateTemplateRevisionsClusterConfigRkeConfigToTerraform(struct!.rkeConfig),
  }
}


export function clusterTemplateTemplateRevisionsClusterConfigToHclTerraform(struct?: ClusterTemplateTemplateRevisionsClusterConfigOutputReference | ClusterTemplateTemplateRevisionsClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_cluster_role_for_project_members: {
      value: cdktf.stringToHclTerraform(struct!.defaultClusterRoleForProjectMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_pod_security_admission_configuration_template_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultPodSecurityAdmissionConfigurationTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_agent_image: {
      value: cdktf.stringToHclTerraform(struct!.desiredAgentImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_auth_image: {
      value: cdktf.stringToHclTerraform(struct!.desiredAuthImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_root_dir: {
      value: cdktf.stringToHclTerraform(struct!.dockerRootDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_network_policy: {
      value: cdktf.booleanToHclTerraform(struct!.enableNetworkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    windows_prefered_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.windowsPreferedCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_auth_endpoint: {
      value: clusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointToHclTerraform(struct!.clusterAuthEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointList",
    },
    rke_config: {
      value: clusterTemplateTemplateRevisionsClusterConfigRkeConfigToHclTerraform(struct!.rkeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigRkeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTemplateTemplateRevisionsClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultClusterRoleForProjectMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultClusterRoleForProjectMembers = this._defaultClusterRoleForProjectMembers;
    }
    if (this._defaultPodSecurityAdmissionConfigurationTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPodSecurityAdmissionConfigurationTemplateName = this._defaultPodSecurityAdmissionConfigurationTemplateName;
    }
    if (this._desiredAgentImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredAgentImage = this._desiredAgentImage;
    }
    if (this._desiredAuthImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredAuthImage = this._desiredAuthImage;
    }
    if (this._dockerRootDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRootDir = this._dockerRootDir;
    }
    if (this._enableNetworkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkPolicy = this._enableNetworkPolicy;
    }
    if (this._windowsPreferedCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsPreferedCluster = this._windowsPreferedCluster;
    }
    if (this._clusterAuthEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAuthEndpoint = this._clusterAuthEndpoint?.internalValue;
    }
    if (this._rkeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rkeConfig = this._rkeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultClusterRoleForProjectMembers = undefined;
      this._defaultPodSecurityAdmissionConfigurationTemplateName = undefined;
      this._desiredAgentImage = undefined;
      this._desiredAuthImage = undefined;
      this._dockerRootDir = undefined;
      this._enableNetworkPolicy = undefined;
      this._windowsPreferedCluster = undefined;
      this._clusterAuthEndpoint.internalValue = undefined;
      this._rkeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultClusterRoleForProjectMembers = value.defaultClusterRoleForProjectMembers;
      this._defaultPodSecurityAdmissionConfigurationTemplateName = value.defaultPodSecurityAdmissionConfigurationTemplateName;
      this._desiredAgentImage = value.desiredAgentImage;
      this._desiredAuthImage = value.desiredAuthImage;
      this._dockerRootDir = value.dockerRootDir;
      this._enableNetworkPolicy = value.enableNetworkPolicy;
      this._windowsPreferedCluster = value.windowsPreferedCluster;
      this._clusterAuthEndpoint.internalValue = value.clusterAuthEndpoint;
      this._rkeConfig.internalValue = value.rkeConfig;
    }
  }

  // default_cluster_role_for_project_members - computed: true, optional: true, required: false
  private _defaultClusterRoleForProjectMembers?: string; 
  public get defaultClusterRoleForProjectMembers() {
    return this.getStringAttribute('default_cluster_role_for_project_members');
  }
  public set defaultClusterRoleForProjectMembers(value: string) {
    this._defaultClusterRoleForProjectMembers = value;
  }
  public resetDefaultClusterRoleForProjectMembers() {
    this._defaultClusterRoleForProjectMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClusterRoleForProjectMembersInput() {
    return this._defaultClusterRoleForProjectMembers;
  }

  // default_pod_security_admission_configuration_template_name - computed: true, optional: true, required: false
  private _defaultPodSecurityAdmissionConfigurationTemplateName?: string; 
  public get defaultPodSecurityAdmissionConfigurationTemplateName() {
    return this.getStringAttribute('default_pod_security_admission_configuration_template_name');
  }
  public set defaultPodSecurityAdmissionConfigurationTemplateName(value: string) {
    this._defaultPodSecurityAdmissionConfigurationTemplateName = value;
  }
  public resetDefaultPodSecurityAdmissionConfigurationTemplateName() {
    this._defaultPodSecurityAdmissionConfigurationTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPodSecurityAdmissionConfigurationTemplateNameInput() {
    return this._defaultPodSecurityAdmissionConfigurationTemplateName;
  }

  // desired_agent_image - computed: true, optional: true, required: false
  private _desiredAgentImage?: string; 
  public get desiredAgentImage() {
    return this.getStringAttribute('desired_agent_image');
  }
  public set desiredAgentImage(value: string) {
    this._desiredAgentImage = value;
  }
  public resetDesiredAgentImage() {
    this._desiredAgentImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredAgentImageInput() {
    return this._desiredAgentImage;
  }

  // desired_auth_image - computed: true, optional: true, required: false
  private _desiredAuthImage?: string; 
  public get desiredAuthImage() {
    return this.getStringAttribute('desired_auth_image');
  }
  public set desiredAuthImage(value: string) {
    this._desiredAuthImage = value;
  }
  public resetDesiredAuthImage() {
    this._desiredAuthImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredAuthImageInput() {
    return this._desiredAuthImage;
  }

  // docker_root_dir - computed: true, optional: true, required: false
  private _dockerRootDir?: string; 
  public get dockerRootDir() {
    return this.getStringAttribute('docker_root_dir');
  }
  public set dockerRootDir(value: string) {
    this._dockerRootDir = value;
  }
  public resetDockerRootDir() {
    this._dockerRootDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRootDirInput() {
    return this._dockerRootDir;
  }

  // enable_network_policy - computed: false, optional: true, required: false
  private _enableNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get enableNetworkPolicy() {
    return this.getBooleanAttribute('enable_network_policy');
  }
  public set enableNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._enableNetworkPolicy = value;
  }
  public resetEnableNetworkPolicy() {
    this._enableNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkPolicyInput() {
    return this._enableNetworkPolicy;
  }

  // windows_prefered_cluster - computed: false, optional: true, required: false
  private _windowsPreferedCluster?: boolean | cdktf.IResolvable; 
  public get windowsPreferedCluster() {
    return this.getBooleanAttribute('windows_prefered_cluster');
  }
  public set windowsPreferedCluster(value: boolean | cdktf.IResolvable) {
    this._windowsPreferedCluster = value;
  }
  public resetWindowsPreferedCluster() {
    this._windowsPreferedCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsPreferedClusterInput() {
    return this._windowsPreferedCluster;
  }

  // cluster_auth_endpoint - computed: false, optional: true, required: false
  private _clusterAuthEndpoint = new ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointOutputReference(this, "cluster_auth_endpoint");
  public get clusterAuthEndpoint() {
    return this._clusterAuthEndpoint;
  }
  public putClusterAuthEndpoint(value: ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint) {
    this._clusterAuthEndpoint.internalValue = value;
  }
  public resetClusterAuthEndpoint() {
    this._clusterAuthEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAuthEndpointInput() {
    return this._clusterAuthEndpoint.internalValue;
  }

  // rke_config - computed: false, optional: false, required: true
  private _rkeConfig = new ClusterTemplateTemplateRevisionsClusterConfigRkeConfigOutputReference(this, "rke_config");
  public get rkeConfig() {
    return this._rkeConfig;
  }
  public putRkeConfig(value: ClusterTemplateTemplateRevisionsClusterConfigRkeConfig) {
    this._rkeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rkeConfigInput() {
    return this._rkeConfig.internalValue;
  }
}
export interface ClusterTemplateTemplateRevisionsQuestions {
  /**
  * Default variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#default ClusterTemplate#default}
  */
  readonly default: string;
  /**
  * Required variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#required ClusterTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Variable type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#type ClusterTemplate#type}
  */
  readonly type?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#variable ClusterTemplate#variable}
  */
  readonly variable: string;
}

export function clusterTemplateTemplateRevisionsQuestionsToTerraform(struct?: ClusterTemplateTemplateRevisionsQuestions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function clusterTemplateTemplateRevisionsQuestionsToHclTerraform(struct?: ClusterTemplateTemplateRevisionsQuestions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsQuestionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisionsQuestions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisionsQuestions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._required = undefined;
      this._type = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._required = value.required;
      this._type = value.type;
      this._variable = value.variable;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class ClusterTemplateTemplateRevisionsQuestionsList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisionsQuestions[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsQuestionsOutputReference {
    return new ClusterTemplateTemplateRevisionsQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTemplateRevisions {
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#annotations ClusterTemplate#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Default cluster template revision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#default ClusterTemplate#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Enable cluster template revision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#enabled ClusterTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#labels ClusterTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Cluster template revision name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#name ClusterTemplate#name}
  */
  readonly name: string;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#cluster_config ClusterTemplate#cluster_config}
  */
  readonly clusterConfig: ClusterTemplateTemplateRevisionsClusterConfig;
  /**
  * questions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#questions ClusterTemplate#questions}
  */
  readonly questions?: ClusterTemplateTemplateRevisionsQuestions[] | cdktf.IResolvable;
}

export function clusterTemplateTemplateRevisionsToTerraform(struct?: ClusterTemplateTemplateRevisions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    default: cdktf.booleanToTerraform(struct!.default),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    cluster_config: clusterTemplateTemplateRevisionsClusterConfigToTerraform(struct!.clusterConfig),
    questions: cdktf.listMapper(clusterTemplateTemplateRevisionsQuestionsToTerraform, true)(struct!.questions),
  }
}


export function clusterTemplateTemplateRevisionsToHclTerraform(struct?: ClusterTemplateTemplateRevisions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_config: {
      value: clusterTemplateTemplateRevisionsClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsClusterConfigList",
    },
    questions: {
      value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsQuestionsToHclTerraform, true)(struct!.questions),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTemplateTemplateRevisionsQuestionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTemplateTemplateRevisionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTemplateTemplateRevisions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    if (this._questions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.questions = this._questions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTemplateRevisions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._default = undefined;
      this._enabled = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._clusterConfig.internalValue = undefined;
      this._questions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._default = value.default;
      this._enabled = value.enabled;
      this._labels = value.labels;
      this._name = value.name;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._questions.internalValue = value.questions;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // cluster_template_id - computed: true, optional: false, required: false
  public get clusterTemplateId() {
    return this.getStringAttribute('cluster_template_id');
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new ClusterTemplateTemplateRevisionsClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: ClusterTemplateTemplateRevisionsClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // questions - computed: false, optional: true, required: false
  private _questions = new ClusterTemplateTemplateRevisionsQuestionsList(this, "questions", false);
  public get questions() {
    return this._questions;
  }
  public putQuestions(value: ClusterTemplateTemplateRevisionsQuestions[] | cdktf.IResolvable) {
    this._questions.internalValue = value;
  }
  public resetQuestions() {
    this._questions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionsInput() {
    return this._questions.internalValue;
  }
}

export class ClusterTemplateTemplateRevisionsList extends cdktf.ComplexList {
  public internalValue? : ClusterTemplateTemplateRevisions[] | cdktf.IResolvable

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
  public get(index: number): ClusterTemplateTemplateRevisionsOutputReference {
    return new ClusterTemplateTemplateRevisionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#create ClusterTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#delete ClusterTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#update ClusterTemplate#update}
  */
  readonly update?: string;
}

export function clusterTemplateTimeoutsToTerraform(struct?: ClusterTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function clusterTemplateTimeoutsToHclTerraform(struct?: ClusterTemplateTimeouts | cdktf.IResolvable): any {
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

export class ClusterTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTemplateTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTemplateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template rancher2_cluster_template}
*/
export class ClusterTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_cluster_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterTemplate to import
  * @param importFromId The id of the existing ClusterTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_cluster_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/cluster_template rancher2_cluster_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_cluster_template',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._members.internalValue = config.members;
    this._templateRevisions.internalValue = config.templateRevisions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // default_revision_id - computed: true, optional: false, required: false
  public get defaultRevisionId() {
    return this.getStringAttribute('default_revision_id');
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

  // members - computed: false, optional: true, required: false
  private _members = new ClusterTemplateMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ClusterTemplateMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // template_revisions - computed: false, optional: true, required: false
  private _templateRevisions = new ClusterTemplateTemplateRevisionsList(this, "template_revisions", false);
  public get templateRevisions() {
    return this._templateRevisions;
  }
  public putTemplateRevisions(value: ClusterTemplateTemplateRevisions[] | cdktf.IResolvable) {
    this._templateRevisions.internalValue = value;
  }
  public resetTemplateRevisions() {
    this._templateRevisions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRevisionsInput() {
    return this._templateRevisions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTemplateTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      members: cdktf.listMapper(clusterTemplateMembersToTerraform, true)(this._members.internalValue),
      template_revisions: cdktf.listMapper(clusterTemplateTemplateRevisionsToTerraform, true)(this._templateRevisions.internalValue),
      timeouts: clusterTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(clusterTemplateMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterTemplateMembersList",
      },
      template_revisions: {
        value: cdktf.listMapperHcl(clusterTemplateTemplateRevisionsToHclTerraform, true)(this._templateRevisions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterTemplateTemplateRevisionsList",
      },
      timeouts: {
        value: clusterTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
