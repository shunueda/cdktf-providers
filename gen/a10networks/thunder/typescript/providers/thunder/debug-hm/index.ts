// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_hm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugHmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_hm#id DebugHm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Debug level (Level 1-3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_hm#level DebugHm#level}
  */
  readonly level?: number;
  /**
  * 'icmp': ICMP type; 'tcp': TCP type; 'udp': UDP type; 'ftp': FTP type; 'http': HTTP type; 'snmp': SNMP type; 'smtp': SMTP type; 'dns': DNS type; 'dns-tcp': DNS TCP type; 'pop3': POP3 type; 'imap': IMAP type; 'sip': SIP type; 'sip-tcp': SIP TCP type; 'radius': RADIUS type; 'ldap': LDAP type; 'rtsp': RTSP type; 'kerberos-kdc': Kerberos KDC type; 'database': DATABASE type; 'external': EXTERNAL type; 'https': HTTPS type; 'ntp': NTP type; 'compound': Compound type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_hm#method_type DebugHm#method_type}
  */
  readonly methodType?: string;
  /**
  * Debug Pin Unique Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_hm#pin_uid DebugHm#pin_uid}
  */
  readonly pinUid?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_hm#uuid DebugHm#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_hm thunder_debug_hm}
*/
export class DebugHm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_hm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugHm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugHm to import
  * @param importFromId The id of the existing DebugHm that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_hm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugHm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_hm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_hm thunder_debug_hm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugHmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugHmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_hm',
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
    this._id = config.id;
    this._level = config.level;
    this._methodType = config.methodType;
    this._pinUid = config.pinUid;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // method_type - computed: false, optional: true, required: false
  private _methodType?: string; 
  public get methodType() {
    return this.getStringAttribute('method_type');
  }
  public set methodType(value: string) {
    this._methodType = value;
  }
  public resetMethodType() {
    this._methodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTypeInput() {
    return this._methodType;
  }

  // pin_uid - computed: false, optional: true, required: false
  private _pinUid?: number; 
  public get pinUid() {
    return this.getNumberAttribute('pin_uid');
  }
  public set pinUid(value: number) {
    this._pinUid = value;
  }
  public resetPinUid() {
    this._pinUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinUidInput() {
    return this._pinUid;
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
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.numberToTerraform(this._level),
      method_type: cdktf.stringToTerraform(this._methodType),
      pin_uid: cdktf.numberToTerraform(this._pinUid),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.numberToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      method_type: {
        value: cdktf.stringToHclTerraform(this._methodType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pin_uid: {
        value: cdktf.numberToHclTerraform(this._pinUid),
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
