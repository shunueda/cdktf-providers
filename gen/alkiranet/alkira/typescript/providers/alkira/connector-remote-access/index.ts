// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorRemoteAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication mode, the value could be `LOCAL`, `LDAP` and `SAML`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#authentication_mode ConnectorRemoteAccess#authentication_mode}
  */
  readonly authenticationMode: string;
  /**
  * The user provided connectors banner text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#banner_text ConnectorRemoteAccess#banner_text}
  */
  readonly bannerText?: string;
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#billing_tag_ids ConnectorRemoteAccess#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The threshhold for concurrent sessions alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#concurrent_sessions_alert_threshold ConnectorRemoteAccess#concurrent_sessions_alert_threshold}
  */
  readonly concurrentSessionsAlertThreshold?: number;
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#cxp ConnectorRemoteAccess#cxp}
  */
  readonly cxp: string;
  /**
  * Enable dynamic region mapping. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#enable_dynamic_region_mapping ConnectorRemoteAccess#enable_dynamic_region_mapping}
  */
  readonly enableDynamicRegionMapping?: boolean | cdktf.IResolvable;
  /**
  * Fallback to TCP when UDP fails. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#fallback_to_tcp ConnectorRemoteAccess#fallback_to_tcp}
  */
  readonly fallbackToTcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#id ConnectorRemoteAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#name ConnectorRemoteAccess#name}
  */
  readonly name: string;
  /**
  * Name server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#name_server ConnectorRemoteAccess#name_server}
  */
  readonly nameServer?: string;
  /**
  * Segments that are associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#segment_ids ConnectorRemoteAccess#segment_ids}
  */
  readonly segmentIds: string[];
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM`, `LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#size ConnectorRemoteAccess#size}
  */
  readonly size: string;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#authorization ConnectorRemoteAccess#authorization}
  */
  readonly authorization: ConnectorRemoteAccessAuthorization[] | cdktf.IResolvable;
  /**
  * ldap_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#ldap_settings ConnectorRemoteAccess#ldap_settings}
  */
  readonly ldapSettings?: ConnectorRemoteAccessLdapSettings[] | cdktf.IResolvable;
}
export interface ConnectorRemoteAccessAuthorization {
  /**
  * Billing tag (`alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#billing_tag_id ConnectorRemoteAccess#billing_tag_id}
  */
  readonly billingTagId?: number;
  /**
  * The ID of the prefix list (`alkira_policy_prefix_list`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#prefix_list_id ConnectorRemoteAccess#prefix_list_id}
  */
  readonly prefixListId?: number;
  /**
  * The segment (`alkira_segment`) to be mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#segment_id ConnectorRemoteAccess#segment_id}
  */
  readonly segmentId: number;
  /**
  * Enable split tunneling to send traffic destined to only IP addresses in the prefix list over the VPN tunnel. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#split_tunneling ConnectorRemoteAccess#split_tunneling}
  */
  readonly splitTunneling?: boolean | cdktf.IResolvable;
  /**
  * The client subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#subnet ConnectorRemoteAccess#subnet}
  */
  readonly subnet: string;
  /**
  * User group (`alkira_group_user`) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#user_group_name ConnectorRemoteAccess#user_group_name}
  */
  readonly userGroupName: string;
}

export function connectorRemoteAccessAuthorizationToTerraform(struct?: ConnectorRemoteAccessAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_tag_id: cdktf.numberToTerraform(struct!.billingTagId),
    prefix_list_id: cdktf.numberToTerraform(struct!.prefixListId),
    segment_id: cdktf.numberToTerraform(struct!.segmentId),
    split_tunneling: cdktf.booleanToTerraform(struct!.splitTunneling),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    user_group_name: cdktf.stringToTerraform(struct!.userGroupName),
  }
}


export function connectorRemoteAccessAuthorizationToHclTerraform(struct?: ConnectorRemoteAccessAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_tag_id: {
      value: cdktf.numberToHclTerraform(struct!.billingTagId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list_id: {
      value: cdktf.numberToHclTerraform(struct!.prefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_id: {
      value: cdktf.numberToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_tunneling: {
      value: cdktf.booleanToHclTerraform(struct!.splitTunneling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group_name: {
      value: cdktf.stringToHclTerraform(struct!.userGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorRemoteAccessAuthorizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorRemoteAccessAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingTagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingTagId = this._billingTagId;
    }
    if (this._prefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListId = this._prefixListId;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._splitTunneling !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitTunneling = this._splitTunneling;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._userGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupName = this._userGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorRemoteAccessAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._billingTagId = undefined;
      this._prefixListId = undefined;
      this._segmentId = undefined;
      this._splitTunneling = undefined;
      this._subnet = undefined;
      this._userGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._billingTagId = value.billingTagId;
      this._prefixListId = value.prefixListId;
      this._segmentId = value.segmentId;
      this._splitTunneling = value.splitTunneling;
      this._subnet = value.subnet;
      this._userGroupName = value.userGroupName;
    }
  }

  // billing_tag_id - computed: false, optional: true, required: false
  private _billingTagId?: number; 
  public get billingTagId() {
    return this.getNumberAttribute('billing_tag_id');
  }
  public set billingTagId(value: number) {
    this._billingTagId = value;
  }
  public resetBillingTagId() {
    this._billingTagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdInput() {
    return this._billingTagId;
  }

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: number; 
  public get prefixListId() {
    return this.getNumberAttribute('prefix_list_id');
  }
  public set prefixListId(value: number) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: number; 
  public get segmentId() {
    return this.getNumberAttribute('segment_id');
  }
  public set segmentId(value: number) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // split_tunneling - computed: false, optional: true, required: false
  private _splitTunneling?: boolean | cdktf.IResolvable; 
  public get splitTunneling() {
    return this.getBooleanAttribute('split_tunneling');
  }
  public set splitTunneling(value: boolean | cdktf.IResolvable) {
    this._splitTunneling = value;
  }
  public resetSplitTunneling() {
    this._splitTunneling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelingInput() {
    return this._splitTunneling;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // user_group_name - computed: false, optional: false, required: true
  private _userGroupName?: string; 
  public get userGroupName() {
    return this.getStringAttribute('user_group_name');
  }
  public set userGroupName(value: string) {
    this._userGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupNameInput() {
    return this._userGroupName;
  }
}

export class ConnectorRemoteAccessAuthorizationList extends cdktf.ComplexList {
  public internalValue? : ConnectorRemoteAccessAuthorization[] | cdktf.IResolvable

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
  public get(index: number): ConnectorRemoteAccessAuthorizationOutputReference {
    return new ConnectorRemoteAccessAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorRemoteAccessLdapSettings {
  /**
  * The domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#bind_user_domain ConnectorRemoteAccess#bind_user_domain}
  */
  readonly bindUserDomain: string;
  /**
  * Destination dddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#destination_address ConnectorRemoteAccess#destination_address}
  */
  readonly destinationAddress: string;
  /**
  * The LDAP type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#ldap_type ConnectorRemoteAccess#ldap_type}
  */
  readonly ldapType: string;
  /**
  * The management segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#management_segment_id ConnectorRemoteAccess#management_segment_id}
  */
  readonly managementSegmentId: number;
  /**
  * Base DN to query and validate remote users that will connect to the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#search_scope_domain ConnectorRemoteAccess#search_scope_domain}
  */
  readonly searchScopeDomain: string;
}

export function connectorRemoteAccessLdapSettingsToTerraform(struct?: ConnectorRemoteAccessLdapSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_user_domain: cdktf.stringToTerraform(struct!.bindUserDomain),
    destination_address: cdktf.stringToTerraform(struct!.destinationAddress),
    ldap_type: cdktf.stringToTerraform(struct!.ldapType),
    management_segment_id: cdktf.numberToTerraform(struct!.managementSegmentId),
    search_scope_domain: cdktf.stringToTerraform(struct!.searchScopeDomain),
  }
}


export function connectorRemoteAccessLdapSettingsToHclTerraform(struct?: ConnectorRemoteAccessLdapSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_user_domain: {
      value: cdktf.stringToHclTerraform(struct!.bindUserDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_address: {
      value: cdktf.stringToHclTerraform(struct!.destinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_type: {
      value: cdktf.stringToHclTerraform(struct!.ldapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_segment_id: {
      value: cdktf.numberToHclTerraform(struct!.managementSegmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_scope_domain: {
      value: cdktf.stringToHclTerraform(struct!.searchScopeDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorRemoteAccessLdapSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorRemoteAccessLdapSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindUserDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindUserDomain = this._bindUserDomain;
    }
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._ldapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapType = this._ldapType;
    }
    if (this._managementSegmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementSegmentId = this._managementSegmentId;
    }
    if (this._searchScopeDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchScopeDomain = this._searchScopeDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorRemoteAccessLdapSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindUserDomain = undefined;
      this._destinationAddress = undefined;
      this._ldapType = undefined;
      this._managementSegmentId = undefined;
      this._searchScopeDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindUserDomain = value.bindUserDomain;
      this._destinationAddress = value.destinationAddress;
      this._ldapType = value.ldapType;
      this._managementSegmentId = value.managementSegmentId;
      this._searchScopeDomain = value.searchScopeDomain;
    }
  }

  // bind_user_domain - computed: false, optional: false, required: true
  private _bindUserDomain?: string; 
  public get bindUserDomain() {
    return this.getStringAttribute('bind_user_domain');
  }
  public set bindUserDomain(value: string) {
    this._bindUserDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindUserDomainInput() {
    return this._bindUserDomain;
  }

  // destination_address - computed: false, optional: false, required: true
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // ldap_type - computed: false, optional: false, required: true
  private _ldapType?: string; 
  public get ldapType() {
    return this.getStringAttribute('ldap_type');
  }
  public set ldapType(value: string) {
    this._ldapType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapTypeInput() {
    return this._ldapType;
  }

  // management_segment_id - computed: false, optional: false, required: true
  private _managementSegmentId?: number; 
  public get managementSegmentId() {
    return this.getNumberAttribute('management_segment_id');
  }
  public set managementSegmentId(value: number) {
    this._managementSegmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementSegmentIdInput() {
    return this._managementSegmentId;
  }

  // search_scope_domain - computed: false, optional: false, required: true
  private _searchScopeDomain?: string; 
  public get searchScopeDomain() {
    return this.getStringAttribute('search_scope_domain');
  }
  public set searchScopeDomain(value: string) {
    this._searchScopeDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchScopeDomainInput() {
    return this._searchScopeDomain;
  }
}

export class ConnectorRemoteAccessLdapSettingsList extends cdktf.ComplexList {
  public internalValue? : ConnectorRemoteAccessLdapSettings[] | cdktf.IResolvable

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
  public get(index: number): ConnectorRemoteAccessLdapSettingsOutputReference {
    return new ConnectorRemoteAccessLdapSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access alkira_connector_remote_access}
*/
export class ConnectorRemoteAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_remote_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorRemoteAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorRemoteAccess to import
  * @param importFromId The id of the existing ConnectorRemoteAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorRemoteAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_remote_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_remote_access alkira_connector_remote_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorRemoteAccessConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorRemoteAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_remote_access',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMode = config.authenticationMode;
    this._bannerText = config.bannerText;
    this._billingTagIds = config.billingTagIds;
    this._concurrentSessionsAlertThreshold = config.concurrentSessionsAlertThreshold;
    this._cxp = config.cxp;
    this._enableDynamicRegionMapping = config.enableDynamicRegionMapping;
    this._fallbackToTcp = config.fallbackToTcp;
    this._id = config.id;
    this._name = config.name;
    this._nameServer = config.nameServer;
    this._segmentIds = config.segmentIds;
    this._size = config.size;
    this._authorization.internalValue = config.authorization;
    this._ldapSettings.internalValue = config.ldapSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_mode - computed: false, optional: false, required: true
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // banner_text - computed: false, optional: true, required: false
  private _bannerText?: string; 
  public get bannerText() {
    return this.getStringAttribute('banner_text');
  }
  public set bannerText(value: string) {
    this._bannerText = value;
  }
  public resetBannerText() {
    this._bannerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerTextInput() {
    return this._bannerText;
  }

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // concurrent_sessions_alert_threshold - computed: false, optional: true, required: false
  private _concurrentSessionsAlertThreshold?: number; 
  public get concurrentSessionsAlertThreshold() {
    return this.getNumberAttribute('concurrent_sessions_alert_threshold');
  }
  public set concurrentSessionsAlertThreshold(value: number) {
    this._concurrentSessionsAlertThreshold = value;
  }
  public resetConcurrentSessionsAlertThreshold() {
    this._concurrentSessionsAlertThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSessionsAlertThresholdInput() {
    return this._concurrentSessionsAlertThreshold;
  }

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
  }

  // enable_dynamic_region_mapping - computed: false, optional: true, required: false
  private _enableDynamicRegionMapping?: boolean | cdktf.IResolvable; 
  public get enableDynamicRegionMapping() {
    return this.getBooleanAttribute('enable_dynamic_region_mapping');
  }
  public set enableDynamicRegionMapping(value: boolean | cdktf.IResolvable) {
    this._enableDynamicRegionMapping = value;
  }
  public resetEnableDynamicRegionMapping() {
    this._enableDynamicRegionMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDynamicRegionMappingInput() {
    return this._enableDynamicRegionMapping;
  }

  // fallback_to_tcp - computed: false, optional: true, required: false
  private _fallbackToTcp?: boolean | cdktf.IResolvable; 
  public get fallbackToTcp() {
    return this.getBooleanAttribute('fallback_to_tcp');
  }
  public set fallbackToTcp(value: boolean | cdktf.IResolvable) {
    this._fallbackToTcp = value;
  }
  public resetFallbackToTcp() {
    this._fallbackToTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToTcpInput() {
    return this._fallbackToTcp;
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

  // name_server - computed: false, optional: true, required: false
  private _nameServer?: string; 
  public get nameServer() {
    return this.getStringAttribute('name_server');
  }
  public set nameServer(value: string) {
    this._nameServer = value;
  }
  public resetNameServer() {
    this._nameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // segment_ids - computed: false, optional: false, required: true
  private _segmentIds?: string[]; 
  public get segmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('segment_ids'));
  }
  public set segmentIds(value: string[]) {
    this._segmentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdsInput() {
    return this._segmentIds;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization = new ConnectorRemoteAccessAuthorizationList(this, "authorization", true);
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: ConnectorRemoteAccessAuthorization[] | cdktf.IResolvable) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // ldap_settings - computed: false, optional: true, required: false
  private _ldapSettings = new ConnectorRemoteAccessLdapSettingsList(this, "ldap_settings", true);
  public get ldapSettings() {
    return this._ldapSettings;
  }
  public putLdapSettings(value: ConnectorRemoteAccessLdapSettings[] | cdktf.IResolvable) {
    this._ldapSettings.internalValue = value;
  }
  public resetLdapSettings() {
    this._ldapSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSettingsInput() {
    return this._ldapSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_mode: cdktf.stringToTerraform(this._authenticationMode),
      banner_text: cdktf.stringToTerraform(this._bannerText),
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      concurrent_sessions_alert_threshold: cdktf.numberToTerraform(this._concurrentSessionsAlertThreshold),
      cxp: cdktf.stringToTerraform(this._cxp),
      enable_dynamic_region_mapping: cdktf.booleanToTerraform(this._enableDynamicRegionMapping),
      fallback_to_tcp: cdktf.booleanToTerraform(this._fallbackToTcp),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_server: cdktf.stringToTerraform(this._nameServer),
      segment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._segmentIds),
      size: cdktf.stringToTerraform(this._size),
      authorization: cdktf.listMapper(connectorRemoteAccessAuthorizationToTerraform, true)(this._authorization.internalValue),
      ldap_settings: cdktf.listMapper(connectorRemoteAccessLdapSettingsToTerraform, true)(this._ldapSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_mode: {
        value: cdktf.stringToHclTerraform(this._authenticationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      banner_text: {
        value: cdktf.stringToHclTerraform(this._bannerText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._billingTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      concurrent_sessions_alert_threshold: {
        value: cdktf.numberToHclTerraform(this._concurrentSessionsAlertThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_dynamic_region_mapping: {
        value: cdktf.booleanToHclTerraform(this._enableDynamicRegionMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fallback_to_tcp: {
        value: cdktf.booleanToHclTerraform(this._fallbackToTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      name_server: {
        value: cdktf.stringToHclTerraform(this._nameServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._segmentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.listMapperHcl(connectorRemoteAccessAuthorizationToHclTerraform, true)(this._authorization.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorRemoteAccessAuthorizationList",
      },
      ldap_settings: {
        value: cdktf.listMapperHcl(connectorRemoteAccessLdapSettingsToHclTerraform, true)(this._ldapSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorRemoteAccessLdapSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
