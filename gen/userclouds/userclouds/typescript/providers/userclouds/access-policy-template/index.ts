// https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessPolicyTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template#created AccessPolicyTemplate#created}
  */
  readonly created?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template#deleted AccessPolicyTemplate#deleted}
  */
  readonly deleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template#description AccessPolicyTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template#function AccessPolicyTemplate#function}
  */
  readonly function: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template#id AccessPolicyTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template#name AccessPolicyTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template#updated AccessPolicyTemplate#updated}
  */
  readonly updated?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template userclouds_access_policy_template}
*/
export class AccessPolicyTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "userclouds_access_policy_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessPolicyTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessPolicyTemplate to import
  * @param importFromId The id of the existing AccessPolicyTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessPolicyTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "userclouds_access_policy_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/access_policy_template userclouds_access_policy_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessPolicyTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: AccessPolicyTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'userclouds_access_policy_template',
      terraformGeneratorMetadata: {
        providerName: 'userclouds',
        providerVersion: '0.1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._created = config.created;
    this._deleted = config.deleted;
    this._description = config.description;
    this._function = config.function;
    this._id = config.id;
    this._name = config.name;
    this._updated = config.updated;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // deleted - computed: true, optional: true, required: false
  private _deleted?: string; 
  public get deleted() {
    return this.getStringAttribute('deleted');
  }
  public set deleted(value: string) {
    this._deleted = value;
  }
  public resetDeleted() {
    this._deleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
  }

  // description - computed: true, optional: true, required: false
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

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
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

  // updated - computed: true, optional: true, required: false
  private _updated?: string; 
  public get updated() {
    return this.getStringAttribute('updated');
  }
  public set updated(value: string) {
    this._updated = value;
  }
  public resetUpdated() {
    this._updated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedInput() {
    return this._updated;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created: cdktf.stringToTerraform(this._created),
      deleted: cdktf.stringToTerraform(this._deleted),
      description: cdktf.stringToTerraform(this._description),
      function: cdktf.stringToTerraform(this._function),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      updated: cdktf.stringToTerraform(this._updated),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created: {
        value: cdktf.stringToHclTerraform(this._created),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deleted: {
        value: cdktf.stringToHclTerraform(this._deleted),
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
      function: {
        value: cdktf.stringToHclTerraform(this._function),
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
      updated: {
        value: cdktf.stringToHclTerraform(this._updated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
