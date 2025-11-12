// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationApiApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain in the redirect URL is always whitelisted. This field contains a list of additional allowed origin URL's for cross-origin resource sharing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application#additional_allowed_origins AuthenticationApiApplication#additional_allowed_origins}
  */
  readonly additionalAllowedOrigins?: string[];
  /**
  * The persistent, unique ID for the Authentication API application. It can be any combination of `[a-zA-Z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application#application_id AuthenticationApiApplication#application_id}
  */
  readonly applicationId?: string;
  /**
  * The client this application must use if it invokes the authentication API in redirectless mode. No client may be specified if `restrict_access_to_redirectless_mode` is `false` under `pingfederate_authentication_api_settings`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application#client_for_redirectless_mode_ref AuthenticationApiApplication#client_for_redirectless_mode_ref}
  */
  readonly clientForRedirectlessModeRef?: AuthenticationApiApplicationClientForRedirectlessModeRef;
  /**
  * The Authentication API Application description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application#description AuthenticationApiApplication#description}
  */
  readonly description?: string;
  /**
  * The Authentication API Application Name. Name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application#name AuthenticationApiApplication#name}
  */
  readonly name: string;
  /**
  * The Authentication API Application redirect URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application#url AuthenticationApiApplication#url}
  */
  readonly url: string;
}
export interface AuthenticationApiApplicationClientForRedirectlessModeRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application#id AuthenticationApiApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function authenticationApiApplicationClientForRedirectlessModeRefToTerraform(struct?: AuthenticationApiApplicationClientForRedirectlessModeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function authenticationApiApplicationClientForRedirectlessModeRefToHclTerraform(struct?: AuthenticationApiApplicationClientForRedirectlessModeRef | cdktf.IResolvable): any {
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

export class AuthenticationApiApplicationClientForRedirectlessModeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationApiApplicationClientForRedirectlessModeRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthenticationApiApplicationClientForRedirectlessModeRef | cdktf.IResolvable | undefined) {
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

  // id - computed: true, optional: false, required: true
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
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application pingfederate_authentication_api_application}
*/
export class AuthenticationApiApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_authentication_api_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationApiApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationApiApplication to import
  * @param importFromId The id of the existing AuthenticationApiApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationApiApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_authentication_api_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_api_application pingfederate_authentication_api_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationApiApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationApiApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_authentication_api_application',
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
    this._additionalAllowedOrigins = config.additionalAllowedOrigins;
    this._applicationId = config.applicationId;
    this._clientForRedirectlessModeRef.internalValue = config.clientForRedirectlessModeRef;
    this._description = config.description;
    this._name = config.name;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_allowed_origins - computed: true, optional: true, required: false
  private _additionalAllowedOrigins?: string[]; 
  public get additionalAllowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_allowed_origins'));
  }
  public set additionalAllowedOrigins(value: string[]) {
    this._additionalAllowedOrigins = value;
  }
  public resetAdditionalAllowedOrigins() {
    this._additionalAllowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAllowedOriginsInput() {
    return this._additionalAllowedOrigins;
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // client_for_redirectless_mode_ref - computed: true, optional: true, required: false
  private _clientForRedirectlessModeRef = new AuthenticationApiApplicationClientForRedirectlessModeRefOutputReference(this, "client_for_redirectless_mode_ref");
  public get clientForRedirectlessModeRef() {
    return this._clientForRedirectlessModeRef;
  }
  public putClientForRedirectlessModeRef(value: AuthenticationApiApplicationClientForRedirectlessModeRef) {
    this._clientForRedirectlessModeRef.internalValue = value;
  }
  public resetClientForRedirectlessModeRef() {
    this._clientForRedirectlessModeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientForRedirectlessModeRefInput() {
    return this._clientForRedirectlessModeRef.internalValue;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalAllowedOrigins),
      application_id: cdktf.stringToTerraform(this._applicationId),
      client_for_redirectless_mode_ref: authenticationApiApplicationClientForRedirectlessModeRefToTerraform(this._clientForRedirectlessModeRef.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_allowed_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalAllowedOrigins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_for_redirectless_mode_ref: {
        value: authenticationApiApplicationClientForRedirectlessModeRefToHclTerraform(this._clientForRedirectlessModeRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationApiApplicationClientForRedirectlessModeRef",
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
