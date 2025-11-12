// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultVelocityTemplateLoaderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether this Velocity Template Loader is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader#enabled DefaultVelocityTemplateLoader#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * This property determines the evaluation order for determining the correct Velocity Template Loader to load a template for generating content for a particular request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader#evaluation_order_index DefaultVelocityTemplateLoader#evaluation_order_index}
  */
  readonly evaluationOrderIndex?: number;
  /**
  * Name of the parent HTTP Servlet Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader#http_servlet_extension_name DefaultVelocityTemplateLoader#http_servlet_extension_name}
  */
  readonly httpServletExtensionName: string;
  /**
  * Specifies a the value that will be used in the response's Content-Type header that indicates the type of content to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader#mime_type DefaultVelocityTemplateLoader#mime_type}
  */
  readonly mimeType?: string;
  /**
  * Specifies a media type for matching Accept request-header values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader#mime_type_matcher DefaultVelocityTemplateLoader#mime_type_matcher}
  */
  readonly mimeTypeMatcher?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader#name DefaultVelocityTemplateLoader#name}
  */
  readonly name: string;
  /**
  * Specifies the directory in which to search for the template files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader#template_directory DefaultVelocityTemplateLoader#template_directory}
  */
  readonly templateDirectory?: string;
  /**
  * Specifies the suffix to append to the requested resource name when searching for the template file with which to form a response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader#template_suffix DefaultVelocityTemplateLoader#template_suffix}
  */
  readonly templateSuffix?: string;
}
export interface DefaultVelocityTemplateLoaderRequiredActions {
}

export function defaultVelocityTemplateLoaderRequiredActionsToTerraform(struct?: DefaultVelocityTemplateLoaderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultVelocityTemplateLoaderRequiredActionsToHclTerraform(struct?: DefaultVelocityTemplateLoaderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultVelocityTemplateLoaderRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultVelocityTemplateLoaderRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultVelocityTemplateLoaderRequiredActions | undefined) {
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

export class DefaultVelocityTemplateLoaderRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultVelocityTemplateLoaderRequiredActionsOutputReference {
    return new DefaultVelocityTemplateLoaderRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader pingdirectory_default_velocity_template_loader}
*/
export class DefaultVelocityTemplateLoader extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_velocity_template_loader";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultVelocityTemplateLoader resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultVelocityTemplateLoader to import
  * @param importFromId The id of the existing DefaultVelocityTemplateLoader that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultVelocityTemplateLoader to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_velocity_template_loader", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_velocity_template_loader pingdirectory_default_velocity_template_loader} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultVelocityTemplateLoaderConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultVelocityTemplateLoaderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_velocity_template_loader',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._evaluationOrderIndex = config.evaluationOrderIndex;
    this._httpServletExtensionName = config.httpServletExtensionName;
    this._mimeType = config.mimeType;
    this._mimeTypeMatcher = config.mimeTypeMatcher;
    this._name = config.name;
    this._templateDirectory = config.templateDirectory;
    this._templateSuffix = config.templateSuffix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // evaluation_order_index - computed: true, optional: true, required: false
  private _evaluationOrderIndex?: number; 
  public get evaluationOrderIndex() {
    return this.getNumberAttribute('evaluation_order_index');
  }
  public set evaluationOrderIndex(value: number) {
    this._evaluationOrderIndex = value;
  }
  public resetEvaluationOrderIndex() {
    this._evaluationOrderIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationOrderIndexInput() {
    return this._evaluationOrderIndex;
  }

  // http_servlet_extension_name - computed: false, optional: false, required: true
  private _httpServletExtensionName?: string; 
  public get httpServletExtensionName() {
    return this.getStringAttribute('http_servlet_extension_name');
  }
  public set httpServletExtensionName(value: string) {
    this._httpServletExtensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServletExtensionNameInput() {
    return this._httpServletExtensionName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mime_type - computed: true, optional: true, required: false
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  public resetMimeType() {
    this._mimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }

  // mime_type_matcher - computed: true, optional: true, required: false
  private _mimeTypeMatcher?: string; 
  public get mimeTypeMatcher() {
    return this.getStringAttribute('mime_type_matcher');
  }
  public set mimeTypeMatcher(value: string) {
    this._mimeTypeMatcher = value;
  }
  public resetMimeTypeMatcher() {
    this._mimeTypeMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeMatcherInput() {
    return this._mimeTypeMatcher;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultVelocityTemplateLoaderRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // template_directory - computed: true, optional: true, required: false
  private _templateDirectory?: string; 
  public get templateDirectory() {
    return this.getStringAttribute('template_directory');
  }
  public set templateDirectory(value: string) {
    this._templateDirectory = value;
  }
  public resetTemplateDirectory() {
    this._templateDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDirectoryInput() {
    return this._templateDirectory;
  }

  // template_suffix - computed: true, optional: true, required: false
  private _templateSuffix?: string; 
  public get templateSuffix() {
    return this.getStringAttribute('template_suffix');
  }
  public set templateSuffix(value: string) {
    this._templateSuffix = value;
  }
  public resetTemplateSuffix() {
    this._templateSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSuffixInput() {
    return this._templateSuffix;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluation_order_index: cdktf.numberToTerraform(this._evaluationOrderIndex),
      http_servlet_extension_name: cdktf.stringToTerraform(this._httpServletExtensionName),
      mime_type: cdktf.stringToTerraform(this._mimeType),
      mime_type_matcher: cdktf.stringToTerraform(this._mimeTypeMatcher),
      name: cdktf.stringToTerraform(this._name),
      template_directory: cdktf.stringToTerraform(this._templateDirectory),
      template_suffix: cdktf.stringToTerraform(this._templateSuffix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evaluation_order_index: {
        value: cdktf.numberToHclTerraform(this._evaluationOrderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_servlet_extension_name: {
        value: cdktf.stringToHclTerraform(this._httpServletExtensionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mime_type: {
        value: cdktf.stringToHclTerraform(this._mimeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mime_type_matcher: {
        value: cdktf.stringToHclTerraform(this._mimeTypeMatcher),
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
      template_directory: {
        value: cdktf.stringToHclTerraform(this._templateDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_suffix: {
        value: cdktf.stringToHclTerraform(this._templateSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
