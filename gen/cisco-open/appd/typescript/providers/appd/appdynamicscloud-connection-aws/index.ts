// https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppdynamicscloudConnectionAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this connection or configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#description AppdynamicscloudConnectionAws#description}
  */
  readonly description?: string;
  /**
  * Name of the connection or configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#display_name AppdynamicscloudConnectionAws#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#id AppdynamicscloudConnectionAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Connection state. Value which can be given: [ "ACTIVE", "INACTIVE" ]. All possible values: [ "INACTIVE", "ACTIVE", "PENDING CONFIGURATION", "INCOMPLETE", "CONFIGURED", "INSUFFICIENT LICENSE", "ERROR", "WARNING", "CRITICAL" ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#state AppdynamicscloudConnectionAws#state}
  */
  readonly state?: string;
  /**
  * configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#configuration_details AppdynamicscloudConnectionAws#configuration_details}
  */
  readonly configurationDetails?: AppdynamicscloudConnectionAwsConfigurationDetails;
  /**
  * connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#connection_details AppdynamicscloudConnectionAws#connection_details}
  */
  readonly connectionDetails: AppdynamicscloudConnectionAwsConnectionDetails;
}
export interface AppdynamicscloudConnectionAwsConfigurationDetailsImportTags {
  /**
  * It is true by default. Tags will be imported for all the resources that are being monitored by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#enabled AppdynamicscloudConnectionAws#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Array of tag keys that need to be excluded from being imported. It can be set only when enabled is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#excluded_keys AppdynamicscloudConnectionAws#excluded_keys}
  */
  readonly excludedKeys?: string[];
}

export function appdynamicscloudConnectionAwsConfigurationDetailsImportTagsToTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsImportTagsOutputReference | AppdynamicscloudConnectionAwsConfigurationDetailsImportTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excluded_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedKeys),
  }
}


export function appdynamicscloudConnectionAwsConfigurationDetailsImportTagsToHclTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsImportTagsOutputReference | AppdynamicscloudConnectionAwsConfigurationDetailsImportTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdynamicscloudConnectionAwsConfigurationDetailsImportTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAwsConfigurationDetailsImportTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedKeys = this._excludedKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdynamicscloudConnectionAwsConfigurationDetailsImportTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._excludedKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._excludedKeys = value.excludedKeys;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // excluded_keys - computed: false, optional: true, required: false
  private _excludedKeys?: string[]; 
  public get excludedKeys() {
    return this.getListAttribute('excluded_keys');
  }
  public set excludedKeys(value: string[]) {
    this._excludedKeys = value;
  }
  public resetExcludedKeys() {
    this._excludedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedKeysInput() {
    return this._excludedKeys;
  }
}
export interface AppdynamicscloudConnectionAwsConfigurationDetailsPolling {
  /**
  * The default polling interval is five (5) minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#interval AppdynamicscloudConnectionAws#interval}
  */
  readonly interval?: number;
  /**
  * The unit of polling interval, currently only support 'minute'. Defaults to the same
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#unit AppdynamicscloudConnectionAws#unit}
  */
  readonly unit?: string;
}

export function appdynamicscloudConnectionAwsConfigurationDetailsPollingToTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsPollingOutputReference | AppdynamicscloudConnectionAwsConfigurationDetailsPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function appdynamicscloudConnectionAwsConfigurationDetailsPollingToHclTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsPollingOutputReference | AppdynamicscloudConnectionAwsConfigurationDetailsPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdynamicscloudConnectionAwsConfigurationDetailsPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAwsConfigurationDetailsPolling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdynamicscloudConnectionAwsConfigurationDetailsPolling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._unit = value.unit;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTags {
  /**
  * It is true by default. Tags will be imported for all the resources that are being monitored by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#enabled AppdynamicscloudConnectionAws#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Array of tag keys that need to be excluded from being imported. It can be set only when enabled is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#excluded_keys AppdynamicscloudConnectionAws#excluded_keys}
  */
  readonly excludedKeys?: string[];
}

export function appdynamicscloudConnectionAwsConfigurationDetailsServicesImportTagsToTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTagsOutputReference | AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excluded_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedKeys),
  }
}


export function appdynamicscloudConnectionAwsConfigurationDetailsServicesImportTagsToHclTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTagsOutputReference | AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedKeys = this._excludedKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._excludedKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._excludedKeys = value.excludedKeys;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // excluded_keys - computed: false, optional: true, required: false
  private _excludedKeys?: string[]; 
  public get excludedKeys() {
    return this.getListAttribute('excluded_keys');
  }
  public set excludedKeys(value: string[]) {
    this._excludedKeys = value;
  }
  public resetExcludedKeys() {
    this._excludedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedKeysInput() {
    return this._excludedKeys;
  }
}
export interface AppdynamicscloudConnectionAwsConfigurationDetailsServicesPolling {
  /**
  * The default polling interval is five (5) minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#interval AppdynamicscloudConnectionAws#interval}
  */
  readonly interval?: number;
  /**
  * The unit of polling interval, currently only support 'minute'. Defaults to the same
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#unit AppdynamicscloudConnectionAws#unit}
  */
  readonly unit?: string;
}

export function appdynamicscloudConnectionAwsConfigurationDetailsServicesPollingToTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsServicesPollingOutputReference | AppdynamicscloudConnectionAwsConfigurationDetailsServicesPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function appdynamicscloudConnectionAwsConfigurationDetailsServicesPollingToHclTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsServicesPollingOutputReference | AppdynamicscloudConnectionAwsConfigurationDetailsServicesPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdynamicscloudConnectionAwsConfigurationDetailsServicesPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAwsConfigurationDetailsServicesPolling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdynamicscloudConnectionAwsConfigurationDetailsServicesPolling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._unit = value.unit;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface AppdynamicscloudConnectionAwsConfigurationDetailsServices {
  /**
  * Service name for which we will fetch metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#name AppdynamicscloudConnectionAws#name}
  */
  readonly name: string;
  /**
  * Expression for filtering resources to be monitored, based on tags. Example: (tags(env) = 'prod' || tags(env) = 'production')) && tags(project) = 'cloudcollectors'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#tag_filter AppdynamicscloudConnectionAws#tag_filter}
  */
  readonly tagFilter?: string;
  /**
  * import_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#import_tags AppdynamicscloudConnectionAws#import_tags}
  */
  readonly importTags?: AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTags;
  /**
  * polling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#polling AppdynamicscloudConnectionAws#polling}
  */
  readonly polling?: AppdynamicscloudConnectionAwsConfigurationDetailsServicesPolling;
}

export function appdynamicscloudConnectionAwsConfigurationDetailsServicesToTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tag_filter: cdktf.stringToTerraform(struct!.tagFilter),
    import_tags: appdynamicscloudConnectionAwsConfigurationDetailsServicesImportTagsToTerraform(struct!.importTags),
    polling: appdynamicscloudConnectionAwsConfigurationDetailsServicesPollingToTerraform(struct!.polling),
  }
}


export function appdynamicscloudConnectionAwsConfigurationDetailsServicesToHclTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsServices | cdktf.IResolvable): any {
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
    tag_filter: {
      value: cdktf.stringToHclTerraform(struct!.tagFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_tags: {
      value: appdynamicscloudConnectionAwsConfigurationDetailsServicesImportTagsToHclTerraform(struct!.importTags),
      isBlock: true,
      type: "list",
      storageClassType: "AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTagsList",
    },
    polling: {
      value: appdynamicscloudConnectionAwsConfigurationDetailsServicesPollingToHclTerraform(struct!.polling),
      isBlock: true,
      type: "list",
      storageClassType: "AppdynamicscloudConnectionAwsConfigurationDetailsServicesPollingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdynamicscloudConnectionAwsConfigurationDetailsServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppdynamicscloudConnectionAwsConfigurationDetailsServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tagFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilter = this._tagFilter;
    }
    if (this._importTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importTags = this._importTags?.internalValue;
    }
    if (this._polling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polling = this._polling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdynamicscloudConnectionAwsConfigurationDetailsServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tagFilter = undefined;
      this._importTags.internalValue = undefined;
      this._polling.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tagFilter = value.tagFilter;
      this._importTags.internalValue = value.importTags;
      this._polling.internalValue = value.polling;
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

  // tag_filter - computed: false, optional: true, required: false
  private _tagFilter?: string; 
  public get tagFilter() {
    return this.getStringAttribute('tag_filter');
  }
  public set tagFilter(value: string) {
    this._tagFilter = value;
  }
  public resetTagFilter() {
    this._tagFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter;
  }

  // import_tags - computed: false, optional: true, required: false
  private _importTags = new AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTagsOutputReference(this, "import_tags");
  public get importTags() {
    return this._importTags;
  }
  public putImportTags(value: AppdynamicscloudConnectionAwsConfigurationDetailsServicesImportTags) {
    this._importTags.internalValue = value;
  }
  public resetImportTags() {
    this._importTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTagsInput() {
    return this._importTags.internalValue;
  }

  // polling - computed: false, optional: true, required: false
  private _polling = new AppdynamicscloudConnectionAwsConfigurationDetailsServicesPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }
  public putPolling(value: AppdynamicscloudConnectionAwsConfigurationDetailsServicesPolling) {
    this._polling.internalValue = value;
  }
  public resetPolling() {
    this._polling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingInput() {
    return this._polling.internalValue;
  }
}

export class AppdynamicscloudConnectionAwsConfigurationDetailsServicesList extends cdktf.ComplexList {
  public internalValue? : AppdynamicscloudConnectionAwsConfigurationDetailsServices[] | cdktf.IResolvable

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
  public get(index: number): AppdynamicscloudConnectionAwsConfigurationDetailsServicesOutputReference {
    return new AppdynamicscloudConnectionAwsConfigurationDetailsServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppdynamicscloudConnectionAwsConfigurationDetails {
  /**
  * Geographic locations used to fetch metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#regions AppdynamicscloudConnectionAws#regions}
  */
  readonly regions?: string[];
  /**
  * Expression for filtering resources to be monitored, based on tags. Example: (tags(env) = 'prod' || tags(env) = 'production')) && tags(project) = 'cloudcollectors'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#tag_filter AppdynamicscloudConnectionAws#tag_filter}
  */
  readonly tagFilter?: string;
  /**
  * import_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#import_tags AppdynamicscloudConnectionAws#import_tags}
  */
  readonly importTags?: AppdynamicscloudConnectionAwsConfigurationDetailsImportTags;
  /**
  * polling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#polling AppdynamicscloudConnectionAws#polling}
  */
  readonly polling?: AppdynamicscloudConnectionAwsConfigurationDetailsPolling;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#services AppdynamicscloudConnectionAws#services}
  */
  readonly services?: AppdynamicscloudConnectionAwsConfigurationDetailsServices[] | cdktf.IResolvable;
}

export function appdynamicscloudConnectionAwsConfigurationDetailsToTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsOutputReference | AppdynamicscloudConnectionAwsConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    tag_filter: cdktf.stringToTerraform(struct!.tagFilter),
    import_tags: appdynamicscloudConnectionAwsConfigurationDetailsImportTagsToTerraform(struct!.importTags),
    polling: appdynamicscloudConnectionAwsConfigurationDetailsPollingToTerraform(struct!.polling),
    services: cdktf.listMapper(appdynamicscloudConnectionAwsConfigurationDetailsServicesToTerraform, true)(struct!.services),
  }
}


export function appdynamicscloudConnectionAwsConfigurationDetailsToHclTerraform(struct?: AppdynamicscloudConnectionAwsConfigurationDetailsOutputReference | AppdynamicscloudConnectionAwsConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tag_filter: {
      value: cdktf.stringToHclTerraform(struct!.tagFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_tags: {
      value: appdynamicscloudConnectionAwsConfigurationDetailsImportTagsToHclTerraform(struct!.importTags),
      isBlock: true,
      type: "list",
      storageClassType: "AppdynamicscloudConnectionAwsConfigurationDetailsImportTagsList",
    },
    polling: {
      value: appdynamicscloudConnectionAwsConfigurationDetailsPollingToHclTerraform(struct!.polling),
      isBlock: true,
      type: "list",
      storageClassType: "AppdynamicscloudConnectionAwsConfigurationDetailsPollingList",
    },
    services: {
      value: cdktf.listMapperHcl(appdynamicscloudConnectionAwsConfigurationDetailsServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "set",
      storageClassType: "AppdynamicscloudConnectionAwsConfigurationDetailsServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdynamicscloudConnectionAwsConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAwsConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._tagFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilter = this._tagFilter;
    }
    if (this._importTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importTags = this._importTags?.internalValue;
    }
    if (this._polling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polling = this._polling?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdynamicscloudConnectionAwsConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regions = undefined;
      this._tagFilter = undefined;
      this._importTags.internalValue = undefined;
      this._polling.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regions = value.regions;
      this._tagFilter = value.tagFilter;
      this._importTags.internalValue = value.importTags;
      this._polling.internalValue = value.polling;
      this._services.internalValue = value.services;
    }
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // tag_filter - computed: false, optional: true, required: false
  private _tagFilter?: string; 
  public get tagFilter() {
    return this.getStringAttribute('tag_filter');
  }
  public set tagFilter(value: string) {
    this._tagFilter = value;
  }
  public resetTagFilter() {
    this._tagFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter;
  }

  // import_tags - computed: false, optional: true, required: false
  private _importTags = new AppdynamicscloudConnectionAwsConfigurationDetailsImportTagsOutputReference(this, "import_tags");
  public get importTags() {
    return this._importTags;
  }
  public putImportTags(value: AppdynamicscloudConnectionAwsConfigurationDetailsImportTags) {
    this._importTags.internalValue = value;
  }
  public resetImportTags() {
    this._importTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTagsInput() {
    return this._importTags.internalValue;
  }

  // polling - computed: false, optional: true, required: false
  private _polling = new AppdynamicscloudConnectionAwsConfigurationDetailsPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }
  public putPolling(value: AppdynamicscloudConnectionAwsConfigurationDetailsPolling) {
    this._polling.internalValue = value;
  }
  public resetPolling() {
    this._polling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingInput() {
    return this._polling.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new AppdynamicscloudConnectionAwsConfigurationDetailsServicesList(this, "services", true);
  public get services() {
    return this._services;
  }
  public putServices(value: AppdynamicscloudConnectionAwsConfigurationDetailsServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface AppdynamicscloudConnectionAwsConnectionDetails {
  /**
  * AWS Access keys are long-term credentials for an AWS IAM user, or account root user. The access key ID is one of two access keys needed to authenticate to AWS. The other is a secret access key. You need access keys to make programmatic calls using the AWS CLI, AWS Tools, or PowerShell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#access_key_id AppdynamicscloudConnectionAws#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Connection type discriminator, supported types are `role_delegation` and `access_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#access_type AppdynamicscloudConnectionAws#access_type}
  */
  readonly accessType: string;
  /**
  * AWS Account ID provided by the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#account_id AppdynamicscloudConnectionAws#account_id}
  */
  readonly accountId?: string;
  /**
  * The secret access key is one of two access keys needed to authenticate to AWS. The other is an access key ID. The secret access key is only available once, when you create it. Download the generated secret access key and save in a secure location. If the secret access key is lost or deleted, you must create a new one. You need access keys to make programmatic calls using the AWS CLI, AWS Tools, or PowerShell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#secret_access_key AppdynamicscloudConnectionAws#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function appdynamicscloudConnectionAwsConnectionDetailsToTerraform(struct?: AppdynamicscloudConnectionAwsConnectionDetailsOutputReference | AppdynamicscloudConnectionAwsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    access_type: cdktf.stringToTerraform(struct!.accessType),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function appdynamicscloudConnectionAwsConnectionDetailsToHclTerraform(struct?: AppdynamicscloudConnectionAwsConnectionDetailsOutputReference | AppdynamicscloudConnectionAwsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdynamicscloudConnectionAwsConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAwsConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdynamicscloudConnectionAwsConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._accessType = undefined;
      this._accountId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._accessType = value.accessType;
      this._accountId = value.accountId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // appdynamics_aws_account_id - computed: true, optional: false, required: false
  public get appdynamicsAwsAccountId() {
    return this.getStringAttribute('appdynamics_aws_account_id');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws appdynamicscloud_connection_aws}
*/
export class AppdynamicscloudConnectionAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appdynamicscloud_connection_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppdynamicscloudConnectionAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppdynamicscloudConnectionAws to import
  * @param importFromId The id of the existing AppdynamicscloudConnectionAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppdynamicscloudConnectionAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appdynamicscloud_connection_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_aws appdynamicscloud_connection_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppdynamicscloudConnectionAwsConfig
  */
  public constructor(scope: Construct, id: string, config: AppdynamicscloudConnectionAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'appdynamicscloud_connection_aws',
      terraformGeneratorMetadata: {
        providerName: 'appd',
        providerVersion: '0.0.1',
        providerVersionConstraint: '0.0.1'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._configurationDetails.internalValue = config.configurationDetails;
    this._connectionDetails.internalValue = config.connectionDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_details_service_default - computed: true, optional: false, required: false
  public get configurationDetailsServiceDefault() {
    return this.getBooleanAttribute('configuration_details_service_default');
  }

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // configuration_details - computed: false, optional: true, required: false
  private _configurationDetails = new AppdynamicscloudConnectionAwsConfigurationDetailsOutputReference(this, "configuration_details");
  public get configurationDetails() {
    return this._configurationDetails;
  }
  public putConfigurationDetails(value: AppdynamicscloudConnectionAwsConfigurationDetails) {
    this._configurationDetails.internalValue = value;
  }
  public resetConfigurationDetails() {
    this._configurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationDetailsInput() {
    return this._configurationDetails.internalValue;
  }

  // connection_details - computed: false, optional: false, required: true
  private _connectionDetails = new AppdynamicscloudConnectionAwsConnectionDetailsOutputReference(this, "connection_details");
  public get connectionDetails() {
    return this._connectionDetails;
  }
  public putConnectionDetails(value: AppdynamicscloudConnectionAwsConnectionDetails) {
    this._connectionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDetailsInput() {
    return this._connectionDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      configuration_details: appdynamicscloudConnectionAwsConfigurationDetailsToTerraform(this._configurationDetails.internalValue),
      connection_details: appdynamicscloudConnectionAwsConnectionDetailsToTerraform(this._connectionDetails.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_details: {
        value: appdynamicscloudConnectionAwsConfigurationDetailsToHclTerraform(this._configurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppdynamicscloudConnectionAwsConfigurationDetailsList",
      },
      connection_details: {
        value: appdynamicscloudConnectionAwsConnectionDetailsToHclTerraform(this._connectionDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppdynamicscloudConnectionAwsConnectionDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
