// https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SddcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#delay_account_link Sddc#delay_account_link}
  */
  readonly delayAccountLink?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#deployment_type Sddc#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * The EDRS policy type. This can either be 'cost', 'performance', 'storage-scaleup' or 'rapid-scaleup'. Default : storage-scaleup. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#edrs_policy_type Sddc#edrs_policy_type}
  */
  readonly edrsPolicyType?: string;
  /**
  * True if EDRS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#enable_edrs Sddc#enable_edrs}
  */
  readonly enableEdrs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#host_instance_type Sddc#host_instance_type}
  */
  readonly hostInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#id Sddc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Uplink MTU of direct connect, SDDC-grouping and outposts traffic in edge tier-0 router port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#intranet_mtu_uplink Sddc#intranet_mtu_uplink}
  */
  readonly intranetMtuUplink?: number;
  /**
  * The maximum number of hosts that the cluster can scale out to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#max_hosts Sddc#max_hosts}
  */
  readonly maxHosts?: number;
  /**
  * The minimum number of hosts that the cluster can scale in to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#min_hosts Sddc#min_hosts}
  */
  readonly minHosts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#nsxt_cloudadmin Sddc#nsxt_cloudadmin}
  */
  readonly nsxtCloudadmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#nsxt_cloudadmin_password Sddc#nsxt_cloudadmin_password}
  */
  readonly nsxtCloudadminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#nsxt_cloudaudit Sddc#nsxt_cloudaudit}
  */
  readonly nsxtCloudaudit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#nsxt_cloudaudit_password Sddc#nsxt_cloudaudit_password}
  */
  readonly nsxtCloudauditPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#nsxt_private_ip Sddc#nsxt_private_ip}
  */
  readonly nsxtPrivateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#nsxt_private_url Sddc#nsxt_private_url}
  */
  readonly nsxtPrivateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#nsxt_ui Sddc#nsxt_ui}
  */
  readonly nsxtUi?: boolean | cdktf.IResolvable;
  /**
  * The amount of hosts in the primary cluster of the SDDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#num_host Sddc#num_host}
  */
  readonly numHost: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#provider_type Sddc#provider_type}
  */
  readonly providerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#region Sddc#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#sddc_name Sddc#sddc_name}
  */
  readonly sddcName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#sddc_template_id Sddc#sddc_template_id}
  */
  readonly sddcTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#sddc_type Sddc#sddc_type}
  */
  readonly sddcType?: string;
  /**
  * The size of the vCenter and NSX appliances. 'large' or 'LARGE' SDDC size corresponds to a large vCenter appliance and large NSX appliance. 'medium' or 'MEDIUM' SDDC size corresponds to medium vCenter appliance and medium NSX appliance. Default : 'medium'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#size Sddc#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#skip_creating_vxlan Sddc#skip_creating_vxlan}
  */
  readonly skipCreatingVxlan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#sso_domain Sddc#sso_domain}
  */
  readonly ssoDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#vpc_cidr Sddc#vpc_cidr}
  */
  readonly vpcCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#vxlan_subnet Sddc#vxlan_subnet}
  */
  readonly vxlanSubnet?: string;
  /**
  * account_link_sddc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#account_link_sddc_config Sddc#account_link_sddc_config}
  */
  readonly accountLinkSddcConfig?: SddcAccountLinkSddcConfig[] | cdktf.IResolvable;
  /**
  * microsoft_licensing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#microsoft_licensing_config Sddc#microsoft_licensing_config}
  */
  readonly microsoftLicensingConfig?: SddcMicrosoftLicensingConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#timeouts Sddc#timeouts}
  */
  readonly timeouts?: SddcTimeouts;
}
export interface SddcAccountLinkSddcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#connected_account_id Sddc#connected_account_id}
  */
  readonly connectedAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#customer_subnet_ids Sddc#customer_subnet_ids}
  */
  readonly customerSubnetIds?: string[];
}

export function sddcAccountLinkSddcConfigToTerraform(struct?: SddcAccountLinkSddcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected_account_id: cdktf.stringToTerraform(struct!.connectedAccountId),
    customer_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customerSubnetIds),
  }
}


export function sddcAccountLinkSddcConfigToHclTerraform(struct?: SddcAccountLinkSddcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected_account_id: {
      value: cdktf.stringToHclTerraform(struct!.connectedAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customerSubnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SddcAccountLinkSddcConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SddcAccountLinkSddcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectedAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedAccountId = this._connectedAccountId;
    }
    if (this._customerSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerSubnetIds = this._customerSubnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SddcAccountLinkSddcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectedAccountId = undefined;
      this._customerSubnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectedAccountId = value.connectedAccountId;
      this._customerSubnetIds = value.customerSubnetIds;
    }
  }

  // connected_account_id - computed: false, optional: true, required: false
  private _connectedAccountId?: string; 
  public get connectedAccountId() {
    return this.getStringAttribute('connected_account_id');
  }
  public set connectedAccountId(value: string) {
    this._connectedAccountId = value;
  }
  public resetConnectedAccountId() {
    this._connectedAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedAccountIdInput() {
    return this._connectedAccountId;
  }

  // customer_subnet_ids - computed: false, optional: true, required: false
  private _customerSubnetIds?: string[]; 
  public get customerSubnetIds() {
    return this.getListAttribute('customer_subnet_ids');
  }
  public set customerSubnetIds(value: string[]) {
    this._customerSubnetIds = value;
  }
  public resetCustomerSubnetIds() {
    this._customerSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerSubnetIdsInput() {
    return this._customerSubnetIds;
  }
}

export class SddcAccountLinkSddcConfigList extends cdktf.ComplexList {
  public internalValue? : SddcAccountLinkSddcConfig[] | cdktf.IResolvable

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
  public get(index: number): SddcAccountLinkSddcConfigOutputReference {
    return new SddcAccountLinkSddcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SddcMicrosoftLicensingConfig {
  /**
  * Flag to identify if it is Academic Standard or Commercial Standard License.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#academic_license Sddc#academic_license}
  */
  readonly academicLicense?: boolean | cdktf.IResolvable;
  /**
  * The status of MSSQL licensing for this SDDC’s clusters. Possible values : enabled, ENABLED, disabled, DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#mssql_licensing Sddc#mssql_licensing}
  */
  readonly mssqlLicensing?: string;
  /**
  * The status of Windows licensing for this SDDC's clusters. Possible values : enabled, ENABLED, disabled, DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#windows_licensing Sddc#windows_licensing}
  */
  readonly windowsLicensing?: string;
}

export function sddcMicrosoftLicensingConfigToTerraform(struct?: SddcMicrosoftLicensingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    academic_license: cdktf.booleanToTerraform(struct!.academicLicense),
    mssql_licensing: cdktf.stringToTerraform(struct!.mssqlLicensing),
    windows_licensing: cdktf.stringToTerraform(struct!.windowsLicensing),
  }
}


export function sddcMicrosoftLicensingConfigToHclTerraform(struct?: SddcMicrosoftLicensingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    academic_license: {
      value: cdktf.booleanToHclTerraform(struct!.academicLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mssql_licensing: {
      value: cdktf.stringToHclTerraform(struct!.mssqlLicensing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windows_licensing: {
      value: cdktf.stringToHclTerraform(struct!.windowsLicensing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SddcMicrosoftLicensingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SddcMicrosoftLicensingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._academicLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.academicLicense = this._academicLicense;
    }
    if (this._mssqlLicensing !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssqlLicensing = this._mssqlLicensing;
    }
    if (this._windowsLicensing !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsLicensing = this._windowsLicensing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SddcMicrosoftLicensingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._academicLicense = undefined;
      this._mssqlLicensing = undefined;
      this._windowsLicensing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._academicLicense = value.academicLicense;
      this._mssqlLicensing = value.mssqlLicensing;
      this._windowsLicensing = value.windowsLicensing;
    }
  }

  // academic_license - computed: false, optional: true, required: false
  private _academicLicense?: boolean | cdktf.IResolvable; 
  public get academicLicense() {
    return this.getBooleanAttribute('academic_license');
  }
  public set academicLicense(value: boolean | cdktf.IResolvable) {
    this._academicLicense = value;
  }
  public resetAcademicLicense() {
    this._academicLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get academicLicenseInput() {
    return this._academicLicense;
  }

  // mssql_licensing - computed: false, optional: true, required: false
  private _mssqlLicensing?: string; 
  public get mssqlLicensing() {
    return this.getStringAttribute('mssql_licensing');
  }
  public set mssqlLicensing(value: string) {
    this._mssqlLicensing = value;
  }
  public resetMssqlLicensing() {
    this._mssqlLicensing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlLicensingInput() {
    return this._mssqlLicensing;
  }

  // windows_licensing - computed: false, optional: true, required: false
  private _windowsLicensing?: string; 
  public get windowsLicensing() {
    return this.getStringAttribute('windows_licensing');
  }
  public set windowsLicensing(value: string) {
    this._windowsLicensing = value;
  }
  public resetWindowsLicensing() {
    this._windowsLicensing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsLicensingInput() {
    return this._windowsLicensing;
  }
}

export class SddcMicrosoftLicensingConfigList extends cdktf.ComplexList {
  public internalValue? : SddcMicrosoftLicensingConfig[] | cdktf.IResolvable

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
  public get(index: number): SddcMicrosoftLicensingConfigOutputReference {
    return new SddcMicrosoftLicensingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SddcTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#create Sddc#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#delete Sddc#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#update Sddc#update}
  */
  readonly update?: string;
}

export function sddcTimeoutsToTerraform(struct?: SddcTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function sddcTimeoutsToHclTerraform(struct?: SddcTimeouts | cdktf.IResolvable): any {
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

export class SddcTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SddcTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SddcTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc vmc_sddc}
*/
export class Sddc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmc_sddc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sddc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sddc to import
  * @param importFromId The id of the existing Sddc that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sddc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmc_sddc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/resources/sddc vmc_sddc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SddcConfig
  */
  public constructor(scope: Construct, id: string, config: SddcConfig) {
    super(scope, id, {
      terraformResourceType: 'vmc_sddc',
      terraformGeneratorMetadata: {
        providerName: 'vmc',
        providerVersion: '1.15.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delayAccountLink = config.delayAccountLink;
    this._deploymentType = config.deploymentType;
    this._edrsPolicyType = config.edrsPolicyType;
    this._enableEdrs = config.enableEdrs;
    this._hostInstanceType = config.hostInstanceType;
    this._id = config.id;
    this._intranetMtuUplink = config.intranetMtuUplink;
    this._maxHosts = config.maxHosts;
    this._minHosts = config.minHosts;
    this._nsxtCloudadmin = config.nsxtCloudadmin;
    this._nsxtCloudadminPassword = config.nsxtCloudadminPassword;
    this._nsxtCloudaudit = config.nsxtCloudaudit;
    this._nsxtCloudauditPassword = config.nsxtCloudauditPassword;
    this._nsxtPrivateIp = config.nsxtPrivateIp;
    this._nsxtPrivateUrl = config.nsxtPrivateUrl;
    this._nsxtUi = config.nsxtUi;
    this._numHost = config.numHost;
    this._providerType = config.providerType;
    this._region = config.region;
    this._sddcName = config.sddcName;
    this._sddcTemplateId = config.sddcTemplateId;
    this._sddcType = config.sddcType;
    this._size = config.size;
    this._skipCreatingVxlan = config.skipCreatingVxlan;
    this._ssoDomain = config.ssoDomain;
    this._vpcCidr = config.vpcCidr;
    this._vxlanSubnet = config.vxlanSubnet;
    this._accountLinkSddcConfig.internalValue = config.accountLinkSddcConfig;
    this._microsoftLicensingConfig.internalValue = config.microsoftLicensingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_link_state - computed: true, optional: false, required: false
  public get accountLinkState() {
    return this.getStringAttribute('account_link_state');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // cloud_password - computed: true, optional: false, required: false
  public get cloudPassword() {
    return this.getStringAttribute('cloud_password');
  }

  // cloud_username - computed: true, optional: false, required: false
  public get cloudUsername() {
    return this.getStringAttribute('cloud_username');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_info - computed: true, optional: false, required: false
  private _clusterInfo = new cdktf.StringMap(this, "cluster_info");
  public get clusterInfo() {
    return this._clusterInfo;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // delay_account_link - computed: false, optional: true, required: false
  private _delayAccountLink?: boolean | cdktf.IResolvable; 
  public get delayAccountLink() {
    return this.getBooleanAttribute('delay_account_link');
  }
  public set delayAccountLink(value: boolean | cdktf.IResolvable) {
    this._delayAccountLink = value;
  }
  public resetDelayAccountLink() {
    this._delayAccountLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAccountLinkInput() {
    return this._delayAccountLink;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // edrs_policy_type - computed: true, optional: true, required: false
  private _edrsPolicyType?: string; 
  public get edrsPolicyType() {
    return this.getStringAttribute('edrs_policy_type');
  }
  public set edrsPolicyType(value: string) {
    this._edrsPolicyType = value;
  }
  public resetEdrsPolicyType() {
    this._edrsPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edrsPolicyTypeInput() {
    return this._edrsPolicyType;
  }

  // enable_edrs - computed: true, optional: true, required: false
  private _enableEdrs?: boolean | cdktf.IResolvable; 
  public get enableEdrs() {
    return this.getBooleanAttribute('enable_edrs');
  }
  public set enableEdrs(value: boolean | cdktf.IResolvable) {
    this._enableEdrs = value;
  }
  public resetEnableEdrs() {
    this._enableEdrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdrsInput() {
    return this._enableEdrs;
  }

  // host_instance_type - computed: false, optional: true, required: false
  private _hostInstanceType?: string; 
  public get hostInstanceType() {
    return this.getStringAttribute('host_instance_type');
  }
  public set hostInstanceType(value: string) {
    this._hostInstanceType = value;
  }
  public resetHostInstanceType() {
    this._hostInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInstanceTypeInput() {
    return this._hostInstanceType;
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

  // intranet_mtu_uplink - computed: false, optional: true, required: false
  private _intranetMtuUplink?: number; 
  public get intranetMtuUplink() {
    return this.getNumberAttribute('intranet_mtu_uplink');
  }
  public set intranetMtuUplink(value: number) {
    this._intranetMtuUplink = value;
  }
  public resetIntranetMtuUplink() {
    this._intranetMtuUplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetMtuUplinkInput() {
    return this._intranetMtuUplink;
  }

  // max_hosts - computed: true, optional: true, required: false
  private _maxHosts?: number; 
  public get maxHosts() {
    return this.getNumberAttribute('max_hosts');
  }
  public set maxHosts(value: number) {
    this._maxHosts = value;
  }
  public resetMaxHosts() {
    this._maxHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHostsInput() {
    return this._maxHosts;
  }

  // min_hosts - computed: true, optional: true, required: false
  private _minHosts?: number; 
  public get minHosts() {
    return this.getNumberAttribute('min_hosts');
  }
  public set minHosts(value: number) {
    this._minHosts = value;
  }
  public resetMinHosts() {
    this._minHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHostsInput() {
    return this._minHosts;
  }

  // nsxt_cloudadmin - computed: true, optional: true, required: false
  private _nsxtCloudadmin?: string; 
  public get nsxtCloudadmin() {
    return this.getStringAttribute('nsxt_cloudadmin');
  }
  public set nsxtCloudadmin(value: string) {
    this._nsxtCloudadmin = value;
  }
  public resetNsxtCloudadmin() {
    this._nsxtCloudadmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtCloudadminInput() {
    return this._nsxtCloudadmin;
  }

  // nsxt_cloudadmin_password - computed: true, optional: true, required: false
  private _nsxtCloudadminPassword?: string; 
  public get nsxtCloudadminPassword() {
    return this.getStringAttribute('nsxt_cloudadmin_password');
  }
  public set nsxtCloudadminPassword(value: string) {
    this._nsxtCloudadminPassword = value;
  }
  public resetNsxtCloudadminPassword() {
    this._nsxtCloudadminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtCloudadminPasswordInput() {
    return this._nsxtCloudadminPassword;
  }

  // nsxt_cloudaudit - computed: true, optional: true, required: false
  private _nsxtCloudaudit?: string; 
  public get nsxtCloudaudit() {
    return this.getStringAttribute('nsxt_cloudaudit');
  }
  public set nsxtCloudaudit(value: string) {
    this._nsxtCloudaudit = value;
  }
  public resetNsxtCloudaudit() {
    this._nsxtCloudaudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtCloudauditInput() {
    return this._nsxtCloudaudit;
  }

  // nsxt_cloudaudit_password - computed: true, optional: true, required: false
  private _nsxtCloudauditPassword?: string; 
  public get nsxtCloudauditPassword() {
    return this.getStringAttribute('nsxt_cloudaudit_password');
  }
  public set nsxtCloudauditPassword(value: string) {
    this._nsxtCloudauditPassword = value;
  }
  public resetNsxtCloudauditPassword() {
    this._nsxtCloudauditPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtCloudauditPasswordInput() {
    return this._nsxtCloudauditPassword;
  }

  // nsxt_private_ip - computed: true, optional: true, required: false
  private _nsxtPrivateIp?: string; 
  public get nsxtPrivateIp() {
    return this.getStringAttribute('nsxt_private_ip');
  }
  public set nsxtPrivateIp(value: string) {
    this._nsxtPrivateIp = value;
  }
  public resetNsxtPrivateIp() {
    this._nsxtPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtPrivateIpInput() {
    return this._nsxtPrivateIp;
  }

  // nsxt_private_url - computed: true, optional: true, required: false
  private _nsxtPrivateUrl?: string; 
  public get nsxtPrivateUrl() {
    return this.getStringAttribute('nsxt_private_url');
  }
  public set nsxtPrivateUrl(value: string) {
    this._nsxtPrivateUrl = value;
  }
  public resetNsxtPrivateUrl() {
    this._nsxtPrivateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtPrivateUrlInput() {
    return this._nsxtPrivateUrl;
  }

  // nsxt_reverse_proxy_url - computed: true, optional: false, required: false
  public get nsxtReverseProxyUrl() {
    return this.getStringAttribute('nsxt_reverse_proxy_url');
  }

  // nsxt_ui - computed: true, optional: true, required: false
  private _nsxtUi?: boolean | cdktf.IResolvable; 
  public get nsxtUi() {
    return this.getBooleanAttribute('nsxt_ui');
  }
  public set nsxtUi(value: boolean | cdktf.IResolvable) {
    this._nsxtUi = value;
  }
  public resetNsxtUi() {
    this._nsxtUi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtUiInput() {
    return this._nsxtUi;
  }

  // num_host - computed: false, optional: false, required: true
  private _numHost?: number; 
  public get numHost() {
    return this.getNumberAttribute('num_host');
  }
  public set numHost(value: number) {
    this._numHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numHostInput() {
    return this._numHost;
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // provider_type - computed: false, optional: true, required: false
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  public resetProviderType() {
    this._providerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
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

  // sddc_access_state - computed: true, optional: false, required: false
  public get sddcAccessState() {
    return this.getStringAttribute('sddc_access_state');
  }

  // sddc_name - computed: false, optional: false, required: true
  private _sddcName?: string; 
  public get sddcName() {
    return this.getStringAttribute('sddc_name');
  }
  public set sddcName(value: string) {
    this._sddcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcNameInput() {
    return this._sddcName;
  }

  // sddc_size - computed: true, optional: false, required: false
  private _sddcSize = new cdktf.StringMap(this, "sddc_size");
  public get sddcSize() {
    return this._sddcSize;
  }

  // sddc_state - computed: true, optional: false, required: false
  public get sddcState() {
    return this.getStringAttribute('sddc_state');
  }

  // sddc_template_id - computed: false, optional: true, required: false
  private _sddcTemplateId?: string; 
  public get sddcTemplateId() {
    return this.getStringAttribute('sddc_template_id');
  }
  public set sddcTemplateId(value: string) {
    this._sddcTemplateId = value;
  }
  public resetSddcTemplateId() {
    this._sddcTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcTemplateIdInput() {
    return this._sddcTemplateId;
  }

  // sddc_type - computed: false, optional: true, required: false
  private _sddcType?: string; 
  public get sddcType() {
    return this.getStringAttribute('sddc_type');
  }
  public set sddcType(value: string) {
    this._sddcType = value;
  }
  public resetSddcType() {
    this._sddcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcTypeInput() {
    return this._sddcType;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // skip_creating_vxlan - computed: false, optional: true, required: false
  private _skipCreatingVxlan?: boolean | cdktf.IResolvable; 
  public get skipCreatingVxlan() {
    return this.getBooleanAttribute('skip_creating_vxlan');
  }
  public set skipCreatingVxlan(value: boolean | cdktf.IResolvable) {
    this._skipCreatingVxlan = value;
  }
  public resetSkipCreatingVxlan() {
    this._skipCreatingVxlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCreatingVxlanInput() {
    return this._skipCreatingVxlan;
  }

  // sso_domain - computed: false, optional: true, required: false
  private _ssoDomain?: string; 
  public get ssoDomain() {
    return this.getStringAttribute('sso_domain');
  }
  public set ssoDomain(value: string) {
    this._ssoDomain = value;
  }
  public resetSsoDomain() {
    this._ssoDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoDomainInput() {
    return this._ssoDomain;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // updated_by_user_id - computed: true, optional: false, required: false
  public get updatedByUserId() {
    return this.getStringAttribute('updated_by_user_id');
  }

  // updated_by_user_name - computed: true, optional: false, required: false
  public get updatedByUserName() {
    return this.getStringAttribute('updated_by_user_name');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // vc_url - computed: true, optional: false, required: false
  public get vcUrl() {
    return this.getStringAttribute('vc_url');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpc_cidr - computed: false, optional: true, required: false
  private _vpcCidr?: string; 
  public get vpcCidr() {
    return this.getStringAttribute('vpc_cidr');
  }
  public set vpcCidr(value: string) {
    this._vpcCidr = value;
  }
  public resetVpcCidr() {
    this._vpcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrInput() {
    return this._vpcCidr;
  }

  // vxlan_subnet - computed: false, optional: true, required: false
  private _vxlanSubnet?: string; 
  public get vxlanSubnet() {
    return this.getStringAttribute('vxlan_subnet');
  }
  public set vxlanSubnet(value: string) {
    this._vxlanSubnet = value;
  }
  public resetVxlanSubnet() {
    this._vxlanSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanSubnetInput() {
    return this._vxlanSubnet;
  }

  // account_link_sddc_config - computed: false, optional: true, required: false
  private _accountLinkSddcConfig = new SddcAccountLinkSddcConfigList(this, "account_link_sddc_config", false);
  public get accountLinkSddcConfig() {
    return this._accountLinkSddcConfig;
  }
  public putAccountLinkSddcConfig(value: SddcAccountLinkSddcConfig[] | cdktf.IResolvable) {
    this._accountLinkSddcConfig.internalValue = value;
  }
  public resetAccountLinkSddcConfig() {
    this._accountLinkSddcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLinkSddcConfigInput() {
    return this._accountLinkSddcConfig.internalValue;
  }

  // microsoft_licensing_config - computed: false, optional: true, required: false
  private _microsoftLicensingConfig = new SddcMicrosoftLicensingConfigList(this, "microsoft_licensing_config", false);
  public get microsoftLicensingConfig() {
    return this._microsoftLicensingConfig;
  }
  public putMicrosoftLicensingConfig(value: SddcMicrosoftLicensingConfig[] | cdktf.IResolvable) {
    this._microsoftLicensingConfig.internalValue = value;
  }
  public resetMicrosoftLicensingConfig() {
    this._microsoftLicensingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftLicensingConfigInput() {
    return this._microsoftLicensingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SddcTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SddcTimeouts) {
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
      delay_account_link: cdktf.booleanToTerraform(this._delayAccountLink),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      edrs_policy_type: cdktf.stringToTerraform(this._edrsPolicyType),
      enable_edrs: cdktf.booleanToTerraform(this._enableEdrs),
      host_instance_type: cdktf.stringToTerraform(this._hostInstanceType),
      id: cdktf.stringToTerraform(this._id),
      intranet_mtu_uplink: cdktf.numberToTerraform(this._intranetMtuUplink),
      max_hosts: cdktf.numberToTerraform(this._maxHosts),
      min_hosts: cdktf.numberToTerraform(this._minHosts),
      nsxt_cloudadmin: cdktf.stringToTerraform(this._nsxtCloudadmin),
      nsxt_cloudadmin_password: cdktf.stringToTerraform(this._nsxtCloudadminPassword),
      nsxt_cloudaudit: cdktf.stringToTerraform(this._nsxtCloudaudit),
      nsxt_cloudaudit_password: cdktf.stringToTerraform(this._nsxtCloudauditPassword),
      nsxt_private_ip: cdktf.stringToTerraform(this._nsxtPrivateIp),
      nsxt_private_url: cdktf.stringToTerraform(this._nsxtPrivateUrl),
      nsxt_ui: cdktf.booleanToTerraform(this._nsxtUi),
      num_host: cdktf.numberToTerraform(this._numHost),
      provider_type: cdktf.stringToTerraform(this._providerType),
      region: cdktf.stringToTerraform(this._region),
      sddc_name: cdktf.stringToTerraform(this._sddcName),
      sddc_template_id: cdktf.stringToTerraform(this._sddcTemplateId),
      sddc_type: cdktf.stringToTerraform(this._sddcType),
      size: cdktf.stringToTerraform(this._size),
      skip_creating_vxlan: cdktf.booleanToTerraform(this._skipCreatingVxlan),
      sso_domain: cdktf.stringToTerraform(this._ssoDomain),
      vpc_cidr: cdktf.stringToTerraform(this._vpcCidr),
      vxlan_subnet: cdktf.stringToTerraform(this._vxlanSubnet),
      account_link_sddc_config: cdktf.listMapper(sddcAccountLinkSddcConfigToTerraform, true)(this._accountLinkSddcConfig.internalValue),
      microsoft_licensing_config: cdktf.listMapper(sddcMicrosoftLicensingConfigToTerraform, true)(this._microsoftLicensingConfig.internalValue),
      timeouts: sddcTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay_account_link: {
        value: cdktf.booleanToHclTerraform(this._delayAccountLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edrs_policy_type: {
        value: cdktf.stringToHclTerraform(this._edrsPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_edrs: {
        value: cdktf.booleanToHclTerraform(this._enableEdrs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_instance_type: {
        value: cdktf.stringToHclTerraform(this._hostInstanceType),
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
      intranet_mtu_uplink: {
        value: cdktf.numberToHclTerraform(this._intranetMtuUplink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_hosts: {
        value: cdktf.numberToHclTerraform(this._maxHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_hosts: {
        value: cdktf.numberToHclTerraform(this._minHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsxt_cloudadmin: {
        value: cdktf.stringToHclTerraform(this._nsxtCloudadmin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsxt_cloudadmin_password: {
        value: cdktf.stringToHclTerraform(this._nsxtCloudadminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsxt_cloudaudit: {
        value: cdktf.stringToHclTerraform(this._nsxtCloudaudit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsxt_cloudaudit_password: {
        value: cdktf.stringToHclTerraform(this._nsxtCloudauditPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsxt_private_ip: {
        value: cdktf.stringToHclTerraform(this._nsxtPrivateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsxt_private_url: {
        value: cdktf.stringToHclTerraform(this._nsxtPrivateUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsxt_ui: {
        value: cdktf.booleanToHclTerraform(this._nsxtUi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      num_host: {
        value: cdktf.numberToHclTerraform(this._numHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_name: {
        value: cdktf.stringToHclTerraform(this._sddcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_template_id: {
        value: cdktf.stringToHclTerraform(this._sddcTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_type: {
        value: cdktf.stringToHclTerraform(this._sddcType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_creating_vxlan: {
        value: cdktf.booleanToHclTerraform(this._skipCreatingVxlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sso_domain: {
        value: cdktf.stringToHclTerraform(this._ssoDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_cidr: {
        value: cdktf.stringToHclTerraform(this._vpcCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan_subnet: {
        value: cdktf.stringToHclTerraform(this._vxlanSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_link_sddc_config: {
        value: cdktf.listMapperHcl(sddcAccountLinkSddcConfigToHclTerraform, true)(this._accountLinkSddcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SddcAccountLinkSddcConfigList",
      },
      microsoft_licensing_config: {
        value: cdktf.listMapperHcl(sddcMicrosoftLicensingConfigToHclTerraform, true)(this._microsoftLicensingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SddcMicrosoftLicensingConfigList",
      },
      timeouts: {
        value: sddcTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SddcTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
