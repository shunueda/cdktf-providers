// https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentOciImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier for the target datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image#datastore_id VirtualEnvironmentOciImage#datastore_id}
  */
  readonly datastoreId: string;
  /**
  * The file name for the pulled OCI image. If not provided, it will be generated automatically. The file will be stored as a .tar file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image#file_name VirtualEnvironmentOciImage#file_name}
  */
  readonly fileName?: string;
  /**
  * The node name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image#node_name VirtualEnvironmentOciImage#node_name}
  */
  readonly nodeName: string;
  /**
  * By default `true`. If `true` and the OCI image size has changed in the datastore, it will be replaced. If `false`, there will be no check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image#overwrite VirtualEnvironmentOciImage#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * If `true` and an OCI image with the same name already exists in the datastore, it will be deleted and the new image will be pulled. If `false` and the image already exists, an error will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image#overwrite_unmanaged VirtualEnvironmentOciImage#overwrite_unmanaged}
  */
  readonly overwriteUnmanaged?: boolean | cdktf.IResolvable;
  /**
  * The reference to the OCI image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image#reference VirtualEnvironmentOciImage#reference}
  */
  readonly reference: string;
  /**
  * The OCI image pull timeout in seconds. Default is 600 (10min).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image#upload_timeout VirtualEnvironmentOciImage#upload_timeout}
  */
  readonly uploadTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image proxmox_virtual_environment_oci_image}
*/
export class VirtualEnvironmentOciImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_oci_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentOciImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentOciImage to import
  * @param importFromId The id of the existing VirtualEnvironmentOciImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentOciImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_oci_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_oci_image proxmox_virtual_environment_oci_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentOciImageConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentOciImageConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_oci_image',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.90.0',
        providerVersionConstraint: '0.90.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datastoreId = config.datastoreId;
    this._fileName = config.fileName;
    this._nodeName = config.nodeName;
    this._overwrite = config.overwrite;
    this._overwriteUnmanaged = config.overwriteUnmanaged;
    this._reference = config.reference;
    this._uploadTimeout = config.uploadTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
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

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // overwrite_unmanaged - computed: true, optional: true, required: false
  private _overwriteUnmanaged?: boolean | cdktf.IResolvable; 
  public get overwriteUnmanaged() {
    return this.getBooleanAttribute('overwrite_unmanaged');
  }
  public set overwriteUnmanaged(value: boolean | cdktf.IResolvable) {
    this._overwriteUnmanaged = value;
  }
  public resetOverwriteUnmanaged() {
    this._overwriteUnmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteUnmanagedInput() {
    return this._overwriteUnmanaged;
  }

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // upload_timeout - computed: true, optional: true, required: false
  private _uploadTimeout?: number; 
  public get uploadTimeout() {
    return this.getNumberAttribute('upload_timeout');
  }
  public set uploadTimeout(value: number) {
    this._uploadTimeout = value;
  }
  public resetUploadTimeout() {
    this._uploadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTimeoutInput() {
    return this._uploadTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datastore_id: cdktf.stringToTerraform(this._datastoreId),
      file_name: cdktf.stringToTerraform(this._fileName),
      node_name: cdktf.stringToTerraform(this._nodeName),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      overwrite_unmanaged: cdktf.booleanToTerraform(this._overwriteUnmanaged),
      reference: cdktf.stringToTerraform(this._reference),
      upload_timeout: cdktf.numberToTerraform(this._uploadTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      overwrite_unmanaged: {
        value: cdktf.booleanToHclTerraform(this._overwriteUnmanaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reference: {
        value: cdktf.stringToHclTerraform(this._reference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_timeout: {
        value: cdktf.numberToHclTerraform(this._uploadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
