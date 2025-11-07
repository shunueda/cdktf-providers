// https://registry.terraform.io/providers/splunk/artifacts/1.1.0/docs/resources/upload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UploadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to false if the remote file should be orphaned on destruction of the resource or change of upload_path value. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/artifacts/1.1.0/docs/resources/upload#delete_old_path Upload#delete_old_path}
  */
  readonly deleteOldPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/artifacts/1.1.0/docs/resources/upload#id Upload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Arbitrary map of values that, when changed, will trigger re-uploading of this resource's file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/artifacts/1.1.0/docs/resources/upload#triggers Upload#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * File containing content to upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/artifacts/1.1.0/docs/resources/upload#upload_file Upload#upload_file}
  */
  readonly uploadFile: string;
  /**
  * Path to upload to, relative to the provider's URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/artifacts/1.1.0/docs/resources/upload#upload_path Upload#upload_path}
  */
  readonly uploadPath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/artifacts/1.1.0/docs/resources/upload artifacts_upload}
*/
export class Upload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifacts_upload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Upload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Upload to import
  * @param importFromId The id of the existing Upload that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/artifacts/1.1.0/docs/resources/upload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Upload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifacts_upload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/artifacts/1.1.0/docs/resources/upload artifacts_upload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UploadConfig
  */
  public constructor(scope: Construct, id: string, config: UploadConfig) {
    super(scope, id, {
      terraformResourceType: 'artifacts_upload',
      terraformGeneratorMetadata: {
        providerName: 'artifacts',
        providerVersion: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteOldPath = config.deleteOldPath;
    this._id = config.id;
    this._triggers = config.triggers;
    this._uploadFile = config.uploadFile;
    this._uploadPath = config.uploadPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_old_path - computed: false, optional: true, required: false
  private _deleteOldPath?: boolean | cdktf.IResolvable; 
  public get deleteOldPath() {
    return this.getBooleanAttribute('delete_old_path');
  }
  public set deleteOldPath(value: boolean | cdktf.IResolvable) {
    this._deleteOldPath = value;
  }
  public resetDeleteOldPath() {
    this._deleteOldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOldPathInput() {
    return this._deleteOldPath;
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

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // upload_file - computed: false, optional: false, required: true
  private _uploadFile?: string; 
  public get uploadFile() {
    return this.getStringAttribute('upload_file');
  }
  public set uploadFile(value: string) {
    this._uploadFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadFileInput() {
    return this._uploadFile;
  }

  // upload_path - computed: false, optional: false, required: true
  private _uploadPath?: string; 
  public get uploadPath() {
    return this.getStringAttribute('upload_path');
  }
  public set uploadPath(value: string) {
    this._uploadPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPathInput() {
    return this._uploadPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_old_path: cdktf.booleanToTerraform(this._deleteOldPath),
      id: cdktf.stringToTerraform(this._id),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      upload_file: cdktf.stringToTerraform(this._uploadFile),
      upload_path: cdktf.stringToTerraform(this._uploadPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_old_path: {
        value: cdktf.booleanToHclTerraform(this._deleteOldPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      upload_file: {
        value: cdktf.stringToHclTerraform(this._uploadFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_path: {
        value: cdktf.stringToHclTerraform(this._uploadPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
