// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessEventsOneagentConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#enabled BusinessEventsOneagent#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#id BusinessEventsOneagent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#insert_after BusinessEventsOneagent#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#rule_name BusinessEventsOneagent#rule_name}
  */
  readonly ruleName: string;
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#scope BusinessEventsOneagent#scope}
  */
  readonly scope?: string;
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#event BusinessEventsOneagent#event}
  */
  readonly event: BusinessEventsOneagentEvent;
  /**
  * triggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#triggers BusinessEventsOneagent#triggers}
  */
  readonly triggers: BusinessEventsOneagentTriggers;
}
export interface BusinessEventsOneagentEventCategory {
  /**
  * [See our documentation](https://dt-url.net/ei034bx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#path BusinessEventsOneagent#path}
  */
  readonly path?: string;
  /**
  * Fixed value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#source BusinessEventsOneagent#source}
  */
  readonly source?: string;
  /**
  * Possible Values: `Constant_string`, `Request_body`, `Request_headers`, `Request_method`, `Request_parameters`, `Request_path`, `Request_url`, `Response_body`, `Response_headers`, `Response_statusCode`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#source_type BusinessEventsOneagent#source_type}
  */
  readonly sourceType: string;
}

export function businessEventsOneagentEventCategoryToTerraform(struct?: BusinessEventsOneagentEventCategoryOutputReference | BusinessEventsOneagentEventCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    source: cdktf.stringToTerraform(struct!.source),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function businessEventsOneagentEventCategoryToHclTerraform(struct?: BusinessEventsOneagentEventCategoryOutputReference | BusinessEventsOneagentEventCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsOneagentEventCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessEventsOneagentEventCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsOneagentEventCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._source = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._source = value.source;
      this._sourceType = value.sourceType;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface BusinessEventsOneagentEventDataEventDataFieldComplexSource {
  /**
  * [See our documentation](https://dt-url.net/ei034bx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#path BusinessEventsOneagent#path}
  */
  readonly path?: string;
  /**
  * Fixed value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#source BusinessEventsOneagent#source}
  */
  readonly source?: string;
  /**
  * Possible Values: `Constant_string`, `Request_body`, `Request_headers`, `Request_method`, `Request_parameters`, `Request_path`, `Request_url`, `Response_body`, `Response_headers`, `Response_statusCode`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#source_type BusinessEventsOneagent#source_type}
  */
  readonly sourceType: string;
}

export function businessEventsOneagentEventDataEventDataFieldComplexSourceToTerraform(struct?: BusinessEventsOneagentEventDataEventDataFieldComplexSourceOutputReference | BusinessEventsOneagentEventDataEventDataFieldComplexSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    source: cdktf.stringToTerraform(struct!.source),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function businessEventsOneagentEventDataEventDataFieldComplexSourceToHclTerraform(struct?: BusinessEventsOneagentEventDataEventDataFieldComplexSourceOutputReference | BusinessEventsOneagentEventDataEventDataFieldComplexSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsOneagentEventDataEventDataFieldComplexSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessEventsOneagentEventDataEventDataFieldComplexSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsOneagentEventDataEventDataFieldComplexSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._source = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._source = value.source;
      this._sourceType = value.sourceType;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface BusinessEventsOneagentEventDataEventDataFieldComplex {
  /**
  * Field name to be added to data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#name BusinessEventsOneagent#name}
  */
  readonly name: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#source BusinessEventsOneagent#source}
  */
  readonly source: BusinessEventsOneagentEventDataEventDataFieldComplexSource;
}

export function businessEventsOneagentEventDataEventDataFieldComplexToTerraform(struct?: BusinessEventsOneagentEventDataEventDataFieldComplex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    source: businessEventsOneagentEventDataEventDataFieldComplexSourceToTerraform(struct!.source),
  }
}


export function businessEventsOneagentEventDataEventDataFieldComplexToHclTerraform(struct?: BusinessEventsOneagentEventDataEventDataFieldComplex | cdktf.IResolvable): any {
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
    source: {
      value: businessEventsOneagentEventDataEventDataFieldComplexSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessEventsOneagentEventDataEventDataFieldComplexSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsOneagentEventDataEventDataFieldComplexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessEventsOneagentEventDataEventDataFieldComplex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsOneagentEventDataEventDataFieldComplex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._source.internalValue = value.source;
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

  // source - computed: false, optional: false, required: true
  private _source = new BusinessEventsOneagentEventDataEventDataFieldComplexSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: BusinessEventsOneagentEventDataEventDataFieldComplexSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class BusinessEventsOneagentEventDataEventDataFieldComplexList extends cdktf.ComplexList {
  public internalValue? : BusinessEventsOneagentEventDataEventDataFieldComplex[] | cdktf.IResolvable

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
  public get(index: number): BusinessEventsOneagentEventDataEventDataFieldComplexOutputReference {
    return new BusinessEventsOneagentEventDataEventDataFieldComplexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessEventsOneagentEventData {
  /**
  * event_data_field_complex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#event_data_field_complex BusinessEventsOneagent#event_data_field_complex}
  */
  readonly eventDataFieldComplex: BusinessEventsOneagentEventDataEventDataFieldComplex[] | cdktf.IResolvable;
}

export function businessEventsOneagentEventDataToTerraform(struct?: BusinessEventsOneagentEventDataOutputReference | BusinessEventsOneagentEventData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_data_field_complex: cdktf.listMapper(businessEventsOneagentEventDataEventDataFieldComplexToTerraform, true)(struct!.eventDataFieldComplex),
  }
}


export function businessEventsOneagentEventDataToHclTerraform(struct?: BusinessEventsOneagentEventDataOutputReference | BusinessEventsOneagentEventData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_data_field_complex: {
      value: cdktf.listMapperHcl(businessEventsOneagentEventDataEventDataFieldComplexToHclTerraform, true)(struct!.eventDataFieldComplex),
      isBlock: true,
      type: "set",
      storageClassType: "BusinessEventsOneagentEventDataEventDataFieldComplexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsOneagentEventDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessEventsOneagentEventData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventDataFieldComplex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventDataFieldComplex = this._eventDataFieldComplex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsOneagentEventData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventDataFieldComplex.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventDataFieldComplex.internalValue = value.eventDataFieldComplex;
    }
  }

  // event_data_field_complex - computed: false, optional: false, required: true
  private _eventDataFieldComplex = new BusinessEventsOneagentEventDataEventDataFieldComplexList(this, "event_data_field_complex", true);
  public get eventDataFieldComplex() {
    return this._eventDataFieldComplex;
  }
  public putEventDataFieldComplex(value: BusinessEventsOneagentEventDataEventDataFieldComplex[] | cdktf.IResolvable) {
    this._eventDataFieldComplex.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDataFieldComplexInput() {
    return this._eventDataFieldComplex.internalValue;
  }
}
export interface BusinessEventsOneagentEventProvider {
  /**
  * [See our documentation](https://dt-url.net/ei034bx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#path BusinessEventsOneagent#path}
  */
  readonly path?: string;
  /**
  * Fixed value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#source BusinessEventsOneagent#source}
  */
  readonly source?: string;
  /**
  * Possible Values: `Constant_string`, `Request_body`, `Request_headers`, `Request_method`, `Request_parameters`, `Request_path`, `Request_url`, `Response_body`, `Response_headers`, `Response_statusCode`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#source_type BusinessEventsOneagent#source_type}
  */
  readonly sourceType: string;
}

export function businessEventsOneagentEventProviderToTerraform(struct?: BusinessEventsOneagentEventProviderOutputReference | BusinessEventsOneagentEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    source: cdktf.stringToTerraform(struct!.source),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function businessEventsOneagentEventProviderToHclTerraform(struct?: BusinessEventsOneagentEventProviderOutputReference | BusinessEventsOneagentEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsOneagentEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessEventsOneagentEventProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsOneagentEventProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._source = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._source = value.source;
      this._sourceType = value.sourceType;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface BusinessEventsOneagentEventType {
  /**
  * [See our documentation](https://dt-url.net/ei034bx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#path BusinessEventsOneagent#path}
  */
  readonly path?: string;
  /**
  * Fixed value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#source BusinessEventsOneagent#source}
  */
  readonly source?: string;
  /**
  * Possible Values: `Constant_string`, `Request_body`, `Request_headers`, `Request_method`, `Request_parameters`, `Request_path`, `Request_url`, `Response_body`, `Response_headers`, `Response_statusCode`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#source_type BusinessEventsOneagent#source_type}
  */
  readonly sourceType: string;
}

export function businessEventsOneagentEventTypeToTerraform(struct?: BusinessEventsOneagentEventTypeOutputReference | BusinessEventsOneagentEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    source: cdktf.stringToTerraform(struct!.source),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function businessEventsOneagentEventTypeToHclTerraform(struct?: BusinessEventsOneagentEventTypeOutputReference | BusinessEventsOneagentEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsOneagentEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessEventsOneagentEventType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsOneagentEventType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._source = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._source = value.source;
      this._sourceType = value.sourceType;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface BusinessEventsOneagentEvent {
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#category BusinessEventsOneagent#category}
  */
  readonly category: BusinessEventsOneagentEventCategory;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#data BusinessEventsOneagent#data}
  */
  readonly data?: BusinessEventsOneagentEventData;
  /**
  * provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#provider BusinessEventsOneagent#provider}
  */
  readonly provider: BusinessEventsOneagentEventProvider;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#type BusinessEventsOneagent#type}
  */
  readonly type: BusinessEventsOneagentEventType;
}

export function businessEventsOneagentEventToTerraform(struct?: BusinessEventsOneagentEventOutputReference | BusinessEventsOneagentEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: businessEventsOneagentEventCategoryToTerraform(struct!.category),
    data: businessEventsOneagentEventDataToTerraform(struct!.data),
    provider: businessEventsOneagentEventProviderToTerraform(struct!.provider),
    type: businessEventsOneagentEventTypeToTerraform(struct!.type),
  }
}


export function businessEventsOneagentEventToHclTerraform(struct?: BusinessEventsOneagentEventOutputReference | BusinessEventsOneagentEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: businessEventsOneagentEventCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessEventsOneagentEventCategoryList",
    },
    data: {
      value: businessEventsOneagentEventDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessEventsOneagentEventDataList",
    },
    provider: {
      value: businessEventsOneagentEventProviderToHclTerraform(struct!.provider),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessEventsOneagentEventProviderList",
    },
    type: {
      value: businessEventsOneagentEventTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessEventsOneagentEventTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsOneagentEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessEventsOneagentEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsOneagentEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category.internalValue = undefined;
      this._data.internalValue = undefined;
      this._provider.internalValue = undefined;
      this._type.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category.internalValue = value.category;
      this._data.internalValue = value.data;
      this._provider.internalValue = value.provider;
      this._type.internalValue = value.type;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category = new BusinessEventsOneagentEventCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: BusinessEventsOneagentEventCategory) {
    this._category.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // data - computed: false, optional: true, required: false
  private _data = new BusinessEventsOneagentEventDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: BusinessEventsOneagentEventData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // provider - computed: false, optional: false, required: true
  private _provider = new BusinessEventsOneagentEventProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: BusinessEventsOneagentEventProvider) {
    this._provider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type = new BusinessEventsOneagentEventTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: BusinessEventsOneagentEventType) {
    this._type.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}
export interface BusinessEventsOneagentTriggersTriggerSource {
  /**
  * Possible Values: `Request_body`, `Request_headers`, `Request_method`, `Request_parameters`, `Request_path`, `Request_url`, `Response_body`, `Response_headers`, `Response_statusCode`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#data_source BusinessEventsOneagent#data_source}
  */
  readonly dataSource: string;
  /**
  * [See our documentation](https://dt-url.net/ei034bx)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#path BusinessEventsOneagent#path}
  */
  readonly path?: string;
}

export function businessEventsOneagentTriggersTriggerSourceToTerraform(struct?: BusinessEventsOneagentTriggersTriggerSourceOutputReference | BusinessEventsOneagentTriggersTriggerSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function businessEventsOneagentTriggersTriggerSourceToHclTerraform(struct?: BusinessEventsOneagentTriggersTriggerSourceOutputReference | BusinessEventsOneagentTriggersTriggerSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source: {
      value: cdktf.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsOneagentTriggersTriggerSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessEventsOneagentTriggersTriggerSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsOneagentTriggersTriggerSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._path = value.path;
    }
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface BusinessEventsOneagentTriggersTrigger {
  /**
  * Case sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#case_sensitive BusinessEventsOneagent#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `CONTAINS`, `ENDS_WITH`, `EQUALS`, `EXISTS`, `N_CONTAINS`, `N_ENDS_WITH`, `N_EQUALS`, `N_EXISTS`, `N_STARTS_WITH`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#type BusinessEventsOneagent#type}
  */
  readonly type: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#value BusinessEventsOneagent#value}
  */
  readonly value?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#source BusinessEventsOneagent#source}
  */
  readonly source: BusinessEventsOneagentTriggersTriggerSource;
}

export function businessEventsOneagentTriggersTriggerToTerraform(struct?: BusinessEventsOneagentTriggersTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    source: businessEventsOneagentTriggersTriggerSourceToTerraform(struct!.source),
  }
}


export function businessEventsOneagentTriggersTriggerToHclTerraform(struct?: BusinessEventsOneagentTriggersTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    source: {
      value: businessEventsOneagentTriggersTriggerSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessEventsOneagentTriggersTriggerSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsOneagentTriggersTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessEventsOneagentTriggersTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsOneagentTriggersTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._type = undefined;
      this._value = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._type = value.type;
      this._value = value.value;
      this._source.internalValue = value.source;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // source - computed: false, optional: false, required: true
  private _source = new BusinessEventsOneagentTriggersTriggerSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: BusinessEventsOneagentTriggersTriggerSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class BusinessEventsOneagentTriggersTriggerList extends cdktf.ComplexList {
  public internalValue? : BusinessEventsOneagentTriggersTrigger[] | cdktf.IResolvable

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
  public get(index: number): BusinessEventsOneagentTriggersTriggerOutputReference {
    return new BusinessEventsOneagentTriggersTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessEventsOneagentTriggers {
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#trigger BusinessEventsOneagent#trigger}
  */
  readonly trigger: BusinessEventsOneagentTriggersTrigger[] | cdktf.IResolvable;
}

export function businessEventsOneagentTriggersToTerraform(struct?: BusinessEventsOneagentTriggersOutputReference | BusinessEventsOneagentTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trigger: cdktf.listMapper(businessEventsOneagentTriggersTriggerToTerraform, true)(struct!.trigger),
  }
}


export function businessEventsOneagentTriggersToHclTerraform(struct?: BusinessEventsOneagentTriggersOutputReference | BusinessEventsOneagentTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trigger: {
      value: cdktf.listMapperHcl(businessEventsOneagentTriggersTriggerToHclTerraform, true)(struct!.trigger),
      isBlock: true,
      type: "set",
      storageClassType: "BusinessEventsOneagentTriggersTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsOneagentTriggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessEventsOneagentTriggers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsOneagentTriggers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trigger.internalValue = value.trigger;
    }
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new BusinessEventsOneagentTriggersTriggerList(this, "trigger", true);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: BusinessEventsOneagentTriggersTrigger[] | cdktf.IResolvable) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent dynatrace_business_events_oneagent}
*/
export class BusinessEventsOneagent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_business_events_oneagent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BusinessEventsOneagent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BusinessEventsOneagent to import
  * @param importFromId The id of the existing BusinessEventsOneagent that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BusinessEventsOneagent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_business_events_oneagent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_oneagent dynatrace_business_events_oneagent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessEventsOneagentConfig
  */
  public constructor(scope: Construct, id: string, config: BusinessEventsOneagentConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_business_events_oneagent',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._ruleName = config.ruleName;
    this._scope = config.scope;
    this._event.internalValue = config.event;
    this._triggers.internalValue = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // event - computed: false, optional: false, required: true
  private _event = new BusinessEventsOneagentEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: BusinessEventsOneagentEvent) {
    this._event.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers = new BusinessEventsOneagentTriggersOutputReference(this, "triggers");
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: BusinessEventsOneagentTriggers) {
    this._triggers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      scope: cdktf.stringToTerraform(this._scope),
      event: businessEventsOneagentEventToTerraform(this._event.internalValue),
      triggers: businessEventsOneagentTriggersToTerraform(this._triggers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event: {
        value: businessEventsOneagentEventToHclTerraform(this._event.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessEventsOneagentEventList",
      },
      triggers: {
        value: businessEventsOneagentTriggersToHclTerraform(this._triggers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessEventsOneagentTriggersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
