// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationAlertConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of IDs of alert channels defined in Instana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#alert_channel_ids ApplicationAlertConfig#alert_channel_ids}
  */
  readonly alertChannelIds?: string[];
  /**
  * The boundary scope of the application alert config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#boundary_scope ApplicationAlertConfig#boundary_scope}
  */
  readonly boundaryScope: string;
  /**
  * The description text of the application alert config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#description ApplicationAlertConfig#description}
  */
  readonly description: string;
  /**
  * The evaluation type of the application alert config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#evaluation_type ApplicationAlertConfig#evaluation_type}
  */
  readonly evaluationType: string;
  /**
  * The evaluation granularity used for detection of violations of the defined threshold. In other words, it defines the size of the tumbling window used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#granularity ApplicationAlertConfig#granularity}
  */
  readonly granularity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#id ApplicationAlertConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional flag to indicate whether also internal calls are included in the scope or not. The default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#include_internal ApplicationAlertConfig#include_internal}
  */
  readonly includeInternal?: boolean | cdktf.IResolvable;
  /**
  * Optional flag to indicate whether also synthetic calls are included in the scope or not. The default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#include_synthetic ApplicationAlertConfig#include_synthetic}
  */
  readonly includeSynthetic?: boolean | cdktf.IResolvable;
  /**
  * Name for the application alert configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#name ApplicationAlertConfig#name}
  */
  readonly name: string;
  /**
  * The severity of the alert when triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#severity ApplicationAlertConfig#severity}
  */
  readonly severity: string;
  /**
  * The tag filter expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#tag_filter ApplicationAlertConfig#tag_filter}
  */
  readonly tagFilter?: string;
  /**
  * Optional flag to indicate whether also an Incident is triggered or not. The default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#triggering ApplicationAlertConfig#triggering}
  */
  readonly triggering?: boolean | cdktf.IResolvable;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#application ApplicationAlertConfig#application}
  */
  readonly application: ApplicationAlertConfigApplication[] | cdktf.IResolvable;
  /**
  * custom_payload_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#custom_payload_field ApplicationAlertConfig#custom_payload_field}
  */
  readonly customPayloadField?: ApplicationAlertConfigCustomPayloadField[] | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#rule ApplicationAlertConfig#rule}
  */
  readonly rule: ApplicationAlertConfigRule;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#threshold ApplicationAlertConfig#threshold}
  */
  readonly threshold: ApplicationAlertConfigThreshold;
  /**
  * time_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#time_threshold ApplicationAlertConfig#time_threshold}
  */
  readonly timeThreshold: ApplicationAlertConfigTimeThreshold;
}
export interface ApplicationAlertConfigApplicationServiceEndpoint {
  /**
  * ID of the included endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#endpoint_id ApplicationAlertConfig#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * Defines whether this node and his child nodes are included (true) or excluded (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#inclusive ApplicationAlertConfig#inclusive}
  */
  readonly inclusive: boolean | cdktf.IResolvable;
}

export function applicationAlertConfigApplicationServiceEndpointToTerraform(struct?: ApplicationAlertConfigApplicationServiceEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
    inclusive: cdktf.booleanToTerraform(struct!.inclusive),
  }
}


export function applicationAlertConfigApplicationServiceEndpointToHclTerraform(struct?: ApplicationAlertConfigApplicationServiceEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inclusive: {
      value: cdktf.booleanToHclTerraform(struct!.inclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigApplicationServiceEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationAlertConfigApplicationServiceEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointId = this._endpointId;
    }
    if (this._inclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusive = this._inclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigApplicationServiceEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointId = undefined;
      this._inclusive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointId = value.endpointId;
      this._inclusive = value.inclusive;
    }
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // inclusive - computed: false, optional: false, required: true
  private _inclusive?: boolean | cdktf.IResolvable; 
  public get inclusive() {
    return this.getBooleanAttribute('inclusive');
  }
  public set inclusive(value: boolean | cdktf.IResolvable) {
    this._inclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveInput() {
    return this._inclusive;
  }
}

export class ApplicationAlertConfigApplicationServiceEndpointList extends cdktf.ComplexList {
  public internalValue? : ApplicationAlertConfigApplicationServiceEndpoint[] | cdktf.IResolvable

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
  public get(index: number): ApplicationAlertConfigApplicationServiceEndpointOutputReference {
    return new ApplicationAlertConfigApplicationServiceEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationAlertConfigApplicationService {
  /**
  * Defines whether this node and his child nodes are included (true) or excluded (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#inclusive ApplicationAlertConfig#inclusive}
  */
  readonly inclusive: boolean | cdktf.IResolvable;
  /**
  * ID of the included service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#service_id ApplicationAlertConfig#service_id}
  */
  readonly serviceId: string;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#endpoint ApplicationAlertConfig#endpoint}
  */
  readonly endpoint?: ApplicationAlertConfigApplicationServiceEndpoint[] | cdktf.IResolvable;
}

export function applicationAlertConfigApplicationServiceToTerraform(struct?: ApplicationAlertConfigApplicationService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inclusive: cdktf.booleanToTerraform(struct!.inclusive),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    endpoint: cdktf.listMapper(applicationAlertConfigApplicationServiceEndpointToTerraform, true)(struct!.endpoint),
  }
}


export function applicationAlertConfigApplicationServiceToHclTerraform(struct?: ApplicationAlertConfigApplicationService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inclusive: {
      value: cdktf.booleanToHclTerraform(struct!.inclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.listMapperHcl(applicationAlertConfigApplicationServiceEndpointToHclTerraform, true)(struct!.endpoint),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationAlertConfigApplicationServiceEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigApplicationServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationAlertConfigApplicationService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusive = this._inclusive;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigApplicationService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inclusive = undefined;
      this._serviceId = undefined;
      this._endpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inclusive = value.inclusive;
      this._serviceId = value.serviceId;
      this._endpoint.internalValue = value.endpoint;
    }
  }

  // inclusive - computed: false, optional: false, required: true
  private _inclusive?: boolean | cdktf.IResolvable; 
  public get inclusive() {
    return this.getBooleanAttribute('inclusive');
  }
  public set inclusive(value: boolean | cdktf.IResolvable) {
    this._inclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveInput() {
    return this._inclusive;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new ApplicationAlertConfigApplicationServiceEndpointList(this, "endpoint", true);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: ApplicationAlertConfigApplicationServiceEndpoint[] | cdktf.IResolvable) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }
}

export class ApplicationAlertConfigApplicationServiceList extends cdktf.ComplexList {
  public internalValue? : ApplicationAlertConfigApplicationService[] | cdktf.IResolvable

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
  public get(index: number): ApplicationAlertConfigApplicationServiceOutputReference {
    return new ApplicationAlertConfigApplicationServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationAlertConfigApplication {
  /**
  * ID of the included application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#application_id ApplicationAlertConfig#application_id}
  */
  readonly applicationId: string;
  /**
  * Defines whether this node and his child nodes are included (true) or excluded (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#inclusive ApplicationAlertConfig#inclusive}
  */
  readonly inclusive: boolean | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#service ApplicationAlertConfig#service}
  */
  readonly service?: ApplicationAlertConfigApplicationService[] | cdktf.IResolvable;
}

export function applicationAlertConfigApplicationToTerraform(struct?: ApplicationAlertConfigApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    inclusive: cdktf.booleanToTerraform(struct!.inclusive),
    service: cdktf.listMapper(applicationAlertConfigApplicationServiceToTerraform, true)(struct!.service),
  }
}


export function applicationAlertConfigApplicationToHclTerraform(struct?: ApplicationAlertConfigApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inclusive: {
      value: cdktf.booleanToHclTerraform(struct!.inclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service: {
      value: cdktf.listMapperHcl(applicationAlertConfigApplicationServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationAlertConfigApplicationServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationAlertConfigApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._inclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusive = this._inclusive;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._inclusive = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._inclusive = value.inclusive;
      this._service.internalValue = value.service;
    }
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // inclusive - computed: false, optional: false, required: true
  private _inclusive?: boolean | cdktf.IResolvable; 
  public get inclusive() {
    return this.getBooleanAttribute('inclusive');
  }
  public set inclusive(value: boolean | cdktf.IResolvable) {
    this._inclusive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveInput() {
    return this._inclusive;
  }

  // service - computed: false, optional: true, required: false
  private _service = new ApplicationAlertConfigApplicationServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: ApplicationAlertConfigApplicationService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}

export class ApplicationAlertConfigApplicationList extends cdktf.ComplexList {
  public internalValue? : ApplicationAlertConfigApplication[] | cdktf.IResolvable

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
  public get(index: number): ApplicationAlertConfigApplicationOutputReference {
    return new ApplicationAlertConfigApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationAlertConfigCustomPayloadFieldDynamicValue {
  /**
  * The key of the dynamic custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#key ApplicationAlertConfig#key}
  */
  readonly key?: string;
  /**
  * The name of the tag of the dynamic custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#tag_name ApplicationAlertConfig#tag_name}
  */
  readonly tagName: string;
}

export function applicationAlertConfigCustomPayloadFieldDynamicValueToTerraform(struct?: ApplicationAlertConfigCustomPayloadFieldDynamicValueOutputReference | ApplicationAlertConfigCustomPayloadFieldDynamicValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function applicationAlertConfigCustomPayloadFieldDynamicValueToHclTerraform(struct?: ApplicationAlertConfigCustomPayloadFieldDynamicValueOutputReference | ApplicationAlertConfigCustomPayloadFieldDynamicValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigCustomPayloadFieldDynamicValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigCustomPayloadFieldDynamicValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigCustomPayloadFieldDynamicValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._tagName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._tagName = value.tagName;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}
export interface ApplicationAlertConfigCustomPayloadField {
  /**
  * The key of the custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#key ApplicationAlertConfig#key}
  */
  readonly key: string;
  /**
  * The value of a static string custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#value ApplicationAlertConfig#value}
  */
  readonly value?: string;
  /**
  * dynamic_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#dynamic_value ApplicationAlertConfig#dynamic_value}
  */
  readonly dynamicValue?: ApplicationAlertConfigCustomPayloadFieldDynamicValue;
}

export function applicationAlertConfigCustomPayloadFieldToTerraform(struct?: ApplicationAlertConfigCustomPayloadField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    dynamic_value: applicationAlertConfigCustomPayloadFieldDynamicValueToTerraform(struct!.dynamicValue),
  }
}


export function applicationAlertConfigCustomPayloadFieldToHclTerraform(struct?: ApplicationAlertConfigCustomPayloadField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    dynamic_value: {
      value: applicationAlertConfigCustomPayloadFieldDynamicValueToHclTerraform(struct!.dynamicValue),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigCustomPayloadFieldDynamicValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigCustomPayloadFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationAlertConfigCustomPayloadField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._dynamicValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicValue = this._dynamicValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigCustomPayloadField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._dynamicValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
      this._dynamicValue.internalValue = value.dynamicValue;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // dynamic_value - computed: false, optional: true, required: false
  private _dynamicValue = new ApplicationAlertConfigCustomPayloadFieldDynamicValueOutputReference(this, "dynamic_value");
  public get dynamicValue() {
    return this._dynamicValue;
  }
  public putDynamicValue(value: ApplicationAlertConfigCustomPayloadFieldDynamicValue) {
    this._dynamicValue.internalValue = value;
  }
  public resetDynamicValue() {
    this._dynamicValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicValueInput() {
    return this._dynamicValue.internalValue;
  }
}

export class ApplicationAlertConfigCustomPayloadFieldList extends cdktf.ComplexList {
  public internalValue? : ApplicationAlertConfigCustomPayloadField[] | cdktf.IResolvable

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
  public get(index: number): ApplicationAlertConfigCustomPayloadFieldOutputReference {
    return new ApplicationAlertConfigCustomPayloadFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationAlertConfigRuleErrorRate {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#aggregation ApplicationAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#metric_name ApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
}

export function applicationAlertConfigRuleErrorRateToTerraform(struct?: ApplicationAlertConfigRuleErrorRateOutputReference | ApplicationAlertConfigRuleErrorRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function applicationAlertConfigRuleErrorRateToHclTerraform(struct?: ApplicationAlertConfigRuleErrorRateOutputReference | ApplicationAlertConfigRuleErrorRate): any {
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
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigRuleErrorRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigRuleErrorRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigRuleErrorRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricName = value.metricName;
    }
  }

  // aggregation - computed: false, optional: true, required: false
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

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }
}
export interface ApplicationAlertConfigRuleErrors {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#aggregation ApplicationAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#metric_name ApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
}

export function applicationAlertConfigRuleErrorsToTerraform(struct?: ApplicationAlertConfigRuleErrorsOutputReference | ApplicationAlertConfigRuleErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function applicationAlertConfigRuleErrorsToHclTerraform(struct?: ApplicationAlertConfigRuleErrorsOutputReference | ApplicationAlertConfigRuleErrors): any {
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
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigRuleErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigRuleErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigRuleErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricName = value.metricName;
    }
  }

  // aggregation - computed: false, optional: true, required: false
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

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }
}
export interface ApplicationAlertConfigRuleLogs {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#aggregation ApplicationAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The log level for which this rule applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#level ApplicationAlertConfig#level}
  */
  readonly level: string;
  /**
  * The log message for which this rule applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#message ApplicationAlertConfig#message}
  */
  readonly message?: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#metric_name ApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
  /**
  * The operator which will be applied to evaluate this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#operator ApplicationAlertConfig#operator}
  */
  readonly operator: string;
}

export function applicationAlertConfigRuleLogsToTerraform(struct?: ApplicationAlertConfigRuleLogsOutputReference | ApplicationAlertConfigRuleLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    level: cdktf.stringToTerraform(struct!.level),
    message: cdktf.stringToTerraform(struct!.message),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function applicationAlertConfigRuleLogsToHclTerraform(struct?: ApplicationAlertConfigRuleLogsOutputReference | ApplicationAlertConfigRuleLogs): any {
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
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigRuleLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigRuleLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigRuleLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._level = undefined;
      this._message = undefined;
      this._metricName = undefined;
      this._operator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._level = value.level;
      this._message = value.message;
      this._metricName = value.metricName;
      this._operator = value.operator;
    }
  }

  // aggregation - computed: false, optional: true, required: false
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

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface ApplicationAlertConfigRuleSlowness {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#aggregation ApplicationAlertConfig#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#metric_name ApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
}

export function applicationAlertConfigRuleSlownessToTerraform(struct?: ApplicationAlertConfigRuleSlownessOutputReference | ApplicationAlertConfigRuleSlowness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function applicationAlertConfigRuleSlownessToHclTerraform(struct?: ApplicationAlertConfigRuleSlownessOutputReference | ApplicationAlertConfigRuleSlowness): any {
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
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigRuleSlownessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigRuleSlowness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigRuleSlowness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricName = value.metricName;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }
}
export interface ApplicationAlertConfigRuleStatusCode {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#aggregation ApplicationAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#metric_name ApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
  /**
  * maximum HTTP status code applied for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#status_code_end ApplicationAlertConfig#status_code_end}
  */
  readonly statusCodeEnd?: number;
  /**
  * minimal HTTP status code applied for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#status_code_start ApplicationAlertConfig#status_code_start}
  */
  readonly statusCodeStart?: number;
}

export function applicationAlertConfigRuleStatusCodeToTerraform(struct?: ApplicationAlertConfigRuleStatusCodeOutputReference | ApplicationAlertConfigRuleStatusCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    status_code_end: cdktf.numberToTerraform(struct!.statusCodeEnd),
    status_code_start: cdktf.numberToTerraform(struct!.statusCodeStart),
  }
}


export function applicationAlertConfigRuleStatusCodeToHclTerraform(struct?: ApplicationAlertConfigRuleStatusCodeOutputReference | ApplicationAlertConfigRuleStatusCode): any {
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
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code_end: {
      value: cdktf.numberToHclTerraform(struct!.statusCodeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_code_start: {
      value: cdktf.numberToHclTerraform(struct!.statusCodeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigRuleStatusCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigRuleStatusCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._statusCodeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeEnd = this._statusCodeEnd;
    }
    if (this._statusCodeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeStart = this._statusCodeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigRuleStatusCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricName = undefined;
      this._statusCodeEnd = undefined;
      this._statusCodeStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricName = value.metricName;
      this._statusCodeEnd = value.statusCodeEnd;
      this._statusCodeStart = value.statusCodeStart;
    }
  }

  // aggregation - computed: false, optional: true, required: false
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

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // status_code_end - computed: false, optional: true, required: false
  private _statusCodeEnd?: number; 
  public get statusCodeEnd() {
    return this.getNumberAttribute('status_code_end');
  }
  public set statusCodeEnd(value: number) {
    this._statusCodeEnd = value;
  }
  public resetStatusCodeEnd() {
    this._statusCodeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeEndInput() {
    return this._statusCodeEnd;
  }

  // status_code_start - computed: false, optional: true, required: false
  private _statusCodeStart?: number; 
  public get statusCodeStart() {
    return this.getNumberAttribute('status_code_start');
  }
  public set statusCodeStart(value: number) {
    this._statusCodeStart = value;
  }
  public resetStatusCodeStart() {
    this._statusCodeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeStartInput() {
    return this._statusCodeStart;
  }
}
export interface ApplicationAlertConfigRuleThroughput {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#aggregation ApplicationAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#metric_name ApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
}

export function applicationAlertConfigRuleThroughputToTerraform(struct?: ApplicationAlertConfigRuleThroughputOutputReference | ApplicationAlertConfigRuleThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function applicationAlertConfigRuleThroughputToHclTerraform(struct?: ApplicationAlertConfigRuleThroughputOutputReference | ApplicationAlertConfigRuleThroughput): any {
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
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigRuleThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigRuleThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigRuleThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricName = value.metricName;
    }
  }

  // aggregation - computed: false, optional: true, required: false
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

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }
}
export interface ApplicationAlertConfigRule {
  /**
  * error_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#error_rate ApplicationAlertConfig#error_rate}
  */
  readonly errorRate?: ApplicationAlertConfigRuleErrorRate;
  /**
  * errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#errors ApplicationAlertConfig#errors}
  */
  readonly errors?: ApplicationAlertConfigRuleErrors;
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#logs ApplicationAlertConfig#logs}
  */
  readonly logs?: ApplicationAlertConfigRuleLogs;
  /**
  * slowness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#slowness ApplicationAlertConfig#slowness}
  */
  readonly slowness?: ApplicationAlertConfigRuleSlowness;
  /**
  * status_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#status_code ApplicationAlertConfig#status_code}
  */
  readonly statusCode?: ApplicationAlertConfigRuleStatusCode;
  /**
  * throughput block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#throughput ApplicationAlertConfig#throughput}
  */
  readonly throughput?: ApplicationAlertConfigRuleThroughput;
}

export function applicationAlertConfigRuleToTerraform(struct?: ApplicationAlertConfigRuleOutputReference | ApplicationAlertConfigRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_rate: applicationAlertConfigRuleErrorRateToTerraform(struct!.errorRate),
    errors: applicationAlertConfigRuleErrorsToTerraform(struct!.errors),
    logs: applicationAlertConfigRuleLogsToTerraform(struct!.logs),
    slowness: applicationAlertConfigRuleSlownessToTerraform(struct!.slowness),
    status_code: applicationAlertConfigRuleStatusCodeToTerraform(struct!.statusCode),
    throughput: applicationAlertConfigRuleThroughputToTerraform(struct!.throughput),
  }
}


export function applicationAlertConfigRuleToHclTerraform(struct?: ApplicationAlertConfigRuleOutputReference | ApplicationAlertConfigRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_rate: {
      value: applicationAlertConfigRuleErrorRateToHclTerraform(struct!.errorRate),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigRuleErrorRateList",
    },
    errors: {
      value: applicationAlertConfigRuleErrorsToHclTerraform(struct!.errors),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigRuleErrorsList",
    },
    logs: {
      value: applicationAlertConfigRuleLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigRuleLogsList",
    },
    slowness: {
      value: applicationAlertConfigRuleSlownessToHclTerraform(struct!.slowness),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigRuleSlownessList",
    },
    status_code: {
      value: applicationAlertConfigRuleStatusCodeToHclTerraform(struct!.statusCode),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigRuleStatusCodeList",
    },
    throughput: {
      value: applicationAlertConfigRuleThroughputToHclTerraform(struct!.throughput),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigRuleThroughputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRate = this._errorRate?.internalValue;
    }
    if (this._errors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errors = this._errors?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._slowness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowness = this._slowness?.internalValue;
    }
    if (this._statusCode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode?.internalValue;
    }
    if (this._throughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorRate.internalValue = undefined;
      this._errors.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._slowness.internalValue = undefined;
      this._statusCode.internalValue = undefined;
      this._throughput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorRate.internalValue = value.errorRate;
      this._errors.internalValue = value.errors;
      this._logs.internalValue = value.logs;
      this._slowness.internalValue = value.slowness;
      this._statusCode.internalValue = value.statusCode;
      this._throughput.internalValue = value.throughput;
    }
  }

  // error_rate - computed: false, optional: true, required: false
  private _errorRate = new ApplicationAlertConfigRuleErrorRateOutputReference(this, "error_rate");
  public get errorRate() {
    return this._errorRate;
  }
  public putErrorRate(value: ApplicationAlertConfigRuleErrorRate) {
    this._errorRate.internalValue = value;
  }
  public resetErrorRate() {
    this._errorRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRateInput() {
    return this._errorRate.internalValue;
  }

  // errors - computed: false, optional: true, required: false
  private _errors = new ApplicationAlertConfigRuleErrorsOutputReference(this, "errors");
  public get errors() {
    return this._errors;
  }
  public putErrors(value: ApplicationAlertConfigRuleErrors) {
    this._errors.internalValue = value;
  }
  public resetErrors() {
    this._errors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new ApplicationAlertConfigRuleLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: ApplicationAlertConfigRuleLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // slowness - computed: false, optional: true, required: false
  private _slowness = new ApplicationAlertConfigRuleSlownessOutputReference(this, "slowness");
  public get slowness() {
    return this._slowness;
  }
  public putSlowness(value: ApplicationAlertConfigRuleSlowness) {
    this._slowness.internalValue = value;
  }
  public resetSlowness() {
    this._slowness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slownessInput() {
    return this._slowness.internalValue;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode = new ApplicationAlertConfigRuleStatusCodeOutputReference(this, "status_code");
  public get statusCode() {
    return this._statusCode;
  }
  public putStatusCode(value: ApplicationAlertConfigRuleStatusCode) {
    this._statusCode.internalValue = value;
  }
  public resetStatusCode() {
    this._statusCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode.internalValue;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput = new ApplicationAlertConfigRuleThroughputOutputReference(this, "throughput");
  public get throughput() {
    return this._throughput;
  }
  public putThroughput(value: ApplicationAlertConfigRuleThroughput) {
    this._throughput.internalValue = value;
  }
  public resetThroughput() {
    this._throughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput.internalValue;
  }
}
export interface ApplicationAlertConfigThresholdHistoricBaseline {
  /**
  * The baseline of the historic baseline threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#baseline ApplicationAlertConfig#baseline}
  */
  readonly baseline?: number[][] | cdktf.IResolvable;
  /**
  * The baseline of the historic baseline threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#deviation_factor ApplicationAlertConfig#deviation_factor}
  */
  readonly deviationFactor?: number;
  /**
  * The last updated value of the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#last_updated ApplicationAlertConfig#last_updated}
  */
  readonly lastUpdated?: number;
  /**
  * The operator which will be applied to evaluate the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#operator ApplicationAlertConfig#operator}
  */
  readonly operator: string;
  /**
  * The seasonality of the historic baseline threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#seasonality ApplicationAlertConfig#seasonality}
  */
  readonly seasonality: string;
}

export function applicationAlertConfigThresholdHistoricBaselineToTerraform(struct?: ApplicationAlertConfigThresholdHistoricBaselineOutputReference | ApplicationAlertConfigThresholdHistoricBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline: cdktf.listMapper(cdktf.listMapper(cdktf.numberToTerraform, false), false)(struct!.baseline),
    deviation_factor: cdktf.numberToTerraform(struct!.deviationFactor),
    last_updated: cdktf.numberToTerraform(struct!.lastUpdated),
    operator: cdktf.stringToTerraform(struct!.operator),
    seasonality: cdktf.stringToTerraform(struct!.seasonality),
  }
}


export function applicationAlertConfigThresholdHistoricBaselineToHclTerraform(struct?: ApplicationAlertConfigThresholdHistoricBaselineOutputReference | ApplicationAlertConfigThresholdHistoricBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.numberToHclTerraform, false), false)(struct!.baseline),
      isBlock: false,
      type: "set",
      storageClassType: "numberListList",
    },
    deviation_factor: {
      value: cdktf.numberToHclTerraform(struct!.deviationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_updated: {
      value: cdktf.numberToHclTerraform(struct!.lastUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seasonality: {
      value: cdktf.stringToHclTerraform(struct!.seasonality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigThresholdHistoricBaselineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigThresholdHistoricBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseline = this._baseline;
    }
    if (this._deviationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviationFactor = this._deviationFactor;
    }
    if (this._lastUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdated = this._lastUpdated;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._seasonality !== undefined) {
      hasAnyValues = true;
      internalValueResult.seasonality = this._seasonality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigThresholdHistoricBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseline = undefined;
      this._deviationFactor = undefined;
      this._lastUpdated = undefined;
      this._operator = undefined;
      this._seasonality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseline = value.baseline;
      this._deviationFactor = value.deviationFactor;
      this._lastUpdated = value.lastUpdated;
      this._operator = value.operator;
      this._seasonality = value.seasonality;
    }
  }

  // baseline - computed: false, optional: true, required: false
  private _baseline?: number[][] | cdktf.IResolvable; 
  public get baseline() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('baseline')));
  }
  public set baseline(value: number[][] | cdktf.IResolvable) {
    this._baseline = value;
  }
  public resetBaseline() {
    this._baseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineInput() {
    return this._baseline;
  }

  // deviation_factor - computed: false, optional: true, required: false
  private _deviationFactor?: number; 
  public get deviationFactor() {
    return this.getNumberAttribute('deviation_factor');
  }
  public set deviationFactor(value: number) {
    this._deviationFactor = value;
  }
  public resetDeviationFactor() {
    this._deviationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviationFactorInput() {
    return this._deviationFactor;
  }

  // last_updated - computed: false, optional: true, required: false
  private _lastUpdated?: number; 
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }
  public set lastUpdated(value: number) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // seasonality - computed: false, optional: false, required: true
  private _seasonality?: string; 
  public get seasonality() {
    return this.getStringAttribute('seasonality');
  }
  public set seasonality(value: string) {
    this._seasonality = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seasonalityInput() {
    return this._seasonality;
  }
}
export interface ApplicationAlertConfigThresholdStatic {
  /**
  * The last updated value of the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#last_updated ApplicationAlertConfig#last_updated}
  */
  readonly lastUpdated?: number;
  /**
  * The operator which will be applied to evaluate the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#operator ApplicationAlertConfig#operator}
  */
  readonly operator: string;
  /**
  * The value of the static threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#value ApplicationAlertConfig#value}
  */
  readonly value?: number;
}

export function applicationAlertConfigThresholdStaticToTerraform(struct?: ApplicationAlertConfigThresholdStaticOutputReference | ApplicationAlertConfigThresholdStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_updated: cdktf.numberToTerraform(struct!.lastUpdated),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function applicationAlertConfigThresholdStaticToHclTerraform(struct?: ApplicationAlertConfigThresholdStaticOutputReference | ApplicationAlertConfigThresholdStatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_updated: {
      value: cdktf.numberToHclTerraform(struct!.lastUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigThresholdStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigThresholdStatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdated = this._lastUpdated;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigThresholdStatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lastUpdated = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lastUpdated = value.lastUpdated;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // last_updated - computed: false, optional: true, required: false
  private _lastUpdated?: number; 
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }
  public set lastUpdated(value: number) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface ApplicationAlertConfigThreshold {
  /**
  * historic_baseline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#historic_baseline ApplicationAlertConfig#historic_baseline}
  */
  readonly historicBaseline?: ApplicationAlertConfigThresholdHistoricBaseline;
  /**
  * static block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#static ApplicationAlertConfig#static}
  */
  readonly static?: ApplicationAlertConfigThresholdStatic;
}

export function applicationAlertConfigThresholdToTerraform(struct?: ApplicationAlertConfigThresholdOutputReference | ApplicationAlertConfigThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    historic_baseline: applicationAlertConfigThresholdHistoricBaselineToTerraform(struct!.historicBaseline),
    static: applicationAlertConfigThresholdStaticToTerraform(struct!.static),
  }
}


export function applicationAlertConfigThresholdToHclTerraform(struct?: ApplicationAlertConfigThresholdOutputReference | ApplicationAlertConfigThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    historic_baseline: {
      value: applicationAlertConfigThresholdHistoricBaselineToHclTerraform(struct!.historicBaseline),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigThresholdHistoricBaselineList",
    },
    static: {
      value: applicationAlertConfigThresholdStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigThresholdStaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._historicBaseline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.historicBaseline = this._historicBaseline?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._historicBaseline.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._historicBaseline.internalValue = value.historicBaseline;
      this._static.internalValue = value.static;
    }
  }

  // historic_baseline - computed: false, optional: true, required: false
  private _historicBaseline = new ApplicationAlertConfigThresholdHistoricBaselineOutputReference(this, "historic_baseline");
  public get historicBaseline() {
    return this._historicBaseline;
  }
  public putHistoricBaseline(value: ApplicationAlertConfigThresholdHistoricBaseline) {
    this._historicBaseline.internalValue = value;
  }
  public resetHistoricBaseline() {
    this._historicBaseline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicBaselineInput() {
    return this._historicBaseline.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new ApplicationAlertConfigThresholdStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: ApplicationAlertConfigThresholdStatic) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface ApplicationAlertConfigTimeThresholdRequestImpact {
  /**
  * The number of requests in the given window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#requests ApplicationAlertConfig#requests}
  */
  readonly requests?: number;
  /**
  * The time window if the time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#time_window ApplicationAlertConfig#time_window}
  */
  readonly timeWindow?: number;
}

export function applicationAlertConfigTimeThresholdRequestImpactToTerraform(struct?: ApplicationAlertConfigTimeThresholdRequestImpactOutputReference | ApplicationAlertConfigTimeThresholdRequestImpact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requests: cdktf.numberToTerraform(struct!.requests),
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
  }
}


export function applicationAlertConfigTimeThresholdRequestImpactToHclTerraform(struct?: ApplicationAlertConfigTimeThresholdRequestImpactOutputReference | ApplicationAlertConfigTimeThresholdRequestImpact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requests: {
      value: cdktf.numberToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window: {
      value: cdktf.numberToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigTimeThresholdRequestImpactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigTimeThresholdRequestImpact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigTimeThresholdRequestImpact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requests = undefined;
      this._timeWindow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requests = value.requests;
      this._timeWindow = value.timeWindow;
    }
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: number; 
  public get requests() {
    return this.getNumberAttribute('requests');
  }
  public set requests(value: number) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }
}
export interface ApplicationAlertConfigTimeThresholdViolationsInPeriod {
  /**
  * The time window if the time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#time_window ApplicationAlertConfig#time_window}
  */
  readonly timeWindow?: number;
  /**
  * The violations appeared in the period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#violations ApplicationAlertConfig#violations}
  */
  readonly violations?: number;
}

export function applicationAlertConfigTimeThresholdViolationsInPeriodToTerraform(struct?: ApplicationAlertConfigTimeThresholdViolationsInPeriodOutputReference | ApplicationAlertConfigTimeThresholdViolationsInPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
    violations: cdktf.numberToTerraform(struct!.violations),
  }
}


export function applicationAlertConfigTimeThresholdViolationsInPeriodToHclTerraform(struct?: ApplicationAlertConfigTimeThresholdViolationsInPeriodOutputReference | ApplicationAlertConfigTimeThresholdViolationsInPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_window: {
      value: cdktf.numberToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violations: {
      value: cdktf.numberToHclTerraform(struct!.violations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigTimeThresholdViolationsInPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigTimeThresholdViolationsInPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._violations !== undefined) {
      hasAnyValues = true;
      internalValueResult.violations = this._violations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigTimeThresholdViolationsInPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeWindow = undefined;
      this._violations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeWindow = value.timeWindow;
      this._violations = value.violations;
    }
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // violations - computed: false, optional: true, required: false
  private _violations?: number; 
  public get violations() {
    return this.getNumberAttribute('violations');
  }
  public set violations(value: number) {
    this._violations = value;
  }
  public resetViolations() {
    this._violations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationsInput() {
    return this._violations;
  }
}
export interface ApplicationAlertConfigTimeThresholdViolationsInSequence {
  /**
  * The time window if the time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#time_window ApplicationAlertConfig#time_window}
  */
  readonly timeWindow?: number;
}

export function applicationAlertConfigTimeThresholdViolationsInSequenceToTerraform(struct?: ApplicationAlertConfigTimeThresholdViolationsInSequenceOutputReference | ApplicationAlertConfigTimeThresholdViolationsInSequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
  }
}


export function applicationAlertConfigTimeThresholdViolationsInSequenceToHclTerraform(struct?: ApplicationAlertConfigTimeThresholdViolationsInSequenceOutputReference | ApplicationAlertConfigTimeThresholdViolationsInSequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_window: {
      value: cdktf.numberToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigTimeThresholdViolationsInSequenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigTimeThresholdViolationsInSequence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigTimeThresholdViolationsInSequence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeWindow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeWindow = value.timeWindow;
    }
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }
}
export interface ApplicationAlertConfigTimeThreshold {
  /**
  * request_impact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#request_impact ApplicationAlertConfig#request_impact}
  */
  readonly requestImpact?: ApplicationAlertConfigTimeThresholdRequestImpact;
  /**
  * violations_in_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#violations_in_period ApplicationAlertConfig#violations_in_period}
  */
  readonly violationsInPeriod?: ApplicationAlertConfigTimeThresholdViolationsInPeriod;
  /**
  * violations_in_sequence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#violations_in_sequence ApplicationAlertConfig#violations_in_sequence}
  */
  readonly violationsInSequence?: ApplicationAlertConfigTimeThresholdViolationsInSequence;
}

export function applicationAlertConfigTimeThresholdToTerraform(struct?: ApplicationAlertConfigTimeThresholdOutputReference | ApplicationAlertConfigTimeThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_impact: applicationAlertConfigTimeThresholdRequestImpactToTerraform(struct!.requestImpact),
    violations_in_period: applicationAlertConfigTimeThresholdViolationsInPeriodToTerraform(struct!.violationsInPeriod),
    violations_in_sequence: applicationAlertConfigTimeThresholdViolationsInSequenceToTerraform(struct!.violationsInSequence),
  }
}


export function applicationAlertConfigTimeThresholdToHclTerraform(struct?: ApplicationAlertConfigTimeThresholdOutputReference | ApplicationAlertConfigTimeThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_impact: {
      value: applicationAlertConfigTimeThresholdRequestImpactToHclTerraform(struct!.requestImpact),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigTimeThresholdRequestImpactList",
    },
    violations_in_period: {
      value: applicationAlertConfigTimeThresholdViolationsInPeriodToHclTerraform(struct!.violationsInPeriod),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigTimeThresholdViolationsInPeriodList",
    },
    violations_in_sequence: {
      value: applicationAlertConfigTimeThresholdViolationsInSequenceToHclTerraform(struct!.violationsInSequence),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationAlertConfigTimeThresholdViolationsInSequenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAlertConfigTimeThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationAlertConfigTimeThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestImpact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestImpact = this._requestImpact?.internalValue;
    }
    if (this._violationsInPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationsInPeriod = this._violationsInPeriod?.internalValue;
    }
    if (this._violationsInSequence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.violationsInSequence = this._violationsInSequence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAlertConfigTimeThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestImpact.internalValue = undefined;
      this._violationsInPeriod.internalValue = undefined;
      this._violationsInSequence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestImpact.internalValue = value.requestImpact;
      this._violationsInPeriod.internalValue = value.violationsInPeriod;
      this._violationsInSequence.internalValue = value.violationsInSequence;
    }
  }

  // request_impact - computed: false, optional: true, required: false
  private _requestImpact = new ApplicationAlertConfigTimeThresholdRequestImpactOutputReference(this, "request_impact");
  public get requestImpact() {
    return this._requestImpact;
  }
  public putRequestImpact(value: ApplicationAlertConfigTimeThresholdRequestImpact) {
    this._requestImpact.internalValue = value;
  }
  public resetRequestImpact() {
    this._requestImpact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestImpactInput() {
    return this._requestImpact.internalValue;
  }

  // violations_in_period - computed: false, optional: true, required: false
  private _violationsInPeriod = new ApplicationAlertConfigTimeThresholdViolationsInPeriodOutputReference(this, "violations_in_period");
  public get violationsInPeriod() {
    return this._violationsInPeriod;
  }
  public putViolationsInPeriod(value: ApplicationAlertConfigTimeThresholdViolationsInPeriod) {
    this._violationsInPeriod.internalValue = value;
  }
  public resetViolationsInPeriod() {
    this._violationsInPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationsInPeriodInput() {
    return this._violationsInPeriod.internalValue;
  }

  // violations_in_sequence - computed: false, optional: true, required: false
  private _violationsInSequence = new ApplicationAlertConfigTimeThresholdViolationsInSequenceOutputReference(this, "violations_in_sequence");
  public get violationsInSequence() {
    return this._violationsInSequence;
  }
  public putViolationsInSequence(value: ApplicationAlertConfigTimeThresholdViolationsInSequence) {
    this._violationsInSequence.internalValue = value;
  }
  public resetViolationsInSequence() {
    this._violationsInSequence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationsInSequenceInput() {
    return this._violationsInSequence.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config instana_application_alert_config}
*/
export class ApplicationAlertConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_application_alert_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationAlertConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationAlertConfig to import
  * @param importFromId The id of the existing ApplicationAlertConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationAlertConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_application_alert_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/application_alert_config instana_application_alert_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationAlertConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationAlertConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_application_alert_config',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertChannelIds = config.alertChannelIds;
    this._boundaryScope = config.boundaryScope;
    this._description = config.description;
    this._evaluationType = config.evaluationType;
    this._granularity = config.granularity;
    this._id = config.id;
    this._includeInternal = config.includeInternal;
    this._includeSynthetic = config.includeSynthetic;
    this._name = config.name;
    this._severity = config.severity;
    this._tagFilter = config.tagFilter;
    this._triggering = config.triggering;
    this._application.internalValue = config.application;
    this._customPayloadField.internalValue = config.customPayloadField;
    this._rule.internalValue = config.rule;
    this._threshold.internalValue = config.threshold;
    this._timeThreshold.internalValue = config.timeThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_channel_ids - computed: false, optional: true, required: false
  private _alertChannelIds?: string[]; 
  public get alertChannelIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_channel_ids'));
  }
  public set alertChannelIds(value: string[]) {
    this._alertChannelIds = value;
  }
  public resetAlertChannelIds() {
    this._alertChannelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertChannelIdsInput() {
    return this._alertChannelIds;
  }

  // boundary_scope - computed: false, optional: false, required: true
  private _boundaryScope?: string; 
  public get boundaryScope() {
    return this.getStringAttribute('boundary_scope');
  }
  public set boundaryScope(value: string) {
    this._boundaryScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundaryScopeInput() {
    return this._boundaryScope;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // evaluation_type - computed: false, optional: false, required: true
  private _evaluationType?: string; 
  public get evaluationType() {
    return this.getStringAttribute('evaluation_type');
  }
  public set evaluationType(value: string) {
    this._evaluationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationTypeInput() {
    return this._evaluationType;
  }

  // granularity - computed: false, optional: true, required: false
  private _granularity?: number; 
  public get granularity() {
    return this.getNumberAttribute('granularity');
  }
  public set granularity(value: number) {
    this._granularity = value;
  }
  public resetGranularity() {
    this._granularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
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

  // include_internal - computed: false, optional: true, required: false
  private _includeInternal?: boolean | cdktf.IResolvable; 
  public get includeInternal() {
    return this.getBooleanAttribute('include_internal');
  }
  public set includeInternal(value: boolean | cdktf.IResolvable) {
    this._includeInternal = value;
  }
  public resetIncludeInternal() {
    this._includeInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInternalInput() {
    return this._includeInternal;
  }

  // include_synthetic - computed: false, optional: true, required: false
  private _includeSynthetic?: boolean | cdktf.IResolvable; 
  public get includeSynthetic() {
    return this.getBooleanAttribute('include_synthetic');
  }
  public set includeSynthetic(value: boolean | cdktf.IResolvable) {
    this._includeSynthetic = value;
  }
  public resetIncludeSynthetic() {
    this._includeSynthetic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSyntheticInput() {
    return this._includeSynthetic;
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

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

  // triggering - computed: false, optional: true, required: false
  private _triggering?: boolean | cdktf.IResolvable; 
  public get triggering() {
    return this.getBooleanAttribute('triggering');
  }
  public set triggering(value: boolean | cdktf.IResolvable) {
    this._triggering = value;
  }
  public resetTriggering() {
    this._triggering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeringInput() {
    return this._triggering;
  }

  // application - computed: false, optional: false, required: true
  private _application = new ApplicationAlertConfigApplicationList(this, "application", true);
  public get application() {
    return this._application;
  }
  public putApplication(value: ApplicationAlertConfigApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // custom_payload_field - computed: false, optional: true, required: false
  private _customPayloadField = new ApplicationAlertConfigCustomPayloadFieldList(this, "custom_payload_field", true);
  public get customPayloadField() {
    return this._customPayloadField;
  }
  public putCustomPayloadField(value: ApplicationAlertConfigCustomPayloadField[] | cdktf.IResolvable) {
    this._customPayloadField.internalValue = value;
  }
  public resetCustomPayloadField() {
    this._customPayloadField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadFieldInput() {
    return this._customPayloadField.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new ApplicationAlertConfigRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: ApplicationAlertConfigRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold = new ApplicationAlertConfigThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: ApplicationAlertConfigThreshold) {
    this._threshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // time_threshold - computed: false, optional: false, required: true
  private _timeThreshold = new ApplicationAlertConfigTimeThresholdOutputReference(this, "time_threshold");
  public get timeThreshold() {
    return this._timeThreshold;
  }
  public putTimeThreshold(value: ApplicationAlertConfigTimeThreshold) {
    this._timeThreshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeThresholdInput() {
    return this._timeThreshold.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_channel_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertChannelIds),
      boundary_scope: cdktf.stringToTerraform(this._boundaryScope),
      description: cdktf.stringToTerraform(this._description),
      evaluation_type: cdktf.stringToTerraform(this._evaluationType),
      granularity: cdktf.numberToTerraform(this._granularity),
      id: cdktf.stringToTerraform(this._id),
      include_internal: cdktf.booleanToTerraform(this._includeInternal),
      include_synthetic: cdktf.booleanToTerraform(this._includeSynthetic),
      name: cdktf.stringToTerraform(this._name),
      severity: cdktf.stringToTerraform(this._severity),
      tag_filter: cdktf.stringToTerraform(this._tagFilter),
      triggering: cdktf.booleanToTerraform(this._triggering),
      application: cdktf.listMapper(applicationAlertConfigApplicationToTerraform, true)(this._application.internalValue),
      custom_payload_field: cdktf.listMapper(applicationAlertConfigCustomPayloadFieldToTerraform, true)(this._customPayloadField.internalValue),
      rule: applicationAlertConfigRuleToTerraform(this._rule.internalValue),
      threshold: applicationAlertConfigThresholdToTerraform(this._threshold.internalValue),
      time_threshold: applicationAlertConfigTimeThresholdToTerraform(this._timeThreshold.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_channel_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertChannelIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      boundary_scope: {
        value: cdktf.stringToHclTerraform(this._boundaryScope),
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
      evaluation_type: {
        value: cdktf.stringToHclTerraform(this._evaluationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granularity: {
        value: cdktf.numberToHclTerraform(this._granularity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_internal: {
        value: cdktf.booleanToHclTerraform(this._includeInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_synthetic: {
        value: cdktf.booleanToHclTerraform(this._includeSynthetic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_filter: {
        value: cdktf.stringToHclTerraform(this._tagFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggering: {
        value: cdktf.booleanToHclTerraform(this._triggering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application: {
        value: cdktf.listMapperHcl(applicationAlertConfigApplicationToHclTerraform, true)(this._application.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationAlertConfigApplicationList",
      },
      custom_payload_field: {
        value: cdktf.listMapperHcl(applicationAlertConfigCustomPayloadFieldToHclTerraform, true)(this._customPayloadField.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationAlertConfigCustomPayloadFieldList",
      },
      rule: {
        value: applicationAlertConfigRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationAlertConfigRuleList",
      },
      threshold: {
        value: applicationAlertConfigThresholdToHclTerraform(this._threshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationAlertConfigThresholdList",
      },
      time_threshold: {
        value: applicationAlertConfigTimeThresholdToHclTerraform(this._timeThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationAlertConfigTimeThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
