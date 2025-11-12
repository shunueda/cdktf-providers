// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpncertificateOcspserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver#cert VpncertificateOcspserver#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver#id VpncertificateOcspserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver#name VpncertificateOcspserver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver#secondary_cert VpncertificateOcspserver#secondary_cert}
  */
  readonly secondaryCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver#secondary_url VpncertificateOcspserver#secondary_url}
  */
  readonly secondaryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver#source_ip VpncertificateOcspserver#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver#unavail_action VpncertificateOcspserver#unavail_action}
  */
  readonly unavailAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver#url VpncertificateOcspserver#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver#vdomparam VpncertificateOcspserver#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver fortios_vpncertificate_ocspserver}
*/
export class VpncertificateOcspserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpncertificate_ocspserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpncertificateOcspserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpncertificateOcspserver to import
  * @param importFromId The id of the existing VpncertificateOcspserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpncertificateOcspserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpncertificate_ocspserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_ocspserver fortios_vpncertificate_ocspserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpncertificateOcspserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpncertificateOcspserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpncertificate_ocspserver',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._id = config.id;
    this._name = config.name;
    this._secondaryCert = config.secondaryCert;
    this._secondaryUrl = config.secondaryUrl;
    this._sourceIp = config.sourceIp;
    this._unavailAction = config.unavailAction;
    this._url = config.url;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // secondary_cert - computed: false, optional: true, required: false
  private _secondaryCert?: string; 
  public get secondaryCert() {
    return this.getStringAttribute('secondary_cert');
  }
  public set secondaryCert(value: string) {
    this._secondaryCert = value;
  }
  public resetSecondaryCert() {
    this._secondaryCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryCertInput() {
    return this._secondaryCert;
  }

  // secondary_url - computed: false, optional: true, required: false
  private _secondaryUrl?: string; 
  public get secondaryUrl() {
    return this.getStringAttribute('secondary_url');
  }
  public set secondaryUrl(value: string) {
    this._secondaryUrl = value;
  }
  public resetSecondaryUrl() {
    this._secondaryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryUrlInput() {
    return this._secondaryUrl;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // unavail_action - computed: true, optional: true, required: false
  private _unavailAction?: string; 
  public get unavailAction() {
    return this.getStringAttribute('unavail_action');
  }
  public set unavailAction(value: string) {
    this._unavailAction = value;
  }
  public resetUnavailAction() {
    this._unavailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailActionInput() {
    return this._unavailAction;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert: cdktf.stringToTerraform(this._cert),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secondary_cert: cdktf.stringToTerraform(this._secondaryCert),
      secondary_url: cdktf.stringToTerraform(this._secondaryUrl),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      unavail_action: cdktf.stringToTerraform(this._unavailAction),
      url: cdktf.stringToTerraform(this._url),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      secondary_cert: {
        value: cdktf.stringToHclTerraform(this._secondaryCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_url: {
        value: cdktf.stringToHclTerraform(this._secondaryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unavail_action: {
        value: cdktf.stringToHclTerraform(this._unavailAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
