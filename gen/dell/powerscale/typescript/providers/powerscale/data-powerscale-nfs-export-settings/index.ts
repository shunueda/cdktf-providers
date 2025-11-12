// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleNfsExportSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export_settings#filter DataPowerscaleNfsExportSettings#filter}
  */
  readonly filter?: DataPowerscaleNfsExportSettingsFilter;
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllPrimaryGroup {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapAllPrimaryGroupToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllPrimaryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapAllPrimaryGroupToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllPrimaryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllPrimaryGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllPrimaryGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroups {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroupsToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroupsToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroupsOutputReference {
    return new DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllUser {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapAllUserToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapAllUserToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapAll {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapAllToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapAllToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // primary_group - computed: true, optional: false, required: false
  private _primaryGroup = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }

  // secondary_groups - computed: true, optional: false, required: false
  private _secondaryGroups = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailurePrimaryGroup {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapFailurePrimaryGroupToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailurePrimaryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapFailurePrimaryGroupToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailurePrimaryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailurePrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailurePrimaryGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailurePrimaryGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroups {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroupsToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroupsToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroupsOutputReference {
    return new DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureUser {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureUserToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureUserToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailure {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // primary_group - computed: true, optional: false, required: false
  private _primaryGroup = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailurePrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }

  // secondary_groups - computed: true, optional: false, required: false
  private _secondaryGroups = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootPrimaryGroup {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootPrimaryGroupToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootPrimaryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootPrimaryGroupToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootPrimaryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootPrimaryGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootPrimaryGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroups {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroupsToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroupsToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroupsOutputReference {
    return new DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootUser {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootUserToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootUserToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRoot {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // primary_group - computed: true, optional: false, required: false
  private _primaryGroup = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }

  // secondary_groups - computed: true, optional: false, required: false
  private _secondaryGroups = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootPrimaryGroup {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapRootPrimaryGroupToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootPrimaryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapRootPrimaryGroupToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootPrimaryGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootPrimaryGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootPrimaryGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootPrimaryGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroups {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroupsToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroupsToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroupsOutputReference {
    return new DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootUser {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapRootUserToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapRootUserToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettingsMapRoot {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapRootToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsMapRootToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettingsMapRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettingsMapRoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // primary_group - computed: true, optional: false, required: false
  private _primaryGroup = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootPrimaryGroupOutputReference(this, "primary_group");
  public get primaryGroup() {
    return this._primaryGroup;
  }

  // secondary_groups - computed: true, optional: false, required: false
  private _secondaryGroups = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootSecondaryGroupsList(this, "secondary_groups", false);
  public get secondaryGroups() {
    return this._secondaryGroups;
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
}
export interface DataPowerscaleNfsExportSettingsNfsExportSettings {
}

export function dataPowerscaleNfsExportSettingsNfsExportSettingsToTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleNfsExportSettingsNfsExportSettingsToHclTerraform(struct?: DataPowerscaleNfsExportSettingsNfsExportSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleNfsExportSettingsNfsExportSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsNfsExportSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsNfsExportSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_dirs - computed: true, optional: false, required: false
  public get allDirs() {
    return this.getBooleanAttribute('all_dirs');
  }

  // block_size - computed: true, optional: false, required: false
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }

  // can_set_time - computed: true, optional: false, required: false
  public get canSetTime() {
    return this.getBooleanAttribute('can_set_time');
  }

  // case_insensitive - computed: true, optional: false, required: false
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }

  // case_preserving - computed: true, optional: false, required: false
  public get casePreserving() {
    return this.getBooleanAttribute('case_preserving');
  }

  // chown_restricted - computed: true, optional: false, required: false
  public get chownRestricted() {
    return this.getBooleanAttribute('chown_restricted');
  }

  // commit_asynchronous - computed: true, optional: false, required: false
  public get commitAsynchronous() {
    return this.getBooleanAttribute('commit_asynchronous');
  }

  // directory_transfer_size - computed: true, optional: false, required: false
  public get directoryTransferSize() {
    return this.getNumberAttribute('directory_transfer_size');
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // link_max - computed: true, optional: false, required: false
  public get linkMax() {
    return this.getNumberAttribute('link_max');
  }

  // map_all - computed: true, optional: false, required: false
  private _mapAll = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapAllOutputReference(this, "map_all");
  public get mapAll() {
    return this._mapAll;
  }

  // map_failure - computed: true, optional: false, required: false
  private _mapFailure = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapFailureOutputReference(this, "map_failure");
  public get mapFailure() {
    return this._mapFailure;
  }

  // map_full - computed: true, optional: false, required: false
  public get mapFull() {
    return this.getBooleanAttribute('map_full');
  }

  // map_lookup_uid - computed: true, optional: false, required: false
  public get mapLookupUid() {
    return this.getBooleanAttribute('map_lookup_uid');
  }

  // map_non_root - computed: true, optional: false, required: false
  private _mapNonRoot = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapNonRootOutputReference(this, "map_non_root");
  public get mapNonRoot() {
    return this._mapNonRoot;
  }

  // map_retry - computed: true, optional: false, required: false
  public get mapRetry() {
    return this.getBooleanAttribute('map_retry');
  }

  // map_root - computed: true, optional: false, required: false
  private _mapRoot = new DataPowerscaleNfsExportSettingsNfsExportSettingsMapRootOutputReference(this, "map_root");
  public get mapRoot() {
    return this._mapRoot;
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // name_max_size - computed: true, optional: false, required: false
  public get nameMaxSize() {
    return this.getNumberAttribute('name_max_size');
  }

  // no_truncate - computed: true, optional: false, required: false
  public get noTruncate() {
    return this.getBooleanAttribute('no_truncate');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // read_transfer_max_size - computed: true, optional: false, required: false
  public get readTransferMaxSize() {
    return this.getNumberAttribute('read_transfer_max_size');
  }

  // read_transfer_multiple - computed: true, optional: false, required: false
  public get readTransferMultiple() {
    return this.getNumberAttribute('read_transfer_multiple');
  }

  // read_transfer_size - computed: true, optional: false, required: false
  public get readTransferSize() {
    return this.getNumberAttribute('read_transfer_size');
  }

  // readdirplus - computed: true, optional: false, required: false
  public get readdirplus() {
    return this.getBooleanAttribute('readdirplus');
  }

  // readdirplus_prefetch - computed: true, optional: false, required: false
  public get readdirplusPrefetch() {
    return this.getNumberAttribute('readdirplus_prefetch');
  }

  // return_32bit_file_ids - computed: true, optional: false, required: false
  public get return32BitFileIds() {
    return this.getBooleanAttribute('return_32bit_file_ids');
  }

  // security_flavors - computed: true, optional: false, required: false
  public get securityFlavors() {
    return this.getListAttribute('security_flavors');
  }

  // setattr_asynchronous - computed: true, optional: false, required: false
  public get setattrAsynchronous() {
    return this.getBooleanAttribute('setattr_asynchronous');
  }

  // snapshot - computed: true, optional: false, required: false
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }

  // symlinks - computed: true, optional: false, required: false
  public get symlinks() {
    return this.getBooleanAttribute('symlinks');
  }

  // time_delta - computed: true, optional: false, required: false
  public get timeDelta() {
    return this.getNumberAttribute('time_delta');
  }

  // write_datasync_action - computed: true, optional: false, required: false
  public get writeDatasyncAction() {
    return this.getStringAttribute('write_datasync_action');
  }

  // write_datasync_reply - computed: true, optional: false, required: false
  public get writeDatasyncReply() {
    return this.getStringAttribute('write_datasync_reply');
  }

  // write_filesync_action - computed: true, optional: false, required: false
  public get writeFilesyncAction() {
    return this.getStringAttribute('write_filesync_action');
  }

  // write_filesync_reply - computed: true, optional: false, required: false
  public get writeFilesyncReply() {
    return this.getStringAttribute('write_filesync_reply');
  }

  // write_transfer_max_size - computed: true, optional: false, required: false
  public get writeTransferMaxSize() {
    return this.getNumberAttribute('write_transfer_max_size');
  }

  // write_transfer_multiple - computed: true, optional: false, required: false
  public get writeTransferMultiple() {
    return this.getNumberAttribute('write_transfer_multiple');
  }

  // write_transfer_size - computed: true, optional: false, required: false
  public get writeTransferSize() {
    return this.getNumberAttribute('write_transfer_size');
  }

  // write_unstable_action - computed: true, optional: false, required: false
  public get writeUnstableAction() {
    return this.getStringAttribute('write_unstable_action');
  }

  // write_unstable_reply - computed: true, optional: false, required: false
  public get writeUnstableReply() {
    return this.getStringAttribute('write_unstable_reply');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}
export interface DataPowerscaleNfsExportSettingsFilter {
  /**
  * If specified as "effective" or not specified, all fields are returned. If specified as "user", only fields with non-default values are shown. If specified as "default", the original values are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export_settings#scope DataPowerscaleNfsExportSettings#scope}
  */
  readonly scope?: string;
  /**
  * Specifies which access zone to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export_settings#zone DataPowerscaleNfsExportSettings#zone}
  */
  readonly zone?: string;
}

export function dataPowerscaleNfsExportSettingsFilterToTerraform(struct?: DataPowerscaleNfsExportSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataPowerscaleNfsExportSettingsFilterToHclTerraform(struct?: DataPowerscaleNfsExportSettingsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleNfsExportSettingsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleNfsExportSettingsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleNfsExportSettingsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._zone = value.zone;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export_settings powerscale_nfs_export_settings}
*/
export class DataPowerscaleNfsExportSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_nfs_export_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleNfsExportSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleNfsExportSettings to import
  * @param importFromId The id of the existing DataPowerscaleNfsExportSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleNfsExportSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_nfs_export_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_export_settings powerscale_nfs_export_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleNfsExportSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleNfsExportSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_nfs_export_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nfs_export_settings - computed: true, optional: false, required: false
  private _nfsExportSettings = new DataPowerscaleNfsExportSettingsNfsExportSettingsOutputReference(this, "nfs_export_settings");
  public get nfsExportSettings() {
    return this._nfsExportSettings;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleNfsExportSettingsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleNfsExportSettingsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleNfsExportSettingsFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleNfsExportSettingsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleNfsExportSettingsFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
