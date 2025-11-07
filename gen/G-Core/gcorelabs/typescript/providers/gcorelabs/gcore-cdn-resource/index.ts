// https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcoreCdnResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The setting allows to enable or disable a CDN Resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#active GcoreCdnResource#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * A CNAME that will be used to deliver content though a CDN. If you update this field new resource will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#cname GcoreCdnResource#cname}
  */
  readonly cname: string;
  /**
  * Custom client description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#description GcoreCdnResource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#id GcoreCdnResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Generate LE certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#issue_le_cert GcoreCdnResource#issue_le_cert}
  */
  readonly issueLeCert?: boolean | cdktf.IResolvable;
  /**
  * A domain name or IP of your origin source. Specify a port if custom. You can use either 'origin' parameter or 'originGroup' in the resource definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#origin GcoreCdnResource#origin}
  */
  readonly origin?: string;
  /**
  * ID of the Origins Group. Use one of your Origins Group or create a new one. You can use either 'origin' parameter or 'originGroup' in the resource definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#origin_group GcoreCdnResource#origin_group}
  */
  readonly originGroup?: number;
  /**
  * This option defines the protocol that will be used by CDN servers to request content from an origin source. If not specified, we will use HTTP to connect to an origin server. Possible values are: HTTPS, HTTP, MATCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#origin_protocol GcoreCdnResource#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * List of additional CNAMEs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#secondary_hostnames GcoreCdnResource#secondary_hostnames}
  */
  readonly secondaryHostnames?: string[];
  /**
  * generate LE certificate automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#ssl_automated GcoreCdnResource#ssl_automated}
  */
  readonly sslAutomated?: boolean | cdktf.IResolvable;
  /**
  * Specify the SSL Certificate ID which should be used for the CDN Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#ssl_data GcoreCdnResource#ssl_data}
  */
  readonly sslData?: number;
  /**
  * Use HTTPS protocol for content delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#ssl_enabled GcoreCdnResource#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#options GcoreCdnResource#options}
  */
  readonly options?: GcoreCdnResourceOptions;
}
export interface GcoreCdnResourceOptionsBrowserCacheSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value?: string;
}

export function gcoreCdnResourceOptionsBrowserCacheSettingsToTerraform(struct?: GcoreCdnResourceOptionsBrowserCacheSettingsOutputReference | GcoreCdnResourceOptionsBrowserCacheSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gcoreCdnResourceOptionsBrowserCacheSettingsToHclTerraform(struct?: GcoreCdnResourceOptionsBrowserCacheSettingsOutputReference | GcoreCdnResourceOptionsBrowserCacheSettings): any {
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

export class GcoreCdnResourceOptionsBrowserCacheSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsBrowserCacheSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsBrowserCacheSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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
export interface GcoreCdnResourceOptionsCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: string[];
}

export function gcoreCdnResourceOptionsCorsToTerraform(struct?: GcoreCdnResourceOptionsCorsOutputReference | GcoreCdnResourceOptionsCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function gcoreCdnResourceOptionsCorsToHclTerraform(struct?: GcoreCdnResourceOptionsCorsOutputReference | GcoreCdnResourceOptionsCors): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptionsEdgeCacheSettings {
  /**
  * Caching time for a response with specific codes. These settings have a higher priority than the value field. Response code ('304', '404' for example). Use 'any' to specify caching time for all response codes. Caching time in seconds ('0s', '600s' for example). Use '0s' to disable caching for a specific response code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#custom_values GcoreCdnResource#custom_values}
  */
  readonly customValues?: { [key: string]: string };
  /**
  * Content will be cached according to origin cache settings. The value applies for a response with codes 200, 201, 204, 206, 301, 302, 303, 304, 307, 308 if an origin server does not have caching HTTP headers. Responses with other codes will not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#default GcoreCdnResource#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Caching time for a response with codes 200, 206, 301, 302. Responses with codes 4xx, 5xx will not be cached. Use '0s' disable to caching. Use custom_values field to specify a custom caching time for a response with specific codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value?: string;
}

export function gcoreCdnResourceOptionsEdgeCacheSettingsToTerraform(struct?: GcoreCdnResourceOptionsEdgeCacheSettingsOutputReference | GcoreCdnResourceOptionsEdgeCacheSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customValues),
    default: cdktf.stringToTerraform(struct!.default),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gcoreCdnResourceOptionsEdgeCacheSettingsToHclTerraform(struct?: GcoreCdnResourceOptionsEdgeCacheSettingsOutputReference | GcoreCdnResourceOptionsEdgeCacheSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GcoreCdnResourceOptionsEdgeCacheSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsEdgeCacheSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.customValues = this._customValues;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsEdgeCacheSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customValues = undefined;
      this._default = undefined;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customValues = value.customValues;
      this._default = value.default;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // custom_values - computed: true, optional: true, required: false
  private _customValues?: { [key: string]: string }; 
  public get customValues() {
    return this.getStringMapAttribute('custom_values');
  }
  public set customValues(value: { [key: string]: string }) {
    this._customValues = value;
  }
  public resetCustomValues() {
    this._customValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValuesInput() {
    return this._customValues;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
export interface GcoreCdnResourceOptionsGzipOn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function gcoreCdnResourceOptionsGzipOnToTerraform(struct?: GcoreCdnResourceOptionsGzipOnOutputReference | GcoreCdnResourceOptionsGzipOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function gcoreCdnResourceOptionsGzipOnToHclTerraform(struct?: GcoreCdnResourceOptionsGzipOnOutputReference | GcoreCdnResourceOptionsGzipOn): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsGzipOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsGzipOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsGzipOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptionsHostHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: string;
}

export function gcoreCdnResourceOptionsHostHeaderToTerraform(struct?: GcoreCdnResourceOptionsHostHeaderOutputReference | GcoreCdnResourceOptionsHostHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gcoreCdnResourceOptionsHostHeaderToHclTerraform(struct?: GcoreCdnResourceOptionsHostHeaderOutputReference | GcoreCdnResourceOptionsHostHeader): any {
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

export class GcoreCdnResourceOptionsHostHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsHostHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsHostHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptionsIgnoreQueryString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function gcoreCdnResourceOptionsIgnoreQueryStringToTerraform(struct?: GcoreCdnResourceOptionsIgnoreQueryStringOutputReference | GcoreCdnResourceOptionsIgnoreQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function gcoreCdnResourceOptionsIgnoreQueryStringToHclTerraform(struct?: GcoreCdnResourceOptionsIgnoreQueryStringOutputReference | GcoreCdnResourceOptionsIgnoreQueryString): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsIgnoreQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsIgnoreQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsIgnoreQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptionsQueryParamsBlacklistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: string[];
}

export function gcoreCdnResourceOptionsQueryParamsBlacklistStructToTerraform(struct?: GcoreCdnResourceOptionsQueryParamsBlacklistStructOutputReference | GcoreCdnResourceOptionsQueryParamsBlacklistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function gcoreCdnResourceOptionsQueryParamsBlacklistStructToHclTerraform(struct?: GcoreCdnResourceOptionsQueryParamsBlacklistStructOutputReference | GcoreCdnResourceOptionsQueryParamsBlacklistStruct): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsQueryParamsBlacklistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsQueryParamsBlacklistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsQueryParamsBlacklistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptionsQueryParamsWhitelistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: string[];
}

export function gcoreCdnResourceOptionsQueryParamsWhitelistStructToTerraform(struct?: GcoreCdnResourceOptionsQueryParamsWhitelistStructOutputReference | GcoreCdnResourceOptionsQueryParamsWhitelistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function gcoreCdnResourceOptionsQueryParamsWhitelistStructToHclTerraform(struct?: GcoreCdnResourceOptionsQueryParamsWhitelistStructOutputReference | GcoreCdnResourceOptionsQueryParamsWhitelistStruct): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsQueryParamsWhitelistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsQueryParamsWhitelistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsQueryParamsWhitelistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptionsRedirectHttpToHttps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function gcoreCdnResourceOptionsRedirectHttpToHttpsToTerraform(struct?: GcoreCdnResourceOptionsRedirectHttpToHttpsOutputReference | GcoreCdnResourceOptionsRedirectHttpToHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function gcoreCdnResourceOptionsRedirectHttpToHttpsToHclTerraform(struct?: GcoreCdnResourceOptionsRedirectHttpToHttpsOutputReference | GcoreCdnResourceOptionsRedirectHttpToHttps): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsRedirectHttpToHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsRedirectHttpToHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsRedirectHttpToHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptionsRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#body GcoreCdnResource#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#flag GcoreCdnResource#flag}
  */
  readonly flag?: string;
}

export function gcoreCdnResourceOptionsRewriteToTerraform(struct?: GcoreCdnResourceOptionsRewriteOutputReference | GcoreCdnResourceOptionsRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    flag: cdktf.stringToTerraform(struct!.flag),
  }
}


export function gcoreCdnResourceOptionsRewriteToHclTerraform(struct?: GcoreCdnResourceOptionsRewriteOutputReference | GcoreCdnResourceOptionsRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flag: {
      value: cdktf.stringToHclTerraform(struct!.flag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._flag !== undefined) {
      hasAnyValues = true;
      internalValueResult.flag = this._flag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._enabled = undefined;
      this._flag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._enabled = value.enabled;
      this._flag = value.flag;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // flag - computed: false, optional: true, required: false
  private _flag?: string; 
  public get flag() {
    return this.getStringAttribute('flag');
  }
  public set flag(value: string) {
    this._flag = value;
  }
  public resetFlag() {
    this._flag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
  }
}
export interface GcoreCdnResourceOptionsSni {
  /**
  * Required to set custom hostname in case sni-type='custom'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#custom_hostname GcoreCdnResource#custom_hostname}
  */
  readonly customHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Available values 'dynamic' or 'custom'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#sni_type GcoreCdnResource#sni_type}
  */
  readonly sniType?: string;
}

export function gcoreCdnResourceOptionsSniToTerraform(struct?: GcoreCdnResourceOptionsSniOutputReference | GcoreCdnResourceOptionsSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_hostname: cdktf.stringToTerraform(struct!.customHostname),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sni_type: cdktf.stringToTerraform(struct!.sniType),
  }
}


export function gcoreCdnResourceOptionsSniToHclTerraform(struct?: GcoreCdnResourceOptionsSniOutputReference | GcoreCdnResourceOptionsSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_hostname: {
      value: cdktf.stringToHclTerraform(struct!.customHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sni_type: {
      value: cdktf.stringToHclTerraform(struct!.sniType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsSni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostname = this._customHostname;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sniType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniType = this._sniType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsSni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customHostname = undefined;
      this._enabled = undefined;
      this._sniType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customHostname = value.customHostname;
      this._enabled = value.enabled;
      this._sniType = value.sniType;
    }
  }

  // custom_hostname - computed: false, optional: true, required: false
  private _customHostname?: string; 
  public get customHostname() {
    return this.getStringAttribute('custom_hostname');
  }
  public set customHostname(value: string) {
    this._customHostname = value;
  }
  public resetCustomHostname() {
    this._customHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostnameInput() {
    return this._customHostname;
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

  // sni_type - computed: false, optional: true, required: false
  private _sniType?: string; 
  public get sniType() {
    return this.getStringAttribute('sni_type');
  }
  public set sniType(value: string) {
    this._sniType = value;
  }
  public resetSniType() {
    this._sniType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniTypeInput() {
    return this._sniType;
  }
}
export interface GcoreCdnResourceOptionsStaticHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: { [key: string]: string };
}

export function gcoreCdnResourceOptionsStaticHeadersToTerraform(struct?: GcoreCdnResourceOptionsStaticHeadersOutputReference | GcoreCdnResourceOptionsStaticHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function gcoreCdnResourceOptionsStaticHeadersToHclTerraform(struct?: GcoreCdnResourceOptionsStaticHeadersOutputReference | GcoreCdnResourceOptionsStaticHeaders): any {
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsStaticHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsStaticHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsStaticHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptionsStaticRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: { [key: string]: string };
}

export function gcoreCdnResourceOptionsStaticRequestHeadersToTerraform(struct?: GcoreCdnResourceOptionsStaticRequestHeadersOutputReference | GcoreCdnResourceOptionsStaticRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function gcoreCdnResourceOptionsStaticRequestHeadersToHclTerraform(struct?: GcoreCdnResourceOptionsStaticRequestHeadersOutputReference | GcoreCdnResourceOptionsStaticRequestHeaders): any {
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsStaticRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsStaticRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsStaticRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptionsTlsVersions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: string[];
}

export function gcoreCdnResourceOptionsTlsVersionsToTerraform(struct?: GcoreCdnResourceOptionsTlsVersionsOutputReference | GcoreCdnResourceOptionsTlsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function gcoreCdnResourceOptionsTlsVersionsToHclTerraform(struct?: GcoreCdnResourceOptionsTlsVersionsOutputReference | GcoreCdnResourceOptionsTlsVersions): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsTlsVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsTlsVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsTlsVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptionsWebp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#jpg_quality GcoreCdnResource#jpg_quality}
  */
  readonly jpgQuality: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#png_lossless GcoreCdnResource#png_lossless}
  */
  readonly pngLossless?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#png_quality GcoreCdnResource#png_quality}
  */
  readonly pngQuality: number;
}

export function gcoreCdnResourceOptionsWebpToTerraform(struct?: GcoreCdnResourceOptionsWebpOutputReference | GcoreCdnResourceOptionsWebp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    jpg_quality: cdktf.numberToTerraform(struct!.jpgQuality),
    png_lossless: cdktf.booleanToTerraform(struct!.pngLossless),
    png_quality: cdktf.numberToTerraform(struct!.pngQuality),
  }
}


export function gcoreCdnResourceOptionsWebpToHclTerraform(struct?: GcoreCdnResourceOptionsWebpOutputReference | GcoreCdnResourceOptionsWebp): any {
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
    jpg_quality: {
      value: cdktf.numberToHclTerraform(struct!.jpgQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    png_lossless: {
      value: cdktf.booleanToHclTerraform(struct!.pngLossless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    png_quality: {
      value: cdktf.numberToHclTerraform(struct!.pngQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsWebpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsWebp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._jpgQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.jpgQuality = this._jpgQuality;
    }
    if (this._pngLossless !== undefined) {
      hasAnyValues = true;
      internalValueResult.pngLossless = this._pngLossless;
    }
    if (this._pngQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.pngQuality = this._pngQuality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsWebp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._jpgQuality = undefined;
      this._pngLossless = undefined;
      this._pngQuality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._jpgQuality = value.jpgQuality;
      this._pngLossless = value.pngLossless;
      this._pngQuality = value.pngQuality;
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

  // jpg_quality - computed: false, optional: false, required: true
  private _jpgQuality?: number; 
  public get jpgQuality() {
    return this.getNumberAttribute('jpg_quality');
  }
  public set jpgQuality(value: number) {
    this._jpgQuality = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jpgQualityInput() {
    return this._jpgQuality;
  }

  // png_lossless - computed: false, optional: true, required: false
  private _pngLossless?: boolean | cdktf.IResolvable; 
  public get pngLossless() {
    return this.getBooleanAttribute('png_lossless');
  }
  public set pngLossless(value: boolean | cdktf.IResolvable) {
    this._pngLossless = value;
  }
  public resetPngLossless() {
    this._pngLossless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pngLosslessInput() {
    return this._pngLossless;
  }

  // png_quality - computed: false, optional: false, required: true
  private _pngQuality?: number; 
  public get pngQuality() {
    return this.getNumberAttribute('png_quality');
  }
  public set pngQuality(value: number) {
    this._pngQuality = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pngQualityInput() {
    return this._pngQuality;
  }
}
export interface GcoreCdnResourceOptionsWebsockets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#enabled GcoreCdnResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#value GcoreCdnResource#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function gcoreCdnResourceOptionsWebsocketsToTerraform(struct?: GcoreCdnResourceOptionsWebsocketsOutputReference | GcoreCdnResourceOptionsWebsockets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function gcoreCdnResourceOptionsWebsocketsToHclTerraform(struct?: GcoreCdnResourceOptionsWebsocketsOutputReference | GcoreCdnResourceOptionsWebsockets): any {
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
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsWebsocketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptionsWebsockets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptionsWebsockets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GcoreCdnResourceOptions {
  /**
  * browser_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#browser_cache_settings GcoreCdnResource#browser_cache_settings}
  */
  readonly browserCacheSettings?: GcoreCdnResourceOptionsBrowserCacheSettings;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#cors GcoreCdnResource#cors}
  */
  readonly cors?: GcoreCdnResourceOptionsCors;
  /**
  * edge_cache_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#edge_cache_settings GcoreCdnResource#edge_cache_settings}
  */
  readonly edgeCacheSettings?: GcoreCdnResourceOptionsEdgeCacheSettings;
  /**
  * gzip_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#gzip_on GcoreCdnResource#gzip_on}
  */
  readonly gzipOn?: GcoreCdnResourceOptionsGzipOn;
  /**
  * host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#host_header GcoreCdnResource#host_header}
  */
  readonly hostHeader?: GcoreCdnResourceOptionsHostHeader;
  /**
  * ignore_query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#ignore_query_string GcoreCdnResource#ignore_query_string}
  */
  readonly ignoreQueryString?: GcoreCdnResourceOptionsIgnoreQueryString;
  /**
  * query_params_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#query_params_blacklist GcoreCdnResource#query_params_blacklist}
  */
  readonly queryParamsBlacklist?: GcoreCdnResourceOptionsQueryParamsBlacklistStruct;
  /**
  * query_params_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#query_params_whitelist GcoreCdnResource#query_params_whitelist}
  */
  readonly queryParamsWhitelist?: GcoreCdnResourceOptionsQueryParamsWhitelistStruct;
  /**
  * redirect_http_to_https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#redirect_http_to_https GcoreCdnResource#redirect_http_to_https}
  */
  readonly redirectHttpToHttps?: GcoreCdnResourceOptionsRedirectHttpToHttps;
  /**
  * rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#rewrite GcoreCdnResource#rewrite}
  */
  readonly rewrite?: GcoreCdnResourceOptionsRewrite;
  /**
  * sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#sni GcoreCdnResource#sni}
  */
  readonly sni?: GcoreCdnResourceOptionsSni;
  /**
  * static_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#static_headers GcoreCdnResource#static_headers}
  */
  readonly staticHeaders?: GcoreCdnResourceOptionsStaticHeaders;
  /**
  * static_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#static_request_headers GcoreCdnResource#static_request_headers}
  */
  readonly staticRequestHeaders?: GcoreCdnResourceOptionsStaticRequestHeaders;
  /**
  * tls_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#tls_versions GcoreCdnResource#tls_versions}
  */
  readonly tlsVersions?: GcoreCdnResourceOptionsTlsVersions;
  /**
  * webp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#webp GcoreCdnResource#webp}
  */
  readonly webp?: GcoreCdnResourceOptionsWebp;
  /**
  * websockets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#websockets GcoreCdnResource#websockets}
  */
  readonly websockets?: GcoreCdnResourceOptionsWebsockets;
}

export function gcoreCdnResourceOptionsToTerraform(struct?: GcoreCdnResourceOptionsOutputReference | GcoreCdnResourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browser_cache_settings: gcoreCdnResourceOptionsBrowserCacheSettingsToTerraform(struct!.browserCacheSettings),
    cors: gcoreCdnResourceOptionsCorsToTerraform(struct!.cors),
    edge_cache_settings: gcoreCdnResourceOptionsEdgeCacheSettingsToTerraform(struct!.edgeCacheSettings),
    gzip_on: gcoreCdnResourceOptionsGzipOnToTerraform(struct!.gzipOn),
    host_header: gcoreCdnResourceOptionsHostHeaderToTerraform(struct!.hostHeader),
    ignore_query_string: gcoreCdnResourceOptionsIgnoreQueryStringToTerraform(struct!.ignoreQueryString),
    query_params_blacklist: gcoreCdnResourceOptionsQueryParamsBlacklistStructToTerraform(struct!.queryParamsBlacklist),
    query_params_whitelist: gcoreCdnResourceOptionsQueryParamsWhitelistStructToTerraform(struct!.queryParamsWhitelist),
    redirect_http_to_https: gcoreCdnResourceOptionsRedirectHttpToHttpsToTerraform(struct!.redirectHttpToHttps),
    rewrite: gcoreCdnResourceOptionsRewriteToTerraform(struct!.rewrite),
    sni: gcoreCdnResourceOptionsSniToTerraform(struct!.sni),
    static_headers: gcoreCdnResourceOptionsStaticHeadersToTerraform(struct!.staticHeaders),
    static_request_headers: gcoreCdnResourceOptionsStaticRequestHeadersToTerraform(struct!.staticRequestHeaders),
    tls_versions: gcoreCdnResourceOptionsTlsVersionsToTerraform(struct!.tlsVersions),
    webp: gcoreCdnResourceOptionsWebpToTerraform(struct!.webp),
    websockets: gcoreCdnResourceOptionsWebsocketsToTerraform(struct!.websockets),
  }
}


export function gcoreCdnResourceOptionsToHclTerraform(struct?: GcoreCdnResourceOptionsOutputReference | GcoreCdnResourceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browser_cache_settings: {
      value: gcoreCdnResourceOptionsBrowserCacheSettingsToHclTerraform(struct!.browserCacheSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsBrowserCacheSettingsList",
    },
    cors: {
      value: gcoreCdnResourceOptionsCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsCorsList",
    },
    edge_cache_settings: {
      value: gcoreCdnResourceOptionsEdgeCacheSettingsToHclTerraform(struct!.edgeCacheSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsEdgeCacheSettingsList",
    },
    gzip_on: {
      value: gcoreCdnResourceOptionsGzipOnToHclTerraform(struct!.gzipOn),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsGzipOnList",
    },
    host_header: {
      value: gcoreCdnResourceOptionsHostHeaderToHclTerraform(struct!.hostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsHostHeaderList",
    },
    ignore_query_string: {
      value: gcoreCdnResourceOptionsIgnoreQueryStringToHclTerraform(struct!.ignoreQueryString),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsIgnoreQueryStringList",
    },
    query_params_blacklist: {
      value: gcoreCdnResourceOptionsQueryParamsBlacklistStructToHclTerraform(struct!.queryParamsBlacklist),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsQueryParamsBlacklistStructList",
    },
    query_params_whitelist: {
      value: gcoreCdnResourceOptionsQueryParamsWhitelistStructToHclTerraform(struct!.queryParamsWhitelist),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsQueryParamsWhitelistStructList",
    },
    redirect_http_to_https: {
      value: gcoreCdnResourceOptionsRedirectHttpToHttpsToHclTerraform(struct!.redirectHttpToHttps),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsRedirectHttpToHttpsList",
    },
    rewrite: {
      value: gcoreCdnResourceOptionsRewriteToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsRewriteList",
    },
    sni: {
      value: gcoreCdnResourceOptionsSniToHclTerraform(struct!.sni),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsSniList",
    },
    static_headers: {
      value: gcoreCdnResourceOptionsStaticHeadersToHclTerraform(struct!.staticHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsStaticHeadersList",
    },
    static_request_headers: {
      value: gcoreCdnResourceOptionsStaticRequestHeadersToHclTerraform(struct!.staticRequestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsStaticRequestHeadersList",
    },
    tls_versions: {
      value: gcoreCdnResourceOptionsTlsVersionsToHclTerraform(struct!.tlsVersions),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsTlsVersionsList",
    },
    webp: {
      value: gcoreCdnResourceOptionsWebpToHclTerraform(struct!.webp),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsWebpList",
    },
    websockets: {
      value: gcoreCdnResourceOptionsWebsocketsToHclTerraform(struct!.websockets),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreCdnResourceOptionsWebsocketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreCdnResourceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreCdnResourceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browserCacheSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserCacheSettings = this._browserCacheSettings?.internalValue;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._edgeCacheSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeCacheSettings = this._edgeCacheSettings?.internalValue;
    }
    if (this._gzipOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipOn = this._gzipOn?.internalValue;
    }
    if (this._hostHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader?.internalValue;
    }
    if (this._ignoreQueryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreQueryString = this._ignoreQueryString?.internalValue;
    }
    if (this._queryParamsBlacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsBlacklist = this._queryParamsBlacklist?.internalValue;
    }
    if (this._queryParamsWhitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamsWhitelist = this._queryParamsWhitelist?.internalValue;
    }
    if (this._redirectHttpToHttps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpToHttps = this._redirectHttpToHttps?.internalValue;
    }
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    if (this._sni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni?.internalValue;
    }
    if (this._staticHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticHeaders = this._staticHeaders?.internalValue;
    }
    if (this._staticRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRequestHeaders = this._staticRequestHeaders?.internalValue;
    }
    if (this._tlsVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersions = this._tlsVersions?.internalValue;
    }
    if (this._webp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webp = this._webp?.internalValue;
    }
    if (this._websockets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.websockets = this._websockets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreCdnResourceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._browserCacheSettings.internalValue = undefined;
      this._cors.internalValue = undefined;
      this._edgeCacheSettings.internalValue = undefined;
      this._gzipOn.internalValue = undefined;
      this._hostHeader.internalValue = undefined;
      this._ignoreQueryString.internalValue = undefined;
      this._queryParamsBlacklist.internalValue = undefined;
      this._queryParamsWhitelist.internalValue = undefined;
      this._redirectHttpToHttps.internalValue = undefined;
      this._rewrite.internalValue = undefined;
      this._sni.internalValue = undefined;
      this._staticHeaders.internalValue = undefined;
      this._staticRequestHeaders.internalValue = undefined;
      this._tlsVersions.internalValue = undefined;
      this._webp.internalValue = undefined;
      this._websockets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._browserCacheSettings.internalValue = value.browserCacheSettings;
      this._cors.internalValue = value.cors;
      this._edgeCacheSettings.internalValue = value.edgeCacheSettings;
      this._gzipOn.internalValue = value.gzipOn;
      this._hostHeader.internalValue = value.hostHeader;
      this._ignoreQueryString.internalValue = value.ignoreQueryString;
      this._queryParamsBlacklist.internalValue = value.queryParamsBlacklist;
      this._queryParamsWhitelist.internalValue = value.queryParamsWhitelist;
      this._redirectHttpToHttps.internalValue = value.redirectHttpToHttps;
      this._rewrite.internalValue = value.rewrite;
      this._sni.internalValue = value.sni;
      this._staticHeaders.internalValue = value.staticHeaders;
      this._staticRequestHeaders.internalValue = value.staticRequestHeaders;
      this._tlsVersions.internalValue = value.tlsVersions;
      this._webp.internalValue = value.webp;
      this._websockets.internalValue = value.websockets;
    }
  }

  // browser_cache_settings - computed: false, optional: true, required: false
  private _browserCacheSettings = new GcoreCdnResourceOptionsBrowserCacheSettingsOutputReference(this, "browser_cache_settings");
  public get browserCacheSettings() {
    return this._browserCacheSettings;
  }
  public putBrowserCacheSettings(value: GcoreCdnResourceOptionsBrowserCacheSettings) {
    this._browserCacheSettings.internalValue = value;
  }
  public resetBrowserCacheSettings() {
    this._browserCacheSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCacheSettingsInput() {
    return this._browserCacheSettings.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new GcoreCdnResourceOptionsCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: GcoreCdnResourceOptionsCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // edge_cache_settings - computed: false, optional: true, required: false
  private _edgeCacheSettings = new GcoreCdnResourceOptionsEdgeCacheSettingsOutputReference(this, "edge_cache_settings");
  public get edgeCacheSettings() {
    return this._edgeCacheSettings;
  }
  public putEdgeCacheSettings(value: GcoreCdnResourceOptionsEdgeCacheSettings) {
    this._edgeCacheSettings.internalValue = value;
  }
  public resetEdgeCacheSettings() {
    this._edgeCacheSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeCacheSettingsInput() {
    return this._edgeCacheSettings.internalValue;
  }

  // gzip_on - computed: false, optional: true, required: false
  private _gzipOn = new GcoreCdnResourceOptionsGzipOnOutputReference(this, "gzip_on");
  public get gzipOn() {
    return this._gzipOn;
  }
  public putGzipOn(value: GcoreCdnResourceOptionsGzipOn) {
    this._gzipOn.internalValue = value;
  }
  public resetGzipOn() {
    this._gzipOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipOnInput() {
    return this._gzipOn.internalValue;
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader = new GcoreCdnResourceOptionsHostHeaderOutputReference(this, "host_header");
  public get hostHeader() {
    return this._hostHeader;
  }
  public putHostHeader(value: GcoreCdnResourceOptionsHostHeader) {
    this._hostHeader.internalValue = value;
  }
  public resetHostHeader() {
    this._hostHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader.internalValue;
  }

  // ignore_query_string - computed: false, optional: true, required: false
  private _ignoreQueryString = new GcoreCdnResourceOptionsIgnoreQueryStringOutputReference(this, "ignore_query_string");
  public get ignoreQueryString() {
    return this._ignoreQueryString;
  }
  public putIgnoreQueryString(value: GcoreCdnResourceOptionsIgnoreQueryString) {
    this._ignoreQueryString.internalValue = value;
  }
  public resetIgnoreQueryString() {
    this._ignoreQueryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreQueryStringInput() {
    return this._ignoreQueryString.internalValue;
  }

  // query_params_blacklist - computed: false, optional: true, required: false
  private _queryParamsBlacklist = new GcoreCdnResourceOptionsQueryParamsBlacklistStructOutputReference(this, "query_params_blacklist");
  public get queryParamsBlacklist() {
    return this._queryParamsBlacklist;
  }
  public putQueryParamsBlacklist(value: GcoreCdnResourceOptionsQueryParamsBlacklistStruct) {
    this._queryParamsBlacklist.internalValue = value;
  }
  public resetQueryParamsBlacklist() {
    this._queryParamsBlacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsBlacklistInput() {
    return this._queryParamsBlacklist.internalValue;
  }

  // query_params_whitelist - computed: false, optional: true, required: false
  private _queryParamsWhitelist = new GcoreCdnResourceOptionsQueryParamsWhitelistStructOutputReference(this, "query_params_whitelist");
  public get queryParamsWhitelist() {
    return this._queryParamsWhitelist;
  }
  public putQueryParamsWhitelist(value: GcoreCdnResourceOptionsQueryParamsWhitelistStruct) {
    this._queryParamsWhitelist.internalValue = value;
  }
  public resetQueryParamsWhitelist() {
    this._queryParamsWhitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsWhitelistInput() {
    return this._queryParamsWhitelist.internalValue;
  }

  // redirect_http_to_https - computed: false, optional: true, required: false
  private _redirectHttpToHttps = new GcoreCdnResourceOptionsRedirectHttpToHttpsOutputReference(this, "redirect_http_to_https");
  public get redirectHttpToHttps() {
    return this._redirectHttpToHttps;
  }
  public putRedirectHttpToHttps(value: GcoreCdnResourceOptionsRedirectHttpToHttps) {
    this._redirectHttpToHttps.internalValue = value;
  }
  public resetRedirectHttpToHttps() {
    this._redirectHttpToHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpToHttpsInput() {
    return this._redirectHttpToHttps.internalValue;
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new GcoreCdnResourceOptionsRewriteOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: GcoreCdnResourceOptionsRewrite) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }

  // sni - computed: false, optional: true, required: false
  private _sni = new GcoreCdnResourceOptionsSniOutputReference(this, "sni");
  public get sni() {
    return this._sni;
  }
  public putSni(value: GcoreCdnResourceOptionsSni) {
    this._sni.internalValue = value;
  }
  public resetSni() {
    this._sni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni.internalValue;
  }

  // static_headers - computed: false, optional: true, required: false
  private _staticHeaders = new GcoreCdnResourceOptionsStaticHeadersOutputReference(this, "static_headers");
  public get staticHeaders() {
    return this._staticHeaders;
  }
  public putStaticHeaders(value: GcoreCdnResourceOptionsStaticHeaders) {
    this._staticHeaders.internalValue = value;
  }
  public resetStaticHeaders() {
    this._staticHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticHeadersInput() {
    return this._staticHeaders.internalValue;
  }

  // static_request_headers - computed: false, optional: true, required: false
  private _staticRequestHeaders = new GcoreCdnResourceOptionsStaticRequestHeadersOutputReference(this, "static_request_headers");
  public get staticRequestHeaders() {
    return this._staticRequestHeaders;
  }
  public putStaticRequestHeaders(value: GcoreCdnResourceOptionsStaticRequestHeaders) {
    this._staticRequestHeaders.internalValue = value;
  }
  public resetStaticRequestHeaders() {
    this._staticRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRequestHeadersInput() {
    return this._staticRequestHeaders.internalValue;
  }

  // tls_versions - computed: false, optional: true, required: false
  private _tlsVersions = new GcoreCdnResourceOptionsTlsVersionsOutputReference(this, "tls_versions");
  public get tlsVersions() {
    return this._tlsVersions;
  }
  public putTlsVersions(value: GcoreCdnResourceOptionsTlsVersions) {
    this._tlsVersions.internalValue = value;
  }
  public resetTlsVersions() {
    this._tlsVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionsInput() {
    return this._tlsVersions.internalValue;
  }

  // webp - computed: false, optional: true, required: false
  private _webp = new GcoreCdnResourceOptionsWebpOutputReference(this, "webp");
  public get webp() {
    return this._webp;
  }
  public putWebp(value: GcoreCdnResourceOptionsWebp) {
    this._webp.internalValue = value;
  }
  public resetWebp() {
    this._webp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webpInput() {
    return this._webp.internalValue;
  }

  // websockets - computed: false, optional: true, required: false
  private _websockets = new GcoreCdnResourceOptionsWebsocketsOutputReference(this, "websockets");
  public get websockets() {
    return this._websockets;
  }
  public putWebsockets(value: GcoreCdnResourceOptionsWebsockets) {
    this._websockets.internalValue = value;
  }
  public resetWebsockets() {
    this._websockets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsInput() {
    return this._websockets.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource gcore_cdn_resource}
*/
export class GcoreCdnResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcoreCdnResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcoreCdnResource to import
  * @param importFromId The id of the existing GcoreCdnResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcoreCdnResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_cdn_resource gcore_cdn_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcoreCdnResourceConfig
  */
  public constructor(scope: Construct, id: string, config: GcoreCdnResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_resource',
      terraformGeneratorMetadata: {
        providerName: 'gcorelabs',
        providerVersion: '0.3.63'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._cname = config.cname;
    this._description = config.description;
    this._id = config.id;
    this._issueLeCert = config.issueLeCert;
    this._origin = config.origin;
    this._originGroup = config.originGroup;
    this._originProtocol = config.originProtocol;
    this._secondaryHostnames = config.secondaryHostnames;
    this._sslAutomated = config.sslAutomated;
    this._sslData = config.sslData;
    this._sslEnabled = config.sslEnabled;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // cname - computed: false, optional: false, required: true
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
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

  // issue_le_cert - computed: true, optional: true, required: false
  private _issueLeCert?: boolean | cdktf.IResolvable; 
  public get issueLeCert() {
    return this.getBooleanAttribute('issue_le_cert');
  }
  public set issueLeCert(value: boolean | cdktf.IResolvable) {
    this._issueLeCert = value;
  }
  public resetIssueLeCert() {
    this._issueLeCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueLeCertInput() {
    return this._issueLeCert;
  }

  // origin - computed: true, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // origin_group - computed: true, optional: true, required: false
  private _originGroup?: number; 
  public get originGroup() {
    return this.getNumberAttribute('origin_group');
  }
  public set originGroup(value: number) {
    this._originGroup = value;
  }
  public resetOriginGroup() {
    this._originGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupInput() {
    return this._originGroup;
  }

  // origin_protocol - computed: true, optional: true, required: false
  private _originProtocol?: string; 
  public get originProtocol() {
    return this.getStringAttribute('origin_protocol');
  }
  public set originProtocol(value: string) {
    this._originProtocol = value;
  }
  public resetOriginProtocol() {
    this._originProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolInput() {
    return this._originProtocol;
  }

  // secondary_hostnames - computed: true, optional: true, required: false
  private _secondaryHostnames?: string[]; 
  public get secondaryHostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_hostnames'));
  }
  public set secondaryHostnames(value: string[]) {
    this._secondaryHostnames = value;
  }
  public resetSecondaryHostnames() {
    this._secondaryHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryHostnamesInput() {
    return this._secondaryHostnames;
  }

  // ssl_automated - computed: false, optional: true, required: false
  private _sslAutomated?: boolean | cdktf.IResolvable; 
  public get sslAutomated() {
    return this.getBooleanAttribute('ssl_automated');
  }
  public set sslAutomated(value: boolean | cdktf.IResolvable) {
    this._sslAutomated = value;
  }
  public resetSslAutomated() {
    this._sslAutomated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAutomatedInput() {
    return this._sslAutomated;
  }

  // ssl_data - computed: false, optional: true, required: false
  private _sslData?: number; 
  public get sslData() {
    return this.getNumberAttribute('ssl_data');
  }
  public set sslData(value: number) {
    this._sslData = value;
  }
  public resetSslData() {
    this._sslData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDataInput() {
    return this._sslData;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // options - computed: false, optional: true, required: false
  private _options = new GcoreCdnResourceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GcoreCdnResourceOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      cname: cdktf.stringToTerraform(this._cname),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      issue_le_cert: cdktf.booleanToTerraform(this._issueLeCert),
      origin: cdktf.stringToTerraform(this._origin),
      origin_group: cdktf.numberToTerraform(this._originGroup),
      origin_protocol: cdktf.stringToTerraform(this._originProtocol),
      secondary_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryHostnames),
      ssl_automated: cdktf.booleanToTerraform(this._sslAutomated),
      ssl_data: cdktf.numberToTerraform(this._sslData),
      ssl_enabled: cdktf.booleanToTerraform(this._sslEnabled),
      options: gcoreCdnResourceOptionsToTerraform(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cname: {
        value: cdktf.stringToHclTerraform(this._cname),
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
      issue_le_cert: {
        value: cdktf.booleanToHclTerraform(this._issueLeCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_group: {
        value: cdktf.numberToHclTerraform(this._originGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      origin_protocol: {
        value: cdktf.stringToHclTerraform(this._originProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryHostnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_automated: {
        value: cdktf.booleanToHclTerraform(this._sslAutomated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_data: {
        value: cdktf.numberToHclTerraform(this._sslData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options: {
        value: gcoreCdnResourceOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcoreCdnResourceOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
