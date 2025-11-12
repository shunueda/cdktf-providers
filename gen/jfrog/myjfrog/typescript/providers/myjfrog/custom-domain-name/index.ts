// https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomDomainNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * A certificate body is a text field containing information about the certificate such as the domain name, public key, signature algorithm, issuer, and validity period. You may include the certificate chain in the certificate body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name#certificate_body CustomDomainName#certificate_body}
  */
  readonly certificateBody: string;
  /**
  * A chain of trust between certificates that is anchored by a root certificate authority is used to verify the validity of a certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name#certificate_chain CustomDomainName#certificate_chain}
  */
  readonly certificateChain?: string;
  /**
  * Give your certificate a unique name to help identify it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name#certificate_name CustomDomainName#certificate_name}
  */
  readonly certificateName: string;
  /**
  * The private key pairs with the certificate's public key for encryption. The keys must match. Private key must be in RSA format (RSA PKCS#1). If not, you can convert it to RSA using the following OpenSSL command:
  * `openssl rsa -in private.key -out private_rsa.key -traditional`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name#certificate_private_key CustomDomainName#certificate_private_key}
  */
  readonly certificatePrivateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name#domains_under_certificate CustomDomainName#domains_under_certificate}
  */
  readonly domainsUnderCertificate: CustomDomainNameDomainsUnderCertificate[] | cdktf.IResolvable;
}
export interface CustomDomainNameDomainsUnderCertificate {
  /**
  * Only available when `type` is set to `docker_sub_domain` (when configuring the base URL for Docker-related operations). Use this option when you wish to define an explicit repository name (not derived from the domain name) -  please notice this is not best practice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name#docker_repository_name_override CustomDomainName#docker_repository_name_override}
  */
  readonly dockerRepositoryNameOverride?: string;
  /**
  * The server_name field in your request refers to the designated JFrog server where you intend to configure a CNAME (Canonical Name). For instance, if your JFrog server URL is myserver.jfrog.io, and you wish to set up a CNAME for this server, you should enter `myserver` in the server_name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name#server_name CustomDomainName#server_name}
  */
  readonly serverName: string;
  /**
  * This attribute offers two valid options:
  *   * `platform_base_url`: Use this option when configuring the base URL for accessing the JPD (JFrog Platform Distribution) User Interface. You can also employ this URL as the base for API calls.
  *   * `docker_sub_domain`: Use this option when configuring the base URL for Docker-related operations, such as login, pull, and push actions, within the JPD. Please note that this parameter is exclusively available for JPD instances that have the Docker Subdomain method configured.
  * For more detailed information on the various Docker methods available in Artifactory, please refer to [Get Started With Artifactory as a Docker Registry](https://jfrog.com/help/r/jfrog-artifactory-documentation/get-started-with-artifactory-as-a-docker-registry).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name#type CustomDomainName#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name#url CustomDomainName#url}
  */
  readonly url: string;
}

export function customDomainNameDomainsUnderCertificateToTerraform(struct?: CustomDomainNameDomainsUnderCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_repository_name_override: cdktf.stringToTerraform(struct!.dockerRepositoryNameOverride),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function customDomainNameDomainsUnderCertificateToHclTerraform(struct?: CustomDomainNameDomainsUnderCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_repository_name_override: {
      value: cdktf.stringToHclTerraform(struct!.dockerRepositoryNameOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomDomainNameDomainsUnderCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CustomDomainNameDomainsUnderCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerRepositoryNameOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRepositoryNameOverride = this._dockerRepositoryNameOverride;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDomainNameDomainsUnderCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerRepositoryNameOverride = undefined;
      this._serverName = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerRepositoryNameOverride = value.dockerRepositoryNameOverride;
      this._serverName = value.serverName;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // docker_repository_name_override - computed: false, optional: true, required: false
  private _dockerRepositoryNameOverride?: string; 
  public get dockerRepositoryNameOverride() {
    return this.getStringAttribute('docker_repository_name_override');
  }
  public set dockerRepositoryNameOverride(value: string) {
    this._dockerRepositoryNameOverride = value;
  }
  public resetDockerRepositoryNameOverride() {
    this._dockerRepositoryNameOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRepositoryNameOverrideInput() {
    return this._dockerRepositoryNameOverride;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class CustomDomainNameDomainsUnderCertificateList extends cdktf.ComplexList {
  public internalValue? : CustomDomainNameDomainsUnderCertificate[] | cdktf.IResolvable

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
  public get(index: number): CustomDomainNameDomainsUnderCertificateOutputReference {
    return new CustomDomainNameDomainsUnderCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name myjfrog_custom_domain_name}
*/
export class CustomDomainName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "myjfrog_custom_domain_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomDomainName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomDomainName to import
  * @param importFromId The id of the existing CustomDomainName that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomDomainName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "myjfrog_custom_domain_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/myjfrog/1.0.2/docs/resources/custom_domain_name myjfrog_custom_domain_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomDomainNameConfig
  */
  public constructor(scope: Construct, id: string, config: CustomDomainNameConfig) {
    super(scope, id, {
      terraformResourceType: 'myjfrog_custom_domain_name',
      terraformGeneratorMetadata: {
        providerName: 'myjfrog',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._certificateName = config.certificateName;
    this._certificatePrivateKey = config.certificatePrivateKey;
    this._domainsUnderCertificate.internalValue = config.domainsUnderCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_body - computed: false, optional: false, required: true
  private _certificateBody?: string; 
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string) {
    this._certificateBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

  // certificate_expiry - computed: true, optional: false, required: false
  public get certificateExpiry() {
    return this.getNumberAttribute('certificate_expiry');
  }

  // certificate_name - computed: false, optional: false, required: true
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // certificate_private_key - computed: false, optional: false, required: true
  private _certificatePrivateKey?: string; 
  public get certificatePrivateKey() {
    return this.getStringAttribute('certificate_private_key');
  }
  public set certificatePrivateKey(value: string) {
    this._certificatePrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePrivateKeyInput() {
    return this._certificatePrivateKey;
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // domains_under_certificate - computed: false, optional: false, required: true
  private _domainsUnderCertificate = new CustomDomainNameDomainsUnderCertificateList(this, "domains_under_certificate", true);
  public get domainsUnderCertificate() {
    return this._domainsUnderCertificate;
  }
  public putDomainsUnderCertificate(value: CustomDomainNameDomainsUnderCertificate[] | cdktf.IResolvable) {
    this._domainsUnderCertificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsUnderCertificateInput() {
    return this._domainsUnderCertificate.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_body: cdktf.stringToTerraform(this._certificateBody),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      certificate_private_key: cdktf.stringToTerraform(this._certificatePrivateKey),
      domains_under_certificate: cdktf.listMapper(customDomainNameDomainsUnderCertificateToTerraform, false)(this._domainsUnderCertificate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_body: {
        value: cdktf.stringToHclTerraform(this._certificateBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_chain: {
        value: cdktf.stringToHclTerraform(this._certificateChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_name: {
        value: cdktf.stringToHclTerraform(this._certificateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_private_key: {
        value: cdktf.stringToHclTerraform(this._certificatePrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains_under_certificate: {
        value: cdktf.listMapperHcl(customDomainNameDomainsUnderCertificateToHclTerraform, false)(this._domainsUnderCertificate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CustomDomainNameDomainsUnderCertificateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
