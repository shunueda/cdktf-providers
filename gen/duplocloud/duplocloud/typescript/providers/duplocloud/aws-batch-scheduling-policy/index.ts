// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsBatchSchedulingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#id AwsBatchSchedulingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the scheduling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#name AwsBatchSchedulingPolicy#name}
  */
  readonly name: string;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#tags AwsBatchSchedulingPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The GUID of the tenant that the aws batch scheduling policy will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#tenant_id AwsBatchSchedulingPolicy#tenant_id}
  */
  readonly tenantId: string;
  /**
  * fair_share_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#fair_share_policy AwsBatchSchedulingPolicy#fair_share_policy}
  */
  readonly fairSharePolicy?: AwsBatchSchedulingPolicyFairSharePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#timeouts AwsBatchSchedulingPolicy#timeouts}
  */
  readonly timeouts?: AwsBatchSchedulingPolicyTimeouts;
}
export interface AwsBatchSchedulingPolicyFairSharePolicyShareDistribution {
  /**
  * A fair share identifier or fair share identifier prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#share_identifier AwsBatchSchedulingPolicy#share_identifier}
  */
  readonly shareIdentifier: string;
  /**
  * The weight factor for the fair share identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#weight_factor AwsBatchSchedulingPolicy#weight_factor}
  */
  readonly weightFactor?: number;
}

export function awsBatchSchedulingPolicyFairSharePolicyShareDistributionToTerraform(struct?: AwsBatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    share_identifier: cdktf.stringToTerraform(struct!.shareIdentifier),
    weight_factor: cdktf.numberToTerraform(struct!.weightFactor),
  }
}


export function awsBatchSchedulingPolicyFairSharePolicyShareDistributionToHclTerraform(struct?: AwsBatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    share_identifier: {
      value: cdktf.stringToHclTerraform(struct!.shareIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight_factor: {
      value: cdktf.numberToHclTerraform(struct!.weightFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsBatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shareIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareIdentifier = this._shareIdentifier;
    }
    if (this._weightFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightFactor = this._weightFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shareIdentifier = undefined;
      this._weightFactor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shareIdentifier = value.shareIdentifier;
      this._weightFactor = value.weightFactor;
    }
  }

  // share_identifier - computed: false, optional: false, required: true
  private _shareIdentifier?: string; 
  public get shareIdentifier() {
    return this.getStringAttribute('share_identifier');
  }
  public set shareIdentifier(value: string) {
    this._shareIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdentifierInput() {
    return this._shareIdentifier;
  }

  // weight_factor - computed: false, optional: true, required: false
  private _weightFactor?: number; 
  public get weightFactor() {
    return this.getNumberAttribute('weight_factor');
  }
  public set weightFactor(value: number) {
    this._weightFactor = value;
  }
  public resetWeightFactor() {
    this._weightFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightFactorInput() {
    return this._weightFactor;
  }
}

export class AwsBatchSchedulingPolicyFairSharePolicyShareDistributionList extends cdktf.ComplexList {
  public internalValue? : AwsBatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable

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
  public get(index: number): AwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference {
    return new AwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsBatchSchedulingPolicyFairSharePolicy {
  /**
  * A value used to reserve some of the available maximum vCPU for fair share identifiers that have not yet been used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#compute_reservation AwsBatchSchedulingPolicy#compute_reservation}
  */
  readonly computeReservation?: number;
  /**
  * The time period to use to calculate a fair share percentage for each fair share identifier in use, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#share_decay_seconds AwsBatchSchedulingPolicy#share_decay_seconds}
  */
  readonly shareDecaySeconds?: number;
  /**
  * share_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#share_distribution AwsBatchSchedulingPolicy#share_distribution}
  */
  readonly shareDistribution?: AwsBatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable;
}

export function awsBatchSchedulingPolicyFairSharePolicyToTerraform(struct?: AwsBatchSchedulingPolicyFairSharePolicyOutputReference | AwsBatchSchedulingPolicyFairSharePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_reservation: cdktf.numberToTerraform(struct!.computeReservation),
    share_decay_seconds: cdktf.numberToTerraform(struct!.shareDecaySeconds),
    share_distribution: cdktf.listMapper(awsBatchSchedulingPolicyFairSharePolicyShareDistributionToTerraform, true)(struct!.shareDistribution),
  }
}


export function awsBatchSchedulingPolicyFairSharePolicyToHclTerraform(struct?: AwsBatchSchedulingPolicyFairSharePolicyOutputReference | AwsBatchSchedulingPolicyFairSharePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_reservation: {
      value: cdktf.numberToHclTerraform(struct!.computeReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    share_decay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.shareDecaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    share_distribution: {
      value: cdktf.listMapperHcl(awsBatchSchedulingPolicyFairSharePolicyShareDistributionToHclTerraform, true)(struct!.shareDistribution),
      isBlock: true,
      type: "set",
      storageClassType: "AwsBatchSchedulingPolicyFairSharePolicyShareDistributionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchSchedulingPolicyFairSharePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsBatchSchedulingPolicyFairSharePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeReservation = this._computeReservation;
    }
    if (this._shareDecaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareDecaySeconds = this._shareDecaySeconds;
    }
    if (this._shareDistribution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareDistribution = this._shareDistribution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchSchedulingPolicyFairSharePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeReservation = undefined;
      this._shareDecaySeconds = undefined;
      this._shareDistribution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeReservation = value.computeReservation;
      this._shareDecaySeconds = value.shareDecaySeconds;
      this._shareDistribution.internalValue = value.shareDistribution;
    }
  }

  // compute_reservation - computed: true, optional: true, required: false
  private _computeReservation?: number; 
  public get computeReservation() {
    return this.getNumberAttribute('compute_reservation');
  }
  public set computeReservation(value: number) {
    this._computeReservation = value;
  }
  public resetComputeReservation() {
    this._computeReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeReservationInput() {
    return this._computeReservation;
  }

  // share_decay_seconds - computed: true, optional: true, required: false
  private _shareDecaySeconds?: number; 
  public get shareDecaySeconds() {
    return this.getNumberAttribute('share_decay_seconds');
  }
  public set shareDecaySeconds(value: number) {
    this._shareDecaySeconds = value;
  }
  public resetShareDecaySeconds() {
    this._shareDecaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDecaySecondsInput() {
    return this._shareDecaySeconds;
  }

  // share_distribution - computed: false, optional: true, required: false
  private _shareDistribution = new AwsBatchSchedulingPolicyFairSharePolicyShareDistributionList(this, "share_distribution", true);
  public get shareDistribution() {
    return this._shareDistribution;
  }
  public putShareDistribution(value: AwsBatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable) {
    this._shareDistribution.internalValue = value;
  }
  public resetShareDistribution() {
    this._shareDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDistributionInput() {
    return this._shareDistribution.internalValue;
  }
}
export interface AwsBatchSchedulingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#create AwsBatchSchedulingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#delete AwsBatchSchedulingPolicy#delete}
  */
  readonly delete?: string;
}

export function awsBatchSchedulingPolicyTimeoutsToTerraform(struct?: AwsBatchSchedulingPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function awsBatchSchedulingPolicyTimeoutsToHclTerraform(struct?: AwsBatchSchedulingPolicyTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchSchedulingPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsBatchSchedulingPolicyTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchSchedulingPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy duplocloud_aws_batch_scheduling_policy}
*/
export class AwsBatchSchedulingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_batch_scheduling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsBatchSchedulingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBatchSchedulingPolicy to import
  * @param importFromId The id of the existing AwsBatchSchedulingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBatchSchedulingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_batch_scheduling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_batch_scheduling_policy duplocloud_aws_batch_scheduling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBatchSchedulingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBatchSchedulingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_batch_scheduling_policy',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28',
        providerVersionConstraint: '0.11.28'
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
    this._name = config.name;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._fairSharePolicy.internalValue = config.fairSharePolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // fair_share_policy - computed: false, optional: true, required: false
  private _fairSharePolicy = new AwsBatchSchedulingPolicyFairSharePolicyOutputReference(this, "fair_share_policy");
  public get fairSharePolicy() {
    return this._fairSharePolicy;
  }
  public putFairSharePolicy(value: AwsBatchSchedulingPolicyFairSharePolicy) {
    this._fairSharePolicy.internalValue = value;
  }
  public resetFairSharePolicy() {
    this._fairSharePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fairSharePolicyInput() {
    return this._fairSharePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsBatchSchedulingPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsBatchSchedulingPolicyTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      fair_share_policy: awsBatchSchedulingPolicyFairSharePolicyToTerraform(this._fairSharePolicy.internalValue),
      timeouts: awsBatchSchedulingPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fair_share_policy: {
        value: awsBatchSchedulingPolicyFairSharePolicyToHclTerraform(this._fairSharePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBatchSchedulingPolicyFairSharePolicyList",
      },
      timeouts: {
        value: awsBatchSchedulingPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsBatchSchedulingPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
