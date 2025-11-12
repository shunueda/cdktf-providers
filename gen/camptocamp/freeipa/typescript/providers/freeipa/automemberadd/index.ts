// https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/automemberadd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomemberaddConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/automemberadd#addattr Automemberadd#addattr}
  */
  readonly addattr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/automemberadd#description Automemberadd#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/automemberadd#id Automemberadd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/automemberadd#name Automemberadd#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/automemberadd#setattr Automemberadd#setattr}
  */
  readonly setattr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/automemberadd#type Automemberadd#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/automemberadd freeipa_automemberadd}
*/
export class Automemberadd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_automemberadd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Automemberadd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Automemberadd to import
  * @param importFromId The id of the existing Automemberadd that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/automemberadd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Automemberadd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_automemberadd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/automemberadd freeipa_automemberadd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomemberaddConfig
  */
  public constructor(scope: Construct, id: string, config: AutomemberaddConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_automemberadd',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addattr = config.addattr;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._setattr = config.setattr;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addattr - computed: false, optional: true, required: false
  private _addattr?: string[]; 
  public get addattr() {
    return this.getListAttribute('addattr');
  }
  public set addattr(value: string[]) {
    this._addattr = value;
  }
  public resetAddattr() {
    this._addattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addattrInput() {
    return this._addattr;
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

  // setattr - computed: false, optional: true, required: false
  private _setattr?: string[]; 
  public get setattr() {
    return this.getListAttribute('setattr');
  }
  public set setattr(value: string[]) {
    this._setattr = value;
  }
  public resetSetattr() {
    this._setattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setattrInput() {
    return this._setattr;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addattr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addattr),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      setattr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._setattr),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addattr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addattr),
        isBlock: false,
        type: "list",
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
      setattr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._setattr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
