// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslKeyCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content of the cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#cert_content SslKeyCert#cert_content}
  */
  readonly certContent: string;
  /**
  * Full Path Name of ssl certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#cert_full_path SslKeyCert#cert_full_path}
  */
  readonly certFullPath?: string;
  /**
  * Specifies the type of monitoring used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#cert_monitoring_type SslKeyCert#cert_monitoring_type}
  */
  readonly certMonitoringType?: string;
  /**
  * The name of the cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#cert_name SslKeyCert#cert_name}
  */
  readonly certName: string;
  /**
  * Specifies the OCSP responder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#cert_ocsp SslKeyCert#cert_ocsp}
  */
  readonly certOcsp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#id SslKeyCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the issuer certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#issuer_cert SslKeyCert#issuer_cert}
  */
  readonly issuerCert?: string;
  /**
  * The content of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#key_content SslKeyCert#key_content}
  */
  readonly keyContent: string;
  /**
  * Full Path Name of ssl key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#key_full_path SslKeyCert#key_full_path}
  */
  readonly keyFullPath?: string;
  /**
  * The name of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#key_name SslKeyCert#key_name}
  */
  readonly keyName: string;
  /**
  * Partition on the ssl certificate and key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#partition SslKeyCert#partition}
  */
  readonly partition?: string;
  /**
  * Passphrase on the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#passphrase SslKeyCert#passphrase}
  */
  readonly passphrase?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert bigip_ssl_key_cert}
*/
export class SslKeyCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ssl_key_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslKeyCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslKeyCert to import
  * @param importFromId The id of the existing SslKeyCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslKeyCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ssl_key_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ssl_key_cert bigip_ssl_key_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslKeyCertConfig
  */
  public constructor(scope: Construct, id: string, config: SslKeyCertConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ssl_key_cert',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certContent = config.certContent;
    this._certFullPath = config.certFullPath;
    this._certMonitoringType = config.certMonitoringType;
    this._certName = config.certName;
    this._certOcsp = config.certOcsp;
    this._id = config.id;
    this._issuerCert = config.issuerCert;
    this._keyContent = config.keyContent;
    this._keyFullPath = config.keyFullPath;
    this._keyName = config.keyName;
    this._partition = config.partition;
    this._passphrase = config.passphrase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_content - computed: false, optional: false, required: true
  private _certContent?: string; 
  public get certContent() {
    return this.getStringAttribute('cert_content');
  }
  public set certContent(value: string) {
    this._certContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certContentInput() {
    return this._certContent;
  }

  // cert_full_path - computed: true, optional: true, required: false
  private _certFullPath?: string; 
  public get certFullPath() {
    return this.getStringAttribute('cert_full_path');
  }
  public set certFullPath(value: string) {
    this._certFullPath = value;
  }
  public resetCertFullPath() {
    this._certFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFullPathInput() {
    return this._certFullPath;
  }

  // cert_monitoring_type - computed: false, optional: true, required: false
  private _certMonitoringType?: string; 
  public get certMonitoringType() {
    return this.getStringAttribute('cert_monitoring_type');
  }
  public set certMonitoringType(value: string) {
    this._certMonitoringType = value;
  }
  public resetCertMonitoringType() {
    this._certMonitoringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certMonitoringTypeInput() {
    return this._certMonitoringType;
  }

  // cert_name - computed: false, optional: false, required: true
  private _certName?: string; 
  public get certName() {
    return this.getStringAttribute('cert_name');
  }
  public set certName(value: string) {
    this._certName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
  }

  // cert_ocsp - computed: false, optional: true, required: false
  private _certOcsp?: string; 
  public get certOcsp() {
    return this.getStringAttribute('cert_ocsp');
  }
  public set certOcsp(value: string) {
    this._certOcsp = value;
  }
  public resetCertOcsp() {
    this._certOcsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certOcspInput() {
    return this._certOcsp;
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

  // issuer_cert - computed: false, optional: true, required: false
  private _issuerCert?: string; 
  public get issuerCert() {
    return this.getStringAttribute('issuer_cert');
  }
  public set issuerCert(value: string) {
    this._issuerCert = value;
  }
  public resetIssuerCert() {
    this._issuerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerCertInput() {
    return this._issuerCert;
  }

  // key_content - computed: false, optional: false, required: true
  private _keyContent?: string; 
  public get keyContent() {
    return this.getStringAttribute('key_content');
  }
  public set keyContent(value: string) {
    this._keyContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyContentInput() {
    return this._keyContent;
  }

  // key_full_path - computed: true, optional: true, required: false
  private _keyFullPath?: string; 
  public get keyFullPath() {
    return this.getStringAttribute('key_full_path');
  }
  public set keyFullPath(value: string) {
    this._keyFullPath = value;
  }
  public resetKeyFullPath() {
    this._keyFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFullPathInput() {
    return this._keyFullPath;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_content: cdktf.stringToTerraform(this._certContent),
      cert_full_path: cdktf.stringToTerraform(this._certFullPath),
      cert_monitoring_type: cdktf.stringToTerraform(this._certMonitoringType),
      cert_name: cdktf.stringToTerraform(this._certName),
      cert_ocsp: cdktf.stringToTerraform(this._certOcsp),
      id: cdktf.stringToTerraform(this._id),
      issuer_cert: cdktf.stringToTerraform(this._issuerCert),
      key_content: cdktf.stringToTerraform(this._keyContent),
      key_full_path: cdktf.stringToTerraform(this._keyFullPath),
      key_name: cdktf.stringToTerraform(this._keyName),
      partition: cdktf.stringToTerraform(this._partition),
      passphrase: cdktf.stringToTerraform(this._passphrase),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_content: {
        value: cdktf.stringToHclTerraform(this._certContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_full_path: {
        value: cdktf.stringToHclTerraform(this._certFullPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_monitoring_type: {
        value: cdktf.stringToHclTerraform(this._certMonitoringType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_name: {
        value: cdktf.stringToHclTerraform(this._certName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_ocsp: {
        value: cdktf.stringToHclTerraform(this._certOcsp),
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
      issuer_cert: {
        value: cdktf.stringToHclTerraform(this._issuerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_content: {
        value: cdktf.stringToHclTerraform(this._keyContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_full_path: {
        value: cdktf.stringToHclTerraform(this._keyFullPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
