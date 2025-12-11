// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#masking_policy_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#masking_policy_id}
  */
  readonly maskingPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#sdm_masking_policy_difference_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#sdm_masking_policy_difference_id}
  */
  readonly sdmMaskingPolicyDifferenceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#timeouts DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#timeouts}
  */
  readonly timeouts?: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts;
}
export interface DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#create DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#delete DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#update DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#update}
  */
  readonly update?: string;
}

export function dataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsToTerraform(struct?: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts | cdktf.IResolvable): any {
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


export function dataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsToHclTerraform(struct?: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts | cdktf.IResolvable): any {
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

export class DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns oci_data_safe_masking_policies_apply_difference_to_masking_columns}
*/
export class DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_masking_policies_apply_difference_to_masking_columns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns to import
  * @param importFromId The id of the existing DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_masking_policies_apply_difference_to_masking_columns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns oci_data_safe_masking_policies_apply_difference_to_masking_columns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_masking_policies_apply_difference_to_masking_columns',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._maskingPolicyId = config.maskingPolicyId;
    this._sdmMaskingPolicyDifferenceId = config.sdmMaskingPolicyDifferenceId;
    this._timeouts.internalValue = config.timeouts;
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

  // masking_policy_id - computed: false, optional: false, required: true
  private _maskingPolicyId?: string; 
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
  }
  public set maskingPolicyId(value: string) {
    this._maskingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyIdInput() {
    return this._maskingPolicyId;
  }

  // sdm_masking_policy_difference_id - computed: false, optional: false, required: true
  private _sdmMaskingPolicyDifferenceId?: string; 
  public get sdmMaskingPolicyDifferenceId() {
    return this.getStringAttribute('sdm_masking_policy_difference_id');
  }
  public set sdmMaskingPolicyDifferenceId(value: string) {
    this._sdmMaskingPolicyDifferenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdmMaskingPolicyDifferenceIdInput() {
    return this._sdmMaskingPolicyDifferenceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      masking_policy_id: cdktf.stringToTerraform(this._maskingPolicyId),
      sdm_masking_policy_difference_id: cdktf.stringToTerraform(this._sdmMaskingPolicyDifferenceId),
      timeouts: dataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsToTerraform(this._timeouts.internalValue),
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
      masking_policy_id: {
        value: cdktf.stringToHclTerraform(this._maskingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdm_masking_policy_difference_id: {
        value: cdktf.stringToHclTerraform(this._sdmMaskingPolicyDifferenceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
