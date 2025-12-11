// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretK8SConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customize how temporary usernames are generated using go template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#custom_username_template DynamicSecretK8S#custom_username_template}
  */
  readonly customUsernameTemplate?: string;
  /**
  * Protection from accidental deletion of this item [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#delete_protection DynamicSecretK8S#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * Encrypt dynamic secret details with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#encryption_key_name DynamicSecretK8S#encryption_key_name}
  */
  readonly encryptionKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#id DynamicSecretK8S#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Comma-separated list of allowed K8S namespaces for the generated ServiceAccount (relevant only for k8s-service-account-type=dynamic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#k8s_allowed_namespaces DynamicSecretK8S#k8s_allowed_namespaces}
  */
  readonly k8SAllowedNamespaces?: string;
  /**
  * K8S Cluster certificate. Base 64 encoded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#k8s_cluster_ca_cert DynamicSecretK8S#k8s_cluster_ca_cert}
  */
  readonly k8SClusterCaCert?: string;
  /**
  * K8S Cluster endpoint. https:// , <DNS / IP> of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#k8s_cluster_endpoint DynamicSecretK8S#k8s_cluster_endpoint}
  */
  readonly k8SClusterEndpoint?: string;
  /**
  * K8S Cluster authentication token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#k8s_cluster_token DynamicSecretK8S#k8s_cluster_token}
  */
  readonly k8SClusterToken?: string;
  /**
  * K8S Namespace where the ServiceAccount exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#k8s_namespace DynamicSecretK8S#k8s_namespace}
  */
  readonly k8SNamespace?: string;
  /**
  * The pre-existing Role or ClusterRole name to bind the generated ServiceAccount to (relevant only for k8s-service-account-type=dynamic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#k8s_predefined_role_name DynamicSecretK8S#k8s_predefined_role_name}
  */
  readonly k8SPredefinedRoleName?: string;
  /**
  * Specifies the type of the pre-existing K8S role [Role, ClusterRole] (relevant only for k8s-service-account-type=dynamic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#k8s_predefined_role_type DynamicSecretK8S#k8s_predefined_role_type}
  */
  readonly k8SPredefinedRoleType?: string;
  /**
  * K8S ServiceAccount to extract token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#k8s_service_account DynamicSecretK8S#k8s_service_account}
  */
  readonly k8SServiceAccount?: string;
  /**
  * K8S ServiceAccount type [fixed, dynamic].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#k8s_service_account_type DynamicSecretK8S#k8s_service_account_type}
  */
  readonly k8SServiceAccountType?: string;
  /**
  * Dynamic secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#name DynamicSecretK8S#name}
  */
  readonly name: string;
  /**
  * Enable Port forwarding while using CLI access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#secure_access_allow_port_forwading DynamicSecretK8S#secure_access_allow_port_forwading}
  */
  readonly secureAccessAllowPortForwading?: boolean | cdktf.IResolvable;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#secure_access_bastion_issuer DynamicSecretK8S#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * The K8s cluster endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#secure_access_cluster_endpoint DynamicSecretK8S#secure_access_cluster_endpoint}
  */
  readonly secureAccessClusterEndpoint?: string;
  /**
  * The K8s dashboard url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#secure_access_dashboard_url DynamicSecretK8S#secure_access_dashboard_url}
  */
  readonly secureAccessDashboardUrl?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#secure_access_enable DynamicSecretK8S#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Enable Web Secure Remote Access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#secure_access_web DynamicSecretK8S#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * Secure browser via Akeyless Web Access Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#secure_access_web_browsing DynamicSecretK8S#secure_access_web_browsing}
  */
  readonly secureAccessWebBrowsing?: boolean | cdktf.IResolvable;
  /**
  * Web-Proxy via Akeyless Web Access Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#secure_access_web_proxy DynamicSecretK8S#secure_access_web_proxy}
  */
  readonly secureAccessWebProxy?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: --tag Tag1 --tag Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#tags DynamicSecretK8S#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in dynamic secret creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#target_name DynamicSecretK8S#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#user_ttl DynamicSecretK8S#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s akeyless_dynamic_secret_k8s}
*/
export class DynamicSecretK8S extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_dynamic_secret_k8s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretK8S resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretK8S to import
  * @param importFromId The id of the existing DynamicSecretK8S that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretK8S to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_dynamic_secret_k8s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_k8s akeyless_dynamic_secret_k8s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretK8SConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretK8SConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_dynamic_secret_k8s',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customUsernameTemplate = config.customUsernameTemplate;
    this._deleteProtection = config.deleteProtection;
    this._encryptionKeyName = config.encryptionKeyName;
    this._id = config.id;
    this._k8SAllowedNamespaces = config.k8SAllowedNamespaces;
    this._k8SClusterCaCert = config.k8SClusterCaCert;
    this._k8SClusterEndpoint = config.k8SClusterEndpoint;
    this._k8SClusterToken = config.k8SClusterToken;
    this._k8SNamespace = config.k8SNamespace;
    this._k8SPredefinedRoleName = config.k8SPredefinedRoleName;
    this._k8SPredefinedRoleType = config.k8SPredefinedRoleType;
    this._k8SServiceAccount = config.k8SServiceAccount;
    this._k8SServiceAccountType = config.k8SServiceAccountType;
    this._name = config.name;
    this._secureAccessAllowPortForwading = config.secureAccessAllowPortForwading;
    this._secureAccessBastionIssuer = config.secureAccessBastionIssuer;
    this._secureAccessClusterEndpoint = config.secureAccessClusterEndpoint;
    this._secureAccessDashboardUrl = config.secureAccessDashboardUrl;
    this._secureAccessEnable = config.secureAccessEnable;
    this._secureAccessWeb = config.secureAccessWeb;
    this._secureAccessWebBrowsing = config.secureAccessWebBrowsing;
    this._secureAccessWebProxy = config.secureAccessWebProxy;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_username_template - computed: false, optional: true, required: false
  private _customUsernameTemplate?: string; 
  public get customUsernameTemplate() {
    return this.getStringAttribute('custom_username_template');
  }
  public set customUsernameTemplate(value: string) {
    this._customUsernameTemplate = value;
  }
  public resetCustomUsernameTemplate() {
    this._customUsernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUsernameTemplateInput() {
    return this._customUsernameTemplate;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // encryption_key_name - computed: false, optional: true, required: false
  private _encryptionKeyName?: string; 
  public get encryptionKeyName() {
    return this.getStringAttribute('encryption_key_name');
  }
  public set encryptionKeyName(value: string) {
    this._encryptionKeyName = value;
  }
  public resetEncryptionKeyName() {
    this._encryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyNameInput() {
    return this._encryptionKeyName;
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

  // k8s_allowed_namespaces - computed: false, optional: true, required: false
  private _k8SAllowedNamespaces?: string; 
  public get k8SAllowedNamespaces() {
    return this.getStringAttribute('k8s_allowed_namespaces');
  }
  public set k8SAllowedNamespaces(value: string) {
    this._k8SAllowedNamespaces = value;
  }
  public resetK8SAllowedNamespaces() {
    this._k8SAllowedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SAllowedNamespacesInput() {
    return this._k8SAllowedNamespaces;
  }

  // k8s_cluster_ca_cert - computed: false, optional: true, required: false
  private _k8SClusterCaCert?: string; 
  public get k8SClusterCaCert() {
    return this.getStringAttribute('k8s_cluster_ca_cert');
  }
  public set k8SClusterCaCert(value: string) {
    this._k8SClusterCaCert = value;
  }
  public resetK8SClusterCaCert() {
    this._k8SClusterCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterCaCertInput() {
    return this._k8SClusterCaCert;
  }

  // k8s_cluster_endpoint - computed: false, optional: true, required: false
  private _k8SClusterEndpoint?: string; 
  public get k8SClusterEndpoint() {
    return this.getStringAttribute('k8s_cluster_endpoint');
  }
  public set k8SClusterEndpoint(value: string) {
    this._k8SClusterEndpoint = value;
  }
  public resetK8SClusterEndpoint() {
    this._k8SClusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterEndpointInput() {
    return this._k8SClusterEndpoint;
  }

  // k8s_cluster_token - computed: false, optional: true, required: false
  private _k8SClusterToken?: string; 
  public get k8SClusterToken() {
    return this.getStringAttribute('k8s_cluster_token');
  }
  public set k8SClusterToken(value: string) {
    this._k8SClusterToken = value;
  }
  public resetK8SClusterToken() {
    this._k8SClusterToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterTokenInput() {
    return this._k8SClusterToken;
  }

  // k8s_namespace - computed: false, optional: true, required: false
  private _k8SNamespace?: string; 
  public get k8SNamespace() {
    return this.getStringAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
  }

  // k8s_predefined_role_name - computed: false, optional: true, required: false
  private _k8SPredefinedRoleName?: string; 
  public get k8SPredefinedRoleName() {
    return this.getStringAttribute('k8s_predefined_role_name');
  }
  public set k8SPredefinedRoleName(value: string) {
    this._k8SPredefinedRoleName = value;
  }
  public resetK8SPredefinedRoleName() {
    this._k8SPredefinedRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SPredefinedRoleNameInput() {
    return this._k8SPredefinedRoleName;
  }

  // k8s_predefined_role_type - computed: false, optional: true, required: false
  private _k8SPredefinedRoleType?: string; 
  public get k8SPredefinedRoleType() {
    return this.getStringAttribute('k8s_predefined_role_type');
  }
  public set k8SPredefinedRoleType(value: string) {
    this._k8SPredefinedRoleType = value;
  }
  public resetK8SPredefinedRoleType() {
    this._k8SPredefinedRoleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SPredefinedRoleTypeInput() {
    return this._k8SPredefinedRoleType;
  }

  // k8s_service_account - computed: false, optional: true, required: false
  private _k8SServiceAccount?: string; 
  public get k8SServiceAccount() {
    return this.getStringAttribute('k8s_service_account');
  }
  public set k8SServiceAccount(value: string) {
    this._k8SServiceAccount = value;
  }
  public resetK8SServiceAccount() {
    this._k8SServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceAccountInput() {
    return this._k8SServiceAccount;
  }

  // k8s_service_account_type - computed: false, optional: true, required: false
  private _k8SServiceAccountType?: string; 
  public get k8SServiceAccountType() {
    return this.getStringAttribute('k8s_service_account_type');
  }
  public set k8SServiceAccountType(value: string) {
    this._k8SServiceAccountType = value;
  }
  public resetK8SServiceAccountType() {
    this._k8SServiceAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceAccountTypeInput() {
    return this._k8SServiceAccountType;
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

  // secure_access_allow_port_forwading - computed: false, optional: true, required: false
  private _secureAccessAllowPortForwading?: boolean | cdktf.IResolvable; 
  public get secureAccessAllowPortForwading() {
    return this.getBooleanAttribute('secure_access_allow_port_forwading');
  }
  public set secureAccessAllowPortForwading(value: boolean | cdktf.IResolvable) {
    this._secureAccessAllowPortForwading = value;
  }
  public resetSecureAccessAllowPortForwading() {
    this._secureAccessAllowPortForwading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessAllowPortForwadingInput() {
    return this._secureAccessAllowPortForwading;
  }

  // secure_access_bastion_issuer - computed: false, optional: true, required: false
  private _secureAccessBastionIssuer?: string; 
  public get secureAccessBastionIssuer() {
    return this.getStringAttribute('secure_access_bastion_issuer');
  }
  public set secureAccessBastionIssuer(value: string) {
    this._secureAccessBastionIssuer = value;
  }
  public resetSecureAccessBastionIssuer() {
    this._secureAccessBastionIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessBastionIssuerInput() {
    return this._secureAccessBastionIssuer;
  }

  // secure_access_cluster_endpoint - computed: false, optional: true, required: false
  private _secureAccessClusterEndpoint?: string; 
  public get secureAccessClusterEndpoint() {
    return this.getStringAttribute('secure_access_cluster_endpoint');
  }
  public set secureAccessClusterEndpoint(value: string) {
    this._secureAccessClusterEndpoint = value;
  }
  public resetSecureAccessClusterEndpoint() {
    this._secureAccessClusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessClusterEndpointInput() {
    return this._secureAccessClusterEndpoint;
  }

  // secure_access_dashboard_url - computed: false, optional: true, required: false
  private _secureAccessDashboardUrl?: string; 
  public get secureAccessDashboardUrl() {
    return this.getStringAttribute('secure_access_dashboard_url');
  }
  public set secureAccessDashboardUrl(value: string) {
    this._secureAccessDashboardUrl = value;
  }
  public resetSecureAccessDashboardUrl() {
    this._secureAccessDashboardUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessDashboardUrlInput() {
    return this._secureAccessDashboardUrl;
  }

  // secure_access_enable - computed: false, optional: true, required: false
  private _secureAccessEnable?: string; 
  public get secureAccessEnable() {
    return this.getStringAttribute('secure_access_enable');
  }
  public set secureAccessEnable(value: string) {
    this._secureAccessEnable = value;
  }
  public resetSecureAccessEnable() {
    this._secureAccessEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessEnableInput() {
    return this._secureAccessEnable;
  }

  // secure_access_web - computed: false, optional: true, required: false
  private _secureAccessWeb?: boolean | cdktf.IResolvable; 
  public get secureAccessWeb() {
    return this.getBooleanAttribute('secure_access_web');
  }
  public set secureAccessWeb(value: boolean | cdktf.IResolvable) {
    this._secureAccessWeb = value;
  }
  public resetSecureAccessWeb() {
    this._secureAccessWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebInput() {
    return this._secureAccessWeb;
  }

  // secure_access_web_browsing - computed: false, optional: true, required: false
  private _secureAccessWebBrowsing?: boolean | cdktf.IResolvable; 
  public get secureAccessWebBrowsing() {
    return this.getBooleanAttribute('secure_access_web_browsing');
  }
  public set secureAccessWebBrowsing(value: boolean | cdktf.IResolvable) {
    this._secureAccessWebBrowsing = value;
  }
  public resetSecureAccessWebBrowsing() {
    this._secureAccessWebBrowsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebBrowsingInput() {
    return this._secureAccessWebBrowsing;
  }

  // secure_access_web_proxy - computed: false, optional: true, required: false
  private _secureAccessWebProxy?: boolean | cdktf.IResolvable; 
  public get secureAccessWebProxy() {
    return this.getBooleanAttribute('secure_access_web_proxy');
  }
  public set secureAccessWebProxy(value: boolean | cdktf.IResolvable) {
    this._secureAccessWebProxy = value;
  }
  public resetSecureAccessWebProxy() {
    this._secureAccessWebProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebProxyInput() {
    return this._secureAccessWebProxy;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // user_ttl - computed: false, optional: true, required: false
  private _userTtl?: string; 
  public get userTtl() {
    return this.getStringAttribute('user_ttl');
  }
  public set userTtl(value: string) {
    this._userTtl = value;
  }
  public resetUserTtl() {
    this._userTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTtlInput() {
    return this._userTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_username_template: cdktf.stringToTerraform(this._customUsernameTemplate),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      encryption_key_name: cdktf.stringToTerraform(this._encryptionKeyName),
      id: cdktf.stringToTerraform(this._id),
      k8s_allowed_namespaces: cdktf.stringToTerraform(this._k8SAllowedNamespaces),
      k8s_cluster_ca_cert: cdktf.stringToTerraform(this._k8SClusterCaCert),
      k8s_cluster_endpoint: cdktf.stringToTerraform(this._k8SClusterEndpoint),
      k8s_cluster_token: cdktf.stringToTerraform(this._k8SClusterToken),
      k8s_namespace: cdktf.stringToTerraform(this._k8SNamespace),
      k8s_predefined_role_name: cdktf.stringToTerraform(this._k8SPredefinedRoleName),
      k8s_predefined_role_type: cdktf.stringToTerraform(this._k8SPredefinedRoleType),
      k8s_service_account: cdktf.stringToTerraform(this._k8SServiceAccount),
      k8s_service_account_type: cdktf.stringToTerraform(this._k8SServiceAccountType),
      name: cdktf.stringToTerraform(this._name),
      secure_access_allow_port_forwading: cdktf.booleanToTerraform(this._secureAccessAllowPortForwading),
      secure_access_bastion_issuer: cdktf.stringToTerraform(this._secureAccessBastionIssuer),
      secure_access_cluster_endpoint: cdktf.stringToTerraform(this._secureAccessClusterEndpoint),
      secure_access_dashboard_url: cdktf.stringToTerraform(this._secureAccessDashboardUrl),
      secure_access_enable: cdktf.stringToTerraform(this._secureAccessEnable),
      secure_access_web: cdktf.booleanToTerraform(this._secureAccessWeb),
      secure_access_web_browsing: cdktf.booleanToTerraform(this._secureAccessWebBrowsing),
      secure_access_web_proxy: cdktf.booleanToTerraform(this._secureAccessWebProxy),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_username_template: {
        value: cdktf.stringToHclTerraform(this._customUsernameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._encryptionKeyName),
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
      k8s_allowed_namespaces: {
        value: cdktf.stringToHclTerraform(this._k8SAllowedNamespaces),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_cluster_ca_cert: {
        value: cdktf.stringToHclTerraform(this._k8SClusterCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._k8SClusterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_cluster_token: {
        value: cdktf.stringToHclTerraform(this._k8SClusterToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_namespace: {
        value: cdktf.stringToHclTerraform(this._k8SNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_predefined_role_name: {
        value: cdktf.stringToHclTerraform(this._k8SPredefinedRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_predefined_role_type: {
        value: cdktf.stringToHclTerraform(this._k8SPredefinedRoleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_service_account: {
        value: cdktf.stringToHclTerraform(this._k8SServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_service_account_type: {
        value: cdktf.stringToHclTerraform(this._k8SServiceAccountType),
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
      secure_access_allow_port_forwading: {
        value: cdktf.booleanToHclTerraform(this._secureAccessAllowPortForwading),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_access_bastion_issuer: {
        value: cdktf.stringToHclTerraform(this._secureAccessBastionIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_cluster_endpoint: {
        value: cdktf.stringToHclTerraform(this._secureAccessClusterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_dashboard_url: {
        value: cdktf.stringToHclTerraform(this._secureAccessDashboardUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_enable: {
        value: cdktf.stringToHclTerraform(this._secureAccessEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_web: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_access_web_browsing: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWebBrowsing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_access_web_proxy: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWebProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ttl: {
        value: cdktf.stringToHclTerraform(this._userTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
