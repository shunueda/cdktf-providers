// https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/rate_limiting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RateLimitingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/rate_limiting#default_mode RateLimiting#default_mode}
  */
  readonly defaultMode: string;
  /**
  * use_case_mode_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/rate_limiting#use_case_mode_overrides RateLimiting#use_case_mode_overrides}
  */
  readonly useCaseModeOverrides?: RateLimitingUseCaseModeOverrides;
}
export interface RateLimitingUseCaseModeOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/rate_limiting#login_page RateLimiting#login_page}
  */
  readonly loginPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/rate_limiting#oauth2_authorize RateLimiting#oauth2_authorize}
  */
  readonly oauth2Authorize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/rate_limiting#oie_app_intent RateLimiting#oie_app_intent}
  */
  readonly oieAppIntent?: string;
}

export function rateLimitingUseCaseModeOverridesToTerraform(struct?: RateLimitingUseCaseModeOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_page: cdktf.stringToTerraform(struct!.loginPage),
    oauth2_authorize: cdktf.stringToTerraform(struct!.oauth2Authorize),
    oie_app_intent: cdktf.stringToTerraform(struct!.oieAppIntent),
  }
}


export function rateLimitingUseCaseModeOverridesToHclTerraform(struct?: RateLimitingUseCaseModeOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_page: {
      value: cdktf.stringToHclTerraform(struct!.loginPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_authorize: {
      value: cdktf.stringToHclTerraform(struct!.oauth2Authorize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oie_app_intent: {
      value: cdktf.stringToHclTerraform(struct!.oieAppIntent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimitingUseCaseModeOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RateLimitingUseCaseModeOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPage = this._loginPage;
    }
    if (this._oauth2Authorize !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Authorize = this._oauth2Authorize;
    }
    if (this._oieAppIntent !== undefined) {
      hasAnyValues = true;
      internalValueResult.oieAppIntent = this._oieAppIntent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimitingUseCaseModeOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loginPage = undefined;
      this._oauth2Authorize = undefined;
      this._oieAppIntent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loginPage = value.loginPage;
      this._oauth2Authorize = value.oauth2Authorize;
      this._oieAppIntent = value.oieAppIntent;
    }
  }

  // login_page - computed: false, optional: true, required: false
  private _loginPage?: string; 
  public get loginPage() {
    return this.getStringAttribute('login_page');
  }
  public set loginPage(value: string) {
    this._loginPage = value;
  }
  public resetLoginPage() {
    this._loginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPageInput() {
    return this._loginPage;
  }

  // oauth2_authorize - computed: false, optional: true, required: false
  private _oauth2Authorize?: string; 
  public get oauth2Authorize() {
    return this.getStringAttribute('oauth2_authorize');
  }
  public set oauth2Authorize(value: string) {
    this._oauth2Authorize = value;
  }
  public resetOauth2Authorize() {
    this._oauth2Authorize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthorizeInput() {
    return this._oauth2Authorize;
  }

  // oie_app_intent - computed: false, optional: true, required: false
  private _oieAppIntent?: string; 
  public get oieAppIntent() {
    return this.getStringAttribute('oie_app_intent');
  }
  public set oieAppIntent(value: string) {
    this._oieAppIntent = value;
  }
  public resetOieAppIntent() {
    this._oieAppIntent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oieAppIntentInput() {
    return this._oieAppIntent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/rate_limiting okta_rate_limiting}
*/
export class RateLimiting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_rate_limiting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RateLimiting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RateLimiting to import
  * @param importFromId The id of the existing RateLimiting that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/rate_limiting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RateLimiting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_rate_limiting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/resources/rate_limiting okta_rate_limiting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RateLimitingConfig
  */
  public constructor(scope: Construct, id: string, config: RateLimitingConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_rate_limiting',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.0',
        providerVersionConstraint: '6.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultMode = config.defaultMode;
    this._useCaseModeOverrides.internalValue = config.useCaseModeOverrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_mode - computed: false, optional: false, required: true
  private _defaultMode?: string; 
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }
  public set defaultMode(value: string) {
    this._defaultMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // use_case_mode_overrides - computed: false, optional: true, required: false
  private _useCaseModeOverrides = new RateLimitingUseCaseModeOverridesOutputReference(this, "use_case_mode_overrides");
  public get useCaseModeOverrides() {
    return this._useCaseModeOverrides;
  }
  public putUseCaseModeOverrides(value: RateLimitingUseCaseModeOverrides) {
    this._useCaseModeOverrides.internalValue = value;
  }
  public resetUseCaseModeOverrides() {
    this._useCaseModeOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCaseModeOverridesInput() {
    return this._useCaseModeOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_mode: cdktf.stringToTerraform(this._defaultMode),
      use_case_mode_overrides: rateLimitingUseCaseModeOverridesToTerraform(this._useCaseModeOverrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_mode: {
        value: cdktf.stringToHclTerraform(this._defaultMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_case_mode_overrides: {
        value: rateLimitingUseCaseModeOverridesToHclTerraform(this._useCaseModeOverrides.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RateLimitingUseCaseModeOverrides",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
