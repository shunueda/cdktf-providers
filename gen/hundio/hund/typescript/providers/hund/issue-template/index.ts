// https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IssueTemplateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The body to use for an Issue/Update applied against this template. This field supports [Liquid templating](https://shopify.github.io/liquid/), in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#body IssueTemplateA#body}
  */
  readonly body?: string;
  /**
  * The body to use for an Issue/Update applied against this template. This field supports [Liquid templating](https://shopify.github.io/liquid/), translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#body_translations IssueTemplateA#body_translations}
  */
  readonly bodyTranslations?: { [key: string]: string };
  /**
  * The "kind" of this IssueTemplate. This field can be either `issue` or `update`, depending on whether this IssueTemplate can be applied to an Issue or Issue Update, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#kind IssueTemplateA#kind}
  */
  readonly kind: string;
  /**
  * The label to use for an Issue/Update applied against this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#label IssueTemplateA#label}
  */
  readonly label?: string;
  /**
  * An internal name for identifying this IssueTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#name IssueTemplateA#name}
  */
  readonly name: string;
  /**
  * When `kind` is `issue`, then the applied Issue will take on this title. This field supports [Liquid templating](https://shopify.github.io/liquid/), in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#title IssueTemplateA#title}
  */
  readonly title?: string;
  /**
  * When `kind` is `issue`, then the applied Issue will take on this title. This field supports [Liquid templating](https://shopify.github.io/liquid/), translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#title_translations IssueTemplateA#title_translations}
  */
  readonly titleTranslations?: { [key: string]: string };
  /**
  * An object defining a set of typed variables that can be provided in an application of this IssueTemplate. The variables can be accessed from any field in the IssueTemplate supporting Liquid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#variables IssueTemplateA#variables}
  */
  readonly variables?: { [key: string]: IssueTemplateVariablesA } | cdktf.IResolvable;
}
export interface IssueTemplateVariablesA {
  /**
  * Whether this variable is required when applying the template to an Issue/Update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#required IssueTemplateA#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The expected type of this variable. One of `datetime`, `i18n-string`, `number`, or `string`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#type IssueTemplateA#type}
  */
  readonly type?: string;
}

export function issueTemplateVariablesAToTerraform(struct?: IssueTemplateVariablesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function issueTemplateVariablesAToHclTerraform(struct?: IssueTemplateVariablesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueTemplateVariablesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): IssueTemplateVariablesA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueTemplateVariablesA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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
}

export class IssueTemplateVariablesAMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IssueTemplateVariablesA } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): IssueTemplateVariablesAOutputReference {
    return new IssueTemplateVariablesAOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template hund_issue_template}
*/
export class IssueTemplateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hund_issue_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IssueTemplateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IssueTemplateA to import
  * @param importFromId The id of the existing IssueTemplateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IssueTemplateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hund_issue_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hundio/hund/0.2.0/docs/resources/issue_template hund_issue_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IssueTemplateAConfig
  */
  public constructor(scope: Construct, id: string, config: IssueTemplateAConfig) {
    super(scope, id, {
      terraformResourceType: 'hund_issue_template',
      terraformGeneratorMetadata: {
        providerName: 'hund',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._bodyTranslations = config.bodyTranslations;
    this._kind = config.kind;
    this._label = config.label;
    this._name = config.name;
    this._title = config.title;
    this._titleTranslations = config.titleTranslations;
    this._variables.internalValue = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_translations - computed: true, optional: true, required: false
  private _bodyTranslations?: { [key: string]: string }; 
  public get bodyTranslations() {
    return this.getStringMapAttribute('body_translations');
  }
  public set bodyTranslations(value: { [key: string]: string }) {
    this._bodyTranslations = value;
  }
  public resetBodyTranslations() {
    this._bodyTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTranslationsInput() {
    return this._bodyTranslations;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
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

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // title_translations - computed: true, optional: true, required: false
  private _titleTranslations?: { [key: string]: string }; 
  public get titleTranslations() {
    return this.getStringMapAttribute('title_translations');
  }
  public set titleTranslations(value: { [key: string]: string }) {
    this._titleTranslations = value;
  }
  public resetTitleTranslations() {
    this._titleTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleTranslationsInput() {
    return this._titleTranslations;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new IssueTemplateVariablesAMap(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: { [key: string]: IssueTemplateVariablesA } | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      body_translations: cdktf.hashMapper(cdktf.stringToTerraform)(this._bodyTranslations),
      kind: cdktf.stringToTerraform(this._kind),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      title: cdktf.stringToTerraform(this._title),
      title_translations: cdktf.hashMapper(cdktf.stringToTerraform)(this._titleTranslations),
      variables: cdktf.hashMapper(issueTemplateVariablesAToTerraform)(this._variables.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body_translations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._bodyTranslations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title_translations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._titleTranslations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      variables: {
        value: cdktf.hashMapperHcl(issueTemplateVariablesAToHclTerraform)(this._variables.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "IssueTemplateVariablesAMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
