// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/data-sources/sensor_update_policy_builds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCrowdstrikeSensorUpdatePolicyBuildsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsLinuxAll {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxAllToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxAllToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxAllList extends cdktf.ComplexList {

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
  public get(index: number): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxAllOutputReference {
    return new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsLinuxLatest {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxLatestToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxLatestToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxLatest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxLatest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN1 {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxN1ToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxN1ToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN2 {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxN2ToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxN2ToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsLinux {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsLinux | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsLinux | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxAllList(this, "all", false);
  public get all() {
    return this._all;
  }

  // latest - computed: true, optional: false, required: false
  private _latest = new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxLatestOutputReference(this, "latest");
  public get latest() {
    return this._latest;
  }

  // n1 - computed: true, optional: false, required: false
  private _n1 = new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN1OutputReference(this, "n1");
  public get n1() {
    return this._n1;
  }

  // n2 - computed: true, optional: false, required: false
  private _n2 = new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxN2OutputReference(this, "n2");
  public get n2() {
    return this._n2;
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64All {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64AllToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64All): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64AllToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64All): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64AllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64All | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64All | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64AllList extends cdktf.ComplexList {

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
  public get(index: number): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64AllOutputReference {
    return new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64AllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64Latest {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64LatestToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64Latest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64LatestToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64Latest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64LatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64Latest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64Latest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N1 {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N1ToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N1ToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N2 {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N2ToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N2ToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64 {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64ToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64ToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64AllList(this, "all", false);
  public get all() {
    return this._all;
  }

  // latest - computed: true, optional: false, required: false
  private _latest = new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64LatestOutputReference(this, "latest");
  public get latest() {
    return this._latest;
  }

  // n1 - computed: true, optional: false, required: false
  private _n1 = new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N1OutputReference(this, "n1");
  public get n1() {
    return this._n1;
  }

  // n2 - computed: true, optional: false, required: false
  private _n2 = new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64N2OutputReference(this, "n2");
  public get n2() {
    return this._n2;
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsMacAll {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsMacAllToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsMacAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsMacAllToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsMacAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsMacAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsMacAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsMacAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsMacAllList extends cdktf.ComplexList {

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
  public get(index: number): DataCrowdstrikeSensorUpdatePolicyBuildsMacAllOutputReference {
    return new DataCrowdstrikeSensorUpdatePolicyBuildsMacAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsMacLatest {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsMacLatestToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsMacLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsMacLatestToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsMacLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsMacLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsMacLatest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsMacLatest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsMacN1 {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsMacN1ToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsMacN1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsMacN1ToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsMacN1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsMacN1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsMacN1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsMacN1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsMacN2 {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsMacN2ToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsMacN2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsMacN2ToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsMacN2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsMacN2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsMacN2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsMacN2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsMac {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsMacToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsMacToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsMac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsMac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataCrowdstrikeSensorUpdatePolicyBuildsMacAllList(this, "all", false);
  public get all() {
    return this._all;
  }

  // latest - computed: true, optional: false, required: false
  private _latest = new DataCrowdstrikeSensorUpdatePolicyBuildsMacLatestOutputReference(this, "latest");
  public get latest() {
    return this._latest;
  }

  // n1 - computed: true, optional: false, required: false
  private _n1 = new DataCrowdstrikeSensorUpdatePolicyBuildsMacN1OutputReference(this, "n1");
  public get n1() {
    return this._n1;
  }

  // n2 - computed: true, optional: false, required: false
  private _n2 = new DataCrowdstrikeSensorUpdatePolicyBuildsMacN2OutputReference(this, "n2");
  public get n2() {
    return this._n2;
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsWindowsAll {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsWindowsAllToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsWindowsAllToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsWindowsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsWindowsAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsWindowsAllList extends cdktf.ComplexList {

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
  public get(index: number): DataCrowdstrikeSensorUpdatePolicyBuildsWindowsAllOutputReference {
    return new DataCrowdstrikeSensorUpdatePolicyBuildsWindowsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsWindowsLatest {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsWindowsLatestToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsWindowsLatestToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsLatest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsWindowsLatestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsWindowsLatest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsLatest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN1 {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsWindowsN1ToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsWindowsN1ToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN2 {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsWindowsN2ToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsWindowsN2ToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // sensor_version - computed: true, optional: false, required: false
  public get sensorVersion() {
    return this.getStringAttribute('sensor_version');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}
export interface DataCrowdstrikeSensorUpdatePolicyBuildsWindows {
}

export function dataCrowdstrikeSensorUpdatePolicyBuildsWindowsToTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrowdstrikeSensorUpdatePolicyBuildsWindowsToHclTerraform(struct?: DataCrowdstrikeSensorUpdatePolicyBuildsWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrowdstrikeSensorUpdatePolicyBuildsWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCrowdstrikeSensorUpdatePolicyBuildsWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrowdstrikeSensorUpdatePolicyBuildsWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataCrowdstrikeSensorUpdatePolicyBuildsWindowsAllList(this, "all", false);
  public get all() {
    return this._all;
  }

  // latest - computed: true, optional: false, required: false
  private _latest = new DataCrowdstrikeSensorUpdatePolicyBuildsWindowsLatestOutputReference(this, "latest");
  public get latest() {
    return this._latest;
  }

  // n1 - computed: true, optional: false, required: false
  private _n1 = new DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN1OutputReference(this, "n1");
  public get n1() {
    return this._n1;
  }

  // n2 - computed: true, optional: false, required: false
  private _n2 = new DataCrowdstrikeSensorUpdatePolicyBuildsWindowsN2OutputReference(this, "n2");
  public get n2() {
    return this._n2;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/data-sources/sensor_update_policy_builds crowdstrike_sensor_update_policy_builds}
*/
export class DataCrowdstrikeSensorUpdatePolicyBuilds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_sensor_update_policy_builds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCrowdstrikeSensorUpdatePolicyBuilds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCrowdstrikeSensorUpdatePolicyBuilds to import
  * @param importFromId The id of the existing DataCrowdstrikeSensorUpdatePolicyBuilds that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/data-sources/sensor_update_policy_builds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCrowdstrikeSensorUpdatePolicyBuilds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_sensor_update_policy_builds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.49/docs/data-sources/sensor_update_policy_builds crowdstrike_sensor_update_policy_builds} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCrowdstrikeSensorUpdatePolicyBuildsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCrowdstrikeSensorUpdatePolicyBuildsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_sensor_update_policy_builds',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.49',
        providerVersionConstraint: '0.0.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linux - computed: true, optional: false, required: false
  private _linux = new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxOutputReference(this, "linux");
  public get linux() {
    return this._linux;
  }

  // linux_arm64 - computed: true, optional: false, required: false
  private _linuxArm64 = new DataCrowdstrikeSensorUpdatePolicyBuildsLinuxArm64OutputReference(this, "linux_arm64");
  public get linuxArm64() {
    return this._linuxArm64;
  }

  // mac - computed: true, optional: false, required: false
  private _mac = new DataCrowdstrikeSensorUpdatePolicyBuildsMacOutputReference(this, "mac");
  public get mac() {
    return this._mac;
  }

  // windows - computed: true, optional: false, required: false
  private _windows = new DataCrowdstrikeSensorUpdatePolicyBuildsWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
