// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsKubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the Kubernetes cluster template. _note_ Only one of `name` or `cluster_id` must be specified. **Deprecated** This argument is deprecated, please, use the `id` attribute instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_cluster#cluster_id DataVkcsKubernetesCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Custom DNS cluster domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_cluster#dns_domain DataVkcsKubernetesCluster#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * The UUID of the Kubernetes cluster template. _note_ Only one of `name` or `id` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_cluster#id DataVkcsKubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the cluster. _note_ Only one of `name` or `id` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_cluster#name DataVkcsKubernetesCluster#name}
  */
  readonly name?: string;
  /**
  * The region in which to obtain the Container Infra client. If omitted, the `region` argument of the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_cluster#region DataVkcsKubernetesCluster#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_cluster vkcs_kubernetes_cluster}
*/
export class DataVkcsKubernetesCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsKubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsKubernetesCluster to import
  * @param importFromId The id of the existing DataVkcsKubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsKubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/kubernetes_cluster vkcs_kubernetes_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsKubernetesClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVkcsKubernetesClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
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
    this._dnsDomain = config.dnsDomain;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_address - computed: true, optional: false, required: false
  public get apiAddress() {
    return this.getStringAttribute('api_address');
  }

  // api_lb_fip - computed: true, optional: false, required: false
  public get apiLbFip() {
    return this.getStringAttribute('api_lb_fip');
  }

  // api_lb_vip - computed: true, optional: false, required: false
  public get apiLbVip() {
    return this.getStringAttribute('api_lb_vip');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_template_id - computed: true, optional: false, required: false
  public get clusterTemplateId() {
    return this.getStringAttribute('cluster_template_id');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // dns_domain - computed: true, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
  }

  // floating_ip_enabled - computed: true, optional: false, required: false
  public get floatingIpEnabled() {
    return this.getBooleanAttribute('floating_ip_enabled');
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

  // ingress_floating_ip - computed: true, optional: false, required: false
  public get ingressFloatingIp() {
    return this.getStringAttribute('ingress_floating_ip');
  }

  // insecure_registries - computed: true, optional: false, required: false
  public get insecureRegistries() {
    return this.getListAttribute('insecure_registries');
  }

  // k8s_config - computed: true, optional: false, required: false
  public get k8SConfig() {
    return this.getStringAttribute('k8s_config');
  }

  // keypair - computed: true, optional: false, required: false
  public get keypair() {
    return this.getStringAttribute('keypair');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // loadbalancer_subnet_id - computed: true, optional: false, required: false
  public get loadbalancerSubnetId() {
    return this.getStringAttribute('loadbalancer_subnet_id');
  }

  // master_addresses - computed: true, optional: false, required: false
  public get masterAddresses() {
    return this.getListAttribute('master_addresses');
  }

  // master_count - computed: true, optional: false, required: false
  public get masterCount() {
    return this.getNumberAttribute('master_count');
  }

  // master_flavor - computed: true, optional: false, required: false
  public get masterFlavor() {
    return this.getStringAttribute('master_flavor');
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // pods_network_cidr - computed: true, optional: false, required: false
  public get podsNetworkCidr() {
    return this.getStringAttribute('pods_network_cidr');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
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

  // registry_auth_password - computed: true, optional: false, required: false
  public get registryAuthPassword() {
    return this.getStringAttribute('registry_auth_password');
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // sync_security_policy - computed: true, optional: false, required: false
  public get syncSecurityPolicy() {
    return this.getBooleanAttribute('sync_security_policy');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      dns_domain: cdktf.stringToTerraform(this._dnsDomain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
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
      dns_domain: {
        value: cdktf.stringToHclTerraform(this._dnsDomain),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
