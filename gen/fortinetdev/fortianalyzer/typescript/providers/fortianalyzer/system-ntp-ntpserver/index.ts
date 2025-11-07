// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNtpNtpserverAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver#authentication SystemNtpNtpserverA#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver#fosid SystemNtpNtpserverA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver#id SystemNtpNtpserverA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver#key SystemNtpNtpserverA#key}
  */
  readonly key?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver#key_id SystemNtpNtpserverA#key_id}
  */
  readonly keyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver#maxpoll SystemNtpNtpserverA#maxpoll}
  */
  readonly maxpoll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver#minpoll SystemNtpNtpserverA#minpoll}
  */
  readonly minpoll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver#ntpv3 SystemNtpNtpserverA#ntpv3}
  */
  readonly ntpv3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver#server SystemNtpNtpserverA#server}
  */
  readonly server?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver fortianalyzer_system_ntp_ntpserver}
*/
export class SystemNtpNtpserverA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_ntp_ntpserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNtpNtpserverA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNtpNtpserverA to import
  * @param importFromId The id of the existing SystemNtpNtpserverA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNtpNtpserverA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_ntp_ntpserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_ntp_ntpserver fortianalyzer_system_ntp_ntpserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNtpNtpserverAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemNtpNtpserverAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_ntp_ntpserver',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authentication = config.authentication;
    this._fosid = config.fosid;
    this._id = config.id;
    this._key = config.key;
    this._keyId = config.keyId;
    this._maxpoll = config.maxpoll;
    this._minpoll = config.minpoll;
    this._ntpv3 = config.ntpv3;
    this._server = config.server;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // key - computed: true, optional: true, required: false
  private _key?: string[]; 
  public get key() {
    return cdktf.Fn.tolist(this.getListAttribute('key'));
  }
  public set key(value: string[]) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // maxpoll - computed: true, optional: true, required: false
  private _maxpoll?: number; 
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }
  public set maxpoll(value: number) {
    this._maxpoll = value;
  }
  public resetMaxpoll() {
    this._maxpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpollInput() {
    return this._maxpoll;
  }

  // minpoll - computed: true, optional: true, required: false
  private _minpoll?: number; 
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }
  public set minpoll(value: number) {
    this._minpoll = value;
  }
  public resetMinpoll() {
    this._minpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minpollInput() {
    return this._minpoll;
  }

  // ntpv3 - computed: true, optional: true, required: false
  private _ntpv3?: string; 
  public get ntpv3() {
    return this.getStringAttribute('ntpv3');
  }
  public set ntpv3(value: string) {
    this._ntpv3 = value;
  }
  public resetNtpv3() {
    this._ntpv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpv3Input() {
    return this._ntpv3;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.stringToTerraform(this._authentication),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._key),
      key_id: cdktf.numberToTerraform(this._keyId),
      maxpoll: cdktf.numberToTerraform(this._maxpoll),
      minpoll: cdktf.numberToTerraform(this._minpoll),
      ntpv3: cdktf.stringToTerraform(this._ntpv3),
      server: cdktf.stringToTerraform(this._server),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._key),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key_id: {
        value: cdktf.numberToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxpoll: {
        value: cdktf.numberToHclTerraform(this._maxpoll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minpoll: {
        value: cdktf.numberToHclTerraform(this._minpoll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntpv3: {
        value: cdktf.stringToHclTerraform(this._ntpv3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
