// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dayu_l7_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDayuL7RulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain of the layer 7 rule to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dayu_l7_rules#domain DataTencentcloudDayuL7Rules#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dayu_l7_rules#id DataTencentcloudDayuL7Rules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id of the resource that the layer 7 rule works for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dayu_l7_rules#resource_id DataTencentcloudDayuL7Rules#resource_id}
  */
  readonly resourceId: string;
  /**
  * Type of the resource that the layer 7 rule works for, valid value is `bgpip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dayu_l7_rules#resource_type DataTencentcloudDayuL7Rules#resource_type}
  */
  readonly resourceType: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dayu_l7_rules#result_output_file DataTencentcloudDayuL7Rules#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Id of the layer 7 rule to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dayu_l7_rules#rule_id DataTencentcloudDayuL7Rules#rule_id}
  */
  readonly ruleId?: string;
}
export interface DataTencentcloudDayuL7RulesListStruct {
}

export function dataTencentcloudDayuL7RulesListStructToTerraform(struct?: DataTencentcloudDayuL7RulesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDayuL7RulesListStructToHclTerraform(struct?: DataTencentcloudDayuL7RulesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDayuL7RulesListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudDayuL7RulesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDayuL7RulesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // health_check_code - computed: true, optional: false, required: false
  public get healthCheckCode() {
    return this.getNumberAttribute('health_check_code');
  }

  // health_check_health_num - computed: true, optional: false, required: false
  public get healthCheckHealthNum() {
    return this.getNumberAttribute('health_check_health_num');
  }

  // health_check_interval - computed: true, optional: false, required: false
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }

  // health_check_method - computed: true, optional: false, required: false
  public get healthCheckMethod() {
    return this.getStringAttribute('health_check_method');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }

  // health_check_switch - computed: true, optional: false, required: false
  public get healthCheckSwitch() {
    return this.getBooleanAttribute('health_check_switch');
  }

  // health_check_unhealth_num - computed: true, optional: false, required: false
  public get healthCheckUnhealthNum() {
    return this.getNumberAttribute('health_check_unhealth_num');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // source_list - computed: true, optional: false, required: false
  public get sourceList() {
    return this.getListAttribute('source_list');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getNumberAttribute('source_type');
  }

  // ssl_id - computed: true, optional: false, required: false
  public get sslId() {
    return this.getStringAttribute('ssl_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // switch - computed: true, optional: false, required: false
  public get switch() {
    return this.getBooleanAttribute('switch');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}

export class DataTencentcloudDayuL7RulesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDayuL7RulesListStructOutputReference {
    return new DataTencentcloudDayuL7RulesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dayu_l7_rules tencentcloud_dayu_l7_rules}
*/
export class DataTencentcloudDayuL7Rules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_l7_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDayuL7Rules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDayuL7Rules to import
  * @param importFromId The id of the existing DataTencentcloudDayuL7Rules that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dayu_l7_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDayuL7Rules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_l7_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dayu_l7_rules tencentcloud_dayu_l7_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDayuL7RulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDayuL7RulesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_l7_rules',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._resultOutputFile = config.resultOutputFile;
    this._ruleId = config.ruleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudDayuL7RulesListStructList(this, "list", false);
  public get list() {
    return this._list;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      rule_id: cdktf.stringToTerraform(this._ruleId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
