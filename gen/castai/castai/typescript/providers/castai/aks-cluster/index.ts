// https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure AD application ID that is created and used by CAST AI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#client_id AksCluster#client_id}
  */
  readonly clientId: string;
  /**
  * Azure AD application password that will be used by CAST AI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#client_secret AksCluster#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Should CAST AI remove nodes managed by CAST.AI on disconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#delete_nodes_on_disconnect AksCluster#delete_nodes_on_disconnect}
  */
  readonly deleteNodesOnDisconnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#id AksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * AKS cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#name AksCluster#name}
  */
  readonly name: string;
  /**
  * Azure resource group in which nodes are and will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#node_resource_group AksCluster#node_resource_group}
  */
  readonly nodeResourceGroup: string;
  /**
  * AKS cluster region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#region AksCluster#region}
  */
  readonly region: string;
  /**
  * ID of the Azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#subscription_id AksCluster#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Azure AD tenant ID from the used subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#tenant_id AksCluster#tenant_id}
  */
  readonly tenantId: string;
  /**
  * http_proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#http_proxy_config AksCluster#http_proxy_config}
  */
  readonly httpProxyConfig?: AksClusterHttpProxyConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#timeouts AksCluster#timeouts}
  */
  readonly timeouts?: AksClusterTimeouts;
}
export interface AksClusterHttpProxyConfig {
  /**
  * Address to use for proxying HTTP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#http_proxy AksCluster#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Address to use for proxying HTTPS/TLS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#https_proxy AksCluster#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * List of destinations that should not go through proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#no_proxy AksCluster#no_proxy}
  */
  readonly noProxy?: string[];
}

export function aksClusterHttpProxyConfigToTerraform(struct?: AksClusterHttpProxyConfigOutputReference | AksClusterHttpProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noProxy),
  }
}


export function aksClusterHttpProxyConfigToHclTerraform(struct?: AksClusterHttpProxyConfigOutputReference | AksClusterHttpProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noProxy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AksClusterHttpProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AksClusterHttpProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AksClusterHttpProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
    }
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string[]; 
  public get noProxy() {
    return this.getListAttribute('no_proxy');
  }
  public set noProxy(value: string[]) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }
}
export interface AksClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#create AksCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#delete AksCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#update AksCluster#update}
  */
  readonly update?: string;
}

export function aksClusterTimeoutsToTerraform(struct?: AksClusterTimeouts | cdktf.IResolvable): any {
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


export function aksClusterTimeoutsToHclTerraform(struct?: AksClusterTimeouts | cdktf.IResolvable): any {
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

export class AksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AksClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AksClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster castai_aks_cluster}
*/
export class AksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_aks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AksCluster to import
  * @param importFromId The id of the existing AksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_aks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.6.0/docs/resources/aks_cluster castai_aks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: AksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_aks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.6.0',
        providerVersionConstraint: '8.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._deleteNodesOnDisconnect = config.deleteNodesOnDisconnect;
    this._id = config.id;
    this._name = config.name;
    this._nodeResourceGroup = config.nodeResourceGroup;
    this._region = config.region;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._httpProxyConfig.internalValue = config.httpProxyConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // cluster_token - computed: true, optional: false, required: false
  public get clusterToken() {
    return this.getStringAttribute('cluster_token');
  }

  // credentials_id - computed: true, optional: false, required: false
  public get credentialsId() {
    return this.getStringAttribute('credentials_id');
  }

  // delete_nodes_on_disconnect - computed: false, optional: true, required: false
  private _deleteNodesOnDisconnect?: boolean | cdktf.IResolvable; 
  public get deleteNodesOnDisconnect() {
    return this.getBooleanAttribute('delete_nodes_on_disconnect');
  }
  public set deleteNodesOnDisconnect(value: boolean | cdktf.IResolvable) {
    this._deleteNodesOnDisconnect = value;
  }
  public resetDeleteNodesOnDisconnect() {
    this._deleteNodesOnDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNodesOnDisconnectInput() {
    return this._deleteNodesOnDisconnect;
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

  // node_resource_group - computed: false, optional: false, required: true
  private _nodeResourceGroup?: string; 
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }
  public set nodeResourceGroup(value: string) {
    this._nodeResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeResourceGroupInput() {
    return this._nodeResourceGroup;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // http_proxy_config - computed: false, optional: true, required: false
  private _httpProxyConfig = new AksClusterHttpProxyConfigOutputReference(this, "http_proxy_config");
  public get httpProxyConfig() {
    return this._httpProxyConfig;
  }
  public putHttpProxyConfig(value: AksClusterHttpProxyConfig) {
    this._httpProxyConfig.internalValue = value;
  }
  public resetHttpProxyConfig() {
    this._httpProxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyConfigInput() {
    return this._httpProxyConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AksClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AksClusterTimeouts) {
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      delete_nodes_on_disconnect: cdktf.booleanToTerraform(this._deleteNodesOnDisconnect),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_resource_group: cdktf.stringToTerraform(this._nodeResourceGroup),
      region: cdktf.stringToTerraform(this._region),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      http_proxy_config: aksClusterHttpProxyConfigToTerraform(this._httpProxyConfig.internalValue),
      timeouts: aksClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_nodes_on_disconnect: {
        value: cdktf.booleanToHclTerraform(this._deleteNodesOnDisconnect),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_resource_group: {
        value: cdktf.stringToHclTerraform(this._nodeResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy_config: {
        value: aksClusterHttpProxyConfigToHclTerraform(this._httpProxyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AksClusterHttpProxyConfigList",
      },
      timeouts: {
        value: aksClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AksClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
