// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudwrapperConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of a Cloud Wrapper configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configuration#id DataAkamaiCloudwrapperConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configuration#locations DataAkamaiCloudwrapperConfiguration#locations}
  */
  readonly locations?: DataAkamaiCloudwrapperConfigurationLocations[] | cdktf.IResolvable;
  /**
  * multi_cdn_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configuration#multi_cdn_settings DataAkamaiCloudwrapperConfiguration#multi_cdn_settings}
  */
  readonly multiCdnSettings?: DataAkamaiCloudwrapperConfigurationMultiCdnSettings;
}
export interface DataAkamaiCloudwrapperConfigurationLocationsCapacity {
}

export function dataAkamaiCloudwrapperConfigurationLocationsCapacityToTerraform(struct?: DataAkamaiCloudwrapperConfigurationLocationsCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationLocationsCapacityToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationLocationsCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationLocationsCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperConfigurationLocationsCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationLocationsCapacity | undefined) {
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
export interface DataAkamaiCloudwrapperConfigurationLocations {
}

export function dataAkamaiCloudwrapperConfigurationLocationsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationLocationsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperConfigurationLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationLocations | cdktf.IResolvable | undefined) {
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
  private _capacity = new DataAkamaiCloudwrapperConfigurationLocationsCapacityOutputReference(this, "capacity");
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

export class DataAkamaiCloudwrapperConfigurationLocationsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperConfigurationLocations[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperConfigurationLocationsOutputReference {
    return new DataAkamaiCloudwrapperConfigurationLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudwrapperConfigurationMultiCdnSettingsBocc {
}

export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsBoccToTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsBocc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsBoccToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsBocc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationMultiCdnSettingsBoccOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperConfigurationMultiCdnSettingsBocc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsBocc | cdktf.IResolvable | undefined) {
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
export interface DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeys {
}

export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeysToTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeysToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeys | cdktf.IResolvable | undefined) {
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

export class DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeysList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeys[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeysOutputReference {
    return new DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdns {
  /**
  * cdn_auth_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configuration#cdn_auth_keys DataAkamaiCloudwrapperConfiguration#cdn_auth_keys}
  */
  readonly cdnAuthKeys?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeys[] | cdktf.IResolvable;
}

export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdn_auth_keys: cdktf.listMapper(dataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeysToTerraform, true)(struct!.cdnAuthKeys),
  }
}


export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdn_auth_keys: {
      value: cdktf.listMapperHcl(dataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeysToHclTerraform, true)(struct!.cdnAuthKeys),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdns | cdktf.IResolvable | undefined) {
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
  private _cdnAuthKeys = new DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeysList(this, "cdn_auth_keys", true);
  public get cdnAuthKeys() {
    return this._cdnAuthKeys;
  }
  public putCdnAuthKeys(value: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsCdnAuthKeys[] | cdktf.IResolvable) {
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

export class DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdns[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsOutputReference {
    return new DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudwrapperConfigurationMultiCdnSettingsDataStreams {
}

export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsDataStreamsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsDataStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsDataStreamsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsDataStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationMultiCdnSettingsDataStreamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperConfigurationMultiCdnSettingsDataStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsDataStreams | cdktf.IResolvable | undefined) {
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
export interface DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOrigins {
}

export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsOriginsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsOriginsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOrigins | cdktf.IResolvable | undefined) {
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

export class DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOriginsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOrigins[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOriginsOutputReference {
    return new DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiCloudwrapperConfigurationMultiCdnSettings {
  /**
  * cdns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configuration#cdns DataAkamaiCloudwrapperConfiguration#cdns}
  */
  readonly cdns?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdns[] | cdktf.IResolvable;
  /**
  * origins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configuration#origins DataAkamaiCloudwrapperConfiguration#origins}
  */
  readonly origins?: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOrigins[] | cdktf.IResolvable;
}

export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsToTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdns: cdktf.listMapper(dataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsToTerraform, true)(struct!.cdns),
    origins: cdktf.listMapper(dataAkamaiCloudwrapperConfigurationMultiCdnSettingsOriginsToTerraform, true)(struct!.origins),
  }
}


export function dataAkamaiCloudwrapperConfigurationMultiCdnSettingsToHclTerraform(struct?: DataAkamaiCloudwrapperConfigurationMultiCdnSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdns: {
      value: cdktf.listMapperHcl(dataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsToHclTerraform, true)(struct!.cdns),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsList",
    },
    origins: {
      value: cdktf.listMapperHcl(dataAkamaiCloudwrapperConfigurationMultiCdnSettingsOriginsToHclTerraform, true)(struct!.origins),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOriginsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperConfigurationMultiCdnSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAkamaiCloudwrapperConfigurationMultiCdnSettings | cdktf.IResolvable | undefined) {
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
  private _bocc = new DataAkamaiCloudwrapperConfigurationMultiCdnSettingsBoccOutputReference(this, "bocc");
  public get bocc() {
    return this._bocc;
  }

  // cdns - computed: false, optional: true, required: false
  private _cdns = new DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdnsList(this, "cdns", true);
  public get cdns() {
    return this._cdns;
  }
  public putCdns(value: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsCdns[] | cdktf.IResolvable) {
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
  private _dataStreams = new DataAkamaiCloudwrapperConfigurationMultiCdnSettingsDataStreamsOutputReference(this, "data_streams");
  public get dataStreams() {
    return this._dataStreams;
  }

  // origins - computed: false, optional: true, required: false
  private _origins = new DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOriginsList(this, "origins", true);
  public get origins() {
    return this._origins;
  }
  public putOrigins(value: DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOrigins[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configuration akamai_cloudwrapper_configuration}
*/
export class DataAkamaiCloudwrapperConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudwrapper_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudwrapperConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudwrapperConfiguration to import
  * @param importFromId The id of the existing DataAkamaiCloudwrapperConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudwrapperConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudwrapper_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_configuration akamai_cloudwrapper_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudwrapperConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudwrapperConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudwrapper_configuration',
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
    this._id = config.id;
    this._locations.internalValue = config.locations;
    this._multiCdnSettings.internalValue = config.multiCdnSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _locations = new DataAkamaiCloudwrapperConfigurationLocationsList(this, "locations", true);
  public get locations() {
    return this._locations;
  }
  public putLocations(value: DataAkamaiCloudwrapperConfigurationLocations[] | cdktf.IResolvable) {
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
  private _multiCdnSettings = new DataAkamaiCloudwrapperConfigurationMultiCdnSettingsOutputReference(this, "multi_cdn_settings");
  public get multiCdnSettings() {
    return this._multiCdnSettings;
  }
  public putMultiCdnSettings(value: DataAkamaiCloudwrapperConfigurationMultiCdnSettings) {
    this._multiCdnSettings.internalValue = value;
  }
  public resetMultiCdnSettings() {
    this._multiCdnSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiCdnSettingsInput() {
    return this._multiCdnSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      locations: cdktf.listMapper(dataAkamaiCloudwrapperConfigurationLocationsToTerraform, true)(this._locations.internalValue),
      multi_cdn_settings: dataAkamaiCloudwrapperConfigurationMultiCdnSettingsToTerraform(this._multiCdnSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      locations: {
        value: cdktf.listMapperHcl(dataAkamaiCloudwrapperConfigurationLocationsToHclTerraform, true)(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiCloudwrapperConfigurationLocationsList",
      },
      multi_cdn_settings: {
        value: dataAkamaiCloudwrapperConfigurationMultiCdnSettingsToHclTerraform(this._multiCdnSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAkamaiCloudwrapperConfigurationMultiCdnSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
