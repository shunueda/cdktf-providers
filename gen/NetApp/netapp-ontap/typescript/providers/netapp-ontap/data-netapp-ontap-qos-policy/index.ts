// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapQosPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Adaptive QoS policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy#adaptive DataNetappOntapQosPolicy#adaptive}
  */
  readonly adaptive?: DataNetappOntapQosPolicyAdaptive;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy#cx_profile_name DataNetappOntapQosPolicy#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * QOSPolicy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy#name DataNetappOntapQosPolicy#name}
  */
  readonly name: string;
  /**
  * QoS policy scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy#scope DataNetappOntapQosPolicy#scope}
  */
  readonly scope?: string;
  /**
  * QOSPolicy svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy#svm_name DataNetappOntapQosPolicy#svm_name}
  */
  readonly svmName: string;
}
export interface DataNetappOntapQosPolicyAdaptive {
  /**
  * Absolute minimum IOPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy#absolute_min_iops DataNetappOntapQosPolicy#absolute_min_iops}
  */
  readonly absoluteMinIops?: number;
  /**
  * Peak IOPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy#peak_iops DataNetappOntapQosPolicy#peak_iops}
  */
  readonly peakIops: number;
}

export function dataNetappOntapQosPolicyAdaptiveToTerraform(struct?: DataNetappOntapQosPolicyAdaptive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_min_iops: cdktf.numberToTerraform(struct!.absoluteMinIops),
    peak_iops: cdktf.numberToTerraform(struct!.peakIops),
  }
}


export function dataNetappOntapQosPolicyAdaptiveToHclTerraform(struct?: DataNetappOntapQosPolicyAdaptive | cdktf.IResolvable): any {
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

export class DataNetappOntapQosPolicyAdaptiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQosPolicyAdaptive | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNetappOntapQosPolicyAdaptive | cdktf.IResolvable | undefined) {
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
export interface DataNetappOntapQosPolicyFixed {
}

export function dataNetappOntapQosPolicyFixedToTerraform(struct?: DataNetappOntapQosPolicyFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapQosPolicyFixedToHclTerraform(struct?: DataNetappOntapQosPolicyFixed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapQosPolicyFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQosPolicyFixed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQosPolicyFixed | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy netapp-ontap_qos_policy}
*/
export class DataNetappOntapQosPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_qos_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapQosPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapQosPolicy to import
  * @param importFromId The id of the existing DataNetappOntapQosPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapQosPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_qos_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/qos_policy netapp-ontap_qos_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapQosPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapQosPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_qos_policy',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adaptive.internalValue = config.adaptive;
    this._cxProfileName = config.cxProfileName;
    this._name = config.name;
    this._scope = config.scope;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adaptive - computed: true, optional: true, required: false
  private _adaptive = new DataNetappOntapQosPolicyAdaptiveOutputReference(this, "adaptive");
  public get adaptive() {
    return this._adaptive;
  }
  public putAdaptive(value: DataNetappOntapQosPolicyAdaptive) {
    this._adaptive.internalValue = value;
  }
  public resetAdaptive() {
    this._adaptive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveInput() {
    return this._adaptive.internalValue;
  }

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

  // fixed - computed: true, optional: false, required: false
  private _fixed = new DataNetappOntapQosPolicyFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // svm_name - computed: false, optional: false, required: true
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adaptive: dataNetappOntapQosPolicyAdaptiveToTerraform(this._adaptive.internalValue),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adaptive: {
        value: dataNetappOntapQosPolicyAdaptiveToHclTerraform(this._adaptive.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapQosPolicyAdaptive",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
