// https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add an attribute/value pair. Format is attr=value. The attribute must be part of the LDAP schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group#addattr Group#addattr}
  */
  readonly addattr?: string[];
  /**
  * Group Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Allow adding external non-IPA members from trusted domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group#external Group#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * GID (use this option to set it manually)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group#gid_number Group#gid_number}
  */
  readonly gidNumber?: number;
  /**
  * Group name
  * 
  * 	- The name must not exceed 32 characters.
  * 	- The name must contain only lowercase letters (a-z), digits (0-9), and the characters (. - _).
  * 	- The name must not start with a special character.
  * 	- A user and a group cannot have the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Create as a non-POSIX group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group#nonposix Group#nonposix}
  */
  readonly nonposix?: boolean | cdktf.IResolvable;
  /**
  * Set an attribute to a name/value pair. Format is attr=value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group#setattr Group#setattr}
  */
  readonly setattr?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group freeipa_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.2.1/docs/resources/group freeipa_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_group',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
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
    this._external = config.external;
    this._gidNumber = config.gidNumber;
    this._name = config.name;
    this._nonposix = config.nonposix;
    this._setattr = config.setattr;
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

  // external - computed: true, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // gid_number - computed: false, optional: true, required: false
  private _gidNumber?: number; 
  public get gidNumber() {
    return this.getNumberAttribute('gid_number');
  }
  public set gidNumber(value: number) {
    this._gidNumber = value;
  }
  public resetGidNumber() {
    this._gidNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidNumberInput() {
    return this._gidNumber;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // nonposix - computed: true, optional: true, required: false
  private _nonposix?: boolean | cdktf.IResolvable; 
  public get nonposix() {
    return this.getBooleanAttribute('nonposix');
  }
  public set nonposix(value: boolean | cdktf.IResolvable) {
    this._nonposix = value;
  }
  public resetNonposix() {
    this._nonposix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonposixInput() {
    return this._nonposix;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addattr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addattr),
      description: cdktf.stringToTerraform(this._description),
      external: cdktf.booleanToTerraform(this._external),
      gid_number: cdktf.numberToTerraform(this._gidNumber),
      name: cdktf.stringToTerraform(this._name),
      nonposix: cdktf.booleanToTerraform(this._nonposix),
      setattr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._setattr),
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
      external: {
        value: cdktf.booleanToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gid_number: {
        value: cdktf.numberToHclTerraform(this._gidNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nonposix: {
        value: cdktf.booleanToHclTerraform(this._nonposix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      setattr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._setattr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
