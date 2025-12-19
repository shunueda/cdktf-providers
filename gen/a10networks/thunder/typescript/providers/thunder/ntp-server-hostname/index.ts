// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_server_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpServerHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable this NTP server; 'disable': Disable this NTP server;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_server_hostname#action NtpServerHostname#action}
  */
  readonly action?: string;
  /**
  * IPV4 address, IPV6 address or host name of NTP server(string1~63)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_server_hostname#host_servername NtpServerHostname#host_servername}
  */
  readonly hostServername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_server_hostname#id NtpServerHostname#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use trusted key to authenticate this NTP server (The trusted key number to use)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_server_hostname#key NtpServerHostname#key}
  */
  readonly key?: number;
  /**
  * Set this NTP server as preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_server_hostname#prefer NtpServerHostname#prefer}
  */
  readonly prefer?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_server_hostname#uuid NtpServerHostname#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_server_hostname thunder_ntp_server_hostname}
*/
export class NtpServerHostname extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ntp_server_hostname";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NtpServerHostname resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NtpServerHostname to import
  * @param importFromId The id of the existing NtpServerHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_server_hostname#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NtpServerHostname to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ntp_server_hostname", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_server_hostname thunder_ntp_server_hostname} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpServerHostnameConfig
  */
  public constructor(scope: Construct, id: string, config: NtpServerHostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ntp_server_hostname',
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
    this._action = config.action;
    this._hostServername = config.hostServername;
    this._id = config.id;
    this._key = config.key;
    this._prefer = config.prefer;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // host_servername - computed: false, optional: false, required: true
  private _hostServername?: string; 
  public get hostServername() {
    return this.getStringAttribute('host_servername');
  }
  public set hostServername(value: string) {
    this._hostServername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostServernameInput() {
    return this._hostServername;
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
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: number; 
  public get prefer() {
    return this.getNumberAttribute('prefer');
  }
  public set prefer(value: number) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
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
      action: cdktf.stringToTerraform(this._action),
      host_servername: cdktf.stringToTerraform(this._hostServername),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.numberToTerraform(this._key),
      prefer: cdktf.numberToTerraform(this._prefer),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_servername: {
        value: cdktf.stringToHclTerraform(this._hostServername),
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
        value: cdktf.numberToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefer: {
        value: cdktf.numberToHclTerraform(this._prefer),
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
