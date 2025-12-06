// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TanzuMissionControlProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#ca_cert TanzuMissionControlProvider#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#ca_file TanzuMissionControlProvider#ca_file}
  */
  readonly caFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#client_auth_cert TanzuMissionControlProvider#client_auth_cert}
  */
  readonly clientAuthCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#client_auth_cert_file TanzuMissionControlProvider#client_auth_cert_file}
  */
  readonly clientAuthCertFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#client_auth_key TanzuMissionControlProvider#client_auth_key}
  */
  readonly clientAuthKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#client_auth_key_file TanzuMissionControlProvider#client_auth_key_file}
  */
  readonly clientAuthKeyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#endpoint TanzuMissionControlProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#insecure_allow_unverified_ssl TanzuMissionControlProvider#insecure_allow_unverified_ssl}
  */
  readonly insecureAllowUnverifiedSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#project_id TanzuMissionControlProvider#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#vmw_cloud_api_token TanzuMissionControlProvider#vmw_cloud_api_token}
  */
  readonly vmwCloudApiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#vmw_cloud_endpoint TanzuMissionControlProvider#vmw_cloud_endpoint}
  */
  readonly vmwCloudEndpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#alias TanzuMissionControlProvider#alias}
  */
  readonly alias?: string;
  /**
  * self_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#self_managed TanzuMissionControlProvider#self_managed}
  */
  readonly selfManaged?: TanzuMissionControlProviderSelfManaged;
}
export interface TanzuMissionControlProviderSelfManaged {
  /**
  * URL of the OpenID Connect (OIDC) issuer configured with self-managed Taznu mission control instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#oidc_issuer TanzuMissionControlProvider#oidc_issuer}
  */
  readonly oidcIssuer?: string;
  /**
  * Password for the above mentioned Username field configured in the OIDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#password TanzuMissionControlProvider#password}
  */
  readonly password?: string;
  /**
  * Username configured in the OIDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#username TanzuMissionControlProvider#username}
  */
  readonly username?: string;
}

export function tanzuMissionControlProviderSelfManagedToTerraform(struct?: TanzuMissionControlProviderSelfManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc_issuer: cdktf.stringToTerraform(struct!.oidcIssuer),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function tanzuMissionControlProviderSelfManagedToHclTerraform(struct?: TanzuMissionControlProviderSelfManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc_issuer: {
      value: cdktf.stringToHclTerraform(struct!.oidcIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs tanzu-mission-control}
*/
export class TanzuMissionControlProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TanzuMissionControlProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TanzuMissionControlProvider to import
  * @param importFromId The id of the existing TanzuMissionControlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TanzuMissionControlProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs tanzu-mission-control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TanzuMissionControlProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TanzuMissionControlProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.10',
        providerVersionConstraint: '1.4.10'
      },
      terraformProviderSource: 'vmware/tanzu-mission-control'
    });
    this._caCert = config.caCert;
    this._caFile = config.caFile;
    this._clientAuthCert = config.clientAuthCert;
    this._clientAuthCertFile = config.clientAuthCertFile;
    this._clientAuthKey = config.clientAuthKey;
    this._clientAuthKeyFile = config.clientAuthKeyFile;
    this._endpoint = config.endpoint;
    this._insecureAllowUnverifiedSsl = config.insecureAllowUnverifiedSsl;
    this._projectId = config.projectId;
    this._vmwCloudApiToken = config.vmwCloudApiToken;
    this._vmwCloudEndpoint = config.vmwCloudEndpoint;
    this._alias = config.alias;
    this._selfManaged = config.selfManaged;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this._caCert;
  }
  public set caCert(value: string | undefined) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this._caFile;
  }
  public set caFile(value: string | undefined) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // client_auth_cert - computed: false, optional: true, required: false
  private _clientAuthCert?: string; 
  public get clientAuthCert() {
    return this._clientAuthCert;
  }
  public set clientAuthCert(value: string | undefined) {
    this._clientAuthCert = value;
  }
  public resetClientAuthCert() {
    this._clientAuthCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthCertInput() {
    return this._clientAuthCert;
  }

  // client_auth_cert_file - computed: false, optional: true, required: false
  private _clientAuthCertFile?: string; 
  public get clientAuthCertFile() {
    return this._clientAuthCertFile;
  }
  public set clientAuthCertFile(value: string | undefined) {
    this._clientAuthCertFile = value;
  }
  public resetClientAuthCertFile() {
    this._clientAuthCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthCertFileInput() {
    return this._clientAuthCertFile;
  }

  // client_auth_key - computed: false, optional: true, required: false
  private _clientAuthKey?: string; 
  public get clientAuthKey() {
    return this._clientAuthKey;
  }
  public set clientAuthKey(value: string | undefined) {
    this._clientAuthKey = value;
  }
  public resetClientAuthKey() {
    this._clientAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthKeyInput() {
    return this._clientAuthKey;
  }

  // client_auth_key_file - computed: false, optional: true, required: false
  private _clientAuthKeyFile?: string; 
  public get clientAuthKeyFile() {
    return this._clientAuthKeyFile;
  }
  public set clientAuthKeyFile(value: string | undefined) {
    this._clientAuthKeyFile = value;
  }
  public resetClientAuthKeyFile() {
    this._clientAuthKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthKeyFileInput() {
    return this._clientAuthKeyFile;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // insecure_allow_unverified_ssl - computed: false, optional: true, required: false
  private _insecureAllowUnverifiedSsl?: boolean | cdktf.IResolvable; 
  public get insecureAllowUnverifiedSsl() {
    return this._insecureAllowUnverifiedSsl;
  }
  public set insecureAllowUnverifiedSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureAllowUnverifiedSsl = value;
  }
  public resetInsecureAllowUnverifiedSsl() {
    this._insecureAllowUnverifiedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureAllowUnverifiedSslInput() {
    return this._insecureAllowUnverifiedSsl;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this._projectId;
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // vmw_cloud_api_token - computed: false, optional: true, required: false
  private _vmwCloudApiToken?: string; 
  public get vmwCloudApiToken() {
    return this._vmwCloudApiToken;
  }
  public set vmwCloudApiToken(value: string | undefined) {
    this._vmwCloudApiToken = value;
  }
  public resetVmwCloudApiToken() {
    this._vmwCloudApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwCloudApiTokenInput() {
    return this._vmwCloudApiToken;
  }

  // vmw_cloud_endpoint - computed: false, optional: true, required: false
  private _vmwCloudEndpoint?: string; 
  public get vmwCloudEndpoint() {
    return this._vmwCloudEndpoint;
  }
  public set vmwCloudEndpoint(value: string | undefined) {
    this._vmwCloudEndpoint = value;
  }
  public resetVmwCloudEndpoint() {
    this._vmwCloudEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwCloudEndpointInput() {
    return this._vmwCloudEndpoint;
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

  // self_managed - computed: false, optional: true, required: false
  private _selfManaged?: TanzuMissionControlProviderSelfManaged; 
  public get selfManaged() {
    return this._selfManaged;
  }
  public set selfManaged(value: TanzuMissionControlProviderSelfManaged | undefined) {
    this._selfManaged = value;
  }
  public resetSelfManaged() {
    this._selfManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedInput() {
    return this._selfManaged;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert: cdktf.stringToTerraform(this._caCert),
      ca_file: cdktf.stringToTerraform(this._caFile),
      client_auth_cert: cdktf.stringToTerraform(this._clientAuthCert),
      client_auth_cert_file: cdktf.stringToTerraform(this._clientAuthCertFile),
      client_auth_key: cdktf.stringToTerraform(this._clientAuthKey),
      client_auth_key_file: cdktf.stringToTerraform(this._clientAuthKeyFile),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      insecure_allow_unverified_ssl: cdktf.booleanToTerraform(this._insecureAllowUnverifiedSsl),
      project_id: cdktf.stringToTerraform(this._projectId),
      vmw_cloud_api_token: cdktf.stringToTerraform(this._vmwCloudApiToken),
      vmw_cloud_endpoint: cdktf.stringToTerraform(this._vmwCloudEndpoint),
      alias: cdktf.stringToTerraform(this._alias),
      self_managed: tanzuMissionControlProviderSelfManagedToTerraform(this._selfManaged),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_file: {
        value: cdktf.stringToHclTerraform(this._caFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_cert: {
        value: cdktf.stringToHclTerraform(this._clientAuthCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_cert_file: {
        value: cdktf.stringToHclTerraform(this._clientAuthCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_key: {
        value: cdktf.stringToHclTerraform(this._clientAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_auth_key_file: {
        value: cdktf.stringToHclTerraform(this._clientAuthKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_allow_unverified_ssl: {
        value: cdktf.booleanToHclTerraform(this._insecureAllowUnverifiedSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmw_cloud_api_token: {
        value: cdktf.stringToHclTerraform(this._vmwCloudApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmw_cloud_endpoint: {
        value: cdktf.stringToHclTerraform(this._vmwCloudEndpoint),
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
      self_managed: {
        value: tanzuMissionControlProviderSelfManagedToHclTerraform(this._selfManaged),
        isBlock: true,
        type: "list",
        storageClassType: "TanzuMissionControlProviderSelfManagedList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
