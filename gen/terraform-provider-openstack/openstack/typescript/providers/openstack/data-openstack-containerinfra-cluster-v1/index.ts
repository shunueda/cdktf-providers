// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/containerinfra_cluster_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenstackContainerinfraClusterV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/containerinfra_cluster_v1#id DataOpenstackContainerinfraClusterV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/containerinfra_cluster_v1#name DataOpenstackContainerinfraClusterV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/containerinfra_cluster_v1#region DataOpenstackContainerinfraClusterV1#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/containerinfra_cluster_v1 openstack_containerinfra_cluster_v1}
*/
export class DataOpenstackContainerinfraClusterV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_containerinfra_cluster_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenstackContainerinfraClusterV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenstackContainerinfraClusterV1 to import
  * @param importFromId The id of the existing DataOpenstackContainerinfraClusterV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/containerinfra_cluster_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenstackContainerinfraClusterV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_containerinfra_cluster_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/containerinfra_cluster_v1 openstack_containerinfra_cluster_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenstackContainerinfraClusterV1Config
  */
  public constructor(scope: Construct, id: string, config: DataOpenstackContainerinfraClusterV1Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_containerinfra_cluster_v1',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.3.2'
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

  // api_address - computed: true, optional: false, required: false
  public get apiAddress() {
    return this.getStringAttribute('api_address');
  }

  // cluster_template_id - computed: true, optional: false, required: false
  public get clusterTemplateId() {
    return this.getStringAttribute('cluster_template_id');
  }

  // coe_version - computed: true, optional: false, required: false
  public get coeVersion() {
    return this.getStringAttribute('coe_version');
  }

  // container_version - computed: true, optional: false, required: false
  public get containerVersion() {
    return this.getStringAttribute('container_version');
  }

  // create_timeout - computed: true, optional: false, required: false
  public get createTimeout() {
    return this.getNumberAttribute('create_timeout');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // docker_volume_size - computed: true, optional: false, required: false
  public get dockerVolumeSize() {
    return this.getNumberAttribute('docker_volume_size');
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

  // keypair - computed: true, optional: false, required: false
  public get keypair() {
    return this.getStringAttribute('keypair');
  }

  // kubeconfig - computed: true, optional: false, required: false
  private _kubeconfig = new cdktf.StringMap(this, "kubeconfig");
  public get kubeconfig() {
    return this._kubeconfig;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
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

  // node_addresses - computed: true, optional: false, required: false
  public get nodeAddresses() {
    return this.getListAttribute('node_addresses');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
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

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
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
