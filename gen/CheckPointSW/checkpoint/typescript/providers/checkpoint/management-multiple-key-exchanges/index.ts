// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementMultipleKeyExchangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional Key-Exchange 1 methods to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#additional_key_exchange_1_methods ManagementMultipleKeyExchanges#additional_key_exchange_1_methods}
  */
  readonly additionalKeyExchange1Methods?: string[];
  /**
  * Additional Key-Exchange 2 methods to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#additional_key_exchange_2_methods ManagementMultipleKeyExchanges#additional_key_exchange_2_methods}
  */
  readonly additionalKeyExchange2Methods?: string[];
  /**
  * Additional Key-Exchange 3 methods to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#additional_key_exchange_3_methods ManagementMultipleKeyExchanges#additional_key_exchange_3_methods}
  */
  readonly additionalKeyExchange3Methods?: string[];
  /**
  * Additional Key-Exchange 4 methods to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#additional_key_exchange_4_methods ManagementMultipleKeyExchanges#additional_key_exchange_4_methods}
  */
  readonly additionalKeyExchange4Methods?: string[];
  /**
  * Additional Key-Exchange 5 methods to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#additional_key_exchange_5_methods ManagementMultipleKeyExchanges#additional_key_exchange_5_methods}
  */
  readonly additionalKeyExchange5Methods?: string[];
  /**
  * Additional Key-Exchange 6 methods to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#additional_key_exchange_6_methods ManagementMultipleKeyExchanges#additional_key_exchange_6_methods}
  */
  readonly additionalKeyExchange6Methods?: string[];
  /**
  * Additional Key-Exchange 7 methods to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#additional_key_exchange_7_methods ManagementMultipleKeyExchanges#additional_key_exchange_7_methods}
  */
  readonly additionalKeyExchange7Methods?: string[];
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#color ManagementMultipleKeyExchanges#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#comments ManagementMultipleKeyExchanges#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#id ManagementMultipleKeyExchanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#ignore_errors ManagementMultipleKeyExchanges#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#ignore_warnings ManagementMultipleKeyExchanges#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Key-Exchange methods to use. Can contain only Diffie-Hellman groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#key_exchange_methods ManagementMultipleKeyExchanges#key_exchange_methods}
  */
  readonly keyExchangeMethods: string[];
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#name ManagementMultipleKeyExchanges#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#tags ManagementMultipleKeyExchanges#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges checkpoint_management_multiple_key_exchanges}
*/
export class ManagementMultipleKeyExchanges extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_multiple_key_exchanges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementMultipleKeyExchanges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementMultipleKeyExchanges to import
  * @param importFromId The id of the existing ManagementMultipleKeyExchanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementMultipleKeyExchanges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_multiple_key_exchanges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_multiple_key_exchanges checkpoint_management_multiple_key_exchanges} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementMultipleKeyExchangesConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementMultipleKeyExchangesConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_multiple_key_exchanges',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalKeyExchange1Methods = config.additionalKeyExchange1Methods;
    this._additionalKeyExchange2Methods = config.additionalKeyExchange2Methods;
    this._additionalKeyExchange3Methods = config.additionalKeyExchange3Methods;
    this._additionalKeyExchange4Methods = config.additionalKeyExchange4Methods;
    this._additionalKeyExchange5Methods = config.additionalKeyExchange5Methods;
    this._additionalKeyExchange6Methods = config.additionalKeyExchange6Methods;
    this._additionalKeyExchange7Methods = config.additionalKeyExchange7Methods;
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._keyExchangeMethods = config.keyExchangeMethods;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_key_exchange_1_methods - computed: false, optional: true, required: false
  private _additionalKeyExchange1Methods?: string[]; 
  public get additionalKeyExchange1Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_1_methods'));
  }
  public set additionalKeyExchange1Methods(value: string[]) {
    this._additionalKeyExchange1Methods = value;
  }
  public resetAdditionalKeyExchange1Methods() {
    this._additionalKeyExchange1Methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalKeyExchange1MethodsInput() {
    return this._additionalKeyExchange1Methods;
  }

  // additional_key_exchange_2_methods - computed: false, optional: true, required: false
  private _additionalKeyExchange2Methods?: string[]; 
  public get additionalKeyExchange2Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_2_methods'));
  }
  public set additionalKeyExchange2Methods(value: string[]) {
    this._additionalKeyExchange2Methods = value;
  }
  public resetAdditionalKeyExchange2Methods() {
    this._additionalKeyExchange2Methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalKeyExchange2MethodsInput() {
    return this._additionalKeyExchange2Methods;
  }

  // additional_key_exchange_3_methods - computed: false, optional: true, required: false
  private _additionalKeyExchange3Methods?: string[]; 
  public get additionalKeyExchange3Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_3_methods'));
  }
  public set additionalKeyExchange3Methods(value: string[]) {
    this._additionalKeyExchange3Methods = value;
  }
  public resetAdditionalKeyExchange3Methods() {
    this._additionalKeyExchange3Methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalKeyExchange3MethodsInput() {
    return this._additionalKeyExchange3Methods;
  }

  // additional_key_exchange_4_methods - computed: false, optional: true, required: false
  private _additionalKeyExchange4Methods?: string[]; 
  public get additionalKeyExchange4Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_4_methods'));
  }
  public set additionalKeyExchange4Methods(value: string[]) {
    this._additionalKeyExchange4Methods = value;
  }
  public resetAdditionalKeyExchange4Methods() {
    this._additionalKeyExchange4Methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalKeyExchange4MethodsInput() {
    return this._additionalKeyExchange4Methods;
  }

  // additional_key_exchange_5_methods - computed: false, optional: true, required: false
  private _additionalKeyExchange5Methods?: string[]; 
  public get additionalKeyExchange5Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_5_methods'));
  }
  public set additionalKeyExchange5Methods(value: string[]) {
    this._additionalKeyExchange5Methods = value;
  }
  public resetAdditionalKeyExchange5Methods() {
    this._additionalKeyExchange5Methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalKeyExchange5MethodsInput() {
    return this._additionalKeyExchange5Methods;
  }

  // additional_key_exchange_6_methods - computed: false, optional: true, required: false
  private _additionalKeyExchange6Methods?: string[]; 
  public get additionalKeyExchange6Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_6_methods'));
  }
  public set additionalKeyExchange6Methods(value: string[]) {
    this._additionalKeyExchange6Methods = value;
  }
  public resetAdditionalKeyExchange6Methods() {
    this._additionalKeyExchange6Methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalKeyExchange6MethodsInput() {
    return this._additionalKeyExchange6Methods;
  }

  // additional_key_exchange_7_methods - computed: false, optional: true, required: false
  private _additionalKeyExchange7Methods?: string[]; 
  public get additionalKeyExchange7Methods() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_key_exchange_7_methods'));
  }
  public set additionalKeyExchange7Methods(value: string[]) {
    this._additionalKeyExchange7Methods = value;
  }
  public resetAdditionalKeyExchange7Methods() {
    this._additionalKeyExchange7Methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalKeyExchange7MethodsInput() {
    return this._additionalKeyExchange7Methods;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // key_exchange_methods - computed: false, optional: false, required: true
  private _keyExchangeMethods?: string[]; 
  public get keyExchangeMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('key_exchange_methods'));
  }
  public set keyExchangeMethods(value: string[]) {
    this._keyExchangeMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyExchangeMethodsInput() {
    return this._keyExchangeMethods;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_key_exchange_1_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalKeyExchange1Methods),
      additional_key_exchange_2_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalKeyExchange2Methods),
      additional_key_exchange_3_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalKeyExchange3Methods),
      additional_key_exchange_4_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalKeyExchange4Methods),
      additional_key_exchange_5_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalKeyExchange5Methods),
      additional_key_exchange_6_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalKeyExchange6Methods),
      additional_key_exchange_7_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalKeyExchange7Methods),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      key_exchange_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyExchangeMethods),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_key_exchange_1_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalKeyExchange1Methods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_key_exchange_2_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalKeyExchange2Methods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_key_exchange_3_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalKeyExchange3Methods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_key_exchange_4_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalKeyExchange4Methods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_key_exchange_5_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalKeyExchange5Methods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_key_exchange_6_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalKeyExchange6Methods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_key_exchange_7_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalKeyExchange7Methods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_exchange_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyExchangeMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
