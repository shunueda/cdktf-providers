// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRenderWebServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom domains to associate with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#custom_domains DataRenderWebService#custom_domains}
  */
  readonly customDomains?: DataRenderWebServiceCustomDomains[] | cdktf.IResolvable;
  /**
  * Unique identifier for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#id DataRenderWebService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Configure the [log stream override settings](https://render.com/docs/log-streams#overriding-defaults) for this service. These will override the global log stream settings of the user or team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#log_stream_override DataRenderWebService#log_stream_override}
  */
  readonly logStreamOverride?: DataRenderWebServiceLogStreamOverride;
}
export interface DataRenderWebServiceActiveCustomDomains {
}

export function dataRenderWebServiceActiveCustomDomainsToTerraform(struct?: DataRenderWebServiceActiveCustomDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceActiveCustomDomainsToHclTerraform(struct?: DataRenderWebServiceActiveCustomDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceActiveCustomDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRenderWebServiceActiveCustomDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceActiveCustomDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_suffix - computed: true, optional: false, required: false
  public get publicSuffix() {
    return this.getStringAttribute('public_suffix');
  }

  // redirect_for_name - computed: true, optional: false, required: false
  public get redirectForName() {
    return this.getStringAttribute('redirect_for_name');
  }
}

export class DataRenderWebServiceActiveCustomDomainsList extends cdktf.ComplexList {

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
  public get(index: number): DataRenderWebServiceActiveCustomDomainsOutputReference {
    return new DataRenderWebServiceActiveCustomDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRenderWebServiceAutoscalingCriteriaCpu {
}

export function dataRenderWebServiceAutoscalingCriteriaCpuToTerraform(struct?: DataRenderWebServiceAutoscalingCriteriaCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceAutoscalingCriteriaCpuToHclTerraform(struct?: DataRenderWebServiceAutoscalingCriteriaCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceAutoscalingCriteriaCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceAutoscalingCriteriaCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceAutoscalingCriteriaCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // percentage - computed: true, optional: false, required: false
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
}
export interface DataRenderWebServiceAutoscalingCriteriaMemory {
}

export function dataRenderWebServiceAutoscalingCriteriaMemoryToTerraform(struct?: DataRenderWebServiceAutoscalingCriteriaMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceAutoscalingCriteriaMemoryToHclTerraform(struct?: DataRenderWebServiceAutoscalingCriteriaMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceAutoscalingCriteriaMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceAutoscalingCriteriaMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceAutoscalingCriteriaMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // percentage - computed: true, optional: false, required: false
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
}
export interface DataRenderWebServiceAutoscalingCriteria {
}

export function dataRenderWebServiceAutoscalingCriteriaToTerraform(struct?: DataRenderWebServiceAutoscalingCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceAutoscalingCriteriaToHclTerraform(struct?: DataRenderWebServiceAutoscalingCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceAutoscalingCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceAutoscalingCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceAutoscalingCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataRenderWebServiceAutoscalingCriteriaCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }

  // memory - computed: true, optional: false, required: false
  private _memory = new DataRenderWebServiceAutoscalingCriteriaMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
}
export interface DataRenderWebServiceAutoscaling {
}

export function dataRenderWebServiceAutoscalingToTerraform(struct?: DataRenderWebServiceAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceAutoscalingToHclTerraform(struct?: DataRenderWebServiceAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataRenderWebServiceAutoscalingCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataRenderWebServiceCustomDomains {
  /**
  * Unique identifier for the custom domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#id DataRenderWebService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataRenderWebServiceCustomDomainsToTerraform(struct?: DataRenderWebServiceCustomDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataRenderWebServiceCustomDomainsToHclTerraform(struct?: DataRenderWebServiceCustomDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRenderWebServiceCustomDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRenderWebServiceCustomDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceCustomDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_suffix - computed: true, optional: false, required: false
  public get publicSuffix() {
    return this.getStringAttribute('public_suffix');
  }

  // redirect_for_name - computed: true, optional: false, required: false
  public get redirectForName() {
    return this.getStringAttribute('redirect_for_name');
  }
}

export class DataRenderWebServiceCustomDomainsList extends cdktf.ComplexList {
  public internalValue? : DataRenderWebServiceCustomDomains[] | cdktf.IResolvable

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
  public get(index: number): DataRenderWebServiceCustomDomainsOutputReference {
    return new DataRenderWebServiceCustomDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRenderWebServiceDisk {
  /**
  * Absolute path to mount the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#mount_path DataRenderWebService#mount_path}
  */
  readonly mountPath: string;
  /**
  * Name of the disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#name DataRenderWebService#name}
  */
  readonly name: string;
  /**
  * Size of the disk in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#size_gb DataRenderWebService#size_gb}
  */
  readonly sizeGb: number;
}

export function dataRenderWebServiceDiskToTerraform(struct?: DataRenderWebServiceDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}


export function dataRenderWebServiceDiskToHclTerraform(struct?: DataRenderWebServiceDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRenderWebServiceDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountPath = undefined;
      this._name = undefined;
      this._sizeGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sizeGb = value.sizeGb;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mount_path - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: true
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

  // size_gb - computed: true, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface DataRenderWebServiceEnvVars {
}

export function dataRenderWebServiceEnvVarsToTerraform(struct?: DataRenderWebServiceEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceEnvVarsToHclTerraform(struct?: DataRenderWebServiceEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataRenderWebServiceEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generate_value - computed: true, optional: false, required: false
  public get generateValue() {
    return this.getBooleanAttribute('generate_value');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRenderWebServiceEnvVarsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataRenderWebServiceEnvVarsOutputReference {
    return new DataRenderWebServiceEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataRenderWebServiceLogStreamOverride {
  /**
  * The endpoint to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#endpoint DataRenderWebService#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Whether to send or drop logs for this service. Must be one of `send` or `drop`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#setting DataRenderWebService#setting}
  */
  readonly setting: string;
  /**
  * The token to use when sending logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#token DataRenderWebService#token}
  */
  readonly token?: string;
}

export function dataRenderWebServiceLogStreamOverrideToTerraform(struct?: DataRenderWebServiceLogStreamOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    setting: cdktf.stringToTerraform(struct!.setting),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function dataRenderWebServiceLogStreamOverrideToHclTerraform(struct?: DataRenderWebServiceLogStreamOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setting: {
      value: cdktf.stringToHclTerraform(struct!.setting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRenderWebServiceLogStreamOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceLogStreamOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._setting !== undefined) {
      hasAnyValues = true;
      internalValueResult.setting = this._setting;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceLogStreamOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._setting = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._setting = value.setting;
      this._token = value.token;
    }
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // setting - computed: true, optional: false, required: true
  private _setting?: string; 
  public get setting() {
    return this.getStringAttribute('setting');
  }
  public set setting(value: string) {
    this._setting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface DataRenderWebServiceMaintenanceMode {
}

export function dataRenderWebServiceMaintenanceModeToTerraform(struct?: DataRenderWebServiceMaintenanceMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceMaintenanceModeToHclTerraform(struct?: DataRenderWebServiceMaintenanceMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceMaintenanceModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceMaintenanceMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceMaintenanceMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataRenderWebServiceNotificationOverride {
}

export function dataRenderWebServiceNotificationOverrideToTerraform(struct?: DataRenderWebServiceNotificationOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceNotificationOverrideToHclTerraform(struct?: DataRenderWebServiceNotificationOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceNotificationOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceNotificationOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceNotificationOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notifications_to_send - computed: true, optional: false, required: false
  public get notificationsToSend() {
    return this.getStringAttribute('notifications_to_send');
  }

  // preview_notifications_enabled - computed: true, optional: false, required: false
  public get previewNotificationsEnabled() {
    return this.getStringAttribute('preview_notifications_enabled');
  }
}
export interface DataRenderWebServicePreviews {
}

export function dataRenderWebServicePreviewsToTerraform(struct?: DataRenderWebServicePreviews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServicePreviewsToHclTerraform(struct?: DataRenderWebServicePreviews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServicePreviewsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServicePreviews | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServicePreviews | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getStringAttribute('generation');
  }
}
export interface DataRenderWebServiceRuntimeSourceDockerBuildFilter {
}

export function dataRenderWebServiceRuntimeSourceDockerBuildFilterToTerraform(struct?: DataRenderWebServiceRuntimeSourceDockerBuildFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceRuntimeSourceDockerBuildFilterToHclTerraform(struct?: DataRenderWebServiceRuntimeSourceDockerBuildFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceRuntimeSourceDockerBuildFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceRuntimeSourceDockerBuildFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceRuntimeSourceDockerBuildFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ignored_paths - computed: true, optional: false, required: false
  public get ignoredPaths() {
    return this.getListAttribute('ignored_paths');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }
}
export interface DataRenderWebServiceRuntimeSourceDocker {
}

export function dataRenderWebServiceRuntimeSourceDockerToTerraform(struct?: DataRenderWebServiceRuntimeSourceDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceRuntimeSourceDockerToHclTerraform(struct?: DataRenderWebServiceRuntimeSourceDocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceRuntimeSourceDockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceRuntimeSourceDocker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceRuntimeSourceDocker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_deploy - computed: true, optional: false, required: false
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }

  // auto_deploy_trigger - computed: true, optional: false, required: false
  public get autoDeployTrigger() {
    return this.getStringAttribute('auto_deploy_trigger');
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // build_filter - computed: true, optional: false, required: false
  private _buildFilter = new DataRenderWebServiceRuntimeSourceDockerBuildFilterOutputReference(this, "build_filter");
  public get buildFilter() {
    return this._buildFilter;
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // dockerfile_path - computed: true, optional: false, required: false
  public get dockerfilePath() {
    return this.getStringAttribute('dockerfile_path');
  }

  // registry_credential_id - computed: true, optional: false, required: false
  public get registryCredentialId() {
    return this.getStringAttribute('registry_credential_id');
  }

  // repo_url - computed: true, optional: false, required: false
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
}
export interface DataRenderWebServiceRuntimeSourceImage {
  /**
  * Digest of the Docker image to deploy. Mutually exclusive with tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#digest DataRenderWebService#digest}
  */
  readonly digest?: string;
  /**
  * Tag of the Docker image to deploy. Mutually exclusive with digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#tag DataRenderWebService#tag}
  */
  readonly tag?: string;
}

export function dataRenderWebServiceRuntimeSourceImageToTerraform(struct?: DataRenderWebServiceRuntimeSourceImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataRenderWebServiceRuntimeSourceImageToHclTerraform(struct?: DataRenderWebServiceRuntimeSourceImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRenderWebServiceRuntimeSourceImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceRuntimeSourceImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceRuntimeSourceImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digest = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digest = value.digest;
      this._tag = value.tag;
    }
  }

  // digest - computed: true, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // registry_credential_id - computed: true, optional: false, required: false
  public get registryCredentialId() {
    return this.getStringAttribute('registry_credential_id');
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataRenderWebServiceRuntimeSourceNativeRuntimeBuildFilter {
}

export function dataRenderWebServiceRuntimeSourceNativeRuntimeBuildFilterToTerraform(struct?: DataRenderWebServiceRuntimeSourceNativeRuntimeBuildFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceRuntimeSourceNativeRuntimeBuildFilterToHclTerraform(struct?: DataRenderWebServiceRuntimeSourceNativeRuntimeBuildFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceRuntimeSourceNativeRuntimeBuildFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceRuntimeSourceNativeRuntimeBuildFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceRuntimeSourceNativeRuntimeBuildFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ignored_paths - computed: true, optional: false, required: false
  public get ignoredPaths() {
    return this.getListAttribute('ignored_paths');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }
}
export interface DataRenderWebServiceRuntimeSourceNativeRuntime {
}

export function dataRenderWebServiceRuntimeSourceNativeRuntimeToTerraform(struct?: DataRenderWebServiceRuntimeSourceNativeRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceRuntimeSourceNativeRuntimeToHclTerraform(struct?: DataRenderWebServiceRuntimeSourceNativeRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceRuntimeSourceNativeRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceRuntimeSourceNativeRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceRuntimeSourceNativeRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_deploy - computed: true, optional: false, required: false
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }

  // auto_deploy_trigger - computed: true, optional: false, required: false
  public get autoDeployTrigger() {
    return this.getStringAttribute('auto_deploy_trigger');
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // build_filter - computed: true, optional: false, required: false
  private _buildFilter = new DataRenderWebServiceRuntimeSourceNativeRuntimeBuildFilterOutputReference(this, "build_filter");
  public get buildFilter() {
    return this._buildFilter;
  }

  // repo_url - computed: true, optional: false, required: false
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
}
export interface DataRenderWebServiceRuntimeSource {
}

export function dataRenderWebServiceRuntimeSourceToTerraform(struct?: DataRenderWebServiceRuntimeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceRuntimeSourceToHclTerraform(struct?: DataRenderWebServiceRuntimeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceRuntimeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRenderWebServiceRuntimeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceRuntimeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // docker - computed: true, optional: false, required: false
  private _docker = new DataRenderWebServiceRuntimeSourceDockerOutputReference(this, "docker");
  public get docker() {
    return this._docker;
  }

  // image - computed: true, optional: false, required: false
  private _image = new DataRenderWebServiceRuntimeSourceImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }

  // native_runtime - computed: true, optional: false, required: false
  private _nativeRuntime = new DataRenderWebServiceRuntimeSourceNativeRuntimeOutputReference(this, "native_runtime");
  public get nativeRuntime() {
    return this._nativeRuntime;
  }
}
export interface DataRenderWebServiceSecretFiles {
}

export function dataRenderWebServiceSecretFilesToTerraform(struct?: DataRenderWebServiceSecretFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRenderWebServiceSecretFilesToHclTerraform(struct?: DataRenderWebServiceSecretFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRenderWebServiceSecretFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataRenderWebServiceSecretFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRenderWebServiceSecretFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }
}

export class DataRenderWebServiceSecretFilesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataRenderWebServiceSecretFilesOutputReference {
    return new DataRenderWebServiceSecretFilesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service render_web_service}
*/
export class DataRenderWebService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_web_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRenderWebService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRenderWebService to import
  * @param importFromId The id of the existing DataRenderWebService that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRenderWebService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_web_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/web_service render_web_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRenderWebServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataRenderWebServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'render_web_service',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDomains.internalValue = config.customDomains;
    this._id = config.id;
    this._logStreamOverride.internalValue = config.logStreamOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_custom_domains - computed: true, optional: false, required: false
  private _activeCustomDomains = new DataRenderWebServiceActiveCustomDomainsList(this, "active_custom_domains", true);
  public get activeCustomDomains() {
    return this._activeCustomDomains;
  }

  // autoscaling - computed: true, optional: false, required: false
  private _autoscaling = new DataRenderWebServiceAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }

  // custom_domains - computed: false, optional: true, required: false
  private _customDomains = new DataRenderWebServiceCustomDomainsList(this, "custom_domains", true);
  public get customDomains() {
    return this._customDomains;
  }
  public putCustomDomains(value: DataRenderWebServiceCustomDomains[] | cdktf.IResolvable) {
    this._customDomains.internalValue = value;
  }
  public resetCustomDomains() {
    this._customDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainsInput() {
    return this._customDomains.internalValue;
  }

  // disk - computed: true, optional: false, required: false
  private _disk = new DataRenderWebServiceDiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new DataRenderWebServiceEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_stream_override - computed: true, optional: true, required: false
  private _logStreamOverride = new DataRenderWebServiceLogStreamOverrideOutputReference(this, "log_stream_override");
  public get logStreamOverride() {
    return this._logStreamOverride;
  }
  public putLogStreamOverride(value: DataRenderWebServiceLogStreamOverride) {
    this._logStreamOverride.internalValue = value;
  }
  public resetLogStreamOverride() {
    this._logStreamOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamOverrideInput() {
    return this._logStreamOverride.internalValue;
  }

  // maintenance_mode - computed: true, optional: false, required: false
  private _maintenanceMode = new DataRenderWebServiceMaintenanceModeOutputReference(this, "maintenance_mode");
  public get maintenanceMode() {
    return this._maintenanceMode;
  }

  // max_shutdown_delay_seconds - computed: true, optional: false, required: false
  public get maxShutdownDelaySeconds() {
    return this.getNumberAttribute('max_shutdown_delay_seconds');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_override - computed: true, optional: false, required: false
  private _notificationOverride = new DataRenderWebServiceNotificationOverrideOutputReference(this, "notification_override");
  public get notificationOverride() {
    return this._notificationOverride;
  }

  // num_instances - computed: true, optional: false, required: false
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // pre_deploy_command - computed: true, optional: false, required: false
  public get preDeployCommand() {
    return this.getStringAttribute('pre_deploy_command');
  }

  // previews - computed: true, optional: false, required: false
  private _previews = new DataRenderWebServicePreviewsOutputReference(this, "previews");
  public get previews() {
    return this._previews;
  }

  // pull_request_previews_enabled - computed: true, optional: false, required: false
  public get pullRequestPreviewsEnabled() {
    return this.getBooleanAttribute('pull_request_previews_enabled');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // runtime_source - computed: true, optional: false, required: false
  private _runtimeSource = new DataRenderWebServiceRuntimeSourceOutputReference(this, "runtime_source");
  public get runtimeSource() {
    return this._runtimeSource;
  }

  // secret_files - computed: true, optional: false, required: false
  private _secretFiles = new DataRenderWebServiceSecretFilesMap(this, "secret_files");
  public get secretFiles() {
    return this._secretFiles;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // start_command - computed: true, optional: false, required: false
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_domains: cdktf.listMapper(dataRenderWebServiceCustomDomainsToTerraform, false)(this._customDomains.internalValue),
      id: cdktf.stringToTerraform(this._id),
      log_stream_override: dataRenderWebServiceLogStreamOverrideToTerraform(this._logStreamOverride.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_domains: {
        value: cdktf.listMapperHcl(dataRenderWebServiceCustomDomainsToHclTerraform, false)(this._customDomains.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataRenderWebServiceCustomDomainsList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_override: {
        value: dataRenderWebServiceLogStreamOverrideToHclTerraform(this._logStreamOverride.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRenderWebServiceLogStreamOverride",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
