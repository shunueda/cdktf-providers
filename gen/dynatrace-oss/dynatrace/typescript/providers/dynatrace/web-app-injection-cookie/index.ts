// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_injection_cookie
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppInjectionCookieConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_injection_cookie#application_id WebAppInjectionCookie#application_id}
  */
  readonly applicationId: string;
  /**
  * Specify an alternative domain for cookies set by Dynatrace. Keep in mind that your browser may not allow placement of cookies on certain domains (for example, top-level domains). Before typing a domain name here, confirm that the domain will accept cookies from your browser. For details, see the list of [forbidden top-level domains](https://dt-url.net/9n6b0pfz).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_injection_cookie#cookie_placement_domain WebAppInjectionCookie#cookie_placement_domain}
  */
  readonly cookiePlacementDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_injection_cookie#id WebAppInjectionCookie#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Possible Values: `LAX`, `NONE`, `NOTSET`, `STRICT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_injection_cookie#same_site_cookie_attribute WebAppInjectionCookie#same_site_cookie_attribute}
  */
  readonly sameSiteCookieAttribute: string;
  /**
  * If your application is only accessible via SSL, you can add the Secure attribute to all cookies set by Dynatrace. This setting prevents the display of warnings from PCI-compliance security scanners. Be aware that with this setting enabled Dynatrace correlation of user actions with server-side web requests is only possible over SSL connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_injection_cookie#use_secure_cookie_attribute WebAppInjectionCookie#use_secure_cookie_attribute}
  */
  readonly useSecureCookieAttribute: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_injection_cookie dynatrace_web_app_injection_cookie}
*/
export class WebAppInjectionCookie extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_injection_cookie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppInjectionCookie resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppInjectionCookie to import
  * @param importFromId The id of the existing WebAppInjectionCookie that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_injection_cookie#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppInjectionCookie to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_injection_cookie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/web_app_injection_cookie dynatrace_web_app_injection_cookie} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppInjectionCookieConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppInjectionCookieConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_injection_cookie',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._cookiePlacementDomain = config.cookiePlacementDomain;
    this._id = config.id;
    this._sameSiteCookieAttribute = config.sameSiteCookieAttribute;
    this._useSecureCookieAttribute = config.useSecureCookieAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // cookie_placement_domain - computed: false, optional: true, required: false
  private _cookiePlacementDomain?: string; 
  public get cookiePlacementDomain() {
    return this.getStringAttribute('cookie_placement_domain');
  }
  public set cookiePlacementDomain(value: string) {
    this._cookiePlacementDomain = value;
  }
  public resetCookiePlacementDomain() {
    this._cookiePlacementDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiePlacementDomainInput() {
    return this._cookiePlacementDomain;
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

  // same_site_cookie_attribute - computed: false, optional: false, required: true
  private _sameSiteCookieAttribute?: string; 
  public get sameSiteCookieAttribute() {
    return this.getStringAttribute('same_site_cookie_attribute');
  }
  public set sameSiteCookieAttribute(value: string) {
    this._sameSiteCookieAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteCookieAttributeInput() {
    return this._sameSiteCookieAttribute;
  }

  // use_secure_cookie_attribute - computed: false, optional: false, required: true
  private _useSecureCookieAttribute?: boolean | cdktf.IResolvable; 
  public get useSecureCookieAttribute() {
    return this.getBooleanAttribute('use_secure_cookie_attribute');
  }
  public set useSecureCookieAttribute(value: boolean | cdktf.IResolvable) {
    this._useSecureCookieAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useSecureCookieAttributeInput() {
    return this._useSecureCookieAttribute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      cookie_placement_domain: cdktf.stringToTerraform(this._cookiePlacementDomain),
      id: cdktf.stringToTerraform(this._id),
      same_site_cookie_attribute: cdktf.stringToTerraform(this._sameSiteCookieAttribute),
      use_secure_cookie_attribute: cdktf.booleanToTerraform(this._useSecureCookieAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_placement_domain: {
        value: cdktf.stringToHclTerraform(this._cookiePlacementDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      same_site_cookie_attribute: {
        value: cdktf.stringToHclTerraform(this._sameSiteCookieAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_secure_cookie_attribute: {
        value: cdktf.booleanToHclTerraform(this._useSecureCookieAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
