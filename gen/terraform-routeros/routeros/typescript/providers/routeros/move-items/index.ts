// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/move_items
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MoveItemsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/move_items#___path___ MoveItems#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/move_items#id MoveItems#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource name in the notation ```routeros_ip_firewall_filter```.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/move_items#resource_name MoveItems#resource_name}
  */
  readonly resourceName?: string;
  /**
  * URL path of the resource in the notation ```/ip/firewall/filter```.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/move_items#resource_path MoveItems#resource_path}
  */
  readonly resourcePath?: string;
  /**
  * List identifiers in the required sequence. To locate the ```sequence``` before an existing rule, add its ```id``` to the last element of the ```sequence```.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/move_items#sequence MoveItems#sequence}
  */
  readonly sequence: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/move_items routeros_move_items}
*/
export class MoveItems extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_move_items";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MoveItems resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MoveItems to import
  * @param importFromId The id of the existing MoveItems that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/move_items#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MoveItems to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_move_items", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/move_items routeros_move_items} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MoveItemsConfig
  */
  public constructor(scope: Construct, id: string, config: MoveItemsConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_move_items',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
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
    this._id = config.id;
    this._resourceName = config.resourceName;
    this._resourcePath = config.resourcePath;
    this._sequence = config.sequence;
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

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_path - computed: false, optional: true, required: false
  private _resourcePath?: string; 
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }
  public set resourcePath(value: string) {
    this._resourcePath = value;
  }
  public resetResourcePath() {
    this._resourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePathInput() {
    return this._resourcePath;
  }

  // sequence - computed: false, optional: false, required: true
  private _sequence?: string[]; 
  public get sequence() {
    return this.getListAttribute('sequence');
  }
  public set sequence(value: string[]) {
    this._sequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      id: cdktf.stringToTerraform(this._id),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_path: cdktf.stringToTerraform(this._resourcePath),
      sequence: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sequence),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_path: {
        value: cdktf.stringToHclTerraform(this._resourcePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sequence),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
