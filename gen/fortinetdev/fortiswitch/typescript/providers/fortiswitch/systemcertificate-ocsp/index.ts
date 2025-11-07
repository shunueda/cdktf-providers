// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ocsp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemcertificateOcspConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ocsp#cert SystemcertificateOcsp#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ocsp#id SystemcertificateOcsp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ocsp#unavail_action SystemcertificateOcsp#unavail_action}
  */
  readonly unavailAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ocsp#url SystemcertificateOcsp#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ocsp fortiswitch_systemcertificate_ocsp}
*/
export class SystemcertificateOcsp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_systemcertificate_ocsp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemcertificateOcsp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemcertificateOcsp to import
  * @param importFromId The id of the existing SystemcertificateOcsp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ocsp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemcertificateOcsp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_systemcertificate_ocsp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/systemcertificate_ocsp fortiswitch_systemcertificate_ocsp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemcertificateOcspConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemcertificateOcspConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_systemcertificate_ocsp',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
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
    this._unavailAction = config.unavailAction;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert - computed: true, optional: true, required: false
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

  // url - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert: cdktf.stringToTerraform(this._cert),
      id: cdktf.stringToTerraform(this._id),
      unavail_action: cdktf.stringToTerraform(this._unavailAction),
      url: cdktf.stringToTerraform(this._url),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
