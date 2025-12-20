// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BandwidthAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * bandwidth to allocate in Mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation#allocated_bandwidth BandwidthAllocation#allocated_bandwidth}
  */
  readonly allocatedBandwidth: number;
  /**
  * name of the aggregated bandwidth region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation#name BandwidthAllocation#name}
  */
  readonly name: string;
  /**
  * Qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation#qos BandwidthAllocation#qos}
  */
  readonly qos?: BandwidthAllocationQos;
  /**
  * Spn name list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation#spn_name_list BandwidthAllocation#spn_name_list}
  */
  readonly spnNameList?: string[];
}
export interface BandwidthAllocationQos {
  /**
  * Customized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation#customized BandwidthAllocation#customized}
  */
  readonly customized?: boolean | cdktf.IResolvable;
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation#enabled BandwidthAllocation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Guaranteed ratio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation#guaranteed_ratio BandwidthAllocation#guaranteed_ratio}
  */
  readonly guaranteedRatio?: number;
  /**
  * Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation#profile BandwidthAllocation#profile}
  */
  readonly profile?: string;
}

export function bandwidthAllocationQosToTerraform(struct?: BandwidthAllocationQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customized: cdktf.booleanToTerraform(struct!.customized),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    guaranteed_ratio: cdktf.numberToTerraform(struct!.guaranteedRatio),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function bandwidthAllocationQosToHclTerraform(struct?: BandwidthAllocationQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customized: {
      value: cdktf.booleanToHclTerraform(struct!.customized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    guaranteed_ratio: {
      value: cdktf.numberToHclTerraform(struct!.guaranteedRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BandwidthAllocationQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BandwidthAllocationQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customized !== undefined) {
      hasAnyValues = true;
      internalValueResult.customized = this._customized;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._guaranteedRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.guaranteedRatio = this._guaranteedRatio;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BandwidthAllocationQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customized = undefined;
      this._enabled = undefined;
      this._guaranteedRatio = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customized = value.customized;
      this._enabled = value.enabled;
      this._guaranteedRatio = value.guaranteedRatio;
      this._profile = value.profile;
    }
  }

  // customized - computed: true, optional: true, required: false
  private _customized?: boolean | cdktf.IResolvable; 
  public get customized() {
    return this.getBooleanAttribute('customized');
  }
  public set customized(value: boolean | cdktf.IResolvable) {
    this._customized = value;
  }
  public resetCustomized() {
    this._customized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedInput() {
    return this._customized;
  }

  // enabled - computed: true, optional: true, required: false
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

  // guaranteed_ratio - computed: true, optional: true, required: false
  private _guaranteedRatio?: number; 
  public get guaranteedRatio() {
    return this.getNumberAttribute('guaranteed_ratio');
  }
  public set guaranteedRatio(value: number) {
    this._guaranteedRatio = value;
  }
  public resetGuaranteedRatio() {
    this._guaranteedRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedRatioInput() {
    return this._guaranteedRatio;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation scm_bandwidth_allocation}
*/
export class BandwidthAllocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bandwidth_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BandwidthAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BandwidthAllocation to import
  * @param importFromId The id of the existing BandwidthAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BandwidthAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bandwidth_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bandwidth_allocation scm_bandwidth_allocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BandwidthAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: BandwidthAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_bandwidth_allocation',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatedBandwidth = config.allocatedBandwidth;
    this._name = config.name;
    this._qos.internalValue = config.qos;
    this._spnNameList = config.spnNameList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_bandwidth - computed: false, optional: false, required: true
  private _allocatedBandwidth?: number; 
  public get allocatedBandwidth() {
    return this.getNumberAttribute('allocated_bandwidth');
  }
  public set allocatedBandwidth(value: number) {
    this._allocatedBandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedBandwidthInput() {
    return this._allocatedBandwidth;
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

  // qos - computed: false, optional: true, required: false
  private _qos = new BandwidthAllocationQosOutputReference(this, "qos");
  public get qos() {
    return this._qos;
  }
  public putQos(value: BandwidthAllocationQos) {
    this._qos.internalValue = value;
  }
  public resetQos() {
    this._qos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos.internalValue;
  }

  // spn_name_list - computed: true, optional: true, required: false
  private _spnNameList?: string[]; 
  public get spnNameList() {
    return this.getListAttribute('spn_name_list');
  }
  public set spnNameList(value: string[]) {
    this._spnNameList = value;
  }
  public resetSpnNameList() {
    this._spnNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spnNameListInput() {
    return this._spnNameList;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_bandwidth: cdktf.numberToTerraform(this._allocatedBandwidth),
      name: cdktf.stringToTerraform(this._name),
      qos: bandwidthAllocationQosToTerraform(this._qos.internalValue),
      spn_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spnNameList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocated_bandwidth: {
        value: cdktf.numberToHclTerraform(this._allocatedBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos: {
        value: bandwidthAllocationQosToHclTerraform(this._qos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BandwidthAllocationQos",
      },
      spn_name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spnNameList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
