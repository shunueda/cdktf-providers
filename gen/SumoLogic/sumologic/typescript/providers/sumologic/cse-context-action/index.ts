// https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseContextActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action#all_record_fields CseContextAction#all_record_fields}
  */
  readonly allRecordFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action#enabled CseContextAction#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action#entity_types CseContextAction#entity_types}
  */
  readonly entityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action#id CseContextAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action#ioc_types CseContextAction#ioc_types}
  */
  readonly iocTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action#name CseContextAction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action#record_fields CseContextAction#record_fields}
  */
  readonly recordFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action#template CseContextAction#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action#type CseContextAction#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action sumologic_cse_context_action}
*/
export class CseContextAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_context_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseContextAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseContextAction to import
  * @param importFromId The id of the existing CseContextAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseContextAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_context_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/cse_context_action sumologic_cse_context_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseContextActionConfig
  */
  public constructor(scope: Construct, id: string, config: CseContextActionConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_context_action',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.8',
        providerVersionConstraint: '3.1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allRecordFields = config.allRecordFields;
    this._enabled = config.enabled;
    this._entityTypes = config.entityTypes;
    this._id = config.id;
    this._iocTypes = config.iocTypes;
    this._name = config.name;
    this._recordFields = config.recordFields;
    this._template = config.template;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_record_fields - computed: false, optional: true, required: false
  private _allRecordFields?: boolean | cdktf.IResolvable; 
  public get allRecordFields() {
    return this.getBooleanAttribute('all_record_fields');
  }
  public set allRecordFields(value: boolean | cdktf.IResolvable) {
    this._allRecordFields = value;
  }
  public resetAllRecordFields() {
    this._allRecordFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRecordFieldsInput() {
    return this._allRecordFields;
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

  // entity_types - computed: false, optional: true, required: false
  private _entityTypes?: string[]; 
  public get entityTypes() {
    return this.getListAttribute('entity_types');
  }
  public set entityTypes(value: string[]) {
    this._entityTypes = value;
  }
  public resetEntityTypes() {
    this._entityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypesInput() {
    return this._entityTypes;
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

  // ioc_types - computed: false, optional: false, required: true
  private _iocTypes?: string[]; 
  public get iocTypes() {
    return this.getListAttribute('ioc_types');
  }
  public set iocTypes(value: string[]) {
    this._iocTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iocTypesInput() {
    return this._iocTypes;
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

  // record_fields - computed: false, optional: true, required: false
  private _recordFields?: string[]; 
  public get recordFields() {
    return this.getListAttribute('record_fields');
  }
  public set recordFields(value: string[]) {
    this._recordFields = value;
  }
  public resetRecordFields() {
    this._recordFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFieldsInput() {
    return this._recordFields;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
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
      all_record_fields: cdktf.booleanToTerraform(this._allRecordFields),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entity_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entityTypes),
      id: cdktf.stringToTerraform(this._id),
      ioc_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iocTypes),
      name: cdktf.stringToTerraform(this._name),
      record_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordFields),
      template: cdktf.stringToTerraform(this._template),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_record_fields: {
        value: cdktf.booleanToHclTerraform(this._allRecordFields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entity_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entityTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ioc_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iocTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
