// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundAttemptLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#id OutboundAttemptLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of times a contact can be called within the resetPeriod. Required if maxAttemptsPerNumber is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#max_attempts_per_contact OutboundAttemptLimit#max_attempts_per_contact}
  */
  readonly maxAttemptsPerContact?: number;
  /**
  * The maximum number of times a phone number can be called within the resetPeriod. Required if maxAttemptsPerContact is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#max_attempts_per_number OutboundAttemptLimit#max_attempts_per_number}
  */
  readonly maxAttemptsPerNumber?: number;
  /**
  * The name for the attempt limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#name OutboundAttemptLimit#name}
  */
  readonly name?: string;
  /**
  * After how long the number of attempts will be set back to 0. Defaults to `NEVER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#reset_period OutboundAttemptLimit#reset_period}
  */
  readonly resetPeriod?: string;
  /**
  * If the resetPeriod is TODAY, this specifies the timezone in which TODAY occurs. Required if the resetPeriod is TODAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#time_zone_id OutboundAttemptLimit#time_zone_id}
  */
  readonly timeZoneId?: string;
  /**
  * recall_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#recall_entries OutboundAttemptLimit#recall_entries}
  */
  readonly recallEntries?: OutboundAttemptLimitRecallEntries;
}
export interface OutboundAttemptLimitRecallEntriesAnsweringMachine {
  /**
  * Number of minutes between attempts. Must be greater than or equal to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#minutes_between_attempts OutboundAttemptLimit#minutes_between_attempts}
  */
  readonly minutesBetweenAttempts: number;
  /**
  * Number of recall attempts. Must be less than max_attempts_per_contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#nbr_attempts OutboundAttemptLimit#nbr_attempts}
  */
  readonly nbrAttempts?: number;
}

export function outboundAttemptLimitRecallEntriesAnsweringMachineToTerraform(struct?: OutboundAttemptLimitRecallEntriesAnsweringMachineOutputReference | OutboundAttemptLimitRecallEntriesAnsweringMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_between_attempts: cdktf.numberToTerraform(struct!.minutesBetweenAttempts),
    nbr_attempts: cdktf.numberToTerraform(struct!.nbrAttempts),
  }
}


export function outboundAttemptLimitRecallEntriesAnsweringMachineToHclTerraform(struct?: OutboundAttemptLimitRecallEntriesAnsweringMachineOutputReference | OutboundAttemptLimitRecallEntriesAnsweringMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes_between_attempts: {
      value: cdktf.numberToHclTerraform(struct!.minutesBetweenAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nbr_attempts: {
      value: cdktf.numberToHclTerraform(struct!.nbrAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundAttemptLimitRecallEntriesAnsweringMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundAttemptLimitRecallEntriesAnsweringMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutesBetweenAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesBetweenAttempts = this._minutesBetweenAttempts;
    }
    if (this._nbrAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrAttempts = this._nbrAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundAttemptLimitRecallEntriesAnsweringMachine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutesBetweenAttempts = undefined;
      this._nbrAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutesBetweenAttempts = value.minutesBetweenAttempts;
      this._nbrAttempts = value.nbrAttempts;
    }
  }

  // minutes_between_attempts - computed: false, optional: false, required: true
  private _minutesBetweenAttempts?: number; 
  public get minutesBetweenAttempts() {
    return this.getNumberAttribute('minutes_between_attempts');
  }
  public set minutesBetweenAttempts(value: number) {
    this._minutesBetweenAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesBetweenAttemptsInput() {
    return this._minutesBetweenAttempts;
  }

  // nbr_attempts - computed: true, optional: true, required: false
  private _nbrAttempts?: number; 
  public get nbrAttempts() {
    return this.getNumberAttribute('nbr_attempts');
  }
  public set nbrAttempts(value: number) {
    this._nbrAttempts = value;
  }
  public resetNbrAttempts() {
    this._nbrAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrAttemptsInput() {
    return this._nbrAttempts;
  }
}
export interface OutboundAttemptLimitRecallEntriesBusy {
  /**
  * Number of minutes between attempts. Must be greater than or equal to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#minutes_between_attempts OutboundAttemptLimit#minutes_between_attempts}
  */
  readonly minutesBetweenAttempts: number;
  /**
  * Number of recall attempts. Must be less than max_attempts_per_contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#nbr_attempts OutboundAttemptLimit#nbr_attempts}
  */
  readonly nbrAttempts?: number;
}

export function outboundAttemptLimitRecallEntriesBusyToTerraform(struct?: OutboundAttemptLimitRecallEntriesBusyOutputReference | OutboundAttemptLimitRecallEntriesBusy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_between_attempts: cdktf.numberToTerraform(struct!.minutesBetweenAttempts),
    nbr_attempts: cdktf.numberToTerraform(struct!.nbrAttempts),
  }
}


export function outboundAttemptLimitRecallEntriesBusyToHclTerraform(struct?: OutboundAttemptLimitRecallEntriesBusyOutputReference | OutboundAttemptLimitRecallEntriesBusy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes_between_attempts: {
      value: cdktf.numberToHclTerraform(struct!.minutesBetweenAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nbr_attempts: {
      value: cdktf.numberToHclTerraform(struct!.nbrAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundAttemptLimitRecallEntriesBusyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundAttemptLimitRecallEntriesBusy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutesBetweenAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesBetweenAttempts = this._minutesBetweenAttempts;
    }
    if (this._nbrAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrAttempts = this._nbrAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundAttemptLimitRecallEntriesBusy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutesBetweenAttempts = undefined;
      this._nbrAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutesBetweenAttempts = value.minutesBetweenAttempts;
      this._nbrAttempts = value.nbrAttempts;
    }
  }

  // minutes_between_attempts - computed: false, optional: false, required: true
  private _minutesBetweenAttempts?: number; 
  public get minutesBetweenAttempts() {
    return this.getNumberAttribute('minutes_between_attempts');
  }
  public set minutesBetweenAttempts(value: number) {
    this._minutesBetweenAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesBetweenAttemptsInput() {
    return this._minutesBetweenAttempts;
  }

  // nbr_attempts - computed: true, optional: true, required: false
  private _nbrAttempts?: number; 
  public get nbrAttempts() {
    return this.getNumberAttribute('nbr_attempts');
  }
  public set nbrAttempts(value: number) {
    this._nbrAttempts = value;
  }
  public resetNbrAttempts() {
    this._nbrAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrAttemptsInput() {
    return this._nbrAttempts;
  }
}
export interface OutboundAttemptLimitRecallEntriesFax {
  /**
  * Number of minutes between attempts. Must be greater than or equal to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#minutes_between_attempts OutboundAttemptLimit#minutes_between_attempts}
  */
  readonly minutesBetweenAttempts: number;
  /**
  * Number of recall attempts. Must be less than max_attempts_per_contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#nbr_attempts OutboundAttemptLimit#nbr_attempts}
  */
  readonly nbrAttempts?: number;
}

export function outboundAttemptLimitRecallEntriesFaxToTerraform(struct?: OutboundAttemptLimitRecallEntriesFaxOutputReference | OutboundAttemptLimitRecallEntriesFax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_between_attempts: cdktf.numberToTerraform(struct!.minutesBetweenAttempts),
    nbr_attempts: cdktf.numberToTerraform(struct!.nbrAttempts),
  }
}


export function outboundAttemptLimitRecallEntriesFaxToHclTerraform(struct?: OutboundAttemptLimitRecallEntriesFaxOutputReference | OutboundAttemptLimitRecallEntriesFax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes_between_attempts: {
      value: cdktf.numberToHclTerraform(struct!.minutesBetweenAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nbr_attempts: {
      value: cdktf.numberToHclTerraform(struct!.nbrAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundAttemptLimitRecallEntriesFaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundAttemptLimitRecallEntriesFax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutesBetweenAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesBetweenAttempts = this._minutesBetweenAttempts;
    }
    if (this._nbrAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrAttempts = this._nbrAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundAttemptLimitRecallEntriesFax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutesBetweenAttempts = undefined;
      this._nbrAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutesBetweenAttempts = value.minutesBetweenAttempts;
      this._nbrAttempts = value.nbrAttempts;
    }
  }

  // minutes_between_attempts - computed: false, optional: false, required: true
  private _minutesBetweenAttempts?: number; 
  public get minutesBetweenAttempts() {
    return this.getNumberAttribute('minutes_between_attempts');
  }
  public set minutesBetweenAttempts(value: number) {
    this._minutesBetweenAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesBetweenAttemptsInput() {
    return this._minutesBetweenAttempts;
  }

  // nbr_attempts - computed: true, optional: true, required: false
  private _nbrAttempts?: number; 
  public get nbrAttempts() {
    return this.getNumberAttribute('nbr_attempts');
  }
  public set nbrAttempts(value: number) {
    this._nbrAttempts = value;
  }
  public resetNbrAttempts() {
    this._nbrAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrAttemptsInput() {
    return this._nbrAttempts;
  }
}
export interface OutboundAttemptLimitRecallEntriesNoAnswer {
  /**
  * Number of minutes between attempts. Must be greater than or equal to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#minutes_between_attempts OutboundAttemptLimit#minutes_between_attempts}
  */
  readonly minutesBetweenAttempts: number;
  /**
  * Number of recall attempts. Must be less than max_attempts_per_contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#nbr_attempts OutboundAttemptLimit#nbr_attempts}
  */
  readonly nbrAttempts?: number;
}

export function outboundAttemptLimitRecallEntriesNoAnswerToTerraform(struct?: OutboundAttemptLimitRecallEntriesNoAnswerOutputReference | OutboundAttemptLimitRecallEntriesNoAnswer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_between_attempts: cdktf.numberToTerraform(struct!.minutesBetweenAttempts),
    nbr_attempts: cdktf.numberToTerraform(struct!.nbrAttempts),
  }
}


export function outboundAttemptLimitRecallEntriesNoAnswerToHclTerraform(struct?: OutboundAttemptLimitRecallEntriesNoAnswerOutputReference | OutboundAttemptLimitRecallEntriesNoAnswer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes_between_attempts: {
      value: cdktf.numberToHclTerraform(struct!.minutesBetweenAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nbr_attempts: {
      value: cdktf.numberToHclTerraform(struct!.nbrAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundAttemptLimitRecallEntriesNoAnswerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundAttemptLimitRecallEntriesNoAnswer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutesBetweenAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesBetweenAttempts = this._minutesBetweenAttempts;
    }
    if (this._nbrAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrAttempts = this._nbrAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundAttemptLimitRecallEntriesNoAnswer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutesBetweenAttempts = undefined;
      this._nbrAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutesBetweenAttempts = value.minutesBetweenAttempts;
      this._nbrAttempts = value.nbrAttempts;
    }
  }

  // minutes_between_attempts - computed: false, optional: false, required: true
  private _minutesBetweenAttempts?: number; 
  public get minutesBetweenAttempts() {
    return this.getNumberAttribute('minutes_between_attempts');
  }
  public set minutesBetweenAttempts(value: number) {
    this._minutesBetweenAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesBetweenAttemptsInput() {
    return this._minutesBetweenAttempts;
  }

  // nbr_attempts - computed: true, optional: true, required: false
  private _nbrAttempts?: number; 
  public get nbrAttempts() {
    return this.getNumberAttribute('nbr_attempts');
  }
  public set nbrAttempts(value: number) {
    this._nbrAttempts = value;
  }
  public resetNbrAttempts() {
    this._nbrAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrAttemptsInput() {
    return this._nbrAttempts;
  }
}
export interface OutboundAttemptLimitRecallEntries {
  /**
  * answering_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#answering_machine OutboundAttemptLimit#answering_machine}
  */
  readonly answeringMachine?: OutboundAttemptLimitRecallEntriesAnsweringMachine;
  /**
  * busy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#busy OutboundAttemptLimit#busy}
  */
  readonly busy?: OutboundAttemptLimitRecallEntriesBusy;
  /**
  * fax block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#fax OutboundAttemptLimit#fax}
  */
  readonly fax?: OutboundAttemptLimitRecallEntriesFax;
  /**
  * no_answer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#no_answer OutboundAttemptLimit#no_answer}
  */
  readonly noAnswer?: OutboundAttemptLimitRecallEntriesNoAnswer;
}

export function outboundAttemptLimitRecallEntriesToTerraform(struct?: OutboundAttemptLimitRecallEntriesOutputReference | OutboundAttemptLimitRecallEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    answering_machine: outboundAttemptLimitRecallEntriesAnsweringMachineToTerraform(struct!.answeringMachine),
    busy: outboundAttemptLimitRecallEntriesBusyToTerraform(struct!.busy),
    fax: outboundAttemptLimitRecallEntriesFaxToTerraform(struct!.fax),
    no_answer: outboundAttemptLimitRecallEntriesNoAnswerToTerraform(struct!.noAnswer),
  }
}


export function outboundAttemptLimitRecallEntriesToHclTerraform(struct?: OutboundAttemptLimitRecallEntriesOutputReference | OutboundAttemptLimitRecallEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    answering_machine: {
      value: outboundAttemptLimitRecallEntriesAnsweringMachineToHclTerraform(struct!.answeringMachine),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundAttemptLimitRecallEntriesAnsweringMachineList",
    },
    busy: {
      value: outboundAttemptLimitRecallEntriesBusyToHclTerraform(struct!.busy),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundAttemptLimitRecallEntriesBusyList",
    },
    fax: {
      value: outboundAttemptLimitRecallEntriesFaxToHclTerraform(struct!.fax),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundAttemptLimitRecallEntriesFaxList",
    },
    no_answer: {
      value: outboundAttemptLimitRecallEntriesNoAnswerToHclTerraform(struct!.noAnswer),
      isBlock: true,
      type: "set",
      storageClassType: "OutboundAttemptLimitRecallEntriesNoAnswerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundAttemptLimitRecallEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutboundAttemptLimitRecallEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answeringMachine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.answeringMachine = this._answeringMachine?.internalValue;
    }
    if (this._busy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.busy = this._busy?.internalValue;
    }
    if (this._fax?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fax = this._fax?.internalValue;
    }
    if (this._noAnswer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAnswer = this._noAnswer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundAttemptLimitRecallEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._answeringMachine.internalValue = undefined;
      this._busy.internalValue = undefined;
      this._fax.internalValue = undefined;
      this._noAnswer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._answeringMachine.internalValue = value.answeringMachine;
      this._busy.internalValue = value.busy;
      this._fax.internalValue = value.fax;
      this._noAnswer.internalValue = value.noAnswer;
    }
  }

  // answering_machine - computed: false, optional: true, required: false
  private _answeringMachine = new OutboundAttemptLimitRecallEntriesAnsweringMachineOutputReference(this, "answering_machine");
  public get answeringMachine() {
    return this._answeringMachine;
  }
  public putAnsweringMachine(value: OutboundAttemptLimitRecallEntriesAnsweringMachine) {
    this._answeringMachine.internalValue = value;
  }
  public resetAnsweringMachine() {
    this._answeringMachine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answeringMachineInput() {
    return this._answeringMachine.internalValue;
  }

  // busy - computed: false, optional: true, required: false
  private _busy = new OutboundAttemptLimitRecallEntriesBusyOutputReference(this, "busy");
  public get busy() {
    return this._busy;
  }
  public putBusy(value: OutboundAttemptLimitRecallEntriesBusy) {
    this._busy.internalValue = value;
  }
  public resetBusy() {
    this._busy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busyInput() {
    return this._busy.internalValue;
  }

  // fax - computed: false, optional: true, required: false
  private _fax = new OutboundAttemptLimitRecallEntriesFaxOutputReference(this, "fax");
  public get fax() {
    return this._fax;
  }
  public putFax(value: OutboundAttemptLimitRecallEntriesFax) {
    this._fax.internalValue = value;
  }
  public resetFax() {
    this._fax.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxInput() {
    return this._fax.internalValue;
  }

  // no_answer - computed: false, optional: true, required: false
  private _noAnswer = new OutboundAttemptLimitRecallEntriesNoAnswerOutputReference(this, "no_answer");
  public get noAnswer() {
    return this._noAnswer;
  }
  public putNoAnswer(value: OutboundAttemptLimitRecallEntriesNoAnswer) {
    this._noAnswer.internalValue = value;
  }
  public resetNoAnswer() {
    this._noAnswer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAnswerInput() {
    return this._noAnswer.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit genesyscloud_outbound_attempt_limit}
*/
export class OutboundAttemptLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_attempt_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundAttemptLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundAttemptLimit to import
  * @param importFromId The id of the existing OutboundAttemptLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundAttemptLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_attempt_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_attempt_limit genesyscloud_outbound_attempt_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundAttemptLimitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OutboundAttemptLimitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_attempt_limit',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
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
    this._maxAttemptsPerContact = config.maxAttemptsPerContact;
    this._maxAttemptsPerNumber = config.maxAttemptsPerNumber;
    this._name = config.name;
    this._resetPeriod = config.resetPeriod;
    this._timeZoneId = config.timeZoneId;
    this._recallEntries.internalValue = config.recallEntries;
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

  // max_attempts_per_contact - computed: false, optional: true, required: false
  private _maxAttemptsPerContact?: number; 
  public get maxAttemptsPerContact() {
    return this.getNumberAttribute('max_attempts_per_contact');
  }
  public set maxAttemptsPerContact(value: number) {
    this._maxAttemptsPerContact = value;
  }
  public resetMaxAttemptsPerContact() {
    this._maxAttemptsPerContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsPerContactInput() {
    return this._maxAttemptsPerContact;
  }

  // max_attempts_per_number - computed: false, optional: true, required: false
  private _maxAttemptsPerNumber?: number; 
  public get maxAttemptsPerNumber() {
    return this.getNumberAttribute('max_attempts_per_number');
  }
  public set maxAttemptsPerNumber(value: number) {
    this._maxAttemptsPerNumber = value;
  }
  public resetMaxAttemptsPerNumber() {
    this._maxAttemptsPerNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsPerNumberInput() {
    return this._maxAttemptsPerNumber;
  }

  // name - computed: false, optional: true, required: false
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

  // reset_period - computed: false, optional: true, required: false
  private _resetPeriod?: string; 
  public get resetPeriod() {
    return this.getStringAttribute('reset_period');
  }
  public set resetPeriod(value: string) {
    this._resetPeriod = value;
  }
  public resetResetPeriod() {
    this._resetPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPeriodInput() {
    return this._resetPeriod;
  }

  // time_zone_id - computed: false, optional: true, required: false
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  public resetTimeZoneId() {
    this._timeZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }

  // recall_entries - computed: false, optional: true, required: false
  private _recallEntries = new OutboundAttemptLimitRecallEntriesOutputReference(this, "recall_entries");
  public get recallEntries() {
    return this._recallEntries;
  }
  public putRecallEntries(value: OutboundAttemptLimitRecallEntries) {
    this._recallEntries.internalValue = value;
  }
  public resetRecallEntries() {
    this._recallEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recallEntriesInput() {
    return this._recallEntries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_attempts_per_contact: cdktf.numberToTerraform(this._maxAttemptsPerContact),
      max_attempts_per_number: cdktf.numberToTerraform(this._maxAttemptsPerNumber),
      name: cdktf.stringToTerraform(this._name),
      reset_period: cdktf.stringToTerraform(this._resetPeriod),
      time_zone_id: cdktf.stringToTerraform(this._timeZoneId),
      recall_entries: outboundAttemptLimitRecallEntriesToTerraform(this._recallEntries.internalValue),
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
      max_attempts_per_contact: {
        value: cdktf.numberToHclTerraform(this._maxAttemptsPerContact),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_attempts_per_number: {
        value: cdktf.numberToHclTerraform(this._maxAttemptsPerNumber),
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
      reset_period: {
        value: cdktf.stringToHclTerraform(this._resetPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone_id: {
        value: cdktf.stringToHclTerraform(this._timeZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recall_entries: {
        value: outboundAttemptLimitRecallEntriesToHclTerraform(this._recallEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutboundAttemptLimitRecallEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
