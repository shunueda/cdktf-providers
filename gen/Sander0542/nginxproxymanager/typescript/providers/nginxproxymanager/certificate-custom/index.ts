// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * The contents of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_custom#certificate CertificateCustom#certificate}
  */
  readonly certificate: string;
  /**
  * The contents of the certificate key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_custom#certificate_key CertificateCustom#certificate_key}
  */
  readonly certificateKey: string;
  /**
  * The name of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_custom#name CertificateCustom#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_custom nginxproxymanager_certificate_custom}
*/
export class CertificateCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_certificate_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateCustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateCustom to import
  * @param importFromId The id of the existing CertificateCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_certificate_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/resources/certificate_custom nginxproxymanager_certificate_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateCustomConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateCustomConfig) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_certificate_custom',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificate = config.certificate;
    this._certificateKey = config.certificateKey;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_key - computed: false, optional: false, required: true
  private _certificateKey?: string; 
  public get certificateKey() {
    return this.getStringAttribute('certificate_key');
  }
  public set certificateKey(value: string) {
    this._certificateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateKeyInput() {
    return this._certificateKey;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      certificate_key: cdktf.stringToTerraform(this._certificateKey),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_key: {
        value: cdktf.stringToHclTerraform(this._certificateKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
