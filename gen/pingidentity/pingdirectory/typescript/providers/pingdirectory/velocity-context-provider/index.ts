// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VelocityContextProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fully-qualified name of a Velocity Tool class that will be initialized once for the life of the server. May optionally include a path to a properties file used to configure this tool separated from the class name by a semi-colon (;). The path may absolute or relative to the server root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#application_tool VelocityContextProvider#application_tool}
  */
  readonly applicationTool?: string[];
  /**
  * Indicates whether this Velocity Context Provider is enabled. If set to 'false' this Velocity Context Provider will not contribute context content for any requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#enabled VelocityContextProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of a view for which this Velocity Context Provider will not contribute content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#excluded_view VelocityContextProvider#excluded_view}
  */
  readonly excludedView?: string[];
  /**
  * The set of arguments used to customize the behavior for the Third Party Velocity Context Provider. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#extension_argument VelocityContextProvider#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Velocity Context Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#extension_class VelocityContextProvider#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies the set of HTTP methods handled by this Velocity Context Provider, which will perform actions necessary to fulfill the request before updating the context for the response. The values of this property are not case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#http_method VelocityContextProvider#http_method}
  */
  readonly httpMethod?: string[];
  /**
  * Name of the parent HTTP Servlet Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#http_servlet_extension_name VelocityContextProvider#http_servlet_extension_name}
  */
  readonly httpServletExtensionName: string;
  /**
  * The name of a view for which this Velocity Context Provider will contribute content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#included_view VelocityContextProvider#included_view}
  */
  readonly includedView?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#name VelocityContextProvider#name}
  */
  readonly name: string;
  /**
  * Scope for context objects contributed by this Velocity Context Provider. Must be either 'request' or 'session' or 'application'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#object_scope VelocityContextProvider#object_scope}
  */
  readonly objectScope?: string;
  /**
  * The fully-qualified name of a Velocity Tool class that will be initialized for each request. May optionally include a path to a properties file used to configure this tool separated from the class name by a semi-colon (;). The path may absolute or relative to the server root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#request_tool VelocityContextProvider#request_tool}
  */
  readonly requestTool?: string[];
  /**
  * Specifies HTTP header fields and values added to response headers for template page requests to which this Velocity Context Provider contributes content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#response_header VelocityContextProvider#response_header}
  */
  readonly responseHeader?: string[];
  /**
  * The fully-qualified name of a Velocity Tool class that will be initialized for each session. May optionally include a path to a properties file used to configure this tool separated from the class name by a semi-colon (;). The path may absolute or relative to the server root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#session_tool VelocityContextProvider#session_tool}
  */
  readonly sessionTool?: string[];
  /**
  * The type of Velocity Context Provider resource. Options are ['velocity-tools', 'custom', 'third-party']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#type VelocityContextProvider#type}
  */
  readonly type: string;
}
export interface VelocityContextProviderRequiredActions {
}

export function velocityContextProviderRequiredActionsToTerraform(struct?: VelocityContextProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function velocityContextProviderRequiredActionsToHclTerraform(struct?: VelocityContextProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VelocityContextProviderRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VelocityContextProviderRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VelocityContextProviderRequiredActions | undefined) {
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

export class VelocityContextProviderRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): VelocityContextProviderRequiredActionsOutputReference {
    return new VelocityContextProviderRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider pingdirectory_velocity_context_provider}
*/
export class VelocityContextProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_velocity_context_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VelocityContextProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VelocityContextProvider to import
  * @param importFromId The id of the existing VelocityContextProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VelocityContextProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_velocity_context_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/velocity_context_provider pingdirectory_velocity_context_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VelocityContextProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VelocityContextProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_velocity_context_provider',
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
    this._applicationTool = config.applicationTool;
    this._enabled = config.enabled;
    this._excludedView = config.excludedView;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._httpMethod = config.httpMethod;
    this._httpServletExtensionName = config.httpServletExtensionName;
    this._includedView = config.includedView;
    this._name = config.name;
    this._objectScope = config.objectScope;
    this._requestTool = config.requestTool;
    this._responseHeader = config.responseHeader;
    this._sessionTool = config.sessionTool;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_tool - computed: true, optional: true, required: false
  private _applicationTool?: string[]; 
  public get applicationTool() {
    return cdktf.Fn.tolist(this.getListAttribute('application_tool'));
  }
  public set applicationTool(value: string[]) {
    this._applicationTool = value;
  }
  public resetApplicationTool() {
    this._applicationTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationToolInput() {
    return this._applicationTool;
  }

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

  // excluded_view - computed: true, optional: true, required: false
  private _excludedView?: string[]; 
  public get excludedView() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_view'));
  }
  public set excludedView(value: string[]) {
    this._excludedView = value;
  }
  public resetExcludedView() {
    this._excludedView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedViewInput() {
    return this._excludedView;
  }

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: false, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // http_method - computed: true, optional: true, required: false
  private _httpMethod?: string[]; 
  public get httpMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('http_method'));
  }
  public set httpMethod(value: string[]) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
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

  // included_view - computed: true, optional: true, required: false
  private _includedView?: string[]; 
  public get includedView() {
    return cdktf.Fn.tolist(this.getListAttribute('included_view'));
  }
  public set includedView(value: string[]) {
    this._includedView = value;
  }
  public resetIncludedView() {
    this._includedView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedViewInput() {
    return this._includedView;
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

  // object_scope - computed: true, optional: true, required: false
  private _objectScope?: string; 
  public get objectScope() {
    return this.getStringAttribute('object_scope');
  }
  public set objectScope(value: string) {
    this._objectScope = value;
  }
  public resetObjectScope() {
    this._objectScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectScopeInput() {
    return this._objectScope;
  }

  // request_tool - computed: true, optional: true, required: false
  private _requestTool?: string[]; 
  public get requestTool() {
    return cdktf.Fn.tolist(this.getListAttribute('request_tool'));
  }
  public set requestTool(value: string[]) {
    this._requestTool = value;
  }
  public resetRequestTool() {
    this._requestTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestToolInput() {
    return this._requestTool;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new VelocityContextProviderRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // response_header - computed: true, optional: true, required: false
  private _responseHeader?: string[]; 
  public get responseHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('response_header'));
  }
  public set responseHeader(value: string[]) {
    this._responseHeader = value;
  }
  public resetResponseHeader() {
    this._responseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader;
  }

  // session_tool - computed: true, optional: true, required: false
  private _sessionTool?: string[]; 
  public get sessionTool() {
    return cdktf.Fn.tolist(this.getListAttribute('session_tool'));
  }
  public set sessionTool(value: string[]) {
    this._sessionTool = value;
  }
  public resetSessionTool() {
    this._sessionTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionToolInput() {
    return this._sessionTool;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_tool: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationTool),
      enabled: cdktf.booleanToTerraform(this._enabled),
      excluded_view: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedView),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      http_method: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpMethod),
      http_servlet_extension_name: cdktf.stringToTerraform(this._httpServletExtensionName),
      included_view: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedView),
      name: cdktf.stringToTerraform(this._name),
      object_scope: cdktf.stringToTerraform(this._objectScope),
      request_tool: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestTool),
      response_header: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseHeader),
      session_tool: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sessionTool),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_tool: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationTool),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excluded_view: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedView),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_method: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpMethod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_servlet_extension_name: {
        value: cdktf.stringToHclTerraform(this._httpServletExtensionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      included_view: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedView),
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
      object_scope: {
        value: cdktf.stringToHclTerraform(this._objectScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_tool: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestTool),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      response_header: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseHeader),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      session_tool: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sessionTool),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
