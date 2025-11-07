// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#annotations AppSetting#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#description AppSetting#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#disable AppSetting#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#id AppSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#labels AppSetting#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#name AppSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#namespace AppSetting#namespace}
  */
  readonly namespace: string;
  /**
  * app_type_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#app_type_settings AppSetting#app_type_settings}
  */
  readonly appTypeSettings: AppSettingAppTypeSettings[] | cdktf.IResolvable;
}
export interface AppSettingAppTypeSettingsAppTypeRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#name AppSetting#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#namespace AppSetting#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#tenant AppSetting#tenant}
  */
  readonly tenant?: string;
}

export function appSettingAppTypeSettingsAppTypeRefToTerraform(struct?: AppSettingAppTypeSettingsAppTypeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function appSettingAppTypeSettingsAppTypeRefToHclTerraform(struct?: AppSettingAppTypeSettingsAppTypeRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSettingAppTypeSettingsAppTypeRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppSettingAppTypeSettingsAppTypeRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSettingAppTypeSettingsAppTypeRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AppSettingAppTypeSettingsAppTypeRefList extends cdktf.ComplexList {
  public internalValue? : AppSettingAppTypeSettingsAppTypeRef[] | cdktf.IResolvable

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
  public get(index: number): AppSettingAppTypeSettingsAppTypeRefOutputReference {
    return new AppSettingAppTypeSettingsAppTypeRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppSettingAppTypeSettingsBusinessLogicMarkupSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#disable AppSetting#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#enable AppSetting#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function appSettingAppTypeSettingsBusinessLogicMarkupSettingToTerraform(struct?: AppSettingAppTypeSettingsBusinessLogicMarkupSettingOutputReference | AppSettingAppTypeSettingsBusinessLogicMarkupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function appSettingAppTypeSettingsBusinessLogicMarkupSettingToHclTerraform(struct?: AppSettingAppTypeSettingsBusinessLogicMarkupSettingOutputReference | AppSettingAppTypeSettingsBusinessLogicMarkupSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSettingAppTypeSettingsBusinessLogicMarkupSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSettingAppTypeSettingsBusinessLogicMarkupSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSettingAppTypeSettingsBusinessLogicMarkupSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#metric AppSetting#metric}
  */
  readonly metric?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#metrics_source AppSetting#metrics_source}
  */
  readonly metricsSource?: string;
}

export function appSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectorsToTerraform(struct?: AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metric),
    metrics_source: cdktf.stringToTerraform(struct!.metricsSource),
  }
}


export function appSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectorsToHclTerraform(struct?: AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metric),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metrics_source: {
      value: cdktf.stringToHclTerraform(struct!.metricsSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricsSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsSource = this._metricsSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricsSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricsSource = value.metricsSource;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string[]; 
  public get metric() {
    return this.getListAttribute('metric');
  }
  public set metric(value: string[]) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metrics_source - computed: false, optional: true, required: false
  private _metricsSource?: string; 
  public get metricsSource() {
    return this.getStringAttribute('metrics_source');
  }
  public set metricsSource(value: string) {
    this._metricsSource = value;
  }
  public resetMetricsSource() {
    this._metricsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsSourceInput() {
    return this._metricsSource;
  }
}

export class AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectorsList extends cdktf.ComplexList {
  public internalValue? : AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectors[] | cdktf.IResolvable

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
  public get(index: number): AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectorsOutputReference {
    return new AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppSettingAppTypeSettingsTimeseriesAnalysesSetting {
  /**
  * metric_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#metric_selectors AppSetting#metric_selectors}
  */
  readonly metricSelectors?: AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectors[] | cdktf.IResolvable;
}

export function appSettingAppTypeSettingsTimeseriesAnalysesSettingToTerraform(struct?: AppSettingAppTypeSettingsTimeseriesAnalysesSettingOutputReference | AppSettingAppTypeSettingsTimeseriesAnalysesSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_selectors: cdktf.listMapper(appSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectorsToTerraform, true)(struct!.metricSelectors),
  }
}


export function appSettingAppTypeSettingsTimeseriesAnalysesSettingToHclTerraform(struct?: AppSettingAppTypeSettingsTimeseriesAnalysesSettingOutputReference | AppSettingAppTypeSettingsTimeseriesAnalysesSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_selectors: {
      value: cdktf.listMapperHcl(appSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectorsToHclTerraform, true)(struct!.metricSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSettingAppTypeSettingsTimeseriesAnalysesSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSettingAppTypeSettingsTimeseriesAnalysesSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSelectors = this._metricSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSettingAppTypeSettingsTimeseriesAnalysesSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricSelectors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricSelectors.internalValue = value.metricSelectors;
    }
  }

  // metric_selectors - computed: false, optional: true, required: false
  private _metricSelectors = new AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectorsList(this, "metric_selectors", false);
  public get metricSelectors() {
    return this._metricSelectors;
  }
  public putMetricSelectors(value: AppSettingAppTypeSettingsTimeseriesAnalysesSettingMetricSelectors[] | cdktf.IResolvable) {
    this._metricSelectors.internalValue = value;
  }
  public resetMetricSelectors() {
    this._metricSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectorsInput() {
    return this._metricSelectors.internalValue;
  }
}
export interface AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#login_failures_threshold AppSetting#login_failures_threshold}
  */
  readonly loginFailuresThreshold: number;
}

export function appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivityToTerraform(struct?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivityOutputReference | AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_failures_threshold: cdktf.numberToTerraform(struct!.loginFailuresThreshold),
  }
}


export function appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivityToHclTerraform(struct?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivityOutputReference | AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_failures_threshold: {
      value: cdktf.numberToHclTerraform(struct!.loginFailuresThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginFailuresThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginFailuresThreshold = this._loginFailuresThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginFailuresThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginFailuresThreshold = value.loginFailuresThreshold;
    }
  }

  // login_failures_threshold - computed: false, optional: false, required: true
  private _loginFailuresThreshold?: number; 
  public get loginFailuresThreshold() {
    return this.getNumberAttribute('login_failures_threshold');
  }
  public set loginFailuresThreshold(value: number) {
    this._loginFailuresThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginFailuresThresholdInput() {
    return this._loginFailuresThreshold;
  }
}
export interface AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#forbidden_requests_threshold AppSetting#forbidden_requests_threshold}
  */
  readonly forbiddenRequestsThreshold: number;
}

export function appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivityToTerraform(struct?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivityOutputReference | AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forbidden_requests_threshold: cdktf.numberToTerraform(struct!.forbiddenRequestsThreshold),
  }
}


export function appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivityToHclTerraform(struct?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivityOutputReference | AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forbidden_requests_threshold: {
      value: cdktf.numberToHclTerraform(struct!.forbiddenRequestsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forbiddenRequestsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenRequestsThreshold = this._forbiddenRequestsThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forbiddenRequestsThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forbiddenRequestsThreshold = value.forbiddenRequestsThreshold;
    }
  }

  // forbidden_requests_threshold - computed: false, optional: false, required: true
  private _forbiddenRequestsThreshold?: number; 
  public get forbiddenRequestsThreshold() {
    return this.getNumberAttribute('forbidden_requests_threshold');
  }
  public set forbiddenRequestsThreshold(value: number) {
    this._forbiddenRequestsThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenRequestsThresholdInput() {
    return this._forbiddenRequestsThreshold;
  }
}
export interface AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#cooling_off_period AppSetting#cooling_off_period}
  */
  readonly coolingOffPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#exclude_bot_defense_activity AppSetting#exclude_bot_defense_activity}
  */
  readonly excludeBotDefenseActivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#exclude_failed_login_activity AppSetting#exclude_failed_login_activity}
  */
  readonly excludeFailedLoginActivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#exclude_forbidden_activity AppSetting#exclude_forbidden_activity}
  */
  readonly excludeForbiddenActivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#exclude_ip_reputation AppSetting#exclude_ip_reputation}
  */
  readonly excludeIpReputation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#exclude_rate_limit AppSetting#exclude_rate_limit}
  */
  readonly excludeRateLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#exclude_waf_activity AppSetting#exclude_waf_activity}
  */
  readonly excludeWafActivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#include_bot_defense_activity AppSetting#include_bot_defense_activity}
  */
  readonly includeBotDefenseActivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#include_ip_reputation AppSetting#include_ip_reputation}
  */
  readonly includeIpReputation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#include_rate_limit AppSetting#include_rate_limit}
  */
  readonly includeRateLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#include_waf_activity AppSetting#include_waf_activity}
  */
  readonly includeWafActivity?: boolean | cdktf.IResolvable;
  /**
  * include_failed_login_activity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#include_failed_login_activity AppSetting#include_failed_login_activity}
  */
  readonly includeFailedLoginActivity?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivity;
  /**
  * include_forbidden_activity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#include_forbidden_activity AppSetting#include_forbidden_activity}
  */
  readonly includeForbiddenActivity?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivity;
}

export function appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionToTerraform(struct?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionOutputReference | AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooling_off_period: cdktf.numberToTerraform(struct!.coolingOffPeriod),
    exclude_bot_defense_activity: cdktf.booleanToTerraform(struct!.excludeBotDefenseActivity),
    exclude_failed_login_activity: cdktf.booleanToTerraform(struct!.excludeFailedLoginActivity),
    exclude_forbidden_activity: cdktf.booleanToTerraform(struct!.excludeForbiddenActivity),
    exclude_ip_reputation: cdktf.booleanToTerraform(struct!.excludeIpReputation),
    exclude_rate_limit: cdktf.booleanToTerraform(struct!.excludeRateLimit),
    exclude_waf_activity: cdktf.booleanToTerraform(struct!.excludeWafActivity),
    include_bot_defense_activity: cdktf.booleanToTerraform(struct!.includeBotDefenseActivity),
    include_ip_reputation: cdktf.booleanToTerraform(struct!.includeIpReputation),
    include_rate_limit: cdktf.booleanToTerraform(struct!.includeRateLimit),
    include_waf_activity: cdktf.booleanToTerraform(struct!.includeWafActivity),
    include_failed_login_activity: appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivityToTerraform(struct!.includeFailedLoginActivity),
    include_forbidden_activity: appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivityToTerraform(struct!.includeForbiddenActivity),
  }
}


export function appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionToHclTerraform(struct?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionOutputReference | AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooling_off_period: {
      value: cdktf.numberToHclTerraform(struct!.coolingOffPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclude_bot_defense_activity: {
      value: cdktf.booleanToHclTerraform(struct!.excludeBotDefenseActivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_failed_login_activity: {
      value: cdktf.booleanToHclTerraform(struct!.excludeFailedLoginActivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_forbidden_activity: {
      value: cdktf.booleanToHclTerraform(struct!.excludeForbiddenActivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_ip_reputation: {
      value: cdktf.booleanToHclTerraform(struct!.excludeIpReputation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_rate_limit: {
      value: cdktf.booleanToHclTerraform(struct!.excludeRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_waf_activity: {
      value: cdktf.booleanToHclTerraform(struct!.excludeWafActivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_bot_defense_activity: {
      value: cdktf.booleanToHclTerraform(struct!.includeBotDefenseActivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_ip_reputation: {
      value: cdktf.booleanToHclTerraform(struct!.includeIpReputation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_rate_limit: {
      value: cdktf.booleanToHclTerraform(struct!.includeRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_waf_activity: {
      value: cdktf.booleanToHclTerraform(struct!.includeWafActivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_failed_login_activity: {
      value: appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivityToHclTerraform(struct!.includeFailedLoginActivity),
      isBlock: true,
      type: "list",
      storageClassType: "AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivityList",
    },
    include_forbidden_activity: {
      value: appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivityToHclTerraform(struct!.includeForbiddenActivity),
      isBlock: true,
      type: "list",
      storageClassType: "AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolingOffPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolingOffPeriod = this._coolingOffPeriod;
    }
    if (this._excludeBotDefenseActivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBotDefenseActivity = this._excludeBotDefenseActivity;
    }
    if (this._excludeFailedLoginActivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFailedLoginActivity = this._excludeFailedLoginActivity;
    }
    if (this._excludeForbiddenActivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeForbiddenActivity = this._excludeForbiddenActivity;
    }
    if (this._excludeIpReputation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeIpReputation = this._excludeIpReputation;
    }
    if (this._excludeRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRateLimit = this._excludeRateLimit;
    }
    if (this._excludeWafActivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeWafActivity = this._excludeWafActivity;
    }
    if (this._includeBotDefenseActivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBotDefenseActivity = this._includeBotDefenseActivity;
    }
    if (this._includeIpReputation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIpReputation = this._includeIpReputation;
    }
    if (this._includeRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRateLimit = this._includeRateLimit;
    }
    if (this._includeWafActivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeWafActivity = this._includeWafActivity;
    }
    if (this._includeFailedLoginActivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFailedLoginActivity = this._includeFailedLoginActivity?.internalValue;
    }
    if (this._includeForbiddenActivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeForbiddenActivity = this._includeForbiddenActivity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coolingOffPeriod = undefined;
      this._excludeBotDefenseActivity = undefined;
      this._excludeFailedLoginActivity = undefined;
      this._excludeForbiddenActivity = undefined;
      this._excludeIpReputation = undefined;
      this._excludeRateLimit = undefined;
      this._excludeWafActivity = undefined;
      this._includeBotDefenseActivity = undefined;
      this._includeIpReputation = undefined;
      this._includeRateLimit = undefined;
      this._includeWafActivity = undefined;
      this._includeFailedLoginActivity.internalValue = undefined;
      this._includeForbiddenActivity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coolingOffPeriod = value.coolingOffPeriod;
      this._excludeBotDefenseActivity = value.excludeBotDefenseActivity;
      this._excludeFailedLoginActivity = value.excludeFailedLoginActivity;
      this._excludeForbiddenActivity = value.excludeForbiddenActivity;
      this._excludeIpReputation = value.excludeIpReputation;
      this._excludeRateLimit = value.excludeRateLimit;
      this._excludeWafActivity = value.excludeWafActivity;
      this._includeBotDefenseActivity = value.includeBotDefenseActivity;
      this._includeIpReputation = value.includeIpReputation;
      this._includeRateLimit = value.includeRateLimit;
      this._includeWafActivity = value.includeWafActivity;
      this._includeFailedLoginActivity.internalValue = value.includeFailedLoginActivity;
      this._includeForbiddenActivity.internalValue = value.includeForbiddenActivity;
    }
  }

  // cooling_off_period - computed: false, optional: true, required: false
  private _coolingOffPeriod?: number; 
  public get coolingOffPeriod() {
    return this.getNumberAttribute('cooling_off_period');
  }
  public set coolingOffPeriod(value: number) {
    this._coolingOffPeriod = value;
  }
  public resetCoolingOffPeriod() {
    this._coolingOffPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolingOffPeriodInput() {
    return this._coolingOffPeriod;
  }

  // exclude_bot_defense_activity - computed: false, optional: true, required: false
  private _excludeBotDefenseActivity?: boolean | cdktf.IResolvable; 
  public get excludeBotDefenseActivity() {
    return this.getBooleanAttribute('exclude_bot_defense_activity');
  }
  public set excludeBotDefenseActivity(value: boolean | cdktf.IResolvable) {
    this._excludeBotDefenseActivity = value;
  }
  public resetExcludeBotDefenseActivity() {
    this._excludeBotDefenseActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBotDefenseActivityInput() {
    return this._excludeBotDefenseActivity;
  }

  // exclude_failed_login_activity - computed: false, optional: true, required: false
  private _excludeFailedLoginActivity?: boolean | cdktf.IResolvable; 
  public get excludeFailedLoginActivity() {
    return this.getBooleanAttribute('exclude_failed_login_activity');
  }
  public set excludeFailedLoginActivity(value: boolean | cdktf.IResolvable) {
    this._excludeFailedLoginActivity = value;
  }
  public resetExcludeFailedLoginActivity() {
    this._excludeFailedLoginActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFailedLoginActivityInput() {
    return this._excludeFailedLoginActivity;
  }

  // exclude_forbidden_activity - computed: false, optional: true, required: false
  private _excludeForbiddenActivity?: boolean | cdktf.IResolvable; 
  public get excludeForbiddenActivity() {
    return this.getBooleanAttribute('exclude_forbidden_activity');
  }
  public set excludeForbiddenActivity(value: boolean | cdktf.IResolvable) {
    this._excludeForbiddenActivity = value;
  }
  public resetExcludeForbiddenActivity() {
    this._excludeForbiddenActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeForbiddenActivityInput() {
    return this._excludeForbiddenActivity;
  }

  // exclude_ip_reputation - computed: false, optional: true, required: false
  private _excludeIpReputation?: boolean | cdktf.IResolvable; 
  public get excludeIpReputation() {
    return this.getBooleanAttribute('exclude_ip_reputation');
  }
  public set excludeIpReputation(value: boolean | cdktf.IResolvable) {
    this._excludeIpReputation = value;
  }
  public resetExcludeIpReputation() {
    this._excludeIpReputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpReputationInput() {
    return this._excludeIpReputation;
  }

  // exclude_rate_limit - computed: false, optional: true, required: false
  private _excludeRateLimit?: boolean | cdktf.IResolvable; 
  public get excludeRateLimit() {
    return this.getBooleanAttribute('exclude_rate_limit');
  }
  public set excludeRateLimit(value: boolean | cdktf.IResolvable) {
    this._excludeRateLimit = value;
  }
  public resetExcludeRateLimit() {
    this._excludeRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRateLimitInput() {
    return this._excludeRateLimit;
  }

  // exclude_waf_activity - computed: false, optional: true, required: false
  private _excludeWafActivity?: boolean | cdktf.IResolvable; 
  public get excludeWafActivity() {
    return this.getBooleanAttribute('exclude_waf_activity');
  }
  public set excludeWafActivity(value: boolean | cdktf.IResolvable) {
    this._excludeWafActivity = value;
  }
  public resetExcludeWafActivity() {
    this._excludeWafActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeWafActivityInput() {
    return this._excludeWafActivity;
  }

  // include_bot_defense_activity - computed: false, optional: true, required: false
  private _includeBotDefenseActivity?: boolean | cdktf.IResolvable; 
  public get includeBotDefenseActivity() {
    return this.getBooleanAttribute('include_bot_defense_activity');
  }
  public set includeBotDefenseActivity(value: boolean | cdktf.IResolvable) {
    this._includeBotDefenseActivity = value;
  }
  public resetIncludeBotDefenseActivity() {
    this._includeBotDefenseActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBotDefenseActivityInput() {
    return this._includeBotDefenseActivity;
  }

  // include_ip_reputation - computed: false, optional: true, required: false
  private _includeIpReputation?: boolean | cdktf.IResolvable; 
  public get includeIpReputation() {
    return this.getBooleanAttribute('include_ip_reputation');
  }
  public set includeIpReputation(value: boolean | cdktf.IResolvable) {
    this._includeIpReputation = value;
  }
  public resetIncludeIpReputation() {
    this._includeIpReputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIpReputationInput() {
    return this._includeIpReputation;
  }

  // include_rate_limit - computed: false, optional: true, required: false
  private _includeRateLimit?: boolean | cdktf.IResolvable; 
  public get includeRateLimit() {
    return this.getBooleanAttribute('include_rate_limit');
  }
  public set includeRateLimit(value: boolean | cdktf.IResolvable) {
    this._includeRateLimit = value;
  }
  public resetIncludeRateLimit() {
    this._includeRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRateLimitInput() {
    return this._includeRateLimit;
  }

  // include_waf_activity - computed: false, optional: true, required: false
  private _includeWafActivity?: boolean | cdktf.IResolvable; 
  public get includeWafActivity() {
    return this.getBooleanAttribute('include_waf_activity');
  }
  public set includeWafActivity(value: boolean | cdktf.IResolvable) {
    this._includeWafActivity = value;
  }
  public resetIncludeWafActivity() {
    this._includeWafActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeWafActivityInput() {
    return this._includeWafActivity;
  }

  // include_failed_login_activity - computed: false, optional: true, required: false
  private _includeFailedLoginActivity = new AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivityOutputReference(this, "include_failed_login_activity");
  public get includeFailedLoginActivity() {
    return this._includeFailedLoginActivity;
  }
  public putIncludeFailedLoginActivity(value: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeFailedLoginActivity) {
    this._includeFailedLoginActivity.internalValue = value;
  }
  public resetIncludeFailedLoginActivity() {
    this._includeFailedLoginActivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFailedLoginActivityInput() {
    return this._includeFailedLoginActivity.internalValue;
  }

  // include_forbidden_activity - computed: false, optional: true, required: false
  private _includeForbiddenActivity = new AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivityOutputReference(this, "include_forbidden_activity");
  public get includeForbiddenActivity() {
    return this._includeForbiddenActivity;
  }
  public putIncludeForbiddenActivity(value: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionIncludeForbiddenActivity) {
    this._includeForbiddenActivity.internalValue = value;
  }
  public resetIncludeForbiddenActivity() {
    this._includeForbiddenActivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeForbiddenActivityInput() {
    return this._includeForbiddenActivity.internalValue;
  }
}
export interface AppSettingAppTypeSettingsUserBehaviorAnalysisSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#disable_detection AppSetting#disable_detection}
  */
  readonly disableDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#disable_learning AppSetting#disable_learning}
  */
  readonly disableLearning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#enable_learning AppSetting#enable_learning}
  */
  readonly enableLearning?: boolean | cdktf.IResolvable;
  /**
  * enable_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#enable_detection AppSetting#enable_detection}
  */
  readonly enableDetection?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetection;
}

export function appSettingAppTypeSettingsUserBehaviorAnalysisSettingToTerraform(struct?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingOutputReference | AppSettingAppTypeSettingsUserBehaviorAnalysisSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_detection: cdktf.booleanToTerraform(struct!.disableDetection),
    disable_learning: cdktf.booleanToTerraform(struct!.disableLearning),
    enable_learning: cdktf.booleanToTerraform(struct!.enableLearning),
    enable_detection: appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionToTerraform(struct!.enableDetection),
  }
}


export function appSettingAppTypeSettingsUserBehaviorAnalysisSettingToHclTerraform(struct?: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingOutputReference | AppSettingAppTypeSettingsUserBehaviorAnalysisSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_detection: {
      value: cdktf.booleanToHclTerraform(struct!.disableDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_learning: {
      value: cdktf.booleanToHclTerraform(struct!.disableLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_learning: {
      value: cdktf.booleanToHclTerraform(struct!.enableLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_detection: {
      value: appSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionToHclTerraform(struct!.enableDetection),
      isBlock: true,
      type: "list",
      storageClassType: "AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSettingAppTypeSettingsUserBehaviorAnalysisSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppSettingAppTypeSettingsUserBehaviorAnalysisSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDetection = this._disableDetection;
    }
    if (this._disableLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLearning = this._disableLearning;
    }
    if (this._enableLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLearning = this._enableLearning;
    }
    if (this._enableDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDetection = this._enableDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSettingAppTypeSettingsUserBehaviorAnalysisSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableDetection = undefined;
      this._disableLearning = undefined;
      this._enableLearning = undefined;
      this._enableDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableDetection = value.disableDetection;
      this._disableLearning = value.disableLearning;
      this._enableLearning = value.enableLearning;
      this._enableDetection.internalValue = value.enableDetection;
    }
  }

  // disable_detection - computed: false, optional: true, required: false
  private _disableDetection?: boolean | cdktf.IResolvable; 
  public get disableDetection() {
    return this.getBooleanAttribute('disable_detection');
  }
  public set disableDetection(value: boolean | cdktf.IResolvable) {
    this._disableDetection = value;
  }
  public resetDisableDetection() {
    this._disableDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDetectionInput() {
    return this._disableDetection;
  }

  // disable_learning - computed: false, optional: true, required: false
  private _disableLearning?: boolean | cdktf.IResolvable; 
  public get disableLearning() {
    return this.getBooleanAttribute('disable_learning');
  }
  public set disableLearning(value: boolean | cdktf.IResolvable) {
    this._disableLearning = value;
  }
  public resetDisableLearning() {
    this._disableLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLearningInput() {
    return this._disableLearning;
  }

  // enable_learning - computed: false, optional: true, required: false
  private _enableLearning?: boolean | cdktf.IResolvable; 
  public get enableLearning() {
    return this.getBooleanAttribute('enable_learning');
  }
  public set enableLearning(value: boolean | cdktf.IResolvable) {
    this._enableLearning = value;
  }
  public resetEnableLearning() {
    this._enableLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearningInput() {
    return this._enableLearning;
  }

  // enable_detection - computed: false, optional: true, required: false
  private _enableDetection = new AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetectionOutputReference(this, "enable_detection");
  public get enableDetection() {
    return this._enableDetection;
  }
  public putEnableDetection(value: AppSettingAppTypeSettingsUserBehaviorAnalysisSettingEnableDetection) {
    this._enableDetection.internalValue = value;
  }
  public resetEnableDetection() {
    this._enableDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetectionInput() {
    return this._enableDetection.internalValue;
  }
}
export interface AppSettingAppTypeSettings {
  /**
  * app_type_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#app_type_ref AppSetting#app_type_ref}
  */
  readonly appTypeRef: AppSettingAppTypeSettingsAppTypeRef[] | cdktf.IResolvable;
  /**
  * business_logic_markup_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#business_logic_markup_setting AppSetting#business_logic_markup_setting}
  */
  readonly businessLogicMarkupSetting?: AppSettingAppTypeSettingsBusinessLogicMarkupSetting;
  /**
  * timeseries_analyses_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#timeseries_analyses_setting AppSetting#timeseries_analyses_setting}
  */
  readonly timeseriesAnalysesSetting?: AppSettingAppTypeSettingsTimeseriesAnalysesSetting;
  /**
  * user_behavior_analysis_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#user_behavior_analysis_setting AppSetting#user_behavior_analysis_setting}
  */
  readonly userBehaviorAnalysisSetting?: AppSettingAppTypeSettingsUserBehaviorAnalysisSetting;
}

export function appSettingAppTypeSettingsToTerraform(struct?: AppSettingAppTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_type_ref: cdktf.listMapper(appSettingAppTypeSettingsAppTypeRefToTerraform, true)(struct!.appTypeRef),
    business_logic_markup_setting: appSettingAppTypeSettingsBusinessLogicMarkupSettingToTerraform(struct!.businessLogicMarkupSetting),
    timeseries_analyses_setting: appSettingAppTypeSettingsTimeseriesAnalysesSettingToTerraform(struct!.timeseriesAnalysesSetting),
    user_behavior_analysis_setting: appSettingAppTypeSettingsUserBehaviorAnalysisSettingToTerraform(struct!.userBehaviorAnalysisSetting),
  }
}


export function appSettingAppTypeSettingsToHclTerraform(struct?: AppSettingAppTypeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_type_ref: {
      value: cdktf.listMapperHcl(appSettingAppTypeSettingsAppTypeRefToHclTerraform, true)(struct!.appTypeRef),
      isBlock: true,
      type: "list",
      storageClassType: "AppSettingAppTypeSettingsAppTypeRefList",
    },
    business_logic_markup_setting: {
      value: appSettingAppTypeSettingsBusinessLogicMarkupSettingToHclTerraform(struct!.businessLogicMarkupSetting),
      isBlock: true,
      type: "list",
      storageClassType: "AppSettingAppTypeSettingsBusinessLogicMarkupSettingList",
    },
    timeseries_analyses_setting: {
      value: appSettingAppTypeSettingsTimeseriesAnalysesSettingToHclTerraform(struct!.timeseriesAnalysesSetting),
      isBlock: true,
      type: "list",
      storageClassType: "AppSettingAppTypeSettingsTimeseriesAnalysesSettingList",
    },
    user_behavior_analysis_setting: {
      value: appSettingAppTypeSettingsUserBehaviorAnalysisSettingToHclTerraform(struct!.userBehaviorAnalysisSetting),
      isBlock: true,
      type: "list",
      storageClassType: "AppSettingAppTypeSettingsUserBehaviorAnalysisSettingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppSettingAppTypeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppSettingAppTypeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appTypeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appTypeRef = this._appTypeRef?.internalValue;
    }
    if (this._businessLogicMarkupSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessLogicMarkupSetting = this._businessLogicMarkupSetting?.internalValue;
    }
    if (this._timeseriesAnalysesSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesAnalysesSetting = this._timeseriesAnalysesSetting?.internalValue;
    }
    if (this._userBehaviorAnalysisSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBehaviorAnalysisSetting = this._userBehaviorAnalysisSetting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppSettingAppTypeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appTypeRef.internalValue = undefined;
      this._businessLogicMarkupSetting.internalValue = undefined;
      this._timeseriesAnalysesSetting.internalValue = undefined;
      this._userBehaviorAnalysisSetting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appTypeRef.internalValue = value.appTypeRef;
      this._businessLogicMarkupSetting.internalValue = value.businessLogicMarkupSetting;
      this._timeseriesAnalysesSetting.internalValue = value.timeseriesAnalysesSetting;
      this._userBehaviorAnalysisSetting.internalValue = value.userBehaviorAnalysisSetting;
    }
  }

  // app_type_ref - computed: false, optional: false, required: true
  private _appTypeRef = new AppSettingAppTypeSettingsAppTypeRefList(this, "app_type_ref", false);
  public get appTypeRef() {
    return this._appTypeRef;
  }
  public putAppTypeRef(value: AppSettingAppTypeSettingsAppTypeRef[] | cdktf.IResolvable) {
    this._appTypeRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeRefInput() {
    return this._appTypeRef.internalValue;
  }

  // business_logic_markup_setting - computed: false, optional: true, required: false
  private _businessLogicMarkupSetting = new AppSettingAppTypeSettingsBusinessLogicMarkupSettingOutputReference(this, "business_logic_markup_setting");
  public get businessLogicMarkupSetting() {
    return this._businessLogicMarkupSetting;
  }
  public putBusinessLogicMarkupSetting(value: AppSettingAppTypeSettingsBusinessLogicMarkupSetting) {
    this._businessLogicMarkupSetting.internalValue = value;
  }
  public resetBusinessLogicMarkupSetting() {
    this._businessLogicMarkupSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessLogicMarkupSettingInput() {
    return this._businessLogicMarkupSetting.internalValue;
  }

  // timeseries_analyses_setting - computed: false, optional: true, required: false
  private _timeseriesAnalysesSetting = new AppSettingAppTypeSettingsTimeseriesAnalysesSettingOutputReference(this, "timeseries_analyses_setting");
  public get timeseriesAnalysesSetting() {
    return this._timeseriesAnalysesSetting;
  }
  public putTimeseriesAnalysesSetting(value: AppSettingAppTypeSettingsTimeseriesAnalysesSetting) {
    this._timeseriesAnalysesSetting.internalValue = value;
  }
  public resetTimeseriesAnalysesSetting() {
    this._timeseriesAnalysesSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesAnalysesSettingInput() {
    return this._timeseriesAnalysesSetting.internalValue;
  }

  // user_behavior_analysis_setting - computed: false, optional: true, required: false
  private _userBehaviorAnalysisSetting = new AppSettingAppTypeSettingsUserBehaviorAnalysisSettingOutputReference(this, "user_behavior_analysis_setting");
  public get userBehaviorAnalysisSetting() {
    return this._userBehaviorAnalysisSetting;
  }
  public putUserBehaviorAnalysisSetting(value: AppSettingAppTypeSettingsUserBehaviorAnalysisSetting) {
    this._userBehaviorAnalysisSetting.internalValue = value;
  }
  public resetUserBehaviorAnalysisSetting() {
    this._userBehaviorAnalysisSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBehaviorAnalysisSettingInput() {
    return this._userBehaviorAnalysisSetting.internalValue;
  }
}

export class AppSettingAppTypeSettingsList extends cdktf.ComplexList {
  public internalValue? : AppSettingAppTypeSettings[] | cdktf.IResolvable

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
  public get(index: number): AppSettingAppTypeSettingsOutputReference {
    return new AppSettingAppTypeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting volterra_app_setting}
*/
export class AppSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_app_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppSetting to import
  * @param importFromId The id of the existing AppSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_app_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/app_setting volterra_app_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppSettingConfig
  */
  public constructor(scope: Construct, id: string, config: AppSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_app_setting',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._appTypeSettings.internalValue = config.appTypeSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // app_type_settings - computed: false, optional: false, required: true
  private _appTypeSettings = new AppSettingAppTypeSettingsList(this, "app_type_settings", false);
  public get appTypeSettings() {
    return this._appTypeSettings;
  }
  public putAppTypeSettings(value: AppSettingAppTypeSettings[] | cdktf.IResolvable) {
    this._appTypeSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeSettingsInput() {
    return this._appTypeSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      app_type_settings: cdktf.listMapper(appSettingAppTypeSettingsToTerraform, true)(this._appTypeSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      app_type_settings: {
        value: cdktf.listMapperHcl(appSettingAppTypeSettingsToHclTerraform, true)(this._appTypeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppSettingAppTypeSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
