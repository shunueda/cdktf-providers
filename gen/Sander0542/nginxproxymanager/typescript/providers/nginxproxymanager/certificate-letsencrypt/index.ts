// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateLetsencryptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to use DNS validation to request the Let's Encrypt certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt#dns_challenge CertificateLetsencrypt#dns_challenge}
  */
  readonly dnsChallenge?: boolean | cdktf.IResolvable;
  /**
  * The DNS provider to use for the DNS challenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt#dns_provider CertificateLetsencrypt#dns_provider}
  */
  readonly dnsProvider?: string;
  /**
  * The credentials to use for the provider in the DNS challenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt#dns_provider_credentials CertificateLetsencrypt#dns_provider_credentials}
  */
  readonly dnsProviderCredentials?: string;
  /**
  * The domain names associated with the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt#domain_names CertificateLetsencrypt#domain_names}
  */
  readonly domainNames: string[];
  /**
  * Whether you agree to the [Let's Encrypt Terms of Service](https://letsencrypt.org/repository/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt#letsencrypt_agree CertificateLetsencrypt#letsencrypt_agree}
  */
  readonly letsencryptAgree: boolean | cdktf.IResolvable;
  /**
  * The email address to use for the Let's Encrypt certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt#letsencrypt_email CertificateLetsencrypt#letsencrypt_email}
  */
  readonly letsencryptEmail: string;
  /**
  * The number of seconds to wait for DNS to propagate before asking the ACME server to verify the DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt#propagation_seconds CertificateLetsencrypt#propagation_seconds}
  */
  readonly propagationSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt nginxproxymanager_certificate_letsencrypt}
*/
export class CertificateLetsencrypt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_certificate_letsencrypt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateLetsencrypt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateLetsencrypt to import
  * @param importFromId The id of the existing CertificateLetsencrypt that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateLetsencrypt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_certificate_letsencrypt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_letsencrypt nginxproxymanager_certificate_letsencrypt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateLetsencryptConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateLetsencryptConfig) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_certificate_letsencrypt',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2',
        providerVersionConstraint: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsChallenge = config.dnsChallenge;
    this._dnsProvider = config.dnsProvider;
    this._dnsProviderCredentials = config.dnsProviderCredentials;
    this._domainNames = config.domainNames;
    this._letsencryptAgree = config.letsencryptAgree;
    this._letsencryptEmail = config.letsencryptEmail;
    this._propagationSeconds = config.propagationSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // dns_challenge - computed: true, optional: true, required: false
  private _dnsChallenge?: boolean | cdktf.IResolvable; 
  public get dnsChallenge() {
    return this.getBooleanAttribute('dns_challenge');
  }
  public set dnsChallenge(value: boolean | cdktf.IResolvable) {
    this._dnsChallenge = value;
  }
  public resetDnsChallenge() {
    this._dnsChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsChallengeInput() {
    return this._dnsChallenge;
  }

  // dns_provider - computed: true, optional: true, required: false
  private _dnsProvider?: string; 
  public get dnsProvider() {
    return this.getStringAttribute('dns_provider');
  }
  public set dnsProvider(value: string) {
    this._dnsProvider = value;
  }
  public resetDnsProvider() {
    this._dnsProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProviderInput() {
    return this._dnsProvider;
  }

  // dns_provider_credentials - computed: true, optional: true, required: false
  private _dnsProviderCredentials?: string; 
  public get dnsProviderCredentials() {
    return this.getStringAttribute('dns_provider_credentials');
  }
  public set dnsProviderCredentials(value: string) {
    this._dnsProviderCredentials = value;
  }
  public resetDnsProviderCredentials() {
    this._dnsProviderCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProviderCredentialsInput() {
    return this._dnsProviderCredentials;
  }

  // domain_names - computed: false, optional: false, required: true
  private _domainNames?: string[]; 
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // letsencrypt_agree - computed: false, optional: false, required: true
  private _letsencryptAgree?: boolean | cdktf.IResolvable; 
  public get letsencryptAgree() {
    return this.getBooleanAttribute('letsencrypt_agree');
  }
  public set letsencryptAgree(value: boolean | cdktf.IResolvable) {
    this._letsencryptAgree = value;
  }
  // Temporarily expose input value. Use with caution.
  public get letsencryptAgreeInput() {
    return this._letsencryptAgree;
  }

  // letsencrypt_email - computed: false, optional: false, required: true
  private _letsencryptEmail?: string; 
  public get letsencryptEmail() {
    return this.getStringAttribute('letsencrypt_email');
  }
  public set letsencryptEmail(value: string) {
    this._letsencryptEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get letsencryptEmailInput() {
    return this._letsencryptEmail;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }

  // propagation_seconds - computed: true, optional: true, required: false
  private _propagationSeconds?: number; 
  public get propagationSeconds() {
    return this.getNumberAttribute('propagation_seconds');
  }
  public set propagationSeconds(value: number) {
    this._propagationSeconds = value;
  }
  public resetPropagationSeconds() {
    this._propagationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationSecondsInput() {
    return this._propagationSeconds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_challenge: cdktf.booleanToTerraform(this._dnsChallenge),
      dns_provider: cdktf.stringToTerraform(this._dnsProvider),
      dns_provider_credentials: cdktf.stringToTerraform(this._dnsProviderCredentials),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      letsencrypt_agree: cdktf.booleanToTerraform(this._letsencryptAgree),
      letsencrypt_email: cdktf.stringToTerraform(this._letsencryptEmail),
      propagation_seconds: cdktf.numberToTerraform(this._propagationSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_challenge: {
        value: cdktf.booleanToHclTerraform(this._dnsChallenge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_provider: {
        value: cdktf.stringToHclTerraform(this._dnsProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_provider_credentials: {
        value: cdktf.stringToHclTerraform(this._dnsProviderCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      letsencrypt_agree: {
        value: cdktf.booleanToHclTerraform(this._letsencryptAgree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      letsencrypt_email: {
        value: cdktf.stringToHclTerraform(this._letsencryptEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagation_seconds: {
        value: cdktf.numberToHclTerraform(this._propagationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
