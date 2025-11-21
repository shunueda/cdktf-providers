// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_windows_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsManagementHubWindowsUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_windows_update#id DataOciOsManagementHubWindowsUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_windows_update#windows_update_id DataOciOsManagementHubWindowsUpdate#windows_update_id}
  */
  readonly windowsUpdateId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_windows_update oci_os_management_hub_windows_update}
*/
export class DataOciOsManagementHubWindowsUpdate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_windows_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsManagementHubWindowsUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsManagementHubWindowsUpdate to import
  * @param importFromId The id of the existing DataOciOsManagementHubWindowsUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_windows_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsManagementHubWindowsUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_windows_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/os_management_hub_windows_update oci_os_management_hub_windows_update} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsManagementHubWindowsUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsManagementHubWindowsUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_windows_update',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._windowsUpdateId = config.windowsUpdateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // installable - computed: true, optional: false, required: false
  public get installable() {
    return this.getStringAttribute('installable');
  }

  // installation_requirements - computed: true, optional: false, required: false
  public get installationRequirements() {
    return this.getListAttribute('installation_requirements');
  }

  // is_reboot_required_for_installation - computed: true, optional: false, required: false
  public get isRebootRequiredForInstallation() {
    return this.getBooleanAttribute('is_reboot_required_for_installation');
  }

  // kb_article_ids - computed: true, optional: false, required: false
  public get kbArticleIds() {
    return this.getListAttribute('kb_article_ids');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }

  // update_id - computed: true, optional: false, required: false
  public get updateId() {
    return this.getStringAttribute('update_id');
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // windows_update_id - computed: false, optional: false, required: true
  private _windowsUpdateId?: string; 
  public get windowsUpdateId() {
    return this.getStringAttribute('windows_update_id');
  }
  public set windowsUpdateId(value: string) {
    this._windowsUpdateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsUpdateIdInput() {
    return this._windowsUpdateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      windows_update_id: cdktf.stringToTerraform(this._windowsUpdateId),
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
      windows_update_id: {
        value: cdktf.stringToHclTerraform(this._windowsUpdateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
