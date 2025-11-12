// https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppdynamicscloudConnectionAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this connection or configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#description AppdynamicscloudConnectionAzure#description}
  */
  readonly description?: string;
  /**
  * Name of the connection or configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#display_name AppdynamicscloudConnectionAzure#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#id AppdynamicscloudConnectionAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Connection state. Value which can be given: [ "ACTIVE", "INACTIVE" ]. All possible values: [ "INACTIVE", "ACTIVE", "PENDING CONFIGURATION", "INCOMPLETE", "CONFIGURED", "INSUFFICIENT LICENSE", "ERROR", "WARNING", "CRITICAL" ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#state AppdynamicscloudConnectionAzure#state}
  */
  readonly state?: string;
  /**
  * configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#configuration_details AppdynamicscloudConnectionAzure#configuration_details}
  */
  readonly configurationDetails?: AppdynamicscloudConnectionAzureConfigurationDetails;
  /**
  * connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#connection_details AppdynamicscloudConnectionAzure#connection_details}
  */
  readonly connectionDetails: AppdynamicscloudConnectionAzureConnectionDetails;
}
export interface AppdynamicscloudConnectionAzureConfigurationDetailsImportTags {
  /**
  * It is true by default. Tags will be imported for all the resources that are being monitored by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#enabled AppdynamicscloudConnectionAzure#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Array of tag keys that need to be excluded from being imported. It can be set only when enabled is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#excluded_keys AppdynamicscloudConnectionAzure#excluded_keys}
  */
  readonly excludedKeys?: string[];
}

export function appdynamicscloudConnectionAzureConfigurationDetailsImportTagsToTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsImportTagsOutputReference | AppdynamicscloudConnectionAzureConfigurationDetailsImportTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excluded_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedKeys),
  }
}


export function appdynamicscloudConnectionAzureConfigurationDetailsImportTagsToHclTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsImportTagsOutputReference | AppdynamicscloudConnectionAzureConfigurationDetailsImportTags): any {
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

export class AppdynamicscloudConnectionAzureConfigurationDetailsImportTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAzureConfigurationDetailsImportTags | undefined {
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

  public set internalValue(value: AppdynamicscloudConnectionAzureConfigurationDetailsImportTags | undefined) {
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
export interface AppdynamicscloudConnectionAzureConfigurationDetailsPolling {
  /**
  * The default polling interval is five (5) minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#interval AppdynamicscloudConnectionAzure#interval}
  */
  readonly interval?: number;
  /**
  * The unit of polling interval, currently only support 'minute'. Defaults to the same
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#unit AppdynamicscloudConnectionAzure#unit}
  */
  readonly unit?: string;
}

export function appdynamicscloudConnectionAzureConfigurationDetailsPollingToTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsPollingOutputReference | AppdynamicscloudConnectionAzureConfigurationDetailsPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function appdynamicscloudConnectionAzureConfigurationDetailsPollingToHclTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsPollingOutputReference | AppdynamicscloudConnectionAzureConfigurationDetailsPolling): any {
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

export class AppdynamicscloudConnectionAzureConfigurationDetailsPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAzureConfigurationDetailsPolling | undefined {
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

  public set internalValue(value: AppdynamicscloudConnectionAzureConfigurationDetailsPolling | undefined) {
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
export interface AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTags {
  /**
  * It is true by default. Tags will be imported for all the resources that are being monitored by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#enabled AppdynamicscloudConnectionAzure#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Array of tag keys that need to be excluded from being imported. It can be set only when enabled is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#excluded_keys AppdynamicscloudConnectionAzure#excluded_keys}
  */
  readonly excludedKeys?: string[];
}

export function appdynamicscloudConnectionAzureConfigurationDetailsServicesImportTagsToTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTagsOutputReference | AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excluded_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedKeys),
  }
}


export function appdynamicscloudConnectionAzureConfigurationDetailsServicesImportTagsToHclTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTagsOutputReference | AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTags): any {
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

export class AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTags | undefined {
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

  public set internalValue(value: AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTags | undefined) {
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
export interface AppdynamicscloudConnectionAzureConfigurationDetailsServicesPolling {
  /**
  * The default polling interval is five (5) minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#interval AppdynamicscloudConnectionAzure#interval}
  */
  readonly interval?: number;
  /**
  * The unit of polling interval, currently only support 'minute'. Defaults to the same
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#unit AppdynamicscloudConnectionAzure#unit}
  */
  readonly unit?: string;
}

export function appdynamicscloudConnectionAzureConfigurationDetailsServicesPollingToTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsServicesPollingOutputReference | AppdynamicscloudConnectionAzureConfigurationDetailsServicesPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function appdynamicscloudConnectionAzureConfigurationDetailsServicesPollingToHclTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsServicesPollingOutputReference | AppdynamicscloudConnectionAzureConfigurationDetailsServicesPolling): any {
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

export class AppdynamicscloudConnectionAzureConfigurationDetailsServicesPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAzureConfigurationDetailsServicesPolling | undefined {
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

  public set internalValue(value: AppdynamicscloudConnectionAzureConfigurationDetailsServicesPolling | undefined) {
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
export interface AppdynamicscloudConnectionAzureConfigurationDetailsServices {
  /**
  * Service name for which we will fetch metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#name AppdynamicscloudConnectionAzure#name}
  */
  readonly name: string;
  /**
  * Expression for filtering resources to be monitored, based on tags. Example: (tags(env) = 'prod' || tags(env) = 'production')) && tags(project) = 'cloudcollectors'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#tag_filter AppdynamicscloudConnectionAzure#tag_filter}
  */
  readonly tagFilter?: string;
  /**
  * import_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#import_tags AppdynamicscloudConnectionAzure#import_tags}
  */
  readonly importTags?: AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTags;
  /**
  * polling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#polling AppdynamicscloudConnectionAzure#polling}
  */
  readonly polling?: AppdynamicscloudConnectionAzureConfigurationDetailsServicesPolling;
}

export function appdynamicscloudConnectionAzureConfigurationDetailsServicesToTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tag_filter: cdktf.stringToTerraform(struct!.tagFilter),
    import_tags: appdynamicscloudConnectionAzureConfigurationDetailsServicesImportTagsToTerraform(struct!.importTags),
    polling: appdynamicscloudConnectionAzureConfigurationDetailsServicesPollingToTerraform(struct!.polling),
  }
}


export function appdynamicscloudConnectionAzureConfigurationDetailsServicesToHclTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsServices | cdktf.IResolvable): any {
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
      value: appdynamicscloudConnectionAzureConfigurationDetailsServicesImportTagsToHclTerraform(struct!.importTags),
      isBlock: true,
      type: "list",
      storageClassType: "AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTagsList",
    },
    polling: {
      value: appdynamicscloudConnectionAzureConfigurationDetailsServicesPollingToHclTerraform(struct!.polling),
      isBlock: true,
      type: "list",
      storageClassType: "AppdynamicscloudConnectionAzureConfigurationDetailsServicesPollingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdynamicscloudConnectionAzureConfigurationDetailsServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppdynamicscloudConnectionAzureConfigurationDetailsServices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppdynamicscloudConnectionAzureConfigurationDetailsServices | cdktf.IResolvable | undefined) {
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
  private _importTags = new AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTagsOutputReference(this, "import_tags");
  public get importTags() {
    return this._importTags;
  }
  public putImportTags(value: AppdynamicscloudConnectionAzureConfigurationDetailsServicesImportTags) {
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
  private _polling = new AppdynamicscloudConnectionAzureConfigurationDetailsServicesPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }
  public putPolling(value: AppdynamicscloudConnectionAzureConfigurationDetailsServicesPolling) {
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

export class AppdynamicscloudConnectionAzureConfigurationDetailsServicesList extends cdktf.ComplexList {
  public internalValue? : AppdynamicscloudConnectionAzureConfigurationDetailsServices[] | cdktf.IResolvable

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
  public get(index: number): AppdynamicscloudConnectionAzureConfigurationDetailsServicesOutputReference {
    return new AppdynamicscloudConnectionAzureConfigurationDetailsServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppdynamicscloudConnectionAzureConfigurationDetails {
  /**
  * Geographic locations used to fetch metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#regions AppdynamicscloudConnectionAzure#regions}
  */
  readonly regions?: string[];
  /**
  * Azure Resource groups used to fetch metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#resource_groups AppdynamicscloudConnectionAzure#resource_groups}
  */
  readonly resourceGroups?: string[];
  /**
  * Expression for filtering resources to be monitored, based on tags. Example: (tags(env) = 'prod' || tags(env) = 'production')) && tags(project) = 'cloudcollectors'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#tag_filter AppdynamicscloudConnectionAzure#tag_filter}
  */
  readonly tagFilter?: string;
  /**
  * import_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#import_tags AppdynamicscloudConnectionAzure#import_tags}
  */
  readonly importTags?: AppdynamicscloudConnectionAzureConfigurationDetailsImportTags;
  /**
  * polling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#polling AppdynamicscloudConnectionAzure#polling}
  */
  readonly polling?: AppdynamicscloudConnectionAzureConfigurationDetailsPolling;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#services AppdynamicscloudConnectionAzure#services}
  */
  readonly services?: AppdynamicscloudConnectionAzureConfigurationDetailsServices[] | cdktf.IResolvable;
}

export function appdynamicscloudConnectionAzureConfigurationDetailsToTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsOutputReference | AppdynamicscloudConnectionAzureConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    resource_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceGroups),
    tag_filter: cdktf.stringToTerraform(struct!.tagFilter),
    import_tags: appdynamicscloudConnectionAzureConfigurationDetailsImportTagsToTerraform(struct!.importTags),
    polling: appdynamicscloudConnectionAzureConfigurationDetailsPollingToTerraform(struct!.polling),
    services: cdktf.listMapper(appdynamicscloudConnectionAzureConfigurationDetailsServicesToTerraform, true)(struct!.services),
  }
}


export function appdynamicscloudConnectionAzureConfigurationDetailsToHclTerraform(struct?: AppdynamicscloudConnectionAzureConfigurationDetailsOutputReference | AppdynamicscloudConnectionAzureConfigurationDetails): any {
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
    resource_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_filter: {
      value: cdktf.stringToHclTerraform(struct!.tagFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_tags: {
      value: appdynamicscloudConnectionAzureConfigurationDetailsImportTagsToHclTerraform(struct!.importTags),
      isBlock: true,
      type: "list",
      storageClassType: "AppdynamicscloudConnectionAzureConfigurationDetailsImportTagsList",
    },
    polling: {
      value: appdynamicscloudConnectionAzureConfigurationDetailsPollingToHclTerraform(struct!.polling),
      isBlock: true,
      type: "list",
      storageClassType: "AppdynamicscloudConnectionAzureConfigurationDetailsPollingList",
    },
    services: {
      value: cdktf.listMapperHcl(appdynamicscloudConnectionAzureConfigurationDetailsServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "set",
      storageClassType: "AppdynamicscloudConnectionAzureConfigurationDetailsServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdynamicscloudConnectionAzureConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAzureConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups;
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

  public set internalValue(value: AppdynamicscloudConnectionAzureConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regions = undefined;
      this._resourceGroups = undefined;
      this._tagFilter = undefined;
      this._importTags.internalValue = undefined;
      this._polling.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regions = value.regions;
      this._resourceGroups = value.resourceGroups;
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

  // resource_groups - computed: false, optional: true, required: false
  private _resourceGroups?: string[]; 
  public get resourceGroups() {
    return this.getListAttribute('resource_groups');
  }
  public set resourceGroups(value: string[]) {
    this._resourceGroups = value;
  }
  public resetResourceGroups() {
    this._resourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups;
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
  private _importTags = new AppdynamicscloudConnectionAzureConfigurationDetailsImportTagsOutputReference(this, "import_tags");
  public get importTags() {
    return this._importTags;
  }
  public putImportTags(value: AppdynamicscloudConnectionAzureConfigurationDetailsImportTags) {
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
  private _polling = new AppdynamicscloudConnectionAzureConfigurationDetailsPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }
  public putPolling(value: AppdynamicscloudConnectionAzureConfigurationDetailsPolling) {
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
  private _services = new AppdynamicscloudConnectionAzureConfigurationDetailsServicesList(this, "services", true);
  public get services() {
    return this._services;
  }
  public putServices(value: AppdynamicscloudConnectionAzureConfigurationDetailsServices[] | cdktf.IResolvable) {
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
export interface AppdynamicscloudConnectionAzureConnectionDetails {
  /**
  * Client IDs, also known as Application IDs, are long-term credentials for an Azure user, or account root user. The Client ID is one of three properties needed to authenticate to Azure, the other two being Client Secret and Tenant (Directory) ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#client_id AppdynamicscloudConnectionAzure#client_id}
  */
  readonly clientId: string;
  /**
  * A Client Secret allows an Azure application to provide its identity when requesting an access token. The Client Secret is one of three properties needed to authenticate to Azure, the other two being Client ID (Application ID) and Tenant (Directory) ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#client_secret AppdynamicscloudConnectionAzure#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Specify a GUID Subscription ID to monitor. If monitoring all subscriptions, do not specify a Subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#subscription_id AppdynamicscloudConnectionAzure#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The Azure AD Tenant (Directory) IDis one of three properties needed to authenticate to Azure. The other two are Client Secret and Client ID (Application ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#tenant_id AppdynamicscloudConnectionAzure#tenant_id}
  */
  readonly tenantId: string;
}

export function appdynamicscloudConnectionAzureConnectionDetailsToTerraform(struct?: AppdynamicscloudConnectionAzureConnectionDetailsOutputReference | AppdynamicscloudConnectionAzureConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function appdynamicscloudConnectionAzureConnectionDetailsToHclTerraform(struct?: AppdynamicscloudConnectionAzureConnectionDetailsOutputReference | AppdynamicscloudConnectionAzureConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppdynamicscloudConnectionAzureConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppdynamicscloudConnectionAzureConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppdynamicscloudConnectionAzureConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure appdynamicscloud_connection_azure}
*/
export class AppdynamicscloudConnectionAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appdynamicscloud_connection_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppdynamicscloudConnectionAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppdynamicscloudConnectionAzure to import
  * @param importFromId The id of the existing AppdynamicscloudConnectionAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppdynamicscloudConnectionAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appdynamicscloud_connection_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/appd/0.0.1/docs/resources/appdynamicscloud_connection_azure appdynamicscloud_connection_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppdynamicscloudConnectionAzureConfig
  */
  public constructor(scope: Construct, id: string, config: AppdynamicscloudConnectionAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'appdynamicscloud_connection_azure',
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
  private _configurationDetails = new AppdynamicscloudConnectionAzureConfigurationDetailsOutputReference(this, "configuration_details");
  public get configurationDetails() {
    return this._configurationDetails;
  }
  public putConfigurationDetails(value: AppdynamicscloudConnectionAzureConfigurationDetails) {
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
  private _connectionDetails = new AppdynamicscloudConnectionAzureConnectionDetailsOutputReference(this, "connection_details");
  public get connectionDetails() {
    return this._connectionDetails;
  }
  public putConnectionDetails(value: AppdynamicscloudConnectionAzureConnectionDetails) {
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
      configuration_details: appdynamicscloudConnectionAzureConfigurationDetailsToTerraform(this._configurationDetails.internalValue),
      connection_details: appdynamicscloudConnectionAzureConnectionDetailsToTerraform(this._connectionDetails.internalValue),
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
        value: appdynamicscloudConnectionAzureConfigurationDetailsToHclTerraform(this._configurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppdynamicscloudConnectionAzureConfigurationDetailsList",
      },
      connection_details: {
        value: appdynamicscloudConnectionAzureConnectionDetailsToHclTerraform(this._connectionDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppdynamicscloudConnectionAzureConnectionDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
