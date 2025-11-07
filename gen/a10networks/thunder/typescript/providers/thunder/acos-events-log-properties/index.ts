// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_log_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosEventsLogPropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add Message ID in log messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_log_properties#add_msgid_in_header AcosEventsLogProperties#add_msgid_in_header}
  */
  readonly addMsgidInHeader?: number;
  /**
  * Enable 8K size remote TCP syslog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_log_properties#enable_8k_tcp_syslog AcosEventsLogProperties#enable_8k_tcp_syslog}
  */
  readonly enable8KTcpSyslog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_log_properties#id AcosEventsLogProperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_log_properties#uuid AcosEventsLogProperties#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_log_properties thunder_acos_events_log_properties}
*/
export class AcosEventsLogProperties extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_log_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosEventsLogProperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosEventsLogProperties to import
  * @param importFromId The id of the existing AcosEventsLogProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_log_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosEventsLogProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_log_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_log_properties thunder_acos_events_log_properties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosEventsLogPropertiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AcosEventsLogPropertiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_log_properties',
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
    this._addMsgidInHeader = config.addMsgidInHeader;
    this._enable8KTcpSyslog = config.enable8KTcpSyslog;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_msgid_in_header - computed: false, optional: true, required: false
  private _addMsgidInHeader?: number; 
  public get addMsgidInHeader() {
    return this.getNumberAttribute('add_msgid_in_header');
  }
  public set addMsgidInHeader(value: number) {
    this._addMsgidInHeader = value;
  }
  public resetAddMsgidInHeader() {
    this._addMsgidInHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addMsgidInHeaderInput() {
    return this._addMsgidInHeader;
  }

  // enable_8k_tcp_syslog - computed: false, optional: true, required: false
  private _enable8KTcpSyslog?: number; 
  public get enable8KTcpSyslog() {
    return this.getNumberAttribute('enable_8k_tcp_syslog');
  }
  public set enable8KTcpSyslog(value: number) {
    this._enable8KTcpSyslog = value;
  }
  public resetEnable8KTcpSyslog() {
    this._enable8KTcpSyslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enable8KTcpSyslogInput() {
    return this._enable8KTcpSyslog;
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
      add_msgid_in_header: cdktf.numberToTerraform(this._addMsgidInHeader),
      enable_8k_tcp_syslog: cdktf.numberToTerraform(this._enable8KTcpSyslog),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_msgid_in_header: {
        value: cdktf.numberToHclTerraform(this._addMsgidInHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_8k_tcp_syslog: {
        value: cdktf.numberToHclTerraform(this._enable8KTcpSyslog),
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
