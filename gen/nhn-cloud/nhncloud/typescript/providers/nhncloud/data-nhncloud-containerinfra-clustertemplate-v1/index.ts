// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/containerinfra_clustertemplate_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNhncloudContainerinfraClustertemplateV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/containerinfra_clustertemplate_v1#id DataNhncloudContainerinfraClustertemplateV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/containerinfra_clustertemplate_v1#name DataNhncloudContainerinfraClustertemplateV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/containerinfra_clustertemplate_v1#region DataNhncloudContainerinfraClustertemplateV1#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/containerinfra_clustertemplate_v1 nhncloud_containerinfra_clustertemplate_v1}
*/
export class DataNhncloudContainerinfraClustertemplateV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_containerinfra_clustertemplate_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNhncloudContainerinfraClustertemplateV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNhncloudContainerinfraClustertemplateV1 to import
  * @param importFromId The id of the existing DataNhncloudContainerinfraClustertemplateV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/containerinfra_clustertemplate_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNhncloudContainerinfraClustertemplateV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_containerinfra_clustertemplate_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/containerinfra_clustertemplate_v1 nhncloud_containerinfra_clustertemplate_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNhncloudContainerinfraClustertemplateV1Config
  */
  public constructor(scope: Construct, id: string, config: DataNhncloudContainerinfraClustertemplateV1Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_containerinfra_clustertemplate_v1',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.6'
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
    this._name = config.name;
    this._region = config.region;
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

  // coe - computed: true, optional: false, required: false
  public get coe() {
    return this.getStringAttribute('coe');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // fixed_network - computed: true, optional: false, required: false
  public get fixedNetwork() {
    return this.getStringAttribute('fixed_network');
  }

  // fixed_subnet - computed: true, optional: false, required: false
  public get fixedSubnet() {
    return this.getStringAttribute('fixed_subnet');
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }

  // floating_ip_enabled - computed: true, optional: false, required: false
  public get floatingIpEnabled() {
    return this.getBooleanAttribute('floating_ip_enabled');
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }

  // http_proxy - computed: true, optional: false, required: false
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }

  // https_proxy - computed: true, optional: false, required: false
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
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

  // volume_driver - computed: true, optional: false, required: false
  public get volumeDriver() {
    return this.getStringAttribute('volume_driver');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
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
