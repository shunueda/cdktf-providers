// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#cluster_id KubernetesClusterEndpoint#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Open internet access or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#cluster_internet KubernetesClusterEndpoint#cluster_internet}
  */
  readonly clusterInternet?: boolean | cdktf.IResolvable;
  /**
  * Domain name for cluster Kube-apiserver internet access.  Be careful if you modify value of this parameter, the cluster_external_endpoint value may be changed automatically too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#cluster_internet_domain KubernetesClusterEndpoint#cluster_internet_domain}
  */
  readonly clusterInternetDomain?: string;
  /**
  * Specify security group, NOTE: This argument must not be empty if cluster internet enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#cluster_internet_security_group KubernetesClusterEndpoint#cluster_internet_security_group}
  */
  readonly clusterInternetSecurityGroup?: string;
  /**
  * Open intranet access or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#cluster_intranet KubernetesClusterEndpoint#cluster_intranet}
  */
  readonly clusterIntranet?: boolean | cdktf.IResolvable;
  /**
  * Domain name for cluster Kube-apiserver intranet access. Be careful if you modify value of this parameter, the pgw_endpoint value may be changed automatically too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#cluster_intranet_domain KubernetesClusterEndpoint#cluster_intranet_domain}
  */
  readonly clusterIntranetDomain?: string;
  /**
  * Subnet id who can access this independent cluster, this field must and can only set  when `cluster_intranet` is true. `cluster_intranet_subnet_id` can not modify once be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#cluster_intranet_subnet_id KubernetesClusterEndpoint#cluster_intranet_subnet_id}
  */
  readonly clusterIntranetSubnetId?: string;
  /**
  * The LB parameter. Only used for public network access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#extensive_parameters KubernetesClusterEndpoint#extensive_parameters}
  */
  readonly extensiveParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#id KubernetesClusterEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Security policies for managed cluster internet, like:'192.168.1.0/24' or '113.116.51.27', '0.0.0.0/0' means all. This field can only set when field `cluster_deploy_type` is 'MANAGED_CLUSTER' and `cluster_internet` is true. `managed_cluster_internet_security_policies` can not delete or empty once be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#managed_cluster_internet_security_policies KubernetesClusterEndpoint#managed_cluster_internet_security_policies}
  */
  readonly managedClusterInternetSecurityPolicies?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint tencentcloud_kubernetes_cluster_endpoint}
*/
export class KubernetesClusterEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_cluster_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesClusterEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesClusterEndpoint to import
  * @param importFromId The id of the existing KubernetesClusterEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesClusterEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_cluster_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/kubernetes_cluster_endpoint tencentcloud_kubernetes_cluster_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_cluster_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._clusterInternet = config.clusterInternet;
    this._clusterInternetDomain = config.clusterInternetDomain;
    this._clusterInternetSecurityGroup = config.clusterInternetSecurityGroup;
    this._clusterIntranet = config.clusterIntranet;
    this._clusterIntranetDomain = config.clusterIntranetDomain;
    this._clusterIntranetSubnetId = config.clusterIntranetSubnetId;
    this._extensiveParameters = config.extensiveParameters;
    this._id = config.id;
    this._managedClusterInternetSecurityPolicies = config.managedClusterInternetSecurityPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certification_authority - computed: true, optional: false, required: false
  public get certificationAuthority() {
    return this.getStringAttribute('certification_authority');
  }

  // cluster_deploy_type - computed: true, optional: false, required: false
  public get clusterDeployType() {
    return this.getStringAttribute('cluster_deploy_type');
  }

  // cluster_external_endpoint - computed: true, optional: false, required: false
  public get clusterExternalEndpoint() {
    return this.getStringAttribute('cluster_external_endpoint');
  }

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

  // cluster_internet - computed: false, optional: true, required: false
  private _clusterInternet?: boolean | cdktf.IResolvable; 
  public get clusterInternet() {
    return this.getBooleanAttribute('cluster_internet');
  }
  public set clusterInternet(value: boolean | cdktf.IResolvable) {
    this._clusterInternet = value;
  }
  public resetClusterInternet() {
    this._clusterInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInternetInput() {
    return this._clusterInternet;
  }

  // cluster_internet_domain - computed: false, optional: true, required: false
  private _clusterInternetDomain?: string; 
  public get clusterInternetDomain() {
    return this.getStringAttribute('cluster_internet_domain');
  }
  public set clusterInternetDomain(value: string) {
    this._clusterInternetDomain = value;
  }
  public resetClusterInternetDomain() {
    this._clusterInternetDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInternetDomainInput() {
    return this._clusterInternetDomain;
  }

  // cluster_internet_security_group - computed: false, optional: true, required: false
  private _clusterInternetSecurityGroup?: string; 
  public get clusterInternetSecurityGroup() {
    return this.getStringAttribute('cluster_internet_security_group');
  }
  public set clusterInternetSecurityGroup(value: string) {
    this._clusterInternetSecurityGroup = value;
  }
  public resetClusterInternetSecurityGroup() {
    this._clusterInternetSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInternetSecurityGroupInput() {
    return this._clusterInternetSecurityGroup;
  }

  // cluster_intranet - computed: false, optional: true, required: false
  private _clusterIntranet?: boolean | cdktf.IResolvable; 
  public get clusterIntranet() {
    return this.getBooleanAttribute('cluster_intranet');
  }
  public set clusterIntranet(value: boolean | cdktf.IResolvable) {
    this._clusterIntranet = value;
  }
  public resetClusterIntranet() {
    this._clusterIntranet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIntranetInput() {
    return this._clusterIntranet;
  }

  // cluster_intranet_domain - computed: false, optional: true, required: false
  private _clusterIntranetDomain?: string; 
  public get clusterIntranetDomain() {
    return this.getStringAttribute('cluster_intranet_domain');
  }
  public set clusterIntranetDomain(value: string) {
    this._clusterIntranetDomain = value;
  }
  public resetClusterIntranetDomain() {
    this._clusterIntranetDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIntranetDomainInput() {
    return this._clusterIntranetDomain;
  }

  // cluster_intranet_subnet_id - computed: false, optional: true, required: false
  private _clusterIntranetSubnetId?: string; 
  public get clusterIntranetSubnetId() {
    return this.getStringAttribute('cluster_intranet_subnet_id');
  }
  public set clusterIntranetSubnetId(value: string) {
    this._clusterIntranetSubnetId = value;
  }
  public resetClusterIntranetSubnetId() {
    this._clusterIntranetSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIntranetSubnetIdInput() {
    return this._clusterIntranetSubnetId;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // extensive_parameters - computed: false, optional: true, required: false
  private _extensiveParameters?: string; 
  public get extensiveParameters() {
    return this.getStringAttribute('extensive_parameters');
  }
  public set extensiveParameters(value: string) {
    this._extensiveParameters = value;
  }
  public resetExtensiveParameters() {
    this._extensiveParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensiveParametersInput() {
    return this._extensiveParameters;
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

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // kube_config_intranet - computed: true, optional: false, required: false
  public get kubeConfigIntranet() {
    return this.getStringAttribute('kube_config_intranet');
  }

  // managed_cluster_internet_security_policies - computed: false, optional: true, required: false
  private _managedClusterInternetSecurityPolicies?: string[]; 
  public get managedClusterInternetSecurityPolicies() {
    return this.getListAttribute('managed_cluster_internet_security_policies');
  }
  public set managedClusterInternetSecurityPolicies(value: string[]) {
    this._managedClusterInternetSecurityPolicies = value;
  }
  public resetManagedClusterInternetSecurityPolicies() {
    this._managedClusterInternetSecurityPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterInternetSecurityPoliciesInput() {
    return this._managedClusterInternetSecurityPolicies;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // pgw_endpoint - computed: true, optional: false, required: false
  public get pgwEndpoint() {
    return this.getStringAttribute('pgw_endpoint');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_internet: cdktf.booleanToTerraform(this._clusterInternet),
      cluster_internet_domain: cdktf.stringToTerraform(this._clusterInternetDomain),
      cluster_internet_security_group: cdktf.stringToTerraform(this._clusterInternetSecurityGroup),
      cluster_intranet: cdktf.booleanToTerraform(this._clusterIntranet),
      cluster_intranet_domain: cdktf.stringToTerraform(this._clusterIntranetDomain),
      cluster_intranet_subnet_id: cdktf.stringToTerraform(this._clusterIntranetSubnetId),
      extensive_parameters: cdktf.stringToTerraform(this._extensiveParameters),
      id: cdktf.stringToTerraform(this._id),
      managed_cluster_internet_security_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedClusterInternetSecurityPolicies),
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
      cluster_internet: {
        value: cdktf.booleanToHclTerraform(this._clusterInternet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_internet_domain: {
        value: cdktf.stringToHclTerraform(this._clusterInternetDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_internet_security_group: {
        value: cdktf.stringToHclTerraform(this._clusterInternetSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_intranet: {
        value: cdktf.booleanToHclTerraform(this._clusterIntranet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_intranet_domain: {
        value: cdktf.stringToHclTerraform(this._clusterIntranetDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_intranet_subnet_id: {
        value: cdktf.stringToHclTerraform(this._clusterIntranetSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extensive_parameters: {
        value: cdktf.stringToHclTerraform(this._extensiveParameters),
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
      managed_cluster_internet_security_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedClusterInternetSecurityPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
