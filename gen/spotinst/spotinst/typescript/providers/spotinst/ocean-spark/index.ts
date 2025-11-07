// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanSparkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#id OceanSpark#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}
  */
  readonly oceanClusterId: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#compute OceanSpark#compute}
  */
  readonly compute?: OceanSparkCompute;
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#ingress OceanSpark#ingress}
  */
  readonly ingress?: OceanSparkIngress;
  /**
  * log_collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#log_collection OceanSpark#log_collection}
  */
  readonly logCollection?: OceanSparkLogCollection;
  /**
  * spark block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#spark OceanSpark#spark}
  */
  readonly spark?: OceanSparkSpark;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#webhook OceanSpark#webhook}
  */
  readonly webhook?: OceanSparkWebhook;
  /**
  * workspaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#workspaces OceanSpark#workspaces}
  */
  readonly workspaces?: OceanSparkWorkspaces;
}
export interface OceanSparkCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}
  */
  readonly createVngs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}
  */
  readonly useTaints?: boolean | cdktf.IResolvable;
}

export function oceanSparkComputeToTerraform(struct?: OceanSparkComputeOutputReference | OceanSparkCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_vngs: cdktf.booleanToTerraform(struct!.createVngs),
    use_taints: cdktf.booleanToTerraform(struct!.useTaints),
  }
}


export function oceanSparkComputeToHclTerraform(struct?: OceanSparkComputeOutputReference | OceanSparkCompute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_vngs: {
      value: cdktf.booleanToHclTerraform(struct!.createVngs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_taints: {
      value: cdktf.booleanToHclTerraform(struct!.useTaints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createVngs !== undefined) {
      hasAnyValues = true;
      internalValueResult.createVngs = this._createVngs;
    }
    if (this._useTaints !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTaints = this._useTaints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createVngs = undefined;
      this._useTaints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createVngs = value.createVngs;
      this._useTaints = value.useTaints;
    }
  }

  // create_vngs - computed: true, optional: true, required: false
  private _createVngs?: boolean | cdktf.IResolvable; 
  public get createVngs() {
    return this.getBooleanAttribute('create_vngs');
  }
  public set createVngs(value: boolean | cdktf.IResolvable) {
    this._createVngs = value;
  }
  public resetCreateVngs() {
    this._createVngs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVngsInput() {
    return this._createVngs;
  }

  // use_taints - computed: true, optional: true, required: false
  private _useTaints?: boolean | cdktf.IResolvable; 
  public get useTaints() {
    return this.getBooleanAttribute('use_taints');
  }
  public set useTaints(value: boolean | cdktf.IResolvable) {
    this._useTaints = value;
  }
  public resetUseTaints() {
    this._useTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTaintsInput() {
    return this._useTaints;
  }
}
export interface OceanSparkIngressController {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#managed OceanSpark#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
}

export function oceanSparkIngressControllerToTerraform(struct?: OceanSparkIngressControllerOutputReference | OceanSparkIngressController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed: cdktf.booleanToTerraform(struct!.managed),
  }
}


export function oceanSparkIngressControllerToHclTerraform(struct?: OceanSparkIngressControllerOutputReference | OceanSparkIngressController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkIngressControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkIngressController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkIngressController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managed = value.managed;
    }
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }
}
export interface OceanSparkIngressCustomEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#address OceanSpark#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function oceanSparkIngressCustomEndpointToTerraform(struct?: OceanSparkIngressCustomEndpointOutputReference | OceanSparkIngressCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function oceanSparkIngressCustomEndpointToHclTerraform(struct?: OceanSparkIngressCustomEndpointOutputReference | OceanSparkIngressCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkIngressCustomEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkIngressCustomEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkIngressCustomEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._enabled = value.enabled;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
}
export interface OceanSparkIngressLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#managed OceanSpark#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}
  */
  readonly serviceAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}
  */
  readonly targetGroupArn?: string;
}

export function oceanSparkIngressLoadBalancerToTerraform(struct?: OceanSparkIngressLoadBalancerOutputReference | OceanSparkIngressLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed: cdktf.booleanToTerraform(struct!.managed),
    service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceAnnotations),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
  }
}


export function oceanSparkIngressLoadBalancerToHclTerraform(struct?: OceanSparkIngressLoadBalancerOutputReference | OceanSparkIngressLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkIngressLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkIngressLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    if (this._serviceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAnnotations = this._serviceAnnotations;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkIngressLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managed = undefined;
      this._serviceAnnotations = undefined;
      this._targetGroupArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managed = value.managed;
      this._serviceAnnotations = value.serviceAnnotations;
      this._targetGroupArn = value.targetGroupArn;
    }
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // service_annotations - computed: false, optional: true, required: false
  private _serviceAnnotations?: { [key: string]: string }; 
  public get serviceAnnotations() {
    return this.getStringMapAttribute('service_annotations');
  }
  public set serviceAnnotations(value: { [key: string]: string }) {
    this._serviceAnnotations = value;
  }
  public resetServiceAnnotations() {
    this._serviceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAnnotationsInput() {
    return this._serviceAnnotations;
  }

  // target_group_arn - computed: false, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }
}
export interface OceanSparkIngressPrivateLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}
  */
  readonly vpcEndpointService?: string;
}

export function oceanSparkIngressPrivateLinkToTerraform(struct?: OceanSparkIngressPrivateLinkOutputReference | OceanSparkIngressPrivateLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    vpc_endpoint_service: cdktf.stringToTerraform(struct!.vpcEndpointService),
  }
}


export function oceanSparkIngressPrivateLinkToHclTerraform(struct?: OceanSparkIngressPrivateLinkOutputReference | OceanSparkIngressPrivateLink): any {
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
    vpc_endpoint_service: {
      value: cdktf.stringToHclTerraform(struct!.vpcEndpointService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkIngressPrivateLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkIngressPrivateLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._vpcEndpointService !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointService = this._vpcEndpointService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkIngressPrivateLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._vpcEndpointService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._vpcEndpointService = value.vpcEndpointService;
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

  // vpc_endpoint_service - computed: false, optional: true, required: false
  private _vpcEndpointService?: string; 
  public get vpcEndpointService() {
    return this.getStringAttribute('vpc_endpoint_service');
  }
  public set vpcEndpointService(value: string) {
    this._vpcEndpointService = value;
  }
  public resetVpcEndpointService() {
    this._vpcEndpointService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointServiceInput() {
    return this._vpcEndpointService;
  }
}
export interface OceanSparkIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}
  */
  readonly serviceAnnotations?: { [key: string]: string };
  /**
  * controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#controller OceanSpark#controller}
  */
  readonly controller?: OceanSparkIngressController;
  /**
  * custom_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#custom_endpoint OceanSpark#custom_endpoint}
  */
  readonly customEndpoint?: OceanSparkIngressCustomEndpoint;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#load_balancer OceanSpark#load_balancer}
  */
  readonly loadBalancer?: OceanSparkIngressLoadBalancer;
  /**
  * private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#private_link OceanSpark#private_link}
  */
  readonly privateLink?: OceanSparkIngressPrivateLink;
}

export function oceanSparkIngressToTerraform(struct?: OceanSparkIngressOutputReference | OceanSparkIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceAnnotations),
    controller: oceanSparkIngressControllerToTerraform(struct!.controller),
    custom_endpoint: oceanSparkIngressCustomEndpointToTerraform(struct!.customEndpoint),
    load_balancer: oceanSparkIngressLoadBalancerToTerraform(struct!.loadBalancer),
    private_link: oceanSparkIngressPrivateLinkToTerraform(struct!.privateLink),
  }
}


export function oceanSparkIngressToHclTerraform(struct?: OceanSparkIngressOutputReference | OceanSparkIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    controller: {
      value: oceanSparkIngressControllerToHclTerraform(struct!.controller),
      isBlock: true,
      type: "list",
      storageClassType: "OceanSparkIngressControllerList",
    },
    custom_endpoint: {
      value: oceanSparkIngressCustomEndpointToHclTerraform(struct!.customEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "OceanSparkIngressCustomEndpointList",
    },
    load_balancer: {
      value: oceanSparkIngressLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "list",
      storageClassType: "OceanSparkIngressLoadBalancerList",
    },
    private_link: {
      value: oceanSparkIngressPrivateLinkToHclTerraform(struct!.privateLink),
      isBlock: true,
      type: "list",
      storageClassType: "OceanSparkIngressPrivateLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAnnotations = this._serviceAnnotations;
    }
    if (this._controller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller?.internalValue;
    }
    if (this._customEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpoint = this._customEndpoint?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._privateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLink = this._privateLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAnnotations = undefined;
      this._controller.internalValue = undefined;
      this._customEndpoint.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._privateLink.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAnnotations = value.serviceAnnotations;
      this._controller.internalValue = value.controller;
      this._customEndpoint.internalValue = value.customEndpoint;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._privateLink.internalValue = value.privateLink;
    }
  }

  // service_annotations - computed: true, optional: true, required: false
  private _serviceAnnotations?: { [key: string]: string }; 
  public get serviceAnnotations() {
    return this.getStringMapAttribute('service_annotations');
  }
  public set serviceAnnotations(value: { [key: string]: string }) {
    this._serviceAnnotations = value;
  }
  public resetServiceAnnotations() {
    this._serviceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAnnotationsInput() {
    return this._serviceAnnotations;
  }

  // controller - computed: false, optional: true, required: false
  private _controller = new OceanSparkIngressControllerOutputReference(this, "controller");
  public get controller() {
    return this._controller;
  }
  public putController(value: OceanSparkIngressController) {
    this._controller.internalValue = value;
  }
  public resetController() {
    this._controller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller.internalValue;
  }

  // custom_endpoint - computed: false, optional: true, required: false
  private _customEndpoint = new OceanSparkIngressCustomEndpointOutputReference(this, "custom_endpoint");
  public get customEndpoint() {
    return this._customEndpoint;
  }
  public putCustomEndpoint(value: OceanSparkIngressCustomEndpoint) {
    this._customEndpoint.internalValue = value;
  }
  public resetCustomEndpoint() {
    this._customEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointInput() {
    return this._customEndpoint.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new OceanSparkIngressLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: OceanSparkIngressLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // private_link - computed: false, optional: true, required: false
  private _privateLink = new OceanSparkIngressPrivateLinkOutputReference(this, "private_link");
  public get privateLink() {
    return this._privateLink;
  }
  public putPrivateLink(value: OceanSparkIngressPrivateLink) {
    this._privateLink.internalValue = value;
  }
  public resetPrivateLink() {
    this._privateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkInput() {
    return this._privateLink.internalValue;
  }
}
export interface OceanSparkLogCollection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}
  */
  readonly collectAppLogs?: boolean | cdktf.IResolvable;
}

export function oceanSparkLogCollectionToTerraform(struct?: OceanSparkLogCollectionOutputReference | OceanSparkLogCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collect_app_logs: cdktf.booleanToTerraform(struct!.collectAppLogs),
  }
}


export function oceanSparkLogCollectionToHclTerraform(struct?: OceanSparkLogCollectionOutputReference | OceanSparkLogCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collect_app_logs: {
      value: cdktf.booleanToHclTerraform(struct!.collectAppLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkLogCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkLogCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectAppLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectAppLogs = this._collectAppLogs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkLogCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectAppLogs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collectAppLogs = value.collectAppLogs;
    }
  }

  // collect_app_logs - computed: true, optional: true, required: false
  private _collectAppLogs?: boolean | cdktf.IResolvable; 
  public get collectAppLogs() {
    return this.getBooleanAttribute('collect_app_logs');
  }
  public set collectAppLogs(value: boolean | cdktf.IResolvable) {
    this._collectAppLogs = value;
  }
  public resetCollectAppLogs() {
    this._collectAppLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectAppLogsInput() {
    return this._collectAppLogs;
  }
}
export interface OceanSparkSpark {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}
  */
  readonly additionalAppNamespaces?: string[];
}

export function oceanSparkSparkToTerraform(struct?: OceanSparkSparkOutputReference | OceanSparkSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_app_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalAppNamespaces),
  }
}


export function oceanSparkSparkToHclTerraform(struct?: OceanSparkSparkOutputReference | OceanSparkSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_app_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalAppNamespaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkSparkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkSpark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAppNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAppNamespaces = this._additionalAppNamespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkSpark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalAppNamespaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalAppNamespaces = value.additionalAppNamespaces;
    }
  }

  // additional_app_namespaces - computed: true, optional: true, required: false
  private _additionalAppNamespaces?: string[]; 
  public get additionalAppNamespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_app_namespaces'));
  }
  public set additionalAppNamespaces(value: string[]) {
    this._additionalAppNamespaces = value;
  }
  public resetAdditionalAppNamespaces() {
    this._additionalAppNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAppNamespacesInput() {
    return this._additionalAppNamespaces;
  }
}
export interface OceanSparkWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}
  */
  readonly hostNetworkPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}
  */
  readonly useHostNetwork?: boolean | cdktf.IResolvable;
}

export function oceanSparkWebhookToTerraform(struct?: OceanSparkWebhookOutputReference | OceanSparkWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_network_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hostNetworkPorts),
    use_host_network: cdktf.booleanToTerraform(struct!.useHostNetwork),
  }
}


export function oceanSparkWebhookToHclTerraform(struct?: OceanSparkWebhookOutputReference | OceanSparkWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_network_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hostNetworkPorts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    use_host_network: {
      value: cdktf.booleanToHclTerraform(struct!.useHostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostNetworkPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetworkPorts = this._hostNetworkPorts;
    }
    if (this._useHostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostNetwork = this._useHostNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostNetworkPorts = undefined;
      this._useHostNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostNetworkPorts = value.hostNetworkPorts;
      this._useHostNetwork = value.useHostNetwork;
    }
  }

  // host_network_ports - computed: true, optional: true, required: false
  private _hostNetworkPorts?: number[]; 
  public get hostNetworkPorts() {
    return this.getNumberListAttribute('host_network_ports');
  }
  public set hostNetworkPorts(value: number[]) {
    this._hostNetworkPorts = value;
  }
  public resetHostNetworkPorts() {
    this._hostNetworkPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkPortsInput() {
    return this._hostNetworkPorts;
  }

  // use_host_network - computed: true, optional: true, required: false
  private _useHostNetwork?: boolean | cdktf.IResolvable; 
  public get useHostNetwork() {
    return this.getBooleanAttribute('use_host_network');
  }
  public set useHostNetwork(value: boolean | cdktf.IResolvable) {
    this._useHostNetwork = value;
  }
  public resetUseHostNetwork() {
    this._useHostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostNetworkInput() {
    return this._useHostNetwork;
  }
}
export interface OceanSparkWorkspacesStorageDefaults {
  /**
  * The name of the persistent volume storage class to use by default for new workspaces. Leave it empty to use the cluster defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#storage_class_name OceanSpark#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function oceanSparkWorkspacesStorageDefaultsToTerraform(struct?: OceanSparkWorkspacesStorageDefaultsOutputReference | OceanSparkWorkspacesStorageDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function oceanSparkWorkspacesStorageDefaultsToHclTerraform(struct?: OceanSparkWorkspacesStorageDefaultsOutputReference | OceanSparkWorkspacesStorageDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkWorkspacesStorageDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkWorkspacesStorageDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkWorkspacesStorageDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageClassName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageClassName = value.storageClassName;
    }
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}
export interface OceanSparkWorkspacesStorage {
  /**
  * defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#defaults OceanSpark#defaults}
  */
  readonly defaults?: OceanSparkWorkspacesStorageDefaults;
}

export function oceanSparkWorkspacesStorageToTerraform(struct?: OceanSparkWorkspacesStorageOutputReference | OceanSparkWorkspacesStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults: oceanSparkWorkspacesStorageDefaultsToTerraform(struct!.defaults),
  }
}


export function oceanSparkWorkspacesStorageToHclTerraform(struct?: OceanSparkWorkspacesStorageOutputReference | OceanSparkWorkspacesStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaults: {
      value: oceanSparkWorkspacesStorageDefaultsToHclTerraform(struct!.defaults),
      isBlock: true,
      type: "list",
      storageClassType: "OceanSparkWorkspacesStorageDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkWorkspacesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkWorkspacesStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaults = this._defaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkWorkspacesStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaults.internalValue = value.defaults;
    }
  }

  // defaults - computed: false, optional: true, required: false
  private _defaults = new OceanSparkWorkspacesStorageDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: OceanSparkWorkspacesStorageDefaults) {
    this._defaults.internalValue = value;
  }
  public resetDefaults() {
    this._defaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }
}
export interface OceanSparkWorkspaces {
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#storage OceanSpark#storage}
  */
  readonly storage?: OceanSparkWorkspacesStorage;
}

export function oceanSparkWorkspacesToTerraform(struct?: OceanSparkWorkspacesOutputReference | OceanSparkWorkspaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage: oceanSparkWorkspacesStorageToTerraform(struct!.storage),
  }
}


export function oceanSparkWorkspacesToHclTerraform(struct?: OceanSparkWorkspacesOutputReference | OceanSparkWorkspaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage: {
      value: oceanSparkWorkspacesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "OceanSparkWorkspacesStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanSparkWorkspacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanSparkWorkspaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanSparkWorkspaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storage.internalValue = value.storage;
    }
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new OceanSparkWorkspacesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OceanSparkWorkspacesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark spotinst_ocean_spark}
*/
export class OceanSpark extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_spark";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanSpark to import
  * @param importFromId The id of the existing OceanSpark that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanSpark to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_ocean_spark", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_spark spotinst_ocean_spark} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanSparkConfig
  */
  public constructor(scope: Construct, id: string, config: OceanSparkConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_spark',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
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
    this._oceanClusterId = config.oceanClusterId;
    this._compute.internalValue = config.compute;
    this._ingress.internalValue = config.ingress;
    this._logCollection.internalValue = config.logCollection;
    this._spark.internalValue = config.spark;
    this._webhook.internalValue = config.webhook;
    this._workspaces.internalValue = config.workspaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ocean_cluster_id - computed: false, optional: false, required: true
  private _oceanClusterId?: string; 
  public get oceanClusterId() {
    return this.getStringAttribute('ocean_cluster_id');
  }
  public set oceanClusterId(value: string) {
    this._oceanClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oceanClusterIdInput() {
    return this._oceanClusterId;
  }

  // compute - computed: false, optional: true, required: false
  private _compute = new OceanSparkComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: OceanSparkCompute) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new OceanSparkIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: OceanSparkIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // log_collection - computed: false, optional: true, required: false
  private _logCollection = new OceanSparkLogCollectionOutputReference(this, "log_collection");
  public get logCollection() {
    return this._logCollection;
  }
  public putLogCollection(value: OceanSparkLogCollection) {
    this._logCollection.internalValue = value;
  }
  public resetLogCollection() {
    this._logCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectionInput() {
    return this._logCollection.internalValue;
  }

  // spark - computed: false, optional: true, required: false
  private _spark = new OceanSparkSparkOutputReference(this, "spark");
  public get spark() {
    return this._spark;
  }
  public putSpark(value: OceanSparkSpark) {
    this._spark.internalValue = value;
  }
  public resetSpark() {
    this._spark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkInput() {
    return this._spark.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new OceanSparkWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: OceanSparkWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // workspaces - computed: false, optional: true, required: false
  private _workspaces = new OceanSparkWorkspacesOutputReference(this, "workspaces");
  public get workspaces() {
    return this._workspaces;
  }
  public putWorkspaces(value: OceanSparkWorkspaces) {
    this._workspaces.internalValue = value;
  }
  public resetWorkspaces() {
    this._workspaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacesInput() {
    return this._workspaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ocean_cluster_id: cdktf.stringToTerraform(this._oceanClusterId),
      compute: oceanSparkComputeToTerraform(this._compute.internalValue),
      ingress: oceanSparkIngressToTerraform(this._ingress.internalValue),
      log_collection: oceanSparkLogCollectionToTerraform(this._logCollection.internalValue),
      spark: oceanSparkSparkToTerraform(this._spark.internalValue),
      webhook: oceanSparkWebhookToTerraform(this._webhook.internalValue),
      workspaces: oceanSparkWorkspacesToTerraform(this._workspaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocean_cluster_id: {
        value: cdktf.stringToHclTerraform(this._oceanClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute: {
        value: oceanSparkComputeToHclTerraform(this._compute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanSparkComputeList",
      },
      ingress: {
        value: oceanSparkIngressToHclTerraform(this._ingress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanSparkIngressList",
      },
      log_collection: {
        value: oceanSparkLogCollectionToHclTerraform(this._logCollection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanSparkLogCollectionList",
      },
      spark: {
        value: oceanSparkSparkToHclTerraform(this._spark.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanSparkSparkList",
      },
      webhook: {
        value: oceanSparkWebhookToHclTerraform(this._webhook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanSparkWebhookList",
      },
      workspaces: {
        value: oceanSparkWorkspacesToHclTerraform(this._workspaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanSparkWorkspacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
