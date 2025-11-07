// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstEntryPortSignatureExtractionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'heuristic': heuristic algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction#algorithm DdosDstEntryPortSignatureExtractionA#algorithm}
  */
  readonly algorithm: string;
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction#dst_entry_name DdosDstEntryPortSignatureExtractionA#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction#id DdosDstEntryPortSignatureExtractionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable manual mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction#manual_mode DdosDstEntryPortSignatureExtractionA#manual_mode}
  */
  readonly manualMode?: number;
  /**
  * PortNum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction#port_num DdosDstEntryPortSignatureExtractionA#port_num}
  */
  readonly portNum: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction#protocol DdosDstEntryPortSignatureExtractionA#protocol}
  */
  readonly protocol: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction#uuid DdosDstEntryPortSignatureExtractionA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction thunder_ddos_dst_entry_port_signature_extraction}
*/
export class DdosDstEntryPortSignatureExtractionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_port_signature_extraction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstEntryPortSignatureExtractionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstEntryPortSignatureExtractionA to import
  * @param importFromId The id of the existing DdosDstEntryPortSignatureExtractionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstEntryPortSignatureExtractionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_port_signature_extraction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_port_signature_extraction thunder_ddos_dst_entry_port_signature_extraction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstEntryPortSignatureExtractionAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstEntryPortSignatureExtractionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_port_signature_extraction',
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
    this._algorithm = config.algorithm;
    this._dstEntryName = config.dstEntryName;
    this._id = config.id;
    this._manualMode = config.manualMode;
    this._portNum = config.portNum;
    this._protocol = config.protocol;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
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

  // manual_mode - computed: false, optional: true, required: false
  private _manualMode?: number; 
  public get manualMode() {
    return this.getNumberAttribute('manual_mode');
  }
  public set manualMode(value: number) {
    this._manualMode = value;
  }
  public resetManualMode() {
    this._manualMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualModeInput() {
    return this._manualMode;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: string; 
  public get portNum() {
    return this.getStringAttribute('port_num');
  }
  public set portNum(value: string) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
      algorithm: cdktf.stringToTerraform(this._algorithm),
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      id: cdktf.stringToTerraform(this._id),
      manual_mode: cdktf.numberToTerraform(this._manualMode),
      port_num: cdktf.stringToTerraform(this._portNum),
      protocol: cdktf.stringToTerraform(this._protocol),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
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
      manual_mode: {
        value: cdktf.numberToHclTerraform(this._manualMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_num: {
        value: cdktf.stringToHclTerraform(this._portNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
