// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_alarm_all_namespaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMonitorAlarmAllNamespacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_alarm_all_namespaces#id DataTencentcloudMonitorAlarmAllNamespaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter based on the Id of the namespace without filling in the default query for all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_alarm_all_namespaces#ids DataTencentcloudMonitorAlarmAllNamespaces#ids}
  */
  readonly ids?: string[];
  /**
  * Fixed value, as `monitor`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_alarm_all_namespaces#module DataTencentcloudMonitorAlarmAllNamespaces#module}
  */
  readonly module: string;
  /**
  * Filter based on monitoring type, do not fill in default, check all types MT_QCE=cloud product monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_alarm_all_namespaces#monitor_types DataTencentcloudMonitorAlarmAllNamespaces#monitor_types}
  */
  readonly monitorTypes?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_alarm_all_namespaces#result_output_file DataTencentcloudMonitorAlarmAllNamespaces#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Currently, only ST_ALARM=alarm type is filtered based on usage scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_alarm_all_namespaces#scene_type DataTencentcloudMonitorAlarmAllNamespaces#scene_type}
  */
  readonly sceneType: string;
}
export interface DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperators {
}

export function dataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperatorsToTerraform(struct?: DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperatorsToHclTerraform(struct?: DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperatorsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperatorsOutputReference {
    return new DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensions {
}

export function dataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsToTerraform(struct?: DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsToHclTerraform(struct?: DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_filter_history - computed: true, optional: false, required: false
  public get canFilterHistory() {
    return this.getBooleanAttribute('can_filter_history');
  }

  // can_filter_policy - computed: true, optional: false, required: false
  public get canFilterPolicy() {
    return this.getBooleanAttribute('can_filter_policy');
  }

  // can_group_by - computed: true, optional: false, required: false
  public get canGroupBy() {
    return this.getBooleanAttribute('can_group_by');
  }

  // is_multiple - computed: true, optional: false, required: false
  public get isMultiple() {
    return this.getBooleanAttribute('is_multiple');
  }

  // is_mutable - computed: true, optional: false, required: false
  public get isMutable() {
    return this.getBooleanAttribute('is_mutable');
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // is_visible - computed: true, optional: false, required: false
  public get isVisible() {
    return this.getBooleanAttribute('is_visible');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // must_group_by - computed: true, optional: false, required: false
  public get mustGroupBy() {
    return this.getBooleanAttribute('must_group_by');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operators - computed: true, optional: false, required: false
  private _operators = new DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOperatorsList(this, "operators", false);
  public get operators() {
    return this._operators;
  }

  // show_value_replace - computed: true, optional: false, required: false
  public get showValueReplace() {
    return this.getStringAttribute('show_value_replace');
  }
}

export class DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOutputReference {
    return new DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmAllNamespacesCommonNamespaces {
}

export function dataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesToTerraform(struct?: DataTencentcloudMonitorAlarmAllNamespacesCommonNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesToHclTerraform(struct?: DataTencentcloudMonitorAlarmAllNamespacesCommonNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmAllNamespacesCommonNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmAllNamespacesCommonNamespaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesOutputReference {
    return new DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNew {
}

export function dataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNewToTerraform(struct?: DataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNew): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNewToHclTerraform(struct?: DataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNew): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNewOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNew | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNew | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_regions - computed: true, optional: false, required: false
  public get availableRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('available_regions'));
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // sort_id - computed: true, optional: false, required: false
  public get sortId() {
    return this.getNumberAttribute('sort_id');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNewList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNewOutputReference {
    return new DataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNew {
}

export function dataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNewToTerraform(struct?: DataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNew): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNewToHclTerraform(struct?: DataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNew): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNewOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNew | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNew | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_regions - computed: true, optional: false, required: false
  public get availableRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('available_regions'));
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // sort_id - computed: true, optional: false, required: false
  public get sortId() {
    return this.getNumberAttribute('sort_id');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNewList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNewOutputReference {
    return new DataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_alarm_all_namespaces tencentcloud_monitor_alarm_all_namespaces}
*/
export class DataTencentcloudMonitorAlarmAllNamespaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_alarm_all_namespaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMonitorAlarmAllNamespaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMonitorAlarmAllNamespaces to import
  * @param importFromId The id of the existing DataTencentcloudMonitorAlarmAllNamespaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_alarm_all_namespaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMonitorAlarmAllNamespaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_alarm_all_namespaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/monitor_alarm_all_namespaces tencentcloud_monitor_alarm_all_namespaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMonitorAlarmAllNamespacesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMonitorAlarmAllNamespacesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_alarm_all_namespaces',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._ids = config.ids;
    this._module = config.module;
    this._monitorTypes = config.monitorTypes;
    this._resultOutputFile = config.resultOutputFile;
    this._sceneType = config.sceneType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // common_namespaces - computed: true, optional: false, required: false
  private _commonNamespaces = new DataTencentcloudMonitorAlarmAllNamespacesCommonNamespacesList(this, "common_namespaces", false);
  public get commonNamespaces() {
    return this._commonNamespaces;
  }

  // custom_namespaces_new - computed: true, optional: false, required: false
  private _customNamespacesNew = new DataTencentcloudMonitorAlarmAllNamespacesCustomNamespacesNewList(this, "custom_namespaces_new", false);
  public get customNamespacesNew() {
    return this._customNamespacesNew;
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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // module - computed: false, optional: false, required: true
  private _module?: string; 
  public get module() {
    return this.getStringAttribute('module');
  }
  public set module(value: string) {
    this._module = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // monitor_types - computed: false, optional: true, required: false
  private _monitorTypes?: string[]; 
  public get monitorTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_types'));
  }
  public set monitorTypes(value: string[]) {
    this._monitorTypes = value;
  }
  public resetMonitorTypes() {
    this._monitorTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypesInput() {
    return this._monitorTypes;
  }

  // qce_namespaces_new - computed: true, optional: false, required: false
  private _qceNamespacesNew = new DataTencentcloudMonitorAlarmAllNamespacesQceNamespacesNewList(this, "qce_namespaces_new", false);
  public get qceNamespacesNew() {
    return this._qceNamespacesNew;
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

  // scene_type - computed: false, optional: false, required: true
  private _sceneType?: string; 
  public get sceneType() {
    return this.getStringAttribute('scene_type');
  }
  public set sceneType(value: string) {
    this._sceneType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneTypeInput() {
    return this._sceneType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      module: cdktf.stringToTerraform(this._module),
      monitor_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorTypes),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      scene_type: cdktf.stringToTerraform(this._sceneType),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      module: {
        value: cdktf.stringToHclTerraform(this._module),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scene_type: {
        value: cdktf.stringToHclTerraform(this._sceneType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
