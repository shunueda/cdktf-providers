// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuL4RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The destination port of the L4 rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#d_port DayuL4Rule#d_port}
  */
  readonly dPort: number;
  /**
  * Health threshold of health check, and the default is 3. If a success result is returned for the health check 3 consecutive times, indicates that the forwarding is normal. The value range is 2-10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#health_check_health_num DayuL4Rule#health_check_health_num}
  */
  readonly healthCheckHealthNum?: number;
  /**
  * Interval time of health check. The value range is 10-60 sec, and the default is 15 sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#health_check_interval DayuL4Rule#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Indicates whether health check is enabled. The default is `false`. Only valid when source list has more than one source item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#health_check_switch DayuL4Rule#health_check_switch}
  */
  readonly healthCheckSwitch?: boolean | cdktf.IResolvable;
  /**
  * HTTP Status Code. The default is 26 and value range is 2-60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#health_check_timeout DayuL4Rule#health_check_timeout}
  */
  readonly healthCheckTimeout?: number;
  /**
  * Unhealthy threshold of health check, and the default is 3. If the unhealthy result is returned 3 consecutive times, indicates that the forwarding is abnormal. The value range is 2-10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#health_check_unhealth_num DayuL4Rule#health_check_unhealth_num}
  */
  readonly healthCheckUnhealthNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#id DayuL4Rule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the rule. When the `resource_type` is `net`, this field should be set with valid domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#name DayuL4Rule#name}
  */
  readonly name: string;
  /**
  * Protocol of the rule. Valid values: `http`, `https`. When `source_type` is 1(host source), the value of this field can only set with `tcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#protocol DayuL4Rule#protocol}
  */
  readonly protocol: string;
  /**
  * ID of the resource that the layer 4 rule works for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#resource_id DayuL4Rule#resource_id}
  */
  readonly resourceId: string;
  /**
  * Type of the resource that the layer 4 rule works for. Valid values: `bgpip` and `net`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#resource_type DayuL4Rule#resource_type}
  */
  readonly resourceType: string;
  /**
  * The source port of the L4 rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#s_port DayuL4Rule#s_port}
  */
  readonly sPort: number;
  /**
  * Indicate that the session will keep or not, and default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#session_switch DayuL4Rule#session_switch}
  */
  readonly sessionSwitch?: boolean | cdktf.IResolvable;
  /**
  * Session keep time, only valid when `session_switch` is true, the available value ranges from 1 to 300 and unit is second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#session_time DayuL4Rule#session_time}
  */
  readonly sessionTime?: number;
  /**
  * Source type, `1` for source of host, `2` for source of IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#source_type DayuL4Rule#source_type}
  */
  readonly sourceType: number;
  /**
  * source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#source_list DayuL4Rule#source_list}
  */
  readonly sourceList: DayuL4RuleSourceListStruct[] | cdktf.IResolvable;
}
export interface DayuL4RuleSourceListStruct {
  /**
  * Source IP or domain, valid format of ip is like `1.1.1.1` and valid format of host source is like `abc.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#source DayuL4Rule#source}
  */
  readonly source: string;
  /**
  * Weight of the source, the valid value ranges from 0 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#weight DayuL4Rule#weight}
  */
  readonly weight: number;
}

export function dayuL4RuleSourceListStructToTerraform(struct?: DayuL4RuleSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dayuL4RuleSourceListStructToHclTerraform(struct?: DayuL4RuleSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuL4RuleSourceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DayuL4RuleSourceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuL4RuleSourceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._weight = value.weight;
    }
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

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DayuL4RuleSourceListStructList extends cdktf.ComplexList {
  public internalValue? : DayuL4RuleSourceListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DayuL4RuleSourceListStructOutputReference {
    return new DayuL4RuleSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule tencentcloud_dayu_l4_rule}
*/
export class DayuL4Rule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_l4_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuL4Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuL4Rule to import
  * @param importFromId The id of the existing DayuL4Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuL4Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_l4_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dayu_l4_rule tencentcloud_dayu_l4_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuL4RuleConfig
  */
  public constructor(scope: Construct, id: string, config: DayuL4RuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_l4_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dPort = config.dPort;
    this._healthCheckHealthNum = config.healthCheckHealthNum;
    this._healthCheckInterval = config.healthCheckInterval;
    this._healthCheckSwitch = config.healthCheckSwitch;
    this._healthCheckTimeout = config.healthCheckTimeout;
    this._healthCheckUnhealthNum = config.healthCheckUnhealthNum;
    this._id = config.id;
    this._name = config.name;
    this._protocol = config.protocol;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._sPort = config.sPort;
    this._sessionSwitch = config.sessionSwitch;
    this._sessionTime = config.sessionTime;
    this._sourceType = config.sourceType;
    this._sourceList.internalValue = config.sourceList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // d_port - computed: false, optional: false, required: true
  private _dPort?: number; 
  public get dPort() {
    return this.getNumberAttribute('d_port');
  }
  public set dPort(value: number) {
    this._dPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dPortInput() {
    return this._dPort;
  }

  // health_check_health_num - computed: true, optional: true, required: false
  private _healthCheckHealthNum?: number; 
  public get healthCheckHealthNum() {
    return this.getNumberAttribute('health_check_health_num');
  }
  public set healthCheckHealthNum(value: number) {
    this._healthCheckHealthNum = value;
  }
  public resetHealthCheckHealthNum() {
    this._healthCheckHealthNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHealthNumInput() {
    return this._healthCheckHealthNum;
  }

  // health_check_interval - computed: true, optional: true, required: false
  private _healthCheckInterval?: number; 
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: number) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // health_check_switch - computed: true, optional: true, required: false
  private _healthCheckSwitch?: boolean | cdktf.IResolvable; 
  public get healthCheckSwitch() {
    return this.getBooleanAttribute('health_check_switch');
  }
  public set healthCheckSwitch(value: boolean | cdktf.IResolvable) {
    this._healthCheckSwitch = value;
  }
  public resetHealthCheckSwitch() {
    this._healthCheckSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSwitchInput() {
    return this._healthCheckSwitch;
  }

  // health_check_timeout - computed: true, optional: true, required: false
  private _healthCheckTimeout?: number; 
  public get healthCheckTimeout() {
    return this.getNumberAttribute('health_check_timeout');
  }
  public set healthCheckTimeout(value: number) {
    this._healthCheckTimeout = value;
  }
  public resetHealthCheckTimeout() {
    this._healthCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTimeoutInput() {
    return this._healthCheckTimeout;
  }

  // health_check_unhealth_num - computed: true, optional: true, required: false
  private _healthCheckUnhealthNum?: number; 
  public get healthCheckUnhealthNum() {
    return this.getNumberAttribute('health_check_unhealth_num');
  }
  public set healthCheckUnhealthNum(value: number) {
    this._healthCheckUnhealthNum = value;
  }
  public resetHealthCheckUnhealthNum() {
    this._healthCheckUnhealthNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUnhealthNumInput() {
    return this._healthCheckUnhealthNum;
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

  // lb_type - computed: true, optional: false, required: false
  public get lbType() {
    return this.getNumberAttribute('lb_type');
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // s_port - computed: false, optional: false, required: true
  private _sPort?: number; 
  public get sPort() {
    return this.getNumberAttribute('s_port');
  }
  public set sPort(value: number) {
    this._sPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sPortInput() {
    return this._sPort;
  }

  // session_switch - computed: false, optional: true, required: false
  private _sessionSwitch?: boolean | cdktf.IResolvable; 
  public get sessionSwitch() {
    return this.getBooleanAttribute('session_switch');
  }
  public set sessionSwitch(value: boolean | cdktf.IResolvable) {
    this._sessionSwitch = value;
  }
  public resetSessionSwitch() {
    this._sessionSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSwitchInput() {
    return this._sessionSwitch;
  }

  // session_time - computed: true, optional: true, required: false
  private _sessionTime?: number; 
  public get sessionTime() {
    return this.getNumberAttribute('session_time');
  }
  public set sessionTime(value: number) {
    this._sessionTime = value;
  }
  public resetSessionTime() {
    this._sessionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeInput() {
    return this._sessionTime;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: number; 
  public get sourceType() {
    return this.getNumberAttribute('source_type');
  }
  public set sourceType(value: number) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // source_list - computed: false, optional: false, required: true
  private _sourceList = new DayuL4RuleSourceListStructList(this, "source_list", true);
  public get sourceList() {
    return this._sourceList;
  }
  public putSourceList(value: DayuL4RuleSourceListStruct[] | cdktf.IResolvable) {
    this._sourceList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListInput() {
    return this._sourceList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      d_port: cdktf.numberToTerraform(this._dPort),
      health_check_health_num: cdktf.numberToTerraform(this._healthCheckHealthNum),
      health_check_interval: cdktf.numberToTerraform(this._healthCheckInterval),
      health_check_switch: cdktf.booleanToTerraform(this._healthCheckSwitch),
      health_check_timeout: cdktf.numberToTerraform(this._healthCheckTimeout),
      health_check_unhealth_num: cdktf.numberToTerraform(this._healthCheckUnhealthNum),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      s_port: cdktf.numberToTerraform(this._sPort),
      session_switch: cdktf.booleanToTerraform(this._sessionSwitch),
      session_time: cdktf.numberToTerraform(this._sessionTime),
      source_type: cdktf.numberToTerraform(this._sourceType),
      source_list: cdktf.listMapper(dayuL4RuleSourceListStructToTerraform, true)(this._sourceList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      d_port: {
        value: cdktf.numberToHclTerraform(this._dPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_health_num: {
        value: cdktf.numberToHclTerraform(this._healthCheckHealthNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_interval: {
        value: cdktf.numberToHclTerraform(this._healthCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_switch: {
        value: cdktf.booleanToHclTerraform(this._healthCheckSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_timeout: {
        value: cdktf.numberToHclTerraform(this._healthCheckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_unhealth_num: {
        value: cdktf.numberToHclTerraform(this._healthCheckUnhealthNum),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s_port: {
        value: cdktf.numberToHclTerraform(this._sPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_switch: {
        value: cdktf.booleanToHclTerraform(this._sessionSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_time: {
        value: cdktf.numberToHclTerraform(this._sessionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_type: {
        value: cdktf.numberToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_list: {
        value: cdktf.listMapperHcl(dayuL4RuleSourceListStructToHclTerraform, true)(this._sourceList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DayuL4RuleSourceListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
