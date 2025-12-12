// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurePosturePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#description SecurePosturePolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#is_active SecurePosturePolicy#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#link SecurePosturePolicy#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#max_kube_version SecurePosturePolicy#max_kube_version}
  */
  readonly maxKubeVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#min_kube_version SecurePosturePolicy#min_kube_version}
  */
  readonly minKubeVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#name SecurePosturePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#platform SecurePosturePolicy#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#type SecurePosturePolicy#type}
  */
  readonly type?: string;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#group SecurePosturePolicy#group}
  */
  readonly group?: SecurePosturePolicyGroup[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#target SecurePosturePolicy#target}
  */
  readonly target?: SecurePosturePolicyTarget[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#timeouts SecurePosturePolicy#timeouts}
  */
  readonly timeouts?: SecurePosturePolicyTimeouts;
}
export interface SecurePosturePolicyGroupRequirementControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#enabled SecurePosturePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#name SecurePosturePolicy#name}
  */
  readonly name: string;
}

export function securePosturePolicyGroupRequirementControlToTerraform(struct?: SecurePosturePolicyGroupRequirementControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securePosturePolicyGroupRequirementControlToHclTerraform(struct?: SecurePosturePolicyGroupRequirementControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurePosturePolicyGroupRequirementControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurePosturePolicyGroupRequirementControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurePosturePolicyGroupRequirementControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._name = value.name;
    }
  }

  // enabled - computed: false, optional: true, required: false
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
}

export class SecurePosturePolicyGroupRequirementControlList extends cdktf.ComplexList {
  public internalValue? : SecurePosturePolicyGroupRequirementControl[] | cdktf.IResolvable

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
  public get(index: number): SecurePosturePolicyGroupRequirementControlOutputReference {
    return new SecurePosturePolicyGroupRequirementControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurePosturePolicyGroupRequirement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#description SecurePosturePolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#name SecurePosturePolicy#name}
  */
  readonly name: string;
  /**
  * control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#control SecurePosturePolicy#control}
  */
  readonly control?: SecurePosturePolicyGroupRequirementControl[] | cdktf.IResolvable;
}

export function securePosturePolicyGroupRequirementToTerraform(struct?: SecurePosturePolicyGroupRequirement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    control: cdktf.listMapper(securePosturePolicyGroupRequirementControlToTerraform, true)(struct!.control),
  }
}


export function securePosturePolicyGroupRequirementToHclTerraform(struct?: SecurePosturePolicyGroupRequirement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control: {
      value: cdktf.listMapperHcl(securePosturePolicyGroupRequirementControlToHclTerraform, true)(struct!.control),
      isBlock: true,
      type: "set",
      storageClassType: "SecurePosturePolicyGroupRequirementControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurePosturePolicyGroupRequirementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurePosturePolicyGroupRequirement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._control?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.control = this._control?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurePosturePolicyGroupRequirement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._control.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._control.internalValue = value.control;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // control - computed: false, optional: true, required: false
  private _control = new SecurePosturePolicyGroupRequirementControlList(this, "control", true);
  public get control() {
    return this._control;
  }
  public putControl(value: SecurePosturePolicyGroupRequirementControl[] | cdktf.IResolvable) {
    this._control.internalValue = value;
  }
  public resetControl() {
    this._control.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlInput() {
    return this._control.internalValue;
  }
}

export class SecurePosturePolicyGroupRequirementList extends cdktf.ComplexList {
  public internalValue? : SecurePosturePolicyGroupRequirement[] | cdktf.IResolvable

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
  public get(index: number): SecurePosturePolicyGroupRequirementOutputReference {
    return new SecurePosturePolicyGroupRequirementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurePosturePolicyGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#description SecurePosturePolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#name SecurePosturePolicy#name}
  */
  readonly name: string;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#group SecurePosturePolicy#group}
  */
  readonly group?: SecurePosturePolicyGroup[] | cdktf.IResolvable;
  /**
  * requirement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#requirement SecurePosturePolicy#requirement}
  */
  readonly requirement?: SecurePosturePolicyGroupRequirement[] | cdktf.IResolvable;
}

export function securePosturePolicyGroupToTerraform(struct?: SecurePosturePolicyGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    group: cdktf.listMapper(securePosturePolicyGroupToTerraform, true)(struct!.group),
    requirement: cdktf.listMapper(securePosturePolicyGroupRequirementToTerraform, true)(struct!.requirement),
  }
}


export function securePosturePolicyGroupToHclTerraform(struct?: SecurePosturePolicyGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.listMapperHcl(securePosturePolicyGroupToHclTerraform, true)(struct!.group),
      isBlock: true,
      type: "list",
      storageClassType: "SecurePosturePolicyGroupList",
    },
    requirement: {
      value: cdktf.listMapperHcl(securePosturePolicyGroupRequirementToHclTerraform, true)(struct!.requirement),
      isBlock: true,
      type: "set",
      storageClassType: "SecurePosturePolicyGroupRequirementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurePosturePolicyGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurePosturePolicyGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._requirement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirement = this._requirement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurePosturePolicyGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._group.internalValue = undefined;
      this._requirement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._group.internalValue = value.group;
      this._requirement.internalValue = value.requirement;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // group - computed: false, optional: true, required: false
  private _group = new SecurePosturePolicyGroupList(this, "group", false);
  public get group() {
    return this._group;
  }
  public putGroup(value: SecurePosturePolicyGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // requirement - computed: false, optional: true, required: false
  private _requirement = new SecurePosturePolicyGroupRequirementList(this, "requirement", true);
  public get requirement() {
    return this._requirement;
  }
  public putRequirement(value: SecurePosturePolicyGroupRequirement[] | cdktf.IResolvable) {
    this._requirement.internalValue = value;
  }
  public resetRequirement() {
    this._requirement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementInput() {
    return this._requirement.internalValue;
  }
}

export class SecurePosturePolicyGroupList extends cdktf.ComplexList {
  public internalValue? : SecurePosturePolicyGroup[] | cdktf.IResolvable

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
  public get(index: number): SecurePosturePolicyGroupOutputReference {
    return new SecurePosturePolicyGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurePosturePolicyTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#max_version SecurePosturePolicy#max_version}
  */
  readonly maxVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#min_version SecurePosturePolicy#min_version}
  */
  readonly minVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#platform SecurePosturePolicy#platform}
  */
  readonly platform?: string;
}

export function securePosturePolicyTargetToTerraform(struct?: SecurePosturePolicyTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_version: cdktf.numberToTerraform(struct!.maxVersion),
    min_version: cdktf.numberToTerraform(struct!.minVersion),
    platform: cdktf.stringToTerraform(struct!.platform),
  }
}


export function securePosturePolicyTargetToHclTerraform(struct?: SecurePosturePolicyTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_version: {
      value: cdktf.numberToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_version: {
      value: cdktf.numberToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurePosturePolicyTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurePosturePolicyTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurePosturePolicyTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._platform = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._platform = value.platform;
    }
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: number; 
  public get maxVersion() {
    return this.getNumberAttribute('max_version');
  }
  public set maxVersion(value: number) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: number; 
  public get minVersion() {
    return this.getNumberAttribute('min_version');
  }
  public set minVersion(value: number) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }
}

export class SecurePosturePolicyTargetList extends cdktf.ComplexList {
  public internalValue? : SecurePosturePolicyTarget[] | cdktf.IResolvable

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
  public get(index: number): SecurePosturePolicyTargetOutputReference {
    return new SecurePosturePolicyTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurePosturePolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#create SecurePosturePolicy#create}
  */
  readonly create?: string;
}

export function securePosturePolicyTimeoutsToTerraform(struct?: SecurePosturePolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function securePosturePolicyTimeoutsToHclTerraform(struct?: SecurePosturePolicyTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurePosturePolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurePosturePolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurePosturePolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy sysdig_secure_posture_policy}
*/
export class SecurePosturePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_posture_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurePosturePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurePosturePolicy to import
  * @param importFromId The id of the existing SecurePosturePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurePosturePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_posture_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.3.1/docs/resources/secure_posture_policy sysdig_secure_posture_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurePosturePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurePosturePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_posture_policy',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.3.1',
        providerVersionConstraint: '3.3.1'
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
    this._isActive = config.isActive;
    this._link = config.link;
    this._maxKubeVersion = config.maxKubeVersion;
    this._minKubeVersion = config.minKubeVersion;
    this._name = config.name;
    this._platform = config.platform;
    this._type = config.type;
    this._group.internalValue = config.group;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // max_kube_version - computed: false, optional: true, required: false
  private _maxKubeVersion?: number; 
  public get maxKubeVersion() {
    return this.getNumberAttribute('max_kube_version');
  }
  public set maxKubeVersion(value: number) {
    this._maxKubeVersion = value;
  }
  public resetMaxKubeVersion() {
    this._maxKubeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxKubeVersionInput() {
    return this._maxKubeVersion;
  }

  // min_kube_version - computed: false, optional: true, required: false
  private _minKubeVersion?: number; 
  public get minKubeVersion() {
    return this.getNumberAttribute('min_kube_version');
  }
  public set minKubeVersion(value: number) {
    this._minKubeVersion = value;
  }
  public resetMinKubeVersion() {
    this._minKubeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minKubeVersionInput() {
    return this._minKubeVersion;
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

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // group - computed: false, optional: true, required: false
  private _group = new SecurePosturePolicyGroupList(this, "group", false);
  public get group() {
    return this._group;
  }
  public putGroup(value: SecurePosturePolicyGroup[] | cdktf.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new SecurePosturePolicyTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: SecurePosturePolicyTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecurePosturePolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecurePosturePolicyTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      is_active: cdktf.booleanToTerraform(this._isActive),
      link: cdktf.stringToTerraform(this._link),
      max_kube_version: cdktf.numberToTerraform(this._maxKubeVersion),
      min_kube_version: cdktf.numberToTerraform(this._minKubeVersion),
      name: cdktf.stringToTerraform(this._name),
      platform: cdktf.stringToTerraform(this._platform),
      type: cdktf.stringToTerraform(this._type),
      group: cdktf.listMapper(securePosturePolicyGroupToTerraform, true)(this._group.internalValue),
      target: cdktf.listMapper(securePosturePolicyTargetToTerraform, true)(this._target.internalValue),
      timeouts: securePosturePolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link: {
        value: cdktf.stringToHclTerraform(this._link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_kube_version: {
        value: cdktf.numberToHclTerraform(this._maxKubeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_kube_version: {
        value: cdktf.numberToHclTerraform(this._minKubeVersion),
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
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.listMapperHcl(securePosturePolicyGroupToHclTerraform, true)(this._group.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurePosturePolicyGroupList",
      },
      target: {
        value: cdktf.listMapperHcl(securePosturePolicyTargetToHclTerraform, true)(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurePosturePolicyTargetList",
      },
      timeouts: {
        value: securePosturePolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurePosturePolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
