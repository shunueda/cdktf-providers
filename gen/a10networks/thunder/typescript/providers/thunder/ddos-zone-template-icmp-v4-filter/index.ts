// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateIcmpV4FilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter using Berkeley packet filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#byte_offset_filter DdosZoneTemplateIcmpV4Filter#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#icmp_filter_action DdosZoneTemplateIcmpV4Filter#icmp_filter_action}
  */
  readonly icmpFilterAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#icmp_filter_action_list_name DdosZoneTemplateIcmpV4Filter#icmp_filter_action_list_name}
  */
  readonly icmpFilterActionListName?: string;
  /**
  * Inverse the result of matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#icmp_filter_inverse_match DdosZoneTemplateIcmpV4Filter#icmp_filter_inverse_match}
  */
  readonly icmpFilterInverseMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#icmp_filter_name DdosZoneTemplateIcmpV4Filter#icmp_filter_name}
  */
  readonly icmpFilterName: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#icmp_filter_regex DdosZoneTemplateIcmpV4Filter#icmp_filter_regex}
  */
  readonly icmpFilterRegex?: string;
  /**
  * sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#icmp_filter_seq DdosZoneTemplateIcmpV4Filter#icmp_filter_seq}
  */
  readonly icmpFilterSeq?: number;
  /**
  * IcmpTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#icmp_tmpl_name DdosZoneTemplateIcmpV4Filter#icmp_tmpl_name}
  */
  readonly icmpTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#id DdosZoneTemplateIcmpV4Filter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#user_tag DdosZoneTemplateIcmpV4Filter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#uuid DdosZoneTemplateIcmpV4Filter#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter thunder_ddos_zone_template_icmp_v4_filter}
*/
export class DdosZoneTemplateIcmpV4Filter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_icmp_v4_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateIcmpV4Filter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateIcmpV4Filter to import
  * @param importFromId The id of the existing DdosZoneTemplateIcmpV4Filter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateIcmpV4Filter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_icmp_v4_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_icmp_v4_filter thunder_ddos_zone_template_icmp_v4_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateIcmpV4FilterConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateIcmpV4FilterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_icmp_v4_filter',
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
    this._byteOffsetFilter = config.byteOffsetFilter;
    this._icmpFilterAction = config.icmpFilterAction;
    this._icmpFilterActionListName = config.icmpFilterActionListName;
    this._icmpFilterInverseMatch = config.icmpFilterInverseMatch;
    this._icmpFilterName = config.icmpFilterName;
    this._icmpFilterRegex = config.icmpFilterRegex;
    this._icmpFilterSeq = config.icmpFilterSeq;
    this._icmpTmplName = config.icmpTmplName;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // byte_offset_filter - computed: false, optional: true, required: false
  private _byteOffsetFilter?: string; 
  public get byteOffsetFilter() {
    return this.getStringAttribute('byte_offset_filter');
  }
  public set byteOffsetFilter(value: string) {
    this._byteOffsetFilter = value;
  }
  public resetByteOffsetFilter() {
    this._byteOffsetFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteOffsetFilterInput() {
    return this._byteOffsetFilter;
  }

  // icmp_filter_action - computed: false, optional: true, required: false
  private _icmpFilterAction?: string; 
  public get icmpFilterAction() {
    return this.getStringAttribute('icmp_filter_action');
  }
  public set icmpFilterAction(value: string) {
    this._icmpFilterAction = value;
  }
  public resetIcmpFilterAction() {
    this._icmpFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterActionInput() {
    return this._icmpFilterAction;
  }

  // icmp_filter_action_list_name - computed: false, optional: true, required: false
  private _icmpFilterActionListName?: string; 
  public get icmpFilterActionListName() {
    return this.getStringAttribute('icmp_filter_action_list_name');
  }
  public set icmpFilterActionListName(value: string) {
    this._icmpFilterActionListName = value;
  }
  public resetIcmpFilterActionListName() {
    this._icmpFilterActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterActionListNameInput() {
    return this._icmpFilterActionListName;
  }

  // icmp_filter_inverse_match - computed: false, optional: true, required: false
  private _icmpFilterInverseMatch?: number; 
  public get icmpFilterInverseMatch() {
    return this.getNumberAttribute('icmp_filter_inverse_match');
  }
  public set icmpFilterInverseMatch(value: number) {
    this._icmpFilterInverseMatch = value;
  }
  public resetIcmpFilterInverseMatch() {
    this._icmpFilterInverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterInverseMatchInput() {
    return this._icmpFilterInverseMatch;
  }

  // icmp_filter_name - computed: false, optional: false, required: true
  private _icmpFilterName?: string; 
  public get icmpFilterName() {
    return this.getStringAttribute('icmp_filter_name');
  }
  public set icmpFilterName(value: string) {
    this._icmpFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterNameInput() {
    return this._icmpFilterName;
  }

  // icmp_filter_regex - computed: false, optional: true, required: false
  private _icmpFilterRegex?: string; 
  public get icmpFilterRegex() {
    return this.getStringAttribute('icmp_filter_regex');
  }
  public set icmpFilterRegex(value: string) {
    this._icmpFilterRegex = value;
  }
  public resetIcmpFilterRegex() {
    this._icmpFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterRegexInput() {
    return this._icmpFilterRegex;
  }

  // icmp_filter_seq - computed: false, optional: true, required: false
  private _icmpFilterSeq?: number; 
  public get icmpFilterSeq() {
    return this.getNumberAttribute('icmp_filter_seq');
  }
  public set icmpFilterSeq(value: number) {
    this._icmpFilterSeq = value;
  }
  public resetIcmpFilterSeq() {
    this._icmpFilterSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilterSeqInput() {
    return this._icmpFilterSeq;
  }

  // icmp_tmpl_name - computed: false, optional: false, required: true
  private _icmpTmplName?: string; 
  public get icmpTmplName() {
    return this.getStringAttribute('icmp_tmpl_name');
  }
  public set icmpTmplName(value: string) {
    this._icmpTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTmplNameInput() {
    return this._icmpTmplName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      byte_offset_filter: cdktf.stringToTerraform(this._byteOffsetFilter),
      icmp_filter_action: cdktf.stringToTerraform(this._icmpFilterAction),
      icmp_filter_action_list_name: cdktf.stringToTerraform(this._icmpFilterActionListName),
      icmp_filter_inverse_match: cdktf.numberToTerraform(this._icmpFilterInverseMatch),
      icmp_filter_name: cdktf.stringToTerraform(this._icmpFilterName),
      icmp_filter_regex: cdktf.stringToTerraform(this._icmpFilterRegex),
      icmp_filter_seq: cdktf.numberToTerraform(this._icmpFilterSeq),
      icmp_tmpl_name: cdktf.stringToTerraform(this._icmpTmplName),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      byte_offset_filter: {
        value: cdktf.stringToHclTerraform(this._byteOffsetFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_filter_action: {
        value: cdktf.stringToHclTerraform(this._icmpFilterAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_filter_action_list_name: {
        value: cdktf.stringToHclTerraform(this._icmpFilterActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_filter_inverse_match: {
        value: cdktf.numberToHclTerraform(this._icmpFilterInverseMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_filter_name: {
        value: cdktf.stringToHclTerraform(this._icmpFilterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_filter_regex: {
        value: cdktf.stringToHclTerraform(this._icmpFilterRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_filter_seq: {
        value: cdktf.numberToHclTerraform(this._icmpFilterSeq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._icmpTmplName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
