// https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_billing_policies_environments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerplatformBillingPoliciesEnvironmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the billing policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_billing_policies_environments#billing_policy_id DataPowerplatformBillingPoliciesEnvironments#billing_policy_id}
  */
  readonly billingPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_billing_policies_environments#timeouts DataPowerplatformBillingPoliciesEnvironments#timeouts}
  */
  readonly timeouts?: DataPowerplatformBillingPoliciesEnvironmentsTimeouts;
}
export interface DataPowerplatformBillingPoliciesEnvironmentsTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_billing_policies_environments#read DataPowerplatformBillingPoliciesEnvironments#read}
  */
  readonly read?: string;
}

export function dataPowerplatformBillingPoliciesEnvironmentsTimeoutsToTerraform(struct?: DataPowerplatformBillingPoliciesEnvironmentsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataPowerplatformBillingPoliciesEnvironmentsTimeoutsToHclTerraform(struct?: DataPowerplatformBillingPoliciesEnvironmentsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformBillingPoliciesEnvironmentsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformBillingPoliciesEnvironmentsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformBillingPoliciesEnvironmentsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_billing_policies_environments powerplatform_billing_policies_environments}
*/
export class DataPowerplatformBillingPoliciesEnvironments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_billing_policies_environments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerplatformBillingPoliciesEnvironments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerplatformBillingPoliciesEnvironments to import
  * @param importFromId The id of the existing DataPowerplatformBillingPoliciesEnvironments that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_billing_policies_environments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerplatformBillingPoliciesEnvironments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_billing_policies_environments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_billing_policies_environments powerplatform_billing_policies_environments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerplatformBillingPoliciesEnvironmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPowerplatformBillingPoliciesEnvironmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_billing_policies_environments',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '3.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingPolicyId = config.billingPolicyId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_policy_id - computed: false, optional: false, required: true
  private _billingPolicyId?: string; 
  public get billingPolicyId() {
    return this.getStringAttribute('billing_policy_id');
  }
  public set billingPolicyId(value: string) {
    this._billingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPolicyIdInput() {
    return this._billingPolicyId;
  }

  // environments - computed: true, optional: false, required: false
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowerplatformBillingPoliciesEnvironmentsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowerplatformBillingPoliciesEnvironmentsTimeouts) {
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
      billing_policy_id: cdktf.stringToTerraform(this._billingPolicyId),
      timeouts: dataPowerplatformBillingPoliciesEnvironmentsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_policy_id: {
        value: cdktf.stringToHclTerraform(this._billingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataPowerplatformBillingPoliciesEnvironmentsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerplatformBillingPoliciesEnvironmentsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
