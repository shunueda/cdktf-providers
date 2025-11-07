// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Common name of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#common_name SecurityCertificate#common_name}
  */
  readonly commonName: string;
  /**
  * Connection profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#cx_profile_name SecurityCertificate#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Certificate expiration time, in ISO 8601 duration format or date and time format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#expiry_time SecurityCertificate#expiry_time}
  */
  readonly expiryTime?: string;
  /**
  * Hashing function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#hash_function SecurityCertificate#hash_function}
  */
  readonly hashFunction?: string;
  /**
  * Chain of intermediate Certificates in PEM format. Only valid in POST when installing a certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#intermediate_certificates SecurityCertificate#intermediate_certificates}
  */
  readonly intermediateCertificates?: string[];
  /**
  * Key size of the certificate in bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#key_size SecurityCertificate#key_size}
  */
  readonly keySize?: number;
  /**
  * The unique name of the security certificate per SVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#name SecurityCertificate#name}
  */
  readonly name?: string;
  /**
  * Private key Certificate in PEM format. Only valid when installing a CA-signed certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#private_key SecurityCertificate#private_key}
  */
  readonly privateKey?: string;
  /**
  * Public key Certificate in PEM format. If this is not provided during create action, a self-signed certificate is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#public_certificate SecurityCertificate#public_certificate}
  */
  readonly publicCertificate?: string;
  /**
  * Certificate signing request to be signed by the given certificate authority. Request should be in X509 PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#signing_request SecurityCertificate#signing_request}
  */
  readonly signingRequest?: string;
  /**
  * Name of the SVM in which the certificate is created or installed or the SVM on which the signed certificate will exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#svm_name SecurityCertificate#svm_name}
  */
  readonly svmName?: string;
  /**
  * Type of certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#type SecurityCertificate#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate netapp-ontap_security_certificate}
*/
export class SecurityCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_security_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityCertificate to import
  * @param importFromId The id of the existing SecurityCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_security_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_certificate netapp-ontap_security_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_security_certificate',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commonName = config.commonName;
    this._cxProfileName = config.cxProfileName;
    this._expiryTime = config.expiryTime;
    this._hashFunction = config.hashFunction;
    this._intermediateCertificates = config.intermediateCertificates;
    this._keySize = config.keySize;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._publicCertificate = config.publicCertificate;
    this._signingRequest = config.signingRequest;
    this._svmName = config.svmName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca - computed: true, optional: false, required: false
  public get ca() {
    return this.getStringAttribute('ca');
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // expiry_time - computed: true, optional: true, required: false
  private _expiryTime?: string; 
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string) {
    this._expiryTime = value;
  }
  public resetExpiryTime() {
    this._expiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime;
  }

  // hash_function - computed: true, optional: true, required: false
  private _hashFunction?: string; 
  public get hashFunction() {
    return this.getStringAttribute('hash_function');
  }
  public set hashFunction(value: string) {
    this._hashFunction = value;
  }
  public resetHashFunction() {
    this._hashFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFunctionInput() {
    return this._hashFunction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intermediate_certificates - computed: false, optional: true, required: false
  private _intermediateCertificates?: string[]; 
  public get intermediateCertificates() {
    return this.getListAttribute('intermediate_certificates');
  }
  public set intermediateCertificates(value: string[]) {
    this._intermediateCertificates = value;
  }
  public resetIntermediateCertificates() {
    this._intermediateCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateCertificatesInput() {
    return this._intermediateCertificates;
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_certificate - computed: true, optional: true, required: false
  private _publicCertificate?: string; 
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }
  public set publicCertificate(value: string) {
    this._publicCertificate = value;
  }
  public resetPublicCertificate() {
    this._publicCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertificateInput() {
    return this._publicCertificate;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signed_certificate - computed: true, optional: false, required: false
  public get signedCertificate() {
    return this.getStringAttribute('signed_certificate');
  }

  // signing_request - computed: false, optional: true, required: false
  private _signingRequest?: string; 
  public get signingRequest() {
    return this.getStringAttribute('signing_request');
  }
  public set signingRequest(value: string) {
    this._signingRequest = value;
  }
  public resetSigningRequest() {
    this._signingRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRequestInput() {
    return this._signingRequest;
  }

  // svm_name - computed: true, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      common_name: cdktf.stringToTerraform(this._commonName),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      expiry_time: cdktf.stringToTerraform(this._expiryTime),
      hash_function: cdktf.stringToTerraform(this._hashFunction),
      intermediate_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intermediateCertificates),
      key_size: cdktf.numberToTerraform(this._keySize),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_certificate: cdktf.stringToTerraform(this._publicCertificate),
      signing_request: cdktf.stringToTerraform(this._signingRequest),
      svm_name: cdktf.stringToTerraform(this._svmName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_time: {
        value: cdktf.stringToHclTerraform(this._expiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_function: {
        value: cdktf.stringToHclTerraform(this._hashFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intermediate_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intermediateCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_certificate: {
        value: cdktf.stringToHclTerraform(this._publicCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_request: {
        value: cdktf.stringToHclTerraform(this._signingRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
