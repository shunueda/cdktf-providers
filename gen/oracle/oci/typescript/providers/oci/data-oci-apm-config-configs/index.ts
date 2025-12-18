// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmConfigConfigsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#apm_domain_id DataOciApmConfigConfigs#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#config_type DataOciApmConfigConfigs#config_type}
  */
  readonly configType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#defined_tag_equals DataOciApmConfigConfigs#defined_tag_equals}
  */
  readonly definedTagEquals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#defined_tag_exists DataOciApmConfigConfigs#defined_tag_exists}
  */
  readonly definedTagExists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#display_name DataOciApmConfigConfigs#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#freeform_tag_equals DataOciApmConfigConfigs#freeform_tag_equals}
  */
  readonly freeformTagEquals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#freeform_tag_exists DataOciApmConfigConfigs#freeform_tag_exists}
  */
  readonly freeformTagExists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#id DataOciApmConfigConfigs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#options_group DataOciApmConfigConfigs#options_group}
  */
  readonly optionsGroup?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#filter DataOciApmConfigConfigs#filter}
  */
  readonly filter?: DataOciApmConfigConfigsFilter[] | cdktf.IResolvable;
}
export interface DataOciApmConfigConfigsConfigCollectionItemsConfigConfigMap {
}

export function dataOciApmConfigConfigsConfigCollectionItemsConfigConfigMapToTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsConfigConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmConfigConfigsConfigCollectionItemsConfigConfigMapToHclTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsConfigConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmConfigConfigsConfigCollectionItemsConfigConfigMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsConfigCollectionItemsConfigConfigMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsConfigCollectionItemsConfigConfigMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
}

export class DataOciApmConfigConfigsConfigCollectionItemsConfigConfigMapList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsConfigConfigMapOutputReference {
    return new DataOciApmConfigConfigsConfigCollectionItemsConfigConfigMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmConfigConfigsConfigCollectionItemsConfig {
}

export function dataOciApmConfigConfigsConfigCollectionItemsConfigToTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmConfigConfigsConfigCollectionItemsConfigToHclTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmConfigConfigsConfigCollectionItemsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsConfigCollectionItemsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsConfigCollectionItemsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_map - computed: true, optional: false, required: false
  private _configMap = new DataOciApmConfigConfigsConfigCollectionItemsConfigConfigMapList(this, "config_map", false);
  public get configMap() {
    return this._configMap;
  }
}

export class DataOciApmConfigConfigsConfigCollectionItemsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsConfigOutputReference {
    return new DataOciApmConfigConfigsConfigCollectionItemsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmConfigConfigsConfigCollectionItemsDimensions {
}

export function dataOciApmConfigConfigsConfigCollectionItemsDimensionsToTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmConfigConfigsConfigCollectionItemsDimensionsToHclTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsConfigCollectionItemsDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsConfigCollectionItemsDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value_source - computed: true, optional: false, required: false
  public get valueSource() {
    return this.getStringAttribute('value_source');
  }
}

export class DataOciApmConfigConfigsConfigCollectionItemsDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference {
    return new DataOciApmConfigConfigsConfigCollectionItemsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmConfigConfigsConfigCollectionItemsInUseBy {
}

export function dataOciApmConfigConfigsConfigCollectionItemsInUseByToTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsInUseBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmConfigConfigsConfigCollectionItemsInUseByToHclTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsInUseBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsConfigCollectionItemsInUseBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsConfigCollectionItemsInUseBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // options_group - computed: true, optional: false, required: false
  public get optionsGroup() {
    return this.getStringAttribute('options_group');
  }
}

export class DataOciApmConfigConfigsConfigCollectionItemsInUseByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference {
    return new DataOciApmConfigConfigsConfigCollectionItemsInUseByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmConfigConfigsConfigCollectionItemsMetrics {
}

export function dataOciApmConfigConfigsConfigCollectionItemsMetricsToTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmConfigConfigsConfigCollectionItemsMetricsToHclTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsConfigCollectionItemsMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsConfigCollectionItemsMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value_source - computed: true, optional: false, required: false
  public get valueSource() {
    return this.getStringAttribute('value_source');
  }
}

export class DataOciApmConfigConfigsConfigCollectionItemsMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference {
    return new DataOciApmConfigConfigsConfigCollectionItemsMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStruct {
}

export function dataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStructToTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStructToHclTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_filter - computed: true, optional: false, required: false
  public get agentFilter() {
    return this.getStringAttribute('agent_filter');
  }

  // override_map - computed: true, optional: false, required: false
  private _overrideMap = new cdktf.StringMap(this, "override_map");
  public get overrideMap() {
    return this._overrideMap;
  }
}

export class DataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStructOutputReference {
    return new DataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmConfigConfigsConfigCollectionItemsOverrides {
}

export function dataOciApmConfigConfigsConfigCollectionItemsOverridesToTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmConfigConfigsConfigCollectionItemsOverridesToHclTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmConfigConfigsConfigCollectionItemsOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsConfigCollectionItemsOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsConfigCollectionItemsOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override_list - computed: true, optional: false, required: false
  private _overrideList = new DataOciApmConfigConfigsConfigCollectionItemsOverridesOverrideListStructList(this, "override_list", false);
  public get overrideList() {
    return this._overrideList;
  }
}

export class DataOciApmConfigConfigsConfigCollectionItemsOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsOverridesOutputReference {
    return new DataOciApmConfigConfigsConfigCollectionItemsOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmConfigConfigsConfigCollectionItemsRules {
}

export function dataOciApmConfigConfigsConfigCollectionItemsRulesToTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmConfigConfigsConfigCollectionItemsRulesToHclTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItemsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsConfigCollectionItemsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsConfigCollectionItemsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // filter_text - computed: true, optional: false, required: false
  public get filterText() {
    return this.getStringAttribute('filter_text');
  }

  // is_apply_to_error_spans - computed: true, optional: false, required: false
  public get isApplyToErrorSpans() {
    return this.getBooleanAttribute('is_apply_to_error_spans');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // satisfied_response_time - computed: true, optional: false, required: false
  public get satisfiedResponseTime() {
    return this.getNumberAttribute('satisfied_response_time');
  }

  // tolerating_response_time - computed: true, optional: false, required: false
  public get toleratingResponseTime() {
    return this.getNumberAttribute('tolerating_response_time');
  }
}

export class DataOciApmConfigConfigsConfigCollectionItemsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference {
    return new DataOciApmConfigConfigsConfigCollectionItemsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmConfigConfigsConfigCollectionItems {
}

export function dataOciApmConfigConfigsConfigCollectionItemsToTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmConfigConfigsConfigCollectionItemsToHclTerraform(struct?: DataOciApmConfigConfigsConfigCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmConfigConfigsConfigCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsConfigCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsConfigCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // apm_domain_id - computed: true, optional: false, required: false
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }

  // attach_install_dir - computed: true, optional: false, required: false
  public get attachInstallDir() {
    return this.getStringAttribute('attach_install_dir');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOciApmConfigConfigsConfigCollectionItemsConfigList(this, "config", false);
  public get config() {
    return this._config;
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataOciApmConfigConfigsConfigCollectionItemsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // filter_id - computed: true, optional: false, required: false
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }

  // filter_text - computed: true, optional: false, required: false
  public get filterText() {
    return this.getStringAttribute('filter_text');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_use_by - computed: true, optional: false, required: false
  private _inUseBy = new DataOciApmConfigConfigsConfigCollectionItemsInUseByList(this, "in_use_by", false);
  public get inUseBy() {
    return this._inUseBy;
  }

  // management_agent_id - computed: true, optional: false, required: false
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }

  // match_agents_with_attribute_key - computed: true, optional: false, required: false
  public get matchAgentsWithAttributeKey() {
    return this.getListAttribute('match_agents_with_attribute_key');
  }

  // match_agents_with_attribute_value - computed: true, optional: false, required: false
  public get matchAgentsWithAttributeValue() {
    return this.getStringAttribute('match_agents_with_attribute_value');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataOciApmConfigConfigsConfigCollectionItemsMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // opc_dry_run - computed: true, optional: false, required: false
  public get opcDryRun() {
    return this.getStringAttribute('opc_dry_run');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataOciApmConfigConfigsConfigCollectionItemsOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }

  // process_filter - computed: true, optional: false, required: false
  public get processFilter() {
    return this.getListAttribute('process_filter');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOciApmConfigConfigsConfigCollectionItemsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataOciApmConfigConfigsConfigCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmConfigConfigsConfigCollectionItemsOutputReference {
    return new DataOciApmConfigConfigsConfigCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmConfigConfigsConfigCollection {
}

export function dataOciApmConfigConfigsConfigCollectionToTerraform(struct?: DataOciApmConfigConfigsConfigCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApmConfigConfigsConfigCollectionToHclTerraform(struct?: DataOciApmConfigConfigsConfigCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApmConfigConfigsConfigCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsConfigCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsConfigCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApmConfigConfigsConfigCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApmConfigConfigsConfigCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApmConfigConfigsConfigCollectionOutputReference {
    return new DataOciApmConfigConfigsConfigCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApmConfigConfigsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#name DataOciApmConfigConfigs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#regex DataOciApmConfigConfigs#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#values DataOciApmConfigConfigs#values}
  */
  readonly values: string[];
}

export function dataOciApmConfigConfigsFilterToTerraform(struct?: DataOciApmConfigConfigsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciApmConfigConfigsFilterToHclTerraform(struct?: DataOciApmConfigConfigsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
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

export class DataOciApmConfigConfigsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApmConfigConfigsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmConfigConfigsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciApmConfigConfigsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciApmConfigConfigsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciApmConfigConfigsFilterOutputReference {
    return new DataOciApmConfigConfigsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs oci_apm_config_configs}
*/
export class DataOciApmConfigConfigs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_config_configs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmConfigConfigs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmConfigConfigs to import
  * @param importFromId The id of the existing DataOciApmConfigConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmConfigConfigs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_config_configs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_config_configs oci_apm_config_configs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmConfigConfigsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmConfigConfigsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_config_configs',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apmDomainId = config.apmDomainId;
    this._configType = config.configType;
    this._definedTagEquals = config.definedTagEquals;
    this._definedTagExists = config.definedTagExists;
    this._displayName = config.displayName;
    this._freeformTagEquals = config.freeformTagEquals;
    this._freeformTagExists = config.freeformTagExists;
    this._id = config.id;
    this._optionsGroup = config.optionsGroup;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
  }

  // config_collection - computed: true, optional: false, required: false
  private _configCollection = new DataOciApmConfigConfigsConfigCollectionList(this, "config_collection", false);
  public get configCollection() {
    return this._configCollection;
  }

  // config_type - computed: false, optional: true, required: false
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  public resetConfigType() {
    this._configType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // defined_tag_equals - computed: false, optional: true, required: false
  private _definedTagEquals?: string[]; 
  public get definedTagEquals() {
    return this.getListAttribute('defined_tag_equals');
  }
  public set definedTagEquals(value: string[]) {
    this._definedTagEquals = value;
  }
  public resetDefinedTagEquals() {
    this._definedTagEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagEqualsInput() {
    return this._definedTagEquals;
  }

  // defined_tag_exists - computed: false, optional: true, required: false
  private _definedTagExists?: string[]; 
  public get definedTagExists() {
    return this.getListAttribute('defined_tag_exists');
  }
  public set definedTagExists(value: string[]) {
    this._definedTagExists = value;
  }
  public resetDefinedTagExists() {
    this._definedTagExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagExistsInput() {
    return this._definedTagExists;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tag_equals - computed: false, optional: true, required: false
  private _freeformTagEquals?: string[]; 
  public get freeformTagEquals() {
    return this.getListAttribute('freeform_tag_equals');
  }
  public set freeformTagEquals(value: string[]) {
    this._freeformTagEquals = value;
  }
  public resetFreeformTagEquals() {
    this._freeformTagEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagEqualsInput() {
    return this._freeformTagEquals;
  }

  // freeform_tag_exists - computed: false, optional: true, required: false
  private _freeformTagExists?: string[]; 
  public get freeformTagExists() {
    return this.getListAttribute('freeform_tag_exists');
  }
  public set freeformTagExists(value: string[]) {
    this._freeformTagExists = value;
  }
  public resetFreeformTagExists() {
    this._freeformTagExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagExistsInput() {
    return this._freeformTagExists;
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

  // options_group - computed: false, optional: true, required: false
  private _optionsGroup?: string; 
  public get optionsGroup() {
    return this.getStringAttribute('options_group');
  }
  public set optionsGroup(value: string) {
    this._optionsGroup = value;
  }
  public resetOptionsGroup() {
    this._optionsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsGroupInput() {
    return this._optionsGroup;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciApmConfigConfigsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciApmConfigConfigsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      config_type: cdktf.stringToTerraform(this._configType),
      defined_tag_equals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._definedTagEquals),
      defined_tag_exists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._definedTagExists),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tag_equals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._freeformTagEquals),
      freeform_tag_exists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._freeformTagExists),
      id: cdktf.stringToTerraform(this._id),
      options_group: cdktf.stringToTerraform(this._optionsGroup),
      filter: cdktf.listMapper(dataOciApmConfigConfigsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_type: {
        value: cdktf.stringToHclTerraform(this._configType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tag_equals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._definedTagEquals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      defined_tag_exists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._definedTagExists),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tag_equals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._freeformTagEquals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      freeform_tag_exists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._freeformTagExists),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options_group: {
        value: cdktf.stringToHclTerraform(this._optionsGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciApmConfigConfigsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciApmConfigConfigsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
