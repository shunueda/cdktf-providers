// https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricServiceTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional Description to the Service Token you will be creating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#description FabricServiceToken#description}
  */
  readonly description?: string;
  /**
  * Expiration date and time of the service token; 2020-11-06T07:00:00Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#expiration_date_time FabricServiceToken#expiration_date_time}
  */
  readonly expirationDateTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#id FabricServiceToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Service Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#name FabricServiceToken#name}
  */
  readonly name?: string;
  /**
  * Service Token Type; VC_TOKEN,EPL_TOKEN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type: string;
  /**
  * notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#notifications FabricServiceToken#notifications}
  */
  readonly notifications: FabricServiceTokenNotifications[] | cdktf.IResolvable;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#project FabricServiceToken#project}
  */
  readonly project?: FabricServiceTokenProject;
  /**
  * service_token_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#service_token_connection FabricServiceToken#service_token_connection}
  */
  readonly serviceTokenConnection: FabricServiceTokenServiceTokenConnection[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#timeouts FabricServiceToken#timeouts}
  */
  readonly timeouts?: FabricServiceTokenTimeouts;
}
export interface FabricServiceTokenAccount {
}

export function fabricServiceTokenAccountToTerraform(struct?: FabricServiceTokenAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricServiceTokenAccountToHclTerraform(struct?: FabricServiceTokenAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricServiceTokenAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getNumberAttribute('account_number');
  }

  // global_cust_id - computed: true, optional: false, required: false
  public get globalCustId() {
    return this.getStringAttribute('global_cust_id');
  }

  // global_org_id - computed: true, optional: false, required: false
  public get globalOrgId() {
    return this.getStringAttribute('global_org_id');
  }

  // global_organization_name - computed: true, optional: false, required: false
  public get globalOrganizationName() {
    return this.getStringAttribute('global_organization_name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // ucm_id - computed: true, optional: false, required: false
  public get ucmId() {
    return this.getStringAttribute('ucm_id');
  }
}

export class FabricServiceTokenAccountList extends cdktf.ComplexList {

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
  public get(index: number): FabricServiceTokenAccountOutputReference {
    return new FabricServiceTokenAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenChangeLog {
}

export function fabricServiceTokenChangeLogToTerraform(struct?: FabricServiceTokenChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricServiceTokenChangeLogToHclTerraform(struct?: FabricServiceTokenChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricServiceTokenChangeLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenChangeLog | undefined) {
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

export class FabricServiceTokenChangeLogList extends cdktf.ComplexList {

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
  public get(index: number): FabricServiceTokenChangeLogOutputReference {
    return new FabricServiceTokenChangeLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenNotifications {
  /**
  * Array of contact emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#emails FabricServiceToken#emails}
  */
  readonly emails: string[];
  /**
  * Send interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#send_interval FabricServiceToken#send_interval}
  */
  readonly sendInterval?: string;
  /**
  * Notification Type - ALL,CONNECTION_APPROVAL,SALES_REP_NOTIFICATIONS, NOTIFICATIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type: string;
}

export function fabricServiceTokenNotificationsToTerraform(struct?: FabricServiceTokenNotifications | cdktf.IResolvable): any {
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


export function fabricServiceTokenNotificationsToHclTerraform(struct?: FabricServiceTokenNotifications | cdktf.IResolvable): any {
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

export class FabricServiceTokenNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenNotifications | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricServiceTokenNotifications | cdktf.IResolvable | undefined) {
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

export class FabricServiceTokenNotificationsList extends cdktf.ComplexList {
  public internalValue? : FabricServiceTokenNotifications[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceTokenNotificationsOutputReference {
    return new FabricServiceTokenNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenProject {
  /**
  * Project Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#project_id FabricServiceToken#project_id}
  */
  readonly projectId?: string;
}

export function fabricServiceTokenProjectToTerraform(struct?: FabricServiceTokenProjectOutputReference | FabricServiceTokenProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function fabricServiceTokenProjectToHclTerraform(struct?: FabricServiceTokenProjectOutputReference | FabricServiceTokenProject): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceTokenProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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
export interface FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterface {
  /**
  * Interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type: string;
}

export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterfaceToTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterfaceOutputReference | FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterfaceToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterfaceOutputReference | FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterface): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocol {
  /**
  * Type of the link protocol - UNTAGGED, DOT1Q, QINQ, EVPN_VXLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type?: string;
  /**
  * Vlan Customer Tag information, vlanCTag value specified for QINQ connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#vlan_c_tag FabricServiceToken#vlan_c_tag}
  */
  readonly vlanCTag?: number;
  /**
  * Vlan Provider Tag information, vlanSTag value specified for QINQ connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#vlan_s_tag FabricServiceToken#vlan_s_tag}
  */
  readonly vlanSTag?: number;
  /**
  * Vlan Tag information, vlanTag value specified for DOT1Q connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#vlan_tag FabricServiceToken#vlan_tag}
  */
  readonly vlanTag?: number;
}

export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocolToTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocolOutputReference | FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    vlan_c_tag: cdktf.numberToTerraform(struct!.vlanCTag),
    vlan_s_tag: cdktf.numberToTerraform(struct!.vlanSTag),
    vlan_tag: cdktf.numberToTerraform(struct!.vlanTag),
  }
}


export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocolToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocolOutputReference | FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocol): any {
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
    vlan_c_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanCTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_s_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanSTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlanCTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanCTag = this._vlanCTag;
    }
    if (this._vlanSTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanSTag = this._vlanSTag;
    }
    if (this._vlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTag = this._vlanTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._vlanCTag = undefined;
      this._vlanSTag = undefined;
      this._vlanTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._vlanCTag = value.vlanCTag;
      this._vlanSTag = value.vlanSTag;
      this._vlanTag = value.vlanTag;
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

  // vlan_c_tag - computed: true, optional: true, required: false
  private _vlanCTag?: number; 
  public get vlanCTag() {
    return this.getNumberAttribute('vlan_c_tag');
  }
  public set vlanCTag(value: number) {
    this._vlanCTag = value;
  }
  public resetVlanCTag() {
    this._vlanCTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCTagInput() {
    return this._vlanCTag;
  }

  // vlan_s_tag - computed: true, optional: true, required: false
  private _vlanSTag?: number; 
  public get vlanSTag() {
    return this.getNumberAttribute('vlan_s_tag');
  }
  public set vlanSTag(value: number) {
    this._vlanSTag = value;
  }
  public resetVlanSTag() {
    this._vlanSTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanSTagInput() {
    return this._vlanSTag;
  }

  // vlan_tag - computed: true, optional: true, required: false
  private _vlanTag?: number; 
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
  public set vlanTag(value: number) {
    this._vlanTag = value;
  }
  public resetVlanTag() {
    this._vlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagInput() {
    return this._vlanTag;
  }
}
export interface FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocation {
}

export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocationToTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocationToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ibx - computed: true, optional: false, required: false
  public get ibx() {
    return this.getStringAttribute('ibx');
  }

  // metro_code - computed: true, optional: false, required: false
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }

  // metro_name - computed: true, optional: false, required: false
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocationList extends cdktf.ComplexList {

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
  public get(index: number): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocationOutputReference {
    return new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetwork {
  /**
  * Equinix-assigned Network identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#uuid FabricServiceToken#uuid}
  */
  readonly uuid: string;
}

export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkToTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkOutputReference | FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkOutputReference | FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // location - computed: true, optional: false, required: false
  private _location = new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkLocationList(this, "location", true);
  public get location() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
export interface FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocation {
}

export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocationToTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocationToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ibx - computed: true, optional: false, required: false
  public get ibx() {
    return this.getStringAttribute('ibx');
  }

  // metro_code - computed: true, optional: false, required: false
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }

  // metro_name - computed: true, optional: false, required: false
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocationList extends cdktf.ComplexList {

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
  public get(index: number): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocationOutputReference {
    return new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPort {
  /**
  * Type of Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned Port identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#uuid FabricServiceToken#uuid}
  */
  readonly uuid: string;
}

export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortToTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortOutputReference | FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortOutputReference | FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPort): any {
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

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPort | undefined {
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

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPort | undefined) {
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

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // cvp_id - computed: true, optional: false, required: false
  public get cvpId() {
    return this.getNumberAttribute('cvp_id');
  }

  // encapsulation_protocol_type - computed: true, optional: false, required: false
  public get encapsulationProtocolType() {
    return this.getStringAttribute('encapsulation_protocol_type');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // location - computed: true, optional: false, required: false
  private _location = new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortLocationList(this, "location", true);
  public get location() {
    return this._location;
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
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
export interface FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDevice {
  /**
  * Virtual Device type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned Virtual Device identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#uuid FabricServiceToken#uuid}
  */
  readonly uuid: string;
}

export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDeviceToTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDeviceOutputReference | FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDeviceToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDeviceOutputReference | FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDevice): any {
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

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDevice | undefined {
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

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDevice | undefined) {
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

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
export interface FabricServiceTokenServiceTokenConnectionASideAccessPointSelectors {
  /**
  * Type of Access point; COLO, VD, NETWORK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#interface FabricServiceToken#interface}
  */
  readonly interface?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterface;
  /**
  * link_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#link_protocol FabricServiceToken#link_protocol}
  */
  readonly linkProtocol?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocol;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#network FabricServiceToken#network}
  */
  readonly network?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetwork;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#port FabricServiceToken#port}
  */
  readonly port?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPort;
  /**
  * virtual_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#virtual_device FabricServiceToken#virtual_device}
  */
  readonly virtualDevice?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDevice;
}

export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsToTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterfaceToTerraform(struct!.interface),
    link_protocol: fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocolToTerraform(struct!.linkProtocol),
    network: fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkToTerraform(struct!.network),
    port: fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortToTerraform(struct!.port),
    virtual_device: fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDeviceToTerraform(struct!.virtualDevice),
  }
}


export function fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectors | cdktf.IResolvable): any {
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
    interface: {
      value: fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterfaceList",
    },
    link_protocol: {
      value: fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocolToHclTerraform(struct!.linkProtocol),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocolList",
    },
    network: {
      value: fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkList",
    },
    port: {
      value: fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortList",
    },
    virtual_device: {
      value: fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDeviceToHclTerraform(struct!.virtualDevice),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._linkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkProtocol = this._linkProtocol?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._virtualDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualDevice = this._virtualDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._linkProtocol.internalValue = undefined;
      this._network.internalValue = undefined;
      this._port.internalValue = undefined;
      this._virtualDevice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._linkProtocol.internalValue = value.linkProtocol;
      this._network.internalValue = value.network;
      this._port.internalValue = value.port;
      this._virtualDevice.internalValue = value.virtualDevice;
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

  // interface - computed: false, optional: true, required: false
  private _interface = new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // link_protocol - computed: false, optional: true, required: false
  private _linkProtocol = new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocolOutputReference(this, "link_protocol");
  public get linkProtocol() {
    return this._linkProtocol;
  }
  public putLinkProtocol(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsLinkProtocol) {
    this._linkProtocol.internalValue = value;
  }
  public resetLinkProtocol() {
    this._linkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkProtocolInput() {
    return this._linkProtocol.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // virtual_device - computed: false, optional: true, required: false
  private _virtualDevice = new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDeviceOutputReference(this, "virtual_device");
  public get virtualDevice() {
    return this._virtualDevice;
  }
  public putVirtualDevice(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsVirtualDevice) {
    this._virtualDevice.internalValue = value;
  }
  public resetVirtualDevice() {
    this._virtualDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDeviceInput() {
    return this._virtualDevice.internalValue;
  }
}

export class FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsList extends cdktf.ComplexList {
  public internalValue? : FabricServiceTokenServiceTokenConnectionASideAccessPointSelectors[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsOutputReference {
    return new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenServiceTokenConnectionASide {
  /**
  * access_point_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#access_point_selectors FabricServiceToken#access_point_selectors}
  */
  readonly accessPointSelectors: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectors[] | cdktf.IResolvable;
}

export function fabricServiceTokenServiceTokenConnectionASideToTerraform(struct?: FabricServiceTokenServiceTokenConnectionASide | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point_selectors: cdktf.listMapper(fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsToTerraform, true)(struct!.accessPointSelectors),
  }
}


export function fabricServiceTokenServiceTokenConnectionASideToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionASide | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point_selectors: {
      value: cdktf.listMapperHcl(fabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsToHclTerraform, true)(struct!.accessPointSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceTokenServiceTokenConnectionASideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenServiceTokenConnectionASide | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointSelectors = this._accessPointSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionASide | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointSelectors.internalValue = value.accessPointSelectors;
    }
  }

  // access_point_selectors - computed: false, optional: false, required: true
  private _accessPointSelectors = new FabricServiceTokenServiceTokenConnectionASideAccessPointSelectorsList(this, "access_point_selectors", false);
  public get accessPointSelectors() {
    return this._accessPointSelectors;
  }
  public putAccessPointSelectors(value: FabricServiceTokenServiceTokenConnectionASideAccessPointSelectors[] | cdktf.IResolvable) {
    this._accessPointSelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointSelectorsInput() {
    return this._accessPointSelectors.internalValue;
  }
}

export class FabricServiceTokenServiceTokenConnectionASideList extends cdktf.ComplexList {
  public internalValue? : FabricServiceTokenServiceTokenConnectionASide[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceTokenServiceTokenConnectionASideOutputReference {
    return new FabricServiceTokenServiceTokenConnectionASideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterface {
  /**
  * Interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type: string;
}

export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterfaceToTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterfaceOutputReference | FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterfaceToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterfaceOutputReference | FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterface): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocol {
  /**
  * Type of the link protocol - UNTAGGED, DOT1Q, QINQ, EVPN_VXLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type?: string;
  /**
  * Vlan Customer Tag information, vlanCTag value specified for QINQ connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#vlan_c_tag FabricServiceToken#vlan_c_tag}
  */
  readonly vlanCTag?: number;
  /**
  * Vlan Provider Tag information, vlanSTag value specified for QINQ connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#vlan_s_tag FabricServiceToken#vlan_s_tag}
  */
  readonly vlanSTag?: number;
  /**
  * Vlan Tag information, vlanTag value specified for DOT1Q connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#vlan_tag FabricServiceToken#vlan_tag}
  */
  readonly vlanTag?: number;
}

export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocolToTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocolOutputReference | FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    vlan_c_tag: cdktf.numberToTerraform(struct!.vlanCTag),
    vlan_s_tag: cdktf.numberToTerraform(struct!.vlanSTag),
    vlan_tag: cdktf.numberToTerraform(struct!.vlanTag),
  }
}


export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocolToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocolOutputReference | FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocol): any {
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
    vlan_c_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanCTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_s_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanSTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlanCTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanCTag = this._vlanCTag;
    }
    if (this._vlanSTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanSTag = this._vlanSTag;
    }
    if (this._vlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTag = this._vlanTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._vlanCTag = undefined;
      this._vlanSTag = undefined;
      this._vlanTag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._vlanCTag = value.vlanCTag;
      this._vlanSTag = value.vlanSTag;
      this._vlanTag = value.vlanTag;
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

  // vlan_c_tag - computed: true, optional: true, required: false
  private _vlanCTag?: number; 
  public get vlanCTag() {
    return this.getNumberAttribute('vlan_c_tag');
  }
  public set vlanCTag(value: number) {
    this._vlanCTag = value;
  }
  public resetVlanCTag() {
    this._vlanCTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCTagInput() {
    return this._vlanCTag;
  }

  // vlan_s_tag - computed: true, optional: true, required: false
  private _vlanSTag?: number; 
  public get vlanSTag() {
    return this.getNumberAttribute('vlan_s_tag');
  }
  public set vlanSTag(value: number) {
    this._vlanSTag = value;
  }
  public resetVlanSTag() {
    this._vlanSTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanSTagInput() {
    return this._vlanSTag;
  }

  // vlan_tag - computed: true, optional: true, required: false
  private _vlanTag?: number; 
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
  public set vlanTag(value: number) {
    this._vlanTag = value;
  }
  public resetVlanTag() {
    this._vlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagInput() {
    return this._vlanTag;
  }
}
export interface FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocation {
}

export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocationToTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocationToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ibx - computed: true, optional: false, required: false
  public get ibx() {
    return this.getStringAttribute('ibx');
  }

  // metro_code - computed: true, optional: false, required: false
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }

  // metro_name - computed: true, optional: false, required: false
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocationList extends cdktf.ComplexList {

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
  public get(index: number): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocationOutputReference {
    return new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetwork {
  /**
  * Equinix-assigned Network identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#uuid FabricServiceToken#uuid}
  */
  readonly uuid: string;
}

export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkToTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkOutputReference | FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkOutputReference | FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // location - computed: true, optional: false, required: false
  private _location = new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkLocationList(this, "location", true);
  public get location() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
export interface FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocation {
}

export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocationToTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocationToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ibx - computed: true, optional: false, required: false
  public get ibx() {
    return this.getStringAttribute('ibx');
  }

  // metro_code - computed: true, optional: false, required: false
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }

  // metro_name - computed: true, optional: false, required: false
  public get metroName() {
    return this.getStringAttribute('metro_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocationList extends cdktf.ComplexList {

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
  public get(index: number): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocationOutputReference {
    return new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPort {
  /**
  * Type of Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned Port identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#uuid FabricServiceToken#uuid}
  */
  readonly uuid: string;
}

export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortToTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortOutputReference | FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortOutputReference | FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPort): any {
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

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPort | undefined {
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

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPort | undefined) {
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

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // cvp_id - computed: true, optional: false, required: false
  public get cvpId() {
    return this.getNumberAttribute('cvp_id');
  }

  // encapsulation_protocol_type - computed: true, optional: false, required: false
  public get encapsulationProtocolType() {
    return this.getStringAttribute('encapsulation_protocol_type');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // location - computed: true, optional: false, required: false
  private _location = new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortLocationList(this, "location", true);
  public get location() {
    return this._location;
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
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
export interface FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDevice {
  /**
  * Virtual Device type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned Virtual Device identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#uuid FabricServiceToken#uuid}
  */
  readonly uuid: string;
}

export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDeviceToTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDeviceOutputReference | FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDeviceToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDeviceOutputReference | FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDevice): any {
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

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDevice | undefined {
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

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDevice | undefined) {
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

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
export interface FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectors {
  /**
  * Type of Access point; COLO, VD, NETWORK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#interface FabricServiceToken#interface}
  */
  readonly interface?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterface;
  /**
  * link_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#link_protocol FabricServiceToken#link_protocol}
  */
  readonly linkProtocol?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocol;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#network FabricServiceToken#network}
  */
  readonly network?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetwork;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#port FabricServiceToken#port}
  */
  readonly port?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPort;
  /**
  * virtual_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#virtual_device FabricServiceToken#virtual_device}
  */
  readonly virtualDevice?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDevice;
}

export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsToTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterfaceToTerraform(struct!.interface),
    link_protocol: fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocolToTerraform(struct!.linkProtocol),
    network: fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkToTerraform(struct!.network),
    port: fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortToTerraform(struct!.port),
    virtual_device: fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDeviceToTerraform(struct!.virtualDevice),
  }
}


export function fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectors | cdktf.IResolvable): any {
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
    interface: {
      value: fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterfaceList",
    },
    link_protocol: {
      value: fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocolToHclTerraform(struct!.linkProtocol),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocolList",
    },
    network: {
      value: fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkList",
    },
    port: {
      value: fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortList",
    },
    virtual_device: {
      value: fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDeviceToHclTerraform(struct!.virtualDevice),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._linkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkProtocol = this._linkProtocol?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._virtualDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualDevice = this._virtualDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._linkProtocol.internalValue = undefined;
      this._network.internalValue = undefined;
      this._port.internalValue = undefined;
      this._virtualDevice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._linkProtocol.internalValue = value.linkProtocol;
      this._network.internalValue = value.network;
      this._port.internalValue = value.port;
      this._virtualDevice.internalValue = value.virtualDevice;
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

  // interface - computed: false, optional: true, required: false
  private _interface = new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // link_protocol - computed: false, optional: true, required: false
  private _linkProtocol = new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocolOutputReference(this, "link_protocol");
  public get linkProtocol() {
    return this._linkProtocol;
  }
  public putLinkProtocol(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsLinkProtocol) {
    this._linkProtocol.internalValue = value;
  }
  public resetLinkProtocol() {
    this._linkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkProtocolInput() {
    return this._linkProtocol.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // virtual_device - computed: false, optional: true, required: false
  private _virtualDevice = new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDeviceOutputReference(this, "virtual_device");
  public get virtualDevice() {
    return this._virtualDevice;
  }
  public putVirtualDevice(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsVirtualDevice) {
    this._virtualDevice.internalValue = value;
  }
  public resetVirtualDevice() {
    this._virtualDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDeviceInput() {
    return this._virtualDevice.internalValue;
  }
}

export class FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsList extends cdktf.ComplexList {
  public internalValue? : FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectors[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsOutputReference {
    return new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenServiceTokenConnectionZSide {
  /**
  * access_point_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#access_point_selectors FabricServiceToken#access_point_selectors}
  */
  readonly accessPointSelectors: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectors[] | cdktf.IResolvable;
}

export function fabricServiceTokenServiceTokenConnectionZSideToTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSide | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point_selectors: cdktf.listMapper(fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsToTerraform, true)(struct!.accessPointSelectors),
  }
}


export function fabricServiceTokenServiceTokenConnectionZSideToHclTerraform(struct?: FabricServiceTokenServiceTokenConnectionZSide | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_point_selectors: {
      value: cdktf.listMapperHcl(fabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsToHclTerraform, true)(struct!.accessPointSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceTokenServiceTokenConnectionZSideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenServiceTokenConnectionZSide | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointSelectors = this._accessPointSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnectionZSide | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointSelectors.internalValue = value.accessPointSelectors;
    }
  }

  // access_point_selectors - computed: false, optional: false, required: true
  private _accessPointSelectors = new FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectorsList(this, "access_point_selectors", false);
  public get accessPointSelectors() {
    return this._accessPointSelectors;
  }
  public putAccessPointSelectors(value: FabricServiceTokenServiceTokenConnectionZSideAccessPointSelectors[] | cdktf.IResolvable) {
    this._accessPointSelectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointSelectorsInput() {
    return this._accessPointSelectors.internalValue;
  }
}

export class FabricServiceTokenServiceTokenConnectionZSideList extends cdktf.ComplexList {
  public internalValue? : FabricServiceTokenServiceTokenConnectionZSide[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceTokenServiceTokenConnectionZSideOutputReference {
    return new FabricServiceTokenServiceTokenConnectionZSideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenServiceTokenConnection {
  /**
  * Allow custom bandwidth value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#allow_custom_bandwidth FabricServiceToken#allow_custom_bandwidth}
  */
  readonly allowCustomBandwidth?: boolean | cdktf.IResolvable;
  /**
  * Authorization to connect remotely
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#allow_remote_connection FabricServiceToken#allow_remote_connection}
  */
  readonly allowRemoteConnection?: boolean | cdktf.IResolvable;
  /**
  * Connection bandwidth limit in Mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#bandwidth_limit FabricServiceToken#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * List of permitted bandwidths'; For Port-based Service Tokens, the maximum allowable bandwidth is 50 Gbps, while for Virtual Device-based Service Tokens, it is limited to 10 Gbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#supported_bandwidths FabricServiceToken#supported_bandwidths}
  */
  readonly supportedBandwidths?: number[];
  /**
  * Type of Connection supported by Service Token you will create; EVPL_VC, EVPLAN_VC, EPLAN_VC, IPWAN_VC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#type FabricServiceToken#type}
  */
  readonly type?: string;
  /**
  * a_side block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#a_side FabricServiceToken#a_side}
  */
  readonly aSide?: FabricServiceTokenServiceTokenConnectionASide[] | cdktf.IResolvable;
  /**
  * z_side block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#z_side FabricServiceToken#z_side}
  */
  readonly zSide?: FabricServiceTokenServiceTokenConnectionZSide[] | cdktf.IResolvable;
}

export function fabricServiceTokenServiceTokenConnectionToTerraform(struct?: FabricServiceTokenServiceTokenConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_custom_bandwidth: cdktf.booleanToTerraform(struct!.allowCustomBandwidth),
    allow_remote_connection: cdktf.booleanToTerraform(struct!.allowRemoteConnection),
    bandwidth_limit: cdktf.numberToTerraform(struct!.bandwidthLimit),
    supported_bandwidths: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.supportedBandwidths),
    type: cdktf.stringToTerraform(struct!.type),
    a_side: cdktf.listMapper(fabricServiceTokenServiceTokenConnectionASideToTerraform, true)(struct!.aSide),
    z_side: cdktf.listMapper(fabricServiceTokenServiceTokenConnectionZSideToTerraform, true)(struct!.zSide),
  }
}


export function fabricServiceTokenServiceTokenConnectionToHclTerraform(struct?: FabricServiceTokenServiceTokenConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_custom_bandwidth: {
      value: cdktf.booleanToHclTerraform(struct!.allowCustomBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_remote_connection: {
      value: cdktf.booleanToHclTerraform(struct!.allowRemoteConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bandwidth_limit: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    supported_bandwidths: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.supportedBandwidths),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    a_side: {
      value: cdktf.listMapperHcl(fabricServiceTokenServiceTokenConnectionASideToHclTerraform, true)(struct!.aSide),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionASideList",
    },
    z_side: {
      value: cdktf.listMapperHcl(fabricServiceTokenServiceTokenConnectionZSideToHclTerraform, true)(struct!.zSide),
      isBlock: true,
      type: "set",
      storageClassType: "FabricServiceTokenServiceTokenConnectionZSideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricServiceTokenServiceTokenConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricServiceTokenServiceTokenConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCustomBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCustomBandwidth = this._allowCustomBandwidth;
    }
    if (this._allowRemoteConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteConnection = this._allowRemoteConnection;
    }
    if (this._bandwidthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimit = this._bandwidthLimit;
    }
    if (this._supportedBandwidths !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedBandwidths = this._supportedBandwidths;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._aSide?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aSide = this._aSide?.internalValue;
    }
    if (this._zSide?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zSide = this._zSide?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricServiceTokenServiceTokenConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCustomBandwidth = undefined;
      this._allowRemoteConnection = undefined;
      this._bandwidthLimit = undefined;
      this._supportedBandwidths = undefined;
      this._type = undefined;
      this._aSide.internalValue = undefined;
      this._zSide.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCustomBandwidth = value.allowCustomBandwidth;
      this._allowRemoteConnection = value.allowRemoteConnection;
      this._bandwidthLimit = value.bandwidthLimit;
      this._supportedBandwidths = value.supportedBandwidths;
      this._type = value.type;
      this._aSide.internalValue = value.aSide;
      this._zSide.internalValue = value.zSide;
    }
  }

  // allow_custom_bandwidth - computed: true, optional: true, required: false
  private _allowCustomBandwidth?: boolean | cdktf.IResolvable; 
  public get allowCustomBandwidth() {
    return this.getBooleanAttribute('allow_custom_bandwidth');
  }
  public set allowCustomBandwidth(value: boolean | cdktf.IResolvable) {
    this._allowCustomBandwidth = value;
  }
  public resetAllowCustomBandwidth() {
    this._allowCustomBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCustomBandwidthInput() {
    return this._allowCustomBandwidth;
  }

  // allow_remote_connection - computed: true, optional: true, required: false
  private _allowRemoteConnection?: boolean | cdktf.IResolvable; 
  public get allowRemoteConnection() {
    return this.getBooleanAttribute('allow_remote_connection');
  }
  public set allowRemoteConnection(value: boolean | cdktf.IResolvable) {
    this._allowRemoteConnection = value;
  }
  public resetAllowRemoteConnection() {
    this._allowRemoteConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteConnectionInput() {
    return this._allowRemoteConnection;
  }

  // bandwidth_limit - computed: true, optional: true, required: false
  private _bandwidthLimit?: number; 
  public get bandwidthLimit() {
    return this.getNumberAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: number) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
  }

  // supported_bandwidths - computed: true, optional: true, required: false
  private _supportedBandwidths?: number[]; 
  public get supportedBandwidths() {
    return this.getNumberListAttribute('supported_bandwidths');
  }
  public set supportedBandwidths(value: number[]) {
    this._supportedBandwidths = value;
  }
  public resetSupportedBandwidths() {
    this._supportedBandwidths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedBandwidthsInput() {
    return this._supportedBandwidths;
  }

  // type - computed: false, optional: true, required: false
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // a_side - computed: false, optional: true, required: false
  private _aSide = new FabricServiceTokenServiceTokenConnectionASideList(this, "a_side", true);
  public get aSide() {
    return this._aSide;
  }
  public putASide(value: FabricServiceTokenServiceTokenConnectionASide[] | cdktf.IResolvable) {
    this._aSide.internalValue = value;
  }
  public resetASide() {
    this._aSide.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aSideInput() {
    return this._aSide.internalValue;
  }

  // z_side - computed: false, optional: true, required: false
  private _zSide = new FabricServiceTokenServiceTokenConnectionZSideList(this, "z_side", true);
  public get zSide() {
    return this._zSide;
  }
  public putZSide(value: FabricServiceTokenServiceTokenConnectionZSide[] | cdktf.IResolvable) {
    this._zSide.internalValue = value;
  }
  public resetZSide() {
    this._zSide.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zSideInput() {
    return this._zSide.internalValue;
  }
}

export class FabricServiceTokenServiceTokenConnectionList extends cdktf.ComplexList {
  public internalValue? : FabricServiceTokenServiceTokenConnection[] | cdktf.IResolvable

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
  public get(index: number): FabricServiceTokenServiceTokenConnectionOutputReference {
    return new FabricServiceTokenServiceTokenConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricServiceTokenTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#create FabricServiceToken#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#delete FabricServiceToken#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#read FabricServiceToken#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#update FabricServiceToken#update}
  */
  readonly update?: string;
}

export function fabricServiceTokenTimeoutsToTerraform(struct?: FabricServiceTokenTimeouts | cdktf.IResolvable): any {
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


export function fabricServiceTokenTimeoutsToHclTerraform(struct?: FabricServiceTokenTimeouts | cdktf.IResolvable): any {
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

export class FabricServiceTokenTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricServiceTokenTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricServiceTokenTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token equinix_fabric_service_token}
*/
export class FabricServiceToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_service_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricServiceToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricServiceToken to import
  * @param importFromId The id of the existing FabricServiceToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricServiceToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_service_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/fabric_service_token equinix_fabric_service_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricServiceTokenConfig
  */
  public constructor(scope: Construct, id: string, config: FabricServiceTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_service_token',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.10.0',
        providerVersionConstraint: '4.10.0'
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
    this._expirationDateTime = config.expirationDateTime;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._notifications.internalValue = config.notifications;
    this._project.internalValue = config.project;
    this._serviceTokenConnection.internalValue = config.serviceTokenConnection;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  private _account = new FabricServiceTokenAccountList(this, "account", true);
  public get account() {
    return this._account;
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new FabricServiceTokenChangeLogList(this, "change_log", true);
  public get changeLog() {
    return this._changeLog;
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

  // expiration_date_time - computed: false, optional: false, required: true
  private _expirationDateTime?: string; 
  public get expirationDateTime() {
    return this.getStringAttribute('expiration_date_time');
  }
  public set expirationDateTime(value: string) {
    this._expirationDateTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateTimeInput() {
    return this._expirationDateTime;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // issuer_side - computed: true, optional: false, required: false
  public get issuerSide() {
    return this.getStringAttribute('issuer_side');
  }

  // name - computed: true, optional: true, required: false
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // notifications - computed: false, optional: false, required: true
  private _notifications = new FabricServiceTokenNotificationsList(this, "notifications", true);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: FabricServiceTokenNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // project - computed: false, optional: true, required: false
  private _project = new FabricServiceTokenProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: FabricServiceTokenProject) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // service_token_connection - computed: false, optional: false, required: true
  private _serviceTokenConnection = new FabricServiceTokenServiceTokenConnectionList(this, "service_token_connection", true);
  public get serviceTokenConnection() {
    return this._serviceTokenConnection;
  }
  public putServiceTokenConnection(value: FabricServiceTokenServiceTokenConnection[] | cdktf.IResolvable) {
    this._serviceTokenConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenConnectionInput() {
    return this._serviceTokenConnection.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FabricServiceTokenTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FabricServiceTokenTimeouts) {
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
      expiration_date_time: cdktf.stringToTerraform(this._expirationDateTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      notifications: cdktf.listMapper(fabricServiceTokenNotificationsToTerraform, true)(this._notifications.internalValue),
      project: fabricServiceTokenProjectToTerraform(this._project.internalValue),
      service_token_connection: cdktf.listMapper(fabricServiceTokenServiceTokenConnectionToTerraform, true)(this._serviceTokenConnection.internalValue),
      timeouts: fabricServiceTokenTimeoutsToTerraform(this._timeouts.internalValue),
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
      expiration_date_time: {
        value: cdktf.stringToHclTerraform(this._expirationDateTime),
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
      notifications: {
        value: cdktf.listMapperHcl(fabricServiceTokenNotificationsToHclTerraform, true)(this._notifications.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricServiceTokenNotificationsList",
      },
      project: {
        value: fabricServiceTokenProjectToHclTerraform(this._project.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricServiceTokenProjectList",
      },
      service_token_connection: {
        value: cdktf.listMapperHcl(fabricServiceTokenServiceTokenConnectionToHclTerraform, true)(this._serviceTokenConnection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricServiceTokenServiceTokenConnectionList",
      },
      timeouts: {
        value: fabricServiceTokenTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricServiceTokenTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
