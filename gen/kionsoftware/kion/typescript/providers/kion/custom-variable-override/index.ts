// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomVariableOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override#custom_variable_id CustomVariableOverride#custom_variable_id}
  */
  readonly customVariableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override#entity_id CustomVariableOverride#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override#entity_type CustomVariableOverride#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override#id CustomVariableOverride#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override#last_updated CustomVariableOverride#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override#value_list CustomVariableOverride#value_list}
  */
  readonly valueList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override#value_map CustomVariableOverride#value_map}
  */
  readonly valueMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override#value_string CustomVariableOverride#value_string}
  */
  readonly valueString?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override kion_custom_variable_override}
*/
export class CustomVariableOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_custom_variable_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomVariableOverride resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomVariableOverride to import
  * @param importFromId The id of the existing CustomVariableOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomVariableOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_custom_variable_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/custom_variable_override kion_custom_variable_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomVariableOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: CustomVariableOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_custom_variable_override',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customVariableId = config.customVariableId;
    this._entityId = config.entityId;
    this._entityType = config.entityType;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._valueList = config.valueList;
    this._valueMap = config.valueMap;
    this._valueString = config.valueString;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_variable_id - computed: false, optional: false, required: true
  private _customVariableId?: string; 
  public get customVariableId() {
    return this.getStringAttribute('custom_variable_id');
  }
  public set customVariableId(value: string) {
    this._customVariableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customVariableIdInput() {
    return this._customVariableId;
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // value_list - computed: false, optional: true, required: false
  private _valueList?: string[]; 
  public get valueList() {
    return this.getListAttribute('value_list');
  }
  public set valueList(value: string[]) {
    this._valueList = value;
  }
  public resetValueList() {
    this._valueList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueListInput() {
    return this._valueList;
  }

  // value_map - computed: false, optional: true, required: false
  private _valueMap?: { [key: string]: string }; 
  public get valueMap() {
    return this.getStringMapAttribute('value_map');
  }
  public set valueMap(value: { [key: string]: string }) {
    this._valueMap = value;
  }
  public resetValueMap() {
    this._valueMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMapInput() {
    return this._valueMap;
  }

  // value_string - computed: false, optional: true, required: false
  private _valueString?: string; 
  public get valueString() {
    return this.getStringAttribute('value_string');
  }
  public set valueString(value: string) {
    this._valueString = value;
  }
  public resetValueString() {
    this._valueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStringInput() {
    return this._valueString;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_variable_id: cdktf.stringToTerraform(this._customVariableId),
      entity_id: cdktf.stringToTerraform(this._entityId),
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      value_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valueList),
      value_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._valueMap),
      value_string: cdktf.stringToTerraform(this._valueString),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_variable_id: {
        value: cdktf.stringToHclTerraform(this._customVariableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valueList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      value_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._valueMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      value_string: {
        value: cdktf.stringToHclTerraform(this._valueString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
