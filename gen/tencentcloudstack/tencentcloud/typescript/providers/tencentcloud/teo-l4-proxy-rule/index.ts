// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoL4ProxyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#id TeoL4ProxyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Layer 4 proxy instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#proxy_id TeoL4ProxyRule#proxy_id}
  */
  readonly proxyId: string;
  /**
  * Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#zone_id TeoL4ProxyRule#zone_id}
  */
  readonly zoneId: string;
  /**
  * l4_proxy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#l4_proxy_rules TeoL4ProxyRule#l4_proxy_rules}
  */
  readonly l4ProxyRules: TeoL4ProxyRuleL4ProxyRules;
}
export interface TeoL4ProxyRuleL4ProxyRules {
  /**
  * Transmission of the client IP address. Valid values:<li>TOA: Available only when Protocol=TCP;</li> 
  * <li>PPV1: Transmission via Proxy Protocol V1. Available only when Protocol=TCP;</li>
  * <li>PPV2: Transmission via Proxy Protocol V2;</li> 
  * <li>SPP: Transmission via Simple Proxy Protocol. Available only when Protocol=UDP;</li> 
  * <li>OFF: No transmission.</li>
  * Note: This parameter is optional when L4ProxyRule is used as an input parameter in Createl4ProxyRule, and if not specified, the default value OFF will be used; it is optional when L4ProxyRule is used as an input parameter in Modifyl4ProxyRule. If not specified, it will retain its existing value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#client_ip_pass_through_mode TeoL4ProxyRule#client_ip_pass_through_mode}
  */
  readonly clientIpPassThroughMode?: string;
  /**
  * Origin server port, which can be set as follows:<li>A single port, such as 80;</li>
  * <li>A range of ports, such as 81-85, representing ports 81, 82, 83, 84, 85. When inputting a range of ports, ensure that the length corresponds with that of the forwarding port range. For example, if the forwarding port range is 80-90, this port range should be 90-100.</li>
  * Note: This parameter must be filled in when L4ProxyRule is used as an input parameter in Createl4ProxyRule; it is optional when L4ProxyRule is used as an input parameter in Modifyl4ProxyRule. If not specified, it will retain its existing value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#origin_port_range TeoL4ProxyRule#origin_port_range}
  */
  readonly originPortRange?: string;
  /**
  * Origin server type. Valid values:
  * <li>IP_DOMAIN: IP/Domain name origin server;</li>
  * <li>ORIGIN_GROUP: Origin server group;</li>
  * <li>LB: Cloud Load Balancer, currently only open to the allowlist.</li>
  * Note: This parameter must be filled in when L4ProxyRule is used as an input parameter in Createl4ProxyRule; it is optional when L4ProxyRule is used as an input parameter in Modifyl4ProxyRule. If not specified, it will retain its existing value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#origin_type TeoL4ProxyRule#origin_type}
  */
  readonly originType?: string;
  /**
  * Origin server address.
  * <li>When OriginType is set to IP_DOMAIN, enter the IP address or domain name, such as 8.8.8.8 or test.com;</li>
  * <li>When OriginType is set to ORIGIN_GROUP, enter the origin server group ID, such as og-537y24vf5b41;</li>
  * <li>When OriginType is set to LB, enter the Cloud Load Balancer instance ID, such as lb-2qwk30xf7s9g.</li>
  * Note: This parameter must be filled in when L4ProxyRule is used as an input parameter in Createl4ProxyRule; it is optional when L4ProxyRule is used as an input parameter in Modifyl4ProxyRule. If not specified, it will retain its existing value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#origin_value TeoL4ProxyRule#origin_value}
  */
  readonly originValue?: string[];
  /**
  * Forwarding port, which can be set as follows:
  * <li>A single port, such as 80;</li>
  * <li>A range of ports, such as 81-85, representing ports 81, 82, 83, 84, 85.</li>
  * Note: This parameter must be filled in when L4ProxyRule is used as an input parameter in Createl4ProxyRule; it is optional when L4ProxyRule is used as an input parameter in Modifyl4ProxyRule. If not specified, it will retain its existing value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#port_range TeoL4ProxyRule#port_range}
  */
  readonly portRange?: string[];
  /**
  * Forwarding protocol. Valid values:
  * <li>TCP: TCP protocol;</li>
  * <li>UDP: UDP protocol.</li>
  * Note: This parameter must be filled in when L4ProxyRule is used as an input parameter in Createl4ProxyRule; it is optional when L4ProxyRule is used as an input parameter in Modifyl4ProxyRule. If not specified, it will retain its existing value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#protocol TeoL4ProxyRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Rule tag. Accepts 1-50 arbitrary characters.
  * Note: This parameter is optional when L4ProxyRule is used as an input parameter in Createl4ProxyRule; it is optional when L4ProxyRule is used as an input parameter in Modifyl4ProxyRule. If not specified, it will retain its existing value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#rule_tag TeoL4ProxyRule#rule_tag}
  */
  readonly ruleTag?: string;
  /**
  * Specifies whether to enable session persistence. Valid values:
  * <li>on: Enable;</li>
  * <li>off: Disable.</li>
  * Note: This parameter is optional when L4ProxyRule is used as an input parameter in Createl4ProxyRule, and if not specified, the default value off will be used; it is optional when L4ProxyRule is used as an input parameter in Modifyl4ProxyRule. If not specified, it will retain its existing value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#session_persist TeoL4ProxyRule#session_persist}
  */
  readonly sessionPersist?: string;
  /**
  * Session persistence period, with a range of 30-3600, measured in seconds.
  * Note: This parameter is optional when L4ProxyRule is used as an input parameter in Createl4ProxyRule. It is valid only when SessionPersist is set to on and defaults to 3600 if not specified. It is optional when L4ProxyRule is used as an input parameter in Modifyl4ProxyRule. If not specified, it will retain its existing value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#session_persist_time TeoL4ProxyRule#session_persist_time}
  */
  readonly sessionPersistTime?: number;
  /**
  * Rule status. Valid values:<li>online: Enabled;</li>
  * <li>offline: Disabled;</li>
  * <li>progress: Deploying;</li>
  * <li>stopping: Disabling;</li>
  * <li>fail: Failed to deploy or disable.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#status TeoL4ProxyRule#status}
  */
  readonly status?: string;
}

export function teoL4ProxyRuleL4ProxyRulesToTerraform(struct?: TeoL4ProxyRuleL4ProxyRulesOutputReference | TeoL4ProxyRuleL4ProxyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip_pass_through_mode: cdktf.stringToTerraform(struct!.clientIpPassThroughMode),
    origin_port_range: cdktf.stringToTerraform(struct!.originPortRange),
    origin_type: cdktf.stringToTerraform(struct!.originType),
    origin_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originValue),
    port_range: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_tag: cdktf.stringToTerraform(struct!.ruleTag),
    session_persist: cdktf.stringToTerraform(struct!.sessionPersist),
    session_persist_time: cdktf.numberToTerraform(struct!.sessionPersistTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function teoL4ProxyRuleL4ProxyRulesToHclTerraform(struct?: TeoL4ProxyRuleL4ProxyRulesOutputReference | TeoL4ProxyRuleL4ProxyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip_pass_through_mode: {
      value: cdktf.stringToHclTerraform(struct!.clientIpPassThroughMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_port_range: {
      value: cdktf.stringToHclTerraform(struct!.originPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_type: {
      value: cdktf.stringToHclTerraform(struct!.originType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port_range: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portRange),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_tag: {
      value: cdktf.stringToHclTerraform(struct!.ruleTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_persist: {
      value: cdktf.stringToHclTerraform(struct!.sessionPersist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_persist_time: {
      value: cdktf.numberToHclTerraform(struct!.sessionPersistTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoL4ProxyRuleL4ProxyRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoL4ProxyRuleL4ProxyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpPassThroughMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpPassThroughMode = this._clientIpPassThroughMode;
    }
    if (this._originPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPortRange = this._originPortRange;
    }
    if (this._originType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originType = this._originType;
    }
    if (this._originValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originValue = this._originValue;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTag = this._ruleTag;
    }
    if (this._sessionPersist !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPersist = this._sessionPersist;
    }
    if (this._sessionPersistTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPersistTime = this._sessionPersistTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoL4ProxyRuleL4ProxyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientIpPassThroughMode = undefined;
      this._originPortRange = undefined;
      this._originType = undefined;
      this._originValue = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
      this._ruleTag = undefined;
      this._sessionPersist = undefined;
      this._sessionPersistTime = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientIpPassThroughMode = value.clientIpPassThroughMode;
      this._originPortRange = value.originPortRange;
      this._originType = value.originType;
      this._originValue = value.originValue;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
      this._ruleTag = value.ruleTag;
      this._sessionPersist = value.sessionPersist;
      this._sessionPersistTime = value.sessionPersistTime;
      this._status = value.status;
    }
  }

  // client_ip_pass_through_mode - computed: false, optional: true, required: false
  private _clientIpPassThroughMode?: string; 
  public get clientIpPassThroughMode() {
    return this.getStringAttribute('client_ip_pass_through_mode');
  }
  public set clientIpPassThroughMode(value: string) {
    this._clientIpPassThroughMode = value;
  }
  public resetClientIpPassThroughMode() {
    this._clientIpPassThroughMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpPassThroughModeInput() {
    return this._clientIpPassThroughMode;
  }

  // origin_port_range - computed: false, optional: true, required: false
  private _originPortRange?: string; 
  public get originPortRange() {
    return this.getStringAttribute('origin_port_range');
  }
  public set originPortRange(value: string) {
    this._originPortRange = value;
  }
  public resetOriginPortRange() {
    this._originPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPortRangeInput() {
    return this._originPortRange;
  }

  // origin_type - computed: false, optional: true, required: false
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  public resetOriginType() {
    this._originType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // origin_value - computed: false, optional: true, required: false
  private _originValue?: string[]; 
  public get originValue() {
    return cdktf.Fn.tolist(this.getListAttribute('origin_value'));
  }
  public set originValue(value: string[]) {
    this._originValue = value;
  }
  public resetOriginValue() {
    this._originValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originValueInput() {
    return this._originValue;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string[]; 
  public get portRange() {
    return cdktf.Fn.tolist(this.getListAttribute('port_range'));
  }
  public set portRange(value: string[]) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_tag - computed: false, optional: true, required: false
  private _ruleTag?: string; 
  public get ruleTag() {
    return this.getStringAttribute('rule_tag');
  }
  public set ruleTag(value: string) {
    this._ruleTag = value;
  }
  public resetRuleTag() {
    this._ruleTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTagInput() {
    return this._ruleTag;
  }

  // session_persist - computed: false, optional: true, required: false
  private _sessionPersist?: string; 
  public get sessionPersist() {
    return this.getStringAttribute('session_persist');
  }
  public set sessionPersist(value: string) {
    this._sessionPersist = value;
  }
  public resetSessionPersist() {
    this._sessionPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistInput() {
    return this._sessionPersist;
  }

  // session_persist_time - computed: false, optional: true, required: false
  private _sessionPersistTime?: number; 
  public get sessionPersistTime() {
    return this.getNumberAttribute('session_persist_time');
  }
  public set sessionPersistTime(value: number) {
    this._sessionPersistTime = value;
  }
  public resetSessionPersistTime() {
    this._sessionPersistTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistTimeInput() {
    return this._sessionPersistTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule tencentcloud_teo_l4_proxy_rule}
*/
export class TeoL4ProxyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_l4_proxy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoL4ProxyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoL4ProxyRule to import
  * @param importFromId The id of the existing TeoL4ProxyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoL4ProxyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_l4_proxy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/teo_l4_proxy_rule tencentcloud_teo_l4_proxy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoL4ProxyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TeoL4ProxyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_l4_proxy_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
    this._proxyId = config.proxyId;
    this._zoneId = config.zoneId;
    this._l4ProxyRules.internalValue = config.l4ProxyRules;
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

  // proxy_id - computed: false, optional: false, required: true
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // l4_proxy_rules - computed: false, optional: false, required: true
  private _l4ProxyRules = new TeoL4ProxyRuleL4ProxyRulesOutputReference(this, "l4_proxy_rules");
  public get l4ProxyRules() {
    return this._l4ProxyRules;
  }
  public putL4ProxyRules(value: TeoL4ProxyRuleL4ProxyRules) {
    this._l4ProxyRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProxyRulesInput() {
    return this._l4ProxyRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      proxy_id: cdktf.stringToTerraform(this._proxyId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      l4_proxy_rules: teoL4ProxyRuleL4ProxyRulesToTerraform(this._l4ProxyRules.internalValue),
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
      proxy_id: {
        value: cdktf.stringToHclTerraform(this._proxyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_proxy_rules: {
        value: teoL4ProxyRuleL4ProxyRulesToHclTerraform(this._l4ProxyRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoL4ProxyRuleL4ProxyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
