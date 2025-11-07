// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerInstancesContainerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}
  */
  readonly containerRestartPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}
  */
  readonly gracefulShutdownTimeoutInSeconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}
  */
  readonly state?: string;
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#containers ContainerInstancesContainerInstance#containers}
  */
  readonly containers: ContainerInstancesContainerInstanceContainers[] | cdktf.IResolvable;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#dns_config ContainerInstancesContainerInstance#dns_config}
  */
  readonly dnsConfig?: ContainerInstancesContainerInstanceDnsConfig;
  /**
  * image_pull_secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#image_pull_secrets ContainerInstancesContainerInstance#image_pull_secrets}
  */
  readonly imagePullSecrets?: ContainerInstancesContainerInstanceImagePullSecrets[] | cdktf.IResolvable;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#shape_config ContainerInstancesContainerInstance#shape_config}
  */
  readonly shapeConfig: ContainerInstancesContainerInstanceShapeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#timeouts ContainerInstancesContainerInstance#timeouts}
  */
  readonly timeouts?: ContainerInstancesContainerInstanceTimeouts;
  /**
  * vnics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#vnics ContainerInstancesContainerInstance#vnics}
  */
  readonly vnics: ContainerInstancesContainerInstanceVnics[] | cdktf.IResolvable;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#volumes ContainerInstancesContainerInstance#volumes}
  */
  readonly volumes?: ContainerInstancesContainerInstanceVolumes[] | cdktf.IResolvable;
}
export interface ContainerInstancesContainerInstanceContainersHealthChecksHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}
  */
  readonly value?: string;
}

export function containerInstancesContainerInstanceContainersHealthChecksHeadersToTerraform(struct?: ContainerInstancesContainerInstanceContainersHealthChecksHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerInstancesContainerInstanceContainersHealthChecksHeadersToHclTerraform(struct?: ContainerInstancesContainerInstanceContainersHealthChecksHeaders | cdktf.IResolvable): any {
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

export class ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerInstancesContainerInstanceContainersHealthChecksHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceContainersHealthChecksHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class ContainerInstancesContainerInstanceContainersHealthChecksHeadersList extends cdktf.ComplexList {
  public internalValue? : ContainerInstancesContainerInstanceContainersHealthChecksHeaders[] | cdktf.IResolvable

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
  public get(index: number): ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference {
    return new ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerInstancesContainerInstanceContainersHealthChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}
  */
  readonly failureAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}
  */
  readonly healthCheckType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}
  */
  readonly initialDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}
  */
  readonly statusDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#headers ContainerInstancesContainerInstance#headers}
  */
  readonly headers?: ContainerInstancesContainerInstanceContainersHealthChecksHeaders[] | cdktf.IResolvable;
}

export function containerInstancesContainerInstanceContainersHealthChecksToTerraform(struct?: ContainerInstancesContainerInstanceContainersHealthChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_action: cdktf.stringToTerraform(struct!.failureAction),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    health_check_type: cdktf.stringToTerraform(struct!.healthCheckType),
    initial_delay_in_seconds: cdktf.numberToTerraform(struct!.initialDelayInSeconds),
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    status: cdktf.stringToTerraform(struct!.status),
    status_details: cdktf.stringToTerraform(struct!.statusDetails),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
    headers: cdktf.listMapper(containerInstancesContainerInstanceContainersHealthChecksHeadersToTerraform, true)(struct!.headers),
  }
}


export function containerInstancesContainerInstanceContainersHealthChecksToHclTerraform(struct?: ContainerInstancesContainerInstanceContainersHealthChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_action: {
      value: cdktf.stringToHclTerraform(struct!.failureAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_type: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelayInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_details: {
      value: cdktf.stringToHclTerraform(struct!.statusDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(containerInstancesContainerInstanceContainersHealthChecksHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerInstancesContainerInstanceContainersHealthChecksHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceContainersHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerInstancesContainerInstanceContainersHealthChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureAction = this._failureAction;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._healthCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckType = this._healthCheckType;
    }
    if (this._initialDelayInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelayInSeconds = this._initialDelayInSeconds;
    }
    if (this._intervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInSeconds = this._intervalInSeconds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._statusDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusDetails = this._statusDetails;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceContainersHealthChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureAction = undefined;
      this._failureThreshold = undefined;
      this._healthCheckType = undefined;
      this._initialDelayInSeconds = undefined;
      this._intervalInSeconds = undefined;
      this._name = undefined;
      this._path = undefined;
      this._port = undefined;
      this._status = undefined;
      this._statusDetails = undefined;
      this._successThreshold = undefined;
      this._timeoutInSeconds = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureAction = value.failureAction;
      this._failureThreshold = value.failureThreshold;
      this._healthCheckType = value.healthCheckType;
      this._initialDelayInSeconds = value.initialDelayInSeconds;
      this._intervalInSeconds = value.intervalInSeconds;
      this._name = value.name;
      this._path = value.path;
      this._port = value.port;
      this._status = value.status;
      this._statusDetails = value.statusDetails;
      this._successThreshold = value.successThreshold;
      this._timeoutInSeconds = value.timeoutInSeconds;
      this._headers.internalValue = value.headers;
    }
  }

  // failure_action - computed: true, optional: true, required: false
  private _failureAction?: string; 
  public get failureAction() {
    return this.getStringAttribute('failure_action');
  }
  public set failureAction(value: string) {
    this._failureAction = value;
  }
  public resetFailureAction() {
    this._failureAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureActionInput() {
    return this._failureAction;
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // health_check_type - computed: false, optional: false, required: true
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // initial_delay_in_seconds - computed: true, optional: true, required: false
  private _initialDelayInSeconds?: number; 
  public get initialDelayInSeconds() {
    return this.getNumberAttribute('initial_delay_in_seconds');
  }
  public set initialDelayInSeconds(value: number) {
    this._initialDelayInSeconds = value;
  }
  public resetInitialDelayInSeconds() {
    this._initialDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInSecondsInput() {
    return this._initialDelayInSeconds;
  }

  // interval_in_seconds - computed: true, optional: true, required: false
  private _intervalInSeconds?: number; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds;
  }

  // name - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_details - computed: true, optional: true, required: false
  private _statusDetails?: string; 
  public get statusDetails() {
    return this.getStringAttribute('status_details');
  }
  public set statusDetails(value: string) {
    this._statusDetails = value;
  }
  public resetStatusDetails() {
    this._statusDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusDetailsInput() {
    return this._statusDetails;
  }

  // success_threshold - computed: true, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ContainerInstancesContainerInstanceContainersHealthChecksHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ContainerInstancesContainerInstanceContainersHealthChecksHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}

export class ContainerInstancesContainerInstanceContainersHealthChecksList extends cdktf.ComplexList {
  public internalValue? : ContainerInstancesContainerInstanceContainersHealthChecks[] | cdktf.IResolvable

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
  public get(index: number): ContainerInstancesContainerInstanceContainersHealthChecksOutputReference {
    return new ContainerInstancesContainerInstanceContainersHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerInstancesContainerInstanceContainersResourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}
  */
  readonly memoryLimitInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}
  */
  readonly vcpusLimit?: number;
}

export function containerInstancesContainerInstanceContainersResourceConfigToTerraform(struct?: ContainerInstancesContainerInstanceContainersResourceConfigOutputReference | ContainerInstancesContainerInstanceContainersResourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_limit_in_gbs: cdktf.numberToTerraform(struct!.memoryLimitInGbs),
    vcpus_limit: cdktf.numberToTerraform(struct!.vcpusLimit),
  }
}


export function containerInstancesContainerInstanceContainersResourceConfigToHclTerraform(struct?: ContainerInstancesContainerInstanceContainersResourceConfigOutputReference | ContainerInstancesContainerInstanceContainersResourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_limit_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryLimitInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcpus_limit: {
      value: cdktf.numberToHclTerraform(struct!.vcpusLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceContainersResourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerInstancesContainerInstanceContainersResourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryLimitInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitInGbs = this._memoryLimitInGbs;
    }
    if (this._vcpusLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpusLimit = this._vcpusLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceContainersResourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryLimitInGbs = undefined;
      this._vcpusLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryLimitInGbs = value.memoryLimitInGbs;
      this._vcpusLimit = value.vcpusLimit;
    }
  }

  // memory_limit_in_gbs - computed: true, optional: true, required: false
  private _memoryLimitInGbs?: number; 
  public get memoryLimitInGbs() {
    return this.getNumberAttribute('memory_limit_in_gbs');
  }
  public set memoryLimitInGbs(value: number) {
    this._memoryLimitInGbs = value;
  }
  public resetMemoryLimitInGbs() {
    this._memoryLimitInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInGbsInput() {
    return this._memoryLimitInGbs;
  }

  // vcpus_limit - computed: true, optional: true, required: false
  private _vcpusLimit?: number; 
  public get vcpusLimit() {
    return this.getNumberAttribute('vcpus_limit');
  }
  public set vcpusLimit(value: number) {
    this._vcpusLimit = value;
  }
  public resetVcpusLimit() {
    this._vcpusLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusLimitInput() {
    return this._vcpusLimit;
  }
}
export interface ContainerInstancesContainerInstanceContainersSecurityContextCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}
  */
  readonly addCapabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}
  */
  readonly dropCapabilities?: string[];
}

export function containerInstancesContainerInstanceContainersSecurityContextCapabilitiesToTerraform(struct?: ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference | ContainerInstancesContainerInstanceContainersSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addCapabilities),
    drop_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dropCapabilities),
  }
}


export function containerInstancesContainerInstanceContainersSecurityContextCapabilitiesToHclTerraform(struct?: ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference | ContainerInstancesContainerInstanceContainersSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addCapabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop_capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dropCapabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerInstancesContainerInstanceContainersSecurityContextCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.addCapabilities = this._addCapabilities;
    }
    if (this._dropCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCapabilities = this._dropCapabilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addCapabilities = undefined;
      this._dropCapabilities = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addCapabilities = value.addCapabilities;
      this._dropCapabilities = value.dropCapabilities;
    }
  }

  // add_capabilities - computed: true, optional: true, required: false
  private _addCapabilities?: string[]; 
  public get addCapabilities() {
    return this.getListAttribute('add_capabilities');
  }
  public set addCapabilities(value: string[]) {
    this._addCapabilities = value;
  }
  public resetAddCapabilities() {
    this._addCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addCapabilitiesInput() {
    return this._addCapabilities;
  }

  // drop_capabilities - computed: true, optional: true, required: false
  private _dropCapabilities?: string[]; 
  public get dropCapabilities() {
    return this.getListAttribute('drop_capabilities');
  }
  public set dropCapabilities(value: string[]) {
    this._dropCapabilities = value;
  }
  public resetDropCapabilities() {
    this._dropCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCapabilitiesInput() {
    return this._dropCapabilities;
  }
}
export interface ContainerInstancesContainerInstanceContainersSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}
  */
  readonly isNonRootUserCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}
  */
  readonly isRootFileSystemReadonly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}
  */
  readonly securityContextType?: string;
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#capabilities ContainerInstancesContainerInstance#capabilities}
  */
  readonly capabilities?: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities;
}

export function containerInstancesContainerInstanceContainersSecurityContextToTerraform(struct?: ContainerInstancesContainerInstanceContainersSecurityContextOutputReference | ContainerInstancesContainerInstanceContainersSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_non_root_user_check_enabled: cdktf.booleanToTerraform(struct!.isNonRootUserCheckEnabled),
    is_root_file_system_readonly: cdktf.booleanToTerraform(struct!.isRootFileSystemReadonly),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    security_context_type: cdktf.stringToTerraform(struct!.securityContextType),
    capabilities: containerInstancesContainerInstanceContainersSecurityContextCapabilitiesToTerraform(struct!.capabilities),
  }
}


export function containerInstancesContainerInstanceContainersSecurityContextToHclTerraform(struct?: ContainerInstancesContainerInstanceContainersSecurityContextOutputReference | ContainerInstancesContainerInstanceContainersSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_non_root_user_check_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isNonRootUserCheckEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_root_file_system_readonly: {
      value: cdktf.booleanToHclTerraform(struct!.isRootFileSystemReadonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_context_type: {
      value: cdktf.stringToHclTerraform(struct!.securityContextType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capabilities: {
      value: containerInstancesContainerInstanceContainersSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceContainersSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerInstancesContainerInstanceContainersSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isNonRootUserCheckEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNonRootUserCheckEnabled = this._isNonRootUserCheckEnabled;
    }
    if (this._isRootFileSystemReadonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRootFileSystemReadonly = this._isRootFileSystemReadonly;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._securityContextType !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContextType = this._securityContextType;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceContainersSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isNonRootUserCheckEnabled = undefined;
      this._isRootFileSystemReadonly = undefined;
      this._runAsGroup = undefined;
      this._runAsUser = undefined;
      this._securityContextType = undefined;
      this._capabilities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isNonRootUserCheckEnabled = value.isNonRootUserCheckEnabled;
      this._isRootFileSystemReadonly = value.isRootFileSystemReadonly;
      this._runAsGroup = value.runAsGroup;
      this._runAsUser = value.runAsUser;
      this._securityContextType = value.securityContextType;
      this._capabilities.internalValue = value.capabilities;
    }
  }

  // is_non_root_user_check_enabled - computed: true, optional: true, required: false
  private _isNonRootUserCheckEnabled?: boolean | cdktf.IResolvable; 
  public get isNonRootUserCheckEnabled() {
    return this.getBooleanAttribute('is_non_root_user_check_enabled');
  }
  public set isNonRootUserCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._isNonRootUserCheckEnabled = value;
  }
  public resetIsNonRootUserCheckEnabled() {
    this._isNonRootUserCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNonRootUserCheckEnabledInput() {
    return this._isNonRootUserCheckEnabled;
  }

  // is_root_file_system_readonly - computed: true, optional: true, required: false
  private _isRootFileSystemReadonly?: boolean | cdktf.IResolvable; 
  public get isRootFileSystemReadonly() {
    return this.getBooleanAttribute('is_root_file_system_readonly');
  }
  public set isRootFileSystemReadonly(value: boolean | cdktf.IResolvable) {
    this._isRootFileSystemReadonly = value;
  }
  public resetIsRootFileSystemReadonly() {
    this._isRootFileSystemReadonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRootFileSystemReadonlyInput() {
    return this._isRootFileSystemReadonly;
  }

  // run_as_group - computed: true, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_user - computed: true, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // security_context_type - computed: true, optional: true, required: false
  private _securityContextType?: string; 
  public get securityContextType() {
    return this.getStringAttribute('security_context_type');
  }
  public set securityContextType(value: string) {
    this._securityContextType = value;
  }
  public resetSecurityContextType() {
    this._securityContextType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextTypeInput() {
    return this._securityContextType;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }
}
export interface ContainerInstancesContainerInstanceContainersVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}
  */
  readonly partition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}
  */
  readonly subPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}
  */
  readonly volumeName: string;
}

export function containerInstancesContainerInstanceContainersVolumeMountsToTerraform(struct?: ContainerInstancesContainerInstanceContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_read_only: cdktf.booleanToTerraform(struct!.isReadOnly),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    partition: cdktf.numberToTerraform(struct!.partition),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function containerInstancesContainerInstanceContainersVolumeMountsToHclTerraform(struct?: ContainerInstancesContainerInstanceContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.isReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerInstancesContainerInstanceContainersVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadOnly = this._isReadOnly;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceContainersVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isReadOnly = undefined;
      this._mountPath = undefined;
      this._partition = undefined;
      this._subPath = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isReadOnly = value.isReadOnly;
      this._mountPath = value.mountPath;
      this._partition = value.partition;
      this._subPath = value.subPath;
      this._volumeName = value.volumeName;
    }
  }

  // is_read_only - computed: true, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // partition - computed: true, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // sub_path - computed: true, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class ContainerInstancesContainerInstanceContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : ContainerInstancesContainerInstanceContainersVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference {
    return new ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerInstancesContainerInstanceContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}
  */
  readonly arguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}
  */
  readonly imageUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}
  */
  readonly isResourcePrincipalDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * health_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#health_checks ContainerInstancesContainerInstance#health_checks}
  */
  readonly healthChecks?: ContainerInstancesContainerInstanceContainersHealthChecks[] | cdktf.IResolvable;
  /**
  * resource_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#resource_config ContainerInstancesContainerInstance#resource_config}
  */
  readonly resourceConfig?: ContainerInstancesContainerInstanceContainersResourceConfig;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#security_context ContainerInstancesContainerInstance#security_context}
  */
  readonly securityContext?: ContainerInstancesContainerInstanceContainersSecurityContext;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#volume_mounts ContainerInstancesContainerInstance#volume_mounts}
  */
  readonly volumeMounts?: ContainerInstancesContainerInstanceContainersVolumeMounts[] | cdktf.IResolvable;
}

export function containerInstancesContainerInstanceContainersToTerraform(struct?: ContainerInstancesContainerInstanceContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    is_resource_principal_disabled: cdktf.booleanToTerraform(struct!.isResourcePrincipalDisabled),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
    health_checks: cdktf.listMapper(containerInstancesContainerInstanceContainersHealthChecksToTerraform, true)(struct!.healthChecks),
    resource_config: containerInstancesContainerInstanceContainersResourceConfigToTerraform(struct!.resourceConfig),
    security_context: containerInstancesContainerInstanceContainersSecurityContextToTerraform(struct!.securityContext),
    volume_mounts: cdktf.listMapper(containerInstancesContainerInstanceContainersVolumeMountsToTerraform, true)(struct!.volumeMounts),
  }
}


export function containerInstancesContainerInstanceContainersToHclTerraform(struct?: ContainerInstancesContainerInstanceContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_resource_principal_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isResourcePrincipalDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    working_directory: {
      value: cdktf.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_checks: {
      value: cdktf.listMapperHcl(containerInstancesContainerInstanceContainersHealthChecksToHclTerraform, true)(struct!.healthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerInstancesContainerInstanceContainersHealthChecksList",
    },
    resource_config: {
      value: containerInstancesContainerInstanceContainersResourceConfigToHclTerraform(struct!.resourceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerInstancesContainerInstanceContainersResourceConfigList",
    },
    security_context: {
      value: containerInstancesContainerInstanceContainersSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerInstancesContainerInstanceContainersSecurityContextList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(containerInstancesContainerInstanceContainersVolumeMountsToHclTerraform, true)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerInstancesContainerInstanceContainersVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerInstancesContainerInstanceContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._isResourcePrincipalDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResourcePrincipalDisabled = this._isResourcePrincipalDisabled;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    if (this._healthChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthChecks = this._healthChecks?.internalValue;
    }
    if (this._resourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfig = this._resourceConfig?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._command = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._environmentVariables = undefined;
      this._freeformTags = undefined;
      this._imageUrl = undefined;
      this._isResourcePrincipalDisabled = undefined;
      this._workingDirectory = undefined;
      this._healthChecks.internalValue = undefined;
      this._resourceConfig.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._command = value.command;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._environmentVariables = value.environmentVariables;
      this._freeformTags = value.freeformTags;
      this._imageUrl = value.imageUrl;
      this._isResourcePrincipalDisabled = value.isResourcePrincipalDisabled;
      this._workingDirectory = value.workingDirectory;
      this._healthChecks.internalValue = value.healthChecks;
      this._resourceConfig.internalValue = value.resourceConfig;
      this._securityContext.internalValue = value.securityContext;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // arguments - computed: true, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // container_id - computed: true, optional: false, required: false
  public get containerId() {
    return this.getStringAttribute('container_id');
  }

  // container_instance_id - computed: true, optional: false, required: false
  public get containerInstanceId() {
    return this.getStringAttribute('container_instance_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
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

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // exit_code - computed: true, optional: false, required: false
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // image_url - computed: false, optional: false, required: true
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // is_resource_principal_disabled - computed: true, optional: true, required: false
  private _isResourcePrincipalDisabled?: boolean | cdktf.IResolvable; 
  public get isResourcePrincipalDisabled() {
    return this.getBooleanAttribute('is_resource_principal_disabled');
  }
  public set isResourcePrincipalDisabled(value: boolean | cdktf.IResolvable) {
    this._isResourcePrincipalDisabled = value;
  }
  public resetIsResourcePrincipalDisabled() {
    this._isResourcePrincipalDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResourcePrincipalDisabledInput() {
    return this._isResourcePrincipalDisabled;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_terminated - computed: true, optional: false, required: false
  public get timeTerminated() {
    return this.getStringAttribute('time_terminated');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // working_directory - computed: true, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks = new ContainerInstancesContainerInstanceContainersHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: ContainerInstancesContainerInstanceContainersHealthChecks[] | cdktf.IResolvable) {
    this._healthChecks.internalValue = value;
  }
  public resetHealthChecks() {
    this._healthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks.internalValue;
  }

  // resource_config - computed: false, optional: true, required: false
  private _resourceConfig = new ContainerInstancesContainerInstanceContainersResourceConfigOutputReference(this, "resource_config");
  public get resourceConfig() {
    return this._resourceConfig;
  }
  public putResourceConfig(value: ContainerInstancesContainerInstanceContainersResourceConfig) {
    this._resourceConfig.internalValue = value;
  }
  public resetResourceConfig() {
    this._resourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigInput() {
    return this._resourceConfig.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new ContainerInstancesContainerInstanceContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: ContainerInstancesContainerInstanceContainersSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new ContainerInstancesContainerInstanceContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: ContainerInstancesContainerInstanceContainersVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

export class ContainerInstancesContainerInstanceContainersList extends cdktf.ComplexList {
  public internalValue? : ContainerInstancesContainerInstanceContainers[] | cdktf.IResolvable

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
  public get(index: number): ContainerInstancesContainerInstanceContainersOutputReference {
    return new ContainerInstancesContainerInstanceContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerInstancesContainerInstanceDnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}
  */
  readonly searches?: string[];
}

export function containerInstancesContainerInstanceDnsConfigToTerraform(struct?: ContainerInstancesContainerInstanceDnsConfigOutputReference | ContainerInstancesContainerInstanceDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    searches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searches),
  }
}


export function containerInstancesContainerInstanceDnsConfigToHclTerraform(struct?: ContainerInstancesContainerInstanceDnsConfigOutputReference | ContainerInstancesContainerInstanceDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    searches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerInstancesContainerInstanceDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._searches !== undefined) {
      hasAnyValues = true;
      internalValueResult.searches = this._searches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameservers = undefined;
      this._options = undefined;
      this._searches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameservers = value.nameservers;
      this._options = value.options;
      this._searches = value.searches;
    }
  }

  // nameservers - computed: true, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // searches - computed: true, optional: true, required: false
  private _searches?: string[]; 
  public get searches() {
    return this.getListAttribute('searches');
  }
  public set searches(value: string[]) {
    this._searches = value;
  }
  public resetSearches() {
    this._searches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchesInput() {
    return this._searches;
  }
}
export interface ContainerInstancesContainerInstanceImagePullSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}
  */
  readonly registryEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}
  */
  readonly secretType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}
  */
  readonly username?: string;
}

export function containerInstancesContainerInstanceImagePullSecretsToTerraform(struct?: ContainerInstancesContainerInstanceImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry_endpoint: cdktf.stringToTerraform(struct!.registryEndpoint),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    secret_type: cdktf.stringToTerraform(struct!.secretType),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function containerInstancesContainerInstanceImagePullSecretsToHclTerraform(struct?: ContainerInstancesContainerInstanceImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.registryEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_type: {
      value: cdktf.stringToHclTerraform(struct!.secretType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerInstancesContainerInstanceImagePullSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._registryEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryEndpoint = this._registryEndpoint;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._secretType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretType = this._secretType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceImagePullSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._registryEndpoint = undefined;
      this._secretId = undefined;
      this._secretType = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._registryEndpoint = value.registryEndpoint;
      this._secretId = value.secretId;
      this._secretType = value.secretType;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // registry_endpoint - computed: false, optional: false, required: true
  private _registryEndpoint?: string; 
  public get registryEndpoint() {
    return this.getStringAttribute('registry_endpoint');
  }
  public set registryEndpoint(value: string) {
    this._registryEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryEndpointInput() {
    return this._registryEndpoint;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // secret_type - computed: false, optional: false, required: true
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ContainerInstancesContainerInstanceImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : ContainerInstancesContainerInstanceImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): ContainerInstancesContainerInstanceImagePullSecretsOutputReference {
    return new ContainerInstancesContainerInstanceImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerInstancesContainerInstanceShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}
  */
  readonly ocpus: number;
}

export function containerInstancesContainerInstanceShapeConfigToTerraform(struct?: ContainerInstancesContainerInstanceShapeConfigOutputReference | ContainerInstancesContainerInstanceShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function containerInstancesContainerInstanceShapeConfigToHclTerraform(struct?: ContainerInstancesContainerInstanceShapeConfigOutputReference | ContainerInstancesContainerInstanceShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerInstancesContainerInstanceShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // networking_bandwidth_in_gbps - computed: true, optional: false, required: false
  public get networkingBandwidthInGbps() {
    return this.getNumberAttribute('networking_bandwidth_in_gbps');
  }

  // ocpus - computed: false, optional: false, required: true
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }

  // processor_description - computed: true, optional: false, required: false
  public get processorDescription() {
    return this.getStringAttribute('processor_description');
  }
}
export interface ContainerInstancesContainerInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}
  */
  readonly update?: string;
}

export function containerInstancesContainerInstanceTimeoutsToTerraform(struct?: ContainerInstancesContainerInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function containerInstancesContainerInstanceTimeoutsToHclTerraform(struct?: ContainerInstancesContainerInstanceTimeouts | cdktf.IResolvable): any {
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

export class ContainerInstancesContainerInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerInstancesContainerInstanceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
export interface ContainerInstancesContainerInstanceVnics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}
  */
  readonly isPublicIpAssigned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}
  */
  readonly skipSourceDestCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}
  */
  readonly subnetId: string;
}

export function containerInstancesContainerInstanceVnicsToTerraform(struct?: ContainerInstancesContainerInstanceVnics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    hostname_label: cdktf.stringToTerraform(struct!.hostnameLabel),
    is_public_ip_assigned: cdktf.booleanToTerraform(struct!.isPublicIpAssigned),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    skip_source_dest_check: cdktf.booleanToTerraform(struct!.skipSourceDestCheck),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function containerInstancesContainerInstanceVnicsToHclTerraform(struct?: ContainerInstancesContainerInstanceVnics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.hostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_public_ip_assigned: {
      value: cdktf.booleanToHclTerraform(struct!.isPublicIpAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_source_dest_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipSourceDestCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceVnicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerInstancesContainerInstanceVnics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._hostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameLabel = this._hostnameLabel;
    }
    if (this._isPublicIpAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublicIpAssigned = this._isPublicIpAssigned;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._skipSourceDestCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSourceDestCheck = this._skipSourceDestCheck;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceVnics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._hostnameLabel = undefined;
      this._isPublicIpAssigned = undefined;
      this._nsgIds = undefined;
      this._privateIp = undefined;
      this._skipSourceDestCheck = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._hostnameLabel = value.hostnameLabel;
      this._isPublicIpAssigned = value.isPublicIpAssigned;
      this._nsgIds = value.nsgIds;
      this._privateIp = value.privateIp;
      this._skipSourceDestCheck = value.skipSourceDestCheck;
      this._subnetId = value.subnetId;
    }
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string; 
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string) {
    this._hostnameLabel = value;
  }
  public resetHostnameLabel() {
    this._hostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLabelInput() {
    return this._hostnameLabel;
  }

  // is_public_ip_assigned - computed: true, optional: true, required: false
  private _isPublicIpAssigned?: boolean | cdktf.IResolvable; 
  public get isPublicIpAssigned() {
    return this.getBooleanAttribute('is_public_ip_assigned');
  }
  public set isPublicIpAssigned(value: boolean | cdktf.IResolvable) {
    this._isPublicIpAssigned = value;
  }
  public resetIsPublicIpAssigned() {
    this._isPublicIpAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicIpAssignedInput() {
    return this._isPublicIpAssigned;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // skip_source_dest_check - computed: true, optional: true, required: false
  private _skipSourceDestCheck?: boolean | cdktf.IResolvable; 
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }
  public set skipSourceDestCheck(value: boolean | cdktf.IResolvable) {
    this._skipSourceDestCheck = value;
  }
  public resetSkipSourceDestCheck() {
    this._skipSourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSourceDestCheckInput() {
    return this._skipSourceDestCheck;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vnic_id - computed: true, optional: false, required: false
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }
}

export class ContainerInstancesContainerInstanceVnicsList extends cdktf.ComplexList {
  public internalValue? : ContainerInstancesContainerInstanceVnics[] | cdktf.IResolvable

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
  public get(index: number): ContainerInstancesContainerInstanceVnicsOutputReference {
    return new ContainerInstancesContainerInstanceVnicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerInstancesContainerInstanceVolumesConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}
  */
  readonly fileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}
  */
  readonly path?: string;
}

export function containerInstancesContainerInstanceVolumesConfigsToTerraform(struct?: ContainerInstancesContainerInstanceVolumesConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function containerInstancesContainerInstanceVolumesConfigsToHclTerraform(struct?: ContainerInstancesContainerInstanceVolumesConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
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

export class ContainerInstancesContainerInstanceVolumesConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerInstancesContainerInstanceVolumesConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceVolumesConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._fileName = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._fileName = value.fileName;
      this._path = value.path;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // path - computed: true, optional: true, required: false
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

export class ContainerInstancesContainerInstanceVolumesConfigsList extends cdktf.ComplexList {
  public internalValue? : ContainerInstancesContainerInstanceVolumesConfigs[] | cdktf.IResolvable

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
  public get(index: number): ContainerInstancesContainerInstanceVolumesConfigsOutputReference {
    return new ContainerInstancesContainerInstanceVolumesConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerInstancesContainerInstanceVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}
  */
  readonly backingStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}
  */
  readonly volumeType: string;
  /**
  * configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#configs ContainerInstancesContainerInstance#configs}
  */
  readonly configs?: ContainerInstancesContainerInstanceVolumesConfigs[] | cdktf.IResolvable;
}

export function containerInstancesContainerInstanceVolumesToTerraform(struct?: ContainerInstancesContainerInstanceVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_store: cdktf.stringToTerraform(struct!.backingStore),
    name: cdktf.stringToTerraform(struct!.name),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    configs: cdktf.listMapper(containerInstancesContainerInstanceVolumesConfigsToTerraform, true)(struct!.configs),
  }
}


export function containerInstancesContainerInstanceVolumesToHclTerraform(struct?: ContainerInstancesContainerInstanceVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_store: {
      value: cdktf.stringToHclTerraform(struct!.backingStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configs: {
      value: cdktf.listMapperHcl(containerInstancesContainerInstanceVolumesConfigsToHclTerraform, true)(struct!.configs),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerInstancesContainerInstanceVolumesConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerInstancesContainerInstanceVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerInstancesContainerInstanceVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backingStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingStore = this._backingStore;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerInstancesContainerInstanceVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backingStore = undefined;
      this._name = undefined;
      this._volumeType = undefined;
      this._configs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backingStore = value.backingStore;
      this._name = value.name;
      this._volumeType = value.volumeType;
      this._configs.internalValue = value.configs;
    }
  }

  // backing_store - computed: true, optional: true, required: false
  private _backingStore?: string; 
  public get backingStore() {
    return this.getStringAttribute('backing_store');
  }
  public set backingStore(value: string) {
    this._backingStore = value;
  }
  public resetBackingStore() {
    this._backingStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingStoreInput() {
    return this._backingStore;
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

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // configs - computed: false, optional: true, required: false
  private _configs = new ContainerInstancesContainerInstanceVolumesConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: ContainerInstancesContainerInstanceVolumesConfigs[] | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  public resetConfigs() {
    this._configs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }
}

export class ContainerInstancesContainerInstanceVolumesList extends cdktf.ComplexList {
  public internalValue? : ContainerInstancesContainerInstanceVolumes[] | cdktf.IResolvable

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
  public get(index: number): ContainerInstancesContainerInstanceVolumesOutputReference {
    return new ContainerInstancesContainerInstanceVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance oci_container_instances_container_instance}
*/
export class ContainerInstancesContainerInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_container_instances_container_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerInstancesContainerInstance to import
  * @param importFromId The id of the existing ContainerInstancesContainerInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerInstancesContainerInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_container_instances_container_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/container_instances_container_instance oci_container_instances_container_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerInstancesContainerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerInstancesContainerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_container_instances_container_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._containerRestartPolicy = config.containerRestartPolicy;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._faultDomain = config.faultDomain;
    this._freeformTags = config.freeformTags;
    this._gracefulShutdownTimeoutInSeconds = config.gracefulShutdownTimeoutInSeconds;
    this._id = config.id;
    this._shape = config.shape;
    this._state = config.state;
    this._containers.internalValue = config.containers;
    this._dnsConfig.internalValue = config.dnsConfig;
    this._imagePullSecrets.internalValue = config.imagePullSecrets;
    this._shapeConfig.internalValue = config.shapeConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vnics.internalValue = config.vnics;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // container_count - computed: true, optional: false, required: false
  public get containerCount() {
    return this.getNumberAttribute('container_count');
  }

  // container_restart_policy - computed: true, optional: true, required: false
  private _containerRestartPolicy?: string; 
  public get containerRestartPolicy() {
    return this.getStringAttribute('container_restart_policy');
  }
  public set containerRestartPolicy(value: string) {
    this._containerRestartPolicy = value;
  }
  public resetContainerRestartPolicy() {
    this._containerRestartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRestartPolicyInput() {
    return this._containerRestartPolicy;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
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

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // graceful_shutdown_timeout_in_seconds - computed: true, optional: true, required: false
  private _gracefulShutdownTimeoutInSeconds?: string; 
  public get gracefulShutdownTimeoutInSeconds() {
    return this.getStringAttribute('graceful_shutdown_timeout_in_seconds');
  }
  public set gracefulShutdownTimeoutInSeconds(value: string) {
    this._gracefulShutdownTimeoutInSeconds = value;
  }
  public resetGracefulShutdownTimeoutInSeconds() {
    this._gracefulShutdownTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInSecondsInput() {
    return this._gracefulShutdownTimeoutInSeconds;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
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

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // volume_count - computed: true, optional: false, required: false
  public get volumeCount() {
    return this.getNumberAttribute('volume_count');
  }

  // containers - computed: false, optional: false, required: true
  private _containers = new ContainerInstancesContainerInstanceContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: ContainerInstancesContainerInstanceContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new ContainerInstancesContainerInstanceDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: ContainerInstancesContainerInstanceDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new ContainerInstancesContainerInstanceImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: ContainerInstancesContainerInstanceImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // shape_config - computed: false, optional: false, required: true
  private _shapeConfig = new ContainerInstancesContainerInstanceShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: ContainerInstancesContainerInstanceShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerInstancesContainerInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerInstancesContainerInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vnics - computed: false, optional: false, required: true
  private _vnics = new ContainerInstancesContainerInstanceVnicsList(this, "vnics", false);
  public get vnics() {
    return this._vnics;
  }
  public putVnics(value: ContainerInstancesContainerInstanceVnics[] | cdktf.IResolvable) {
    this._vnics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicsInput() {
    return this._vnics.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new ContainerInstancesContainerInstanceVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: ContainerInstancesContainerInstanceVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      container_restart_policy: cdktf.stringToTerraform(this._containerRestartPolicy),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      fault_domain: cdktf.stringToTerraform(this._faultDomain),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      graceful_shutdown_timeout_in_seconds: cdktf.stringToTerraform(this._gracefulShutdownTimeoutInSeconds),
      id: cdktf.stringToTerraform(this._id),
      shape: cdktf.stringToTerraform(this._shape),
      state: cdktf.stringToTerraform(this._state),
      containers: cdktf.listMapper(containerInstancesContainerInstanceContainersToTerraform, true)(this._containers.internalValue),
      dns_config: containerInstancesContainerInstanceDnsConfigToTerraform(this._dnsConfig.internalValue),
      image_pull_secrets: cdktf.listMapper(containerInstancesContainerInstanceImagePullSecretsToTerraform, true)(this._imagePullSecrets.internalValue),
      shape_config: containerInstancesContainerInstanceShapeConfigToTerraform(this._shapeConfig.internalValue),
      timeouts: containerInstancesContainerInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      vnics: cdktf.listMapper(containerInstancesContainerInstanceVnicsToTerraform, true)(this._vnics.internalValue),
      volumes: cdktf.listMapper(containerInstancesContainerInstanceVolumesToTerraform, true)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_restart_policy: {
        value: cdktf.stringToHclTerraform(this._containerRestartPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_domain: {
        value: cdktf.stringToHclTerraform(this._faultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      graceful_shutdown_timeout_in_seconds: {
        value: cdktf.stringToHclTerraform(this._gracefulShutdownTimeoutInSeconds),
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
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
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
      containers: {
        value: cdktf.listMapperHcl(containerInstancesContainerInstanceContainersToHclTerraform, true)(this._containers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerInstancesContainerInstanceContainersList",
      },
      dns_config: {
        value: containerInstancesContainerInstanceDnsConfigToHclTerraform(this._dnsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerInstancesContainerInstanceDnsConfigList",
      },
      image_pull_secrets: {
        value: cdktf.listMapperHcl(containerInstancesContainerInstanceImagePullSecretsToHclTerraform, true)(this._imagePullSecrets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerInstancesContainerInstanceImagePullSecretsList",
      },
      shape_config: {
        value: containerInstancesContainerInstanceShapeConfigToHclTerraform(this._shapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerInstancesContainerInstanceShapeConfigList",
      },
      timeouts: {
        value: containerInstancesContainerInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerInstancesContainerInstanceTimeouts",
      },
      vnics: {
        value: cdktf.listMapperHcl(containerInstancesContainerInstanceVnicsToHclTerraform, true)(this._vnics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerInstancesContainerInstanceVnicsList",
      },
      volumes: {
        value: cdktf.listMapperHcl(containerInstancesContainerInstanceVolumesToHclTerraform, true)(this._volumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerInstancesContainerInstanceVolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
