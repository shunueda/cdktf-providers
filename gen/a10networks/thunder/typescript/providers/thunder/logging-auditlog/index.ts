// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingAuditlogConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'local0': Local use; 'local1': Local use; 'local2': Local use; 'local3': Local use; 'local4': Local use; 'local5': Local use; 'local6': Local use; 'local7': Local use;  (Configure the facility of auditlog)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog#audit_facility LoggingAuditlog#audit_facility}
  */
  readonly auditFacility?: string;
  /**
  * Configure the auditlog host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog#host4 LoggingAuditlog#host4}
  */
  readonly host4?: string;
  /**
  * Configure the auditlog host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog#host6 LoggingAuditlog#host6}
  */
  readonly host6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog#id LoggingAuditlog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Select partition name for logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog#partition_name LoggingAuditlog#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Set remote audit log port number(Default 514)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog#port LoggingAuditlog#port}
  */
  readonly port?: number;
  /**
  * Select shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog#shared LoggingAuditlog#shared}
  */
  readonly shared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog#uuid LoggingAuditlog#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog thunder_logging_auditlog}
*/
export class LoggingAuditlog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_logging_auditlog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoggingAuditlog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoggingAuditlog to import
  * @param importFromId The id of the existing LoggingAuditlog that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoggingAuditlog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_logging_auditlog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/logging_auditlog thunder_logging_auditlog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingAuditlogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LoggingAuditlogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_logging_auditlog',
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
    this._auditFacility = config.auditFacility;
    this._host4 = config.host4;
    this._host6 = config.host6;
    this._id = config.id;
    this._partitionName = config.partitionName;
    this._port = config.port;
    this._shared = config.shared;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_facility - computed: false, optional: true, required: false
  private _auditFacility?: string; 
  public get auditFacility() {
    return this.getStringAttribute('audit_facility');
  }
  public set auditFacility(value: string) {
    this._auditFacility = value;
  }
  public resetAuditFacility() {
    this._auditFacility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFacilityInput() {
    return this._auditFacility;
  }

  // host4 - computed: false, optional: true, required: false
  private _host4?: string; 
  public get host4() {
    return this.getStringAttribute('host4');
  }
  public set host4(value: string) {
    this._host4 = value;
  }
  public resetHost4() {
    this._host4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get host4Input() {
    return this._host4;
  }

  // host6 - computed: false, optional: true, required: false
  private _host6?: string; 
  public get host6() {
    return this.getStringAttribute('host6');
  }
  public set host6(value: string) {
    this._host6 = value;
  }
  public resetHost6() {
    this._host6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get host6Input() {
    return this._host6;
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

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
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
      audit_facility: cdktf.stringToTerraform(this._auditFacility),
      host4: cdktf.stringToTerraform(this._host4),
      host6: cdktf.stringToTerraform(this._host6),
      id: cdktf.stringToTerraform(this._id),
      partition_name: cdktf.stringToTerraform(this._partitionName),
      port: cdktf.numberToTerraform(this._port),
      shared: cdktf.numberToTerraform(this._shared),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_facility: {
        value: cdktf.stringToHclTerraform(this._auditFacility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host4: {
        value: cdktf.stringToHclTerraform(this._host4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host6: {
        value: cdktf.stringToHclTerraform(this._host6),
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
      partition_name: {
        value: cdktf.stringToHclTerraform(this._partitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared: {
        value: cdktf.numberToHclTerraform(this._shared),
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
