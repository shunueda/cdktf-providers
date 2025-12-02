// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResponsemanagementResponseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Assets used in the response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#asset_ids ResponsemanagementResponse#asset_ids}
  */
  readonly assetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#id ResponsemanagementResponse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interaction type for this response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#interaction_type ResponsemanagementResponse#interaction_type}
  */
  readonly interactionType?: string;
  /**
  * One or more libraries response is associated with. Changing the library IDs will result in the resource being recreated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#library_ids ResponsemanagementResponse#library_ids}
  */
  readonly libraryIds: string[];
  /**
  * Name of the responsemanagement response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#name ResponsemanagementResponse#name}
  */
  readonly name: string;
  /**
  * The response type represented by the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#response_type ResponsemanagementResponse#response_type}
  */
  readonly responseType?: string;
  /**
  * Metadata about the text substitutions in json schema format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#substitutions_schema_id ResponsemanagementResponse#substitutions_schema_id}
  */
  readonly substitutionsSchemaId?: string;
  /**
  * footer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#footer ResponsemanagementResponse#footer}
  */
  readonly footer?: ResponsemanagementResponseFooter;
  /**
  * messaging_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#messaging_template ResponsemanagementResponse#messaging_template}
  */
  readonly messagingTemplate?: ResponsemanagementResponseMessagingTemplate;
  /**
  * substitutions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#substitutions ResponsemanagementResponse#substitutions}
  */
  readonly substitutions?: ResponsemanagementResponseSubstitutions[] | cdktf.IResolvable;
  /**
  * texts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#texts ResponsemanagementResponse#texts}
  */
  readonly texts: ResponsemanagementResponseTexts[] | cdktf.IResolvable;
}
export interface ResponsemanagementResponseFooter {
  /**
  * Specifies the canned response template where the footer can be used.Valid values: Campaign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#applicable_resources ResponsemanagementResponse#applicable_resources}
  */
  readonly applicableResources?: string[];
  /**
  * Specifies the type represented by Footer.Valid values: Signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#type ResponsemanagementResponse#type}
  */
  readonly type?: string;
}

export function responsemanagementResponseFooterToTerraform(struct?: ResponsemanagementResponseFooterOutputReference | ResponsemanagementResponseFooter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applicable_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicableResources),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function responsemanagementResponseFooterToHclTerraform(struct?: ResponsemanagementResponseFooterOutputReference | ResponsemanagementResponseFooter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applicable_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicableResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ResponsemanagementResponseFooterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResponsemanagementResponseFooter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicableResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicableResources = this._applicableResources;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResponsemanagementResponseFooter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicableResources = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicableResources = value.applicableResources;
      this._type = value.type;
    }
  }

  // applicable_resources - computed: false, optional: true, required: false
  private _applicableResources?: string[]; 
  public get applicableResources() {
    return this.getListAttribute('applicable_resources');
  }
  public set applicableResources(value: string[]) {
    this._applicableResources = value;
  }
  public resetApplicableResources() {
    this._applicableResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicableResourcesInput() {
    return this._applicableResources;
  }

  // type - computed: false, optional: true, required: false
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
export interface ResponsemanagementResponseMessagingTemplateWhatsApp {
  /**
  * The messaging template language configured for this template. This is a WhatsApp specific value. For example, 'en_US'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#language ResponsemanagementResponse#language}
  */
  readonly language: string;
  /**
  * The messaging template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#name ResponsemanagementResponse#name}
  */
  readonly name: string;
  /**
  * The messaging template namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#namespace ResponsemanagementResponse#namespace}
  */
  readonly namespace: string;
}

export function responsemanagementResponseMessagingTemplateWhatsAppToTerraform(struct?: ResponsemanagementResponseMessagingTemplateWhatsAppOutputReference | ResponsemanagementResponseMessagingTemplateWhatsApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function responsemanagementResponseMessagingTemplateWhatsAppToHclTerraform(struct?: ResponsemanagementResponseMessagingTemplateWhatsAppOutputReference | ResponsemanagementResponseMessagingTemplateWhatsApp): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResponsemanagementResponseMessagingTemplateWhatsAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResponsemanagementResponseMessagingTemplateWhatsApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResponsemanagementResponseMessagingTemplateWhatsApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._language = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._language = value.language;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface ResponsemanagementResponseMessagingTemplate {
  /**
  * whats_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#whats_app ResponsemanagementResponse#whats_app}
  */
  readonly whatsApp?: ResponsemanagementResponseMessagingTemplateWhatsApp;
}

export function responsemanagementResponseMessagingTemplateToTerraform(struct?: ResponsemanagementResponseMessagingTemplateOutputReference | ResponsemanagementResponseMessagingTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    whats_app: responsemanagementResponseMessagingTemplateWhatsAppToTerraform(struct!.whatsApp),
  }
}


export function responsemanagementResponseMessagingTemplateToHclTerraform(struct?: ResponsemanagementResponseMessagingTemplateOutputReference | ResponsemanagementResponseMessagingTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    whats_app: {
      value: responsemanagementResponseMessagingTemplateWhatsAppToHclTerraform(struct!.whatsApp),
      isBlock: true,
      type: "set",
      storageClassType: "ResponsemanagementResponseMessagingTemplateWhatsAppList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResponsemanagementResponseMessagingTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResponsemanagementResponseMessagingTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._whatsApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whatsApp = this._whatsApp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResponsemanagementResponseMessagingTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._whatsApp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._whatsApp.internalValue = value.whatsApp;
    }
  }

  // whats_app - computed: false, optional: true, required: false
  private _whatsApp = new ResponsemanagementResponseMessagingTemplateWhatsAppOutputReference(this, "whats_app");
  public get whatsApp() {
    return this._whatsApp;
  }
  public putWhatsApp(value: ResponsemanagementResponseMessagingTemplateWhatsApp) {
    this._whatsApp.internalValue = value;
  }
  public resetWhatsApp() {
    this._whatsApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whatsAppInput() {
    return this._whatsApp.internalValue;
  }
}
export interface ResponsemanagementResponseSubstitutions {
  /**
  * Response substitution default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#default_value ResponsemanagementResponse#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Response substitution description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#description ResponsemanagementResponse#description}
  */
  readonly description?: string;
  /**
  * Response substitution identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#id ResponsemanagementResponse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function responsemanagementResponseSubstitutionsToTerraform(struct?: ResponsemanagementResponseSubstitutions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function responsemanagementResponseSubstitutionsToHclTerraform(struct?: ResponsemanagementResponseSubstitutions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResponsemanagementResponseSubstitutionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResponsemanagementResponseSubstitutions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResponsemanagementResponseSubstitutions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._id = value.id;
    }
  }

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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ResponsemanagementResponseSubstitutionsList extends cdktf.ComplexList {
  public internalValue? : ResponsemanagementResponseSubstitutions[] | cdktf.IResolvable

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
  public get(index: number): ResponsemanagementResponseSubstitutionsOutputReference {
    return new ResponsemanagementResponseSubstitutionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResponsemanagementResponseTexts {
  /**
  * Response text content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#content ResponsemanagementResponse#content}
  */
  readonly content: string;
  /**
  * Response text content type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#content_type ResponsemanagementResponse#content_type}
  */
  readonly contentType?: string;
  /**
  * Response text type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#type ResponsemanagementResponse#type}
  */
  readonly type?: string;
}

export function responsemanagementResponseTextsToTerraform(struct?: ResponsemanagementResponseTexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function responsemanagementResponseTextsToHclTerraform(struct?: ResponsemanagementResponseTexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResponsemanagementResponseTextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResponsemanagementResponseTexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResponsemanagementResponseTexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // type - computed: false, optional: true, required: false
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

export class ResponsemanagementResponseTextsList extends cdktf.ComplexList {
  public internalValue? : ResponsemanagementResponseTexts[] | cdktf.IResolvable

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
  public get(index: number): ResponsemanagementResponseTextsOutputReference {
    return new ResponsemanagementResponseTextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response genesyscloud_responsemanagement_response}
*/
export class ResponsemanagementResponse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_responsemanagement_response";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResponsemanagementResponse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResponsemanagementResponse to import
  * @param importFromId The id of the existing ResponsemanagementResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResponsemanagementResponse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_responsemanagement_response", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/responsemanagement_response genesyscloud_responsemanagement_response} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResponsemanagementResponseConfig
  */
  public constructor(scope: Construct, id: string, config: ResponsemanagementResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_responsemanagement_response',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetIds = config.assetIds;
    this._id = config.id;
    this._interactionType = config.interactionType;
    this._libraryIds = config.libraryIds;
    this._name = config.name;
    this._responseType = config.responseType;
    this._substitutionsSchemaId = config.substitutionsSchemaId;
    this._footer.internalValue = config.footer;
    this._messagingTemplate.internalValue = config.messagingTemplate;
    this._substitutions.internalValue = config.substitutions;
    this._texts.internalValue = config.texts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_ids - computed: false, optional: true, required: false
  private _assetIds?: string[]; 
  public get assetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('asset_ids'));
  }
  public set assetIds(value: string[]) {
    this._assetIds = value;
  }
  public resetAssetIds() {
    this._assetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdsInput() {
    return this._assetIds;
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

  // interaction_type - computed: false, optional: true, required: false
  private _interactionType?: string; 
  public get interactionType() {
    return this.getStringAttribute('interaction_type');
  }
  public set interactionType(value: string) {
    this._interactionType = value;
  }
  public resetInteractionType() {
    this._interactionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactionTypeInput() {
    return this._interactionType;
  }

  // library_ids - computed: false, optional: false, required: true
  private _libraryIds?: string[]; 
  public get libraryIds() {
    return cdktf.Fn.tolist(this.getListAttribute('library_ids'));
  }
  public set libraryIds(value: string[]) {
    this._libraryIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryIdsInput() {
    return this._libraryIds;
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

  // response_type - computed: false, optional: true, required: false
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  public resetResponseType() {
    this._responseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }

  // substitutions_schema_id - computed: false, optional: true, required: false
  private _substitutionsSchemaId?: string; 
  public get substitutionsSchemaId() {
    return this.getStringAttribute('substitutions_schema_id');
  }
  public set substitutionsSchemaId(value: string) {
    this._substitutionsSchemaId = value;
  }
  public resetSubstitutionsSchemaId() {
    this._substitutionsSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsSchemaIdInput() {
    return this._substitutionsSchemaId;
  }

  // footer - computed: false, optional: true, required: false
  private _footer = new ResponsemanagementResponseFooterOutputReference(this, "footer");
  public get footer() {
    return this._footer;
  }
  public putFooter(value: ResponsemanagementResponseFooter) {
    this._footer.internalValue = value;
  }
  public resetFooter() {
    this._footer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerInput() {
    return this._footer.internalValue;
  }

  // messaging_template - computed: false, optional: true, required: false
  private _messagingTemplate = new ResponsemanagementResponseMessagingTemplateOutputReference(this, "messaging_template");
  public get messagingTemplate() {
    return this._messagingTemplate;
  }
  public putMessagingTemplate(value: ResponsemanagementResponseMessagingTemplate) {
    this._messagingTemplate.internalValue = value;
  }
  public resetMessagingTemplate() {
    this._messagingTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingTemplateInput() {
    return this._messagingTemplate.internalValue;
  }

  // substitutions - computed: false, optional: true, required: false
  private _substitutions = new ResponsemanagementResponseSubstitutionsList(this, "substitutions", true);
  public get substitutions() {
    return this._substitutions;
  }
  public putSubstitutions(value: ResponsemanagementResponseSubstitutions[] | cdktf.IResolvable) {
    this._substitutions.internalValue = value;
  }
  public resetSubstitutions() {
    this._substitutions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions.internalValue;
  }

  // texts - computed: false, optional: false, required: true
  private _texts = new ResponsemanagementResponseTextsList(this, "texts", true);
  public get texts() {
    return this._texts;
  }
  public putTexts(value: ResponsemanagementResponseTexts[] | cdktf.IResolvable) {
    this._texts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textsInput() {
    return this._texts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assetIds),
      id: cdktf.stringToTerraform(this._id),
      interaction_type: cdktf.stringToTerraform(this._interactionType),
      library_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._libraryIds),
      name: cdktf.stringToTerraform(this._name),
      response_type: cdktf.stringToTerraform(this._responseType),
      substitutions_schema_id: cdktf.stringToTerraform(this._substitutionsSchemaId),
      footer: responsemanagementResponseFooterToTerraform(this._footer.internalValue),
      messaging_template: responsemanagementResponseMessagingTemplateToTerraform(this._messagingTemplate.internalValue),
      substitutions: cdktf.listMapper(responsemanagementResponseSubstitutionsToTerraform, true)(this._substitutions.internalValue),
      texts: cdktf.listMapper(responsemanagementResponseTextsToTerraform, true)(this._texts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interaction_type: {
        value: cdktf.stringToHclTerraform(this._interactionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      library_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._libraryIds),
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
      response_type: {
        value: cdktf.stringToHclTerraform(this._responseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      substitutions_schema_id: {
        value: cdktf.stringToHclTerraform(this._substitutionsSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      footer: {
        value: responsemanagementResponseFooterToHclTerraform(this._footer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResponsemanagementResponseFooterList",
      },
      messaging_template: {
        value: responsemanagementResponseMessagingTemplateToHclTerraform(this._messagingTemplate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResponsemanagementResponseMessagingTemplateList",
      },
      substitutions: {
        value: cdktf.listMapperHcl(responsemanagementResponseSubstitutionsToHclTerraform, true)(this._substitutions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResponsemanagementResponseSubstitutionsList",
      },
      texts: {
        value: cdktf.listMapperHcl(responsemanagementResponseTextsToHclTerraform, true)(this._texts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResponsemanagementResponseTextsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
