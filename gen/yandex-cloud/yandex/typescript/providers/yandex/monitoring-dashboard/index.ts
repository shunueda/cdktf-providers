// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#description MonitoringDashboard#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#folder_id MonitoringDashboard#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#id MonitoringDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#labels MonitoringDashboard#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#name MonitoringDashboard#name}
  */
  readonly name: string;
  /**
  * Dashboard title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#title MonitoringDashboard#title}
  */
  readonly title?: string;
  /**
  * parametrization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#parametrization MonitoringDashboard#parametrization}
  */
  readonly parametrization?: MonitoringDashboardParametrization[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#timeouts MonitoringDashboard#timeouts}
  */
  readonly timeouts?: MonitoringDashboardTimeouts;
  /**
  * widgets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#widgets MonitoringDashboard#widgets}
  */
  readonly widgets?: MonitoringDashboardWidgets[] | cdktf.IResolvable;
}
export interface MonitoringDashboardParametrizationParametersCustom {
  /**
  * Default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#default_values MonitoringDashboard#default_values}
  */
  readonly defaultValues?: string[];
  /**
  * Specifies the multiselectable values of parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#multiselectable MonitoringDashboard#multiselectable}
  */
  readonly multiselectable?: boolean | cdktf.IResolvable;
  /**
  * Parameter values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#values MonitoringDashboard#values}
  */
  readonly values?: string[];
}

export function monitoringDashboardParametrizationParametersCustomToTerraform(struct?: MonitoringDashboardParametrizationParametersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultValues),
    multiselectable: cdktf.booleanToTerraform(struct!.multiselectable),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function monitoringDashboardParametrizationParametersCustomToHclTerraform(struct?: MonitoringDashboardParametrizationParametersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multiselectable: {
      value: cdktf.booleanToHclTerraform(struct!.multiselectable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardParametrizationParametersCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardParametrizationParametersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues;
    }
    if (this._multiselectable !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiselectable = this._multiselectable;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardParametrizationParametersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValues = undefined;
      this._multiselectable = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValues = value.defaultValues;
      this._multiselectable = value.multiselectable;
      this._values = value.values;
    }
  }

  // default_values - computed: false, optional: true, required: false
  private _defaultValues?: string[]; 
  public get defaultValues() {
    return this.getListAttribute('default_values');
  }
  public set defaultValues(value: string[]) {
    this._defaultValues = value;
  }
  public resetDefaultValues() {
    this._defaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
  }

  // multiselectable - computed: false, optional: true, required: false
  private _multiselectable?: boolean | cdktf.IResolvable; 
  public get multiselectable() {
    return this.getBooleanAttribute('multiselectable');
  }
  public set multiselectable(value: boolean | cdktf.IResolvable) {
    this._multiselectable = value;
  }
  public resetMultiselectable() {
    this._multiselectable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiselectableInput() {
    return this._multiselectable;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class MonitoringDashboardParametrizationParametersCustomList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardParametrizationParametersCustom[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardParametrizationParametersCustomOutputReference {
    return new MonitoringDashboardParametrizationParametersCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardParametrizationParametersLabelValues {
  /**
  * Default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#default_values MonitoringDashboard#default_values}
  */
  readonly defaultValues?: string[];
  /**
  * Folder ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#folder_id MonitoringDashboard#folder_id}
  */
  readonly folderId?: string;
  /**
  * Label key to list label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#label_key MonitoringDashboard#label_key}
  */
  readonly labelKey: string;
  /**
  * Specifies the multiselectable values of parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#multiselectable MonitoringDashboard#multiselectable}
  */
  readonly multiselectable?: boolean | cdktf.IResolvable;
  /**
  * Selectors to select metric label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#selectors MonitoringDashboard#selectors}
  */
  readonly selectors?: string;
}

export function monitoringDashboardParametrizationParametersLabelValuesToTerraform(struct?: MonitoringDashboardParametrizationParametersLabelValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultValues),
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    label_key: cdktf.stringToTerraform(struct!.labelKey),
    multiselectable: cdktf.booleanToTerraform(struct!.multiselectable),
    selectors: cdktf.stringToTerraform(struct!.selectors),
  }
}


export function monitoringDashboardParametrizationParametersLabelValuesToHclTerraform(struct?: MonitoringDashboardParametrizationParametersLabelValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_key: {
      value: cdktf.stringToHclTerraform(struct!.labelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiselectable: {
      value: cdktf.booleanToHclTerraform(struct!.multiselectable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selectors: {
      value: cdktf.stringToHclTerraform(struct!.selectors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardParametrizationParametersLabelValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardParametrizationParametersLabelValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues;
    }
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._labelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelKey = this._labelKey;
    }
    if (this._multiselectable !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiselectable = this._multiselectable;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardParametrizationParametersLabelValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValues = undefined;
      this._folderId = undefined;
      this._labelKey = undefined;
      this._multiselectable = undefined;
      this._selectors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValues = value.defaultValues;
      this._folderId = value.folderId;
      this._labelKey = value.labelKey;
      this._multiselectable = value.multiselectable;
      this._selectors = value.selectors;
    }
  }

  // default_values - computed: false, optional: true, required: false
  private _defaultValues?: string[]; 
  public get defaultValues() {
    return this.getListAttribute('default_values');
  }
  public set defaultValues(value: string[]) {
    this._defaultValues = value;
  }
  public resetDefaultValues() {
    this._defaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // label_key - computed: false, optional: false, required: true
  private _labelKey?: string; 
  public get labelKey() {
    return this.getStringAttribute('label_key');
  }
  public set labelKey(value: string) {
    this._labelKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelKeyInput() {
    return this._labelKey;
  }

  // multiselectable - computed: false, optional: true, required: false
  private _multiselectable?: boolean | cdktf.IResolvable; 
  public get multiselectable() {
    return this.getBooleanAttribute('multiselectable');
  }
  public set multiselectable(value: boolean | cdktf.IResolvable) {
    this._multiselectable = value;
  }
  public resetMultiselectable() {
    this._multiselectable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiselectableInput() {
    return this._multiselectable;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string; 
  public get selectors() {
    return this.getStringAttribute('selectors');
  }
  public set selectors(value: string) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
  }
}

export class MonitoringDashboardParametrizationParametersLabelValuesList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardParametrizationParametersLabelValues[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardParametrizationParametersLabelValuesOutputReference {
    return new MonitoringDashboardParametrizationParametersLabelValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardParametrizationParametersText {
  /**
  * Default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#default_value MonitoringDashboard#default_value}
  */
  readonly defaultValue?: string;
}

export function monitoringDashboardParametrizationParametersTextToTerraform(struct?: MonitoringDashboardParametrizationParametersText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
  }
}


export function monitoringDashboardParametrizationParametersTextToHclTerraform(struct?: MonitoringDashboardParametrizationParametersText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardParametrizationParametersTextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardParametrizationParametersText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardParametrizationParametersText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }
}

export class MonitoringDashboardParametrizationParametersTextList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardParametrizationParametersText[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardParametrizationParametersTextOutputReference {
    return new MonitoringDashboardParametrizationParametersTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardParametrizationParameters {
  /**
  * Parameter description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#description MonitoringDashboard#description}
  */
  readonly description?: string;
  /**
  * UI-visibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#hidden MonitoringDashboard#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Parameter identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#id MonitoringDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * UI-visible title of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#title MonitoringDashboard#title}
  */
  readonly title?: string;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#custom MonitoringDashboard#custom}
  */
  readonly custom?: MonitoringDashboardParametrizationParametersCustom[] | cdktf.IResolvable;
  /**
  * label_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#label_values MonitoringDashboard#label_values}
  */
  readonly labelValues?: MonitoringDashboardParametrizationParametersLabelValues[] | cdktf.IResolvable;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#text MonitoringDashboard#text}
  */
  readonly text?: MonitoringDashboardParametrizationParametersText[] | cdktf.IResolvable;
}

export function monitoringDashboardParametrizationParametersToTerraform(struct?: MonitoringDashboardParametrizationParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    id: cdktf.stringToTerraform(struct!.id),
    title: cdktf.stringToTerraform(struct!.title),
    custom: cdktf.listMapper(monitoringDashboardParametrizationParametersCustomToTerraform, true)(struct!.custom),
    label_values: cdktf.listMapper(monitoringDashboardParametrizationParametersLabelValuesToTerraform, true)(struct!.labelValues),
    text: cdktf.listMapper(monitoringDashboardParametrizationParametersTextToTerraform, true)(struct!.text),
  }
}


export function monitoringDashboardParametrizationParametersToHclTerraform(struct?: MonitoringDashboardParametrizationParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom: {
      value: cdktf.listMapperHcl(monitoringDashboardParametrizationParametersCustomToHclTerraform, true)(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardParametrizationParametersCustomList",
    },
    label_values: {
      value: cdktf.listMapperHcl(monitoringDashboardParametrizationParametersLabelValuesToHclTerraform, true)(struct!.labelValues),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardParametrizationParametersLabelValuesList",
    },
    text: {
      value: cdktf.listMapperHcl(monitoringDashboardParametrizationParametersTextToHclTerraform, true)(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardParametrizationParametersTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardParametrizationParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardParametrizationParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._labelValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelValues = this._labelValues?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardParametrizationParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._hidden = undefined;
      this._id = undefined;
      this._title = undefined;
      this._custom.internalValue = undefined;
      this._labelValues.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._hidden = value.hidden;
      this._id = value.id;
      this._title = value.title;
      this._custom.internalValue = value.custom;
      this._labelValues.internalValue = value.labelValues;
      this._text.internalValue = value.text;
    }
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

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new MonitoringDashboardParametrizationParametersCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: MonitoringDashboardParametrizationParametersCustom[] | cdktf.IResolvable) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // label_values - computed: false, optional: true, required: false
  private _labelValues = new MonitoringDashboardParametrizationParametersLabelValuesList(this, "label_values", false);
  public get labelValues() {
    return this._labelValues;
  }
  public putLabelValues(value: MonitoringDashboardParametrizationParametersLabelValues[] | cdktf.IResolvable) {
    this._labelValues.internalValue = value;
  }
  public resetLabelValues() {
    this._labelValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelValuesInput() {
    return this._labelValues.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new MonitoringDashboardParametrizationParametersTextList(this, "text", false);
  public get text() {
    return this._text;
  }
  public putText(value: MonitoringDashboardParametrizationParametersText[] | cdktf.IResolvable) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class MonitoringDashboardParametrizationParametersList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardParametrizationParameters[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardParametrizationParametersOutputReference {
    return new MonitoringDashboardParametrizationParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardParametrization {
  /**
  * Dashboard predefined parameters selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#selectors MonitoringDashboard#selectors}
  */
  readonly selectors?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#parameters MonitoringDashboard#parameters}
  */
  readonly parameters?: MonitoringDashboardParametrizationParameters[] | cdktf.IResolvable;
}

export function monitoringDashboardParametrizationToTerraform(struct?: MonitoringDashboardParametrization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selectors: cdktf.stringToTerraform(struct!.selectors),
    parameters: cdktf.listMapper(monitoringDashboardParametrizationParametersToTerraform, true)(struct!.parameters),
  }
}


export function monitoringDashboardParametrizationToHclTerraform(struct?: MonitoringDashboardParametrization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selectors: {
      value: cdktf.stringToHclTerraform(struct!.selectors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(monitoringDashboardParametrizationParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardParametrizationParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardParametrizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardParametrization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardParametrization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectors = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectors = value.selectors;
      this._parameters.internalValue = value.parameters;
    }
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string; 
  public get selectors() {
    return this.getStringAttribute('selectors');
  }
  public set selectors(value: string) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new MonitoringDashboardParametrizationParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: MonitoringDashboardParametrizationParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class MonitoringDashboardParametrizationList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardParametrization[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardParametrizationOutputReference {
    return new MonitoringDashboardParametrizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#create MonitoringDashboard#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#delete MonitoringDashboard#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#read MonitoringDashboard#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#update MonitoringDashboard#update}
  */
  readonly update?: string;
}

export function monitoringDashboardTimeoutsToTerraform(struct?: MonitoringDashboardTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function monitoringDashboardTimeoutsToHclTerraform(struct?: MonitoringDashboardTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class MonitoringDashboardTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitoringDashboardTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface MonitoringDashboardWidgetsChartNameHidingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#names MonitoringDashboard#names}
  */
  readonly names?: string[];
  /**
  * True if we want to show concrete series names only, false if we want to hide concrete series names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#positive MonitoringDashboard#positive}
  */
  readonly positive?: boolean | cdktf.IResolvable;
}

export function monitoringDashboardWidgetsChartNameHidingSettingsToTerraform(struct?: MonitoringDashboardWidgetsChartNameHidingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    positive: cdktf.booleanToTerraform(struct!.positive),
  }
}


export function monitoringDashboardWidgetsChartNameHidingSettingsToHclTerraform(struct?: MonitoringDashboardWidgetsChartNameHidingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    positive: {
      value: cdktf.booleanToHclTerraform(struct!.positive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartNameHidingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartNameHidingSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._positive !== undefined) {
      hasAnyValues = true;
      internalValueResult.positive = this._positive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartNameHidingSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._positive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._positive = value.positive;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // positive - computed: false, optional: true, required: false
  private _positive?: boolean | cdktf.IResolvable; 
  public get positive() {
    return this.getBooleanAttribute('positive');
  }
  public set positive(value: boolean | cdktf.IResolvable) {
    this._positive = value;
  }
  public resetPositive() {
    this._positive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positiveInput() {
    return this._positive;
  }
}

export class MonitoringDashboardWidgetsChartNameHidingSettingsList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartNameHidingSettings[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartNameHidingSettingsOutputReference {
    return new MonitoringDashboardWidgetsChartNameHidingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartQueriesDownsampling {
  /**
  * Disable downsampling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#disabled MonitoringDashboard#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Parameters for filling gaps in data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#gap_filling MonitoringDashboard#gap_filling}
  */
  readonly gapFilling?: string;
  /**
  * Function that is used for downsampling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#grid_aggregation MonitoringDashboard#grid_aggregation}
  */
  readonly gridAggregation?: string;
  /**
  * Time interval (grid) for downsampling in milliseconds. Points in the specified range are aggregated into one time point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#grid_interval MonitoringDashboard#grid_interval}
  */
  readonly gridInterval?: number;
  /**
  * Maximum number of points to be returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#max_points MonitoringDashboard#max_points}
  */
  readonly maxPoints?: number;
}

export function monitoringDashboardWidgetsChartQueriesDownsamplingToTerraform(struct?: MonitoringDashboardWidgetsChartQueriesDownsampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    gap_filling: cdktf.stringToTerraform(struct!.gapFilling),
    grid_aggregation: cdktf.stringToTerraform(struct!.gridAggregation),
    grid_interval: cdktf.numberToTerraform(struct!.gridInterval),
    max_points: cdktf.numberToTerraform(struct!.maxPoints),
  }
}


export function monitoringDashboardWidgetsChartQueriesDownsamplingToHclTerraform(struct?: MonitoringDashboardWidgetsChartQueriesDownsampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gap_filling: {
      value: cdktf.stringToHclTerraform(struct!.gapFilling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grid_aggregation: {
      value: cdktf.stringToHclTerraform(struct!.gridAggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grid_interval: {
      value: cdktf.numberToHclTerraform(struct!.gridInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_points: {
      value: cdktf.numberToHclTerraform(struct!.maxPoints),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartQueriesDownsamplingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartQueriesDownsampling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._gapFilling !== undefined) {
      hasAnyValues = true;
      internalValueResult.gapFilling = this._gapFilling;
    }
    if (this._gridAggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridAggregation = this._gridAggregation;
    }
    if (this._gridInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridInterval = this._gridInterval;
    }
    if (this._maxPoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPoints = this._maxPoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartQueriesDownsampling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._gapFilling = undefined;
      this._gridAggregation = undefined;
      this._gridInterval = undefined;
      this._maxPoints = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._gapFilling = value.gapFilling;
      this._gridAggregation = value.gridAggregation;
      this._gridInterval = value.gridInterval;
      this._maxPoints = value.maxPoints;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // gap_filling - computed: false, optional: true, required: false
  private _gapFilling?: string; 
  public get gapFilling() {
    return this.getStringAttribute('gap_filling');
  }
  public set gapFilling(value: string) {
    this._gapFilling = value;
  }
  public resetGapFilling() {
    this._gapFilling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gapFillingInput() {
    return this._gapFilling;
  }

  // grid_aggregation - computed: false, optional: true, required: false
  private _gridAggregation?: string; 
  public get gridAggregation() {
    return this.getStringAttribute('grid_aggregation');
  }
  public set gridAggregation(value: string) {
    this._gridAggregation = value;
  }
  public resetGridAggregation() {
    this._gridAggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridAggregationInput() {
    return this._gridAggregation;
  }

  // grid_interval - computed: false, optional: true, required: false
  private _gridInterval?: number; 
  public get gridInterval() {
    return this.getNumberAttribute('grid_interval');
  }
  public set gridInterval(value: number) {
    this._gridInterval = value;
  }
  public resetGridInterval() {
    this._gridInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridIntervalInput() {
    return this._gridInterval;
  }

  // max_points - computed: false, optional: true, required: false
  private _maxPoints?: number; 
  public get maxPoints() {
    return this.getNumberAttribute('max_points');
  }
  public set maxPoints(value: number) {
    this._maxPoints = value;
  }
  public resetMaxPoints() {
    this._maxPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPointsInput() {
    return this._maxPoints;
  }
}

export class MonitoringDashboardWidgetsChartQueriesDownsamplingList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartQueriesDownsampling[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartQueriesDownsamplingOutputReference {
    return new MonitoringDashboardWidgetsChartQueriesDownsamplingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartQueriesTarget {
  /**
  * Checks that target is visible or invisible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#hidden MonitoringDashboard#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Required. Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#query MonitoringDashboard#query}
  */
  readonly query?: string;
  /**
  * Text mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#text_mode MonitoringDashboard#text_mode}
  */
  readonly textMode?: boolean | cdktf.IResolvable;
}

export function monitoringDashboardWidgetsChartQueriesTargetToTerraform(struct?: MonitoringDashboardWidgetsChartQueriesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    query: cdktf.stringToTerraform(struct!.query),
    text_mode: cdktf.booleanToTerraform(struct!.textMode),
  }
}


export function monitoringDashboardWidgetsChartQueriesTargetToHclTerraform(struct?: MonitoringDashboardWidgetsChartQueriesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_mode: {
      value: cdktf.booleanToHclTerraform(struct!.textMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartQueriesTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartQueriesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._textMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.textMode = this._textMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartQueriesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hidden = undefined;
      this._query = undefined;
      this._textMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hidden = value.hidden;
      this._query = value.query;
      this._textMode = value.textMode;
    }
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // text_mode - computed: false, optional: true, required: false
  private _textMode?: boolean | cdktf.IResolvable; 
  public get textMode() {
    return this.getBooleanAttribute('text_mode');
  }
  public set textMode(value: boolean | cdktf.IResolvable) {
    this._textMode = value;
  }
  public resetTextMode() {
    this._textMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textModeInput() {
    return this._textMode;
  }
}

export class MonitoringDashboardWidgetsChartQueriesTargetList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartQueriesTarget[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartQueriesTargetOutputReference {
    return new MonitoringDashboardWidgetsChartQueriesTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartQueries {
  /**
  * downsampling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#downsampling MonitoringDashboard#downsampling}
  */
  readonly downsampling?: MonitoringDashboardWidgetsChartQueriesDownsampling[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#target MonitoringDashboard#target}
  */
  readonly target?: MonitoringDashboardWidgetsChartQueriesTarget[] | cdktf.IResolvable;
}

export function monitoringDashboardWidgetsChartQueriesToTerraform(struct?: MonitoringDashboardWidgetsChartQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    downsampling: cdktf.listMapper(monitoringDashboardWidgetsChartQueriesDownsamplingToTerraform, true)(struct!.downsampling),
    target: cdktf.listMapper(monitoringDashboardWidgetsChartQueriesTargetToTerraform, true)(struct!.target),
  }
}


export function monitoringDashboardWidgetsChartQueriesToHclTerraform(struct?: MonitoringDashboardWidgetsChartQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    downsampling: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartQueriesDownsamplingToHclTerraform, true)(struct!.downsampling),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartQueriesDownsamplingList",
    },
    target: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartQueriesTargetToHclTerraform, true)(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartQueriesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downsampling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downsampling = this._downsampling?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downsampling.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downsampling.internalValue = value.downsampling;
      this._target.internalValue = value.target;
    }
  }

  // downsampling - computed: false, optional: true, required: false
  private _downsampling = new MonitoringDashboardWidgetsChartQueriesDownsamplingList(this, "downsampling", false);
  public get downsampling() {
    return this._downsampling;
  }
  public putDownsampling(value: MonitoringDashboardWidgetsChartQueriesDownsampling[] | cdktf.IResolvable) {
    this._downsampling.internalValue = value;
  }
  public resetDownsampling() {
    this._downsampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downsamplingInput() {
    return this._downsampling.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new MonitoringDashboardWidgetsChartQueriesTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: MonitoringDashboardWidgetsChartQueriesTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class MonitoringDashboardWidgetsChartQueriesList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartQueries[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartQueriesOutputReference {
    return new MonitoringDashboardWidgetsChartQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartSeriesOverridesSettings {
  /**
  * Series color or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#color MonitoringDashboard#color}
  */
  readonly color?: string;
  /**
  * Stack grow down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#grow_down MonitoringDashboard#grow_down}
  */
  readonly growDown?: boolean | cdktf.IResolvable;
  /**
  * Series name or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#name MonitoringDashboard#name}
  */
  readonly name?: string;
  /**
  * Stack name or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#stack_name MonitoringDashboard#stack_name}
  */
  readonly stackName?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#type MonitoringDashboard#type}
  */
  readonly type?: string;
  /**
  * Yaxis position
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#yaxis_position MonitoringDashboard#yaxis_position}
  */
  readonly yaxisPosition?: string;
}

export function monitoringDashboardWidgetsChartSeriesOverridesSettingsToTerraform(struct?: MonitoringDashboardWidgetsChartSeriesOverridesSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    grow_down: cdktf.booleanToTerraform(struct!.growDown),
    name: cdktf.stringToTerraform(struct!.name),
    stack_name: cdktf.stringToTerraform(struct!.stackName),
    type: cdktf.stringToTerraform(struct!.type),
    yaxis_position: cdktf.stringToTerraform(struct!.yaxisPosition),
  }
}


export function monitoringDashboardWidgetsChartSeriesOverridesSettingsToHclTerraform(struct?: MonitoringDashboardWidgetsChartSeriesOverridesSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grow_down: {
      value: cdktf.booleanToHclTerraform(struct!.growDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_name: {
      value: cdktf.stringToHclTerraform(struct!.stackName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yaxis_position: {
      value: cdktf.stringToHclTerraform(struct!.yaxisPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartSeriesOverridesSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartSeriesOverridesSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._growDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.growDown = this._growDown;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stackName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackName = this._stackName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._yaxisPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaxisPosition = this._yaxisPosition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartSeriesOverridesSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._growDown = undefined;
      this._name = undefined;
      this._stackName = undefined;
      this._type = undefined;
      this._yaxisPosition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._growDown = value.growDown;
      this._name = value.name;
      this._stackName = value.stackName;
      this._type = value.type;
      this._yaxisPosition = value.yaxisPosition;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // grow_down - computed: false, optional: true, required: false
  private _growDown?: boolean | cdktf.IResolvable; 
  public get growDown() {
    return this.getBooleanAttribute('grow_down');
  }
  public set growDown(value: boolean | cdktf.IResolvable) {
    this._growDown = value;
  }
  public resetGrowDown() {
    this._growDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growDownInput() {
    return this._growDown;
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

  // stack_name - computed: false, optional: true, required: false
  private _stackName?: string; 
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }
  public set stackName(value: string) {
    this._stackName = value;
  }
  public resetStackName() {
    this._stackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNameInput() {
    return this._stackName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // yaxis_position - computed: true, optional: true, required: false
  private _yaxisPosition?: string; 
  public get yaxisPosition() {
    return this.getStringAttribute('yaxis_position');
  }
  public set yaxisPosition(value: string) {
    this._yaxisPosition = value;
  }
  public resetYaxisPosition() {
    this._yaxisPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yaxisPositionInput() {
    return this._yaxisPosition;
  }
}

export class MonitoringDashboardWidgetsChartSeriesOverridesSettingsList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartSeriesOverridesSettings[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartSeriesOverridesSettingsOutputReference {
    return new MonitoringDashboardWidgetsChartSeriesOverridesSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartSeriesOverrides {
  /**
  * Series name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#name MonitoringDashboard#name}
  */
  readonly name?: string;
  /**
  * Target index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#target_index MonitoringDashboard#target_index}
  */
  readonly targetIndex?: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#settings MonitoringDashboard#settings}
  */
  readonly settings?: MonitoringDashboardWidgetsChartSeriesOverridesSettings[] | cdktf.IResolvable;
}

export function monitoringDashboardWidgetsChartSeriesOverridesToTerraform(struct?: MonitoringDashboardWidgetsChartSeriesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target_index: cdktf.stringToTerraform(struct!.targetIndex),
    settings: cdktf.listMapper(monitoringDashboardWidgetsChartSeriesOverridesSettingsToTerraform, true)(struct!.settings),
  }
}


export function monitoringDashboardWidgetsChartSeriesOverridesToHclTerraform(struct?: MonitoringDashboardWidgetsChartSeriesOverrides | cdktf.IResolvable): any {
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
    target_index: {
      value: cdktf.stringToHclTerraform(struct!.targetIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartSeriesOverridesSettingsToHclTerraform, true)(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartSeriesOverridesSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartSeriesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIndex = this._targetIndex;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartSeriesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._targetIndex = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._targetIndex = value.targetIndex;
      this._settings.internalValue = value.settings;
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

  // target_index - computed: false, optional: true, required: false
  private _targetIndex?: string; 
  public get targetIndex() {
    return this.getStringAttribute('target_index');
  }
  public set targetIndex(value: string) {
    this._targetIndex = value;
  }
  public resetTargetIndex() {
    this._targetIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIndexInput() {
    return this._targetIndex;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new MonitoringDashboardWidgetsChartSeriesOverridesSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: MonitoringDashboardWidgetsChartSeriesOverridesSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class MonitoringDashboardWidgetsChartSeriesOverridesList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartSeriesOverrides[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartSeriesOverridesOutputReference {
    return new MonitoringDashboardWidgetsChartSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic {
}

export function monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticToTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticToHclTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticOutputReference {
    return new MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient {
  /**
  * Gradient green value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#green_value MonitoringDashboard#green_value}
  */
  readonly greenValue?: string;
  /**
  * Gradient red value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#red_value MonitoringDashboard#red_value}
  */
  readonly redValue?: string;
  /**
  * Gradient violet_value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#violet_value MonitoringDashboard#violet_value}
  */
  readonly violetValue?: string;
  /**
  * Gradient yellow value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#yellow_value MonitoringDashboard#yellow_value}
  */
  readonly yellowValue?: string;
}

export function monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientToTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    green_value: cdktf.stringToTerraform(struct!.greenValue),
    red_value: cdktf.stringToTerraform(struct!.redValue),
    violet_value: cdktf.stringToTerraform(struct!.violetValue),
    yellow_value: cdktf.stringToTerraform(struct!.yellowValue),
  }
}


export function monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientToHclTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    green_value: {
      value: cdktf.stringToHclTerraform(struct!.greenValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    red_value: {
      value: cdktf.stringToHclTerraform(struct!.redValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    violet_value: {
      value: cdktf.stringToHclTerraform(struct!.violetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yellow_value: {
      value: cdktf.stringToHclTerraform(struct!.yellowValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greenValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greenValue = this._greenValue;
    }
    if (this._redValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redValue = this._redValue;
    }
    if (this._violetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.violetValue = this._violetValue;
    }
    if (this._yellowValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yellowValue = this._yellowValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._greenValue = undefined;
      this._redValue = undefined;
      this._violetValue = undefined;
      this._yellowValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._greenValue = value.greenValue;
      this._redValue = value.redValue;
      this._violetValue = value.violetValue;
      this._yellowValue = value.yellowValue;
    }
  }

  // green_value - computed: false, optional: true, required: false
  private _greenValue?: string; 
  public get greenValue() {
    return this.getStringAttribute('green_value');
  }
  public set greenValue(value: string) {
    this._greenValue = value;
  }
  public resetGreenValue() {
    this._greenValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenValueInput() {
    return this._greenValue;
  }

  // red_value - computed: false, optional: true, required: false
  private _redValue?: string; 
  public get redValue() {
    return this.getStringAttribute('red_value');
  }
  public set redValue(value: string) {
    this._redValue = value;
  }
  public resetRedValue() {
    this._redValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redValueInput() {
    return this._redValue;
  }

  // violet_value - computed: false, optional: true, required: false
  private _violetValue?: string; 
  public get violetValue() {
    return this.getStringAttribute('violet_value');
  }
  public set violetValue(value: string) {
    this._violetValue = value;
  }
  public resetVioletValue() {
    this._violetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violetValueInput() {
    return this._violetValue;
  }

  // yellow_value - computed: false, optional: true, required: false
  private _yellowValue?: string; 
  public get yellowValue() {
    return this.getStringAttribute('yellow_value');
  }
  public set yellowValue(value: string) {
    this._yellowValue = value;
  }
  public resetYellowValue() {
    this._yellowValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yellowValueInput() {
    return this._yellowValue;
  }
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientOutputReference {
    return new MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard {
}

export function monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardToTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardToHclTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardOutputReference {
    return new MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings {
  /**
  * automatic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#automatic MonitoringDashboard#automatic}
  */
  readonly automatic?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic[] | cdktf.IResolvable;
  /**
  * gradient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#gradient MonitoringDashboard#gradient}
  */
  readonly gradient?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient[] | cdktf.IResolvable;
  /**
  * standard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#standard MonitoringDashboard#standard}
  */
  readonly standard?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard[] | cdktf.IResolvable;
}

export function monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsToTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic: cdktf.listMapper(monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticToTerraform, true)(struct!.automatic),
    gradient: cdktf.listMapper(monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientToTerraform, true)(struct!.gradient),
    standard: cdktf.listMapper(monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardToTerraform, true)(struct!.standard),
  }
}


export function monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsToHclTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticToHclTerraform, true)(struct!.automatic),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticList",
    },
    gradient: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientToHclTerraform, true)(struct!.gradient),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientList",
    },
    standard: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardToHclTerraform, true)(struct!.standard),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic?.internalValue;
    }
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automatic.internalValue = undefined;
      this._gradient.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automatic.internalValue = value.automatic;
      this._gradient.internalValue = value.gradient;
      this._standard.internalValue = value.standard;
    }
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic = new MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticList(this, "automatic", false);
  public get automatic() {
    return this._automatic;
  }
  public putAutomatic(value: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic[] | cdktf.IResolvable) {
    this._automatic.internalValue = value;
  }
  public resetAutomatic() {
    this._automatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic.internalValue;
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientList(this, "gradient", false);
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient[] | cdktf.IResolvable) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }

  // standard - computed: false, optional: true, required: false
  private _standard = new MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardList(this, "standard", false);
  public get standard() {
    return this._standard;
  }
  public putStandard(value: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard[] | cdktf.IResolvable) {
    this._standard.internalValue = value;
  }
  public resetStandard() {
    this._standard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard.internalValue;
  }
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsOutputReference {
    return new MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings {
  /**
  * Heatmap green value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#green_value MonitoringDashboard#green_value}
  */
  readonly greenValue?: string;
  /**
  * Heatmap red value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#red_value MonitoringDashboard#red_value}
  */
  readonly redValue?: string;
  /**
  * Heatmap violet_value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#violet_value MonitoringDashboard#violet_value}
  */
  readonly violetValue?: string;
  /**
  * Heatmap yellow value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#yellow_value MonitoringDashboard#yellow_value}
  */
  readonly yellowValue?: string;
}

export function monitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsToTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    green_value: cdktf.stringToTerraform(struct!.greenValue),
    red_value: cdktf.stringToTerraform(struct!.redValue),
    violet_value: cdktf.stringToTerraform(struct!.violetValue),
    yellow_value: cdktf.stringToTerraform(struct!.yellowValue),
  }
}


export function monitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsToHclTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    green_value: {
      value: cdktf.stringToHclTerraform(struct!.greenValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    red_value: {
      value: cdktf.stringToHclTerraform(struct!.redValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    violet_value: {
      value: cdktf.stringToHclTerraform(struct!.violetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yellow_value: {
      value: cdktf.stringToHclTerraform(struct!.yellowValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greenValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greenValue = this._greenValue;
    }
    if (this._redValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redValue = this._redValue;
    }
    if (this._violetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.violetValue = this._violetValue;
    }
    if (this._yellowValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yellowValue = this._yellowValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._greenValue = undefined;
      this._redValue = undefined;
      this._violetValue = undefined;
      this._yellowValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._greenValue = value.greenValue;
      this._redValue = value.redValue;
      this._violetValue = value.violetValue;
      this._yellowValue = value.yellowValue;
    }
  }

  // green_value - computed: false, optional: true, required: false
  private _greenValue?: string; 
  public get greenValue() {
    return this.getStringAttribute('green_value');
  }
  public set greenValue(value: string) {
    this._greenValue = value;
  }
  public resetGreenValue() {
    this._greenValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenValueInput() {
    return this._greenValue;
  }

  // red_value - computed: false, optional: true, required: false
  private _redValue?: string; 
  public get redValue() {
    return this.getStringAttribute('red_value');
  }
  public set redValue(value: string) {
    this._redValue = value;
  }
  public resetRedValue() {
    this._redValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redValueInput() {
    return this._redValue;
  }

  // violet_value - computed: false, optional: true, required: false
  private _violetValue?: string; 
  public get violetValue() {
    return this.getStringAttribute('violet_value');
  }
  public set violetValue(value: string) {
    this._violetValue = value;
  }
  public resetVioletValue() {
    this._violetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violetValueInput() {
    return this._violetValue;
  }

  // yellow_value - computed: false, optional: true, required: false
  private _yellowValue?: string; 
  public get yellowValue() {
    return this.getStringAttribute('yellow_value');
  }
  public set yellowValue(value: string) {
    this._yellowValue = value;
  }
  public resetYellowValue() {
    this._yellowValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yellowValueInput() {
    return this._yellowValue;
  }
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsOutputReference {
    return new MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft {
  /**
  * Max value in extended number format or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#max MonitoringDashboard#max}
  */
  readonly max?: string;
  /**
  * Min value in extended number format or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#min MonitoringDashboard#min}
  */
  readonly min?: string;
  /**
  * Tick value precision (null as default, 0-7 in other cases)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#precision MonitoringDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Title or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#title MonitoringDashboard#title}
  */
  readonly title?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#type MonitoringDashboard#type}
  */
  readonly type?: string;
  /**
  * Unit format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#unit_format MonitoringDashboard#unit_format}
  */
  readonly unitFormat?: string;
}

export function monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftToTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    precision: cdktf.numberToTerraform(struct!.precision),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unit_format: cdktf.stringToTerraform(struct!.unitFormat),
  }
}


export function monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftToHclTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktf.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_format: {
      value: cdktf.stringToHclTerraform(struct!.unitFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unitFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitFormat = this._unitFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
      this._precision = undefined;
      this._title = undefined;
      this._type = undefined;
      this._unitFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
      this._precision = value.precision;
      this._title = value.title;
      this._type = value.type;
      this._unitFormat = value.unitFormat;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit_format - computed: true, optional: true, required: false
  private _unitFormat?: string; 
  public get unitFormat() {
    return this.getStringAttribute('unit_format');
  }
  public set unitFormat(value: string) {
    this._unitFormat = value;
  }
  public resetUnitFormat() {
    this._unitFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitFormatInput() {
    return this._unitFormat;
  }
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftOutputReference {
    return new MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight {
  /**
  * Max value in extended number format or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#max MonitoringDashboard#max}
  */
  readonly max?: string;
  /**
  * Min value in extended number format or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#min MonitoringDashboard#min}
  */
  readonly min?: string;
  /**
  * Tick value precision (null as default, 0-7 in other cases)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#precision MonitoringDashboard#precision}
  */
  readonly precision?: number;
  /**
  * Title or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#title MonitoringDashboard#title}
  */
  readonly title?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#type MonitoringDashboard#type}
  */
  readonly type?: string;
  /**
  * Unit format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#unit_format MonitoringDashboard#unit_format}
  */
  readonly unitFormat?: string;
}

export function monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightToTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    precision: cdktf.numberToTerraform(struct!.precision),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unit_format: cdktf.stringToTerraform(struct!.unitFormat),
  }
}


export function monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightToHclTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precision: {
      value: cdktf.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_format: {
      value: cdktf.stringToHclTerraform(struct!.unitFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unitFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitFormat = this._unitFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
      this._precision = undefined;
      this._title = undefined;
      this._type = undefined;
      this._unitFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
      this._precision = value.precision;
      this._title = value.title;
      this._type = value.type;
      this._unitFormat = value.unitFormat;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit_format - computed: false, optional: true, required: false
  private _unitFormat?: string; 
  public get unitFormat() {
    return this.getStringAttribute('unit_format');
  }
  public set unitFormat(value: string) {
    this._unitFormat = value;
  }
  public resetUnitFormat() {
    this._unitFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitFormatInput() {
    return this._unitFormat;
  }
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightOutputReference {
    return new MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings {
  /**
  * left block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#left MonitoringDashboard#left}
  */
  readonly left?: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft[] | cdktf.IResolvable;
  /**
  * right block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#right MonitoringDashboard#right}
  */
  readonly right?: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight[] | cdktf.IResolvable;
}

export function monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsToTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    left: cdktf.listMapper(monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftToTerraform, true)(struct!.left),
    right: cdktf.listMapper(monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightToTerraform, true)(struct!.right),
  }
}


export function monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsToHclTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    left: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftToHclTerraform, true)(struct!.left),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftList",
    },
    right: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightToHclTerraform, true)(struct!.right),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._left?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left?.internalValue;
    }
    if (this._right?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._left.internalValue = undefined;
      this._right.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._left.internalValue = value.left;
      this._right.internalValue = value.right;
    }
  }

  // left - computed: false, optional: true, required: false
  private _left = new MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftList(this, "left", false);
  public get left() {
    return this._left;
  }
  public putLeft(value: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft[] | cdktf.IResolvable) {
    this._left.internalValue = value;
  }
  public resetLeft() {
    this._left.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: true, required: false
  private _right = new MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightList(this, "right", false);
  public get right() {
    return this._right;
  }
  public putRight(value: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight[] | cdktf.IResolvable) {
    this._right.internalValue = value;
  }
  public resetRight() {
    this._right.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsOutputReference {
    return new MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChartVisualizationSettings {
  /**
  * Aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#aggregation MonitoringDashboard#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Interpolate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#interpolate MonitoringDashboard#interpolate}
  */
  readonly interpolate?: string;
  /**
  * Normalize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#normalize MonitoringDashboard#normalize}
  */
  readonly normalize?: boolean | cdktf.IResolvable;
  /**
  * Show chart labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#show_labels MonitoringDashboard#show_labels}
  */
  readonly showLabels?: boolean | cdktf.IResolvable;
  /**
  * Inside chart title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#title MonitoringDashboard#title}
  */
  readonly title?: string;
  /**
  * Visualization type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#type MonitoringDashboard#type}
  */
  readonly type?: string;
  /**
  * color_scheme_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#color_scheme_settings MonitoringDashboard#color_scheme_settings}
  */
  readonly colorSchemeSettings?: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings[] | cdktf.IResolvable;
  /**
  * heatmap_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#heatmap_settings MonitoringDashboard#heatmap_settings}
  */
  readonly heatmapSettings?: MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings[] | cdktf.IResolvable;
  /**
  * yaxis_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#yaxis_settings MonitoringDashboard#yaxis_settings}
  */
  readonly yaxisSettings?: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings[] | cdktf.IResolvable;
}

export function monitoringDashboardWidgetsChartVisualizationSettingsToTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    interpolate: cdktf.stringToTerraform(struct!.interpolate),
    normalize: cdktf.booleanToTerraform(struct!.normalize),
    show_labels: cdktf.booleanToTerraform(struct!.showLabels),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    color_scheme_settings: cdktf.listMapper(monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsToTerraform, true)(struct!.colorSchemeSettings),
    heatmap_settings: cdktf.listMapper(monitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsToTerraform, true)(struct!.heatmapSettings),
    yaxis_settings: cdktf.listMapper(monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsToTerraform, true)(struct!.yaxisSettings),
  }
}


export function monitoringDashboardWidgetsChartVisualizationSettingsToHclTerraform(struct?: MonitoringDashboardWidgetsChartVisualizationSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interpolate: {
      value: cdktf.stringToHclTerraform(struct!.interpolate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    normalize: {
      value: cdktf.booleanToHclTerraform(struct!.normalize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_labels: {
      value: cdktf.booleanToHclTerraform(struct!.showLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color_scheme_settings: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsToHclTerraform, true)(struct!.colorSchemeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsList",
    },
    heatmap_settings: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsToHclTerraform, true)(struct!.heatmapSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsList",
    },
    yaxis_settings: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsToHclTerraform, true)(struct!.yaxisSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChartVisualizationSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._interpolate !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpolate = this._interpolate;
    }
    if (this._normalize !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalize = this._normalize;
    }
    if (this._showLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLabels = this._showLabels;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._colorSchemeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorSchemeSettings = this._colorSchemeSettings?.internalValue;
    }
    if (this._heatmapSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.heatmapSettings = this._heatmapSettings?.internalValue;
    }
    if (this._yaxisSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaxisSettings = this._yaxisSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChartVisualizationSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interpolate = undefined;
      this._normalize = undefined;
      this._showLabels = undefined;
      this._title = undefined;
      this._type = undefined;
      this._colorSchemeSettings.internalValue = undefined;
      this._heatmapSettings.internalValue = undefined;
      this._yaxisSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._interpolate = value.interpolate;
      this._normalize = value.normalize;
      this._showLabels = value.showLabels;
      this._title = value.title;
      this._type = value.type;
      this._colorSchemeSettings.internalValue = value.colorSchemeSettings;
      this._heatmapSettings.internalValue = value.heatmapSettings;
      this._yaxisSettings.internalValue = value.yaxisSettings;
    }
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // interpolate - computed: true, optional: true, required: false
  private _interpolate?: string; 
  public get interpolate() {
    return this.getStringAttribute('interpolate');
  }
  public set interpolate(value: string) {
    this._interpolate = value;
  }
  public resetInterpolate() {
    this._interpolate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpolateInput() {
    return this._interpolate;
  }

  // normalize - computed: false, optional: true, required: false
  private _normalize?: boolean | cdktf.IResolvable; 
  public get normalize() {
    return this.getBooleanAttribute('normalize');
  }
  public set normalize(value: boolean | cdktf.IResolvable) {
    this._normalize = value;
  }
  public resetNormalize() {
    this._normalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizeInput() {
    return this._normalize;
  }

  // show_labels - computed: false, optional: true, required: false
  private _showLabels?: boolean | cdktf.IResolvable; 
  public get showLabels() {
    return this.getBooleanAttribute('show_labels');
  }
  public set showLabels(value: boolean | cdktf.IResolvable) {
    this._showLabels = value;
  }
  public resetShowLabels() {
    this._showLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLabelsInput() {
    return this._showLabels;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // color_scheme_settings - computed: false, optional: true, required: false
  private _colorSchemeSettings = new MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsList(this, "color_scheme_settings", false);
  public get colorSchemeSettings() {
    return this._colorSchemeSettings;
  }
  public putColorSchemeSettings(value: MonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings[] | cdktf.IResolvable) {
    this._colorSchemeSettings.internalValue = value;
  }
  public resetColorSchemeSettings() {
    this._colorSchemeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorSchemeSettingsInput() {
    return this._colorSchemeSettings.internalValue;
  }

  // heatmap_settings - computed: false, optional: true, required: false
  private _heatmapSettings = new MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsList(this, "heatmap_settings", false);
  public get heatmapSettings() {
    return this._heatmapSettings;
  }
  public putHeatmapSettings(value: MonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings[] | cdktf.IResolvable) {
    this._heatmapSettings.internalValue = value;
  }
  public resetHeatmapSettings() {
    this._heatmapSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heatmapSettingsInput() {
    return this._heatmapSettings.internalValue;
  }

  // yaxis_settings - computed: false, optional: true, required: false
  private _yaxisSettings = new MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsList(this, "yaxis_settings", false);
  public get yaxisSettings() {
    return this._yaxisSettings;
  }
  public putYaxisSettings(value: MonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings[] | cdktf.IResolvable) {
    this._yaxisSettings.internalValue = value;
  }
  public resetYaxisSettings() {
    this._yaxisSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yaxisSettingsInput() {
    return this._yaxisSettings.internalValue;
  }
}

export class MonitoringDashboardWidgetsChartVisualizationSettingsList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChartVisualizationSettings[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartVisualizationSettingsOutputReference {
    return new MonitoringDashboardWidgetsChartVisualizationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsChart {
  /**
  * Chart ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#chart_id MonitoringDashboard#chart_id}
  */
  readonly chartId?: string;
  /**
  * Chart description in dashboard (not enabled in UI).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#description MonitoringDashboard#description}
  */
  readonly description?: string;
  /**
  * Enable legend under chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#display_legend MonitoringDashboard#display_legend}
  */
  readonly displayLegend?: boolean | cdktf.IResolvable;
  /**
  * Fixed time interval for chart. Values:
  * - FREEZE_DURATION_HOUR: Last hour.
  * - FREEZE_DURATION_DAY: Last day = last 24 hours.
  * - FREEZE_DURATION_WEEK: Last 7 days.
  * - FREEZE_DURATION_MONTH: Last 31 days.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#freeze MonitoringDashboard#freeze}
  */
  readonly freeze?: string;
  /**
  * Chart widget title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#title MonitoringDashboard#title}
  */
  readonly title?: string;
  /**
  * name_hiding_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#name_hiding_settings MonitoringDashboard#name_hiding_settings}
  */
  readonly nameHidingSettings?: MonitoringDashboardWidgetsChartNameHidingSettings[] | cdktf.IResolvable;
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#queries MonitoringDashboard#queries}
  */
  readonly queries?: MonitoringDashboardWidgetsChartQueries[] | cdktf.IResolvable;
  /**
  * series_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#series_overrides MonitoringDashboard#series_overrides}
  */
  readonly seriesOverrides?: MonitoringDashboardWidgetsChartSeriesOverrides[] | cdktf.IResolvable;
  /**
  * visualization_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#visualization_settings MonitoringDashboard#visualization_settings}
  */
  readonly visualizationSettings?: MonitoringDashboardWidgetsChartVisualizationSettings[] | cdktf.IResolvable;
}

export function monitoringDashboardWidgetsChartToTerraform(struct?: MonitoringDashboardWidgetsChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_id: cdktf.stringToTerraform(struct!.chartId),
    description: cdktf.stringToTerraform(struct!.description),
    display_legend: cdktf.booleanToTerraform(struct!.displayLegend),
    freeze: cdktf.stringToTerraform(struct!.freeze),
    title: cdktf.stringToTerraform(struct!.title),
    name_hiding_settings: cdktf.listMapper(monitoringDashboardWidgetsChartNameHidingSettingsToTerraform, true)(struct!.nameHidingSettings),
    queries: cdktf.listMapper(monitoringDashboardWidgetsChartQueriesToTerraform, true)(struct!.queries),
    series_overrides: cdktf.listMapper(monitoringDashboardWidgetsChartSeriesOverridesToTerraform, true)(struct!.seriesOverrides),
    visualization_settings: cdktf.listMapper(monitoringDashboardWidgetsChartVisualizationSettingsToTerraform, true)(struct!.visualizationSettings),
  }
}


export function monitoringDashboardWidgetsChartToHclTerraform(struct?: MonitoringDashboardWidgetsChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_id: {
      value: cdktf.stringToHclTerraform(struct!.chartId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_legend: {
      value: cdktf.booleanToHclTerraform(struct!.displayLegend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    freeze: {
      value: cdktf.stringToHclTerraform(struct!.freeze),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_hiding_settings: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartNameHidingSettingsToHclTerraform, true)(struct!.nameHidingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartNameHidingSettingsList",
    },
    queries: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartQueriesToHclTerraform, true)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartQueriesList",
    },
    series_overrides: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartSeriesOverridesToHclTerraform, true)(struct!.seriesOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartSeriesOverridesList",
    },
    visualization_settings: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartVisualizationSettingsToHclTerraform, true)(struct!.visualizationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartVisualizationSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsChart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartId !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartId = this._chartId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayLegend !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLegend = this._displayLegend;
    }
    if (this._freeze !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeze = this._freeze;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._nameHidingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameHidingSettings = this._nameHidingSettings?.internalValue;
    }
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    if (this._seriesOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesOverrides = this._seriesOverrides?.internalValue;
    }
    if (this._visualizationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationSettings = this._visualizationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsChart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartId = undefined;
      this._description = undefined;
      this._displayLegend = undefined;
      this._freeze = undefined;
      this._title = undefined;
      this._nameHidingSettings.internalValue = undefined;
      this._queries.internalValue = undefined;
      this._seriesOverrides.internalValue = undefined;
      this._visualizationSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartId = value.chartId;
      this._description = value.description;
      this._displayLegend = value.displayLegend;
      this._freeze = value.freeze;
      this._title = value.title;
      this._nameHidingSettings.internalValue = value.nameHidingSettings;
      this._queries.internalValue = value.queries;
      this._seriesOverrides.internalValue = value.seriesOverrides;
      this._visualizationSettings.internalValue = value.visualizationSettings;
    }
  }

  // chart_id - computed: false, optional: true, required: false
  private _chartId?: string; 
  public get chartId() {
    return this.getStringAttribute('chart_id');
  }
  public set chartId(value: string) {
    this._chartId = value;
  }
  public resetChartId() {
    this._chartId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartIdInput() {
    return this._chartId;
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

  // display_legend - computed: false, optional: true, required: false
  private _displayLegend?: boolean | cdktf.IResolvable; 
  public get displayLegend() {
    return this.getBooleanAttribute('display_legend');
  }
  public set displayLegend(value: boolean | cdktf.IResolvable) {
    this._displayLegend = value;
  }
  public resetDisplayLegend() {
    this._displayLegend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLegendInput() {
    return this._displayLegend;
  }

  // freeze - computed: true, optional: true, required: false
  private _freeze?: string; 
  public get freeze() {
    return this.getStringAttribute('freeze');
  }
  public set freeze(value: string) {
    this._freeze = value;
  }
  public resetFreeze() {
    this._freeze = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freezeInput() {
    return this._freeze;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // name_hiding_settings - computed: false, optional: true, required: false
  private _nameHidingSettings = new MonitoringDashboardWidgetsChartNameHidingSettingsList(this, "name_hiding_settings", false);
  public get nameHidingSettings() {
    return this._nameHidingSettings;
  }
  public putNameHidingSettings(value: MonitoringDashboardWidgetsChartNameHidingSettings[] | cdktf.IResolvable) {
    this._nameHidingSettings.internalValue = value;
  }
  public resetNameHidingSettings() {
    this._nameHidingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameHidingSettingsInput() {
    return this._nameHidingSettings.internalValue;
  }

  // queries - computed: false, optional: true, required: false
  private _queries = new MonitoringDashboardWidgetsChartQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: MonitoringDashboardWidgetsChartQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  public resetQueries() {
    this._queries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }

  // series_overrides - computed: false, optional: true, required: false
  private _seriesOverrides = new MonitoringDashboardWidgetsChartSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }
  public putSeriesOverrides(value: MonitoringDashboardWidgetsChartSeriesOverrides[] | cdktf.IResolvable) {
    this._seriesOverrides.internalValue = value;
  }
  public resetSeriesOverrides() {
    this._seriesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesOverridesInput() {
    return this._seriesOverrides.internalValue;
  }

  // visualization_settings - computed: false, optional: true, required: false
  private _visualizationSettings = new MonitoringDashboardWidgetsChartVisualizationSettingsList(this, "visualization_settings", false);
  public get visualizationSettings() {
    return this._visualizationSettings;
  }
  public putVisualizationSettings(value: MonitoringDashboardWidgetsChartVisualizationSettings[] | cdktf.IResolvable) {
    this._visualizationSettings.internalValue = value;
  }
  public resetVisualizationSettings() {
    this._visualizationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationSettingsInput() {
    return this._visualizationSettings.internalValue;
  }
}

export class MonitoringDashboardWidgetsChartList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsChart[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsChartOutputReference {
    return new MonitoringDashboardWidgetsChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsPosition {
  /**
  * Height.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#h MonitoringDashboard#h}
  */
  readonly h?: number;
  /**
  * Weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#w MonitoringDashboard#w}
  */
  readonly w?: number;
  /**
  * X-axis top-left corner coordinate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#x MonitoringDashboard#x}
  */
  readonly x?: number;
  /**
  * Y-axis top-left corner coordinate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#y MonitoringDashboard#y}
  */
  readonly y?: number;
}

export function monitoringDashboardWidgetsPositionToTerraform(struct?: MonitoringDashboardWidgetsPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h: cdktf.numberToTerraform(struct!.h),
    w: cdktf.numberToTerraform(struct!.w),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function monitoringDashboardWidgetsPositionToHclTerraform(struct?: MonitoringDashboardWidgetsPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h: {
      value: cdktf.numberToHclTerraform(struct!.h),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    w: {
      value: cdktf.numberToHclTerraform(struct!.w),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x: {
      value: cdktf.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktf.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsPositionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsPosition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h !== undefined) {
      hasAnyValues = true;
      internalValueResult.h = this._h;
    }
    if (this._w !== undefined) {
      hasAnyValues = true;
      internalValueResult.w = this._w;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsPosition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h = undefined;
      this._w = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h = value.h;
      this._w = value.w;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // h - computed: false, optional: true, required: false
  private _h?: number; 
  public get h() {
    return this.getNumberAttribute('h');
  }
  public set h(value: number) {
    this._h = value;
  }
  public resetH() {
    this._h = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hInput() {
    return this._h;
  }

  // w - computed: false, optional: true, required: false
  private _w?: number; 
  public get w() {
    return this.getNumberAttribute('w');
  }
  public set w(value: number) {
    this._w = value;
  }
  public resetW() {
    this._w = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wInput() {
    return this._w;
  }

  // x - computed: false, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}

export class MonitoringDashboardWidgetsPositionList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsPosition[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsPositionOutputReference {
    return new MonitoringDashboardWidgetsPositionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsText {
  /**
  * Widget text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#text MonitoringDashboard#text}
  */
  readonly text?: string;
}

export function monitoringDashboardWidgetsTextToTerraform(struct?: MonitoringDashboardWidgetsText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function monitoringDashboardWidgetsTextToHclTerraform(struct?: MonitoringDashboardWidgetsText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsTextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class MonitoringDashboardWidgetsTextList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsText[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsTextOutputReference {
    return new MonitoringDashboardWidgetsTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgetsTitle {
  /**
  * Title size.
  * Title size. Values:
  * - TITLE_SIZE_XS: Extra small size.
  * - TITLE_SIZE_S: Small size.
  * - TITLE_SIZE_M: Middle size.
  * - TITLE_SIZE_L: Large size.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#size MonitoringDashboard#size}
  */
  readonly size?: string;
  /**
  * Title text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#text MonitoringDashboard#text}
  */
  readonly text: string;
}

export function monitoringDashboardWidgetsTitleToTerraform(struct?: MonitoringDashboardWidgetsTitle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.stringToTerraform(struct!.size),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function monitoringDashboardWidgetsTitleToHclTerraform(struct?: MonitoringDashboardWidgetsTitle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsTitleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgetsTitle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgetsTitle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._text = value.text;
    }
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class MonitoringDashboardWidgetsTitleList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgetsTitle[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsTitleOutputReference {
    return new MonitoringDashboardWidgetsTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitoringDashboardWidgets {
  /**
  * chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#chart MonitoringDashboard#chart}
  */
  readonly chart?: MonitoringDashboardWidgetsChart[] | cdktf.IResolvable;
  /**
  * position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#position MonitoringDashboard#position}
  */
  readonly position?: MonitoringDashboardWidgetsPosition[] | cdktf.IResolvable;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#text MonitoringDashboard#text}
  */
  readonly text?: MonitoringDashboardWidgetsText[] | cdktf.IResolvable;
  /**
  * title block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#title MonitoringDashboard#title}
  */
  readonly title?: MonitoringDashboardWidgetsTitle[] | cdktf.IResolvable;
}

export function monitoringDashboardWidgetsToTerraform(struct?: MonitoringDashboardWidgets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.listMapper(monitoringDashboardWidgetsChartToTerraform, true)(struct!.chart),
    position: cdktf.listMapper(monitoringDashboardWidgetsPositionToTerraform, true)(struct!.position),
    text: cdktf.listMapper(monitoringDashboardWidgetsTextToTerraform, true)(struct!.text),
    title: cdktf.listMapper(monitoringDashboardWidgetsTitleToTerraform, true)(struct!.title),
  }
}


export function monitoringDashboardWidgetsToHclTerraform(struct?: MonitoringDashboardWidgets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsChartToHclTerraform, true)(struct!.chart),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsChartList",
    },
    position: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsPositionToHclTerraform, true)(struct!.position),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsPositionList",
    },
    text: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsTextToHclTerraform, true)(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsTextList",
    },
    title: {
      value: cdktf.listMapperHcl(monitoringDashboardWidgetsTitleToHclTerraform, true)(struct!.title),
      isBlock: true,
      type: "list",
      storageClassType: "MonitoringDashboardWidgetsTitleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringDashboardWidgetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringDashboardWidgets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart?.internalValue;
    }
    if (this._position?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringDashboardWidgets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart.internalValue = undefined;
      this._position.internalValue = undefined;
      this._text.internalValue = undefined;
      this._title.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart.internalValue = value.chart;
      this._position.internalValue = value.position;
      this._text.internalValue = value.text;
      this._title.internalValue = value.title;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart = new MonitoringDashboardWidgetsChartList(this, "chart", false);
  public get chart() {
    return this._chart;
  }
  public putChart(value: MonitoringDashboardWidgetsChart[] | cdktf.IResolvable) {
    this._chart.internalValue = value;
  }
  public resetChart() {
    this._chart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart.internalValue;
  }

  // position - computed: false, optional: true, required: false
  private _position = new MonitoringDashboardWidgetsPositionList(this, "position", false);
  public get position() {
    return this._position;
  }
  public putPosition(value: MonitoringDashboardWidgetsPosition[] | cdktf.IResolvable) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new MonitoringDashboardWidgetsTextList(this, "text", false);
  public get text() {
    return this._text;
  }
  public putText(value: MonitoringDashboardWidgetsText[] | cdktf.IResolvable) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title = new MonitoringDashboardWidgetsTitleList(this, "title", false);
  public get title() {
    return this._title;
  }
  public putTitle(value: MonitoringDashboardWidgetsTitle[] | cdktf.IResolvable) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }
}

export class MonitoringDashboardWidgetsList extends cdktf.ComplexList {
  public internalValue? : MonitoringDashboardWidgets[] | cdktf.IResolvable

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
  public get(index: number): MonitoringDashboardWidgetsOutputReference {
    return new MonitoringDashboardWidgetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard yandex_monitoring_dashboard}
*/
export class MonitoringDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_monitoring_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitoringDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitoringDashboard to import
  * @param importFromId The id of the existing MonitoringDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitoringDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_monitoring_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/monitoring_dashboard yandex_monitoring_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_monitoring_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
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
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._title = config.title;
    this._parametrization.internalValue = config.parametrization;
    this._timeouts.internalValue = config.timeouts;
    this._widgets.internalValue = config.widgets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: true, optional: true, required: false
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // parametrization - computed: false, optional: true, required: false
  private _parametrization = new MonitoringDashboardParametrizationList(this, "parametrization", false);
  public get parametrization() {
    return this._parametrization;
  }
  public putParametrization(value: MonitoringDashboardParametrization[] | cdktf.IResolvable) {
    this._parametrization.internalValue = value;
  }
  public resetParametrization() {
    this._parametrization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametrizationInput() {
    return this._parametrization.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitoringDashboardTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitoringDashboardTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // widgets - computed: false, optional: true, required: false
  private _widgets = new MonitoringDashboardWidgetsList(this, "widgets", false);
  public get widgets() {
    return this._widgets;
  }
  public putWidgets(value: MonitoringDashboardWidgets[] | cdktf.IResolvable) {
    this._widgets.internalValue = value;
  }
  public resetWidgets() {
    this._widgets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetsInput() {
    return this._widgets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      title: cdktf.stringToTerraform(this._title),
      parametrization: cdktf.listMapper(monitoringDashboardParametrizationToTerraform, true)(this._parametrization.internalValue),
      timeouts: monitoringDashboardTimeoutsToTerraform(this._timeouts.internalValue),
      widgets: cdktf.listMapper(monitoringDashboardWidgetsToTerraform, true)(this._widgets.internalValue),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parametrization: {
        value: cdktf.listMapperHcl(monitoringDashboardParametrizationToHclTerraform, true)(this._parametrization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitoringDashboardParametrizationList",
      },
      timeouts: {
        value: monitoringDashboardTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitoringDashboardTimeouts",
      },
      widgets: {
        value: cdktf.listMapperHcl(monitoringDashboardWidgetsToHclTerraform, true)(this._widgets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitoringDashboardWidgetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
