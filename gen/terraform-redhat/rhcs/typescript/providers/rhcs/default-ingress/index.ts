// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultIngressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the cluster. After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#cluster DefaultIngress#cluster}
  */
  readonly cluster: string;
  /**
  * Components route hostname for oauth, console, download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#cluster_routes_hostname DefaultIngress#cluster_routes_hostname}
  */
  readonly clusterRoutesHostname?: string;
  /**
  * Components route TLS secret reference for oauth, console, download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#cluster_routes_tls_secret_ref DefaultIngress#cluster_routes_tls_secret_ref}
  */
  readonly clusterRoutesTlsSecretRef?: string;
  /**
  * Component route parameters for oauth, console, downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#component_routes DefaultIngress#component_routes}
  */
  readonly componentRoutes?: { [key: string]: DefaultIngressComponentRoutes } | cdktf.IResolvable;
  /**
  * Excluded namespaces for ingress. Format should be a comma-separated list 'value1, value2...'. If no values are specified, all namespaces will be exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#excluded_namespaces DefaultIngress#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * Unique identifier of the ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#id DefaultIngress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of Load Balancer. Options are classic,nlb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#load_balancer_type DefaultIngress#load_balancer_type}
  */
  readonly loadBalancerType?: string;
  /**
  * Namespace Ownership Policy for ingress. Options are Strict,InterNamespaceAllowed. Default is 'Strict'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#route_namespace_ownership_policy DefaultIngress#route_namespace_ownership_policy}
  */
  readonly routeNamespaceOwnershipPolicy?: string;
  /**
  * Route Selectors for ingress. Format should be a comma-separated list of 'key=value'. If no label is specified, all routes will be exposed on both routers.For legacy ingress support these are inclusion labels, otherwise they are treated as exclusion label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#route_selectors DefaultIngress#route_selectors}
  */
  readonly routeSelectors?: { [key: string]: string };
  /**
  * Wildcard Policy for ingress. Options are WildcardsDisallowed,WildcardsAllowed. Default is 'WildcardsDisallowed'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#route_wildcard_policy DefaultIngress#route_wildcard_policy}
  */
  readonly routeWildcardPolicy?: string;
}
export interface DefaultIngressComponentRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#hostname DefaultIngress#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#tls_secret_ref DefaultIngress#tls_secret_ref}
  */
  readonly tlsSecretRef?: string;
}

export function defaultIngressComponentRoutesToTerraform(struct?: DefaultIngressComponentRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    tls_secret_ref: cdktf.stringToTerraform(struct!.tlsSecretRef),
  }
}


export function defaultIngressComponentRoutesToHclTerraform(struct?: DefaultIngressComponentRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.tlsSecretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultIngressComponentRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DefaultIngressComponentRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tlsSecretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecretRef = this._tlsSecretRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultIngressComponentRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._tlsSecretRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._tlsSecretRef = value.tlsSecretRef;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // tls_secret_ref - computed: false, optional: true, required: false
  private _tlsSecretRef?: string; 
  public get tlsSecretRef() {
    return this.getStringAttribute('tls_secret_ref');
  }
  public set tlsSecretRef(value: string) {
    this._tlsSecretRef = value;
  }
  public resetTlsSecretRef() {
    this._tlsSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecretRefInput() {
    return this._tlsSecretRef;
  }
}

export class DefaultIngressComponentRoutesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DefaultIngressComponentRoutes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DefaultIngressComponentRoutesOutputReference {
    return new DefaultIngressComponentRoutesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress rhcs_default_ingress}
*/
export class DefaultIngress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_default_ingress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultIngress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultIngress to import
  * @param importFromId The id of the existing DefaultIngress that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultIngress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_default_ingress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/default_ingress rhcs_default_ingress} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultIngressConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultIngressConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_default_ingress',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2',
        providerVersionConstraint: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._clusterRoutesHostname = config.clusterRoutesHostname;
    this._clusterRoutesTlsSecretRef = config.clusterRoutesTlsSecretRef;
    this._componentRoutes.internalValue = config.componentRoutes;
    this._excludedNamespaces = config.excludedNamespaces;
    this._id = config.id;
    this._loadBalancerType = config.loadBalancerType;
    this._routeNamespaceOwnershipPolicy = config.routeNamespaceOwnershipPolicy;
    this._routeSelectors = config.routeSelectors;
    this._routeWildcardPolicy = config.routeWildcardPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // cluster_routes_hostname - computed: false, optional: true, required: false
  private _clusterRoutesHostname?: string; 
  public get clusterRoutesHostname() {
    return this.getStringAttribute('cluster_routes_hostname');
  }
  public set clusterRoutesHostname(value: string) {
    this._clusterRoutesHostname = value;
  }
  public resetClusterRoutesHostname() {
    this._clusterRoutesHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutesHostnameInput() {
    return this._clusterRoutesHostname;
  }

  // cluster_routes_tls_secret_ref - computed: false, optional: true, required: false
  private _clusterRoutesTlsSecretRef?: string; 
  public get clusterRoutesTlsSecretRef() {
    return this.getStringAttribute('cluster_routes_tls_secret_ref');
  }
  public set clusterRoutesTlsSecretRef(value: string) {
    this._clusterRoutesTlsSecretRef = value;
  }
  public resetClusterRoutesTlsSecretRef() {
    this._clusterRoutesTlsSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutesTlsSecretRefInput() {
    return this._clusterRoutesTlsSecretRef;
  }

  // component_routes - computed: false, optional: true, required: false
  private _componentRoutes = new DefaultIngressComponentRoutesMap(this, "component_routes");
  public get componentRoutes() {
    return this._componentRoutes;
  }
  public putComponentRoutes(value: { [key: string]: DefaultIngressComponentRoutes } | cdktf.IResolvable) {
    this._componentRoutes.internalValue = value;
  }
  public resetComponentRoutes() {
    this._componentRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentRoutesInput() {
    return this._componentRoutes.internalValue;
  }

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces?: string[]; 
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }
  public set excludedNamespaces(value: string[]) {
    this._excludedNamespaces = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces;
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

  // load_balancer_type - computed: true, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // route_namespace_ownership_policy - computed: true, optional: true, required: false
  private _routeNamespaceOwnershipPolicy?: string; 
  public get routeNamespaceOwnershipPolicy() {
    return this.getStringAttribute('route_namespace_ownership_policy');
  }
  public set routeNamespaceOwnershipPolicy(value: string) {
    this._routeNamespaceOwnershipPolicy = value;
  }
  public resetRouteNamespaceOwnershipPolicy() {
    this._routeNamespaceOwnershipPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeNamespaceOwnershipPolicyInput() {
    return this._routeNamespaceOwnershipPolicy;
  }

  // route_selectors - computed: false, optional: true, required: false
  private _routeSelectors?: { [key: string]: string }; 
  public get routeSelectors() {
    return this.getStringMapAttribute('route_selectors');
  }
  public set routeSelectors(value: { [key: string]: string }) {
    this._routeSelectors = value;
  }
  public resetRouteSelectors() {
    this._routeSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSelectorsInput() {
    return this._routeSelectors;
  }

  // route_wildcard_policy - computed: true, optional: true, required: false
  private _routeWildcardPolicy?: string; 
  public get routeWildcardPolicy() {
    return this.getStringAttribute('route_wildcard_policy');
  }
  public set routeWildcardPolicy(value: string) {
    this._routeWildcardPolicy = value;
  }
  public resetRouteWildcardPolicy() {
    this._routeWildcardPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeWildcardPolicyInput() {
    return this._routeWildcardPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      cluster_routes_hostname: cdktf.stringToTerraform(this._clusterRoutesHostname),
      cluster_routes_tls_secret_ref: cdktf.stringToTerraform(this._clusterRoutesTlsSecretRef),
      component_routes: cdktf.hashMapper(defaultIngressComponentRoutesToTerraform)(this._componentRoutes.internalValue),
      excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedNamespaces),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
      route_namespace_ownership_policy: cdktf.stringToTerraform(this._routeNamespaceOwnershipPolicy),
      route_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(this._routeSelectors),
      route_wildcard_policy: cdktf.stringToTerraform(this._routeWildcardPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routes_hostname: {
        value: cdktf.stringToHclTerraform(this._clusterRoutesHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_routes_tls_secret_ref: {
        value: cdktf.stringToHclTerraform(this._clusterRoutesTlsSecretRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_routes: {
        value: cdktf.hashMapperHcl(defaultIngressComponentRoutesToHclTerraform)(this._componentRoutes.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DefaultIngressComponentRoutesMap",
      },
      excluded_namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedNamespaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_type: {
        value: cdktf.stringToHclTerraform(this._loadBalancerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_namespace_ownership_policy: {
        value: cdktf.stringToHclTerraform(this._routeNamespaceOwnershipPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_selectors: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._routeSelectors),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      route_wildcard_policy: {
        value: cdktf.stringToHclTerraform(this._routeWildcardPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
