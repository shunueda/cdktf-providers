// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_file#content_type DataProxmoxVirtualEnvironmentFile#content_type}
  */
  readonly contentType: string;
  /**
  * The identifier of the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_file#datastore_id DataProxmoxVirtualEnvironmentFile#datastore_id}
  */
  readonly datastoreId: string;
  /**
  * The name of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_file#file_name DataProxmoxVirtualEnvironmentFile#file_name}
  */
  readonly fileName: string;
  /**
  * The name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_file#node_name DataProxmoxVirtualEnvironmentFile#node_name}
  */
  readonly nodeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_file proxmox_virtual_environment_file}
*/
export class DataProxmoxVirtualEnvironmentFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentFile to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_file proxmox_virtual_environment_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentFileConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_file',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentType = config.contentType;
    this._datastoreId = config.datastoreId;
    this._fileName = config.fileName;
    this._nodeName = config.nodeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // datastore_id - computed: false, optional: false, required: true
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // file_format - computed: true, optional: false, required: false
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // vmid - computed: true, optional: false, required: false
  public get vmid() {
    return this.getNumberAttribute('vmid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_type: cdktf.stringToTerraform(this._contentType),
      datastore_id: cdktf.stringToTerraform(this._datastoreId),
      file_name: cdktf.stringToTerraform(this._fileName),
      node_name: cdktf.stringToTerraform(this._nodeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastore_id: {
        value: cdktf.stringToHclTerraform(this._datastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
