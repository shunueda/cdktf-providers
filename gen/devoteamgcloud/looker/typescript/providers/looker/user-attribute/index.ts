// https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default value for when no value is set on the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute#default_value UserAttribute#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destinations to which a hidden attribute may be sent. Once set, cannot be edited. If updated, the user_attribute will be recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute#hidden_value_domain_whitelist UserAttribute#hidden_value_domain_whitelist}
  */
  readonly hiddenValueDomainWhitelist?: string;
  /**
  * Human-friendly label for user attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute#label UserAttribute#label}
  */
  readonly label: string;
  /**
  * Name of user attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute#name UserAttribute#name}
  */
  readonly name: string;
  /**
  * Type of user attribute ('string', 'number', 'datetime', 'yesno', 'zipcode', 'relative_url', 'advanced_filter_string', 'advanced_filter_datetime', 'advanced_filter_number')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute#type UserAttribute#type}
  */
  readonly type: string;
  /**
  * Users can change the value of this attribute for themselves.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute#user_can_edit UserAttribute#user_can_edit}
  */
  readonly userCanEdit?: boolean | cdktf.IResolvable;
  /**
  * Non-admin users can see the values of their attributes and use them in filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute#user_can_view UserAttribute#user_can_view}
  */
  readonly userCanView?: boolean | cdktf.IResolvable;
  /**
  * If true, users will not be able to view values of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute#value_is_hidden UserAttribute#value_is_hidden}
  */
  readonly valueIsHidden?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute looker_user_attribute}
*/
export class UserAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "looker_user_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserAttribute to import
  * @param importFromId The id of the existing UserAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "looker_user_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/user_attribute looker_user_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: UserAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'looker_user_attribute',
      terraformGeneratorMetadata: {
        providerName: 'looker',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultValue = config.defaultValue;
    this._hiddenValueDomainWhitelist = config.hiddenValueDomainWhitelist;
    this._label = config.label;
    this._name = config.name;
    this._type = config.type;
    this._userCanEdit = config.userCanEdit;
    this._userCanView = config.userCanView;
    this._valueIsHidden = config.valueIsHidden;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // hidden_value_domain_whitelist - computed: false, optional: true, required: false
  private _hiddenValueDomainWhitelist?: string; 
  public get hiddenValueDomainWhitelist() {
    return this.getStringAttribute('hidden_value_domain_whitelist');
  }
  public set hiddenValueDomainWhitelist(value: string) {
    this._hiddenValueDomainWhitelist = value;
  }
  public resetHiddenValueDomainWhitelist() {
    this._hiddenValueDomainWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenValueDomainWhitelistInput() {
    return this._hiddenValueDomainWhitelist;
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

  // user_can_edit - computed: false, optional: true, required: false
  private _userCanEdit?: boolean | cdktf.IResolvable; 
  public get userCanEdit() {
    return this.getBooleanAttribute('user_can_edit');
  }
  public set userCanEdit(value: boolean | cdktf.IResolvable) {
    this._userCanEdit = value;
  }
  public resetUserCanEdit() {
    this._userCanEdit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCanEditInput() {
    return this._userCanEdit;
  }

  // user_can_view - computed: false, optional: true, required: false
  private _userCanView?: boolean | cdktf.IResolvable; 
  public get userCanView() {
    return this.getBooleanAttribute('user_can_view');
  }
  public set userCanView(value: boolean | cdktf.IResolvable) {
    this._userCanView = value;
  }
  public resetUserCanView() {
    this._userCanView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCanViewInput() {
    return this._userCanView;
  }

  // value_is_hidden - computed: false, optional: true, required: false
  private _valueIsHidden?: boolean | cdktf.IResolvable; 
  public get valueIsHidden() {
    return this.getBooleanAttribute('value_is_hidden');
  }
  public set valueIsHidden(value: boolean | cdktf.IResolvable) {
    this._valueIsHidden = value;
  }
  public resetValueIsHidden() {
    this._valueIsHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueIsHiddenInput() {
    return this._valueIsHidden;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_value: cdktf.stringToTerraform(this._defaultValue),
      hidden_value_domain_whitelist: cdktf.stringToTerraform(this._hiddenValueDomainWhitelist),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      user_can_edit: cdktf.booleanToTerraform(this._userCanEdit),
      user_can_view: cdktf.booleanToTerraform(this._userCanView),
      value_is_hidden: cdktf.booleanToTerraform(this._valueIsHidden),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_value: {
        value: cdktf.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden_value_domain_whitelist: {
        value: cdktf.stringToHclTerraform(this._hiddenValueDomainWhitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_can_edit: {
        value: cdktf.booleanToHclTerraform(this._userCanEdit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_can_view: {
        value: cdktf.booleanToHclTerraform(this._userCanView),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      value_is_hidden: {
        value: cdktf.booleanToHclTerraform(this._valueIsHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
