// https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier of the folder after which the folder should be placed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_folder#after PortFolder#after}
  */
  readonly after?: string;
  /**
  * The identifier of the folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_folder#identifier PortFolder#identifier}
  */
  readonly identifier: string;
  /**
  * The identifier of the parent folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_folder#parent PortFolder#parent}
  */
  readonly parent?: string;
  /**
  * The title of the folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_folder#title PortFolder#title}
  */
  readonly title?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_folder port_folder}
*/
export class PortFolder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortFolder to import
  * @param importFromId The id of the existing PortFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_folder port_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortFolderConfig
  */
  public constructor(scope: Construct, id: string, config: PortFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'port_folder',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.15.1',
        providerVersionConstraint: '2.15.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._after = config.after;
    this._identifier = config.identifier;
    this._parent = config.parent;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after - computed: false, optional: true, required: false
  private _after?: string; 
  public get after() {
    return this.getStringAttribute('after');
  }
  public set after(value: string) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      after: cdktf.stringToTerraform(this._after),
      identifier: cdktf.stringToTerraform(this._identifier),
      parent: cdktf.stringToTerraform(this._parent),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      after: {
        value: cdktf.stringToHclTerraform(this._after),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
