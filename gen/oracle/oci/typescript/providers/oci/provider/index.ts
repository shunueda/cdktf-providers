// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OciProviderConfig {
  /**
  * (Optional) The type of auth to use. Options are 'ApiKey', 'SecurityToken', 'InstancePrincipal', 'ResourcePrincipal' and 'OKEWorkloadIdentity'. By default, 'ApiKey' will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#auth OciProvider#auth}
  */
  readonly auth?: string;
  /**
  * (Optional) The profile name to be used from config file, if not set it will be DEFAULT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#config_file_profile OciProvider#config_file_profile}
  */
  readonly configFileProfile?: string;
  /**
  * (Optional) Disable automatic retries for retriable errors.
  * Automatic retries were introduced to solve some eventual consistency problems but it also introduced performance issues on destroy operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#disable_auto_retries OciProvider#disable_auto_retries}
  */
  readonly disableAutoRetries?: boolean | cdktf.IResolvable;
  /**
  * (Optional) flags to enable Dual Stack endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#dual_stack_endpoint_enabled OciProvider#dual_stack_endpoint_enabled}
  */
  readonly dualStackEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Optional) The fingerprint for the user's RSA key. This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#fingerprint OciProvider#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * (Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#ignore_defined_tags OciProvider#ignore_defined_tags}
  */
  readonly ignoreDefinedTags?: string[];
  /**
  * (Optional) A PEM formatted RSA private key for the user.
  * A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#private_key OciProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * (Optional) The password used to secure the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#private_key_password OciProvider#private_key_password}
  */
  readonly privateKeyPassword?: string;
  /**
  * (Optional) The path to the user's PEM formatted private key.
  * A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#private_key_path OciProvider#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * (Optional) flags to enable realm specific service endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#realm_specific_service_endpoint_template_enabled OciProvider#realm_specific_service_endpoint_template_enabled}
  */
  readonly realmSpecificServiceEndpointTemplateEnabled?: boolean | cdktf.IResolvable;
  /**
  * (Required) The region for API connections (e.g. us-ashburn-1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#region OciProvider#region}
  */
  readonly region?: string;
  /**
  * (Optional) The minimum duration (in seconds) to retry a resource operation in response to an error.
  * The actual retry duration may be longer due to jittering of retry operations. This value is ignored if the `disable_auto_retries` field is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#retry_duration_seconds OciProvider#retry_duration_seconds}
  */
  readonly retryDurationSeconds?: number;
  /**
  * (Optional) The tenancy OCID for a user. The tenancy OCID can be found at the bottom of user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#tenancy_ocid OciProvider#tenancy_ocid}
  */
  readonly tenancyOcid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#test_time_maintenance_reboot_due OciProvider#test_time_maintenance_reboot_due}
  */
  readonly testTimeMaintenanceRebootDue?: string;
  /**
  * (Optional) The user OCID. This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#user_ocid OciProvider#user_ocid}
  */
  readonly userOcid?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#alias OciProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs oci}
*/
export class OciProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciProvider to import
  * @param importFromId The id of the existing OciProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs oci} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OciProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      terraformProviderSource: 'oracle/oci'
    });
    this._auth = config.auth;
    this._configFileProfile = config.configFileProfile;
    this._disableAutoRetries = config.disableAutoRetries;
    this._dualStackEndpointEnabled = config.dualStackEndpointEnabled;
    this._fingerprint = config.fingerprint;
    this._ignoreDefinedTags = config.ignoreDefinedTags;
    this._privateKey = config.privateKey;
    this._privateKeyPassword = config.privateKeyPassword;
    this._privateKeyPath = config.privateKeyPath;
    this._realmSpecificServiceEndpointTemplateEnabled = config.realmSpecificServiceEndpointTemplateEnabled;
    this._region = config.region;
    this._retryDurationSeconds = config.retryDurationSeconds;
    this._tenancyOcid = config.tenancyOcid;
    this._testTimeMaintenanceRebootDue = config.testTimeMaintenanceRebootDue;
    this._userOcid = config.userOcid;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this._auth;
  }
  public set auth(value: string | undefined) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // config_file_profile - computed: false, optional: true, required: false
  private _configFileProfile?: string; 
  public get configFileProfile() {
    return this._configFileProfile;
  }
  public set configFileProfile(value: string | undefined) {
    this._configFileProfile = value;
  }
  public resetConfigFileProfile() {
    this._configFileProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileProfileInput() {
    return this._configFileProfile;
  }

  // disable_auto_retries - computed: false, optional: true, required: false
  private _disableAutoRetries?: boolean | cdktf.IResolvable; 
  public get disableAutoRetries() {
    return this._disableAutoRetries;
  }
  public set disableAutoRetries(value: boolean | cdktf.IResolvable | undefined) {
    this._disableAutoRetries = value;
  }
  public resetDisableAutoRetries() {
    this._disableAutoRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoRetriesInput() {
    return this._disableAutoRetries;
  }

  // dual_stack_endpoint_enabled - computed: false, optional: true, required: false
  private _dualStackEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get dualStackEndpointEnabled() {
    return this._dualStackEndpointEnabled;
  }
  public set dualStackEndpointEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._dualStackEndpointEnabled = value;
  }
  public resetDualStackEndpointEnabled() {
    this._dualStackEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackEndpointEnabledInput() {
    return this._dualStackEndpointEnabled;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this._fingerprint;
  }
  public set fingerprint(value: string | undefined) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // ignore_defined_tags - computed: false, optional: true, required: false
  private _ignoreDefinedTags?: string[]; 
  public get ignoreDefinedTags() {
    return this._ignoreDefinedTags;
  }
  public set ignoreDefinedTags(value: string[] | undefined) {
    this._ignoreDefinedTags = value;
  }
  public resetIgnoreDefinedTags() {
    this._ignoreDefinedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDefinedTagsInput() {
    return this._ignoreDefinedTags;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_password - computed: false, optional: true, required: false
  private _privateKeyPassword?: string; 
  public get privateKeyPassword() {
    return this._privateKeyPassword;
  }
  public set privateKeyPassword(value: string | undefined) {
    this._privateKeyPassword = value;
  }
  public resetPrivateKeyPassword() {
    this._privateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPasswordInput() {
    return this._privateKeyPassword;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this._privateKeyPath;
  }
  public set privateKeyPath(value: string | undefined) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // realm_specific_service_endpoint_template_enabled - computed: false, optional: true, required: false
  private _realmSpecificServiceEndpointTemplateEnabled?: boolean | cdktf.IResolvable; 
  public get realmSpecificServiceEndpointTemplateEnabled() {
    return this._realmSpecificServiceEndpointTemplateEnabled;
  }
  public set realmSpecificServiceEndpointTemplateEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._realmSpecificServiceEndpointTemplateEnabled = value;
  }
  public resetRealmSpecificServiceEndpointTemplateEnabled() {
    this._realmSpecificServiceEndpointTemplateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmSpecificServiceEndpointTemplateEnabledInput() {
    return this._realmSpecificServiceEndpointTemplateEnabled;
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

  // retry_duration_seconds - computed: false, optional: true, required: false
  private _retryDurationSeconds?: number; 
  public get retryDurationSeconds() {
    return this._retryDurationSeconds;
  }
  public set retryDurationSeconds(value: number | undefined) {
    this._retryDurationSeconds = value;
  }
  public resetRetryDurationSeconds() {
    this._retryDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationSecondsInput() {
    return this._retryDurationSeconds;
  }

  // tenancy_ocid - computed: false, optional: true, required: false
  private _tenancyOcid?: string; 
  public get tenancyOcid() {
    return this._tenancyOcid;
  }
  public set tenancyOcid(value: string | undefined) {
    this._tenancyOcid = value;
  }
  public resetTenancyOcid() {
    this._tenancyOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyOcidInput() {
    return this._tenancyOcid;
  }

  // test_time_maintenance_reboot_due - computed: false, optional: true, required: false
  private _testTimeMaintenanceRebootDue?: string; 
  public get testTimeMaintenanceRebootDue() {
    return this._testTimeMaintenanceRebootDue;
  }
  public set testTimeMaintenanceRebootDue(value: string | undefined) {
    this._testTimeMaintenanceRebootDue = value;
  }
  public resetTestTimeMaintenanceRebootDue() {
    this._testTimeMaintenanceRebootDue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTimeMaintenanceRebootDueInput() {
    return this._testTimeMaintenanceRebootDue;
  }

  // user_ocid - computed: false, optional: true, required: false
  private _userOcid?: string; 
  public get userOcid() {
    return this._userOcid;
  }
  public set userOcid(value: string | undefined) {
    this._userOcid = value;
  }
  public resetUserOcid() {
    this._userOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userOcidInput() {
    return this._userOcid;
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
      auth: cdktf.stringToTerraform(this._auth),
      config_file_profile: cdktf.stringToTerraform(this._configFileProfile),
      disable_auto_retries: cdktf.booleanToTerraform(this._disableAutoRetries),
      dual_stack_endpoint_enabled: cdktf.booleanToTerraform(this._dualStackEndpointEnabled),
      fingerprint: cdktf.stringToTerraform(this._fingerprint),
      ignore_defined_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreDefinedTags),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_password: cdktf.stringToTerraform(this._privateKeyPassword),
      private_key_path: cdktf.stringToTerraform(this._privateKeyPath),
      realm_specific_service_endpoint_template_enabled: cdktf.booleanToTerraform(this._realmSpecificServiceEndpointTemplateEnabled),
      region: cdktf.stringToTerraform(this._region),
      retry_duration_seconds: cdktf.numberToTerraform(this._retryDurationSeconds),
      tenancy_ocid: cdktf.stringToTerraform(this._tenancyOcid),
      test_time_maintenance_reboot_due: cdktf.stringToTerraform(this._testTimeMaintenanceRebootDue),
      user_ocid: cdktf.stringToTerraform(this._userOcid),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file_profile: {
        value: cdktf.stringToHclTerraform(this._configFileProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_auto_retries: {
        value: cdktf.booleanToHclTerraform(this._disableAutoRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dual_stack_endpoint_enabled: {
        value: cdktf.booleanToHclTerraform(this._dualStackEndpointEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fingerprint: {
        value: cdktf.stringToHclTerraform(this._fingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_defined_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreDefinedTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_password: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_path: {
        value: cdktf.stringToHclTerraform(this._privateKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_specific_service_endpoint_template_enabled: {
        value: cdktf.booleanToHclTerraform(this._realmSpecificServiceEndpointTemplateEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_duration_seconds: {
        value: cdktf.numberToHclTerraform(this._retryDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenancy_ocid: {
        value: cdktf.stringToHclTerraform(this._tenancyOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_time_maintenance_reboot_due: {
        value: cdktf.stringToHclTerraform(this._testTimeMaintenanceRebootDue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ocid: {
        value: cdktf.stringToHclTerraform(this._userOcid),
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
