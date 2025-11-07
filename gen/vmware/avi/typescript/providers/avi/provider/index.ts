// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AviProviderConfig {
  /**
  * Session timeout for Avi Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#avi_api_timeout AviProvider#avi_api_timeout}
  */
  readonly aviApiTimeout?: number;
  /**
  * Avi token for Avi Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#avi_authtoken AviProvider#avi_authtoken}
  */
  readonly aviAuthtoken?: string;
  /**
  * Avi Controller hostname or IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#avi_controller AviProvider#avi_controller}
  */
  readonly aviController?: string;
  /**
  * Csp host for Avi Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#avi_csp_host AviProvider#avi_csp_host}
  */
  readonly aviCspHost?: string;
  /**
  * Csp token for Avi Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#avi_csp_token AviProvider#avi_csp_token}
  */
  readonly aviCspToken?: string;
  /**
  * Password for Avi Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#avi_password AviProvider#avi_password}
  */
  readonly aviPassword?: string;
  /**
  * Avi tenant for Avi Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#avi_tenant AviProvider#avi_tenant}
  */
  readonly aviTenant?: string;
  /**
  * Username for Avi Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#avi_username AviProvider#avi_username}
  */
  readonly aviUsername?: string;
  /**
  * Avi version for Avi Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#avi_version AviProvider#avi_version}
  */
  readonly aviVersion?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#alias AviProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs avi}
*/
export class AviProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AviProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AviProvider to import
  * @param importFromId The id of the existing AviProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AviProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs avi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AviProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AviProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      terraformProviderSource: 'vmware/avi'
    });
    this._aviApiTimeout = config.aviApiTimeout;
    this._aviAuthtoken = config.aviAuthtoken;
    this._aviController = config.aviController;
    this._aviCspHost = config.aviCspHost;
    this._aviCspToken = config.aviCspToken;
    this._aviPassword = config.aviPassword;
    this._aviTenant = config.aviTenant;
    this._aviUsername = config.aviUsername;
    this._aviVersion = config.aviVersion;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avi_api_timeout - computed: false, optional: true, required: false
  private _aviApiTimeout?: number; 
  public get aviApiTimeout() {
    return this._aviApiTimeout;
  }
  public set aviApiTimeout(value: number | undefined) {
    this._aviApiTimeout = value;
  }
  public resetAviApiTimeout() {
    this._aviApiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviApiTimeoutInput() {
    return this._aviApiTimeout;
  }

  // avi_authtoken - computed: false, optional: true, required: false
  private _aviAuthtoken?: string; 
  public get aviAuthtoken() {
    return this._aviAuthtoken;
  }
  public set aviAuthtoken(value: string | undefined) {
    this._aviAuthtoken = value;
  }
  public resetAviAuthtoken() {
    this._aviAuthtoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviAuthtokenInput() {
    return this._aviAuthtoken;
  }

  // avi_controller - computed: false, optional: true, required: false
  private _aviController?: string; 
  public get aviController() {
    return this._aviController;
  }
  public set aviController(value: string | undefined) {
    this._aviController = value;
  }
  public resetAviController() {
    this._aviController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviControllerInput() {
    return this._aviController;
  }

  // avi_csp_host - computed: false, optional: true, required: false
  private _aviCspHost?: string; 
  public get aviCspHost() {
    return this._aviCspHost;
  }
  public set aviCspHost(value: string | undefined) {
    this._aviCspHost = value;
  }
  public resetAviCspHost() {
    this._aviCspHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviCspHostInput() {
    return this._aviCspHost;
  }

  // avi_csp_token - computed: false, optional: true, required: false
  private _aviCspToken?: string; 
  public get aviCspToken() {
    return this._aviCspToken;
  }
  public set aviCspToken(value: string | undefined) {
    this._aviCspToken = value;
  }
  public resetAviCspToken() {
    this._aviCspToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviCspTokenInput() {
    return this._aviCspToken;
  }

  // avi_password - computed: false, optional: true, required: false
  private _aviPassword?: string; 
  public get aviPassword() {
    return this._aviPassword;
  }
  public set aviPassword(value: string | undefined) {
    this._aviPassword = value;
  }
  public resetAviPassword() {
    this._aviPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviPasswordInput() {
    return this._aviPassword;
  }

  // avi_tenant - computed: false, optional: true, required: false
  private _aviTenant?: string; 
  public get aviTenant() {
    return this._aviTenant;
  }
  public set aviTenant(value: string | undefined) {
    this._aviTenant = value;
  }
  public resetAviTenant() {
    this._aviTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviTenantInput() {
    return this._aviTenant;
  }

  // avi_username - computed: false, optional: true, required: false
  private _aviUsername?: string; 
  public get aviUsername() {
    return this._aviUsername;
  }
  public set aviUsername(value: string | undefined) {
    this._aviUsername = value;
  }
  public resetAviUsername() {
    this._aviUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviUsernameInput() {
    return this._aviUsername;
  }

  // avi_version - computed: false, optional: true, required: false
  private _aviVersion?: string; 
  public get aviVersion() {
    return this._aviVersion;
  }
  public set aviVersion(value: string | undefined) {
    this._aviVersion = value;
  }
  public resetAviVersion() {
    this._aviVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviVersionInput() {
    return this._aviVersion;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      avi_api_timeout: cdktf.numberToTerraform(this._aviApiTimeout),
      avi_authtoken: cdktf.stringToTerraform(this._aviAuthtoken),
      avi_controller: cdktf.stringToTerraform(this._aviController),
      avi_csp_host: cdktf.stringToTerraform(this._aviCspHost),
      avi_csp_token: cdktf.stringToTerraform(this._aviCspToken),
      avi_password: cdktf.stringToTerraform(this._aviPassword),
      avi_tenant: cdktf.stringToTerraform(this._aviTenant),
      avi_username: cdktf.stringToTerraform(this._aviUsername),
      avi_version: cdktf.stringToTerraform(this._aviVersion),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avi_api_timeout: {
        value: cdktf.numberToHclTerraform(this._aviApiTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      avi_authtoken: {
        value: cdktf.stringToHclTerraform(this._aviAuthtoken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avi_controller: {
        value: cdktf.stringToHclTerraform(this._aviController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avi_csp_host: {
        value: cdktf.stringToHclTerraform(this._aviCspHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avi_csp_token: {
        value: cdktf.stringToHclTerraform(this._aviCspToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avi_password: {
        value: cdktf.stringToHclTerraform(this._aviPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avi_tenant: {
        value: cdktf.stringToHclTerraform(this._aviTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avi_username: {
        value: cdktf.stringToHclTerraform(this._aviUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avi_version: {
        value: cdktf.stringToHclTerraform(this._aviVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
