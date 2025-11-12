// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileL7DosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos#description ProfileL7Dos#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos#id ProfileL7Dos#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos#name ProfileL7Dos#name}
  */
  readonly name: string;
  /**
  * request_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos#request_limits ProfileL7Dos#request_limits}
  */
  readonly requestLimits?: ProfileL7DosRequestLimits[] | cdktf.IResolvable;
}
export interface ProfileL7DosRequestLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos#burst_size ProfileL7Dos#burst_size}
  */
  readonly burstSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos#rate_limited_methods ProfileL7Dos#rate_limited_methods}
  */
  readonly rateLimitedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos#requests_rate_block ProfileL7Dos#requests_rate_block}
  */
  readonly requestsRateBlock: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos#target_uri ProfileL7Dos#target_uri}
  */
  readonly targetUri: string;
}

export function profileL7DosRequestLimitsToTerraform(struct?: ProfileL7DosRequestLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_size: cdktf.numberToTerraform(struct!.burstSize),
    rate_limited_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rateLimitedMethods),
    requests_rate_block: cdktf.numberToTerraform(struct!.requestsRateBlock),
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
  }
}


export function profileL7DosRequestLimitsToHclTerraform(struct?: ProfileL7DosRequestLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_size: {
      value: cdktf.numberToHclTerraform(struct!.burstSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limited_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rateLimitedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    requests_rate_block: {
      value: cdktf.numberToHclTerraform(struct!.requestsRateBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileL7DosRequestLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileL7DosRequestLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSize = this._burstSize;
    }
    if (this._rateLimitedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitedMethods = this._rateLimitedMethods;
    }
    if (this._requestsRateBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsRateBlock = this._requestsRateBlock;
    }
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileL7DosRequestLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSize = undefined;
      this._rateLimitedMethods = undefined;
      this._requestsRateBlock = undefined;
      this._targetUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSize = value.burstSize;
      this._rateLimitedMethods = value.rateLimitedMethods;
      this._requestsRateBlock = value.requestsRateBlock;
      this._targetUri = value.targetUri;
    }
  }

  // burst_size - computed: false, optional: true, required: false
  private _burstSize?: number; 
  public get burstSize() {
    return this.getNumberAttribute('burst_size');
  }
  public set burstSize(value: number) {
    this._burstSize = value;
  }
  public resetBurstSize() {
    this._burstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSizeInput() {
    return this._burstSize;
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }

  // rate_limited_methods - computed: false, optional: false, required: true
  private _rateLimitedMethods?: string[]; 
  public get rateLimitedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('rate_limited_methods'));
  }
  public set rateLimitedMethods(value: string[]) {
    this._rateLimitedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitedMethodsInput() {
    return this._rateLimitedMethods;
  }

  // requests_rate_block - computed: false, optional: false, required: true
  private _requestsRateBlock?: number; 
  public get requestsRateBlock() {
    return this.getNumberAttribute('requests_rate_block');
  }
  public set requestsRateBlock(value: number) {
    this._requestsRateBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsRateBlockInput() {
    return this._requestsRateBlock;
  }

  // target_uri - computed: false, optional: false, required: true
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }
}

export class ProfileL7DosRequestLimitsList extends cdktf.ComplexList {
  public internalValue? : ProfileL7DosRequestLimits[] | cdktf.IResolvable

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
  public get(index: number): ProfileL7DosRequestLimitsOutputReference {
    return new ProfileL7DosRequestLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos valtix_profile_l7dos}
*/
export class ProfileL7Dos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_profile_l7dos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileL7Dos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileL7Dos to import
  * @param importFromId The id of the existing ProfileL7Dos that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileL7Dos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_profile_l7dos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_l7dos valtix_profile_l7dos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileL7DosConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileL7DosConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_profile_l7dos',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._requestLimits.internalValue = config.requestLimits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // request_limits - computed: false, optional: true, required: false
  private _requestLimits = new ProfileL7DosRequestLimitsList(this, "request_limits", false);
  public get requestLimits() {
    return this._requestLimits;
  }
  public putRequestLimits(value: ProfileL7DosRequestLimits[] | cdktf.IResolvable) {
    this._requestLimits.internalValue = value;
  }
  public resetRequestLimits() {
    this._requestLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLimitsInput() {
    return this._requestLimits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      request_limits: cdktf.listMapper(profileL7DosRequestLimitsToTerraform, true)(this._requestLimits.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_limits: {
        value: cdktf.listMapperHcl(profileL7DosRequestLimitsToHclTerraform, true)(this._requestLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileL7DosRequestLimitsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
