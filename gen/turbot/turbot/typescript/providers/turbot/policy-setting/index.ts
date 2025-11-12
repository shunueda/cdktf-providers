// https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#id PolicySetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#note PolicySetting#note}
  */
  readonly note?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#pgp_key PolicySetting#pgp_key}
  */
  readonly pgpKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#precedence PolicySetting#precedence}
  */
  readonly precedence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#resource PolicySetting#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#template PolicySetting#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#template_input PolicySetting#template_input}
  */
  readonly templateInput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#type PolicySetting#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#valid_from_timestamp PolicySetting#valid_from_timestamp}
  */
  readonly validFromTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#valid_to_timestamp PolicySetting#valid_to_timestamp}
  */
  readonly validToTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#value PolicySetting#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting turbot_policy_setting}
*/
export class PolicySetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "turbot_policy_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicySetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicySetting to import
  * @param importFromId The id of the existing PolicySetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicySetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "turbot_policy_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/policy_setting turbot_policy_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySettingConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySettingConfig) {
    super(scope, id, {
      terraformResourceType: 'turbot_policy_setting',
      terraformGeneratorMetadata: {
        providerName: 'turbot',
        providerVersion: '1.13.0',
        providerVersionConstraint: '1.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._note = config.note;
    this._pgpKey = config.pgpKey;
    this._precedence = config.precedence;
    this._resource = config.resource;
    this._template = config.template;
    this._templateInput = config.templateInput;
    this._type = config.type;
    this._validFromTimestamp = config.validFromTimestamp;
    this._validToTimestamp = config.validToTimestamp;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // pgp_key - computed: false, optional: true, required: false
  private _pgpKey?: string; 
  public get pgpKey() {
    return this.getStringAttribute('pgp_key');
  }
  public set pgpKey(value: string) {
    this._pgpKey = value;
  }
  public resetPgpKey() {
    this._pgpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgpKeyInput() {
    return this._pgpKey;
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: string; 
  public get precedence() {
    return this.getStringAttribute('precedence');
  }
  public set precedence(value: string) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // resource_akas - computed: true, optional: false, required: false
  public get resourceAkas() {
    return this.getListAttribute('resource_akas');
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
  public get templateTfInput() {
    return this._template;
  }

  // template_input - computed: false, optional: true, required: false
  private _templateInput?: string; 
  public get templateInput() {
    return this.getStringAttribute('template_input');
  }
  public set templateInput(value: string) {
    this._templateInput = value;
  }
  public resetTemplateInput() {
    this._templateInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInputInput() {
    return this._templateInput;
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

  // valid_from_timestamp - computed: false, optional: true, required: false
  private _validFromTimestamp?: string; 
  public get validFromTimestamp() {
    return this.getStringAttribute('valid_from_timestamp');
  }
  public set validFromTimestamp(value: string) {
    this._validFromTimestamp = value;
  }
  public resetValidFromTimestamp() {
    this._validFromTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromTimestampInput() {
    return this._validFromTimestamp;
  }

  // valid_to_timestamp - computed: false, optional: true, required: false
  private _validToTimestamp?: string; 
  public get validToTimestamp() {
    return this.getStringAttribute('valid_to_timestamp');
  }
  public set validToTimestamp(value: string) {
    this._validToTimestamp = value;
  }
  public resetValidToTimestamp() {
    this._validToTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validToTimestampInput() {
    return this._validToTimestamp;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_key_fingerprint - computed: true, optional: false, required: false
  public get valueKeyFingerprint() {
    return this.getStringAttribute('value_key_fingerprint');
  }

  // value_source - computed: true, optional: false, required: false
  public get valueSource() {
    return this.getStringAttribute('value_source');
  }

  // value_source_key_fingerprint - computed: true, optional: false, required: false
  public get valueSourceKeyFingerprint() {
    return this.getStringAttribute('value_source_key_fingerprint');
  }

  // value_source_used - computed: true, optional: false, required: false
  public get valueSourceUsed() {
    return this.getBooleanAttribute('value_source_used');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      note: cdktf.stringToTerraform(this._note),
      pgp_key: cdktf.stringToTerraform(this._pgpKey),
      precedence: cdktf.stringToTerraform(this._precedence),
      resource: cdktf.stringToTerraform(this._resource),
      template: cdktf.stringToTerraform(this._template),
      template_input: cdktf.stringToTerraform(this._templateInput),
      type: cdktf.stringToTerraform(this._type),
      valid_from_timestamp: cdktf.stringToTerraform(this._validFromTimestamp),
      valid_to_timestamp: cdktf.stringToTerraform(this._validToTimestamp),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pgp_key: {
        value: cdktf.stringToHclTerraform(this._pgpKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      precedence: {
        value: cdktf.stringToHclTerraform(this._precedence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_input: {
        value: cdktf.stringToHclTerraform(this._templateInput),
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
      valid_from_timestamp: {
        value: cdktf.stringToHclTerraform(this._validFromTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_to_timestamp: {
        value: cdktf.stringToHclTerraform(this._validToTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
