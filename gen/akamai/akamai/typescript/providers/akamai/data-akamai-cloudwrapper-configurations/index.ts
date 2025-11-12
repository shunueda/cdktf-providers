// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudwrapperConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configurations#configurations DataAkamaiCloudwrapperConfigurations#configurations}
  */
  readonly configurations?: DataAkamaiCloudwrapperConfigurationsConfigurations[] | cdktf.IResolvable;
}
export interface DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsCapacity {
}

export function dataAkamaiCloudwrapperConfigurationsConfigurationsLocationsCapacityToTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationsConfigurationsLocationsCapacityToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAkamaiCloudwrapperConfigurationsConfigurationsLocations {
}

export function dataAkamaiCloudwrapperConfigurationsConfigurationsLocationsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationsConfigurationsLocationsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperConfigurationsConfigurationsLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationsConfigurationsLocations | cdktf.IResolvable | undefined) {
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

  // capacity - computed: true, optional: false, required: false
  private _capacity = new DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // map_name - computed: true, optional: false, required: false
  public get mapName() {
    return this.getStringAttribute('map_name');
  }

  // traffic_type_id - computed: true, optional: false, required: false
  public get trafficTypeId() {
    return this.getNumberAttribute('traffic_type_id');
  }
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperConfigurationsConfigurationsLocations[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsOutputReference {
    return new DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsBocc {
}

export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsBoccToTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsBocc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsBoccToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsBocc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsBoccOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsBocc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsBocc | cdktf.IResolvable | undefined) {
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

  // conditional_sampling_frequency - computed: true, optional: false, required: false
  public get conditionalSamplingFrequency() {
    return this.getStringAttribute('conditional_sampling_frequency');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // forward_type - computed: true, optional: false, required: false
  public get forwardType() {
    return this.getStringAttribute('forward_type');
  }

  // request_type - computed: true, optional: false, required: false
  public get requestType() {
    return this.getStringAttribute('request_type');
  }

  // sampling_frequency - computed: true, optional: false, required: false
  public get samplingFrequency() {
    return this.getStringAttribute('sampling_frequency');
  }
}
export interface DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeys {
}

export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeysToTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeysToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeys | cdktf.IResolvable | undefined) {
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

  // auth_key_name - computed: true, optional: false, required: false
  public get authKeyName() {
    return this.getStringAttribute('auth_key_name');
  }

  // expiry_date - computed: true, optional: false, required: false
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }

  // header_name - computed: true, optional: false, required: false
  public get headerName() {
    return this.getStringAttribute('header_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeysList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeys[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeysOutputReference {
    return new DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdns {
  /**
  * cdn_auth_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configurations#cdn_auth_keys DataAkamaiCloudwrapperConfigurations#cdn_auth_keys}
  */
  readonly cdnAuthKeys?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeys[] | cdktf.IResolvable;
}

export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdn_auth_keys: cdktf.listMapper(dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeysToTerraform, true)(struct!.cdnAuthKeys),
  }
}


export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdn_auth_keys: {
      value: cdktf.listMapperHcl(dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeysToHclTerraform, true)(struct!.cdnAuthKeys),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdnAuthKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdnAuthKeys = this._cdnAuthKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdnAuthKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdnAuthKeys.internalValue = value.cdnAuthKeys;
    }
  }

  // cdn_code - computed: true, optional: false, required: false
  public get cdnCode() {
    return this.getStringAttribute('cdn_code');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // https_only - computed: true, optional: false, required: false
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only');
  }

  // ip_acl_cidrs - computed: true, optional: false, required: false
  public get ipAclCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_acl_cidrs'));
  }

  // cdn_auth_keys - computed: false, optional: true, required: false
  private _cdnAuthKeys = new DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeysList(this, "cdn_auth_keys", true);
  public get cdnAuthKeys() {
    return this._cdnAuthKeys;
  }
  public putCdnAuthKeys(value: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsCdnAuthKeys[] | cdktf.IResolvable) {
    this._cdnAuthKeys.internalValue = value;
  }
  public resetCdnAuthKeys() {
    this._cdnAuthKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnAuthKeysInput() {
    return this._cdnAuthKeys.internalValue;
  }
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdns[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsOutputReference {
    return new DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsDataStreams {
}

export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsDataStreamsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsDataStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsDataStreamsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsDataStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsDataStreamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsDataStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsDataStreams | cdktf.IResolvable | undefined) {
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

  // data_stream_ids - computed: true, optional: false, required: false
  public get dataStreamIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('data_stream_ids')));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
}
export interface DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOrigins {
}

export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOriginsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOriginsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOrigins | cdktf.IResolvable | undefined) {
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

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // origin_id - computed: true, optional: false, required: false
  public get originId() {
    return this.getStringAttribute('origin_id');
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getNumberAttribute('property_id');
  }
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOriginsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOrigins[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOriginsOutputReference {
    return new DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettings {
  /**
  * cdns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configurations#cdns DataAkamaiCloudwrapperConfigurations#cdns}
  */
  readonly cdns?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdns[] | cdktf.IResolvable;
  /**
  * origins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configurations#origins DataAkamaiCloudwrapperConfigurations#origins}
  */
  readonly origins?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOrigins[] | cdktf.IResolvable;
}

export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdns: cdktf.listMapper(dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsToTerraform, true)(struct!.cdns),
    origins: cdktf.listMapper(dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOriginsToTerraform, true)(struct!.origins),
  }
}


export function dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdns: {
      value: cdktf.listMapperHcl(dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsToHclTerraform, true)(struct!.cdns),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsList",
    },
    origins: {
      value: cdktf.listMapperHcl(dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOriginsToHclTerraform, true)(struct!.origins),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOriginsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdns = this._cdns?.internalValue;
    }
    if (this._origins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdns.internalValue = undefined;
      this._origins.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdns.internalValue = value.cdns;
      this._origins.internalValue = value.origins;
    }
  }

  // enable_soft_alerts - computed: true, optional: false, required: false
  public get enableSoftAlerts() {
    return this.getBooleanAttribute('enable_soft_alerts');
  }

  // bocc - computed: false, optional: false, required: false
  private _bocc = new DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsBoccOutputReference(this, "bocc");
  public get bocc() {
    return this._bocc;
  }

  // cdns - computed: false, optional: true, required: false
  private _cdns = new DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdnsList(this, "cdns", true);
  public get cdns() {
    return this._cdns;
  }
  public putCdns(value: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsCdns[] | cdktf.IResolvable) {
    this._cdns.internalValue = value;
  }
  public resetCdns() {
    this._cdns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnsInput() {
    return this._cdns.internalValue;
  }

  // data_streams - computed: false, optional: false, required: false
  private _dataStreams = new DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsDataStreamsOutputReference(this, "data_streams");
  public get dataStreams() {
    return this._dataStreams;
  }

  // origins - computed: false, optional: true, required: false
  private _origins = new DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOriginsList(this, "origins", true);
  public get origins() {
    return this._origins;
  }
  public putOrigins(value: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOrigins[] | cdktf.IResolvable) {
    this._origins.internalValue = value;
  }
  public resetOrigins() {
    this._origins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins.internalValue;
  }
}
export interface DataAkamaiCloudwrapperConfigurationsConfigurations {
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configurations#locations DataAkamaiCloudwrapperConfigurations#locations}
  */
  readonly locations?: DataAkamaiCloudwrapperConfigurationsConfigurationsLocations[] | cdktf.IResolvable;
  /**
  * multi_cdn_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configurations#multi_cdn_settings DataAkamaiCloudwrapperConfigurations#multi_cdn_settings}
  */
  readonly multiCdnSettings?: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettings;
}

export function dataAkamaiCloudwrapperConfigurationsConfigurationsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(dataAkamaiCloudwrapperConfigurationsConfigurationsLocationsToTerraform, true)(struct!.locations),
    multi_cdn_settings: dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsToTerraform(struct!.multiCdnSettings),
  }
}


export function dataAkamaiCloudwrapperConfigurationsConfigurationsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationsConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(dataAkamaiCloudwrapperConfigurationsConfigurationsLocationsToHclTerraform, true)(struct!.locations),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsList",
    },
    multi_cdn_settings: {
      value: dataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsToHclTerraform(struct!.multiCdnSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperConfigurationsConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations?.internalValue;
    }
    if (this._multiCdnSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCdnSettings = this._multiCdnSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationsConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locations.internalValue = undefined;
      this._multiCdnSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locations.internalValue = value.locations;
      this._multiCdnSettings.internalValue = value.multiCdnSettings;
    }
  }

  // capacity_alerts_threshold - computed: true, optional: false, required: false
  public get capacityAlertsThreshold() {
    return this.getNumberAttribute('capacity_alerts_threshold');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // config_name - computed: true, optional: false, required: false
  public get configName() {
    return this.getStringAttribute('config_name');
  }

  // contract_id - computed: true, optional: false, required: false
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_activated_by - computed: true, optional: false, required: false
  public get lastActivatedBy() {
    return this.getStringAttribute('last_activated_by');
  }

  // last_activated_date - computed: true, optional: false, required: false
  public get lastActivatedDate() {
    return this.getStringAttribute('last_activated_date');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // notification_emails - computed: true, optional: false, required: false
  public get notificationEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_emails'));
  }

  // property_ids - computed: true, optional: false, required: false
  public get propertyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('property_ids'));
  }

  // retain_idle_objects - computed: true, optional: false, required: false
  public get retainIdleObjects() {
    return this.getBooleanAttribute('retain_idle_objects');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new DataAkamaiCloudwrapperConfigurationsConfigurationsLocationsList(this, "locations", true);
  public get locations() {
    return this._locations;
  }
  public putLocations(value: DataAkamaiCloudwrapperConfigurationsConfigurationsLocations[] | cdktf.IResolvable) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // multi_cdn_settings - computed: false, optional: true, required: false
  private _multiCdnSettings = new DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettingsOutputReference(this, "multi_cdn_settings");
  public get multiCdnSettings() {
    return this._multiCdnSettings;
  }
  public putMultiCdnSettings(value: DataAkamaiCloudwrapperConfigurationsConfigurationsMultiCdnSettings) {
    this._multiCdnSettings.internalValue = value;
  }
  public resetMultiCdnSettings() {
    this._multiCdnSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiCdnSettingsInput() {
    return this._multiCdnSettings.internalValue;
  }
}

export class DataAkamaiCloudwrapperConfigurationsConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperConfigurationsConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperConfigurationsConfigurationsOutputReference {
    return new DataAkamaiCloudwrapperConfigurationsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configurations akamai_cloudwrapper_configurations}
*/
export class DataAkamaiCloudwrapperConfigurations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudwrapper_configurations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudwrapperConfigurations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudwrapperConfigurations to import
  * @param importFromId The id of the existing DataAkamaiCloudwrapperConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configurations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudwrapperConfigurations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudwrapper_configurations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configurations akamai_cloudwrapper_configurations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudwrapperConfigurationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudwrapperConfigurationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudwrapper_configurations',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurations.internalValue = config.configurations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configurations - computed: false, optional: true, required: false
  private _configurations = new DataAkamaiCloudwrapperConfigurationsConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: DataAkamaiCloudwrapperConfigurationsConfigurations[] | cdktf.IResolvable) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configurations: cdktf.listMapper(dataAkamaiCloudwrapperConfigurationsConfigurationsToTerraform, true)(this._configurations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configurations: {
        value: cdktf.listMapperHcl(dataAkamaiCloudwrapperConfigurationsConfigurationsToHclTerraform, true)(this._configurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiCloudwrapperConfigurationsConfigurationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
