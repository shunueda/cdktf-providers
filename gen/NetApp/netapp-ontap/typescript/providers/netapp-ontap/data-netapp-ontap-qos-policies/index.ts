// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapQosPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#cx_profile_name DataNetappOntapQosPolicies#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#filter DataNetappOntapQosPolicies#filter}
  */
  readonly filter?: DataNetappOntapQosPoliciesFilter;
}
export interface DataNetappOntapQosPoliciesFilter {
  /**
  * QOSPolicy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#name DataNetappOntapQosPolicies#name}
  */
  readonly name?: string;
  /**
  * QOSPolicy svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#svm_name DataNetappOntapQosPolicies#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapQosPoliciesFilterToTerraform(struct?: DataNetappOntapQosPoliciesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapQosPoliciesFilterToHclTerraform(struct?: DataNetappOntapQosPoliciesFilter | cdktf.IResolvable): any {
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
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapQosPoliciesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQosPoliciesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQosPoliciesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._svmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._svmName = value.svmName;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }
}
export interface DataNetappOntapQosPoliciesQosPoliciesAdaptive {
  /**
  * Absolute minimum IOPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#absolute_min_iops DataNetappOntapQosPolicies#absolute_min_iops}
  */
  readonly absoluteMinIops?: number;
  /**
  * Peak IOPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#peak_iops DataNetappOntapQosPolicies#peak_iops}
  */
  readonly peakIops: number;
}

export function dataNetappOntapQosPoliciesQosPoliciesAdaptiveToTerraform(struct?: DataNetappOntapQosPoliciesQosPoliciesAdaptive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_min_iops: cdktf.numberToTerraform(struct!.absoluteMinIops),
    peak_iops: cdktf.numberToTerraform(struct!.peakIops),
  }
}


export function dataNetappOntapQosPoliciesQosPoliciesAdaptiveToHclTerraform(struct?: DataNetappOntapQosPoliciesQosPoliciesAdaptive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_min_iops: {
      value: cdktf.numberToHclTerraform(struct!.absoluteMinIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_iops: {
      value: cdktf.numberToHclTerraform(struct!.peakIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapQosPoliciesQosPoliciesAdaptiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQosPoliciesQosPoliciesAdaptive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteMinIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteMinIops = this._absoluteMinIops;
    }
    if (this._peakIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakIops = this._peakIops;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQosPoliciesQosPoliciesAdaptive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteMinIops = undefined;
      this._peakIops = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteMinIops = value.absoluteMinIops;
      this._peakIops = value.peakIops;
    }
  }

  // absolute_min_iops - computed: true, optional: true, required: false
  private _absoluteMinIops?: number; 
  public get absoluteMinIops() {
    return this.getNumberAttribute('absolute_min_iops');
  }
  public set absoluteMinIops(value: number) {
    this._absoluteMinIops = value;
  }
  public resetAbsoluteMinIops() {
    this._absoluteMinIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteMinIopsInput() {
    return this._absoluteMinIops;
  }

  // block_size - computed: true, optional: false, required: false
  public get blockSize() {
    return this.getStringAttribute('block_size');
  }

  // expected_iops - computed: true, optional: false, required: false
  public get expectedIops() {
    return this.getNumberAttribute('expected_iops');
  }

  // expected_iops_allocation - computed: true, optional: false, required: false
  public get expectedIopsAllocation() {
    return this.getStringAttribute('expected_iops_allocation');
  }

  // peak_iops - computed: true, optional: false, required: true
  private _peakIops?: number; 
  public get peakIops() {
    return this.getNumberAttribute('peak_iops');
  }
  public set peakIops(value: number) {
    this._peakIops = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peakIopsInput() {
    return this._peakIops;
  }

  // peak_iops_allocation - computed: true, optional: false, required: false
  public get peakIopsAllocation() {
    return this.getStringAttribute('peak_iops_allocation');
  }
}
export interface DataNetappOntapQosPoliciesQosPoliciesFixed {
}

export function dataNetappOntapQosPoliciesQosPoliciesFixedToTerraform(struct?: DataNetappOntapQosPoliciesQosPoliciesFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapQosPoliciesQosPoliciesFixedToHclTerraform(struct?: DataNetappOntapQosPoliciesQosPoliciesFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapQosPoliciesQosPoliciesFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQosPoliciesQosPoliciesFixed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQosPoliciesQosPoliciesFixed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_shared - computed: true, optional: false, required: false
  public get capacityShared() {
    return this.getBooleanAttribute('capacity_shared');
  }

  // max_throughput_iops - computed: true, optional: false, required: false
  public get maxThroughputIops() {
    return this.getNumberAttribute('max_throughput_iops');
  }

  // max_throughput_mbps - computed: true, optional: false, required: false
  public get maxThroughputMbps() {
    return this.getNumberAttribute('max_throughput_mbps');
  }

  // min_throughput_iops - computed: true, optional: false, required: false
  public get minThroughputIops() {
    return this.getNumberAttribute('min_throughput_iops');
  }

  // min_throughput_mbps - computed: true, optional: false, required: false
  public get minThroughputMbps() {
    return this.getNumberAttribute('min_throughput_mbps');
  }
}
export interface DataNetappOntapQosPoliciesQosPolicies {
  /**
  * Adaptive QoS policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#adaptive DataNetappOntapQosPolicies#adaptive}
  */
  readonly adaptive?: DataNetappOntapQosPoliciesQosPoliciesAdaptive;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#cx_profile_name DataNetappOntapQosPolicies#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * QOSPolicy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#name DataNetappOntapQosPolicies#name}
  */
  readonly name: string;
  /**
  * QoS policy scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#scope DataNetappOntapQosPolicies#scope}
  */
  readonly scope?: string;
  /**
  * QOSPolicy svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#svm_name DataNetappOntapQosPolicies#svm_name}
  */
  readonly svmName: string;
}

export function dataNetappOntapQosPoliciesQosPoliciesToTerraform(struct?: DataNetappOntapQosPoliciesQosPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive: dataNetappOntapQosPoliciesQosPoliciesAdaptiveToTerraform(struct!.adaptive),
    cx_profile_name: cdktf.stringToTerraform(struct!.cxProfileName),
    name: cdktf.stringToTerraform(struct!.name),
    scope: cdktf.stringToTerraform(struct!.scope),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapQosPoliciesQosPoliciesToHclTerraform(struct?: DataNetappOntapQosPoliciesQosPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive: {
      value: dataNetappOntapQosPoliciesQosPoliciesAdaptiveToHclTerraform(struct!.adaptive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapQosPoliciesQosPoliciesAdaptive",
    },
    cx_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.cxProfileName),
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapQosPoliciesQosPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapQosPoliciesQosPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptive = this._adaptive?.internalValue;
    }
    if (this._cxProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxProfileName = this._cxProfileName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQosPoliciesQosPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptive.internalValue = undefined;
      this._cxProfileName = undefined;
      this._name = undefined;
      this._scope = undefined;
      this._svmName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptive.internalValue = value.adaptive;
      this._cxProfileName = value.cxProfileName;
      this._name = value.name;
      this._scope = value.scope;
      this._svmName = value.svmName;
    }
  }

  // adaptive - computed: true, optional: true, required: false
  private _adaptive = new DataNetappOntapQosPoliciesQosPoliciesAdaptiveOutputReference(this, "adaptive");
  public get adaptive() {
    return this._adaptive;
  }
  public putAdaptive(value: DataNetappOntapQosPoliciesQosPoliciesAdaptive) {
    this._adaptive.internalValue = value;
  }
  public resetAdaptive() {
    this._adaptive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveInput() {
    return this._adaptive.internalValue;
  }

  // cx_profile_name - computed: true, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // fixed - computed: true, optional: false, required: false
  private _fixed = new DataNetappOntapQosPoliciesQosPoliciesFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scope - computed: true, optional: true, required: false
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

  // svm_name - computed: true, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }
}

export class DataNetappOntapQosPoliciesQosPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapQosPoliciesQosPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapQosPoliciesQosPoliciesOutputReference {
    return new DataNetappOntapQosPoliciesQosPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies netapp-ontap_qos_policies}
*/
export class DataNetappOntapQosPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_qos_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapQosPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapQosPolicies to import
  * @param importFromId The id of the existing DataNetappOntapQosPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapQosPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_qos_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/data-sources/qos_policies netapp-ontap_qos_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapQosPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapQosPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_qos_policies',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNetappOntapQosPoliciesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapQosPoliciesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // qos_policies - computed: true, optional: false, required: false
  private _qosPolicies = new DataNetappOntapQosPoliciesQosPoliciesList(this, "qos_policies", false);
  public get qosPolicies() {
    return this._qosPolicies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapQosPoliciesFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataNetappOntapQosPoliciesFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapQosPoliciesFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
