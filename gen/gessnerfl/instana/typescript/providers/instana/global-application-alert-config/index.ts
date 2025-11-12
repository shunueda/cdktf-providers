// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalApplicationAlertConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of IDs of alert channels defined in Instana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#alert_channel_ids GlobalApplicationAlertConfig#alert_channel_ids}
  */
  readonly alertChannelIds?: string[];
  /**
  * The boundary scope of the application alert config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#boundary_scope GlobalApplicationAlertConfig#boundary_scope}
  */
  readonly boundaryScope: string;
  /**
  * The description text of the application alert config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#description GlobalApplicationAlertConfig#description}
  */
  readonly description: string;
  /**
  * The evaluation type of the application alert config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#evaluation_type GlobalApplicationAlertConfig#evaluation_type}
  */
  readonly evaluationType: string;
  /**
  * The evaluation granularity used for detection of violations of the defined threshold. In other words, it defines the size of the tumbling window used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#granularity GlobalApplicationAlertConfig#granularity}
  */
  readonly granularity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#id GlobalApplicationAlertConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional flag to indicate whether also internal calls are included in the scope or not. The default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#include_internal GlobalApplicationAlertConfig#include_internal}
  */
  readonly includeInternal?: boolean | cdktf.IResolvable;
  /**
  * Optional flag to indicate whether also synthetic calls are included in the scope or not. The default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#include_synthetic GlobalApplicationAlertConfig#include_synthetic}
  */
  readonly includeSynthetic?: boolean | cdktf.IResolvable;
  /**
  * Name for the application alert configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#name GlobalApplicationAlertConfig#name}
  */
  readonly name: string;
  /**
  * The severity of the alert when triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#severity GlobalApplicationAlertConfig#severity}
  */
  readonly severity: string;
  /**
  * The tag filter expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#tag_filter GlobalApplicationAlertConfig#tag_filter}
  */
  readonly tagFilter?: string;
  /**
  * Optional flag to indicate whether also an Incident is triggered or not. The default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#triggering GlobalApplicationAlertConfig#triggering}
  */
  readonly triggering?: boolean | cdktf.IResolvable;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#application GlobalApplicationAlertConfig#application}
  */
  readonly application: GlobalApplicationAlertConfigApplication[] | cdktf.IResolvable;
  /**
  * custom_payload_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#custom_payload_field GlobalApplicationAlertConfig#custom_payload_field}
  */
  readonly customPayloadField?: GlobalApplicationAlertConfigCustomPayloadField[] | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#rule GlobalApplicationAlertConfig#rule}
  */
  readonly rule: GlobalApplicationAlertConfigRule;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#threshold GlobalApplicationAlertConfig#threshold}
  */
  readonly threshold: GlobalApplicationAlertConfigThreshold;
  /**
  * time_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#time_threshold GlobalApplicationAlertConfig#time_threshold}
  */
  readonly timeThreshold: GlobalApplicationAlertConfigTimeThreshold;
}
export interface GlobalApplicationAlertConfigApplicationServiceEndpoint {
  /**
  * ID of the included endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#endpoint_id GlobalApplicationAlertConfig#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * Defines whether this node and his child nodes are included (true) or excluded (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#inclusive GlobalApplicationAlertConfig#inclusive}
  */
  readonly inclusive: boolean | cdktf.IResolvable;
}

export function globalApplicationAlertConfigApplicationServiceEndpointToTerraform(struct?: GlobalApplicationAlertConfigApplicationServiceEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
    inclusive: cdktf.booleanToTerraform(struct!.inclusive),
  }
}


export function globalApplicationAlertConfigApplicationServiceEndpointToHclTerraform(struct?: GlobalApplicationAlertConfigApplicationServiceEndpoint | cdktf.IResolvable): any {
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

export class GlobalApplicationAlertConfigApplicationServiceEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalApplicationAlertConfigApplicationServiceEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigApplicationServiceEndpoint | cdktf.IResolvable | undefined) {
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

export class GlobalApplicationAlertConfigApplicationServiceEndpointList extends cdktf.ComplexList {
  public internalValue? : GlobalApplicationAlertConfigApplicationServiceEndpoint[] | cdktf.IResolvable

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
  public get(index: number): GlobalApplicationAlertConfigApplicationServiceEndpointOutputReference {
    return new GlobalApplicationAlertConfigApplicationServiceEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalApplicationAlertConfigApplicationService {
  /**
  * Defines whether this node and his child nodes are included (true) or excluded (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#inclusive GlobalApplicationAlertConfig#inclusive}
  */
  readonly inclusive: boolean | cdktf.IResolvable;
  /**
  * ID of the included service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#service_id GlobalApplicationAlertConfig#service_id}
  */
  readonly serviceId: string;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#endpoint GlobalApplicationAlertConfig#endpoint}
  */
  readonly endpoint?: GlobalApplicationAlertConfigApplicationServiceEndpoint[] | cdktf.IResolvable;
}

export function globalApplicationAlertConfigApplicationServiceToTerraform(struct?: GlobalApplicationAlertConfigApplicationService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inclusive: cdktf.booleanToTerraform(struct!.inclusive),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    endpoint: cdktf.listMapper(globalApplicationAlertConfigApplicationServiceEndpointToTerraform, true)(struct!.endpoint),
  }
}


export function globalApplicationAlertConfigApplicationServiceToHclTerraform(struct?: GlobalApplicationAlertConfigApplicationService | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(globalApplicationAlertConfigApplicationServiceEndpointToHclTerraform, true)(struct!.endpoint),
      isBlock: true,
      type: "set",
      storageClassType: "GlobalApplicationAlertConfigApplicationServiceEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalApplicationAlertConfigApplicationServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalApplicationAlertConfigApplicationService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigApplicationService | cdktf.IResolvable | undefined) {
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
  private _endpoint = new GlobalApplicationAlertConfigApplicationServiceEndpointList(this, "endpoint", true);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: GlobalApplicationAlertConfigApplicationServiceEndpoint[] | cdktf.IResolvable) {
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

export class GlobalApplicationAlertConfigApplicationServiceList extends cdktf.ComplexList {
  public internalValue? : GlobalApplicationAlertConfigApplicationService[] | cdktf.IResolvable

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
  public get(index: number): GlobalApplicationAlertConfigApplicationServiceOutputReference {
    return new GlobalApplicationAlertConfigApplicationServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalApplicationAlertConfigApplication {
  /**
  * ID of the included application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#application_id GlobalApplicationAlertConfig#application_id}
  */
  readonly applicationId: string;
  /**
  * Defines whether this node and his child nodes are included (true) or excluded (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#inclusive GlobalApplicationAlertConfig#inclusive}
  */
  readonly inclusive: boolean | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#service GlobalApplicationAlertConfig#service}
  */
  readonly service?: GlobalApplicationAlertConfigApplicationService[] | cdktf.IResolvable;
}

export function globalApplicationAlertConfigApplicationToTerraform(struct?: GlobalApplicationAlertConfigApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    inclusive: cdktf.booleanToTerraform(struct!.inclusive),
    service: cdktf.listMapper(globalApplicationAlertConfigApplicationServiceToTerraform, true)(struct!.service),
  }
}


export function globalApplicationAlertConfigApplicationToHclTerraform(struct?: GlobalApplicationAlertConfigApplication | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(globalApplicationAlertConfigApplicationServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "set",
      storageClassType: "GlobalApplicationAlertConfigApplicationServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalApplicationAlertConfigApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalApplicationAlertConfigApplication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigApplication | cdktf.IResolvable | undefined) {
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
  private _service = new GlobalApplicationAlertConfigApplicationServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: GlobalApplicationAlertConfigApplicationService[] | cdktf.IResolvable) {
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

export class GlobalApplicationAlertConfigApplicationList extends cdktf.ComplexList {
  public internalValue? : GlobalApplicationAlertConfigApplication[] | cdktf.IResolvable

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
  public get(index: number): GlobalApplicationAlertConfigApplicationOutputReference {
    return new GlobalApplicationAlertConfigApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalApplicationAlertConfigCustomPayloadFieldDynamicValue {
  /**
  * The key of the dynamic custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#key GlobalApplicationAlertConfig#key}
  */
  readonly key?: string;
  /**
  * The name of the tag of the dynamic custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#tag_name GlobalApplicationAlertConfig#tag_name}
  */
  readonly tagName: string;
}

export function globalApplicationAlertConfigCustomPayloadFieldDynamicValueToTerraform(struct?: GlobalApplicationAlertConfigCustomPayloadFieldDynamicValueOutputReference | GlobalApplicationAlertConfigCustomPayloadFieldDynamicValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function globalApplicationAlertConfigCustomPayloadFieldDynamicValueToHclTerraform(struct?: GlobalApplicationAlertConfigCustomPayloadFieldDynamicValueOutputReference | GlobalApplicationAlertConfigCustomPayloadFieldDynamicValue): any {
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

export class GlobalApplicationAlertConfigCustomPayloadFieldDynamicValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigCustomPayloadFieldDynamicValue | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigCustomPayloadFieldDynamicValue | undefined) {
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
export interface GlobalApplicationAlertConfigCustomPayloadField {
  /**
  * The key of the custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#key GlobalApplicationAlertConfig#key}
  */
  readonly key: string;
  /**
  * The value of a static string custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#value GlobalApplicationAlertConfig#value}
  */
  readonly value?: string;
  /**
  * dynamic_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#dynamic_value GlobalApplicationAlertConfig#dynamic_value}
  */
  readonly dynamicValue?: GlobalApplicationAlertConfigCustomPayloadFieldDynamicValue;
}

export function globalApplicationAlertConfigCustomPayloadFieldToTerraform(struct?: GlobalApplicationAlertConfigCustomPayloadField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    dynamic_value: globalApplicationAlertConfigCustomPayloadFieldDynamicValueToTerraform(struct!.dynamicValue),
  }
}


export function globalApplicationAlertConfigCustomPayloadFieldToHclTerraform(struct?: GlobalApplicationAlertConfigCustomPayloadField | cdktf.IResolvable): any {
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
      value: globalApplicationAlertConfigCustomPayloadFieldDynamicValueToHclTerraform(struct!.dynamicValue),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigCustomPayloadFieldDynamicValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalApplicationAlertConfigCustomPayloadFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalApplicationAlertConfigCustomPayloadField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigCustomPayloadField | cdktf.IResolvable | undefined) {
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
  private _dynamicValue = new GlobalApplicationAlertConfigCustomPayloadFieldDynamicValueOutputReference(this, "dynamic_value");
  public get dynamicValue() {
    return this._dynamicValue;
  }
  public putDynamicValue(value: GlobalApplicationAlertConfigCustomPayloadFieldDynamicValue) {
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

export class GlobalApplicationAlertConfigCustomPayloadFieldList extends cdktf.ComplexList {
  public internalValue? : GlobalApplicationAlertConfigCustomPayloadField[] | cdktf.IResolvable

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
  public get(index: number): GlobalApplicationAlertConfigCustomPayloadFieldOutputReference {
    return new GlobalApplicationAlertConfigCustomPayloadFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalApplicationAlertConfigRuleErrorRate {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#aggregation GlobalApplicationAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#metric_name GlobalApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
}

export function globalApplicationAlertConfigRuleErrorRateToTerraform(struct?: GlobalApplicationAlertConfigRuleErrorRateOutputReference | GlobalApplicationAlertConfigRuleErrorRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function globalApplicationAlertConfigRuleErrorRateToHclTerraform(struct?: GlobalApplicationAlertConfigRuleErrorRateOutputReference | GlobalApplicationAlertConfigRuleErrorRate): any {
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

export class GlobalApplicationAlertConfigRuleErrorRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigRuleErrorRate | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigRuleErrorRate | undefined) {
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
export interface GlobalApplicationAlertConfigRuleErrors {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#aggregation GlobalApplicationAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#metric_name GlobalApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
}

export function globalApplicationAlertConfigRuleErrorsToTerraform(struct?: GlobalApplicationAlertConfigRuleErrorsOutputReference | GlobalApplicationAlertConfigRuleErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function globalApplicationAlertConfigRuleErrorsToHclTerraform(struct?: GlobalApplicationAlertConfigRuleErrorsOutputReference | GlobalApplicationAlertConfigRuleErrors): any {
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

export class GlobalApplicationAlertConfigRuleErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigRuleErrors | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigRuleErrors | undefined) {
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
export interface GlobalApplicationAlertConfigRuleLogs {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#aggregation GlobalApplicationAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The log level for which this rule applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#level GlobalApplicationAlertConfig#level}
  */
  readonly level: string;
  /**
  * The log message for which this rule applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#message GlobalApplicationAlertConfig#message}
  */
  readonly message?: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#metric_name GlobalApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
  /**
  * The operator which will be applied to evaluate this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#operator GlobalApplicationAlertConfig#operator}
  */
  readonly operator: string;
}

export function globalApplicationAlertConfigRuleLogsToTerraform(struct?: GlobalApplicationAlertConfigRuleLogsOutputReference | GlobalApplicationAlertConfigRuleLogs): any {
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


export function globalApplicationAlertConfigRuleLogsToHclTerraform(struct?: GlobalApplicationAlertConfigRuleLogsOutputReference | GlobalApplicationAlertConfigRuleLogs): any {
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

export class GlobalApplicationAlertConfigRuleLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigRuleLogs | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigRuleLogs | undefined) {
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
export interface GlobalApplicationAlertConfigRuleSlowness {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#aggregation GlobalApplicationAlertConfig#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#metric_name GlobalApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
}

export function globalApplicationAlertConfigRuleSlownessToTerraform(struct?: GlobalApplicationAlertConfigRuleSlownessOutputReference | GlobalApplicationAlertConfigRuleSlowness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function globalApplicationAlertConfigRuleSlownessToHclTerraform(struct?: GlobalApplicationAlertConfigRuleSlownessOutputReference | GlobalApplicationAlertConfigRuleSlowness): any {
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

export class GlobalApplicationAlertConfigRuleSlownessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigRuleSlowness | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigRuleSlowness | undefined) {
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
export interface GlobalApplicationAlertConfigRuleStatusCode {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#aggregation GlobalApplicationAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#metric_name GlobalApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
  /**
  * maximum HTTP status code applied for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#status_code_end GlobalApplicationAlertConfig#status_code_end}
  */
  readonly statusCodeEnd?: number;
  /**
  * minimal HTTP status code applied for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#status_code_start GlobalApplicationAlertConfig#status_code_start}
  */
  readonly statusCodeStart?: number;
}

export function globalApplicationAlertConfigRuleStatusCodeToTerraform(struct?: GlobalApplicationAlertConfigRuleStatusCodeOutputReference | GlobalApplicationAlertConfigRuleStatusCode): any {
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


export function globalApplicationAlertConfigRuleStatusCodeToHclTerraform(struct?: GlobalApplicationAlertConfigRuleStatusCodeOutputReference | GlobalApplicationAlertConfigRuleStatusCode): any {
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

export class GlobalApplicationAlertConfigRuleStatusCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigRuleStatusCode | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigRuleStatusCode | undefined) {
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
export interface GlobalApplicationAlertConfigRuleThroughput {
  /**
  * The aggregation function of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#aggregation GlobalApplicationAlertConfig#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The metric name of the application alert rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#metric_name GlobalApplicationAlertConfig#metric_name}
  */
  readonly metricName: string;
}

export function globalApplicationAlertConfigRuleThroughputToTerraform(struct?: GlobalApplicationAlertConfigRuleThroughputOutputReference | GlobalApplicationAlertConfigRuleThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
  }
}


export function globalApplicationAlertConfigRuleThroughputToHclTerraform(struct?: GlobalApplicationAlertConfigRuleThroughputOutputReference | GlobalApplicationAlertConfigRuleThroughput): any {
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

export class GlobalApplicationAlertConfigRuleThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigRuleThroughput | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigRuleThroughput | undefined) {
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
export interface GlobalApplicationAlertConfigRule {
  /**
  * error_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#error_rate GlobalApplicationAlertConfig#error_rate}
  */
  readonly errorRate?: GlobalApplicationAlertConfigRuleErrorRate;
  /**
  * errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#errors GlobalApplicationAlertConfig#errors}
  */
  readonly errors?: GlobalApplicationAlertConfigRuleErrors;
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#logs GlobalApplicationAlertConfig#logs}
  */
  readonly logs?: GlobalApplicationAlertConfigRuleLogs;
  /**
  * slowness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#slowness GlobalApplicationAlertConfig#slowness}
  */
  readonly slowness?: GlobalApplicationAlertConfigRuleSlowness;
  /**
  * status_code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#status_code GlobalApplicationAlertConfig#status_code}
  */
  readonly statusCode?: GlobalApplicationAlertConfigRuleStatusCode;
  /**
  * throughput block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#throughput GlobalApplicationAlertConfig#throughput}
  */
  readonly throughput?: GlobalApplicationAlertConfigRuleThroughput;
}

export function globalApplicationAlertConfigRuleToTerraform(struct?: GlobalApplicationAlertConfigRuleOutputReference | GlobalApplicationAlertConfigRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_rate: globalApplicationAlertConfigRuleErrorRateToTerraform(struct!.errorRate),
    errors: globalApplicationAlertConfigRuleErrorsToTerraform(struct!.errors),
    logs: globalApplicationAlertConfigRuleLogsToTerraform(struct!.logs),
    slowness: globalApplicationAlertConfigRuleSlownessToTerraform(struct!.slowness),
    status_code: globalApplicationAlertConfigRuleStatusCodeToTerraform(struct!.statusCode),
    throughput: globalApplicationAlertConfigRuleThroughputToTerraform(struct!.throughput),
  }
}


export function globalApplicationAlertConfigRuleToHclTerraform(struct?: GlobalApplicationAlertConfigRuleOutputReference | GlobalApplicationAlertConfigRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_rate: {
      value: globalApplicationAlertConfigRuleErrorRateToHclTerraform(struct!.errorRate),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigRuleErrorRateList",
    },
    errors: {
      value: globalApplicationAlertConfigRuleErrorsToHclTerraform(struct!.errors),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigRuleErrorsList",
    },
    logs: {
      value: globalApplicationAlertConfigRuleLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigRuleLogsList",
    },
    slowness: {
      value: globalApplicationAlertConfigRuleSlownessToHclTerraform(struct!.slowness),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigRuleSlownessList",
    },
    status_code: {
      value: globalApplicationAlertConfigRuleStatusCodeToHclTerraform(struct!.statusCode),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigRuleStatusCodeList",
    },
    throughput: {
      value: globalApplicationAlertConfigRuleThroughputToHclTerraform(struct!.throughput),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigRuleThroughputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalApplicationAlertConfigRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigRule | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigRule | undefined) {
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
  private _errorRate = new GlobalApplicationAlertConfigRuleErrorRateOutputReference(this, "error_rate");
  public get errorRate() {
    return this._errorRate;
  }
  public putErrorRate(value: GlobalApplicationAlertConfigRuleErrorRate) {
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
  private _errors = new GlobalApplicationAlertConfigRuleErrorsOutputReference(this, "errors");
  public get errors() {
    return this._errors;
  }
  public putErrors(value: GlobalApplicationAlertConfigRuleErrors) {
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
  private _logs = new GlobalApplicationAlertConfigRuleLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: GlobalApplicationAlertConfigRuleLogs) {
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
  private _slowness = new GlobalApplicationAlertConfigRuleSlownessOutputReference(this, "slowness");
  public get slowness() {
    return this._slowness;
  }
  public putSlowness(value: GlobalApplicationAlertConfigRuleSlowness) {
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
  private _statusCode = new GlobalApplicationAlertConfigRuleStatusCodeOutputReference(this, "status_code");
  public get statusCode() {
    return this._statusCode;
  }
  public putStatusCode(value: GlobalApplicationAlertConfigRuleStatusCode) {
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
  private _throughput = new GlobalApplicationAlertConfigRuleThroughputOutputReference(this, "throughput");
  public get throughput() {
    return this._throughput;
  }
  public putThroughput(value: GlobalApplicationAlertConfigRuleThroughput) {
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
export interface GlobalApplicationAlertConfigThresholdHistoricBaseline {
  /**
  * The baseline of the historic baseline threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#baseline GlobalApplicationAlertConfig#baseline}
  */
  readonly baseline?: number[][] | cdktf.IResolvable;
  /**
  * The baseline of the historic baseline threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#deviation_factor GlobalApplicationAlertConfig#deviation_factor}
  */
  readonly deviationFactor?: number;
  /**
  * The last updated value of the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#last_updated GlobalApplicationAlertConfig#last_updated}
  */
  readonly lastUpdated?: number;
  /**
  * The operator which will be applied to evaluate the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#operator GlobalApplicationAlertConfig#operator}
  */
  readonly operator: string;
  /**
  * The seasonality of the historic baseline threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#seasonality GlobalApplicationAlertConfig#seasonality}
  */
  readonly seasonality: string;
}

export function globalApplicationAlertConfigThresholdHistoricBaselineToTerraform(struct?: GlobalApplicationAlertConfigThresholdHistoricBaselineOutputReference | GlobalApplicationAlertConfigThresholdHistoricBaseline): any {
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


export function globalApplicationAlertConfigThresholdHistoricBaselineToHclTerraform(struct?: GlobalApplicationAlertConfigThresholdHistoricBaselineOutputReference | GlobalApplicationAlertConfigThresholdHistoricBaseline): any {
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

export class GlobalApplicationAlertConfigThresholdHistoricBaselineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigThresholdHistoricBaseline | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigThresholdHistoricBaseline | undefined) {
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
export interface GlobalApplicationAlertConfigThresholdStatic {
  /**
  * The last updated value of the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#last_updated GlobalApplicationAlertConfig#last_updated}
  */
  readonly lastUpdated?: number;
  /**
  * The operator which will be applied to evaluate the threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#operator GlobalApplicationAlertConfig#operator}
  */
  readonly operator: string;
  /**
  * The value of the static threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#value GlobalApplicationAlertConfig#value}
  */
  readonly value?: number;
}

export function globalApplicationAlertConfigThresholdStaticToTerraform(struct?: GlobalApplicationAlertConfigThresholdStaticOutputReference | GlobalApplicationAlertConfigThresholdStatic): any {
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


export function globalApplicationAlertConfigThresholdStaticToHclTerraform(struct?: GlobalApplicationAlertConfigThresholdStaticOutputReference | GlobalApplicationAlertConfigThresholdStatic): any {
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

export class GlobalApplicationAlertConfigThresholdStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigThresholdStatic | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigThresholdStatic | undefined) {
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
export interface GlobalApplicationAlertConfigThreshold {
  /**
  * historic_baseline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#historic_baseline GlobalApplicationAlertConfig#historic_baseline}
  */
  readonly historicBaseline?: GlobalApplicationAlertConfigThresholdHistoricBaseline;
  /**
  * static block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#static GlobalApplicationAlertConfig#static}
  */
  readonly static?: GlobalApplicationAlertConfigThresholdStatic;
}

export function globalApplicationAlertConfigThresholdToTerraform(struct?: GlobalApplicationAlertConfigThresholdOutputReference | GlobalApplicationAlertConfigThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    historic_baseline: globalApplicationAlertConfigThresholdHistoricBaselineToTerraform(struct!.historicBaseline),
    static: globalApplicationAlertConfigThresholdStaticToTerraform(struct!.static),
  }
}


export function globalApplicationAlertConfigThresholdToHclTerraform(struct?: GlobalApplicationAlertConfigThresholdOutputReference | GlobalApplicationAlertConfigThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    historic_baseline: {
      value: globalApplicationAlertConfigThresholdHistoricBaselineToHclTerraform(struct!.historicBaseline),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigThresholdHistoricBaselineList",
    },
    static: {
      value: globalApplicationAlertConfigThresholdStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigThresholdStaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalApplicationAlertConfigThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigThreshold | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigThreshold | undefined) {
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
  private _historicBaseline = new GlobalApplicationAlertConfigThresholdHistoricBaselineOutputReference(this, "historic_baseline");
  public get historicBaseline() {
    return this._historicBaseline;
  }
  public putHistoricBaseline(value: GlobalApplicationAlertConfigThresholdHistoricBaseline) {
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
  private _static = new GlobalApplicationAlertConfigThresholdStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: GlobalApplicationAlertConfigThresholdStatic) {
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
export interface GlobalApplicationAlertConfigTimeThresholdRequestImpact {
  /**
  * The number of requests in the given window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#requests GlobalApplicationAlertConfig#requests}
  */
  readonly requests?: number;
  /**
  * The time window if the time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#time_window GlobalApplicationAlertConfig#time_window}
  */
  readonly timeWindow?: number;
}

export function globalApplicationAlertConfigTimeThresholdRequestImpactToTerraform(struct?: GlobalApplicationAlertConfigTimeThresholdRequestImpactOutputReference | GlobalApplicationAlertConfigTimeThresholdRequestImpact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requests: cdktf.numberToTerraform(struct!.requests),
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
  }
}


export function globalApplicationAlertConfigTimeThresholdRequestImpactToHclTerraform(struct?: GlobalApplicationAlertConfigTimeThresholdRequestImpactOutputReference | GlobalApplicationAlertConfigTimeThresholdRequestImpact): any {
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

export class GlobalApplicationAlertConfigTimeThresholdRequestImpactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigTimeThresholdRequestImpact | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigTimeThresholdRequestImpact | undefined) {
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
export interface GlobalApplicationAlertConfigTimeThresholdViolationsInPeriod {
  /**
  * The time window if the time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#time_window GlobalApplicationAlertConfig#time_window}
  */
  readonly timeWindow?: number;
  /**
  * The violations appeared in the period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#violations GlobalApplicationAlertConfig#violations}
  */
  readonly violations?: number;
}

export function globalApplicationAlertConfigTimeThresholdViolationsInPeriodToTerraform(struct?: GlobalApplicationAlertConfigTimeThresholdViolationsInPeriodOutputReference | GlobalApplicationAlertConfigTimeThresholdViolationsInPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
    violations: cdktf.numberToTerraform(struct!.violations),
  }
}


export function globalApplicationAlertConfigTimeThresholdViolationsInPeriodToHclTerraform(struct?: GlobalApplicationAlertConfigTimeThresholdViolationsInPeriodOutputReference | GlobalApplicationAlertConfigTimeThresholdViolationsInPeriod): any {
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

export class GlobalApplicationAlertConfigTimeThresholdViolationsInPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigTimeThresholdViolationsInPeriod | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigTimeThresholdViolationsInPeriod | undefined) {
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
export interface GlobalApplicationAlertConfigTimeThresholdViolationsInSequence {
  /**
  * The time window if the time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#time_window GlobalApplicationAlertConfig#time_window}
  */
  readonly timeWindow?: number;
}

export function globalApplicationAlertConfigTimeThresholdViolationsInSequenceToTerraform(struct?: GlobalApplicationAlertConfigTimeThresholdViolationsInSequenceOutputReference | GlobalApplicationAlertConfigTimeThresholdViolationsInSequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
  }
}


export function globalApplicationAlertConfigTimeThresholdViolationsInSequenceToHclTerraform(struct?: GlobalApplicationAlertConfigTimeThresholdViolationsInSequenceOutputReference | GlobalApplicationAlertConfigTimeThresholdViolationsInSequence): any {
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

export class GlobalApplicationAlertConfigTimeThresholdViolationsInSequenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigTimeThresholdViolationsInSequence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalApplicationAlertConfigTimeThresholdViolationsInSequence | undefined) {
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
export interface GlobalApplicationAlertConfigTimeThreshold {
  /**
  * request_impact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#request_impact GlobalApplicationAlertConfig#request_impact}
  */
  readonly requestImpact?: GlobalApplicationAlertConfigTimeThresholdRequestImpact;
  /**
  * violations_in_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#violations_in_period GlobalApplicationAlertConfig#violations_in_period}
  */
  readonly violationsInPeriod?: GlobalApplicationAlertConfigTimeThresholdViolationsInPeriod;
  /**
  * violations_in_sequence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#violations_in_sequence GlobalApplicationAlertConfig#violations_in_sequence}
  */
  readonly violationsInSequence?: GlobalApplicationAlertConfigTimeThresholdViolationsInSequence;
}

export function globalApplicationAlertConfigTimeThresholdToTerraform(struct?: GlobalApplicationAlertConfigTimeThresholdOutputReference | GlobalApplicationAlertConfigTimeThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_impact: globalApplicationAlertConfigTimeThresholdRequestImpactToTerraform(struct!.requestImpact),
    violations_in_period: globalApplicationAlertConfigTimeThresholdViolationsInPeriodToTerraform(struct!.violationsInPeriod),
    violations_in_sequence: globalApplicationAlertConfigTimeThresholdViolationsInSequenceToTerraform(struct!.violationsInSequence),
  }
}


export function globalApplicationAlertConfigTimeThresholdToHclTerraform(struct?: GlobalApplicationAlertConfigTimeThresholdOutputReference | GlobalApplicationAlertConfigTimeThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_impact: {
      value: globalApplicationAlertConfigTimeThresholdRequestImpactToHclTerraform(struct!.requestImpact),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigTimeThresholdRequestImpactList",
    },
    violations_in_period: {
      value: globalApplicationAlertConfigTimeThresholdViolationsInPeriodToHclTerraform(struct!.violationsInPeriod),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigTimeThresholdViolationsInPeriodList",
    },
    violations_in_sequence: {
      value: globalApplicationAlertConfigTimeThresholdViolationsInSequenceToHclTerraform(struct!.violationsInSequence),
      isBlock: true,
      type: "list",
      storageClassType: "GlobalApplicationAlertConfigTimeThresholdViolationsInSequenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalApplicationAlertConfigTimeThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalApplicationAlertConfigTimeThreshold | undefined {
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

  public set internalValue(value: GlobalApplicationAlertConfigTimeThreshold | undefined) {
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
  private _requestImpact = new GlobalApplicationAlertConfigTimeThresholdRequestImpactOutputReference(this, "request_impact");
  public get requestImpact() {
    return this._requestImpact;
  }
  public putRequestImpact(value: GlobalApplicationAlertConfigTimeThresholdRequestImpact) {
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
  private _violationsInPeriod = new GlobalApplicationAlertConfigTimeThresholdViolationsInPeriodOutputReference(this, "violations_in_period");
  public get violationsInPeriod() {
    return this._violationsInPeriod;
  }
  public putViolationsInPeriod(value: GlobalApplicationAlertConfigTimeThresholdViolationsInPeriod) {
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
  private _violationsInSequence = new GlobalApplicationAlertConfigTimeThresholdViolationsInSequenceOutputReference(this, "violations_in_sequence");
  public get violationsInSequence() {
    return this._violationsInSequence;
  }
  public putViolationsInSequence(value: GlobalApplicationAlertConfigTimeThresholdViolationsInSequence) {
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
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config instana_global_application_alert_config}
*/
export class GlobalApplicationAlertConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_global_application_alert_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalApplicationAlertConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalApplicationAlertConfig to import
  * @param importFromId The id of the existing GlobalApplicationAlertConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalApplicationAlertConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_global_application_alert_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/global_application_alert_config instana_global_application_alert_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalApplicationAlertConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalApplicationAlertConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_global_application_alert_config',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
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
  private _application = new GlobalApplicationAlertConfigApplicationList(this, "application", true);
  public get application() {
    return this._application;
  }
  public putApplication(value: GlobalApplicationAlertConfigApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // custom_payload_field - computed: false, optional: true, required: false
  private _customPayloadField = new GlobalApplicationAlertConfigCustomPayloadFieldList(this, "custom_payload_field", true);
  public get customPayloadField() {
    return this._customPayloadField;
  }
  public putCustomPayloadField(value: GlobalApplicationAlertConfigCustomPayloadField[] | cdktf.IResolvable) {
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
  private _rule = new GlobalApplicationAlertConfigRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: GlobalApplicationAlertConfigRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold = new GlobalApplicationAlertConfigThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: GlobalApplicationAlertConfigThreshold) {
    this._threshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // time_threshold - computed: false, optional: false, required: true
  private _timeThreshold = new GlobalApplicationAlertConfigTimeThresholdOutputReference(this, "time_threshold");
  public get timeThreshold() {
    return this._timeThreshold;
  }
  public putTimeThreshold(value: GlobalApplicationAlertConfigTimeThreshold) {
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
      application: cdktf.listMapper(globalApplicationAlertConfigApplicationToTerraform, true)(this._application.internalValue),
      custom_payload_field: cdktf.listMapper(globalApplicationAlertConfigCustomPayloadFieldToTerraform, true)(this._customPayloadField.internalValue),
      rule: globalApplicationAlertConfigRuleToTerraform(this._rule.internalValue),
      threshold: globalApplicationAlertConfigThresholdToTerraform(this._threshold.internalValue),
      time_threshold: globalApplicationAlertConfigTimeThresholdToTerraform(this._timeThreshold.internalValue),
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
        value: cdktf.listMapperHcl(globalApplicationAlertConfigApplicationToHclTerraform, true)(this._application.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GlobalApplicationAlertConfigApplicationList",
      },
      custom_payload_field: {
        value: cdktf.listMapperHcl(globalApplicationAlertConfigCustomPayloadFieldToHclTerraform, true)(this._customPayloadField.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GlobalApplicationAlertConfigCustomPayloadFieldList",
      },
      rule: {
        value: globalApplicationAlertConfigRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalApplicationAlertConfigRuleList",
      },
      threshold: {
        value: globalApplicationAlertConfigThresholdToHclTerraform(this._threshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalApplicationAlertConfigThresholdList",
      },
      time_threshold: {
        value: globalApplicationAlertConfigTimeThresholdToHclTerraform(this._timeThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalApplicationAlertConfigTimeThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
