// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/general_security
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GeneralSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/general_security#enable_anonymous_access GeneralSecurity#enable_anonymous_access}
  */
  readonly enableAnonymousAccess?: boolean | cdktf.IResolvable;
  /**
  * Determines the password requirements from users identified to Artifactory from a remote client such as Maven. The options are: (1) `SUPPORTED` (default): Users can authenticate using secure encrypted passwords or clear-text passwords. (2) `REQUIRED`: Users must authenticate using secure encrypted passwords. Clear-text authentication fails. (3) `UNSUPPORTED`: Only clear-text passwords can be used for authentication. Default value is `SUPPORTED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/general_security#encryption_policy GeneralSecurity#encryption_policy}
  */
  readonly encryptionPolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/general_security artifactory_general_security}
*/
export class GeneralSecurity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_general_security";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GeneralSecurity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeneralSecurity to import
  * @param importFromId The id of the existing GeneralSecurity that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/general_security#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeneralSecurity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_general_security", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/general_security artifactory_general_security} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeneralSecurityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GeneralSecurityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'artifactory_general_security',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.0',
        providerVersionConstraint: '12.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableAnonymousAccess = config.enableAnonymousAccess;
    this._encryptionPolicy = config.encryptionPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_anonymous_access - computed: true, optional: true, required: false
  private _enableAnonymousAccess?: boolean | cdktf.IResolvable; 
  public get enableAnonymousAccess() {
    return this.getBooleanAttribute('enable_anonymous_access');
  }
  public set enableAnonymousAccess(value: boolean | cdktf.IResolvable) {
    this._enableAnonymousAccess = value;
  }
  public resetEnableAnonymousAccess() {
    this._enableAnonymousAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnonymousAccessInput() {
    return this._enableAnonymousAccess;
  }

  // encryption_policy - computed: true, optional: true, required: false
  private _encryptionPolicy?: string; 
  public get encryptionPolicy() {
    return this.getStringAttribute('encryption_policy');
  }
  public set encryptionPolicy(value: string) {
    this._encryptionPolicy = value;
  }
  public resetEncryptionPolicy() {
    this._encryptionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPolicyInput() {
    return this._encryptionPolicy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_anonymous_access: cdktf.booleanToTerraform(this._enableAnonymousAccess),
      encryption_policy: cdktf.stringToTerraform(this._encryptionPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_anonymous_access: {
        value: cdktf.booleanToHclTerraform(this._enableAnonymousAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_policy: {
        value: cdktf.stringToHclTerraform(this._encryptionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
