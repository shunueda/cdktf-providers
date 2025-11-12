// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultWebApplicationExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Supported in PingDirectory product version 10.3.0.0+. Specifies the title of the console application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#application_title DefaultWebApplicationExtension#application_title}
  */
  readonly applicationTitle?: string;
  /**
  * Specifies the base context path that should be used by HTTP clients to reference content. The value must start with a forward slash and at least one additional character and must represent a valid HTTP context path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#base_context_path DefaultWebApplicationExtension#base_context_path}
  */
  readonly baseContextPath?: string;
  /**
  * Specifies the maximum complexity level for managed configuration elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#complexity DefaultWebApplicationExtension#complexity}
  */
  readonly complexity?: string;
  /**
  * Specifies the path to the deployment descriptor file when used with document-root-directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#deployment_descriptor_file DefaultWebApplicationExtension#deployment_descriptor_file}
  */
  readonly deploymentDescriptorFile?: string;
  /**
  * A description for this Web Application Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#description DefaultWebApplicationExtension#description}
  */
  readonly description?: string;
  /**
  * Specifies the path to the directory on the local filesystem containing the files to be served by this Web Application Extension. The path must exist, and it must be a directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#document_root_directory DefaultWebApplicationExtension#document_root_directory}
  */
  readonly documentRootDirectory?: string;
  /**
  * Specifies an initialization parameter to pass into the web application during startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#init_parameter DefaultWebApplicationExtension#init_parameter}
  */
  readonly initParameter?: string[];
  /**
  * The LDAP URL used to connect to the managed server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#ldap_server DefaultWebApplicationExtension#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * The path to the log file for the web application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#log_file DefaultWebApplicationExtension#log_file}
  */
  readonly logFile?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#name DefaultWebApplicationExtension#name}
  */
  readonly name: string;
  /**
  * The client ID to use when authenticating to the OpenID Connect provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#oidc_client_id DefaultWebApplicationExtension#oidc_client_id}
  */
  readonly oidcClientId?: string;
  /**
  * The client secret to use when authenticating to the OpenID Connect provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#oidc_client_secret DefaultWebApplicationExtension#oidc_client_secret}
  */
  readonly oidcClientSecret?: string;
  /**
  * A passphrase provider that may be used to obtain the client secret to use when authenticating to the OpenID Connect provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#oidc_client_secret_passphrase_provider DefaultWebApplicationExtension#oidc_client_secret_passphrase_provider}
  */
  readonly oidcClientSecretPassphraseProvider?: string;
  /**
  * The issuer URL of the OpenID Connect provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#oidc_issuer_url DefaultWebApplicationExtension#oidc_issuer_url}
  */
  readonly oidcIssuerUrl?: string;
  /**
  * Controls whether or not hostname verification is performed, which checks if the hostname of the OIDC provider matches the name(s) stored inside the certificate it provides. This property should only be set to false for testing purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#oidc_strict_hostname_verification DefaultWebApplicationExtension#oidc_strict_hostname_verification}
  */
  readonly oidcStrictHostnameVerification?: boolean | cdktf.IResolvable;
  /**
  * Controls whether or not this application will always trust any certificate that is presented to it, regardless of its contents. This property should only be set to true for testing purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#oidc_trust_all DefaultWebApplicationExtension#oidc_trust_all}
  */
  readonly oidcTrustAll?: boolean | cdktf.IResolvable;
  /**
  * Specifies the path to the truststore file used by this application to evaluate OIDC provider certificates. If this field is left blank, the default JVM trust store will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#oidc_trust_store_file DefaultWebApplicationExtension#oidc_trust_store_file}
  */
  readonly oidcTrustStoreFile?: string;
  /**
  * The passphrase provider that may be used to obtain the PIN for the trust store used with OIDC providers. This is only required if a trust store file is required, and if that trust store requires a PIN to access its contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#oidc_trust_store_pin_passphrase_provider DefaultWebApplicationExtension#oidc_trust_store_pin_passphrase_provider}
  */
  readonly oidcTrustStorePinPassphraseProvider?: string;
  /**
  * Specifies the format for the data in the OIDC trust store file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#oidc_trust_store_type DefaultWebApplicationExtension#oidc_trust_store_type}
  */
  readonly oidcTrustStoreType?: string;
  /**
  * Indicates that SSO login into the Administrative Console is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#sso_enabled DefaultWebApplicationExtension#sso_enabled}
  */
  readonly ssoEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the path to the directory that may be used to store temporary files such as extracted WAR files and compiled JSP files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#temporary_directory DefaultWebApplicationExtension#temporary_directory}
  */
  readonly temporaryDirectory?: string;
  /**
  * Specifies the path to the truststore file, which is used by this application to establish trust of managed servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#trust_store_file DefaultWebApplicationExtension#trust_store_file}
  */
  readonly trustStoreFile?: string;
  /**
  * The passphrase provider that may be used to obtain the PIN for the trust store used with managed LDAP servers. This is only required if a trust store file is required, and if that trust store requires a PIN to access its contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#trust_store_pin_passphrase_provider DefaultWebApplicationExtension#trust_store_pin_passphrase_provider}
  */
  readonly trustStorePinPassphraseProvider?: string;
  /**
  * Specifies the format for the data in the trust store file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#trust_store_type DefaultWebApplicationExtension#trust_store_type}
  */
  readonly trustStoreType?: string;
  /**
  * Specifies the path to a standard web application archive (WAR) file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#war_file DefaultWebApplicationExtension#war_file}
  */
  readonly warFile?: string;
}
export interface DefaultWebApplicationExtensionRequiredActions {
}

export function defaultWebApplicationExtensionRequiredActionsToTerraform(struct?: DefaultWebApplicationExtensionRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultWebApplicationExtensionRequiredActionsToHclTerraform(struct?: DefaultWebApplicationExtensionRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultWebApplicationExtensionRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultWebApplicationExtensionRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultWebApplicationExtensionRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultWebApplicationExtensionRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultWebApplicationExtensionRequiredActionsOutputReference {
    return new DefaultWebApplicationExtensionRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension pingdirectory_default_web_application_extension}
*/
export class DefaultWebApplicationExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_web_application_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultWebApplicationExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultWebApplicationExtension to import
  * @param importFromId The id of the existing DefaultWebApplicationExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultWebApplicationExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_web_application_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_web_application_extension pingdirectory_default_web_application_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultWebApplicationExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultWebApplicationExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_web_application_extension',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationTitle = config.applicationTitle;
    this._baseContextPath = config.baseContextPath;
    this._complexity = config.complexity;
    this._deploymentDescriptorFile = config.deploymentDescriptorFile;
    this._description = config.description;
    this._documentRootDirectory = config.documentRootDirectory;
    this._initParameter = config.initParameter;
    this._ldapServer = config.ldapServer;
    this._logFile = config.logFile;
    this._name = config.name;
    this._oidcClientId = config.oidcClientId;
    this._oidcClientSecret = config.oidcClientSecret;
    this._oidcClientSecretPassphraseProvider = config.oidcClientSecretPassphraseProvider;
    this._oidcIssuerUrl = config.oidcIssuerUrl;
    this._oidcStrictHostnameVerification = config.oidcStrictHostnameVerification;
    this._oidcTrustAll = config.oidcTrustAll;
    this._oidcTrustStoreFile = config.oidcTrustStoreFile;
    this._oidcTrustStorePinPassphraseProvider = config.oidcTrustStorePinPassphraseProvider;
    this._oidcTrustStoreType = config.oidcTrustStoreType;
    this._ssoEnabled = config.ssoEnabled;
    this._temporaryDirectory = config.temporaryDirectory;
    this._trustStoreFile = config.trustStoreFile;
    this._trustStorePinPassphraseProvider = config.trustStorePinPassphraseProvider;
    this._trustStoreType = config.trustStoreType;
    this._warFile = config.warFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_title - computed: true, optional: true, required: false
  private _applicationTitle?: string; 
  public get applicationTitle() {
    return this.getStringAttribute('application_title');
  }
  public set applicationTitle(value: string) {
    this._applicationTitle = value;
  }
  public resetApplicationTitle() {
    this._applicationTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTitleInput() {
    return this._applicationTitle;
  }

  // base_context_path - computed: true, optional: true, required: false
  private _baseContextPath?: string; 
  public get baseContextPath() {
    return this.getStringAttribute('base_context_path');
  }
  public set baseContextPath(value: string) {
    this._baseContextPath = value;
  }
  public resetBaseContextPath() {
    this._baseContextPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseContextPathInput() {
    return this._baseContextPath;
  }

  // complexity - computed: true, optional: true, required: false
  private _complexity?: string; 
  public get complexity() {
    return this.getStringAttribute('complexity');
  }
  public set complexity(value: string) {
    this._complexity = value;
  }
  public resetComplexity() {
    this._complexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity;
  }

  // deployment_descriptor_file - computed: true, optional: true, required: false
  private _deploymentDescriptorFile?: string; 
  public get deploymentDescriptorFile() {
    return this.getStringAttribute('deployment_descriptor_file');
  }
  public set deploymentDescriptorFile(value: string) {
    this._deploymentDescriptorFile = value;
  }
  public resetDeploymentDescriptorFile() {
    this._deploymentDescriptorFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentDescriptorFileInput() {
    return this._deploymentDescriptorFile;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // document_root_directory - computed: true, optional: true, required: false
  private _documentRootDirectory?: string; 
  public get documentRootDirectory() {
    return this.getStringAttribute('document_root_directory');
  }
  public set documentRootDirectory(value: string) {
    this._documentRootDirectory = value;
  }
  public resetDocumentRootDirectory() {
    this._documentRootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentRootDirectoryInput() {
    return this._documentRootDirectory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // init_parameter - computed: true, optional: true, required: false
  private _initParameter?: string[]; 
  public get initParameter() {
    return cdktf.Fn.tolist(this.getListAttribute('init_parameter'));
  }
  public set initParameter(value: string[]) {
    this._initParameter = value;
  }
  public resetInitParameter() {
    this._initParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initParameterInput() {
    return this._initParameter;
  }

  // ldap_server - computed: true, optional: true, required: false
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  public resetLdapServer() {
    this._ldapServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
  }

  // log_file - computed: true, optional: true, required: false
  private _logFile?: string; 
  public get logFile() {
    return this.getStringAttribute('log_file');
  }
  public set logFile(value: string) {
    this._logFile = value;
  }
  public resetLogFile() {
    this._logFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileInput() {
    return this._logFile;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // oidc_client_id - computed: true, optional: true, required: false
  private _oidcClientId?: string; 
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }
  public set oidcClientId(value: string) {
    this._oidcClientId = value;
  }
  public resetOidcClientId() {
    this._oidcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientIdInput() {
    return this._oidcClientId;
  }

  // oidc_client_secret - computed: true, optional: true, required: false
  private _oidcClientSecret?: string; 
  public get oidcClientSecret() {
    return this.getStringAttribute('oidc_client_secret');
  }
  public set oidcClientSecret(value: string) {
    this._oidcClientSecret = value;
  }
  public resetOidcClientSecret() {
    this._oidcClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientSecretInput() {
    return this._oidcClientSecret;
  }

  // oidc_client_secret_passphrase_provider - computed: true, optional: true, required: false
  private _oidcClientSecretPassphraseProvider?: string; 
  public get oidcClientSecretPassphraseProvider() {
    return this.getStringAttribute('oidc_client_secret_passphrase_provider');
  }
  public set oidcClientSecretPassphraseProvider(value: string) {
    this._oidcClientSecretPassphraseProvider = value;
  }
  public resetOidcClientSecretPassphraseProvider() {
    this._oidcClientSecretPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientSecretPassphraseProviderInput() {
    return this._oidcClientSecretPassphraseProvider;
  }

  // oidc_issuer_url - computed: true, optional: true, required: false
  private _oidcIssuerUrl?: string; 
  public get oidcIssuerUrl() {
    return this.getStringAttribute('oidc_issuer_url');
  }
  public set oidcIssuerUrl(value: string) {
    this._oidcIssuerUrl = value;
  }
  public resetOidcIssuerUrl() {
    this._oidcIssuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcIssuerUrlInput() {
    return this._oidcIssuerUrl;
  }

  // oidc_strict_hostname_verification - computed: true, optional: true, required: false
  private _oidcStrictHostnameVerification?: boolean | cdktf.IResolvable; 
  public get oidcStrictHostnameVerification() {
    return this.getBooleanAttribute('oidc_strict_hostname_verification');
  }
  public set oidcStrictHostnameVerification(value: boolean | cdktf.IResolvable) {
    this._oidcStrictHostnameVerification = value;
  }
  public resetOidcStrictHostnameVerification() {
    this._oidcStrictHostnameVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcStrictHostnameVerificationInput() {
    return this._oidcStrictHostnameVerification;
  }

  // oidc_trust_all - computed: true, optional: true, required: false
  private _oidcTrustAll?: boolean | cdktf.IResolvable; 
  public get oidcTrustAll() {
    return this.getBooleanAttribute('oidc_trust_all');
  }
  public set oidcTrustAll(value: boolean | cdktf.IResolvable) {
    this._oidcTrustAll = value;
  }
  public resetOidcTrustAll() {
    this._oidcTrustAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTrustAllInput() {
    return this._oidcTrustAll;
  }

  // oidc_trust_store_file - computed: true, optional: true, required: false
  private _oidcTrustStoreFile?: string; 
  public get oidcTrustStoreFile() {
    return this.getStringAttribute('oidc_trust_store_file');
  }
  public set oidcTrustStoreFile(value: string) {
    this._oidcTrustStoreFile = value;
  }
  public resetOidcTrustStoreFile() {
    this._oidcTrustStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTrustStoreFileInput() {
    return this._oidcTrustStoreFile;
  }

  // oidc_trust_store_pin_passphrase_provider - computed: true, optional: true, required: false
  private _oidcTrustStorePinPassphraseProvider?: string; 
  public get oidcTrustStorePinPassphraseProvider() {
    return this.getStringAttribute('oidc_trust_store_pin_passphrase_provider');
  }
  public set oidcTrustStorePinPassphraseProvider(value: string) {
    this._oidcTrustStorePinPassphraseProvider = value;
  }
  public resetOidcTrustStorePinPassphraseProvider() {
    this._oidcTrustStorePinPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTrustStorePinPassphraseProviderInput() {
    return this._oidcTrustStorePinPassphraseProvider;
  }

  // oidc_trust_store_type - computed: true, optional: true, required: false
  private _oidcTrustStoreType?: string; 
  public get oidcTrustStoreType() {
    return this.getStringAttribute('oidc_trust_store_type');
  }
  public set oidcTrustStoreType(value: string) {
    this._oidcTrustStoreType = value;
  }
  public resetOidcTrustStoreType() {
    this._oidcTrustStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTrustStoreTypeInput() {
    return this._oidcTrustStoreType;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultWebApplicationExtensionRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // sso_enabled - computed: true, optional: true, required: false
  private _ssoEnabled?: boolean | cdktf.IResolvable; 
  public get ssoEnabled() {
    return this.getBooleanAttribute('sso_enabled');
  }
  public set ssoEnabled(value: boolean | cdktf.IResolvable) {
    this._ssoEnabled = value;
  }
  public resetSsoEnabled() {
    this._ssoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoEnabledInput() {
    return this._ssoEnabled;
  }

  // temporary_directory - computed: true, optional: true, required: false
  private _temporaryDirectory?: string; 
  public get temporaryDirectory() {
    return this.getStringAttribute('temporary_directory');
  }
  public set temporaryDirectory(value: string) {
    this._temporaryDirectory = value;
  }
  public resetTemporaryDirectory() {
    this._temporaryDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryDirectoryInput() {
    return this._temporaryDirectory;
  }

  // trust_store_file - computed: true, optional: true, required: false
  private _trustStoreFile?: string; 
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }
  public set trustStoreFile(value: string) {
    this._trustStoreFile = value;
  }
  public resetTrustStoreFile() {
    this._trustStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreFileInput() {
    return this._trustStoreFile;
  }

  // trust_store_pin_passphrase_provider - computed: true, optional: true, required: false
  private _trustStorePinPassphraseProvider?: string; 
  public get trustStorePinPassphraseProvider() {
    return this.getStringAttribute('trust_store_pin_passphrase_provider');
  }
  public set trustStorePinPassphraseProvider(value: string) {
    this._trustStorePinPassphraseProvider = value;
  }
  public resetTrustStorePinPassphraseProvider() {
    this._trustStorePinPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePinPassphraseProviderInput() {
    return this._trustStorePinPassphraseProvider;
  }

  // trust_store_type - computed: true, optional: true, required: false
  private _trustStoreType?: string; 
  public get trustStoreType() {
    return this.getStringAttribute('trust_store_type');
  }
  public set trustStoreType(value: string) {
    this._trustStoreType = value;
  }
  public resetTrustStoreType() {
    this._trustStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreTypeInput() {
    return this._trustStoreType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // war_file - computed: true, optional: true, required: false
  private _warFile?: string; 
  public get warFile() {
    return this.getStringAttribute('war_file');
  }
  public set warFile(value: string) {
    this._warFile = value;
  }
  public resetWarFile() {
    this._warFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warFileInput() {
    return this._warFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_title: cdktf.stringToTerraform(this._applicationTitle),
      base_context_path: cdktf.stringToTerraform(this._baseContextPath),
      complexity: cdktf.stringToTerraform(this._complexity),
      deployment_descriptor_file: cdktf.stringToTerraform(this._deploymentDescriptorFile),
      description: cdktf.stringToTerraform(this._description),
      document_root_directory: cdktf.stringToTerraform(this._documentRootDirectory),
      init_parameter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._initParameter),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      log_file: cdktf.stringToTerraform(this._logFile),
      name: cdktf.stringToTerraform(this._name),
      oidc_client_id: cdktf.stringToTerraform(this._oidcClientId),
      oidc_client_secret: cdktf.stringToTerraform(this._oidcClientSecret),
      oidc_client_secret_passphrase_provider: cdktf.stringToTerraform(this._oidcClientSecretPassphraseProvider),
      oidc_issuer_url: cdktf.stringToTerraform(this._oidcIssuerUrl),
      oidc_strict_hostname_verification: cdktf.booleanToTerraform(this._oidcStrictHostnameVerification),
      oidc_trust_all: cdktf.booleanToTerraform(this._oidcTrustAll),
      oidc_trust_store_file: cdktf.stringToTerraform(this._oidcTrustStoreFile),
      oidc_trust_store_pin_passphrase_provider: cdktf.stringToTerraform(this._oidcTrustStorePinPassphraseProvider),
      oidc_trust_store_type: cdktf.stringToTerraform(this._oidcTrustStoreType),
      sso_enabled: cdktf.booleanToTerraform(this._ssoEnabled),
      temporary_directory: cdktf.stringToTerraform(this._temporaryDirectory),
      trust_store_file: cdktf.stringToTerraform(this._trustStoreFile),
      trust_store_pin_passphrase_provider: cdktf.stringToTerraform(this._trustStorePinPassphraseProvider),
      trust_store_type: cdktf.stringToTerraform(this._trustStoreType),
      war_file: cdktf.stringToTerraform(this._warFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_title: {
        value: cdktf.stringToHclTerraform(this._applicationTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_context_path: {
        value: cdktf.stringToHclTerraform(this._baseContextPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      complexity: {
        value: cdktf.stringToHclTerraform(this._complexity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_descriptor_file: {
        value: cdktf.stringToHclTerraform(this._deploymentDescriptorFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_root_directory: {
        value: cdktf.stringToHclTerraform(this._documentRootDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init_parameter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._initParameter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_file: {
        value: cdktf.stringToHclTerraform(this._logFile),
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
      oidc_client_id: {
        value: cdktf.stringToHclTerraform(this._oidcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_secret: {
        value: cdktf.stringToHclTerraform(this._oidcClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_secret_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._oidcClientSecretPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_issuer_url: {
        value: cdktf.stringToHclTerraform(this._oidcIssuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_strict_hostname_verification: {
        value: cdktf.booleanToHclTerraform(this._oidcStrictHostnameVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_trust_all: {
        value: cdktf.booleanToHclTerraform(this._oidcTrustAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_trust_store_file: {
        value: cdktf.stringToHclTerraform(this._oidcTrustStoreFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_trust_store_pin_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._oidcTrustStorePinPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_trust_store_type: {
        value: cdktf.stringToHclTerraform(this._oidcTrustStoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_enabled: {
        value: cdktf.booleanToHclTerraform(this._ssoEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      temporary_directory: {
        value: cdktf.stringToHclTerraform(this._temporaryDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_file: {
        value: cdktf.stringToHclTerraform(this._trustStoreFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_pin_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._trustStorePinPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_type: {
        value: cdktf.stringToHclTerraform(this._trustStoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      war_file: {
        value: cdktf.stringToHclTerraform(this._warFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
