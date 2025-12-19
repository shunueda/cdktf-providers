// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateQuicVersionSupportedMalformedCheckAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#id DdosZoneTemplateQuicVersionSupportedMalformedCheckA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#malformed_check_action DdosZoneTemplateQuicVersionSupportedMalformedCheckA#malformed_check_action}
  */
  readonly malformedCheckAction?: string;
  /**
  * Configure action-list to take. Overwrites version action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#malformed_check_action_list_name DdosZoneTemplateQuicVersionSupportedMalformedCheckA#malformed_check_action_list_name}
  */
  readonly malformedCheckActionListName?: string;
  /**
  * 'enable': Enable malformed check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#malformed_enable DdosZoneTemplateQuicVersionSupportedMalformedCheckA#malformed_enable}
  */
  readonly malformedEnable: string;
  /**
  * Set the maximum destination CID length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#max_destination_cid_length DdosZoneTemplateQuicVersionSupportedMalformedCheckA#max_destination_cid_length}
  */
  readonly maxDestinationCidLength?: number;
  /**
  * Set the maximum source CID length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#max_source_cid_length DdosZoneTemplateQuicVersionSupportedMalformedCheckA#max_source_cid_length}
  */
  readonly maxSourceCidLength?: number;
  /**
  * QuicTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#quic_tmpl_name DdosZoneTemplateQuicVersionSupportedMalformedCheckA#quic_tmpl_name}
  */
  readonly quicTmplName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#uuid DdosZoneTemplateQuicVersionSupportedMalformedCheckA#uuid}
  */
  readonly uuid?: string;
  /**
  * VersionEnd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#version_end DdosZoneTemplateQuicVersionSupportedMalformedCheckA#version_end}
  */
  readonly versionEnd: string;
  /**
  * VersionStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#version_start DdosZoneTemplateQuicVersionSupportedMalformedCheckA#version_start}
  */
  readonly versionStart: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check thunder_ddos_zone_template_quic_version_supported_malformed_check}
*/
export class DdosZoneTemplateQuicVersionSupportedMalformedCheckA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_quic_version_supported_malformed_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateQuicVersionSupportedMalformedCheckA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateQuicVersionSupportedMalformedCheckA to import
  * @param importFromId The id of the existing DdosZoneTemplateQuicVersionSupportedMalformedCheckA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateQuicVersionSupportedMalformedCheckA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_quic_version_supported_malformed_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_quic_version_supported_malformed_check thunder_ddos_zone_template_quic_version_supported_malformed_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateQuicVersionSupportedMalformedCheckAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateQuicVersionSupportedMalformedCheckAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_quic_version_supported_malformed_check',
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
    this._malformedCheckAction = config.malformedCheckAction;
    this._malformedCheckActionListName = config.malformedCheckActionListName;
    this._malformedEnable = config.malformedEnable;
    this._maxDestinationCidLength = config.maxDestinationCidLength;
    this._maxSourceCidLength = config.maxSourceCidLength;
    this._quicTmplName = config.quicTmplName;
    this._uuid = config.uuid;
    this._versionEnd = config.versionEnd;
    this._versionStart = config.versionStart;
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

  // malformed_check_action - computed: false, optional: true, required: false
  private _malformedCheckAction?: string; 
  public get malformedCheckAction() {
    return this.getStringAttribute('malformed_check_action');
  }
  public set malformedCheckAction(value: string) {
    this._malformedCheckAction = value;
  }
  public resetMalformedCheckAction() {
    this._malformedCheckAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedCheckActionInput() {
    return this._malformedCheckAction;
  }

  // malformed_check_action_list_name - computed: false, optional: true, required: false
  private _malformedCheckActionListName?: string; 
  public get malformedCheckActionListName() {
    return this.getStringAttribute('malformed_check_action_list_name');
  }
  public set malformedCheckActionListName(value: string) {
    this._malformedCheckActionListName = value;
  }
  public resetMalformedCheckActionListName() {
    this._malformedCheckActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedCheckActionListNameInput() {
    return this._malformedCheckActionListName;
  }

  // malformed_enable - computed: false, optional: false, required: true
  private _malformedEnable?: string; 
  public get malformedEnable() {
    return this.getStringAttribute('malformed_enable');
  }
  public set malformedEnable(value: string) {
    this._malformedEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedEnableInput() {
    return this._malformedEnable;
  }

  // max_destination_cid_length - computed: false, optional: true, required: false
  private _maxDestinationCidLength?: number; 
  public get maxDestinationCidLength() {
    return this.getNumberAttribute('max_destination_cid_length');
  }
  public set maxDestinationCidLength(value: number) {
    this._maxDestinationCidLength = value;
  }
  public resetMaxDestinationCidLength() {
    this._maxDestinationCidLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDestinationCidLengthInput() {
    return this._maxDestinationCidLength;
  }

  // max_source_cid_length - computed: false, optional: true, required: false
  private _maxSourceCidLength?: number; 
  public get maxSourceCidLength() {
    return this.getNumberAttribute('max_source_cid_length');
  }
  public set maxSourceCidLength(value: number) {
    this._maxSourceCidLength = value;
  }
  public resetMaxSourceCidLength() {
    this._maxSourceCidLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSourceCidLengthInput() {
    return this._maxSourceCidLength;
  }

  // quic_tmpl_name - computed: false, optional: false, required: true
  private _quicTmplName?: string; 
  public get quicTmplName() {
    return this.getStringAttribute('quic_tmpl_name');
  }
  public set quicTmplName(value: string) {
    this._quicTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quicTmplNameInput() {
    return this._quicTmplName;
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

  // version_end - computed: false, optional: false, required: true
  private _versionEnd?: string; 
  public get versionEnd() {
    return this.getStringAttribute('version_end');
  }
  public set versionEnd(value: string) {
    this._versionEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionEndInput() {
    return this._versionEnd;
  }

  // version_start - computed: false, optional: false, required: true
  private _versionStart?: string; 
  public get versionStart() {
    return this.getStringAttribute('version_start');
  }
  public set versionStart(value: string) {
    this._versionStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStartInput() {
    return this._versionStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      malformed_check_action: cdktf.stringToTerraform(this._malformedCheckAction),
      malformed_check_action_list_name: cdktf.stringToTerraform(this._malformedCheckActionListName),
      malformed_enable: cdktf.stringToTerraform(this._malformedEnable),
      max_destination_cid_length: cdktf.numberToTerraform(this._maxDestinationCidLength),
      max_source_cid_length: cdktf.numberToTerraform(this._maxSourceCidLength),
      quic_tmpl_name: cdktf.stringToTerraform(this._quicTmplName),
      uuid: cdktf.stringToTerraform(this._uuid),
      version_end: cdktf.stringToTerraform(this._versionEnd),
      version_start: cdktf.stringToTerraform(this._versionStart),
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
      malformed_check_action: {
        value: cdktf.stringToHclTerraform(this._malformedCheckAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_check_action_list_name: {
        value: cdktf.stringToHclTerraform(this._malformedCheckActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_enable: {
        value: cdktf.stringToHclTerraform(this._malformedEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_destination_cid_length: {
        value: cdktf.numberToHclTerraform(this._maxDestinationCidLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_source_cid_length: {
        value: cdktf.numberToHclTerraform(this._maxSourceCidLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quic_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._quicTmplName),
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
      version_end: {
        value: cdktf.stringToHclTerraform(this._versionEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_start: {
        value: cdktf.stringToHclTerraform(this._versionStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
