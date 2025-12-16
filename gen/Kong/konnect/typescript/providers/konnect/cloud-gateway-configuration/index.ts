// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGatewayConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of API access data-plane groups will support for a configuration. Default: "private+public"; must be one of ["private", "public", "private+public"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#api_access CloudGatewayConfiguration#api_access}
  */
  readonly apiAccess?: string;
  /**
  * Set of control-plane geos supported for deploying cloud-gateways configurations. must be one of ["us", "eu", "au", "me", "in", "sg"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#control_plane_geo CloudGatewayConfiguration#control_plane_geo}
  */
  readonly controlPlaneGeo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#control_plane_id CloudGatewayConfiguration#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * List of data-plane groups that describe where to deploy instances, along with how many instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#dataplane_groups CloudGatewayConfiguration#dataplane_groups}
  */
  readonly dataplaneGroups: CloudGatewayConfigurationDataplaneGroups[] | cdktf.IResolvable;
  /**
  * Supported gateway version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#version CloudGatewayConfiguration#version}
  */
  readonly version: string;
}
export interface CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilot {
  /**
  * Base number of requests per second that the deployment target should support. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#base_rps CloudGatewayConfiguration#base_rps}
  */
  readonly baseRps?: number;
  /**
  * Not Null; must be "autopilot"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#kind CloudGatewayConfiguration#kind}
  */
  readonly kind?: string;
  /**
  * Max number of requests per second that the deployment target should support. If not set, this defaults to 10x base_rps. This field is deprecated and shouldn't be used in new configurations as it will be removed in a future version. max_rps is now calculated as 10x base_rps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#max_rps CloudGatewayConfiguration#max_rps}
  */
  readonly maxRps?: number;
}

export function cloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilotToTerraform(struct?: CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_rps: cdktf.numberToTerraform(struct!.baseRps),
    kind: cdktf.stringToTerraform(struct!.kind),
    max_rps: cdktf.numberToTerraform(struct!.maxRps),
  }
}


export function cloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilotToHclTerraform(struct?: CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_rps: {
      value: cdktf.numberToHclTerraform(struct!.baseRps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rps: {
      value: cdktf.numberToHclTerraform(struct!.maxRps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseRps !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseRps = this._baseRps;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._maxRps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRps = this._maxRps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseRps = undefined;
      this._kind = undefined;
      this._maxRps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseRps = value.baseRps;
      this._kind = value.kind;
      this._maxRps = value.maxRps;
    }
  }

  // base_rps - computed: true, optional: true, required: false
  private _baseRps?: number; 
  public get baseRps() {
    return this.getNumberAttribute('base_rps');
  }
  public set baseRps(value: number) {
    this._baseRps = value;
  }
  public resetBaseRps() {
    this._baseRps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRpsInput() {
    return this._baseRps;
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // max_rps - computed: true, optional: true, required: false
  private _maxRps?: number; 
  public get maxRps() {
    return this.getNumberAttribute('max_rps');
  }
  public set maxRps(value: number) {
    this._maxRps = value;
  }
  public resetMaxRps() {
    this._maxRps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRpsInput() {
    return this._maxRps;
  }
}
export interface CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStatic {
  /**
  * Instance type name to indicate capacity. Not Null; must be one of ["small", "medium", "large"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#instance_type CloudGatewayConfiguration#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Not Null; must be "static"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#kind CloudGatewayConfiguration#kind}
  */
  readonly kind?: string;
  /**
  * Number of data-planes the deployment target will contain. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#requested_instances CloudGatewayConfiguration#requested_instances}
  */
  readonly requestedInstances?: number;
}

export function cloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStaticToTerraform(struct?: CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    kind: cdktf.stringToTerraform(struct!.kind),
    requested_instances: cdktf.numberToTerraform(struct!.requestedInstances),
  }
}


export function cloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStaticToHclTerraform(struct?: CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requested_instances: {
      value: cdktf.numberToHclTerraform(struct!.requestedInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._requestedInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedInstances = this._requestedInstances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._kind = undefined;
      this._requestedInstances = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._kind = value.kind;
      this._requestedInstances = value.requestedInstances;
    }
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // requested_instances - computed: true, optional: true, required: false
  private _requestedInstances?: number; 
  public get requestedInstances() {
    return this.getNumberAttribute('requested_instances');
  }
  public set requestedInstances(value: number) {
    this._requestedInstances = value;
  }
  public resetRequestedInstances() {
    this._requestedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedInstancesInput() {
    return this._requestedInstances;
  }
}
export interface CloudGatewayConfigurationDataplaneGroupsAutoscale {
  /**
  * Object that describes the autopilot autoscaling strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#configuration_data_plane_group_autoscale_autopilot CloudGatewayConfiguration#configuration_data_plane_group_autoscale_autopilot}
  */
  readonly configurationDataPlaneGroupAutoscaleAutopilot?: CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilot;
  /**
  * Object that describes the static autoscaling strategy. Deprecated in favor of the autopilot autoscaling strategy. Static autoscaling will be removed in a future version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#configuration_data_plane_group_autoscale_static CloudGatewayConfiguration#configuration_data_plane_group_autoscale_static}
  */
  readonly configurationDataPlaneGroupAutoscaleStatic?: CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStatic;
}

export function cloudGatewayConfigurationDataplaneGroupsAutoscaleToTerraform(struct?: CloudGatewayConfigurationDataplaneGroupsAutoscale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_data_plane_group_autoscale_autopilot: cloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilotToTerraform(struct!.configurationDataPlaneGroupAutoscaleAutopilot),
    configuration_data_plane_group_autoscale_static: cloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStaticToTerraform(struct!.configurationDataPlaneGroupAutoscaleStatic),
  }
}


export function cloudGatewayConfigurationDataplaneGroupsAutoscaleToHclTerraform(struct?: CloudGatewayConfigurationDataplaneGroupsAutoscale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_data_plane_group_autoscale_autopilot: {
      value: cloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilotToHclTerraform(struct!.configurationDataPlaneGroupAutoscaleAutopilot),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilot",
    },
    configuration_data_plane_group_autoscale_static: {
      value: cloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStaticToHclTerraform(struct!.configurationDataPlaneGroupAutoscaleStatic),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStatic",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayConfigurationDataplaneGroupsAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayConfigurationDataplaneGroupsAutoscale | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationDataPlaneGroupAutoscaleAutopilot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationDataPlaneGroupAutoscaleAutopilot = this._configurationDataPlaneGroupAutoscaleAutopilot?.internalValue;
    }
    if (this._configurationDataPlaneGroupAutoscaleStatic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationDataPlaneGroupAutoscaleStatic = this._configurationDataPlaneGroupAutoscaleStatic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayConfigurationDataplaneGroupsAutoscale | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationDataPlaneGroupAutoscaleAutopilot.internalValue = undefined;
      this._configurationDataPlaneGroupAutoscaleStatic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationDataPlaneGroupAutoscaleAutopilot.internalValue = value.configurationDataPlaneGroupAutoscaleAutopilot;
      this._configurationDataPlaneGroupAutoscaleStatic.internalValue = value.configurationDataPlaneGroupAutoscaleStatic;
    }
  }

  // configuration_data_plane_group_autoscale_autopilot - computed: true, optional: true, required: false
  private _configurationDataPlaneGroupAutoscaleAutopilot = new CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilotOutputReference(this, "configuration_data_plane_group_autoscale_autopilot");
  public get configurationDataPlaneGroupAutoscaleAutopilot() {
    return this._configurationDataPlaneGroupAutoscaleAutopilot;
  }
  public putConfigurationDataPlaneGroupAutoscaleAutopilot(value: CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleAutopilot) {
    this._configurationDataPlaneGroupAutoscaleAutopilot.internalValue = value;
  }
  public resetConfigurationDataPlaneGroupAutoscaleAutopilot() {
    this._configurationDataPlaneGroupAutoscaleAutopilot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationDataPlaneGroupAutoscaleAutopilotInput() {
    return this._configurationDataPlaneGroupAutoscaleAutopilot.internalValue;
  }

  // configuration_data_plane_group_autoscale_static - computed: true, optional: true, required: false
  private _configurationDataPlaneGroupAutoscaleStatic = new CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStaticOutputReference(this, "configuration_data_plane_group_autoscale_static");
  public get configurationDataPlaneGroupAutoscaleStatic() {
    return this._configurationDataPlaneGroupAutoscaleStatic;
  }
  public putConfigurationDataPlaneGroupAutoscaleStatic(value: CloudGatewayConfigurationDataplaneGroupsAutoscaleConfigurationDataPlaneGroupAutoscaleStatic) {
    this._configurationDataPlaneGroupAutoscaleStatic.internalValue = value;
  }
  public resetConfigurationDataPlaneGroupAutoscaleStatic() {
    this._configurationDataPlaneGroupAutoscaleStatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationDataPlaneGroupAutoscaleStaticInput() {
    return this._configurationDataPlaneGroupAutoscaleStatic.internalValue;
  }
}
export interface CloudGatewayConfigurationDataplaneGroupsEnvironment {
  /**
  * Name of the environment variable field to set for the data-plane group. Must be prefixed by KONG_. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#name CloudGatewayConfiguration#name}
  */
  readonly name?: string;
  /**
  * Value assigned to the environment variable field for the data-plane group. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#value CloudGatewayConfiguration#value}
  */
  readonly value?: string;
}

export function cloudGatewayConfigurationDataplaneGroupsEnvironmentToTerraform(struct?: CloudGatewayConfigurationDataplaneGroupsEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudGatewayConfigurationDataplaneGroupsEnvironmentToHclTerraform(struct?: CloudGatewayConfigurationDataplaneGroupsEnvironment | cdktf.IResolvable): any {
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

export class CloudGatewayConfigurationDataplaneGroupsEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayConfigurationDataplaneGroupsEnvironment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudGatewayConfigurationDataplaneGroupsEnvironment | cdktf.IResolvable | undefined) {
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

export class CloudGatewayConfigurationDataplaneGroupsEnvironmentList extends cdktf.ComplexList {
  public internalValue? : CloudGatewayConfigurationDataplaneGroupsEnvironment[] | cdktf.IResolvable

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
  public get(index: number): CloudGatewayConfigurationDataplaneGroupsEnvironmentOutputReference {
    return new CloudGatewayConfigurationDataplaneGroupsEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGatewayConfigurationDataplaneGroups {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#autoscale CloudGatewayConfiguration#autoscale}
  */
  readonly autoscale?: CloudGatewayConfigurationDataplaneGroupsAutoscale;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#cloud_gateway_network_id CloudGatewayConfiguration#cloud_gateway_network_id}
  */
  readonly cloudGatewayNetworkId?: string;
  /**
  * Array of environment variables to set for a data-plane group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#environment CloudGatewayConfiguration#environment}
  */
  readonly environment?: CloudGatewayConfigurationDataplaneGroupsEnvironment[] | cdktf.IResolvable;
  /**
  * Name of cloud provider. Not Null; must be one of ["aws", "azure"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#provider CloudGatewayConfiguration#provider}
  */
  readonly provider?: string;
  /**
  * Region ID for cloud provider region. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#region CloudGatewayConfiguration#region}
  */
  readonly region?: string;
}

export function cloudGatewayConfigurationDataplaneGroupsToTerraform(struct?: CloudGatewayConfigurationDataplaneGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cloudGatewayConfigurationDataplaneGroupsAutoscaleToTerraform(struct!.autoscale),
    cloud_gateway_network_id: cdktf.stringToTerraform(struct!.cloudGatewayNetworkId),
    environment: cdktf.listMapper(cloudGatewayConfigurationDataplaneGroupsEnvironmentToTerraform, false)(struct!.environment),
    provider: cdktf.stringToTerraform(struct!.provider),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function cloudGatewayConfigurationDataplaneGroupsToHclTerraform(struct?: CloudGatewayConfigurationDataplaneGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale: {
      value: cloudGatewayConfigurationDataplaneGroupsAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudGatewayConfigurationDataplaneGroupsAutoscale",
    },
    cloud_gateway_network_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudGatewayNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.listMapperHcl(cloudGatewayConfigurationDataplaneGroupsEnvironmentToHclTerraform, false)(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGatewayConfigurationDataplaneGroupsEnvironmentList",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGatewayConfigurationDataplaneGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGatewayConfigurationDataplaneGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale?.internalValue;
    }
    if (this._cloudGatewayNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudGatewayNetworkId = this._cloudGatewayNetworkId;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayConfigurationDataplaneGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscale.internalValue = undefined;
      this._cloudGatewayNetworkId = undefined;
      this._environment.internalValue = undefined;
      this._provider = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscale.internalValue = value.autoscale;
      this._cloudGatewayNetworkId = value.cloudGatewayNetworkId;
      this._environment.internalValue = value.environment;
      this._provider = value.provider;
      this._region = value.region;
    }
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale = new CloudGatewayConfigurationDataplaneGroupsAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: CloudGatewayConfigurationDataplaneGroupsAutoscale) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }

  // cloud_gateway_network_id - computed: true, optional: true, required: false
  private _cloudGatewayNetworkId?: string; 
  public get cloudGatewayNetworkId() {
    return this.getStringAttribute('cloud_gateway_network_id');
  }
  public set cloudGatewayNetworkId(value: string) {
    this._cloudGatewayNetworkId = value;
  }
  public resetCloudGatewayNetworkId() {
    this._cloudGatewayNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGatewayNetworkIdInput() {
    return this._cloudGatewayNetworkId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // egress_ip_addresses - computed: true, optional: false, required: false
  public get egressIpAddresses() {
    return this.getListAttribute('egress_ip_addresses');
  }

  // environment - computed: true, optional: true, required: false
  private _environment = new CloudGatewayConfigurationDataplaneGroupsEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: CloudGatewayConfigurationDataplaneGroupsEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class CloudGatewayConfigurationDataplaneGroupsList extends cdktf.ComplexList {
  public internalValue? : CloudGatewayConfigurationDataplaneGroups[] | cdktf.IResolvable

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
  public get(index: number): CloudGatewayConfigurationDataplaneGroupsOutputReference {
    return new CloudGatewayConfigurationDataplaneGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration konnect_cloud_gateway_configuration}
*/
export class CloudGatewayConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_cloud_gateway_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGatewayConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGatewayConfiguration to import
  * @param importFromId The id of the existing CloudGatewayConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGatewayConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_cloud_gateway_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_configuration konnect_cloud_gateway_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGatewayConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGatewayConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_cloud_gateway_configuration',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiAccess = config.apiAccess;
    this._controlPlaneGeo = config.controlPlaneGeo;
    this._controlPlaneId = config.controlPlaneId;
    this._dataplaneGroups.internalValue = config.dataplaneGroups;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_access - computed: true, optional: true, required: false
  private _apiAccess?: string; 
  public get apiAccess() {
    return this.getStringAttribute('api_access');
  }
  public set apiAccess(value: string) {
    this._apiAccess = value;
  }
  public resetApiAccess() {
    this._apiAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAccessInput() {
    return this._apiAccess;
  }

  // control_plane_geo - computed: false, optional: false, required: true
  private _controlPlaneGeo?: string; 
  public get controlPlaneGeo() {
    return this.getStringAttribute('control_plane_geo');
  }
  public set controlPlaneGeo(value: string) {
    this._controlPlaneGeo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneGeoInput() {
    return this._controlPlaneGeo;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dataplane_groups - computed: false, optional: false, required: true
  private _dataplaneGroups = new CloudGatewayConfigurationDataplaneGroupsList(this, "dataplane_groups", true);
  public get dataplaneGroups() {
    return this._dataplaneGroups;
  }
  public putDataplaneGroups(value: CloudGatewayConfigurationDataplaneGroups[] | cdktf.IResolvable) {
    this._dataplaneGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneGroupsInput() {
    return this._dataplaneGroups.internalValue;
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getNumberAttribute('entity_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_access: cdktf.stringToTerraform(this._apiAccess),
      control_plane_geo: cdktf.stringToTerraform(this._controlPlaneGeo),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      dataplane_groups: cdktf.listMapper(cloudGatewayConfigurationDataplaneGroupsToTerraform, false)(this._dataplaneGroups.internalValue),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_access: {
        value: cdktf.stringToHclTerraform(this._apiAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_geo: {
        value: cdktf.stringToHclTerraform(this._controlPlaneGeo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataplane_groups: {
        value: cdktf.listMapperHcl(cloudGatewayConfigurationDataplaneGroupsToHclTerraform, false)(this._dataplaneGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudGatewayConfigurationDataplaneGroupsList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
