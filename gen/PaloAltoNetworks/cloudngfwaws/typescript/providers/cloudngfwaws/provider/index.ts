// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudngfwawsProviderConfig {
  /**
  * (Used for the initial `sts assume role`) AWS access key. Environment variable: `CLOUDNGFWAWS_ACCESS_KEY`. JSON conf file variable: `access-key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#access_key CloudngfwawsProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * The ARN allowing account admin permissions. Environment variable: `CLOUDNGFWAWS_ACCT_ADMIN_ARN`. JSON conf file variable: `account-admin-arn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#account_admin_arn CloudngfwawsProvider#account_admin_arn}
  */
  readonly accountAdminArn?: string;
  /**
  * The ARN allowing firewall, rulestack, and global rulestack admin permissions. Global rulestack admin permissions can be enabled only if the AWS account is onboarded by AWS Firewall Manager. Use 'lfa_arn' and 'lra_arn' if you want to enable only firewall and rulestack admin permissions. Environment variable: `CLOUDNGFWAWS_ARN`. JSON conf file variable: `arn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#arn CloudngfwawsProvider#arn}
  */
  readonly arn?: string;
  /**
  * The ARN allowing global rulestack admin permissions. Global rulestack admin permissions can be enabled only if the AWS account is onboarded by AWS Firewall Manager. 'gra_arn' is preferentially used over the `arn` param if both are specified. Environment variable: `CLOUDNGFWAWS_GRA_ARN`. JSON conf file variable: `gra-arn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#gra_arn CloudngfwawsProvider#gra_arn}
  */
  readonly graArn?: string;
  /**
  * Additional HTTP headers to send with API calls. Environment variable: `CLOUDNGFWAWS_HEADERS`. JSON conf file variable: `headers`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#headers CloudngfwawsProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * The hostname of the API (default: `api.us-east-1.aws.cloudngfw.paloaltonetworks.com`). Environment variable: `CLOUDNGFWAWS_HOST`. JSON conf file variable: `host`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#host CloudngfwawsProvider#host}
  */
  readonly host?: string;
  /**
  * Retrieve provider configuration from this JSON file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#json_config_file CloudngfwawsProvider#json_config_file}
  */
  readonly jsonConfigFile?: string;
  /**
  * The ARN allowing firewall admin permissions. This is preferentially used over the `arn` param if both are specified. Environment variable: `CLOUDNGFWAWS_LFA_ARN`. JSON conf file variable: `lfa-arn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#lfa_arn CloudngfwawsProvider#lfa_arn}
  */
  readonly lfaArn?: string;
  /**
  * The logging options for the provider. Environment variable: `CLOUDNGFWAWS_LOGGING`. JSON conf file variable: `logging`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#logging CloudngfwawsProvider#logging}
  */
  readonly logging?: string[];
  /**
  * The ARN allowing rulestack admin permissions. This is preferentially used over the `arn` param if both are specified. Environment variable: `CLOUDNGFWAWS_LRA_ARN`. JSON conf file variable: `lra-arn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#lra_arn CloudngfwawsProvider#lra_arn}
  */
  readonly lraArn?: string;
  /**
  * AWS management plane region. Environment variable: `CLOUDNGFWAWS_MP_REGION`. JSON conf file variable: `mp_region`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#mp_region CloudngfwawsProvider#mp_region}
  */
  readonly mpRegion?: string;
  /**
  * AWS management plane MP region host Environment variable: `CLOUDNGFWAWS_MP_REGION_HOST`. JSON conf file variable: `mp_region_host`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#mp_region_host CloudngfwawsProvider#mp_region_host}
  */
  readonly mpRegionHost?: string;
  /**
  * (Used for the initial `sts assume role`) AWS PROFILE. Environment variable: `CLOUDNGFWAWS_PROFILE`. JSON conf file variable: `profile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#profile CloudngfwawsProvider#profile}
  */
  readonly profile?: string;
  /**
  * The protocol (defaults to `https`). Environment variable: `CLOUDNGFWAWS_PROTOCOL`. JSON conf file variable: `protocol`. Valid values are `https` or `http`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#protocol CloudngfwawsProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * AWS region. Environment variable: `CLOUDNGFWAWS_REGION`. JSON conf file variable: `region`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#region CloudngfwawsProvider#region}
  */
  readonly region?: string;
  /**
  * (Used for the initial `sts assume role`) AWS secret key. Environment variable: `CLOUDNGFWAWS_SECRET_KEY`. JSON conf file variable: `secret-key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#secret_key CloudngfwawsProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Skip verifying the SSL certificate. Environment variable: `CLOUDNGFWAWS_SKIP_VERIFY_CERTIFICATE`. JSON conf file variable: `skip-verify-certificate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#skip_verify_certificate CloudngfwawsProvider#skip_verify_certificate}
  */
  readonly skipVerifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Enable synchronous mode while creating resources Environment variable: `CLOUDNGFWAWS_SYNC_MODE`. JSON conf file variable: `sync_mode`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#sync_mode CloudngfwawsProvider#sync_mode}
  */
  readonly syncMode?: boolean | cdktf.IResolvable;
  /**
  * The timeout for any single API call (default: `30`). Environment variable: `CLOUDNGFWAWS_TIMEOUT`. JSON conf file variable: `timeout`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#timeout CloudngfwawsProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * The hostname of the V2 API (default: `api.us-east-1.aws.cloudngfw.paloaltonetworks.com`). Environment variable: `CLOUDNGFWAWS_V2_HOST`. JSON conf file variable: `v2_host`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#v2_host CloudngfwawsProvider#v2_host}
  */
  readonly v2Host?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#alias CloudngfwawsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs cloudngfwaws}
*/
export class CloudngfwawsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudngfwawsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudngfwawsProvider to import
  * @param importFromId The id of the existing CloudngfwawsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudngfwawsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs cloudngfwaws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudngfwawsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudngfwawsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws',
      terraformGeneratorMetadata: {
        providerName: 'cloudngfwaws',
        providerVersion: '3.0.4',
        providerVersionConstraint: '3.0.4'
      },
      terraformProviderSource: 'PaloAltoNetworks/cloudngfwaws'
    });
    this._accessKey = config.accessKey;
    this._accountAdminArn = config.accountAdminArn;
    this._arn = config.arn;
    this._graArn = config.graArn;
    this._headers = config.headers;
    this._host = config.host;
    this._jsonConfigFile = config.jsonConfigFile;
    this._lfaArn = config.lfaArn;
    this._logging = config.logging;
    this._lraArn = config.lraArn;
    this._mpRegion = config.mpRegion;
    this._mpRegionHost = config.mpRegionHost;
    this._profile = config.profile;
    this._protocol = config.protocol;
    this._region = config.region;
    this._secretKey = config.secretKey;
    this._skipVerifyCertificate = config.skipVerifyCertificate;
    this._syncMode = config.syncMode;
    this._timeout = config.timeout;
    this._v2Host = config.v2Host;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // account_admin_arn - computed: false, optional: true, required: false
  private _accountAdminArn?: string; 
  public get accountAdminArn() {
    return this._accountAdminArn;
  }
  public set accountAdminArn(value: string | undefined) {
    this._accountAdminArn = value;
  }
  public resetAccountAdminArn() {
    this._accountAdminArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAdminArnInput() {
    return this._accountAdminArn;
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this._arn;
  }
  public set arn(value: string | undefined) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // gra_arn - computed: false, optional: true, required: false
  private _graArn?: string; 
  public get graArn() {
    return this._graArn;
  }
  public set graArn(value: string | undefined) {
    this._graArn = value;
  }
  public resetGraArn() {
    this._graArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graArnInput() {
    return this._graArn;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // json_config_file - computed: false, optional: true, required: false
  private _jsonConfigFile?: string; 
  public get jsonConfigFile() {
    return this._jsonConfigFile;
  }
  public set jsonConfigFile(value: string | undefined) {
    this._jsonConfigFile = value;
  }
  public resetJsonConfigFile() {
    this._jsonConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonConfigFileInput() {
    return this._jsonConfigFile;
  }

  // lfa_arn - computed: false, optional: true, required: false
  private _lfaArn?: string; 
  public get lfaArn() {
    return this._lfaArn;
  }
  public set lfaArn(value: string | undefined) {
    this._lfaArn = value;
  }
  public resetLfaArn() {
    this._lfaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfaArnInput() {
    return this._lfaArn;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string[]; 
  public get logging() {
    return this._logging;
  }
  public set logging(value: string[] | undefined) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // lra_arn - computed: false, optional: true, required: false
  private _lraArn?: string; 
  public get lraArn() {
    return this._lraArn;
  }
  public set lraArn(value: string | undefined) {
    this._lraArn = value;
  }
  public resetLraArn() {
    this._lraArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lraArnInput() {
    return this._lraArn;
  }

  // mp_region - computed: false, optional: true, required: false
  private _mpRegion?: string; 
  public get mpRegion() {
    return this._mpRegion;
  }
  public set mpRegion(value: string | undefined) {
    this._mpRegion = value;
  }
  public resetMpRegion() {
    this._mpRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpRegionInput() {
    return this._mpRegion;
  }

  // mp_region_host - computed: false, optional: true, required: false
  private _mpRegionHost?: string; 
  public get mpRegionHost() {
    return this._mpRegionHost;
  }
  public set mpRegionHost(value: string | undefined) {
    this._mpRegionHost = value;
  }
  public resetMpRegionHost() {
    this._mpRegionHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpRegionHostInput() {
    return this._mpRegionHost;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // skip_verify_certificate - computed: false, optional: true, required: false
  private _skipVerifyCertificate?: boolean | cdktf.IResolvable; 
  public get skipVerifyCertificate() {
    return this._skipVerifyCertificate;
  }
  public set skipVerifyCertificate(value: boolean | cdktf.IResolvable | undefined) {
    this._skipVerifyCertificate = value;
  }
  public resetSkipVerifyCertificate() {
    this._skipVerifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyCertificateInput() {
    return this._skipVerifyCertificate;
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: boolean | cdktf.IResolvable; 
  public get syncMode() {
    return this._syncMode;
  }
  public set syncMode(value: boolean | cdktf.IResolvable | undefined) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // v2_host - computed: false, optional: true, required: false
  private _v2Host?: string; 
  public get v2Host() {
    return this._v2Host;
  }
  public set v2Host(value: string | undefined) {
    this._v2Host = value;
  }
  public resetV2Host() {
    this._v2Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2HostInput() {
    return this._v2Host;
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
      access_key: cdktf.stringToTerraform(this._accessKey),
      account_admin_arn: cdktf.stringToTerraform(this._accountAdminArn),
      arn: cdktf.stringToTerraform(this._arn),
      gra_arn: cdktf.stringToTerraform(this._graArn),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      host: cdktf.stringToTerraform(this._host),
      json_config_file: cdktf.stringToTerraform(this._jsonConfigFile),
      lfa_arn: cdktf.stringToTerraform(this._lfaArn),
      logging: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logging),
      lra_arn: cdktf.stringToTerraform(this._lraArn),
      mp_region: cdktf.stringToTerraform(this._mpRegion),
      mp_region_host: cdktf.stringToTerraform(this._mpRegionHost),
      profile: cdktf.stringToTerraform(this._profile),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      skip_verify_certificate: cdktf.booleanToTerraform(this._skipVerifyCertificate),
      sync_mode: cdktf.booleanToTerraform(this._syncMode),
      timeout: cdktf.numberToTerraform(this._timeout),
      v2_host: cdktf.stringToTerraform(this._v2Host),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_admin_arn: {
        value: cdktf.stringToHclTerraform(this._accountAdminArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gra_arn: {
        value: cdktf.stringToHclTerraform(this._graArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_config_file: {
        value: cdktf.stringToHclTerraform(this._jsonConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lfa_arn: {
        value: cdktf.stringToHclTerraform(this._lfaArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logging),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lra_arn: {
        value: cdktf.stringToHclTerraform(this._lraArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mp_region: {
        value: cdktf.stringToHclTerraform(this._mpRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mp_region_host: {
        value: cdktf.stringToHclTerraform(this._mpRegionHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_verify_certificate: {
        value: cdktf.booleanToHclTerraform(this._skipVerifyCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_mode: {
        value: cdktf.booleanToHclTerraform(this._syncMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v2_host: {
        value: cdktf.stringToHclTerraform(this._v2Host),
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
