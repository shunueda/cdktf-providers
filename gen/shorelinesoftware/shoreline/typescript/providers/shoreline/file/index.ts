// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileConfig extends cdktf.TerraformMetaArguments {
  /**
  * A user-friendly explanation of an object. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#description File#description}
  */
  readonly description?: string;
  /**
  * Target location for a copied distributed File object.  See [Op: cp](https://docs.shoreline.io/op/commands/cp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#destination_path File#destination_path}
  */
  readonly destinationPath: string;
  /**
  * If the object is currently enabled or disabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#enabled File#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#id File#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The inline file data of a distributed File object. (conflicts with input_file) Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#inline_data File#inline_data}
  */
  readonly inlineData?: string;
  /**
  * The local source of a distributed File object. (conflicts with inline_data) Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#input_file File#input_file}
  */
  readonly inputFile?: string;
  /**
  * The md5 checksum of a file, e.g. filemd5("${path.module}/data/example-file.txt") Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#md5 File#md5}
  */
  readonly md5?: string;
  /**
  * The File's permissions, like 'chmod', in octal (e.g. '0644'). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#mode File#mode}
  */
  readonly mode?: string;
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#name File#name}
  */
  readonly name: string;
  /**
  * The File's ownership, like 'chown' (e.g. 'user:group'). Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#owner File#owner}
  */
  readonly owner?: string;
  /**
  * A set of Resources (e.g. host, pod, container), optionally filtered on tags or dynamic conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#resource_query File#resource_query}
  */
  readonly resourceQuery: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file shoreline_file}
*/
export class File extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the File to import
  * @param importFromId The id of the existing File that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the File to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/file shoreline_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileConfig
  */
  public constructor(scope: Construct, id: string, config: FileConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_file',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destinationPath = config.destinationPath;
    this._enabled = config.enabled;
    this._id = config.id;
    this._inlineData = config.inlineData;
    this._inputFile = config.inputFile;
    this._md5 = config.md5;
    this._mode = config.mode;
    this._name = config.name;
    this._owner = config.owner;
    this._resourceQuery = config.resourceQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_path - computed: false, optional: false, required: true
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // file_data - computed: true, optional: false, required: false
  public get fileData() {
    return this.getStringAttribute('file_data');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getNumberAttribute('file_length');
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

  // inline_data - computed: false, optional: true, required: false
  private _inlineData?: string; 
  public get inlineData() {
    return this.getStringAttribute('inline_data');
  }
  public set inlineData(value: string) {
    this._inlineData = value;
  }
  public resetInlineData() {
    this._inlineData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineDataInput() {
    return this._inlineData;
  }

  // input_file - computed: false, optional: true, required: false
  private _inputFile?: string; 
  public get inputFile() {
    return this.getStringAttribute('input_file');
  }
  public set inputFile(value: string) {
    this._inputFile = value;
  }
  public resetInputFile() {
    this._inputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFileInput() {
    return this._inputFile;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // resource_query - computed: false, optional: false, required: true
  private _resourceQuery?: string; 
  public get resourceQuery() {
    return this.getStringAttribute('resource_query');
  }
  public set resourceQuery(value: string) {
    this._resourceQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQueryInput() {
    return this._resourceQuery;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_path: cdktf.stringToTerraform(this._destinationPath),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      inline_data: cdktf.stringToTerraform(this._inlineData),
      input_file: cdktf.stringToTerraform(this._inputFile),
      md5: cdktf.stringToTerraform(this._md5),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      resource_query: cdktf.stringToTerraform(this._resourceQuery),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_path: {
        value: cdktf.stringToHclTerraform(this._destinationPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      inline_data: {
        value: cdktf.stringToHclTerraform(this._inlineData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_file: {
        value: cdktf.stringToHclTerraform(this._inputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      md5: {
        value: cdktf.stringToHclTerraform(this._md5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_query: {
        value: cdktf.stringToHclTerraform(this._resourceQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
