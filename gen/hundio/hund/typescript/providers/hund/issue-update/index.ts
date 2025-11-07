// https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IssueUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, this Update will not be destroyed from your status page if the resource is destroyed in your Terraform configuration. This option is **recommended** for maintaining a history on your status page of past Issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#archive_on_destroy IssueUpdate#archive_on_destroy}
  */
  readonly archiveOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The body text of this Update in raw markdown, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#body IssueUpdate#body}
  */
  readonly body?: string;
  /**
  * The body text of this Update in raw markdown, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#body_translations IssueUpdate#body_translations}
  */
  readonly bodyTranslations?: { [key: string]: string };
  /**
  * The time after which this Update is considered the latest Update on its Issue, until the `effective_after` time of the Update succeeding this one, if one exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#effective_after IssueUpdate#effective_after}
  */
  readonly effectiveAfter?: string;
  /**
  * The Issue that this Update pertains to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#issue_id IssueUpdate#issue_id}
  */
  readonly issueId: string;
  /**
  * The label applied to this update, as well as the issue at large when this Update is the *latest* Update in the Issue. The label can be thought of as the "state" of the Issue as of this Update (e.g. "Problem Identified", "Monitoring", "Resolved").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#label IssueUpdate#label}
  */
  readonly label?: string;
  /**
  * The integer state which overrides the state of affected Components in `component`. A value of `null` indicates no override is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#state_override IssueUpdate#state_override}
  */
  readonly stateOverride?: number;
  /**
  * An application of an IssueTemplate, which contains a copy of the template fields of the associated IssueTemplate, as well as an object of user-defined variables that parameterize the template. 
  * 
  * -> Alterations to this field do not affect the associated `issue_template_id`, and will update the Issue/Update's content accordingly. Conversely, modification/deletion of the associated IssueTemplate do not affect the attributes of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#template IssueUpdate#template}
  */
  readonly template?: IssueUpdateTemplate;
}
export interface IssueUpdateTemplateSchema {
  /**
  * Whether this variable is required when applying the template to an Issue/Update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#required IssueUpdate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The expected type of this variable. One of `datetime`, `i18n-string`, `number`, or `string`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#type IssueUpdate#type}
  */
  readonly type?: string;
}

export function issueUpdateTemplateSchemaToTerraform(struct?: IssueUpdateTemplateSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function issueUpdateTemplateSchemaToHclTerraform(struct?: IssueUpdateTemplateSchema | cdktf.IResolvable): any {
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

export class IssueUpdateTemplateSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IssueUpdateTemplateSchema | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IssueUpdateTemplateSchema | cdktf.IResolvable | undefined) {
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

export class IssueUpdateTemplateSchemaMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IssueUpdateTemplateSchema } | cdktf.IResolvable

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
  public get(key: string): IssueUpdateTemplateSchemaOutputReference {
    return new IssueUpdateTemplateSchemaOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IssueUpdateTemplateVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#datetime IssueUpdate#datetime}
  */
  readonly datetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#i18n_string IssueUpdate#i18n_string}
  */
  readonly i18NString?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#number IssueUpdate#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#string IssueUpdate#string}
  */
  readonly string?: string;
}

export function issueUpdateTemplateVariablesToTerraform(struct?: IssueUpdateTemplateVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datetime: cdktf.stringToTerraform(struct!.datetime),
    i18n_string: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.i18NString),
    number: cdktf.numberToTerraform(struct!.number),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function issueUpdateTemplateVariablesToHclTerraform(struct?: IssueUpdateTemplateVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datetime: {
      value: cdktf.stringToHclTerraform(struct!.datetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    i18n_string: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.i18NString),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueUpdateTemplateVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IssueUpdateTemplateVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetime = this._datetime;
    }
    if (this._i18NString !== undefined) {
      hasAnyValues = true;
      internalValueResult.i18NString = this._i18NString;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueUpdateTemplateVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datetime = undefined;
      this._i18NString = undefined;
      this._number = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datetime = value.datetime;
      this._i18NString = value.i18NString;
      this._number = value.number;
      this._string = value.string;
    }
  }

  // datetime - computed: false, optional: true, required: false
  private _datetime?: string; 
  public get datetime() {
    return this.getStringAttribute('datetime');
  }
  public set datetime(value: string) {
    this._datetime = value;
  }
  public resetDatetime() {
    this._datetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeInput() {
    return this._datetime;
  }

  // i18n_string - computed: false, optional: true, required: false
  private _i18NString?: { [key: string]: string }; 
  public get i18NString() {
    return this.getStringMapAttribute('i18n_string');
  }
  public set i18NString(value: { [key: string]: string }) {
    this._i18NString = value;
  }
  public resetI18NString() {
    this._i18NString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get i18NStringInput() {
    return this._i18NString;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class IssueUpdateTemplateVariablesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IssueUpdateTemplateVariables } | cdktf.IResolvable

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
  public get(key: string): IssueUpdateTemplateVariablesOutputReference {
    return new IssueUpdateTemplateVariablesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IssueUpdateTemplate {
  /**
  * The [Liquid](https://shopify.github.io/liquid/) template for the `body` of the applied Issue/Update, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#body IssueUpdate#body}
  */
  readonly body?: string;
  /**
  * The [Liquid](https://shopify.github.io/liquid/) template for the `body` of the applied Issue/Update, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#body_translations IssueUpdate#body_translations}
  */
  readonly bodyTranslations?: { [key: string]: string };
  /**
  * The ObjectId of an IssueTemplate to use as the basis of this Application, which will inform the values for `body`, `label`, and `title` (when `kind = "issue"`). If this value is changed, then the application will be re-created according to the values of the given IssueTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#issue_template_id IssueUpdate#issue_template_id}
  */
  readonly issueTemplateId: string;
  /**
  * The template for the `label` of the applied Issue/Update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#label IssueUpdate#label}
  */
  readonly label?: string;
  /**
  * An object defining a set of typed variables that can be provided in `variables`. The variables can be accessed from any field in the IssueTemplate supporting Liquid.
  * 
  * -> This field is normally copied from the underlying `issue_template`, but can be overridden here as necessary. In any case, `variables` must adhere to `schema`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#schema IssueUpdate#schema}
  */
  readonly schema?: { [key: string]: IssueUpdateTemplateSchema } | cdktf.IResolvable;
  /**
  * An object of variable assignments used to parameterize the associated IssueTemplate. If the associated IssueTemplate marks a variable as `required`, then it must appear here with an appropriate value. The type of each variable must match the type set in the template's schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#variables IssueUpdate#variables}
  */
  readonly variables?: { [key: string]: IssueUpdateTemplateVariables } | cdktf.IResolvable;
}

export function issueUpdateTemplateToTerraform(struct?: IssueUpdateTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    body_translations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.bodyTranslations),
    issue_template_id: cdktf.stringToTerraform(struct!.issueTemplateId),
    label: cdktf.stringToTerraform(struct!.label),
    schema: cdktf.hashMapper(issueUpdateTemplateSchemaToTerraform)(struct!.schema),
    variables: cdktf.hashMapper(issueUpdateTemplateVariablesToTerraform)(struct!.variables),
  }
}


export function issueUpdateTemplateToHclTerraform(struct?: IssueUpdateTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_translations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.bodyTranslations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    issue_template_id: {
      value: cdktf.stringToHclTerraform(struct!.issueTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.hashMapperHcl(issueUpdateTemplateSchemaToHclTerraform)(struct!.schema),
      isBlock: true,
      type: "map",
      storageClassType: "IssueUpdateTemplateSchemaMap",
    },
    variables: {
      value: cdktf.hashMapperHcl(issueUpdateTemplateVariablesToHclTerraform)(struct!.variables),
      isBlock: true,
      type: "map",
      storageClassType: "IssueUpdateTemplateVariablesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueUpdateTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueUpdateTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._bodyTranslations !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTranslations = this._bodyTranslations;
    }
    if (this._issueTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueTemplateId = this._issueTemplateId;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueUpdateTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._bodyTranslations = undefined;
      this._issueTemplateId = undefined;
      this._label = undefined;
      this._schema.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._bodyTranslations = value.bodyTranslations;
      this._issueTemplateId = value.issueTemplateId;
      this._label = value.label;
      this._schema.internalValue = value.schema;
      this._variables.internalValue = value.variables;
    }
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_template_id - computed: false, optional: false, required: true
  private _issueTemplateId?: string; 
  public get issueTemplateId() {
    return this.getStringAttribute('issue_template_id');
  }
  public set issueTemplateId(value: string) {
    this._issueTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTemplateIdInput() {
    return this._issueTemplateId;
  }

  // label - computed: true, optional: true, required: false
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

  // schema - computed: true, optional: true, required: false
  private _schema = new IssueUpdateTemplateSchemaMap(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: { [key: string]: IssueUpdateTemplateSchema } | cdktf.IResolvable) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new IssueUpdateTemplateVariablesMap(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: { [key: string]: IssueUpdateTemplateVariables } | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update hund_issue_update}
*/
export class IssueUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hund_issue_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IssueUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IssueUpdate to import
  * @param importFromId The id of the existing IssueUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IssueUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hund_issue_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue_update hund_issue_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IssueUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: IssueUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'hund_issue_update',
      terraformGeneratorMetadata: {
        providerName: 'hund',
        providerVersion: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archiveOnDestroy = config.archiveOnDestroy;
    this._body = config.body;
    this._bodyTranslations = config.bodyTranslations;
    this._effectiveAfter = config.effectiveAfter;
    this._issueId = config.issueId;
    this._label = config.label;
    this._stateOverride = config.stateOverride;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_on_destroy - computed: false, optional: true, required: false
  private _archiveOnDestroy?: boolean | cdktf.IResolvable; 
  public get archiveOnDestroy() {
    return this.getBooleanAttribute('archive_on_destroy');
  }
  public set archiveOnDestroy(value: boolean | cdktf.IResolvable) {
    this._archiveOnDestroy = value;
  }
  public resetArchiveOnDestroy() {
    this._archiveOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveOnDestroyInput() {
    return this._archiveOnDestroy;
  }

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

  // body_html - computed: true, optional: false, required: false
  public get bodyHtml() {
    return this.getStringAttribute('body_html');
  }

  // body_html_translations - computed: true, optional: false, required: false
  private _bodyHtmlTranslations = new cdktf.StringMap(this, "body_html_translations");
  public get bodyHtmlTranslations() {
    return this._bodyHtmlTranslations;
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

  // effective - computed: true, optional: false, required: false
  public get effective() {
    return this.getBooleanAttribute('effective');
  }

  // effective_after - computed: true, optional: true, required: false
  private _effectiveAfter?: string; 
  public get effectiveAfter() {
    return this.getStringAttribute('effective_after');
  }
  public set effectiveAfter(value: string) {
    this._effectiveAfter = value;
  }
  public resetEffectiveAfter() {
    this._effectiveAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAfterInput() {
    return this._effectiveAfter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_id - computed: false, optional: false, required: true
  private _issueId?: string; 
  public get issueId() {
    return this.getStringAttribute('issue_id');
  }
  public set issueId(value: string) {
    this._issueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueIdInput() {
    return this._issueId;
  }

  // label - computed: true, optional: true, required: false
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

  // reopening - computed: true, optional: false, required: false
  public get reopening() {
    return this.getBooleanAttribute('reopening');
  }

  // state_override - computed: false, optional: true, required: false
  private _stateOverride?: number; 
  public get stateOverride() {
    return this.getNumberAttribute('state_override');
  }
  public set stateOverride(value: number) {
    this._stateOverride = value;
  }
  public resetStateOverride() {
    this._stateOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateOverrideInput() {
    return this._stateOverride;
  }

  // template - computed: false, optional: true, required: false
  private _template = new IssueUpdateTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: IssueUpdateTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_on_destroy: cdktf.booleanToTerraform(this._archiveOnDestroy),
      body: cdktf.stringToTerraform(this._body),
      body_translations: cdktf.hashMapper(cdktf.stringToTerraform)(this._bodyTranslations),
      effective_after: cdktf.stringToTerraform(this._effectiveAfter),
      issue_id: cdktf.stringToTerraform(this._issueId),
      label: cdktf.stringToTerraform(this._label),
      state_override: cdktf.numberToTerraform(this._stateOverride),
      template: issueUpdateTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._archiveOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      effective_after: {
        value: cdktf.stringToHclTerraform(this._effectiveAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issue_id: {
        value: cdktf.stringToHclTerraform(this._issueId),
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
      state_override: {
        value: cdktf.numberToHclTerraform(this._stateOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template: {
        value: issueUpdateTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IssueUpdateTemplate",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
