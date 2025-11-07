// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionAntiBruteForceRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#anti_brute_force_rule_name ThreatDetectionAntiBruteForceRule#anti_brute_force_rule_name}
  */
  readonly antiBruteForceRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#default_rule ThreatDetectionAntiBruteForceRule#default_rule}
  */
  readonly defaultRule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#fail_count ThreatDetectionAntiBruteForceRule#fail_count}
  */
  readonly failCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#forbidden_time ThreatDetectionAntiBruteForceRule#forbidden_time}
  */
  readonly forbiddenTime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#id ThreatDetectionAntiBruteForceRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#span ThreatDetectionAntiBruteForceRule#span}
  */
  readonly span: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#uuid_list ThreatDetectionAntiBruteForceRule#uuid_list}
  */
  readonly uuidList: string[];
  /**
  * protocol_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#protocol_type ThreatDetectionAntiBruteForceRule#protocol_type}
  */
  readonly protocolType?: ThreatDetectionAntiBruteForceRuleProtocolType;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#timeouts ThreatDetectionAntiBruteForceRule#timeouts}
  */
  readonly timeouts?: ThreatDetectionAntiBruteForceRuleTimeouts;
}
export interface ThreatDetectionAntiBruteForceRuleProtocolType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#rdp ThreatDetectionAntiBruteForceRule#rdp}
  */
  readonly rdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#sql_server ThreatDetectionAntiBruteForceRule#sql_server}
  */
  readonly sqlServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#ssh ThreatDetectionAntiBruteForceRule#ssh}
  */
  readonly ssh?: string;
}

export function threatDetectionAntiBruteForceRuleProtocolTypeToTerraform(struct?: ThreatDetectionAntiBruteForceRuleProtocolTypeOutputReference | ThreatDetectionAntiBruteForceRuleProtocolType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rdp: cdktf.stringToTerraform(struct!.rdp),
    sql_server: cdktf.stringToTerraform(struct!.sqlServer),
    ssh: cdktf.stringToTerraform(struct!.ssh),
  }
}


export function threatDetectionAntiBruteForceRuleProtocolTypeToHclTerraform(struct?: ThreatDetectionAntiBruteForceRuleProtocolTypeOutputReference | ThreatDetectionAntiBruteForceRuleProtocolType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rdp: {
      value: cdktf.stringToHclTerraform(struct!.rdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_server: {
      value: cdktf.stringToHclTerraform(struct!.sqlServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh: {
      value: cdktf.stringToHclTerraform(struct!.ssh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionAntiBruteForceRuleProtocolTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThreatDetectionAntiBruteForceRuleProtocolType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdp = this._rdp;
    }
    if (this._sqlServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServer = this._sqlServer;
    }
    if (this._ssh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionAntiBruteForceRuleProtocolType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rdp = undefined;
      this._sqlServer = undefined;
      this._ssh = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rdp = value.rdp;
      this._sqlServer = value.sqlServer;
      this._ssh = value.ssh;
    }
  }

  // rdp - computed: true, optional: true, required: false
  private _rdp?: string; 
  public get rdp() {
    return this.getStringAttribute('rdp');
  }
  public set rdp(value: string) {
    this._rdp = value;
  }
  public resetRdp() {
    this._rdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpInput() {
    return this._rdp;
  }

  // sql_server - computed: true, optional: true, required: false
  private _sqlServer?: string; 
  public get sqlServer() {
    return this.getStringAttribute('sql_server');
  }
  public set sqlServer(value: string) {
    this._sqlServer = value;
  }
  public resetSqlServer() {
    this._sqlServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerInput() {
    return this._sqlServer;
  }

  // ssh - computed: true, optional: true, required: false
  private _ssh?: string; 
  public get ssh() {
    return this.getStringAttribute('ssh');
  }
  public set ssh(value: string) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }
}
export interface ThreatDetectionAntiBruteForceRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#create ThreatDetectionAntiBruteForceRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#delete ThreatDetectionAntiBruteForceRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#update ThreatDetectionAntiBruteForceRule#update}
  */
  readonly update?: string;
}

export function threatDetectionAntiBruteForceRuleTimeoutsToTerraform(struct?: ThreatDetectionAntiBruteForceRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function threatDetectionAntiBruteForceRuleTimeoutsToHclTerraform(struct?: ThreatDetectionAntiBruteForceRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionAntiBruteForceRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionAntiBruteForceRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionAntiBruteForceRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule alicloud_threat_detection_anti_brute_force_rule}
*/
export class ThreatDetectionAntiBruteForceRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_anti_brute_force_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionAntiBruteForceRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionAntiBruteForceRule to import
  * @param importFromId The id of the existing ThreatDetectionAntiBruteForceRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionAntiBruteForceRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_anti_brute_force_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/threat_detection_anti_brute_force_rule alicloud_threat_detection_anti_brute_force_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionAntiBruteForceRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionAntiBruteForceRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_anti_brute_force_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antiBruteForceRuleName = config.antiBruteForceRuleName;
    this._defaultRule = config.defaultRule;
    this._failCount = config.failCount;
    this._forbiddenTime = config.forbiddenTime;
    this._id = config.id;
    this._span = config.span;
    this._uuidList = config.uuidList;
    this._protocolType.internalValue = config.protocolType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_brute_force_rule_name - computed: false, optional: false, required: true
  private _antiBruteForceRuleName?: string; 
  public get antiBruteForceRuleName() {
    return this.getStringAttribute('anti_brute_force_rule_name');
  }
  public set antiBruteForceRuleName(value: string) {
    this._antiBruteForceRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get antiBruteForceRuleNameInput() {
    return this._antiBruteForceRuleName;
  }

  // default_rule - computed: false, optional: true, required: false
  private _defaultRule?: boolean | cdktf.IResolvable; 
  public get defaultRule() {
    return this.getBooleanAttribute('default_rule');
  }
  public set defaultRule(value: boolean | cdktf.IResolvable) {
    this._defaultRule = value;
  }
  public resetDefaultRule() {
    this._defaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuleInput() {
    return this._defaultRule;
  }

  // fail_count - computed: false, optional: false, required: true
  private _failCount?: number; 
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }
  public set failCount(value: number) {
    this._failCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failCountInput() {
    return this._failCount;
  }

  // forbidden_time - computed: false, optional: false, required: true
  private _forbiddenTime?: number; 
  public get forbiddenTime() {
    return this.getNumberAttribute('forbidden_time');
  }
  public set forbiddenTime(value: number) {
    this._forbiddenTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenTimeInput() {
    return this._forbiddenTime;
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

  // span - computed: false, optional: false, required: true
  private _span?: number; 
  public get span() {
    return this.getNumberAttribute('span');
  }
  public set span(value: number) {
    this._span = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spanInput() {
    return this._span;
  }

  // uuid_list - computed: false, optional: false, required: true
  private _uuidList?: string[]; 
  public get uuidList() {
    return cdktf.Fn.tolist(this.getListAttribute('uuid_list'));
  }
  public set uuidList(value: string[]) {
    this._uuidList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidListInput() {
    return this._uuidList;
  }

  // protocol_type - computed: false, optional: true, required: false
  private _protocolType = new ThreatDetectionAntiBruteForceRuleProtocolTypeOutputReference(this, "protocol_type");
  public get protocolType() {
    return this._protocolType;
  }
  public putProtocolType(value: ThreatDetectionAntiBruteForceRuleProtocolType) {
    this._protocolType.internalValue = value;
  }
  public resetProtocolType() {
    this._protocolType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionAntiBruteForceRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionAntiBruteForceRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_brute_force_rule_name: cdktf.stringToTerraform(this._antiBruteForceRuleName),
      default_rule: cdktf.booleanToTerraform(this._defaultRule),
      fail_count: cdktf.numberToTerraform(this._failCount),
      forbidden_time: cdktf.numberToTerraform(this._forbiddenTime),
      id: cdktf.stringToTerraform(this._id),
      span: cdktf.numberToTerraform(this._span),
      uuid_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uuidList),
      protocol_type: threatDetectionAntiBruteForceRuleProtocolTypeToTerraform(this._protocolType.internalValue),
      timeouts: threatDetectionAntiBruteForceRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_brute_force_rule_name: {
        value: cdktf.stringToHclTerraform(this._antiBruteForceRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_rule: {
        value: cdktf.booleanToHclTerraform(this._defaultRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fail_count: {
        value: cdktf.numberToHclTerraform(this._failCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forbidden_time: {
        value: cdktf.numberToHclTerraform(this._forbiddenTime),
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
      span: {
        value: cdktf.numberToHclTerraform(this._span),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uuidList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol_type: {
        value: threatDetectionAntiBruteForceRuleProtocolTypeToHclTerraform(this._protocolType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ThreatDetectionAntiBruteForceRuleProtocolTypeList",
      },
      timeouts: {
        value: threatDetectionAntiBruteForceRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionAntiBruteForceRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
