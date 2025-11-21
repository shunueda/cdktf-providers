// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesAuthAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Creating ClientId of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment#auto_create_client_id KubernetesAuthAttachment#auto_create_client_id}
  */
  readonly autoCreateClientId?: string[];
  /**
  * If set to `true`, the rbac rule will be created automatically which allow anonymous user to access '/.well-known/openid-configuration' and '/openid/v1/jwks'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment#auto_create_discovery_anonymous_auth KubernetesAuthAttachment#auto_create_discovery_anonymous_auth}
  */
  readonly autoCreateDiscoveryAnonymousAuth?: boolean | cdktf.IResolvable;
  /**
  * Creating an identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment#auto_create_oidc_config KubernetesAuthAttachment#auto_create_oidc_config}
  */
  readonly autoCreateOidcConfig?: boolean | cdktf.IResolvable;
  /**
  * Creating the PodIdentityWebhook component. if `auto_create_oidc_config` is true, this field must set true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment#auto_install_pod_identity_webhook_addon KubernetesAuthAttachment#auto_install_pod_identity_webhook_addon}
  */
  readonly autoInstallPodIdentityWebhookAddon?: boolean | cdktf.IResolvable;
  /**
  * ID of clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment#cluster_id KubernetesAuthAttachment#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment#id KubernetesAuthAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify service-account-issuer. If use_tke_default is set to `true`, please do not set this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment#issuer KubernetesAuthAttachment#issuer}
  */
  readonly issuer?: string;
  /**
  * Specify service-account-jwks-uri. If use_tke_default is set to `true`, please do not set this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment#jwks_uri KubernetesAuthAttachment#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * If set to `true`, the issuer and jwks_uri will be generated automatically by tke, please do not set issuer and jwks_uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment#use_tke_default KubernetesAuthAttachment#use_tke_default}
  */
  readonly useTkeDefault?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment tencentcloud_kubernetes_auth_attachment}
*/
export class KubernetesAuthAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_auth_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesAuthAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesAuthAttachment to import
  * @param importFromId The id of the existing KubernetesAuthAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesAuthAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_auth_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/kubernetes_auth_attachment tencentcloud_kubernetes_auth_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesAuthAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesAuthAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_auth_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateClientId = config.autoCreateClientId;
    this._autoCreateDiscoveryAnonymousAuth = config.autoCreateDiscoveryAnonymousAuth;
    this._autoCreateOidcConfig = config.autoCreateOidcConfig;
    this._autoInstallPodIdentityWebhookAddon = config.autoInstallPodIdentityWebhookAddon;
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._issuer = config.issuer;
    this._jwksUri = config.jwksUri;
    this._useTkeDefault = config.useTkeDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_client_id - computed: true, optional: true, required: false
  private _autoCreateClientId?: string[]; 
  public get autoCreateClientId() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_create_client_id'));
  }
  public set autoCreateClientId(value: string[]) {
    this._autoCreateClientId = value;
  }
  public resetAutoCreateClientId() {
    this._autoCreateClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateClientIdInput() {
    return this._autoCreateClientId;
  }

  // auto_create_discovery_anonymous_auth - computed: false, optional: true, required: false
  private _autoCreateDiscoveryAnonymousAuth?: boolean | cdktf.IResolvable; 
  public get autoCreateDiscoveryAnonymousAuth() {
    return this.getBooleanAttribute('auto_create_discovery_anonymous_auth');
  }
  public set autoCreateDiscoveryAnonymousAuth(value: boolean | cdktf.IResolvable) {
    this._autoCreateDiscoveryAnonymousAuth = value;
  }
  public resetAutoCreateDiscoveryAnonymousAuth() {
    this._autoCreateDiscoveryAnonymousAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateDiscoveryAnonymousAuthInput() {
    return this._autoCreateDiscoveryAnonymousAuth;
  }

  // auto_create_oidc_config - computed: true, optional: true, required: false
  private _autoCreateOidcConfig?: boolean | cdktf.IResolvable; 
  public get autoCreateOidcConfig() {
    return this.getBooleanAttribute('auto_create_oidc_config');
  }
  public set autoCreateOidcConfig(value: boolean | cdktf.IResolvable) {
    this._autoCreateOidcConfig = value;
  }
  public resetAutoCreateOidcConfig() {
    this._autoCreateOidcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateOidcConfigInput() {
    return this._autoCreateOidcConfig;
  }

  // auto_install_pod_identity_webhook_addon - computed: true, optional: true, required: false
  private _autoInstallPodIdentityWebhookAddon?: boolean | cdktf.IResolvable; 
  public get autoInstallPodIdentityWebhookAddon() {
    return this.getBooleanAttribute('auto_install_pod_identity_webhook_addon');
  }
  public set autoInstallPodIdentityWebhookAddon(value: boolean | cdktf.IResolvable) {
    this._autoInstallPodIdentityWebhookAddon = value;
  }
  public resetAutoInstallPodIdentityWebhookAddon() {
    this._autoInstallPodIdentityWebhookAddon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInstallPodIdentityWebhookAddonInput() {
    return this._autoInstallPodIdentityWebhookAddon;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // tke_default_issuer - computed: true, optional: false, required: false
  public get tkeDefaultIssuer() {
    return this.getStringAttribute('tke_default_issuer');
  }

  // tke_default_jwks_uri - computed: true, optional: false, required: false
  public get tkeDefaultJwksUri() {
    return this.getStringAttribute('tke_default_jwks_uri');
  }

  // use_tke_default - computed: false, optional: true, required: false
  private _useTkeDefault?: boolean | cdktf.IResolvable; 
  public get useTkeDefault() {
    return this.getBooleanAttribute('use_tke_default');
  }
  public set useTkeDefault(value: boolean | cdktf.IResolvable) {
    this._useTkeDefault = value;
  }
  public resetUseTkeDefault() {
    this._useTkeDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTkeDefaultInput() {
    return this._useTkeDefault;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_client_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoCreateClientId),
      auto_create_discovery_anonymous_auth: cdktf.booleanToTerraform(this._autoCreateDiscoveryAnonymousAuth),
      auto_create_oidc_config: cdktf.booleanToTerraform(this._autoCreateOidcConfig),
      auto_install_pod_identity_webhook_addon: cdktf.booleanToTerraform(this._autoInstallPodIdentityWebhookAddon),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      jwks_uri: cdktf.stringToTerraform(this._jwksUri),
      use_tke_default: cdktf.booleanToTerraform(this._useTkeDefault),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_client_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoCreateClientId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_create_discovery_anonymous_auth: {
        value: cdktf.booleanToHclTerraform(this._autoCreateDiscoveryAnonymousAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create_oidc_config: {
        value: cdktf.booleanToHclTerraform(this._autoCreateOidcConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_install_pod_identity_webhook_addon: {
        value: cdktf.booleanToHclTerraform(this._autoInstallPodIdentityWebhookAddon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_uri: {
        value: cdktf.stringToHclTerraform(this._jwksUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_tke_default: {
        value: cdktf.booleanToHclTerraform(this._useTkeDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
