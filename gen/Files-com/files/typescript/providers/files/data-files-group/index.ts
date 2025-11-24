// https://registry.terraform.io/providers/files-com/files/0.1.395/docs/data-sources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.395/docs/data-sources/group#id DataFilesGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.395/docs/data-sources/group files_group}
*/
export class DataFilesGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesGroup to import
  * @param importFromId The id of the existing DataFilesGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.395/docs/data-sources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.395/docs/data-sources/group files_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'files_group',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.395',
        providerVersionConstraint: '0.1.395'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_ids - computed: true, optional: false, required: false
  public get adminIds() {
    return this.getStringAttribute('admin_ids');
  }

  // allowed_ips - computed: true, optional: false, required: false
  public get allowedIps() {
    return this.getStringAttribute('allowed_ips');
  }

  // dav_permission - computed: true, optional: false, required: false
  public get davPermission() {
    return this.getBooleanAttribute('dav_permission');
  }

  // ftp_permission - computed: true, optional: false, required: false
  public get ftpPermission() {
    return this.getBooleanAttribute('ftp_permission');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // restapi_permission - computed: true, optional: false, required: false
  public get restapiPermission() {
    return this.getBooleanAttribute('restapi_permission');
  }

  // sftp_permission - computed: true, optional: false, required: false
  public get sftpPermission() {
    return this.getBooleanAttribute('sftp_permission');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getStringAttribute('user_ids');
  }

  // usernames - computed: true, optional: false, required: false
  public get usernames() {
    return this.getStringAttribute('usernames');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
