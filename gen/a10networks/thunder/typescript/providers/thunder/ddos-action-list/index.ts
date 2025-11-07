// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosActionListConfig extends cdktf.TerraformMetaArguments {
  /**
  * capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#capture_config DdosActionList#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#id DdosActionList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS action-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#name DdosActionList#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#user_tag DdosActionList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#uuid DdosActionList#uuid}
  */
  readonly uuid?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#action DdosActionList#action}
  */
  readonly action?: DdosActionListAction;
  /**
  * zone_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#zone_template DdosActionList#zone_template}
  */
  readonly zoneTemplate?: DdosActionListZoneTemplate;
}
export interface DdosActionListAction {
  /**
  * 'drop': Drop Packet (Default); 'ignore': Continue processing the packet; 'reset': Reset the connection; 'authenticate-src': Authenticate the source IP; 'blacklist-src': Black-list the source IP; 'tunnel-encap-packet': Encapsulate packet for tunneling. encap template need to be bound;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#action DdosActionList#action}
  */
  readonly action?: string;
  /**
  * blacklist duration in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#blacklist_src_value DdosActionList#blacklist_src_value}
  */
  readonly blacklistSrcValue?: number;
  /**
  * allow packets to go through other DDoS checks before sent out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#scrub_packet DdosActionList#scrub_packet}
  */
  readonly scrubPacket?: number;
  /**
  * encapsulate all packests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#stateless DdosActionList#stateless}
  */
  readonly stateless?: number;
}

export function ddosActionListActionToTerraform(struct?: DdosActionListActionOutputReference | DdosActionListAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    blacklist_src_value: cdktf.numberToTerraform(struct!.blacklistSrcValue),
    scrub_packet: cdktf.numberToTerraform(struct!.scrubPacket),
    stateless: cdktf.numberToTerraform(struct!.stateless),
  }
}


export function ddosActionListActionToHclTerraform(struct?: DdosActionListActionOutputReference | DdosActionListAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blacklist_src_value: {
      value: cdktf.numberToHclTerraform(struct!.blacklistSrcValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scrub_packet: {
      value: cdktf.numberToHclTerraform(struct!.scrubPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stateless: {
      value: cdktf.numberToHclTerraform(struct!.stateless),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosActionListActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosActionListAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._blacklistSrcValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistSrcValue = this._blacklistSrcValue;
    }
    if (this._scrubPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrubPacket = this._scrubPacket;
    }
    if (this._stateless !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateless = this._stateless;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosActionListAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._blacklistSrcValue = undefined;
      this._scrubPacket = undefined;
      this._stateless = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._blacklistSrcValue = value.blacklistSrcValue;
      this._scrubPacket = value.scrubPacket;
      this._stateless = value.stateless;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // blacklist_src_value - computed: false, optional: true, required: false
  private _blacklistSrcValue?: number; 
  public get blacklistSrcValue() {
    return this.getNumberAttribute('blacklist_src_value');
  }
  public set blacklistSrcValue(value: number) {
    this._blacklistSrcValue = value;
  }
  public resetBlacklistSrcValue() {
    this._blacklistSrcValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistSrcValueInput() {
    return this._blacklistSrcValue;
  }

  // scrub_packet - computed: false, optional: true, required: false
  private _scrubPacket?: number; 
  public get scrubPacket() {
    return this.getNumberAttribute('scrub_packet');
  }
  public set scrubPacket(value: number) {
    this._scrubPacket = value;
  }
  public resetScrubPacket() {
    this._scrubPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrubPacketInput() {
    return this._scrubPacket;
  }

  // stateless - computed: false, optional: true, required: false
  private _stateless?: number; 
  public get stateless() {
    return this.getNumberAttribute('stateless');
  }
  public set stateless(value: number) {
    this._stateless = value;
  }
  public resetStateless() {
    this._stateless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessInput() {
    return this._stateless;
  }
}
export interface DdosActionListZoneTemplate {
  /**
  * DDOS encap template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#encap DdosActionList#encap}
  */
  readonly encap?: string;
  /**
  * DDOS logging zone-template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#logging DdosActionList#logging}
  */
  readonly logging?: string;
}

export function ddosActionListZoneTemplateToTerraform(struct?: DdosActionListZoneTemplateOutputReference | DdosActionListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap: cdktf.stringToTerraform(struct!.encap),
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosActionListZoneTemplateToHclTerraform(struct?: DdosActionListZoneTemplateOutputReference | DdosActionListZoneTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosActionListZoneTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosActionListZoneTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosActionListZoneTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encap = undefined;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encap = value.encap;
      this._logging = value.logging;
    }
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list thunder_ddos_action_list}
*/
export class DdosActionList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_action_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosActionList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosActionList to import
  * @param importFromId The id of the existing DdosActionList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosActionList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_action_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_action_list thunder_ddos_action_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosActionListConfig
  */
  public constructor(scope: Construct, id: string, config: DdosActionListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_action_list',
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
    this._captureConfig = config.captureConfig;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._action.internalValue = config.action;
    this._zoneTemplate.internalValue = config.zoneTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // action - computed: false, optional: true, required: false
  private _action = new DdosActionListActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DdosActionListAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // zone_template - computed: false, optional: true, required: false
  private _zoneTemplate = new DdosActionListZoneTemplateOutputReference(this, "zone_template");
  public get zoneTemplate() {
    return this._zoneTemplate;
  }
  public putZoneTemplate(value: DdosActionListZoneTemplate) {
    this._zoneTemplate.internalValue = value;
  }
  public resetZoneTemplate() {
    this._zoneTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTemplateInput() {
    return this._zoneTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_config: cdktf.stringToTerraform(this._captureConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      action: ddosActionListActionToTerraform(this._action.internalValue),
      zone_template: ddosActionListZoneTemplateToTerraform(this._zoneTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_config: {
        value: cdktf.stringToHclTerraform(this._captureConfig),
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
      action: {
        value: ddosActionListActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosActionListActionList",
      },
      zone_template: {
        value: ddosActionListZoneTemplateToHclTerraform(this._zoneTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosActionListZoneTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
