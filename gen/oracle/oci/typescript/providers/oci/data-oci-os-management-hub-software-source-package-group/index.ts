// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_source_package_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsManagementHubSoftwareSourcePackageGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_source_package_group#id DataOciOsManagementHubSoftwareSourcePackageGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_source_package_group#package_group_id DataOciOsManagementHubSoftwareSourcePackageGroup#package_group_id}
  */
  readonly packageGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_source_package_group#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroup#software_source_id}
  */
  readonly softwareSourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_source_package_group oci_os_management_hub_software_source_package_group}
*/
export class DataOciOsManagementHubSoftwareSourcePackageGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_software_source_package_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourcePackageGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourcePackageGroup to import
  * @param importFromId The id of the existing DataOciOsManagementHubSoftwareSourcePackageGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_source_package_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourcePackageGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_software_source_package_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/os_management_hub_software_source_package_group oci_os_management_hub_software_source_package_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsManagementHubSoftwareSourcePackageGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsManagementHubSoftwareSourcePackageGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_software_source_package_group',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._packageGroupId = config.packageGroupId;
    this._softwareSourceId = config.softwareSourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_order - computed: true, optional: false, required: false
  public get displayOrder() {
    return this.getNumberAttribute('display_order');
  }

  // group_type - computed: true, optional: false, required: false
  public get groupType() {
    return this.getStringAttribute('group_type');
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // is_user_visible - computed: true, optional: false, required: false
  public get isUserVisible() {
    return this.getBooleanAttribute('is_user_visible');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // package_group_id - computed: false, optional: false, required: true
  private _packageGroupId?: string; 
  public get packageGroupId() {
    return this.getStringAttribute('package_group_id');
  }
  public set packageGroupId(value: string) {
    this._packageGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageGroupIdInput() {
    return this._packageGroupId;
  }

  // packages - computed: true, optional: false, required: false
  public get packages() {
    return this.getListAttribute('packages');
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }

  // software_source_id - computed: false, optional: false, required: true
  private _softwareSourceId?: string; 
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }
  public set softwareSourceId(value: string) {
    this._softwareSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareSourceIdInput() {
    return this._softwareSourceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      package_group_id: cdktf.stringToTerraform(this._packageGroupId),
      software_source_id: cdktf.stringToTerraform(this._softwareSourceId),
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
      package_group_id: {
        value: cdktf.stringToHclTerraform(this._packageGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_source_id: {
        value: cdktf.stringToHclTerraform(this._softwareSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
