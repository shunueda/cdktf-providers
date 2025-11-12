// https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrismacloudWaasProviderConfig {
  /**
  * Version of the Prisma Cloud API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs#api_version PrismacloudWaasProvider#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Configuration file in JSON format. See examples/creds.json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs#config_file PrismacloudWaasProvider#config_file}
  */
  readonly configFile?: string;
  /**
  * URL of the Prisma Cloud Console
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs#console_url PrismacloudWaasProvider#console_url}
  */
  readonly consoleUrl: string;
  /**
  * Prisma Cloud Compute password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs#password PrismacloudWaasProvider#password}
  */
  readonly password: string;
  /**
  * Project for multi-tenant environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs#project PrismacloudWaasProvider#project}
  */
  readonly project?: string;
  /**
  * If true, skip certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs#skip_cert_verification PrismacloudWaasProvider#skip_cert_verification}
  */
  readonly skipCertVerification?: boolean | cdktf.IResolvable;
  /**
  * Prisma Cloud Compute username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs#username PrismacloudWaasProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs#alias PrismacloudWaasProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs prismacloud-waas}
*/
export class PrismacloudWaasProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud-waas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrismacloudWaasProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrismacloudWaasProvider to import
  * @param importFromId The id of the existing PrismacloudWaasProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrismacloudWaasProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud-waas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs prismacloud-waas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrismacloudWaasProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PrismacloudWaasProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud-waas',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud-waas',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      terraformProviderSource: 'PaloAltoNetworks/prismacloud-waas'
    });
    this._apiVersion = config.apiVersion;
    this._configFile = config.configFile;
    this._consoleUrl = config.consoleUrl;
    this._password = config.password;
    this._project = config.project;
    this._skipCertVerification = config.skipCertVerification;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this._apiVersion;
  }
  public set apiVersion(value: string | undefined) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this._configFile;
  }
  public set configFile(value: string | undefined) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }

  // console_url - computed: false, optional: false, required: true
  private _consoleUrl?: string; 
  public get consoleUrl() {
    return this._consoleUrl;
  }
  public set consoleUrl(value: string | undefined) {
    this._consoleUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleUrlInput() {
    return this._consoleUrl;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // skip_cert_verification - computed: false, optional: true, required: false
  private _skipCertVerification?: boolean | cdktf.IResolvable; 
  public get skipCertVerification() {
    return this._skipCertVerification;
  }
  public set skipCertVerification(value: boolean | cdktf.IResolvable | undefined) {
    this._skipCertVerification = value;
  }
  public resetSkipCertVerification() {
    this._skipCertVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCertVerificationInput() {
    return this._skipCertVerification;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
      api_version: cdktf.stringToTerraform(this._apiVersion),
      config_file: cdktf.stringToTerraform(this._configFile),
      console_url: cdktf.stringToTerraform(this._consoleUrl),
      password: cdktf.stringToTerraform(this._password),
      project: cdktf.stringToTerraform(this._project),
      skip_cert_verification: cdktf.booleanToTerraform(this._skipCertVerification),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file: {
        value: cdktf.stringToHclTerraform(this._configFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_url: {
        value: cdktf.stringToHclTerraform(this._consoleUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_cert_verification: {
        value: cdktf.booleanToHclTerraform(this._skipCertVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
