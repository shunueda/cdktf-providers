// https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComponentGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array with the IDs of the components in this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component_group#components ComponentGroup#components}
  */
  readonly components: string[];
  /**
  * More detailed description for this component group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component_group#description ComponentGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component_group#id ComponentGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Display name for this component group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component_group#name ComponentGroup#name}
  */
  readonly name: string;
  /**
  * the ID of the page this component group belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component_group#page_id ComponentGroup#page_id}
  */
  readonly pageId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component_group statuspage_component_group}
*/
export class ComponentGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuspage_component_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComponentGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComponentGroup to import
  * @param importFromId The id of the existing ComponentGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComponentGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuspage_component_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/component_group statuspage_component_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComponentGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ComponentGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'statuspage_component_group',
      terraformGeneratorMetadata: {
        providerName: 'statuspage',
        providerVersion: '0.1.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._components = config.components;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._pageId = config.pageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // components - computed: false, optional: false, required: true
  private _components?: string[]; 
  public get components() {
    return cdktf.Fn.tolist(this.getListAttribute('components'));
  }
  public set components(value: string[]) {
    this._components = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
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

  // page_id - computed: false, optional: false, required: true
  private _pageId?: string; 
  public get pageId() {
    return this.getStringAttribute('page_id');
  }
  public set pageId(value: string) {
    this._pageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdInput() {
    return this._pageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._components),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      page_id: cdktf.stringToTerraform(this._pageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._components),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      page_id: {
        value: cdktf.stringToHclTerraform(this._pageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
