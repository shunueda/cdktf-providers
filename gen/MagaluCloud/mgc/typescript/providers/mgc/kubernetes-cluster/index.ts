// https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of allowed CIDR blocks for API server access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster#allowed_cidrs KubernetesCluster#allowed_cidrs}
  */
  readonly allowedCidrs?: string[];
  /**
  * The IP address range of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster#cluster_ipv4_cidr KubernetesCluster#cluster_ipv4_cidr}
  */
  readonly clusterIpv4Cidr?: string;
  /**
  * A brief description of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster#description KubernetesCluster#description}
  */
  readonly description?: string;
  /**
  * Enables the use of a server group with anti-affinity policy during the creation of the cluster and its node pools. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster#enabled_server_group KubernetesCluster#enabled_server_group}
  */
  readonly enabledServerGroup?: boolean | cdktf.IResolvable;
  /**
  * Kubernetes cluster name. Must be unique within a namespace and follow naming rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * The IP address range of the Kubernetes cluster service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster#services_ipv4_cidr KubernetesCluster#services_ipv4_cidr}
  */
  readonly servicesIpv4Cidr?: string;
  /**
  * The native Kubernetes version of the cluster. Use the standard "vX.Y.Z" format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster mgc_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCluster to import
  * @param importFromId The id of the existing KubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/kubernetes_cluster mgc_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedCidrs = config.allowedCidrs;
    this._clusterIpv4Cidr = config.clusterIpv4Cidr;
    this._description = config.description;
    this._enabledServerGroup = config.enabledServerGroup;
    this._name = config.name;
    this._servicesIpv4Cidr = config.servicesIpv4Cidr;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_cidrs - computed: false, optional: true, required: false
  private _allowedCidrs?: string[]; 
  public get allowedCidrs() {
    return this.getListAttribute('allowed_cidrs');
  }
  public set allowedCidrs(value: string[]) {
    this._allowedCidrs = value;
  }
  public resetAllowedCidrs() {
    this._allowedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrsInput() {
    return this._allowedCidrs;
  }

  // cluster_ipv4_cidr - computed: true, optional: true, required: false
  private _clusterIpv4Cidr?: string; 
  public get clusterIpv4Cidr() {
    return this.getStringAttribute('cluster_ipv4_cidr');
  }
  public set clusterIpv4Cidr(value: string) {
    this._clusterIpv4Cidr = value;
  }
  public resetClusterIpv4Cidr() {
    this._clusterIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4CidrInput() {
    return this._clusterIpv4Cidr;
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

  // enabled_server_group - computed: false, optional: true, required: false
  private _enabledServerGroup?: boolean | cdktf.IResolvable; 
  public get enabledServerGroup() {
    return this.getBooleanAttribute('enabled_server_group');
  }
  public set enabledServerGroup(value: boolean | cdktf.IResolvable) {
    this._enabledServerGroup = value;
  }
  public resetEnabledServerGroup() {
    this._enabledServerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledServerGroupInput() {
    return this._enabledServerGroup;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_types_source - computed: true, optional: false, required: false
  public get machineTypesSource() {
    return this.getStringAttribute('machine_types_source');
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

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // services_ipv4_cidr - computed: true, optional: true, required: false
  private _servicesIpv4Cidr?: string; 
  public get servicesIpv4Cidr() {
    return this.getStringAttribute('services_ipv4_cidr');
  }
  public set servicesIpv4Cidr(value: string) {
    this._servicesIpv4Cidr = value;
  }
  public resetServicesIpv4Cidr() {
    this._servicesIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpv4CidrInput() {
    return this._servicesIpv4Cidr;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCidrs),
      cluster_ipv4_cidr: cdktf.stringToTerraform(this._clusterIpv4Cidr),
      description: cdktf.stringToTerraform(this._description),
      enabled_server_group: cdktf.booleanToTerraform(this._enabledServerGroup),
      name: cdktf.stringToTerraform(this._name),
      services_ipv4_cidr: cdktf.stringToTerraform(this._servicesIpv4Cidr),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster_ipv4_cidr: {
        value: cdktf.stringToHclTerraform(this._clusterIpv4Cidr),
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
      enabled_server_group: {
        value: cdktf.booleanToHclTerraform(this._enabledServerGroup),
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
      services_ipv4_cidr: {
        value: cdktf.stringToHclTerraform(this._servicesIpv4Cidr),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
