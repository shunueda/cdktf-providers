// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpServletCrossOriginPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the servlet extension allows CORS requests with username/password credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy#cors_allow_credentials HttpServletCrossOriginPolicy#cors_allow_credentials}
  */
  readonly corsAllowCredentials?: boolean | cdktf.IResolvable;
  /**
  * A list of HTTP headers that are supported by the resource and can be specified in a cross-origin request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy#cors_allowed_headers HttpServletCrossOriginPolicy#cors_allowed_headers}
  */
  readonly corsAllowedHeaders?: string[];
  /**
  * A list of HTTP methods allowed for cross-origin access to resources. i.e. one or more of GET, POST, PUT, DELETE, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy#cors_allowed_methods HttpServletCrossOriginPolicy#cors_allowed_methods}
  */
  readonly corsAllowedMethods?: string[];
  /**
  * A list of origins that are allowed to execute cross-origin requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy#cors_allowed_origins HttpServletCrossOriginPolicy#cors_allowed_origins}
  */
  readonly corsAllowedOrigins?: string[];
  /**
  * A list of HTTP headers other than the simple response headers that browsers are allowed to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy#cors_exposed_headers HttpServletCrossOriginPolicy#cors_exposed_headers}
  */
  readonly corsExposedHeaders?: string[];
  /**
  * The maximum amount of time that a preflight request can be cached by a client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy#cors_preflight_max_age HttpServletCrossOriginPolicy#cors_preflight_max_age}
  */
  readonly corsPreflightMaxAge?: string;
  /**
  * A description for this HTTP Servlet Cross Origin Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy#description HttpServletCrossOriginPolicy#description}
  */
  readonly description?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy#name HttpServletCrossOriginPolicy#name}
  */
  readonly name: string;
  /**
  * The type of HTTP Servlet Cross Origin Policy resource. Options are ['http-servlet-cross-origin-policy']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy#type HttpServletCrossOriginPolicy#type}
  */
  readonly type?: string;
}
export interface HttpServletCrossOriginPolicyRequiredActions {
}

export function httpServletCrossOriginPolicyRequiredActionsToTerraform(struct?: HttpServletCrossOriginPolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function httpServletCrossOriginPolicyRequiredActionsToHclTerraform(struct?: HttpServletCrossOriginPolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HttpServletCrossOriginPolicyRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpServletCrossOriginPolicyRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpServletCrossOriginPolicyRequiredActions | undefined) {
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

export class HttpServletCrossOriginPolicyRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): HttpServletCrossOriginPolicyRequiredActionsOutputReference {
    return new HttpServletCrossOriginPolicyRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy pingdirectory_http_servlet_cross_origin_policy}
*/
export class HttpServletCrossOriginPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_http_servlet_cross_origin_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HttpServletCrossOriginPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HttpServletCrossOriginPolicy to import
  * @param importFromId The id of the existing HttpServletCrossOriginPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HttpServletCrossOriginPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_http_servlet_cross_origin_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_cross_origin_policy pingdirectory_http_servlet_cross_origin_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpServletCrossOriginPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: HttpServletCrossOriginPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_http_servlet_cross_origin_policy',
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
    this._corsAllowCredentials = config.corsAllowCredentials;
    this._corsAllowedHeaders = config.corsAllowedHeaders;
    this._corsAllowedMethods = config.corsAllowedMethods;
    this._corsAllowedOrigins = config.corsAllowedOrigins;
    this._corsExposedHeaders = config.corsExposedHeaders;
    this._corsPreflightMaxAge = config.corsPreflightMaxAge;
    this._description = config.description;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cors_allow_credentials - computed: true, optional: true, required: false
  private _corsAllowCredentials?: boolean | cdktf.IResolvable; 
  public get corsAllowCredentials() {
    return this.getBooleanAttribute('cors_allow_credentials');
  }
  public set corsAllowCredentials(value: boolean | cdktf.IResolvable) {
    this._corsAllowCredentials = value;
  }
  public resetCorsAllowCredentials() {
    this._corsAllowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsAllowCredentialsInput() {
    return this._corsAllowCredentials;
  }

  // cors_allowed_headers - computed: true, optional: true, required: false
  private _corsAllowedHeaders?: string[]; 
  public get corsAllowedHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('cors_allowed_headers'));
  }
  public set corsAllowedHeaders(value: string[]) {
    this._corsAllowedHeaders = value;
  }
  public resetCorsAllowedHeaders() {
    this._corsAllowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsAllowedHeadersInput() {
    return this._corsAllowedHeaders;
  }

  // cors_allowed_methods - computed: true, optional: true, required: false
  private _corsAllowedMethods?: string[]; 
  public get corsAllowedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('cors_allowed_methods'));
  }
  public set corsAllowedMethods(value: string[]) {
    this._corsAllowedMethods = value;
  }
  public resetCorsAllowedMethods() {
    this._corsAllowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsAllowedMethodsInput() {
    return this._corsAllowedMethods;
  }

  // cors_allowed_origins - computed: true, optional: true, required: false
  private _corsAllowedOrigins?: string[]; 
  public get corsAllowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('cors_allowed_origins'));
  }
  public set corsAllowedOrigins(value: string[]) {
    this._corsAllowedOrigins = value;
  }
  public resetCorsAllowedOrigins() {
    this._corsAllowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsAllowedOriginsInput() {
    return this._corsAllowedOrigins;
  }

  // cors_exposed_headers - computed: true, optional: true, required: false
  private _corsExposedHeaders?: string[]; 
  public get corsExposedHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('cors_exposed_headers'));
  }
  public set corsExposedHeaders(value: string[]) {
    this._corsExposedHeaders = value;
  }
  public resetCorsExposedHeaders() {
    this._corsExposedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsExposedHeadersInput() {
    return this._corsExposedHeaders;
  }

  // cors_preflight_max_age - computed: true, optional: true, required: false
  private _corsPreflightMaxAge?: string; 
  public get corsPreflightMaxAge() {
    return this.getStringAttribute('cors_preflight_max_age');
  }
  public set corsPreflightMaxAge(value: string) {
    this._corsPreflightMaxAge = value;
  }
  public resetCorsPreflightMaxAge() {
    this._corsPreflightMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPreflightMaxAgeInput() {
    return this._corsPreflightMaxAge;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _requiredActions = new HttpServletCrossOriginPolicyRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cors_allow_credentials: cdktf.booleanToTerraform(this._corsAllowCredentials),
      cors_allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._corsAllowedHeaders),
      cors_allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._corsAllowedMethods),
      cors_allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._corsAllowedOrigins),
      cors_exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._corsExposedHeaders),
      cors_preflight_max_age: cdktf.stringToTerraform(this._corsPreflightMaxAge),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cors_allow_credentials: {
        value: cdktf.booleanToHclTerraform(this._corsAllowCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cors_allowed_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._corsAllowedHeaders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cors_allowed_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._corsAllowedMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cors_allowed_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._corsAllowedOrigins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cors_exposed_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._corsExposedHeaders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cors_preflight_max_age: {
        value: cdktf.stringToHclTerraform(this._corsPreflightMaxAge),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
