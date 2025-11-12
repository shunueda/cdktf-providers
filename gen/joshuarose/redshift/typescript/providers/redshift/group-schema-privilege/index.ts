// https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupSchemaPrivilegeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#create GroupSchemaPrivilege#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#delete GroupSchemaPrivilege#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#group_id GroupSchemaPrivilege#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#id GroupSchemaPrivilege#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#insert GroupSchemaPrivilege#insert}
  */
  readonly insert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#references GroupSchemaPrivilege#references}
  */
  readonly references?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#schema_id GroupSchemaPrivilege#schema_id}
  */
  readonly schemaId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#select GroupSchemaPrivilege#select}
  */
  readonly select?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#update GroupSchemaPrivilege#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#usage GroupSchemaPrivilege#usage}
  */
  readonly usage?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege redshift_group_schema_privilege}
*/
export class GroupSchemaPrivilege extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redshift_group_schema_privilege";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupSchemaPrivilege resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupSchemaPrivilege to import
  * @param importFromId The id of the existing GroupSchemaPrivilege that should be imported. Refer to the {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupSchemaPrivilege to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redshift_group_schema_privilege", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joshuarose/redshift/0.0.4/docs/resources/group_schema_privilege redshift_group_schema_privilege} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupSchemaPrivilegeConfig
  */
  public constructor(scope: Construct, id: string, config: GroupSchemaPrivilegeConfig) {
    super(scope, id, {
      terraformResourceType: 'redshift_group_schema_privilege',
      terraformGeneratorMetadata: {
        providerName: 'redshift',
        providerVersion: '0.0.4',
        providerVersionConstraint: '0.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._create = config.create;
    this._delete = config.delete;
    this._groupId = config.groupId;
    this._id = config.id;
    this._insert = config.insert;
    this._references = config.references;
    this._schemaId = config.schemaId;
    this._select = config.select;
    this._update = config.update;
    this._usage = config.usage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // insert - computed: false, optional: true, required: false
  private _insert?: boolean | cdktf.IResolvable; 
  public get insert() {
    return this.getBooleanAttribute('insert');
  }
  public set insert(value: boolean | cdktf.IResolvable) {
    this._insert = value;
  }
  public resetInsert() {
    this._insert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertInput() {
    return this._insert;
  }

  // references - computed: false, optional: true, required: false
  private _references?: boolean | cdktf.IResolvable; 
  public get references() {
    return this.getBooleanAttribute('references');
  }
  public set references(value: boolean | cdktf.IResolvable) {
    this._references = value;
  }
  public resetReferences() {
    this._references = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencesInput() {
    return this._references;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: number; 
  public get schemaId() {
    return this.getNumberAttribute('schema_id');
  }
  public set schemaId(value: number) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // select - computed: false, optional: true, required: false
  private _select?: boolean | cdktf.IResolvable; 
  public get select() {
    return this.getBooleanAttribute('select');
  }
  public set select(value: boolean | cdktf.IResolvable) {
    this._select = value;
  }
  public resetSelect() {
    this._select = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: boolean | cdktf.IResolvable; 
  public get usage() {
    return this.getBooleanAttribute('usage');
  }
  public set usage(value: boolean | cdktf.IResolvable) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create: cdktf.booleanToTerraform(this._create),
      delete: cdktf.booleanToTerraform(this._delete),
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      insert: cdktf.booleanToTerraform(this._insert),
      references: cdktf.booleanToTerraform(this._references),
      schema_id: cdktf.numberToTerraform(this._schemaId),
      select: cdktf.booleanToTerraform(this._select),
      update: cdktf.booleanToTerraform(this._update),
      usage: cdktf.booleanToTerraform(this._usage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create: {
        value: cdktf.booleanToHclTerraform(this._create),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete: {
        value: cdktf.booleanToHclTerraform(this._delete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert: {
        value: cdktf.booleanToHclTerraform(this._insert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      references: {
        value: cdktf.booleanToHclTerraform(this._references),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema_id: {
        value: cdktf.numberToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      select: {
        value: cdktf.booleanToHclTerraform(this._select),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update: {
        value: cdktf.booleanToHclTerraform(this._update),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      usage: {
        value: cdktf.booleanToHclTerraform(this._usage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
