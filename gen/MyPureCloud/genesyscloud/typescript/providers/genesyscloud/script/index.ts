// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify division id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/script#division_id Script#division_id}
  */
  readonly divisionId?: string;
  /**
  * Hash value of the script file content. Used to detect changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/script#file_content_hash Script#file_content_hash}
  */
  readonly fileContentHash?: string;
  /**
  * Path to the script file to upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/script#filepath Script#filepath}
  */
  readonly filepath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/script#id Script#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Display name for the script. A reliably unique name is recommended. Updating this field will result in the script being dropped and recreated with a new GUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/script#script_name Script#script_name}
  */
  readonly scriptName: string;
  /**
  * A substitution is a key value pair where the key is the value you want to replace, and the value is the value to substitute in its place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/script#substitutions Script#substitutions}
  */
  readonly substitutions?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/script genesyscloud_script}
*/
export class Script extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Script resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Script to import
  * @param importFromId The id of the existing Script that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Script to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/script genesyscloud_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScriptConfig
  */
  public constructor(scope: Construct, id: string, config: ScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_script',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
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
    this._filepath = config.filepath;
    this._id = config.id;
    this._scriptName = config.scriptName;
    this._substitutions = config.substitutions;
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

  // filepath - computed: false, optional: false, required: true
  private _filepath?: string; 
  public get filepath() {
    return this.getStringAttribute('filepath');
  }
  public set filepath(value: string) {
    this._filepath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filepathInput() {
    return this._filepath;
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

  // script_name - computed: false, optional: false, required: true
  private _scriptName?: string; 
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string) {
    this._scriptName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName;
  }

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string }; 
  public get substitutions() {
    return this.getStringMapAttribute('substitutions');
  }
  public set substitutions(value: { [key: string]: string }) {
    this._substitutions = value;
  }
  public resetSubstitutions() {
    this._substitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      division_id: cdktf.stringToTerraform(this._divisionId),
      file_content_hash: cdktf.stringToTerraform(this._fileContentHash),
      filepath: cdktf.stringToTerraform(this._filepath),
      id: cdktf.stringToTerraform(this._id),
      script_name: cdktf.stringToTerraform(this._scriptName),
      substitutions: cdktf.hashMapper(cdktf.stringToTerraform)(this._substitutions),
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
      filepath: {
        value: cdktf.stringToHclTerraform(this._filepath),
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
      script_name: {
        value: cdktf.stringToHclTerraform(this._scriptName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      substitutions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._substitutions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
