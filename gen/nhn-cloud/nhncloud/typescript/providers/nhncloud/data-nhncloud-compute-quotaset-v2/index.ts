// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/compute_quotaset_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNhncloudComputeQuotasetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/compute_quotaset_v2#id DataNhncloudComputeQuotasetV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/compute_quotaset_v2#project_id DataNhncloudComputeQuotasetV2#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/compute_quotaset_v2#region DataNhncloudComputeQuotasetV2#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/compute_quotaset_v2 nhncloud_compute_quotaset_v2}
*/
export class DataNhncloudComputeQuotasetV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_compute_quotaset_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNhncloudComputeQuotasetV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNhncloudComputeQuotasetV2 to import
  * @param importFromId The id of the existing DataNhncloudComputeQuotasetV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/compute_quotaset_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNhncloudComputeQuotasetV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_compute_quotaset_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/compute_quotaset_v2 nhncloud_compute_quotaset_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNhncloudComputeQuotasetV2Config
  */
  public constructor(scope: Construct, id: string, config: DataNhncloudComputeQuotasetV2Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_compute_quotaset_v2',
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
    this._projectId = config.projectId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cores - computed: true, optional: false, required: false
  public get cores() {
    return this.getNumberAttribute('cores');
  }

  // fixed_ips - computed: true, optional: false, required: false
  public get fixedIps() {
    return this.getNumberAttribute('fixed_ips');
  }

  // floating_ips - computed: true, optional: false, required: false
  public get floatingIps() {
    return this.getNumberAttribute('floating_ips');
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

  // injected_file_content_bytes - computed: true, optional: false, required: false
  public get injectedFileContentBytes() {
    return this.getNumberAttribute('injected_file_content_bytes');
  }

  // injected_file_path_bytes - computed: true, optional: false, required: false
  public get injectedFilePathBytes() {
    return this.getNumberAttribute('injected_file_path_bytes');
  }

  // injected_files - computed: true, optional: false, required: false
  public get injectedFiles() {
    return this.getNumberAttribute('injected_files');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getNumberAttribute('instances');
  }

  // key_pairs - computed: true, optional: false, required: false
  public get keyPairs() {
    return this.getNumberAttribute('key_pairs');
  }

  // metadata_items - computed: true, optional: false, required: false
  public get metadataItems() {
    return this.getNumberAttribute('metadata_items');
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

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
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

  // security_group_rules - computed: true, optional: false, required: false
  public get securityGroupRules() {
    return this.getNumberAttribute('security_group_rules');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getNumberAttribute('security_groups');
  }

  // server_group_members - computed: true, optional: false, required: false
  public get serverGroupMembers() {
    return this.getNumberAttribute('server_group_members');
  }

  // server_groups - computed: true, optional: false, required: false
  public get serverGroups() {
    return this.getNumberAttribute('server_groups');
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
