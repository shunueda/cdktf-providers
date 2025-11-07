// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Nat64AlgFtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'disable': Disable NAT64 FTP ALG;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp#ftp_enable Cgnv6Nat64AlgFtp#ftp_enable}
  */
  readonly ftpEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp#id Cgnv6Nat64AlgFtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp#trans_eprt_to_port Cgnv6Nat64AlgFtp#trans_eprt_to_port}
  */
  readonly transEprtToPort?: string;
  /**
  * 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp#trans_epsv_to_pasv Cgnv6Nat64AlgFtp#trans_epsv_to_pasv}
  */
  readonly transEpsvToPasv?: string;
  /**
  * 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp#trans_lprt_to_port Cgnv6Nat64AlgFtp#trans_lprt_to_port}
  */
  readonly transLprtToPort?: string;
  /**
  * 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp#trans_lpsv_to_pasv Cgnv6Nat64AlgFtp#trans_lpsv_to_pasv}
  */
  readonly transLpsvToPasv?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp#uuid Cgnv6Nat64AlgFtp#uuid}
  */
  readonly uuid?: string;
  /**
  * 'enable': enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp#xlat_no_trans_pasv Cgnv6Nat64AlgFtp#xlat_no_trans_pasv}
  */
  readonly xlatNoTransPasv?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp thunder_cgnv6_nat64_alg_ftp}
*/
export class Cgnv6Nat64AlgFtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat64_alg_ftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Nat64AlgFtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Nat64AlgFtp to import
  * @param importFromId The id of the existing Cgnv6Nat64AlgFtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Nat64AlgFtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat64_alg_ftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat64_alg_ftp thunder_cgnv6_nat64_alg_ftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Nat64AlgFtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Nat64AlgFtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat64_alg_ftp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ftpEnable = config.ftpEnable;
    this._id = config.id;
    this._transEprtToPort = config.transEprtToPort;
    this._transEpsvToPasv = config.transEpsvToPasv;
    this._transLprtToPort = config.transLprtToPort;
    this._transLpsvToPasv = config.transLpsvToPasv;
    this._uuid = config.uuid;
    this._xlatNoTransPasv = config.xlatNoTransPasv;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftp_enable - computed: false, optional: true, required: false
  private _ftpEnable?: string; 
  public get ftpEnable() {
    return this.getStringAttribute('ftp_enable');
  }
  public set ftpEnable(value: string) {
    this._ftpEnable = value;
  }
  public resetFtpEnable() {
    this._ftpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpEnableInput() {
    return this._ftpEnable;
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

  // trans_eprt_to_port - computed: false, optional: true, required: false
  private _transEprtToPort?: string; 
  public get transEprtToPort() {
    return this.getStringAttribute('trans_eprt_to_port');
  }
  public set transEprtToPort(value: string) {
    this._transEprtToPort = value;
  }
  public resetTransEprtToPort() {
    this._transEprtToPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transEprtToPortInput() {
    return this._transEprtToPort;
  }

  // trans_epsv_to_pasv - computed: false, optional: true, required: false
  private _transEpsvToPasv?: string; 
  public get transEpsvToPasv() {
    return this.getStringAttribute('trans_epsv_to_pasv');
  }
  public set transEpsvToPasv(value: string) {
    this._transEpsvToPasv = value;
  }
  public resetTransEpsvToPasv() {
    this._transEpsvToPasv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transEpsvToPasvInput() {
    return this._transEpsvToPasv;
  }

  // trans_lprt_to_port - computed: false, optional: true, required: false
  private _transLprtToPort?: string; 
  public get transLprtToPort() {
    return this.getStringAttribute('trans_lprt_to_port');
  }
  public set transLprtToPort(value: string) {
    this._transLprtToPort = value;
  }
  public resetTransLprtToPort() {
    this._transLprtToPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transLprtToPortInput() {
    return this._transLprtToPort;
  }

  // trans_lpsv_to_pasv - computed: false, optional: true, required: false
  private _transLpsvToPasv?: string; 
  public get transLpsvToPasv() {
    return this.getStringAttribute('trans_lpsv_to_pasv');
  }
  public set transLpsvToPasv(value: string) {
    this._transLpsvToPasv = value;
  }
  public resetTransLpsvToPasv() {
    this._transLpsvToPasv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transLpsvToPasvInput() {
    return this._transLpsvToPasv;
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

  // xlat_no_trans_pasv - computed: false, optional: true, required: false
  private _xlatNoTransPasv?: string; 
  public get xlatNoTransPasv() {
    return this.getStringAttribute('xlat_no_trans_pasv');
  }
  public set xlatNoTransPasv(value: string) {
    this._xlatNoTransPasv = value;
  }
  public resetXlatNoTransPasv() {
    this._xlatNoTransPasv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xlatNoTransPasvInput() {
    return this._xlatNoTransPasv;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ftp_enable: cdktf.stringToTerraform(this._ftpEnable),
      id: cdktf.stringToTerraform(this._id),
      trans_eprt_to_port: cdktf.stringToTerraform(this._transEprtToPort),
      trans_epsv_to_pasv: cdktf.stringToTerraform(this._transEpsvToPasv),
      trans_lprt_to_port: cdktf.stringToTerraform(this._transLprtToPort),
      trans_lpsv_to_pasv: cdktf.stringToTerraform(this._transLpsvToPasv),
      uuid: cdktf.stringToTerraform(this._uuid),
      xlat_no_trans_pasv: cdktf.stringToTerraform(this._xlatNoTransPasv),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ftp_enable: {
        value: cdktf.stringToHclTerraform(this._ftpEnable),
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
      trans_eprt_to_port: {
        value: cdktf.stringToHclTerraform(this._transEprtToPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trans_epsv_to_pasv: {
        value: cdktf.stringToHclTerraform(this._transEpsvToPasv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trans_lprt_to_port: {
        value: cdktf.stringToHclTerraform(this._transLprtToPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trans_lpsv_to_pasv: {
        value: cdktf.stringToHclTerraform(this._transLpsvToPasv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xlat_no_trans_pasv: {
        value: cdktf.stringToHclTerraform(this._xlatNoTransPasv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
