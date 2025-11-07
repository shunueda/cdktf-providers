// https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaapAdvancedRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description assigned to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#description WaapAdvancedRule#description}
  */
  readonly description?: string;
  /**
  * The WAAP domain ID for which the Advanced Rule is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#domain_id WaapAdvancedRule#domain_id}
  */
  readonly domainId: number;
  /**
  * Whether the rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#enabled WaapAdvancedRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#id WaapAdvancedRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name assigned to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#name WaapAdvancedRule#name}
  */
  readonly name: string;
  /**
  * The WAAP request/response phase for applying the rule. The 'access' phase is responsible for modifying the request before it is sent to the origin server. The 'header_filter' phase is responsible for modifying the HTTP headers of a response before they are sent back to the client.The 'body_filter' phase is responsible for modifying the body of a response before it is sent back to the client. Default is 'access'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#phase WaapAdvancedRule#phase}
  */
  readonly phase?: string;
  /**
  * A CEL syntax expression that contains the rule's conditions. Allowed objects are: request, whois, session, response, tags, user_defined_tags, user_agent, client_data. More info can be found here: https://gcore.com/docs/waap/waap-rules/advanced-rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#source WaapAdvancedRule#source}
  */
  readonly source: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#action WaapAdvancedRule#action}
  */
  readonly action: WaapAdvancedRuleAction;
}
export interface WaapAdvancedRuleActionBlock {
  /**
  * How long a rule's block action will apply to subsequent requests. Can be specified in seconds or by using a numeral followed by 's', 'm', 'h', or 'd' to represent time format (seconds, minutes, hours, or days). Example: 12h. Must match the pattern ^[0-9]*[smhd]?$
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#action_duration WaapAdvancedRule#action_duration}
  */
  readonly actionDuration?: string;
  /**
  * A custom HTTP status code that the WAAP returns if a rule blocks a request. It must be one of these values {403, 405, 418, 429}. Default is 403.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#status_code WaapAdvancedRule#status_code}
  */
  readonly statusCode?: number;
}

export function waapAdvancedRuleActionBlockToTerraform(struct?: WaapAdvancedRuleActionBlockOutputReference | WaapAdvancedRuleActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_duration: cdktf.stringToTerraform(struct!.actionDuration),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function waapAdvancedRuleActionBlockToHclTerraform(struct?: WaapAdvancedRuleActionBlockOutputReference | WaapAdvancedRuleActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_duration: {
      value: cdktf.stringToHclTerraform(struct!.actionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapAdvancedRuleActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapAdvancedRuleActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDuration = this._actionDuration;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapAdvancedRuleActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionDuration = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionDuration = value.actionDuration;
      this._statusCode = value.statusCode;
    }
  }

  // action_duration - computed: false, optional: true, required: false
  private _actionDuration?: string; 
  public get actionDuration() {
    return this.getStringAttribute('action_duration');
  }
  public set actionDuration(value: string) {
    this._actionDuration = value;
  }
  public resetActionDuration() {
    this._actionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDurationInput() {
    return this._actionDuration;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface WaapAdvancedRuleActionTag {
  /**
  * The list of user defined tags to tag the request with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#tags WaapAdvancedRule#tags}
  */
  readonly tags: string[];
}

export function waapAdvancedRuleActionTagToTerraform(struct?: WaapAdvancedRuleActionTagOutputReference | WaapAdvancedRuleActionTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function waapAdvancedRuleActionTagToHclTerraform(struct?: WaapAdvancedRuleActionTagOutputReference | WaapAdvancedRuleActionTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapAdvancedRuleActionTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapAdvancedRuleActionTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapAdvancedRuleActionTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
    }
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface WaapAdvancedRuleAction {
  /**
  * The WAAP allows the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#allow WaapAdvancedRule#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * The WAAP requires the user to solve a CAPTCHA challenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#captcha WaapAdvancedRule#captcha}
  */
  readonly captcha?: boolean | cdktf.IResolvable;
  /**
  * The WAAP performs automatic browser validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#handshake WaapAdvancedRule#handshake}
  */
  readonly handshake?: boolean | cdktf.IResolvable;
  /**
  * The WAAP monitors the request but took no action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#monitor WaapAdvancedRule#monitor}
  */
  readonly monitor?: boolean | cdktf.IResolvable;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#block WaapAdvancedRule#block}
  */
  readonly block?: WaapAdvancedRuleActionBlock;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#tag WaapAdvancedRule#tag}
  */
  readonly tag?: WaapAdvancedRuleActionTag;
}

export function waapAdvancedRuleActionToTerraform(struct?: WaapAdvancedRuleActionOutputReference | WaapAdvancedRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    captcha: cdktf.booleanToTerraform(struct!.captcha),
    handshake: cdktf.booleanToTerraform(struct!.handshake),
    monitor: cdktf.booleanToTerraform(struct!.monitor),
    block: waapAdvancedRuleActionBlockToTerraform(struct!.block),
    tag: waapAdvancedRuleActionTagToTerraform(struct!.tag),
  }
}


export function waapAdvancedRuleActionToHclTerraform(struct?: WaapAdvancedRuleActionOutputReference | WaapAdvancedRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    captcha: {
      value: cdktf.booleanToHclTerraform(struct!.captcha),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    handshake: {
      value: cdktf.booleanToHclTerraform(struct!.handshake),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor: {
      value: cdktf.booleanToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block: {
      value: waapAdvancedRuleActionBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "WaapAdvancedRuleActionBlockList",
    },
    tag: {
      value: waapAdvancedRuleActionTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "WaapAdvancedRuleActionTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapAdvancedRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapAdvancedRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._captcha !== undefined) {
      hasAnyValues = true;
      internalValueResult.captcha = this._captcha;
    }
    if (this._handshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.handshake = this._handshake;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapAdvancedRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow = undefined;
      this._captcha = undefined;
      this._handshake = undefined;
      this._monitor = undefined;
      this._block.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow = value.allow;
      this._captcha = value.captcha;
      this._handshake = value.handshake;
      this._monitor = value.monitor;
      this._block.internalValue = value.block;
      this._tag.internalValue = value.tag;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha?: boolean | cdktf.IResolvable; 
  public get captcha() {
    return this.getBooleanAttribute('captcha');
  }
  public set captcha(value: boolean | cdktf.IResolvable) {
    this._captcha = value;
  }
  public resetCaptcha() {
    this._captcha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha;
  }

  // handshake - computed: false, optional: true, required: false
  private _handshake?: boolean | cdktf.IResolvable; 
  public get handshake() {
    return this.getBooleanAttribute('handshake');
  }
  public set handshake(value: boolean | cdktf.IResolvable) {
    this._handshake = value;
  }
  public resetHandshake() {
    this._handshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeInput() {
    return this._handshake;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: boolean | cdktf.IResolvable; 
  public get monitor() {
    return this.getBooleanAttribute('monitor');
  }
  public set monitor(value: boolean | cdktf.IResolvable) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // block - computed: false, optional: true, required: false
  private _block = new WaapAdvancedRuleActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: WaapAdvancedRuleActionBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new WaapAdvancedRuleActionTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: WaapAdvancedRuleActionTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule gcore_waap_advanced_rule}
*/
export class WaapAdvancedRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_waap_advanced_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaapAdvancedRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaapAdvancedRule to import
  * @param importFromId The id of the existing WaapAdvancedRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaapAdvancedRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_waap_advanced_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/waap_advanced_rule gcore_waap_advanced_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaapAdvancedRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WaapAdvancedRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_waap_advanced_rule',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._domainId = config.domainId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._phase = config.phase;
    this._source = config.source;
    this._action.internalValue = config.action;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // phase - computed: false, optional: true, required: false
  private _phase?: string; 
  public get phase() {
    return this.getStringAttribute('phase');
  }
  public set phase(value: string) {
    this._phase = value;
  }
  public resetPhase() {
    this._phase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // action - computed: false, optional: false, required: true
  private _action = new WaapAdvancedRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: WaapAdvancedRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.numberToTerraform(this._domainId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      phase: cdktf.stringToTerraform(this._phase),
      source: cdktf.stringToTerraform(this._source),
      action: waapAdvancedRuleActionToTerraform(this._action.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      phase: {
        value: cdktf.stringToHclTerraform(this._phase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: waapAdvancedRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapAdvancedRuleActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
