// https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/kubernetes_clustertemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMcsKubernetesClustertemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/kubernetes_clustertemplate#cluster_template_uuid DataMcsKubernetesClustertemplate#cluster_template_uuid}
  */
  readonly clusterTemplateUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/kubernetes_clustertemplate#id DataMcsKubernetesClustertemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/kubernetes_clustertemplate#name DataMcsKubernetesClustertemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/kubernetes_clustertemplate#region DataMcsKubernetesClustertemplate#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/kubernetes_clustertemplate#version DataMcsKubernetesClustertemplate#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/kubernetes_clustertemplate mcs_kubernetes_clustertemplate}
*/
export class DataMcsKubernetesClustertemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mcs_kubernetes_clustertemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMcsKubernetesClustertemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMcsKubernetesClustertemplate to import
  * @param importFromId The id of the existing DataMcsKubernetesClustertemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/kubernetes_clustertemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMcsKubernetesClustertemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mcs_kubernetes_clustertemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mailrucloudsolutions/mcs/0.6.14/docs/data-sources/kubernetes_clustertemplate mcs_kubernetes_clustertemplate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMcsKubernetesClustertemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMcsKubernetesClustertemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mcs_kubernetes_clustertemplate',
      terraformGeneratorMetadata: {
        providerName: 'mcs',
        providerVersion: '0.6.14',
        providerVersionConstraint: '0.6.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterTemplateUuid = config.clusterTemplateUuid;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apiserver_port - computed: true, optional: false, required: false
  public get apiserverPort() {
    return this.getNumberAttribute('apiserver_port');
  }

  // cluster_distro - computed: true, optional: false, required: false
  public get clusterDistro() {
    return this.getStringAttribute('cluster_distro');
  }

  // cluster_template_uuid - computed: true, optional: true, required: false
  private _clusterTemplateUuid?: string; 
  public get clusterTemplateUuid() {
    return this.getStringAttribute('cluster_template_uuid');
  }
  public set clusterTemplateUuid(value: string) {
    this._clusterTemplateUuid = value;
  }
  public resetClusterTemplateUuid() {
    this._clusterTemplateUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTemplateUuidInput() {
    return this._clusterTemplateUuid;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deprecated_at - computed: true, optional: false, required: false
  public get deprecatedAt() {
    return this.getStringAttribute('deprecated_at');
  }

  // dns_nameserver - computed: true, optional: false, required: false
  public get dnsNameserver() {
    return this.getStringAttribute('dns_nameserver');
  }

  // docker_storage_driver - computed: true, optional: false, required: false
  public get dockerStorageDriver() {
    return this.getStringAttribute('docker_storage_driver');
  }

  // docker_volume_size - computed: true, optional: false, required: false
  public get dockerVolumeSize() {
    return this.getNumberAttribute('docker_volume_size');
  }

  // external_network_id - computed: true, optional: false, required: false
  public get externalNetworkId() {
    return this.getStringAttribute('external_network_id');
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
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

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // insecure_registry - computed: true, optional: false, required: false
  public get insecureRegistry() {
    return this.getStringAttribute('insecure_registry');
  }

  // keypair_id - computed: true, optional: false, required: false
  public get keypairId() {
    return this.getStringAttribute('keypair_id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // master_flavor - computed: true, optional: false, required: false
  public get masterFlavor() {
    return this.getStringAttribute('master_flavor');
  }

  // master_lb_enabled - computed: true, optional: false, required: false
  public get masterLbEnabled() {
    return this.getBooleanAttribute('master_lb_enabled');
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

  // network_driver - computed: true, optional: false, required: false
  public get networkDriver() {
    return this.getStringAttribute('network_driver');
  }

  // no_proxy - computed: true, optional: false, required: false
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getBooleanAttribute('public');
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

  // registry_enabled - computed: true, optional: false, required: false
  public get registryEnabled() {
    return this.getBooleanAttribute('registry_enabled');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // tls_disabled - computed: true, optional: false, required: false
  public get tlsDisabled() {
    return this.getBooleanAttribute('tls_disabled');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
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

  // volume_driver - computed: true, optional: false, required: false
  public get volumeDriver() {
    return this.getStringAttribute('volume_driver');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_template_uuid: cdktf.stringToTerraform(this._clusterTemplateUuid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_template_uuid: {
        value: cdktf.stringToHclTerraform(this._clusterTemplateUuid),
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
