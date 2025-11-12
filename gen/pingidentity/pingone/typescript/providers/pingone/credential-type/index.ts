// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * An SVG formatted image containing placeholders for the credentials fields that need to be displayed in the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#card_design_template CredentialType#card_design_template}
  */
  readonly cardDesignTemplate: string;
  /**
  * A descriptor of the credential type. Can be non-identity types such as proof of employment or proof of insurance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#card_type CredentialType#card_type}
  */
  readonly cardType?: string;
  /**
  * A description of the credential type. This value aligns to `${cardSubtitle}` in the `card_design_template`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#description CredentialType#description}
  */
  readonly description?: string;
  /**
  * PingOne environment identifier (UUID) in which the credential type exists.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#environment_id CredentialType#environment_id}
  */
  readonly environmentId: string;
  /**
  * Specifies the management mode of the credential type.  Options are `AUTOMATED`, `MANAGED`.  Defaults to `AUTOMATED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#management_mode CredentialType#management_mode}
  */
  readonly managementMode?: string;
  /**
  * Contains the names, data types, and other metadata related to the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#metadata CredentialType#metadata}
  */
  readonly metadata: CredentialTypeMetadata;
  /**
  * A boolean that specifies whether a user's issued verifiable credentials are automatically revoked when a `credential_type`, `user`, or `environment` is deleted.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#revoke_on_delete CredentialType#revoke_on_delete}
  */
  readonly revokeOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Title of the credential. Verification sites are expected to be able to request the issued credential from the compatible wallet app using the title.  This value aligns to `${cardTitle}` in the `card_design_template`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#title CredentialType#title}
  */
  readonly title: string;
}
export interface CredentialTypeMetadataFields {
  /**
  * Name of the PingOne Directory attribute. Present if `field.type` is `Directory Attribute`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#attribute CredentialType#attribute}
  */
  readonly attribute?: string;
  /**
  * Specifies how an image is stored in the credential field.  Options are `BASE64_STRING`, `INCLUDE_FILE`, `REFERENCE_FILE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#file_support CredentialType#file_support}
  */
  readonly fileSupport?: string;
  /**
  * Specifies whether the field should be visible to viewers of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#is_visible CredentialType#is_visible}
  */
  readonly isVisible?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the field is required for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#required CredentialType#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Descriptive text when showing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#title CredentialType#title}
  */
  readonly title?: string;
  /**
  * Specifies the type of data in the credential field.  Options are `Alphanumeric Text`, `Directory Attribute`, `Issued Timestamp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#type CredentialType#type}
  */
  readonly type: string;
  /**
  * The text to appear on the credential for a `field.type` of `Alphanumeric Text`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#value CredentialType#value}
  */
  readonly value?: string;
}

export function credentialTypeMetadataFieldsToTerraform(struct?: CredentialTypeMetadataFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    file_support: cdktf.stringToTerraform(struct!.fileSupport),
    is_visible: cdktf.booleanToTerraform(struct!.isVisible),
    required: cdktf.booleanToTerraform(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function credentialTypeMetadataFieldsToHclTerraform(struct?: CredentialTypeMetadataFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_support: {
      value: cdktf.stringToHclTerraform(struct!.fileSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_visible: {
      value: cdktf.booleanToHclTerraform(struct!.isVisible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialTypeMetadataFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialTypeMetadataFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._fileSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSupport = this._fileSupport;
    }
    if (this._isVisible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVisible = this._isVisible;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialTypeMetadataFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._fileSupport = undefined;
      this._isVisible = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._fileSupport = value.fileSupport;
      this._isVisible = value.isVisible;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // file_support - computed: false, optional: true, required: false
  private _fileSupport?: string; 
  public get fileSupport() {
    return this.getStringAttribute('file_support');
  }
  public set fileSupport(value: string) {
    this._fileSupport = value;
  }
  public resetFileSupport() {
    this._fileSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSupportInput() {
    return this._fileSupport;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_visible - computed: false, optional: true, required: false
  private _isVisible?: boolean | cdktf.IResolvable; 
  public get isVisible() {
    return this.getBooleanAttribute('is_visible');
  }
  public set isVisible(value: boolean | cdktf.IResolvable) {
    this._isVisible = value;
  }
  public resetIsVisible() {
    this._isVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVisibleInput() {
    return this._isVisible;
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

  // title - computed: false, optional: true, required: false
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
}

export class CredentialTypeMetadataFieldsList extends cdktf.ComplexList {
  public internalValue? : CredentialTypeMetadataFields[] | cdktf.IResolvable

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
  public get(index: number): CredentialTypeMetadataFieldsOutputReference {
    return new CredentialTypeMetadataFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialTypeMetadata {
  /**
  * The URL or fully qualified path to the image file used for the credential background.  This can be retrieved from the `uploaded_image.href` parameter of the `pingone_image` resource.  Image size must not exceed 50 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#background_image CredentialType#background_image}
  */
  readonly backgroundImage?: string;
  /**
  * A numnber indicating the percent opacity of the background image in the credential. High percentage opacity may make text on the credential difficult to read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#bg_opacity_percent CredentialType#bg_opacity_percent}
  */
  readonly bgOpacityPercent?: number;
  /**
  * A string containing a 6-digit hexadecimal color code specifying the color of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#card_color CredentialType#card_color}
  */
  readonly cardColor?: string;
  /**
  * Indicates a number (between 1-3) of columns to display visible fields on the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#columns CredentialType#columns}
  */
  readonly columns?: number;
  /**
  * Description of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#description CredentialType#description}
  */
  readonly description?: string;
  /**
  * In a credential, the information is stored as key-value pairs where `fields` defines those key-value pairs. Effectively, `fields.title` is the key and its value is `fields.value` or extracted from the PingOne Directory attribute named in `fields.attribute`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#fields CredentialType#fields}
  */
  readonly fields: CredentialTypeMetadataFields[] | cdktf.IResolvable;
  /**
  * The URL or fully qualified path to the image file used for the credential logo.  This can be retrieved from the `uploaded_image.href` parameter of the `pingone_image` resource.  Image size must not exceed 25 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#logo_image CredentialType#logo_image}
  */
  readonly logoImage?: string;
  /**
  * Name of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#name CredentialType#name}
  */
  readonly name?: string;
  /**
  * A string containing a 6-digit hexadecimal color code specifying the color of the credential text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#text_color CredentialType#text_color}
  */
  readonly textColor?: string;
}

export function credentialTypeMetadataToTerraform(struct?: CredentialTypeMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_image: cdktf.stringToTerraform(struct!.backgroundImage),
    bg_opacity_percent: cdktf.numberToTerraform(struct!.bgOpacityPercent),
    card_color: cdktf.stringToTerraform(struct!.cardColor),
    columns: cdktf.numberToTerraform(struct!.columns),
    description: cdktf.stringToTerraform(struct!.description),
    fields: cdktf.listMapper(credentialTypeMetadataFieldsToTerraform, false)(struct!.fields),
    logo_image: cdktf.stringToTerraform(struct!.logoImage),
    name: cdktf.stringToTerraform(struct!.name),
    text_color: cdktf.stringToTerraform(struct!.textColor),
  }
}


export function credentialTypeMetadataToHclTerraform(struct?: CredentialTypeMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_image: {
      value: cdktf.stringToHclTerraform(struct!.backgroundImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bg_opacity_percent: {
      value: cdktf.numberToHclTerraform(struct!.bgOpacityPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    card_color: {
      value: cdktf.stringToHclTerraform(struct!.cardColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktf.numberToHclTerraform(struct!.columns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(credentialTypeMetadataFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "CredentialTypeMetadataFieldsList",
    },
    logo_image: {
      value: cdktf.stringToHclTerraform(struct!.logoImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktf.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialTypeMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialTypeMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundImage = this._backgroundImage;
    }
    if (this._bgOpacityPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgOpacityPercent = this._bgOpacityPercent;
    }
    if (this._cardColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.cardColor = this._cardColor;
    }
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._logoImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoImage = this._logoImage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialTypeMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundImage = undefined;
      this._bgOpacityPercent = undefined;
      this._cardColor = undefined;
      this._columns = undefined;
      this._description = undefined;
      this._fields.internalValue = undefined;
      this._logoImage = undefined;
      this._name = undefined;
      this._textColor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundImage = value.backgroundImage;
      this._bgOpacityPercent = value.bgOpacityPercent;
      this._cardColor = value.cardColor;
      this._columns = value.columns;
      this._description = value.description;
      this._fields.internalValue = value.fields;
      this._logoImage = value.logoImage;
      this._name = value.name;
      this._textColor = value.textColor;
    }
  }

  // background_image - computed: false, optional: true, required: false
  private _backgroundImage?: string; 
  public get backgroundImage() {
    return this.getStringAttribute('background_image');
  }
  public set backgroundImage(value: string) {
    this._backgroundImage = value;
  }
  public resetBackgroundImage() {
    this._backgroundImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundImageInput() {
    return this._backgroundImage;
  }

  // bg_opacity_percent - computed: false, optional: true, required: false
  private _bgOpacityPercent?: number; 
  public get bgOpacityPercent() {
    return this.getNumberAttribute('bg_opacity_percent');
  }
  public set bgOpacityPercent(value: number) {
    this._bgOpacityPercent = value;
  }
  public resetBgOpacityPercent() {
    this._bgOpacityPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgOpacityPercentInput() {
    return this._bgOpacityPercent;
  }

  // card_color - computed: false, optional: true, required: false
  private _cardColor?: string; 
  public get cardColor() {
    return this.getStringAttribute('card_color');
  }
  public set cardColor(value: string) {
    this._cardColor = value;
  }
  public resetCardColor() {
    this._cardColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardColorInput() {
    return this._cardColor;
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: number; 
  public get columns() {
    return this.getNumberAttribute('columns');
  }
  public set columns(value: number) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
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

  // fields - computed: false, optional: false, required: true
  private _fields = new CredentialTypeMetadataFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: CredentialTypeMetadataFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // logo_image - computed: false, optional: true, required: false
  private _logoImage?: string; 
  public get logoImage() {
    return this.getStringAttribute('logo_image');
  }
  public set logoImage(value: string) {
    this._logoImage = value;
  }
  public resetLogoImage() {
    this._logoImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoImageInput() {
    return this._logoImage;
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

  // text_color - computed: false, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type pingone_credential_type}
*/
export class CredentialType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_credential_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialType to import
  * @param importFromId The id of the existing CredentialType that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_credential_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_type pingone_credential_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialTypeConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_credential_type',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cardDesignTemplate = config.cardDesignTemplate;
    this._cardType = config.cardType;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._managementMode = config.managementMode;
    this._metadata.internalValue = config.metadata;
    this._revokeOnDelete = config.revokeOnDelete;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // card_design_template - computed: false, optional: false, required: true
  private _cardDesignTemplate?: string; 
  public get cardDesignTemplate() {
    return this.getStringAttribute('card_design_template');
  }
  public set cardDesignTemplate(value: string) {
    this._cardDesignTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cardDesignTemplateInput() {
    return this._cardDesignTemplate;
  }

  // card_type - computed: false, optional: true, required: false
  private _cardType?: string; 
  public get cardType() {
    return this.getStringAttribute('card_type');
  }
  public set cardType(value: string) {
    this._cardType = value;
  }
  public resetCardType() {
    this._cardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardTypeInput() {
    return this._cardType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_id - computed: true, optional: false, required: false
  public get issuerId() {
    return this.getStringAttribute('issuer_id');
  }

  // management_mode - computed: true, optional: true, required: false
  private _managementMode?: string; 
  public get managementMode() {
    return this.getStringAttribute('management_mode');
  }
  public set managementMode(value: string) {
    this._managementMode = value;
  }
  public resetManagementMode() {
    this._managementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementModeInput() {
    return this._managementMode;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CredentialTypeMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CredentialTypeMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // revoke_on_delete - computed: true, optional: true, required: false
  private _revokeOnDelete?: boolean | cdktf.IResolvable; 
  public get revokeOnDelete() {
    return this.getBooleanAttribute('revoke_on_delete');
  }
  public set revokeOnDelete(value: boolean | cdktf.IResolvable) {
    this._revokeOnDelete = value;
  }
  public resetRevokeOnDelete() {
    this._revokeOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeOnDeleteInput() {
    return this._revokeOnDelete;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
      card_design_template: cdktf.stringToTerraform(this._cardDesignTemplate),
      card_type: cdktf.stringToTerraform(this._cardType),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      management_mode: cdktf.stringToTerraform(this._managementMode),
      metadata: credentialTypeMetadataToTerraform(this._metadata.internalValue),
      revoke_on_delete: cdktf.booleanToTerraform(this._revokeOnDelete),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      card_design_template: {
        value: cdktf.stringToHclTerraform(this._cardDesignTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      card_type: {
        value: cdktf.stringToHclTerraform(this._cardType),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_mode: {
        value: cdktf.stringToHclTerraform(this._managementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: credentialTypeMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialTypeMetadata",
      },
      revoke_on_delete: {
        value: cdktf.booleanToHclTerraform(this._revokeOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
