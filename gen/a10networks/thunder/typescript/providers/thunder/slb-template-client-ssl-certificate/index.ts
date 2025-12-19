// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateClientSslCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate#cert SlbTemplateClientSslCertificate#cert}
  */
  readonly cert: string;
  /**
  * Chain Certificate (Chain Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate#chain_cert SlbTemplateClientSslCertificate#chain_cert}
  */
  readonly chainCert?: string;
  /**
  * Client_ssl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate#client_ssl_name SlbTemplateClientSslCertificate#client_ssl_name}
  */
  readonly clientSslName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate#id SlbTemplateClientSslCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server Private Key (Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate#key SlbTemplateClientSslCertificate#key}
  */
  readonly key?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate#passphrase SlbTemplateClientSslCertificate#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Server Certificate and Key Partition Shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate#shared SlbTemplateClientSslCertificate#shared}
  */
  readonly shared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate#uuid SlbTemplateClientSslCertificate#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate thunder_slb_template_client_ssl_certificate}
*/
export class SlbTemplateClientSslCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_client_ssl_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateClientSslCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateClientSslCertificate to import
  * @param importFromId The id of the existing SlbTemplateClientSslCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateClientSslCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_client_ssl_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_client_ssl_certificate thunder_slb_template_client_ssl_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateClientSslCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateClientSslCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_client_ssl_certificate',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._cert = config.cert;
    this._chainCert = config.chainCert;
    this._clientSslName = config.clientSslName;
    this._id = config.id;
    this._key = config.key;
    this._passphrase = config.passphrase;
    this._shared = config.shared;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // chain_cert - computed: false, optional: true, required: false
  private _chainCert?: string; 
  public get chainCert() {
    return this.getStringAttribute('chain_cert');
  }
  public set chainCert(value: string) {
    this._chainCert = value;
  }
  public resetChainCert() {
    this._chainCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainCertInput() {
    return this._chainCert;
  }

  // client_ssl_name - computed: false, optional: false, required: true
  private _clientSslName?: string; 
  public get clientSslName() {
    return this.getStringAttribute('client_ssl_name');
  }
  public set clientSslName(value: string) {
    this._clientSslName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslNameInput() {
    return this._clientSslName;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert: cdktf.stringToTerraform(this._cert),
      chain_cert: cdktf.stringToTerraform(this._chainCert),
      client_ssl_name: cdktf.stringToTerraform(this._clientSslName),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      shared: cdktf.numberToTerraform(this._shared),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chain_cert: {
        value: cdktf.stringToHclTerraform(this._chainCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ssl_name: {
        value: cdktf.stringToHclTerraform(this._clientSslName),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      shared: {
        value: cdktf.numberToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
