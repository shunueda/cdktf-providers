// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the kubernetes cluster. For EKS clusters the ARN of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#cluster_id KubernetesCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kube config file content of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#kube_config KubernetesCluster#kube_config}
  */
  readonly kubeConfig?: string;
  /**
  * Whether to use the credential of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#use_csp_credentials KubernetesCluster#use_csp_credentials}
  */
  readonly useCspCredentials?: boolean | cdktf.IResolvable;
  /**
  * cluster_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#cluster_details KubernetesCluster#cluster_details}
  */
  readonly clusterDetails?: KubernetesClusterClusterDetails;
}
export interface KubernetesClusterClusterDetails {
  /**
  * Account ID owning the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#account_id KubernetesCluster#account_id}
  */
  readonly accountId: string;
  /**
  * Name of the account with management privileges over the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#account_name KubernetesCluster#account_name}
  */
  readonly accountName: string;
  /**
  * Compartment id if the cluster is deployed in OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#compartment KubernetesCluster#compartment}
  */
  readonly compartment?: string;
  /**
  * Whether the API server is publicly accessible outside the virtual network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#is_publicly_accessible KubernetesCluster#is_publicly_accessible}
  */
  readonly isPubliclyAccessible: boolean | cdktf.IResolvable;
  /**
  * Display name of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Network mode of the cluster. Possible values are FLAT, OVERLAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#network_mode KubernetesCluster#network_mode}
  */
  readonly networkMode: string;
  /**
  * Platform of the Kubernetes cluster, e.g. kops, kubeadm or any other free string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#platform KubernetesCluster#platform}
  */
  readonly platform: string;
  /**
  * Project name if the cluster is deployed in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#project KubernetesCluster#project}
  */
  readonly project?: string;
  /**
  * Region where the cluster is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#region KubernetesCluster#region}
  */
  readonly region: string;
  /**
  * Map of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Version of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}
  */
  readonly version: string;
  /**
  * Id of the VPC where the cluster is deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#vpc_id KubernetesCluster#vpc_id}
  */
  readonly vpcId: string;
}

export function kubernetesClusterClusterDetailsToTerraform(struct?: KubernetesClusterClusterDetailsOutputReference | KubernetesClusterClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    compartment: cdktf.stringToTerraform(struct!.compartment),
    is_publicly_accessible: cdktf.booleanToTerraform(struct!.isPubliclyAccessible),
    name: cdktf.stringToTerraform(struct!.name),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    platform: cdktf.stringToTerraform(struct!.platform),
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    version: cdktf.stringToTerraform(struct!.version),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function kubernetesClusterClusterDetailsToHclTerraform(struct?: KubernetesClusterClusterDetailsOutputReference | KubernetesClusterClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment: {
      value: cdktf.stringToHclTerraform(struct!.compartment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_publicly_accessible: {
      value: cdktf.booleanToHclTerraform(struct!.isPubliclyAccessible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
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
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterClusterDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterClusterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._compartment !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartment = this._compartment;
    }
    if (this._isPubliclyAccessible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPubliclyAccessible = this._isPubliclyAccessible;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterClusterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._accountName = undefined;
      this._compartment = undefined;
      this._isPubliclyAccessible = undefined;
      this._name = undefined;
      this._networkMode = undefined;
      this._platform = undefined;
      this._project = undefined;
      this._region = undefined;
      this._tags = undefined;
      this._version = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._accountName = value.accountName;
      this._compartment = value.compartment;
      this._isPubliclyAccessible = value.isPubliclyAccessible;
      this._name = value.name;
      this._networkMode = value.networkMode;
      this._platform = value.platform;
      this._project = value.project;
      this._region = value.region;
      this._tags = value.tags;
      this._version = value.version;
      this._vpcId = value.vpcId;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // compartment - computed: false, optional: true, required: false
  private _compartment?: string; 
  public get compartment() {
    return this.getStringAttribute('compartment');
  }
  public set compartment(value: string) {
    this._compartment = value;
  }
  public resetCompartment() {
    this._compartment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentInput() {
    return this._compartment;
  }

  // is_publicly_accessible - computed: false, optional: false, required: true
  private _isPubliclyAccessible?: boolean | cdktf.IResolvable; 
  public get isPubliclyAccessible() {
    return this.getBooleanAttribute('is_publicly_accessible');
  }
  public set isPubliclyAccessible(value: boolean | cdktf.IResolvable) {
    this._isPubliclyAccessible = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPubliclyAccessibleInput() {
    return this._isPubliclyAccessible;
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

  // network_mode - computed: false, optional: false, required: true
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster aviatrix_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCluster to import
  * @param importFromId The id of the existing KubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/kubernetes_cluster aviatrix_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._kubeConfig = config.kubeConfig;
    this._useCspCredentials = config.useCspCredentials;
    this._clusterDetails.internalValue = config.clusterDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // kube_config - computed: false, optional: true, required: false
  private _kubeConfig?: string; 
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }
  public set kubeConfig(value: string) {
    this._kubeConfig = value;
  }
  public resetKubeConfig() {
    this._kubeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig;
  }

  // use_csp_credentials - computed: false, optional: true, required: false
  private _useCspCredentials?: boolean | cdktf.IResolvable; 
  public get useCspCredentials() {
    return this.getBooleanAttribute('use_csp_credentials');
  }
  public set useCspCredentials(value: boolean | cdktf.IResolvable) {
    this._useCspCredentials = value;
  }
  public resetUseCspCredentials() {
    this._useCspCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCspCredentialsInput() {
    return this._useCspCredentials;
  }

  // cluster_details - computed: false, optional: true, required: false
  private _clusterDetails = new KubernetesClusterClusterDetailsOutputReference(this, "cluster_details");
  public get clusterDetails() {
    return this._clusterDetails;
  }
  public putClusterDetails(value: KubernetesClusterClusterDetails) {
    this._clusterDetails.internalValue = value;
  }
  public resetClusterDetails() {
    this._clusterDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDetailsInput() {
    return this._clusterDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      kube_config: cdktf.stringToTerraform(this._kubeConfig),
      use_csp_credentials: cdktf.booleanToTerraform(this._useCspCredentials),
      cluster_details: kubernetesClusterClusterDetailsToTerraform(this._clusterDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      kube_config: {
        value: cdktf.stringToHclTerraform(this._kubeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_csp_credentials: {
        value: cdktf.booleanToHclTerraform(this._useCspCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_details: {
        value: kubernetesClusterClusterDetailsToHclTerraform(this._clusterDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterClusterDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
