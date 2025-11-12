// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemlimitsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#id Systemlimits#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#uuid Systemlimits#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#configpb_attributes Systemlimits#configpb_attributes}
  */
  readonly configpbAttributes?: SystemlimitsConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * controller_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#controller_limits Systemlimits#controller_limits}
  */
  readonly controllerLimits?: SystemlimitsControllerLimits[] | cdktf.IResolvable;
  /**
  * controller_sizes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#controller_sizes Systemlimits#controller_sizes}
  */
  readonly controllerSizes?: SystemlimitsControllerSizes[] | cdktf.IResolvable;
  /**
  * serviceengine_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#serviceengine_limits Systemlimits#serviceengine_limits}
  */
  readonly serviceengineLimits?: SystemlimitsServiceengineLimits[] | cdktf.IResolvable;
}
export interface SystemlimitsConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#version Systemlimits#version}
  */
  readonly version?: string;
}

export function systemlimitsConfigpbAttributesToTerraform(struct?: SystemlimitsConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function systemlimitsConfigpbAttributesToHclTerraform(struct?: SystemlimitsConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class SystemlimitsConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsConfigpbAttributesOutputReference {
    return new SystemlimitsConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsControllerLimitsBotLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#allow_rules Systemlimits#allow_rules}
  */
  readonly allowRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#hdrs Systemlimits#hdrs}
  */
  readonly hdrs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#mapping_rules Systemlimits#mapping_rules}
  */
  readonly mappingRules?: string;
}

export function systemlimitsControllerLimitsBotLimitsToTerraform(struct?: SystemlimitsControllerLimitsBotLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rules: cdktf.stringToTerraform(struct!.allowRules),
    hdrs: cdktf.stringToTerraform(struct!.hdrs),
    mapping_rules: cdktf.stringToTerraform(struct!.mappingRules),
  }
}


export function systemlimitsControllerLimitsBotLimitsToHclTerraform(struct?: SystemlimitsControllerLimitsBotLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rules: {
      value: cdktf.stringToHclTerraform(struct!.allowRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdrs: {
      value: cdktf.stringToHclTerraform(struct!.hdrs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_rules: {
      value: cdktf.stringToHclTerraform(struct!.mappingRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsControllerLimitsBotLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsControllerLimitsBotLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRules = this._allowRules;
    }
    if (this._hdrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrs = this._hdrs;
    }
    if (this._mappingRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingRules = this._mappingRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsControllerLimitsBotLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRules = undefined;
      this._hdrs = undefined;
      this._mappingRules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRules = value.allowRules;
      this._hdrs = value.hdrs;
      this._mappingRules = value.mappingRules;
    }
  }

  // allow_rules - computed: true, optional: true, required: false
  private _allowRules?: string; 
  public get allowRules() {
    return this.getStringAttribute('allow_rules');
  }
  public set allowRules(value: string) {
    this._allowRules = value;
  }
  public resetAllowRules() {
    this._allowRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules;
  }

  // hdrs - computed: true, optional: true, required: false
  private _hdrs?: string; 
  public get hdrs() {
    return this.getStringAttribute('hdrs');
  }
  public set hdrs(value: string) {
    this._hdrs = value;
  }
  public resetHdrs() {
    this._hdrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrsInput() {
    return this._hdrs;
  }

  // mapping_rules - computed: true, optional: true, required: false
  private _mappingRules?: string; 
  public get mappingRules() {
    return this.getStringAttribute('mapping_rules');
  }
  public set mappingRules(value: string) {
    this._mappingRules = value;
  }
  public resetMappingRules() {
    this._mappingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRulesInput() {
    return this._mappingRules;
  }
}

export class SystemlimitsControllerLimitsBotLimitsList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsControllerLimitsBotLimits[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsControllerLimitsBotLimitsOutputReference {
    return new SystemlimitsControllerLimitsBotLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsControllerLimitsControllerCloudLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_clouds Systemlimits#num_clouds}
  */
  readonly numClouds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#t1_lrs_per_cloud Systemlimits#t1_lrs_per_cloud}
  */
  readonly t1LrsPerCloud?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#type Systemlimits#type}
  */
  readonly type?: string;
}

export function systemlimitsControllerLimitsControllerCloudLimitsToTerraform(struct?: SystemlimitsControllerLimitsControllerCloudLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_clouds: cdktf.stringToTerraform(struct!.numClouds),
    t1_lrs_per_cloud: cdktf.stringToTerraform(struct!.t1LrsPerCloud),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemlimitsControllerLimitsControllerCloudLimitsToHclTerraform(struct?: SystemlimitsControllerLimitsControllerCloudLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_clouds: {
      value: cdktf.stringToHclTerraform(struct!.numClouds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    t1_lrs_per_cloud: {
      value: cdktf.stringToHclTerraform(struct!.t1LrsPerCloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsControllerLimitsControllerCloudLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsControllerLimitsControllerCloudLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numClouds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numClouds = this._numClouds;
    }
    if (this._t1LrsPerCloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.t1LrsPerCloud = this._t1LrsPerCloud;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsControllerLimitsControllerCloudLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numClouds = undefined;
      this._t1LrsPerCloud = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numClouds = value.numClouds;
      this._t1LrsPerCloud = value.t1LrsPerCloud;
      this._type = value.type;
    }
  }

  // num_clouds - computed: true, optional: true, required: false
  private _numClouds?: string; 
  public get numClouds() {
    return this.getStringAttribute('num_clouds');
  }
  public set numClouds(value: string) {
    this._numClouds = value;
  }
  public resetNumClouds() {
    this._numClouds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCloudsInput() {
    return this._numClouds;
  }

  // t1_lrs_per_cloud - computed: true, optional: true, required: false
  private _t1LrsPerCloud?: string; 
  public get t1LrsPerCloud() {
    return this.getStringAttribute('t1_lrs_per_cloud');
  }
  public set t1LrsPerCloud(value: string) {
    this._t1LrsPerCloud = value;
  }
  public resetT1LrsPerCloud() {
    this._t1LrsPerCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t1LrsPerCloudInput() {
    return this._t1LrsPerCloud;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SystemlimitsControllerLimitsControllerCloudLimitsList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsControllerLimitsControllerCloudLimits[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsControllerLimitsControllerCloudLimitsOutputReference {
    return new SystemlimitsControllerLimitsControllerCloudLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_clouds Systemlimits#num_clouds}
  */
  readonly numClouds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#type Systemlimits#type}
  */
  readonly type?: string;
}

export function systemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsToTerraform(struct?: SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_clouds: cdktf.stringToTerraform(struct!.numClouds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsToHclTerraform(struct?: SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_clouds: {
      value: cdktf.stringToHclTerraform(struct!.numClouds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numClouds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numClouds = this._numClouds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numClouds = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numClouds = value.numClouds;
      this._type = value.type;
    }
  }

  // num_clouds - computed: true, optional: true, required: false
  private _numClouds?: string; 
  public get numClouds() {
    return this.getStringAttribute('num_clouds');
  }
  public set numClouds(value: string) {
    this._numClouds = value;
  }
  public resetNumClouds() {
    this._numClouds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCloudsInput() {
    return this._numClouds;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsOutputReference {
    return new SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsControllerLimitsControllerSizingLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#flavor Systemlimits#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_clouds Systemlimits#num_clouds}
  */
  readonly numClouds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_east_west_virtualservices Systemlimits#num_east_west_virtualservices}
  */
  readonly numEastWestVirtualservices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_servers Systemlimits#num_servers}
  */
  readonly numServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_serviceengines Systemlimits#num_serviceengines}
  */
  readonly numServiceengines?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_tenants Systemlimits#num_tenants}
  */
  readonly numTenants?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_virtualservices Systemlimits#num_virtualservices}
  */
  readonly numVirtualservices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_virtualservices_rt_metrics Systemlimits#num_virtualservices_rt_metrics}
  */
  readonly numVirtualservicesRtMetrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_vrfs Systemlimits#num_vrfs}
  */
  readonly numVrfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_waf_virtualservices Systemlimits#num_waf_virtualservices}
  */
  readonly numWafVirtualservices?: string;
  /**
  * controller_sizing_cloud_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#controller_sizing_cloud_limits Systemlimits#controller_sizing_cloud_limits}
  */
  readonly controllerSizingCloudLimits?: SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits[] | cdktf.IResolvable;
}

export function systemlimitsControllerLimitsControllerSizingLimitsToTerraform(struct?: SystemlimitsControllerLimitsControllerSizingLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flavor: cdktf.stringToTerraform(struct!.flavor),
    num_clouds: cdktf.stringToTerraform(struct!.numClouds),
    num_east_west_virtualservices: cdktf.stringToTerraform(struct!.numEastWestVirtualservices),
    num_servers: cdktf.stringToTerraform(struct!.numServers),
    num_serviceengines: cdktf.stringToTerraform(struct!.numServiceengines),
    num_tenants: cdktf.stringToTerraform(struct!.numTenants),
    num_virtualservices: cdktf.stringToTerraform(struct!.numVirtualservices),
    num_virtualservices_rt_metrics: cdktf.stringToTerraform(struct!.numVirtualservicesRtMetrics),
    num_vrfs: cdktf.stringToTerraform(struct!.numVrfs),
    num_waf_virtualservices: cdktf.stringToTerraform(struct!.numWafVirtualservices),
    controller_sizing_cloud_limits: cdktf.listMapper(systemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsToTerraform, true)(struct!.controllerSizingCloudLimits),
  }
}


export function systemlimitsControllerLimitsControllerSizingLimitsToHclTerraform(struct?: SystemlimitsControllerLimitsControllerSizingLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_clouds: {
      value: cdktf.stringToHclTerraform(struct!.numClouds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_east_west_virtualservices: {
      value: cdktf.stringToHclTerraform(struct!.numEastWestVirtualservices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_servers: {
      value: cdktf.stringToHclTerraform(struct!.numServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_serviceengines: {
      value: cdktf.stringToHclTerraform(struct!.numServiceengines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_tenants: {
      value: cdktf.stringToHclTerraform(struct!.numTenants),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_virtualservices: {
      value: cdktf.stringToHclTerraform(struct!.numVirtualservices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_virtualservices_rt_metrics: {
      value: cdktf.stringToHclTerraform(struct!.numVirtualservicesRtMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vrfs: {
      value: cdktf.stringToHclTerraform(struct!.numVrfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_waf_virtualservices: {
      value: cdktf.stringToHclTerraform(struct!.numWafVirtualservices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_sizing_cloud_limits: {
      value: cdktf.listMapperHcl(systemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsToHclTerraform, true)(struct!.controllerSizingCloudLimits),
      isBlock: true,
      type: "list",
      storageClassType: "SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsControllerLimitsControllerSizingLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsControllerLimitsControllerSizingLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._numClouds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numClouds = this._numClouds;
    }
    if (this._numEastWestVirtualservices !== undefined) {
      hasAnyValues = true;
      internalValueResult.numEastWestVirtualservices = this._numEastWestVirtualservices;
    }
    if (this._numServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numServers = this._numServers;
    }
    if (this._numServiceengines !== undefined) {
      hasAnyValues = true;
      internalValueResult.numServiceengines = this._numServiceengines;
    }
    if (this._numTenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.numTenants = this._numTenants;
    }
    if (this._numVirtualservices !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVirtualservices = this._numVirtualservices;
    }
    if (this._numVirtualservicesRtMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVirtualservicesRtMetrics = this._numVirtualservicesRtMetrics;
    }
    if (this._numVrfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVrfs = this._numVrfs;
    }
    if (this._numWafVirtualservices !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWafVirtualservices = this._numWafVirtualservices;
    }
    if (this._controllerSizingCloudLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerSizingCloudLimits = this._controllerSizingCloudLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsControllerLimitsControllerSizingLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flavor = undefined;
      this._numClouds = undefined;
      this._numEastWestVirtualservices = undefined;
      this._numServers = undefined;
      this._numServiceengines = undefined;
      this._numTenants = undefined;
      this._numVirtualservices = undefined;
      this._numVirtualservicesRtMetrics = undefined;
      this._numVrfs = undefined;
      this._numWafVirtualservices = undefined;
      this._controllerSizingCloudLimits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flavor = value.flavor;
      this._numClouds = value.numClouds;
      this._numEastWestVirtualservices = value.numEastWestVirtualservices;
      this._numServers = value.numServers;
      this._numServiceengines = value.numServiceengines;
      this._numTenants = value.numTenants;
      this._numVirtualservices = value.numVirtualservices;
      this._numVirtualservicesRtMetrics = value.numVirtualservicesRtMetrics;
      this._numVrfs = value.numVrfs;
      this._numWafVirtualservices = value.numWafVirtualservices;
      this._controllerSizingCloudLimits.internalValue = value.controllerSizingCloudLimits;
    }
  }

  // flavor - computed: true, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // num_clouds - computed: true, optional: true, required: false
  private _numClouds?: string; 
  public get numClouds() {
    return this.getStringAttribute('num_clouds');
  }
  public set numClouds(value: string) {
    this._numClouds = value;
  }
  public resetNumClouds() {
    this._numClouds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCloudsInput() {
    return this._numClouds;
  }

  // num_east_west_virtualservices - computed: true, optional: true, required: false
  private _numEastWestVirtualservices?: string; 
  public get numEastWestVirtualservices() {
    return this.getStringAttribute('num_east_west_virtualservices');
  }
  public set numEastWestVirtualservices(value: string) {
    this._numEastWestVirtualservices = value;
  }
  public resetNumEastWestVirtualservices() {
    this._numEastWestVirtualservices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numEastWestVirtualservicesInput() {
    return this._numEastWestVirtualservices;
  }

  // num_servers - computed: true, optional: true, required: false
  private _numServers?: string; 
  public get numServers() {
    return this.getStringAttribute('num_servers');
  }
  public set numServers(value: string) {
    this._numServers = value;
  }
  public resetNumServers() {
    this._numServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numServersInput() {
    return this._numServers;
  }

  // num_serviceengines - computed: true, optional: true, required: false
  private _numServiceengines?: string; 
  public get numServiceengines() {
    return this.getStringAttribute('num_serviceengines');
  }
  public set numServiceengines(value: string) {
    this._numServiceengines = value;
  }
  public resetNumServiceengines() {
    this._numServiceengines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numServiceenginesInput() {
    return this._numServiceengines;
  }

  // num_tenants - computed: true, optional: true, required: false
  private _numTenants?: string; 
  public get numTenants() {
    return this.getStringAttribute('num_tenants');
  }
  public set numTenants(value: string) {
    this._numTenants = value;
  }
  public resetNumTenants() {
    this._numTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numTenantsInput() {
    return this._numTenants;
  }

  // num_virtualservices - computed: true, optional: true, required: false
  private _numVirtualservices?: string; 
  public get numVirtualservices() {
    return this.getStringAttribute('num_virtualservices');
  }
  public set numVirtualservices(value: string) {
    this._numVirtualservices = value;
  }
  public resetNumVirtualservices() {
    this._numVirtualservices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVirtualservicesInput() {
    return this._numVirtualservices;
  }

  // num_virtualservices_rt_metrics - computed: true, optional: true, required: false
  private _numVirtualservicesRtMetrics?: string; 
  public get numVirtualservicesRtMetrics() {
    return this.getStringAttribute('num_virtualservices_rt_metrics');
  }
  public set numVirtualservicesRtMetrics(value: string) {
    this._numVirtualservicesRtMetrics = value;
  }
  public resetNumVirtualservicesRtMetrics() {
    this._numVirtualservicesRtMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVirtualservicesRtMetricsInput() {
    return this._numVirtualservicesRtMetrics;
  }

  // num_vrfs - computed: true, optional: true, required: false
  private _numVrfs?: string; 
  public get numVrfs() {
    return this.getStringAttribute('num_vrfs');
  }
  public set numVrfs(value: string) {
    this._numVrfs = value;
  }
  public resetNumVrfs() {
    this._numVrfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVrfsInput() {
    return this._numVrfs;
  }

  // num_waf_virtualservices - computed: true, optional: true, required: false
  private _numWafVirtualservices?: string; 
  public get numWafVirtualservices() {
    return this.getStringAttribute('num_waf_virtualservices');
  }
  public set numWafVirtualservices(value: string) {
    this._numWafVirtualservices = value;
  }
  public resetNumWafVirtualservices() {
    this._numWafVirtualservices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWafVirtualservicesInput() {
    return this._numWafVirtualservices;
  }

  // controller_sizing_cloud_limits - computed: false, optional: true, required: false
  private _controllerSizingCloudLimits = new SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsList(this, "controller_sizing_cloud_limits", false);
  public get controllerSizingCloudLimits() {
    return this._controllerSizingCloudLimits;
  }
  public putControllerSizingCloudLimits(value: SystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits[] | cdktf.IResolvable) {
    this._controllerSizingCloudLimits.internalValue = value;
  }
  public resetControllerSizingCloudLimits() {
    this._controllerSizingCloudLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerSizingCloudLimitsInput() {
    return this._controllerSizingCloudLimits.internalValue;
  }
}

export class SystemlimitsControllerLimitsControllerSizingLimitsList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsControllerLimitsControllerSizingLimits[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsControllerLimitsControllerSizingLimitsOutputReference {
    return new SystemlimitsControllerLimitsControllerSizingLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsControllerLimitsIpaddressLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#ip_address_group_per_match_criteria Systemlimits#ip_address_group_per_match_criteria}
  */
  readonly ipAddressGroupPerMatchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#ip_address_prefix_per_match_criteria Systemlimits#ip_address_prefix_per_match_criteria}
  */
  readonly ipAddressPrefixPerMatchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#ip_address_range_per_match_criteria Systemlimits#ip_address_range_per_match_criteria}
  */
  readonly ipAddressRangePerMatchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#ip_addresses_per_match_criteria Systemlimits#ip_addresses_per_match_criteria}
  */
  readonly ipAddressesPerMatchCriteria?: string;
}

export function systemlimitsControllerLimitsIpaddressLimitsToTerraform(struct?: SystemlimitsControllerLimitsIpaddressLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_group_per_match_criteria: cdktf.stringToTerraform(struct!.ipAddressGroupPerMatchCriteria),
    ip_address_prefix_per_match_criteria: cdktf.stringToTerraform(struct!.ipAddressPrefixPerMatchCriteria),
    ip_address_range_per_match_criteria: cdktf.stringToTerraform(struct!.ipAddressRangePerMatchCriteria),
    ip_addresses_per_match_criteria: cdktf.stringToTerraform(struct!.ipAddressesPerMatchCriteria),
  }
}


export function systemlimitsControllerLimitsIpaddressLimitsToHclTerraform(struct?: SystemlimitsControllerLimitsIpaddressLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_group_per_match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressGroupPerMatchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_prefix_per_match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressPrefixPerMatchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_range_per_match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressRangePerMatchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses_per_match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressesPerMatchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsControllerLimitsIpaddressLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsControllerLimitsIpaddressLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressGroupPerMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressGroupPerMatchCriteria = this._ipAddressGroupPerMatchCriteria;
    }
    if (this._ipAddressPrefixPerMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressPrefixPerMatchCriteria = this._ipAddressPrefixPerMatchCriteria;
    }
    if (this._ipAddressRangePerMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressRangePerMatchCriteria = this._ipAddressRangePerMatchCriteria;
    }
    if (this._ipAddressesPerMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressesPerMatchCriteria = this._ipAddressesPerMatchCriteria;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsControllerLimitsIpaddressLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressGroupPerMatchCriteria = undefined;
      this._ipAddressPrefixPerMatchCriteria = undefined;
      this._ipAddressRangePerMatchCriteria = undefined;
      this._ipAddressesPerMatchCriteria = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressGroupPerMatchCriteria = value.ipAddressGroupPerMatchCriteria;
      this._ipAddressPrefixPerMatchCriteria = value.ipAddressPrefixPerMatchCriteria;
      this._ipAddressRangePerMatchCriteria = value.ipAddressRangePerMatchCriteria;
      this._ipAddressesPerMatchCriteria = value.ipAddressesPerMatchCriteria;
    }
  }

  // ip_address_group_per_match_criteria - computed: true, optional: true, required: false
  private _ipAddressGroupPerMatchCriteria?: string; 
  public get ipAddressGroupPerMatchCriteria() {
    return this.getStringAttribute('ip_address_group_per_match_criteria');
  }
  public set ipAddressGroupPerMatchCriteria(value: string) {
    this._ipAddressGroupPerMatchCriteria = value;
  }
  public resetIpAddressGroupPerMatchCriteria() {
    this._ipAddressGroupPerMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressGroupPerMatchCriteriaInput() {
    return this._ipAddressGroupPerMatchCriteria;
  }

  // ip_address_prefix_per_match_criteria - computed: true, optional: true, required: false
  private _ipAddressPrefixPerMatchCriteria?: string; 
  public get ipAddressPrefixPerMatchCriteria() {
    return this.getStringAttribute('ip_address_prefix_per_match_criteria');
  }
  public set ipAddressPrefixPerMatchCriteria(value: string) {
    this._ipAddressPrefixPerMatchCriteria = value;
  }
  public resetIpAddressPrefixPerMatchCriteria() {
    this._ipAddressPrefixPerMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPrefixPerMatchCriteriaInput() {
    return this._ipAddressPrefixPerMatchCriteria;
  }

  // ip_address_range_per_match_criteria - computed: true, optional: true, required: false
  private _ipAddressRangePerMatchCriteria?: string; 
  public get ipAddressRangePerMatchCriteria() {
    return this.getStringAttribute('ip_address_range_per_match_criteria');
  }
  public set ipAddressRangePerMatchCriteria(value: string) {
    this._ipAddressRangePerMatchCriteria = value;
  }
  public resetIpAddressRangePerMatchCriteria() {
    this._ipAddressRangePerMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressRangePerMatchCriteriaInput() {
    return this._ipAddressRangePerMatchCriteria;
  }

  // ip_addresses_per_match_criteria - computed: true, optional: true, required: false
  private _ipAddressesPerMatchCriteria?: string; 
  public get ipAddressesPerMatchCriteria() {
    return this.getStringAttribute('ip_addresses_per_match_criteria');
  }
  public set ipAddressesPerMatchCriteria(value: string) {
    this._ipAddressesPerMatchCriteria = value;
  }
  public resetIpAddressesPerMatchCriteria() {
    this._ipAddressesPerMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesPerMatchCriteriaInput() {
    return this._ipAddressesPerMatchCriteria;
  }
}

export class SystemlimitsControllerLimitsIpaddressLimitsList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsControllerLimitsIpaddressLimits[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsControllerLimitsIpaddressLimitsOutputReference {
    return new SystemlimitsControllerLimitsIpaddressLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsControllerLimitsL7Limits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#http_policies_per_vs Systemlimits#http_policies_per_vs}
  */
  readonly httpPoliciesPerVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_compression_filters Systemlimits#num_compression_filters}
  */
  readonly numCompressionFilters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_custom_str Systemlimits#num_custom_str}
  */
  readonly numCustomStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_matches_per_rule Systemlimits#num_matches_per_rule}
  */
  readonly numMatchesPerRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_rules_per_evh_host Systemlimits#num_rules_per_evh_host}
  */
  readonly numRulesPerEvhHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_rules_per_http_policy Systemlimits#num_rules_per_http_policy}
  */
  readonly numRulesPerHttpPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_strgroups_per_match Systemlimits#num_strgroups_per_match}
  */
  readonly numStrgroupsPerMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#str_cache_mime Systemlimits#str_cache_mime}
  */
  readonly strCacheMime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#str_groups_cache_mime Systemlimits#str_groups_cache_mime}
  */
  readonly strGroupsCacheMime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#str_groups_no_cache_mime Systemlimits#str_groups_no_cache_mime}
  */
  readonly strGroupsNoCacheMime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#str_groups_no_cache_uri Systemlimits#str_groups_no_cache_uri}
  */
  readonly strGroupsNoCacheUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#str_no_cache_mime Systemlimits#str_no_cache_mime}
  */
  readonly strNoCacheMime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#str_no_cache_uri Systemlimits#str_no_cache_uri}
  */
  readonly strNoCacheUri?: string;
}

export function systemlimitsControllerLimitsL7LimitsToTerraform(struct?: SystemlimitsControllerLimitsL7Limits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_policies_per_vs: cdktf.stringToTerraform(struct!.httpPoliciesPerVs),
    num_compression_filters: cdktf.stringToTerraform(struct!.numCompressionFilters),
    num_custom_str: cdktf.stringToTerraform(struct!.numCustomStr),
    num_matches_per_rule: cdktf.stringToTerraform(struct!.numMatchesPerRule),
    num_rules_per_evh_host: cdktf.stringToTerraform(struct!.numRulesPerEvhHost),
    num_rules_per_http_policy: cdktf.stringToTerraform(struct!.numRulesPerHttpPolicy),
    num_strgroups_per_match: cdktf.stringToTerraform(struct!.numStrgroupsPerMatch),
    str_cache_mime: cdktf.stringToTerraform(struct!.strCacheMime),
    str_groups_cache_mime: cdktf.stringToTerraform(struct!.strGroupsCacheMime),
    str_groups_no_cache_mime: cdktf.stringToTerraform(struct!.strGroupsNoCacheMime),
    str_groups_no_cache_uri: cdktf.stringToTerraform(struct!.strGroupsNoCacheUri),
    str_no_cache_mime: cdktf.stringToTerraform(struct!.strNoCacheMime),
    str_no_cache_uri: cdktf.stringToTerraform(struct!.strNoCacheUri),
  }
}


export function systemlimitsControllerLimitsL7LimitsToHclTerraform(struct?: SystemlimitsControllerLimitsL7Limits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_policies_per_vs: {
      value: cdktf.stringToHclTerraform(struct!.httpPoliciesPerVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_compression_filters: {
      value: cdktf.stringToHclTerraform(struct!.numCompressionFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_custom_str: {
      value: cdktf.stringToHclTerraform(struct!.numCustomStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_matches_per_rule: {
      value: cdktf.stringToHclTerraform(struct!.numMatchesPerRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_rules_per_evh_host: {
      value: cdktf.stringToHclTerraform(struct!.numRulesPerEvhHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_rules_per_http_policy: {
      value: cdktf.stringToHclTerraform(struct!.numRulesPerHttpPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_strgroups_per_match: {
      value: cdktf.stringToHclTerraform(struct!.numStrgroupsPerMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_cache_mime: {
      value: cdktf.stringToHclTerraform(struct!.strCacheMime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_groups_cache_mime: {
      value: cdktf.stringToHclTerraform(struct!.strGroupsCacheMime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_groups_no_cache_mime: {
      value: cdktf.stringToHclTerraform(struct!.strGroupsNoCacheMime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_groups_no_cache_uri: {
      value: cdktf.stringToHclTerraform(struct!.strGroupsNoCacheUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_no_cache_mime: {
      value: cdktf.stringToHclTerraform(struct!.strNoCacheMime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_no_cache_uri: {
      value: cdktf.stringToHclTerraform(struct!.strNoCacheUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsControllerLimitsL7LimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsControllerLimitsL7Limits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPoliciesPerVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPoliciesPerVs = this._httpPoliciesPerVs;
    }
    if (this._numCompressionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCompressionFilters = this._numCompressionFilters;
    }
    if (this._numCustomStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCustomStr = this._numCustomStr;
    }
    if (this._numMatchesPerRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.numMatchesPerRule = this._numMatchesPerRule;
    }
    if (this._numRulesPerEvhHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRulesPerEvhHost = this._numRulesPerEvhHost;
    }
    if (this._numRulesPerHttpPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRulesPerHttpPolicy = this._numRulesPerHttpPolicy;
    }
    if (this._numStrgroupsPerMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.numStrgroupsPerMatch = this._numStrgroupsPerMatch;
    }
    if (this._strCacheMime !== undefined) {
      hasAnyValues = true;
      internalValueResult.strCacheMime = this._strCacheMime;
    }
    if (this._strGroupsCacheMime !== undefined) {
      hasAnyValues = true;
      internalValueResult.strGroupsCacheMime = this._strGroupsCacheMime;
    }
    if (this._strGroupsNoCacheMime !== undefined) {
      hasAnyValues = true;
      internalValueResult.strGroupsNoCacheMime = this._strGroupsNoCacheMime;
    }
    if (this._strGroupsNoCacheUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.strGroupsNoCacheUri = this._strGroupsNoCacheUri;
    }
    if (this._strNoCacheMime !== undefined) {
      hasAnyValues = true;
      internalValueResult.strNoCacheMime = this._strNoCacheMime;
    }
    if (this._strNoCacheUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.strNoCacheUri = this._strNoCacheUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsControllerLimitsL7Limits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpPoliciesPerVs = undefined;
      this._numCompressionFilters = undefined;
      this._numCustomStr = undefined;
      this._numMatchesPerRule = undefined;
      this._numRulesPerEvhHost = undefined;
      this._numRulesPerHttpPolicy = undefined;
      this._numStrgroupsPerMatch = undefined;
      this._strCacheMime = undefined;
      this._strGroupsCacheMime = undefined;
      this._strGroupsNoCacheMime = undefined;
      this._strGroupsNoCacheUri = undefined;
      this._strNoCacheMime = undefined;
      this._strNoCacheUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpPoliciesPerVs = value.httpPoliciesPerVs;
      this._numCompressionFilters = value.numCompressionFilters;
      this._numCustomStr = value.numCustomStr;
      this._numMatchesPerRule = value.numMatchesPerRule;
      this._numRulesPerEvhHost = value.numRulesPerEvhHost;
      this._numRulesPerHttpPolicy = value.numRulesPerHttpPolicy;
      this._numStrgroupsPerMatch = value.numStrgroupsPerMatch;
      this._strCacheMime = value.strCacheMime;
      this._strGroupsCacheMime = value.strGroupsCacheMime;
      this._strGroupsNoCacheMime = value.strGroupsNoCacheMime;
      this._strGroupsNoCacheUri = value.strGroupsNoCacheUri;
      this._strNoCacheMime = value.strNoCacheMime;
      this._strNoCacheUri = value.strNoCacheUri;
    }
  }

  // http_policies_per_vs - computed: true, optional: true, required: false
  private _httpPoliciesPerVs?: string; 
  public get httpPoliciesPerVs() {
    return this.getStringAttribute('http_policies_per_vs');
  }
  public set httpPoliciesPerVs(value: string) {
    this._httpPoliciesPerVs = value;
  }
  public resetHttpPoliciesPerVs() {
    this._httpPoliciesPerVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPoliciesPerVsInput() {
    return this._httpPoliciesPerVs;
  }

  // num_compression_filters - computed: true, optional: true, required: false
  private _numCompressionFilters?: string; 
  public get numCompressionFilters() {
    return this.getStringAttribute('num_compression_filters');
  }
  public set numCompressionFilters(value: string) {
    this._numCompressionFilters = value;
  }
  public resetNumCompressionFilters() {
    this._numCompressionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCompressionFiltersInput() {
    return this._numCompressionFilters;
  }

  // num_custom_str - computed: true, optional: true, required: false
  private _numCustomStr?: string; 
  public get numCustomStr() {
    return this.getStringAttribute('num_custom_str');
  }
  public set numCustomStr(value: string) {
    this._numCustomStr = value;
  }
  public resetNumCustomStr() {
    this._numCustomStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCustomStrInput() {
    return this._numCustomStr;
  }

  // num_matches_per_rule - computed: true, optional: true, required: false
  private _numMatchesPerRule?: string; 
  public get numMatchesPerRule() {
    return this.getStringAttribute('num_matches_per_rule');
  }
  public set numMatchesPerRule(value: string) {
    this._numMatchesPerRule = value;
  }
  public resetNumMatchesPerRule() {
    this._numMatchesPerRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numMatchesPerRuleInput() {
    return this._numMatchesPerRule;
  }

  // num_rules_per_evh_host - computed: true, optional: true, required: false
  private _numRulesPerEvhHost?: string; 
  public get numRulesPerEvhHost() {
    return this.getStringAttribute('num_rules_per_evh_host');
  }
  public set numRulesPerEvhHost(value: string) {
    this._numRulesPerEvhHost = value;
  }
  public resetNumRulesPerEvhHost() {
    this._numRulesPerEvhHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRulesPerEvhHostInput() {
    return this._numRulesPerEvhHost;
  }

  // num_rules_per_http_policy - computed: true, optional: true, required: false
  private _numRulesPerHttpPolicy?: string; 
  public get numRulesPerHttpPolicy() {
    return this.getStringAttribute('num_rules_per_http_policy');
  }
  public set numRulesPerHttpPolicy(value: string) {
    this._numRulesPerHttpPolicy = value;
  }
  public resetNumRulesPerHttpPolicy() {
    this._numRulesPerHttpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRulesPerHttpPolicyInput() {
    return this._numRulesPerHttpPolicy;
  }

  // num_strgroups_per_match - computed: true, optional: true, required: false
  private _numStrgroupsPerMatch?: string; 
  public get numStrgroupsPerMatch() {
    return this.getStringAttribute('num_strgroups_per_match');
  }
  public set numStrgroupsPerMatch(value: string) {
    this._numStrgroupsPerMatch = value;
  }
  public resetNumStrgroupsPerMatch() {
    this._numStrgroupsPerMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numStrgroupsPerMatchInput() {
    return this._numStrgroupsPerMatch;
  }

  // str_cache_mime - computed: true, optional: true, required: false
  private _strCacheMime?: string; 
  public get strCacheMime() {
    return this.getStringAttribute('str_cache_mime');
  }
  public set strCacheMime(value: string) {
    this._strCacheMime = value;
  }
  public resetStrCacheMime() {
    this._strCacheMime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strCacheMimeInput() {
    return this._strCacheMime;
  }

  // str_groups_cache_mime - computed: true, optional: true, required: false
  private _strGroupsCacheMime?: string; 
  public get strGroupsCacheMime() {
    return this.getStringAttribute('str_groups_cache_mime');
  }
  public set strGroupsCacheMime(value: string) {
    this._strGroupsCacheMime = value;
  }
  public resetStrGroupsCacheMime() {
    this._strGroupsCacheMime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strGroupsCacheMimeInput() {
    return this._strGroupsCacheMime;
  }

  // str_groups_no_cache_mime - computed: true, optional: true, required: false
  private _strGroupsNoCacheMime?: string; 
  public get strGroupsNoCacheMime() {
    return this.getStringAttribute('str_groups_no_cache_mime');
  }
  public set strGroupsNoCacheMime(value: string) {
    this._strGroupsNoCacheMime = value;
  }
  public resetStrGroupsNoCacheMime() {
    this._strGroupsNoCacheMime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strGroupsNoCacheMimeInput() {
    return this._strGroupsNoCacheMime;
  }

  // str_groups_no_cache_uri - computed: true, optional: true, required: false
  private _strGroupsNoCacheUri?: string; 
  public get strGroupsNoCacheUri() {
    return this.getStringAttribute('str_groups_no_cache_uri');
  }
  public set strGroupsNoCacheUri(value: string) {
    this._strGroupsNoCacheUri = value;
  }
  public resetStrGroupsNoCacheUri() {
    this._strGroupsNoCacheUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strGroupsNoCacheUriInput() {
    return this._strGroupsNoCacheUri;
  }

  // str_no_cache_mime - computed: true, optional: true, required: false
  private _strNoCacheMime?: string; 
  public get strNoCacheMime() {
    return this.getStringAttribute('str_no_cache_mime');
  }
  public set strNoCacheMime(value: string) {
    this._strNoCacheMime = value;
  }
  public resetStrNoCacheMime() {
    this._strNoCacheMime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strNoCacheMimeInput() {
    return this._strNoCacheMime;
  }

  // str_no_cache_uri - computed: true, optional: true, required: false
  private _strNoCacheUri?: string; 
  public get strNoCacheUri() {
    return this.getStringAttribute('str_no_cache_uri');
  }
  public set strNoCacheUri(value: string) {
    this._strNoCacheUri = value;
  }
  public resetStrNoCacheUri() {
    this._strNoCacheUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strNoCacheUriInput() {
    return this._strNoCacheUri;
  }
}

export class SystemlimitsControllerLimitsL7LimitsList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsControllerLimitsL7Limits[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsControllerLimitsL7LimitsOutputReference {
    return new SystemlimitsControllerLimitsL7LimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsControllerLimitsWafLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_allowed_content_types Systemlimits#num_allowed_content_types}
  */
  readonly numAllowedContentTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_allowed_request_content_type_charsets Systemlimits#num_allowed_request_content_type_charsets}
  */
  readonly numAllowedRequestContentTypeCharsets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_allowlist_policy_rules Systemlimits#num_allowlist_policy_rules}
  */
  readonly numAllowlistPolicyRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_applications Systemlimits#num_applications}
  */
  readonly numApplications?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_content_type_mappings Systemlimits#num_content_type_mappings}
  */
  readonly numContentTypeMappings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_data_files Systemlimits#num_data_files}
  */
  readonly numDataFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_exclude_list_per_rule_group Systemlimits#num_exclude_list_per_rule_group}
  */
  readonly numExcludeListPerRuleGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_pre_post_crs_groups Systemlimits#num_pre_post_crs_groups}
  */
  readonly numPrePostCrsGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_psm_groups Systemlimits#num_psm_groups}
  */
  readonly numPsmGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_psm_match_elements Systemlimits#num_psm_match_elements}
  */
  readonly numPsmMatchElements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_psm_match_rules_per_loc Systemlimits#num_psm_match_rules_per_loc}
  */
  readonly numPsmMatchRulesPerLoc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_psm_total_locations Systemlimits#num_psm_total_locations}
  */
  readonly numPsmTotalLocations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_restricted_extensions Systemlimits#num_restricted_extensions}
  */
  readonly numRestrictedExtensions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_restricted_headers Systemlimits#num_restricted_headers}
  */
  readonly numRestrictedHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_rule_tags Systemlimits#num_rule_tags}
  */
  readonly numRuleTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_rules_per_rulegroup Systemlimits#num_rules_per_rulegroup}
  */
  readonly numRulesPerRulegroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_static_extensions Systemlimits#num_static_extensions}
  */
  readonly numStaticExtensions?: string;
}

export function systemlimitsControllerLimitsWafLimitsToTerraform(struct?: SystemlimitsControllerLimitsWafLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_allowed_content_types: cdktf.stringToTerraform(struct!.numAllowedContentTypes),
    num_allowed_request_content_type_charsets: cdktf.stringToTerraform(struct!.numAllowedRequestContentTypeCharsets),
    num_allowlist_policy_rules: cdktf.stringToTerraform(struct!.numAllowlistPolicyRules),
    num_applications: cdktf.stringToTerraform(struct!.numApplications),
    num_content_type_mappings: cdktf.stringToTerraform(struct!.numContentTypeMappings),
    num_data_files: cdktf.stringToTerraform(struct!.numDataFiles),
    num_exclude_list_per_rule_group: cdktf.stringToTerraform(struct!.numExcludeListPerRuleGroup),
    num_pre_post_crs_groups: cdktf.stringToTerraform(struct!.numPrePostCrsGroups),
    num_psm_groups: cdktf.stringToTerraform(struct!.numPsmGroups),
    num_psm_match_elements: cdktf.stringToTerraform(struct!.numPsmMatchElements),
    num_psm_match_rules_per_loc: cdktf.stringToTerraform(struct!.numPsmMatchRulesPerLoc),
    num_psm_total_locations: cdktf.stringToTerraform(struct!.numPsmTotalLocations),
    num_restricted_extensions: cdktf.stringToTerraform(struct!.numRestrictedExtensions),
    num_restricted_headers: cdktf.stringToTerraform(struct!.numRestrictedHeaders),
    num_rule_tags: cdktf.stringToTerraform(struct!.numRuleTags),
    num_rules_per_rulegroup: cdktf.stringToTerraform(struct!.numRulesPerRulegroup),
    num_static_extensions: cdktf.stringToTerraform(struct!.numStaticExtensions),
  }
}


export function systemlimitsControllerLimitsWafLimitsToHclTerraform(struct?: SystemlimitsControllerLimitsWafLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_allowed_content_types: {
      value: cdktf.stringToHclTerraform(struct!.numAllowedContentTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_allowed_request_content_type_charsets: {
      value: cdktf.stringToHclTerraform(struct!.numAllowedRequestContentTypeCharsets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_allowlist_policy_rules: {
      value: cdktf.stringToHclTerraform(struct!.numAllowlistPolicyRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_applications: {
      value: cdktf.stringToHclTerraform(struct!.numApplications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_content_type_mappings: {
      value: cdktf.stringToHclTerraform(struct!.numContentTypeMappings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_data_files: {
      value: cdktf.stringToHclTerraform(struct!.numDataFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_exclude_list_per_rule_group: {
      value: cdktf.stringToHclTerraform(struct!.numExcludeListPerRuleGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_pre_post_crs_groups: {
      value: cdktf.stringToHclTerraform(struct!.numPrePostCrsGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_psm_groups: {
      value: cdktf.stringToHclTerraform(struct!.numPsmGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_psm_match_elements: {
      value: cdktf.stringToHclTerraform(struct!.numPsmMatchElements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_psm_match_rules_per_loc: {
      value: cdktf.stringToHclTerraform(struct!.numPsmMatchRulesPerLoc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_psm_total_locations: {
      value: cdktf.stringToHclTerraform(struct!.numPsmTotalLocations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_restricted_extensions: {
      value: cdktf.stringToHclTerraform(struct!.numRestrictedExtensions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_restricted_headers: {
      value: cdktf.stringToHclTerraform(struct!.numRestrictedHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_rule_tags: {
      value: cdktf.stringToHclTerraform(struct!.numRuleTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_rules_per_rulegroup: {
      value: cdktf.stringToHclTerraform(struct!.numRulesPerRulegroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_static_extensions: {
      value: cdktf.stringToHclTerraform(struct!.numStaticExtensions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsControllerLimitsWafLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsControllerLimitsWafLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numAllowedContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numAllowedContentTypes = this._numAllowedContentTypes;
    }
    if (this._numAllowedRequestContentTypeCharsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numAllowedRequestContentTypeCharsets = this._numAllowedRequestContentTypeCharsets;
    }
    if (this._numAllowlistPolicyRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.numAllowlistPolicyRules = this._numAllowlistPolicyRules;
    }
    if (this._numApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.numApplications = this._numApplications;
    }
    if (this._numContentTypeMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.numContentTypeMappings = this._numContentTypeMappings;
    }
    if (this._numDataFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDataFiles = this._numDataFiles;
    }
    if (this._numExcludeListPerRuleGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.numExcludeListPerRuleGroup = this._numExcludeListPerRuleGroup;
    }
    if (this._numPrePostCrsGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPrePostCrsGroups = this._numPrePostCrsGroups;
    }
    if (this._numPsmGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPsmGroups = this._numPsmGroups;
    }
    if (this._numPsmMatchElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPsmMatchElements = this._numPsmMatchElements;
    }
    if (this._numPsmMatchRulesPerLoc !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPsmMatchRulesPerLoc = this._numPsmMatchRulesPerLoc;
    }
    if (this._numPsmTotalLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPsmTotalLocations = this._numPsmTotalLocations;
    }
    if (this._numRestrictedExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRestrictedExtensions = this._numRestrictedExtensions;
    }
    if (this._numRestrictedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRestrictedHeaders = this._numRestrictedHeaders;
    }
    if (this._numRuleTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRuleTags = this._numRuleTags;
    }
    if (this._numRulesPerRulegroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRulesPerRulegroup = this._numRulesPerRulegroup;
    }
    if (this._numStaticExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numStaticExtensions = this._numStaticExtensions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsControllerLimitsWafLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numAllowedContentTypes = undefined;
      this._numAllowedRequestContentTypeCharsets = undefined;
      this._numAllowlistPolicyRules = undefined;
      this._numApplications = undefined;
      this._numContentTypeMappings = undefined;
      this._numDataFiles = undefined;
      this._numExcludeListPerRuleGroup = undefined;
      this._numPrePostCrsGroups = undefined;
      this._numPsmGroups = undefined;
      this._numPsmMatchElements = undefined;
      this._numPsmMatchRulesPerLoc = undefined;
      this._numPsmTotalLocations = undefined;
      this._numRestrictedExtensions = undefined;
      this._numRestrictedHeaders = undefined;
      this._numRuleTags = undefined;
      this._numRulesPerRulegroup = undefined;
      this._numStaticExtensions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numAllowedContentTypes = value.numAllowedContentTypes;
      this._numAllowedRequestContentTypeCharsets = value.numAllowedRequestContentTypeCharsets;
      this._numAllowlistPolicyRules = value.numAllowlistPolicyRules;
      this._numApplications = value.numApplications;
      this._numContentTypeMappings = value.numContentTypeMappings;
      this._numDataFiles = value.numDataFiles;
      this._numExcludeListPerRuleGroup = value.numExcludeListPerRuleGroup;
      this._numPrePostCrsGroups = value.numPrePostCrsGroups;
      this._numPsmGroups = value.numPsmGroups;
      this._numPsmMatchElements = value.numPsmMatchElements;
      this._numPsmMatchRulesPerLoc = value.numPsmMatchRulesPerLoc;
      this._numPsmTotalLocations = value.numPsmTotalLocations;
      this._numRestrictedExtensions = value.numRestrictedExtensions;
      this._numRestrictedHeaders = value.numRestrictedHeaders;
      this._numRuleTags = value.numRuleTags;
      this._numRulesPerRulegroup = value.numRulesPerRulegroup;
      this._numStaticExtensions = value.numStaticExtensions;
    }
  }

  // num_allowed_content_types - computed: true, optional: true, required: false
  private _numAllowedContentTypes?: string; 
  public get numAllowedContentTypes() {
    return this.getStringAttribute('num_allowed_content_types');
  }
  public set numAllowedContentTypes(value: string) {
    this._numAllowedContentTypes = value;
  }
  public resetNumAllowedContentTypes() {
    this._numAllowedContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numAllowedContentTypesInput() {
    return this._numAllowedContentTypes;
  }

  // num_allowed_request_content_type_charsets - computed: true, optional: true, required: false
  private _numAllowedRequestContentTypeCharsets?: string; 
  public get numAllowedRequestContentTypeCharsets() {
    return this.getStringAttribute('num_allowed_request_content_type_charsets');
  }
  public set numAllowedRequestContentTypeCharsets(value: string) {
    this._numAllowedRequestContentTypeCharsets = value;
  }
  public resetNumAllowedRequestContentTypeCharsets() {
    this._numAllowedRequestContentTypeCharsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numAllowedRequestContentTypeCharsetsInput() {
    return this._numAllowedRequestContentTypeCharsets;
  }

  // num_allowlist_policy_rules - computed: true, optional: true, required: false
  private _numAllowlistPolicyRules?: string; 
  public get numAllowlistPolicyRules() {
    return this.getStringAttribute('num_allowlist_policy_rules');
  }
  public set numAllowlistPolicyRules(value: string) {
    this._numAllowlistPolicyRules = value;
  }
  public resetNumAllowlistPolicyRules() {
    this._numAllowlistPolicyRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numAllowlistPolicyRulesInput() {
    return this._numAllowlistPolicyRules;
  }

  // num_applications - computed: true, optional: true, required: false
  private _numApplications?: string; 
  public get numApplications() {
    return this.getStringAttribute('num_applications');
  }
  public set numApplications(value: string) {
    this._numApplications = value;
  }
  public resetNumApplications() {
    this._numApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numApplicationsInput() {
    return this._numApplications;
  }

  // num_content_type_mappings - computed: true, optional: true, required: false
  private _numContentTypeMappings?: string; 
  public get numContentTypeMappings() {
    return this.getStringAttribute('num_content_type_mappings');
  }
  public set numContentTypeMappings(value: string) {
    this._numContentTypeMappings = value;
  }
  public resetNumContentTypeMappings() {
    this._numContentTypeMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numContentTypeMappingsInput() {
    return this._numContentTypeMappings;
  }

  // num_data_files - computed: true, optional: true, required: false
  private _numDataFiles?: string; 
  public get numDataFiles() {
    return this.getStringAttribute('num_data_files');
  }
  public set numDataFiles(value: string) {
    this._numDataFiles = value;
  }
  public resetNumDataFiles() {
    this._numDataFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDataFilesInput() {
    return this._numDataFiles;
  }

  // num_exclude_list_per_rule_group - computed: true, optional: true, required: false
  private _numExcludeListPerRuleGroup?: string; 
  public get numExcludeListPerRuleGroup() {
    return this.getStringAttribute('num_exclude_list_per_rule_group');
  }
  public set numExcludeListPerRuleGroup(value: string) {
    this._numExcludeListPerRuleGroup = value;
  }
  public resetNumExcludeListPerRuleGroup() {
    this._numExcludeListPerRuleGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numExcludeListPerRuleGroupInput() {
    return this._numExcludeListPerRuleGroup;
  }

  // num_pre_post_crs_groups - computed: true, optional: true, required: false
  private _numPrePostCrsGroups?: string; 
  public get numPrePostCrsGroups() {
    return this.getStringAttribute('num_pre_post_crs_groups');
  }
  public set numPrePostCrsGroups(value: string) {
    this._numPrePostCrsGroups = value;
  }
  public resetNumPrePostCrsGroups() {
    this._numPrePostCrsGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPrePostCrsGroupsInput() {
    return this._numPrePostCrsGroups;
  }

  // num_psm_groups - computed: true, optional: true, required: false
  private _numPsmGroups?: string; 
  public get numPsmGroups() {
    return this.getStringAttribute('num_psm_groups');
  }
  public set numPsmGroups(value: string) {
    this._numPsmGroups = value;
  }
  public resetNumPsmGroups() {
    this._numPsmGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPsmGroupsInput() {
    return this._numPsmGroups;
  }

  // num_psm_match_elements - computed: true, optional: true, required: false
  private _numPsmMatchElements?: string; 
  public get numPsmMatchElements() {
    return this.getStringAttribute('num_psm_match_elements');
  }
  public set numPsmMatchElements(value: string) {
    this._numPsmMatchElements = value;
  }
  public resetNumPsmMatchElements() {
    this._numPsmMatchElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPsmMatchElementsInput() {
    return this._numPsmMatchElements;
  }

  // num_psm_match_rules_per_loc - computed: true, optional: true, required: false
  private _numPsmMatchRulesPerLoc?: string; 
  public get numPsmMatchRulesPerLoc() {
    return this.getStringAttribute('num_psm_match_rules_per_loc');
  }
  public set numPsmMatchRulesPerLoc(value: string) {
    this._numPsmMatchRulesPerLoc = value;
  }
  public resetNumPsmMatchRulesPerLoc() {
    this._numPsmMatchRulesPerLoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPsmMatchRulesPerLocInput() {
    return this._numPsmMatchRulesPerLoc;
  }

  // num_psm_total_locations - computed: true, optional: true, required: false
  private _numPsmTotalLocations?: string; 
  public get numPsmTotalLocations() {
    return this.getStringAttribute('num_psm_total_locations');
  }
  public set numPsmTotalLocations(value: string) {
    this._numPsmTotalLocations = value;
  }
  public resetNumPsmTotalLocations() {
    this._numPsmTotalLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPsmTotalLocationsInput() {
    return this._numPsmTotalLocations;
  }

  // num_restricted_extensions - computed: true, optional: true, required: false
  private _numRestrictedExtensions?: string; 
  public get numRestrictedExtensions() {
    return this.getStringAttribute('num_restricted_extensions');
  }
  public set numRestrictedExtensions(value: string) {
    this._numRestrictedExtensions = value;
  }
  public resetNumRestrictedExtensions() {
    this._numRestrictedExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRestrictedExtensionsInput() {
    return this._numRestrictedExtensions;
  }

  // num_restricted_headers - computed: true, optional: true, required: false
  private _numRestrictedHeaders?: string; 
  public get numRestrictedHeaders() {
    return this.getStringAttribute('num_restricted_headers');
  }
  public set numRestrictedHeaders(value: string) {
    this._numRestrictedHeaders = value;
  }
  public resetNumRestrictedHeaders() {
    this._numRestrictedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRestrictedHeadersInput() {
    return this._numRestrictedHeaders;
  }

  // num_rule_tags - computed: true, optional: true, required: false
  private _numRuleTags?: string; 
  public get numRuleTags() {
    return this.getStringAttribute('num_rule_tags');
  }
  public set numRuleTags(value: string) {
    this._numRuleTags = value;
  }
  public resetNumRuleTags() {
    this._numRuleTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRuleTagsInput() {
    return this._numRuleTags;
  }

  // num_rules_per_rulegroup - computed: true, optional: true, required: false
  private _numRulesPerRulegroup?: string; 
  public get numRulesPerRulegroup() {
    return this.getStringAttribute('num_rules_per_rulegroup');
  }
  public set numRulesPerRulegroup(value: string) {
    this._numRulesPerRulegroup = value;
  }
  public resetNumRulesPerRulegroup() {
    this._numRulesPerRulegroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRulesPerRulegroupInput() {
    return this._numRulesPerRulegroup;
  }

  // num_static_extensions - computed: true, optional: true, required: false
  private _numStaticExtensions?: string; 
  public get numStaticExtensions() {
    return this.getStringAttribute('num_static_extensions');
  }
  public set numStaticExtensions(value: string) {
    this._numStaticExtensions = value;
  }
  public resetNumStaticExtensions() {
    this._numStaticExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numStaticExtensionsInput() {
    return this._numStaticExtensions;
  }
}

export class SystemlimitsControllerLimitsWafLimitsList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsControllerLimitsWafLimits[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsControllerLimitsWafLimitsOutputReference {
    return new SystemlimitsControllerLimitsWafLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsControllerLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#certificates_per_virtualservice Systemlimits#certificates_per_virtualservice}
  */
  readonly certificatesPerVirtualservice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#default_routes_per_vrfcontext Systemlimits#default_routes_per_vrfcontext}
  */
  readonly defaultRoutesPerVrfcontext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#gateway_mon_per_vrf Systemlimits#gateway_mon_per_vrf}
  */
  readonly gatewayMonPerVrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#ips_per_ipgroup Systemlimits#ips_per_ipgroup}
  */
  readonly ipsPerIpgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#poolgroups_per_virtualservice Systemlimits#poolgroups_per_virtualservice}
  */
  readonly poolgroupsPerVirtualservice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#pools_per_poolgroup Systemlimits#pools_per_poolgroup}
  */
  readonly poolsPerPoolgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#pools_per_virtualservice Systemlimits#pools_per_virtualservice}
  */
  readonly poolsPerVirtualservice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#routes_per_vrfcontext Systemlimits#routes_per_vrfcontext}
  */
  readonly routesPerVrfcontext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#rules_per_nat_policy Systemlimits#rules_per_nat_policy}
  */
  readonly rulesPerNatPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#rules_per_networksecuritypolicy Systemlimits#rules_per_networksecuritypolicy}
  */
  readonly rulesPerNetworksecuritypolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#servers_per_pool Systemlimits#servers_per_pool}
  */
  readonly serversPerPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#sni_children_per_parent Systemlimits#sni_children_per_parent}
  */
  readonly sniChildrenPerParent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#strings_per_stringgroup Systemlimits#strings_per_stringgroup}
  */
  readonly stringsPerStringgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#vs_bgp_scaleout Systemlimits#vs_bgp_scaleout}
  */
  readonly vsBgpScaleout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#vs_l2_scaleout Systemlimits#vs_l2_scaleout}
  */
  readonly vsL2Scaleout?: string;
  /**
  * bot_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#bot_limits Systemlimits#bot_limits}
  */
  readonly botLimits?: SystemlimitsControllerLimitsBotLimits[] | cdktf.IResolvable;
  /**
  * controller_cloud_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#controller_cloud_limits Systemlimits#controller_cloud_limits}
  */
  readonly controllerCloudLimits?: SystemlimitsControllerLimitsControllerCloudLimits[] | cdktf.IResolvable;
  /**
  * controller_sizing_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#controller_sizing_limits Systemlimits#controller_sizing_limits}
  */
  readonly controllerSizingLimits?: SystemlimitsControllerLimitsControllerSizingLimits[] | cdktf.IResolvable;
  /**
  * ipaddress_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#ipaddress_limits Systemlimits#ipaddress_limits}
  */
  readonly ipaddressLimits?: SystemlimitsControllerLimitsIpaddressLimits[] | cdktf.IResolvable;
  /**
  * l7_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#l7_limits Systemlimits#l7_limits}
  */
  readonly l7Limits?: SystemlimitsControllerLimitsL7Limits[] | cdktf.IResolvable;
  /**
  * waf_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#waf_limits Systemlimits#waf_limits}
  */
  readonly wafLimits?: SystemlimitsControllerLimitsWafLimits[] | cdktf.IResolvable;
}

export function systemlimitsControllerLimitsToTerraform(struct?: SystemlimitsControllerLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates_per_virtualservice: cdktf.stringToTerraform(struct!.certificatesPerVirtualservice),
    default_routes_per_vrfcontext: cdktf.stringToTerraform(struct!.defaultRoutesPerVrfcontext),
    gateway_mon_per_vrf: cdktf.stringToTerraform(struct!.gatewayMonPerVrf),
    ips_per_ipgroup: cdktf.stringToTerraform(struct!.ipsPerIpgroup),
    poolgroups_per_virtualservice: cdktf.stringToTerraform(struct!.poolgroupsPerVirtualservice),
    pools_per_poolgroup: cdktf.stringToTerraform(struct!.poolsPerPoolgroup),
    pools_per_virtualservice: cdktf.stringToTerraform(struct!.poolsPerVirtualservice),
    routes_per_vrfcontext: cdktf.stringToTerraform(struct!.routesPerVrfcontext),
    rules_per_nat_policy: cdktf.stringToTerraform(struct!.rulesPerNatPolicy),
    rules_per_networksecuritypolicy: cdktf.stringToTerraform(struct!.rulesPerNetworksecuritypolicy),
    servers_per_pool: cdktf.stringToTerraform(struct!.serversPerPool),
    sni_children_per_parent: cdktf.stringToTerraform(struct!.sniChildrenPerParent),
    strings_per_stringgroup: cdktf.stringToTerraform(struct!.stringsPerStringgroup),
    vs_bgp_scaleout: cdktf.stringToTerraform(struct!.vsBgpScaleout),
    vs_l2_scaleout: cdktf.stringToTerraform(struct!.vsL2Scaleout),
    bot_limits: cdktf.listMapper(systemlimitsControllerLimitsBotLimitsToTerraform, true)(struct!.botLimits),
    controller_cloud_limits: cdktf.listMapper(systemlimitsControllerLimitsControllerCloudLimitsToTerraform, true)(struct!.controllerCloudLimits),
    controller_sizing_limits: cdktf.listMapper(systemlimitsControllerLimitsControllerSizingLimitsToTerraform, true)(struct!.controllerSizingLimits),
    ipaddress_limits: cdktf.listMapper(systemlimitsControllerLimitsIpaddressLimitsToTerraform, true)(struct!.ipaddressLimits),
    l7_limits: cdktf.listMapper(systemlimitsControllerLimitsL7LimitsToTerraform, true)(struct!.l7Limits),
    waf_limits: cdktf.listMapper(systemlimitsControllerLimitsWafLimitsToTerraform, true)(struct!.wafLimits),
  }
}


export function systemlimitsControllerLimitsToHclTerraform(struct?: SystemlimitsControllerLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates_per_virtualservice: {
      value: cdktf.stringToHclTerraform(struct!.certificatesPerVirtualservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_routes_per_vrfcontext: {
      value: cdktf.stringToHclTerraform(struct!.defaultRoutesPerVrfcontext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_mon_per_vrf: {
      value: cdktf.stringToHclTerraform(struct!.gatewayMonPerVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips_per_ipgroup: {
      value: cdktf.stringToHclTerraform(struct!.ipsPerIpgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poolgroups_per_virtualservice: {
      value: cdktf.stringToHclTerraform(struct!.poolgroupsPerVirtualservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pools_per_poolgroup: {
      value: cdktf.stringToHclTerraform(struct!.poolsPerPoolgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pools_per_virtualservice: {
      value: cdktf.stringToHclTerraform(struct!.poolsPerVirtualservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes_per_vrfcontext: {
      value: cdktf.stringToHclTerraform(struct!.routesPerVrfcontext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules_per_nat_policy: {
      value: cdktf.stringToHclTerraform(struct!.rulesPerNatPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules_per_networksecuritypolicy: {
      value: cdktf.stringToHclTerraform(struct!.rulesPerNetworksecuritypolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers_per_pool: {
      value: cdktf.stringToHclTerraform(struct!.serversPerPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni_children_per_parent: {
      value: cdktf.stringToHclTerraform(struct!.sniChildrenPerParent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strings_per_stringgroup: {
      value: cdktf.stringToHclTerraform(struct!.stringsPerStringgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_bgp_scaleout: {
      value: cdktf.stringToHclTerraform(struct!.vsBgpScaleout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_l2_scaleout: {
      value: cdktf.stringToHclTerraform(struct!.vsL2Scaleout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bot_limits: {
      value: cdktf.listMapperHcl(systemlimitsControllerLimitsBotLimitsToHclTerraform, true)(struct!.botLimits),
      isBlock: true,
      type: "set",
      storageClassType: "SystemlimitsControllerLimitsBotLimitsList",
    },
    controller_cloud_limits: {
      value: cdktf.listMapperHcl(systemlimitsControllerLimitsControllerCloudLimitsToHclTerraform, true)(struct!.controllerCloudLimits),
      isBlock: true,
      type: "list",
      storageClassType: "SystemlimitsControllerLimitsControllerCloudLimitsList",
    },
    controller_sizing_limits: {
      value: cdktf.listMapperHcl(systemlimitsControllerLimitsControllerSizingLimitsToHclTerraform, true)(struct!.controllerSizingLimits),
      isBlock: true,
      type: "list",
      storageClassType: "SystemlimitsControllerLimitsControllerSizingLimitsList",
    },
    ipaddress_limits: {
      value: cdktf.listMapperHcl(systemlimitsControllerLimitsIpaddressLimitsToHclTerraform, true)(struct!.ipaddressLimits),
      isBlock: true,
      type: "set",
      storageClassType: "SystemlimitsControllerLimitsIpaddressLimitsList",
    },
    l7_limits: {
      value: cdktf.listMapperHcl(systemlimitsControllerLimitsL7LimitsToHclTerraform, true)(struct!.l7Limits),
      isBlock: true,
      type: "set",
      storageClassType: "SystemlimitsControllerLimitsL7LimitsList",
    },
    waf_limits: {
      value: cdktf.listMapperHcl(systemlimitsControllerLimitsWafLimitsToHclTerraform, true)(struct!.wafLimits),
      isBlock: true,
      type: "set",
      storageClassType: "SystemlimitsControllerLimitsWafLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsControllerLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsControllerLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatesPerVirtualservice !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatesPerVirtualservice = this._certificatesPerVirtualservice;
    }
    if (this._defaultRoutesPerVrfcontext !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoutesPerVrfcontext = this._defaultRoutesPerVrfcontext;
    }
    if (this._gatewayMonPerVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMonPerVrf = this._gatewayMonPerVrf;
    }
    if (this._ipsPerIpgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsPerIpgroup = this._ipsPerIpgroup;
    }
    if (this._poolgroupsPerVirtualservice !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolgroupsPerVirtualservice = this._poolgroupsPerVirtualservice;
    }
    if (this._poolsPerPoolgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolsPerPoolgroup = this._poolsPerPoolgroup;
    }
    if (this._poolsPerVirtualservice !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolsPerVirtualservice = this._poolsPerVirtualservice;
    }
    if (this._routesPerVrfcontext !== undefined) {
      hasAnyValues = true;
      internalValueResult.routesPerVrfcontext = this._routesPerVrfcontext;
    }
    if (this._rulesPerNatPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesPerNatPolicy = this._rulesPerNatPolicy;
    }
    if (this._rulesPerNetworksecuritypolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesPerNetworksecuritypolicy = this._rulesPerNetworksecuritypolicy;
    }
    if (this._serversPerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversPerPool = this._serversPerPool;
    }
    if (this._sniChildrenPerParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniChildrenPerParent = this._sniChildrenPerParent;
    }
    if (this._stringsPerStringgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringsPerStringgroup = this._stringsPerStringgroup;
    }
    if (this._vsBgpScaleout !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsBgpScaleout = this._vsBgpScaleout;
    }
    if (this._vsL2Scaleout !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsL2Scaleout = this._vsL2Scaleout;
    }
    if (this._botLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botLimits = this._botLimits?.internalValue;
    }
    if (this._controllerCloudLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerCloudLimits = this._controllerCloudLimits?.internalValue;
    }
    if (this._controllerSizingLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerSizingLimits = this._controllerSizingLimits?.internalValue;
    }
    if (this._ipaddressLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddressLimits = this._ipaddressLimits?.internalValue;
    }
    if (this._l7Limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7Limits = this._l7Limits?.internalValue;
    }
    if (this._wafLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafLimits = this._wafLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsControllerLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatesPerVirtualservice = undefined;
      this._defaultRoutesPerVrfcontext = undefined;
      this._gatewayMonPerVrf = undefined;
      this._ipsPerIpgroup = undefined;
      this._poolgroupsPerVirtualservice = undefined;
      this._poolsPerPoolgroup = undefined;
      this._poolsPerVirtualservice = undefined;
      this._routesPerVrfcontext = undefined;
      this._rulesPerNatPolicy = undefined;
      this._rulesPerNetworksecuritypolicy = undefined;
      this._serversPerPool = undefined;
      this._sniChildrenPerParent = undefined;
      this._stringsPerStringgroup = undefined;
      this._vsBgpScaleout = undefined;
      this._vsL2Scaleout = undefined;
      this._botLimits.internalValue = undefined;
      this._controllerCloudLimits.internalValue = undefined;
      this._controllerSizingLimits.internalValue = undefined;
      this._ipaddressLimits.internalValue = undefined;
      this._l7Limits.internalValue = undefined;
      this._wafLimits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificatesPerVirtualservice = value.certificatesPerVirtualservice;
      this._defaultRoutesPerVrfcontext = value.defaultRoutesPerVrfcontext;
      this._gatewayMonPerVrf = value.gatewayMonPerVrf;
      this._ipsPerIpgroup = value.ipsPerIpgroup;
      this._poolgroupsPerVirtualservice = value.poolgroupsPerVirtualservice;
      this._poolsPerPoolgroup = value.poolsPerPoolgroup;
      this._poolsPerVirtualservice = value.poolsPerVirtualservice;
      this._routesPerVrfcontext = value.routesPerVrfcontext;
      this._rulesPerNatPolicy = value.rulesPerNatPolicy;
      this._rulesPerNetworksecuritypolicy = value.rulesPerNetworksecuritypolicy;
      this._serversPerPool = value.serversPerPool;
      this._sniChildrenPerParent = value.sniChildrenPerParent;
      this._stringsPerStringgroup = value.stringsPerStringgroup;
      this._vsBgpScaleout = value.vsBgpScaleout;
      this._vsL2Scaleout = value.vsL2Scaleout;
      this._botLimits.internalValue = value.botLimits;
      this._controllerCloudLimits.internalValue = value.controllerCloudLimits;
      this._controllerSizingLimits.internalValue = value.controllerSizingLimits;
      this._ipaddressLimits.internalValue = value.ipaddressLimits;
      this._l7Limits.internalValue = value.l7Limits;
      this._wafLimits.internalValue = value.wafLimits;
    }
  }

  // certificates_per_virtualservice - computed: true, optional: true, required: false
  private _certificatesPerVirtualservice?: string; 
  public get certificatesPerVirtualservice() {
    return this.getStringAttribute('certificates_per_virtualservice');
  }
  public set certificatesPerVirtualservice(value: string) {
    this._certificatesPerVirtualservice = value;
  }
  public resetCertificatesPerVirtualservice() {
    this._certificatesPerVirtualservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesPerVirtualserviceInput() {
    return this._certificatesPerVirtualservice;
  }

  // default_routes_per_vrfcontext - computed: true, optional: true, required: false
  private _defaultRoutesPerVrfcontext?: string; 
  public get defaultRoutesPerVrfcontext() {
    return this.getStringAttribute('default_routes_per_vrfcontext');
  }
  public set defaultRoutesPerVrfcontext(value: string) {
    this._defaultRoutesPerVrfcontext = value;
  }
  public resetDefaultRoutesPerVrfcontext() {
    this._defaultRoutesPerVrfcontext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoutesPerVrfcontextInput() {
    return this._defaultRoutesPerVrfcontext;
  }

  // gateway_mon_per_vrf - computed: true, optional: true, required: false
  private _gatewayMonPerVrf?: string; 
  public get gatewayMonPerVrf() {
    return this.getStringAttribute('gateway_mon_per_vrf');
  }
  public set gatewayMonPerVrf(value: string) {
    this._gatewayMonPerVrf = value;
  }
  public resetGatewayMonPerVrf() {
    this._gatewayMonPerVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMonPerVrfInput() {
    return this._gatewayMonPerVrf;
  }

  // ips_per_ipgroup - computed: true, optional: true, required: false
  private _ipsPerIpgroup?: string; 
  public get ipsPerIpgroup() {
    return this.getStringAttribute('ips_per_ipgroup');
  }
  public set ipsPerIpgroup(value: string) {
    this._ipsPerIpgroup = value;
  }
  public resetIpsPerIpgroup() {
    this._ipsPerIpgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsPerIpgroupInput() {
    return this._ipsPerIpgroup;
  }

  // poolgroups_per_virtualservice - computed: true, optional: true, required: false
  private _poolgroupsPerVirtualservice?: string; 
  public get poolgroupsPerVirtualservice() {
    return this.getStringAttribute('poolgroups_per_virtualservice');
  }
  public set poolgroupsPerVirtualservice(value: string) {
    this._poolgroupsPerVirtualservice = value;
  }
  public resetPoolgroupsPerVirtualservice() {
    this._poolgroupsPerVirtualservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolgroupsPerVirtualserviceInput() {
    return this._poolgroupsPerVirtualservice;
  }

  // pools_per_poolgroup - computed: true, optional: true, required: false
  private _poolsPerPoolgroup?: string; 
  public get poolsPerPoolgroup() {
    return this.getStringAttribute('pools_per_poolgroup');
  }
  public set poolsPerPoolgroup(value: string) {
    this._poolsPerPoolgroup = value;
  }
  public resetPoolsPerPoolgroup() {
    this._poolsPerPoolgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsPerPoolgroupInput() {
    return this._poolsPerPoolgroup;
  }

  // pools_per_virtualservice - computed: true, optional: true, required: false
  private _poolsPerVirtualservice?: string; 
  public get poolsPerVirtualservice() {
    return this.getStringAttribute('pools_per_virtualservice');
  }
  public set poolsPerVirtualservice(value: string) {
    this._poolsPerVirtualservice = value;
  }
  public resetPoolsPerVirtualservice() {
    this._poolsPerVirtualservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsPerVirtualserviceInput() {
    return this._poolsPerVirtualservice;
  }

  // routes_per_vrfcontext - computed: true, optional: true, required: false
  private _routesPerVrfcontext?: string; 
  public get routesPerVrfcontext() {
    return this.getStringAttribute('routes_per_vrfcontext');
  }
  public set routesPerVrfcontext(value: string) {
    this._routesPerVrfcontext = value;
  }
  public resetRoutesPerVrfcontext() {
    this._routesPerVrfcontext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesPerVrfcontextInput() {
    return this._routesPerVrfcontext;
  }

  // rules_per_nat_policy - computed: true, optional: true, required: false
  private _rulesPerNatPolicy?: string; 
  public get rulesPerNatPolicy() {
    return this.getStringAttribute('rules_per_nat_policy');
  }
  public set rulesPerNatPolicy(value: string) {
    this._rulesPerNatPolicy = value;
  }
  public resetRulesPerNatPolicy() {
    this._rulesPerNatPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesPerNatPolicyInput() {
    return this._rulesPerNatPolicy;
  }

  // rules_per_networksecuritypolicy - computed: true, optional: true, required: false
  private _rulesPerNetworksecuritypolicy?: string; 
  public get rulesPerNetworksecuritypolicy() {
    return this.getStringAttribute('rules_per_networksecuritypolicy');
  }
  public set rulesPerNetworksecuritypolicy(value: string) {
    this._rulesPerNetworksecuritypolicy = value;
  }
  public resetRulesPerNetworksecuritypolicy() {
    this._rulesPerNetworksecuritypolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesPerNetworksecuritypolicyInput() {
    return this._rulesPerNetworksecuritypolicy;
  }

  // servers_per_pool - computed: true, optional: true, required: false
  private _serversPerPool?: string; 
  public get serversPerPool() {
    return this.getStringAttribute('servers_per_pool');
  }
  public set serversPerPool(value: string) {
    this._serversPerPool = value;
  }
  public resetServersPerPool() {
    this._serversPerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversPerPoolInput() {
    return this._serversPerPool;
  }

  // sni_children_per_parent - computed: true, optional: true, required: false
  private _sniChildrenPerParent?: string; 
  public get sniChildrenPerParent() {
    return this.getStringAttribute('sni_children_per_parent');
  }
  public set sniChildrenPerParent(value: string) {
    this._sniChildrenPerParent = value;
  }
  public resetSniChildrenPerParent() {
    this._sniChildrenPerParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniChildrenPerParentInput() {
    return this._sniChildrenPerParent;
  }

  // strings_per_stringgroup - computed: true, optional: true, required: false
  private _stringsPerStringgroup?: string; 
  public get stringsPerStringgroup() {
    return this.getStringAttribute('strings_per_stringgroup');
  }
  public set stringsPerStringgroup(value: string) {
    this._stringsPerStringgroup = value;
  }
  public resetStringsPerStringgroup() {
    this._stringsPerStringgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringsPerStringgroupInput() {
    return this._stringsPerStringgroup;
  }

  // vs_bgp_scaleout - computed: true, optional: true, required: false
  private _vsBgpScaleout?: string; 
  public get vsBgpScaleout() {
    return this.getStringAttribute('vs_bgp_scaleout');
  }
  public set vsBgpScaleout(value: string) {
    this._vsBgpScaleout = value;
  }
  public resetVsBgpScaleout() {
    this._vsBgpScaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsBgpScaleoutInput() {
    return this._vsBgpScaleout;
  }

  // vs_l2_scaleout - computed: true, optional: true, required: false
  private _vsL2Scaleout?: string; 
  public get vsL2Scaleout() {
    return this.getStringAttribute('vs_l2_scaleout');
  }
  public set vsL2Scaleout(value: string) {
    this._vsL2Scaleout = value;
  }
  public resetVsL2Scaleout() {
    this._vsL2Scaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsL2ScaleoutInput() {
    return this._vsL2Scaleout;
  }

  // bot_limits - computed: false, optional: true, required: false
  private _botLimits = new SystemlimitsControllerLimitsBotLimitsList(this, "bot_limits", true);
  public get botLimits() {
    return this._botLimits;
  }
  public putBotLimits(value: SystemlimitsControllerLimitsBotLimits[] | cdktf.IResolvable) {
    this._botLimits.internalValue = value;
  }
  public resetBotLimits() {
    this._botLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botLimitsInput() {
    return this._botLimits.internalValue;
  }

  // controller_cloud_limits - computed: false, optional: true, required: false
  private _controllerCloudLimits = new SystemlimitsControllerLimitsControllerCloudLimitsList(this, "controller_cloud_limits", false);
  public get controllerCloudLimits() {
    return this._controllerCloudLimits;
  }
  public putControllerCloudLimits(value: SystemlimitsControllerLimitsControllerCloudLimits[] | cdktf.IResolvable) {
    this._controllerCloudLimits.internalValue = value;
  }
  public resetControllerCloudLimits() {
    this._controllerCloudLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerCloudLimitsInput() {
    return this._controllerCloudLimits.internalValue;
  }

  // controller_sizing_limits - computed: false, optional: true, required: false
  private _controllerSizingLimits = new SystemlimitsControllerLimitsControllerSizingLimitsList(this, "controller_sizing_limits", false);
  public get controllerSizingLimits() {
    return this._controllerSizingLimits;
  }
  public putControllerSizingLimits(value: SystemlimitsControllerLimitsControllerSizingLimits[] | cdktf.IResolvable) {
    this._controllerSizingLimits.internalValue = value;
  }
  public resetControllerSizingLimits() {
    this._controllerSizingLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerSizingLimitsInput() {
    return this._controllerSizingLimits.internalValue;
  }

  // ipaddress_limits - computed: false, optional: true, required: false
  private _ipaddressLimits = new SystemlimitsControllerLimitsIpaddressLimitsList(this, "ipaddress_limits", true);
  public get ipaddressLimits() {
    return this._ipaddressLimits;
  }
  public putIpaddressLimits(value: SystemlimitsControllerLimitsIpaddressLimits[] | cdktf.IResolvable) {
    this._ipaddressLimits.internalValue = value;
  }
  public resetIpaddressLimits() {
    this._ipaddressLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressLimitsInput() {
    return this._ipaddressLimits.internalValue;
  }

  // l7_limits - computed: false, optional: true, required: false
  private _l7Limits = new SystemlimitsControllerLimitsL7LimitsList(this, "l7_limits", true);
  public get l7Limits() {
    return this._l7Limits;
  }
  public putL7Limits(value: SystemlimitsControllerLimitsL7Limits[] | cdktf.IResolvable) {
    this._l7Limits.internalValue = value;
  }
  public resetL7Limits() {
    this._l7Limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7LimitsInput() {
    return this._l7Limits.internalValue;
  }

  // waf_limits - computed: false, optional: true, required: false
  private _wafLimits = new SystemlimitsControllerLimitsWafLimitsList(this, "waf_limits", true);
  public get wafLimits() {
    return this._wafLimits;
  }
  public putWafLimits(value: SystemlimitsControllerLimitsWafLimits[] | cdktf.IResolvable) {
    this._wafLimits.internalValue = value;
  }
  public resetWafLimits() {
    this._wafLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafLimitsInput() {
    return this._wafLimits.internalValue;
  }
}

export class SystemlimitsControllerLimitsList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsControllerLimits[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsControllerLimitsOutputReference {
    return new SystemlimitsControllerLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsControllerSizes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#flavor Systemlimits#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#min_cpus Systemlimits#min_cpus}
  */
  readonly minCpus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#min_memory Systemlimits#min_memory}
  */
  readonly minMemory?: string;
}

export function systemlimitsControllerSizesToTerraform(struct?: SystemlimitsControllerSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flavor: cdktf.stringToTerraform(struct!.flavor),
    min_cpus: cdktf.stringToTerraform(struct!.minCpus),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
  }
}


export function systemlimitsControllerSizesToHclTerraform(struct?: SystemlimitsControllerSizes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpus: {
      value: cdktf.stringToHclTerraform(struct!.minCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsControllerSizesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsControllerSizes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._minCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpus = this._minCpus;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsControllerSizes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flavor = undefined;
      this._minCpus = undefined;
      this._minMemory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flavor = value.flavor;
      this._minCpus = value.minCpus;
      this._minMemory = value.minMemory;
    }
  }

  // flavor - computed: true, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // min_cpus - computed: true, optional: true, required: false
  private _minCpus?: string; 
  public get minCpus() {
    return this.getStringAttribute('min_cpus');
  }
  public set minCpus(value: string) {
    this._minCpus = value;
  }
  public resetMinCpus() {
    this._minCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpusInput() {
    return this._minCpus;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }
}

export class SystemlimitsControllerSizesList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsControllerSizes[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsControllerSizesOutputReference {
    return new SystemlimitsControllerSizesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsServiceengineLimitsServiceengineCloudLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#type Systemlimits#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#vrfs_per_serviceengine Systemlimits#vrfs_per_serviceengine}
  */
  readonly vrfsPerServiceengine?: string;
}

export function systemlimitsServiceengineLimitsServiceengineCloudLimitsToTerraform(struct?: SystemlimitsServiceengineLimitsServiceengineCloudLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    vrfs_per_serviceengine: cdktf.stringToTerraform(struct!.vrfsPerServiceengine),
  }
}


export function systemlimitsServiceengineLimitsServiceengineCloudLimitsToHclTerraform(struct?: SystemlimitsServiceengineLimitsServiceengineCloudLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrfs_per_serviceengine: {
      value: cdktf.stringToHclTerraform(struct!.vrfsPerServiceengine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsServiceengineLimitsServiceengineCloudLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsServiceengineLimitsServiceengineCloudLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vrfsPerServiceengine !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfsPerServiceengine = this._vrfsPerServiceengine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsServiceengineLimitsServiceengineCloudLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._vrfsPerServiceengine = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._vrfsPerServiceengine = value.vrfsPerServiceengine;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrfs_per_serviceengine - computed: true, optional: true, required: false
  private _vrfsPerServiceengine?: string; 
  public get vrfsPerServiceengine() {
    return this.getStringAttribute('vrfs_per_serviceengine');
  }
  public set vrfsPerServiceengine(value: string) {
    this._vrfsPerServiceengine = value;
  }
  public resetVrfsPerServiceengine() {
    this._vrfsPerServiceengine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfsPerServiceengineInput() {
    return this._vrfsPerServiceengine;
  }
}

export class SystemlimitsServiceengineLimitsServiceengineCloudLimitsList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsServiceengineLimitsServiceengineCloudLimits[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsServiceengineLimitsServiceengineCloudLimitsOutputReference {
    return new SystemlimitsServiceengineLimitsServiceengineCloudLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemlimitsServiceengineLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#all_virtualservices_per_serviceengine Systemlimits#all_virtualservices_per_serviceengine}
  */
  readonly allVirtualservicesPerServiceengine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#ew_virtualservices_per_serviceengine Systemlimits#ew_virtualservices_per_serviceengine}
  */
  readonly ewVirtualservicesPerServiceengine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#ns_virtualservices_per_serviceengine Systemlimits#ns_virtualservices_per_serviceengine}
  */
  readonly nsVirtualservicesPerServiceengine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_logical_intf_per_se Systemlimits#num_logical_intf_per_se}
  */
  readonly numLogicalIntfPerSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_phy_intf_per_se Systemlimits#num_phy_intf_per_se}
  */
  readonly numPhyIntfPerSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_virtualservices_rt_metrics Systemlimits#num_virtualservices_rt_metrics}
  */
  readonly numVirtualservicesRtMetrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_vlan_intf_per_phy_intf Systemlimits#num_vlan_intf_per_phy_intf}
  */
  readonly numVlanIntfPerPhyIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#num_vlan_intf_per_se Systemlimits#num_vlan_intf_per_se}
  */
  readonly numVlanIntfPerSe?: string;
  /**
  * serviceengine_cloud_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#serviceengine_cloud_limits Systemlimits#serviceengine_cloud_limits}
  */
  readonly serviceengineCloudLimits?: SystemlimitsServiceengineLimitsServiceengineCloudLimits[] | cdktf.IResolvable;
}

export function systemlimitsServiceengineLimitsToTerraform(struct?: SystemlimitsServiceengineLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_virtualservices_per_serviceengine: cdktf.stringToTerraform(struct!.allVirtualservicesPerServiceengine),
    ew_virtualservices_per_serviceengine: cdktf.stringToTerraform(struct!.ewVirtualservicesPerServiceengine),
    ns_virtualservices_per_serviceengine: cdktf.stringToTerraform(struct!.nsVirtualservicesPerServiceengine),
    num_logical_intf_per_se: cdktf.stringToTerraform(struct!.numLogicalIntfPerSe),
    num_phy_intf_per_se: cdktf.stringToTerraform(struct!.numPhyIntfPerSe),
    num_virtualservices_rt_metrics: cdktf.stringToTerraform(struct!.numVirtualservicesRtMetrics),
    num_vlan_intf_per_phy_intf: cdktf.stringToTerraform(struct!.numVlanIntfPerPhyIntf),
    num_vlan_intf_per_se: cdktf.stringToTerraform(struct!.numVlanIntfPerSe),
    serviceengine_cloud_limits: cdktf.listMapper(systemlimitsServiceengineLimitsServiceengineCloudLimitsToTerraform, true)(struct!.serviceengineCloudLimits),
  }
}


export function systemlimitsServiceengineLimitsToHclTerraform(struct?: SystemlimitsServiceengineLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_virtualservices_per_serviceengine: {
      value: cdktf.stringToHclTerraform(struct!.allVirtualservicesPerServiceengine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ew_virtualservices_per_serviceengine: {
      value: cdktf.stringToHclTerraform(struct!.ewVirtualservicesPerServiceengine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ns_virtualservices_per_serviceengine: {
      value: cdktf.stringToHclTerraform(struct!.nsVirtualservicesPerServiceengine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_logical_intf_per_se: {
      value: cdktf.stringToHclTerraform(struct!.numLogicalIntfPerSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_phy_intf_per_se: {
      value: cdktf.stringToHclTerraform(struct!.numPhyIntfPerSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_virtualservices_rt_metrics: {
      value: cdktf.stringToHclTerraform(struct!.numVirtualservicesRtMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vlan_intf_per_phy_intf: {
      value: cdktf.stringToHclTerraform(struct!.numVlanIntfPerPhyIntf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vlan_intf_per_se: {
      value: cdktf.stringToHclTerraform(struct!.numVlanIntfPerSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serviceengine_cloud_limits: {
      value: cdktf.listMapperHcl(systemlimitsServiceengineLimitsServiceengineCloudLimitsToHclTerraform, true)(struct!.serviceengineCloudLimits),
      isBlock: true,
      type: "list",
      storageClassType: "SystemlimitsServiceengineLimitsServiceengineCloudLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemlimitsServiceengineLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemlimitsServiceengineLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allVirtualservicesPerServiceengine !== undefined) {
      hasAnyValues = true;
      internalValueResult.allVirtualservicesPerServiceengine = this._allVirtualservicesPerServiceengine;
    }
    if (this._ewVirtualservicesPerServiceengine !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewVirtualservicesPerServiceengine = this._ewVirtualservicesPerServiceengine;
    }
    if (this._nsVirtualservicesPerServiceengine !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsVirtualservicesPerServiceengine = this._nsVirtualservicesPerServiceengine;
    }
    if (this._numLogicalIntfPerSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLogicalIntfPerSe = this._numLogicalIntfPerSe;
    }
    if (this._numPhyIntfPerSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPhyIntfPerSe = this._numPhyIntfPerSe;
    }
    if (this._numVirtualservicesRtMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVirtualservicesRtMetrics = this._numVirtualservicesRtMetrics;
    }
    if (this._numVlanIntfPerPhyIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVlanIntfPerPhyIntf = this._numVlanIntfPerPhyIntf;
    }
    if (this._numVlanIntfPerSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVlanIntfPerSe = this._numVlanIntfPerSe;
    }
    if (this._serviceengineCloudLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceengineCloudLimits = this._serviceengineCloudLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemlimitsServiceengineLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allVirtualservicesPerServiceengine = undefined;
      this._ewVirtualservicesPerServiceengine = undefined;
      this._nsVirtualservicesPerServiceengine = undefined;
      this._numLogicalIntfPerSe = undefined;
      this._numPhyIntfPerSe = undefined;
      this._numVirtualservicesRtMetrics = undefined;
      this._numVlanIntfPerPhyIntf = undefined;
      this._numVlanIntfPerSe = undefined;
      this._serviceengineCloudLimits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allVirtualservicesPerServiceengine = value.allVirtualservicesPerServiceengine;
      this._ewVirtualservicesPerServiceengine = value.ewVirtualservicesPerServiceengine;
      this._nsVirtualservicesPerServiceengine = value.nsVirtualservicesPerServiceengine;
      this._numLogicalIntfPerSe = value.numLogicalIntfPerSe;
      this._numPhyIntfPerSe = value.numPhyIntfPerSe;
      this._numVirtualservicesRtMetrics = value.numVirtualservicesRtMetrics;
      this._numVlanIntfPerPhyIntf = value.numVlanIntfPerPhyIntf;
      this._numVlanIntfPerSe = value.numVlanIntfPerSe;
      this._serviceengineCloudLimits.internalValue = value.serviceengineCloudLimits;
    }
  }

  // all_virtualservices_per_serviceengine - computed: true, optional: true, required: false
  private _allVirtualservicesPerServiceengine?: string; 
  public get allVirtualservicesPerServiceengine() {
    return this.getStringAttribute('all_virtualservices_per_serviceengine');
  }
  public set allVirtualservicesPerServiceengine(value: string) {
    this._allVirtualservicesPerServiceengine = value;
  }
  public resetAllVirtualservicesPerServiceengine() {
    this._allVirtualservicesPerServiceengine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allVirtualservicesPerServiceengineInput() {
    return this._allVirtualservicesPerServiceengine;
  }

  // ew_virtualservices_per_serviceengine - computed: true, optional: true, required: false
  private _ewVirtualservicesPerServiceengine?: string; 
  public get ewVirtualservicesPerServiceengine() {
    return this.getStringAttribute('ew_virtualservices_per_serviceengine');
  }
  public set ewVirtualservicesPerServiceengine(value: string) {
    this._ewVirtualservicesPerServiceengine = value;
  }
  public resetEwVirtualservicesPerServiceengine() {
    this._ewVirtualservicesPerServiceengine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewVirtualservicesPerServiceengineInput() {
    return this._ewVirtualservicesPerServiceengine;
  }

  // ns_virtualservices_per_serviceengine - computed: true, optional: true, required: false
  private _nsVirtualservicesPerServiceengine?: string; 
  public get nsVirtualservicesPerServiceengine() {
    return this.getStringAttribute('ns_virtualservices_per_serviceengine');
  }
  public set nsVirtualservicesPerServiceengine(value: string) {
    this._nsVirtualservicesPerServiceengine = value;
  }
  public resetNsVirtualservicesPerServiceengine() {
    this._nsVirtualservicesPerServiceengine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsVirtualservicesPerServiceengineInput() {
    return this._nsVirtualservicesPerServiceengine;
  }

  // num_logical_intf_per_se - computed: true, optional: true, required: false
  private _numLogicalIntfPerSe?: string; 
  public get numLogicalIntfPerSe() {
    return this.getStringAttribute('num_logical_intf_per_se');
  }
  public set numLogicalIntfPerSe(value: string) {
    this._numLogicalIntfPerSe = value;
  }
  public resetNumLogicalIntfPerSe() {
    this._numLogicalIntfPerSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLogicalIntfPerSeInput() {
    return this._numLogicalIntfPerSe;
  }

  // num_phy_intf_per_se - computed: true, optional: true, required: false
  private _numPhyIntfPerSe?: string; 
  public get numPhyIntfPerSe() {
    return this.getStringAttribute('num_phy_intf_per_se');
  }
  public set numPhyIntfPerSe(value: string) {
    this._numPhyIntfPerSe = value;
  }
  public resetNumPhyIntfPerSe() {
    this._numPhyIntfPerSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPhyIntfPerSeInput() {
    return this._numPhyIntfPerSe;
  }

  // num_virtualservices_rt_metrics - computed: true, optional: true, required: false
  private _numVirtualservicesRtMetrics?: string; 
  public get numVirtualservicesRtMetrics() {
    return this.getStringAttribute('num_virtualservices_rt_metrics');
  }
  public set numVirtualservicesRtMetrics(value: string) {
    this._numVirtualservicesRtMetrics = value;
  }
  public resetNumVirtualservicesRtMetrics() {
    this._numVirtualservicesRtMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVirtualservicesRtMetricsInput() {
    return this._numVirtualservicesRtMetrics;
  }

  // num_vlan_intf_per_phy_intf - computed: true, optional: true, required: false
  private _numVlanIntfPerPhyIntf?: string; 
  public get numVlanIntfPerPhyIntf() {
    return this.getStringAttribute('num_vlan_intf_per_phy_intf');
  }
  public set numVlanIntfPerPhyIntf(value: string) {
    this._numVlanIntfPerPhyIntf = value;
  }
  public resetNumVlanIntfPerPhyIntf() {
    this._numVlanIntfPerPhyIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVlanIntfPerPhyIntfInput() {
    return this._numVlanIntfPerPhyIntf;
  }

  // num_vlan_intf_per_se - computed: true, optional: true, required: false
  private _numVlanIntfPerSe?: string; 
  public get numVlanIntfPerSe() {
    return this.getStringAttribute('num_vlan_intf_per_se');
  }
  public set numVlanIntfPerSe(value: string) {
    this._numVlanIntfPerSe = value;
  }
  public resetNumVlanIntfPerSe() {
    this._numVlanIntfPerSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVlanIntfPerSeInput() {
    return this._numVlanIntfPerSe;
  }

  // serviceengine_cloud_limits - computed: false, optional: true, required: false
  private _serviceengineCloudLimits = new SystemlimitsServiceengineLimitsServiceengineCloudLimitsList(this, "serviceengine_cloud_limits", false);
  public get serviceengineCloudLimits() {
    return this._serviceengineCloudLimits;
  }
  public putServiceengineCloudLimits(value: SystemlimitsServiceengineLimitsServiceengineCloudLimits[] | cdktf.IResolvable) {
    this._serviceengineCloudLimits.internalValue = value;
  }
  public resetServiceengineCloudLimits() {
    this._serviceengineCloudLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceengineCloudLimitsInput() {
    return this._serviceengineCloudLimits.internalValue;
  }
}

export class SystemlimitsServiceengineLimitsList extends cdktf.ComplexList {
  public internalValue? : SystemlimitsServiceengineLimits[] | cdktf.IResolvable

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
  public get(index: number): SystemlimitsServiceengineLimitsOutputReference {
    return new SystemlimitsServiceengineLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits avi_systemlimits}
*/
export class Systemlimits extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_systemlimits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Systemlimits resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Systemlimits to import
  * @param importFromId The id of the existing Systemlimits that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Systemlimits to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_systemlimits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/systemlimits avi_systemlimits} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemlimitsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemlimitsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_systemlimits',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
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
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._controllerLimits.internalValue = config.controllerLimits;
    this._controllerSizes.internalValue = config.controllerSizes;
    this._serviceengineLimits.internalValue = config.serviceengineLimits;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new SystemlimitsConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: SystemlimitsConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // controller_limits - computed: false, optional: true, required: false
  private _controllerLimits = new SystemlimitsControllerLimitsList(this, "controller_limits", true);
  public get controllerLimits() {
    return this._controllerLimits;
  }
  public putControllerLimits(value: SystemlimitsControllerLimits[] | cdktf.IResolvable) {
    this._controllerLimits.internalValue = value;
  }
  public resetControllerLimits() {
    this._controllerLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerLimitsInput() {
    return this._controllerLimits.internalValue;
  }

  // controller_sizes - computed: false, optional: true, required: false
  private _controllerSizes = new SystemlimitsControllerSizesList(this, "controller_sizes", false);
  public get controllerSizes() {
    return this._controllerSizes;
  }
  public putControllerSizes(value: SystemlimitsControllerSizes[] | cdktf.IResolvable) {
    this._controllerSizes.internalValue = value;
  }
  public resetControllerSizes() {
    this._controllerSizes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerSizesInput() {
    return this._controllerSizes.internalValue;
  }

  // serviceengine_limits - computed: false, optional: true, required: false
  private _serviceengineLimits = new SystemlimitsServiceengineLimitsList(this, "serviceengine_limits", true);
  public get serviceengineLimits() {
    return this._serviceengineLimits;
  }
  public putServiceengineLimits(value: SystemlimitsServiceengineLimits[] | cdktf.IResolvable) {
    this._serviceengineLimits.internalValue = value;
  }
  public resetServiceengineLimits() {
    this._serviceengineLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceengineLimitsInput() {
    return this._serviceengineLimits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(systemlimitsConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      controller_limits: cdktf.listMapper(systemlimitsControllerLimitsToTerraform, true)(this._controllerLimits.internalValue),
      controller_sizes: cdktf.listMapper(systemlimitsControllerSizesToTerraform, true)(this._controllerSizes.internalValue),
      serviceengine_limits: cdktf.listMapper(systemlimitsServiceengineLimitsToTerraform, true)(this._serviceengineLimits.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(systemlimitsConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemlimitsConfigpbAttributesList",
      },
      controller_limits: {
        value: cdktf.listMapperHcl(systemlimitsControllerLimitsToHclTerraform, true)(this._controllerLimits.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemlimitsControllerLimitsList",
      },
      controller_sizes: {
        value: cdktf.listMapperHcl(systemlimitsControllerSizesToHclTerraform, true)(this._controllerSizes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemlimitsControllerSizesList",
      },
      serviceengine_limits: {
        value: cdktf.listMapperHcl(systemlimitsServiceengineLimitsToHclTerraform, true)(this._serviceengineLimits.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemlimitsServiceengineLimitsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
