// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter#dashboard_id DashboardParameter#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * The default value of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter#default DashboardParameter#default}
  */
  readonly default?: string;
  /**
  * Whether custom input is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter#disable_custom_input DashboardParameter#disable_custom_input}
  */
  readonly disableCustomInput?: boolean | cdktf.IResolvable;
  /**
  * The label of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter#label DashboardParameter#label}
  */
  readonly label: string;
  /**
  * The name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter#name DashboardParameter#name}
  */
  readonly name: string;
  /**
  * The options for the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter#options DashboardParameter#options}
  */
  readonly options?: string[];
  /**
  * Whether a value is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter#require_value DashboardParameter#require_value}
  */
  readonly requireValue?: boolean | cdktf.IResolvable;
  /**
  * The type of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter#type DashboardParameter#type}
  */
  readonly type: string;
  /**
  * The value type of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter#value_type DashboardParameter#value_type}
  */
  readonly valueType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter jupiterone_dashboard_parameter}
*/
export class DashboardParameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_dashboard_parameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardParameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardParameter to import
  * @param importFromId The id of the existing DashboardParameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardParameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_dashboard_parameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/dashboard_parameter jupiterone_dashboard_parameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardParameterConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_dashboard_parameter',
      terraformGeneratorMetadata: {
        providerName: 'jupiterone',
        providerVersion: '1.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardId = config.dashboardId;
    this._default = config.default;
    this._disableCustomInput = config.disableCustomInput;
    this._label = config.label;
    this._name = config.name;
    this._options = config.options;
    this._requireValue = config.requireValue;
    this._type = config.type;
    this._valueType = config.valueType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // default - computed: false, optional: true, required: false
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

  // disable_custom_input - computed: false, optional: true, required: false
  private _disableCustomInput?: boolean | cdktf.IResolvable; 
  public get disableCustomInput() {
    return this.getBooleanAttribute('disable_custom_input');
  }
  public set disableCustomInput(value: boolean | cdktf.IResolvable) {
    this._disableCustomInput = value;
  }
  public resetDisableCustomInput() {
    this._disableCustomInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCustomInputInput() {
    return this._disableCustomInput;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // require_value - computed: false, optional: true, required: false
  private _requireValue?: boolean | cdktf.IResolvable; 
  public get requireValue() {
    return this.getBooleanAttribute('require_value');
  }
  public set requireValue(value: boolean | cdktf.IResolvable) {
    this._requireValue = value;
  }
  public resetRequireValue() {
    this._requireValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireValueInput() {
    return this._requireValue;
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

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      default: cdktf.stringToTerraform(this._default),
      disable_custom_input: cdktf.booleanToTerraform(this._disableCustomInput),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      require_value: cdktf.booleanToTerraform(this._requireValue),
      type: cdktf.stringToTerraform(this._type),
      value_type: cdktf.stringToTerraform(this._valueType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_id: {
        value: cdktf.stringToHclTerraform(this._dashboardId),
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
      disable_custom_input: {
        value: cdktf.booleanToHclTerraform(this._disableCustomInput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      require_value: {
        value: cdktf.booleanToHclTerraform(this._requireValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_type: {
        value: cdktf.stringToHclTerraform(this._valueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
