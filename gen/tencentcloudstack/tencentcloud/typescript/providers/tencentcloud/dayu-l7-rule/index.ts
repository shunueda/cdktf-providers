// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuL7RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain that the layer 7 rule works for. Valid string length ranges from 0 to 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#domain DayuL7Rule#domain}
  */
  readonly domain: string;
  /**
  * HTTP Status Code. The default is `26`. Valid value ranges: [1~31]. `1` means the return value '1xx' is health. `2` means the return value '2xx' is health. `4` means the return value '3xx' is health. `8` means the return value '4xx' is health. `16` means the return value '5xx' is health. If you want multiple return codes to indicate health, need to add the corresponding values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#health_check_code DayuL7Rule#health_check_code}
  */
  readonly healthCheckCode?: number;
  /**
  * Health threshold of health check, and the default is `3`. If a success result is returned for the health check 3 consecutive times, indicates that the forwarding is normal. The value range is [2-10].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#health_check_health_num DayuL7Rule#health_check_health_num}
  */
  readonly healthCheckHealthNum?: number;
  /**
  * Interval time of health check. Valid value ranges: [10~60]sec. The default is 15 sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#health_check_interval DayuL7Rule#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Methods of health check. The default is 'HEAD', the available value are 'HEAD' and 'GET'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#health_check_method DayuL7Rule#health_check_method}
  */
  readonly healthCheckMethod?: string;
  /**
  * Path of health check. The default is `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#health_check_path DayuL7Rule#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * Indicates whether health check is enabled. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#health_check_switch DayuL7Rule#health_check_switch}
  */
  readonly healthCheckSwitch?: boolean | cdktf.IResolvable;
  /**
  * Unhealthy threshold of health check, and the default is `3`. If the unhealthy result is returned 3 consecutive times, indicates that the forwarding is abnormal. The value range is [2-10].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#health_check_unhealth_num DayuL7Rule#health_check_unhealth_num}
  */
  readonly healthCheckUnhealthNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#id DayuL7Rule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#name DayuL7Rule#name}
  */
  readonly name: string;
  /**
  * Protocol of the rule. Valid values: `http`, `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#protocol DayuL7Rule#protocol}
  */
  readonly protocol: string;
  /**
  * ID of the resource that the layer 7 rule works for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#resource_id DayuL7Rule#resource_id}
  */
  readonly resourceId: string;
  /**
  * Type of the resource that the layer 7 rule works for, valid value is `bgpip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#resource_type DayuL7Rule#resource_type}
  */
  readonly resourceType: string;
  /**
  * Source list of the rule, it can be a set of ip sources or a set of domain sources. The number of items ranges from 1 to 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#source_list DayuL7Rule#source_list}
  */
  readonly sourceList: string[];
  /**
  * Source type, `1` for source of host, `2` for source of IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#source_type DayuL7Rule#source_type}
  */
  readonly sourceType: number;
  /**
  * SSL ID, when the `protocol` is `https`, the field should be set with valid SSL id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#ssl_id DayuL7Rule#ssl_id}
  */
  readonly sslId?: string;
  /**
  * Indicate the rule will take effect or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#switch DayuL7Rule#switch}
  */
  readonly switch: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule tencentcloud_dayu_l7_rule}
*/
export class DayuL7Rule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_l7_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuL7Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuL7Rule to import
  * @param importFromId The id of the existing DayuL7Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuL7Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_l7_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dayu_l7_rule tencentcloud_dayu_l7_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuL7RuleConfig
  */
  public constructor(scope: Construct, id: string, config: DayuL7RuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_l7_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._healthCheckCode = config.healthCheckCode;
    this._healthCheckHealthNum = config.healthCheckHealthNum;
    this._healthCheckInterval = config.healthCheckInterval;
    this._healthCheckMethod = config.healthCheckMethod;
    this._healthCheckPath = config.healthCheckPath;
    this._healthCheckSwitch = config.healthCheckSwitch;
    this._healthCheckUnhealthNum = config.healthCheckUnhealthNum;
    this._id = config.id;
    this._name = config.name;
    this._protocol = config.protocol;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._sourceList = config.sourceList;
    this._sourceType = config.sourceType;
    this._sslId = config.sslId;
    this._switch = config.switch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // health_check_code - computed: true, optional: true, required: false
  private _healthCheckCode?: number; 
  public get healthCheckCode() {
    return this.getNumberAttribute('health_check_code');
  }
  public set healthCheckCode(value: number) {
    this._healthCheckCode = value;
  }
  public resetHealthCheckCode() {
    this._healthCheckCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckCodeInput() {
    return this._healthCheckCode;
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

  // health_check_method - computed: true, optional: true, required: false
  private _healthCheckMethod?: string; 
  public get healthCheckMethod() {
    return this.getStringAttribute('health_check_method');
  }
  public set healthCheckMethod(value: string) {
    this._healthCheckMethod = value;
  }
  public resetHealthCheckMethod() {
    this._healthCheckMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckMethodInput() {
    return this._healthCheckMethod;
  }

  // health_check_path - computed: true, optional: true, required: false
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
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

  // source_list - computed: false, optional: false, required: true
  private _sourceList?: string[]; 
  public get sourceList() {
    return cdktf.Fn.tolist(this.getListAttribute('source_list'));
  }
  public set sourceList(value: string[]) {
    this._sourceList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListInput() {
    return this._sourceList;
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

  // ssl_id - computed: false, optional: true, required: false
  private _sslId?: string; 
  public get sslId() {
    return this.getStringAttribute('ssl_id');
  }
  public set sslId(value: string) {
    this._sslId = value;
  }
  public resetSslId() {
    this._sslId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslIdInput() {
    return this._sslId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: boolean | cdktf.IResolvable; 
  public get switch() {
    return this.getBooleanAttribute('switch');
  }
  public set switch(value: boolean | cdktf.IResolvable) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      health_check_code: cdktf.numberToTerraform(this._healthCheckCode),
      health_check_health_num: cdktf.numberToTerraform(this._healthCheckHealthNum),
      health_check_interval: cdktf.numberToTerraform(this._healthCheckInterval),
      health_check_method: cdktf.stringToTerraform(this._healthCheckMethod),
      health_check_path: cdktf.stringToTerraform(this._healthCheckPath),
      health_check_switch: cdktf.booleanToTerraform(this._healthCheckSwitch),
      health_check_unhealth_num: cdktf.numberToTerraform(this._healthCheckUnhealthNum),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      source_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceList),
      source_type: cdktf.numberToTerraform(this._sourceType),
      ssl_id: cdktf.stringToTerraform(this._sslId),
      switch: cdktf.booleanToTerraform(this._switch),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_code: {
        value: cdktf.numberToHclTerraform(this._healthCheckCode),
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
      health_check_method: {
        value: cdktf.stringToHclTerraform(this._healthCheckMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_path: {
        value: cdktf.stringToHclTerraform(this._healthCheckPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_switch: {
        value: cdktf.booleanToHclTerraform(this._healthCheckSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      source_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_type: {
        value: cdktf.numberToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_id: {
        value: cdktf.stringToHclTerraform(this._sslId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch: {
        value: cdktf.booleanToHclTerraform(this._switch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
