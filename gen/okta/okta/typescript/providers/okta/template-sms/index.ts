// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/template_sms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateSmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/template_sms#id TemplateSms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SMS default template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/template_sms#template TemplateSms#template}
  */
  readonly template: string;
  /**
  * SMS template type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/template_sms#type TemplateSms#type}
  */
  readonly type: string;
  /**
  * translations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/template_sms#translations TemplateSms#translations}
  */
  readonly translations?: TemplateSmsTranslations[] | cdktf.IResolvable;
}
export interface TemplateSmsTranslations {
  /**
  * The language to map the template to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/template_sms#language TemplateSms#language}
  */
  readonly language: string;
  /**
  * The SMS message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/template_sms#template TemplateSms#template}
  */
  readonly template: string;
}

export function templateSmsTranslationsToTerraform(struct?: TemplateSmsTranslations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function templateSmsTranslationsToHclTerraform(struct?: TemplateSmsTranslations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateSmsTranslationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TemplateSmsTranslations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateSmsTranslations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._language = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._language = value.language;
      this._template = value.template;
    }
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class TemplateSmsTranslationsList extends cdktf.ComplexList {
  public internalValue? : TemplateSmsTranslations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TemplateSmsTranslationsOutputReference {
    return new TemplateSmsTranslationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/template_sms okta_template_sms}
*/
export class TemplateSms extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_template_sms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateSms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateSms to import
  * @param importFromId The id of the existing TemplateSms that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/template_sms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateSms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_template_sms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/template_sms okta_template_sms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateSmsConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateSmsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_template_sms',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
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
    this._template = config.template;
    this._type = config.type;
    this._translations.internalValue = config.translations;
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

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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

  // translations - computed: false, optional: true, required: false
  private _translations = new TemplateSmsTranslationsList(this, "translations", true);
  public get translations() {
    return this._translations;
  }
  public putTranslations(value: TemplateSmsTranslations[] | cdktf.IResolvable) {
    this._translations.internalValue = value;
  }
  public resetTranslations() {
    this._translations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translationsInput() {
    return this._translations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      template: cdktf.stringToTerraform(this._template),
      type: cdktf.stringToTerraform(this._type),
      translations: cdktf.listMapper(templateSmsTranslationsToTerraform, true)(this._translations.internalValue),
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
      translations: {
        value: cdktf.listMapperHcl(templateSmsTranslationsToHclTerraform, true)(this._translations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TemplateSmsTranslationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
