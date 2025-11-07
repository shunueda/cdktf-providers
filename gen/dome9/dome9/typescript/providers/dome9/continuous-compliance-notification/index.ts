// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContinuousComplianceNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#alerts_console ContinuousComplianceNotification#alerts_console}
  */
  readonly alertsConsole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#description ContinuousComplianceNotification#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#id ContinuousComplianceNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#name ContinuousComplianceNotification#name}
  */
  readonly name: string;
  /**
  * change_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#change_detection ContinuousComplianceNotification#change_detection}
  */
  readonly changeDetection: ContinuousComplianceNotificationChangeDetection[] | cdktf.IResolvable;
  /**
  * gcp_security_command_center_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#gcp_security_command_center_integration ContinuousComplianceNotification#gcp_security_command_center_integration}
  */
  readonly gcpSecurityCommandCenterIntegration?: ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration[] | cdktf.IResolvable;
  /**
  * scheduled_report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#scheduled_report ContinuousComplianceNotification#scheduled_report}
  */
  readonly scheduledReport?: ContinuousComplianceNotificationScheduledReport[] | cdktf.IResolvable;
}
export interface ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#external_account_id ContinuousComplianceNotification#external_account_id}
  */
  readonly externalAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#region ContinuousComplianceNotification#region}
  */
  readonly region: string;
}

export function continuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationToTerraform(struct?: ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_account_id: cdktf.stringToTerraform(struct!.externalAccountId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function continuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationToHclTerraform(struct?: ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_account_id: {
      value: cdktf.stringToHclTerraform(struct!.externalAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAccountId = this._externalAccountId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalAccountId = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalAccountId = value.externalAccountId;
      this._region = value.region;
    }
  }

  // external_account_id - computed: false, optional: false, required: true
  private _externalAccountId?: string; 
  public get externalAccountId() {
    return this.getStringAttribute('external_account_id');
  }
  public set externalAccountId(value: string) {
    this._externalAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccountIdInput() {
    return this._externalAccountId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationOutputReference {
    return new ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationChangeDetectionEmailData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#recipients ContinuousComplianceNotification#recipients}
  */
  readonly recipients: string[];
}

export function continuousComplianceNotificationChangeDetectionEmailDataToTerraform(struct?: ContinuousComplianceNotificationChangeDetectionEmailData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
  }
}


export function continuousComplianceNotificationChangeDetectionEmailDataToHclTerraform(struct?: ContinuousComplianceNotificationChangeDetectionEmailData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationChangeDetectionEmailDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationChangeDetectionEmailData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationChangeDetectionEmailData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recipients = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recipients = value.recipients;
    }
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }
}

export class ContinuousComplianceNotificationChangeDetectionEmailDataList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationChangeDetectionEmailData[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationChangeDetectionEmailDataOutputReference {
    return new ContinuousComplianceNotificationChangeDetectionEmailDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationChangeDetectionEmailPerFindingData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#notification_output_format ContinuousComplianceNotification#notification_output_format}
  */
  readonly notificationOutputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#recipients ContinuousComplianceNotification#recipients}
  */
  readonly recipients: string[];
}

export function continuousComplianceNotificationChangeDetectionEmailPerFindingDataToTerraform(struct?: ContinuousComplianceNotificationChangeDetectionEmailPerFindingData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_output_format: cdktf.stringToTerraform(struct!.notificationOutputFormat),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
  }
}


export function continuousComplianceNotificationChangeDetectionEmailPerFindingDataToHclTerraform(struct?: ContinuousComplianceNotificationChangeDetectionEmailPerFindingData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_output_format: {
      value: cdktf.stringToHclTerraform(struct!.notificationOutputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationChangeDetectionEmailPerFindingData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationOutputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationOutputFormat = this._notificationOutputFormat;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationChangeDetectionEmailPerFindingData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationOutputFormat = undefined;
      this._recipients = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationOutputFormat = value.notificationOutputFormat;
      this._recipients = value.recipients;
    }
  }

  // notification_output_format - computed: false, optional: true, required: false
  private _notificationOutputFormat?: string; 
  public get notificationOutputFormat() {
    return this.getStringAttribute('notification_output_format');
  }
  public set notificationOutputFormat(value: string) {
    this._notificationOutputFormat = value;
  }
  public resetNotificationOutputFormat() {
    this._notificationOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationOutputFormatInput() {
    return this._notificationOutputFormat;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }
}

export class ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationChangeDetectionEmailPerFindingData[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataOutputReference {
    return new ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationChangeDetectionSlackData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#url ContinuousComplianceNotification#url}
  */
  readonly url: string;
}

export function continuousComplianceNotificationChangeDetectionSlackDataToTerraform(struct?: ContinuousComplianceNotificationChangeDetectionSlackData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function continuousComplianceNotificationChangeDetectionSlackDataToHclTerraform(struct?: ContinuousComplianceNotificationChangeDetectionSlackData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationChangeDetectionSlackDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationChangeDetectionSlackData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationChangeDetectionSlackData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContinuousComplianceNotificationChangeDetectionSlackDataList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationChangeDetectionSlackData[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationChangeDetectionSlackDataOutputReference {
    return new ContinuousComplianceNotificationChangeDetectionSlackDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationChangeDetectionSnsData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#sns_output_format ContinuousComplianceNotification#sns_output_format}
  */
  readonly snsOutputFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#sns_topic_arn ContinuousComplianceNotification#sns_topic_arn}
  */
  readonly snsTopicArn: string;
}

export function continuousComplianceNotificationChangeDetectionSnsDataToTerraform(struct?: ContinuousComplianceNotificationChangeDetectionSnsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sns_output_format: cdktf.stringToTerraform(struct!.snsOutputFormat),
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}


export function continuousComplianceNotificationChangeDetectionSnsDataToHclTerraform(struct?: ContinuousComplianceNotificationChangeDetectionSnsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sns_output_format: {
      value: cdktf.stringToHclTerraform(struct!.snsOutputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationChangeDetectionSnsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationChangeDetectionSnsData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snsOutputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsOutputFormat = this._snsOutputFormat;
    }
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationChangeDetectionSnsData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snsOutputFormat = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snsOutputFormat = value.snsOutputFormat;
      this._snsTopicArn = value.snsTopicArn;
    }
  }

  // sns_output_format - computed: false, optional: false, required: true
  private _snsOutputFormat?: string; 
  public get snsOutputFormat() {
    return this.getStringAttribute('sns_output_format');
  }
  public set snsOutputFormat(value: string) {
    this._snsOutputFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsOutputFormatInput() {
    return this._snsOutputFormat;
  }

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class ContinuousComplianceNotificationChangeDetectionSnsDataList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationChangeDetectionSnsData[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationChangeDetectionSnsDataOutputReference {
    return new ContinuousComplianceNotificationChangeDetectionSnsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationChangeDetectionTeamsData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#url ContinuousComplianceNotification#url}
  */
  readonly url: string;
}

export function continuousComplianceNotificationChangeDetectionTeamsDataToTerraform(struct?: ContinuousComplianceNotificationChangeDetectionTeamsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function continuousComplianceNotificationChangeDetectionTeamsDataToHclTerraform(struct?: ContinuousComplianceNotificationChangeDetectionTeamsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationChangeDetectionTeamsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationChangeDetectionTeamsData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationChangeDetectionTeamsData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContinuousComplianceNotificationChangeDetectionTeamsDataList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationChangeDetectionTeamsData[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationChangeDetectionTeamsDataOutputReference {
    return new ContinuousComplianceNotificationChangeDetectionTeamsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationChangeDetectionTicketingSystemData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#domain ContinuousComplianceNotification#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#issue_type ContinuousComplianceNotification#issue_type}
  */
  readonly issueType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#pass ContinuousComplianceNotification#pass}
  */
  readonly pass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#project_key ContinuousComplianceNotification#project_key}
  */
  readonly projectKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#should_close_tickets ContinuousComplianceNotification#should_close_tickets}
  */
  readonly shouldCloseTickets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#system_type ContinuousComplianceNotification#system_type}
  */
  readonly systemType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#user ContinuousComplianceNotification#user}
  */
  readonly user?: string;
}

export function continuousComplianceNotificationChangeDetectionTicketingSystemDataToTerraform(struct?: ContinuousComplianceNotificationChangeDetectionTicketingSystemData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    pass: cdktf.stringToTerraform(struct!.pass),
    project_key: cdktf.stringToTerraform(struct!.projectKey),
    should_close_tickets: cdktf.booleanToTerraform(struct!.shouldCloseTickets),
    system_type: cdktf.stringToTerraform(struct!.systemType),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function continuousComplianceNotificationChangeDetectionTicketingSystemDataToHclTerraform(struct?: ContinuousComplianceNotificationChangeDetectionTicketingSystemData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_type: {
      value: cdktf.stringToHclTerraform(struct!.issueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_key: {
      value: cdktf.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_close_tickets: {
      value: cdktf.booleanToHclTerraform(struct!.shouldCloseTickets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_type: {
      value: cdktf.stringToHclTerraform(struct!.systemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationChangeDetectionTicketingSystemDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationChangeDetectionTicketingSystemData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    if (this._shouldCloseTickets !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldCloseTickets = this._shouldCloseTickets;
    }
    if (this._systemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemType = this._systemType;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationChangeDetectionTicketingSystemData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._issueType = undefined;
      this._pass = undefined;
      this._projectKey = undefined;
      this._shouldCloseTickets = undefined;
      this._systemType = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._issueType = value.issueType;
      this._pass = value.pass;
      this._projectKey = value.projectKey;
      this._shouldCloseTickets = value.shouldCloseTickets;
      this._systemType = value.systemType;
      this._user = value.user;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // issue_type - computed: true, optional: true, required: false
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  public resetIssueType() {
    this._issueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // pass - computed: false, optional: false, required: true
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // project_key - computed: true, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // should_close_tickets - computed: false, optional: true, required: false
  private _shouldCloseTickets?: boolean | cdktf.IResolvable; 
  public get shouldCloseTickets() {
    return this.getBooleanAttribute('should_close_tickets');
  }
  public set shouldCloseTickets(value: boolean | cdktf.IResolvable) {
    this._shouldCloseTickets = value;
  }
  public resetShouldCloseTickets() {
    this._shouldCloseTickets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldCloseTicketsInput() {
    return this._shouldCloseTickets;
  }

  // system_type - computed: false, optional: true, required: false
  private _systemType?: string; 
  public get systemType() {
    return this.getStringAttribute('system_type');
  }
  public set systemType(value: string) {
    this._systemType = value;
  }
  public resetSystemType() {
    this._systemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTypeInput() {
    return this._systemType;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class ContinuousComplianceNotificationChangeDetectionTicketingSystemDataList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationChangeDetectionTicketingSystemData[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationChangeDetectionTicketingSystemDataOutputReference {
    return new ContinuousComplianceNotificationChangeDetectionTicketingSystemDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationChangeDetectionWebhookData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#advanced_url ContinuousComplianceNotification#advanced_url}
  */
  readonly advancedUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#auth_method ContinuousComplianceNotification#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#format_type ContinuousComplianceNotification#format_type}
  */
  readonly formatType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#http_method ContinuousComplianceNotification#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#ignore_certificate ContinuousComplianceNotification#ignore_certificate}
  */
  readonly ignoreCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#password ContinuousComplianceNotification#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#payload_format ContinuousComplianceNotification#payload_format}
  */
  readonly payloadFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#url ContinuousComplianceNotification#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#username ContinuousComplianceNotification#username}
  */
  readonly username?: string;
}

export function continuousComplianceNotificationChangeDetectionWebhookDataToTerraform(struct?: ContinuousComplianceNotificationChangeDetectionWebhookData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_url: cdktf.booleanToTerraform(struct!.advancedUrl),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    format_type: cdktf.stringToTerraform(struct!.formatType),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    ignore_certificate: cdktf.booleanToTerraform(struct!.ignoreCertificate),
    password: cdktf.stringToTerraform(struct!.password),
    payload_format: cdktf.stringToTerraform(struct!.payloadFormat),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function continuousComplianceNotificationChangeDetectionWebhookDataToHclTerraform(struct?: ContinuousComplianceNotificationChangeDetectionWebhookData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_url: {
      value: cdktf.booleanToHclTerraform(struct!.advancedUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_type: {
      value: cdktf.stringToHclTerraform(struct!.formatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_format: {
      value: cdktf.stringToHclTerraform(struct!.payloadFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationChangeDetectionWebhookDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationChangeDetectionWebhookData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedUrl = this._advancedUrl;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._formatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatType = this._formatType;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._ignoreCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificate = this._ignoreCertificate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._payloadFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadFormat = this._payloadFormat;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationChangeDetectionWebhookData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedUrl = undefined;
      this._authMethod = undefined;
      this._formatType = undefined;
      this._httpMethod = undefined;
      this._ignoreCertificate = undefined;
      this._password = undefined;
      this._payloadFormat = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedUrl = value.advancedUrl;
      this._authMethod = value.authMethod;
      this._formatType = value.formatType;
      this._httpMethod = value.httpMethod;
      this._ignoreCertificate = value.ignoreCertificate;
      this._password = value.password;
      this._payloadFormat = value.payloadFormat;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // advanced_url - computed: false, optional: true, required: false
  private _advancedUrl?: boolean | cdktf.IResolvable; 
  public get advancedUrl() {
    return this.getBooleanAttribute('advanced_url');
  }
  public set advancedUrl(value: boolean | cdktf.IResolvable) {
    this._advancedUrl = value;
  }
  public resetAdvancedUrl() {
    this._advancedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedUrlInput() {
    return this._advancedUrl;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // format_type - computed: false, optional: true, required: false
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  public resetFormatType() {
    this._formatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // ignore_certificate - computed: false, optional: true, required: false
  private _ignoreCertificate?: boolean | cdktf.IResolvable; 
  public get ignoreCertificate() {
    return this.getBooleanAttribute('ignore_certificate');
  }
  public set ignoreCertificate(value: boolean | cdktf.IResolvable) {
    this._ignoreCertificate = value;
  }
  public resetIgnoreCertificate() {
    this._ignoreCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateInput() {
    return this._ignoreCertificate;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // payload_format - computed: false, optional: true, required: false
  private _payloadFormat?: string; 
  public get payloadFormat() {
    return this.getStringAttribute('payload_format');
  }
  public set payloadFormat(value: string) {
    this._payloadFormat = value;
  }
  public resetPayloadFormat() {
    this._payloadFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFormatInput() {
    return this._payloadFormat;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ContinuousComplianceNotificationChangeDetectionWebhookDataList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationChangeDetectionWebhookData[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationChangeDetectionWebhookDataOutputReference {
    return new ContinuousComplianceNotificationChangeDetectionWebhookDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationChangeDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#aws_security_hub_integration_state ContinuousComplianceNotification#aws_security_hub_integration_state}
  */
  readonly awsSecurityHubIntegrationState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#email_per_finding_sending_state ContinuousComplianceNotification#email_per_finding_sending_state}
  */
  readonly emailPerFindingSendingState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#email_sending_state ContinuousComplianceNotification#email_sending_state}
  */
  readonly emailSendingState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#external_ticket_creating_state ContinuousComplianceNotification#external_ticket_creating_state}
  */
  readonly externalTicketCreatingState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#slack_integration_state ContinuousComplianceNotification#slack_integration_state}
  */
  readonly slackIntegrationState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#sns_sending_state ContinuousComplianceNotification#sns_sending_state}
  */
  readonly snsSendingState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#teams_integration_state ContinuousComplianceNotification#teams_integration_state}
  */
  readonly teamsIntegrationState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#webhook_integration_state ContinuousComplianceNotification#webhook_integration_state}
  */
  readonly webhookIntegrationState?: string;
  /**
  * aws_security_hub_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#aws_security_hub_integration ContinuousComplianceNotification#aws_security_hub_integration}
  */
  readonly awsSecurityHubIntegration?: ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration[] | cdktf.IResolvable;
  /**
  * email_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#email_data ContinuousComplianceNotification#email_data}
  */
  readonly emailData?: ContinuousComplianceNotificationChangeDetectionEmailData[] | cdktf.IResolvable;
  /**
  * email_per_finding_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#email_per_finding_data ContinuousComplianceNotification#email_per_finding_data}
  */
  readonly emailPerFindingData?: ContinuousComplianceNotificationChangeDetectionEmailPerFindingData[] | cdktf.IResolvable;
  /**
  * slack_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#slack_data ContinuousComplianceNotification#slack_data}
  */
  readonly slackData?: ContinuousComplianceNotificationChangeDetectionSlackData[] | cdktf.IResolvable;
  /**
  * sns_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#sns_data ContinuousComplianceNotification#sns_data}
  */
  readonly snsData?: ContinuousComplianceNotificationChangeDetectionSnsData[] | cdktf.IResolvable;
  /**
  * teams_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#teams_data ContinuousComplianceNotification#teams_data}
  */
  readonly teamsData?: ContinuousComplianceNotificationChangeDetectionTeamsData[] | cdktf.IResolvable;
  /**
  * ticketing_system_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#ticketing_system_data ContinuousComplianceNotification#ticketing_system_data}
  */
  readonly ticketingSystemData?: ContinuousComplianceNotificationChangeDetectionTicketingSystemData[] | cdktf.IResolvable;
  /**
  * webhook_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#webhook_data ContinuousComplianceNotification#webhook_data}
  */
  readonly webhookData?: ContinuousComplianceNotificationChangeDetectionWebhookData[] | cdktf.IResolvable;
}

export function continuousComplianceNotificationChangeDetectionToTerraform(struct?: ContinuousComplianceNotificationChangeDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_security_hub_integration_state: cdktf.stringToTerraform(struct!.awsSecurityHubIntegrationState),
    email_per_finding_sending_state: cdktf.stringToTerraform(struct!.emailPerFindingSendingState),
    email_sending_state: cdktf.stringToTerraform(struct!.emailSendingState),
    external_ticket_creating_state: cdktf.stringToTerraform(struct!.externalTicketCreatingState),
    slack_integration_state: cdktf.stringToTerraform(struct!.slackIntegrationState),
    sns_sending_state: cdktf.stringToTerraform(struct!.snsSendingState),
    teams_integration_state: cdktf.stringToTerraform(struct!.teamsIntegrationState),
    webhook_integration_state: cdktf.stringToTerraform(struct!.webhookIntegrationState),
    aws_security_hub_integration: cdktf.listMapper(continuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationToTerraform, true)(struct!.awsSecurityHubIntegration),
    email_data: cdktf.listMapper(continuousComplianceNotificationChangeDetectionEmailDataToTerraform, true)(struct!.emailData),
    email_per_finding_data: cdktf.listMapper(continuousComplianceNotificationChangeDetectionEmailPerFindingDataToTerraform, true)(struct!.emailPerFindingData),
    slack_data: cdktf.listMapper(continuousComplianceNotificationChangeDetectionSlackDataToTerraform, true)(struct!.slackData),
    sns_data: cdktf.listMapper(continuousComplianceNotificationChangeDetectionSnsDataToTerraform, true)(struct!.snsData),
    teams_data: cdktf.listMapper(continuousComplianceNotificationChangeDetectionTeamsDataToTerraform, true)(struct!.teamsData),
    ticketing_system_data: cdktf.listMapper(continuousComplianceNotificationChangeDetectionTicketingSystemDataToTerraform, true)(struct!.ticketingSystemData),
    webhook_data: cdktf.listMapper(continuousComplianceNotificationChangeDetectionWebhookDataToTerraform, true)(struct!.webhookData),
  }
}


export function continuousComplianceNotificationChangeDetectionToHclTerraform(struct?: ContinuousComplianceNotificationChangeDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_security_hub_integration_state: {
      value: cdktf.stringToHclTerraform(struct!.awsSecurityHubIntegrationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_per_finding_sending_state: {
      value: cdktf.stringToHclTerraform(struct!.emailPerFindingSendingState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_sending_state: {
      value: cdktf.stringToHclTerraform(struct!.emailSendingState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_ticket_creating_state: {
      value: cdktf.stringToHclTerraform(struct!.externalTicketCreatingState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slack_integration_state: {
      value: cdktf.stringToHclTerraform(struct!.slackIntegrationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_sending_state: {
      value: cdktf.stringToHclTerraform(struct!.snsSendingState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    teams_integration_state: {
      value: cdktf.stringToHclTerraform(struct!.teamsIntegrationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_integration_state: {
      value: cdktf.stringToHclTerraform(struct!.webhookIntegrationState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_security_hub_integration: {
      value: cdktf.listMapperHcl(continuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationToHclTerraform, true)(struct!.awsSecurityHubIntegration),
      isBlock: true,
      type: "set",
      storageClassType: "ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationList",
    },
    email_data: {
      value: cdktf.listMapperHcl(continuousComplianceNotificationChangeDetectionEmailDataToHclTerraform, true)(struct!.emailData),
      isBlock: true,
      type: "set",
      storageClassType: "ContinuousComplianceNotificationChangeDetectionEmailDataList",
    },
    email_per_finding_data: {
      value: cdktf.listMapperHcl(continuousComplianceNotificationChangeDetectionEmailPerFindingDataToHclTerraform, true)(struct!.emailPerFindingData),
      isBlock: true,
      type: "set",
      storageClassType: "ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataList",
    },
    slack_data: {
      value: cdktf.listMapperHcl(continuousComplianceNotificationChangeDetectionSlackDataToHclTerraform, true)(struct!.slackData),
      isBlock: true,
      type: "set",
      storageClassType: "ContinuousComplianceNotificationChangeDetectionSlackDataList",
    },
    sns_data: {
      value: cdktf.listMapperHcl(continuousComplianceNotificationChangeDetectionSnsDataToHclTerraform, true)(struct!.snsData),
      isBlock: true,
      type: "set",
      storageClassType: "ContinuousComplianceNotificationChangeDetectionSnsDataList",
    },
    teams_data: {
      value: cdktf.listMapperHcl(continuousComplianceNotificationChangeDetectionTeamsDataToHclTerraform, true)(struct!.teamsData),
      isBlock: true,
      type: "set",
      storageClassType: "ContinuousComplianceNotificationChangeDetectionTeamsDataList",
    },
    ticketing_system_data: {
      value: cdktf.listMapperHcl(continuousComplianceNotificationChangeDetectionTicketingSystemDataToHclTerraform, true)(struct!.ticketingSystemData),
      isBlock: true,
      type: "set",
      storageClassType: "ContinuousComplianceNotificationChangeDetectionTicketingSystemDataList",
    },
    webhook_data: {
      value: cdktf.listMapperHcl(continuousComplianceNotificationChangeDetectionWebhookDataToHclTerraform, true)(struct!.webhookData),
      isBlock: true,
      type: "set",
      storageClassType: "ContinuousComplianceNotificationChangeDetectionWebhookDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationChangeDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationChangeDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsSecurityHubIntegrationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecurityHubIntegrationState = this._awsSecurityHubIntegrationState;
    }
    if (this._emailPerFindingSendingState !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailPerFindingSendingState = this._emailPerFindingSendingState;
    }
    if (this._emailSendingState !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSendingState = this._emailSendingState;
    }
    if (this._externalTicketCreatingState !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTicketCreatingState = this._externalTicketCreatingState;
    }
    if (this._slackIntegrationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackIntegrationState = this._slackIntegrationState;
    }
    if (this._snsSendingState !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsSendingState = this._snsSendingState;
    }
    if (this._teamsIntegrationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamsIntegrationState = this._teamsIntegrationState;
    }
    if (this._webhookIntegrationState !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookIntegrationState = this._webhookIntegrationState;
    }
    if (this._awsSecurityHubIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecurityHubIntegration = this._awsSecurityHubIntegration?.internalValue;
    }
    if (this._emailData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailData = this._emailData?.internalValue;
    }
    if (this._emailPerFindingData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailPerFindingData = this._emailPerFindingData?.internalValue;
    }
    if (this._slackData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackData = this._slackData?.internalValue;
    }
    if (this._snsData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsData = this._snsData?.internalValue;
    }
    if (this._teamsData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamsData = this._teamsData?.internalValue;
    }
    if (this._ticketingSystemData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketingSystemData = this._ticketingSystemData?.internalValue;
    }
    if (this._webhookData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookData = this._webhookData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationChangeDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsSecurityHubIntegrationState = undefined;
      this._emailPerFindingSendingState = undefined;
      this._emailSendingState = undefined;
      this._externalTicketCreatingState = undefined;
      this._slackIntegrationState = undefined;
      this._snsSendingState = undefined;
      this._teamsIntegrationState = undefined;
      this._webhookIntegrationState = undefined;
      this._awsSecurityHubIntegration.internalValue = undefined;
      this._emailData.internalValue = undefined;
      this._emailPerFindingData.internalValue = undefined;
      this._slackData.internalValue = undefined;
      this._snsData.internalValue = undefined;
      this._teamsData.internalValue = undefined;
      this._ticketingSystemData.internalValue = undefined;
      this._webhookData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsSecurityHubIntegrationState = value.awsSecurityHubIntegrationState;
      this._emailPerFindingSendingState = value.emailPerFindingSendingState;
      this._emailSendingState = value.emailSendingState;
      this._externalTicketCreatingState = value.externalTicketCreatingState;
      this._slackIntegrationState = value.slackIntegrationState;
      this._snsSendingState = value.snsSendingState;
      this._teamsIntegrationState = value.teamsIntegrationState;
      this._webhookIntegrationState = value.webhookIntegrationState;
      this._awsSecurityHubIntegration.internalValue = value.awsSecurityHubIntegration;
      this._emailData.internalValue = value.emailData;
      this._emailPerFindingData.internalValue = value.emailPerFindingData;
      this._slackData.internalValue = value.slackData;
      this._snsData.internalValue = value.snsData;
      this._teamsData.internalValue = value.teamsData;
      this._ticketingSystemData.internalValue = value.ticketingSystemData;
      this._webhookData.internalValue = value.webhookData;
    }
  }

  // aws_security_hub_integration_state - computed: false, optional: true, required: false
  private _awsSecurityHubIntegrationState?: string; 
  public get awsSecurityHubIntegrationState() {
    return this.getStringAttribute('aws_security_hub_integration_state');
  }
  public set awsSecurityHubIntegrationState(value: string) {
    this._awsSecurityHubIntegrationState = value;
  }
  public resetAwsSecurityHubIntegrationState() {
    this._awsSecurityHubIntegrationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecurityHubIntegrationStateInput() {
    return this._awsSecurityHubIntegrationState;
  }

  // email_per_finding_sending_state - computed: false, optional: true, required: false
  private _emailPerFindingSendingState?: string; 
  public get emailPerFindingSendingState() {
    return this.getStringAttribute('email_per_finding_sending_state');
  }
  public set emailPerFindingSendingState(value: string) {
    this._emailPerFindingSendingState = value;
  }
  public resetEmailPerFindingSendingState() {
    this._emailPerFindingSendingState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPerFindingSendingStateInput() {
    return this._emailPerFindingSendingState;
  }

  // email_sending_state - computed: false, optional: true, required: false
  private _emailSendingState?: string; 
  public get emailSendingState() {
    return this.getStringAttribute('email_sending_state');
  }
  public set emailSendingState(value: string) {
    this._emailSendingState = value;
  }
  public resetEmailSendingState() {
    this._emailSendingState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSendingStateInput() {
    return this._emailSendingState;
  }

  // external_ticket_creating_state - computed: false, optional: true, required: false
  private _externalTicketCreatingState?: string; 
  public get externalTicketCreatingState() {
    return this.getStringAttribute('external_ticket_creating_state');
  }
  public set externalTicketCreatingState(value: string) {
    this._externalTicketCreatingState = value;
  }
  public resetExternalTicketCreatingState() {
    this._externalTicketCreatingState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTicketCreatingStateInput() {
    return this._externalTicketCreatingState;
  }

  // slack_integration_state - computed: false, optional: true, required: false
  private _slackIntegrationState?: string; 
  public get slackIntegrationState() {
    return this.getStringAttribute('slack_integration_state');
  }
  public set slackIntegrationState(value: string) {
    this._slackIntegrationState = value;
  }
  public resetSlackIntegrationState() {
    this._slackIntegrationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackIntegrationStateInput() {
    return this._slackIntegrationState;
  }

  // sns_sending_state - computed: false, optional: true, required: false
  private _snsSendingState?: string; 
  public get snsSendingState() {
    return this.getStringAttribute('sns_sending_state');
  }
  public set snsSendingState(value: string) {
    this._snsSendingState = value;
  }
  public resetSnsSendingState() {
    this._snsSendingState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsSendingStateInput() {
    return this._snsSendingState;
  }

  // teams_integration_state - computed: false, optional: true, required: false
  private _teamsIntegrationState?: string; 
  public get teamsIntegrationState() {
    return this.getStringAttribute('teams_integration_state');
  }
  public set teamsIntegrationState(value: string) {
    this._teamsIntegrationState = value;
  }
  public resetTeamsIntegrationState() {
    this._teamsIntegrationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsIntegrationStateInput() {
    return this._teamsIntegrationState;
  }

  // webhook_integration_state - computed: false, optional: true, required: false
  private _webhookIntegrationState?: string; 
  public get webhookIntegrationState() {
    return this.getStringAttribute('webhook_integration_state');
  }
  public set webhookIntegrationState(value: string) {
    this._webhookIntegrationState = value;
  }
  public resetWebhookIntegrationState() {
    this._webhookIntegrationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookIntegrationStateInput() {
    return this._webhookIntegrationState;
  }

  // aws_security_hub_integration - computed: false, optional: true, required: false
  private _awsSecurityHubIntegration = new ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationList(this, "aws_security_hub_integration", true);
  public get awsSecurityHubIntegration() {
    return this._awsSecurityHubIntegration;
  }
  public putAwsSecurityHubIntegration(value: ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration[] | cdktf.IResolvable) {
    this._awsSecurityHubIntegration.internalValue = value;
  }
  public resetAwsSecurityHubIntegration() {
    this._awsSecurityHubIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecurityHubIntegrationInput() {
    return this._awsSecurityHubIntegration.internalValue;
  }

  // email_data - computed: false, optional: true, required: false
  private _emailData = new ContinuousComplianceNotificationChangeDetectionEmailDataList(this, "email_data", true);
  public get emailData() {
    return this._emailData;
  }
  public putEmailData(value: ContinuousComplianceNotificationChangeDetectionEmailData[] | cdktf.IResolvable) {
    this._emailData.internalValue = value;
  }
  public resetEmailData() {
    this._emailData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDataInput() {
    return this._emailData.internalValue;
  }

  // email_per_finding_data - computed: false, optional: true, required: false
  private _emailPerFindingData = new ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataList(this, "email_per_finding_data", true);
  public get emailPerFindingData() {
    return this._emailPerFindingData;
  }
  public putEmailPerFindingData(value: ContinuousComplianceNotificationChangeDetectionEmailPerFindingData[] | cdktf.IResolvable) {
    this._emailPerFindingData.internalValue = value;
  }
  public resetEmailPerFindingData() {
    this._emailPerFindingData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPerFindingDataInput() {
    return this._emailPerFindingData.internalValue;
  }

  // slack_data - computed: false, optional: true, required: false
  private _slackData = new ContinuousComplianceNotificationChangeDetectionSlackDataList(this, "slack_data", true);
  public get slackData() {
    return this._slackData;
  }
  public putSlackData(value: ContinuousComplianceNotificationChangeDetectionSlackData[] | cdktf.IResolvable) {
    this._slackData.internalValue = value;
  }
  public resetSlackData() {
    this._slackData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackDataInput() {
    return this._slackData.internalValue;
  }

  // sns_data - computed: false, optional: true, required: false
  private _snsData = new ContinuousComplianceNotificationChangeDetectionSnsDataList(this, "sns_data", true);
  public get snsData() {
    return this._snsData;
  }
  public putSnsData(value: ContinuousComplianceNotificationChangeDetectionSnsData[] | cdktf.IResolvable) {
    this._snsData.internalValue = value;
  }
  public resetSnsData() {
    this._snsData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsDataInput() {
    return this._snsData.internalValue;
  }

  // teams_data - computed: false, optional: true, required: false
  private _teamsData = new ContinuousComplianceNotificationChangeDetectionTeamsDataList(this, "teams_data", true);
  public get teamsData() {
    return this._teamsData;
  }
  public putTeamsData(value: ContinuousComplianceNotificationChangeDetectionTeamsData[] | cdktf.IResolvable) {
    this._teamsData.internalValue = value;
  }
  public resetTeamsData() {
    this._teamsData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsDataInput() {
    return this._teamsData.internalValue;
  }

  // ticketing_system_data - computed: false, optional: true, required: false
  private _ticketingSystemData = new ContinuousComplianceNotificationChangeDetectionTicketingSystemDataList(this, "ticketing_system_data", true);
  public get ticketingSystemData() {
    return this._ticketingSystemData;
  }
  public putTicketingSystemData(value: ContinuousComplianceNotificationChangeDetectionTicketingSystemData[] | cdktf.IResolvable) {
    this._ticketingSystemData.internalValue = value;
  }
  public resetTicketingSystemData() {
    this._ticketingSystemData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketingSystemDataInput() {
    return this._ticketingSystemData.internalValue;
  }

  // webhook_data - computed: false, optional: true, required: false
  private _webhookData = new ContinuousComplianceNotificationChangeDetectionWebhookDataList(this, "webhook_data", true);
  public get webhookData() {
    return this._webhookData;
  }
  public putWebhookData(value: ContinuousComplianceNotificationChangeDetectionWebhookData[] | cdktf.IResolvable) {
    this._webhookData.internalValue = value;
  }
  public resetWebhookData() {
    this._webhookData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookDataInput() {
    return this._webhookData.internalValue;
  }
}

export class ContinuousComplianceNotificationChangeDetectionList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationChangeDetection[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationChangeDetectionOutputReference {
    return new ContinuousComplianceNotificationChangeDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#project_id ContinuousComplianceNotification#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#source_id ContinuousComplianceNotification#source_id}
  */
  readonly sourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#state ContinuousComplianceNotification#state}
  */
  readonly state?: string;
}

export function continuousComplianceNotificationGcpSecurityCommandCenterIntegrationToTerraform(struct?: ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function continuousComplianceNotificationGcpSecurityCommandCenterIntegrationToHclTerraform(struct?: ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._sourceId = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._sourceId = value.sourceId;
      this._state = value.state;
    }
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // source_id - computed: true, optional: true, required: false
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationOutputReference {
    return new ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationScheduledReportScheduleData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#cron_expression ContinuousComplianceNotification#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#recipients ContinuousComplianceNotification#recipients}
  */
  readonly recipients: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#type ContinuousComplianceNotification#type}
  */
  readonly type: string;
}

export function continuousComplianceNotificationScheduledReportScheduleDataToTerraform(struct?: ContinuousComplianceNotificationScheduledReportScheduleData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function continuousComplianceNotificationScheduledReportScheduleDataToHclTerraform(struct?: ContinuousComplianceNotificationScheduledReportScheduleData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationScheduledReportScheduleDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationScheduledReportScheduleData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationScheduledReportScheduleData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._recipients = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
      this._recipients = value.recipients;
      this._type = value.type;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ContinuousComplianceNotificationScheduledReportScheduleDataList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationScheduledReportScheduleData[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationScheduledReportScheduleDataOutputReference {
    return new ContinuousComplianceNotificationScheduledReportScheduleDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContinuousComplianceNotificationScheduledReport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#email_sending_state ContinuousComplianceNotification#email_sending_state}
  */
  readonly emailSendingState?: string;
  /**
  * schedule_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#schedule_data ContinuousComplianceNotification#schedule_data}
  */
  readonly scheduleData?: ContinuousComplianceNotificationScheduledReportScheduleData[] | cdktf.IResolvable;
}

export function continuousComplianceNotificationScheduledReportToTerraform(struct?: ContinuousComplianceNotificationScheduledReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_sending_state: cdktf.stringToTerraform(struct!.emailSendingState),
    schedule_data: cdktf.listMapper(continuousComplianceNotificationScheduledReportScheduleDataToTerraform, true)(struct!.scheduleData),
  }
}


export function continuousComplianceNotificationScheduledReportToHclTerraform(struct?: ContinuousComplianceNotificationScheduledReport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_sending_state: {
      value: cdktf.stringToHclTerraform(struct!.emailSendingState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_data: {
      value: cdktf.listMapperHcl(continuousComplianceNotificationScheduledReportScheduleDataToHclTerraform, true)(struct!.scheduleData),
      isBlock: true,
      type: "set",
      storageClassType: "ContinuousComplianceNotificationScheduledReportScheduleDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContinuousComplianceNotificationScheduledReportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContinuousComplianceNotificationScheduledReport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailSendingState !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSendingState = this._emailSendingState;
    }
    if (this._scheduleData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleData = this._scheduleData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContinuousComplianceNotificationScheduledReport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailSendingState = undefined;
      this._scheduleData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailSendingState = value.emailSendingState;
      this._scheduleData.internalValue = value.scheduleData;
    }
  }

  // email_sending_state - computed: false, optional: true, required: false
  private _emailSendingState?: string; 
  public get emailSendingState() {
    return this.getStringAttribute('email_sending_state');
  }
  public set emailSendingState(value: string) {
    this._emailSendingState = value;
  }
  public resetEmailSendingState() {
    this._emailSendingState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSendingStateInput() {
    return this._emailSendingState;
  }

  // schedule_data - computed: false, optional: true, required: false
  private _scheduleData = new ContinuousComplianceNotificationScheduledReportScheduleDataList(this, "schedule_data", true);
  public get scheduleData() {
    return this._scheduleData;
  }
  public putScheduleData(value: ContinuousComplianceNotificationScheduledReportScheduleData[] | cdktf.IResolvable) {
    this._scheduleData.internalValue = value;
  }
  public resetScheduleData() {
    this._scheduleData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleDataInput() {
    return this._scheduleData.internalValue;
  }
}

export class ContinuousComplianceNotificationScheduledReportList extends cdktf.ComplexList {
  public internalValue? : ContinuousComplianceNotificationScheduledReport[] | cdktf.IResolvable

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
  public get(index: number): ContinuousComplianceNotificationScheduledReportOutputReference {
    return new ContinuousComplianceNotificationScheduledReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification dome9_continuous_compliance_notification}
*/
export class ContinuousComplianceNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_continuous_compliance_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContinuousComplianceNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContinuousComplianceNotification to import
  * @param importFromId The id of the existing ContinuousComplianceNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContinuousComplianceNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_continuous_compliance_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/continuous_compliance_notification dome9_continuous_compliance_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContinuousComplianceNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: ContinuousComplianceNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_continuous_compliance_notification',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertsConsole = config.alertsConsole;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._changeDetection.internalValue = config.changeDetection;
    this._gcpSecurityCommandCenterIntegration.internalValue = config.gcpSecurityCommandCenterIntegration;
    this._scheduledReport.internalValue = config.scheduledReport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_console - computed: true, optional: true, required: false
  private _alertsConsole?: boolean | cdktf.IResolvable; 
  public get alertsConsole() {
    return this.getBooleanAttribute('alerts_console');
  }
  public set alertsConsole(value: boolean | cdktf.IResolvable) {
    this._alertsConsole = value;
  }
  public resetAlertsConsole() {
    this._alertsConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsConsoleInput() {
    return this._alertsConsole;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // change_detection - computed: false, optional: false, required: true
  private _changeDetection = new ContinuousComplianceNotificationChangeDetectionList(this, "change_detection", true);
  public get changeDetection() {
    return this._changeDetection;
  }
  public putChangeDetection(value: ContinuousComplianceNotificationChangeDetection[] | cdktf.IResolvable) {
    this._changeDetection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get changeDetectionInput() {
    return this._changeDetection.internalValue;
  }

  // gcp_security_command_center_integration - computed: false, optional: true, required: false
  private _gcpSecurityCommandCenterIntegration = new ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationList(this, "gcp_security_command_center_integration", true);
  public get gcpSecurityCommandCenterIntegration() {
    return this._gcpSecurityCommandCenterIntegration;
  }
  public putGcpSecurityCommandCenterIntegration(value: ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration[] | cdktf.IResolvable) {
    this._gcpSecurityCommandCenterIntegration.internalValue = value;
  }
  public resetGcpSecurityCommandCenterIntegration() {
    this._gcpSecurityCommandCenterIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecurityCommandCenterIntegrationInput() {
    return this._gcpSecurityCommandCenterIntegration.internalValue;
  }

  // scheduled_report - computed: false, optional: true, required: false
  private _scheduledReport = new ContinuousComplianceNotificationScheduledReportList(this, "scheduled_report", true);
  public get scheduledReport() {
    return this._scheduledReport;
  }
  public putScheduledReport(value: ContinuousComplianceNotificationScheduledReport[] | cdktf.IResolvable) {
    this._scheduledReport.internalValue = value;
  }
  public resetScheduledReport() {
    this._scheduledReport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledReportInput() {
    return this._scheduledReport.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts_console: cdktf.booleanToTerraform(this._alertsConsole),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      change_detection: cdktf.listMapper(continuousComplianceNotificationChangeDetectionToTerraform, true)(this._changeDetection.internalValue),
      gcp_security_command_center_integration: cdktf.listMapper(continuousComplianceNotificationGcpSecurityCommandCenterIntegrationToTerraform, true)(this._gcpSecurityCommandCenterIntegration.internalValue),
      scheduled_report: cdktf.listMapper(continuousComplianceNotificationScheduledReportToTerraform, true)(this._scheduledReport.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts_console: {
        value: cdktf.booleanToHclTerraform(this._alertsConsole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_detection: {
        value: cdktf.listMapperHcl(continuousComplianceNotificationChangeDetectionToHclTerraform, true)(this._changeDetection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContinuousComplianceNotificationChangeDetectionList",
      },
      gcp_security_command_center_integration: {
        value: cdktf.listMapperHcl(continuousComplianceNotificationGcpSecurityCommandCenterIntegrationToHclTerraform, true)(this._gcpSecurityCommandCenterIntegration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationList",
      },
      scheduled_report: {
        value: cdktf.listMapperHcl(continuousComplianceNotificationScheduledReportToHclTerraform, true)(this._scheduledReport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContinuousComplianceNotificationScheduledReportList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
