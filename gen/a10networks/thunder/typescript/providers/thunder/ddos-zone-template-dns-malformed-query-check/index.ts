// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateDnsMalformedQueryCheckAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop packets (Default); 'ignore': Take no action; 'blacklist-src': Blacklist-src; 'reset': Reset client connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check#dns_malformed_query_action DdosZoneTemplateDnsMalformedQueryCheckA#dns_malformed_query_action}
  */
  readonly dnsMalformedQueryAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check#dns_malformed_query_action_list_name DdosZoneTemplateDnsMalformedQueryCheckA#dns_malformed_query_action_list_name}
  */
  readonly dnsMalformedQueryActionListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check#id DdosZoneTemplateDnsMalformedQueryCheckA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check#name DdosZoneTemplateDnsMalformedQueryCheckA#name}
  */
  readonly name: string;
  /**
  * 'disable': When malform check is enabled, TPS always drops DNS query with non query opcode, this option disables this opcode check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check#non_query_opcode_check DdosZoneTemplateDnsMalformedQueryCheckA#non_query_opcode_check}
  */
  readonly nonQueryOpcodeCheck?: string;
  /**
  * Bypass DNS fragmented and TCP segmented Queries(Default: dropped)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check#skip_multi_packet_check DdosZoneTemplateDnsMalformedQueryCheckA#skip_multi_packet_check}
  */
  readonly skipMultiPacketCheck?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check#uuid DdosZoneTemplateDnsMalformedQueryCheckA#uuid}
  */
  readonly uuid?: string;
  /**
  * 'basic-header-check': Basic header validation for DNS TCP/UDP queries; 'extended-header-check': Extended header/query validation for DNS TCP/UDP queries; 'disable': Disable Malform query validation for DNS TCP/UDP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check#validation_type DdosZoneTemplateDnsMalformedQueryCheckA#validation_type}
  */
  readonly validationType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check thunder_ddos_zone_template_dns_malformed_query_check}
*/
export class DdosZoneTemplateDnsMalformedQueryCheckA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_dns_malformed_query_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateDnsMalformedQueryCheckA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateDnsMalformedQueryCheckA to import
  * @param importFromId The id of the existing DdosZoneTemplateDnsMalformedQueryCheckA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateDnsMalformedQueryCheckA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_dns_malformed_query_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_dns_malformed_query_check thunder_ddos_zone_template_dns_malformed_query_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateDnsMalformedQueryCheckAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateDnsMalformedQueryCheckAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_dns_malformed_query_check',
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
    this._dnsMalformedQueryAction = config.dnsMalformedQueryAction;
    this._dnsMalformedQueryActionListName = config.dnsMalformedQueryActionListName;
    this._id = config.id;
    this._name = config.name;
    this._nonQueryOpcodeCheck = config.nonQueryOpcodeCheck;
    this._skipMultiPacketCheck = config.skipMultiPacketCheck;
    this._uuid = config.uuid;
    this._validationType = config.validationType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_malformed_query_action - computed: false, optional: true, required: false
  private _dnsMalformedQueryAction?: string; 
  public get dnsMalformedQueryAction() {
    return this.getStringAttribute('dns_malformed_query_action');
  }
  public set dnsMalformedQueryAction(value: string) {
    this._dnsMalformedQueryAction = value;
  }
  public resetDnsMalformedQueryAction() {
    this._dnsMalformedQueryAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMalformedQueryActionInput() {
    return this._dnsMalformedQueryAction;
  }

  // dns_malformed_query_action_list_name - computed: false, optional: true, required: false
  private _dnsMalformedQueryActionListName?: string; 
  public get dnsMalformedQueryActionListName() {
    return this.getStringAttribute('dns_malformed_query_action_list_name');
  }
  public set dnsMalformedQueryActionListName(value: string) {
    this._dnsMalformedQueryActionListName = value;
  }
  public resetDnsMalformedQueryActionListName() {
    this._dnsMalformedQueryActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMalformedQueryActionListNameInput() {
    return this._dnsMalformedQueryActionListName;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // non_query_opcode_check - computed: false, optional: true, required: false
  private _nonQueryOpcodeCheck?: string; 
  public get nonQueryOpcodeCheck() {
    return this.getStringAttribute('non_query_opcode_check');
  }
  public set nonQueryOpcodeCheck(value: string) {
    this._nonQueryOpcodeCheck = value;
  }
  public resetNonQueryOpcodeCheck() {
    this._nonQueryOpcodeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonQueryOpcodeCheckInput() {
    return this._nonQueryOpcodeCheck;
  }

  // skip_multi_packet_check - computed: false, optional: true, required: false
  private _skipMultiPacketCheck?: number; 
  public get skipMultiPacketCheck() {
    return this.getNumberAttribute('skip_multi_packet_check');
  }
  public set skipMultiPacketCheck(value: number) {
    this._skipMultiPacketCheck = value;
  }
  public resetSkipMultiPacketCheck() {
    this._skipMultiPacketCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMultiPacketCheckInput() {
    return this._skipMultiPacketCheck;
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

  // validation_type - computed: false, optional: true, required: false
  private _validationType?: string; 
  public get validationType() {
    return this.getStringAttribute('validation_type');
  }
  public set validationType(value: string) {
    this._validationType = value;
  }
  public resetValidationType() {
    this._validationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationTypeInput() {
    return this._validationType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_malformed_query_action: cdktf.stringToTerraform(this._dnsMalformedQueryAction),
      dns_malformed_query_action_list_name: cdktf.stringToTerraform(this._dnsMalformedQueryActionListName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      non_query_opcode_check: cdktf.stringToTerraform(this._nonQueryOpcodeCheck),
      skip_multi_packet_check: cdktf.numberToTerraform(this._skipMultiPacketCheck),
      uuid: cdktf.stringToTerraform(this._uuid),
      validation_type: cdktf.stringToTerraform(this._validationType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_malformed_query_action: {
        value: cdktf.stringToHclTerraform(this._dnsMalformedQueryAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_malformed_query_action_list_name: {
        value: cdktf.stringToHclTerraform(this._dnsMalformedQueryActionListName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_query_opcode_check: {
        value: cdktf.stringToHclTerraform(this._nonQueryOpcodeCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_multi_packet_check: {
        value: cdktf.numberToHclTerraform(this._skipMultiPacketCheck),
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
      validation_type: {
        value: cdktf.stringToHclTerraform(this._validationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
