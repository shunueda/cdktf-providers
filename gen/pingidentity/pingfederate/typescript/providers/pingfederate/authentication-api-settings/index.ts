// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationApiSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Authentication API. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_settings#api_enabled AuthenticationApiSettings#api_enabled}
  */
  readonly apiEnabled?: boolean | cdktf.IResolvable;
  /**
  * Application for non authentication policy use cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_settings#default_application_ref AuthenticationApiSettings#default_application_ref}
  */
  readonly defaultApplicationRef?: AuthenticationApiSettingsDefaultApplicationRef;
  /**
  * Enable API descriptions. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_settings#enable_api_descriptions AuthenticationApiSettings#enable_api_descriptions}
  */
  readonly enableApiDescriptions?: boolean | cdktf.IResolvable;
  /**
  * Includes request context in API responses. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_settings#include_request_context AuthenticationApiSettings#include_request_context}
  */
  readonly includeRequestContext?: boolean | cdktf.IResolvable;
  /**
  * Enable restrict access to redirectless mode. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_settings#restrict_access_to_redirectless_mode AuthenticationApiSettings#restrict_access_to_redirectless_mode}
  */
  readonly restrictAccessToRedirectlessMode?: boolean | cdktf.IResolvable;
}
export interface AuthenticationApiSettingsDefaultApplicationRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_settings#id AuthenticationApiSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function authenticationApiSettingsDefaultApplicationRefToTerraform(struct?: AuthenticationApiSettingsDefaultApplicationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function authenticationApiSettingsDefaultApplicationRefToHclTerraform(struct?: AuthenticationApiSettingsDefaultApplicationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AuthenticationApiSettingsDefaultApplicationRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationApiSettingsDefaultApplicationRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationApiSettingsDefaultApplicationRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_settings pingfederate_authentication_api_settings}
*/
export class AuthenticationApiSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_authentication_api_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationApiSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationApiSettings to import
  * @param importFromId The id of the existing AuthenticationApiSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationApiSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_authentication_api_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_settings pingfederate_authentication_api_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationApiSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuthenticationApiSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_authentication_api_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiEnabled = config.apiEnabled;
    this._defaultApplicationRef.internalValue = config.defaultApplicationRef;
    this._enableApiDescriptions = config.enableApiDescriptions;
    this._includeRequestContext = config.includeRequestContext;
    this._restrictAccessToRedirectlessMode = config.restrictAccessToRedirectlessMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_enabled - computed: true, optional: true, required: false
  private _apiEnabled?: boolean | cdktf.IResolvable; 
  public get apiEnabled() {
    return this.getBooleanAttribute('api_enabled');
  }
  public set apiEnabled(value: boolean | cdktf.IResolvable) {
    this._apiEnabled = value;
  }
  public resetApiEnabled() {
    this._apiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEnabledInput() {
    return this._apiEnabled;
  }

  // default_application_ref - computed: false, optional: true, required: false
  private _defaultApplicationRef = new AuthenticationApiSettingsDefaultApplicationRefOutputReference(this, "default_application_ref");
  public get defaultApplicationRef() {
    return this._defaultApplicationRef;
  }
  public putDefaultApplicationRef(value: AuthenticationApiSettingsDefaultApplicationRef) {
    this._defaultApplicationRef.internalValue = value;
  }
  public resetDefaultApplicationRef() {
    this._defaultApplicationRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApplicationRefInput() {
    return this._defaultApplicationRef.internalValue;
  }

  // enable_api_descriptions - computed: true, optional: true, required: false
  private _enableApiDescriptions?: boolean | cdktf.IResolvable; 
  public get enableApiDescriptions() {
    return this.getBooleanAttribute('enable_api_descriptions');
  }
  public set enableApiDescriptions(value: boolean | cdktf.IResolvable) {
    this._enableApiDescriptions = value;
  }
  public resetEnableApiDescriptions() {
    this._enableApiDescriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableApiDescriptionsInput() {
    return this._enableApiDescriptions;
  }

  // include_request_context - computed: true, optional: true, required: false
  private _includeRequestContext?: boolean | cdktf.IResolvable; 
  public get includeRequestContext() {
    return this.getBooleanAttribute('include_request_context');
  }
  public set includeRequestContext(value: boolean | cdktf.IResolvable) {
    this._includeRequestContext = value;
  }
  public resetIncludeRequestContext() {
    this._includeRequestContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequestContextInput() {
    return this._includeRequestContext;
  }

  // restrict_access_to_redirectless_mode - computed: true, optional: true, required: false
  private _restrictAccessToRedirectlessMode?: boolean | cdktf.IResolvable; 
  public get restrictAccessToRedirectlessMode() {
    return this.getBooleanAttribute('restrict_access_to_redirectless_mode');
  }
  public set restrictAccessToRedirectlessMode(value: boolean | cdktf.IResolvable) {
    this._restrictAccessToRedirectlessMode = value;
  }
  public resetRestrictAccessToRedirectlessMode() {
    this._restrictAccessToRedirectlessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAccessToRedirectlessModeInput() {
    return this._restrictAccessToRedirectlessMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_enabled: cdktf.booleanToTerraform(this._apiEnabled),
      default_application_ref: authenticationApiSettingsDefaultApplicationRefToTerraform(this._defaultApplicationRef.internalValue),
      enable_api_descriptions: cdktf.booleanToTerraform(this._enableApiDescriptions),
      include_request_context: cdktf.booleanToTerraform(this._includeRequestContext),
      restrict_access_to_redirectless_mode: cdktf.booleanToTerraform(this._restrictAccessToRedirectlessMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_enabled: {
        value: cdktf.booleanToHclTerraform(this._apiEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_application_ref: {
        value: authenticationApiSettingsDefaultApplicationRefToHclTerraform(this._defaultApplicationRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationApiSettingsDefaultApplicationRef",
      },
      enable_api_descriptions: {
        value: cdktf.booleanToHclTerraform(this._enableApiDescriptions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_request_context: {
        value: cdktf.booleanToHclTerraform(this._includeRequestContext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_access_to_redirectless_mode: {
        value: cdktf.booleanToHclTerraform(this._restrictAccessToRedirectlessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
