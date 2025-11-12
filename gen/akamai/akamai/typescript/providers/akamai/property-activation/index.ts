// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PropertyActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID given to the activation event while it's in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#activation_id PropertyActivation#activation_id}
  */
  readonly activationId?: string;
  /**
  * Automatically acknowledge all rule warnings for activation to continue. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#auto_acknowledge_rule_warnings PropertyActivation#auto_acknowledge_rule_warnings}
  */
  readonly autoAcknowledgeRuleWarnings?: boolean | cdktf.IResolvable;
  /**
  * One or more email addresses to which to send activation status changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#contact PropertyActivation#contact}
  */
  readonly contact: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#id PropertyActivation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Akamai network in which to activate your property, either STAGING or PRODUCTION. The default is STAGING.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#network PropertyActivation#network}
  */
  readonly network?: string;
  /**
  * Assigns a log message to the activation request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#note PropertyActivation#note}
  */
  readonly note?: string;
  /**
  * Your property's ID, including the prp_ prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#property_id PropertyActivation#property_id}
  */
  readonly propertyId: string;
  /**
  * Your property's version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#version PropertyActivation#version}
  */
  readonly version: number;
  /**
  * compliance_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#compliance_record PropertyActivation#compliance_record}
  */
  readonly complianceRecord?: PropertyActivationComplianceRecord;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#timeouts PropertyActivation#timeouts}
  */
  readonly timeouts?: PropertyActivationTimeouts;
}
export interface PropertyActivationRuleErrors {
}

export function propertyActivationRuleErrorsToTerraform(struct?: PropertyActivationRuleErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function propertyActivationRuleErrorsToHclTerraform(struct?: PropertyActivationRuleErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PropertyActivationRuleErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PropertyActivationRuleErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyActivationRuleErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior_name - computed: true, optional: false, required: false
  public get behaviorName() {
    return this.getStringAttribute('behavior_name');
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // error_location - computed: true, optional: false, required: false
  public get errorLocation() {
    return this.getStringAttribute('error_location');
  }

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.getStringAttribute('instance');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PropertyActivationRuleErrorsList extends cdktf.ComplexList {

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
  public get(index: number): PropertyActivationRuleErrorsOutputReference {
    return new PropertyActivationRuleErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PropertyActivationComplianceRecordNoncomplianceReasonEmergency {
  /**
  * Identifies the ticket that describes the need for the activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#ticket_id PropertyActivation#ticket_id}
  */
  readonly ticketId?: string;
}

export function propertyActivationComplianceRecordNoncomplianceReasonEmergencyToTerraform(struct?: PropertyActivationComplianceRecordNoncomplianceReasonEmergencyOutputReference | PropertyActivationComplianceRecordNoncomplianceReasonEmergency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ticket_id: cdktf.stringToTerraform(struct!.ticketId),
  }
}


export function propertyActivationComplianceRecordNoncomplianceReasonEmergencyToHclTerraform(struct?: PropertyActivationComplianceRecordNoncomplianceReasonEmergencyOutputReference | PropertyActivationComplianceRecordNoncomplianceReasonEmergency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ticket_id: {
      value: cdktf.stringToHclTerraform(struct!.ticketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PropertyActivationComplianceRecordNoncomplianceReasonEmergencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyActivationComplianceRecordNoncomplianceReasonEmergency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ticketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketId = this._ticketId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyActivationComplianceRecordNoncomplianceReasonEmergency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ticketId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ticketId = value.ticketId;
    }
  }

  // ticket_id - computed: false, optional: true, required: false
  private _ticketId?: string; 
  public get ticketId() {
    return this.getStringAttribute('ticket_id');
  }
  public set ticketId(value: string) {
    this._ticketId = value;
  }
  public resetTicketId() {
    this._ticketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketIdInput() {
    return this._ticketId;
  }
}
export interface PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTraffic {
  /**
  * Identifies the ticket that describes the need for the activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#ticket_id PropertyActivation#ticket_id}
  */
  readonly ticketId?: string;
}

export function propertyActivationComplianceRecordNoncomplianceReasonNoProductionTrafficToTerraform(struct?: PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTrafficOutputReference | PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ticket_id: cdktf.stringToTerraform(struct!.ticketId),
  }
}


export function propertyActivationComplianceRecordNoncomplianceReasonNoProductionTrafficToHclTerraform(struct?: PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTrafficOutputReference | PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ticket_id: {
      value: cdktf.stringToHclTerraform(struct!.ticketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTrafficOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTraffic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ticketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketId = this._ticketId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTraffic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ticketId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ticketId = value.ticketId;
    }
  }

  // ticket_id - computed: false, optional: true, required: false
  private _ticketId?: string; 
  public get ticketId() {
    return this.getStringAttribute('ticket_id');
  }
  public set ticketId(value: string) {
    this._ticketId = value;
  }
  public resetTicketId() {
    this._ticketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketIdInput() {
    return this._ticketId;
  }
}
export interface PropertyActivationComplianceRecordNoncomplianceReasonNone {
  /**
  * Identifies the customer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#customer_email PropertyActivation#customer_email}
  */
  readonly customerEmail?: string;
  /**
  * Identifies person who has independently approved the activation request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#peer_reviewed_by PropertyActivation#peer_reviewed_by}
  */
  readonly peerReviewedBy?: string;
  /**
  * Identifies the ticket that describes the need for the activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#ticket_id PropertyActivation#ticket_id}
  */
  readonly ticketId?: string;
  /**
  * Whether the metadata to activate has been fully tested
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#unit_tested PropertyActivation#unit_tested}
  */
  readonly unitTested?: boolean | cdktf.IResolvable;
}

export function propertyActivationComplianceRecordNoncomplianceReasonNoneToTerraform(struct?: PropertyActivationComplianceRecordNoncomplianceReasonNoneOutputReference | PropertyActivationComplianceRecordNoncomplianceReasonNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_email: cdktf.stringToTerraform(struct!.customerEmail),
    peer_reviewed_by: cdktf.stringToTerraform(struct!.peerReviewedBy),
    ticket_id: cdktf.stringToTerraform(struct!.ticketId),
    unit_tested: cdktf.booleanToTerraform(struct!.unitTested),
  }
}


export function propertyActivationComplianceRecordNoncomplianceReasonNoneToHclTerraform(struct?: PropertyActivationComplianceRecordNoncomplianceReasonNoneOutputReference | PropertyActivationComplianceRecordNoncomplianceReasonNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_email: {
      value: cdktf.stringToHclTerraform(struct!.customerEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_reviewed_by: {
      value: cdktf.stringToHclTerraform(struct!.peerReviewedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ticket_id: {
      value: cdktf.stringToHclTerraform(struct!.ticketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_tested: {
      value: cdktf.booleanToHclTerraform(struct!.unitTested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PropertyActivationComplianceRecordNoncomplianceReasonNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyActivationComplianceRecordNoncomplianceReasonNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerEmail = this._customerEmail;
    }
    if (this._peerReviewedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerReviewedBy = this._peerReviewedBy;
    }
    if (this._ticketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketId = this._ticketId;
    }
    if (this._unitTested !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitTested = this._unitTested;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyActivationComplianceRecordNoncomplianceReasonNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerEmail = undefined;
      this._peerReviewedBy = undefined;
      this._ticketId = undefined;
      this._unitTested = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerEmail = value.customerEmail;
      this._peerReviewedBy = value.peerReviewedBy;
      this._ticketId = value.ticketId;
      this._unitTested = value.unitTested;
    }
  }

  // customer_email - computed: false, optional: true, required: false
  private _customerEmail?: string; 
  public get customerEmail() {
    return this.getStringAttribute('customer_email');
  }
  public set customerEmail(value: string) {
    this._customerEmail = value;
  }
  public resetCustomerEmail() {
    this._customerEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEmailInput() {
    return this._customerEmail;
  }

  // peer_reviewed_by - computed: false, optional: true, required: false
  private _peerReviewedBy?: string; 
  public get peerReviewedBy() {
    return this.getStringAttribute('peer_reviewed_by');
  }
  public set peerReviewedBy(value: string) {
    this._peerReviewedBy = value;
  }
  public resetPeerReviewedBy() {
    this._peerReviewedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerReviewedByInput() {
    return this._peerReviewedBy;
  }

  // ticket_id - computed: false, optional: true, required: false
  private _ticketId?: string; 
  public get ticketId() {
    return this.getStringAttribute('ticket_id');
  }
  public set ticketId(value: string) {
    this._ticketId = value;
  }
  public resetTicketId() {
    this._ticketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketIdInput() {
    return this._ticketId;
  }

  // unit_tested - computed: false, optional: true, required: false
  private _unitTested?: boolean | cdktf.IResolvable; 
  public get unitTested() {
    return this.getBooleanAttribute('unit_tested');
  }
  public set unitTested(value: boolean | cdktf.IResolvable) {
    this._unitTested = value;
  }
  public resetUnitTested() {
    this._unitTested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitTestedInput() {
    return this._unitTested;
  }
}
export interface PropertyActivationComplianceRecordNoncomplianceReasonOther {
  /**
  * Describes the reason why the activation must occur immediately, out of compliance with the standard procedure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#other_noncompliance_reason PropertyActivation#other_noncompliance_reason}
  */
  readonly otherNoncomplianceReason?: string;
  /**
  * Identifies the ticket that describes the need for the activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#ticket_id PropertyActivation#ticket_id}
  */
  readonly ticketId?: string;
}

export function propertyActivationComplianceRecordNoncomplianceReasonOtherToTerraform(struct?: PropertyActivationComplianceRecordNoncomplianceReasonOtherOutputReference | PropertyActivationComplianceRecordNoncomplianceReasonOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other_noncompliance_reason: cdktf.stringToTerraform(struct!.otherNoncomplianceReason),
    ticket_id: cdktf.stringToTerraform(struct!.ticketId),
  }
}


export function propertyActivationComplianceRecordNoncomplianceReasonOtherToHclTerraform(struct?: PropertyActivationComplianceRecordNoncomplianceReasonOtherOutputReference | PropertyActivationComplianceRecordNoncomplianceReasonOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other_noncompliance_reason: {
      value: cdktf.stringToHclTerraform(struct!.otherNoncomplianceReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ticket_id: {
      value: cdktf.stringToHclTerraform(struct!.ticketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PropertyActivationComplianceRecordNoncomplianceReasonOtherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyActivationComplianceRecordNoncomplianceReasonOther | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._otherNoncomplianceReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherNoncomplianceReason = this._otherNoncomplianceReason;
    }
    if (this._ticketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketId = this._ticketId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyActivationComplianceRecordNoncomplianceReasonOther | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._otherNoncomplianceReason = undefined;
      this._ticketId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._otherNoncomplianceReason = value.otherNoncomplianceReason;
      this._ticketId = value.ticketId;
    }
  }

  // other_noncompliance_reason - computed: false, optional: true, required: false
  private _otherNoncomplianceReason?: string; 
  public get otherNoncomplianceReason() {
    return this.getStringAttribute('other_noncompliance_reason');
  }
  public set otherNoncomplianceReason(value: string) {
    this._otherNoncomplianceReason = value;
  }
  public resetOtherNoncomplianceReason() {
    this._otherNoncomplianceReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherNoncomplianceReasonInput() {
    return this._otherNoncomplianceReason;
  }

  // ticket_id - computed: false, optional: true, required: false
  private _ticketId?: string; 
  public get ticketId() {
    return this.getStringAttribute('ticket_id');
  }
  public set ticketId(value: string) {
    this._ticketId = value;
  }
  public resetTicketId() {
    this._ticketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketIdInput() {
    return this._ticketId;
  }
}
export interface PropertyActivationComplianceRecord {
  /**
  * noncompliance_reason_emergency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#noncompliance_reason_emergency PropertyActivation#noncompliance_reason_emergency}
  */
  readonly noncomplianceReasonEmergency?: PropertyActivationComplianceRecordNoncomplianceReasonEmergency;
  /**
  * noncompliance_reason_no_production_traffic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#noncompliance_reason_no_production_traffic PropertyActivation#noncompliance_reason_no_production_traffic}
  */
  readonly noncomplianceReasonNoProductionTraffic?: PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTraffic;
  /**
  * noncompliance_reason_none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#noncompliance_reason_none PropertyActivation#noncompliance_reason_none}
  */
  readonly noncomplianceReasonNone?: PropertyActivationComplianceRecordNoncomplianceReasonNone;
  /**
  * noncompliance_reason_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#noncompliance_reason_other PropertyActivation#noncompliance_reason_other}
  */
  readonly noncomplianceReasonOther?: PropertyActivationComplianceRecordNoncomplianceReasonOther;
}

export function propertyActivationComplianceRecordToTerraform(struct?: PropertyActivationComplianceRecordOutputReference | PropertyActivationComplianceRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    noncompliance_reason_emergency: propertyActivationComplianceRecordNoncomplianceReasonEmergencyToTerraform(struct!.noncomplianceReasonEmergency),
    noncompliance_reason_no_production_traffic: propertyActivationComplianceRecordNoncomplianceReasonNoProductionTrafficToTerraform(struct!.noncomplianceReasonNoProductionTraffic),
    noncompliance_reason_none: propertyActivationComplianceRecordNoncomplianceReasonNoneToTerraform(struct!.noncomplianceReasonNone),
    noncompliance_reason_other: propertyActivationComplianceRecordNoncomplianceReasonOtherToTerraform(struct!.noncomplianceReasonOther),
  }
}


export function propertyActivationComplianceRecordToHclTerraform(struct?: PropertyActivationComplianceRecordOutputReference | PropertyActivationComplianceRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    noncompliance_reason_emergency: {
      value: propertyActivationComplianceRecordNoncomplianceReasonEmergencyToHclTerraform(struct!.noncomplianceReasonEmergency),
      isBlock: true,
      type: "list",
      storageClassType: "PropertyActivationComplianceRecordNoncomplianceReasonEmergencyList",
    },
    noncompliance_reason_no_production_traffic: {
      value: propertyActivationComplianceRecordNoncomplianceReasonNoProductionTrafficToHclTerraform(struct!.noncomplianceReasonNoProductionTraffic),
      isBlock: true,
      type: "list",
      storageClassType: "PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTrafficList",
    },
    noncompliance_reason_none: {
      value: propertyActivationComplianceRecordNoncomplianceReasonNoneToHclTerraform(struct!.noncomplianceReasonNone),
      isBlock: true,
      type: "list",
      storageClassType: "PropertyActivationComplianceRecordNoncomplianceReasonNoneList",
    },
    noncompliance_reason_other: {
      value: propertyActivationComplianceRecordNoncomplianceReasonOtherToHclTerraform(struct!.noncomplianceReasonOther),
      isBlock: true,
      type: "list",
      storageClassType: "PropertyActivationComplianceRecordNoncomplianceReasonOtherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PropertyActivationComplianceRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyActivationComplianceRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noncomplianceReasonEmergency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncomplianceReasonEmergency = this._noncomplianceReasonEmergency?.internalValue;
    }
    if (this._noncomplianceReasonNoProductionTraffic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncomplianceReasonNoProductionTraffic = this._noncomplianceReasonNoProductionTraffic?.internalValue;
    }
    if (this._noncomplianceReasonNone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncomplianceReasonNone = this._noncomplianceReasonNone?.internalValue;
    }
    if (this._noncomplianceReasonOther?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncomplianceReasonOther = this._noncomplianceReasonOther?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyActivationComplianceRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noncomplianceReasonEmergency.internalValue = undefined;
      this._noncomplianceReasonNoProductionTraffic.internalValue = undefined;
      this._noncomplianceReasonNone.internalValue = undefined;
      this._noncomplianceReasonOther.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noncomplianceReasonEmergency.internalValue = value.noncomplianceReasonEmergency;
      this._noncomplianceReasonNoProductionTraffic.internalValue = value.noncomplianceReasonNoProductionTraffic;
      this._noncomplianceReasonNone.internalValue = value.noncomplianceReasonNone;
      this._noncomplianceReasonOther.internalValue = value.noncomplianceReasonOther;
    }
  }

  // noncompliance_reason_emergency - computed: false, optional: true, required: false
  private _noncomplianceReasonEmergency = new PropertyActivationComplianceRecordNoncomplianceReasonEmergencyOutputReference(this, "noncompliance_reason_emergency");
  public get noncomplianceReasonEmergency() {
    return this._noncomplianceReasonEmergency;
  }
  public putNoncomplianceReasonEmergency(value: PropertyActivationComplianceRecordNoncomplianceReasonEmergency) {
    this._noncomplianceReasonEmergency.internalValue = value;
  }
  public resetNoncomplianceReasonEmergency() {
    this._noncomplianceReasonEmergency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncomplianceReasonEmergencyInput() {
    return this._noncomplianceReasonEmergency.internalValue;
  }

  // noncompliance_reason_no_production_traffic - computed: false, optional: true, required: false
  private _noncomplianceReasonNoProductionTraffic = new PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTrafficOutputReference(this, "noncompliance_reason_no_production_traffic");
  public get noncomplianceReasonNoProductionTraffic() {
    return this._noncomplianceReasonNoProductionTraffic;
  }
  public putNoncomplianceReasonNoProductionTraffic(value: PropertyActivationComplianceRecordNoncomplianceReasonNoProductionTraffic) {
    this._noncomplianceReasonNoProductionTraffic.internalValue = value;
  }
  public resetNoncomplianceReasonNoProductionTraffic() {
    this._noncomplianceReasonNoProductionTraffic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncomplianceReasonNoProductionTrafficInput() {
    return this._noncomplianceReasonNoProductionTraffic.internalValue;
  }

  // noncompliance_reason_none - computed: false, optional: true, required: false
  private _noncomplianceReasonNone = new PropertyActivationComplianceRecordNoncomplianceReasonNoneOutputReference(this, "noncompliance_reason_none");
  public get noncomplianceReasonNone() {
    return this._noncomplianceReasonNone;
  }
  public putNoncomplianceReasonNone(value: PropertyActivationComplianceRecordNoncomplianceReasonNone) {
    this._noncomplianceReasonNone.internalValue = value;
  }
  public resetNoncomplianceReasonNone() {
    this._noncomplianceReasonNone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncomplianceReasonNoneInput() {
    return this._noncomplianceReasonNone.internalValue;
  }

  // noncompliance_reason_other - computed: false, optional: true, required: false
  private _noncomplianceReasonOther = new PropertyActivationComplianceRecordNoncomplianceReasonOtherOutputReference(this, "noncompliance_reason_other");
  public get noncomplianceReasonOther() {
    return this._noncomplianceReasonOther;
  }
  public putNoncomplianceReasonOther(value: PropertyActivationComplianceRecordNoncomplianceReasonOther) {
    this._noncomplianceReasonOther.internalValue = value;
  }
  public resetNoncomplianceReasonOther() {
    this._noncomplianceReasonOther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncomplianceReasonOtherInput() {
    return this._noncomplianceReasonOther.internalValue;
  }
}
export interface PropertyActivationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#default PropertyActivation#default}
  */
  readonly default?: string;
}

export function propertyActivationTimeoutsToTerraform(struct?: PropertyActivationTimeoutsOutputReference | PropertyActivationTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function propertyActivationTimeoutsToHclTerraform(struct?: PropertyActivationTimeoutsOutputReference | PropertyActivationTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PropertyActivationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyActivationTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyActivationTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation akamai_property_activation}
*/
export class PropertyActivation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_property_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PropertyActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PropertyActivation to import
  * @param importFromId The id of the existing PropertyActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PropertyActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_property_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_activation akamai_property_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PropertyActivationConfig
  */
  public constructor(scope: Construct, id: string, config: PropertyActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_property_activation',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationId = config.activationId;
    this._autoAcknowledgeRuleWarnings = config.autoAcknowledgeRuleWarnings;
    this._contact = config.contact;
    this._id = config.id;
    this._network = config.network;
    this._note = config.note;
    this._propertyId = config.propertyId;
    this._version = config.version;
    this._complianceRecord.internalValue = config.complianceRecord;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_id - computed: true, optional: true, required: false
  private _activationId?: string; 
  public get activationId() {
    return this.getStringAttribute('activation_id');
  }
  public set activationId(value: string) {
    this._activationId = value;
  }
  public resetActivationId() {
    this._activationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationIdInput() {
    return this._activationId;
  }

  // auto_acknowledge_rule_warnings - computed: false, optional: true, required: false
  private _autoAcknowledgeRuleWarnings?: boolean | cdktf.IResolvable; 
  public get autoAcknowledgeRuleWarnings() {
    return this.getBooleanAttribute('auto_acknowledge_rule_warnings');
  }
  public set autoAcknowledgeRuleWarnings(value: boolean | cdktf.IResolvable) {
    this._autoAcknowledgeRuleWarnings = value;
  }
  public resetAutoAcknowledgeRuleWarnings() {
    this._autoAcknowledgeRuleWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcknowledgeRuleWarningsInput() {
    return this._autoAcknowledgeRuleWarnings;
  }

  // contact - computed: false, optional: false, required: true
  private _contact?: string[]; 
  public get contact() {
    return cdktf.Fn.tolist(this.getListAttribute('contact'));
  }
  public set contact(value: string[]) {
    this._contact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.getStringAttribute('errors');
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // property_id - computed: false, optional: false, required: true
  private _propertyId?: string; 
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }
  public set propertyId(value: string) {
    this._propertyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdInput() {
    return this._propertyId;
  }

  // rule_errors - computed: true, optional: false, required: false
  private _ruleErrors = new PropertyActivationRuleErrorsList(this, "rule_errors", false);
  public get ruleErrors() {
    return this._ruleErrors;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return this.getStringAttribute('warnings');
  }

  // compliance_record - computed: false, optional: true, required: false
  private _complianceRecord = new PropertyActivationComplianceRecordOutputReference(this, "compliance_record");
  public get complianceRecord() {
    return this._complianceRecord;
  }
  public putComplianceRecord(value: PropertyActivationComplianceRecord) {
    this._complianceRecord.internalValue = value;
  }
  public resetComplianceRecord() {
    this._complianceRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceRecordInput() {
    return this._complianceRecord.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PropertyActivationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PropertyActivationTimeouts) {
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
      activation_id: cdktf.stringToTerraform(this._activationId),
      auto_acknowledge_rule_warnings: cdktf.booleanToTerraform(this._autoAcknowledgeRuleWarnings),
      contact: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contact),
      id: cdktf.stringToTerraform(this._id),
      network: cdktf.stringToTerraform(this._network),
      note: cdktf.stringToTerraform(this._note),
      property_id: cdktf.stringToTerraform(this._propertyId),
      version: cdktf.numberToTerraform(this._version),
      compliance_record: propertyActivationComplianceRecordToTerraform(this._complianceRecord.internalValue),
      timeouts: propertyActivationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_id: {
        value: cdktf.stringToHclTerraform(this._activationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_acknowledge_rule_warnings: {
        value: cdktf.booleanToHclTerraform(this._autoAcknowledgeRuleWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contact),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_id: {
        value: cdktf.stringToHclTerraform(this._propertyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compliance_record: {
        value: propertyActivationComplianceRecordToHclTerraform(this._complianceRecord.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PropertyActivationComplianceRecordList",
      },
      timeouts: {
        value: propertyActivationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PropertyActivationTimeoutsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
