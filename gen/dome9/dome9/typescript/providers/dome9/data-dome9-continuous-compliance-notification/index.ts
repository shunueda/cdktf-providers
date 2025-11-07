// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/continuous_compliance_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDome9ContinuousComplianceNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/continuous_compliance_notification#id DataDome9ContinuousComplianceNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration {
}

export function dataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationToTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_account_id - computed: true, optional: false, required: false
  public get externalAccountId() {
    return this.getStringAttribute('external_account_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationOutputReference {
    return new DataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationChangeDetectionEmailData {
}

export function dataDome9ContinuousComplianceNotificationChangeDetectionEmailDataToTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionEmailData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationChangeDetectionEmailDataToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionEmailData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionEmailDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationChangeDetectionEmailData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationChangeDetectionEmailData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return this.getListAttribute('recipients');
  }
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionEmailDataList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationChangeDetectionEmailDataOutputReference {
    return new DataDome9ContinuousComplianceNotificationChangeDetectionEmailDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingData {
}

export function dataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataToTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notification_output_format - computed: true, optional: false, required: false
  public get notificationOutputFormat() {
    return this.getStringAttribute('notification_output_format');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return this.getListAttribute('recipients');
  }
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataOutputReference {
    return new DataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationChangeDetectionSlackData {
}

export function dataDome9ContinuousComplianceNotificationChangeDetectionSlackDataToTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionSlackData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationChangeDetectionSlackDataToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionSlackData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionSlackDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationChangeDetectionSlackData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationChangeDetectionSlackData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionSlackDataList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationChangeDetectionSlackDataOutputReference {
    return new DataDome9ContinuousComplianceNotificationChangeDetectionSlackDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationChangeDetectionSnsData {
}

export function dataDome9ContinuousComplianceNotificationChangeDetectionSnsDataToTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionSnsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationChangeDetectionSnsDataToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionSnsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionSnsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationChangeDetectionSnsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationChangeDetectionSnsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sns_output_format - computed: true, optional: false, required: false
  public get snsOutputFormat() {
    return this.getStringAttribute('sns_output_format');
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionSnsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationChangeDetectionSnsDataOutputReference {
    return new DataDome9ContinuousComplianceNotificationChangeDetectionSnsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationChangeDetectionTeamsData {
}

export function dataDome9ContinuousComplianceNotificationChangeDetectionTeamsDataToTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionTeamsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationChangeDetectionTeamsDataToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionTeamsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionTeamsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationChangeDetectionTeamsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationChangeDetectionTeamsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionTeamsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationChangeDetectionTeamsDataOutputReference {
    return new DataDome9ContinuousComplianceNotificationChangeDetectionTeamsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemData {
}

export function dataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemDataToTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemDataToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // issue_type - computed: true, optional: false, required: false
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }

  // pass - computed: true, optional: false, required: false
  public get pass() {
    return this.getStringAttribute('pass');
  }

  // project_key - computed: true, optional: false, required: false
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }

  // should_close_tickets - computed: true, optional: false, required: false
  public get shouldCloseTickets() {
    return this.getBooleanAttribute('should_close_tickets');
  }

  // system_type - computed: true, optional: false, required: false
  public get systemType() {
    return this.getStringAttribute('system_type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemDataList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemDataOutputReference {
    return new DataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationChangeDetectionWebhookData {
}

export function dataDome9ContinuousComplianceNotificationChangeDetectionWebhookDataToTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionWebhookData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationChangeDetectionWebhookDataToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetectionWebhookData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionWebhookDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationChangeDetectionWebhookData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationChangeDetectionWebhookData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_url - computed: true, optional: false, required: false
  public get advancedUrl() {
    return this.getBooleanAttribute('advanced_url');
  }

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }

  // format_type - computed: true, optional: false, required: false
  public get formatType() {
    return this.getStringAttribute('format_type');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // ignore_certificate - computed: true, optional: false, required: false
  public get ignoreCertificate() {
    return this.getBooleanAttribute('ignore_certificate');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // payload_format - computed: true, optional: false, required: false
  public get payloadFormat() {
    return this.getStringAttribute('payload_format');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionWebhookDataList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationChangeDetectionWebhookDataOutputReference {
    return new DataDome9ContinuousComplianceNotificationChangeDetectionWebhookDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationChangeDetection {
}

export function dataDome9ContinuousComplianceNotificationChangeDetectionToTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationChangeDetectionToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationChangeDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationChangeDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationChangeDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_security_hub_integration - computed: true, optional: false, required: false
  private _awsSecurityHubIntegration = new DataDome9ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegrationList(this, "aws_security_hub_integration", true);
  public get awsSecurityHubIntegration() {
    return this._awsSecurityHubIntegration;
  }

  // aws_security_hub_integration_state - computed: true, optional: false, required: false
  public get awsSecurityHubIntegrationState() {
    return this.getStringAttribute('aws_security_hub_integration_state');
  }

  // email_data - computed: true, optional: false, required: false
  private _emailData = new DataDome9ContinuousComplianceNotificationChangeDetectionEmailDataList(this, "email_data", true);
  public get emailData() {
    return this._emailData;
  }

  // email_per_finding_data - computed: true, optional: false, required: false
  private _emailPerFindingData = new DataDome9ContinuousComplianceNotificationChangeDetectionEmailPerFindingDataList(this, "email_per_finding_data", true);
  public get emailPerFindingData() {
    return this._emailPerFindingData;
  }

  // email_per_finding_sending_state - computed: true, optional: false, required: false
  public get emailPerFindingSendingState() {
    return this.getStringAttribute('email_per_finding_sending_state');
  }

  // email_sending_state - computed: true, optional: false, required: false
  public get emailSendingState() {
    return this.getStringAttribute('email_sending_state');
  }

  // external_ticket_creating_state - computed: true, optional: false, required: false
  public get externalTicketCreatingState() {
    return this.getStringAttribute('external_ticket_creating_state');
  }

  // slack_data - computed: true, optional: false, required: false
  private _slackData = new DataDome9ContinuousComplianceNotificationChangeDetectionSlackDataList(this, "slack_data", true);
  public get slackData() {
    return this._slackData;
  }

  // slack_integration_state - computed: true, optional: false, required: false
  public get slackIntegrationState() {
    return this.getStringAttribute('slack_integration_state');
  }

  // sns_data - computed: true, optional: false, required: false
  private _snsData = new DataDome9ContinuousComplianceNotificationChangeDetectionSnsDataList(this, "sns_data", true);
  public get snsData() {
    return this._snsData;
  }

  // sns_sending_state - computed: true, optional: false, required: false
  public get snsSendingState() {
    return this.getStringAttribute('sns_sending_state');
  }

  // teams_data - computed: true, optional: false, required: false
  private _teamsData = new DataDome9ContinuousComplianceNotificationChangeDetectionTeamsDataList(this, "teams_data", true);
  public get teamsData() {
    return this._teamsData;
  }

  // teams_integration_state - computed: true, optional: false, required: false
  public get teamsIntegrationState() {
    return this.getStringAttribute('teams_integration_state');
  }

  // ticketing_system_data - computed: true, optional: false, required: false
  private _ticketingSystemData = new DataDome9ContinuousComplianceNotificationChangeDetectionTicketingSystemDataList(this, "ticketing_system_data", true);
  public get ticketingSystemData() {
    return this._ticketingSystemData;
  }

  // webhook_data - computed: true, optional: false, required: false
  private _webhookData = new DataDome9ContinuousComplianceNotificationChangeDetectionWebhookDataList(this, "webhook_data", true);
  public get webhookData() {
    return this._webhookData;
  }

  // webhook_integration_state - computed: true, optional: false, required: false
  public get webhookIntegrationState() {
    return this.getStringAttribute('webhook_integration_state');
  }
}

export class DataDome9ContinuousComplianceNotificationChangeDetectionList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationChangeDetectionOutputReference {
    return new DataDome9ContinuousComplianceNotificationChangeDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration {
}

export function dataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationToTerraform(struct?: DataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationOutputReference {
    return new DataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationScheduledReportScheduleData {
}

export function dataDome9ContinuousComplianceNotificationScheduledReportScheduleDataToTerraform(struct?: DataDome9ContinuousComplianceNotificationScheduledReportScheduleData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationScheduledReportScheduleDataToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationScheduledReportScheduleData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationScheduledReportScheduleDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationScheduledReportScheduleData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationScheduledReportScheduleData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron_expression - computed: true, optional: false, required: false
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return this.getListAttribute('recipients');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDome9ContinuousComplianceNotificationScheduledReportScheduleDataList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationScheduledReportScheduleDataOutputReference {
    return new DataDome9ContinuousComplianceNotificationScheduledReportScheduleDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDome9ContinuousComplianceNotificationScheduledReport {
}

export function dataDome9ContinuousComplianceNotificationScheduledReportToTerraform(struct?: DataDome9ContinuousComplianceNotificationScheduledReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDome9ContinuousComplianceNotificationScheduledReportToHclTerraform(struct?: DataDome9ContinuousComplianceNotificationScheduledReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDome9ContinuousComplianceNotificationScheduledReportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDome9ContinuousComplianceNotificationScheduledReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDome9ContinuousComplianceNotificationScheduledReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_sending_state - computed: true, optional: false, required: false
  public get emailSendingState() {
    return this.getStringAttribute('email_sending_state');
  }

  // schedule_data - computed: true, optional: false, required: false
  private _scheduleData = new DataDome9ContinuousComplianceNotificationScheduledReportScheduleDataList(this, "schedule_data", true);
  public get scheduleData() {
    return this._scheduleData;
  }
}

export class DataDome9ContinuousComplianceNotificationScheduledReportList extends cdktf.ComplexList {

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
  public get(index: number): DataDome9ContinuousComplianceNotificationScheduledReportOutputReference {
    return new DataDome9ContinuousComplianceNotificationScheduledReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/continuous_compliance_notification dome9_continuous_compliance_notification}
*/
export class DataDome9ContinuousComplianceNotification extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_continuous_compliance_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDome9ContinuousComplianceNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDome9ContinuousComplianceNotification to import
  * @param importFromId The id of the existing DataDome9ContinuousComplianceNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/continuous_compliance_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDome9ContinuousComplianceNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_continuous_compliance_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/data-sources/continuous_compliance_notification dome9_continuous_compliance_notification} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDome9ContinuousComplianceNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: DataDome9ContinuousComplianceNotificationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_console - computed: true, optional: false, required: false
  public get alertsConsole() {
    return this.getBooleanAttribute('alerts_console');
  }

  // change_detection - computed: true, optional: false, required: false
  private _changeDetection = new DataDome9ContinuousComplianceNotificationChangeDetectionList(this, "change_detection", true);
  public get changeDetection() {
    return this._changeDetection;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // gcp_security_command_center_integration - computed: true, optional: false, required: false
  private _gcpSecurityCommandCenterIntegration = new DataDome9ContinuousComplianceNotificationGcpSecurityCommandCenterIntegrationList(this, "gcp_security_command_center_integration", true);
  public get gcpSecurityCommandCenterIntegration() {
    return this._gcpSecurityCommandCenterIntegration;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scheduled_report - computed: true, optional: false, required: false
  private _scheduledReport = new DataDome9ContinuousComplianceNotificationScheduledReportList(this, "scheduled_report", true);
  public get scheduledReport() {
    return this._scheduledReport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
