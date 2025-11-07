// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/compute_limits_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenstackComputeLimitsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/compute_limits_v2#id DataOpenstackComputeLimitsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/compute_limits_v2#project_id DataOpenstackComputeLimitsV2#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/compute_limits_v2#region DataOpenstackComputeLimitsV2#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/compute_limits_v2 openstack_compute_limits_v2}
*/
export class DataOpenstackComputeLimitsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_compute_limits_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenstackComputeLimitsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenstackComputeLimitsV2 to import
  * @param importFromId The id of the existing DataOpenstackComputeLimitsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/compute_limits_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenstackComputeLimitsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_compute_limits_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/compute_limits_v2 openstack_compute_limits_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenstackComputeLimitsV2Config
  */
  public constructor(scope: Construct, id: string, config: DataOpenstackComputeLimitsV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_compute_limits_v2',
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
    this._projectId = config.projectId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // max_image_meta - computed: true, optional: false, required: false
  public get maxImageMeta() {
    return this.getNumberAttribute('max_image_meta');
  }

  // max_personality - computed: true, optional: false, required: false
  public get maxPersonality() {
    return this.getNumberAttribute('max_personality');
  }

  // max_personality_size - computed: true, optional: false, required: false
  public get maxPersonalitySize() {
    return this.getNumberAttribute('max_personality_size');
  }

  // max_security_group_rules - computed: true, optional: false, required: false
  public get maxSecurityGroupRules() {
    return this.getNumberAttribute('max_security_group_rules');
  }

  // max_security_groups - computed: true, optional: false, required: false
  public get maxSecurityGroups() {
    return this.getNumberAttribute('max_security_groups');
  }

  // max_server_group_members - computed: true, optional: false, required: false
  public get maxServerGroupMembers() {
    return this.getNumberAttribute('max_server_group_members');
  }

  // max_server_groups - computed: true, optional: false, required: false
  public get maxServerGroups() {
    return this.getNumberAttribute('max_server_groups');
  }

  // max_server_meta - computed: true, optional: false, required: false
  public get maxServerMeta() {
    return this.getNumberAttribute('max_server_meta');
  }

  // max_total_cores - computed: true, optional: false, required: false
  public get maxTotalCores() {
    return this.getNumberAttribute('max_total_cores');
  }

  // max_total_floating_ips - computed: true, optional: false, required: false
  public get maxTotalFloatingIps() {
    return this.getNumberAttribute('max_total_floating_ips');
  }

  // max_total_instances - computed: true, optional: false, required: false
  public get maxTotalInstances() {
    return this.getNumberAttribute('max_total_instances');
  }

  // max_total_keypairs - computed: true, optional: false, required: false
  public get maxTotalKeypairs() {
    return this.getNumberAttribute('max_total_keypairs');
  }

  // max_total_ram_size - computed: true, optional: false, required: false
  public get maxTotalRamSize() {
    return this.getNumberAttribute('max_total_ram_size');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // total_cores_used - computed: true, optional: false, required: false
  public get totalCoresUsed() {
    return this.getNumberAttribute('total_cores_used');
  }

  // total_floating_ips_used - computed: true, optional: false, required: false
  public get totalFloatingIpsUsed() {
    return this.getNumberAttribute('total_floating_ips_used');
  }

  // total_instances_used - computed: true, optional: false, required: false
  public get totalInstancesUsed() {
    return this.getNumberAttribute('total_instances_used');
  }

  // total_ram_used - computed: true, optional: false, required: false
  public get totalRamUsed() {
    return this.getNumberAttribute('total_ram_used');
  }

  // total_security_groups_used - computed: true, optional: false, required: false
  public get totalSecurityGroupsUsed() {
    return this.getNumberAttribute('total_security_groups_used');
  }

  // total_server_groups_used - computed: true, optional: false, required: false
  public get totalServerGroupsUsed() {
    return this.getNumberAttribute('total_server_groups_used');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
