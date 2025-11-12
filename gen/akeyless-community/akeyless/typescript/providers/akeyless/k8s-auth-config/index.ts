// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SAuthConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access ID of the Kubernetes auth method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#access_id K8SAuthConfig#access_id}
  */
  readonly accessId: string;
  /**
  * Cluster access type. options: [native_k8s, rancher]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#cluster_api_type K8SAuthConfig#cluster_api_type}
  */
  readonly clusterApiType?: string;
  /**
  * Disable issuer validation [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#disable_issuer_validation K8SAuthConfig#disable_issuer_validation}
  */
  readonly disableIssuerValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#id K8SAuthConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Native K8S auth type, [token/certificate]. (relevant for native_k8s only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#k8s_auth_type K8SAuthConfig#k8s_auth_type}
  */
  readonly k8SAuthType?: string;
  /**
  * The CA Certificate (base64 encoded) to use to call into the kubernetes API server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#k8s_ca_cert K8SAuthConfig#k8s_ca_cert}
  */
  readonly k8SCaCert?: string;
  /**
  * Content of the k8 client certificate (PEM format) in a Base64 format (relevant for native_k8s only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#k8s_client_certificate K8SAuthConfig#k8s_client_certificate}
  */
  readonly k8SClientCertificate?: string;
  /**
  * Content of the k8 client private key (PEM format) in a Base64 format (relevant for native_k8s only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#k8s_client_key K8SAuthConfig#k8s_client_key}
  */
  readonly k8SClientKey?: string;
  /**
  * The URL of the kubernetes API server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#k8s_host K8SAuthConfig#k8s_host}
  */
  readonly k8SHost?: string;
  /**
  * The Kubernetes JWT issuer name. If not set, this <kubernetes/serviceaccount> will be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#k8s_issuer K8SAuthConfig#k8s_issuer}
  */
  readonly k8SIssuer?: string;
  /**
  * K8S Auth config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#name K8SAuthConfig#name}
  */
  readonly name: string;
  /**
  * The api key used to access the TokenReview API to validate other JWTs (relevant for rancher only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#rancher_api_key K8SAuthConfig#rancher_api_key}
  */
  readonly rancherApiKey?: string;
  /**
  * The cluster id as define in rancher (relevant for rancher only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#rancher_cluster_id K8SAuthConfig#rancher_cluster_id}
  */
  readonly rancherClusterId?: string;
  /**
  * The private key (in base64 encoded of the PEM format) associated with the public key defined in the Kubernetes auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#signing_key K8SAuthConfig#signing_key}
  */
  readonly signingKey?: string;
  /**
  * Time in seconds of expiration of the Akeyless Kube Auth Method token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#token_exp K8SAuthConfig#token_exp}
  */
  readonly tokenExp?: number;
  /**
  * A Kubernetes service account JWT used to access the TokenReview API to validate other JWTs. If not set, the JWT submitted in the authentication process will be used to access the Kubernetes TokenReview API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#token_reviewer_jwt K8SAuthConfig#token_reviewer_jwt}
  */
  readonly tokenReviewerJwt?: string;
  /**
  * Use the GW's service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#use_local_ca_jwt K8SAuthConfig#use_local_ca_jwt}
  */
  readonly useLocalCaJwt?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config akeyless_k8s_auth_config}
*/
export class K8SAuthConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_k8s_auth_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SAuthConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SAuthConfig to import
  * @param importFromId The id of the existing K8SAuthConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SAuthConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_k8s_auth_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/k8s_auth_config akeyless_k8s_auth_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SAuthConfigConfig
  */
  public constructor(scope: Construct, id: string, config: K8SAuthConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_k8s_auth_config',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessId = config.accessId;
    this._clusterApiType = config.clusterApiType;
    this._disableIssuerValidation = config.disableIssuerValidation;
    this._id = config.id;
    this._k8SAuthType = config.k8SAuthType;
    this._k8SCaCert = config.k8SCaCert;
    this._k8SClientCertificate = config.k8SClientCertificate;
    this._k8SClientKey = config.k8SClientKey;
    this._k8SHost = config.k8SHost;
    this._k8SIssuer = config.k8SIssuer;
    this._name = config.name;
    this._rancherApiKey = config.rancherApiKey;
    this._rancherClusterId = config.rancherClusterId;
    this._signingKey = config.signingKey;
    this._tokenExp = config.tokenExp;
    this._tokenReviewerJwt = config.tokenReviewerJwt;
    this._useLocalCaJwt = config.useLocalCaJwt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // cluster_api_type - computed: false, optional: true, required: false
  private _clusterApiType?: string; 
  public get clusterApiType() {
    return this.getStringAttribute('cluster_api_type');
  }
  public set clusterApiType(value: string) {
    this._clusterApiType = value;
  }
  public resetClusterApiType() {
    this._clusterApiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterApiTypeInput() {
    return this._clusterApiType;
  }

  // disable_issuer_validation - computed: false, optional: true, required: false
  private _disableIssuerValidation?: string; 
  public get disableIssuerValidation() {
    return this.getStringAttribute('disable_issuer_validation');
  }
  public set disableIssuerValidation(value: string) {
    this._disableIssuerValidation = value;
  }
  public resetDisableIssuerValidation() {
    this._disableIssuerValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIssuerValidationInput() {
    return this._disableIssuerValidation;
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

  // k8s_auth_type - computed: false, optional: true, required: false
  private _k8SAuthType?: string; 
  public get k8SAuthType() {
    return this.getStringAttribute('k8s_auth_type');
  }
  public set k8SAuthType(value: string) {
    this._k8SAuthType = value;
  }
  public resetK8SAuthType() {
    this._k8SAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SAuthTypeInput() {
    return this._k8SAuthType;
  }

  // k8s_ca_cert - computed: false, optional: true, required: false
  private _k8SCaCert?: string; 
  public get k8SCaCert() {
    return this.getStringAttribute('k8s_ca_cert');
  }
  public set k8SCaCert(value: string) {
    this._k8SCaCert = value;
  }
  public resetK8SCaCert() {
    this._k8SCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SCaCertInput() {
    return this._k8SCaCert;
  }

  // k8s_client_certificate - computed: false, optional: true, required: false
  private _k8SClientCertificate?: string; 
  public get k8SClientCertificate() {
    return this.getStringAttribute('k8s_client_certificate');
  }
  public set k8SClientCertificate(value: string) {
    this._k8SClientCertificate = value;
  }
  public resetK8SClientCertificate() {
    this._k8SClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClientCertificateInput() {
    return this._k8SClientCertificate;
  }

  // k8s_client_key - computed: false, optional: true, required: false
  private _k8SClientKey?: string; 
  public get k8SClientKey() {
    return this.getStringAttribute('k8s_client_key');
  }
  public set k8SClientKey(value: string) {
    this._k8SClientKey = value;
  }
  public resetK8SClientKey() {
    this._k8SClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClientKeyInput() {
    return this._k8SClientKey;
  }

  // k8s_host - computed: false, optional: true, required: false
  private _k8SHost?: string; 
  public get k8SHost() {
    return this.getStringAttribute('k8s_host');
  }
  public set k8SHost(value: string) {
    this._k8SHost = value;
  }
  public resetK8SHost() {
    this._k8SHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SHostInput() {
    return this._k8SHost;
  }

  // k8s_issuer - computed: false, optional: true, required: false
  private _k8SIssuer?: string; 
  public get k8SIssuer() {
    return this.getStringAttribute('k8s_issuer');
  }
  public set k8SIssuer(value: string) {
    this._k8SIssuer = value;
  }
  public resetK8SIssuer() {
    this._k8SIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SIssuerInput() {
    return this._k8SIssuer;
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

  // rancher_api_key - computed: false, optional: true, required: false
  private _rancherApiKey?: string; 
  public get rancherApiKey() {
    return this.getStringAttribute('rancher_api_key');
  }
  public set rancherApiKey(value: string) {
    this._rancherApiKey = value;
  }
  public resetRancherApiKey() {
    this._rancherApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rancherApiKeyInput() {
    return this._rancherApiKey;
  }

  // rancher_cluster_id - computed: false, optional: true, required: false
  private _rancherClusterId?: string; 
  public get rancherClusterId() {
    return this.getStringAttribute('rancher_cluster_id');
  }
  public set rancherClusterId(value: string) {
    this._rancherClusterId = value;
  }
  public resetRancherClusterId() {
    this._rancherClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rancherClusterIdInput() {
    return this._rancherClusterId;
  }

  // signing_key - computed: false, optional: true, required: false
  private _signingKey?: string; 
  public get signingKey() {
    return this.getStringAttribute('signing_key');
  }
  public set signingKey(value: string) {
    this._signingKey = value;
  }
  public resetSigningKey() {
    this._signingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyInput() {
    return this._signingKey;
  }

  // token_exp - computed: false, optional: true, required: false
  private _tokenExp?: number; 
  public get tokenExp() {
    return this.getNumberAttribute('token_exp');
  }
  public set tokenExp(value: number) {
    this._tokenExp = value;
  }
  public resetTokenExp() {
    this._tokenExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExpInput() {
    return this._tokenExp;
  }

  // token_reviewer_jwt - computed: false, optional: true, required: false
  private _tokenReviewerJwt?: string; 
  public get tokenReviewerJwt() {
    return this.getStringAttribute('token_reviewer_jwt');
  }
  public set tokenReviewerJwt(value: string) {
    this._tokenReviewerJwt = value;
  }
  public resetTokenReviewerJwt() {
    this._tokenReviewerJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenReviewerJwtInput() {
    return this._tokenReviewerJwt;
  }

  // use_local_ca_jwt - computed: false, optional: true, required: false
  private _useLocalCaJwt?: boolean | cdktf.IResolvable; 
  public get useLocalCaJwt() {
    return this.getBooleanAttribute('use_local_ca_jwt');
  }
  public set useLocalCaJwt(value: boolean | cdktf.IResolvable) {
    this._useLocalCaJwt = value;
  }
  public resetUseLocalCaJwt() {
    this._useLocalCaJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocalCaJwtInput() {
    return this._useLocalCaJwt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_id: cdktf.stringToTerraform(this._accessId),
      cluster_api_type: cdktf.stringToTerraform(this._clusterApiType),
      disable_issuer_validation: cdktf.stringToTerraform(this._disableIssuerValidation),
      id: cdktf.stringToTerraform(this._id),
      k8s_auth_type: cdktf.stringToTerraform(this._k8SAuthType),
      k8s_ca_cert: cdktf.stringToTerraform(this._k8SCaCert),
      k8s_client_certificate: cdktf.stringToTerraform(this._k8SClientCertificate),
      k8s_client_key: cdktf.stringToTerraform(this._k8SClientKey),
      k8s_host: cdktf.stringToTerraform(this._k8SHost),
      k8s_issuer: cdktf.stringToTerraform(this._k8SIssuer),
      name: cdktf.stringToTerraform(this._name),
      rancher_api_key: cdktf.stringToTerraform(this._rancherApiKey),
      rancher_cluster_id: cdktf.stringToTerraform(this._rancherClusterId),
      signing_key: cdktf.stringToTerraform(this._signingKey),
      token_exp: cdktf.numberToTerraform(this._tokenExp),
      token_reviewer_jwt: cdktf.stringToTerraform(this._tokenReviewerJwt),
      use_local_ca_jwt: cdktf.booleanToTerraform(this._useLocalCaJwt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_id: {
        value: cdktf.stringToHclTerraform(this._accessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_api_type: {
        value: cdktf.stringToHclTerraform(this._clusterApiType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_issuer_validation: {
        value: cdktf.stringToHclTerraform(this._disableIssuerValidation),
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
      k8s_auth_type: {
        value: cdktf.stringToHclTerraform(this._k8SAuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_ca_cert: {
        value: cdktf.stringToHclTerraform(this._k8SCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_client_certificate: {
        value: cdktf.stringToHclTerraform(this._k8SClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_client_key: {
        value: cdktf.stringToHclTerraform(this._k8SClientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_host: {
        value: cdktf.stringToHclTerraform(this._k8SHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_issuer: {
        value: cdktf.stringToHclTerraform(this._k8SIssuer),
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
      rancher_api_key: {
        value: cdktf.stringToHclTerraform(this._rancherApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rancher_cluster_id: {
        value: cdktf.stringToHclTerraform(this._rancherClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_key: {
        value: cdktf.stringToHclTerraform(this._signingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_exp: {
        value: cdktf.numberToHclTerraform(this._tokenExp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_reviewer_jwt: {
        value: cdktf.stringToHclTerraform(this._tokenReviewerJwt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_local_ca_jwt: {
        value: cdktf.booleanToHclTerraform(this._useLocalCaJwt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
