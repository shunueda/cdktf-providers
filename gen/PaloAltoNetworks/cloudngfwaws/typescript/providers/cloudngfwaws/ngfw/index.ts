// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgfwConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#account_id Ngfw#account_id}
  */
  readonly accountId?: string;
  /**
  * The list of allowed accounts for this NGFW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#allowlist_accounts Ngfw#allowlist_accounts}
  */
  readonly allowlistAccounts?: string[];
  /**
  * App-ID version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#app_id_version Ngfw#app_id_version}
  */
  readonly appIdVersion?: string;
  /**
  * Automatic App-ID upgrade version number. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#automatic_upgrade_app_id_version Ngfw#automatic_upgrade_app_id_version}
  */
  readonly automaticUpgradeAppIdVersion?: boolean | cdktf.IResolvable;
  /**
  * The list of availability zone IDs for this NGFW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#az_list Ngfw#az_list}
  */
  readonly azList: string[];
  /**
  * Enables or disables change protection for the NGFW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#change_protection Ngfw#change_protection}
  */
  readonly changeProtection?: string[];
  /**
  * The NGFW description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#description Ngfw#description}
  */
  readonly description?: string;
  /**
  * Set endpoint mode from the following options. Valid values are `ServiceManaged` or `CustomerManaged`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#endpoint_mode Ngfw#endpoint_mode}
  */
  readonly endpointMode?: string;
  /**
  * The global rulestack for this NGFW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#global_rulestack Ngfw#global_rulestack}
  */
  readonly globalRulestack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#id Ngfw#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The link ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#link_id Ngfw#link_id}
  */
  readonly linkId?: string;
  /**
  * Share NGFW with Multiple VPCs. This feature can be enabled only if the endpoint_mode is CustomerManaged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#multi_vpc Ngfw#multi_vpc}
  */
  readonly multiVpc?: boolean | cdktf.IResolvable;
  /**
  * The NGFW name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#name Ngfw#name}
  */
  readonly name: string;
  /**
  * The rulestack for this NGFW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#rulestack Ngfw#rulestack}
  */
  readonly rulestack?: string;
  /**
  * The tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#tags Ngfw#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The VPC ID for the NGFW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#vpc_id Ngfw#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * egress_nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#egress_nat Ngfw#egress_nat}
  */
  readonly egressNat?: NgfwEgressNat[] | cdktf.IResolvable;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#endpoints Ngfw#endpoints}
  */
  readonly endpoints?: NgfwEndpoints[] | cdktf.IResolvable;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#private_access Ngfw#private_access}
  */
  readonly privateAccess?: NgfwPrivateAccess[] | cdktf.IResolvable;
  /**
  * subnet_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#subnet_mapping Ngfw#subnet_mapping}
  */
  readonly subnetMapping?: NgfwSubnetMapping[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#timeouts Ngfw#timeouts}
  */
  readonly timeouts?: NgfwTimeouts;
  /**
  * user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#user_id Ngfw#user_id}
  */
  readonly userId?: NgfwUserId[] | cdktf.IResolvable;
}
export interface NgfwStatus {
}

export function ngfwStatusToTerraform(struct?: NgfwStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ngfwStatusToHclTerraform(struct?: NgfwStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NgfwStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_rulestack_commit_status - computed: true, optional: false, required: false
  public get deviceRulestackCommitStatus() {
    return this.getStringAttribute('device_rulestack_commit_status');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // firewall_status - computed: true, optional: false, required: false
  public get firewallStatus() {
    return this.getStringAttribute('firewall_status');
  }

  // rulestack_status - computed: true, optional: false, required: false
  public get rulestackStatus() {
    return this.getStringAttribute('rulestack_status');
  }
}

export class NgfwStatusList extends cdktf.ComplexList {

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
  public get(index: number): NgfwStatusOutputReference {
    return new NgfwStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgfwEgressNatSettings {
  /**
  * Set ip pool type from the following options. Valid values are `AWSService` or `BYOIP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#ip_pool_type Ngfw#ip_pool_type}
  */
  readonly ipPoolType?: string;
  /**
  * The IP pool ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#ipam_pool_id Ngfw#ipam_pool_id}
  */
  readonly ipamPoolId?: string;
}

export function ngfwEgressNatSettingsToTerraform(struct?: NgfwEgressNatSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_pool_type: cdktf.stringToTerraform(struct!.ipPoolType),
    ipam_pool_id: cdktf.stringToTerraform(struct!.ipamPoolId),
  }
}


export function ngfwEgressNatSettingsToHclTerraform(struct?: NgfwEgressNatSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_pool_type: {
      value: cdktf.stringToHclTerraform(struct!.ipPoolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipam_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.ipamPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgfwEgressNatSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwEgressNatSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPoolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolType = this._ipPoolType;
    }
    if (this._ipamPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipamPoolId = this._ipamPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwEgressNatSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipPoolType = undefined;
      this._ipamPoolId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipPoolType = value.ipPoolType;
      this._ipamPoolId = value.ipamPoolId;
    }
  }

  // ip_pool_type - computed: false, optional: true, required: false
  private _ipPoolType?: string; 
  public get ipPoolType() {
    return this.getStringAttribute('ip_pool_type');
  }
  public set ipPoolType(value: string) {
    this._ipPoolType = value;
  }
  public resetIpPoolType() {
    this._ipPoolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolTypeInput() {
    return this._ipPoolType;
  }

  // ipam_pool_id - computed: false, optional: true, required: false
  private _ipamPoolId?: string; 
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }
  public set ipamPoolId(value: string) {
    this._ipamPoolId = value;
  }
  public resetIpamPoolId() {
    this._ipamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolIdInput() {
    return this._ipamPoolId;
  }
}

export class NgfwEgressNatSettingsList extends cdktf.ComplexList {
  public internalValue? : NgfwEgressNatSettings[] | cdktf.IResolvable

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
  public get(index: number): NgfwEgressNatSettingsOutputReference {
    return new NgfwEgressNatSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgfwEgressNat {
  /**
  * Enable egress NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#enabled Ngfw#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#settings Ngfw#settings}
  */
  readonly settings?: NgfwEgressNatSettings[] | cdktf.IResolvable;
}

export function ngfwEgressNatToTerraform(struct?: NgfwEgressNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    settings: cdktf.listMapper(ngfwEgressNatSettingsToTerraform, true)(struct!.settings),
  }
}


export function ngfwEgressNatToHclTerraform(struct?: NgfwEgressNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: cdktf.listMapperHcl(ngfwEgressNatSettingsToHclTerraform, true)(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "NgfwEgressNatSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgfwEgressNatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwEgressNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwEgressNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._settings.internalValue = value.settings;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new NgfwEgressNatSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: NgfwEgressNatSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class NgfwEgressNatList extends cdktf.ComplexList {
  public internalValue? : NgfwEgressNat[] | cdktf.IResolvable

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
  public get(index: number): NgfwEgressNatOutputReference {
    return new NgfwEgressNatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgfwEndpointsPrefixesPrivatePrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#cidrs Ngfw#cidrs}
  */
  readonly cidrs?: string[];
}

export function ngfwEndpointsPrefixesPrivatePrefixToTerraform(struct?: NgfwEndpointsPrefixesPrivatePrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
  }
}


export function ngfwEndpointsPrefixesPrivatePrefixToHclTerraform(struct?: NgfwEndpointsPrefixesPrivatePrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgfwEndpointsPrefixesPrivatePrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwEndpointsPrefixesPrivatePrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwEndpointsPrefixesPrivatePrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrs = value.cidrs;
    }
  }

  // cidrs - computed: true, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }
}

export class NgfwEndpointsPrefixesPrivatePrefixList extends cdktf.ComplexList {
  public internalValue? : NgfwEndpointsPrefixesPrivatePrefix[] | cdktf.IResolvable

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
  public get(index: number): NgfwEndpointsPrefixesPrivatePrefixOutputReference {
    return new NgfwEndpointsPrefixesPrivatePrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgfwEndpointsPrefixes {
  /**
  * private_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#private_prefix Ngfw#private_prefix}
  */
  readonly privatePrefix?: NgfwEndpointsPrefixesPrivatePrefix[] | cdktf.IResolvable;
}

export function ngfwEndpointsPrefixesToTerraform(struct?: NgfwEndpointsPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_prefix: cdktf.listMapper(ngfwEndpointsPrefixesPrivatePrefixToTerraform, true)(struct!.privatePrefix),
  }
}


export function ngfwEndpointsPrefixesToHclTerraform(struct?: NgfwEndpointsPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_prefix: {
      value: cdktf.listMapperHcl(ngfwEndpointsPrefixesPrivatePrefixToHclTerraform, true)(struct!.privatePrefix),
      isBlock: true,
      type: "list",
      storageClassType: "NgfwEndpointsPrefixesPrivatePrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgfwEndpointsPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwEndpointsPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privatePrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatePrefix = this._privatePrefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwEndpointsPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privatePrefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privatePrefix.internalValue = value.privatePrefix;
    }
  }

  // private_prefix - computed: false, optional: true, required: false
  private _privatePrefix = new NgfwEndpointsPrefixesPrivatePrefixList(this, "private_prefix", false);
  public get privatePrefix() {
    return this._privatePrefix;
  }
  public putPrivatePrefix(value: NgfwEndpointsPrefixesPrivatePrefix[] | cdktf.IResolvable) {
    this._privatePrefix.internalValue = value;
  }
  public resetPrivatePrefix() {
    this._privatePrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePrefixInput() {
    return this._privatePrefix.internalValue;
  }
}

export class NgfwEndpointsPrefixesList extends cdktf.ComplexList {
  public internalValue? : NgfwEndpointsPrefixes[] | cdktf.IResolvable

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
  public get(index: number): NgfwEndpointsPrefixesOutputReference {
    return new NgfwEndpointsPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgfwEndpoints {
  /**
  * The account id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#account_id Ngfw#account_id}
  */
  readonly accountId?: string;
  /**
  * Enable egress NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#egress_nat_enabled Ngfw#egress_nat_enabled}
  */
  readonly egressNatEnabled?: boolean | cdktf.IResolvable;
  /**
  * The endpoint mode. Valid values are `ServiceManaged` or `CustomerManaged`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#mode Ngfw#mode}
  */
  readonly mode: string;
  /**
  * The subnet id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#subnet_id Ngfw#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The vpc id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#vpc_id Ngfw#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * The AZ id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#zone_id Ngfw#zone_id}
  */
  readonly zoneId?: string;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#prefixes Ngfw#prefixes}
  */
  readonly prefixes?: NgfwEndpointsPrefixes[] | cdktf.IResolvable;
}

export function ngfwEndpointsToTerraform(struct?: NgfwEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    egress_nat_enabled: cdktf.booleanToTerraform(struct!.egressNatEnabled),
    mode: cdktf.stringToTerraform(struct!.mode),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
    prefixes: cdktf.listMapper(ngfwEndpointsPrefixesToTerraform, true)(struct!.prefixes),
  }
}


export function ngfwEndpointsToHclTerraform(struct?: NgfwEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_nat_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.egressNatEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefixes: {
      value: cdktf.listMapperHcl(ngfwEndpointsPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "NgfwEndpointsPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgfwEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._egressNatEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressNatEnabled = this._egressNatEnabled;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._egressNatEnabled = undefined;
      this._mode = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
      this._zoneId = undefined;
      this._prefixes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._egressNatEnabled = value.egressNatEnabled;
      this._mode = value.mode;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
      this._zoneId = value.zoneId;
      this._prefixes.internalValue = value.prefixes;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // egress_nat_enabled - computed: true, optional: true, required: false
  private _egressNatEnabled?: boolean | cdktf.IResolvable; 
  public get egressNatEnabled() {
    return this.getBooleanAttribute('egress_nat_enabled');
  }
  public set egressNatEnabled(value: boolean | cdktf.IResolvable) {
    this._egressNatEnabled = value;
  }
  public resetEgressNatEnabled() {
    this._egressNatEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNatEnabledInput() {
    return this._egressNatEnabled;
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // rejected_reason - computed: true, optional: false, required: false
  public get rejectedReason() {
    return this.getStringAttribute('rejected_reason');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new NgfwEndpointsPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: NgfwEndpointsPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }
}

export class NgfwEndpointsList extends cdktf.ComplexList {
  public internalValue? : NgfwEndpoints[] | cdktf.IResolvable

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
  public get(index: number): NgfwEndpointsOutputReference {
    return new NgfwEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgfwPrivateAccess {
  /**
  * AWS ResourceID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#resource_id Ngfw#resource_id}
  */
  readonly resourceId: string;
  /**
  * Type of Private Access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#type Ngfw#type}
  */
  readonly type: string;
}

export function ngfwPrivateAccessToTerraform(struct?: NgfwPrivateAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ngfwPrivateAccessToHclTerraform(struct?: NgfwPrivateAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
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

export class NgfwPrivateAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwPrivateAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwPrivateAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._type = value.type;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
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

export class NgfwPrivateAccessList extends cdktf.ComplexList {
  public internalValue? : NgfwPrivateAccess[] | cdktf.IResolvable

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
  public get(index: number): NgfwPrivateAccessOutputReference {
    return new NgfwPrivateAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgfwSubnetMapping {
  /**
  * The availability zone, for when the endpoint mode is customer managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#availability_zone Ngfw#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The availability zone ID, for when the endpoint mode is customer managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#availability_zone_id Ngfw#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
  /**
  * The subnet id, for when the endpoint mode is service managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#subnet_id Ngfw#subnet_id}
  */
  readonly subnetId?: string;
}

export function ngfwSubnetMappingToTerraform(struct?: NgfwSubnetMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    availability_zone_id: cdktf.stringToTerraform(struct!.availabilityZoneId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function ngfwSubnetMappingToHclTerraform(struct?: NgfwSubnetMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgfwSubnetMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwSubnetMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._availabilityZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneId = this._availabilityZoneId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwSubnetMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._availabilityZoneId = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._availabilityZoneId = value.availabilityZoneId;
      this._subnetId = value.subnetId;
    }
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // availability_zone_id - computed: true, optional: true, required: false
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  public resetAvailabilityZoneId() {
    this._availabilityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class NgfwSubnetMappingList extends cdktf.ComplexList {
  public internalValue? : NgfwSubnetMapping[] | cdktf.IResolvable

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
  public get(index: number): NgfwSubnetMappingOutputReference {
    return new NgfwSubnetMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgfwTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#create Ngfw#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#default Ngfw#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#delete Ngfw#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#read Ngfw#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#update Ngfw#update}
  */
  readonly update?: string;
}

export function ngfwTimeoutsToTerraform(struct?: NgfwTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ngfwTimeoutsToHclTerraform(struct?: NgfwTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class NgfwTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NgfwTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: NgfwTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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
export interface NgfwUserIdCustomIncludeExcludeNetwork {
  /**
  * Include or exclude this subnet from user-id configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#discovery_include Ngfw#discovery_include}
  */
  readonly discoveryInclude: boolean | cdktf.IResolvable;
  /**
  * Enable this specific custom include/exclude network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#enabled Ngfw#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Name of subnet filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#name Ngfw#name}
  */
  readonly name: string;
  /**
  * Network IP address of the subnet filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#network_address Ngfw#network_address}
  */
  readonly networkAddress: string;
}

export function ngfwUserIdCustomIncludeExcludeNetworkToTerraform(struct?: NgfwUserIdCustomIncludeExcludeNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discovery_include: cdktf.booleanToTerraform(struct!.discoveryInclude),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    network_address: cdktf.stringToTerraform(struct!.networkAddress),
  }
}


export function ngfwUserIdCustomIncludeExcludeNetworkToHclTerraform(struct?: NgfwUserIdCustomIncludeExcludeNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discovery_include: {
      value: cdktf.booleanToHclTerraform(struct!.discoveryInclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address: {
      value: cdktf.stringToHclTerraform(struct!.networkAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgfwUserIdCustomIncludeExcludeNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwUserIdCustomIncludeExcludeNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoveryInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryInclude = this._discoveryInclude;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddress = this._networkAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwUserIdCustomIncludeExcludeNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoveryInclude = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._networkAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoveryInclude = value.discoveryInclude;
      this._enabled = value.enabled;
      this._name = value.name;
      this._networkAddress = value.networkAddress;
    }
  }

  // discovery_include - computed: false, optional: false, required: true
  private _discoveryInclude?: boolean | cdktf.IResolvable; 
  public get discoveryInclude() {
    return this.getBooleanAttribute('discovery_include');
  }
  public set discoveryInclude(value: boolean | cdktf.IResolvable) {
    this._discoveryInclude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryIncludeInput() {
    return this._discoveryInclude;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // network_address - computed: false, optional: false, required: true
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }
}

export class NgfwUserIdCustomIncludeExcludeNetworkList extends cdktf.ComplexList {
  public internalValue? : NgfwUserIdCustomIncludeExcludeNetwork[] | cdktf.IResolvable

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
  public get(index: number): NgfwUserIdCustomIncludeExcludeNetworkOutputReference {
    return new NgfwUserIdCustomIncludeExcludeNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NgfwUserId {
  /**
  * Agent Name for UserID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#agent_name Ngfw#agent_name}
  */
  readonly agentName?: string;
  /**
  * The Collector Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#collector_name Ngfw#collector_name}
  */
  readonly collectorName?: string;
  /**
  * Enable UserID Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#enabled Ngfw#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#port Ngfw#port}
  */
  readonly port: number;
  /**
  * AWS Secret Key ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#secret_key_arn Ngfw#secret_key_arn}
  */
  readonly secretKeyArn?: string;
  /**
  * custom_include_exclude_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#custom_include_exclude_network Ngfw#custom_include_exclude_network}
  */
  readonly customIncludeExcludeNetwork?: NgfwUserIdCustomIncludeExcludeNetwork[] | cdktf.IResolvable;
}

export function ngfwUserIdToTerraform(struct?: NgfwUserId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_name: cdktf.stringToTerraform(struct!.agentName),
    collector_name: cdktf.stringToTerraform(struct!.collectorName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    port: cdktf.numberToTerraform(struct!.port),
    secret_key_arn: cdktf.stringToTerraform(struct!.secretKeyArn),
    custom_include_exclude_network: cdktf.listMapper(ngfwUserIdCustomIncludeExcludeNetworkToTerraform, true)(struct!.customIncludeExcludeNetwork),
  }
}


export function ngfwUserIdToHclTerraform(struct?: NgfwUserId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_name: {
      value: cdktf.stringToHclTerraform(struct!.agentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collector_name: {
      value: cdktf.stringToHclTerraform(struct!.collectorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_include_exclude_network: {
      value: cdktf.listMapperHcl(ngfwUserIdCustomIncludeExcludeNetworkToHclTerraform, true)(struct!.customIncludeExcludeNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "NgfwUserIdCustomIncludeExcludeNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgfwUserIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwUserId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentName = this._agentName;
    }
    if (this._collectorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorName = this._collectorName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyArn = this._secretKeyArn;
    }
    if (this._customIncludeExcludeNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIncludeExcludeNetwork = this._customIncludeExcludeNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwUserId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentName = undefined;
      this._collectorName = undefined;
      this._enabled = undefined;
      this._port = undefined;
      this._secretKeyArn = undefined;
      this._customIncludeExcludeNetwork.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentName = value.agentName;
      this._collectorName = value.collectorName;
      this._enabled = value.enabled;
      this._port = value.port;
      this._secretKeyArn = value.secretKeyArn;
      this._customIncludeExcludeNetwork.internalValue = value.customIncludeExcludeNetwork;
    }
  }

  // agent_name - computed: false, optional: true, required: false
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  public resetAgentName() {
    this._agentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
  }

  // collector_name - computed: false, optional: true, required: false
  private _collectorName?: string; 
  public get collectorName() {
    return this.getStringAttribute('collector_name');
  }
  public set collectorName(value: string) {
    this._collectorName = value;
  }
  public resetCollectorName() {
    this._collectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorNameInput() {
    return this._collectorName;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret_key_arn - computed: false, optional: true, required: false
  private _secretKeyArn?: string; 
  public get secretKeyArn() {
    return this.getStringAttribute('secret_key_arn');
  }
  public set secretKeyArn(value: string) {
    this._secretKeyArn = value;
  }
  public resetSecretKeyArn() {
    this._secretKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyArnInput() {
    return this._secretKeyArn;
  }

  // user_id_status - computed: true, optional: false, required: false
  public get userIdStatus() {
    return this.getStringAttribute('user_id_status');
  }

  // custom_include_exclude_network - computed: false, optional: true, required: false
  private _customIncludeExcludeNetwork = new NgfwUserIdCustomIncludeExcludeNetworkList(this, "custom_include_exclude_network", false);
  public get customIncludeExcludeNetwork() {
    return this._customIncludeExcludeNetwork;
  }
  public putCustomIncludeExcludeNetwork(value: NgfwUserIdCustomIncludeExcludeNetwork[] | cdktf.IResolvable) {
    this._customIncludeExcludeNetwork.internalValue = value;
  }
  public resetCustomIncludeExcludeNetwork() {
    this._customIncludeExcludeNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIncludeExcludeNetworkInput() {
    return this._customIncludeExcludeNetwork.internalValue;
  }
}

export class NgfwUserIdList extends cdktf.ComplexList {
  public internalValue? : NgfwUserId[] | cdktf.IResolvable

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
  public get(index: number): NgfwUserIdOutputReference {
    return new NgfwUserIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw cloudngfwaws_ngfw}
*/
export class Ngfw extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_ngfw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ngfw resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ngfw to import
  * @param importFromId The id of the existing Ngfw that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ngfw to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_ngfw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw cloudngfwaws_ngfw} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgfwConfig
  */
  public constructor(scope: Construct, id: string, config: NgfwConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_ngfw',
      terraformGeneratorMetadata: {
        providerName: 'cloudngfwaws',
        providerVersion: '3.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._allowlistAccounts = config.allowlistAccounts;
    this._appIdVersion = config.appIdVersion;
    this._automaticUpgradeAppIdVersion = config.automaticUpgradeAppIdVersion;
    this._azList = config.azList;
    this._changeProtection = config.changeProtection;
    this._description = config.description;
    this._endpointMode = config.endpointMode;
    this._globalRulestack = config.globalRulestack;
    this._id = config.id;
    this._linkId = config.linkId;
    this._multiVpc = config.multiVpc;
    this._name = config.name;
    this._rulestack = config.rulestack;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._egressNat.internalValue = config.egressNat;
    this._endpoints.internalValue = config.endpoints;
    this._privateAccess.internalValue = config.privateAccess;
    this._subnetMapping.internalValue = config.subnetMapping;
    this._timeouts.internalValue = config.timeouts;
    this._userId.internalValue = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // allowlist_accounts - computed: false, optional: true, required: false
  private _allowlistAccounts?: string[]; 
  public get allowlistAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlist_accounts'));
  }
  public set allowlistAccounts(value: string[]) {
    this._allowlistAccounts = value;
  }
  public resetAllowlistAccounts() {
    this._allowlistAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistAccountsInput() {
    return this._allowlistAccounts;
  }

  // app_id_version - computed: true, optional: true, required: false
  private _appIdVersion?: string; 
  public get appIdVersion() {
    return this.getStringAttribute('app_id_version');
  }
  public set appIdVersion(value: string) {
    this._appIdVersion = value;
  }
  public resetAppIdVersion() {
    this._appIdVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdVersionInput() {
    return this._appIdVersion;
  }

  // automatic_upgrade_app_id_version - computed: false, optional: true, required: false
  private _automaticUpgradeAppIdVersion?: boolean | cdktf.IResolvable; 
  public get automaticUpgradeAppIdVersion() {
    return this.getBooleanAttribute('automatic_upgrade_app_id_version');
  }
  public set automaticUpgradeAppIdVersion(value: boolean | cdktf.IResolvable) {
    this._automaticUpgradeAppIdVersion = value;
  }
  public resetAutomaticUpgradeAppIdVersion() {
    this._automaticUpgradeAppIdVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpgradeAppIdVersionInput() {
    return this._automaticUpgradeAppIdVersion;
  }

  // az_list - computed: false, optional: false, required: true
  private _azList?: string[]; 
  public get azList() {
    return cdktf.Fn.tolist(this.getListAttribute('az_list'));
  }
  public set azList(value: string[]) {
    this._azList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azListInput() {
    return this._azList;
  }

  // change_protection - computed: true, optional: true, required: false
  private _changeProtection?: string[]; 
  public get changeProtection() {
    return cdktf.Fn.tolist(this.getListAttribute('change_protection'));
  }
  public set changeProtection(value: string[]) {
    this._changeProtection = value;
  }
  public resetChangeProtection() {
    this._changeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeProtectionInput() {
    return this._changeProtection;
  }

  // deployment_update_token - computed: true, optional: false, required: false
  public get deploymentUpdateToken() {
    return this.getStringAttribute('deployment_update_token');
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

  // endpoint_mode - computed: false, optional: true, required: false
  private _endpointMode?: string; 
  public get endpointMode() {
    return this.getStringAttribute('endpoint_mode');
  }
  public set endpointMode(value: string) {
    this._endpointMode = value;
  }
  public resetEndpointMode() {
    this._endpointMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointModeInput() {
    return this._endpointMode;
  }

  // endpoint_service_name - computed: true, optional: false, required: false
  public get endpointServiceName() {
    return this.getStringAttribute('endpoint_service_name');
  }

  // firewall_id - computed: true, optional: false, required: false
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }

  // global_rulestack - computed: false, optional: true, required: false
  private _globalRulestack?: string; 
  public get globalRulestack() {
    return this.getStringAttribute('global_rulestack');
  }
  public set globalRulestack(value: string) {
    this._globalRulestack = value;
  }
  public resetGlobalRulestack() {
    this._globalRulestack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalRulestackInput() {
    return this._globalRulestack;
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

  // link_id - computed: true, optional: true, required: false
  private _linkId?: string; 
  public get linkId() {
    return this.getStringAttribute('link_id');
  }
  public set linkId(value: string) {
    this._linkId = value;
  }
  public resetLinkId() {
    this._linkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkIdInput() {
    return this._linkId;
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // multi_vpc - computed: true, optional: true, required: false
  private _multiVpc?: boolean | cdktf.IResolvable; 
  public get multiVpc() {
    return this.getBooleanAttribute('multi_vpc');
  }
  public set multiVpc(value: boolean | cdktf.IResolvable) {
    this._multiVpc = value;
  }
  public resetMultiVpc() {
    this._multiVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiVpcInput() {
    return this._multiVpc;
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

  // rulestack - computed: false, optional: true, required: false
  private _rulestack?: string; 
  public get rulestack() {
    return this.getStringAttribute('rulestack');
  }
  public set rulestack(value: string) {
    this._rulestack = value;
  }
  public resetRulestack() {
    this._rulestack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulestackInput() {
    return this._rulestack;
  }

  // status - computed: true, optional: false, required: false
  private _status = new NgfwStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // egress_nat - computed: false, optional: true, required: false
  private _egressNat = new NgfwEgressNatList(this, "egress_nat", false);
  public get egressNat() {
    return this._egressNat;
  }
  public putEgressNat(value: NgfwEgressNat[] | cdktf.IResolvable) {
    this._egressNat.internalValue = value;
  }
  public resetEgressNat() {
    this._egressNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNatInput() {
    return this._egressNat.internalValue;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new NgfwEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: NgfwEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new NgfwPrivateAccessList(this, "private_access", false);
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: NgfwPrivateAccess[] | cdktf.IResolvable) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // subnet_mapping - computed: false, optional: true, required: false
  private _subnetMapping = new NgfwSubnetMappingList(this, "subnet_mapping", false);
  public get subnetMapping() {
    return this._subnetMapping;
  }
  public putSubnetMapping(value: NgfwSubnetMapping[] | cdktf.IResolvable) {
    this._subnetMapping.internalValue = value;
  }
  public resetSubnetMapping() {
    this._subnetMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMappingInput() {
    return this._subnetMapping.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NgfwTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NgfwTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId = new NgfwUserIdList(this, "user_id", false);
  public get userId() {
    return this._userId;
  }
  public putUserId(value: NgfwUserId[] | cdktf.IResolvable) {
    this._userId.internalValue = value;
  }
  public resetUserId() {
    this._userId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allowlist_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowlistAccounts),
      app_id_version: cdktf.stringToTerraform(this._appIdVersion),
      automatic_upgrade_app_id_version: cdktf.booleanToTerraform(this._automaticUpgradeAppIdVersion),
      az_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._azList),
      change_protection: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changeProtection),
      description: cdktf.stringToTerraform(this._description),
      endpoint_mode: cdktf.stringToTerraform(this._endpointMode),
      global_rulestack: cdktf.stringToTerraform(this._globalRulestack),
      id: cdktf.stringToTerraform(this._id),
      link_id: cdktf.stringToTerraform(this._linkId),
      multi_vpc: cdktf.booleanToTerraform(this._multiVpc),
      name: cdktf.stringToTerraform(this._name),
      rulestack: cdktf.stringToTerraform(this._rulestack),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      egress_nat: cdktf.listMapper(ngfwEgressNatToTerraform, true)(this._egressNat.internalValue),
      endpoints: cdktf.listMapper(ngfwEndpointsToTerraform, true)(this._endpoints.internalValue),
      private_access: cdktf.listMapper(ngfwPrivateAccessToTerraform, true)(this._privateAccess.internalValue),
      subnet_mapping: cdktf.listMapper(ngfwSubnetMappingToTerraform, true)(this._subnetMapping.internalValue),
      timeouts: ngfwTimeoutsToTerraform(this._timeouts.internalValue),
      user_id: cdktf.listMapper(ngfwUserIdToTerraform, true)(this._userId.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowlist_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowlistAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      app_id_version: {
        value: cdktf.stringToHclTerraform(this._appIdVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_upgrade_app_id_version: {
        value: cdktf.booleanToHclTerraform(this._automaticUpgradeAppIdVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      az_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._azList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      change_protection: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changeProtection),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_mode: {
        value: cdktf.stringToHclTerraform(this._endpointMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_rulestack: {
        value: cdktf.stringToHclTerraform(this._globalRulestack),
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
      link_id: {
        value: cdktf.stringToHclTerraform(this._linkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_vpc: {
        value: cdktf.booleanToHclTerraform(this._multiVpc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rulestack: {
        value: cdktf.stringToHclTerraform(this._rulestack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_nat: {
        value: cdktf.listMapperHcl(ngfwEgressNatToHclTerraform, true)(this._egressNat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgfwEgressNatList",
      },
      endpoints: {
        value: cdktf.listMapperHcl(ngfwEndpointsToHclTerraform, true)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgfwEndpointsList",
      },
      private_access: {
        value: cdktf.listMapperHcl(ngfwPrivateAccessToHclTerraform, true)(this._privateAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgfwPrivateAccessList",
      },
      subnet_mapping: {
        value: cdktf.listMapperHcl(ngfwSubnetMappingToHclTerraform, true)(this._subnetMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgfwSubnetMappingList",
      },
      timeouts: {
        value: ngfwTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NgfwTimeouts",
      },
      user_id: {
        value: cdktf.listMapperHcl(ngfwUserIdToHclTerraform, true)(this._userId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgfwUserIdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
