// https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfracostAwsDynamodbTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#id DataInfracostAwsDynamodbTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#resources DataInfracostAwsDynamodbTable#resources}
  */
  readonly resources: string[];
  /**
  * monthly_gb_continuous_backup_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#monthly_gb_continuous_backup_storage DataInfracostAwsDynamodbTable#monthly_gb_continuous_backup_storage}
  */
  readonly monthlyGbContinuousBackupStorage?: DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorage;
  /**
  * monthly_gb_data_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#monthly_gb_data_in DataInfracostAwsDynamodbTable#monthly_gb_data_in}
  */
  readonly monthlyGbDataIn?: DataInfracostAwsDynamodbTableMonthlyGbDataIn;
  /**
  * monthly_gb_data_out block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#monthly_gb_data_out DataInfracostAwsDynamodbTable#monthly_gb_data_out}
  */
  readonly monthlyGbDataOut?: DataInfracostAwsDynamodbTableMonthlyGbDataOut;
  /**
  * monthly_gb_data_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#monthly_gb_data_storage DataInfracostAwsDynamodbTable#monthly_gb_data_storage}
  */
  readonly monthlyGbDataStorage?: DataInfracostAwsDynamodbTableMonthlyGbDataStorage;
  /**
  * monthly_gb_on_demand_backup_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#monthly_gb_on_demand_backup_storage DataInfracostAwsDynamodbTable#monthly_gb_on_demand_backup_storage}
  */
  readonly monthlyGbOnDemandBackupStorage?: DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorage;
  /**
  * monthly_gb_restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#monthly_gb_restore DataInfracostAwsDynamodbTable#monthly_gb_restore}
  */
  readonly monthlyGbRestore?: DataInfracostAwsDynamodbTableMonthlyGbRestore;
  /**
  * monthly_read_request_units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#monthly_read_request_units DataInfracostAwsDynamodbTable#monthly_read_request_units}
  */
  readonly monthlyReadRequestUnits?: DataInfracostAwsDynamodbTableMonthlyReadRequestUnits;
  /**
  * monthly_streams_read_request_units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#monthly_streams_read_request_units DataInfracostAwsDynamodbTable#monthly_streams_read_request_units}
  */
  readonly monthlyStreamsReadRequestUnits?: DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnits;
  /**
  * monthly_write_request_units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#monthly_write_request_units DataInfracostAwsDynamodbTable#monthly_write_request_units}
  */
  readonly monthlyWriteRequestUnits?: DataInfracostAwsDynamodbTableMonthlyWriteRequestUnits;
}
export interface DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#value DataInfracostAwsDynamodbTable#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorageToTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorageOutputReference | DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorageToHclTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorageOutputReference | DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataInfracostAwsDynamodbTableMonthlyGbDataIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#value DataInfracostAwsDynamodbTable#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsDynamodbTableMonthlyGbDataInToTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbDataInOutputReference | DataInfracostAwsDynamodbTableMonthlyGbDataIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsDynamodbTableMonthlyGbDataInToHclTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbDataInOutputReference | DataInfracostAwsDynamodbTableMonthlyGbDataIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsDynamodbTableMonthlyGbDataInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsDynamodbTableMonthlyGbDataIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsDynamodbTableMonthlyGbDataIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataInfracostAwsDynamodbTableMonthlyGbDataOut {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#value DataInfracostAwsDynamodbTable#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsDynamodbTableMonthlyGbDataOutToTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbDataOutOutputReference | DataInfracostAwsDynamodbTableMonthlyGbDataOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsDynamodbTableMonthlyGbDataOutToHclTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbDataOutOutputReference | DataInfracostAwsDynamodbTableMonthlyGbDataOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsDynamodbTableMonthlyGbDataOutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsDynamodbTableMonthlyGbDataOut | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsDynamodbTableMonthlyGbDataOut | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataInfracostAwsDynamodbTableMonthlyGbDataStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#value DataInfracostAwsDynamodbTable#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsDynamodbTableMonthlyGbDataStorageToTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbDataStorageOutputReference | DataInfracostAwsDynamodbTableMonthlyGbDataStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsDynamodbTableMonthlyGbDataStorageToHclTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbDataStorageOutputReference | DataInfracostAwsDynamodbTableMonthlyGbDataStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsDynamodbTableMonthlyGbDataStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsDynamodbTableMonthlyGbDataStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsDynamodbTableMonthlyGbDataStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#value DataInfracostAwsDynamodbTable#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorageToTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorageOutputReference | DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorageToHclTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorageOutputReference | DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataInfracostAwsDynamodbTableMonthlyGbRestore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#value DataInfracostAwsDynamodbTable#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsDynamodbTableMonthlyGbRestoreToTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbRestoreOutputReference | DataInfracostAwsDynamodbTableMonthlyGbRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsDynamodbTableMonthlyGbRestoreToHclTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyGbRestoreOutputReference | DataInfracostAwsDynamodbTableMonthlyGbRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsDynamodbTableMonthlyGbRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsDynamodbTableMonthlyGbRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsDynamodbTableMonthlyGbRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataInfracostAwsDynamodbTableMonthlyReadRequestUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#value DataInfracostAwsDynamodbTable#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsDynamodbTableMonthlyReadRequestUnitsToTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyReadRequestUnitsOutputReference | DataInfracostAwsDynamodbTableMonthlyReadRequestUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsDynamodbTableMonthlyReadRequestUnitsToHclTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyReadRequestUnitsOutputReference | DataInfracostAwsDynamodbTableMonthlyReadRequestUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsDynamodbTableMonthlyReadRequestUnitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsDynamodbTableMonthlyReadRequestUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsDynamodbTableMonthlyReadRequestUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#value DataInfracostAwsDynamodbTable#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnitsToTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnitsOutputReference | DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnitsToHclTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnitsOutputReference | DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataInfracostAwsDynamodbTableMonthlyWriteRequestUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#value DataInfracostAwsDynamodbTable#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsDynamodbTableMonthlyWriteRequestUnitsToTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyWriteRequestUnitsOutputReference | DataInfracostAwsDynamodbTableMonthlyWriteRequestUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsDynamodbTableMonthlyWriteRequestUnitsToHclTerraform(struct?: DataInfracostAwsDynamodbTableMonthlyWriteRequestUnitsOutputReference | DataInfracostAwsDynamodbTableMonthlyWriteRequestUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsDynamodbTableMonthlyWriteRequestUnitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsDynamodbTableMonthlyWriteRequestUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsDynamodbTableMonthlyWriteRequestUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table infracost_aws_dynamodb_table}
*/
export class DataInfracostAwsDynamodbTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infracost_aws_dynamodb_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfracostAwsDynamodbTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfracostAwsDynamodbTable to import
  * @param importFromId The id of the existing DataInfracostAwsDynamodbTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfracostAwsDynamodbTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infracost_aws_dynamodb_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_dynamodb_table infracost_aws_dynamodb_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfracostAwsDynamodbTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfracostAwsDynamodbTableConfig) {
    super(scope, id, {
      terraformResourceType: 'infracost_aws_dynamodb_table',
      terraformGeneratorMetadata: {
        providerName: 'infracost',
        providerVersion: '0.0.9',
        providerVersionConstraint: '0.0.9'
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
    this._resources = config.resources;
    this._monthlyGbContinuousBackupStorage.internalValue = config.monthlyGbContinuousBackupStorage;
    this._monthlyGbDataIn.internalValue = config.monthlyGbDataIn;
    this._monthlyGbDataOut.internalValue = config.monthlyGbDataOut;
    this._monthlyGbDataStorage.internalValue = config.monthlyGbDataStorage;
    this._monthlyGbOnDemandBackupStorage.internalValue = config.monthlyGbOnDemandBackupStorage;
    this._monthlyGbRestore.internalValue = config.monthlyGbRestore;
    this._monthlyReadRequestUnits.internalValue = config.monthlyReadRequestUnits;
    this._monthlyStreamsReadRequestUnits.internalValue = config.monthlyStreamsReadRequestUnits;
    this._monthlyWriteRequestUnits.internalValue = config.monthlyWriteRequestUnits;
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

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // monthly_gb_continuous_backup_storage - computed: false, optional: true, required: false
  private _monthlyGbContinuousBackupStorage = new DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorageOutputReference(this, "monthly_gb_continuous_backup_storage");
  public get monthlyGbContinuousBackupStorage() {
    return this._monthlyGbContinuousBackupStorage;
  }
  public putMonthlyGbContinuousBackupStorage(value: DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorage) {
    this._monthlyGbContinuousBackupStorage.internalValue = value;
  }
  public resetMonthlyGbContinuousBackupStorage() {
    this._monthlyGbContinuousBackupStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyGbContinuousBackupStorageInput() {
    return this._monthlyGbContinuousBackupStorage.internalValue;
  }

  // monthly_gb_data_in - computed: false, optional: true, required: false
  private _monthlyGbDataIn = new DataInfracostAwsDynamodbTableMonthlyGbDataInOutputReference(this, "monthly_gb_data_in");
  public get monthlyGbDataIn() {
    return this._monthlyGbDataIn;
  }
  public putMonthlyGbDataIn(value: DataInfracostAwsDynamodbTableMonthlyGbDataIn) {
    this._monthlyGbDataIn.internalValue = value;
  }
  public resetMonthlyGbDataIn() {
    this._monthlyGbDataIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyGbDataInInput() {
    return this._monthlyGbDataIn.internalValue;
  }

  // monthly_gb_data_out - computed: false, optional: true, required: false
  private _monthlyGbDataOut = new DataInfracostAwsDynamodbTableMonthlyGbDataOutOutputReference(this, "monthly_gb_data_out");
  public get monthlyGbDataOut() {
    return this._monthlyGbDataOut;
  }
  public putMonthlyGbDataOut(value: DataInfracostAwsDynamodbTableMonthlyGbDataOut) {
    this._monthlyGbDataOut.internalValue = value;
  }
  public resetMonthlyGbDataOut() {
    this._monthlyGbDataOut.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyGbDataOutInput() {
    return this._monthlyGbDataOut.internalValue;
  }

  // monthly_gb_data_storage - computed: false, optional: true, required: false
  private _monthlyGbDataStorage = new DataInfracostAwsDynamodbTableMonthlyGbDataStorageOutputReference(this, "monthly_gb_data_storage");
  public get monthlyGbDataStorage() {
    return this._monthlyGbDataStorage;
  }
  public putMonthlyGbDataStorage(value: DataInfracostAwsDynamodbTableMonthlyGbDataStorage) {
    this._monthlyGbDataStorage.internalValue = value;
  }
  public resetMonthlyGbDataStorage() {
    this._monthlyGbDataStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyGbDataStorageInput() {
    return this._monthlyGbDataStorage.internalValue;
  }

  // monthly_gb_on_demand_backup_storage - computed: false, optional: true, required: false
  private _monthlyGbOnDemandBackupStorage = new DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorageOutputReference(this, "monthly_gb_on_demand_backup_storage");
  public get monthlyGbOnDemandBackupStorage() {
    return this._monthlyGbOnDemandBackupStorage;
  }
  public putMonthlyGbOnDemandBackupStorage(value: DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorage) {
    this._monthlyGbOnDemandBackupStorage.internalValue = value;
  }
  public resetMonthlyGbOnDemandBackupStorage() {
    this._monthlyGbOnDemandBackupStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyGbOnDemandBackupStorageInput() {
    return this._monthlyGbOnDemandBackupStorage.internalValue;
  }

  // monthly_gb_restore - computed: false, optional: true, required: false
  private _monthlyGbRestore = new DataInfracostAwsDynamodbTableMonthlyGbRestoreOutputReference(this, "monthly_gb_restore");
  public get monthlyGbRestore() {
    return this._monthlyGbRestore;
  }
  public putMonthlyGbRestore(value: DataInfracostAwsDynamodbTableMonthlyGbRestore) {
    this._monthlyGbRestore.internalValue = value;
  }
  public resetMonthlyGbRestore() {
    this._monthlyGbRestore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyGbRestoreInput() {
    return this._monthlyGbRestore.internalValue;
  }

  // monthly_read_request_units - computed: false, optional: true, required: false
  private _monthlyReadRequestUnits = new DataInfracostAwsDynamodbTableMonthlyReadRequestUnitsOutputReference(this, "monthly_read_request_units");
  public get monthlyReadRequestUnits() {
    return this._monthlyReadRequestUnits;
  }
  public putMonthlyReadRequestUnits(value: DataInfracostAwsDynamodbTableMonthlyReadRequestUnits) {
    this._monthlyReadRequestUnits.internalValue = value;
  }
  public resetMonthlyReadRequestUnits() {
    this._monthlyReadRequestUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyReadRequestUnitsInput() {
    return this._monthlyReadRequestUnits.internalValue;
  }

  // monthly_streams_read_request_units - computed: false, optional: true, required: false
  private _monthlyStreamsReadRequestUnits = new DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnitsOutputReference(this, "monthly_streams_read_request_units");
  public get monthlyStreamsReadRequestUnits() {
    return this._monthlyStreamsReadRequestUnits;
  }
  public putMonthlyStreamsReadRequestUnits(value: DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnits) {
    this._monthlyStreamsReadRequestUnits.internalValue = value;
  }
  public resetMonthlyStreamsReadRequestUnits() {
    this._monthlyStreamsReadRequestUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyStreamsReadRequestUnitsInput() {
    return this._monthlyStreamsReadRequestUnits.internalValue;
  }

  // monthly_write_request_units - computed: false, optional: true, required: false
  private _monthlyWriteRequestUnits = new DataInfracostAwsDynamodbTableMonthlyWriteRequestUnitsOutputReference(this, "monthly_write_request_units");
  public get monthlyWriteRequestUnits() {
    return this._monthlyWriteRequestUnits;
  }
  public putMonthlyWriteRequestUnits(value: DataInfracostAwsDynamodbTableMonthlyWriteRequestUnits) {
    this._monthlyWriteRequestUnits.internalValue = value;
  }
  public resetMonthlyWriteRequestUnits() {
    this._monthlyWriteRequestUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyWriteRequestUnitsInput() {
    return this._monthlyWriteRequestUnits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
      monthly_gb_continuous_backup_storage: dataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorageToTerraform(this._monthlyGbContinuousBackupStorage.internalValue),
      monthly_gb_data_in: dataInfracostAwsDynamodbTableMonthlyGbDataInToTerraform(this._monthlyGbDataIn.internalValue),
      monthly_gb_data_out: dataInfracostAwsDynamodbTableMonthlyGbDataOutToTerraform(this._monthlyGbDataOut.internalValue),
      monthly_gb_data_storage: dataInfracostAwsDynamodbTableMonthlyGbDataStorageToTerraform(this._monthlyGbDataStorage.internalValue),
      monthly_gb_on_demand_backup_storage: dataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorageToTerraform(this._monthlyGbOnDemandBackupStorage.internalValue),
      monthly_gb_restore: dataInfracostAwsDynamodbTableMonthlyGbRestoreToTerraform(this._monthlyGbRestore.internalValue),
      monthly_read_request_units: dataInfracostAwsDynamodbTableMonthlyReadRequestUnitsToTerraform(this._monthlyReadRequestUnits.internalValue),
      monthly_streams_read_request_units: dataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnitsToTerraform(this._monthlyStreamsReadRequestUnits.internalValue),
      monthly_write_request_units: dataInfracostAwsDynamodbTableMonthlyWriteRequestUnitsToTerraform(this._monthlyWriteRequestUnits.internalValue),
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
      resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      monthly_gb_continuous_backup_storage: {
        value: dataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorageToHclTerraform(this._monthlyGbContinuousBackupStorage.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsDynamodbTableMonthlyGbContinuousBackupStorageList",
      },
      monthly_gb_data_in: {
        value: dataInfracostAwsDynamodbTableMonthlyGbDataInToHclTerraform(this._monthlyGbDataIn.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsDynamodbTableMonthlyGbDataInList",
      },
      monthly_gb_data_out: {
        value: dataInfracostAwsDynamodbTableMonthlyGbDataOutToHclTerraform(this._monthlyGbDataOut.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsDynamodbTableMonthlyGbDataOutList",
      },
      monthly_gb_data_storage: {
        value: dataInfracostAwsDynamodbTableMonthlyGbDataStorageToHclTerraform(this._monthlyGbDataStorage.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsDynamodbTableMonthlyGbDataStorageList",
      },
      monthly_gb_on_demand_backup_storage: {
        value: dataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorageToHclTerraform(this._monthlyGbOnDemandBackupStorage.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsDynamodbTableMonthlyGbOnDemandBackupStorageList",
      },
      monthly_gb_restore: {
        value: dataInfracostAwsDynamodbTableMonthlyGbRestoreToHclTerraform(this._monthlyGbRestore.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsDynamodbTableMonthlyGbRestoreList",
      },
      monthly_read_request_units: {
        value: dataInfracostAwsDynamodbTableMonthlyReadRequestUnitsToHclTerraform(this._monthlyReadRequestUnits.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsDynamodbTableMonthlyReadRequestUnitsList",
      },
      monthly_streams_read_request_units: {
        value: dataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnitsToHclTerraform(this._monthlyStreamsReadRequestUnits.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsDynamodbTableMonthlyStreamsReadRequestUnitsList",
      },
      monthly_write_request_units: {
        value: dataInfracostAwsDynamodbTableMonthlyWriteRequestUnitsToHclTerraform(this._monthlyWriteRequestUnits.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsDynamodbTableMonthlyWriteRequestUnitsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
