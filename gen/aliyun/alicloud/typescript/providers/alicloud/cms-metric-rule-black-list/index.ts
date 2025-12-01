// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmsMetricRuleBlackListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#category CmsMetricRuleBlackList#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#effective_time CmsMetricRuleBlackList#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#enable_end_time CmsMetricRuleBlackList#enable_end_time}
  */
  readonly enableEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#enable_start_time CmsMetricRuleBlackList#enable_start_time}
  */
  readonly enableStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#id CmsMetricRuleBlackList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#instances CmsMetricRuleBlackList#instances}
  */
  readonly instances: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#is_enable CmsMetricRuleBlackList#is_enable}
  */
  readonly isEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#metric_rule_black_list_name CmsMetricRuleBlackList#metric_rule_black_list_name}
  */
  readonly metricRuleBlackListName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#namespace CmsMetricRuleBlackList#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#scope_type CmsMetricRuleBlackList#scope_type}
  */
  readonly scopeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#scope_value CmsMetricRuleBlackList#scope_value}
  */
  readonly scopeValue?: string[];
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#metrics CmsMetricRuleBlackList#metrics}
  */
  readonly metrics?: CmsMetricRuleBlackListMetrics[] | cdktf.IResolvable;
}
export interface CmsMetricRuleBlackListMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#metric_name CmsMetricRuleBlackList#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#resource CmsMetricRuleBlackList#resource}
  */
  readonly resource?: string;
}

export function cmsMetricRuleBlackListMetricsToTerraform(struct?: CmsMetricRuleBlackListMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function cmsMetricRuleBlackListMetricsToHclTerraform(struct?: CmsMetricRuleBlackListMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsMetricRuleBlackListMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsMetricRuleBlackListMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsMetricRuleBlackListMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._resource = value.resource;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}

export class CmsMetricRuleBlackListMetricsList extends cdktf.ComplexList {
  public internalValue? : CmsMetricRuleBlackListMetrics[] | cdktf.IResolvable

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
  public get(index: number): CmsMetricRuleBlackListMetricsOutputReference {
    return new CmsMetricRuleBlackListMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list alicloud_cms_metric_rule_black_list}
*/
export class CmsMetricRuleBlackList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cms_metric_rule_black_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmsMetricRuleBlackList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmsMetricRuleBlackList to import
  * @param importFromId The id of the existing CmsMetricRuleBlackList that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmsMetricRuleBlackList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cms_metric_rule_black_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cms_metric_rule_black_list alicloud_cms_metric_rule_black_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmsMetricRuleBlackListConfig
  */
  public constructor(scope: Construct, id: string, config: CmsMetricRuleBlackListConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cms_metric_rule_black_list',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._effectiveTime = config.effectiveTime;
    this._enableEndTime = config.enableEndTime;
    this._enableStartTime = config.enableStartTime;
    this._id = config.id;
    this._instances = config.instances;
    this._isEnable = config.isEnable;
    this._metricRuleBlackListName = config.metricRuleBlackListName;
    this._namespace = config.namespace;
    this._scopeType = config.scopeType;
    this._scopeValue = config.scopeValue;
    this._metrics.internalValue = config.metrics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_time - computed: false, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
  }

  // enable_end_time - computed: false, optional: true, required: false
  private _enableEndTime?: string; 
  public get enableEndTime() {
    return this.getStringAttribute('enable_end_time');
  }
  public set enableEndTime(value: string) {
    this._enableEndTime = value;
  }
  public resetEnableEndTime() {
    this._enableEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEndTimeInput() {
    return this._enableEndTime;
  }

  // enable_start_time - computed: false, optional: true, required: false
  private _enableStartTime?: string; 
  public get enableStartTime() {
    return this.getStringAttribute('enable_start_time');
  }
  public set enableStartTime(value: string) {
    this._enableStartTime = value;
  }
  public resetEnableStartTime() {
    this._enableStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStartTimeInput() {
    return this._enableStartTime;
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

  // instances - computed: false, optional: false, required: true
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // is_enable - computed: true, optional: true, required: false
  private _isEnable?: boolean | cdktf.IResolvable; 
  public get isEnable() {
    return this.getBooleanAttribute('is_enable');
  }
  public set isEnable(value: boolean | cdktf.IResolvable) {
    this._isEnable = value;
  }
  public resetIsEnable() {
    this._isEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnableInput() {
    return this._isEnable;
  }

  // metric_rule_black_list_id - computed: true, optional: false, required: false
  public get metricRuleBlackListId() {
    return this.getStringAttribute('metric_rule_black_list_id');
  }

  // metric_rule_black_list_name - computed: false, optional: false, required: true
  private _metricRuleBlackListName?: string; 
  public get metricRuleBlackListName() {
    return this.getStringAttribute('metric_rule_black_list_name');
  }
  public set metricRuleBlackListName(value: string) {
    this._metricRuleBlackListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRuleBlackListNameInput() {
    return this._metricRuleBlackListName;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // scope_type - computed: true, optional: true, required: false
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  public resetScopeType() {
    this._scopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // scope_value - computed: false, optional: true, required: false
  private _scopeValue?: string[]; 
  public get scopeValue() {
    return this.getListAttribute('scope_value');
  }
  public set scopeValue(value: string[]) {
    this._scopeValue = value;
  }
  public resetScopeValue() {
    this._scopeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeValueInput() {
    return this._scopeValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new CmsMetricRuleBlackListMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: CmsMetricRuleBlackListMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      enable_end_time: cdktf.stringToTerraform(this._enableEndTime),
      enable_start_time: cdktf.stringToTerraform(this._enableStartTime),
      id: cdktf.stringToTerraform(this._id),
      instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instances),
      is_enable: cdktf.booleanToTerraform(this._isEnable),
      metric_rule_black_list_name: cdktf.stringToTerraform(this._metricRuleBlackListName),
      namespace: cdktf.stringToTerraform(this._namespace),
      scope_type: cdktf.stringToTerraform(this._scopeType),
      scope_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopeValue),
      metrics: cdktf.listMapper(cmsMetricRuleBlackListMetricsToTerraform, true)(this._metrics.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_time: {
        value: cdktf.stringToHclTerraform(this._effectiveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_end_time: {
        value: cdktf.stringToHclTerraform(this._enableEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_start_time: {
        value: cdktf.stringToHclTerraform(this._enableStartTime),
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
      instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instances),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_enable: {
        value: cdktf.booleanToHclTerraform(this._isEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_rule_black_list_name: {
        value: cdktf.stringToHclTerraform(this._metricRuleBlackListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_type: {
        value: cdktf.stringToHclTerraform(this._scopeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopeValue),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      metrics: {
        value: cdktf.listMapperHcl(cmsMetricRuleBlackListMetricsToHclTerraform, true)(this._metrics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CmsMetricRuleBlackListMetricsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
