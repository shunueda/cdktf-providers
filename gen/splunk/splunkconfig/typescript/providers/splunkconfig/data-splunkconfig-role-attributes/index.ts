// https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/role_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSplunkconfigRoleAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/role_attributes#id DataSplunkconfigRoleAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/role_attributes#role_name DataSplunkconfigRoleAttributes#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/role_attributes splunkconfig_role_attributes}
*/
export class DataSplunkconfigRoleAttributes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunkconfig_role_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSplunkconfigRoleAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSplunkconfigRoleAttributes to import
  * @param importFromId The id of the existing DataSplunkconfigRoleAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/role_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSplunkconfigRoleAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunkconfig_role_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/role_attributes splunkconfig_role_attributes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSplunkconfigRoleAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSplunkconfigRoleAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'splunkconfig_role_attributes',
      terraformGeneratorMetadata: {
        providerName: 'splunkconfig',
        providerVersion: '1.7.4'
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
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // cumulative_realtime_search_jobs_quota - computed: true, optional: false, required: false
  public get cumulativeRealtimeSearchJobsQuota() {
    return this.getNumberAttribute('cumulative_realtime_search_jobs_quota');
  }

  // cumulative_search_jobs_quota - computed: true, optional: false, required: false
  public get cumulativeSearchJobsQuota() {
    return this.getNumberAttribute('cumulative_search_jobs_quota');
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

  // imported_roles - computed: true, optional: false, required: false
  public get importedRoles() {
    return this.getListAttribute('imported_roles');
  }

  // realtime_search_jobs_quota - computed: true, optional: false, required: false
  public get realtimeSearchJobsQuota() {
    return this.getNumberAttribute('realtime_search_jobs_quota');
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // search_disk_quota - computed: true, optional: false, required: false
  public get searchDiskQuota() {
    return this.getNumberAttribute('search_disk_quota');
  }

  // search_filter - computed: true, optional: false, required: false
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }

  // search_indexes_allowed - computed: true, optional: false, required: false
  public get searchIndexesAllowed() {
    return this.getListAttribute('search_indexes_allowed');
  }

  // search_jobs_quota - computed: true, optional: false, required: false
  public get searchJobsQuota() {
    return this.getNumberAttribute('search_jobs_quota');
  }

  // search_time_win - computed: true, optional: false, required: false
  public get searchTimeWin() {
    return this.getNumberAttribute('search_time_win');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      role_name: cdktf.stringToTerraform(this._roleName),
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
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
