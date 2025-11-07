// https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/smart_folder_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmartFolderAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/smart_folder_attachment#id SmartFolderAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/smart_folder_attachment#resource SmartFolderAttachment#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/smart_folder_attachment#smart_folder SmartFolderAttachment#smart_folder}
  */
  readonly smartFolder: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/smart_folder_attachment turbot_smart_folder_attachment}
*/
export class SmartFolderAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "turbot_smart_folder_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmartFolderAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmartFolderAttachment to import
  * @param importFromId The id of the existing SmartFolderAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/smart_folder_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmartFolderAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "turbot_smart_folder_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/smart_folder_attachment turbot_smart_folder_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmartFolderAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: SmartFolderAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'turbot_smart_folder_attachment',
      terraformGeneratorMetadata: {
        providerName: 'turbot',
        providerVersion: '1.13.0'
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
    this._resource = config.resource;
    this._smartFolder = config.smartFolder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // resource_akas - computed: true, optional: false, required: false
  public get resourceAkas() {
    return this.getListAttribute('resource_akas');
  }

  // smart_folder - computed: false, optional: false, required: true
  private _smartFolder?: string; 
  public get smartFolder() {
    return this.getStringAttribute('smart_folder');
  }
  public set smartFolder(value: string) {
    this._smartFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartFolderInput() {
    return this._smartFolder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource: cdktf.stringToTerraform(this._resource),
      smart_folder: cdktf.stringToTerraform(this._smartFolder),
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
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_folder: {
        value: cdktf.stringToHclTerraform(this._smartFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
