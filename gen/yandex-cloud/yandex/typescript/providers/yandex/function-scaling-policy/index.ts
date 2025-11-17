// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/function_scaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionScalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Yandex Cloud Function id used to define function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/function_scaling_policy#function_id FunctionScalingPolicy#function_id}
  */
  readonly functionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/function_scaling_policy#id FunctionScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/function_scaling_policy#policy FunctionScalingPolicy#policy}
  */
  readonly policy?: FunctionScalingPolicyPolicy[] | cdktf.IResolvable;
}
export interface FunctionScalingPolicyPolicy {
  /**
  * Yandex Cloud Function version tag for Yandex Cloud Function scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/function_scaling_policy#tag FunctionScalingPolicy#tag}
  */
  readonly tag: string;
  /**
  * Max number of instances in one zone for Yandex Cloud Function with tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/function_scaling_policy#zone_instances_limit FunctionScalingPolicy#zone_instances_limit}
  */
  readonly zoneInstancesLimit?: number;
  /**
  * Max number of requests in one zone for Yandex Cloud Function with tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/function_scaling_policy#zone_requests_limit FunctionScalingPolicy#zone_requests_limit}
  */
  readonly zoneRequestsLimit?: number;
}

export function functionScalingPolicyPolicyToTerraform(struct?: FunctionScalingPolicyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    zone_instances_limit: cdktf.numberToTerraform(struct!.zoneInstancesLimit),
    zone_requests_limit: cdktf.numberToTerraform(struct!.zoneRequestsLimit),
  }
}


export function functionScalingPolicyPolicyToHclTerraform(struct?: FunctionScalingPolicyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_instances_limit: {
      value: cdktf.numberToHclTerraform(struct!.zoneInstancesLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_requests_limit: {
      value: cdktf.numberToHclTerraform(struct!.zoneRequestsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionScalingPolicyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FunctionScalingPolicyPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._zoneInstancesLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneInstancesLimit = this._zoneInstancesLimit;
    }
    if (this._zoneRequestsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneRequestsLimit = this._zoneRequestsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionScalingPolicyPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
      this._zoneInstancesLimit = undefined;
      this._zoneRequestsLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
      this._zoneInstancesLimit = value.zoneInstancesLimit;
      this._zoneRequestsLimit = value.zoneRequestsLimit;
    }
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // zone_instances_limit - computed: false, optional: true, required: false
  private _zoneInstancesLimit?: number; 
  public get zoneInstancesLimit() {
    return this.getNumberAttribute('zone_instances_limit');
  }
  public set zoneInstancesLimit(value: number) {
    this._zoneInstancesLimit = value;
  }
  public resetZoneInstancesLimit() {
    this._zoneInstancesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInstancesLimitInput() {
    return this._zoneInstancesLimit;
  }

  // zone_requests_limit - computed: false, optional: true, required: false
  private _zoneRequestsLimit?: number; 
  public get zoneRequestsLimit() {
    return this.getNumberAttribute('zone_requests_limit');
  }
  public set zoneRequestsLimit(value: number) {
    this._zoneRequestsLimit = value;
  }
  public resetZoneRequestsLimit() {
    this._zoneRequestsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRequestsLimitInput() {
    return this._zoneRequestsLimit;
  }
}

export class FunctionScalingPolicyPolicyList extends cdktf.ComplexList {
  public internalValue? : FunctionScalingPolicyPolicy[] | cdktf.IResolvable

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
  public get(index: number): FunctionScalingPolicyPolicyOutputReference {
    return new FunctionScalingPolicyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/function_scaling_policy yandex_function_scaling_policy}
*/
export class FunctionScalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_function_scaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FunctionScalingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FunctionScalingPolicy to import
  * @param importFromId The id of the existing FunctionScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/function_scaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FunctionScalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_function_scaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/function_scaling_policy yandex_function_scaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionScalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionScalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_function_scaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._functionId = config.functionId;
    this._id = config.id;
    this._policy.internalValue = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_id - computed: false, optional: false, required: true
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
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

  // policy - computed: false, optional: true, required: false
  private _policy = new FunctionScalingPolicyPolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: FunctionScalingPolicyPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_id: cdktf.stringToTerraform(this._functionId),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.listMapper(functionScalingPolicyPolicyToTerraform, true)(this._policy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_id: {
        value: cdktf.stringToHclTerraform(this._functionId),
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
      policy: {
        value: cdktf.listMapperHcl(functionScalingPolicyPolicyToHclTerraform, true)(this._policy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FunctionScalingPolicyPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
