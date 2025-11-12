// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings#___path___ DiskSettings#___path___}
  */
  readonly path?: string;
  /**
  * Interface that will be used in dynamic instance for ip/media when new disk/partition item is added in '/disk'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings#auto_media_interface DiskSettings#auto_media_interface}
  */
  readonly autoMediaInterface?: string;
  /**
  * Enables media dynamically when new disk/partition item is added in '/disk'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings#auto_media_sharing DiskSettings#auto_media_sharing}
  */
  readonly autoMediaSharing?: boolean | cdktf.IResolvable;
  /**
  * Enables dynamic SMB shares when new disk/partition item is added in '/disk'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings#auto_smb_sharing DiskSettings#auto_smb_sharing}
  */
  readonly autoSmbSharing?: boolean | cdktf.IResolvable;
  /**
  * Default value for smb-sharing/smb-user setting, when new disk/partition item is added in '/disk'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings#auto_smb_user DiskSettings#auto_smb_user}
  */
  readonly autoSmbUser?: string;
  /**
  * Sets the default mount point template for each item added in `/disk`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings#default_mount_point_template DiskSettings#default_mount_point_template}
  */
  readonly defaultMountPointTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings#id DiskSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings routeros_disk_settings}
*/
export class DiskSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_disk_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskSettings to import
  * @param importFromId The id of the existing DiskSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_disk_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/disk_settings routeros_disk_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DiskSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_disk_settings',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._autoMediaInterface = config.autoMediaInterface;
    this._autoMediaSharing = config.autoMediaSharing;
    this._autoSmbSharing = config.autoSmbSharing;
    this._autoSmbUser = config.autoSmbUser;
    this._defaultMountPointTemplate = config.defaultMountPointTemplate;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // auto_media_interface - computed: false, optional: true, required: false
  private _autoMediaInterface?: string; 
  public get autoMediaInterface() {
    return this.getStringAttribute('auto_media_interface');
  }
  public set autoMediaInterface(value: string) {
    this._autoMediaInterface = value;
  }
  public resetAutoMediaInterface() {
    this._autoMediaInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMediaInterfaceInput() {
    return this._autoMediaInterface;
  }

  // auto_media_sharing - computed: false, optional: true, required: false
  private _autoMediaSharing?: boolean | cdktf.IResolvable; 
  public get autoMediaSharing() {
    return this.getBooleanAttribute('auto_media_sharing');
  }
  public set autoMediaSharing(value: boolean | cdktf.IResolvable) {
    this._autoMediaSharing = value;
  }
  public resetAutoMediaSharing() {
    this._autoMediaSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMediaSharingInput() {
    return this._autoMediaSharing;
  }

  // auto_smb_sharing - computed: false, optional: true, required: false
  private _autoSmbSharing?: boolean | cdktf.IResolvable; 
  public get autoSmbSharing() {
    return this.getBooleanAttribute('auto_smb_sharing');
  }
  public set autoSmbSharing(value: boolean | cdktf.IResolvable) {
    this._autoSmbSharing = value;
  }
  public resetAutoSmbSharing() {
    this._autoSmbSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSmbSharingInput() {
    return this._autoSmbSharing;
  }

  // auto_smb_user - computed: false, optional: true, required: false
  private _autoSmbUser?: string; 
  public get autoSmbUser() {
    return this.getStringAttribute('auto_smb_user');
  }
  public set autoSmbUser(value: string) {
    this._autoSmbUser = value;
  }
  public resetAutoSmbUser() {
    this._autoSmbUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSmbUserInput() {
    return this._autoSmbUser;
  }

  // default_mount_point_template - computed: false, optional: true, required: false
  private _defaultMountPointTemplate?: string; 
  public get defaultMountPointTemplate() {
    return this.getStringAttribute('default_mount_point_template');
  }
  public set defaultMountPointTemplate(value: string) {
    this._defaultMountPointTemplate = value;
  }
  public resetDefaultMountPointTemplate() {
    this._defaultMountPointTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMountPointTemplateInput() {
    return this._defaultMountPointTemplate;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      auto_media_interface: cdktf.stringToTerraform(this._autoMediaInterface),
      auto_media_sharing: cdktf.booleanToTerraform(this._autoMediaSharing),
      auto_smb_sharing: cdktf.booleanToTerraform(this._autoSmbSharing),
      auto_smb_user: cdktf.stringToTerraform(this._autoSmbUser),
      default_mount_point_template: cdktf.stringToTerraform(this._defaultMountPointTemplate),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_media_interface: {
        value: cdktf.stringToHclTerraform(this._autoMediaInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_media_sharing: {
        value: cdktf.booleanToHclTerraform(this._autoMediaSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_smb_sharing: {
        value: cdktf.booleanToHclTerraform(this._autoSmbSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_smb_user: {
        value: cdktf.stringToHclTerraform(this._autoSmbUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_mount_point_template: {
        value: cdktf.stringToHclTerraform(this._defaultMountPointTemplate),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
