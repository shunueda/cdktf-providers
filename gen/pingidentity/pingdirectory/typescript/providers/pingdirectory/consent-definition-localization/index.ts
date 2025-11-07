// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsentDefinitionLocalizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent Consent Definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization#consent_definition_name ConsentDefinitionLocalization#consent_definition_name}
  */
  readonly consentDefinitionName: string;
  /**
  * Localized text describing the data to be shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization#data_text ConsentDefinitionLocalization#data_text}
  */
  readonly dataText: string;
  /**
  * The locale of this Consent Definition Localization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization#locale ConsentDefinitionLocalization#locale}
  */
  readonly locale: string;
  /**
  * Localized text describing how the data is to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization#purpose_text ConsentDefinitionLocalization#purpose_text}
  */
  readonly purposeText: string;
  /**
  * Localized text that may be used to provide a title or summary for a consent request or a granted consent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization#title_text ConsentDefinitionLocalization#title_text}
  */
  readonly titleText?: string;
  /**
  * The type of Consent Definition Localization resource. Options are ['consent-definition-localization']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization#type ConsentDefinitionLocalization#type}
  */
  readonly type?: string;
  /**
  * The version of this Consent Definition Localization, using the format MAJOR.MINOR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization#version ConsentDefinitionLocalization#version}
  */
  readonly version: string;
}
export interface ConsentDefinitionLocalizationRequiredActions {
}

export function consentDefinitionLocalizationRequiredActionsToTerraform(struct?: ConsentDefinitionLocalizationRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function consentDefinitionLocalizationRequiredActionsToHclTerraform(struct?: ConsentDefinitionLocalizationRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConsentDefinitionLocalizationRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConsentDefinitionLocalizationRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsentDefinitionLocalizationRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ConsentDefinitionLocalizationRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): ConsentDefinitionLocalizationRequiredActionsOutputReference {
    return new ConsentDefinitionLocalizationRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization pingdirectory_consent_definition_localization}
*/
export class ConsentDefinitionLocalization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_consent_definition_localization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsentDefinitionLocalization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsentDefinitionLocalization to import
  * @param importFromId The id of the existing ConsentDefinitionLocalization that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsentDefinitionLocalization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_consent_definition_localization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/consent_definition_localization pingdirectory_consent_definition_localization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsentDefinitionLocalizationConfig
  */
  public constructor(scope: Construct, id: string, config: ConsentDefinitionLocalizationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_consent_definition_localization',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consentDefinitionName = config.consentDefinitionName;
    this._dataText = config.dataText;
    this._locale = config.locale;
    this._purposeText = config.purposeText;
    this._titleText = config.titleText;
    this._type = config.type;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consent_definition_name - computed: false, optional: false, required: true
  private _consentDefinitionName?: string; 
  public get consentDefinitionName() {
    return this.getStringAttribute('consent_definition_name');
  }
  public set consentDefinitionName(value: string) {
    this._consentDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consentDefinitionNameInput() {
    return this._consentDefinitionName;
  }

  // data_text - computed: false, optional: false, required: true
  private _dataText?: string; 
  public get dataText() {
    return this.getStringAttribute('data_text');
  }
  public set dataText(value: string) {
    this._dataText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTextInput() {
    return this._dataText;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locale - computed: false, optional: false, required: true
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // purpose_text - computed: false, optional: false, required: true
  private _purposeText?: string; 
  public get purposeText() {
    return this.getStringAttribute('purpose_text');
  }
  public set purposeText(value: string) {
    this._purposeText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeTextInput() {
    return this._purposeText;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new ConsentDefinitionLocalizationRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // title_text - computed: false, optional: true, required: false
  private _titleText?: string; 
  public get titleText() {
    return this.getStringAttribute('title_text');
  }
  public set titleText(value: string) {
    this._titleText = value;
  }
  public resetTitleText() {
    this._titleText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleTextInput() {
    return this._titleText;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consent_definition_name: cdktf.stringToTerraform(this._consentDefinitionName),
      data_text: cdktf.stringToTerraform(this._dataText),
      locale: cdktf.stringToTerraform(this._locale),
      purpose_text: cdktf.stringToTerraform(this._purposeText),
      title_text: cdktf.stringToTerraform(this._titleText),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consent_definition_name: {
        value: cdktf.stringToHclTerraform(this._consentDefinitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_text: {
        value: cdktf.stringToHclTerraform(this._dataText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose_text: {
        value: cdktf.stringToHclTerraform(this._purposeText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title_text: {
        value: cdktf.stringToHclTerraform(this._titleText),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
