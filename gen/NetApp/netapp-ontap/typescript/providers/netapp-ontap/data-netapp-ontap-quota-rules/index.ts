// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapQuotaRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#cx_profile_name DataNetappOntapQuotaRules#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#filter DataNetappOntapQuotaRules#filter}
  */
  readonly filter?: DataNetappOntapQuotaRulesFilter;
}
export interface DataNetappOntapQuotaRulesFilter {
  /**
  * StorageQuotaRule qtree name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#qtree_name DataNetappOntapQuotaRules#qtree_name}
  */
  readonly qtreeName?: string;
  /**
  * StorageQuotaRule svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#svm_name DataNetappOntapQuotaRules#svm_name}
  */
  readonly svmName?: string;
  /**
  * StorageQuotaRule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#type DataNetappOntapQuotaRules#type}
  */
  readonly type?: string;
  /**
  * StorageQuotaRule volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#volume_name DataNetappOntapQuotaRules#volume_name}
  */
  readonly volumeName?: string;
}

export function dataNetappOntapQuotaRulesFilterToTerraform(struct?: DataNetappOntapQuotaRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qtree_name: cdktf.stringToTerraform(struct!.qtreeName),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
    type: cdktf.stringToTerraform(struct!.type),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataNetappOntapQuotaRulesFilterToHclTerraform(struct?: DataNetappOntapQuotaRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    qtree_name: {
      value: cdktf.stringToHclTerraform(struct!.qtreeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapQuotaRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQuotaRulesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qtreeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.qtreeName = this._qtreeName;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQuotaRulesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._qtreeName = undefined;
      this._svmName = undefined;
      this._type = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._qtreeName = value.qtreeName;
      this._svmName = value.svmName;
      this._type = value.type;
      this._volumeName = value.volumeName;
    }
  }

  // qtree_name - computed: false, optional: true, required: false
  private _qtreeName?: string; 
  public get qtreeName() {
    return this.getStringAttribute('qtree_name');
  }
  public set qtreeName(value: string) {
    this._qtreeName = value;
  }
  public resetQtreeName() {
    this._qtreeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qtreeNameInput() {
    return this._qtreeName;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
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

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataNetappOntapQuotaRulesStorageQuotaRulesFiles {
}

export function dataNetappOntapQuotaRulesStorageQuotaRulesFilesToTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapQuotaRulesStorageQuotaRulesFilesToHclTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapQuotaRulesStorageQuotaRulesFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQuotaRulesStorageQuotaRulesFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQuotaRulesStorageQuotaRulesFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hard_limit - computed: true, optional: false, required: false
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }

  // soft_limit - computed: true, optional: false, required: false
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
}
export interface DataNetappOntapQuotaRulesStorageQuotaRulesGroup {
}

export function dataNetappOntapQuotaRulesStorageQuotaRulesGroupToTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapQuotaRulesStorageQuotaRulesGroupToHclTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapQuotaRulesStorageQuotaRulesGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQuotaRulesStorageQuotaRulesGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQuotaRulesStorageQuotaRulesGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataNetappOntapQuotaRulesStorageQuotaRulesQtree {
  /**
  * name of the qtree
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#name DataNetappOntapQuotaRules#name}
  */
  readonly name?: string;
}

export function dataNetappOntapQuotaRulesStorageQuotaRulesQtreeToTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesQtree | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapQuotaRulesStorageQuotaRulesQtreeToHclTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesQtree | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapQuotaRulesStorageQuotaRulesQtreeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQuotaRulesStorageQuotaRulesQtree | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQuotaRulesStorageQuotaRulesQtree | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataNetappOntapQuotaRulesStorageQuotaRulesSvm {
  /**
  * name of the SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#name DataNetappOntapQuotaRules#name}
  */
  readonly name: string;
}

export function dataNetappOntapQuotaRulesStorageQuotaRulesSvmToTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesSvm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapQuotaRulesStorageQuotaRulesSvmToHclTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesSvm): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapQuotaRulesStorageQuotaRulesSvmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQuotaRulesStorageQuotaRulesSvm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQuotaRulesStorageQuotaRulesSvm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
export interface DataNetappOntapQuotaRulesStorageQuotaRulesUsers {
}

export function dataNetappOntapQuotaRulesStorageQuotaRulesUsersToTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapQuotaRulesStorageQuotaRulesUsersToHclTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapQuotaRulesStorageQuotaRulesUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNetappOntapQuotaRulesStorageQuotaRulesUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQuotaRulesStorageQuotaRulesUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNetappOntapQuotaRulesStorageQuotaRulesUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapQuotaRulesStorageQuotaRulesUsersOutputReference {
    return new DataNetappOntapQuotaRulesStorageQuotaRulesUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetappOntapQuotaRulesStorageQuotaRulesVolume {
  /**
  * name of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#name DataNetappOntapQuotaRules#name}
  */
  readonly name: string;
}

export function dataNetappOntapQuotaRulesStorageQuotaRulesVolumeToTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNetappOntapQuotaRulesStorageQuotaRulesVolumeToHclTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRulesVolume): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapQuotaRulesStorageQuotaRulesVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapQuotaRulesStorageQuotaRulesVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQuotaRulesStorageQuotaRulesVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
export interface DataNetappOntapQuotaRulesStorageQuotaRules {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#cx_profile_name DataNetappOntapQuotaRules#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Qtree name for the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#qtree DataNetappOntapQuotaRules#qtree}
  */
  readonly qtree?: DataNetappOntapQuotaRulesStorageQuotaRulesQtree;
  /**
  * Existing SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#svm DataNetappOntapQuotaRules#svm}
  */
  readonly svm: DataNetappOntapQuotaRulesStorageQuotaRulesSvm;
  /**
  * Quota type for the rule. This type can be user, group, or tree
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#type DataNetappOntapQuotaRules#type}
  */
  readonly type?: string;
  /**
  * Existing volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#volume DataNetappOntapQuotaRules#volume}
  */
  readonly volume: DataNetappOntapQuotaRulesStorageQuotaRulesVolume;
}

export function dataNetappOntapQuotaRulesStorageQuotaRulesToTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cx_profile_name: cdktf.stringToTerraform(struct!.cxProfileName),
    qtree: dataNetappOntapQuotaRulesStorageQuotaRulesQtreeToTerraform(struct!.qtree),
    svm: dataNetappOntapQuotaRulesStorageQuotaRulesSvmToTerraform(struct!.svm),
    type: cdktf.stringToTerraform(struct!.type),
    volume: dataNetappOntapQuotaRulesStorageQuotaRulesVolumeToTerraform(struct!.volume),
  }
}


export function dataNetappOntapQuotaRulesStorageQuotaRulesToHclTerraform(struct?: DataNetappOntapQuotaRulesStorageQuotaRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cx_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.cxProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qtree: {
      value: dataNetappOntapQuotaRulesStorageQuotaRulesQtreeToHclTerraform(struct!.qtree),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapQuotaRulesStorageQuotaRulesQtree",
    },
    svm: {
      value: dataNetappOntapQuotaRulesStorageQuotaRulesSvmToHclTerraform(struct!.svm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapQuotaRulesStorageQuotaRulesSvm",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: dataNetappOntapQuotaRulesStorageQuotaRulesVolumeToHclTerraform(struct!.volume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNetappOntapQuotaRulesStorageQuotaRulesVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapQuotaRulesStorageQuotaRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNetappOntapQuotaRulesStorageQuotaRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cxProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxProfileName = this._cxProfileName;
    }
    if (this._qtree?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qtree = this._qtree?.internalValue;
    }
    if (this._svm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.svm = this._svm?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapQuotaRulesStorageQuotaRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cxProfileName = undefined;
      this._qtree.internalValue = undefined;
      this._svm.internalValue = undefined;
      this._type = undefined;
      this._volume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cxProfileName = value.cxProfileName;
      this._qtree.internalValue = value.qtree;
      this._svm.internalValue = value.svm;
      this._type = value.type;
      this._volume.internalValue = value.volume;
    }
  }

  // cx_profile_name - computed: true, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // files - computed: true, optional: false, required: false
  private _files = new DataNetappOntapQuotaRulesStorageQuotaRulesFilesOutputReference(this, "files");
  public get files() {
    return this._files;
  }

  // group - computed: true, optional: false, required: false
  private _group = new DataNetappOntapQuotaRulesStorageQuotaRulesGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // qtree - computed: true, optional: true, required: false
  private _qtree = new DataNetappOntapQuotaRulesStorageQuotaRulesQtreeOutputReference(this, "qtree");
  public get qtree() {
    return this._qtree;
  }
  public putQtree(value: DataNetappOntapQuotaRulesStorageQuotaRulesQtree) {
    this._qtree.internalValue = value;
  }
  public resetQtree() {
    this._qtree.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qtreeInput() {
    return this._qtree.internalValue;
  }

  // svm - computed: true, optional: false, required: true
  private _svm = new DataNetappOntapQuotaRulesStorageQuotaRulesSvmOutputReference(this, "svm");
  public get svm() {
    return this._svm;
  }
  public putSvm(value: DataNetappOntapQuotaRulesStorageQuotaRulesSvm) {
    this._svm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmInput() {
    return this._svm.internalValue;
  }

  // type - computed: true, optional: true, required: false
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

  // user_mapping - computed: true, optional: false, required: false
  public get userMapping() {
    return this.getBooleanAttribute('user_mapping');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataNetappOntapQuotaRulesStorageQuotaRulesUsersList(this, "users", true);
  public get users() {
    return this._users;
  }

  // volume - computed: true, optional: false, required: true
  private _volume = new DataNetappOntapQuotaRulesStorageQuotaRulesVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: DataNetappOntapQuotaRulesStorageQuotaRulesVolume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

export class DataNetappOntapQuotaRulesStorageQuotaRulesList extends cdktf.ComplexList {
  public internalValue? : DataNetappOntapQuotaRulesStorageQuotaRules[] | cdktf.IResolvable

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
  public get(index: number): DataNetappOntapQuotaRulesStorageQuotaRulesOutputReference {
    return new DataNetappOntapQuotaRulesStorageQuotaRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules netapp-ontap_quota_rules}
*/
export class DataNetappOntapQuotaRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_quota_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapQuotaRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapQuotaRules to import
  * @param importFromId The id of the existing DataNetappOntapQuotaRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapQuotaRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_quota_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/quota_rules netapp-ontap_quota_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapQuotaRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapQuotaRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_quota_rules',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNetappOntapQuotaRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapQuotaRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // storage_quota_rules - computed: true, optional: false, required: false
  private _storageQuotaRules = new DataNetappOntapQuotaRulesStorageQuotaRulesList(this, "storage_quota_rules", false);
  public get storageQuotaRules() {
    return this._storageQuotaRules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapQuotaRulesFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataNetappOntapQuotaRulesFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapQuotaRulesFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
