// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateSipFilterHeaderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#id DdosZoneTemplateSipFilterHeader#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'authenticate-src': Authenticate-src; 'reset': Reset client connection(for sip-tcp);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#sip_filter_action DdosZoneTemplateSipFilterHeader#sip_filter_action}
  */
  readonly sipFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#sip_filter_action_list_name DdosZoneTemplateSipFilterHeader#sip_filter_action_list_name}
  */
  readonly sipFilterActionListName?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#sip_filter_header_seq DdosZoneTemplateSipFilterHeader#sip_filter_header_seq}
  */
  readonly sipFilterHeaderSeq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#sip_filter_name DdosZoneTemplateSipFilterHeader#sip_filter_name}
  */
  readonly sipFilterName: string;
  /**
  * SipTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#sip_tmpl_name DdosZoneTemplateSipFilterHeader#sip_tmpl_name}
  */
  readonly sipTmplName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#user_tag DdosZoneTemplateSipFilterHeader#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#uuid DdosZoneTemplateSipFilterHeader#uuid}
  */
  readonly uuid?: string;
  /**
  * sip_header_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#sip_header_cfg DdosZoneTemplateSipFilterHeader#sip_header_cfg}
  */
  readonly sipHeaderCfg?: DdosZoneTemplateSipFilterHeaderSipHeaderCfg;
}
export interface DdosZoneTemplateSipFilterHeaderSipHeaderCfg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#sip_filter_header_inverse_match DdosZoneTemplateSipFilterHeader#sip_filter_header_inverse_match}
  */
  readonly sipFilterHeaderInverseMatch?: number;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#sip_filter_header_regex DdosZoneTemplateSipFilterHeader#sip_filter_header_regex}
  */
  readonly sipFilterHeaderRegex?: string;
}

export function ddosZoneTemplateSipFilterHeaderSipHeaderCfgToTerraform(struct?: DdosZoneTemplateSipFilterHeaderSipHeaderCfgOutputReference | DdosZoneTemplateSipFilterHeaderSipHeaderCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sip_filter_header_inverse_match: cdktf.numberToTerraform(struct!.sipFilterHeaderInverseMatch),
    sip_filter_header_regex: cdktf.stringToTerraform(struct!.sipFilterHeaderRegex),
  }
}


export function ddosZoneTemplateSipFilterHeaderSipHeaderCfgToHclTerraform(struct?: DdosZoneTemplateSipFilterHeaderSipHeaderCfgOutputReference | DdosZoneTemplateSipFilterHeaderSipHeaderCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sip_filter_header_inverse_match: {
      value: cdktf.numberToHclTerraform(struct!.sipFilterHeaderInverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_filter_header_regex: {
      value: cdktf.stringToHclTerraform(struct!.sipFilterHeaderRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateSipFilterHeaderSipHeaderCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateSipFilterHeaderSipHeaderCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sipFilterHeaderInverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderInverseMatch = this._sipFilterHeaderInverseMatch;
    }
    if (this._sipFilterHeaderRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipFilterHeaderRegex = this._sipFilterHeaderRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateSipFilterHeaderSipHeaderCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sipFilterHeaderInverseMatch = undefined;
      this._sipFilterHeaderRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sipFilterHeaderInverseMatch = value.sipFilterHeaderInverseMatch;
      this._sipFilterHeaderRegex = value.sipFilterHeaderRegex;
    }
  }

  // sip_filter_header_inverse_match - computed: false, optional: true, required: false
  private _sipFilterHeaderInverseMatch?: number; 
  public get sipFilterHeaderInverseMatch() {
    return this.getNumberAttribute('sip_filter_header_inverse_match');
  }
  public set sipFilterHeaderInverseMatch(value: number) {
    this._sipFilterHeaderInverseMatch = value;
  }
  public resetSipFilterHeaderInverseMatch() {
    this._sipFilterHeaderInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderInverseMatchInput() {
    return this._sipFilterHeaderInverseMatch;
  }

  // sip_filter_header_regex - computed: false, optional: true, required: false
  private _sipFilterHeaderRegex?: string; 
  public get sipFilterHeaderRegex() {
    return this.getStringAttribute('sip_filter_header_regex');
  }
  public set sipFilterHeaderRegex(value: string) {
    this._sipFilterHeaderRegex = value;
  }
  public resetSipFilterHeaderRegex() {
    this._sipFilterHeaderRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderRegexInput() {
    return this._sipFilterHeaderRegex;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header thunder_ddos_zone_template_sip_filter_header}
*/
export class DdosZoneTemplateSipFilterHeader extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_sip_filter_header";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateSipFilterHeader resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateSipFilterHeader to import
  * @param importFromId The id of the existing DdosZoneTemplateSipFilterHeader that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateSipFilterHeader to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_sip_filter_header", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_filter_header thunder_ddos_zone_template_sip_filter_header} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateSipFilterHeaderConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateSipFilterHeaderConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_sip_filter_header',
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
    this._id = config.id;
    this._sipFilterAction = config.sipFilterAction;
    this._sipFilterActionListName = config.sipFilterActionListName;
    this._sipFilterHeaderSeq = config.sipFilterHeaderSeq;
    this._sipFilterName = config.sipFilterName;
    this._sipTmplName = config.sipTmplName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._sipHeaderCfg.internalValue = config.sipHeaderCfg;
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

  // sip_filter_action - computed: false, optional: true, required: false
  private _sipFilterAction?: string; 
  public get sipFilterAction() {
    return this.getStringAttribute('sip_filter_action');
  }
  public set sipFilterAction(value: string) {
    this._sipFilterAction = value;
  }
  public resetSipFilterAction() {
    this._sipFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterActionInput() {
    return this._sipFilterAction;
  }

  // sip_filter_action_list_name - computed: false, optional: true, required: false
  private _sipFilterActionListName?: string; 
  public get sipFilterActionListName() {
    return this.getStringAttribute('sip_filter_action_list_name');
  }
  public set sipFilterActionListName(value: string) {
    this._sipFilterActionListName = value;
  }
  public resetSipFilterActionListName() {
    this._sipFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterActionListNameInput() {
    return this._sipFilterActionListName;
  }

  // sip_filter_header_seq - computed: false, optional: true, required: false
  private _sipFilterHeaderSeq?: number; 
  public get sipFilterHeaderSeq() {
    return this.getNumberAttribute('sip_filter_header_seq');
  }
  public set sipFilterHeaderSeq(value: number) {
    this._sipFilterHeaderSeq = value;
  }
  public resetSipFilterHeaderSeq() {
    this._sipFilterHeaderSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterHeaderSeqInput() {
    return this._sipFilterHeaderSeq;
  }

  // sip_filter_name - computed: false, optional: false, required: true
  private _sipFilterName?: string; 
  public get sipFilterName() {
    return this.getStringAttribute('sip_filter_name');
  }
  public set sipFilterName(value: string) {
    this._sipFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipFilterNameInput() {
    return this._sipFilterName;
  }

  // sip_tmpl_name - computed: false, optional: false, required: true
  private _sipTmplName?: string; 
  public get sipTmplName() {
    return this.getStringAttribute('sip_tmpl_name');
  }
  public set sipTmplName(value: string) {
    this._sipTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipTmplNameInput() {
    return this._sipTmplName;
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

  // sip_header_cfg - computed: false, optional: true, required: false
  private _sipHeaderCfg = new DdosZoneTemplateSipFilterHeaderSipHeaderCfgOutputReference(this, "sip_header_cfg");
  public get sipHeaderCfg() {
    return this._sipHeaderCfg;
  }
  public putSipHeaderCfg(value: DdosZoneTemplateSipFilterHeaderSipHeaderCfg) {
    this._sipHeaderCfg.internalValue = value;
  }
  public resetSipHeaderCfg() {
    this._sipHeaderCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipHeaderCfgInput() {
    return this._sipHeaderCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sip_filter_action: cdktf.stringToTerraform(this._sipFilterAction),
      sip_filter_action_list_name: cdktf.stringToTerraform(this._sipFilterActionListName),
      sip_filter_header_seq: cdktf.numberToTerraform(this._sipFilterHeaderSeq),
      sip_filter_name: cdktf.stringToTerraform(this._sipFilterName),
      sip_tmpl_name: cdktf.stringToTerraform(this._sipTmplName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      sip_header_cfg: ddosZoneTemplateSipFilterHeaderSipHeaderCfgToTerraform(this._sipHeaderCfg.internalValue),
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
      sip_filter_action: {
        value: cdktf.stringToHclTerraform(this._sipFilterAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_filter_action_list_name: {
        value: cdktf.stringToHclTerraform(this._sipFilterActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_filter_header_seq: {
        value: cdktf.numberToHclTerraform(this._sipFilterHeaderSeq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_filter_name: {
        value: cdktf.stringToHclTerraform(this._sipFilterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._sipTmplName),
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
      sip_header_cfg: {
        value: ddosZoneTemplateSipFilterHeaderSipHeaderCfgToHclTerraform(this._sipHeaderCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateSipFilterHeaderSipHeaderCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
