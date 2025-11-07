// https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FicProviderConfig {
  /**
  * The Identity authentication URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#auth_url FicProvider#auth_url}
  */
  readonly authUrl?: string;
  /**
  * A Custom CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#cacert_file FicProvider#cacert_file}
  */
  readonly cacertFile?: string;
  /**
  * A client certificate to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#cert FicProvider#cert}
  */
  readonly cert?: string;
  /**
  * An entry in a `clouds.yaml` file to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#cloud FicProvider#cloud}
  */
  readonly cloud?: string;
  /**
  * The name of the Domain ID to scope to if no other domain is specified. Defaults to `default` (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#default_domain FicProvider#default_domain}
  */
  readonly defaultDomain?: string;
  /**
  * The ID of the Domain to scope to (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#domain_id FicProvider#domain_id}
  */
  readonly domainId?: string;
  /**
  * The name of the Domain to scope to (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#domain_name FicProvider#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#endpoint_type FicProvider#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#force_sss_endpoint FicProvider#force_sss_endpoint}
  */
  readonly forceSssEndpoint?: string;
  /**
  * Trust self-signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#insecure FicProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * A client private key to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#key FicProvider#key}
  */
  readonly key?: string;
  /**
  * Password to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#password FicProvider#password}
  */
  readonly password?: string;
  /**
  * The ID of the domain where the project resides (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#project_domain_id FicProvider#project_domain_id}
  */
  readonly projectDomainId?: string;
  /**
  * The name of the domain where the project resides (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#project_domain_name FicProvider#project_domain_name}
  */
  readonly projectDomainName?: string;
  /**
  * The Flexible InterConnect region to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#region FicProvider#region}
  */
  readonly region?: string;
  /**
  * The ID of the Tenant (Identity v2) or Project (Identity v3)
  * to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#tenant_id FicProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The name of the Tenant (Identity v2) or Project (Identity v3)
  * to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#tenant_name FicProvider#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Authentication token to use as an alternative to username/password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#token FicProvider#token}
  */
  readonly token?: string;
  /**
  * The ID of the domain where the user resides (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#user_domain_id FicProvider#user_domain_id}
  */
  readonly userDomainId?: string;
  /**
  * The name of the domain where the user resides (Identity v3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#user_domain_name FicProvider#user_domain_name}
  */
  readonly userDomainName?: string;
  /**
  * Username to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#user_id FicProvider#user_id}
  */
  readonly userId?: string;
  /**
  * Username to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#user_name FicProvider#user_name}
  */
  readonly userName?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#alias FicProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs fic}
*/
export class FicProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FicProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FicProvider to import
  * @param importFromId The id of the existing FicProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FicProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs fic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FicProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FicProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fic',
      terraformGeneratorMetadata: {
        providerName: 'fic',
        providerVersion: '0.5.6'
      },
      terraformProviderSource: 'nttcom/fic'
    });
    this._authUrl = config.authUrl;
    this._cacertFile = config.cacertFile;
    this._cert = config.cert;
    this._cloud = config.cloud;
    this._defaultDomain = config.defaultDomain;
    this._domainId = config.domainId;
    this._domainName = config.domainName;
    this._endpointType = config.endpointType;
    this._forceSssEndpoint = config.forceSssEndpoint;
    this._insecure = config.insecure;
    this._key = config.key;
    this._password = config.password;
    this._projectDomainId = config.projectDomainId;
    this._projectDomainName = config.projectDomainName;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._tenantName = config.tenantName;
    this._token = config.token;
    this._userDomainId = config.userDomainId;
    this._userDomainName = config.userDomainName;
    this._userId = config.userId;
    this._userName = config.userName;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this._authUrl;
  }
  public set authUrl(value: string | undefined) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // cacert_file - computed: false, optional: true, required: false
  private _cacertFile?: string; 
  public get cacertFile() {
    return this._cacertFile;
  }
  public set cacertFile(value: string | undefined) {
    this._cacertFile = value;
  }
  public resetCacertFile() {
    this._cacertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertFileInput() {
    return this._cacertFile;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this._cert;
  }
  public set cert(value: string | undefined) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this._cloud;
  }
  public set cloud(value: string | undefined) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // default_domain - computed: false, optional: true, required: false
  private _defaultDomain?: string; 
  public get defaultDomain() {
    return this._defaultDomain;
  }
  public set defaultDomain(value: string | undefined) {
    this._defaultDomain = value;
  }
  public resetDefaultDomain() {
    this._defaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDomainInput() {
    return this._defaultDomain;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this._domainId;
  }
  public set domainId(value: string | undefined) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string | undefined) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this._endpointType;
  }
  public set endpointType(value: string | undefined) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // force_sss_endpoint - computed: false, optional: true, required: false
  private _forceSssEndpoint?: string; 
  public get forceSssEndpoint() {
    return this._forceSssEndpoint;
  }
  public set forceSssEndpoint(value: string | undefined) {
    this._forceSssEndpoint = value;
  }
  public resetForceSssEndpoint() {
    this._forceSssEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSssEndpointInput() {
    return this._forceSssEndpoint;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project_domain_id - computed: false, optional: true, required: false
  private _projectDomainId?: string; 
  public get projectDomainId() {
    return this._projectDomainId;
  }
  public set projectDomainId(value: string | undefined) {
    this._projectDomainId = value;
  }
  public resetProjectDomainId() {
    this._projectDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDomainIdInput() {
    return this._projectDomainId;
  }

  // project_domain_name - computed: false, optional: true, required: false
  private _projectDomainName?: string; 
  public get projectDomainName() {
    return this._projectDomainName;
  }
  public set projectDomainName(value: string | undefined) {
    this._projectDomainName = value;
  }
  public resetProjectDomainName() {
    this._projectDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDomainNameInput() {
    return this._projectDomainName;
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

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_name - computed: false, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this._tenantName;
  }
  public set tenantName(value: string | undefined) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // user_domain_id - computed: false, optional: true, required: false
  private _userDomainId?: string; 
  public get userDomainId() {
    return this._userDomainId;
  }
  public set userDomainId(value: string | undefined) {
    this._userDomainId = value;
  }
  public resetUserDomainId() {
    this._userDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainIdInput() {
    return this._userDomainId;
  }

  // user_domain_name - computed: false, optional: true, required: false
  private _userDomainName?: string; 
  public get userDomainName() {
    return this._userDomainName;
  }
  public set userDomainName(value: string | undefined) {
    this._userDomainName = value;
  }
  public resetUserDomainName() {
    this._userDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainNameInput() {
    return this._userDomainName;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this._userId;
  }
  public set userId(value: string | undefined) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this._userName;
  }
  public set userName(value: string | undefined) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
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
      auth_url: cdktf.stringToTerraform(this._authUrl),
      cacert_file: cdktf.stringToTerraform(this._cacertFile),
      cert: cdktf.stringToTerraform(this._cert),
      cloud: cdktf.stringToTerraform(this._cloud),
      default_domain: cdktf.stringToTerraform(this._defaultDomain),
      domain_id: cdktf.stringToTerraform(this._domainId),
      domain_name: cdktf.stringToTerraform(this._domainName),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      force_sss_endpoint: cdktf.stringToTerraform(this._forceSssEndpoint),
      insecure: cdktf.booleanToTerraform(this._insecure),
      key: cdktf.stringToTerraform(this._key),
      password: cdktf.stringToTerraform(this._password),
      project_domain_id: cdktf.stringToTerraform(this._projectDomainId),
      project_domain_name: cdktf.stringToTerraform(this._projectDomainName),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      token: cdktf.stringToTerraform(this._token),
      user_domain_id: cdktf.stringToTerraform(this._userDomainId),
      user_domain_name: cdktf.stringToTerraform(this._userDomainName),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_url: {
        value: cdktf.stringToHclTerraform(this._authUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacert_file: {
        value: cdktf.stringToHclTerraform(this._cacertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_domain: {
        value: cdktf.stringToHclTerraform(this._defaultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_sss_endpoint: {
        value: cdktf.stringToHclTerraform(this._forceSssEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      project_domain_id: {
        value: cdktf.stringToHclTerraform(this._projectDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_domain_name: {
        value: cdktf.stringToHclTerraform(this._projectDomainName),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_domain_id: {
        value: cdktf.stringToHclTerraform(this._userDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_domain_name: {
        value: cdktf.stringToHclTerraform(this._userDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
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
