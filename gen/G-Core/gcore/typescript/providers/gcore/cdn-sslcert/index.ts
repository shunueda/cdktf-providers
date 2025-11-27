// https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_sslcert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnSslcertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The way SSL certificate was issued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_sslcert#automated CdnSslcert#automated}
  */
  readonly automated?: boolean | cdktf.IResolvable;
  /**
  * The public part of the SSL certificate. All chain of the SSL certificate should be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_sslcert#cert CdnSslcert#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_sslcert#id CdnSslcert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the SSL certificate. Must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_sslcert#name CdnSslcert#name}
  */
  readonly name: string;
  /**
  * The private key of the SSL certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_sslcert#private_key CdnSslcert#private_key}
  */
  readonly privateKey?: string;
  /**
  * Defines whether to check the SSL certificate for a signature from a trusted certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_sslcert#validate_root_ca CdnSslcert#validate_root_ca}
  */
  readonly validateRootCa?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_sslcert gcore_cdn_sslcert}
*/
export class CdnSslcert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_sslcert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnSslcert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnSslcert to import
  * @param importFromId The id of the existing CdnSslcert that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_sslcert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnSslcert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_sslcert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.2/docs/resources/cdn_sslcert gcore_cdn_sslcert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnSslcertConfig
  */
  public constructor(scope: Construct, id: string, config: CdnSslcertConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_sslcert',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.2',
        providerVersionConstraint: '0.32.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automated = config.automated;
    this._cert = config.cert;
    this._id = config.id;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._validateRootCa = config.validateRootCa;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automated - computed: false, optional: true, required: false
  private _automated?: boolean | cdktf.IResolvable; 
  public get automated() {
    return this.getBooleanAttribute('automated');
  }
  public set automated(value: boolean | cdktf.IResolvable) {
    this._automated = value;
  }
  public resetAutomated() {
    this._automated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // has_related_resources - computed: true, optional: false, required: false
  public get hasRelatedResources() {
    return this.getBooleanAttribute('has_related_resources');
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

  // validate_root_ca - computed: false, optional: true, required: false
  private _validateRootCa?: boolean | cdktf.IResolvable; 
  public get validateRootCa() {
    return this.getBooleanAttribute('validate_root_ca');
  }
  public set validateRootCa(value: boolean | cdktf.IResolvable) {
    this._validateRootCa = value;
  }
  public resetValidateRootCa() {
    this._validateRootCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRootCaInput() {
    return this._validateRootCa;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automated: cdktf.booleanToTerraform(this._automated),
      cert: cdktf.stringToTerraform(this._cert),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      validate_root_ca: cdktf.booleanToTerraform(this._validateRootCa),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automated: {
        value: cdktf.booleanToHclTerraform(this._automated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
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
      validate_root_ca: {
        value: cdktf.booleanToHclTerraform(this._validateRootCa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
