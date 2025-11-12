// https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchIsmPolicyMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#id OpensearchIsmPolicyMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When updating multiple indices, you might want to include a state filter to only affect certain managed indices. The background process only applies the change if the index is currently in the state specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#include OpensearchIsmPolicyMapping#include}
  */
  readonly include?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Name of the index to apply the policy to. You can use an index pattern to update multiple indices at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#indexes OpensearchIsmPolicyMapping#indexes}
  */
  readonly indexes: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#is_safe OpensearchIsmPolicyMapping#is_safe}
  */
  readonly isSafe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#managed_indexes OpensearchIsmPolicyMapping#managed_indexes}
  */
  readonly managedIndexes?: string[];
  /**
  * The name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#policy_id OpensearchIsmPolicyMapping#policy_id}
  */
  readonly policyId: string;
  /**
  * After a change in policy takes place, specify the state for the index to transition to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#state OpensearchIsmPolicyMapping#state}
  */
  readonly state?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#timeouts OpensearchIsmPolicyMapping#timeouts}
  */
  readonly timeouts?: OpensearchIsmPolicyMappingTimeouts;
}
export interface OpensearchIsmPolicyMappingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#create OpensearchIsmPolicyMapping#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#update OpensearchIsmPolicyMapping#update}
  */
  readonly update?: string;
}

export function opensearchIsmPolicyMappingTimeoutsToTerraform(struct?: OpensearchIsmPolicyMappingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function opensearchIsmPolicyMappingTimeoutsToHclTerraform(struct?: OpensearchIsmPolicyMappingTimeouts | cdktf.IResolvable): any {
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

export class OpensearchIsmPolicyMappingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchIsmPolicyMappingTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchIsmPolicyMappingTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping elasticsearch_opensearch_ism_policy_mapping}
*/
export class OpensearchIsmPolicyMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_opensearch_ism_policy_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchIsmPolicyMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchIsmPolicyMapping to import
  * @param importFromId The id of the existing OpensearchIsmPolicyMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchIsmPolicyMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_opensearch_ism_policy_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/opensearch_ism_policy_mapping elasticsearch_opensearch_ism_policy_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchIsmPolicyMappingConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchIsmPolicyMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_opensearch_ism_policy_mapping',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
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
    this._include = config.include;
    this._indexes = config.indexes;
    this._isSafe = config.isSafe;
    this._managedIndexes = config.managedIndexes;
    this._policyId = config.policyId;
    this._state = config.state;
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

  // include - computed: false, optional: true, required: false
  private _include?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get include() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('include')));
  }
  public set include(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // indexes - computed: false, optional: false, required: true
  private _indexes?: string; 
  public get indexes() {
    return this.getStringAttribute('indexes');
  }
  public set indexes(value: string) {
    this._indexes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes;
  }

  // is_safe - computed: false, optional: true, required: false
  private _isSafe?: boolean | cdktf.IResolvable; 
  public get isSafe() {
    return this.getBooleanAttribute('is_safe');
  }
  public set isSafe(value: boolean | cdktf.IResolvable) {
    this._isSafe = value;
  }
  public resetIsSafe() {
    this._isSafe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSafeInput() {
    return this._isSafe;
  }

  // managed_indexes - computed: true, optional: true, required: false
  private _managedIndexes?: string[]; 
  public get managedIndexes() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_indexes'));
  }
  public set managedIndexes(value: string[]) {
    this._managedIndexes = value;
  }
  public resetManagedIndexes() {
    this._managedIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIndexesInput() {
    return this._managedIndexes;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpensearchIsmPolicyMappingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpensearchIsmPolicyMappingTimeouts) {
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
      include: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._include),
      indexes: cdktf.stringToTerraform(this._indexes),
      is_safe: cdktf.booleanToTerraform(this._isSafe),
      managed_indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedIndexes),
      policy_id: cdktf.stringToTerraform(this._policyId),
      state: cdktf.stringToTerraform(this._state),
      timeouts: opensearchIsmPolicyMappingTimeoutsToTerraform(this._timeouts.internalValue),
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
      include: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._include),
        isBlock: false,
        type: "set",
        storageClassType: "stringMapList",
      },
      indexes: {
        value: cdktf.stringToHclTerraform(this._indexes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_safe: {
        value: cdktf.booleanToHclTerraform(this._isSafe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      managed_indexes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedIndexes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: opensearchIsmPolicyMappingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchIsmPolicyMappingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
