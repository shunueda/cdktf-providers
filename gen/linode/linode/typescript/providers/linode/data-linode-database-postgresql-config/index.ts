// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/database_postgresql_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeDatabasePostgresqlConfigAConfig extends cdktf.TerraformMetaArguments {
}
export interface DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeScaleFactor {
}

export function dataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeScaleFactorToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeScaleFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeScaleFactorToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeScaleFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeScaleFactorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeScaleFactor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeScaleFactor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeThreshold {
}

export function dataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeThresholdToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeThresholdToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgAutovacuumMaxWorkers {
}

export function dataLinodeDatabasePostgresqlConfigPgAutovacuumMaxWorkersToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumMaxWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgAutovacuumMaxWorkersToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumMaxWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgAutovacuumMaxWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgAutovacuumMaxWorkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgAutovacuumMaxWorkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgAutovacuumNaptime {
}

export function dataLinodeDatabasePostgresqlConfigPgAutovacuumNaptimeToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumNaptime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgAutovacuumNaptimeToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumNaptime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgAutovacuumNaptimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgAutovacuumNaptime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgAutovacuumNaptime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostDelay {
}

export function dataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostDelayToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostDelayToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostLimit {
}

export function dataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostLimitToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostLimitToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumScaleFactor {
}

export function dataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumScaleFactorToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumScaleFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumScaleFactorToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumScaleFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumScaleFactorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumScaleFactor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumScaleFactor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumThreshold {
}

export function dataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumThresholdToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumThresholdToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgBgwriterDelay {
}

export function dataLinodeDatabasePostgresqlConfigPgBgwriterDelayToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgBgwriterDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgBgwriterDelayToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgBgwriterDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgBgwriterDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgBgwriterDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgBgwriterDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgBgwriterFlushAfter {
}

export function dataLinodeDatabasePostgresqlConfigPgBgwriterFlushAfterToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgBgwriterFlushAfter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgBgwriterFlushAfterToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgBgwriterFlushAfter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgBgwriterFlushAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgBgwriterFlushAfter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgBgwriterFlushAfter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgBgwriterLruMaxpages {
}

export function dataLinodeDatabasePostgresqlConfigPgBgwriterLruMaxpagesToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgBgwriterLruMaxpages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgBgwriterLruMaxpagesToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgBgwriterLruMaxpages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgBgwriterLruMaxpagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgBgwriterLruMaxpages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgBgwriterLruMaxpages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgBgwriterLruMultiplier {
}

export function dataLinodeDatabasePostgresqlConfigPgBgwriterLruMultiplierToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgBgwriterLruMultiplier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgBgwriterLruMultiplierToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgBgwriterLruMultiplier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgBgwriterLruMultiplierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgBgwriterLruMultiplier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgBgwriterLruMultiplier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgDeadlockTimeout {
}

export function dataLinodeDatabasePostgresqlConfigPgDeadlockTimeoutToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgDeadlockTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgDeadlockTimeoutToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgDeadlockTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgDeadlockTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgDeadlockTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgDeadlockTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgDefaultToastCompression {
}

export function dataLinodeDatabasePostgresqlConfigPgDefaultToastCompressionToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgDefaultToastCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgDefaultToastCompressionToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgDefaultToastCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgDefaultToastCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgDefaultToastCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgDefaultToastCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getStringAttribute('example');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgIdleInTransactionSessionTimeout {
}

export function dataLinodeDatabasePostgresqlConfigPgIdleInTransactionSessionTimeoutToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgIdleInTransactionSessionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgIdleInTransactionSessionTimeoutToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgIdleInTransactionSessionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgIdleInTransactionSessionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgIdleInTransactionSessionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgIdleInTransactionSessionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgJit {
}

export function dataLinodeDatabasePostgresqlConfigPgJitToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgJit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgJitToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgJit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgJitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgJit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgJit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getBooleanAttribute('example');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxFilesPerProcess {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxFilesPerProcessToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxFilesPerProcess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxFilesPerProcessToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxFilesPerProcess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxFilesPerProcessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxFilesPerProcess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxFilesPerProcess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxLocksPerTransaction {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxLocksPerTransactionToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxLocksPerTransaction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxLocksPerTransactionToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxLocksPerTransaction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxLocksPerTransactionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxLocksPerTransaction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxLocksPerTransaction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxLogicalReplicationWorkers {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxLogicalReplicationWorkersToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxLogicalReplicationWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxLogicalReplicationWorkersToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxLogicalReplicationWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxLogicalReplicationWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxLogicalReplicationWorkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxLogicalReplicationWorkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkers {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersPerGather {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersPerGatherToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersPerGather): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersPerGatherToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersPerGather): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersPerGatherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersPerGather | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersPerGather | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxPredLocksPerTransaction {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxPredLocksPerTransactionToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxPredLocksPerTransaction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxPredLocksPerTransactionToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxPredLocksPerTransaction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxPredLocksPerTransactionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxPredLocksPerTransaction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxPredLocksPerTransaction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxReplicationSlots {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxReplicationSlotsToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxReplicationSlots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxReplicationSlotsToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxReplicationSlots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxReplicationSlotsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxReplicationSlots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxReplicationSlots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxSlotWalKeepSize {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxSlotWalKeepSizeToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxSlotWalKeepSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxSlotWalKeepSizeToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxSlotWalKeepSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxSlotWalKeepSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxSlotWalKeepSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxSlotWalKeepSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxStackDepth {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxStackDepthToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxStackDepth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxStackDepthToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxStackDepth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxStackDepthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxStackDepth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxStackDepth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxStandbyArchiveDelay {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxStandbyArchiveDelayToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxStandbyArchiveDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxStandbyArchiveDelayToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxStandbyArchiveDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxStandbyArchiveDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxStandbyArchiveDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxStandbyArchiveDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxStandbyStreamingDelay {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxStandbyStreamingDelayToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxStandbyStreamingDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxStandbyStreamingDelayToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxStandbyStreamingDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxStandbyStreamingDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxStandbyStreamingDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxStandbyStreamingDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxWalSenders {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxWalSendersToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxWalSenders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxWalSendersToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxWalSenders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxWalSendersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxWalSenders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxWalSenders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgMaxWorkerProcesses {
}

export function dataLinodeDatabasePostgresqlConfigPgMaxWorkerProcessesToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxWorkerProcesses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgMaxWorkerProcessesToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgMaxWorkerProcesses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgMaxWorkerProcessesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgMaxWorkerProcesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgMaxWorkerProcesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgPasswordEncryption {
}

export function dataLinodeDatabasePostgresqlConfigPgPasswordEncryptionToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPasswordEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgPasswordEncryptionToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPasswordEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgPasswordEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgPasswordEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgPasswordEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getStringAttribute('example');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwInterval {
}

export function dataLinodeDatabasePostgresqlConfigPgPgPartmanBgwIntervalToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgPgPartmanBgwIntervalToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwRole {
}

export function dataLinodeDatabasePostgresqlConfigPgPgPartmanBgwRoleToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgPgPartmanBgwRoleToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getStringAttribute('example');
  }

  // maxLength - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('maxLength');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmEnableQueryPlan {
}

export function dataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmEnableQueryPlanToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmEnableQueryPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmEnableQueryPlanToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmEnableQueryPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmEnableQueryPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmEnableQueryPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmEnableQueryPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getBooleanAttribute('example');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmMaxBuckets {
}

export function dataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmMaxBucketsToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmMaxBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmMaxBucketsToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmMaxBuckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmMaxBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmMaxBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmMaxBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgPgStatStatementsTrack {
}

export function dataLinodeDatabasePostgresqlConfigPgPgStatStatementsTrackToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPgStatStatementsTrack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgPgStatStatementsTrackToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgPgStatStatementsTrack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgPgStatStatementsTrackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgPgStatStatementsTrack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgPgStatStatementsTrack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgTempFileLimit {
}

export function dataLinodeDatabasePostgresqlConfigPgTempFileLimitToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTempFileLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgTempFileLimitToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTempFileLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgTempFileLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgTempFileLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgTempFileLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgTimezone {
}

export function dataLinodeDatabasePostgresqlConfigPgTimezoneToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgTimezoneToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgTimezoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgTimezone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgTimezone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getStringAttribute('example');
  }

  // maxLength - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('maxLength');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgTrackActivityQuerySize {
}

export function dataLinodeDatabasePostgresqlConfigPgTrackActivityQuerySizeToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTrackActivityQuerySize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgTrackActivityQuerySizeToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTrackActivityQuerySize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgTrackActivityQuerySizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgTrackActivityQuerySize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgTrackActivityQuerySize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgTrackCommitTimestamp {
}

export function dataLinodeDatabasePostgresqlConfigPgTrackCommitTimestampToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTrackCommitTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgTrackCommitTimestampToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTrackCommitTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgTrackCommitTimestampOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgTrackCommitTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgTrackCommitTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getStringAttribute('example');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgTrackFunctions {
}

export function dataLinodeDatabasePostgresqlConfigPgTrackFunctionsToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTrackFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgTrackFunctionsToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTrackFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgTrackFunctionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgTrackFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgTrackFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgTrackIoTiming {
}

export function dataLinodeDatabasePostgresqlConfigPgTrackIoTimingToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTrackIoTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgTrackIoTimingToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgTrackIoTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgTrackIoTimingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgTrackIoTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgTrackIoTiming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getStringAttribute('example');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgWalSenderTimeout {
}

export function dataLinodeDatabasePostgresqlConfigPgWalSenderTimeoutToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgWalSenderTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgWalSenderTimeoutToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgWalSenderTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgWalSenderTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgWalSenderTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgWalSenderTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgWalWriterDelay {
}

export function dataLinodeDatabasePostgresqlConfigPgWalWriterDelayToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgWalWriterDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgWalWriterDelayToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgWalWriterDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgWalWriterDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgWalWriterDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgWalWriterDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPg {
}

export function dataLinodeDatabasePostgresqlConfigPgToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autovacuum_analyze_scale_factor - computed: true, optional: false, required: false
  private _autovacuumAnalyzeScaleFactor = new DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeScaleFactorOutputReference(this, "autovacuum_analyze_scale_factor");
  public get autovacuumAnalyzeScaleFactor() {
    return this._autovacuumAnalyzeScaleFactor;
  }

  // autovacuum_analyze_threshold - computed: true, optional: false, required: false
  private _autovacuumAnalyzeThreshold = new DataLinodeDatabasePostgresqlConfigPgAutovacuumAnalyzeThresholdOutputReference(this, "autovacuum_analyze_threshold");
  public get autovacuumAnalyzeThreshold() {
    return this._autovacuumAnalyzeThreshold;
  }

  // autovacuum_max_workers - computed: true, optional: false, required: false
  private _autovacuumMaxWorkers = new DataLinodeDatabasePostgresqlConfigPgAutovacuumMaxWorkersOutputReference(this, "autovacuum_max_workers");
  public get autovacuumMaxWorkers() {
    return this._autovacuumMaxWorkers;
  }

  // autovacuum_naptime - computed: true, optional: false, required: false
  private _autovacuumNaptime = new DataLinodeDatabasePostgresqlConfigPgAutovacuumNaptimeOutputReference(this, "autovacuum_naptime");
  public get autovacuumNaptime() {
    return this._autovacuumNaptime;
  }

  // autovacuum_vacuum_cost_delay - computed: true, optional: false, required: false
  private _autovacuumVacuumCostDelay = new DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostDelayOutputReference(this, "autovacuum_vacuum_cost_delay");
  public get autovacuumVacuumCostDelay() {
    return this._autovacuumVacuumCostDelay;
  }

  // autovacuum_vacuum_cost_limit - computed: true, optional: false, required: false
  private _autovacuumVacuumCostLimit = new DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumCostLimitOutputReference(this, "autovacuum_vacuum_cost_limit");
  public get autovacuumVacuumCostLimit() {
    return this._autovacuumVacuumCostLimit;
  }

  // autovacuum_vacuum_scale_factor - computed: true, optional: false, required: false
  private _autovacuumVacuumScaleFactor = new DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumScaleFactorOutputReference(this, "autovacuum_vacuum_scale_factor");
  public get autovacuumVacuumScaleFactor() {
    return this._autovacuumVacuumScaleFactor;
  }

  // autovacuum_vacuum_threshold - computed: true, optional: false, required: false
  private _autovacuumVacuumThreshold = new DataLinodeDatabasePostgresqlConfigPgAutovacuumVacuumThresholdOutputReference(this, "autovacuum_vacuum_threshold");
  public get autovacuumVacuumThreshold() {
    return this._autovacuumVacuumThreshold;
  }

  // bgwriter_delay - computed: true, optional: false, required: false
  private _bgwriterDelay = new DataLinodeDatabasePostgresqlConfigPgBgwriterDelayOutputReference(this, "bgwriter_delay");
  public get bgwriterDelay() {
    return this._bgwriterDelay;
  }

  // bgwriter_flush_after - computed: true, optional: false, required: false
  private _bgwriterFlushAfter = new DataLinodeDatabasePostgresqlConfigPgBgwriterFlushAfterOutputReference(this, "bgwriter_flush_after");
  public get bgwriterFlushAfter() {
    return this._bgwriterFlushAfter;
  }

  // bgwriter_lru_maxpages - computed: true, optional: false, required: false
  private _bgwriterLruMaxpages = new DataLinodeDatabasePostgresqlConfigPgBgwriterLruMaxpagesOutputReference(this, "bgwriter_lru_maxpages");
  public get bgwriterLruMaxpages() {
    return this._bgwriterLruMaxpages;
  }

  // bgwriter_lru_multiplier - computed: true, optional: false, required: false
  private _bgwriterLruMultiplier = new DataLinodeDatabasePostgresqlConfigPgBgwriterLruMultiplierOutputReference(this, "bgwriter_lru_multiplier");
  public get bgwriterLruMultiplier() {
    return this._bgwriterLruMultiplier;
  }

  // deadlock_timeout - computed: true, optional: false, required: false
  private _deadlockTimeout = new DataLinodeDatabasePostgresqlConfigPgDeadlockTimeoutOutputReference(this, "deadlock_timeout");
  public get deadlockTimeout() {
    return this._deadlockTimeout;
  }

  // default_toast_compression - computed: true, optional: false, required: false
  private _defaultToastCompression = new DataLinodeDatabasePostgresqlConfigPgDefaultToastCompressionOutputReference(this, "default_toast_compression");
  public get defaultToastCompression() {
    return this._defaultToastCompression;
  }

  // idle_in_transaction_session_timeout - computed: true, optional: false, required: false
  private _idleInTransactionSessionTimeout = new DataLinodeDatabasePostgresqlConfigPgIdleInTransactionSessionTimeoutOutputReference(this, "idle_in_transaction_session_timeout");
  public get idleInTransactionSessionTimeout() {
    return this._idleInTransactionSessionTimeout;
  }

  // jit - computed: true, optional: false, required: false
  private _jit = new DataLinodeDatabasePostgresqlConfigPgJitOutputReference(this, "jit");
  public get jit() {
    return this._jit;
  }

  // max_files_per_process - computed: true, optional: false, required: false
  private _maxFilesPerProcess = new DataLinodeDatabasePostgresqlConfigPgMaxFilesPerProcessOutputReference(this, "max_files_per_process");
  public get maxFilesPerProcess() {
    return this._maxFilesPerProcess;
  }

  // max_locks_per_transaction - computed: true, optional: false, required: false
  private _maxLocksPerTransaction = new DataLinodeDatabasePostgresqlConfigPgMaxLocksPerTransactionOutputReference(this, "max_locks_per_transaction");
  public get maxLocksPerTransaction() {
    return this._maxLocksPerTransaction;
  }

  // max_logical_replication_workers - computed: true, optional: false, required: false
  private _maxLogicalReplicationWorkers = new DataLinodeDatabasePostgresqlConfigPgMaxLogicalReplicationWorkersOutputReference(this, "max_logical_replication_workers");
  public get maxLogicalReplicationWorkers() {
    return this._maxLogicalReplicationWorkers;
  }

  // max_parallel_workers - computed: true, optional: false, required: false
  private _maxParallelWorkers = new DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersOutputReference(this, "max_parallel_workers");
  public get maxParallelWorkers() {
    return this._maxParallelWorkers;
  }

  // max_parallel_workers_per_gather - computed: true, optional: false, required: false
  private _maxParallelWorkersPerGather = new DataLinodeDatabasePostgresqlConfigPgMaxParallelWorkersPerGatherOutputReference(this, "max_parallel_workers_per_gather");
  public get maxParallelWorkersPerGather() {
    return this._maxParallelWorkersPerGather;
  }

  // max_pred_locks_per_transaction - computed: true, optional: false, required: false
  private _maxPredLocksPerTransaction = new DataLinodeDatabasePostgresqlConfigPgMaxPredLocksPerTransactionOutputReference(this, "max_pred_locks_per_transaction");
  public get maxPredLocksPerTransaction() {
    return this._maxPredLocksPerTransaction;
  }

  // max_replication_slots - computed: true, optional: false, required: false
  private _maxReplicationSlots = new DataLinodeDatabasePostgresqlConfigPgMaxReplicationSlotsOutputReference(this, "max_replication_slots");
  public get maxReplicationSlots() {
    return this._maxReplicationSlots;
  }

  // max_slot_wal_keep_size - computed: true, optional: false, required: false
  private _maxSlotWalKeepSize = new DataLinodeDatabasePostgresqlConfigPgMaxSlotWalKeepSizeOutputReference(this, "max_slot_wal_keep_size");
  public get maxSlotWalKeepSize() {
    return this._maxSlotWalKeepSize;
  }

  // max_stack_depth - computed: true, optional: false, required: false
  private _maxStackDepth = new DataLinodeDatabasePostgresqlConfigPgMaxStackDepthOutputReference(this, "max_stack_depth");
  public get maxStackDepth() {
    return this._maxStackDepth;
  }

  // max_standby_archive_delay - computed: true, optional: false, required: false
  private _maxStandbyArchiveDelay = new DataLinodeDatabasePostgresqlConfigPgMaxStandbyArchiveDelayOutputReference(this, "max_standby_archive_delay");
  public get maxStandbyArchiveDelay() {
    return this._maxStandbyArchiveDelay;
  }

  // max_standby_streaming_delay - computed: true, optional: false, required: false
  private _maxStandbyStreamingDelay = new DataLinodeDatabasePostgresqlConfigPgMaxStandbyStreamingDelayOutputReference(this, "max_standby_streaming_delay");
  public get maxStandbyStreamingDelay() {
    return this._maxStandbyStreamingDelay;
  }

  // max_wal_senders - computed: true, optional: false, required: false
  private _maxWalSenders = new DataLinodeDatabasePostgresqlConfigPgMaxWalSendersOutputReference(this, "max_wal_senders");
  public get maxWalSenders() {
    return this._maxWalSenders;
  }

  // max_worker_processes - computed: true, optional: false, required: false
  private _maxWorkerProcesses = new DataLinodeDatabasePostgresqlConfigPgMaxWorkerProcessesOutputReference(this, "max_worker_processes");
  public get maxWorkerProcesses() {
    return this._maxWorkerProcesses;
  }

  // password_encryption - computed: true, optional: false, required: false
  private _passwordEncryption = new DataLinodeDatabasePostgresqlConfigPgPasswordEncryptionOutputReference(this, "password_encryption");
  public get passwordEncryption() {
    return this._passwordEncryption;
  }

  // pg_partman_bgw.interval - computed: true, optional: false, required: false
  private _pgPartmanBgwInterval = new DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwIntervalOutputReference(this, "pg_partman_bgw.interval");
  public get pgPartmanBgwInterval() {
    return this._pgPartmanBgwInterval;
  }

  // pg_partman_bgw.role - computed: true, optional: false, required: false
  private _pgPartmanBgwRole = new DataLinodeDatabasePostgresqlConfigPgPgPartmanBgwRoleOutputReference(this, "pg_partman_bgw.role");
  public get pgPartmanBgwRole() {
    return this._pgPartmanBgwRole;
  }

  // pg_stat_monitor.pgsm_enable_query_plan - computed: true, optional: false, required: false
  private _pgStatMonitorPgsmEnableQueryPlan = new DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmEnableQueryPlanOutputReference(this, "pg_stat_monitor.pgsm_enable_query_plan");
  public get pgStatMonitorPgsmEnableQueryPlan() {
    return this._pgStatMonitorPgsmEnableQueryPlan;
  }

  // pg_stat_monitor.pgsm_max_buckets - computed: true, optional: false, required: false
  private _pgStatMonitorPgsmMaxBuckets = new DataLinodeDatabasePostgresqlConfigPgPgStatMonitorPgsmMaxBucketsOutputReference(this, "pg_stat_monitor.pgsm_max_buckets");
  public get pgStatMonitorPgsmMaxBuckets() {
    return this._pgStatMonitorPgsmMaxBuckets;
  }

  // pg_stat_statements.track - computed: true, optional: false, required: false
  private _pgStatStatementsTrack = new DataLinodeDatabasePostgresqlConfigPgPgStatStatementsTrackOutputReference(this, "pg_stat_statements.track");
  public get pgStatStatementsTrack() {
    return this._pgStatStatementsTrack;
  }

  // temp_file_limit - computed: true, optional: false, required: false
  private _tempFileLimit = new DataLinodeDatabasePostgresqlConfigPgTempFileLimitOutputReference(this, "temp_file_limit");
  public get tempFileLimit() {
    return this._tempFileLimit;
  }

  // timezone - computed: true, optional: false, required: false
  private _timezone = new DataLinodeDatabasePostgresqlConfigPgTimezoneOutputReference(this, "timezone");
  public get timezone() {
    return this._timezone;
  }

  // track_activity_query_size - computed: true, optional: false, required: false
  private _trackActivityQuerySize = new DataLinodeDatabasePostgresqlConfigPgTrackActivityQuerySizeOutputReference(this, "track_activity_query_size");
  public get trackActivityQuerySize() {
    return this._trackActivityQuerySize;
  }

  // track_commit_timestamp - computed: true, optional: false, required: false
  private _trackCommitTimestamp = new DataLinodeDatabasePostgresqlConfigPgTrackCommitTimestampOutputReference(this, "track_commit_timestamp");
  public get trackCommitTimestamp() {
    return this._trackCommitTimestamp;
  }

  // track_functions - computed: true, optional: false, required: false
  private _trackFunctions = new DataLinodeDatabasePostgresqlConfigPgTrackFunctionsOutputReference(this, "track_functions");
  public get trackFunctions() {
    return this._trackFunctions;
  }

  // track_io_timing - computed: true, optional: false, required: false
  private _trackIoTiming = new DataLinodeDatabasePostgresqlConfigPgTrackIoTimingOutputReference(this, "track_io_timing");
  public get trackIoTiming() {
    return this._trackIoTiming;
  }

  // wal_sender_timeout - computed: true, optional: false, required: false
  private _walSenderTimeout = new DataLinodeDatabasePostgresqlConfigPgWalSenderTimeoutOutputReference(this, "wal_sender_timeout");
  public get walSenderTimeout() {
    return this._walSenderTimeout;
  }

  // wal_writer_delay - computed: true, optional: false, required: false
  private _walWriterDelay = new DataLinodeDatabasePostgresqlConfigPgWalWriterDelayOutputReference(this, "wal_writer_delay");
  public get walWriterDelay() {
    return this._walWriterDelay;
  }
}

export class DataLinodeDatabasePostgresqlConfigPgList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeDatabasePostgresqlConfigPgOutputReference {
    return new DataLinodeDatabasePostgresqlConfigPgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeDatabasePostgresqlConfigPgStatMonitorEnable {
}

export function dataLinodeDatabasePostgresqlConfigPgStatMonitorEnableToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgStatMonitorEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPgStatMonitorEnableToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPgStatMonitorEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPgStatMonitorEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPgStatMonitorEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPgStatMonitorEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataLinodeDatabasePostgresqlConfigPgStatMonitorEnableList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeDatabasePostgresqlConfigPgStatMonitorEnableOutputReference {
    return new DataLinodeDatabasePostgresqlConfigPgStatMonitorEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeDatabasePostgresqlConfigPglookoutMaxFailoverReplicationTimeLag {
}

export function dataLinodeDatabasePostgresqlConfigPglookoutMaxFailoverReplicationTimeLagToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPglookoutMaxFailoverReplicationTimeLag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPglookoutMaxFailoverReplicationTimeLagToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPglookoutMaxFailoverReplicationTimeLag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPglookoutMaxFailoverReplicationTimeLagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPglookoutMaxFailoverReplicationTimeLag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPglookoutMaxFailoverReplicationTimeLag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabasePostgresqlConfigPglookout {
}

export function dataLinodeDatabasePostgresqlConfigPglookoutToTerraform(struct?: DataLinodeDatabasePostgresqlConfigPglookout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigPglookoutToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigPglookout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigPglookoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeDatabasePostgresqlConfigPglookout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigPglookout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_failover_replication_time_lag - computed: true, optional: false, required: false
  private _maxFailoverReplicationTimeLag = new DataLinodeDatabasePostgresqlConfigPglookoutMaxFailoverReplicationTimeLagOutputReference(this, "max_failover_replication_time_lag");
  public get maxFailoverReplicationTimeLag() {
    return this._maxFailoverReplicationTimeLag;
  }
}

export class DataLinodeDatabasePostgresqlConfigPglookoutList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeDatabasePostgresqlConfigPglookoutOutputReference {
    return new DataLinodeDatabasePostgresqlConfigPglookoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeDatabasePostgresqlConfigSharedBuffersPercentage {
}

export function dataLinodeDatabasePostgresqlConfigSharedBuffersPercentageToTerraform(struct?: DataLinodeDatabasePostgresqlConfigSharedBuffersPercentage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigSharedBuffersPercentageToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigSharedBuffersPercentage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigSharedBuffersPercentageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeDatabasePostgresqlConfigSharedBuffersPercentage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigSharedBuffersPercentage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataLinodeDatabasePostgresqlConfigSharedBuffersPercentageList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeDatabasePostgresqlConfigSharedBuffersPercentageOutputReference {
    return new DataLinodeDatabasePostgresqlConfigSharedBuffersPercentageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeDatabasePostgresqlConfigWorkMem {
}

export function dataLinodeDatabasePostgresqlConfigWorkMemToTerraform(struct?: DataLinodeDatabasePostgresqlConfigWorkMem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlConfigWorkMemToHclTerraform(struct?: DataLinodeDatabasePostgresqlConfigWorkMem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlConfigWorkMemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeDatabasePostgresqlConfigWorkMem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlConfigWorkMem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataLinodeDatabasePostgresqlConfigWorkMemList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeDatabasePostgresqlConfigWorkMemOutputReference {
    return new DataLinodeDatabasePostgresqlConfigWorkMemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/database_postgresql_config linode_database_postgresql_config}
*/
export class DataLinodeDatabasePostgresqlConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_database_postgresql_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeDatabasePostgresqlConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeDatabasePostgresqlConfigA to import
  * @param importFromId The id of the existing DataLinodeDatabasePostgresqlConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/database_postgresql_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeDatabasePostgresqlConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_database_postgresql_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/database_postgresql_config linode_database_postgresql_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeDatabasePostgresqlConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLinodeDatabasePostgresqlConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_database_postgresql_config',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
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

  // pg - computed: true, optional: false, required: false
  private _pg = new DataLinodeDatabasePostgresqlConfigPgList(this, "pg", false);
  public get pg() {
    return this._pg;
  }

  // pg_stat_monitor_enable - computed: true, optional: false, required: false
  private _pgStatMonitorEnable = new DataLinodeDatabasePostgresqlConfigPgStatMonitorEnableList(this, "pg_stat_monitor_enable", false);
  public get pgStatMonitorEnable() {
    return this._pgStatMonitorEnable;
  }

  // pglookout - computed: true, optional: false, required: false
  private _pglookout = new DataLinodeDatabasePostgresqlConfigPglookoutList(this, "pglookout", false);
  public get pglookout() {
    return this._pglookout;
  }

  // shared_buffers_percentage - computed: true, optional: false, required: false
  private _sharedBuffersPercentage = new DataLinodeDatabasePostgresqlConfigSharedBuffersPercentageList(this, "shared_buffers_percentage", false);
  public get sharedBuffersPercentage() {
    return this._sharedBuffersPercentage;
  }

  // work_mem - computed: true, optional: false, required: false
  private _workMem = new DataLinodeDatabasePostgresqlConfigWorkMemList(this, "work_mem", false);
  public get workMem() {
    return this._workMem;
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
