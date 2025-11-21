// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmsHybridMonitorSlsTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#collect_interval CmsHybridMonitorSlsTask#collect_interval}
  */
  readonly collectInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#collect_target_type CmsHybridMonitorSlsTask#collect_target_type}
  */
  readonly collectTargetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#description CmsHybridMonitorSlsTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#id CmsHybridMonitorSlsTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#namespace CmsHybridMonitorSlsTask#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#task_name CmsHybridMonitorSlsTask#task_name}
  */
  readonly taskName: string;
  /**
  * attach_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#attach_labels CmsHybridMonitorSlsTask#attach_labels}
  */
  readonly attachLabels?: CmsHybridMonitorSlsTaskAttachLabels[] | cdktf.IResolvable;
  /**
  * sls_process_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#sls_process_config CmsHybridMonitorSlsTask#sls_process_config}
  */
  readonly slsProcessConfig: CmsHybridMonitorSlsTaskSlsProcessConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#timeouts CmsHybridMonitorSlsTask#timeouts}
  */
  readonly timeouts?: CmsHybridMonitorSlsTaskTimeouts;
}
export interface CmsHybridMonitorSlsTaskAttachLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#name CmsHybridMonitorSlsTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#value CmsHybridMonitorSlsTask#value}
  */
  readonly value?: string;
}

export function cmsHybridMonitorSlsTaskAttachLabelsToTerraform(struct?: CmsHybridMonitorSlsTaskAttachLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cmsHybridMonitorSlsTaskAttachLabelsToHclTerraform(struct?: CmsHybridMonitorSlsTaskAttachLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsHybridMonitorSlsTaskAttachLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsHybridMonitorSlsTaskAttachLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsHybridMonitorSlsTaskAttachLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CmsHybridMonitorSlsTaskAttachLabelsList extends cdktf.ComplexList {
  public internalValue? : CmsHybridMonitorSlsTaskAttachLabels[] | cdktf.IResolvable

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
  public get(index: number): CmsHybridMonitorSlsTaskAttachLabelsOutputReference {
    return new CmsHybridMonitorSlsTaskAttachLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsHybridMonitorSlsTaskSlsProcessConfigExpress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#alias CmsHybridMonitorSlsTask#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#express CmsHybridMonitorSlsTask#express}
  */
  readonly express?: string;
}

export function cmsHybridMonitorSlsTaskSlsProcessConfigExpressToTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigExpress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    express: cdktf.stringToTerraform(struct!.express),
  }
}


export function cmsHybridMonitorSlsTaskSlsProcessConfigExpressToHclTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigExpress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    express: {
      value: cdktf.stringToHclTerraform(struct!.express),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsHybridMonitorSlsTaskSlsProcessConfigExpressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsHybridMonitorSlsTaskSlsProcessConfigExpress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._express !== undefined) {
      hasAnyValues = true;
      internalValueResult.express = this._express;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsHybridMonitorSlsTaskSlsProcessConfigExpress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._express = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._express = value.express;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // express - computed: false, optional: true, required: false
  private _express?: string; 
  public get express() {
    return this.getStringAttribute('express');
  }
  public set express(value: string) {
    this._express = value;
  }
  public resetExpress() {
    this._express = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressInput() {
    return this._express;
  }
}

export class CmsHybridMonitorSlsTaskSlsProcessConfigExpressList extends cdktf.ComplexList {
  public internalValue? : CmsHybridMonitorSlsTaskSlsProcessConfigExpress[] | cdktf.IResolvable

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
  public get(index: number): CmsHybridMonitorSlsTaskSlsProcessConfigExpressOutputReference {
    return new CmsHybridMonitorSlsTaskSlsProcessConfigExpressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsHybridMonitorSlsTaskSlsProcessConfigFilterFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#operator CmsHybridMonitorSlsTask#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#sls_key_name CmsHybridMonitorSlsTask#sls_key_name}
  */
  readonly slsKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#value CmsHybridMonitorSlsTask#value}
  */
  readonly value?: string;
}

export function cmsHybridMonitorSlsTaskSlsProcessConfigFilterFiltersToTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigFilterFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    sls_key_name: cdktf.stringToTerraform(struct!.slsKeyName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cmsHybridMonitorSlsTaskSlsProcessConfigFilterFiltersToHclTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigFilterFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_key_name: {
      value: cdktf.stringToHclTerraform(struct!.slsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsHybridMonitorSlsTaskSlsProcessConfigFilterFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsHybridMonitorSlsTaskSlsProcessConfigFilterFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._slsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsKeyName = this._slsKeyName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsHybridMonitorSlsTaskSlsProcessConfigFilterFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._slsKeyName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._slsKeyName = value.slsKeyName;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // sls_key_name - computed: false, optional: true, required: false
  private _slsKeyName?: string; 
  public get slsKeyName() {
    return this.getStringAttribute('sls_key_name');
  }
  public set slsKeyName(value: string) {
    this._slsKeyName = value;
  }
  public resetSlsKeyName() {
    this._slsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsKeyNameInput() {
    return this._slsKeyName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CmsHybridMonitorSlsTaskSlsProcessConfigFilterFiltersList extends cdktf.ComplexList {
  public internalValue? : CmsHybridMonitorSlsTaskSlsProcessConfigFilterFilters[] | cdktf.IResolvable

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
  public get(index: number): CmsHybridMonitorSlsTaskSlsProcessConfigFilterFiltersOutputReference {
    return new CmsHybridMonitorSlsTaskSlsProcessConfigFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsHybridMonitorSlsTaskSlsProcessConfigFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#relation CmsHybridMonitorSlsTask#relation}
  */
  readonly relation?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#filters CmsHybridMonitorSlsTask#filters}
  */
  readonly filters?: CmsHybridMonitorSlsTaskSlsProcessConfigFilterFilters[] | cdktf.IResolvable;
}

export function cmsHybridMonitorSlsTaskSlsProcessConfigFilterToTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigFilterOutputReference | CmsHybridMonitorSlsTaskSlsProcessConfigFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relation: cdktf.stringToTerraform(struct!.relation),
    filters: cdktf.listMapper(cmsHybridMonitorSlsTaskSlsProcessConfigFilterFiltersToTerraform, true)(struct!.filters),
  }
}


export function cmsHybridMonitorSlsTaskSlsProcessConfigFilterToHclTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigFilterOutputReference | CmsHybridMonitorSlsTaskSlsProcessConfigFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relation: {
      value: cdktf.stringToHclTerraform(struct!.relation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(cmsHybridMonitorSlsTaskSlsProcessConfigFilterFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "set",
      storageClassType: "CmsHybridMonitorSlsTaskSlsProcessConfigFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsHybridMonitorSlsTaskSlsProcessConfigFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CmsHybridMonitorSlsTaskSlsProcessConfigFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relation !== undefined) {
      hasAnyValues = true;
      internalValueResult.relation = this._relation;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsHybridMonitorSlsTaskSlsProcessConfigFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relation = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relation = value.relation;
      this._filters.internalValue = value.filters;
    }
  }

  // relation - computed: false, optional: true, required: false
  private _relation?: string; 
  public get relation() {
    return this.getStringAttribute('relation');
  }
  public set relation(value: string) {
    this._relation = value;
  }
  public resetRelation() {
    this._relation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInput() {
    return this._relation;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new CmsHybridMonitorSlsTaskSlsProcessConfigFilterFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: CmsHybridMonitorSlsTaskSlsProcessConfigFilterFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface CmsHybridMonitorSlsTaskSlsProcessConfigGroupBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#alias CmsHybridMonitorSlsTask#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#sls_key_name CmsHybridMonitorSlsTask#sls_key_name}
  */
  readonly slsKeyName?: string;
}

export function cmsHybridMonitorSlsTaskSlsProcessConfigGroupByToTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    sls_key_name: cdktf.stringToTerraform(struct!.slsKeyName),
  }
}


export function cmsHybridMonitorSlsTaskSlsProcessConfigGroupByToHclTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_key_name: {
      value: cdktf.stringToHclTerraform(struct!.slsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsHybridMonitorSlsTaskSlsProcessConfigGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsHybridMonitorSlsTaskSlsProcessConfigGroupBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._slsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsKeyName = this._slsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsHybridMonitorSlsTaskSlsProcessConfigGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._slsKeyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._slsKeyName = value.slsKeyName;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // sls_key_name - computed: false, optional: true, required: false
  private _slsKeyName?: string; 
  public get slsKeyName() {
    return this.getStringAttribute('sls_key_name');
  }
  public set slsKeyName(value: string) {
    this._slsKeyName = value;
  }
  public resetSlsKeyName() {
    this._slsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsKeyNameInput() {
    return this._slsKeyName;
  }
}

export class CmsHybridMonitorSlsTaskSlsProcessConfigGroupByList extends cdktf.ComplexList {
  public internalValue? : CmsHybridMonitorSlsTaskSlsProcessConfigGroupBy[] | cdktf.IResolvable

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
  public get(index: number): CmsHybridMonitorSlsTaskSlsProcessConfigGroupByOutputReference {
    return new CmsHybridMonitorSlsTaskSlsProcessConfigGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsHybridMonitorSlsTaskSlsProcessConfigStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#alias CmsHybridMonitorSlsTask#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#function CmsHybridMonitorSlsTask#function}
  */
  readonly function?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#parameter_one CmsHybridMonitorSlsTask#parameter_one}
  */
  readonly parameterOne?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#parameter_two CmsHybridMonitorSlsTask#parameter_two}
  */
  readonly parameterTwo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#sls_key_name CmsHybridMonitorSlsTask#sls_key_name}
  */
  readonly slsKeyName?: string;
}

export function cmsHybridMonitorSlsTaskSlsProcessConfigStatisticsToTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    function: cdktf.stringToTerraform(struct!.function),
    parameter_one: cdktf.stringToTerraform(struct!.parameterOne),
    parameter_two: cdktf.stringToTerraform(struct!.parameterTwo),
    sls_key_name: cdktf.stringToTerraform(struct!.slsKeyName),
  }
}


export function cmsHybridMonitorSlsTaskSlsProcessConfigStatisticsToHclTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_one: {
      value: cdktf.stringToHclTerraform(struct!.parameterOne),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_two: {
      value: cdktf.stringToHclTerraform(struct!.parameterTwo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_key_name: {
      value: cdktf.stringToHclTerraform(struct!.slsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsHybridMonitorSlsTaskSlsProcessConfigStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsHybridMonitorSlsTaskSlsProcessConfigStatistics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._parameterOne !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterOne = this._parameterOne;
    }
    if (this._parameterTwo !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterTwo = this._parameterTwo;
    }
    if (this._slsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsKeyName = this._slsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsHybridMonitorSlsTaskSlsProcessConfigStatistics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._function = undefined;
      this._parameterOne = undefined;
      this._parameterTwo = undefined;
      this._slsKeyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._function = value.function;
      this._parameterOne = value.parameterOne;
      this._parameterTwo = value.parameterTwo;
      this._slsKeyName = value.slsKeyName;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // parameter_one - computed: false, optional: true, required: false
  private _parameterOne?: string; 
  public get parameterOne() {
    return this.getStringAttribute('parameter_one');
  }
  public set parameterOne(value: string) {
    this._parameterOne = value;
  }
  public resetParameterOne() {
    this._parameterOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOneInput() {
    return this._parameterOne;
  }

  // parameter_two - computed: false, optional: true, required: false
  private _parameterTwo?: string; 
  public get parameterTwo() {
    return this.getStringAttribute('parameter_two');
  }
  public set parameterTwo(value: string) {
    this._parameterTwo = value;
  }
  public resetParameterTwo() {
    this._parameterTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterTwoInput() {
    return this._parameterTwo;
  }

  // sls_key_name - computed: false, optional: true, required: false
  private _slsKeyName?: string; 
  public get slsKeyName() {
    return this.getStringAttribute('sls_key_name');
  }
  public set slsKeyName(value: string) {
    this._slsKeyName = value;
  }
  public resetSlsKeyName() {
    this._slsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsKeyNameInput() {
    return this._slsKeyName;
  }
}

export class CmsHybridMonitorSlsTaskSlsProcessConfigStatisticsList extends cdktf.ComplexList {
  public internalValue? : CmsHybridMonitorSlsTaskSlsProcessConfigStatistics[] | cdktf.IResolvable

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
  public get(index: number): CmsHybridMonitorSlsTaskSlsProcessConfigStatisticsOutputReference {
    return new CmsHybridMonitorSlsTaskSlsProcessConfigStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsHybridMonitorSlsTaskSlsProcessConfig {
  /**
  * express block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#express CmsHybridMonitorSlsTask#express}
  */
  readonly express?: CmsHybridMonitorSlsTaskSlsProcessConfigExpress[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#filter CmsHybridMonitorSlsTask#filter}
  */
  readonly filter?: CmsHybridMonitorSlsTaskSlsProcessConfigFilter;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#group_by CmsHybridMonitorSlsTask#group_by}
  */
  readonly groupBy?: CmsHybridMonitorSlsTaskSlsProcessConfigGroupBy[] | cdktf.IResolvable;
  /**
  * statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#statistics CmsHybridMonitorSlsTask#statistics}
  */
  readonly statistics?: CmsHybridMonitorSlsTaskSlsProcessConfigStatistics[] | cdktf.IResolvable;
}

export function cmsHybridMonitorSlsTaskSlsProcessConfigToTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigOutputReference | CmsHybridMonitorSlsTaskSlsProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    express: cdktf.listMapper(cmsHybridMonitorSlsTaskSlsProcessConfigExpressToTerraform, true)(struct!.express),
    filter: cmsHybridMonitorSlsTaskSlsProcessConfigFilterToTerraform(struct!.filter),
    group_by: cdktf.listMapper(cmsHybridMonitorSlsTaskSlsProcessConfigGroupByToTerraform, true)(struct!.groupBy),
    statistics: cdktf.listMapper(cmsHybridMonitorSlsTaskSlsProcessConfigStatisticsToTerraform, true)(struct!.statistics),
  }
}


export function cmsHybridMonitorSlsTaskSlsProcessConfigToHclTerraform(struct?: CmsHybridMonitorSlsTaskSlsProcessConfigOutputReference | CmsHybridMonitorSlsTaskSlsProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    express: {
      value: cdktf.listMapperHcl(cmsHybridMonitorSlsTaskSlsProcessConfigExpressToHclTerraform, true)(struct!.express),
      isBlock: true,
      type: "set",
      storageClassType: "CmsHybridMonitorSlsTaskSlsProcessConfigExpressList",
    },
    filter: {
      value: cmsHybridMonitorSlsTaskSlsProcessConfigFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "set",
      storageClassType: "CmsHybridMonitorSlsTaskSlsProcessConfigFilterList",
    },
    group_by: {
      value: cdktf.listMapperHcl(cmsHybridMonitorSlsTaskSlsProcessConfigGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "set",
      storageClassType: "CmsHybridMonitorSlsTaskSlsProcessConfigGroupByList",
    },
    statistics: {
      value: cdktf.listMapperHcl(cmsHybridMonitorSlsTaskSlsProcessConfigStatisticsToHclTerraform, true)(struct!.statistics),
      isBlock: true,
      type: "set",
      storageClassType: "CmsHybridMonitorSlsTaskSlsProcessConfigStatisticsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsHybridMonitorSlsTaskSlsProcessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CmsHybridMonitorSlsTaskSlsProcessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._express?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.express = this._express?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._statistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsHybridMonitorSlsTaskSlsProcessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._express.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._statistics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._express.internalValue = value.express;
      this._filter.internalValue = value.filter;
      this._groupBy.internalValue = value.groupBy;
      this._statistics.internalValue = value.statistics;
    }
  }

  // express - computed: false, optional: true, required: false
  private _express = new CmsHybridMonitorSlsTaskSlsProcessConfigExpressList(this, "express", true);
  public get express() {
    return this._express;
  }
  public putExpress(value: CmsHybridMonitorSlsTaskSlsProcessConfigExpress[] | cdktf.IResolvable) {
    this._express.internalValue = value;
  }
  public resetExpress() {
    this._express.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressInput() {
    return this._express.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new CmsHybridMonitorSlsTaskSlsProcessConfigFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CmsHybridMonitorSlsTaskSlsProcessConfigFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new CmsHybridMonitorSlsTaskSlsProcessConfigGroupByList(this, "group_by", true);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: CmsHybridMonitorSlsTaskSlsProcessConfigGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics = new CmsHybridMonitorSlsTaskSlsProcessConfigStatisticsList(this, "statistics", true);
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: CmsHybridMonitorSlsTaskSlsProcessConfigStatistics[] | cdktf.IResolvable) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }
}
export interface CmsHybridMonitorSlsTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#create CmsHybridMonitorSlsTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#delete CmsHybridMonitorSlsTask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#update CmsHybridMonitorSlsTask#update}
  */
  readonly update?: string;
}

export function cmsHybridMonitorSlsTaskTimeoutsToTerraform(struct?: CmsHybridMonitorSlsTaskTimeouts | cdktf.IResolvable): any {
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


export function cmsHybridMonitorSlsTaskTimeoutsToHclTerraform(struct?: CmsHybridMonitorSlsTaskTimeouts | cdktf.IResolvable): any {
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

export class CmsHybridMonitorSlsTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmsHybridMonitorSlsTaskTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CmsHybridMonitorSlsTaskTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task alicloud_cms_hybrid_monitor_sls_task}
*/
export class CmsHybridMonitorSlsTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cms_hybrid_monitor_sls_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmsHybridMonitorSlsTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmsHybridMonitorSlsTask to import
  * @param importFromId The id of the existing CmsHybridMonitorSlsTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmsHybridMonitorSlsTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cms_hybrid_monitor_sls_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cms_hybrid_monitor_sls_task alicloud_cms_hybrid_monitor_sls_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmsHybridMonitorSlsTaskConfig
  */
  public constructor(scope: Construct, id: string, config: CmsHybridMonitorSlsTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cms_hybrid_monitor_sls_task',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectInterval = config.collectInterval;
    this._collectTargetType = config.collectTargetType;
    this._description = config.description;
    this._id = config.id;
    this._namespace = config.namespace;
    this._taskName = config.taskName;
    this._attachLabels.internalValue = config.attachLabels;
    this._slsProcessConfig.internalValue = config.slsProcessConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collect_interval - computed: true, optional: true, required: false
  private _collectInterval?: number; 
  public get collectInterval() {
    return this.getNumberAttribute('collect_interval');
  }
  public set collectInterval(value: number) {
    this._collectInterval = value;
  }
  public resetCollectInterval() {
    this._collectInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectIntervalInput() {
    return this._collectInterval;
  }

  // collect_target_type - computed: false, optional: false, required: true
  private _collectTargetType?: string; 
  public get collectTargetType() {
    return this.getStringAttribute('collect_target_type');
  }
  public set collectTargetType(value: string) {
    this._collectTargetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectTargetTypeInput() {
    return this._collectTargetType;
  }

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

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // attach_labels - computed: false, optional: true, required: false
  private _attachLabels = new CmsHybridMonitorSlsTaskAttachLabelsList(this, "attach_labels", true);
  public get attachLabels() {
    return this._attachLabels;
  }
  public putAttachLabels(value: CmsHybridMonitorSlsTaskAttachLabels[] | cdktf.IResolvable) {
    this._attachLabels.internalValue = value;
  }
  public resetAttachLabels() {
    this._attachLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachLabelsInput() {
    return this._attachLabels.internalValue;
  }

  // sls_process_config - computed: false, optional: false, required: true
  private _slsProcessConfig = new CmsHybridMonitorSlsTaskSlsProcessConfigOutputReference(this, "sls_process_config");
  public get slsProcessConfig() {
    return this._slsProcessConfig;
  }
  public putSlsProcessConfig(value: CmsHybridMonitorSlsTaskSlsProcessConfig) {
    this._slsProcessConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slsProcessConfigInput() {
    return this._slsProcessConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CmsHybridMonitorSlsTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CmsHybridMonitorSlsTaskTimeouts) {
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
      collect_interval: cdktf.numberToTerraform(this._collectInterval),
      collect_target_type: cdktf.stringToTerraform(this._collectTargetType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      task_name: cdktf.stringToTerraform(this._taskName),
      attach_labels: cdktf.listMapper(cmsHybridMonitorSlsTaskAttachLabelsToTerraform, true)(this._attachLabels.internalValue),
      sls_process_config: cmsHybridMonitorSlsTaskSlsProcessConfigToTerraform(this._slsProcessConfig.internalValue),
      timeouts: cmsHybridMonitorSlsTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collect_interval: {
        value: cdktf.numberToHclTerraform(this._collectInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collect_target_type: {
        value: cdktf.stringToHclTerraform(this._collectTargetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attach_labels: {
        value: cdktf.listMapperHcl(cmsHybridMonitorSlsTaskAttachLabelsToHclTerraform, true)(this._attachLabels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CmsHybridMonitorSlsTaskAttachLabelsList",
      },
      sls_process_config: {
        value: cmsHybridMonitorSlsTaskSlsProcessConfigToHclTerraform(this._slsProcessConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CmsHybridMonitorSlsTaskSlsProcessConfigList",
      },
      timeouts: {
        value: cmsHybridMonitorSlsTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmsHybridMonitorSlsTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
