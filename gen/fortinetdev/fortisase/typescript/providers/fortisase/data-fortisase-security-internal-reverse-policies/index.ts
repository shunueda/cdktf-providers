// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityInternalReversePoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#action DataFortisaseSecurityInternalReversePolicies#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#comments DataFortisaseSecurityInternalReversePolicies#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#destinations DataFortisaseSecurityInternalReversePolicies#destinations}
  */
  readonly destinations?: DataFortisaseSecurityInternalReversePoliciesDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#enabled DataFortisaseSecurityInternalReversePolicies#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#log_traffic DataFortisaseSecurityInternalReversePolicies#log_traffic}
  */
  readonly logTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#primary_key DataFortisaseSecurityInternalReversePolicies#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#profile_group DataFortisaseSecurityInternalReversePolicies#profile_group}
  */
  readonly profileGroup?: DataFortisaseSecurityInternalReversePoliciesProfileGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#schedule DataFortisaseSecurityInternalReversePolicies#schedule}
  */
  readonly schedule?: DataFortisaseSecurityInternalReversePoliciesSchedule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#scope DataFortisaseSecurityInternalReversePolicies#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#services DataFortisaseSecurityInternalReversePolicies#services}
  */
  readonly services?: DataFortisaseSecurityInternalReversePoliciesServices[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#sources DataFortisaseSecurityInternalReversePolicies#sources}
  */
  readonly sources?: DataFortisaseSecurityInternalReversePoliciesSources[] | cdktf.IResolvable;
}
export interface DataFortisaseSecurityInternalReversePoliciesDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#datasource DataFortisaseSecurityInternalReversePolicies#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#primary_key DataFortisaseSecurityInternalReversePolicies#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityInternalReversePoliciesDestinationsToTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityInternalReversePoliciesDestinationsToHclTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityInternalReversePoliciesDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityInternalReversePoliciesDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityInternalReversePoliciesDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DataFortisaseSecurityInternalReversePoliciesDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityInternalReversePoliciesDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityInternalReversePoliciesDestinationsOutputReference {
    return new DataFortisaseSecurityInternalReversePoliciesDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityInternalReversePoliciesProfileGroupGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#datasource DataFortisaseSecurityInternalReversePolicies#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#primary_key DataFortisaseSecurityInternalReversePolicies#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityInternalReversePoliciesProfileGroupGroupToTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesProfileGroupGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityInternalReversePoliciesProfileGroupGroupToHclTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesProfileGroupGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityInternalReversePoliciesProfileGroupGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityInternalReversePoliciesProfileGroupGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityInternalReversePoliciesProfileGroupGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityInternalReversePoliciesProfileGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#force_cert_inspection DataFortisaseSecurityInternalReversePolicies#force_cert_inspection}
  */
  readonly forceCertInspection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#group DataFortisaseSecurityInternalReversePolicies#group}
  */
  readonly group?: DataFortisaseSecurityInternalReversePoliciesProfileGroupGroup;
}

export function dataFortisaseSecurityInternalReversePoliciesProfileGroupToTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesProfileGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_cert_inspection: cdktf.booleanToTerraform(struct!.forceCertInspection),
    group: dataFortisaseSecurityInternalReversePoliciesProfileGroupGroupToTerraform(struct!.group),
  }
}


export function dataFortisaseSecurityInternalReversePoliciesProfileGroupToHclTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesProfileGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_cert_inspection: {
      value: cdktf.booleanToHclTerraform(struct!.forceCertInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group: {
      value: dataFortisaseSecurityInternalReversePoliciesProfileGroupGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityInternalReversePoliciesProfileGroupGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityInternalReversePoliciesProfileGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityInternalReversePoliciesProfileGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceCertInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCertInspection = this._forceCertInspection;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityInternalReversePoliciesProfileGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceCertInspection = undefined;
      this._group.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceCertInspection = value.forceCertInspection;
      this._group.internalValue = value.group;
    }
  }

  // force_cert_inspection - computed: true, optional: true, required: false
  private _forceCertInspection?: boolean | cdktf.IResolvable; 
  public get forceCertInspection() {
    return this.getBooleanAttribute('force_cert_inspection');
  }
  public set forceCertInspection(value: boolean | cdktf.IResolvable) {
    this._forceCertInspection = value;
  }
  public resetForceCertInspection() {
    this._forceCertInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCertInspectionInput() {
    return this._forceCertInspection;
  }

  // group - computed: true, optional: true, required: false
  private _group = new DataFortisaseSecurityInternalReversePoliciesProfileGroupGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: DataFortisaseSecurityInternalReversePoliciesProfileGroupGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }
}
export interface DataFortisaseSecurityInternalReversePoliciesSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#datasource DataFortisaseSecurityInternalReversePolicies#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#primary_key DataFortisaseSecurityInternalReversePolicies#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityInternalReversePoliciesScheduleToTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityInternalReversePoliciesScheduleToHclTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityInternalReversePoliciesScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityInternalReversePoliciesSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityInternalReversePoliciesSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityInternalReversePoliciesServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#datasource DataFortisaseSecurityInternalReversePolicies#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#primary_key DataFortisaseSecurityInternalReversePolicies#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityInternalReversePoliciesServicesToTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityInternalReversePoliciesServicesToHclTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityInternalReversePoliciesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityInternalReversePoliciesServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityInternalReversePoliciesServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DataFortisaseSecurityInternalReversePoliciesServicesList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityInternalReversePoliciesServices[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityInternalReversePoliciesServicesOutputReference {
    return new DataFortisaseSecurityInternalReversePoliciesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityInternalReversePoliciesSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#datasource DataFortisaseSecurityInternalReversePolicies#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#primary_key DataFortisaseSecurityInternalReversePolicies#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityInternalReversePoliciesSourcesToTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityInternalReversePoliciesSourcesToHclTerraform(struct?: DataFortisaseSecurityInternalReversePoliciesSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityInternalReversePoliciesSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityInternalReversePoliciesSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityInternalReversePoliciesSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DataFortisaseSecurityInternalReversePoliciesSourcesList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityInternalReversePoliciesSources[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityInternalReversePoliciesSourcesOutputReference {
    return new DataFortisaseSecurityInternalReversePoliciesSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies fortisase_security_internal_reverse_policies}
*/
export class DataFortisaseSecurityInternalReversePolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_internal_reverse_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityInternalReversePolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityInternalReversePolicies to import
  * @param importFromId The id of the existing DataFortisaseSecurityInternalReversePolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityInternalReversePolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_internal_reverse_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_internal_reverse_policies fortisase_security_internal_reverse_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityInternalReversePoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityInternalReversePoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_internal_reverse_policies',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._comments = config.comments;
    this._destinations.internalValue = config.destinations;
    this._enabled = config.enabled;
    this._logTraffic = config.logTraffic;
    this._primaryKey = config.primaryKey;
    this._profileGroup.internalValue = config.profileGroup;
    this._schedule.internalValue = config.schedule;
    this._scope = config.scope;
    this._services.internalValue = config.services;
    this._sources.internalValue = config.sources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations = new DataFortisaseSecurityInternalReversePoliciesDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataFortisaseSecurityInternalReversePoliciesDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
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

  // log_traffic - computed: true, optional: true, required: false
  private _logTraffic?: string; 
  public get logTraffic() {
    return this.getStringAttribute('log_traffic');
  }
  public set logTraffic(value: string) {
    this._logTraffic = value;
  }
  public resetLogTraffic() {
    this._logTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTrafficInput() {
    return this._logTraffic;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // profile_group - computed: true, optional: true, required: false
  private _profileGroup = new DataFortisaseSecurityInternalReversePoliciesProfileGroupOutputReference(this, "profile_group");
  public get profileGroup() {
    return this._profileGroup;
  }
  public putProfileGroup(value: DataFortisaseSecurityInternalReversePoliciesProfileGroup) {
    this._profileGroup.internalValue = value;
  }
  public resetProfileGroup() {
    this._profileGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileGroupInput() {
    return this._profileGroup.internalValue;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule = new DataFortisaseSecurityInternalReversePoliciesScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataFortisaseSecurityInternalReversePoliciesSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // scope - computed: true, optional: true, required: false
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

  // services - computed: true, optional: true, required: false
  private _services = new DataFortisaseSecurityInternalReversePoliciesServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataFortisaseSecurityInternalReversePoliciesServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // sources - computed: true, optional: true, required: false
  private _sources = new DataFortisaseSecurityInternalReversePoliciesSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataFortisaseSecurityInternalReversePoliciesSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      comments: cdktf.stringToTerraform(this._comments),
      destinations: cdktf.listMapper(dataFortisaseSecurityInternalReversePoliciesDestinationsToTerraform, false)(this._destinations.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      log_traffic: cdktf.stringToTerraform(this._logTraffic),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      profile_group: dataFortisaseSecurityInternalReversePoliciesProfileGroupToTerraform(this._profileGroup.internalValue),
      schedule: dataFortisaseSecurityInternalReversePoliciesScheduleToTerraform(this._schedule.internalValue),
      scope: cdktf.stringToTerraform(this._scope),
      services: cdktf.listMapper(dataFortisaseSecurityInternalReversePoliciesServicesToTerraform, false)(this._services.internalValue),
      sources: cdktf.listMapper(dataFortisaseSecurityInternalReversePoliciesSourcesToTerraform, false)(this._sources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destinations: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityInternalReversePoliciesDestinationsToHclTerraform, false)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityInternalReversePoliciesDestinationsList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_traffic: {
        value: cdktf.stringToHclTerraform(this._logTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_group: {
        value: dataFortisaseSecurityInternalReversePoliciesProfileGroupToHclTerraform(this._profileGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityInternalReversePoliciesProfileGroup",
      },
      schedule: {
        value: dataFortisaseSecurityInternalReversePoliciesScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFortisaseSecurityInternalReversePoliciesSchedule",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityInternalReversePoliciesServicesToHclTerraform, false)(this._services.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityInternalReversePoliciesServicesList",
      },
      sources: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityInternalReversePoliciesSourcesToHclTerraform, false)(this._sources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityInternalReversePoliciesSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
