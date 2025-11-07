// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectCasbSaasapplicationInputattributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#adom ObjectCasbSaasapplicationInputattributes#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#attr_type ObjectCasbSaasapplicationInputattributes#attr_type}
  */
  readonly attrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#default ObjectCasbSaasapplicationInputattributes#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#description ObjectCasbSaasapplicationInputattributes#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#fallback_input ObjectCasbSaasapplicationInputattributes#fallback_input}
  */
  readonly fallbackInput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#id ObjectCasbSaasapplicationInputattributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#name ObjectCasbSaasapplicationInputattributes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#required ObjectCasbSaasapplicationInputattributes#required}
  */
  readonly required?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#saas_application ObjectCasbSaasapplicationInputattributes#saas_application}
  */
  readonly saasApplication: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#scopetype ObjectCasbSaasapplicationInputattributes#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#type ObjectCasbSaasapplicationInputattributes#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes fortimanager_object_casb_saasapplication_inputattributes}
*/
export class ObjectCasbSaasapplicationInputattributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_casb_saasapplication_inputattributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectCasbSaasapplicationInputattributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectCasbSaasapplicationInputattributes to import
  * @param importFromId The id of the existing ObjectCasbSaasapplicationInputattributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectCasbSaasapplicationInputattributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_casb_saasapplication_inputattributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_saasapplication_inputattributes fortimanager_object_casb_saasapplication_inputattributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectCasbSaasapplicationInputattributesConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectCasbSaasapplicationInputattributesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_casb_saasapplication_inputattributes',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._attrType = config.attrType;
    this._default = config.default;
    this._description = config.description;
    this._fallbackInput = config.fallbackInput;
    this._id = config.id;
    this._name = config.name;
    this._required = config.required;
    this._saasApplication = config.saasApplication;
    this._scopetype = config.scopetype;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // attr_type - computed: true, optional: true, required: false
  private _attrType?: string; 
  public get attrType() {
    return this.getStringAttribute('attr_type');
  }
  public set attrType(value: string) {
    this._attrType = value;
  }
  public resetAttrType() {
    this._attrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrTypeInput() {
    return this._attrType;
  }

  // default - computed: true, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // fallback_input - computed: true, optional: true, required: false
  private _fallbackInput?: string; 
  public get fallbackInput() {
    return this.getStringAttribute('fallback_input');
  }
  public set fallbackInput(value: string) {
    this._fallbackInput = value;
  }
  public resetFallbackInput() {
    this._fallbackInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInputInput() {
    return this._fallbackInput;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: true, optional: true, required: false
  private _required?: string; 
  public get required() {
    return this.getStringAttribute('required');
  }
  public set required(value: string) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // saas_application - computed: false, optional: false, required: true
  private _saasApplication?: string; 
  public get saasApplication() {
    return this.getStringAttribute('saas_application');
  }
  public set saasApplication(value: string) {
    this._saasApplication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saasApplicationInput() {
    return this._saasApplication;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // type - computed: true, optional: true, required: false
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
      adom: cdktf.stringToTerraform(this._adom),
      attr_type: cdktf.stringToTerraform(this._attrType),
      default: cdktf.stringToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      fallback_input: cdktf.stringToTerraform(this._fallbackInput),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      required: cdktf.stringToTerraform(this._required),
      saas_application: cdktf.stringToTerraform(this._saasApplication),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attr_type: {
        value: cdktf.stringToHclTerraform(this._attrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.stringToHclTerraform(this._default),
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
      fallback_input: {
        value: cdktf.stringToHclTerraform(this._fallbackInput),
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
      required: {
        value: cdktf.stringToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saas_application: {
        value: cdktf.stringToHclTerraform(this._saasApplication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
