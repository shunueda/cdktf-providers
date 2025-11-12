// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateQuicVersionSupportedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#id DdosZoneTemplateQuicVersionSupported#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * QuicTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#quic_tmpl_name DdosZoneTemplateQuicVersionSupported#quic_tmpl_name}
  */
  readonly quicTmplName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#user_tag DdosZoneTemplateQuicVersionSupported#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#uuid DdosZoneTemplateQuicVersionSupported#uuid}
  */
  readonly uuid?: string;
  /**
  * 'drop': Drop packets; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#version_action DdosZoneTemplateQuicVersionSupported#version_action}
  */
  readonly versionAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#version_action_list_name DdosZoneTemplateQuicVersionSupported#version_action_list_name}
  */
  readonly versionActionListName?: string;
  /**
  * Version supported range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#version_end DdosZoneTemplateQuicVersionSupported#version_end}
  */
  readonly versionEnd: string;
  /**
  * Configure versions supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#version_start DdosZoneTemplateQuicVersionSupported#version_start}
  */
  readonly versionStart: string;
  /**
  * malformed_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#malformed_check DdosZoneTemplateQuicVersionSupported#malformed_check}
  */
  readonly malformedCheck?: DdosZoneTemplateQuicVersionSupportedMalformedCheck;
}
export interface DdosZoneTemplateQuicVersionSupportedMalformedCheck {
  /**
  * 'drop': Drop packets (Default); 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#malformed_check_action DdosZoneTemplateQuicVersionSupported#malformed_check_action}
  */
  readonly malformedCheckAction?: string;
  /**
  * Configure action-list to take. Overwrites version action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#malformed_check_action_list_name DdosZoneTemplateQuicVersionSupported#malformed_check_action_list_name}
  */
  readonly malformedCheckActionListName?: string;
  /**
  * 'enable': Enable malformed check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#malformed_enable DdosZoneTemplateQuicVersionSupported#malformed_enable}
  */
  readonly malformedEnable?: string;
  /**
  * Set the maximum destination CID length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#max_destination_cid_length DdosZoneTemplateQuicVersionSupported#max_destination_cid_length}
  */
  readonly maxDestinationCidLength?: number;
  /**
  * Set the maximum source CID length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#max_source_cid_length DdosZoneTemplateQuicVersionSupported#max_source_cid_length}
  */
  readonly maxSourceCidLength?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#uuid DdosZoneTemplateQuicVersionSupported#uuid}
  */
  readonly uuid?: string;
}

export function ddosZoneTemplateQuicVersionSupportedMalformedCheckToTerraform(struct?: DdosZoneTemplateQuicVersionSupportedMalformedCheckOutputReference | DdosZoneTemplateQuicVersionSupportedMalformedCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    malformed_check_action: cdktf.stringToTerraform(struct!.malformedCheckAction),
    malformed_check_action_list_name: cdktf.stringToTerraform(struct!.malformedCheckActionListName),
    malformed_enable: cdktf.stringToTerraform(struct!.malformedEnable),
    max_destination_cid_length: cdktf.numberToTerraform(struct!.maxDestinationCidLength),
    max_source_cid_length: cdktf.numberToTerraform(struct!.maxSourceCidLength),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosZoneTemplateQuicVersionSupportedMalformedCheckToHclTerraform(struct?: DdosZoneTemplateQuicVersionSupportedMalformedCheckOutputReference | DdosZoneTemplateQuicVersionSupportedMalformedCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    malformed_check_action: {
      value: cdktf.stringToHclTerraform(struct!.malformedCheckAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_check_action_list_name: {
      value: cdktf.stringToHclTerraform(struct!.malformedCheckActionListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed_enable: {
      value: cdktf.stringToHclTerraform(struct!.malformedEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_destination_cid_length: {
      value: cdktf.numberToHclTerraform(struct!.maxDestinationCidLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_source_cid_length: {
      value: cdktf.numberToHclTerraform(struct!.maxSourceCidLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateQuicVersionSupportedMalformedCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateQuicVersionSupportedMalformedCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malformedCheckAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedCheckAction = this._malformedCheckAction;
    }
    if (this._malformedCheckActionListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedCheckActionListName = this._malformedCheckActionListName;
    }
    if (this._malformedEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedEnable = this._malformedEnable;
    }
    if (this._maxDestinationCidLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDestinationCidLength = this._maxDestinationCidLength;
    }
    if (this._maxSourceCidLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSourceCidLength = this._maxSourceCidLength;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateQuicVersionSupportedMalformedCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._malformedCheckAction = undefined;
      this._malformedCheckActionListName = undefined;
      this._malformedEnable = undefined;
      this._maxDestinationCidLength = undefined;
      this._maxSourceCidLength = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._malformedCheckAction = value.malformedCheckAction;
      this._malformedCheckActionListName = value.malformedCheckActionListName;
      this._malformedEnable = value.malformedEnable;
      this._maxDestinationCidLength = value.maxDestinationCidLength;
      this._maxSourceCidLength = value.maxSourceCidLength;
      this._uuid = value.uuid;
    }
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

  // malformed_enable - computed: false, optional: true, required: false
  private _malformedEnable?: string; 
  public get malformedEnable() {
    return this.getStringAttribute('malformed_enable');
  }
  public set malformedEnable(value: string) {
    this._malformedEnable = value;
  }
  public resetMalformedEnable() {
    this._malformedEnable = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported thunder_ddos_zone_template_quic_version_supported}
*/
export class DdosZoneTemplateQuicVersionSupported extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_quic_version_supported";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateQuicVersionSupported resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateQuicVersionSupported to import
  * @param importFromId The id of the existing DdosZoneTemplateQuicVersionSupported that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateQuicVersionSupported to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_quic_version_supported", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_quic_version_supported thunder_ddos_zone_template_quic_version_supported} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateQuicVersionSupportedConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateQuicVersionSupportedConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_quic_version_supported',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._quicTmplName = config.quicTmplName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._versionAction = config.versionAction;
    this._versionActionListName = config.versionActionListName;
    this._versionEnd = config.versionEnd;
    this._versionStart = config.versionStart;
    this._malformedCheck.internalValue = config.malformedCheck;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // version_action - computed: false, optional: true, required: false
  private _versionAction?: string; 
  public get versionAction() {
    return this.getStringAttribute('version_action');
  }
  public set versionAction(value: string) {
    this._versionAction = value;
  }
  public resetVersionAction() {
    this._versionAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionActionInput() {
    return this._versionAction;
  }

  // version_action_list_name - computed: false, optional: true, required: false
  private _versionActionListName?: string; 
  public get versionActionListName() {
    return this.getStringAttribute('version_action_list_name');
  }
  public set versionActionListName(value: string) {
    this._versionActionListName = value;
  }
  public resetVersionActionListName() {
    this._versionActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionActionListNameInput() {
    return this._versionActionListName;
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

  // malformed_check - computed: false, optional: true, required: false
  private _malformedCheck = new DdosZoneTemplateQuicVersionSupportedMalformedCheckOutputReference(this, "malformed_check");
  public get malformedCheck() {
    return this._malformedCheck;
  }
  public putMalformedCheck(value: DdosZoneTemplateQuicVersionSupportedMalformedCheck) {
    this._malformedCheck.internalValue = value;
  }
  public resetMalformedCheck() {
    this._malformedCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedCheckInput() {
    return this._malformedCheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      quic_tmpl_name: cdktf.stringToTerraform(this._quicTmplName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      version_action: cdktf.stringToTerraform(this._versionAction),
      version_action_list_name: cdktf.stringToTerraform(this._versionActionListName),
      version_end: cdktf.stringToTerraform(this._versionEnd),
      version_start: cdktf.stringToTerraform(this._versionStart),
      malformed_check: ddosZoneTemplateQuicVersionSupportedMalformedCheckToTerraform(this._malformedCheck.internalValue),
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
      quic_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._quicTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      version_action: {
        value: cdktf.stringToHclTerraform(this._versionAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_action_list_name: {
        value: cdktf.stringToHclTerraform(this._versionActionListName),
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
      malformed_check: {
        value: ddosZoneTemplateQuicVersionSupportedMalformedCheckToHclTerraform(this._malformedCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateQuicVersionSupportedMalformedCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
