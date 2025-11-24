// https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kubeconfig path set after the the cluster is created or by the user to override defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#kubeconfig_path Cluster#kubeconfig_path}
  */
  readonly kubeconfigPath?: string;
  /**
  * The kind name that is given to the created cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * The node_image that kind will use (ex: kindest/node:v1.29.7).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#node_image Cluster#node_image}
  */
  readonly nodeImage?: string;
  /**
  * Defines wether or not the provider will wait for the control plane to be ready. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#wait_for_ready Cluster#wait_for_ready}
  */
  readonly waitForReady?: boolean | cdktf.IResolvable;
  /**
  * kind_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#kind_config Cluster#kind_config}
  */
  readonly kindConfig?: ClusterKindConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#timeouts Cluster#timeouts}
  */
  readonly timeouts?: ClusterTimeouts;
}
export interface ClusterKindConfigNetworking {
  /**
  * WARNING: It is _strongly_ recommended that you keep this the default (127.0.0.1) for security reasons. However it is possible to change this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#api_server_address Cluster#api_server_address}
  */
  readonly apiServerAddress?: string;
  /**
  * By default the API server listens on a random open port. You may choose a specific port but probably don't need to in most cases. Using a random port makes it easier to spin up multiple clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#api_server_port Cluster#api_server_port}
  */
  readonly apiServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#disable_default_cni Cluster#disable_default_cni}
  */
  readonly disableDefaultCni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#dns_search Cluster#dns_search}
  */
  readonly dnsSearch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#ip_family Cluster#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#kube_proxy_mode Cluster#kube_proxy_mode}
  */
  readonly kubeProxyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#pod_subnet Cluster#pod_subnet}
  */
  readonly podSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#service_subnet Cluster#service_subnet}
  */
  readonly serviceSubnet?: string;
}

export function clusterKindConfigNetworkingToTerraform(struct?: ClusterKindConfigNetworkingOutputReference | ClusterKindConfigNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_address: cdktf.stringToTerraform(struct!.apiServerAddress),
    api_server_port: cdktf.numberToTerraform(struct!.apiServerPort),
    disable_default_cni: cdktf.booleanToTerraform(struct!.disableDefaultCni),
    dns_search: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSearch),
    ip_family: cdktf.stringToTerraform(struct!.ipFamily),
    kube_proxy_mode: cdktf.stringToTerraform(struct!.kubeProxyMode),
    pod_subnet: cdktf.stringToTerraform(struct!.podSubnet),
    service_subnet: cdktf.stringToTerraform(struct!.serviceSubnet),
  }
}


export function clusterKindConfigNetworkingToHclTerraform(struct?: ClusterKindConfigNetworkingOutputReference | ClusterKindConfigNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_address: {
      value: cdktf.stringToHclTerraform(struct!.apiServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_server_port: {
      value: cdktf.numberToHclTerraform(struct!.apiServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_default_cni: {
      value: cdktf.booleanToHclTerraform(struct!.disableDefaultCni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_search: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSearch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_family: {
      value: cdktf.stringToHclTerraform(struct!.ipFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_proxy_mode: {
      value: cdktf.stringToHclTerraform(struct!.kubeProxyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_subnet: {
      value: cdktf.stringToHclTerraform(struct!.podSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_subnet: {
      value: cdktf.stringToHclTerraform(struct!.serviceSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterKindConfigNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterKindConfigNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerAddress = this._apiServerAddress;
    }
    if (this._apiServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerPort = this._apiServerPort;
    }
    if (this._disableDefaultCni !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDefaultCni = this._disableDefaultCni;
    }
    if (this._dnsSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSearch = this._dnsSearch;
    }
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._kubeProxyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeProxyMode = this._kubeProxyMode;
    }
    if (this._podSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnet = this._podSubnet;
    }
    if (this._serviceSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSubnet = this._serviceSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterKindConfigNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServerAddress = undefined;
      this._apiServerPort = undefined;
      this._disableDefaultCni = undefined;
      this._dnsSearch = undefined;
      this._ipFamily = undefined;
      this._kubeProxyMode = undefined;
      this._podSubnet = undefined;
      this._serviceSubnet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServerAddress = value.apiServerAddress;
      this._apiServerPort = value.apiServerPort;
      this._disableDefaultCni = value.disableDefaultCni;
      this._dnsSearch = value.dnsSearch;
      this._ipFamily = value.ipFamily;
      this._kubeProxyMode = value.kubeProxyMode;
      this._podSubnet = value.podSubnet;
      this._serviceSubnet = value.serviceSubnet;
    }
  }

  // api_server_address - computed: false, optional: true, required: false
  private _apiServerAddress?: string; 
  public get apiServerAddress() {
    return this.getStringAttribute('api_server_address');
  }
  public set apiServerAddress(value: string) {
    this._apiServerAddress = value;
  }
  public resetApiServerAddress() {
    this._apiServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerAddressInput() {
    return this._apiServerAddress;
  }

  // api_server_port - computed: false, optional: true, required: false
  private _apiServerPort?: number; 
  public get apiServerPort() {
    return this.getNumberAttribute('api_server_port');
  }
  public set apiServerPort(value: number) {
    this._apiServerPort = value;
  }
  public resetApiServerPort() {
    this._apiServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerPortInput() {
    return this._apiServerPort;
  }

  // disable_default_cni - computed: false, optional: true, required: false
  private _disableDefaultCni?: boolean | cdktf.IResolvable; 
  public get disableDefaultCni() {
    return this.getBooleanAttribute('disable_default_cni');
  }
  public set disableDefaultCni(value: boolean | cdktf.IResolvable) {
    this._disableDefaultCni = value;
  }
  public resetDisableDefaultCni() {
    this._disableDefaultCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDefaultCniInput() {
    return this._disableDefaultCni;
  }

  // dns_search - computed: false, optional: true, required: false
  private _dnsSearch?: string[]; 
  public get dnsSearch() {
    return this.getListAttribute('dns_search');
  }
  public set dnsSearch(value: string[]) {
    this._dnsSearch = value;
  }
  public resetDnsSearch() {
    this._dnsSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchInput() {
    return this._dnsSearch;
  }

  // ip_family - computed: false, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // kube_proxy_mode - computed: false, optional: true, required: false
  private _kubeProxyMode?: string; 
  public get kubeProxyMode() {
    return this.getStringAttribute('kube_proxy_mode');
  }
  public set kubeProxyMode(value: string) {
    this._kubeProxyMode = value;
  }
  public resetKubeProxyMode() {
    this._kubeProxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeProxyModeInput() {
    return this._kubeProxyMode;
  }

  // pod_subnet - computed: false, optional: true, required: false
  private _podSubnet?: string; 
  public get podSubnet() {
    return this.getStringAttribute('pod_subnet');
  }
  public set podSubnet(value: string) {
    this._podSubnet = value;
  }
  public resetPodSubnet() {
    this._podSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetInput() {
    return this._podSubnet;
  }

  // service_subnet - computed: false, optional: true, required: false
  private _serviceSubnet?: string; 
  public get serviceSubnet() {
    return this.getStringAttribute('service_subnet');
  }
  public set serviceSubnet(value: string) {
    this._serviceSubnet = value;
  }
  public resetServiceSubnet() {
    this._serviceSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSubnetInput() {
    return this._serviceSubnet;
  }
}
export interface ClusterKindConfigNodeExtraMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#container_path Cluster#container_path}
  */
  readonly containerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#host_path Cluster#host_path}
  */
  readonly hostPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#propagation Cluster#propagation}
  */
  readonly propagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#read_only Cluster#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#selinux_relabel Cluster#selinux_relabel}
  */
  readonly selinuxRelabel?: boolean | cdktf.IResolvable;
}

export function clusterKindConfigNodeExtraMountsToTerraform(struct?: ClusterKindConfigNodeExtraMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    propagation: cdktf.stringToTerraform(struct!.propagation),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    selinux_relabel: cdktf.booleanToTerraform(struct!.selinuxRelabel),
  }
}


export function clusterKindConfigNodeExtraMountsToHclTerraform(struct?: ClusterKindConfigNodeExtraMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_path: {
      value: cdktf.stringToHclTerraform(struct!.containerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_path: {
      value: cdktf.stringToHclTerraform(struct!.hostPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagation: {
      value: cdktf.stringToHclTerraform(struct!.propagation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selinux_relabel: {
      value: cdktf.booleanToHclTerraform(struct!.selinuxRelabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterKindConfigNodeExtraMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterKindConfigNodeExtraMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPath = this._containerPath;
    }
    if (this._hostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath;
    }
    if (this._propagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagation = this._propagation;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._selinuxRelabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.selinuxRelabel = this._selinuxRelabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterKindConfigNodeExtraMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPath = undefined;
      this._hostPath = undefined;
      this._propagation = undefined;
      this._readOnly = undefined;
      this._selinuxRelabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPath = value.containerPath;
      this._hostPath = value.hostPath;
      this._propagation = value.propagation;
      this._readOnly = value.readOnly;
      this._selinuxRelabel = value.selinuxRelabel;
    }
  }

  // container_path - computed: false, optional: true, required: false
  private _containerPath?: string; 
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }
  public set containerPath(value: string) {
    this._containerPath = value;
  }
  public resetContainerPath() {
    this._containerPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPathInput() {
    return this._containerPath;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath?: string; 
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }
  public set hostPath(value: string) {
    this._hostPath = value;
  }
  public resetHostPath() {
    this._hostPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath;
  }

  // propagation - computed: false, optional: true, required: false
  private _propagation?: string; 
  public get propagation() {
    return this.getStringAttribute('propagation');
  }
  public set propagation(value: string) {
    this._propagation = value;
  }
  public resetPropagation() {
    this._propagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationInput() {
    return this._propagation;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // selinux_relabel - computed: false, optional: true, required: false
  private _selinuxRelabel?: boolean | cdktf.IResolvable; 
  public get selinuxRelabel() {
    return this.getBooleanAttribute('selinux_relabel');
  }
  public set selinuxRelabel(value: boolean | cdktf.IResolvable) {
    this._selinuxRelabel = value;
  }
  public resetSelinuxRelabel() {
    this._selinuxRelabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selinuxRelabelInput() {
    return this._selinuxRelabel;
  }
}

export class ClusterKindConfigNodeExtraMountsList extends cdktf.ComplexList {
  public internalValue? : ClusterKindConfigNodeExtraMounts[] | cdktf.IResolvable

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
  public get(index: number): ClusterKindConfigNodeExtraMountsOutputReference {
    return new ClusterKindConfigNodeExtraMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterKindConfigNodeExtraPortMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#container_port Cluster#container_port}
  */
  readonly containerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#host_port Cluster#host_port}
  */
  readonly hostPort?: number;
  /**
  * optional: set the bind address on the host, 0.0.0.0 is the current default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#listen_address Cluster#listen_address}
  */
  readonly listenAddress?: string;
  /**
  * optional: set the protocol to one of TCP, UDP, SCTP. TCP is the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#protocol Cluster#protocol}
  */
  readonly protocol?: string;
}

export function clusterKindConfigNodeExtraPortMappingsToTerraform(struct?: ClusterKindConfigNodeExtraPortMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    listen_address: cdktf.stringToTerraform(struct!.listenAddress),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function clusterKindConfigNodeExtraPortMappingsToHclTerraform(struct?: ClusterKindConfigNodeExtraPortMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_port: {
      value: cdktf.numberToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listen_address: {
      value: cdktf.stringToHclTerraform(struct!.listenAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterKindConfigNodeExtraPortMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterKindConfigNodeExtraPortMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._listenAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenAddress = this._listenAddress;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterKindConfigNodeExtraPortMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._hostPort = undefined;
      this._listenAddress = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._hostPort = value.hostPort;
      this._listenAddress = value.listenAddress;
      this._protocol = value.protocol;
    }
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }

  // listen_address - computed: false, optional: true, required: false
  private _listenAddress?: string; 
  public get listenAddress() {
    return this.getStringAttribute('listen_address');
  }
  public set listenAddress(value: string) {
    this._listenAddress = value;
  }
  public resetListenAddress() {
    this._listenAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenAddressInput() {
    return this._listenAddress;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ClusterKindConfigNodeExtraPortMappingsList extends cdktf.ComplexList {
  public internalValue? : ClusterKindConfigNodeExtraPortMappings[] | cdktf.IResolvable

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
  public get(index: number): ClusterKindConfigNodeExtraPortMappingsOutputReference {
    return new ClusterKindConfigNodeExtraPortMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterKindConfigNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#kubeadm_config_patches Cluster#kubeadm_config_patches}
  */
  readonly kubeadmConfigPatches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#labels Cluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#role Cluster#role}
  */
  readonly role?: string;
  /**
  * extra_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#extra_mounts Cluster#extra_mounts}
  */
  readonly extraMounts?: ClusterKindConfigNodeExtraMounts[] | cdktf.IResolvable;
  /**
  * extra_port_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#extra_port_mappings Cluster#extra_port_mappings}
  */
  readonly extraPortMappings?: ClusterKindConfigNodeExtraPortMappings[] | cdktf.IResolvable;
}

export function clusterKindConfigNodeToTerraform(struct?: ClusterKindConfigNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    kubeadm_config_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubeadmConfigPatches),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    role: cdktf.stringToTerraform(struct!.role),
    extra_mounts: cdktf.listMapper(clusterKindConfigNodeExtraMountsToTerraform, true)(struct!.extraMounts),
    extra_port_mappings: cdktf.listMapper(clusterKindConfigNodeExtraPortMappingsToTerraform, true)(struct!.extraPortMappings),
  }
}


export function clusterKindConfigNodeToHclTerraform(struct?: ClusterKindConfigNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeadm_config_patches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubeadmConfigPatches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_mounts: {
      value: cdktf.listMapperHcl(clusterKindConfigNodeExtraMountsToHclTerraform, true)(struct!.extraMounts),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterKindConfigNodeExtraMountsList",
    },
    extra_port_mappings: {
      value: cdktf.listMapperHcl(clusterKindConfigNodeExtraPortMappingsToHclTerraform, true)(struct!.extraPortMappings),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterKindConfigNodeExtraPortMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterKindConfigNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterKindConfigNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._kubeadmConfigPatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeadmConfigPatches = this._kubeadmConfigPatches;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._extraMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraMounts = this._extraMounts?.internalValue;
    }
    if (this._extraPortMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraPortMappings = this._extraPortMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterKindConfigNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._kubeadmConfigPatches = undefined;
      this._labels = undefined;
      this._role = undefined;
      this._extraMounts.internalValue = undefined;
      this._extraPortMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._kubeadmConfigPatches = value.kubeadmConfigPatches;
      this._labels = value.labels;
      this._role = value.role;
      this._extraMounts.internalValue = value.extraMounts;
      this._extraPortMappings.internalValue = value.extraPortMappings;
    }
  }

  // image - computed: false, optional: true, required: false
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

  // kubeadm_config_patches - computed: false, optional: true, required: false
  private _kubeadmConfigPatches?: string[]; 
  public get kubeadmConfigPatches() {
    return this.getListAttribute('kubeadm_config_patches');
  }
  public set kubeadmConfigPatches(value: string[]) {
    this._kubeadmConfigPatches = value;
  }
  public resetKubeadmConfigPatches() {
    this._kubeadmConfigPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeadmConfigPatchesInput() {
    return this._kubeadmConfigPatches;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // extra_mounts - computed: false, optional: true, required: false
  private _extraMounts = new ClusterKindConfigNodeExtraMountsList(this, "extra_mounts", false);
  public get extraMounts() {
    return this._extraMounts;
  }
  public putExtraMounts(value: ClusterKindConfigNodeExtraMounts[] | cdktf.IResolvable) {
    this._extraMounts.internalValue = value;
  }
  public resetExtraMounts() {
    this._extraMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraMountsInput() {
    return this._extraMounts.internalValue;
  }

  // extra_port_mappings - computed: false, optional: true, required: false
  private _extraPortMappings = new ClusterKindConfigNodeExtraPortMappingsList(this, "extra_port_mappings", false);
  public get extraPortMappings() {
    return this._extraPortMappings;
  }
  public putExtraPortMappings(value: ClusterKindConfigNodeExtraPortMappings[] | cdktf.IResolvable) {
    this._extraPortMappings.internalValue = value;
  }
  public resetExtraPortMappings() {
    this._extraPortMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraPortMappingsInput() {
    return this._extraPortMappings.internalValue;
  }
}

export class ClusterKindConfigNodeList extends cdktf.ComplexList {
  public internalValue? : ClusterKindConfigNode[] | cdktf.IResolvable

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
  public get(index: number): ClusterKindConfigNodeOutputReference {
    return new ClusterKindConfigNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterKindConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#api_version Cluster#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#containerd_config_patches Cluster#containerd_config_patches}
  */
  readonly containerdConfigPatches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#feature_gates Cluster#feature_gates}
  */
  readonly featureGates?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#kind Cluster#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#runtime_config Cluster#runtime_config}
  */
  readonly runtimeConfig?: { [key: string]: string };
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#networking Cluster#networking}
  */
  readonly networking?: ClusterKindConfigNetworking;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#node Cluster#node}
  */
  readonly nodeAttribute?: ClusterKindConfigNode[] | cdktf.IResolvable;
}

export function clusterKindConfigToTerraform(struct?: ClusterKindConfigOutputReference | ClusterKindConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    containerd_config_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerdConfigPatches),
    feature_gates: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.featureGates),
    kind: cdktf.stringToTerraform(struct!.kind),
    runtime_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeConfig),
    networking: clusterKindConfigNetworkingToTerraform(struct!.networking),
    node: cdktf.listMapper(clusterKindConfigNodeToTerraform, true)(struct!.nodeAttribute),
  }
}


export function clusterKindConfigToHclTerraform(struct?: ClusterKindConfigOutputReference | ClusterKindConfig): any {
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
    containerd_config_patches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerdConfigPatches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    feature_gates: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.featureGates),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    networking: {
      value: clusterKindConfigNetworkingToHclTerraform(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterKindConfigNetworkingList",
    },
    node: {
      value: cdktf.listMapperHcl(clusterKindConfigNodeToHclTerraform, true)(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterKindConfigNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterKindConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterKindConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._containerdConfigPatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfigPatches = this._containerdConfigPatches;
    }
    if (this._featureGates !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._runtimeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeConfig = this._runtimeConfig;
    }
    if (this._networking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networking = this._networking?.internalValue;
    }
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterKindConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._containerdConfigPatches = undefined;
      this._featureGates = undefined;
      this._kind = undefined;
      this._runtimeConfig = undefined;
      this._networking.internalValue = undefined;
      this._node.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._containerdConfigPatches = value.containerdConfigPatches;
      this._featureGates = value.featureGates;
      this._kind = value.kind;
      this._runtimeConfig = value.runtimeConfig;
      this._networking.internalValue = value.networking;
      this._node.internalValue = value.nodeAttribute;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // containerd_config_patches - computed: false, optional: true, required: false
  private _containerdConfigPatches?: string[]; 
  public get containerdConfigPatches() {
    return this.getListAttribute('containerd_config_patches');
  }
  public set containerdConfigPatches(value: string[]) {
    this._containerdConfigPatches = value;
  }
  public resetContainerdConfigPatches() {
    this._containerdConfigPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigPatchesInput() {
    return this._containerdConfigPatches;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates?: { [key: string]: string }; 
  public get featureGates() {
    return this.getStringMapAttribute('feature_gates');
  }
  public set featureGates(value: { [key: string]: string }) {
    this._featureGates = value;
  }
  public resetFeatureGates() {
    this._featureGates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig?: { [key: string]: string }; 
  public get runtimeConfig() {
    return this.getStringMapAttribute('runtime_config');
  }
  public set runtimeConfig(value: { [key: string]: string }) {
    this._runtimeConfig = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new ClusterKindConfigNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: ClusterKindConfigNetworking) {
    this._networking.internalValue = value;
  }
  public resetNetworking() {
    this._networking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // node - computed: false, optional: true, required: false
  private _node = new ClusterKindConfigNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: ClusterKindConfigNode[] | cdktf.IResolvable) {
    this._node.internalValue = value;
  }
  public resetNodeAttribute() {
    this._node.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }
}
export interface ClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#create Cluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#delete Cluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#update Cluster#update}
  */
  readonly update?: string;
}

export function clusterTimeoutsToTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
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


export function clusterTimeoutsToHclTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
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

export class ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster kind_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kind_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kind_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tehcyx/kind/0.10.0/docs/resources/cluster kind_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'kind_cluster',
      terraformGeneratorMetadata: {
        providerName: 'kind',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._kubeconfigPath = config.kubeconfigPath;
    this._name = config.name;
    this._nodeImage = config.nodeImage;
    this._waitForReady = config.waitForReady;
    this._kindConfig.internalValue = config.kindConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // completed - computed: true, optional: false, required: false
  public get completed() {
    return this.getBooleanAttribute('completed');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // kubeconfig_path - computed: true, optional: true, required: false
  private _kubeconfigPath?: string; 
  public get kubeconfigPath() {
    return this.getStringAttribute('kubeconfig_path');
  }
  public set kubeconfigPath(value: string) {
    this._kubeconfigPath = value;
  }
  public resetKubeconfigPath() {
    this._kubeconfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigPathInput() {
    return this._kubeconfigPath;
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

  // node_image - computed: true, optional: true, required: false
  private _nodeImage?: string; 
  public get nodeImage() {
    return this.getStringAttribute('node_image');
  }
  public set nodeImage(value: string) {
    this._nodeImage = value;
  }
  public resetNodeImage() {
    this._nodeImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageInput() {
    return this._nodeImage;
  }

  // wait_for_ready - computed: false, optional: true, required: false
  private _waitForReady?: boolean | cdktf.IResolvable; 
  public get waitForReady() {
    return this.getBooleanAttribute('wait_for_ready');
  }
  public set waitForReady(value: boolean | cdktf.IResolvable) {
    this._waitForReady = value;
  }
  public resetWaitForReady() {
    this._waitForReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForReadyInput() {
    return this._waitForReady;
  }

  // kind_config - computed: false, optional: true, required: false
  private _kindConfig = new ClusterKindConfigOutputReference(this, "kind_config");
  public get kindConfig() {
    return this._kindConfig;
  }
  public putKindConfig(value: ClusterKindConfig) {
    this._kindConfig.internalValue = value;
  }
  public resetKindConfig() {
    this._kindConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindConfigInput() {
    return this._kindConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      kubeconfig_path: cdktf.stringToTerraform(this._kubeconfigPath),
      name: cdktf.stringToTerraform(this._name),
      node_image: cdktf.stringToTerraform(this._nodeImage),
      wait_for_ready: cdktf.booleanToTerraform(this._waitForReady),
      kind_config: clusterKindConfigToTerraform(this._kindConfig.internalValue),
      timeouts: clusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubeconfig_path: {
        value: cdktf.stringToHclTerraform(this._kubeconfigPath),
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
      node_image: {
        value: cdktf.stringToHclTerraform(this._nodeImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_ready: {
        value: cdktf.booleanToHclTerraform(this._waitForReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kind_config: {
        value: clusterKindConfigToHclTerraform(this._kindConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterKindConfigList",
      },
      timeouts: {
        value: clusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
