// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter the requested bandwidth in Mbps for Capacity Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#allocate_bandwidth Glm#allocate_bandwidth}
  */
  readonly allocateBandwidth?: number;
  /**
  * Helpful identifier for this appliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#appliance_name Glm#appliance_name}
  */
  readonly applianceName?: string;
  /**
  * Enable Burst License
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#burst Glm#burst}
  */
  readonly burst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#check_expiration Glm#check_expiration}
  */
  readonly checkExpiration?: number;
  /**
  * Turn on periodic GLM license requests (default license retrieval interval is every 24 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#enable_requests Glm#enable_requests}
  */
  readonly enableRequests?: number;
  /**
  * Enter the ELM hostname, IP or [IPV6]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#enterprise Glm#enterprise}
  */
  readonly enterprise?: string;
  /**
  * 'fqdn': TLS verified with FQDN; 'self-signed': TLS verified with self signed certificate(Default); 'self-signed-pull-cert': Request and use self signed certificate;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#enterprise_request_type Glm#enterprise_request_type}
  */
  readonly enterpriseRequestType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#host Glm#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#id Glm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * GLM license request interval (in hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#interval Glm#interval}
  */
  readonly interval?: number;
  /**
  * License request port (default 443)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#port Glm#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#thunder_capacity_license Glm#thunder_capacity_license}
  */
  readonly thunderCapacityLicense?: number;
  /**
  * License entitlement token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#token Glm#token}
  */
  readonly token?: string;
  /**
  * Use management port to connect to GLM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#use_mgmt_port Glm#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#uuid Glm#uuid}
  */
  readonly uuid?: string;
  /**
  * create_license_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#create_license_request Glm#create_license_request}
  */
  readonly createLicenseRequest?: GlmCreateLicenseRequest;
  /**
  * enterprise_ha_host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#enterprise_ha_host_list Glm#enterprise_ha_host_list}
  */
  readonly enterpriseHaHostList?: GlmEnterpriseHaHostListStruct[] | cdktf.IResolvable;
  /**
  * new_license block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#new_license Glm#new_license}
  */
  readonly newLicense?: GlmNewLicense;
  /**
  * proxy_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#proxy_server Glm#proxy_server}
  */
  readonly proxyServer?: GlmProxyServer;
  /**
  * send block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#send Glm#send}
  */
  readonly send?: GlmSend;
}
export interface GlmCreateLicenseRequest {
  /**
  * Create a GLM trial or license request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#create_license_request Glm#create_license_request}
  */
  readonly createLicenseRequest?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#uuid Glm#uuid}
  */
  readonly uuid?: string;
}

export function glmCreateLicenseRequestToTerraform(struct?: GlmCreateLicenseRequestOutputReference | GlmCreateLicenseRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_license_request: cdktf.numberToTerraform(struct!.createLicenseRequest),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function glmCreateLicenseRequestToHclTerraform(struct?: GlmCreateLicenseRequestOutputReference | GlmCreateLicenseRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_license_request: {
      value: cdktf.numberToHclTerraform(struct!.createLicenseRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class GlmCreateLicenseRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlmCreateLicenseRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createLicenseRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.createLicenseRequest = this._createLicenseRequest;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlmCreateLicenseRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createLicenseRequest = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createLicenseRequest = value.createLicenseRequest;
      this._uuid = value.uuid;
    }
  }

  // create_license_request - computed: false, optional: true, required: false
  private _createLicenseRequest?: number; 
  public get createLicenseRequest() {
    return this.getNumberAttribute('create_license_request');
  }
  public set createLicenseRequest(value: number) {
    this._createLicenseRequest = value;
  }
  public resetCreateLicenseRequest() {
    this._createLicenseRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createLicenseRequestInput() {
    return this._createLicenseRequest;
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
}
export interface GlmEnterpriseHaHostListStruct {
  /**
  * Enter the ELM hostname, IP or [IPV6]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#host_entry Glm#host_entry}
  */
  readonly hostEntry: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#uuid Glm#uuid}
  */
  readonly uuid?: string;
}

export function glmEnterpriseHaHostListStructToTerraform(struct?: GlmEnterpriseHaHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_entry: cdktf.stringToTerraform(struct!.hostEntry),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function glmEnterpriseHaHostListStructToHclTerraform(struct?: GlmEnterpriseHaHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_entry: {
      value: cdktf.stringToHclTerraform(struct!.hostEntry),
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

export class GlmEnterpriseHaHostListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlmEnterpriseHaHostListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostEntry = this._hostEntry;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlmEnterpriseHaHostListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostEntry = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostEntry = value.hostEntry;
      this._uuid = value.uuid;
    }
  }

  // host_entry - computed: false, optional: false, required: true
  private _hostEntry?: string; 
  public get hostEntry() {
    return this.getStringAttribute('host_entry');
  }
  public set hostEntry(value: string) {
    this._hostEntry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostEntryInput() {
    return this._hostEntry;
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
}

export class GlmEnterpriseHaHostListStructList extends cdktf.ComplexList {
  public internalValue? : GlmEnterpriseHaHostListStruct[] | cdktf.IResolvable

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
  public get(index: number): GlmEnterpriseHaHostListStructOutputReference {
    return new GlmEnterpriseHaHostListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlmNewLicense {
  /**
  * Account Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#account_name Glm#account_name}
  */
  readonly accountName?: string;
  /**
  * Country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#country Glm#country}
  */
  readonly country?: string;
  /**
  * Use existing account with organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#existing_org Glm#existing_org}
  */
  readonly existingOrg?: number;
  /**
  * Use an existing account with email and password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#existing_user Glm#existing_user}
  */
  readonly existingUser?: number;
  /**
  * First Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#first_name Glm#first_name}
  */
  readonly firstName?: string;
  /**
  * GLM email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#glm_email Glm#glm_email}
  */
  readonly glmEmail?: string;
  /**
  * GLM password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#glm_password Glm#glm_password}
  */
  readonly glmPassword?: string;
  /**
  * Last Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#last_name Glm#last_name}
  */
  readonly lastName?: string;
  /**
  * License name (Configure license name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#name Glm#name}
  */
  readonly name?: string;
  /**
  * GLM email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#new_email Glm#new_email}
  */
  readonly newEmail?: string;
  /**
  * GLM password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#new_password Glm#new_password}
  */
  readonly newPassword?: string;
  /**
  * Create a new account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#new_user Glm#new_user}
  */
  readonly newUser?: number;
  /**
  * GLM organization id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#org_id Glm#org_id}
  */
  readonly orgId?: number;
  /**
  * Phone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#phone Glm#phone}
  */
  readonly phone?: string;
  /**
  * 'webroot': webroot; 'webroot_trial': webroot_trial; 'webroot_ti': webroot_ti; 'webroot_ti_trial': webroot_ti_trial; 'qosmos': qosmos; 'qosmos_trial': qosmos_trial; 'ipsec_vpn': ipsec_vpn;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#type Glm#type}
  */
  readonly type?: string;
}

export function glmNewLicenseToTerraform(struct?: GlmNewLicenseOutputReference | GlmNewLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    country: cdktf.stringToTerraform(struct!.country),
    existing_org: cdktf.numberToTerraform(struct!.existingOrg),
    existing_user: cdktf.numberToTerraform(struct!.existingUser),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    glm_email: cdktf.stringToTerraform(struct!.glmEmail),
    glm_password: cdktf.stringToTerraform(struct!.glmPassword),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    name: cdktf.stringToTerraform(struct!.name),
    new_email: cdktf.stringToTerraform(struct!.newEmail),
    new_password: cdktf.stringToTerraform(struct!.newPassword),
    new_user: cdktf.numberToTerraform(struct!.newUser),
    org_id: cdktf.numberToTerraform(struct!.orgId),
    phone: cdktf.stringToTerraform(struct!.phone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function glmNewLicenseToHclTerraform(struct?: GlmNewLicenseOutputReference | GlmNewLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    existing_org: {
      value: cdktf.numberToHclTerraform(struct!.existingOrg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    existing_user: {
      value: cdktf.numberToHclTerraform(struct!.existingUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glm_email: {
      value: cdktf.stringToHclTerraform(struct!.glmEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glm_password: {
      value: cdktf.stringToHclTerraform(struct!.glmPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_email: {
      value: cdktf.stringToHclTerraform(struct!.newEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password: {
      value: cdktf.stringToHclTerraform(struct!.newPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_user: {
      value: cdktf.numberToHclTerraform(struct!.newUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    org_id: {
      value: cdktf.numberToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
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

export class GlmNewLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlmNewLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._existingOrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingOrg = this._existingOrg;
    }
    if (this._existingUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingUser = this._existingUser;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._glmEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.glmEmail = this._glmEmail;
    }
    if (this._glmPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.glmPassword = this._glmPassword;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._newEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.newEmail = this._newEmail;
    }
    if (this._newPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPassword = this._newPassword;
    }
    if (this._newUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.newUser = this._newUser;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlmNewLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._country = undefined;
      this._existingOrg = undefined;
      this._existingUser = undefined;
      this._firstName = undefined;
      this._glmEmail = undefined;
      this._glmPassword = undefined;
      this._lastName = undefined;
      this._name = undefined;
      this._newEmail = undefined;
      this._newPassword = undefined;
      this._newUser = undefined;
      this._orgId = undefined;
      this._phone = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._country = value.country;
      this._existingOrg = value.existingOrg;
      this._existingUser = value.existingUser;
      this._firstName = value.firstName;
      this._glmEmail = value.glmEmail;
      this._glmPassword = value.glmPassword;
      this._lastName = value.lastName;
      this._name = value.name;
      this._newEmail = value.newEmail;
      this._newPassword = value.newPassword;
      this._newUser = value.newUser;
      this._orgId = value.orgId;
      this._phone = value.phone;
      this._type = value.type;
    }
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // existing_org - computed: false, optional: true, required: false
  private _existingOrg?: number; 
  public get existingOrg() {
    return this.getNumberAttribute('existing_org');
  }
  public set existingOrg(value: number) {
    this._existingOrg = value;
  }
  public resetExistingOrg() {
    this._existingOrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingOrgInput() {
    return this._existingOrg;
  }

  // existing_user - computed: false, optional: true, required: false
  private _existingUser?: number; 
  public get existingUser() {
    return this.getNumberAttribute('existing_user');
  }
  public set existingUser(value: number) {
    this._existingUser = value;
  }
  public resetExistingUser() {
    this._existingUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingUserInput() {
    return this._existingUser;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // glm_email - computed: false, optional: true, required: false
  private _glmEmail?: string; 
  public get glmEmail() {
    return this.getStringAttribute('glm_email');
  }
  public set glmEmail(value: string) {
    this._glmEmail = value;
  }
  public resetGlmEmail() {
    this._glmEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmEmailInput() {
    return this._glmEmail;
  }

  // glm_password - computed: false, optional: true, required: false
  private _glmPassword?: string; 
  public get glmPassword() {
    return this.getStringAttribute('glm_password');
  }
  public set glmPassword(value: string) {
    this._glmPassword = value;
  }
  public resetGlmPassword() {
    this._glmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmPasswordInput() {
    return this._glmPassword;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
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

  // new_email - computed: false, optional: true, required: false
  private _newEmail?: string; 
  public get newEmail() {
    return this.getStringAttribute('new_email');
  }
  public set newEmail(value: string) {
    this._newEmail = value;
  }
  public resetNewEmail() {
    this._newEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newEmailInput() {
    return this._newEmail;
  }

  // new_password - computed: false, optional: true, required: false
  private _newPassword?: string; 
  public get newPassword() {
    return this.getStringAttribute('new_password');
  }
  public set newPassword(value: string) {
    this._newPassword = value;
  }
  public resetNewPassword() {
    this._newPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordInput() {
    return this._newPassword;
  }

  // new_user - computed: false, optional: true, required: false
  private _newUser?: number; 
  public get newUser() {
    return this.getNumberAttribute('new_user');
  }
  public set newUser(value: number) {
    this._newUser = value;
  }
  public resetNewUser() {
    this._newUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUserInput() {
    return this._newUser;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: number; 
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }
  public set orgId(value: number) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
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
}
export interface GlmProxyServer {
  /**
  * Proxy server hostname or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#host Glm#host}
  */
  readonly host?: string;
  /**
  * Password for proxy authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#password Glm#password}
  */
  readonly password?: number;
  /**
  * Proxy server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#port Glm#port}
  */
  readonly port?: number;
  /**
  * password value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#secret_string Glm#secret_string}
  */
  readonly secretString?: string;
  /**
  * Username for proxy authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#username Glm#username}
  */
  readonly username?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#uuid Glm#uuid}
  */
  readonly uuid?: string;
}

export function glmProxyServerToTerraform(struct?: GlmProxyServerOutputReference | GlmProxyServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.numberToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    secret_string: cdktf.stringToTerraform(struct!.secretString),
    username: cdktf.stringToTerraform(struct!.username),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function glmProxyServerToHclTerraform(struct?: GlmProxyServerOutputReference | GlmProxyServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.numberToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_string: {
      value: cdktf.stringToHclTerraform(struct!.secretString),
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

export class GlmProxyServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlmProxyServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretString = this._secretString;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlmProxyServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._secretString = undefined;
      this._username = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._secretString = value.secretString;
      this._username = value.username;
      this._uuid = value.uuid;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: number; 
  public get password() {
    return this.getNumberAttribute('password');
  }
  public set password(value: number) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }

  // username - computed: false, optional: true, required: false
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
}
export interface GlmSend {
  /**
  * Send a ELM HA status request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#ha_status Glm#ha_status}
  */
  readonly haStatus?: number;
  /**
  * Immediately send a single GLM license request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#license_request Glm#license_request}
  */
  readonly licenseRequest?: number;
}

export function glmSendToTerraform(struct?: GlmSendOutputReference | GlmSend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_status: cdktf.numberToTerraform(struct!.haStatus),
    license_request: cdktf.numberToTerraform(struct!.licenseRequest),
  }
}


export function glmSendToHclTerraform(struct?: GlmSendOutputReference | GlmSend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_status: {
      value: cdktf.numberToHclTerraform(struct!.haStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    license_request: {
      value: cdktf.numberToHclTerraform(struct!.licenseRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlmSendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlmSend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.haStatus = this._haStatus;
    }
    if (this._licenseRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseRequest = this._licenseRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlmSend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._haStatus = undefined;
      this._licenseRequest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._haStatus = value.haStatus;
      this._licenseRequest = value.licenseRequest;
    }
  }

  // ha_status - computed: false, optional: true, required: false
  private _haStatus?: number; 
  public get haStatus() {
    return this.getNumberAttribute('ha_status');
  }
  public set haStatus(value: number) {
    this._haStatus = value;
  }
  public resetHaStatus() {
    this._haStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStatusInput() {
    return this._haStatus;
  }

  // license_request - computed: false, optional: true, required: false
  private _licenseRequest?: number; 
  public get licenseRequest() {
    return this.getNumberAttribute('license_request');
  }
  public set licenseRequest(value: number) {
    this._licenseRequest = value;
  }
  public resetLicenseRequest() {
    this._licenseRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseRequestInput() {
    return this._licenseRequest;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm thunder_glm}
*/
export class Glm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_glm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Glm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Glm to import
  * @param importFromId The id of the existing Glm that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Glm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_glm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/glm thunder_glm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GlmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_glm',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocateBandwidth = config.allocateBandwidth;
    this._applianceName = config.applianceName;
    this._burst = config.burst;
    this._checkExpiration = config.checkExpiration;
    this._enableRequests = config.enableRequests;
    this._enterprise = config.enterprise;
    this._enterpriseRequestType = config.enterpriseRequestType;
    this._host = config.host;
    this._id = config.id;
    this._interval = config.interval;
    this._port = config.port;
    this._thunderCapacityLicense = config.thunderCapacityLicense;
    this._token = config.token;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
    this._createLicenseRequest.internalValue = config.createLicenseRequest;
    this._enterpriseHaHostList.internalValue = config.enterpriseHaHostList;
    this._newLicense.internalValue = config.newLicense;
    this._proxyServer.internalValue = config.proxyServer;
    this._send.internalValue = config.send;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_bandwidth - computed: false, optional: true, required: false
  private _allocateBandwidth?: number; 
  public get allocateBandwidth() {
    return this.getNumberAttribute('allocate_bandwidth');
  }
  public set allocateBandwidth(value: number) {
    this._allocateBandwidth = value;
  }
  public resetAllocateBandwidth() {
    this._allocateBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateBandwidthInput() {
    return this._allocateBandwidth;
  }

  // appliance_name - computed: false, optional: true, required: false
  private _applianceName?: string; 
  public get applianceName() {
    return this.getStringAttribute('appliance_name');
  }
  public set applianceName(value: string) {
    this._applianceName = value;
  }
  public resetApplianceName() {
    this._applianceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceNameInput() {
    return this._applianceName;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // check_expiration - computed: false, optional: true, required: false
  private _checkExpiration?: number; 
  public get checkExpiration() {
    return this.getNumberAttribute('check_expiration');
  }
  public set checkExpiration(value: number) {
    this._checkExpiration = value;
  }
  public resetCheckExpiration() {
    this._checkExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkExpirationInput() {
    return this._checkExpiration;
  }

  // enable_requests - computed: false, optional: true, required: false
  private _enableRequests?: number; 
  public get enableRequests() {
    return this.getNumberAttribute('enable_requests');
  }
  public set enableRequests(value: number) {
    this._enableRequests = value;
  }
  public resetEnableRequests() {
    this._enableRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRequestsInput() {
    return this._enableRequests;
  }

  // enterprise - computed: false, optional: true, required: false
  private _enterprise?: string; 
  public get enterprise() {
    return this.getStringAttribute('enterprise');
  }
  public set enterprise(value: string) {
    this._enterprise = value;
  }
  public resetEnterprise() {
    this._enterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseInput() {
    return this._enterprise;
  }

  // enterprise_request_type - computed: false, optional: true, required: false
  private _enterpriseRequestType?: string; 
  public get enterpriseRequestType() {
    return this.getStringAttribute('enterprise_request_type');
  }
  public set enterpriseRequestType(value: string) {
    this._enterpriseRequestType = value;
  }
  public resetEnterpriseRequestType() {
    this._enterpriseRequestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseRequestTypeInput() {
    return this._enterpriseRequestType;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // thunder_capacity_license - computed: false, optional: true, required: false
  private _thunderCapacityLicense?: number; 
  public get thunderCapacityLicense() {
    return this.getNumberAttribute('thunder_capacity_license');
  }
  public set thunderCapacityLicense(value: number) {
    this._thunderCapacityLicense = value;
  }
  public resetThunderCapacityLicense() {
    this._thunderCapacityLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thunderCapacityLicenseInput() {
    return this._thunderCapacityLicense;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
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

  // create_license_request - computed: false, optional: true, required: false
  private _createLicenseRequest = new GlmCreateLicenseRequestOutputReference(this, "create_license_request");
  public get createLicenseRequest() {
    return this._createLicenseRequest;
  }
  public putCreateLicenseRequest(value: GlmCreateLicenseRequest) {
    this._createLicenseRequest.internalValue = value;
  }
  public resetCreateLicenseRequest() {
    this._createLicenseRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createLicenseRequestInput() {
    return this._createLicenseRequest.internalValue;
  }

  // enterprise_ha_host_list - computed: false, optional: true, required: false
  private _enterpriseHaHostList = new GlmEnterpriseHaHostListStructList(this, "enterprise_ha_host_list", false);
  public get enterpriseHaHostList() {
    return this._enterpriseHaHostList;
  }
  public putEnterpriseHaHostList(value: GlmEnterpriseHaHostListStruct[] | cdktf.IResolvable) {
    this._enterpriseHaHostList.internalValue = value;
  }
  public resetEnterpriseHaHostList() {
    this._enterpriseHaHostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseHaHostListInput() {
    return this._enterpriseHaHostList.internalValue;
  }

  // new_license - computed: false, optional: true, required: false
  private _newLicense = new GlmNewLicenseOutputReference(this, "new_license");
  public get newLicense() {
    return this._newLicense;
  }
  public putNewLicense(value: GlmNewLicense) {
    this._newLicense.internalValue = value;
  }
  public resetNewLicense() {
    this._newLicense.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newLicenseInput() {
    return this._newLicense.internalValue;
  }

  // proxy_server - computed: false, optional: true, required: false
  private _proxyServer = new GlmProxyServerOutputReference(this, "proxy_server");
  public get proxyServer() {
    return this._proxyServer;
  }
  public putProxyServer(value: GlmProxyServer) {
    this._proxyServer.internalValue = value;
  }
  public resetProxyServer() {
    this._proxyServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerInput() {
    return this._proxyServer.internalValue;
  }

  // send - computed: false, optional: true, required: false
  private _send = new GlmSendOutputReference(this, "send");
  public get send() {
    return this._send;
  }
  public putSend(value: GlmSend) {
    this._send.internalValue = value;
  }
  public resetSend() {
    this._send.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocate_bandwidth: cdktf.numberToTerraform(this._allocateBandwidth),
      appliance_name: cdktf.stringToTerraform(this._applianceName),
      burst: cdktf.numberToTerraform(this._burst),
      check_expiration: cdktf.numberToTerraform(this._checkExpiration),
      enable_requests: cdktf.numberToTerraform(this._enableRequests),
      enterprise: cdktf.stringToTerraform(this._enterprise),
      enterprise_request_type: cdktf.stringToTerraform(this._enterpriseRequestType),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      port: cdktf.numberToTerraform(this._port),
      thunder_capacity_license: cdktf.numberToTerraform(this._thunderCapacityLicense),
      token: cdktf.stringToTerraform(this._token),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      create_license_request: glmCreateLicenseRequestToTerraform(this._createLicenseRequest.internalValue),
      enterprise_ha_host_list: cdktf.listMapper(glmEnterpriseHaHostListStructToTerraform, true)(this._enterpriseHaHostList.internalValue),
      new_license: glmNewLicenseToTerraform(this._newLicense.internalValue),
      proxy_server: glmProxyServerToTerraform(this._proxyServer.internalValue),
      send: glmSendToTerraform(this._send.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_bandwidth: {
        value: cdktf.numberToHclTerraform(this._allocateBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      appliance_name: {
        value: cdktf.stringToHclTerraform(this._applianceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst: {
        value: cdktf.numberToHclTerraform(this._burst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_expiration: {
        value: cdktf.numberToHclTerraform(this._checkExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_requests: {
        value: cdktf.numberToHclTerraform(this._enableRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enterprise: {
        value: cdktf.stringToHclTerraform(this._enterprise),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_request_type: {
        value: cdktf.stringToHclTerraform(this._enterpriseRequestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thunder_capacity_license: {
        value: cdktf.numberToHclTerraform(this._thunderCapacityLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_license_request: {
        value: glmCreateLicenseRequestToHclTerraform(this._createLicenseRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlmCreateLicenseRequestList",
      },
      enterprise_ha_host_list: {
        value: cdktf.listMapperHcl(glmEnterpriseHaHostListStructToHclTerraform, true)(this._enterpriseHaHostList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlmEnterpriseHaHostListStructList",
      },
      new_license: {
        value: glmNewLicenseToHclTerraform(this._newLicense.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlmNewLicenseList",
      },
      proxy_server: {
        value: glmProxyServerToHclTerraform(this._proxyServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlmProxyServerList",
      },
      send: {
        value: glmSendToHclTerraform(this._send.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlmSendList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
