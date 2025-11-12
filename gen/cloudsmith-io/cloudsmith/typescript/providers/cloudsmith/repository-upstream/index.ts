// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryUpstreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The X.509 Certificate (PEM encoded) to use for mTLS authentication against the upstream (Docker only). Use the file() function to read this from a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#auth_certificate RepositoryUpstream#auth_certificate}
  */
  readonly authCertificate?: string;
  /**
  * The Certificate private key (PEM encoded) to use for mTLS authentication against the upstream (Docker only). Use the file() function to read this from a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#auth_certificate_key RepositoryUpstream#auth_certificate_key}
  */
  readonly authCertificateKey?: string;
  /**
  * The authentication mode to use when accessing this upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#auth_mode RepositoryUpstream#auth_mode}
  */
  readonly authMode?: string;
  /**
  * Secret to provide with requests to upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#auth_secret RepositoryUpstream#auth_secret}
  */
  readonly authSecret?: string;
  /**
  * Username to provide with requests to upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#auth_username RepositoryUpstream#auth_username}
  */
  readonly authUsername?: string;
  /**
  * (deb only) The component to fetch from the upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#component RepositoryUpstream#component}
  */
  readonly component?: string;
  /**
  * (rpm only) The distribution version that packages found on this upstream will be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#distro_version RepositoryUpstream#distro_version}
  */
  readonly distroVersion?: string;
  /**
  * (deb only) The distribution versions that packages found on this upstream will be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#distro_versions RepositoryUpstream#distro_versions}
  */
  readonly distroVersions?: string[];
  /**
  * The key for extra header #1 to send to upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#extra_header_1 RepositoryUpstream#extra_header_1}
  */
  readonly extraHeader1?: string;
  /**
  * The key for extra header #2 to send to upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#extra_header_2 RepositoryUpstream#extra_header_2}
  */
  readonly extraHeader2?: string;
  /**
  * The value for extra header #1 to send to upstream. This is stored as plaintext, and is NOT encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#extra_value_1 RepositoryUpstream#extra_value_1}
  */
  readonly extraValue1?: string;
  /**
  * The value for extra header #2 to send to upstream. This is stored as plaintext, and is NOT encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#extra_value_2 RepositoryUpstream#extra_value_2}
  */
  readonly extraValue2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#id RepositoryUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (deb/rpm only) When true, source packages will be available from this upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#include_sources RepositoryUpstream#include_sources}
  */
  readonly includeSources?: boolean | cdktf.IResolvable;
  /**
  * Whether or not this upstream is active and ready for requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#is_active RepositoryUpstream#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * The mode that this upstream should operate in. Upstream sources can be used to proxy resolved packages, as well as operate in a proxy/cache or cache only mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#mode RepositoryUpstream#mode}
  */
  readonly mode?: string;
  /**
  * A descriptive name for this upstream source. A shortened version of this name will be used for tagging cached packages retrieved from this upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#name RepositoryUpstream#name}
  */
  readonly name: string;
  /**
  * The Organization to which the Upstream belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#namespace RepositoryUpstream#namespace}
  */
  readonly namespace: string;
  /**
  * Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#priority RepositoryUpstream#priority}
  */
  readonly priority?: number;
  /**
  * The Repository to which the Upstream belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#repository RepositoryUpstream#repository}
  */
  readonly repository: string;
  /**
  * (deb only) The distribution to fetch from the upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#upstream_distribution RepositoryUpstream#upstream_distribution}
  */
  readonly upstreamDistribution?: string;
  /**
  * The type of Upstream (docker, nuget, python, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#upstream_type RepositoryUpstream#upstream_type}
  */
  readonly upstreamType: string;
  /**
  * The URL for this upstream source. This must be a fully qualified URL including any path elements required to reach the root of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#upstream_url RepositoryUpstream#upstream_url}
  */
  readonly upstreamUrl: string;
  /**
  * If enabled, SSL certificates are verified when requests are made to this upstream. It's recommended to leave this enabled for all public sources to help mitigate Man-In-The-Middle (MITM) attacks. Please note this only applies to HTTPS upstreams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#verify_ssl RepositoryUpstream#verify_ssl}
  */
  readonly verifySsl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream cloudsmith_repository_upstream}
*/
export class RepositoryUpstream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_repository_upstream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryUpstream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryUpstream to import
  * @param importFromId The id of the existing RepositoryUpstream that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryUpstream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_repository_upstream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_upstream cloudsmith_repository_upstream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryUpstreamConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryUpstreamConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_repository_upstream',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.66',
        providerVersionConstraint: '0.0.66'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authCertificate = config.authCertificate;
    this._authCertificateKey = config.authCertificateKey;
    this._authMode = config.authMode;
    this._authSecret = config.authSecret;
    this._authUsername = config.authUsername;
    this._component = config.component;
    this._distroVersion = config.distroVersion;
    this._distroVersions = config.distroVersions;
    this._extraHeader1 = config.extraHeader1;
    this._extraHeader2 = config.extraHeader2;
    this._extraValue1 = config.extraValue1;
    this._extraValue2 = config.extraValue2;
    this._id = config.id;
    this._includeSources = config.includeSources;
    this._isActive = config.isActive;
    this._mode = config.mode;
    this._name = config.name;
    this._namespace = config.namespace;
    this._priority = config.priority;
    this._repository = config.repository;
    this._upstreamDistribution = config.upstreamDistribution;
    this._upstreamType = config.upstreamType;
    this._upstreamUrl = config.upstreamUrl;
    this._verifySsl = config.verifySsl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_certificate - computed: false, optional: true, required: false
  private _authCertificate?: string; 
  public get authCertificate() {
    return this.getStringAttribute('auth_certificate');
  }
  public set authCertificate(value: string) {
    this._authCertificate = value;
  }
  public resetAuthCertificate() {
    this._authCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCertificateInput() {
    return this._authCertificate;
  }

  // auth_certificate_key - computed: false, optional: true, required: false
  private _authCertificateKey?: string; 
  public get authCertificateKey() {
    return this.getStringAttribute('auth_certificate_key');
  }
  public set authCertificateKey(value: string) {
    this._authCertificateKey = value;
  }
  public resetAuthCertificateKey() {
    this._authCertificateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCertificateKeyInput() {
    return this._authCertificateKey;
  }

  // auth_mode - computed: true, optional: true, required: false
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  public resetAuthMode() {
    this._authMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // auth_secret - computed: false, optional: true, required: false
  private _authSecret?: string; 
  public get authSecret() {
    return this.getStringAttribute('auth_secret');
  }
  public set authSecret(value: string) {
    this._authSecret = value;
  }
  public resetAuthSecret() {
    this._authSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSecretInput() {
    return this._authSecret;
  }

  // auth_username - computed: false, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // component - computed: true, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // distro_version - computed: false, optional: true, required: false
  private _distroVersion?: string; 
  public get distroVersion() {
    return this.getStringAttribute('distro_version');
  }
  public set distroVersion(value: string) {
    this._distroVersion = value;
  }
  public resetDistroVersion() {
    this._distroVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distroVersionInput() {
    return this._distroVersion;
  }

  // distro_versions - computed: false, optional: true, required: false
  private _distroVersions?: string[]; 
  public get distroVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('distro_versions'));
  }
  public set distroVersions(value: string[]) {
    this._distroVersions = value;
  }
  public resetDistroVersions() {
    this._distroVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distroVersionsInput() {
    return this._distroVersions;
  }

  // extra_header_1 - computed: false, optional: true, required: false
  private _extraHeader1?: string; 
  public get extraHeader1() {
    return this.getStringAttribute('extra_header_1');
  }
  public set extraHeader1(value: string) {
    this._extraHeader1 = value;
  }
  public resetExtraHeader1() {
    this._extraHeader1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraHeader1Input() {
    return this._extraHeader1;
  }

  // extra_header_2 - computed: false, optional: true, required: false
  private _extraHeader2?: string; 
  public get extraHeader2() {
    return this.getStringAttribute('extra_header_2');
  }
  public set extraHeader2(value: string) {
    this._extraHeader2 = value;
  }
  public resetExtraHeader2() {
    this._extraHeader2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraHeader2Input() {
    return this._extraHeader2;
  }

  // extra_value_1 - computed: false, optional: true, required: false
  private _extraValue1?: string; 
  public get extraValue1() {
    return this.getStringAttribute('extra_value_1');
  }
  public set extraValue1(value: string) {
    this._extraValue1 = value;
  }
  public resetExtraValue1() {
    this._extraValue1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraValue1Input() {
    return this._extraValue1;
  }

  // extra_value_2 - computed: false, optional: true, required: false
  private _extraValue2?: string; 
  public get extraValue2() {
    return this.getStringAttribute('extra_value_2');
  }
  public set extraValue2(value: string) {
    this._extraValue2 = value;
  }
  public resetExtraValue2() {
    this._extraValue2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraValue2Input() {
    return this._extraValue2;
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

  // include_sources - computed: true, optional: true, required: false
  private _includeSources?: boolean | cdktf.IResolvable; 
  public get includeSources() {
    return this.getBooleanAttribute('include_sources');
  }
  public set includeSources(value: boolean | cdktf.IResolvable) {
    this._includeSources = value;
  }
  public resetIncludeSources() {
    this._includeSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSourcesInput() {
    return this._includeSources;
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // slug_perm - computed: true, optional: false, required: false
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // upstream_distribution - computed: false, optional: true, required: false
  private _upstreamDistribution?: string; 
  public get upstreamDistribution() {
    return this.getStringAttribute('upstream_distribution');
  }
  public set upstreamDistribution(value: string) {
    this._upstreamDistribution = value;
  }
  public resetUpstreamDistribution() {
    this._upstreamDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamDistributionInput() {
    return this._upstreamDistribution;
  }

  // upstream_type - computed: false, optional: false, required: true
  private _upstreamType?: string; 
  public get upstreamType() {
    return this.getStringAttribute('upstream_type');
  }
  public set upstreamType(value: string) {
    this._upstreamType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamTypeInput() {
    return this._upstreamType;
  }

  // upstream_url - computed: false, optional: false, required: true
  private _upstreamUrl?: string; 
  public get upstreamUrl() {
    return this.getStringAttribute('upstream_url');
  }
  public set upstreamUrl(value: string) {
    this._upstreamUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamUrlInput() {
    return this._upstreamUrl;
  }

  // verify_ssl - computed: true, optional: true, required: false
  private _verifySsl?: boolean | cdktf.IResolvable; 
  public get verifySsl() {
    return this.getBooleanAttribute('verify_ssl');
  }
  public set verifySsl(value: boolean | cdktf.IResolvable) {
    this._verifySsl = value;
  }
  public resetVerifySsl() {
    this._verifySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySslInput() {
    return this._verifySsl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_certificate: cdktf.stringToTerraform(this._authCertificate),
      auth_certificate_key: cdktf.stringToTerraform(this._authCertificateKey),
      auth_mode: cdktf.stringToTerraform(this._authMode),
      auth_secret: cdktf.stringToTerraform(this._authSecret),
      auth_username: cdktf.stringToTerraform(this._authUsername),
      component: cdktf.stringToTerraform(this._component),
      distro_version: cdktf.stringToTerraform(this._distroVersion),
      distro_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._distroVersions),
      extra_header_1: cdktf.stringToTerraform(this._extraHeader1),
      extra_header_2: cdktf.stringToTerraform(this._extraHeader2),
      extra_value_1: cdktf.stringToTerraform(this._extraValue1),
      extra_value_2: cdktf.stringToTerraform(this._extraValue2),
      id: cdktf.stringToTerraform(this._id),
      include_sources: cdktf.booleanToTerraform(this._includeSources),
      is_active: cdktf.booleanToTerraform(this._isActive),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      priority: cdktf.numberToTerraform(this._priority),
      repository: cdktf.stringToTerraform(this._repository),
      upstream_distribution: cdktf.stringToTerraform(this._upstreamDistribution),
      upstream_type: cdktf.stringToTerraform(this._upstreamType),
      upstream_url: cdktf.stringToTerraform(this._upstreamUrl),
      verify_ssl: cdktf.booleanToTerraform(this._verifySsl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_certificate: {
        value: cdktf.stringToHclTerraform(this._authCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_certificate_key: {
        value: cdktf.stringToHclTerraform(this._authCertificateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_mode: {
        value: cdktf.stringToHclTerraform(this._authMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_secret: {
        value: cdktf.stringToHclTerraform(this._authSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_username: {
        value: cdktf.stringToHclTerraform(this._authUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component: {
        value: cdktf.stringToHclTerraform(this._component),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distro_version: {
        value: cdktf.stringToHclTerraform(this._distroVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distro_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._distroVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extra_header_1: {
        value: cdktf.stringToHclTerraform(this._extraHeader1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_header_2: {
        value: cdktf.stringToHclTerraform(this._extraHeader2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_value_1: {
        value: cdktf.stringToHclTerraform(this._extraValue1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_value_2: {
        value: cdktf.stringToHclTerraform(this._extraValue2),
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
      include_sources: {
        value: cdktf.booleanToHclTerraform(this._includeSources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_distribution: {
        value: cdktf.stringToHclTerraform(this._upstreamDistribution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_type: {
        value: cdktf.stringToHclTerraform(this._upstreamType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_url: {
        value: cdktf.stringToHclTerraform(this._upstreamUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_ssl: {
        value: cdktf.booleanToHclTerraform(this._verifySsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
