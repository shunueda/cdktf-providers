// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeleteGlmLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * only remove A10 Threat Intel license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license#a10_ti DeleteGlmLicense#a10_ti}
  */
  readonly a10Ti?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license#id DeleteGlmLicense#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * only remove IPSEC VPN license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license#ipsec_vpn DeleteGlmLicense#ipsec_vpn}
  */
  readonly ipsecVpn?: number;
  /**
  * only remove NGWAF license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license#ngwaf DeleteGlmLicense#ngwaf}
  */
  readonly ngwaf?: number;
  /**
  * only remove QOSMOS license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license#qosmos DeleteGlmLicense#qosmos}
  */
  readonly qosmos?: number;
  /**
  * only remove Secure gaming license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license#secure_gaming DeleteGlmLicense#secure_gaming}
  */
  readonly secureGaming?: number;
  /**
  * only remove ThreatSTOP license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license#threatstop DeleteGlmLicense#threatstop}
  */
  readonly threatstop?: number;
  /**
  * only remove Webroot license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license#webroot DeleteGlmLicense#webroot}
  */
  readonly webroot?: number;
  /**
  * only remove Webroot Threat Intel license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license#webroot_ti DeleteGlmLicense#webroot_ti}
  */
  readonly webrootTi?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license thunder_delete_glm_license}
*/
export class DeleteGlmLicense extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_delete_glm_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeleteGlmLicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeleteGlmLicense to import
  * @param importFromId The id of the existing DeleteGlmLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeleteGlmLicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_delete_glm_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/delete_glm_license thunder_delete_glm_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeleteGlmLicenseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DeleteGlmLicenseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_delete_glm_license',
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
    this._a10Ti = config.a10Ti;
    this._id = config.id;
    this._ipsecVpn = config.ipsecVpn;
    this._ngwaf = config.ngwaf;
    this._qosmos = config.qosmos;
    this._secureGaming = config.secureGaming;
    this._threatstop = config.threatstop;
    this._webroot = config.webroot;
    this._webrootTi = config.webrootTi;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // a10_ti - computed: false, optional: true, required: false
  private _a10Ti?: number; 
  public get a10Ti() {
    return this.getNumberAttribute('a10_ti');
  }
  public set a10Ti(value: number) {
    this._a10Ti = value;
  }
  public resetA10Ti() {
    this._a10Ti = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10TiInput() {
    return this._a10Ti;
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

  // ipsec_vpn - computed: false, optional: true, required: false
  private _ipsecVpn?: number; 
  public get ipsecVpn() {
    return this.getNumberAttribute('ipsec_vpn');
  }
  public set ipsecVpn(value: number) {
    this._ipsecVpn = value;
  }
  public resetIpsecVpn() {
    this._ipsecVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecVpnInput() {
    return this._ipsecVpn;
  }

  // ngwaf - computed: false, optional: true, required: false
  private _ngwaf?: number; 
  public get ngwaf() {
    return this.getNumberAttribute('ngwaf');
  }
  public set ngwaf(value: number) {
    this._ngwaf = value;
  }
  public resetNgwaf() {
    this._ngwaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngwafInput() {
    return this._ngwaf;
  }

  // qosmos - computed: false, optional: true, required: false
  private _qosmos?: number; 
  public get qosmos() {
    return this.getNumberAttribute('qosmos');
  }
  public set qosmos(value: number) {
    this._qosmos = value;
  }
  public resetQosmos() {
    this._qosmos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosmosInput() {
    return this._qosmos;
  }

  // secure_gaming - computed: false, optional: true, required: false
  private _secureGaming?: number; 
  public get secureGaming() {
    return this.getNumberAttribute('secure_gaming');
  }
  public set secureGaming(value: number) {
    this._secureGaming = value;
  }
  public resetSecureGaming() {
    this._secureGaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureGamingInput() {
    return this._secureGaming;
  }

  // threatstop - computed: false, optional: true, required: false
  private _threatstop?: number; 
  public get threatstop() {
    return this.getNumberAttribute('threatstop');
  }
  public set threatstop(value: number) {
    this._threatstop = value;
  }
  public resetThreatstop() {
    this._threatstop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatstopInput() {
    return this._threatstop;
  }

  // webroot - computed: false, optional: true, required: false
  private _webroot?: number; 
  public get webroot() {
    return this.getNumberAttribute('webroot');
  }
  public set webroot(value: number) {
    this._webroot = value;
  }
  public resetWebroot() {
    this._webroot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webrootInput() {
    return this._webroot;
  }

  // webroot_ti - computed: false, optional: true, required: false
  private _webrootTi?: number; 
  public get webrootTi() {
    return this.getNumberAttribute('webroot_ti');
  }
  public set webrootTi(value: number) {
    this._webrootTi = value;
  }
  public resetWebrootTi() {
    this._webrootTi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webrootTiInput() {
    return this._webrootTi;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      a10_ti: cdktf.numberToTerraform(this._a10Ti),
      id: cdktf.stringToTerraform(this._id),
      ipsec_vpn: cdktf.numberToTerraform(this._ipsecVpn),
      ngwaf: cdktf.numberToTerraform(this._ngwaf),
      qosmos: cdktf.numberToTerraform(this._qosmos),
      secure_gaming: cdktf.numberToTerraform(this._secureGaming),
      threatstop: cdktf.numberToTerraform(this._threatstop),
      webroot: cdktf.numberToTerraform(this._webroot),
      webroot_ti: cdktf.numberToTerraform(this._webrootTi),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      a10_ti: {
        value: cdktf.numberToHclTerraform(this._a10Ti),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_vpn: {
        value: cdktf.numberToHclTerraform(this._ipsecVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ngwaf: {
        value: cdktf.numberToHclTerraform(this._ngwaf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qosmos: {
        value: cdktf.numberToHclTerraform(this._qosmos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secure_gaming: {
        value: cdktf.numberToHclTerraform(this._secureGaming),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threatstop: {
        value: cdktf.numberToHclTerraform(this._threatstop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webroot: {
        value: cdktf.numberToHclTerraform(this._webroot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webroot_ti: {
        value: cdktf.numberToHclTerraform(this._webrootTi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
