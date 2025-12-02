// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_responseasset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResponsemanagementResponseassetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Division to associate to this asset. Can only be used with this division.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_responseasset#division_id ResponsemanagementResponseasset#division_id}
  */
  readonly divisionId?: string;
  /**
  * Hash value of the response asset file content. Used to detect changes. Note: If the file content hash changes, the existing response asset will be dropped and recreated with a new ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_responseasset#file_content_hash ResponsemanagementResponseasset#file_content_hash}
  */
  readonly fileContentHash?: string;
  /**
  * Name of the file to upload. Changing the name attribute will cause the existing response asset to be dropped and recreated with a new ID. It must not start with a dot and not end with a forward slash. If the referenced file is stored on S3, it will be downloaded to temporary storage to satisfy API requirements. When referencing a local file, the following characters are not allowed: \{^}%`]">[~<#|
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_responseasset#filename ResponsemanagementResponseasset#filename}
  */
  readonly filename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_responseasset#id ResponsemanagementResponseasset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the response asset. Can be optionally defined to replace the name given in the filename. Changing the name attribute will cause the existing response asset to be dropped and recreated with a new ID. It must not start with a dot and not end with a forward slash. The following characters are not allowed: \{^}%`]">[~<#|,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_responseasset#name ResponsemanagementResponseasset#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_responseasset genesyscloud_responsemanagement_responseasset}
*/
export class ResponsemanagementResponseasset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_responsemanagement_responseasset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResponsemanagementResponseasset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResponsemanagementResponseasset to import
  * @param importFromId The id of the existing ResponsemanagementResponseasset that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_responseasset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResponsemanagementResponseasset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_responsemanagement_responseasset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_responseasset genesyscloud_responsemanagement_responseasset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResponsemanagementResponseassetConfig
  */
  public constructor(scope: Construct, id: string, config: ResponsemanagementResponseassetConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_responsemanagement_responseasset',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._divisionId = config.divisionId;
    this._fileContentHash = config.fileContentHash;
    this._filename = config.filename;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // division_id - computed: true, optional: true, required: false
  private _divisionId?: string; 
  public get divisionId() {
    return this.getStringAttribute('division_id');
  }
  public set divisionId(value: string) {
    this._divisionId = value;
  }
  public resetDivisionId() {
    this._divisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
  }

  // file_content_hash - computed: true, optional: true, required: false
  private _fileContentHash?: string; 
  public get fileContentHash() {
    return this.getStringAttribute('file_content_hash');
  }
  public set fileContentHash(value: string) {
    this._fileContentHash = value;
  }
  public resetFileContentHash() {
    this._fileContentHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentHashInput() {
    return this._fileContentHash;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      division_id: cdktf.stringToTerraform(this._divisionId),
      file_content_hash: cdktf.stringToTerraform(this._fileContentHash),
      filename: cdktf.stringToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      division_id: {
        value: cdktf.stringToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_content_hash: {
        value: cdktf.stringToHclTerraform(this._fileContentHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
