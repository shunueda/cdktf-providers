// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChdfsLifeCycleRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * file system id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule#file_system_id ChdfsLifeCycleRule#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule#id ChdfsLifeCycleRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * life_cycle_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule#life_cycle_rule ChdfsLifeCycleRule#life_cycle_rule}
  */
  readonly lifeCycleRule: ChdfsLifeCycleRuleLifeCycleRule;
}
export interface ChdfsLifeCycleRuleLifeCycleRuleTransitions {
  /**
  * trigger days(n day).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule#days ChdfsLifeCycleRule#days}
  */
  readonly days: number;
  /**
  * transition type, 1: archive, 2: delete, 3: low rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule#type ChdfsLifeCycleRule#type}
  */
  readonly type: number;
}

export function chdfsLifeCycleRuleLifeCycleRuleTransitionsToTerraform(struct?: ChdfsLifeCycleRuleLifeCycleRuleTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function chdfsLifeCycleRuleLifeCycleRuleTransitionsToHclTerraform(struct?: ChdfsLifeCycleRuleLifeCycleRuleTransitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChdfsLifeCycleRuleLifeCycleRuleTransitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChdfsLifeCycleRuleLifeCycleRuleTransitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChdfsLifeCycleRuleLifeCycleRuleTransitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._type = value.type;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ChdfsLifeCycleRuleLifeCycleRuleTransitionsList extends cdktf.ComplexList {
  public internalValue? : ChdfsLifeCycleRuleLifeCycleRuleTransitions[] | cdktf.IResolvable

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
  public get(index: number): ChdfsLifeCycleRuleLifeCycleRuleTransitionsOutputReference {
    return new ChdfsLifeCycleRuleLifeCycleRuleTransitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChdfsLifeCycleRuleLifeCycleRule {
  /**
  * rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule#life_cycle_rule_name ChdfsLifeCycleRule#life_cycle_rule_name}
  */
  readonly lifeCycleRuleName?: string;
  /**
  * rule op path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule#path ChdfsLifeCycleRule#path}
  */
  readonly path?: string;
  /**
  * rule status, 1:open, 2:close.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule#status ChdfsLifeCycleRule#status}
  */
  readonly status?: number;
  /**
  * transitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule#transitions ChdfsLifeCycleRule#transitions}
  */
  readonly transitions?: ChdfsLifeCycleRuleLifeCycleRuleTransitions[] | cdktf.IResolvable;
}

export function chdfsLifeCycleRuleLifeCycleRuleToTerraform(struct?: ChdfsLifeCycleRuleLifeCycleRuleOutputReference | ChdfsLifeCycleRuleLifeCycleRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    life_cycle_rule_name: cdktf.stringToTerraform(struct!.lifeCycleRuleName),
    path: cdktf.stringToTerraform(struct!.path),
    status: cdktf.numberToTerraform(struct!.status),
    transitions: cdktf.listMapper(chdfsLifeCycleRuleLifeCycleRuleTransitionsToTerraform, true)(struct!.transitions),
  }
}


export function chdfsLifeCycleRuleLifeCycleRuleToHclTerraform(struct?: ChdfsLifeCycleRuleLifeCycleRuleOutputReference | ChdfsLifeCycleRuleLifeCycleRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    life_cycle_rule_name: {
      value: cdktf.stringToHclTerraform(struct!.lifeCycleRuleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transitions: {
      value: cdktf.listMapperHcl(chdfsLifeCycleRuleLifeCycleRuleTransitionsToHclTerraform, true)(struct!.transitions),
      isBlock: true,
      type: "list",
      storageClassType: "ChdfsLifeCycleRuleLifeCycleRuleTransitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChdfsLifeCycleRuleLifeCycleRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChdfsLifeCycleRuleLifeCycleRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifeCycleRuleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifeCycleRuleName = this._lifeCycleRuleName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._transitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitions = this._transitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChdfsLifeCycleRuleLifeCycleRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifeCycleRuleName = undefined;
      this._path = undefined;
      this._status = undefined;
      this._transitions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifeCycleRuleName = value.lifeCycleRuleName;
      this._path = value.path;
      this._status = value.status;
      this._transitions.internalValue = value.transitions;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // life_cycle_rule_id - computed: true, optional: false, required: false
  public get lifeCycleRuleId() {
    return this.getNumberAttribute('life_cycle_rule_id');
  }

  // life_cycle_rule_name - computed: false, optional: true, required: false
  private _lifeCycleRuleName?: string; 
  public get lifeCycleRuleName() {
    return this.getStringAttribute('life_cycle_rule_name');
  }
  public set lifeCycleRuleName(value: string) {
    this._lifeCycleRuleName = value;
  }
  public resetLifeCycleRuleName() {
    this._lifeCycleRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeCycleRuleNameInput() {
    return this._lifeCycleRuleName;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // transitions - computed: false, optional: true, required: false
  private _transitions = new ChdfsLifeCycleRuleLifeCycleRuleTransitionsList(this, "transitions", false);
  public get transitions() {
    return this._transitions;
  }
  public putTransitions(value: ChdfsLifeCycleRuleLifeCycleRuleTransitions[] | cdktf.IResolvable) {
    this._transitions.internalValue = value;
  }
  public resetTransitions() {
    this._transitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionsInput() {
    return this._transitions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule tencentcloud_chdfs_life_cycle_rule}
*/
export class ChdfsLifeCycleRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_chdfs_life_cycle_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChdfsLifeCycleRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChdfsLifeCycleRule to import
  * @param importFromId The id of the existing ChdfsLifeCycleRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChdfsLifeCycleRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_chdfs_life_cycle_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/chdfs_life_cycle_rule tencentcloud_chdfs_life_cycle_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChdfsLifeCycleRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ChdfsLifeCycleRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_chdfs_life_cycle_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fileSystemId = config.fileSystemId;
    this._id = config.id;
    this._lifeCycleRule.internalValue = config.lifeCycleRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
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

  // life_cycle_rule - computed: false, optional: false, required: true
  private _lifeCycleRule = new ChdfsLifeCycleRuleLifeCycleRuleOutputReference(this, "life_cycle_rule");
  public get lifeCycleRule() {
    return this._lifeCycleRule;
  }
  public putLifeCycleRule(value: ChdfsLifeCycleRuleLifeCycleRule) {
    this._lifeCycleRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeCycleRuleInput() {
    return this._lifeCycleRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      id: cdktf.stringToTerraform(this._id),
      life_cycle_rule: chdfsLifeCycleRuleLifeCycleRuleToTerraform(this._lifeCycleRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_system_id: {
        value: cdktf.stringToHclTerraform(this._fileSystemId),
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
      life_cycle_rule: {
        value: chdfsLifeCycleRuleLifeCycleRuleToHclTerraform(this._lifeCycleRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChdfsLifeCycleRuleLifeCycleRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
