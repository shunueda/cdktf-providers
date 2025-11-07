// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointSecurityGroupTagSelectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector#annotation EndpointSecurityGroupTagSelector#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector#description EndpointSecurityGroupTagSelector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector#endpoint_security_group_dn EndpointSecurityGroupTagSelector#endpoint_security_group_dn}
  */
  readonly endpointSecurityGroupDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector#id EndpointSecurityGroupTagSelector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector#match_key EndpointSecurityGroupTagSelector#match_key}
  */
  readonly matchKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector#match_value EndpointSecurityGroupTagSelector#match_value}
  */
  readonly matchValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector#name EndpointSecurityGroupTagSelector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector#name_alias EndpointSecurityGroupTagSelector#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector#value_operator EndpointSecurityGroupTagSelector#value_operator}
  */
  readonly valueOperator?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector aci_endpoint_security_group_tag_selector}
*/
export class EndpointSecurityGroupTagSelector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_endpoint_security_group_tag_selector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointSecurityGroupTagSelector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointSecurityGroupTagSelector to import
  * @param importFromId The id of the existing EndpointSecurityGroupTagSelector that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointSecurityGroupTagSelector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_endpoint_security_group_tag_selector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group_tag_selector aci_endpoint_security_group_tag_selector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointSecurityGroupTagSelectorConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointSecurityGroupTagSelectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_endpoint_security_group_tag_selector',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._endpointSecurityGroupDn = config.endpointSecurityGroupDn;
    this._id = config.id;
    this._matchKey = config.matchKey;
    this._matchValue = config.matchValue;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._valueOperator = config.valueOperator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
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

  // endpoint_security_group_dn - computed: false, optional: false, required: true
  private _endpointSecurityGroupDn?: string; 
  public get endpointSecurityGroupDn() {
    return this.getStringAttribute('endpoint_security_group_dn');
  }
  public set endpointSecurityGroupDn(value: string) {
    this._endpointSecurityGroupDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSecurityGroupDnInput() {
    return this._endpointSecurityGroupDn;
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

  // match_key - computed: false, optional: false, required: true
  private _matchKey?: string; 
  public get matchKey() {
    return this.getStringAttribute('match_key');
  }
  public set matchKey(value: string) {
    this._matchKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchKeyInput() {
    return this._matchKey;
  }

  // match_value - computed: false, optional: false, required: true
  private _matchValue?: string; 
  public get matchValue() {
    return this.getStringAttribute('match_value');
  }
  public set matchValue(value: string) {
    this._matchValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueInput() {
    return this._matchValue;
  }

  // name - computed: true, optional: true, required: false
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // value_operator - computed: true, optional: true, required: false
  private _valueOperator?: string; 
  public get valueOperator() {
    return this.getStringAttribute('value_operator');
  }
  public set valueOperator(value: string) {
    this._valueOperator = value;
  }
  public resetValueOperator() {
    this._valueOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueOperatorInput() {
    return this._valueOperator;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      endpoint_security_group_dn: cdktf.stringToTerraform(this._endpointSecurityGroupDn),
      id: cdktf.stringToTerraform(this._id),
      match_key: cdktf.stringToTerraform(this._matchKey),
      match_value: cdktf.stringToTerraform(this._matchValue),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      value_operator: cdktf.stringToTerraform(this._valueOperator),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      endpoint_security_group_dn: {
        value: cdktf.stringToHclTerraform(this._endpointSecurityGroupDn),
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
      match_key: {
        value: cdktf.stringToHclTerraform(this._matchKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_value: {
        value: cdktf.stringToHclTerraform(this._matchValue),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_operator: {
        value: cdktf.stringToHclTerraform(this._valueOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
