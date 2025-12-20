// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting#authentication AuthenticationSetting#authentication}
  */
  readonly authentication?: AuthenticationSettingAuthentication;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting#device AuthenticationSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting#folder AuthenticationSetting#folder}
  */
  readonly folder?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting#snippet AuthenticationSetting#snippet}
  */
  readonly snippet?: string;
}
export interface AuthenticationSettingAuthentication {
  /**
  * Accounting server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting#accounting_server_profile AuthenticationSetting#accounting_server_profile}
  */
  readonly accountingServerProfile?: string;
  /**
  * Authentication profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting#authentication_profile AuthenticationSetting#authentication_profile}
  */
  readonly authenticationProfile?: string;
  /**
  * Certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting#certificate_profile AuthenticationSetting#certificate_profile}
  */
  readonly certificateProfile?: string;
}

export function authenticationSettingAuthenticationToTerraform(struct?: AuthenticationSettingAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounting_server_profile: cdktf.stringToTerraform(struct!.accountingServerProfile),
    authentication_profile: cdktf.stringToTerraform(struct!.authenticationProfile),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
  }
}


export function authenticationSettingAuthenticationToHclTerraform(struct?: AuthenticationSettingAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounting_server_profile: {
      value: cdktf.stringToHclTerraform(struct!.accountingServerProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_profile: {
      value: cdktf.stringToHclTerraform(struct!.authenticationProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationSettingAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationSettingAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountingServerProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingServerProfile = this._accountingServerProfile;
    }
    if (this._authenticationProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationProfile = this._authenticationProfile;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationSettingAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountingServerProfile = undefined;
      this._authenticationProfile = undefined;
      this._certificateProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountingServerProfile = value.accountingServerProfile;
      this._authenticationProfile = value.authenticationProfile;
      this._certificateProfile = value.certificateProfile;
    }
  }

  // accounting_server_profile - computed: false, optional: true, required: false
  private _accountingServerProfile?: string; 
  public get accountingServerProfile() {
    return this.getStringAttribute('accounting_server_profile');
  }
  public set accountingServerProfile(value: string) {
    this._accountingServerProfile = value;
  }
  public resetAccountingServerProfile() {
    this._accountingServerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingServerProfileInput() {
    return this._accountingServerProfile;
  }

  // authentication_profile - computed: false, optional: true, required: false
  private _authenticationProfile?: string; 
  public get authenticationProfile() {
    return this.getStringAttribute('authentication_profile');
  }
  public set authenticationProfile(value: string) {
    this._authenticationProfile = value;
  }
  public resetAuthenticationProfile() {
    this._authenticationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileInput() {
    return this._authenticationProfile;
  }

  // certificate_profile - computed: false, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting scm_authentication_setting}
*/
export class AuthenticationSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_authentication_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationSetting to import
  * @param importFromId The id of the existing AuthenticationSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_authentication_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/authentication_setting scm_authentication_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuthenticationSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_authentication_setting',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authentication.internalValue = config.authentication;
    this._device = config.device;
    this._folder = config.folder;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: true, required: false
  private _authentication = new AuthenticationSettingAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: AuthenticationSettingAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: authenticationSettingAuthenticationToTerraform(this._authentication.internalValue),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: authenticationSettingAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationSettingAuthentication",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
