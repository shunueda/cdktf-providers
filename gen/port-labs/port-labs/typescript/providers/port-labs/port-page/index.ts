// https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier of the page/folder after which the page should be placed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#after PortPage#after}
  */
  readonly after?: string;
  /**
  * The blueprint for which the page is created, relevant only for pages of type "blueprint-entities"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#blueprint PortPage#blueprint}
  */
  readonly blueprint?: string;
  /**
  * The page description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#description PortPage#description}
  */
  readonly description?: string;
  /**
  * The icon of the page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#icon PortPage#icon}
  */
  readonly icon?: string;
  /**
  * The Identifier of the page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#identifier PortPage#identifier}
  */
  readonly identifier: string;
  /**
  * Whether the page is locked, if true, viewers will not be able to edit the page widgets and filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#locked PortPage#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * The identifier of the folder in which the page is in, default is the root of the sidebar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#parent PortPage#parent}
  */
  readonly parent?: string;
  /**
  * The title of the page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#title PortPage#title}
  */
  readonly title?: string;
  /**
  * The type of the page, can be one of "blueprint-entities", "dashboard" or "home"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#type PortPage#type}
  */
  readonly type: string;
  /**
  * The widgets of the page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#widgets PortPage#widgets}
  */
  readonly widgets?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page port_page}
*/
export class PortPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortPage to import
  * @param importFromId The id of the existing PortPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.14.4/docs/resources/port_page port_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortPageConfig
  */
  public constructor(scope: Construct, id: string, config: PortPageConfig) {
    super(scope, id, {
      terraformResourceType: 'port_page',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.14.4'
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
    this._blueprint = config.blueprint;
    this._description = config.description;
    this._icon = config.icon;
    this._identifier = config.identifier;
    this._locked = config.locked;
    this._parent = config.parent;
    this._title = config.title;
    this._type = config.type;
    this._widgets = config.widgets;
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

  // blueprint - computed: false, optional: true, required: false
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  public resetBlueprint() {
    this._blueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // widgets - computed: false, optional: true, required: false
  private _widgets?: string[]; 
  public get widgets() {
    return this.getListAttribute('widgets');
  }
  public set widgets(value: string[]) {
    this._widgets = value;
  }
  public resetWidgets() {
    this._widgets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetsInput() {
    return this._widgets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      after: cdktf.stringToTerraform(this._after),
      blueprint: cdktf.stringToTerraform(this._blueprint),
      description: cdktf.stringToTerraform(this._description),
      icon: cdktf.stringToTerraform(this._icon),
      identifier: cdktf.stringToTerraform(this._identifier),
      locked: cdktf.booleanToTerraform(this._locked),
      parent: cdktf.stringToTerraform(this._parent),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      widgets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._widgets),
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
      blueprint: {
        value: cdktf.stringToHclTerraform(this._blueprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
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
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      widgets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._widgets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
