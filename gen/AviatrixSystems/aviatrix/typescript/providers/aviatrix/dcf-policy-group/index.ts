// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcfPolicyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Attach the DCF Policy Group to an attachment point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#attach_to DcfPolicyGroup#attach_to}
  */
  readonly attachTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#id DcfPolicyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the DCF Policy Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#name DcfPolicyGroup#name}
  */
  readonly name: string;
  /**
  * attachment_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#attachment_point DcfPolicyGroup#attachment_point}
  */
  readonly attachmentPoint?: DcfPolicyGroupAttachmentPoint[] | cdktf.IResolvable;
  /**
  * policy_group_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#policy_group_reference DcfPolicyGroup#policy_group_reference}
  */
  readonly policyGroupReference?: DcfPolicyGroupPolicyGroupReference[] | cdktf.IResolvable;
  /**
  * ruleset_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#ruleset_reference DcfPolicyGroup#ruleset_reference}
  */
  readonly rulesetReference?: DcfPolicyGroupRulesetReference[] | cdktf.IResolvable;
}
export interface DcfPolicyGroupAttachmentPoint {
  /**
  * Name of the DCF Attachment Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#name DcfPolicyGroup#name}
  */
  readonly name: string;
  /**
  * Priority of the DCF Ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#priority DcfPolicyGroup#priority}
  */
  readonly priority: number;
}

export function dcfPolicyGroupAttachmentPointToTerraform(struct?: DcfPolicyGroupAttachmentPoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dcfPolicyGroupAttachmentPointToHclTerraform(struct?: DcfPolicyGroupAttachmentPoint | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcfPolicyGroupAttachmentPointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DcfPolicyGroupAttachmentPoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcfPolicyGroupAttachmentPoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
    }
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // target_uuid - computed: true, optional: false, required: false
  public get targetUuid() {
    return this.getStringAttribute('target_uuid');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DcfPolicyGroupAttachmentPointList extends cdktf.ComplexList {
  public internalValue? : DcfPolicyGroupAttachmentPoint[] | cdktf.IResolvable

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
  public get(index: number): DcfPolicyGroupAttachmentPointOutputReference {
    return new DcfPolicyGroupAttachmentPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DcfPolicyGroupPolicyGroupReference {
  /**
  * Priority of the DCF Policy Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#priority DcfPolicyGroup#priority}
  */
  readonly priority: number;
  /**
  * Target UUID of the DCF Policy Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#target_uuid DcfPolicyGroup#target_uuid}
  */
  readonly targetUuid: string;
}

export function dcfPolicyGroupPolicyGroupReferenceToTerraform(struct?: DcfPolicyGroupPolicyGroupReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    target_uuid: cdktf.stringToTerraform(struct!.targetUuid),
  }
}


export function dcfPolicyGroupPolicyGroupReferenceToHclTerraform(struct?: DcfPolicyGroupPolicyGroupReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_uuid: {
      value: cdktf.stringToHclTerraform(struct!.targetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcfPolicyGroupPolicyGroupReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DcfPolicyGroupPolicyGroupReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._targetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUuid = this._targetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcfPolicyGroupPolicyGroupReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._targetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._targetUuid = value.targetUuid;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // target_uuid - computed: false, optional: false, required: true
  private _targetUuid?: string; 
  public get targetUuid() {
    return this.getStringAttribute('target_uuid');
  }
  public set targetUuid(value: string) {
    this._targetUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUuidInput() {
    return this._targetUuid;
  }
}

export class DcfPolicyGroupPolicyGroupReferenceList extends cdktf.ComplexList {
  public internalValue? : DcfPolicyGroupPolicyGroupReference[] | cdktf.IResolvable

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
  public get(index: number): DcfPolicyGroupPolicyGroupReferenceOutputReference {
    return new DcfPolicyGroupPolicyGroupReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DcfPolicyGroupRulesetReference {
  /**
  * Priority of the DCF Ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#priority DcfPolicyGroup#priority}
  */
  readonly priority: number;
  /**
  * Target UUID of the DCF Ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#target_uuid DcfPolicyGroup#target_uuid}
  */
  readonly targetUuid: string;
}

export function dcfPolicyGroupRulesetReferenceToTerraform(struct?: DcfPolicyGroupRulesetReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    target_uuid: cdktf.stringToTerraform(struct!.targetUuid),
  }
}


export function dcfPolicyGroupRulesetReferenceToHclTerraform(struct?: DcfPolicyGroupRulesetReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_uuid: {
      value: cdktf.stringToHclTerraform(struct!.targetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcfPolicyGroupRulesetReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DcfPolicyGroupRulesetReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._targetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUuid = this._targetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcfPolicyGroupRulesetReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._targetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._targetUuid = value.targetUuid;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // target_uuid - computed: false, optional: false, required: true
  private _targetUuid?: string; 
  public get targetUuid() {
    return this.getStringAttribute('target_uuid');
  }
  public set targetUuid(value: string) {
    this._targetUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUuidInput() {
    return this._targetUuid;
  }
}

export class DcfPolicyGroupRulesetReferenceList extends cdktf.ComplexList {
  public internalValue? : DcfPolicyGroupRulesetReference[] | cdktf.IResolvable

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
  public get(index: number): DcfPolicyGroupRulesetReferenceOutputReference {
    return new DcfPolicyGroupRulesetReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group aviatrix_dcf_policy_group}
*/
export class DcfPolicyGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_dcf_policy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcfPolicyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcfPolicyGroup to import
  * @param importFromId The id of the existing DcfPolicyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcfPolicyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_dcf_policy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_policy_group aviatrix_dcf_policy_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcfPolicyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DcfPolicyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_dcf_policy_group',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachTo = config.attachTo;
    this._id = config.id;
    this._name = config.name;
    this._attachmentPoint.internalValue = config.attachmentPoint;
    this._policyGroupReference.internalValue = config.policyGroupReference;
    this._rulesetReference.internalValue = config.rulesetReference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach_to - computed: false, optional: true, required: false
  private _attachTo?: string; 
  public get attachTo() {
    return this.getStringAttribute('attach_to');
  }
  public set attachTo(value: string) {
    this._attachTo = value;
  }
  public resetAttachTo() {
    this._attachTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachToInput() {
    return this._attachTo;
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

  // system_resource - computed: true, optional: false, required: false
  public get systemResource() {
    return this.getBooleanAttribute('system_resource');
  }

  // attachment_point - computed: false, optional: true, required: false
  private _attachmentPoint = new DcfPolicyGroupAttachmentPointList(this, "attachment_point", true);
  public get attachmentPoint() {
    return this._attachmentPoint;
  }
  public putAttachmentPoint(value: DcfPolicyGroupAttachmentPoint[] | cdktf.IResolvable) {
    this._attachmentPoint.internalValue = value;
  }
  public resetAttachmentPoint() {
    this._attachmentPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentPointInput() {
    return this._attachmentPoint.internalValue;
  }

  // policy_group_reference - computed: false, optional: true, required: false
  private _policyGroupReference = new DcfPolicyGroupPolicyGroupReferenceList(this, "policy_group_reference", true);
  public get policyGroupReference() {
    return this._policyGroupReference;
  }
  public putPolicyGroupReference(value: DcfPolicyGroupPolicyGroupReference[] | cdktf.IResolvable) {
    this._policyGroupReference.internalValue = value;
  }
  public resetPolicyGroupReference() {
    this._policyGroupReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupReferenceInput() {
    return this._policyGroupReference.internalValue;
  }

  // ruleset_reference - computed: false, optional: true, required: false
  private _rulesetReference = new DcfPolicyGroupRulesetReferenceList(this, "ruleset_reference", true);
  public get rulesetReference() {
    return this._rulesetReference;
  }
  public putRulesetReference(value: DcfPolicyGroupRulesetReference[] | cdktf.IResolvable) {
    this._rulesetReference.internalValue = value;
  }
  public resetRulesetReference() {
    this._rulesetReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetReferenceInput() {
    return this._rulesetReference.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach_to: cdktf.stringToTerraform(this._attachTo),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      attachment_point: cdktf.listMapper(dcfPolicyGroupAttachmentPointToTerraform, true)(this._attachmentPoint.internalValue),
      policy_group_reference: cdktf.listMapper(dcfPolicyGroupPolicyGroupReferenceToTerraform, true)(this._policyGroupReference.internalValue),
      ruleset_reference: cdktf.listMapper(dcfPolicyGroupRulesetReferenceToTerraform, true)(this._rulesetReference.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_to: {
        value: cdktf.stringToHclTerraform(this._attachTo),
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
      attachment_point: {
        value: cdktf.listMapperHcl(dcfPolicyGroupAttachmentPointToHclTerraform, true)(this._attachmentPoint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DcfPolicyGroupAttachmentPointList",
      },
      policy_group_reference: {
        value: cdktf.listMapperHcl(dcfPolicyGroupPolicyGroupReferenceToHclTerraform, true)(this._policyGroupReference.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DcfPolicyGroupPolicyGroupReferenceList",
      },
      ruleset_reference: {
        value: cdktf.listMapperHcl(dcfPolicyGroupRulesetReferenceToHclTerraform, true)(this._rulesetReference.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DcfPolicyGroupRulesetReferenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
