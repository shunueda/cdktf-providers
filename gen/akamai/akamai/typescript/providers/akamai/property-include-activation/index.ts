// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PropertyIncludeActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically acknowledge all rule warnings for activation and continue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#auto_acknowledge_rule_warnings PropertyIncludeActivation#auto_acknowledge_rule_warnings}
  */
  readonly autoAcknowledgeRuleWarnings?: boolean | cdktf.IResolvable;
  /**
  * The contract under which the include is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#contract_id PropertyIncludeActivation#contract_id}
  */
  readonly contractId: string;
  /**
  * The group under which the include is activated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#group_id PropertyIncludeActivation#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#id PropertyIncludeActivation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique identifier of the include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#include_id PropertyIncludeActivation#include_id}
  */
  readonly includeId: string;
  /**
  * The network for which the activation will be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#network PropertyIncludeActivation#network}
  */
  readonly network: string;
  /**
  * The note to assign to a log message of the activation request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#note PropertyIncludeActivation#note}
  */
  readonly note?: string;
  /**
  * The list of email addresses to notify about an activation status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#notify_emails PropertyIncludeActivation#notify_emails}
  */
  readonly notifyEmails: string[];
  /**
  * The unique identifier of the include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#version PropertyIncludeActivation#version}
  */
  readonly version: number;
  /**
  * compliance_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#compliance_record PropertyIncludeActivation#compliance_record}
  */
  readonly complianceRecord?: PropertyIncludeActivationComplianceRecord;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#timeouts PropertyIncludeActivation#timeouts}
  */
  readonly timeouts?: PropertyIncludeActivationTimeouts;
}
export interface PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergency {
  /**
  * Identifies the ticket that describes the need for the activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#ticket_id PropertyIncludeActivation#ticket_id}
  */
  readonly ticketId?: string;
}

export function propertyIncludeActivationComplianceRecordNoncomplianceReasonEmergencyToTerraform(struct?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergencyOutputReference | PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ticket_id: cdktf.stringToTerraform(struct!.ticketId),
  }
}


export function propertyIncludeActivationComplianceRecordNoncomplianceReasonEmergencyToHclTerraform(struct?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergencyOutputReference | PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergency): any {
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

export class PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ticketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketId = this._ticketId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergency | undefined) {
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
export interface PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTraffic {
  /**
  * Identifies the ticket that describes the need for the activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#ticket_id PropertyIncludeActivation#ticket_id}
  */
  readonly ticketId?: string;
}

export function propertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTrafficToTerraform(struct?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTrafficOutputReference | PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ticket_id: cdktf.stringToTerraform(struct!.ticketId),
  }
}


export function propertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTrafficToHclTerraform(struct?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTrafficOutputReference | PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTraffic): any {
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

export class PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTrafficOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTraffic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ticketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketId = this._ticketId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTraffic | undefined) {
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
export interface PropertyIncludeActivationComplianceRecordNoncomplianceReasonNone {
  /**
  * Identifies the customer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#customer_email PropertyIncludeActivation#customer_email}
  */
  readonly customerEmail?: string;
  /**
  * Identifies person who has independently approved the activation request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#peer_reviewed_by PropertyIncludeActivation#peer_reviewed_by}
  */
  readonly peerReviewedBy?: string;
  /**
  * Identifies the ticket that describes the need for the activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#ticket_id PropertyIncludeActivation#ticket_id}
  */
  readonly ticketId?: string;
  /**
  * Whether the metadata to activate has been fully tested
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#unit_tested PropertyIncludeActivation#unit_tested}
  */
  readonly unitTested?: boolean | cdktf.IResolvable;
}

export function propertyIncludeActivationComplianceRecordNoncomplianceReasonNoneToTerraform(struct?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoneOutputReference | PropertyIncludeActivationComplianceRecordNoncomplianceReasonNone): any {
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


export function propertyIncludeActivationComplianceRecordNoncomplianceReasonNoneToHclTerraform(struct?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoneOutputReference | PropertyIncludeActivationComplianceRecordNoncomplianceReasonNone): any {
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

export class PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyIncludeActivationComplianceRecordNoncomplianceReasonNone | undefined {
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

  public set internalValue(value: PropertyIncludeActivationComplianceRecordNoncomplianceReasonNone | undefined) {
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
export interface PropertyIncludeActivationComplianceRecordNoncomplianceReasonOther {
  /**
  * Describes the reason why the activation must occur immediately, out of compliance with the standard procedure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#other_noncompliance_reason PropertyIncludeActivation#other_noncompliance_reason}
  */
  readonly otherNoncomplianceReason?: string;
  /**
  * Identifies the ticket that describes the need for the activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#ticket_id PropertyIncludeActivation#ticket_id}
  */
  readonly ticketId?: string;
}

export function propertyIncludeActivationComplianceRecordNoncomplianceReasonOtherToTerraform(struct?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonOtherOutputReference | PropertyIncludeActivationComplianceRecordNoncomplianceReasonOther): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other_noncompliance_reason: cdktf.stringToTerraform(struct!.otherNoncomplianceReason),
    ticket_id: cdktf.stringToTerraform(struct!.ticketId),
  }
}


export function propertyIncludeActivationComplianceRecordNoncomplianceReasonOtherToHclTerraform(struct?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonOtherOutputReference | PropertyIncludeActivationComplianceRecordNoncomplianceReasonOther): any {
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

export class PropertyIncludeActivationComplianceRecordNoncomplianceReasonOtherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyIncludeActivationComplianceRecordNoncomplianceReasonOther | undefined {
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

  public set internalValue(value: PropertyIncludeActivationComplianceRecordNoncomplianceReasonOther | undefined) {
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
export interface PropertyIncludeActivationComplianceRecord {
  /**
  * noncompliance_reason_emergency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#noncompliance_reason_emergency PropertyIncludeActivation#noncompliance_reason_emergency}
  */
  readonly noncomplianceReasonEmergency?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergency;
  /**
  * noncompliance_reason_no_production_traffic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#noncompliance_reason_no_production_traffic PropertyIncludeActivation#noncompliance_reason_no_production_traffic}
  */
  readonly noncomplianceReasonNoProductionTraffic?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTraffic;
  /**
  * noncompliance_reason_none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#noncompliance_reason_none PropertyIncludeActivation#noncompliance_reason_none}
  */
  readonly noncomplianceReasonNone?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonNone;
  /**
  * noncompliance_reason_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#noncompliance_reason_other PropertyIncludeActivation#noncompliance_reason_other}
  */
  readonly noncomplianceReasonOther?: PropertyIncludeActivationComplianceRecordNoncomplianceReasonOther;
}

export function propertyIncludeActivationComplianceRecordToTerraform(struct?: PropertyIncludeActivationComplianceRecordOutputReference | PropertyIncludeActivationComplianceRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    noncompliance_reason_emergency: propertyIncludeActivationComplianceRecordNoncomplianceReasonEmergencyToTerraform(struct!.noncomplianceReasonEmergency),
    noncompliance_reason_no_production_traffic: propertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTrafficToTerraform(struct!.noncomplianceReasonNoProductionTraffic),
    noncompliance_reason_none: propertyIncludeActivationComplianceRecordNoncomplianceReasonNoneToTerraform(struct!.noncomplianceReasonNone),
    noncompliance_reason_other: propertyIncludeActivationComplianceRecordNoncomplianceReasonOtherToTerraform(struct!.noncomplianceReasonOther),
  }
}


export function propertyIncludeActivationComplianceRecordToHclTerraform(struct?: PropertyIncludeActivationComplianceRecordOutputReference | PropertyIncludeActivationComplianceRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    noncompliance_reason_emergency: {
      value: propertyIncludeActivationComplianceRecordNoncomplianceReasonEmergencyToHclTerraform(struct!.noncomplianceReasonEmergency),
      isBlock: true,
      type: "list",
      storageClassType: "PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergencyList",
    },
    noncompliance_reason_no_production_traffic: {
      value: propertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTrafficToHclTerraform(struct!.noncomplianceReasonNoProductionTraffic),
      isBlock: true,
      type: "list",
      storageClassType: "PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTrafficList",
    },
    noncompliance_reason_none: {
      value: propertyIncludeActivationComplianceRecordNoncomplianceReasonNoneToHclTerraform(struct!.noncomplianceReasonNone),
      isBlock: true,
      type: "list",
      storageClassType: "PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoneList",
    },
    noncompliance_reason_other: {
      value: propertyIncludeActivationComplianceRecordNoncomplianceReasonOtherToHclTerraform(struct!.noncomplianceReasonOther),
      isBlock: true,
      type: "list",
      storageClassType: "PropertyIncludeActivationComplianceRecordNoncomplianceReasonOtherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PropertyIncludeActivationComplianceRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyIncludeActivationComplianceRecord | undefined {
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

  public set internalValue(value: PropertyIncludeActivationComplianceRecord | undefined) {
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
  private _noncomplianceReasonEmergency = new PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergencyOutputReference(this, "noncompliance_reason_emergency");
  public get noncomplianceReasonEmergency() {
    return this._noncomplianceReasonEmergency;
  }
  public putNoncomplianceReasonEmergency(value: PropertyIncludeActivationComplianceRecordNoncomplianceReasonEmergency) {
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
  private _noncomplianceReasonNoProductionTraffic = new PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTrafficOutputReference(this, "noncompliance_reason_no_production_traffic");
  public get noncomplianceReasonNoProductionTraffic() {
    return this._noncomplianceReasonNoProductionTraffic;
  }
  public putNoncomplianceReasonNoProductionTraffic(value: PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoProductionTraffic) {
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
  private _noncomplianceReasonNone = new PropertyIncludeActivationComplianceRecordNoncomplianceReasonNoneOutputReference(this, "noncompliance_reason_none");
  public get noncomplianceReasonNone() {
    return this._noncomplianceReasonNone;
  }
  public putNoncomplianceReasonNone(value: PropertyIncludeActivationComplianceRecordNoncomplianceReasonNone) {
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
  private _noncomplianceReasonOther = new PropertyIncludeActivationComplianceRecordNoncomplianceReasonOtherOutputReference(this, "noncompliance_reason_other");
  public get noncomplianceReasonOther() {
    return this._noncomplianceReasonOther;
  }
  public putNoncomplianceReasonOther(value: PropertyIncludeActivationComplianceRecordNoncomplianceReasonOther) {
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
export interface PropertyIncludeActivationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#default PropertyIncludeActivation#default}
  */
  readonly default?: string;
}

export function propertyIncludeActivationTimeoutsToTerraform(struct?: PropertyIncludeActivationTimeoutsOutputReference | PropertyIncludeActivationTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function propertyIncludeActivationTimeoutsToHclTerraform(struct?: PropertyIncludeActivationTimeoutsOutputReference | PropertyIncludeActivationTimeouts): any {
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

export class PropertyIncludeActivationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PropertyIncludeActivationTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertyIncludeActivationTimeouts | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation akamai_property_include_activation}
*/
export class PropertyIncludeActivation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_property_include_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PropertyIncludeActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PropertyIncludeActivation to import
  * @param importFromId The id of the existing PropertyIncludeActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PropertyIncludeActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_property_include_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/property_include_activation akamai_property_include_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PropertyIncludeActivationConfig
  */
  public constructor(scope: Construct, id: string, config: PropertyIncludeActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_property_include_activation',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAcknowledgeRuleWarnings = config.autoAcknowledgeRuleWarnings;
    this._contractId = config.contractId;
    this._groupId = config.groupId;
    this._id = config.id;
    this._includeId = config.includeId;
    this._network = config.network;
    this._note = config.note;
    this._notifyEmails = config.notifyEmails;
    this._version = config.version;
    this._complianceRecord.internalValue = config.complianceRecord;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // include_id - computed: false, optional: false, required: true
  private _includeId?: string; 
  public get includeId() {
    return this.getStringAttribute('include_id');
  }
  public set includeId(value: string) {
    this._includeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIdInput() {
    return this._includeId;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
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

  // notify_emails - computed: false, optional: false, required: true
  private _notifyEmails?: string[]; 
  public get notifyEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_emails'));
  }
  public set notifyEmails(value: string[]) {
    this._notifyEmails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEmailsInput() {
    return this._notifyEmails;
  }

  // validations - computed: true, optional: false, required: false
  public get validations() {
    return this.getStringAttribute('validations');
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

  // compliance_record - computed: false, optional: true, required: false
  private _complianceRecord = new PropertyIncludeActivationComplianceRecordOutputReference(this, "compliance_record");
  public get complianceRecord() {
    return this._complianceRecord;
  }
  public putComplianceRecord(value: PropertyIncludeActivationComplianceRecord) {
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
  private _timeouts = new PropertyIncludeActivationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PropertyIncludeActivationTimeouts) {
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
      auto_acknowledge_rule_warnings: cdktf.booleanToTerraform(this._autoAcknowledgeRuleWarnings),
      contract_id: cdktf.stringToTerraform(this._contractId),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      include_id: cdktf.stringToTerraform(this._includeId),
      network: cdktf.stringToTerraform(this._network),
      note: cdktf.stringToTerraform(this._note),
      notify_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyEmails),
      version: cdktf.numberToTerraform(this._version),
      compliance_record: propertyIncludeActivationComplianceRecordToTerraform(this._complianceRecord.internalValue),
      timeouts: propertyIncludeActivationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_acknowledge_rule_warnings: {
        value: cdktf.booleanToHclTerraform(this._autoAcknowledgeRuleWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      include_id: {
        value: cdktf.stringToHclTerraform(this._includeId),
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
      notify_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifyEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compliance_record: {
        value: propertyIncludeActivationComplianceRecordToHclTerraform(this._complianceRecord.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PropertyIncludeActivationComplianceRecordList",
      },
      timeouts: {
        value: propertyIncludeActivationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PropertyIncludeActivationTimeoutsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
