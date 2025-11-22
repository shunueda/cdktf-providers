// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricCloudRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customer-provided Fabric Cloud Router description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#description FabricCloudRouter#description}
  */
  readonly description?: string;
  /**
  * Fabric Cloud Router URI information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#href FabricCloudRouter#href}
  */
  readonly href?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#id FabricCloudRouter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Fabric Cloud Router name. An alpha-numeric 24 characters string which can include only hyphens and underscores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#name FabricCloudRouter#name}
  */
  readonly name: string;
  /**
  * Defines the FCR type like; XF_ROUTER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#type FabricCloudRouter#type}
  */
  readonly type: string;
  /**
  * Equinix-assigned Fabric Cloud Router identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#uuid FabricCloudRouter#uuid}
  */
  readonly uuid?: string;
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#account FabricCloudRouter#account}
  */
  readonly account?: FabricCloudRouterAccount;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#location FabricCloudRouter#location}
  */
  readonly location: FabricCloudRouterLocation;
  /**
  * marketplace_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#marketplace_subscription FabricCloudRouter#marketplace_subscription}
  */
  readonly marketplaceSubscription?: FabricCloudRouterMarketplaceSubscription;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#notifications FabricCloudRouter#notifications}
  */
  readonly notifications: FabricCloudRouterNotifications[] | cdktf.IResolvable;
  /**
  * order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#order FabricCloudRouter#order}
  */
  readonly order?: FabricCloudRouterOrder;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#package FabricCloudRouter#package}
  */
  readonly package: FabricCloudRouterPackage;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#project FabricCloudRouter#project}
  */
  readonly project: FabricCloudRouterProject;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#timeouts FabricCloudRouter#timeouts}
  */
  readonly timeouts?: FabricCloudRouterTimeouts;
}
export interface FabricCloudRouterChangeLog {
}

export function fabricCloudRouterChangeLogToTerraform(struct?: FabricCloudRouterChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricCloudRouterChangeLogToHclTerraform(struct?: FabricCloudRouterChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricCloudRouterChangeLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricCloudRouterChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricCloudRouterChangeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_full_name - computed: true, optional: false, required: false
  public get createdByFullName() {
    return this.getStringAttribute('created_by_full_name');
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // deleted_by - computed: true, optional: false, required: false
  public get deletedBy() {
    return this.getStringAttribute('deleted_by');
  }

  // deleted_by_email - computed: true, optional: false, required: false
  public get deletedByEmail() {
    return this.getStringAttribute('deleted_by_email');
  }

  // deleted_by_full_name - computed: true, optional: false, required: false
  public get deletedByFullName() {
    return this.getStringAttribute('deleted_by_full_name');
  }

  // deleted_date_time - computed: true, optional: false, required: false
  public get deletedDateTime() {
    return this.getStringAttribute('deleted_date_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_email - computed: true, optional: false, required: false
  public get updatedByEmail() {
    return this.getStringAttribute('updated_by_email');
  }

  // updated_by_full_name - computed: true, optional: false, required: false
  public get updatedByFullName() {
    return this.getStringAttribute('updated_by_full_name');
  }

  // updated_date_time - computed: true, optional: false, required: false
  public get updatedDateTime() {
    return this.getStringAttribute('updated_date_time');
  }
}

export class FabricCloudRouterChangeLogList extends cdktf.ComplexList {

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
  public get(index: number): FabricCloudRouterChangeLogOutputReference {
    return new FabricCloudRouterChangeLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricCloudRouterAccount {
  /**
  * Account Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#account_number FabricCloudRouter#account_number}
  */
  readonly accountNumber: number;
}

export function fabricCloudRouterAccountToTerraform(struct?: FabricCloudRouterAccountOutputReference | FabricCloudRouterAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_number: cdktf.numberToTerraform(struct!.accountNumber),
  }
}


export function fabricCloudRouterAccountToHclTerraform(struct?: FabricCloudRouterAccountOutputReference | FabricCloudRouterAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_number: {
      value: cdktf.numberToHclTerraform(struct!.accountNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricCloudRouterAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricCloudRouterAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricCloudRouterAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountNumber = value.accountNumber;
    }
  }

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: number; 
  public get accountNumber() {
    return this.getNumberAttribute('account_number');
  }
  public set accountNumber(value: number) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }
}
export interface FabricCloudRouterLocation {
  /**
  * IBX Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#ibx FabricCloudRouter#ibx}
  */
  readonly ibx?: string;
  /**
  * Access point metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#metro_code FabricCloudRouter#metro_code}
  */
  readonly metroCode?: string;
  /**
  * Access point metro name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#metro_name FabricCloudRouter#metro_name}
  */
  readonly metroName?: string;
  /**
  * Access point region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#region FabricCloudRouter#region}
  */
  readonly region?: string;
}

export function fabricCloudRouterLocationToTerraform(struct?: FabricCloudRouterLocationOutputReference | FabricCloudRouterLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ibx: cdktf.stringToTerraform(struct!.ibx),
    metro_code: cdktf.stringToTerraform(struct!.metroCode),
    metro_name: cdktf.stringToTerraform(struct!.metroName),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function fabricCloudRouterLocationToHclTerraform(struct?: FabricCloudRouterLocationOutputReference | FabricCloudRouterLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ibx: {
      value: cdktf.stringToHclTerraform(struct!.ibx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_code: {
      value: cdktf.stringToHclTerraform(struct!.metroCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_name: {
      value: cdktf.stringToHclTerraform(struct!.metroName),
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

export class FabricCloudRouterLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricCloudRouterLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ibx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibx = this._ibx;
    }
    if (this._metroCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroCode = this._metroCode;
    }
    if (this._metroName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroName = this._metroName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricCloudRouterLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ibx = undefined;
      this._metroCode = undefined;
      this._metroName = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ibx = value.ibx;
      this._metroCode = value.metroCode;
      this._metroName = value.metroName;
      this._region = value.region;
    }
  }

  // ibx - computed: true, optional: true, required: false
  private _ibx?: string; 
  public get ibx() {
    return this.getStringAttribute('ibx');
  }
  public set ibx(value: string) {
    this._ibx = value;
  }
  public resetIbx() {
    this._ibx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibxInput() {
    return this._ibx;
  }

  // metro_code - computed: true, optional: true, required: false
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  public resetMetroCode() {
    this._metroCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }

  // metro_name - computed: true, optional: true, required: false
  private _metroName?: string; 
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }
  public set metroName(value: string) {
    this._metroName = value;
  }
  public resetMetroName() {
    this._metroName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroNameInput() {
    return this._metroName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface FabricCloudRouterMarketplaceSubscription {
  /**
  * Marketplace Subscription type like; AWS_MARKETPLACE_SUBSCRIPTION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#type FabricCloudRouter#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned Marketplace Subscription identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#uuid FabricCloudRouter#uuid}
  */
  readonly uuid: string;
}

export function fabricCloudRouterMarketplaceSubscriptionToTerraform(struct?: FabricCloudRouterMarketplaceSubscriptionOutputReference | FabricCloudRouterMarketplaceSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricCloudRouterMarketplaceSubscriptionToHclTerraform(struct?: FabricCloudRouterMarketplaceSubscriptionOutputReference | FabricCloudRouterMarketplaceSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricCloudRouterMarketplaceSubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricCloudRouterMarketplaceSubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricCloudRouterMarketplaceSubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FabricCloudRouterNotifications {
  /**
  * Array of contact emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#emails FabricCloudRouter#emails}
  */
  readonly emails: string[];
  /**
  * Send interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#send_interval FabricCloudRouter#send_interval}
  */
  readonly sendInterval?: string;
  /**
  * Notification Type - ALL,CONNECTION_APPROVAL,SALES_REP_NOTIFICATIONS, NOTIFICATIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#type FabricCloudRouter#type}
  */
  readonly type: string;
}

export function fabricCloudRouterNotificationsToTerraform(struct?: FabricCloudRouterNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
    send_interval: cdktf.stringToTerraform(struct!.sendInterval),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fabricCloudRouterNotificationsToHclTerraform(struct?: FabricCloudRouterNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send_interval: {
      value: cdktf.stringToHclTerraform(struct!.sendInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class FabricCloudRouterNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricCloudRouterNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    if (this._sendInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendInterval = this._sendInterval;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricCloudRouterNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emails = undefined;
      this._sendInterval = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emails = value.emails;
      this._sendInterval = value.sendInterval;
      this._type = value.type;
    }
  }

  // emails - computed: false, optional: false, required: true
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // send_interval - computed: false, optional: true, required: false
  private _sendInterval?: string; 
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }
  public set sendInterval(value: string) {
    this._sendInterval = value;
  }
  public resetSendInterval() {
    this._sendInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIntervalInput() {
    return this._sendInterval;
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

export class FabricCloudRouterNotificationsList extends cdktf.ComplexList {
  public internalValue? : FabricCloudRouterNotifications[] | cdktf.IResolvable

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
  public get(index: number): FabricCloudRouterNotificationsOutputReference {
    return new FabricCloudRouterNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricCloudRouterOrder {
  /**
  * Billing tier for connection bandwidth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#billing_tier FabricCloudRouter#billing_tier}
  */
  readonly billingTier?: string;
  /**
  * Order Identification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#order_id FabricCloudRouter#order_id}
  */
  readonly orderId?: string;
  /**
  * Order Reference Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#order_number FabricCloudRouter#order_number}
  */
  readonly orderNumber?: string;
  /**
  * Purchase order number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#purchase_order_number FabricCloudRouter#purchase_order_number}
  */
  readonly purchaseOrderNumber?: string;
  /**
  * Term length in months; valid values are 1, 12, 24, 36 where 1 is the default value (for on-demand case)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#term_length FabricCloudRouter#term_length}
  */
  readonly termLength?: number;
}

export function fabricCloudRouterOrderToTerraform(struct?: FabricCloudRouterOrderOutputReference | FabricCloudRouterOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_tier: cdktf.stringToTerraform(struct!.billingTier),
    order_id: cdktf.stringToTerraform(struct!.orderId),
    order_number: cdktf.stringToTerraform(struct!.orderNumber),
    purchase_order_number: cdktf.stringToTerraform(struct!.purchaseOrderNumber),
    term_length: cdktf.numberToTerraform(struct!.termLength),
  }
}


export function fabricCloudRouterOrderToHclTerraform(struct?: FabricCloudRouterOrderOutputReference | FabricCloudRouterOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_tier: {
      value: cdktf.stringToHclTerraform(struct!.billingTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_id: {
      value: cdktf.stringToHclTerraform(struct!.orderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_number: {
      value: cdktf.stringToHclTerraform(struct!.orderNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purchase_order_number: {
      value: cdktf.stringToHclTerraform(struct!.purchaseOrderNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    term_length: {
      value: cdktf.numberToHclTerraform(struct!.termLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricCloudRouterOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricCloudRouterOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingTier = this._billingTier;
    }
    if (this._orderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderId = this._orderId;
    }
    if (this._orderNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderNumber = this._orderNumber;
    }
    if (this._purchaseOrderNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.purchaseOrderNumber = this._purchaseOrderNumber;
    }
    if (this._termLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.termLength = this._termLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricCloudRouterOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._billingTier = undefined;
      this._orderId = undefined;
      this._orderNumber = undefined;
      this._purchaseOrderNumber = undefined;
      this._termLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._billingTier = value.billingTier;
      this._orderId = value.orderId;
      this._orderNumber = value.orderNumber;
      this._purchaseOrderNumber = value.purchaseOrderNumber;
      this._termLength = value.termLength;
    }
  }

  // billing_tier - computed: true, optional: true, required: false
  private _billingTier?: string; 
  public get billingTier() {
    return this.getStringAttribute('billing_tier');
  }
  public set billingTier(value: string) {
    this._billingTier = value;
  }
  public resetBillingTier() {
    this._billingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTierInput() {
    return this._billingTier;
  }

  // order_id - computed: true, optional: true, required: false
  private _orderId?: string; 
  public get orderId() {
    return this.getStringAttribute('order_id');
  }
  public set orderId(value: string) {
    this._orderId = value;
  }
  public resetOrderId() {
    this._orderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId;
  }

  // order_number - computed: true, optional: true, required: false
  private _orderNumber?: string; 
  public get orderNumber() {
    return this.getStringAttribute('order_number');
  }
  public set orderNumber(value: string) {
    this._orderNumber = value;
  }
  public resetOrderNumber() {
    this._orderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderNumberInput() {
    return this._orderNumber;
  }

  // purchase_order_number - computed: true, optional: true, required: false
  private _purchaseOrderNumber?: string; 
  public get purchaseOrderNumber() {
    return this.getStringAttribute('purchase_order_number');
  }
  public set purchaseOrderNumber(value: string) {
    this._purchaseOrderNumber = value;
  }
  public resetPurchaseOrderNumber() {
    this._purchaseOrderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purchaseOrderNumberInput() {
    return this._purchaseOrderNumber;
  }

  // term_length - computed: false, optional: true, required: false
  private _termLength?: number; 
  public get termLength() {
    return this.getNumberAttribute('term_length');
  }
  public set termLength(value: number) {
    this._termLength = value;
  }
  public resetTermLength() {
    this._termLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termLengthInput() {
    return this._termLength;
  }
}
export interface FabricCloudRouterPackage {
  /**
  * Fabric Cloud Router package code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#code FabricCloudRouter#code}
  */
  readonly code: string;
}

export function fabricCloudRouterPackageToTerraform(struct?: FabricCloudRouterPackageOutputReference | FabricCloudRouterPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
  }
}


export function fabricCloudRouterPackageToHclTerraform(struct?: FabricCloudRouterPackageOutputReference | FabricCloudRouterPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricCloudRouterPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricCloudRouterPackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricCloudRouterPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }
}
export interface FabricCloudRouterProject {
  /**
  * Unique Resource URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#href FabricCloudRouter#href}
  */
  readonly href?: string;
  /**
  * Project Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#project_id FabricCloudRouter#project_id}
  */
  readonly projectId?: string;
}

export function fabricCloudRouterProjectToTerraform(struct?: FabricCloudRouterProjectOutputReference | FabricCloudRouterProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function fabricCloudRouterProjectToHclTerraform(struct?: FabricCloudRouterProjectOutputReference | FabricCloudRouterProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricCloudRouterProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricCloudRouterProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricCloudRouterProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
      this._projectId = value.projectId;
    }
  }

  // href - computed: true, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
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
}
export interface FabricCloudRouterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#create FabricCloudRouter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#delete FabricCloudRouter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#read FabricCloudRouter#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#update FabricCloudRouter#update}
  */
  readonly update?: string;
}

export function fabricCloudRouterTimeoutsToTerraform(struct?: FabricCloudRouterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fabricCloudRouterTimeoutsToHclTerraform(struct?: FabricCloudRouterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricCloudRouterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricCloudRouterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricCloudRouterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router equinix_fabric_cloud_router}
*/
export class FabricCloudRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_cloud_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricCloudRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricCloudRouter to import
  * @param importFromId The id of the existing FabricCloudRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricCloudRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_cloud_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/fabric_cloud_router equinix_fabric_cloud_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricCloudRouterConfig
  */
  public constructor(scope: Construct, id: string, config: FabricCloudRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_cloud_router',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._href = config.href;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._uuid = config.uuid;
    this._account.internalValue = config.account;
    this._location.internalValue = config.location;
    this._marketplaceSubscription.internalValue = config.marketplaceSubscription;
    this._notifications.internalValue = config.notifications;
    this._order.internalValue = config.order;
    this._package.internalValue = config.package;
    this._project.internalValue = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new FabricCloudRouterChangeLogList(this, "change_log", true);
  public get changeLog() {
    return this._changeLog;
  }

  // connections_count - computed: true, optional: false, required: false
  public get connectionsCount() {
    return this.getNumberAttribute('connections_count');
  }

  // description - computed: false, optional: true, required: false
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

  // equinix_asn - computed: true, optional: false, required: false
  public get equinixAsn() {
    return this.getNumberAttribute('equinix_asn');
  }

  // gateway_attachments_count - computed: true, optional: false, required: false
  public get gatewayAttachmentsCount() {
    return this.getNumberAttribute('gateway_attachments_count');
  }

  // href - computed: true, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // account - computed: false, optional: true, required: false
  private _account = new FabricCloudRouterAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }
  public putAccount(value: FabricCloudRouterAccount) {
    this._account.internalValue = value;
  }
  public resetAccount() {
    this._account.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new FabricCloudRouterLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: FabricCloudRouterLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // marketplace_subscription - computed: false, optional: true, required: false
  private _marketplaceSubscription = new FabricCloudRouterMarketplaceSubscriptionOutputReference(this, "marketplace_subscription");
  public get marketplaceSubscription() {
    return this._marketplaceSubscription;
  }
  public putMarketplaceSubscription(value: FabricCloudRouterMarketplaceSubscription) {
    this._marketplaceSubscription.internalValue = value;
  }
  public resetMarketplaceSubscription() {
    this._marketplaceSubscription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketplaceSubscriptionInput() {
    return this._marketplaceSubscription.internalValue;
  }

  // notifications - computed: false, optional: false, required: true
  private _notifications = new FabricCloudRouterNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: FabricCloudRouterNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // order - computed: false, optional: true, required: false
  private _order = new FabricCloudRouterOrderOutputReference(this, "order");
  public get order() {
    return this._order;
  }
  public putOrder(value: FabricCloudRouterOrder) {
    this._order.internalValue = value;
  }
  public resetOrder() {
    this._order.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order.internalValue;
  }

  // package - computed: false, optional: false, required: true
  private _package = new FabricCloudRouterPackageOutputReference(this, "package");
  public get package() {
    return this._package;
  }
  public putPackage(value: FabricCloudRouterPackage) {
    this._package.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // project - computed: false, optional: false, required: true
  private _project = new FabricCloudRouterProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: FabricCloudRouterProject) {
    this._project.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FabricCloudRouterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FabricCloudRouterTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      href: cdktf.stringToTerraform(this._href),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      account: fabricCloudRouterAccountToTerraform(this._account.internalValue),
      location: fabricCloudRouterLocationToTerraform(this._location.internalValue),
      marketplace_subscription: fabricCloudRouterMarketplaceSubscriptionToTerraform(this._marketplaceSubscription.internalValue),
      notifications: cdktf.listMapper(fabricCloudRouterNotificationsToTerraform, true)(this._notifications.internalValue),
      order: fabricCloudRouterOrderToTerraform(this._order.internalValue),
      package: fabricCloudRouterPackageToTerraform(this._package.internalValue),
      project: fabricCloudRouterProjectToTerraform(this._project.internalValue),
      timeouts: fabricCloudRouterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      href: {
        value: cdktf.stringToHclTerraform(this._href),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account: {
        value: fabricCloudRouterAccountToHclTerraform(this._account.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricCloudRouterAccountList",
      },
      location: {
        value: fabricCloudRouterLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricCloudRouterLocationList",
      },
      marketplace_subscription: {
        value: fabricCloudRouterMarketplaceSubscriptionToHclTerraform(this._marketplaceSubscription.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricCloudRouterMarketplaceSubscriptionList",
      },
      notifications: {
        value: cdktf.listMapperHcl(fabricCloudRouterNotificationsToHclTerraform, true)(this._notifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricCloudRouterNotificationsList",
      },
      order: {
        value: fabricCloudRouterOrderToHclTerraform(this._order.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricCloudRouterOrderList",
      },
      package: {
        value: fabricCloudRouterPackageToHclTerraform(this._package.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricCloudRouterPackageList",
      },
      project: {
        value: fabricCloudRouterProjectToHclTerraform(this._project.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricCloudRouterProjectList",
      },
      timeouts: {
        value: fabricCloudRouterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricCloudRouterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
