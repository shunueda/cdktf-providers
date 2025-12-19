// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_traffic_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateSslL4SslTrafficCheckAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply checks to SSL connections initialized by ACK packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_traffic_check#check_resumed_connection DdosZoneTemplateSslL4SslTrafficCheckA#check_resumed_connection}
  */
  readonly checkResumedConnection?: number;
  /**
  * 'drop': Drop packets with bad ssl header; 'ignore': Forward packets with bad ssl header;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_traffic_check#header_action DdosZoneTemplateSslL4SslTrafficCheckA#header_action}
  */
  readonly headerAction?: string;
  /**
  * Inspect ssl header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_traffic_check#header_inspection DdosZoneTemplateSslL4SslTrafficCheckA#header_inspection}
  */
  readonly headerInspection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_traffic_check#id DdosZoneTemplateSslL4SslTrafficCheckA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SslL4TmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_traffic_check#ssl_l4_tmpl_name DdosZoneTemplateSslL4SslTrafficCheckA#ssl_l4_tmpl_name}
  */
  readonly sslL4TmplName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_traffic_check#uuid DdosZoneTemplateSslL4SslTrafficCheckA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_traffic_check thunder_ddos_zone_template_ssl_l4_ssl_traffic_check}
*/
export class DdosZoneTemplateSslL4SslTrafficCheckA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_ssl_l4_ssl_traffic_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateSslL4SslTrafficCheckA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateSslL4SslTrafficCheckA to import
  * @param importFromId The id of the existing DdosZoneTemplateSslL4SslTrafficCheckA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_traffic_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateSslL4SslTrafficCheckA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_ssl_l4_ssl_traffic_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_ssl_l4_ssl_traffic_check thunder_ddos_zone_template_ssl_l4_ssl_traffic_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateSslL4SslTrafficCheckAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateSslL4SslTrafficCheckAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_ssl_l4_ssl_traffic_check',
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
    this._checkResumedConnection = config.checkResumedConnection;
    this._headerAction = config.headerAction;
    this._headerInspection = config.headerInspection;
    this._id = config.id;
    this._sslL4TmplName = config.sslL4TmplName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_resumed_connection - computed: false, optional: true, required: false
  private _checkResumedConnection?: number; 
  public get checkResumedConnection() {
    return this.getNumberAttribute('check_resumed_connection');
  }
  public set checkResumedConnection(value: number) {
    this._checkResumedConnection = value;
  }
  public resetCheckResumedConnection() {
    this._checkResumedConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkResumedConnectionInput() {
    return this._checkResumedConnection;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction?: string; 
  public get headerAction() {
    return this.getStringAttribute('header_action');
  }
  public set headerAction(value: string) {
    this._headerAction = value;
  }
  public resetHeaderAction() {
    this._headerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction;
  }

  // header_inspection - computed: false, optional: true, required: false
  private _headerInspection?: number; 
  public get headerInspection() {
    return this.getNumberAttribute('header_inspection');
  }
  public set headerInspection(value: number) {
    this._headerInspection = value;
  }
  public resetHeaderInspection() {
    this._headerInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInspectionInput() {
    return this._headerInspection;
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

  // ssl_l4_tmpl_name - computed: false, optional: false, required: true
  private _sslL4TmplName?: string; 
  public get sslL4TmplName() {
    return this.getStringAttribute('ssl_l4_tmpl_name');
  }
  public set sslL4TmplName(value: string) {
    this._sslL4TmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4TmplNameInput() {
    return this._sslL4TmplName;
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
      check_resumed_connection: cdktf.numberToTerraform(this._checkResumedConnection),
      header_action: cdktf.stringToTerraform(this._headerAction),
      header_inspection: cdktf.numberToTerraform(this._headerInspection),
      id: cdktf.stringToTerraform(this._id),
      ssl_l4_tmpl_name: cdktf.stringToTerraform(this._sslL4TmplName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_resumed_connection: {
        value: cdktf.numberToHclTerraform(this._checkResumedConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_action: {
        value: cdktf.stringToHclTerraform(this._headerAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_inspection: {
        value: cdktf.numberToHclTerraform(this._headerInspection),
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
      ssl_l4_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._sslL4TmplName),
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
