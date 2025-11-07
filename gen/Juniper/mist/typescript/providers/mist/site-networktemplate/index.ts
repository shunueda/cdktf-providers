// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteNetworktemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#acl_policies SiteNetworktemplate#acl_policies}
  */
  readonly aclPolicies?: SiteNetworktemplateAclPolicies[] | cdktf.IResolvable;
  /**
  * ACL Tags to identify traffic source or destination. Key name is the tag name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#acl_tags SiteNetworktemplate#acl_tags}
  */
  readonly aclTags?: { [key: string]: SiteNetworktemplateAclTags } | cdktf.IResolvable;
  /**
  * additional CLI commands to append to the generated Junos config. **Note**: no check is done
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#additional_config_cmds SiteNetworktemplate#additional_config_cmds}
  */
  readonly additionalConfigCmds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#auto_upgrade_linecard SiteNetworktemplate#auto_upgrade_linecard}
  */
  readonly autoUpgradeLinecard?: boolean | cdktf.IResolvable;
  /**
  * Port usage to assign to switch ports without any port usage assigned. Default: `default` to preserve default behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#default_port_usage SiteNetworktemplate#default_port_usage}
  */
  readonly defaultPortUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#dhcp_snooping SiteNetworktemplate#dhcp_snooping}
  */
  readonly dhcpSnooping?: SiteNetworktemplateDhcpSnooping;
  /**
  * If some system-default port usages are not desired - namely, ap / iot / uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#disabled_system_defined_port_usages SiteNetworktemplate#disabled_system_defined_port_usages}
  */
  readonly disabledSystemDefinedPortUsages?: string[];
  /**
  * Global dns settings. To keep compatibility, dns settings in `ip_config` and `oob_ip_config` will overwrite this setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#dns_servers SiteNetworktemplate#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Global dns settings. To keep compatibility, dns settings in `ip_config` and `oob_ip_config` will overwrite this setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#dns_suffix SiteNetworktemplate#dns_suffix}
  */
  readonly dnsSuffix?: string[];
  /**
  * Property key is the destination CIDR (e.g. "10.0.0.0/8")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#extra_routes SiteNetworktemplate#extra_routes}
  */
  readonly extraRoutes?: { [key: string]: SiteNetworktemplateExtraRoutes } | cdktf.IResolvable;
  /**
  * Property key is the destination CIDR (e.g. "2a02:1234:420a:10c9::/64")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#extra_routes6 SiteNetworktemplate#extra_routes6}
  */
  readonly extraRoutes6?: { [key: string]: SiteNetworktemplateExtraRoutes6 } | cdktf.IResolvable;
  /**
  * Enable mist_nac to use RadSec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#mist_nac SiteNetworktemplate#mist_nac}
  */
  readonly mistNac?: SiteNetworktemplateMistNac;
  /**
  * Property key is network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#networks SiteNetworktemplate#networks}
  */
  readonly networks?: { [key: string]: SiteNetworktemplateNetworks } | cdktf.IResolvable;
  /**
  * List of NTP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#ntp_servers SiteNetworktemplate#ntp_servers}
  */
  readonly ntpServers?: string[];
  /**
  * Junos OSPF areas. Property key is the OSPF Area (Area should be a number (0-255) / IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#ospf_areas SiteNetworktemplate#ospf_areas}
  */
  readonly ospfAreas?: { [key: string]: SiteNetworktemplateOspfAreas } | cdktf.IResolvable;
  /**
  * Property key is the port mirroring instance name. `port_mirroring` can be added under device/site settings. It takes interface and ports as input for ingress, interface as input for egress and can take interface and port as output. A maximum 4 mirroring ports is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port_mirroring SiteNetworktemplate#port_mirroring}
  */
  readonly portMirroring?: { [key: string]: SiteNetworktemplatePortMirroring } | cdktf.IResolvable;
  /**
  * Property key is the port usage name. Defines the profiles of port configuration configured on the switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port_usages SiteNetworktemplate#port_usages}
  */
  readonly portUsages?: { [key: string]: SiteNetworktemplatePortUsages } | cdktf.IResolvable;
  /**
  * Junos Radius config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#radius_config SiteNetworktemplate#radius_config}
  */
  readonly radiusConfig?: SiteNetworktemplateRadiusConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#remote_syslog SiteNetworktemplate#remote_syslog}
  */
  readonly remoteSyslog?: SiteNetworktemplateRemoteSyslog;
  /**
  * Unique ID of the object instance in the Mist Organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#site_id SiteNetworktemplate#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#snmp_config SiteNetworktemplate#snmp_config}
  */
  readonly snmpConfig?: SiteNetworktemplateSnmpConfig;
  /**
  * Defines custom switch configuration based on different criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#switch_matching SiteNetworktemplate#switch_matching}
  */
  readonly switchMatching?: SiteNetworktemplateSwitchMatching;
  /**
  * Switch settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#switch_mgmt SiteNetworktemplate#switch_mgmt}
  */
  readonly switchMgmt?: SiteNetworktemplateSwitchMgmt;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#vrf_config SiteNetworktemplate#vrf_config}
  */
  readonly vrfConfig?: SiteNetworktemplateVrfConfig;
  /**
  * Property key is the network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#vrf_instances SiteNetworktemplate#vrf_instances}
  */
  readonly vrfInstances?: { [key: string]: SiteNetworktemplateVrfInstances } | cdktf.IResolvable;
}
export interface SiteNetworktemplateAclPoliciesActions {
  /**
  * enum: `allow`, `deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#action SiteNetworktemplate#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#dst_tag SiteNetworktemplate#dst_tag}
  */
  readonly dstTag: string;
}

export function siteNetworktemplateAclPoliciesActionsToTerraform(struct?: SiteNetworktemplateAclPoliciesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    dst_tag: cdktf.stringToTerraform(struct!.dstTag),
  }
}


export function siteNetworktemplateAclPoliciesActionsToHclTerraform(struct?: SiteNetworktemplateAclPoliciesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_tag: {
      value: cdktf.stringToHclTerraform(struct!.dstTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateAclPoliciesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateAclPoliciesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._dstTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTag = this._dstTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateAclPoliciesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._dstTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._dstTag = value.dstTag;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dst_tag - computed: false, optional: false, required: true
  private _dstTag?: string; 
  public get dstTag() {
    return this.getStringAttribute('dst_tag');
  }
  public set dstTag(value: string) {
    this._dstTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTagInput() {
    return this._dstTag;
  }
}

export class SiteNetworktemplateAclPoliciesActionsList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateAclPoliciesActions[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateAclPoliciesActionsOutputReference {
    return new SiteNetworktemplateAclPoliciesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateAclPolicies {
  /**
  * ACL Policy Actions:
  *   - for GBP-based policy, all src_tags and dst_tags have to be gbp-based
  *   - for ACL-based policy, `network` is required in either the source or destination so that we know where to attach the policy to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#actions SiteNetworktemplate#actions}
  */
  readonly actions?: SiteNetworktemplateAclPoliciesActions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#name SiteNetworktemplate#name}
  */
  readonly name?: string;
  /**
  * ACL Policy Source Tags:
  *   - for GBP-based policy, all src_tags and dst_tags have to be gbp-based
  *   - for ACL-based policy, `network` is required in either the source or destination so that we know where to attach the policy to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#src_tags SiteNetworktemplate#src_tags}
  */
  readonly srcTags?: string[];
}

export function siteNetworktemplateAclPoliciesToTerraform(struct?: SiteNetworktemplateAclPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(siteNetworktemplateAclPoliciesActionsToTerraform, false)(struct!.actions),
    name: cdktf.stringToTerraform(struct!.name),
    src_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcTags),
  }
}


export function siteNetworktemplateAclPoliciesToHclTerraform(struct?: SiteNetworktemplateAclPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(siteNetworktemplateAclPoliciesActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateAclPoliciesActionsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateAclPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateAclPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._srcTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTags = this._srcTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateAclPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._name = undefined;
      this._srcTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._name = value.name;
      this._srcTags = value.srcTags;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new SiteNetworktemplateAclPoliciesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: SiteNetworktemplateAclPoliciesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
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

  // src_tags - computed: false, optional: true, required: false
  private _srcTags?: string[]; 
  public get srcTags() {
    return this.getListAttribute('src_tags');
  }
  public set srcTags(value: string[]) {
    this._srcTags = value;
  }
  public resetSrcTags() {
    this._srcTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTagsInput() {
    return this._srcTags;
  }
}

export class SiteNetworktemplateAclPoliciesList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateAclPolicies[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateAclPoliciesOutputReference {
    return new SiteNetworktemplateAclPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateAclTagsSpecs {
  /**
  * Matched dst port, "0" means any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port_range SiteNetworktemplate#port_range}
  */
  readonly portRange?: string;
  /**
  * `tcp` / `udp` / `icmp` / `icmp6` / `gre` / `any` / `:protocol_number`, `protocol_number` is between 1-254, default is `any` `protocol_number` is between 1-254
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#protocol SiteNetworktemplate#protocol}
  */
  readonly protocol?: string;
}

export function siteNetworktemplateAclTagsSpecsToTerraform(struct?: SiteNetworktemplateAclTagsSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_range: cdktf.stringToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function siteNetworktemplateAclTagsSpecsToHclTerraform(struct?: SiteNetworktemplateAclTagsSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateAclTagsSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateAclTagsSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateAclTagsSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
    }
  }

  // port_range - computed: true, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class SiteNetworktemplateAclTagsSpecsList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateAclTagsSpecs[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateAclTagsSpecsOutputReference {
    return new SiteNetworktemplateAclTagsSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateAclTags {
  /**
  * Can only be used under dst tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#ether_types SiteNetworktemplate#ether_types}
  */
  readonly etherTypes?: string[];
  /**
  * Required if
  *   - `type`==`dynamic_gbp` (gbp_tag received from RADIUS)
  *   - `type`==`gbp_resource`
  *   - `type`==`static_gbp` (applying gbp tag against matching conditions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#gbp_tag SiteNetworktemplate#gbp_tag}
  */
  readonly gbpTag?: number;
  /**
  * Required if 
  * - `type`==`mac`
  * - `type`==`static_gbp` if from matching mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#macs SiteNetworktemplate#macs}
  */
  readonly macs?: string[];
  /**
  * If:
  *   * `type`==`mac` (optional. default is `any`)
  *   * `type`==`subnet` (optional. default is `any`)
  *   * `type`==`network`
  *   * `type`==`resource` (optional. default is `any`)
  *   * `type`==`static_gbp` if from matching network (vlan)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#network SiteNetworktemplate#network}
  */
  readonly network?: string;
  /**
  * Required if `type`==`port_usage`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port_usage SiteNetworktemplate#port_usage}
  */
  readonly portUsage?: string;
  /**
  * Required if:
  *   * `type`==`radius_group`
  *   * `type`==`static_gbp`
  * if from matching radius_group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#radius_group SiteNetworktemplate#radius_group}
  */
  readonly radiusGroup?: string;
  /**
  * If `type`==`resource`, `type`==`radius_group`, `type`==`port_usage` or `type`==`gbp_resource`. Empty means unrestricted, i.e. any
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#specs SiteNetworktemplate#specs}
  */
  readonly specs?: SiteNetworktemplateAclTagsSpecs[] | cdktf.IResolvable;
  /**
  * If 
  * - `type`==`subnet` 
  * - `type`==`resource` (optional. default is `any`)
  * - `type`==`static_gbp` if from matching subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#subnets SiteNetworktemplate#subnets}
  */
  readonly subnets?: string[];
  /**
  * enum: 
  *   * `any`: matching anything not identified
  *   * `dynamic_gbp`: from the gbp_tag received from RADIUS
  *   * `gbp_resource`: can only be used in `dst_tags`
  *   * `mac`
  *   * `network`
  *   * `port_usage`
  *   * `radius_group`
  *   * `resource`: can only be used in `dst_tags`
  *   * `static_gbp`: applying gbp tag against matching conditions
  *   * `subnet`'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#type SiteNetworktemplate#type}
  */
  readonly type: string;
}

export function siteNetworktemplateAclTagsToTerraform(struct?: SiteNetworktemplateAclTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ether_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.etherTypes),
    gbp_tag: cdktf.numberToTerraform(struct!.gbpTag),
    macs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.macs),
    network: cdktf.stringToTerraform(struct!.network),
    port_usage: cdktf.stringToTerraform(struct!.portUsage),
    radius_group: cdktf.stringToTerraform(struct!.radiusGroup),
    specs: cdktf.listMapper(siteNetworktemplateAclTagsSpecsToTerraform, false)(struct!.specs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function siteNetworktemplateAclTagsToHclTerraform(struct?: SiteNetworktemplateAclTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ether_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.etherTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gbp_tag: {
      value: cdktf.numberToHclTerraform(struct!.gbpTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    macs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.macs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_usage: {
      value: cdktf.stringToHclTerraform(struct!.portUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_group: {
      value: cdktf.stringToHclTerraform(struct!.radiusGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specs: {
      value: cdktf.listMapperHcl(siteNetworktemplateAclTagsSpecsToHclTerraform, false)(struct!.specs),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateAclTagsSpecsList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
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

export class SiteNetworktemplateAclTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateAclTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etherTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.etherTypes = this._etherTypes;
    }
    if (this._gbpTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.gbpTag = this._gbpTag;
    }
    if (this._macs !== undefined) {
      hasAnyValues = true;
      internalValueResult.macs = this._macs;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._portUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.portUsage = this._portUsage;
    }
    if (this._radiusGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusGroup = this._radiusGroup;
    }
    if (this._specs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specs = this._specs?.internalValue;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateAclTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._etherTypes = undefined;
      this._gbpTag = undefined;
      this._macs = undefined;
      this._network = undefined;
      this._portUsage = undefined;
      this._radiusGroup = undefined;
      this._specs.internalValue = undefined;
      this._subnets = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._etherTypes = value.etherTypes;
      this._gbpTag = value.gbpTag;
      this._macs = value.macs;
      this._network = value.network;
      this._portUsage = value.portUsage;
      this._radiusGroup = value.radiusGroup;
      this._specs.internalValue = value.specs;
      this._subnets = value.subnets;
      this._type = value.type;
    }
  }

  // ether_types - computed: false, optional: true, required: false
  private _etherTypes?: string[]; 
  public get etherTypes() {
    return this.getListAttribute('ether_types');
  }
  public set etherTypes(value: string[]) {
    this._etherTypes = value;
  }
  public resetEtherTypes() {
    this._etherTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypesInput() {
    return this._etherTypes;
  }

  // gbp_tag - computed: false, optional: true, required: false
  private _gbpTag?: number; 
  public get gbpTag() {
    return this.getNumberAttribute('gbp_tag');
  }
  public set gbpTag(value: number) {
    this._gbpTag = value;
  }
  public resetGbpTag() {
    this._gbpTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gbpTagInput() {
    return this._gbpTag;
  }

  // macs - computed: false, optional: true, required: false
  private _macs?: string[]; 
  public get macs() {
    return this.getListAttribute('macs');
  }
  public set macs(value: string[]) {
    this._macs = value;
  }
  public resetMacs() {
    this._macs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsInput() {
    return this._macs;
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

  // port_usage - computed: false, optional: true, required: false
  private _portUsage?: string; 
  public get portUsage() {
    return this.getStringAttribute('port_usage');
  }
  public set portUsage(value: string) {
    this._portUsage = value;
  }
  public resetPortUsage() {
    this._portUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portUsageInput() {
    return this._portUsage;
  }

  // radius_group - computed: false, optional: true, required: false
  private _radiusGroup?: string; 
  public get radiusGroup() {
    return this.getStringAttribute('radius_group');
  }
  public set radiusGroup(value: string) {
    this._radiusGroup = value;
  }
  public resetRadiusGroup() {
    this._radiusGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGroupInput() {
    return this._radiusGroup;
  }

  // specs - computed: false, optional: true, required: false
  private _specs = new SiteNetworktemplateAclTagsSpecsList(this, "specs", false);
  public get specs() {
    return this._specs;
  }
  public putSpecs(value: SiteNetworktemplateAclTagsSpecs[] | cdktf.IResolvable) {
    this._specs.internalValue = value;
  }
  public resetSpecs() {
    this._specs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specsInput() {
    return this._specs.internalValue;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
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

export class SiteNetworktemplateAclTagsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateAclTags } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateAclTagsOutputReference {
    return new SiteNetworktemplateAclTagsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateDhcpSnooping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#all_networks SiteNetworktemplate#all_networks}
  */
  readonly allNetworks?: boolean | cdktf.IResolvable;
  /**
  * Enable for dynamic ARP inspection check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enable_arp_spoof_check SiteNetworktemplate#enable_arp_spoof_check}
  */
  readonly enableArpSpoofCheck?: boolean | cdktf.IResolvable;
  /**
  * Enable for check for forging source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enable_ip_source_guard SiteNetworktemplate#enable_ip_source_guard}
  */
  readonly enableIpSourceGuard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enabled SiteNetworktemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If `all_networks`==`false`, list of network with DHCP snooping enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#networks SiteNetworktemplate#networks}
  */
  readonly networks?: string[];
}

export function siteNetworktemplateDhcpSnoopingToTerraform(struct?: SiteNetworktemplateDhcpSnooping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_networks: cdktf.booleanToTerraform(struct!.allNetworks),
    enable_arp_spoof_check: cdktf.booleanToTerraform(struct!.enableArpSpoofCheck),
    enable_ip_source_guard: cdktf.booleanToTerraform(struct!.enableIpSourceGuard),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
  }
}


export function siteNetworktemplateDhcpSnoopingToHclTerraform(struct?: SiteNetworktemplateDhcpSnooping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_networks: {
      value: cdktf.booleanToHclTerraform(struct!.allNetworks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_arp_spoof_check: {
      value: cdktf.booleanToHclTerraform(struct!.enableArpSpoofCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ip_source_guard: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpSourceGuard),
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
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateDhcpSnoopingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateDhcpSnooping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.allNetworks = this._allNetworks;
    }
    if (this._enableArpSpoofCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableArpSpoofCheck = this._enableArpSpoofCheck;
    }
    if (this._enableIpSourceGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpSourceGuard = this._enableIpSourceGuard;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateDhcpSnooping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allNetworks = undefined;
      this._enableArpSpoofCheck = undefined;
      this._enableIpSourceGuard = undefined;
      this._enabled = undefined;
      this._networks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allNetworks = value.allNetworks;
      this._enableArpSpoofCheck = value.enableArpSpoofCheck;
      this._enableIpSourceGuard = value.enableIpSourceGuard;
      this._enabled = value.enabled;
      this._networks = value.networks;
    }
  }

  // all_networks - computed: false, optional: true, required: false
  private _allNetworks?: boolean | cdktf.IResolvable; 
  public get allNetworks() {
    return this.getBooleanAttribute('all_networks');
  }
  public set allNetworks(value: boolean | cdktf.IResolvable) {
    this._allNetworks = value;
  }
  public resetAllNetworks() {
    this._allNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allNetworksInput() {
    return this._allNetworks;
  }

  // enable_arp_spoof_check - computed: false, optional: true, required: false
  private _enableArpSpoofCheck?: boolean | cdktf.IResolvable; 
  public get enableArpSpoofCheck() {
    return this.getBooleanAttribute('enable_arp_spoof_check');
  }
  public set enableArpSpoofCheck(value: boolean | cdktf.IResolvable) {
    this._enableArpSpoofCheck = value;
  }
  public resetEnableArpSpoofCheck() {
    this._enableArpSpoofCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableArpSpoofCheckInput() {
    return this._enableArpSpoofCheck;
  }

  // enable_ip_source_guard - computed: false, optional: true, required: false
  private _enableIpSourceGuard?: boolean | cdktf.IResolvable; 
  public get enableIpSourceGuard() {
    return this.getBooleanAttribute('enable_ip_source_guard');
  }
  public set enableIpSourceGuard(value: boolean | cdktf.IResolvable) {
    this._enableIpSourceGuard = value;
  }
  public resetEnableIpSourceGuard() {
    this._enableIpSourceGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpSourceGuardInput() {
    return this._enableIpSourceGuard;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }
}
export interface SiteNetworktemplateExtraRoutesNextQualified {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#metric SiteNetworktemplate#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#preference SiteNetworktemplate#preference}
  */
  readonly preference?: number;
}

export function siteNetworktemplateExtraRoutesNextQualifiedToTerraform(struct?: SiteNetworktemplateExtraRoutesNextQualified | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    preference: cdktf.numberToTerraform(struct!.preference),
  }
}


export function siteNetworktemplateExtraRoutesNextQualifiedToHclTerraform(struct?: SiteNetworktemplateExtraRoutesNextQualified | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateExtraRoutesNextQualifiedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateExtraRoutesNextQualified | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateExtraRoutesNextQualified | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._preference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._preference = value.preference;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }
}

export class SiteNetworktemplateExtraRoutesNextQualifiedMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateExtraRoutesNextQualified } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateExtraRoutesNextQualifiedOutputReference {
    return new SiteNetworktemplateExtraRoutesNextQualifiedOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateExtraRoutes {
  /**
  * This takes precedence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#discard SiteNetworktemplate#discard}
  */
  readonly discard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#metric SiteNetworktemplate#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#next_qualified SiteNetworktemplate#next_qualified}
  */
  readonly nextQualified?: { [key: string]: SiteNetworktemplateExtraRoutesNextQualified } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#no_resolve SiteNetworktemplate#no_resolve}
  */
  readonly noResolve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#preference SiteNetworktemplate#preference}
  */
  readonly preference?: number;
  /**
  * Next-hop IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#via SiteNetworktemplate#via}
  */
  readonly via: string;
}

export function siteNetworktemplateExtraRoutesToTerraform(struct?: SiteNetworktemplateExtraRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: cdktf.booleanToTerraform(struct!.discard),
    metric: cdktf.numberToTerraform(struct!.metric),
    next_qualified: cdktf.hashMapper(siteNetworktemplateExtraRoutesNextQualifiedToTerraform)(struct!.nextQualified),
    no_resolve: cdktf.booleanToTerraform(struct!.noResolve),
    preference: cdktf.numberToTerraform(struct!.preference),
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function siteNetworktemplateExtraRoutesToHclTerraform(struct?: SiteNetworktemplateExtraRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: cdktf.booleanToHclTerraform(struct!.discard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_qualified: {
      value: cdktf.hashMapperHcl(siteNetworktemplateExtraRoutesNextQualifiedToHclTerraform)(struct!.nextQualified),
      isBlock: true,
      type: "map",
      storageClassType: "SiteNetworktemplateExtraRoutesNextQualifiedMap",
    },
    no_resolve: {
      value: cdktf.booleanToHclTerraform(struct!.noResolve),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateExtraRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateExtraRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._nextQualified?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextQualified = this._nextQualified?.internalValue;
    }
    if (this._noResolve !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResolve = this._noResolve;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateExtraRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard = undefined;
      this._metric = undefined;
      this._nextQualified.internalValue = undefined;
      this._noResolve = undefined;
      this._preference = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discard = value.discard;
      this._metric = value.metric;
      this._nextQualified.internalValue = value.nextQualified;
      this._noResolve = value.noResolve;
      this._preference = value.preference;
      this._via = value.via;
    }
  }

  // discard - computed: false, optional: true, required: false
  private _discard?: boolean | cdktf.IResolvable; 
  public get discard() {
    return this.getBooleanAttribute('discard');
  }
  public set discard(value: boolean | cdktf.IResolvable) {
    this._discard = value;
  }
  public resetDiscard() {
    this._discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // next_qualified - computed: false, optional: true, required: false
  private _nextQualified = new SiteNetworktemplateExtraRoutesNextQualifiedMap(this, "next_qualified");
  public get nextQualified() {
    return this._nextQualified;
  }
  public putNextQualified(value: { [key: string]: SiteNetworktemplateExtraRoutesNextQualified } | cdktf.IResolvable) {
    this._nextQualified.internalValue = value;
  }
  public resetNextQualified() {
    this._nextQualified.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextQualifiedInput() {
    return this._nextQualified.internalValue;
  }

  // no_resolve - computed: false, optional: true, required: false
  private _noResolve?: boolean | cdktf.IResolvable; 
  public get noResolve() {
    return this.getBooleanAttribute('no_resolve');
  }
  public set noResolve(value: boolean | cdktf.IResolvable) {
    this._noResolve = value;
  }
  public resetNoResolve() {
    this._noResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noResolveInput() {
    return this._noResolve;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // via - computed: false, optional: false, required: true
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class SiteNetworktemplateExtraRoutesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateExtraRoutes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateExtraRoutesOutputReference {
    return new SiteNetworktemplateExtraRoutesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateExtraRoutes6NextQualified {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#metric SiteNetworktemplate#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#preference SiteNetworktemplate#preference}
  */
  readonly preference?: number;
}

export function siteNetworktemplateExtraRoutes6NextQualifiedToTerraform(struct?: SiteNetworktemplateExtraRoutes6NextQualified | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    preference: cdktf.numberToTerraform(struct!.preference),
  }
}


export function siteNetworktemplateExtraRoutes6NextQualifiedToHclTerraform(struct?: SiteNetworktemplateExtraRoutes6NextQualified | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateExtraRoutes6NextQualifiedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateExtraRoutes6NextQualified | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateExtraRoutes6NextQualified | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._preference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._preference = value.preference;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }
}

export class SiteNetworktemplateExtraRoutes6NextQualifiedMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateExtraRoutes6NextQualified } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateExtraRoutes6NextQualifiedOutputReference {
    return new SiteNetworktemplateExtraRoutes6NextQualifiedOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateExtraRoutes6 {
  /**
  * This takes precedence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#discard SiteNetworktemplate#discard}
  */
  readonly discard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#metric SiteNetworktemplate#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#next_qualified SiteNetworktemplate#next_qualified}
  */
  readonly nextQualified?: { [key: string]: SiteNetworktemplateExtraRoutes6NextQualified } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#no_resolve SiteNetworktemplate#no_resolve}
  */
  readonly noResolve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#preference SiteNetworktemplate#preference}
  */
  readonly preference?: number;
  /**
  * Next-hop IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#via SiteNetworktemplate#via}
  */
  readonly via: string;
}

export function siteNetworktemplateExtraRoutes6ToTerraform(struct?: SiteNetworktemplateExtraRoutes6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: cdktf.booleanToTerraform(struct!.discard),
    metric: cdktf.numberToTerraform(struct!.metric),
    next_qualified: cdktf.hashMapper(siteNetworktemplateExtraRoutes6NextQualifiedToTerraform)(struct!.nextQualified),
    no_resolve: cdktf.booleanToTerraform(struct!.noResolve),
    preference: cdktf.numberToTerraform(struct!.preference),
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function siteNetworktemplateExtraRoutes6ToHclTerraform(struct?: SiteNetworktemplateExtraRoutes6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: cdktf.booleanToHclTerraform(struct!.discard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_qualified: {
      value: cdktf.hashMapperHcl(siteNetworktemplateExtraRoutes6NextQualifiedToHclTerraform)(struct!.nextQualified),
      isBlock: true,
      type: "map",
      storageClassType: "SiteNetworktemplateExtraRoutes6NextQualifiedMap",
    },
    no_resolve: {
      value: cdktf.booleanToHclTerraform(struct!.noResolve),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateExtraRoutes6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateExtraRoutes6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._nextQualified?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextQualified = this._nextQualified?.internalValue;
    }
    if (this._noResolve !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResolve = this._noResolve;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateExtraRoutes6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard = undefined;
      this._metric = undefined;
      this._nextQualified.internalValue = undefined;
      this._noResolve = undefined;
      this._preference = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discard = value.discard;
      this._metric = value.metric;
      this._nextQualified.internalValue = value.nextQualified;
      this._noResolve = value.noResolve;
      this._preference = value.preference;
      this._via = value.via;
    }
  }

  // discard - computed: false, optional: true, required: false
  private _discard?: boolean | cdktf.IResolvable; 
  public get discard() {
    return this.getBooleanAttribute('discard');
  }
  public set discard(value: boolean | cdktf.IResolvable) {
    this._discard = value;
  }
  public resetDiscard() {
    this._discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // next_qualified - computed: false, optional: true, required: false
  private _nextQualified = new SiteNetworktemplateExtraRoutes6NextQualifiedMap(this, "next_qualified");
  public get nextQualified() {
    return this._nextQualified;
  }
  public putNextQualified(value: { [key: string]: SiteNetworktemplateExtraRoutes6NextQualified } | cdktf.IResolvable) {
    this._nextQualified.internalValue = value;
  }
  public resetNextQualified() {
    this._nextQualified.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextQualifiedInput() {
    return this._nextQualified.internalValue;
  }

  // no_resolve - computed: false, optional: true, required: false
  private _noResolve?: boolean | cdktf.IResolvable; 
  public get noResolve() {
    return this.getBooleanAttribute('no_resolve');
  }
  public set noResolve(value: boolean | cdktf.IResolvable) {
    this._noResolve = value;
  }
  public resetNoResolve() {
    this._noResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noResolveInput() {
    return this._noResolve;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // via - computed: false, optional: false, required: true
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class SiteNetworktemplateExtraRoutes6Map extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateExtraRoutes6 } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateExtraRoutes6OutputReference {
    return new SiteNetworktemplateExtraRoutes6OutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateMistNac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enabled SiteNetworktemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#network SiteNetworktemplate#network}
  */
  readonly network?: string;
}

export function siteNetworktemplateMistNacToTerraform(struct?: SiteNetworktemplateMistNac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function siteNetworktemplateMistNacToHclTerraform(struct?: SiteNetworktemplateMistNac | cdktf.IResolvable): any {
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateMistNacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateMistNac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateMistNac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._network = value.network;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
}
export interface SiteNetworktemplateNetworks {
  /**
  * Only required for EVPN-VXLAN networks, IPv4 Virtual Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#gateway SiteNetworktemplate#gateway}
  */
  readonly gateway?: string;
  /**
  * Only required for EVPN-VXLAN networks, IPv6 Virtual Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#gateway6 SiteNetworktemplate#gateway6}
  */
  readonly gateway6?: string;
  /**
  * whether to stop clients to talk to each other, default is false (when enabled, a unique isolation_vlan_id is required). NOTE: this features requires uplink device to also a be Juniper device and `inter_switch_link` to be set. See also `inter_isolation_network_link` and `community_vlan_id` in port_usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#isolation SiteNetworktemplate#isolation}
  */
  readonly isolation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#isolation_vlan_id SiteNetworktemplate#isolation_vlan_id}
  */
  readonly isolationVlanId?: string;
  /**
  * Optional for pure switching, required when L3 / routing features are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#subnet SiteNetworktemplate#subnet}
  */
  readonly subnet?: string;
  /**
  * Optional for pure switching, required when L3 / routing features are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#subnet6 SiteNetworktemplate#subnet6}
  */
  readonly subnet6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#vlan_id SiteNetworktemplate#vlan_id}
  */
  readonly vlanId: string;
}

export function siteNetworktemplateNetworksToTerraform(struct?: SiteNetworktemplateNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    gateway6: cdktf.stringToTerraform(struct!.gateway6),
    isolation: cdktf.booleanToTerraform(struct!.isolation),
    isolation_vlan_id: cdktf.stringToTerraform(struct!.isolationVlanId),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    subnet6: cdktf.stringToTerraform(struct!.subnet6),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function siteNetworktemplateNetworksToHclTerraform(struct?: SiteNetworktemplateNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway6: {
      value: cdktf.stringToHclTerraform(struct!.gateway6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isolation: {
      value: cdktf.booleanToHclTerraform(struct!.isolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    isolation_vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.isolationVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet6: {
      value: cdktf.stringToHclTerraform(struct!.subnet6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._gateway6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway6 = this._gateway6;
    }
    if (this._isolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolation = this._isolation;
    }
    if (this._isolationVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolationVlanId = this._isolationVlanId;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._subnet6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet6 = this._subnet6;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._gateway6 = undefined;
      this._isolation = undefined;
      this._isolationVlanId = undefined;
      this._subnet = undefined;
      this._subnet6 = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._gateway6 = value.gateway6;
      this._isolation = value.isolation;
      this._isolationVlanId = value.isolationVlanId;
      this._subnet = value.subnet;
      this._subnet6 = value.subnet6;
      this._vlanId = value.vlanId;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: false, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // isolation - computed: false, optional: true, required: false
  private _isolation?: boolean | cdktf.IResolvable; 
  public get isolation() {
    return this.getBooleanAttribute('isolation');
  }
  public set isolation(value: boolean | cdktf.IResolvable) {
    this._isolation = value;
  }
  public resetIsolation() {
    this._isolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationInput() {
    return this._isolation;
  }

  // isolation_vlan_id - computed: false, optional: true, required: false
  private _isolationVlanId?: string; 
  public get isolationVlanId() {
    return this.getStringAttribute('isolation_vlan_id');
  }
  public set isolationVlanId(value: string) {
    this._isolationVlanId = value;
  }
  public resetIsolationVlanId() {
    this._isolationVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationVlanIdInput() {
    return this._isolationVlanId;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6?: string; 
  public get subnet6() {
    return this.getStringAttribute('subnet6');
  }
  public set subnet6(value: string) {
    this._subnet6 = value;
  }
  public resetSubnet6() {
    this._subnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class SiteNetworktemplateNetworksMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateNetworks } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateNetworksOutputReference {
    return new SiteNetworktemplateNetworksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateOspfAreasNetworks {
  /**
  * Required if `auth_type`==`md5`. Property key is the key number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#auth_keys SiteNetworktemplate#auth_keys}
  */
  readonly authKeys?: { [key: string]: string };
  /**
  * Required if `auth_type`==`password`, the password, max length is 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#auth_password SiteNetworktemplate#auth_password}
  */
  readonly authPassword?: string;
  /**
  * auth type. enum: `md5`, `none`, `password`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#auth_type SiteNetworktemplate#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#bfd_minimum_interval SiteNetworktemplate#bfd_minimum_interval}
  */
  readonly bfdMinimumInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#dead_interval SiteNetworktemplate#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#export_policy SiteNetworktemplate#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#hello_interval SiteNetworktemplate#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#import_policy SiteNetworktemplate#import_policy}
  */
  readonly importPolicy?: string;
  /**
  * interface type (nbma = non-broadcast multi-access). enum: `broadcast`, `nbma`, `p2mp`, `p2p`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#interface_type SiteNetworktemplate#interface_type}
  */
  readonly interfaceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#metric SiteNetworktemplate#metric}
  */
  readonly metric?: number;
  /**
  * By default, we'll re-advertise all learned OSPF routes toward overlay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#no_readvertise_to_overlay SiteNetworktemplate#no_readvertise_to_overlay}
  */
  readonly noReadvertiseToOverlay?: boolean | cdktf.IResolvable;
  /**
  * Whether to send OSPF-Hello
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#passive SiteNetworktemplate#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
}

export function siteNetworktemplateOspfAreasNetworksToTerraform(struct?: SiteNetworktemplateOspfAreasNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_keys: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authKeys),
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    bfd_minimum_interval: cdktf.numberToTerraform(struct!.bfdMinimumInterval),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    import_policy: cdktf.stringToTerraform(struct!.importPolicy),
    interface_type: cdktf.stringToTerraform(struct!.interfaceType),
    metric: cdktf.numberToTerraform(struct!.metric),
    no_readvertise_to_overlay: cdktf.booleanToTerraform(struct!.noReadvertiseToOverlay),
    passive: cdktf.booleanToTerraform(struct!.passive),
  }
}


export function siteNetworktemplateOspfAreasNetworksToHclTerraform(struct?: SiteNetworktemplateOspfAreasNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_keys: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authKeys),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    import_policy: {
      value: cdktf.stringToHclTerraform(struct!.importPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_type: {
      value: cdktf.stringToHclTerraform(struct!.interfaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_readvertise_to_overlay: {
      value: cdktf.booleanToHclTerraform(struct!.noReadvertiseToOverlay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passive: {
      value: cdktf.booleanToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateOspfAreasNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateOspfAreasNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKeys = this._authKeys;
    }
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._bfdMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdMinimumInterval = this._bfdMinimumInterval;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._importPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.importPolicy = this._importPolicy;
    }
    if (this._interfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceType = this._interfaceType;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._noReadvertiseToOverlay !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReadvertiseToOverlay = this._noReadvertiseToOverlay;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateOspfAreasNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authKeys = undefined;
      this._authPassword = undefined;
      this._authType = undefined;
      this._bfdMinimumInterval = undefined;
      this._deadInterval = undefined;
      this._exportPolicy = undefined;
      this._helloInterval = undefined;
      this._importPolicy = undefined;
      this._interfaceType = undefined;
      this._metric = undefined;
      this._noReadvertiseToOverlay = undefined;
      this._passive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authKeys = value.authKeys;
      this._authPassword = value.authPassword;
      this._authType = value.authType;
      this._bfdMinimumInterval = value.bfdMinimumInterval;
      this._deadInterval = value.deadInterval;
      this._exportPolicy = value.exportPolicy;
      this._helloInterval = value.helloInterval;
      this._importPolicy = value.importPolicy;
      this._interfaceType = value.interfaceType;
      this._metric = value.metric;
      this._noReadvertiseToOverlay = value.noReadvertiseToOverlay;
      this._passive = value.passive;
    }
  }

  // auth_keys - computed: false, optional: true, required: false
  private _authKeys?: { [key: string]: string }; 
  public get authKeys() {
    return this.getStringMapAttribute('auth_keys');
  }
  public set authKeys(value: { [key: string]: string }) {
    this._authKeys = value;
  }
  public resetAuthKeys() {
    this._authKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeysInput() {
    return this._authKeys;
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // bfd_minimum_interval - computed: false, optional: true, required: false
  private _bfdMinimumInterval?: number; 
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }
  public set bfdMinimumInterval(value: number) {
    this._bfdMinimumInterval = value;
  }
  public resetBfdMinimumInterval() {
    this._bfdMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMinimumIntervalInput() {
    return this._bfdMinimumInterval;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // import_policy - computed: false, optional: true, required: false
  private _importPolicy?: string; 
  public get importPolicy() {
    return this.getStringAttribute('import_policy');
  }
  public set importPolicy(value: string) {
    this._importPolicy = value;
  }
  public resetImportPolicy() {
    this._importPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPolicyInput() {
    return this._importPolicy;
  }

  // interface_type - computed: true, optional: true, required: false
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  public resetInterfaceType() {
    this._interfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // no_readvertise_to_overlay - computed: false, optional: true, required: false
  private _noReadvertiseToOverlay?: boolean | cdktf.IResolvable; 
  public get noReadvertiseToOverlay() {
    return this.getBooleanAttribute('no_readvertise_to_overlay');
  }
  public set noReadvertiseToOverlay(value: boolean | cdktf.IResolvable) {
    this._noReadvertiseToOverlay = value;
  }
  public resetNoReadvertiseToOverlay() {
    this._noReadvertiseToOverlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReadvertiseToOverlayInput() {
    return this._noReadvertiseToOverlay;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }
}

export class SiteNetworktemplateOspfAreasNetworksMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateOspfAreasNetworks } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateOspfAreasNetworksOutputReference {
    return new SiteNetworktemplateOspfAreasNetworksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateOspfAreas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#include_loopback SiteNetworktemplate#include_loopback}
  */
  readonly includeLoopback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#networks SiteNetworktemplate#networks}
  */
  readonly networks: { [key: string]: SiteNetworktemplateOspfAreasNetworks } | cdktf.IResolvable;
  /**
  * OSPF type. enum: `default`, `nssa`, `stub`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#type SiteNetworktemplate#type}
  */
  readonly type?: string;
}

export function siteNetworktemplateOspfAreasToTerraform(struct?: SiteNetworktemplateOspfAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_loopback: cdktf.booleanToTerraform(struct!.includeLoopback),
    networks: cdktf.hashMapper(siteNetworktemplateOspfAreasNetworksToTerraform)(struct!.networks),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function siteNetworktemplateOspfAreasToHclTerraform(struct?: SiteNetworktemplateOspfAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_loopback: {
      value: cdktf.booleanToHclTerraform(struct!.includeLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    networks: {
      value: cdktf.hashMapperHcl(siteNetworktemplateOspfAreasNetworksToHclTerraform)(struct!.networks),
      isBlock: true,
      type: "map",
      storageClassType: "SiteNetworktemplateOspfAreasNetworksMap",
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

export class SiteNetworktemplateOspfAreasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateOspfAreas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLoopback = this._includeLoopback;
    }
    if (this._networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateOspfAreas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeLoopback = undefined;
      this._networks.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeLoopback = value.includeLoopback;
      this._networks.internalValue = value.networks;
      this._type = value.type;
    }
  }

  // include_loopback - computed: true, optional: true, required: false
  private _includeLoopback?: boolean | cdktf.IResolvable; 
  public get includeLoopback() {
    return this.getBooleanAttribute('include_loopback');
  }
  public set includeLoopback(value: boolean | cdktf.IResolvable) {
    this._includeLoopback = value;
  }
  public resetIncludeLoopback() {
    this._includeLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLoopbackInput() {
    return this._includeLoopback;
  }

  // networks - computed: false, optional: false, required: true
  private _networks = new SiteNetworktemplateOspfAreasNetworksMap(this, "networks");
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: { [key: string]: SiteNetworktemplateOspfAreasNetworks } | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
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
}

export class SiteNetworktemplateOspfAreasMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateOspfAreas } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateOspfAreasOutputReference {
    return new SiteNetworktemplateOspfAreasOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplatePortMirroring {
  /**
  * At least one of the `input_port_ids_ingress`, `input_port_ids_egress` or `input_networks_ingress ` should be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#input_networks_ingress SiteNetworktemplate#input_networks_ingress}
  */
  readonly inputNetworksIngress?: string[];
  /**
  * At least one of the `input_port_ids_ingress`, `input_port_ids_egress` or `input_networks_ingress ` should be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#input_port_ids_egress SiteNetworktemplate#input_port_ids_egress}
  */
  readonly inputPortIdsEgress?: string[];
  /**
  * At least one of the `input_port_ids_ingress`, `input_port_ids_egress` or `input_networks_ingress ` should be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#input_port_ids_ingress SiteNetworktemplate#input_port_ids_ingress}
  */
  readonly inputPortIdsIngress?: string[];
  /**
  * Exactly one of the `output_ip_address`, `output_port_id` or `output_network` should be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#output_ip_address SiteNetworktemplate#output_ip_address}
  */
  readonly outputIpAddress?: string;
  /**
  * Exactly one of the `output_ip_address`, `output_port_id` or `output_network` should be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#output_network SiteNetworktemplate#output_network}
  */
  readonly outputNetwork?: string;
  /**
  * Exactly one of the `output_ip_address`, `output_port_id` or `output_network` should be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#output_port_id SiteNetworktemplate#output_port_id}
  */
  readonly outputPortId?: string;
}

export function siteNetworktemplatePortMirroringToTerraform(struct?: SiteNetworktemplatePortMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_networks_ingress: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputNetworksIngress),
    input_port_ids_egress: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputPortIdsEgress),
    input_port_ids_ingress: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputPortIdsIngress),
    output_ip_address: cdktf.stringToTerraform(struct!.outputIpAddress),
    output_network: cdktf.stringToTerraform(struct!.outputNetwork),
    output_port_id: cdktf.stringToTerraform(struct!.outputPortId),
  }
}


export function siteNetworktemplatePortMirroringToHclTerraform(struct?: SiteNetworktemplatePortMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_networks_ingress: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputNetworksIngress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_port_ids_egress: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputPortIdsEgress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_port_ids_ingress: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputPortIdsIngress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    output_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.outputIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_network: {
      value: cdktf.stringToHclTerraform(struct!.outputNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_port_id: {
      value: cdktf.stringToHclTerraform(struct!.outputPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplatePortMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplatePortMirroring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputNetworksIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputNetworksIngress = this._inputNetworksIngress;
    }
    if (this._inputPortIdsEgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputPortIdsEgress = this._inputPortIdsEgress;
    }
    if (this._inputPortIdsIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputPortIdsIngress = this._inputPortIdsIngress;
    }
    if (this._outputIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputIpAddress = this._outputIpAddress;
    }
    if (this._outputNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputNetwork = this._outputNetwork;
    }
    if (this._outputPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPortId = this._outputPortId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplatePortMirroring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputNetworksIngress = undefined;
      this._inputPortIdsEgress = undefined;
      this._inputPortIdsIngress = undefined;
      this._outputIpAddress = undefined;
      this._outputNetwork = undefined;
      this._outputPortId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputNetworksIngress = value.inputNetworksIngress;
      this._inputPortIdsEgress = value.inputPortIdsEgress;
      this._inputPortIdsIngress = value.inputPortIdsIngress;
      this._outputIpAddress = value.outputIpAddress;
      this._outputNetwork = value.outputNetwork;
      this._outputPortId = value.outputPortId;
    }
  }

  // input_networks_ingress - computed: true, optional: true, required: false
  private _inputNetworksIngress?: string[]; 
  public get inputNetworksIngress() {
    return this.getListAttribute('input_networks_ingress');
  }
  public set inputNetworksIngress(value: string[]) {
    this._inputNetworksIngress = value;
  }
  public resetInputNetworksIngress() {
    this._inputNetworksIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNetworksIngressInput() {
    return this._inputNetworksIngress;
  }

  // input_port_ids_egress - computed: true, optional: true, required: false
  private _inputPortIdsEgress?: string[]; 
  public get inputPortIdsEgress() {
    return this.getListAttribute('input_port_ids_egress');
  }
  public set inputPortIdsEgress(value: string[]) {
    this._inputPortIdsEgress = value;
  }
  public resetInputPortIdsEgress() {
    this._inputPortIdsEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPortIdsEgressInput() {
    return this._inputPortIdsEgress;
  }

  // input_port_ids_ingress - computed: true, optional: true, required: false
  private _inputPortIdsIngress?: string[]; 
  public get inputPortIdsIngress() {
    return this.getListAttribute('input_port_ids_ingress');
  }
  public set inputPortIdsIngress(value: string[]) {
    this._inputPortIdsIngress = value;
  }
  public resetInputPortIdsIngress() {
    this._inputPortIdsIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPortIdsIngressInput() {
    return this._inputPortIdsIngress;
  }

  // output_ip_address - computed: false, optional: true, required: false
  private _outputIpAddress?: string; 
  public get outputIpAddress() {
    return this.getStringAttribute('output_ip_address');
  }
  public set outputIpAddress(value: string) {
    this._outputIpAddress = value;
  }
  public resetOutputIpAddress() {
    this._outputIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputIpAddressInput() {
    return this._outputIpAddress;
  }

  // output_network - computed: false, optional: true, required: false
  private _outputNetwork?: string; 
  public get outputNetwork() {
    return this.getStringAttribute('output_network');
  }
  public set outputNetwork(value: string) {
    this._outputNetwork = value;
  }
  public resetOutputNetwork() {
    this._outputNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputNetworkInput() {
    return this._outputNetwork;
  }

  // output_port_id - computed: false, optional: true, required: false
  private _outputPortId?: string; 
  public get outputPortId() {
    return this.getStringAttribute('output_port_id');
  }
  public set outputPortId(value: string) {
    this._outputPortId = value;
  }
  public resetOutputPortId() {
    this._outputPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPortIdInput() {
    return this._outputPortId;
  }
}

export class SiteNetworktemplatePortMirroringMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplatePortMirroring } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplatePortMirroringOutputReference {
    return new SiteNetworktemplatePortMirroringOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplatePortUsagesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#equals SiteNetworktemplate#equals}
  */
  readonly equalTo?: string;
  /**
  * Use `equals_any` to match any item in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#equals_any SiteNetworktemplate#equals_any}
  */
  readonly equalsAny?: string[];
  /**
  * "[0:3]":"abcdef" -> "abc"
  * "split(.)[1]": "a.b.c" -> "b"
  * "split(-)[1][0:3]: "a1234-b5678-c90" -> "b56"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#expression SiteNetworktemplate#expression}
  */
  readonly expression?: string;
  /**
  * enum: `link_peermac`, `lldp_chassis_id`, `lldp_hardware_revision`, `lldp_manufacturer_name`, `lldp_oui`, `lldp_serial_number`, `lldp_system_name`, `radius_dynamicfilter`, `radius_usermac`, `radius_username`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#src SiteNetworktemplate#src}
  */
  readonly src: string;
  /**
  * `port_usage` name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#usage SiteNetworktemplate#usage}
  */
  readonly usage?: string;
}

export function siteNetworktemplatePortUsagesRulesToTerraform(struct?: SiteNetworktemplatePortUsagesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equals: cdktf.stringToTerraform(struct!.equalTo),
    equals_any: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.equalsAny),
    expression: cdktf.stringToTerraform(struct!.expression),
    src: cdktf.stringToTerraform(struct!.src),
    usage: cdktf.stringToTerraform(struct!.usage),
  }
}


export function siteNetworktemplatePortUsagesRulesToHclTerraform(struct?: SiteNetworktemplatePortUsagesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals_any: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.equalsAny),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src: {
      value: cdktf.stringToHclTerraform(struct!.src),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage: {
      value: cdktf.stringToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplatePortUsagesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplatePortUsagesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._equalsAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalsAny = this._equalsAny;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._src !== undefined) {
      hasAnyValues = true;
      internalValueResult.src = this._src;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplatePortUsagesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equals = undefined;
      this._equalsAny = undefined;
      this._expression = undefined;
      this._src = undefined;
      this._usage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equals = value.equalTo;
      this._equalsAny = value.equalsAny;
      this._expression = value.expression;
      this._src = value.src;
      this._usage = value.usage;
    }
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // equals_any - computed: false, optional: true, required: false
  private _equalsAny?: string[]; 
  public get equalsAny() {
    return this.getListAttribute('equals_any');
  }
  public set equalsAny(value: string[]) {
    this._equalsAny = value;
  }
  public resetEqualsAny() {
    this._equalsAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalsAnyInput() {
    return this._equalsAny;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // src - computed: false, optional: false, required: true
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }
}

export class SiteNetworktemplatePortUsagesRulesList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplatePortUsagesRules[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplatePortUsagesRulesOutputReference {
    return new SiteNetworktemplatePortUsagesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplatePortUsagesStormControl {
  /**
  * Whether to disable the port when storm control is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#disable_port SiteNetworktemplate#disable_port}
  */
  readonly disablePort?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable storm control on broadcast traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#no_broadcast SiteNetworktemplate#no_broadcast}
  */
  readonly noBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable storm control on multicast traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#no_multicast SiteNetworktemplate#no_multicast}
  */
  readonly noMulticast?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable storm control on registered multicast traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#no_registered_multicast SiteNetworktemplate#no_registered_multicast}
  */
  readonly noRegisteredMulticast?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable storm control on unknown unicast traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#no_unknown_unicast SiteNetworktemplate#no_unknown_unicast}
  */
  readonly noUnknownUnicast?: boolean | cdktf.IResolvable;
  /**
  * Bandwidth-percentage, configures the storm control level as a percentage of the available bandwidth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#percentage SiteNetworktemplate#percentage}
  */
  readonly percentage?: number;
}

export function siteNetworktemplatePortUsagesStormControlToTerraform(struct?: SiteNetworktemplatePortUsagesStormControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_port: cdktf.booleanToTerraform(struct!.disablePort),
    no_broadcast: cdktf.booleanToTerraform(struct!.noBroadcast),
    no_multicast: cdktf.booleanToTerraform(struct!.noMulticast),
    no_registered_multicast: cdktf.booleanToTerraform(struct!.noRegisteredMulticast),
    no_unknown_unicast: cdktf.booleanToTerraform(struct!.noUnknownUnicast),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function siteNetworktemplatePortUsagesStormControlToHclTerraform(struct?: SiteNetworktemplatePortUsagesStormControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_port: {
      value: cdktf.booleanToHclTerraform(struct!.disablePort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.noBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_multicast: {
      value: cdktf.booleanToHclTerraform(struct!.noMulticast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_registered_multicast: {
      value: cdktf.booleanToHclTerraform(struct!.noRegisteredMulticast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_unknown_unicast: {
      value: cdktf.booleanToHclTerraform(struct!.noUnknownUnicast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplatePortUsagesStormControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplatePortUsagesStormControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePort = this._disablePort;
    }
    if (this._noBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBroadcast = this._noBroadcast;
    }
    if (this._noMulticast !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMulticast = this._noMulticast;
    }
    if (this._noRegisteredMulticast !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRegisteredMulticast = this._noRegisteredMulticast;
    }
    if (this._noUnknownUnicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.noUnknownUnicast = this._noUnknownUnicast;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplatePortUsagesStormControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disablePort = undefined;
      this._noBroadcast = undefined;
      this._noMulticast = undefined;
      this._noRegisteredMulticast = undefined;
      this._noUnknownUnicast = undefined;
      this._percentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disablePort = value.disablePort;
      this._noBroadcast = value.noBroadcast;
      this._noMulticast = value.noMulticast;
      this._noRegisteredMulticast = value.noRegisteredMulticast;
      this._noUnknownUnicast = value.noUnknownUnicast;
      this._percentage = value.percentage;
    }
  }

  // disable_port - computed: false, optional: true, required: false
  private _disablePort?: boolean | cdktf.IResolvable; 
  public get disablePort() {
    return this.getBooleanAttribute('disable_port');
  }
  public set disablePort(value: boolean | cdktf.IResolvable) {
    this._disablePort = value;
  }
  public resetDisablePort() {
    this._disablePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePortInput() {
    return this._disablePort;
  }

  // no_broadcast - computed: false, optional: true, required: false
  private _noBroadcast?: boolean | cdktf.IResolvable; 
  public get noBroadcast() {
    return this.getBooleanAttribute('no_broadcast');
  }
  public set noBroadcast(value: boolean | cdktf.IResolvable) {
    this._noBroadcast = value;
  }
  public resetNoBroadcast() {
    this._noBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBroadcastInput() {
    return this._noBroadcast;
  }

  // no_multicast - computed: false, optional: true, required: false
  private _noMulticast?: boolean | cdktf.IResolvable; 
  public get noMulticast() {
    return this.getBooleanAttribute('no_multicast');
  }
  public set noMulticast(value: boolean | cdktf.IResolvable) {
    this._noMulticast = value;
  }
  public resetNoMulticast() {
    this._noMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMulticastInput() {
    return this._noMulticast;
  }

  // no_registered_multicast - computed: false, optional: true, required: false
  private _noRegisteredMulticast?: boolean | cdktf.IResolvable; 
  public get noRegisteredMulticast() {
    return this.getBooleanAttribute('no_registered_multicast');
  }
  public set noRegisteredMulticast(value: boolean | cdktf.IResolvable) {
    this._noRegisteredMulticast = value;
  }
  public resetNoRegisteredMulticast() {
    this._noRegisteredMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRegisteredMulticastInput() {
    return this._noRegisteredMulticast;
  }

  // no_unknown_unicast - computed: false, optional: true, required: false
  private _noUnknownUnicast?: boolean | cdktf.IResolvable; 
  public get noUnknownUnicast() {
    return this.getBooleanAttribute('no_unknown_unicast');
  }
  public set noUnknownUnicast(value: boolean | cdktf.IResolvable) {
    this._noUnknownUnicast = value;
  }
  public resetNoUnknownUnicast() {
    this._noUnknownUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noUnknownUnicastInput() {
    return this._noUnknownUnicast;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface SiteNetworktemplatePortUsages {
  /**
  * Only if `mode`==`trunk`. Whether to trunk all network/vlans
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#all_networks SiteNetworktemplate#all_networks}
  */
  readonly allNetworks?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`. If DHCP snooping is enabled, whether DHCP server is allowed on the interfaces with. All the interfaces from port configs using this port usage are effected. Please notice that allow_dhcpd is a tri_state. When it is not defined, it means using the system's default setting which depends on whether the port is an access or trunk port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#allow_dhcpd SiteNetworktemplate#allow_dhcpd}
  */
  readonly allowDhcpd?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#allow_multiple_supplicants SiteNetworktemplate#allow_multiple_supplicants}
  */
  readonly allowMultipleSupplicants?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic` and `port_auth`==`dot1x`. Bypass auth for known clients if set to true when RADIUS server is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#bypass_auth_when_server_down SiteNetworktemplate#bypass_auth_when_server_down}
  */
  readonly bypassAuthWhenServerDown?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic` and `port_auth`=`dot1x`. Bypass auth for all (including unknown clients) if set to true when RADIUS server is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#bypass_auth_when_server_down_for_unknown_client SiteNetworktemplate#bypass_auth_when_server_down_for_unknown_client}
  */
  readonly bypassAuthWhenServerDownForUnknownClient?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`. To be used together with `isolation` under networks. Signaling that this port connects to the networks isolated but wired clients belong to the same community can talk to each other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#community_vlan_id SiteNetworktemplate#community_vlan_id}
  */
  readonly communityVlanId?: number;
  /**
  * Only if `mode`!=`dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#description SiteNetworktemplate#description}
  */
  readonly description?: string;
  /**
  * Only if `mode`!=`dynamic`. If speed and duplex are specified, whether to disable autonegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#disable_autoneg SiteNetworktemplate#disable_autoneg}
  */
  readonly disableAutoneg?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`. Whether the port is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#disabled SiteNetworktemplate#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`. Link connection mode. enum: `auto`, `full`, `half`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#duplex SiteNetworktemplate#duplex}
  */
  readonly duplex?: string;
  /**
  * Only if `mode`!=`dynamic` and `port_auth`==`dot1x`, if dynamic vlan is used, specify the possible networks/vlans RADIUS can return
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#dynamic_vlan_networks SiteNetworktemplate#dynamic_vlan_networks}
  */
  readonly dynamicVlanNetworks?: string[];
  /**
  * Only if `mode`!=`dynamic` and `port_auth`==`dot1x`. Whether to enable MAC Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enable_mac_auth SiteNetworktemplate#enable_mac_auth}
  */
  readonly enableMacAuth?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enable_qos SiteNetworktemplate#enable_qos}
  */
  readonly enableQos?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic` and `port_auth`==`dot1x`. Which network to put the device into if the device cannot do dot1x. default is null (i.e. not allowed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#guest_network SiteNetworktemplate#guest_network}
  */
  readonly guestNetwork?: string;
  /**
  * Only if `mode`!=`dynamic`. `inter_switch_link` is used together with `isolation` under networks. NOTE: `inter_switch_link` works only between Juniper device. This has to be applied to both ports connected together
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#inter_isolation_network_link SiteNetworktemplate#inter_isolation_network_link}
  */
  readonly interIsolationNetworkLink?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`. `inter_switch_link` is used together with `isolation` under networks. NOTE: inter_switch_link works only between Juniper device. This has to be applied to both ports connected together
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#inter_switch_link SiteNetworktemplate#inter_switch_link}
  */
  readonly interSwitchLink?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic` and `enable_mac_auth`==`true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#mac_auth_only SiteNetworktemplate#mac_auth_only}
  */
  readonly macAuthOnly?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic` + `enable_mac_auth`==`true` + `mac_auth_only`==`false`, dot1x will be given priority then mac_auth. Enable this to prefer mac_auth over dot1x.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#mac_auth_preferred SiteNetworktemplate#mac_auth_preferred}
  */
  readonly macAuthPreferred?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic` and `enable_mac_auth` ==`true`. This type is ignored if mist_nac is enabled. enum: `eap-md5`, `eap-peap`, `pap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#mac_auth_protocol SiteNetworktemplate#mac_auth_protocol}
  */
  readonly macAuthProtocol?: string;
  /**
  * Only if `mode`!=`dynamic` max number of mac addresses, default is 0 for unlimited, otherwise range is 1 to 16383 (upper bound constrained by platform)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#mac_limit SiteNetworktemplate#mac_limit}
  */
  readonly macLimit?: string;
  /**
  * `mode`==`dynamic` must only be used if the port usage name is `dynamic`. enum: `access`, `dynamic`, `inet`, `trunk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#mode SiteNetworktemplate#mode}
  */
  readonly mode?: string;
  /**
  * Only if `mode`!=`dynamic` media maximum transmission unit (MTU) is the largest data unit that can be forwarded without fragmentation. Value between 256 and 9216, default value is 1514.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#mtu SiteNetworktemplate#mtu}
  */
  readonly mtu?: string;
  /**
  * Only if `mode`==`trunk`, the list of network/vlans
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#networks SiteNetworktemplate#networks}
  */
  readonly networks?: string[];
  /**
  * Only if `mode`==`access` and `port_auth`!=`dot1x`. Whether the port should retain dynamically learned MAC addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#persist_mac SiteNetworktemplate#persist_mac}
  */
  readonly persistMac?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`. Whether PoE capabilities are disabled for a port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#poe_disabled SiteNetworktemplate#poe_disabled}
  */
  readonly poeDisabled?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`. If dot1x is desired, set to dot1x. enum: `dot1x`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port_auth SiteNetworktemplate#port_auth}
  */
  readonly portAuth?: string;
  /**
  * Only if `mode`!=`dynamic`. Native network/vlan for untagged traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port_network SiteNetworktemplate#port_network}
  */
  readonly portNetwork?: string;
  /**
  * Only if `mode`!=`dynamic` and `port_auth`=`dot1x` reauthentication interval range between 10 and 65535 (default: 3600)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#reauth_interval SiteNetworktemplate#reauth_interval}
  */
  readonly reauthInterval?: string;
  /**
  * Only if `mode`==`dynamic` Control when the DPC port should be changed to the default port usage. enum: `link_down`, `none` (let the DPC port keep at the current port usage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#reset_default_when SiteNetworktemplate#reset_default_when}
  */
  readonly resetDefaultWhen?: string;
  /**
  * Only if `mode`==`dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#rules SiteNetworktemplate#rules}
  */
  readonly rules?: SiteNetworktemplatePortUsagesRules[] | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic` and `port_auth`==`dot1x`. Sets server fail fallback vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#server_fail_network SiteNetworktemplate#server_fail_network}
  */
  readonly serverFailNetwork?: string;
  /**
  * Only if `mode`!=`dynamic` and `port_auth`==`dot1x`. When radius server reject / fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#server_reject_network SiteNetworktemplate#server_reject_network}
  */
  readonly serverRejectNetwork?: string;
  /**
  * Only if `mode`!=`dynamic`, Port speed, default is auto to automatically negotiate speed enum: `100m`, `10m`, `1g`, `2.5g`, `5g`, `10g`, `25g`, `40g`, `100g`,`auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#speed SiteNetworktemplate#speed}
  */
  readonly speed?: string;
  /**
  * Switch storm control. Only if `mode`!=`dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#storm_control SiteNetworktemplate#storm_control}
  */
  readonly stormControl?: SiteNetworktemplatePortUsagesStormControl;
  /**
  * Only if `mode`!=`dynamic` and `stp_required`==`false`. Drop bridge protocol data units (BPDUs ) that enter any interface or a specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#stp_disable SiteNetworktemplate#stp_disable}
  */
  readonly stpDisable?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`. When enabled, the port is not expected to receive BPDU frames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#stp_edge SiteNetworktemplate#stp_edge}
  */
  readonly stpEdge?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#stp_no_root_port SiteNetworktemplate#stp_no_root_port}
  */
  readonly stpNoRootPort?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#stp_p2p SiteNetworktemplate#stp_p2p}
  */
  readonly stpP2P?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`. Whether to remain in block state if no BPDU is received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#stp_required SiteNetworktemplate#stp_required}
  */
  readonly stpRequired?: boolean | cdktf.IResolvable;
  /**
  * Optional for Campus Fabric Core-Distribution ESI-LAG profile. Helper used by the UI to select this port profile as the ESI-Lag between Distribution and Access switches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#ui_evpntopo_id SiteNetworktemplate#ui_evpntopo_id}
  */
  readonly uiEvpntopoId?: string;
  /**
  * If this is connected to a vstp network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#use_vstp SiteNetworktemplate#use_vstp}
  */
  readonly useVstp?: boolean | cdktf.IResolvable;
  /**
  * Only if `mode`!=`dynamic`. Network/vlan for voip traffic, must also set port_network. to authenticate device, set port_auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#voip_network SiteNetworktemplate#voip_network}
  */
  readonly voipNetwork?: string;
}

export function siteNetworktemplatePortUsagesToTerraform(struct?: SiteNetworktemplatePortUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_networks: cdktf.booleanToTerraform(struct!.allNetworks),
    allow_dhcpd: cdktf.booleanToTerraform(struct!.allowDhcpd),
    allow_multiple_supplicants: cdktf.booleanToTerraform(struct!.allowMultipleSupplicants),
    bypass_auth_when_server_down: cdktf.booleanToTerraform(struct!.bypassAuthWhenServerDown),
    bypass_auth_when_server_down_for_unknown_client: cdktf.booleanToTerraform(struct!.bypassAuthWhenServerDownForUnknownClient),
    community_vlan_id: cdktf.numberToTerraform(struct!.communityVlanId),
    description: cdktf.stringToTerraform(struct!.description),
    disable_autoneg: cdktf.booleanToTerraform(struct!.disableAutoneg),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    duplex: cdktf.stringToTerraform(struct!.duplex),
    dynamic_vlan_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dynamicVlanNetworks),
    enable_mac_auth: cdktf.booleanToTerraform(struct!.enableMacAuth),
    enable_qos: cdktf.booleanToTerraform(struct!.enableQos),
    guest_network: cdktf.stringToTerraform(struct!.guestNetwork),
    inter_isolation_network_link: cdktf.booleanToTerraform(struct!.interIsolationNetworkLink),
    inter_switch_link: cdktf.booleanToTerraform(struct!.interSwitchLink),
    mac_auth_only: cdktf.booleanToTerraform(struct!.macAuthOnly),
    mac_auth_preferred: cdktf.booleanToTerraform(struct!.macAuthPreferred),
    mac_auth_protocol: cdktf.stringToTerraform(struct!.macAuthProtocol),
    mac_limit: cdktf.stringToTerraform(struct!.macLimit),
    mode: cdktf.stringToTerraform(struct!.mode),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    persist_mac: cdktf.booleanToTerraform(struct!.persistMac),
    poe_disabled: cdktf.booleanToTerraform(struct!.poeDisabled),
    port_auth: cdktf.stringToTerraform(struct!.portAuth),
    port_network: cdktf.stringToTerraform(struct!.portNetwork),
    reauth_interval: cdktf.stringToTerraform(struct!.reauthInterval),
    reset_default_when: cdktf.stringToTerraform(struct!.resetDefaultWhen),
    rules: cdktf.listMapper(siteNetworktemplatePortUsagesRulesToTerraform, false)(struct!.rules),
    server_fail_network: cdktf.stringToTerraform(struct!.serverFailNetwork),
    server_reject_network: cdktf.stringToTerraform(struct!.serverRejectNetwork),
    speed: cdktf.stringToTerraform(struct!.speed),
    storm_control: siteNetworktemplatePortUsagesStormControlToTerraform(struct!.stormControl),
    stp_disable: cdktf.booleanToTerraform(struct!.stpDisable),
    stp_edge: cdktf.booleanToTerraform(struct!.stpEdge),
    stp_no_root_port: cdktf.booleanToTerraform(struct!.stpNoRootPort),
    stp_p2p: cdktf.booleanToTerraform(struct!.stpP2P),
    stp_required: cdktf.booleanToTerraform(struct!.stpRequired),
    ui_evpntopo_id: cdktf.stringToTerraform(struct!.uiEvpntopoId),
    use_vstp: cdktf.booleanToTerraform(struct!.useVstp),
    voip_network: cdktf.stringToTerraform(struct!.voipNetwork),
  }
}


export function siteNetworktemplatePortUsagesToHclTerraform(struct?: SiteNetworktemplatePortUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_networks: {
      value: cdktf.booleanToHclTerraform(struct!.allNetworks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_dhcpd: {
      value: cdktf.booleanToHclTerraform(struct!.allowDhcpd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_multiple_supplicants: {
      value: cdktf.booleanToHclTerraform(struct!.allowMultipleSupplicants),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_auth_when_server_down: {
      value: cdktf.booleanToHclTerraform(struct!.bypassAuthWhenServerDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_auth_when_server_down_for_unknown_client: {
      value: cdktf.booleanToHclTerraform(struct!.bypassAuthWhenServerDownForUnknownClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    community_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.communityVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_autoneg: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutoneg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    duplex: {
      value: cdktf.stringToHclTerraform(struct!.duplex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_vlan_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dynamicVlanNetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_mac_auth: {
      value: cdktf.booleanToHclTerraform(struct!.enableMacAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_qos: {
      value: cdktf.booleanToHclTerraform(struct!.enableQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    guest_network: {
      value: cdktf.stringToHclTerraform(struct!.guestNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inter_isolation_network_link: {
      value: cdktf.booleanToHclTerraform(struct!.interIsolationNetworkLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inter_switch_link: {
      value: cdktf.booleanToHclTerraform(struct!.interSwitchLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_auth_only: {
      value: cdktf.booleanToHclTerraform(struct!.macAuthOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_auth_preferred: {
      value: cdktf.booleanToHclTerraform(struct!.macAuthPreferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_auth_protocol: {
      value: cdktf.stringToHclTerraform(struct!.macAuthProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_limit: {
      value: cdktf.stringToHclTerraform(struct!.macLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.stringToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    persist_mac: {
      value: cdktf.booleanToHclTerraform(struct!.persistMac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    poe_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.poeDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_auth: {
      value: cdktf.stringToHclTerraform(struct!.portAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_network: {
      value: cdktf.stringToHclTerraform(struct!.portNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reauth_interval: {
      value: cdktf.stringToHclTerraform(struct!.reauthInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_default_when: {
      value: cdktf.stringToHclTerraform(struct!.resetDefaultWhen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(siteNetworktemplatePortUsagesRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplatePortUsagesRulesList",
    },
    server_fail_network: {
      value: cdktf.stringToHclTerraform(struct!.serverFailNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_reject_network: {
      value: cdktf.stringToHclTerraform(struct!.serverRejectNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storm_control: {
      value: siteNetworktemplatePortUsagesStormControlToHclTerraform(struct!.stormControl),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplatePortUsagesStormControl",
    },
    stp_disable: {
      value: cdktf.booleanToHclTerraform(struct!.stpDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stp_edge: {
      value: cdktf.booleanToHclTerraform(struct!.stpEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stp_no_root_port: {
      value: cdktf.booleanToHclTerraform(struct!.stpNoRootPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stp_p2p: {
      value: cdktf.booleanToHclTerraform(struct!.stpP2P),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stp_required: {
      value: cdktf.booleanToHclTerraform(struct!.stpRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ui_evpntopo_id: {
      value: cdktf.stringToHclTerraform(struct!.uiEvpntopoId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_vstp: {
      value: cdktf.booleanToHclTerraform(struct!.useVstp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    voip_network: {
      value: cdktf.stringToHclTerraform(struct!.voipNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplatePortUsagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplatePortUsages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.allNetworks = this._allNetworks;
    }
    if (this._allowDhcpd !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDhcpd = this._allowDhcpd;
    }
    if (this._allowMultipleSupplicants !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMultipleSupplicants = this._allowMultipleSupplicants;
    }
    if (this._bypassAuthWhenServerDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassAuthWhenServerDown = this._bypassAuthWhenServerDown;
    }
    if (this._bypassAuthWhenServerDownForUnknownClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassAuthWhenServerDownForUnknownClient = this._bypassAuthWhenServerDownForUnknownClient;
    }
    if (this._communityVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityVlanId = this._communityVlanId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableAutoneg !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoneg = this._disableAutoneg;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._duplex !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplex = this._duplex;
    }
    if (this._dynamicVlanNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicVlanNetworks = this._dynamicVlanNetworks;
    }
    if (this._enableMacAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMacAuth = this._enableMacAuth;
    }
    if (this._enableQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQos = this._enableQos;
    }
    if (this._guestNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestNetwork = this._guestNetwork;
    }
    if (this._interIsolationNetworkLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.interIsolationNetworkLink = this._interIsolationNetworkLink;
    }
    if (this._interSwitchLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.interSwitchLink = this._interSwitchLink;
    }
    if (this._macAuthOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAuthOnly = this._macAuthOnly;
    }
    if (this._macAuthPreferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAuthPreferred = this._macAuthPreferred;
    }
    if (this._macAuthProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAuthProtocol = this._macAuthProtocol;
    }
    if (this._macLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.macLimit = this._macLimit;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._persistMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistMac = this._persistMac;
    }
    if (this._poeDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeDisabled = this._poeDisabled;
    }
    if (this._portAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.portAuth = this._portAuth;
    }
    if (this._portNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNetwork = this._portNetwork;
    }
    if (this._reauthInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthInterval = this._reauthInterval;
    }
    if (this._resetDefaultWhen !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetDefaultWhen = this._resetDefaultWhen;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._serverFailNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFailNetwork = this._serverFailNetwork;
    }
    if (this._serverRejectNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRejectNetwork = this._serverRejectNetwork;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._stormControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stormControl = this._stormControl?.internalValue;
    }
    if (this._stpDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpDisable = this._stpDisable;
    }
    if (this._stpEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpEdge = this._stpEdge;
    }
    if (this._stpNoRootPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpNoRootPort = this._stpNoRootPort;
    }
    if (this._stpP2P !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpP2P = this._stpP2P;
    }
    if (this._stpRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpRequired = this._stpRequired;
    }
    if (this._uiEvpntopoId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiEvpntopoId = this._uiEvpntopoId;
    }
    if (this._useVstp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVstp = this._useVstp;
    }
    if (this._voipNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.voipNetwork = this._voipNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplatePortUsages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allNetworks = undefined;
      this._allowDhcpd = undefined;
      this._allowMultipleSupplicants = undefined;
      this._bypassAuthWhenServerDown = undefined;
      this._bypassAuthWhenServerDownForUnknownClient = undefined;
      this._communityVlanId = undefined;
      this._description = undefined;
      this._disableAutoneg = undefined;
      this._disabled = undefined;
      this._duplex = undefined;
      this._dynamicVlanNetworks = undefined;
      this._enableMacAuth = undefined;
      this._enableQos = undefined;
      this._guestNetwork = undefined;
      this._interIsolationNetworkLink = undefined;
      this._interSwitchLink = undefined;
      this._macAuthOnly = undefined;
      this._macAuthPreferred = undefined;
      this._macAuthProtocol = undefined;
      this._macLimit = undefined;
      this._mode = undefined;
      this._mtu = undefined;
      this._networks = undefined;
      this._persistMac = undefined;
      this._poeDisabled = undefined;
      this._portAuth = undefined;
      this._portNetwork = undefined;
      this._reauthInterval = undefined;
      this._resetDefaultWhen = undefined;
      this._rules.internalValue = undefined;
      this._serverFailNetwork = undefined;
      this._serverRejectNetwork = undefined;
      this._speed = undefined;
      this._stormControl.internalValue = undefined;
      this._stpDisable = undefined;
      this._stpEdge = undefined;
      this._stpNoRootPort = undefined;
      this._stpP2P = undefined;
      this._stpRequired = undefined;
      this._uiEvpntopoId = undefined;
      this._useVstp = undefined;
      this._voipNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allNetworks = value.allNetworks;
      this._allowDhcpd = value.allowDhcpd;
      this._allowMultipleSupplicants = value.allowMultipleSupplicants;
      this._bypassAuthWhenServerDown = value.bypassAuthWhenServerDown;
      this._bypassAuthWhenServerDownForUnknownClient = value.bypassAuthWhenServerDownForUnknownClient;
      this._communityVlanId = value.communityVlanId;
      this._description = value.description;
      this._disableAutoneg = value.disableAutoneg;
      this._disabled = value.disabled;
      this._duplex = value.duplex;
      this._dynamicVlanNetworks = value.dynamicVlanNetworks;
      this._enableMacAuth = value.enableMacAuth;
      this._enableQos = value.enableQos;
      this._guestNetwork = value.guestNetwork;
      this._interIsolationNetworkLink = value.interIsolationNetworkLink;
      this._interSwitchLink = value.interSwitchLink;
      this._macAuthOnly = value.macAuthOnly;
      this._macAuthPreferred = value.macAuthPreferred;
      this._macAuthProtocol = value.macAuthProtocol;
      this._macLimit = value.macLimit;
      this._mode = value.mode;
      this._mtu = value.mtu;
      this._networks = value.networks;
      this._persistMac = value.persistMac;
      this._poeDisabled = value.poeDisabled;
      this._portAuth = value.portAuth;
      this._portNetwork = value.portNetwork;
      this._reauthInterval = value.reauthInterval;
      this._resetDefaultWhen = value.resetDefaultWhen;
      this._rules.internalValue = value.rules;
      this._serverFailNetwork = value.serverFailNetwork;
      this._serverRejectNetwork = value.serverRejectNetwork;
      this._speed = value.speed;
      this._stormControl.internalValue = value.stormControl;
      this._stpDisable = value.stpDisable;
      this._stpEdge = value.stpEdge;
      this._stpNoRootPort = value.stpNoRootPort;
      this._stpP2P = value.stpP2P;
      this._stpRequired = value.stpRequired;
      this._uiEvpntopoId = value.uiEvpntopoId;
      this._useVstp = value.useVstp;
      this._voipNetwork = value.voipNetwork;
    }
  }

  // all_networks - computed: false, optional: true, required: false
  private _allNetworks?: boolean | cdktf.IResolvable; 
  public get allNetworks() {
    return this.getBooleanAttribute('all_networks');
  }
  public set allNetworks(value: boolean | cdktf.IResolvable) {
    this._allNetworks = value;
  }
  public resetAllNetworks() {
    this._allNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allNetworksInput() {
    return this._allNetworks;
  }

  // allow_dhcpd - computed: false, optional: true, required: false
  private _allowDhcpd?: boolean | cdktf.IResolvable; 
  public get allowDhcpd() {
    return this.getBooleanAttribute('allow_dhcpd');
  }
  public set allowDhcpd(value: boolean | cdktf.IResolvable) {
    this._allowDhcpd = value;
  }
  public resetAllowDhcpd() {
    this._allowDhcpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDhcpdInput() {
    return this._allowDhcpd;
  }

  // allow_multiple_supplicants - computed: false, optional: true, required: false
  private _allowMultipleSupplicants?: boolean | cdktf.IResolvable; 
  public get allowMultipleSupplicants() {
    return this.getBooleanAttribute('allow_multiple_supplicants');
  }
  public set allowMultipleSupplicants(value: boolean | cdktf.IResolvable) {
    this._allowMultipleSupplicants = value;
  }
  public resetAllowMultipleSupplicants() {
    this._allowMultipleSupplicants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultipleSupplicantsInput() {
    return this._allowMultipleSupplicants;
  }

  // bypass_auth_when_server_down - computed: false, optional: true, required: false
  private _bypassAuthWhenServerDown?: boolean | cdktf.IResolvable; 
  public get bypassAuthWhenServerDown() {
    return this.getBooleanAttribute('bypass_auth_when_server_down');
  }
  public set bypassAuthWhenServerDown(value: boolean | cdktf.IResolvable) {
    this._bypassAuthWhenServerDown = value;
  }
  public resetBypassAuthWhenServerDown() {
    this._bypassAuthWhenServerDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAuthWhenServerDownInput() {
    return this._bypassAuthWhenServerDown;
  }

  // bypass_auth_when_server_down_for_unknown_client - computed: false, optional: true, required: false
  private _bypassAuthWhenServerDownForUnknownClient?: boolean | cdktf.IResolvable; 
  public get bypassAuthWhenServerDownForUnknownClient() {
    return this.getBooleanAttribute('bypass_auth_when_server_down_for_unknown_client');
  }
  public set bypassAuthWhenServerDownForUnknownClient(value: boolean | cdktf.IResolvable) {
    this._bypassAuthWhenServerDownForUnknownClient = value;
  }
  public resetBypassAuthWhenServerDownForUnknownClient() {
    this._bypassAuthWhenServerDownForUnknownClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAuthWhenServerDownForUnknownClientInput() {
    return this._bypassAuthWhenServerDownForUnknownClient;
  }

  // community_vlan_id - computed: false, optional: true, required: false
  private _communityVlanId?: number; 
  public get communityVlanId() {
    return this.getNumberAttribute('community_vlan_id');
  }
  public set communityVlanId(value: number) {
    this._communityVlanId = value;
  }
  public resetCommunityVlanId() {
    this._communityVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityVlanIdInput() {
    return this._communityVlanId;
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

  // disable_autoneg - computed: false, optional: true, required: false
  private _disableAutoneg?: boolean | cdktf.IResolvable; 
  public get disableAutoneg() {
    return this.getBooleanAttribute('disable_autoneg');
  }
  public set disableAutoneg(value: boolean | cdktf.IResolvable) {
    this._disableAutoneg = value;
  }
  public resetDisableAutoneg() {
    this._disableAutoneg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutonegInput() {
    return this._disableAutoneg;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // duplex - computed: false, optional: true, required: false
  private _duplex?: string; 
  public get duplex() {
    return this.getStringAttribute('duplex');
  }
  public set duplex(value: string) {
    this._duplex = value;
  }
  public resetDuplex() {
    this._duplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexInput() {
    return this._duplex;
  }

  // dynamic_vlan_networks - computed: false, optional: true, required: false
  private _dynamicVlanNetworks?: string[]; 
  public get dynamicVlanNetworks() {
    return this.getListAttribute('dynamic_vlan_networks');
  }
  public set dynamicVlanNetworks(value: string[]) {
    this._dynamicVlanNetworks = value;
  }
  public resetDynamicVlanNetworks() {
    this._dynamicVlanNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVlanNetworksInput() {
    return this._dynamicVlanNetworks;
  }

  // enable_mac_auth - computed: false, optional: true, required: false
  private _enableMacAuth?: boolean | cdktf.IResolvable; 
  public get enableMacAuth() {
    return this.getBooleanAttribute('enable_mac_auth');
  }
  public set enableMacAuth(value: boolean | cdktf.IResolvable) {
    this._enableMacAuth = value;
  }
  public resetEnableMacAuth() {
    this._enableMacAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMacAuthInput() {
    return this._enableMacAuth;
  }

  // enable_qos - computed: false, optional: true, required: false
  private _enableQos?: boolean | cdktf.IResolvable; 
  public get enableQos() {
    return this.getBooleanAttribute('enable_qos');
  }
  public set enableQos(value: boolean | cdktf.IResolvable) {
    this._enableQos = value;
  }
  public resetEnableQos() {
    this._enableQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQosInput() {
    return this._enableQos;
  }

  // guest_network - computed: false, optional: true, required: false
  private _guestNetwork?: string; 
  public get guestNetwork() {
    return this.getStringAttribute('guest_network');
  }
  public set guestNetwork(value: string) {
    this._guestNetwork = value;
  }
  public resetGuestNetwork() {
    this._guestNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestNetworkInput() {
    return this._guestNetwork;
  }

  // inter_isolation_network_link - computed: false, optional: true, required: false
  private _interIsolationNetworkLink?: boolean | cdktf.IResolvable; 
  public get interIsolationNetworkLink() {
    return this.getBooleanAttribute('inter_isolation_network_link');
  }
  public set interIsolationNetworkLink(value: boolean | cdktf.IResolvable) {
    this._interIsolationNetworkLink = value;
  }
  public resetInterIsolationNetworkLink() {
    this._interIsolationNetworkLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interIsolationNetworkLinkInput() {
    return this._interIsolationNetworkLink;
  }

  // inter_switch_link - computed: false, optional: true, required: false
  private _interSwitchLink?: boolean | cdktf.IResolvable; 
  public get interSwitchLink() {
    return this.getBooleanAttribute('inter_switch_link');
  }
  public set interSwitchLink(value: boolean | cdktf.IResolvable) {
    this._interSwitchLink = value;
  }
  public resetInterSwitchLink() {
    this._interSwitchLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interSwitchLinkInput() {
    return this._interSwitchLink;
  }

  // mac_auth_only - computed: false, optional: true, required: false
  private _macAuthOnly?: boolean | cdktf.IResolvable; 
  public get macAuthOnly() {
    return this.getBooleanAttribute('mac_auth_only');
  }
  public set macAuthOnly(value: boolean | cdktf.IResolvable) {
    this._macAuthOnly = value;
  }
  public resetMacAuthOnly() {
    this._macAuthOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthOnlyInput() {
    return this._macAuthOnly;
  }

  // mac_auth_preferred - computed: false, optional: true, required: false
  private _macAuthPreferred?: boolean | cdktf.IResolvable; 
  public get macAuthPreferred() {
    return this.getBooleanAttribute('mac_auth_preferred');
  }
  public set macAuthPreferred(value: boolean | cdktf.IResolvable) {
    this._macAuthPreferred = value;
  }
  public resetMacAuthPreferred() {
    this._macAuthPreferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthPreferredInput() {
    return this._macAuthPreferred;
  }

  // mac_auth_protocol - computed: false, optional: true, required: false
  private _macAuthProtocol?: string; 
  public get macAuthProtocol() {
    return this.getStringAttribute('mac_auth_protocol');
  }
  public set macAuthProtocol(value: string) {
    this._macAuthProtocol = value;
  }
  public resetMacAuthProtocol() {
    this._macAuthProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAuthProtocolInput() {
    return this._macAuthProtocol;
  }

  // mac_limit - computed: false, optional: true, required: false
  private _macLimit?: string; 
  public get macLimit() {
    return this.getStringAttribute('mac_limit');
  }
  public set macLimit(value: string) {
    this._macLimit = value;
  }
  public resetMacLimit() {
    this._macLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macLimitInput() {
    return this._macLimit;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // networks - computed: true, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // persist_mac - computed: false, optional: true, required: false
  private _persistMac?: boolean | cdktf.IResolvable; 
  public get persistMac() {
    return this.getBooleanAttribute('persist_mac');
  }
  public set persistMac(value: boolean | cdktf.IResolvable) {
    this._persistMac = value;
  }
  public resetPersistMac() {
    this._persistMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistMacInput() {
    return this._persistMac;
  }

  // poe_disabled - computed: false, optional: true, required: false
  private _poeDisabled?: boolean | cdktf.IResolvable; 
  public get poeDisabled() {
    return this.getBooleanAttribute('poe_disabled');
  }
  public set poeDisabled(value: boolean | cdktf.IResolvable) {
    this._poeDisabled = value;
  }
  public resetPoeDisabled() {
    this._poeDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeDisabledInput() {
    return this._poeDisabled;
  }

  // port_auth - computed: false, optional: true, required: false
  private _portAuth?: string; 
  public get portAuth() {
    return this.getStringAttribute('port_auth');
  }
  public set portAuth(value: string) {
    this._portAuth = value;
  }
  public resetPortAuth() {
    this._portAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portAuthInput() {
    return this._portAuth;
  }

  // port_network - computed: false, optional: true, required: false
  private _portNetwork?: string; 
  public get portNetwork() {
    return this.getStringAttribute('port_network');
  }
  public set portNetwork(value: string) {
    this._portNetwork = value;
  }
  public resetPortNetwork() {
    this._portNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNetworkInput() {
    return this._portNetwork;
  }

  // reauth_interval - computed: false, optional: true, required: false
  private _reauthInterval?: string; 
  public get reauthInterval() {
    return this.getStringAttribute('reauth_interval');
  }
  public set reauthInterval(value: string) {
    this._reauthInterval = value;
  }
  public resetReauthInterval() {
    this._reauthInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthIntervalInput() {
    return this._reauthInterval;
  }

  // reset_default_when - computed: false, optional: true, required: false
  private _resetDefaultWhen?: string; 
  public get resetDefaultWhen() {
    return this.getStringAttribute('reset_default_when');
  }
  public set resetDefaultWhen(value: string) {
    this._resetDefaultWhen = value;
  }
  public resetResetDefaultWhen() {
    this._resetDefaultWhen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetDefaultWhenInput() {
    return this._resetDefaultWhen;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new SiteNetworktemplatePortUsagesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SiteNetworktemplatePortUsagesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // server_fail_network - computed: false, optional: true, required: false
  private _serverFailNetwork?: string; 
  public get serverFailNetwork() {
    return this.getStringAttribute('server_fail_network');
  }
  public set serverFailNetwork(value: string) {
    this._serverFailNetwork = value;
  }
  public resetServerFailNetwork() {
    this._serverFailNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFailNetworkInput() {
    return this._serverFailNetwork;
  }

  // server_reject_network - computed: false, optional: true, required: false
  private _serverRejectNetwork?: string; 
  public get serverRejectNetwork() {
    return this.getStringAttribute('server_reject_network');
  }
  public set serverRejectNetwork(value: string) {
    this._serverRejectNetwork = value;
  }
  public resetServerRejectNetwork() {
    this._serverRejectNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRejectNetworkInput() {
    return this._serverRejectNetwork;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // storm_control - computed: false, optional: true, required: false
  private _stormControl = new SiteNetworktemplatePortUsagesStormControlOutputReference(this, "storm_control");
  public get stormControl() {
    return this._stormControl;
  }
  public putStormControl(value: SiteNetworktemplatePortUsagesStormControl) {
    this._stormControl.internalValue = value;
  }
  public resetStormControl() {
    this._stormControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlInput() {
    return this._stormControl.internalValue;
  }

  // stp_disable - computed: false, optional: true, required: false
  private _stpDisable?: boolean | cdktf.IResolvable; 
  public get stpDisable() {
    return this.getBooleanAttribute('stp_disable');
  }
  public set stpDisable(value: boolean | cdktf.IResolvable) {
    this._stpDisable = value;
  }
  public resetStpDisable() {
    this._stpDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpDisableInput() {
    return this._stpDisable;
  }

  // stp_edge - computed: false, optional: true, required: false
  private _stpEdge?: boolean | cdktf.IResolvable; 
  public get stpEdge() {
    return this.getBooleanAttribute('stp_edge');
  }
  public set stpEdge(value: boolean | cdktf.IResolvable) {
    this._stpEdge = value;
  }
  public resetStpEdge() {
    this._stpEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpEdgeInput() {
    return this._stpEdge;
  }

  // stp_no_root_port - computed: false, optional: true, required: false
  private _stpNoRootPort?: boolean | cdktf.IResolvable; 
  public get stpNoRootPort() {
    return this.getBooleanAttribute('stp_no_root_port');
  }
  public set stpNoRootPort(value: boolean | cdktf.IResolvable) {
    this._stpNoRootPort = value;
  }
  public resetStpNoRootPort() {
    this._stpNoRootPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpNoRootPortInput() {
    return this._stpNoRootPort;
  }

  // stp_p2p - computed: false, optional: true, required: false
  private _stpP2P?: boolean | cdktf.IResolvable; 
  public get stpP2P() {
    return this.getBooleanAttribute('stp_p2p');
  }
  public set stpP2P(value: boolean | cdktf.IResolvable) {
    this._stpP2P = value;
  }
  public resetStpP2P() {
    this._stpP2P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpP2PInput() {
    return this._stpP2P;
  }

  // stp_required - computed: false, optional: true, required: false
  private _stpRequired?: boolean | cdktf.IResolvable; 
  public get stpRequired() {
    return this.getBooleanAttribute('stp_required');
  }
  public set stpRequired(value: boolean | cdktf.IResolvable) {
    this._stpRequired = value;
  }
  public resetStpRequired() {
    this._stpRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpRequiredInput() {
    return this._stpRequired;
  }

  // ui_evpntopo_id - computed: false, optional: true, required: false
  private _uiEvpntopoId?: string; 
  public get uiEvpntopoId() {
    return this.getStringAttribute('ui_evpntopo_id');
  }
  public set uiEvpntopoId(value: string) {
    this._uiEvpntopoId = value;
  }
  public resetUiEvpntopoId() {
    this._uiEvpntopoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiEvpntopoIdInput() {
    return this._uiEvpntopoId;
  }

  // use_vstp - computed: false, optional: true, required: false
  private _useVstp?: boolean | cdktf.IResolvable; 
  public get useVstp() {
    return this.getBooleanAttribute('use_vstp');
  }
  public set useVstp(value: boolean | cdktf.IResolvable) {
    this._useVstp = value;
  }
  public resetUseVstp() {
    this._useVstp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVstpInput() {
    return this._useVstp;
  }

  // voip_network - computed: false, optional: true, required: false
  private _voipNetwork?: string; 
  public get voipNetwork() {
    return this.getStringAttribute('voip_network');
  }
  public set voipNetwork(value: string) {
    this._voipNetwork = value;
  }
  public resetVoipNetwork() {
    this._voipNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voipNetworkInput() {
    return this._voipNetwork;
  }
}

export class SiteNetworktemplatePortUsagesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplatePortUsages } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplatePortUsagesOutputReference {
    return new SiteNetworktemplatePortUsagesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateRadiusConfigAcctServers {
  /**
  * IP/ hostname of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#host SiteNetworktemplate#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#keywrap_enabled SiteNetworktemplate#keywrap_enabled}
  */
  readonly keywrapEnabled?: boolean | cdktf.IResolvable;
  /**
  * enum: `ascii`, `hex`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#keywrap_format SiteNetworktemplate#keywrap_format}
  */
  readonly keywrapFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#keywrap_kek SiteNetworktemplate#keywrap_kek}
  */
  readonly keywrapKek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#keywrap_mack SiteNetworktemplate#keywrap_mack}
  */
  readonly keywrapMack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port SiteNetworktemplate#port}
  */
  readonly port?: string;
  /**
  * Secret of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#secret SiteNetworktemplate#secret}
  */
  readonly secret: string;
}

export function siteNetworktemplateRadiusConfigAcctServersToTerraform(struct?: SiteNetworktemplateRadiusConfigAcctServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    keywrap_enabled: cdktf.booleanToTerraform(struct!.keywrapEnabled),
    keywrap_format: cdktf.stringToTerraform(struct!.keywrapFormat),
    keywrap_kek: cdktf.stringToTerraform(struct!.keywrapKek),
    keywrap_mack: cdktf.stringToTerraform(struct!.keywrapMack),
    port: cdktf.stringToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function siteNetworktemplateRadiusConfigAcctServersToHclTerraform(struct?: SiteNetworktemplateRadiusConfigAcctServers | cdktf.IResolvable): any {
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
    keywrap_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.keywrapEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keywrap_format: {
      value: cdktf.stringToHclTerraform(struct!.keywrapFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_kek: {
      value: cdktf.stringToHclTerraform(struct!.keywrapKek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_mack: {
      value: cdktf.stringToHclTerraform(struct!.keywrapMack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRadiusConfigAcctServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateRadiusConfigAcctServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keywrapEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapEnabled = this._keywrapEnabled;
    }
    if (this._keywrapFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapFormat = this._keywrapFormat;
    }
    if (this._keywrapKek !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapKek = this._keywrapKek;
    }
    if (this._keywrapMack !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapMack = this._keywrapMack;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRadiusConfigAcctServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._keywrapEnabled = undefined;
      this._keywrapFormat = undefined;
      this._keywrapKek = undefined;
      this._keywrapMack = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._keywrapEnabled = value.keywrapEnabled;
      this._keywrapFormat = value.keywrapFormat;
      this._keywrapKek = value.keywrapKek;
      this._keywrapMack = value.keywrapMack;
      this._port = value.port;
      this._secret = value.secret;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // keywrap_enabled - computed: false, optional: true, required: false
  private _keywrapEnabled?: boolean | cdktf.IResolvable; 
  public get keywrapEnabled() {
    return this.getBooleanAttribute('keywrap_enabled');
  }
  public set keywrapEnabled(value: boolean | cdktf.IResolvable) {
    this._keywrapEnabled = value;
  }
  public resetKeywrapEnabled() {
    this._keywrapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapEnabledInput() {
    return this._keywrapEnabled;
  }

  // keywrap_format - computed: false, optional: true, required: false
  private _keywrapFormat?: string; 
  public get keywrapFormat() {
    return this.getStringAttribute('keywrap_format');
  }
  public set keywrapFormat(value: string) {
    this._keywrapFormat = value;
  }
  public resetKeywrapFormat() {
    this._keywrapFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapFormatInput() {
    return this._keywrapFormat;
  }

  // keywrap_kek - computed: false, optional: true, required: false
  private _keywrapKek?: string; 
  public get keywrapKek() {
    return this.getStringAttribute('keywrap_kek');
  }
  public set keywrapKek(value: string) {
    this._keywrapKek = value;
  }
  public resetKeywrapKek() {
    this._keywrapKek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapKekInput() {
    return this._keywrapKek;
  }

  // keywrap_mack - computed: false, optional: true, required: false
  private _keywrapMack?: string; 
  public get keywrapMack() {
    return this.getStringAttribute('keywrap_mack');
  }
  public set keywrapMack(value: string) {
    this._keywrapMack = value;
  }
  public resetKeywrapMack() {
    this._keywrapMack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapMackInput() {
    return this._keywrapMack;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class SiteNetworktemplateRadiusConfigAcctServersList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateRadiusConfigAcctServers[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateRadiusConfigAcctServersOutputReference {
    return new SiteNetworktemplateRadiusConfigAcctServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateRadiusConfigAuthServers {
  /**
  * IP/ hostname of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#host SiteNetworktemplate#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#keywrap_enabled SiteNetworktemplate#keywrap_enabled}
  */
  readonly keywrapEnabled?: boolean | cdktf.IResolvable;
  /**
  * enum: `ascii`, `hex`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#keywrap_format SiteNetworktemplate#keywrap_format}
  */
  readonly keywrapFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#keywrap_kek SiteNetworktemplate#keywrap_kek}
  */
  readonly keywrapKek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#keywrap_mack SiteNetworktemplate#keywrap_mack}
  */
  readonly keywrapMack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port SiteNetworktemplate#port}
  */
  readonly port?: string;
  /**
  * Whether to require Message-Authenticator in requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#require_message_authenticator SiteNetworktemplate#require_message_authenticator}
  */
  readonly requireMessageAuthenticator?: boolean | cdktf.IResolvable;
  /**
  * Secret of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#secret SiteNetworktemplate#secret}
  */
  readonly secret: string;
}

export function siteNetworktemplateRadiusConfigAuthServersToTerraform(struct?: SiteNetworktemplateRadiusConfigAuthServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    keywrap_enabled: cdktf.booleanToTerraform(struct!.keywrapEnabled),
    keywrap_format: cdktf.stringToTerraform(struct!.keywrapFormat),
    keywrap_kek: cdktf.stringToTerraform(struct!.keywrapKek),
    keywrap_mack: cdktf.stringToTerraform(struct!.keywrapMack),
    port: cdktf.stringToTerraform(struct!.port),
    require_message_authenticator: cdktf.booleanToTerraform(struct!.requireMessageAuthenticator),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function siteNetworktemplateRadiusConfigAuthServersToHclTerraform(struct?: SiteNetworktemplateRadiusConfigAuthServers | cdktf.IResolvable): any {
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
    keywrap_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.keywrapEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keywrap_format: {
      value: cdktf.stringToHclTerraform(struct!.keywrapFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_kek: {
      value: cdktf.stringToHclTerraform(struct!.keywrapKek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keywrap_mack: {
      value: cdktf.stringToHclTerraform(struct!.keywrapMack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_message_authenticator: {
      value: cdktf.booleanToHclTerraform(struct!.requireMessageAuthenticator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRadiusConfigAuthServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateRadiusConfigAuthServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keywrapEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapEnabled = this._keywrapEnabled;
    }
    if (this._keywrapFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapFormat = this._keywrapFormat;
    }
    if (this._keywrapKek !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapKek = this._keywrapKek;
    }
    if (this._keywrapMack !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywrapMack = this._keywrapMack;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._requireMessageAuthenticator !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMessageAuthenticator = this._requireMessageAuthenticator;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRadiusConfigAuthServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._keywrapEnabled = undefined;
      this._keywrapFormat = undefined;
      this._keywrapKek = undefined;
      this._keywrapMack = undefined;
      this._port = undefined;
      this._requireMessageAuthenticator = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._keywrapEnabled = value.keywrapEnabled;
      this._keywrapFormat = value.keywrapFormat;
      this._keywrapKek = value.keywrapKek;
      this._keywrapMack = value.keywrapMack;
      this._port = value.port;
      this._requireMessageAuthenticator = value.requireMessageAuthenticator;
      this._secret = value.secret;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // keywrap_enabled - computed: false, optional: true, required: false
  private _keywrapEnabled?: boolean | cdktf.IResolvable; 
  public get keywrapEnabled() {
    return this.getBooleanAttribute('keywrap_enabled');
  }
  public set keywrapEnabled(value: boolean | cdktf.IResolvable) {
    this._keywrapEnabled = value;
  }
  public resetKeywrapEnabled() {
    this._keywrapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapEnabledInput() {
    return this._keywrapEnabled;
  }

  // keywrap_format - computed: false, optional: true, required: false
  private _keywrapFormat?: string; 
  public get keywrapFormat() {
    return this.getStringAttribute('keywrap_format');
  }
  public set keywrapFormat(value: string) {
    this._keywrapFormat = value;
  }
  public resetKeywrapFormat() {
    this._keywrapFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapFormatInput() {
    return this._keywrapFormat;
  }

  // keywrap_kek - computed: false, optional: true, required: false
  private _keywrapKek?: string; 
  public get keywrapKek() {
    return this.getStringAttribute('keywrap_kek');
  }
  public set keywrapKek(value: string) {
    this._keywrapKek = value;
  }
  public resetKeywrapKek() {
    this._keywrapKek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapKekInput() {
    return this._keywrapKek;
  }

  // keywrap_mack - computed: false, optional: true, required: false
  private _keywrapMack?: string; 
  public get keywrapMack() {
    return this.getStringAttribute('keywrap_mack');
  }
  public set keywrapMack(value: string) {
    this._keywrapMack = value;
  }
  public resetKeywrapMack() {
    this._keywrapMack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywrapMackInput() {
    return this._keywrapMack;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // require_message_authenticator - computed: false, optional: true, required: false
  private _requireMessageAuthenticator?: boolean | cdktf.IResolvable; 
  public get requireMessageAuthenticator() {
    return this.getBooleanAttribute('require_message_authenticator');
  }
  public set requireMessageAuthenticator(value: boolean | cdktf.IResolvable) {
    this._requireMessageAuthenticator = value;
  }
  public resetRequireMessageAuthenticator() {
    this._requireMessageAuthenticator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMessageAuthenticatorInput() {
    return this._requireMessageAuthenticator;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class SiteNetworktemplateRadiusConfigAuthServersList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateRadiusConfigAuthServers[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateRadiusConfigAuthServersOutputReference {
    return new SiteNetworktemplateRadiusConfigAuthServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateRadiusConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#acct_immediate_update SiteNetworktemplate#acct_immediate_update}
  */
  readonly acctImmediateUpdate?: boolean | cdktf.IResolvable;
  /**
  * How frequently should interim accounting be reported, 60-65535. default is 0 (use one specified in Access-Accept request from RADIUS Server). Very frequent messages can affect the performance of the radius server, 600 and up is recommended when enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#acct_interim_interval SiteNetworktemplate#acct_interim_interval}
  */
  readonly acctInterimInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#acct_servers SiteNetworktemplate#acct_servers}
  */
  readonly acctServers?: SiteNetworktemplateRadiusConfigAcctServers[] | cdktf.IResolvable;
  /**
  * enum: `ordered`, `unordered`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#auth_server_selection SiteNetworktemplate#auth_server_selection}
  */
  readonly authServerSelection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#auth_servers SiteNetworktemplate#auth_servers}
  */
  readonly authServers?: SiteNetworktemplateRadiusConfigAuthServers[] | cdktf.IResolvable;
  /**
  * Radius auth session retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#auth_servers_retries SiteNetworktemplate#auth_servers_retries}
  */
  readonly authServersRetries?: number;
  /**
  * Radius auth session timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#auth_servers_timeout SiteNetworktemplate#auth_servers_timeout}
  */
  readonly authServersTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#coa_enabled SiteNetworktemplate#coa_enabled}
  */
  readonly coaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#coa_port SiteNetworktemplate#coa_port}
  */
  readonly coaPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#fast_dot1x_timers SiteNetworktemplate#fast_dot1x_timers}
  */
  readonly fastDot1XTimers?: boolean | cdktf.IResolvable;
  /**
  * Use `network`or `source_ip`. Which network the RADIUS server resides, if there's static IP for this network, we'd use it as source-ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#network SiteNetworktemplate#network}
  */
  readonly network?: string;
  /**
  * Use `network`or `source_ip`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#source_ip SiteNetworktemplate#source_ip}
  */
  readonly sourceIp?: string;
}

export function siteNetworktemplateRadiusConfigToTerraform(struct?: SiteNetworktemplateRadiusConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acct_immediate_update: cdktf.booleanToTerraform(struct!.acctImmediateUpdate),
    acct_interim_interval: cdktf.numberToTerraform(struct!.acctInterimInterval),
    acct_servers: cdktf.listMapper(siteNetworktemplateRadiusConfigAcctServersToTerraform, false)(struct!.acctServers),
    auth_server_selection: cdktf.stringToTerraform(struct!.authServerSelection),
    auth_servers: cdktf.listMapper(siteNetworktemplateRadiusConfigAuthServersToTerraform, false)(struct!.authServers),
    auth_servers_retries: cdktf.numberToTerraform(struct!.authServersRetries),
    auth_servers_timeout: cdktf.numberToTerraform(struct!.authServersTimeout),
    coa_enabled: cdktf.booleanToTerraform(struct!.coaEnabled),
    coa_port: cdktf.stringToTerraform(struct!.coaPort),
    fast_dot1x_timers: cdktf.booleanToTerraform(struct!.fastDot1XTimers),
    network: cdktf.stringToTerraform(struct!.network),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
  }
}


export function siteNetworktemplateRadiusConfigToHclTerraform(struct?: SiteNetworktemplateRadiusConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acct_immediate_update: {
      value: cdktf.booleanToHclTerraform(struct!.acctImmediateUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    acct_interim_interval: {
      value: cdktf.numberToHclTerraform(struct!.acctInterimInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acct_servers: {
      value: cdktf.listMapperHcl(siteNetworktemplateRadiusConfigAcctServersToHclTerraform, false)(struct!.acctServers),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateRadiusConfigAcctServersList",
    },
    auth_server_selection: {
      value: cdktf.stringToHclTerraform(struct!.authServerSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_servers: {
      value: cdktf.listMapperHcl(siteNetworktemplateRadiusConfigAuthServersToHclTerraform, false)(struct!.authServers),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateRadiusConfigAuthServersList",
    },
    auth_servers_retries: {
      value: cdktf.numberToHclTerraform(struct!.authServersRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_servers_timeout: {
      value: cdktf.numberToHclTerraform(struct!.authServersTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    coa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.coaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    coa_port: {
      value: cdktf.stringToHclTerraform(struct!.coaPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fast_dot1x_timers: {
      value: cdktf.booleanToHclTerraform(struct!.fastDot1XTimers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRadiusConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateRadiusConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acctImmediateUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctImmediateUpdate = this._acctImmediateUpdate;
    }
    if (this._acctInterimInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctInterimInterval = this._acctInterimInterval;
    }
    if (this._acctServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctServers = this._acctServers?.internalValue;
    }
    if (this._authServerSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServerSelection = this._authServerSelection;
    }
    if (this._authServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServers = this._authServers?.internalValue;
    }
    if (this._authServersRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServersRetries = this._authServersRetries;
    }
    if (this._authServersTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServersTimeout = this._authServersTimeout;
    }
    if (this._coaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.coaEnabled = this._coaEnabled;
    }
    if (this._coaPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.coaPort = this._coaPort;
    }
    if (this._fastDot1XTimers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastDot1XTimers = this._fastDot1XTimers;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRadiusConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acctImmediateUpdate = undefined;
      this._acctInterimInterval = undefined;
      this._acctServers.internalValue = undefined;
      this._authServerSelection = undefined;
      this._authServers.internalValue = undefined;
      this._authServersRetries = undefined;
      this._authServersTimeout = undefined;
      this._coaEnabled = undefined;
      this._coaPort = undefined;
      this._fastDot1XTimers = undefined;
      this._network = undefined;
      this._sourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acctImmediateUpdate = value.acctImmediateUpdate;
      this._acctInterimInterval = value.acctInterimInterval;
      this._acctServers.internalValue = value.acctServers;
      this._authServerSelection = value.authServerSelection;
      this._authServers.internalValue = value.authServers;
      this._authServersRetries = value.authServersRetries;
      this._authServersTimeout = value.authServersTimeout;
      this._coaEnabled = value.coaEnabled;
      this._coaPort = value.coaPort;
      this._fastDot1XTimers = value.fastDot1XTimers;
      this._network = value.network;
      this._sourceIp = value.sourceIp;
    }
  }

  // acct_immediate_update - computed: false, optional: true, required: false
  private _acctImmediateUpdate?: boolean | cdktf.IResolvable; 
  public get acctImmediateUpdate() {
    return this.getBooleanAttribute('acct_immediate_update');
  }
  public set acctImmediateUpdate(value: boolean | cdktf.IResolvable) {
    this._acctImmediateUpdate = value;
  }
  public resetAcctImmediateUpdate() {
    this._acctImmediateUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctImmediateUpdateInput() {
    return this._acctImmediateUpdate;
  }

  // acct_interim_interval - computed: true, optional: true, required: false
  private _acctInterimInterval?: number; 
  public get acctInterimInterval() {
    return this.getNumberAttribute('acct_interim_interval');
  }
  public set acctInterimInterval(value: number) {
    this._acctInterimInterval = value;
  }
  public resetAcctInterimInterval() {
    this._acctInterimInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctInterimIntervalInput() {
    return this._acctInterimInterval;
  }

  // acct_servers - computed: false, optional: true, required: false
  private _acctServers = new SiteNetworktemplateRadiusConfigAcctServersList(this, "acct_servers", false);
  public get acctServers() {
    return this._acctServers;
  }
  public putAcctServers(value: SiteNetworktemplateRadiusConfigAcctServers[] | cdktf.IResolvable) {
    this._acctServers.internalValue = value;
  }
  public resetAcctServers() {
    this._acctServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctServersInput() {
    return this._acctServers.internalValue;
  }

  // auth_server_selection - computed: true, optional: true, required: false
  private _authServerSelection?: string; 
  public get authServerSelection() {
    return this.getStringAttribute('auth_server_selection');
  }
  public set authServerSelection(value: string) {
    this._authServerSelection = value;
  }
  public resetAuthServerSelection() {
    this._authServerSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerSelectionInput() {
    return this._authServerSelection;
  }

  // auth_servers - computed: false, optional: true, required: false
  private _authServers = new SiteNetworktemplateRadiusConfigAuthServersList(this, "auth_servers", false);
  public get authServers() {
    return this._authServers;
  }
  public putAuthServers(value: SiteNetworktemplateRadiusConfigAuthServers[] | cdktf.IResolvable) {
    this._authServers.internalValue = value;
  }
  public resetAuthServers() {
    this._authServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersInput() {
    return this._authServers.internalValue;
  }

  // auth_servers_retries - computed: true, optional: true, required: false
  private _authServersRetries?: number; 
  public get authServersRetries() {
    return this.getNumberAttribute('auth_servers_retries');
  }
  public set authServersRetries(value: number) {
    this._authServersRetries = value;
  }
  public resetAuthServersRetries() {
    this._authServersRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersRetriesInput() {
    return this._authServersRetries;
  }

  // auth_servers_timeout - computed: true, optional: true, required: false
  private _authServersTimeout?: number; 
  public get authServersTimeout() {
    return this.getNumberAttribute('auth_servers_timeout');
  }
  public set authServersTimeout(value: number) {
    this._authServersTimeout = value;
  }
  public resetAuthServersTimeout() {
    this._authServersTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServersTimeoutInput() {
    return this._authServersTimeout;
  }

  // coa_enabled - computed: true, optional: true, required: false
  private _coaEnabled?: boolean | cdktf.IResolvable; 
  public get coaEnabled() {
    return this.getBooleanAttribute('coa_enabled');
  }
  public set coaEnabled(value: boolean | cdktf.IResolvable) {
    this._coaEnabled = value;
  }
  public resetCoaEnabled() {
    this._coaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaEnabledInput() {
    return this._coaEnabled;
  }

  // coa_port - computed: true, optional: true, required: false
  private _coaPort?: string; 
  public get coaPort() {
    return this.getStringAttribute('coa_port');
  }
  public set coaPort(value: string) {
    this._coaPort = value;
  }
  public resetCoaPort() {
    this._coaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaPortInput() {
    return this._coaPort;
  }

  // fast_dot1x_timers - computed: true, optional: true, required: false
  private _fastDot1XTimers?: boolean | cdktf.IResolvable; 
  public get fastDot1XTimers() {
    return this.getBooleanAttribute('fast_dot1x_timers');
  }
  public set fastDot1XTimers(value: boolean | cdktf.IResolvable) {
    this._fastDot1XTimers = value;
  }
  public resetFastDot1XTimers() {
    this._fastDot1XTimers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastDot1XTimersInput() {
    return this._fastDot1XTimers;
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

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}
export interface SiteNetworktemplateRemoteSyslogArchive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#files SiteNetworktemplate#files}
  */
  readonly files?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#size SiteNetworktemplate#size}
  */
  readonly size?: string;
}

export function siteNetworktemplateRemoteSyslogArchiveToTerraform(struct?: SiteNetworktemplateRemoteSyslogArchive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.stringToTerraform(struct!.files),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function siteNetworktemplateRemoteSyslogArchiveToHclTerraform(struct?: SiteNetworktemplateRemoteSyslogArchive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.stringToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRemoteSyslogArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateRemoteSyslogArchive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslogArchive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files = value.files;
      this._size = value.size;
    }
  }

  // files - computed: false, optional: true, required: false
  private _files?: string; 
  public get files() {
    return this.getStringAttribute('files');
  }
  public set files(value: string) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
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
}
export interface SiteNetworktemplateRemoteSyslogConsoleContents {
  /**
  * enum: `any`, `authorization`, `change-log`, `config`, `conflict-log`, `daemon`, `dfc`, `external`, `firewall`, `ftp`, `interactive-commands`, `kernel`, `ntp`, `pfe`, `security`, `user`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#facility SiteNetworktemplate#facility}
  */
  readonly facility?: string;
  /**
  * enum: `alert`, `any`, `critical`, `emergency`, `error`, `info`, `notice`, `warning`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#severity SiteNetworktemplate#severity}
  */
  readonly severity?: string;
}

export function siteNetworktemplateRemoteSyslogConsoleContentsToTerraform(struct?: SiteNetworktemplateRemoteSyslogConsoleContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facility: cdktf.stringToTerraform(struct!.facility),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function siteNetworktemplateRemoteSyslogConsoleContentsToHclTerraform(struct?: SiteNetworktemplateRemoteSyslogConsoleContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    facility: {
      value: cdktf.stringToHclTerraform(struct!.facility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRemoteSyslogConsoleContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateRemoteSyslogConsoleContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facility !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslogConsoleContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facility = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facility = value.facility;
      this._severity = value.severity;
    }
  }

  // facility - computed: true, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class SiteNetworktemplateRemoteSyslogConsoleContentsList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateRemoteSyslogConsoleContents[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateRemoteSyslogConsoleContentsOutputReference {
    return new SiteNetworktemplateRemoteSyslogConsoleContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateRemoteSyslogConsole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#contents SiteNetworktemplate#contents}
  */
  readonly contents?: SiteNetworktemplateRemoteSyslogConsoleContents[] | cdktf.IResolvable;
}

export function siteNetworktemplateRemoteSyslogConsoleToTerraform(struct?: SiteNetworktemplateRemoteSyslogConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.listMapper(siteNetworktemplateRemoteSyslogConsoleContentsToTerraform, false)(struct!.contents),
  }
}


export function siteNetworktemplateRemoteSyslogConsoleToHclTerraform(struct?: SiteNetworktemplateRemoteSyslogConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktf.listMapperHcl(siteNetworktemplateRemoteSyslogConsoleContentsToHclTerraform, false)(struct!.contents),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateRemoteSyslogConsoleContentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRemoteSyslogConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateRemoteSyslogConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslogConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents.internalValue = value.contents;
    }
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new SiteNetworktemplateRemoteSyslogConsoleContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: SiteNetworktemplateRemoteSyslogConsoleContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }
}
export interface SiteNetworktemplateRemoteSyslogFilesArchive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#files SiteNetworktemplate#files}
  */
  readonly files?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#size SiteNetworktemplate#size}
  */
  readonly size?: string;
}

export function siteNetworktemplateRemoteSyslogFilesArchiveToTerraform(struct?: SiteNetworktemplateRemoteSyslogFilesArchive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.stringToTerraform(struct!.files),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function siteNetworktemplateRemoteSyslogFilesArchiveToHclTerraform(struct?: SiteNetworktemplateRemoteSyslogFilesArchive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.stringToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRemoteSyslogFilesArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateRemoteSyslogFilesArchive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslogFilesArchive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files = value.files;
      this._size = value.size;
    }
  }

  // files - computed: false, optional: true, required: false
  private _files?: string; 
  public get files() {
    return this.getStringAttribute('files');
  }
  public set files(value: string) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
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
}
export interface SiteNetworktemplateRemoteSyslogFilesContents {
  /**
  * enum: `any`, `authorization`, `change-log`, `config`, `conflict-log`, `daemon`, `dfc`, `external`, `firewall`, `ftp`, `interactive-commands`, `kernel`, `ntp`, `pfe`, `security`, `user`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#facility SiteNetworktemplate#facility}
  */
  readonly facility?: string;
  /**
  * enum: `alert`, `any`, `critical`, `emergency`, `error`, `info`, `notice`, `warning`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#severity SiteNetworktemplate#severity}
  */
  readonly severity?: string;
}

export function siteNetworktemplateRemoteSyslogFilesContentsToTerraform(struct?: SiteNetworktemplateRemoteSyslogFilesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facility: cdktf.stringToTerraform(struct!.facility),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function siteNetworktemplateRemoteSyslogFilesContentsToHclTerraform(struct?: SiteNetworktemplateRemoteSyslogFilesContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    facility: {
      value: cdktf.stringToHclTerraform(struct!.facility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRemoteSyslogFilesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateRemoteSyslogFilesContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facility !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslogFilesContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facility = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facility = value.facility;
      this._severity = value.severity;
    }
  }

  // facility - computed: true, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class SiteNetworktemplateRemoteSyslogFilesContentsList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateRemoteSyslogFilesContents[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateRemoteSyslogFilesContentsOutputReference {
    return new SiteNetworktemplateRemoteSyslogFilesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateRemoteSyslogFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#archive SiteNetworktemplate#archive}
  */
  readonly archive?: SiteNetworktemplateRemoteSyslogFilesArchive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#contents SiteNetworktemplate#contents}
  */
  readonly contents?: SiteNetworktemplateRemoteSyslogFilesContents[] | cdktf.IResolvable;
  /**
  * Only if `protocol`==`tcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enable_tls SiteNetworktemplate#enable_tls}
  */
  readonly enableTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#explicit_priority SiteNetworktemplate#explicit_priority}
  */
  readonly explicitPriority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#file SiteNetworktemplate#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#match SiteNetworktemplate#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#structured_data SiteNetworktemplate#structured_data}
  */
  readonly structuredData?: boolean | cdktf.IResolvable;
}

export function siteNetworktemplateRemoteSyslogFilesToTerraform(struct?: SiteNetworktemplateRemoteSyslogFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive: siteNetworktemplateRemoteSyslogFilesArchiveToTerraform(struct!.archive),
    contents: cdktf.listMapper(siteNetworktemplateRemoteSyslogFilesContentsToTerraform, false)(struct!.contents),
    enable_tls: cdktf.booleanToTerraform(struct!.enableTls),
    explicit_priority: cdktf.booleanToTerraform(struct!.explicitPriority),
    file: cdktf.stringToTerraform(struct!.file),
    match: cdktf.stringToTerraform(struct!.match),
    structured_data: cdktf.booleanToTerraform(struct!.structuredData),
  }
}


export function siteNetworktemplateRemoteSyslogFilesToHclTerraform(struct?: SiteNetworktemplateRemoteSyslogFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive: {
      value: siteNetworktemplateRemoteSyslogFilesArchiveToHclTerraform(struct!.archive),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateRemoteSyslogFilesArchive",
    },
    contents: {
      value: cdktf.listMapperHcl(siteNetworktemplateRemoteSyslogFilesContentsToHclTerraform, false)(struct!.contents),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateRemoteSyslogFilesContentsList",
    },
    enable_tls: {
      value: cdktf.booleanToHclTerraform(struct!.enableTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    explicit_priority: {
      value: cdktf.booleanToHclTerraform(struct!.explicitPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    structured_data: {
      value: cdktf.booleanToHclTerraform(struct!.structuredData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRemoteSyslogFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateRemoteSyslogFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archive = this._archive?.internalValue;
    }
    if (this._contents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents?.internalValue;
    }
    if (this._enableTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls = this._enableTls;
    }
    if (this._explicitPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitPriority = this._explicitPriority;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._structuredData !== undefined) {
      hasAnyValues = true;
      internalValueResult.structuredData = this._structuredData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslogFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archive.internalValue = undefined;
      this._contents.internalValue = undefined;
      this._enableTls = undefined;
      this._explicitPriority = undefined;
      this._file = undefined;
      this._match = undefined;
      this._structuredData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archive.internalValue = value.archive;
      this._contents.internalValue = value.contents;
      this._enableTls = value.enableTls;
      this._explicitPriority = value.explicitPriority;
      this._file = value.file;
      this._match = value.match;
      this._structuredData = value.structuredData;
    }
  }

  // archive - computed: false, optional: true, required: false
  private _archive = new SiteNetworktemplateRemoteSyslogFilesArchiveOutputReference(this, "archive");
  public get archive() {
    return this._archive;
  }
  public putArchive(value: SiteNetworktemplateRemoteSyslogFilesArchive) {
    this._archive.internalValue = value;
  }
  public resetArchive() {
    this._archive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive.internalValue;
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new SiteNetworktemplateRemoteSyslogFilesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: SiteNetworktemplateRemoteSyslogFilesContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // enable_tls - computed: false, optional: true, required: false
  private _enableTls?: boolean | cdktf.IResolvable; 
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }
  public set enableTls(value: boolean | cdktf.IResolvable) {
    this._enableTls = value;
  }
  public resetEnableTls() {
    this._enableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsInput() {
    return this._enableTls;
  }

  // explicit_priority - computed: false, optional: true, required: false
  private _explicitPriority?: boolean | cdktf.IResolvable; 
  public get explicitPriority() {
    return this.getBooleanAttribute('explicit_priority');
  }
  public set explicitPriority(value: boolean | cdktf.IResolvable) {
    this._explicitPriority = value;
  }
  public resetExplicitPriority() {
    this._explicitPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitPriorityInput() {
    return this._explicitPriority;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // structured_data - computed: false, optional: true, required: false
  private _structuredData?: boolean | cdktf.IResolvable; 
  public get structuredData() {
    return this.getBooleanAttribute('structured_data');
  }
  public set structuredData(value: boolean | cdktf.IResolvable) {
    this._structuredData = value;
  }
  public resetStructuredData() {
    this._structuredData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredDataInput() {
    return this._structuredData;
  }
}

export class SiteNetworktemplateRemoteSyslogFilesList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateRemoteSyslogFiles[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateRemoteSyslogFilesOutputReference {
    return new SiteNetworktemplateRemoteSyslogFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateRemoteSyslogServersContents {
  /**
  * enum: `any`, `authorization`, `change-log`, `config`, `conflict-log`, `daemon`, `dfc`, `external`, `firewall`, `ftp`, `interactive-commands`, `kernel`, `ntp`, `pfe`, `security`, `user`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#facility SiteNetworktemplate#facility}
  */
  readonly facility?: string;
  /**
  * enum: `alert`, `any`, `critical`, `emergency`, `error`, `info`, `notice`, `warning`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#severity SiteNetworktemplate#severity}
  */
  readonly severity?: string;
}

export function siteNetworktemplateRemoteSyslogServersContentsToTerraform(struct?: SiteNetworktemplateRemoteSyslogServersContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facility: cdktf.stringToTerraform(struct!.facility),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function siteNetworktemplateRemoteSyslogServersContentsToHclTerraform(struct?: SiteNetworktemplateRemoteSyslogServersContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    facility: {
      value: cdktf.stringToHclTerraform(struct!.facility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRemoteSyslogServersContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateRemoteSyslogServersContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facility !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslogServersContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facility = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facility = value.facility;
      this._severity = value.severity;
    }
  }

  // facility - computed: true, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class SiteNetworktemplateRemoteSyslogServersContentsList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateRemoteSyslogServersContents[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateRemoteSyslogServersContentsOutputReference {
    return new SiteNetworktemplateRemoteSyslogServersContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateRemoteSyslogServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#contents SiteNetworktemplate#contents}
  */
  readonly contents?: SiteNetworktemplateRemoteSyslogServersContents[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#explicit_priority SiteNetworktemplate#explicit_priority}
  */
  readonly explicitPriority?: boolean | cdktf.IResolvable;
  /**
  * enum: `any`, `authorization`, `change-log`, `config`, `conflict-log`, `daemon`, `dfc`, `external`, `firewall`, `ftp`, `interactive-commands`, `kernel`, `ntp`, `pfe`, `security`, `user`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#facility SiteNetworktemplate#facility}
  */
  readonly facility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#host SiteNetworktemplate#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#match SiteNetworktemplate#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port SiteNetworktemplate#port}
  */
  readonly port?: string;
  /**
  * enum: `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#protocol SiteNetworktemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#routing_instance SiteNetworktemplate#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Name of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#server_name SiteNetworktemplate#server_name}
  */
  readonly serverName?: string;
  /**
  * enum: `alert`, `any`, `critical`, `emergency`, `error`, `info`, `notice`, `warning`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#severity SiteNetworktemplate#severity}
  */
  readonly severity?: string;
  /**
  * If source_address is configured, will use the vlan firstly otherwise use source_ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#source_address SiteNetworktemplate#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#structured_data SiteNetworktemplate#structured_data}
  */
  readonly structuredData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#tag SiteNetworktemplate#tag}
  */
  readonly tag?: string;
}

export function siteNetworktemplateRemoteSyslogServersToTerraform(struct?: SiteNetworktemplateRemoteSyslogServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.listMapper(siteNetworktemplateRemoteSyslogServersContentsToTerraform, false)(struct!.contents),
    explicit_priority: cdktf.booleanToTerraform(struct!.explicitPriority),
    facility: cdktf.stringToTerraform(struct!.facility),
    host: cdktf.stringToTerraform(struct!.host),
    match: cdktf.stringToTerraform(struct!.match),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    severity: cdktf.stringToTerraform(struct!.severity),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    structured_data: cdktf.booleanToTerraform(struct!.structuredData),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function siteNetworktemplateRemoteSyslogServersToHclTerraform(struct?: SiteNetworktemplateRemoteSyslogServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktf.listMapperHcl(siteNetworktemplateRemoteSyslogServersContentsToHclTerraform, false)(struct!.contents),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateRemoteSyslogServersContentsList",
    },
    explicit_priority: {
      value: cdktf.booleanToHclTerraform(struct!.explicitPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    facility: {
      value: cdktf.stringToHclTerraform(struct!.facility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    structured_data: {
      value: cdktf.booleanToHclTerraform(struct!.structuredData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRemoteSyslogServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateRemoteSyslogServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents?.internalValue;
    }
    if (this._explicitPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitPriority = this._explicitPriority;
    }
    if (this._facility !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._structuredData !== undefined) {
      hasAnyValues = true;
      internalValueResult.structuredData = this._structuredData;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslogServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents.internalValue = undefined;
      this._explicitPriority = undefined;
      this._facility = undefined;
      this._host = undefined;
      this._match = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._routingInstance = undefined;
      this._serverName = undefined;
      this._severity = undefined;
      this._sourceAddress = undefined;
      this._structuredData = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents.internalValue = value.contents;
      this._explicitPriority = value.explicitPriority;
      this._facility = value.facility;
      this._host = value.host;
      this._match = value.match;
      this._port = value.port;
      this._protocol = value.protocol;
      this._routingInstance = value.routingInstance;
      this._serverName = value.serverName;
      this._severity = value.severity;
      this._sourceAddress = value.sourceAddress;
      this._structuredData = value.structuredData;
      this._tag = value.tag;
    }
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new SiteNetworktemplateRemoteSyslogServersContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: SiteNetworktemplateRemoteSyslogServersContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // explicit_priority - computed: false, optional: true, required: false
  private _explicitPriority?: boolean | cdktf.IResolvable; 
  public get explicitPriority() {
    return this.getBooleanAttribute('explicit_priority');
  }
  public set explicitPriority(value: boolean | cdktf.IResolvable) {
    this._explicitPriority = value;
  }
  public resetExplicitPriority() {
    this._explicitPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitPriorityInput() {
    return this._explicitPriority;
  }

  // facility - computed: true, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
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

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // structured_data - computed: false, optional: true, required: false
  private _structuredData?: boolean | cdktf.IResolvable; 
  public get structuredData() {
    return this.getBooleanAttribute('structured_data');
  }
  public set structuredData(value: boolean | cdktf.IResolvable) {
    this._structuredData = value;
  }
  public resetStructuredData() {
    this._structuredData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredDataInput() {
    return this._structuredData;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class SiteNetworktemplateRemoteSyslogServersList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateRemoteSyslogServers[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateRemoteSyslogServersOutputReference {
    return new SiteNetworktemplateRemoteSyslogServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateRemoteSyslogUsersContents {
  /**
  * enum: `any`, `authorization`, `change-log`, `config`, `conflict-log`, `daemon`, `dfc`, `external`, `firewall`, `ftp`, `interactive-commands`, `kernel`, `ntp`, `pfe`, `security`, `user`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#facility SiteNetworktemplate#facility}
  */
  readonly facility?: string;
  /**
  * enum: `alert`, `any`, `critical`, `emergency`, `error`, `info`, `notice`, `warning`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#severity SiteNetworktemplate#severity}
  */
  readonly severity?: string;
}

export function siteNetworktemplateRemoteSyslogUsersContentsToTerraform(struct?: SiteNetworktemplateRemoteSyslogUsersContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facility: cdktf.stringToTerraform(struct!.facility),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function siteNetworktemplateRemoteSyslogUsersContentsToHclTerraform(struct?: SiteNetworktemplateRemoteSyslogUsersContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    facility: {
      value: cdktf.stringToHclTerraform(struct!.facility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRemoteSyslogUsersContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateRemoteSyslogUsersContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facility !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslogUsersContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facility = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facility = value.facility;
      this._severity = value.severity;
    }
  }

  // facility - computed: true, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class SiteNetworktemplateRemoteSyslogUsersContentsList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateRemoteSyslogUsersContents[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateRemoteSyslogUsersContentsOutputReference {
    return new SiteNetworktemplateRemoteSyslogUsersContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateRemoteSyslogUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#contents SiteNetworktemplate#contents}
  */
  readonly contents?: SiteNetworktemplateRemoteSyslogUsersContents[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#match SiteNetworktemplate#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#user SiteNetworktemplate#user}
  */
  readonly user?: string;
}

export function siteNetworktemplateRemoteSyslogUsersToTerraform(struct?: SiteNetworktemplateRemoteSyslogUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.listMapper(siteNetworktemplateRemoteSyslogUsersContentsToTerraform, false)(struct!.contents),
    match: cdktf.stringToTerraform(struct!.match),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function siteNetworktemplateRemoteSyslogUsersToHclTerraform(struct?: SiteNetworktemplateRemoteSyslogUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktf.listMapperHcl(siteNetworktemplateRemoteSyslogUsersContentsToHclTerraform, false)(struct!.contents),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateRemoteSyslogUsersContentsList",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class SiteNetworktemplateRemoteSyslogUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateRemoteSyslogUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents?.internalValue;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslogUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents.internalValue = undefined;
      this._match = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents.internalValue = value.contents;
      this._match = value.match;
      this._user = value.user;
    }
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new SiteNetworktemplateRemoteSyslogUsersContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: SiteNetworktemplateRemoteSyslogUsersContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // user - computed: false, optional: true, required: false
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

export class SiteNetworktemplateRemoteSyslogUsersList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateRemoteSyslogUsers[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateRemoteSyslogUsersOutputReference {
    return new SiteNetworktemplateRemoteSyslogUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateRemoteSyslog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#archive SiteNetworktemplate#archive}
  */
  readonly archive?: SiteNetworktemplateRemoteSyslogArchive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#cacerts SiteNetworktemplate#cacerts}
  */
  readonly cacerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#console SiteNetworktemplate#console}
  */
  readonly console?: SiteNetworktemplateRemoteSyslogConsole;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enabled SiteNetworktemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#files SiteNetworktemplate#files}
  */
  readonly files?: SiteNetworktemplateRemoteSyslogFiles[] | cdktf.IResolvable;
  /**
  * If source_address is configured, will use the vlan firstly otherwise use source_ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#network SiteNetworktemplate#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#send_to_all_servers SiteNetworktemplate#send_to_all_servers}
  */
  readonly sendToAllServers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#servers SiteNetworktemplate#servers}
  */
  readonly servers?: SiteNetworktemplateRemoteSyslogServers[] | cdktf.IResolvable;
  /**
  * enum: `millisecond`, `year`, `year millisecond`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#time_format SiteNetworktemplate#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#users SiteNetworktemplate#users}
  */
  readonly users?: SiteNetworktemplateRemoteSyslogUsers[] | cdktf.IResolvable;
}

export function siteNetworktemplateRemoteSyslogToTerraform(struct?: SiteNetworktemplateRemoteSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive: siteNetworktemplateRemoteSyslogArchiveToTerraform(struct!.archive),
    cacerts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cacerts),
    console: siteNetworktemplateRemoteSyslogConsoleToTerraform(struct!.console),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    files: cdktf.listMapper(siteNetworktemplateRemoteSyslogFilesToTerraform, false)(struct!.files),
    network: cdktf.stringToTerraform(struct!.network),
    send_to_all_servers: cdktf.booleanToTerraform(struct!.sendToAllServers),
    servers: cdktf.listMapper(siteNetworktemplateRemoteSyslogServersToTerraform, false)(struct!.servers),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    users: cdktf.listMapper(siteNetworktemplateRemoteSyslogUsersToTerraform, false)(struct!.users),
  }
}


export function siteNetworktemplateRemoteSyslogToHclTerraform(struct?: SiteNetworktemplateRemoteSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive: {
      value: siteNetworktemplateRemoteSyslogArchiveToHclTerraform(struct!.archive),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateRemoteSyslogArchive",
    },
    cacerts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cacerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    console: {
      value: siteNetworktemplateRemoteSyslogConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateRemoteSyslogConsole",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    files: {
      value: cdktf.listMapperHcl(siteNetworktemplateRemoteSyslogFilesToHclTerraform, false)(struct!.files),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateRemoteSyslogFilesList",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_to_all_servers: {
      value: cdktf.booleanToHclTerraform(struct!.sendToAllServers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    servers: {
      value: cdktf.listMapperHcl(siteNetworktemplateRemoteSyslogServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateRemoteSyslogServersList",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(siteNetworktemplateRemoteSyslogUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateRemoteSyslogUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateRemoteSyslogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateRemoteSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archive = this._archive?.internalValue;
    }
    if (this._cacerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacerts = this._cacerts;
    }
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._sendToAllServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToAllServers = this._sendToAllServers;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateRemoteSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archive.internalValue = undefined;
      this._cacerts = undefined;
      this._console.internalValue = undefined;
      this._enabled = undefined;
      this._files.internalValue = undefined;
      this._network = undefined;
      this._sendToAllServers = undefined;
      this._servers.internalValue = undefined;
      this._timeFormat = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archive.internalValue = value.archive;
      this._cacerts = value.cacerts;
      this._console.internalValue = value.console;
      this._enabled = value.enabled;
      this._files.internalValue = value.files;
      this._network = value.network;
      this._sendToAllServers = value.sendToAllServers;
      this._servers.internalValue = value.servers;
      this._timeFormat = value.timeFormat;
      this._users.internalValue = value.users;
    }
  }

  // archive - computed: false, optional: true, required: false
  private _archive = new SiteNetworktemplateRemoteSyslogArchiveOutputReference(this, "archive");
  public get archive() {
    return this._archive;
  }
  public putArchive(value: SiteNetworktemplateRemoteSyslogArchive) {
    this._archive.internalValue = value;
  }
  public resetArchive() {
    this._archive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive.internalValue;
  }

  // cacerts - computed: false, optional: true, required: false
  private _cacerts?: string[]; 
  public get cacerts() {
    return this.getListAttribute('cacerts');
  }
  public set cacerts(value: string[]) {
    this._cacerts = value;
  }
  public resetCacerts() {
    this._cacerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertsInput() {
    return this._cacerts;
  }

  // console - computed: false, optional: true, required: false
  private _console = new SiteNetworktemplateRemoteSyslogConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: SiteNetworktemplateRemoteSyslogConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // files - computed: false, optional: true, required: false
  private _files = new SiteNetworktemplateRemoteSyslogFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: SiteNetworktemplateRemoteSyslogFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
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

  // send_to_all_servers - computed: false, optional: true, required: false
  private _sendToAllServers?: boolean | cdktf.IResolvable; 
  public get sendToAllServers() {
    return this.getBooleanAttribute('send_to_all_servers');
  }
  public set sendToAllServers(value: boolean | cdktf.IResolvable) {
    this._sendToAllServers = value;
  }
  public resetSendToAllServers() {
    this._sendToAllServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToAllServersInput() {
    return this._sendToAllServers;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new SiteNetworktemplateRemoteSyslogServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: SiteNetworktemplateRemoteSyslogServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // users - computed: false, optional: true, required: false
  private _users = new SiteNetworktemplateRemoteSyslogUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: SiteNetworktemplateRemoteSyslogUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface SiteNetworktemplateSnmpConfigClientListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#client_list_name SiteNetworktemplate#client_list_name}
  */
  readonly clientListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#clients SiteNetworktemplate#clients}
  */
  readonly clients?: string[];
}

export function siteNetworktemplateSnmpConfigClientListStructToTerraform(struct?: SiteNetworktemplateSnmpConfigClientListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_list_name: cdktf.stringToTerraform(struct!.clientListName),
    clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clients),
  }
}


export function siteNetworktemplateSnmpConfigClientListStructToHclTerraform(struct?: SiteNetworktemplateSnmpConfigClientListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_list_name: {
      value: cdktf.stringToHclTerraform(struct!.clientListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigClientListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigClientListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientListName = this._clientListName;
    }
    if (this._clients !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigClientListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientListName = undefined;
      this._clients = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientListName = value.clientListName;
      this._clients = value.clients;
    }
  }

  // client_list_name - computed: false, optional: true, required: false
  private _clientListName?: string; 
  public get clientListName() {
    return this.getStringAttribute('client_list_name');
  }
  public set clientListName(value: string) {
    this._clientListName = value;
  }
  public resetClientListName() {
    this._clientListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientListNameInput() {
    return this._clientListName;
  }

  // clients - computed: false, optional: true, required: false
  private _clients?: string[]; 
  public get clients() {
    return this.getListAttribute('clients');
  }
  public set clients(value: string[]) {
    this._clients = value;
  }
  public resetClients() {
    this._clients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
  }
}

export class SiteNetworktemplateSnmpConfigClientListStructList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigClientListStruct[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigClientListStructOutputReference {
    return new SiteNetworktemplateSnmpConfigClientListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigTrapGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#categories SiteNetworktemplate#categories}
  */
  readonly categories?: string[];
  /**
  * Categories list can refer to https://www.juniper.net/documentation/software/topics/task/configuration/snmp_trap-groups-configuring-junos-nm.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#group_name SiteNetworktemplate#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#targets SiteNetworktemplate#targets}
  */
  readonly targets?: string[];
  /**
  * enum: `all`, `v1`, `v2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#version SiteNetworktemplate#version}
  */
  readonly version?: string;
}

export function siteNetworktemplateSnmpConfigTrapGroupsToTerraform(struct?: SiteNetworktemplateSnmpConfigTrapGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function siteNetworktemplateSnmpConfigTrapGroupsToHclTerraform(struct?: SiteNetworktemplateSnmpConfigTrapGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigTrapGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigTrapGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigTrapGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categories = undefined;
      this._groupName = undefined;
      this._targets = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categories = value.categories;
      this._groupName = value.groupName;
      this._targets = value.targets;
      this._version = value.version;
    }
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class SiteNetworktemplateSnmpConfigTrapGroupsList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigTrapGroups[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigTrapGroupsOutputReference {
    return new SiteNetworktemplateSnmpConfigTrapGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV2CConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#authorization SiteNetworktemplate#authorization}
  */
  readonly authorization?: string;
  /**
  * Client_list_name here should refer to client_list above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#client_list_name SiteNetworktemplate#client_list_name}
  */
  readonly clientListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#community_name SiteNetworktemplate#community_name}
  */
  readonly communityName?: string;
  /**
  * View name here should be defined in views above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#view SiteNetworktemplate#view}
  */
  readonly view?: string;
}

export function siteNetworktemplateSnmpConfigV2CConfigToTerraform(struct?: SiteNetworktemplateSnmpConfigV2CConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: cdktf.stringToTerraform(struct!.authorization),
    client_list_name: cdktf.stringToTerraform(struct!.clientListName),
    community_name: cdktf.stringToTerraform(struct!.communityName),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function siteNetworktemplateSnmpConfigV2CConfigToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV2CConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: cdktf.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_list_name: {
      value: cdktf.stringToHclTerraform(struct!.clientListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community_name: {
      value: cdktf.stringToHclTerraform(struct!.communityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV2CConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV2CConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    if (this._clientListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientListName = this._clientListName;
    }
    if (this._communityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityName = this._communityName;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV2CConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization = undefined;
      this._clientListName = undefined;
      this._communityName = undefined;
      this._view = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization = value.authorization;
      this._clientListName = value.clientListName;
      this._communityName = value.communityName;
      this._view = value.view;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // client_list_name - computed: false, optional: true, required: false
  private _clientListName?: string; 
  public get clientListName() {
    return this.getStringAttribute('client_list_name');
  }
  public set clientListName(value: string) {
    this._clientListName = value;
  }
  public resetClientListName() {
    this._clientListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientListNameInput() {
    return this._clientListName;
  }

  // community_name - computed: false, optional: true, required: false
  private _communityName?: string; 
  public get communityName() {
    return this.getStringAttribute('community_name');
  }
  public set communityName(value: string) {
    this._communityName = value;
  }
  public resetCommunityName() {
    this._communityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityNameInput() {
    return this._communityName;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}

export class SiteNetworktemplateSnmpConfigV2CConfigList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV2CConfig[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV2CConfigOutputReference {
    return new SiteNetworktemplateSnmpConfigV2CConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigNotify {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#name SiteNetworktemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#tag SiteNetworktemplate#tag}
  */
  readonly tag: string;
  /**
  * enum: `inform`, `trap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#type SiteNetworktemplate#type}
  */
  readonly type: string;
}

export function siteNetworktemplateSnmpConfigV3ConfigNotifyToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigNotifyToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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

export class SiteNetworktemplateSnmpConfigV3ConfigNotifyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigNotify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigNotify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tag = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tag = value.tag;
      this._type = value.type;
    }
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

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

export class SiteNetworktemplateSnmpConfigV3ConfigNotifyList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV3ConfigNotify[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV3ConfigNotifyOutputReference {
    return new SiteNetworktemplateSnmpConfigV3ConfigNotifyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#include SiteNetworktemplate#include}
  */
  readonly include?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#oid SiteNetworktemplate#oid}
  */
  readonly oid: string;
}

export function siteNetworktemplateSnmpConfigV3ConfigNotifyFilterContentsToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include: cdktf.booleanToTerraform(struct!.include),
    oid: cdktf.stringToTerraform(struct!.oid),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigNotifyFilterContentsToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include: {
      value: cdktf.booleanToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oid: {
      value: cdktf.stringToHclTerraform(struct!.oid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._oid !== undefined) {
      hasAnyValues = true;
      internalValueResult.oid = this._oid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include = undefined;
      this._oid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._include = value.include;
      this._oid = value.oid;
    }
  }

  // include - computed: false, optional: true, required: false
  private _include?: boolean | cdktf.IResolvable; 
  public get include() {
    return this.getBooleanAttribute('include');
  }
  public set include(value: boolean | cdktf.IResolvable) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // oid - computed: false, optional: false, required: true
  private _oid?: string; 
  public get oid() {
    return this.getStringAttribute('oid');
  }
  public set oid(value: string) {
    this._oid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid;
  }
}

export class SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContentsList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContents[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContentsOutputReference {
    return new SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigNotifyFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#contents SiteNetworktemplate#contents}
  */
  readonly contents?: SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContents[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#profile_name SiteNetworktemplate#profile_name}
  */
  readonly profileName?: string;
}

export function siteNetworktemplateSnmpConfigV3ConfigNotifyFilterToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigNotifyFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents: cdktf.listMapper(siteNetworktemplateSnmpConfigV3ConfigNotifyFilterContentsToTerraform, false)(struct!.contents),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigNotifyFilterToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigNotifyFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contents: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV3ConfigNotifyFilterContentsToHclTerraform, false)(struct!.contents),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContentsList",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigNotifyFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contents = this._contents?.internalValue;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigNotifyFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contents.internalValue = undefined;
      this._profileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contents.internalValue = value.contents;
      this._profileName = value.profileName;
    }
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }
}

export class SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV3ConfigNotifyFilter[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterOutputReference {
    return new SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigTargetAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#address SiteNetworktemplate#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#address_mask SiteNetworktemplate#address_mask}
  */
  readonly addressMask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port SiteNetworktemplate#port}
  */
  readonly port?: string;
  /**
  * Refer to notify tag, can be multiple with blank
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#tag_list SiteNetworktemplate#tag_list}
  */
  readonly tagList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#target_address_name SiteNetworktemplate#target_address_name}
  */
  readonly targetAddressName: string;
  /**
  * Refer to notify target parameters name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#target_parameters SiteNetworktemplate#target_parameters}
  */
  readonly targetParameters?: string;
}

export function siteNetworktemplateSnmpConfigV3ConfigTargetAddressToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigTargetAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_mask: cdktf.stringToTerraform(struct!.addressMask),
    port: cdktf.stringToTerraform(struct!.port),
    tag_list: cdktf.stringToTerraform(struct!.tagList),
    target_address_name: cdktf.stringToTerraform(struct!.targetAddressName),
    target_parameters: cdktf.stringToTerraform(struct!.targetParameters),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigTargetAddressToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigTargetAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_mask: {
      value: cdktf.stringToHclTerraform(struct!.addressMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_list: {
      value: cdktf.stringToHclTerraform(struct!.tagList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_address_name: {
      value: cdktf.stringToHclTerraform(struct!.targetAddressName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_parameters: {
      value: cdktf.stringToHclTerraform(struct!.targetParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigTargetAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigTargetAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressMask = this._addressMask;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tagList !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagList = this._tagList;
    }
    if (this._targetAddressName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAddressName = this._targetAddressName;
    }
    if (this._targetParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetParameters = this._targetParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigTargetAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressMask = undefined;
      this._port = undefined;
      this._tagList = undefined;
      this._targetAddressName = undefined;
      this._targetParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressMask = value.addressMask;
      this._port = value.port;
      this._tagList = value.tagList;
      this._targetAddressName = value.targetAddressName;
      this._targetParameters = value.targetParameters;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_mask - computed: false, optional: false, required: true
  private _addressMask?: string; 
  public get addressMask() {
    return this.getStringAttribute('address_mask');
  }
  public set addressMask(value: string) {
    this._addressMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressMaskInput() {
    return this._addressMask;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tag_list - computed: false, optional: true, required: false
  private _tagList?: string; 
  public get tagList() {
    return this.getStringAttribute('tag_list');
  }
  public set tagList(value: string) {
    this._tagList = value;
  }
  public resetTagList() {
    this._tagList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagListInput() {
    return this._tagList;
  }

  // target_address_name - computed: false, optional: false, required: true
  private _targetAddressName?: string; 
  public get targetAddressName() {
    return this.getStringAttribute('target_address_name');
  }
  public set targetAddressName(value: string) {
    this._targetAddressName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAddressNameInput() {
    return this._targetAddressName;
  }

  // target_parameters - computed: false, optional: true, required: false
  private _targetParameters?: string; 
  public get targetParameters() {
    return this.getStringAttribute('target_parameters');
  }
  public set targetParameters(value: string) {
    this._targetParameters = value;
  }
  public resetTargetParameters() {
    this._targetParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetParametersInput() {
    return this._targetParameters;
  }
}

export class SiteNetworktemplateSnmpConfigV3ConfigTargetAddressList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV3ConfigTargetAddress[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV3ConfigTargetAddressOutputReference {
    return new SiteNetworktemplateSnmpConfigV3ConfigTargetAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigTargetParameters {
  /**
  * enum: `v1`, `v2c`, `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#message_processing_model SiteNetworktemplate#message_processing_model}
  */
  readonly messageProcessingModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#name SiteNetworktemplate#name}
  */
  readonly name: string;
  /**
  * Refer to profile-name in notify_filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#notify_filter SiteNetworktemplate#notify_filter}
  */
  readonly notifyFilter?: string;
  /**
  * enum: `authentication`, `none`, `privacy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#security_level SiteNetworktemplate#security_level}
  */
  readonly securityLevel?: string;
  /**
  * enum: `usm`, `v1`, `v2c`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#security_model SiteNetworktemplate#security_model}
  */
  readonly securityModel?: string;
  /**
  * Refer to security_name in usm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#security_name SiteNetworktemplate#security_name}
  */
  readonly securityName?: string;
}

export function siteNetworktemplateSnmpConfigV3ConfigTargetParametersToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigTargetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_processing_model: cdktf.stringToTerraform(struct!.messageProcessingModel),
    name: cdktf.stringToTerraform(struct!.name),
    notify_filter: cdktf.stringToTerraform(struct!.notifyFilter),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    security_model: cdktf.stringToTerraform(struct!.securityModel),
    security_name: cdktf.stringToTerraform(struct!.securityName),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigTargetParametersToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigTargetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_processing_model: {
      value: cdktf.stringToHclTerraform(struct!.messageProcessingModel),
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
    notify_filter: {
      value: cdktf.stringToHclTerraform(struct!.notifyFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_model: {
      value: cdktf.stringToHclTerraform(struct!.securityModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_name: {
      value: cdktf.stringToHclTerraform(struct!.securityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigTargetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigTargetParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageProcessingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageProcessingModel = this._messageProcessingModel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifyFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyFilter = this._notifyFilter;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._securityModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityModel = this._securityModel;
    }
    if (this._securityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityName = this._securityName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigTargetParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageProcessingModel = undefined;
      this._name = undefined;
      this._notifyFilter = undefined;
      this._securityLevel = undefined;
      this._securityModel = undefined;
      this._securityName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageProcessingModel = value.messageProcessingModel;
      this._name = value.name;
      this._notifyFilter = value.notifyFilter;
      this._securityLevel = value.securityLevel;
      this._securityModel = value.securityModel;
      this._securityName = value.securityName;
    }
  }

  // message_processing_model - computed: false, optional: false, required: true
  private _messageProcessingModel?: string; 
  public get messageProcessingModel() {
    return this.getStringAttribute('message_processing_model');
  }
  public set messageProcessingModel(value: string) {
    this._messageProcessingModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageProcessingModelInput() {
    return this._messageProcessingModel;
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

  // notify_filter - computed: false, optional: true, required: false
  private _notifyFilter?: string; 
  public get notifyFilter() {
    return this.getStringAttribute('notify_filter');
  }
  public set notifyFilter(value: string) {
    this._notifyFilter = value;
  }
  public resetNotifyFilter() {
    this._notifyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyFilterInput() {
    return this._notifyFilter;
  }

  // security_level - computed: false, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // security_model - computed: false, optional: true, required: false
  private _securityModel?: string; 
  public get securityModel() {
    return this.getStringAttribute('security_model');
  }
  public set securityModel(value: string) {
    this._securityModel = value;
  }
  public resetSecurityModel() {
    this._securityModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModelInput() {
    return this._securityModel;
  }

  // security_name - computed: false, optional: true, required: false
  private _securityName?: string; 
  public get securityName() {
    return this.getStringAttribute('security_name');
  }
  public set securityName(value: string) {
    this._securityName = value;
  }
  public resetSecurityName() {
    this._securityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityNameInput() {
    return this._securityName;
  }
}

export class SiteNetworktemplateSnmpConfigV3ConfigTargetParametersList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV3ConfigTargetParameters[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV3ConfigTargetParametersOutputReference {
    return new SiteNetworktemplateSnmpConfigV3ConfigTargetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigUsmUsers {
  /**
  * Not required if `authentication_type`==`authentication-none`. Include alphabetic, numeric, and special characters, but it cannot include control characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#authentication_password SiteNetworktemplate#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * sha224, sha256, sha384, sha512 are supported in 21.1 and newer release. enum: `authentication-md5`, `authentication-none`, `authentication-sha`, `authentication-sha224`, `authentication-sha256`, `authentication-sha384`, `authentication-sha512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#authentication_type SiteNetworktemplate#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Not required if `encryption_type`==`privacy-none`. Include alphabetic, numeric, and special characters, but it cannot include control characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#encryption_password SiteNetworktemplate#encryption_password}
  */
  readonly encryptionPassword?: string;
  /**
  * enum: `privacy-3des`, `privacy-aes128`, `privacy-des`, `privacy-none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#encryption_type SiteNetworktemplate#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#name SiteNetworktemplate#name}
  */
  readonly name?: string;
}

export function siteNetworktemplateSnmpConfigV3ConfigUsmUsersToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigUsmUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_password: cdktf.stringToTerraform(struct!.authenticationPassword),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    encryption_password: cdktf.stringToTerraform(struct!.encryptionPassword),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigUsmUsersToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigUsmUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_password: {
      value: cdktf.stringToHclTerraform(struct!.authenticationPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_password: {
      value: cdktf.stringToHclTerraform(struct!.encryptionPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigUsmUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigUsmUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPassword = this._authenticationPassword;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._encryptionPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionPassword = this._encryptionPassword;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigUsmUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationPassword = undefined;
      this._authenticationType = undefined;
      this._encryptionPassword = undefined;
      this._encryptionType = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationPassword = value.authenticationPassword;
      this._authenticationType = value.authenticationType;
      this._encryptionPassword = value.encryptionPassword;
      this._encryptionType = value.encryptionType;
      this._name = value.name;
    }
  }

  // authentication_password - computed: false, optional: true, required: false
  private _authenticationPassword?: string; 
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }
  public set authenticationPassword(value: string) {
    this._authenticationPassword = value;
  }
  public resetAuthenticationPassword() {
    this._authenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordInput() {
    return this._authenticationPassword;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // encryption_password - computed: false, optional: true, required: false
  private _encryptionPassword?: string; 
  public get encryptionPassword() {
    return this.getStringAttribute('encryption_password');
  }
  public set encryptionPassword(value: string) {
    this._encryptionPassword = value;
  }
  public resetEncryptionPassword() {
    this._encryptionPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPasswordInput() {
    return this._encryptionPassword;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
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
}

export class SiteNetworktemplateSnmpConfigV3ConfigUsmUsersList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV3ConfigUsmUsers[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV3ConfigUsmUsersOutputReference {
    return new SiteNetworktemplateSnmpConfigV3ConfigUsmUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigUsm {
  /**
  * enum: `local_engine`, `remote_engine`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#engine_type SiteNetworktemplate#engine_type}
  */
  readonly engineType: string;
  /**
  * Required only if `engine_type`==`remote_engine`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#remote_engine_id SiteNetworktemplate#remote_engine_id}
  */
  readonly remoteEngineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#users SiteNetworktemplate#users}
  */
  readonly users?: SiteNetworktemplateSnmpConfigV3ConfigUsmUsers[] | cdktf.IResolvable;
}

export function siteNetworktemplateSnmpConfigV3ConfigUsmToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigUsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine_type: cdktf.stringToTerraform(struct!.engineType),
    remote_engine_id: cdktf.stringToTerraform(struct!.remoteEngineId),
    users: cdktf.listMapper(siteNetworktemplateSnmpConfigV3ConfigUsmUsersToTerraform, false)(struct!.users),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigUsmToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigUsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine_type: {
      value: cdktf.stringToHclTerraform(struct!.engineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_engine_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteEngineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV3ConfigUsmUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigUsmUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigUsmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigUsm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineType = this._engineType;
    }
    if (this._remoteEngineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteEngineId = this._remoteEngineId;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigUsm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engineType = undefined;
      this._remoteEngineId = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engineType = value.engineType;
      this._remoteEngineId = value.remoteEngineId;
      this._users.internalValue = value.users;
    }
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // remote_engine_id - computed: false, optional: true, required: false
  private _remoteEngineId?: string; 
  public get remoteEngineId() {
    return this.getStringAttribute('remote_engine_id');
  }
  public set remoteEngineId(value: string) {
    this._remoteEngineId = value;
  }
  public resetRemoteEngineId() {
    this._remoteEngineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteEngineIdInput() {
    return this._remoteEngineId;
  }

  // users - computed: false, optional: true, required: false
  private _users = new SiteNetworktemplateSnmpConfigV3ConfigUsmUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: SiteNetworktemplateSnmpConfigV3ConfigUsmUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}

export class SiteNetworktemplateSnmpConfigV3ConfigUsmList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV3ConfigUsm[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV3ConfigUsmOutputReference {
    return new SiteNetworktemplateSnmpConfigV3ConfigUsmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStruct {
  /**
  * Only required if `type`==`context_prefix`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#context_prefix SiteNetworktemplate#context_prefix}
  */
  readonly contextPrefix?: string;
  /**
  * Refer to view name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#notify_view SiteNetworktemplate#notify_view}
  */
  readonly notifyView?: string;
  /**
  * Refer to view name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#read_view SiteNetworktemplate#read_view}
  */
  readonly readView?: string;
  /**
  * enum: `authentication`, `none`, `privacy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#security_level SiteNetworktemplate#security_level}
  */
  readonly securityLevel?: string;
  /**
  * enum: `any`, `usm`, `v1`, `v2c`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#security_model SiteNetworktemplate#security_model}
  */
  readonly securityModel?: string;
  /**
  * enum: `context_prefix`, `default_context_prefix`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#type SiteNetworktemplate#type}
  */
  readonly type?: string;
  /**
  * Refer to view name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#write_view SiteNetworktemplate#write_view}
  */
  readonly writeView?: string;
}

export function siteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStructToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_prefix: cdktf.stringToTerraform(struct!.contextPrefix),
    notify_view: cdktf.stringToTerraform(struct!.notifyView),
    read_view: cdktf.stringToTerraform(struct!.readView),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    security_model: cdktf.stringToTerraform(struct!.securityModel),
    type: cdktf.stringToTerraform(struct!.type),
    write_view: cdktf.stringToTerraform(struct!.writeView),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStructToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_prefix: {
      value: cdktf.stringToHclTerraform(struct!.contextPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_view: {
      value: cdktf.stringToHclTerraform(struct!.notifyView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_view: {
      value: cdktf.stringToHclTerraform(struct!.readView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_model: {
      value: cdktf.stringToHclTerraform(struct!.securityModel),
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
    write_view: {
      value: cdktf.stringToHclTerraform(struct!.writeView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextPrefix = this._contextPrefix;
    }
    if (this._notifyView !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyView = this._notifyView;
    }
    if (this._readView !== undefined) {
      hasAnyValues = true;
      internalValueResult.readView = this._readView;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._securityModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityModel = this._securityModel;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._writeView !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeView = this._writeView;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextPrefix = undefined;
      this._notifyView = undefined;
      this._readView = undefined;
      this._securityLevel = undefined;
      this._securityModel = undefined;
      this._type = undefined;
      this._writeView = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextPrefix = value.contextPrefix;
      this._notifyView = value.notifyView;
      this._readView = value.readView;
      this._securityLevel = value.securityLevel;
      this._securityModel = value.securityModel;
      this._type = value.type;
      this._writeView = value.writeView;
    }
  }

  // context_prefix - computed: false, optional: true, required: false
  private _contextPrefix?: string; 
  public get contextPrefix() {
    return this.getStringAttribute('context_prefix');
  }
  public set contextPrefix(value: string) {
    this._contextPrefix = value;
  }
  public resetContextPrefix() {
    this._contextPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextPrefixInput() {
    return this._contextPrefix;
  }

  // notify_view - computed: false, optional: true, required: false
  private _notifyView?: string; 
  public get notifyView() {
    return this.getStringAttribute('notify_view');
  }
  public set notifyView(value: string) {
    this._notifyView = value;
  }
  public resetNotifyView() {
    this._notifyView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyViewInput() {
    return this._notifyView;
  }

  // read_view - computed: false, optional: true, required: false
  private _readView?: string; 
  public get readView() {
    return this.getStringAttribute('read_view');
  }
  public set readView(value: string) {
    this._readView = value;
  }
  public resetReadView() {
    this._readView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readViewInput() {
    return this._readView;
  }

  // security_level - computed: false, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // security_model - computed: false, optional: true, required: false
  private _securityModel?: string; 
  public get securityModel() {
    return this.getStringAttribute('security_model');
  }
  public set securityModel(value: string) {
    this._securityModel = value;
  }
  public resetSecurityModel() {
    this._securityModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModelInput() {
    return this._securityModel;
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

  // write_view - computed: false, optional: true, required: false
  private _writeView?: string; 
  public get writeView() {
    return this.getStringAttribute('write_view');
  }
  public set writeView(value: string) {
    this._writeView = value;
  }
  public resetWriteView() {
    this._writeView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeViewInput() {
    return this._writeView;
  }
}

export class SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStructOutputReference {
    return new SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigVacmAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#group_name SiteNetworktemplate#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#prefix_list SiteNetworktemplate#prefix_list}
  */
  readonly prefixList?: SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStruct[] | cdktf.IResolvable;
}

export function siteNetworktemplateSnmpConfigV3ConfigVacmAccessToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigVacmAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    prefix_list: cdktf.listMapper(siteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStructToTerraform, false)(struct!.prefixList),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigVacmAccessToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigVacmAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStructToHclTerraform, false)(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigVacmAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigVacmAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigVacmAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._prefixList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._prefixList.internalValue = value.prefixList;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStructList(this, "prefix_list", false);
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: SiteNetworktemplateSnmpConfigV3ConfigVacmAccessPrefixListStruct[] | cdktf.IResolvable) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }
}

export class SiteNetworktemplateSnmpConfigV3ConfigVacmAccessList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV3ConfigVacmAccess[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV3ConfigVacmAccessOutputReference {
    return new SiteNetworktemplateSnmpConfigV3ConfigVacmAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContent {
  /**
  * Refer to group_name under access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#group SiteNetworktemplate#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#security_name SiteNetworktemplate#security_name}
  */
  readonly securityName?: string;
}

export function siteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContentToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    security_name: cdktf.stringToTerraform(struct!.securityName),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContentToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_name: {
      value: cdktf.stringToHclTerraform(struct!.securityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._securityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityName = this._securityName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._securityName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._securityName = value.securityName;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // security_name - computed: false, optional: true, required: false
  private _securityName?: string; 
  public get securityName() {
    return this.getStringAttribute('security_name');
  }
  public set securityName(value: string) {
    this._securityName = value;
  }
  public resetSecurityName() {
    this._securityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityNameInput() {
    return this._securityName;
  }
}

export class SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContentList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContent[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContentOutputReference {
    return new SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#content SiteNetworktemplate#content}
  */
  readonly content?: SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContent[] | cdktf.IResolvable;
  /**
  * enum: `usm`, `v1`, `v2c`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#security_model SiteNetworktemplate#security_model}
  */
  readonly securityModel?: string;
}

export function siteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.listMapper(siteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContentToTerraform, false)(struct!.content),
    security_model: cdktf.stringToTerraform(struct!.securityModel),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContentToHclTerraform, false)(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContentList",
    },
    security_model: {
      value: cdktf.stringToHclTerraform(struct!.securityModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._securityModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityModel = this._securityModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content.internalValue = undefined;
      this._securityModel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content.internalValue = value.content;
      this._securityModel = value.securityModel;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content = new SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupContent[] | cdktf.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // security_model - computed: false, optional: true, required: false
  private _securityModel?: string; 
  public get securityModel() {
    return this.getStringAttribute('security_model');
  }
  public set securityModel(value: string) {
    this._securityModel = value;
  }
  public resetSecurityModel() {
    this._securityModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModelInput() {
    return this._securityModel;
  }
}
export interface SiteNetworktemplateSnmpConfigV3ConfigVacm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#access SiteNetworktemplate#access}
  */
  readonly access?: SiteNetworktemplateSnmpConfigV3ConfigVacmAccess[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#security_to_group SiteNetworktemplate#security_to_group}
  */
  readonly securityToGroup?: SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroup;
}

export function siteNetworktemplateSnmpConfigV3ConfigVacmToTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigVacm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(siteNetworktemplateSnmpConfigV3ConfigVacmAccessToTerraform, false)(struct!.access),
    security_to_group: siteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupToTerraform(struct!.securityToGroup),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigVacmToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3ConfigVacm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV3ConfigVacmAccessToHclTerraform, false)(struct!.access),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigVacmAccessList",
    },
    security_to_group: {
      value: siteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupToHclTerraform(struct!.securityToGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigVacmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSnmpConfigV3ConfigVacm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._securityToGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityToGroup = this._securityToGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3ConfigVacm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access.internalValue = undefined;
      this._securityToGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access.internalValue = value.access;
      this._securityToGroup.internalValue = value.securityToGroup;
    }
  }

  // access - computed: false, optional: true, required: false
  private _access = new SiteNetworktemplateSnmpConfigV3ConfigVacmAccessList(this, "access", false);
  public get access() {
    return this._access;
  }
  public putAccess(value: SiteNetworktemplateSnmpConfigV3ConfigVacmAccess[] | cdktf.IResolvable) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // security_to_group - computed: false, optional: true, required: false
  private _securityToGroup = new SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroupOutputReference(this, "security_to_group");
  public get securityToGroup() {
    return this._securityToGroup;
  }
  public putSecurityToGroup(value: SiteNetworktemplateSnmpConfigV3ConfigVacmSecurityToGroup) {
    this._securityToGroup.internalValue = value;
  }
  public resetSecurityToGroup() {
    this._securityToGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityToGroupInput() {
    return this._securityToGroup.internalValue;
  }
}
export interface SiteNetworktemplateSnmpConfigV3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#notify SiteNetworktemplate#notify}
  */
  readonly notify?: SiteNetworktemplateSnmpConfigV3ConfigNotify[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#notify_filter SiteNetworktemplate#notify_filter}
  */
  readonly notifyFilter?: SiteNetworktemplateSnmpConfigV3ConfigNotifyFilter[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#target_address SiteNetworktemplate#target_address}
  */
  readonly targetAddress?: SiteNetworktemplateSnmpConfigV3ConfigTargetAddress[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#target_parameters SiteNetworktemplate#target_parameters}
  */
  readonly targetParameters?: SiteNetworktemplateSnmpConfigV3ConfigTargetParameters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#usm SiteNetworktemplate#usm}
  */
  readonly usm?: SiteNetworktemplateSnmpConfigV3ConfigUsm[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#vacm SiteNetworktemplate#vacm}
  */
  readonly vacm?: SiteNetworktemplateSnmpConfigV3ConfigVacm;
}

export function siteNetworktemplateSnmpConfigV3ConfigToTerraform(struct?: SiteNetworktemplateSnmpConfigV3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify: cdktf.listMapper(siteNetworktemplateSnmpConfigV3ConfigNotifyToTerraform, false)(struct!.notify),
    notify_filter: cdktf.listMapper(siteNetworktemplateSnmpConfigV3ConfigNotifyFilterToTerraform, false)(struct!.notifyFilter),
    target_address: cdktf.listMapper(siteNetworktemplateSnmpConfigV3ConfigTargetAddressToTerraform, false)(struct!.targetAddress),
    target_parameters: cdktf.listMapper(siteNetworktemplateSnmpConfigV3ConfigTargetParametersToTerraform, false)(struct!.targetParameters),
    usm: cdktf.listMapper(siteNetworktemplateSnmpConfigV3ConfigUsmToTerraform, false)(struct!.usm),
    vacm: siteNetworktemplateSnmpConfigV3ConfigVacmToTerraform(struct!.vacm),
  }
}


export function siteNetworktemplateSnmpConfigV3ConfigToHclTerraform(struct?: SiteNetworktemplateSnmpConfigV3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV3ConfigNotifyToHclTerraform, false)(struct!.notify),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigNotifyList",
    },
    notify_filter: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV3ConfigNotifyFilterToHclTerraform, false)(struct!.notifyFilter),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterList",
    },
    target_address: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV3ConfigTargetAddressToHclTerraform, false)(struct!.targetAddress),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigTargetAddressList",
    },
    target_parameters: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV3ConfigTargetParametersToHclTerraform, false)(struct!.targetParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigTargetParametersList",
    },
    usm: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV3ConfigUsmToHclTerraform, false)(struct!.usm),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigUsmList",
    },
    vacm: {
      value: siteNetworktemplateSnmpConfigV3ConfigVacmToHclTerraform(struct!.vacm),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateSnmpConfigV3ConfigVacm",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigV3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSnmpConfigV3Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notify = this._notify?.internalValue;
    }
    if (this._notifyFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyFilter = this._notifyFilter?.internalValue;
    }
    if (this._targetAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAddress = this._targetAddress?.internalValue;
    }
    if (this._targetParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetParameters = this._targetParameters?.internalValue;
    }
    if (this._usm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usm = this._usm?.internalValue;
    }
    if (this._vacm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vacm = this._vacm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigV3Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notify.internalValue = undefined;
      this._notifyFilter.internalValue = undefined;
      this._targetAddress.internalValue = undefined;
      this._targetParameters.internalValue = undefined;
      this._usm.internalValue = undefined;
      this._vacm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notify.internalValue = value.notify;
      this._notifyFilter.internalValue = value.notifyFilter;
      this._targetAddress.internalValue = value.targetAddress;
      this._targetParameters.internalValue = value.targetParameters;
      this._usm.internalValue = value.usm;
      this._vacm.internalValue = value.vacm;
    }
  }

  // notify - computed: false, optional: true, required: false
  private _notify = new SiteNetworktemplateSnmpConfigV3ConfigNotifyList(this, "notify", false);
  public get notify() {
    return this._notify;
  }
  public putNotify(value: SiteNetworktemplateSnmpConfigV3ConfigNotify[] | cdktf.IResolvable) {
    this._notify.internalValue = value;
  }
  public resetNotify() {
    this._notify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify.internalValue;
  }

  // notify_filter - computed: false, optional: true, required: false
  private _notifyFilter = new SiteNetworktemplateSnmpConfigV3ConfigNotifyFilterList(this, "notify_filter", false);
  public get notifyFilter() {
    return this._notifyFilter;
  }
  public putNotifyFilter(value: SiteNetworktemplateSnmpConfigV3ConfigNotifyFilter[] | cdktf.IResolvable) {
    this._notifyFilter.internalValue = value;
  }
  public resetNotifyFilter() {
    this._notifyFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyFilterInput() {
    return this._notifyFilter.internalValue;
  }

  // target_address - computed: false, optional: true, required: false
  private _targetAddress = new SiteNetworktemplateSnmpConfigV3ConfigTargetAddressList(this, "target_address", false);
  public get targetAddress() {
    return this._targetAddress;
  }
  public putTargetAddress(value: SiteNetworktemplateSnmpConfigV3ConfigTargetAddress[] | cdktf.IResolvable) {
    this._targetAddress.internalValue = value;
  }
  public resetTargetAddress() {
    this._targetAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAddressInput() {
    return this._targetAddress.internalValue;
  }

  // target_parameters - computed: false, optional: true, required: false
  private _targetParameters = new SiteNetworktemplateSnmpConfigV3ConfigTargetParametersList(this, "target_parameters", false);
  public get targetParameters() {
    return this._targetParameters;
  }
  public putTargetParameters(value: SiteNetworktemplateSnmpConfigV3ConfigTargetParameters[] | cdktf.IResolvable) {
    this._targetParameters.internalValue = value;
  }
  public resetTargetParameters() {
    this._targetParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetParametersInput() {
    return this._targetParameters.internalValue;
  }

  // usm - computed: false, optional: true, required: false
  private _usm = new SiteNetworktemplateSnmpConfigV3ConfigUsmList(this, "usm", false);
  public get usm() {
    return this._usm;
  }
  public putUsm(value: SiteNetworktemplateSnmpConfigV3ConfigUsm[] | cdktf.IResolvable) {
    this._usm.internalValue = value;
  }
  public resetUsm() {
    this._usm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usmInput() {
    return this._usm.internalValue;
  }

  // vacm - computed: false, optional: true, required: false
  private _vacm = new SiteNetworktemplateSnmpConfigV3ConfigVacmOutputReference(this, "vacm");
  public get vacm() {
    return this._vacm;
  }
  public putVacm(value: SiteNetworktemplateSnmpConfigV3ConfigVacm) {
    this._vacm.internalValue = value;
  }
  public resetVacm() {
    this._vacm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vacmInput() {
    return this._vacm.internalValue;
  }
}
export interface SiteNetworktemplateSnmpConfigViews {
  /**
  * If the root oid configured is included
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#include SiteNetworktemplate#include}
  */
  readonly include?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#oid SiteNetworktemplate#oid}
  */
  readonly oid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#view_name SiteNetworktemplate#view_name}
  */
  readonly viewName?: string;
}

export function siteNetworktemplateSnmpConfigViewsToTerraform(struct?: SiteNetworktemplateSnmpConfigViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include: cdktf.booleanToTerraform(struct!.include),
    oid: cdktf.stringToTerraform(struct!.oid),
    view_name: cdktf.stringToTerraform(struct!.viewName),
  }
}


export function siteNetworktemplateSnmpConfigViewsToHclTerraform(struct?: SiteNetworktemplateSnmpConfigViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include: {
      value: cdktf.booleanToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oid: {
      value: cdktf.stringToHclTerraform(struct!.oid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_name: {
      value: cdktf.stringToHclTerraform(struct!.viewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSnmpConfigViews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._oid !== undefined) {
      hasAnyValues = true;
      internalValueResult.oid = this._oid;
    }
    if (this._viewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewName = this._viewName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfigViews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include = undefined;
      this._oid = undefined;
      this._viewName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._include = value.include;
      this._oid = value.oid;
      this._viewName = value.viewName;
    }
  }

  // include - computed: false, optional: true, required: false
  private _include?: boolean | cdktf.IResolvable; 
  public get include() {
    return this.getBooleanAttribute('include');
  }
  public set include(value: boolean | cdktf.IResolvable) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // oid - computed: false, optional: true, required: false
  private _oid?: string; 
  public get oid() {
    return this.getStringAttribute('oid');
  }
  public set oid(value: string) {
    this._oid = value;
  }
  public resetOid() {
    this._oid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid;
  }

  // view_name - computed: false, optional: true, required: false
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  public resetViewName() {
    this._viewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }
}

export class SiteNetworktemplateSnmpConfigViewsList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSnmpConfigViews[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSnmpConfigViewsOutputReference {
    return new SiteNetworktemplateSnmpConfigViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSnmpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#client_list SiteNetworktemplate#client_list}
  */
  readonly clientList?: SiteNetworktemplateSnmpConfigClientListStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#contact SiteNetworktemplate#contact}
  */
  readonly contact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#description SiteNetworktemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enabled SiteNetworktemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#engine_id SiteNetworktemplate#engine_id}
  */
  readonly engineId?: string;
  /**
  * enum: `local`, `use_mac_address`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#engine_id_type SiteNetworktemplate#engine_id_type}
  */
  readonly engineIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#location SiteNetworktemplate#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#name SiteNetworktemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#network SiteNetworktemplate#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#trap_groups SiteNetworktemplate#trap_groups}
  */
  readonly trapGroups?: SiteNetworktemplateSnmpConfigTrapGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#v2c_config SiteNetworktemplate#v2c_config}
  */
  readonly v2CConfig?: SiteNetworktemplateSnmpConfigV2CConfig[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#v3_config SiteNetworktemplate#v3_config}
  */
  readonly v3Config?: SiteNetworktemplateSnmpConfigV3Config;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#views SiteNetworktemplate#views}
  */
  readonly views?: SiteNetworktemplateSnmpConfigViews[] | cdktf.IResolvable;
}

export function siteNetworktemplateSnmpConfigToTerraform(struct?: SiteNetworktemplateSnmpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_list: cdktf.listMapper(siteNetworktemplateSnmpConfigClientListStructToTerraform, false)(struct!.clientList),
    contact: cdktf.stringToTerraform(struct!.contact),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    engine_id: cdktf.stringToTerraform(struct!.engineId),
    engine_id_type: cdktf.stringToTerraform(struct!.engineIdType),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    trap_groups: cdktf.listMapper(siteNetworktemplateSnmpConfigTrapGroupsToTerraform, false)(struct!.trapGroups),
    v2c_config: cdktf.listMapper(siteNetworktemplateSnmpConfigV2CConfigToTerraform, false)(struct!.v2CConfig),
    v3_config: siteNetworktemplateSnmpConfigV3ConfigToTerraform(struct!.v3Config),
    views: cdktf.listMapper(siteNetworktemplateSnmpConfigViewsToTerraform, false)(struct!.views),
  }
}


export function siteNetworktemplateSnmpConfigToHclTerraform(struct?: SiteNetworktemplateSnmpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_list: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigClientListStructToHclTerraform, false)(struct!.clientList),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigClientListStructList",
    },
    contact: {
      value: cdktf.stringToHclTerraform(struct!.contact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    engine_id: {
      value: cdktf.stringToHclTerraform(struct!.engineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_id_type: {
      value: cdktf.stringToHclTerraform(struct!.engineIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trap_groups: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigTrapGroupsToHclTerraform, false)(struct!.trapGroups),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigTrapGroupsList",
    },
    v2c_config: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigV2CConfigToHclTerraform, false)(struct!.v2CConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigV2CConfigList",
    },
    v3_config: {
      value: siteNetworktemplateSnmpConfigV3ConfigToHclTerraform(struct!.v3Config),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateSnmpConfigV3Config",
    },
    views: {
      value: cdktf.listMapperHcl(siteNetworktemplateSnmpConfigViewsToHclTerraform, false)(struct!.views),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSnmpConfigViewsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSnmpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSnmpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientList = this._clientList?.internalValue;
    }
    if (this._contact !== undefined) {
      hasAnyValues = true;
      internalValueResult.contact = this._contact;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._engineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineId = this._engineId;
    }
    if (this._engineIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineIdType = this._engineIdType;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._trapGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapGroups = this._trapGroups?.internalValue;
    }
    if (this._v2CConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2CConfig = this._v2CConfig?.internalValue;
    }
    if (this._v3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.v3Config = this._v3Config?.internalValue;
    }
    if (this._views?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.views = this._views?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSnmpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientList.internalValue = undefined;
      this._contact = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._engineId = undefined;
      this._engineIdType = undefined;
      this._location = undefined;
      this._name = undefined;
      this._network = undefined;
      this._trapGroups.internalValue = undefined;
      this._v2CConfig.internalValue = undefined;
      this._v3Config.internalValue = undefined;
      this._views.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientList.internalValue = value.clientList;
      this._contact = value.contact;
      this._description = value.description;
      this._enabled = value.enabled;
      this._engineId = value.engineId;
      this._engineIdType = value.engineIdType;
      this._location = value.location;
      this._name = value.name;
      this._network = value.network;
      this._trapGroups.internalValue = value.trapGroups;
      this._v2CConfig.internalValue = value.v2CConfig;
      this._v3Config.internalValue = value.v3Config;
      this._views.internalValue = value.views;
    }
  }

  // client_list - computed: false, optional: true, required: false
  private _clientList = new SiteNetworktemplateSnmpConfigClientListStructList(this, "client_list", false);
  public get clientList() {
    return this._clientList;
  }
  public putClientList(value: SiteNetworktemplateSnmpConfigClientListStruct[] | cdktf.IResolvable) {
    this._clientList.internalValue = value;
  }
  public resetClientList() {
    this._clientList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientListInput() {
    return this._clientList.internalValue;
  }

  // contact - computed: false, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // engine_id - computed: false, optional: true, required: false
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // engine_id_type - computed: true, optional: true, required: false
  private _engineIdType?: string; 
  public get engineIdType() {
    return this.getStringAttribute('engine_id_type');
  }
  public set engineIdType(value: string) {
    this._engineIdType = value;
  }
  public resetEngineIdType() {
    this._engineIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdTypeInput() {
    return this._engineIdType;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // trap_groups - computed: false, optional: true, required: false
  private _trapGroups = new SiteNetworktemplateSnmpConfigTrapGroupsList(this, "trap_groups", false);
  public get trapGroups() {
    return this._trapGroups;
  }
  public putTrapGroups(value: SiteNetworktemplateSnmpConfigTrapGroups[] | cdktf.IResolvable) {
    this._trapGroups.internalValue = value;
  }
  public resetTrapGroups() {
    this._trapGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapGroupsInput() {
    return this._trapGroups.internalValue;
  }

  // v2c_config - computed: false, optional: true, required: false
  private _v2CConfig = new SiteNetworktemplateSnmpConfigV2CConfigList(this, "v2c_config", false);
  public get v2CConfig() {
    return this._v2CConfig;
  }
  public putV2CConfig(value: SiteNetworktemplateSnmpConfigV2CConfig[] | cdktf.IResolvable) {
    this._v2CConfig.internalValue = value;
  }
  public resetV2CConfig() {
    this._v2CConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2CConfigInput() {
    return this._v2CConfig.internalValue;
  }

  // v3_config - computed: false, optional: true, required: false
  private _v3Config = new SiteNetworktemplateSnmpConfigV3ConfigOutputReference(this, "v3_config");
  public get v3Config() {
    return this._v3Config;
  }
  public putV3Config(value: SiteNetworktemplateSnmpConfigV3Config) {
    this._v3Config.internalValue = value;
  }
  public resetV3Config() {
    this._v3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3ConfigInput() {
    return this._v3Config.internalValue;
  }

  // views - computed: false, optional: true, required: false
  private _views = new SiteNetworktemplateSnmpConfigViewsList(this, "views", false);
  public get views() {
    return this._views;
  }
  public putViews(value: SiteNetworktemplateSnmpConfigViews[] | cdktf.IResolvable) {
    this._views.internalValue = value;
  }
  public resetViews() {
    this._views.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewsInput() {
    return this._views.internalValue;
  }
}
export interface SiteNetworktemplateSwitchMatchingRulesIpConfig {
  /**
  * VLAN Name for the management interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#network SiteNetworktemplate#network}
  */
  readonly network?: string;
  /**
  * enum: `dhcp`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#type SiteNetworktemplate#type}
  */
  readonly type?: string;
}

export function siteNetworktemplateSwitchMatchingRulesIpConfigToTerraform(struct?: SiteNetworktemplateSwitchMatchingRulesIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function siteNetworktemplateSwitchMatchingRulesIpConfigToHclTerraform(struct?: SiteNetworktemplateSwitchMatchingRulesIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
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

export class SiteNetworktemplateSwitchMatchingRulesIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSwitchMatchingRulesIpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMatchingRulesIpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._type = value.type;
    }
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
}
export interface SiteNetworktemplateSwitchMatchingRulesOobIpConfig {
  /**
  * enum: `dhcp`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#type SiteNetworktemplate#type}
  */
  readonly type?: string;
  /**
  * If supported on the platform. If enabled, DNS will be using this routing-instance, too
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#use_mgmt_vrf SiteNetworktemplate#use_mgmt_vrf}
  */
  readonly useMgmtVrf?: boolean | cdktf.IResolvable;
  /**
  * For host-out traffic (NTP/TACPLUS/RADIUS/SYSLOG/SNMP), if alternative source network/ip is desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#use_mgmt_vrf_for_host_out SiteNetworktemplate#use_mgmt_vrf_for_host_out}
  */
  readonly useMgmtVrfForHostOut?: boolean | cdktf.IResolvable;
}

export function siteNetworktemplateSwitchMatchingRulesOobIpConfigToTerraform(struct?: SiteNetworktemplateSwitchMatchingRulesOobIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    use_mgmt_vrf: cdktf.booleanToTerraform(struct!.useMgmtVrf),
    use_mgmt_vrf_for_host_out: cdktf.booleanToTerraform(struct!.useMgmtVrfForHostOut),
  }
}


export function siteNetworktemplateSwitchMatchingRulesOobIpConfigToHclTerraform(struct?: SiteNetworktemplateSwitchMatchingRulesOobIpConfig | cdktf.IResolvable): any {
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
    use_mgmt_vrf: {
      value: cdktf.booleanToHclTerraform(struct!.useMgmtVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_mgmt_vrf_for_host_out: {
      value: cdktf.booleanToHclTerraform(struct!.useMgmtVrfForHostOut),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMatchingRulesOobIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSwitchMatchingRulesOobIpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useMgmtVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtVrf = this._useMgmtVrf;
    }
    if (this._useMgmtVrfForHostOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtVrfForHostOut = this._useMgmtVrfForHostOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMatchingRulesOobIpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._useMgmtVrf = undefined;
      this._useMgmtVrfForHostOut = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._useMgmtVrf = value.useMgmtVrf;
      this._useMgmtVrfForHostOut = value.useMgmtVrfForHostOut;
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

  // use_mgmt_vrf - computed: true, optional: true, required: false
  private _useMgmtVrf?: boolean | cdktf.IResolvable; 
  public get useMgmtVrf() {
    return this.getBooleanAttribute('use_mgmt_vrf');
  }
  public set useMgmtVrf(value: boolean | cdktf.IResolvable) {
    this._useMgmtVrf = value;
  }
  public resetUseMgmtVrf() {
    this._useMgmtVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtVrfInput() {
    return this._useMgmtVrf;
  }

  // use_mgmt_vrf_for_host_out - computed: false, optional: true, required: false
  private _useMgmtVrfForHostOut?: boolean | cdktf.IResolvable; 
  public get useMgmtVrfForHostOut() {
    return this.getBooleanAttribute('use_mgmt_vrf_for_host_out');
  }
  public set useMgmtVrfForHostOut(value: boolean | cdktf.IResolvable) {
    this._useMgmtVrfForHostOut = value;
  }
  public resetUseMgmtVrfForHostOut() {
    this._useMgmtVrfForHostOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtVrfForHostOutInput() {
    return this._useMgmtVrfForHostOut;
  }
}
export interface SiteNetworktemplateSwitchMatchingRulesPortConfig {
  /**
  * To disable LACP support for the AE interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#ae_disable_lacp SiteNetworktemplate#ae_disable_lacp}
  */
  readonly aeDisableLacp?: boolean | cdktf.IResolvable;
  /**
  * Users could force to use the designated AE name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#ae_idx SiteNetworktemplate#ae_idx}
  */
  readonly aeIdx?: number;
  /**
  * To use fast timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#ae_lacp_slow SiteNetworktemplate#ae_lacp_slow}
  */
  readonly aeLacpSlow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#aggregated SiteNetworktemplate#aggregated}
  */
  readonly aggregated?: boolean | cdktf.IResolvable;
  /**
  * To generate port up/down alarm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#critical SiteNetworktemplate#critical}
  */
  readonly critical?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#description SiteNetworktemplate#description}
  */
  readonly description?: string;
  /**
  * If `speed` and `duplex` are specified, whether to disable autonegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#disable_autoneg SiteNetworktemplate#disable_autoneg}
  */
  readonly disableAutoneg?: boolean | cdktf.IResolvable;
  /**
  * enum: `auto`, `full`, `half`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#duplex SiteNetworktemplate#duplex}
  */
  readonly duplex?: string;
  /**
  * Enable dynamic usage for this port. Set to `dynamic` to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#dynamic_usage SiteNetworktemplate#dynamic_usage}
  */
  readonly dynamicUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#esilag SiteNetworktemplate#esilag}
  */
  readonly esilag?: boolean | cdktf.IResolvable;
  /**
  * Media maximum transmission unit (MTU) is the largest data unit that can be forwarded without fragmentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#mtu SiteNetworktemplate#mtu}
  */
  readonly mtu?: number;
  /**
  * Prevent helpdesk to override the port config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#no_local_overwrite SiteNetworktemplate#no_local_overwrite}
  */
  readonly noLocalOverwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#poe_disabled SiteNetworktemplate#poe_disabled}
  */
  readonly poeDisabled?: boolean | cdktf.IResolvable;
  /**
  * Required if `usage`==`vlan_tunnel`. Q-in-Q tunneling using All-in-one bundling. This also enables standard L2PT for interfaces that are not encapsulation tunnel interfaces and uses MAC rewrite operation. [View more information](https://www.juniper.net/documentation/us/en/software/junos/multicast-l2/topics/topic-map/q-in-q.html#id-understanding-qinq-tunneling-and-vlan-translation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port_network SiteNetworktemplate#port_network}
  */
  readonly portNetwork?: string;
  /**
  * enum: `100m`, `10m`, `1g`, `2.5g`, `5g`, `10g`, `25g`, `40g`, `100g`,`auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#speed SiteNetworktemplate#speed}
  */
  readonly speed?: string;
  /**
  * Port usage name. For Q-in-Q, use `vlan_tunnel`. If EVPN is used, use `evpn_uplink`or `evpn_downlink`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#usage SiteNetworktemplate#usage}
  */
  readonly usage: string;
}

export function siteNetworktemplateSwitchMatchingRulesPortConfigToTerraform(struct?: SiteNetworktemplateSwitchMatchingRulesPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ae_disable_lacp: cdktf.booleanToTerraform(struct!.aeDisableLacp),
    ae_idx: cdktf.numberToTerraform(struct!.aeIdx),
    ae_lacp_slow: cdktf.booleanToTerraform(struct!.aeLacpSlow),
    aggregated: cdktf.booleanToTerraform(struct!.aggregated),
    critical: cdktf.booleanToTerraform(struct!.critical),
    description: cdktf.stringToTerraform(struct!.description),
    disable_autoneg: cdktf.booleanToTerraform(struct!.disableAutoneg),
    duplex: cdktf.stringToTerraform(struct!.duplex),
    dynamic_usage: cdktf.stringToTerraform(struct!.dynamicUsage),
    esilag: cdktf.booleanToTerraform(struct!.esilag),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    no_local_overwrite: cdktf.booleanToTerraform(struct!.noLocalOverwrite),
    poe_disabled: cdktf.booleanToTerraform(struct!.poeDisabled),
    port_network: cdktf.stringToTerraform(struct!.portNetwork),
    speed: cdktf.stringToTerraform(struct!.speed),
    usage: cdktf.stringToTerraform(struct!.usage),
  }
}


export function siteNetworktemplateSwitchMatchingRulesPortConfigToHclTerraform(struct?: SiteNetworktemplateSwitchMatchingRulesPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ae_disable_lacp: {
      value: cdktf.booleanToHclTerraform(struct!.aeDisableLacp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ae_idx: {
      value: cdktf.numberToHclTerraform(struct!.aeIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ae_lacp_slow: {
      value: cdktf.booleanToHclTerraform(struct!.aeLacpSlow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregated: {
      value: cdktf.booleanToHclTerraform(struct!.aggregated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    critical: {
      value: cdktf.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_autoneg: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutoneg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    duplex: {
      value: cdktf.stringToHclTerraform(struct!.duplex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_usage: {
      value: cdktf.stringToHclTerraform(struct!.dynamicUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    esilag: {
      value: cdktf.booleanToHclTerraform(struct!.esilag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_local_overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.noLocalOverwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    poe_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.poeDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_network: {
      value: cdktf.stringToHclTerraform(struct!.portNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage: {
      value: cdktf.stringToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMatchingRulesPortConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateSwitchMatchingRulesPortConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aeDisableLacp !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeDisableLacp = this._aeDisableLacp;
    }
    if (this._aeIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeIdx = this._aeIdx;
    }
    if (this._aeLacpSlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeLacpSlow = this._aeLacpSlow;
    }
    if (this._aggregated !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregated = this._aggregated;
    }
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableAutoneg !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoneg = this._disableAutoneg;
    }
    if (this._duplex !== undefined) {
      hasAnyValues = true;
      internalValueResult.duplex = this._duplex;
    }
    if (this._dynamicUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicUsage = this._dynamicUsage;
    }
    if (this._esilag !== undefined) {
      hasAnyValues = true;
      internalValueResult.esilag = this._esilag;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._noLocalOverwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLocalOverwrite = this._noLocalOverwrite;
    }
    if (this._poeDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeDisabled = this._poeDisabled;
    }
    if (this._portNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNetwork = this._portNetwork;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMatchingRulesPortConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aeDisableLacp = undefined;
      this._aeIdx = undefined;
      this._aeLacpSlow = undefined;
      this._aggregated = undefined;
      this._critical = undefined;
      this._description = undefined;
      this._disableAutoneg = undefined;
      this._duplex = undefined;
      this._dynamicUsage = undefined;
      this._esilag = undefined;
      this._mtu = undefined;
      this._noLocalOverwrite = undefined;
      this._poeDisabled = undefined;
      this._portNetwork = undefined;
      this._speed = undefined;
      this._usage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aeDisableLacp = value.aeDisableLacp;
      this._aeIdx = value.aeIdx;
      this._aeLacpSlow = value.aeLacpSlow;
      this._aggregated = value.aggregated;
      this._critical = value.critical;
      this._description = value.description;
      this._disableAutoneg = value.disableAutoneg;
      this._duplex = value.duplex;
      this._dynamicUsage = value.dynamicUsage;
      this._esilag = value.esilag;
      this._mtu = value.mtu;
      this._noLocalOverwrite = value.noLocalOverwrite;
      this._poeDisabled = value.poeDisabled;
      this._portNetwork = value.portNetwork;
      this._speed = value.speed;
      this._usage = value.usage;
    }
  }

  // ae_disable_lacp - computed: false, optional: true, required: false
  private _aeDisableLacp?: boolean | cdktf.IResolvable; 
  public get aeDisableLacp() {
    return this.getBooleanAttribute('ae_disable_lacp');
  }
  public set aeDisableLacp(value: boolean | cdktf.IResolvable) {
    this._aeDisableLacp = value;
  }
  public resetAeDisableLacp() {
    this._aeDisableLacp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeDisableLacpInput() {
    return this._aeDisableLacp;
  }

  // ae_idx - computed: false, optional: true, required: false
  private _aeIdx?: number; 
  public get aeIdx() {
    return this.getNumberAttribute('ae_idx');
  }
  public set aeIdx(value: number) {
    this._aeIdx = value;
  }
  public resetAeIdx() {
    this._aeIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeIdxInput() {
    return this._aeIdx;
  }

  // ae_lacp_slow - computed: false, optional: true, required: false
  private _aeLacpSlow?: boolean | cdktf.IResolvable; 
  public get aeLacpSlow() {
    return this.getBooleanAttribute('ae_lacp_slow');
  }
  public set aeLacpSlow(value: boolean | cdktf.IResolvable) {
    this._aeLacpSlow = value;
  }
  public resetAeLacpSlow() {
    this._aeLacpSlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeLacpSlowInput() {
    return this._aeLacpSlow;
  }

  // aggregated - computed: false, optional: true, required: false
  private _aggregated?: boolean | cdktf.IResolvable; 
  public get aggregated() {
    return this.getBooleanAttribute('aggregated');
  }
  public set aggregated(value: boolean | cdktf.IResolvable) {
    this._aggregated = value;
  }
  public resetAggregated() {
    this._aggregated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatedInput() {
    return this._aggregated;
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
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

  // disable_autoneg - computed: false, optional: true, required: false
  private _disableAutoneg?: boolean | cdktf.IResolvable; 
  public get disableAutoneg() {
    return this.getBooleanAttribute('disable_autoneg');
  }
  public set disableAutoneg(value: boolean | cdktf.IResolvable) {
    this._disableAutoneg = value;
  }
  public resetDisableAutoneg() {
    this._disableAutoneg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutonegInput() {
    return this._disableAutoneg;
  }

  // duplex - computed: false, optional: true, required: false
  private _duplex?: string; 
  public get duplex() {
    return this.getStringAttribute('duplex');
  }
  public set duplex(value: string) {
    this._duplex = value;
  }
  public resetDuplex() {
    this._duplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexInput() {
    return this._duplex;
  }

  // dynamic_usage - computed: false, optional: true, required: false
  private _dynamicUsage?: string; 
  public get dynamicUsage() {
    return this.getStringAttribute('dynamic_usage');
  }
  public set dynamicUsage(value: string) {
    this._dynamicUsage = value;
  }
  public resetDynamicUsage() {
    this._dynamicUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicUsageInput() {
    return this._dynamicUsage;
  }

  // esilag - computed: false, optional: true, required: false
  private _esilag?: boolean | cdktf.IResolvable; 
  public get esilag() {
    return this.getBooleanAttribute('esilag');
  }
  public set esilag(value: boolean | cdktf.IResolvable) {
    this._esilag = value;
  }
  public resetEsilag() {
    this._esilag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esilagInput() {
    return this._esilag;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // no_local_overwrite - computed: true, optional: true, required: false
  private _noLocalOverwrite?: boolean | cdktf.IResolvable; 
  public get noLocalOverwrite() {
    return this.getBooleanAttribute('no_local_overwrite');
  }
  public set noLocalOverwrite(value: boolean | cdktf.IResolvable) {
    this._noLocalOverwrite = value;
  }
  public resetNoLocalOverwrite() {
    this._noLocalOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLocalOverwriteInput() {
    return this._noLocalOverwrite;
  }

  // poe_disabled - computed: false, optional: true, required: false
  private _poeDisabled?: boolean | cdktf.IResolvable; 
  public get poeDisabled() {
    return this.getBooleanAttribute('poe_disabled');
  }
  public set poeDisabled(value: boolean | cdktf.IResolvable) {
    this._poeDisabled = value;
  }
  public resetPoeDisabled() {
    this._poeDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeDisabledInput() {
    return this._poeDisabled;
  }

  // port_network - computed: false, optional: true, required: false
  private _portNetwork?: string; 
  public get portNetwork() {
    return this.getStringAttribute('port_network');
  }
  public set portNetwork(value: string) {
    this._portNetwork = value;
  }
  public resetPortNetwork() {
    this._portNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNetworkInput() {
    return this._portNetwork;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // usage - computed: false, optional: false, required: true
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }
}

export class SiteNetworktemplateSwitchMatchingRulesPortConfigMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateSwitchMatchingRulesPortConfig } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateSwitchMatchingRulesPortConfigOutputReference {
    return new SiteNetworktemplateSwitchMatchingRulesPortConfigOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateSwitchMatchingRulesPortMirroring {
  /**
  * At least one of the `input_port_ids_ingress`, `input_port_ids_egress` or `input_networks_ingress ` should be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#input_networks_ingress SiteNetworktemplate#input_networks_ingress}
  */
  readonly inputNetworksIngress?: string[];
  /**
  * At least one of the `input_port_ids_ingress`, `input_port_ids_egress` or `input_networks_ingress ` should be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#input_port_ids_egress SiteNetworktemplate#input_port_ids_egress}
  */
  readonly inputPortIdsEgress?: string[];
  /**
  * At least one of the `input_port_ids_ingress`, `input_port_ids_egress` or `input_networks_ingress ` should be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#input_port_ids_ingress SiteNetworktemplate#input_port_ids_ingress}
  */
  readonly inputPortIdsIngress?: string[];
  /**
  * Exactly one of the `output_ip_address`, `output_port_id` or `output_network` should be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#output_ip_address SiteNetworktemplate#output_ip_address}
  */
  readonly outputIpAddress?: string;
  /**
  * Exactly one of the `output_ip_address`, `output_port_id` or `output_network` should be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#output_network SiteNetworktemplate#output_network}
  */
  readonly outputNetwork?: string;
  /**
  * Exactly one of the `output_ip_address`, `output_port_id` or `output_network` should be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#output_port_id SiteNetworktemplate#output_port_id}
  */
  readonly outputPortId?: string;
}

export function siteNetworktemplateSwitchMatchingRulesPortMirroringToTerraform(struct?: SiteNetworktemplateSwitchMatchingRulesPortMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_networks_ingress: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputNetworksIngress),
    input_port_ids_egress: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputPortIdsEgress),
    input_port_ids_ingress: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputPortIdsIngress),
    output_ip_address: cdktf.stringToTerraform(struct!.outputIpAddress),
    output_network: cdktf.stringToTerraform(struct!.outputNetwork),
    output_port_id: cdktf.stringToTerraform(struct!.outputPortId),
  }
}


export function siteNetworktemplateSwitchMatchingRulesPortMirroringToHclTerraform(struct?: SiteNetworktemplateSwitchMatchingRulesPortMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_networks_ingress: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputNetworksIngress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_port_ids_egress: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputPortIdsEgress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_port_ids_ingress: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputPortIdsIngress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    output_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.outputIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_network: {
      value: cdktf.stringToHclTerraform(struct!.outputNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_port_id: {
      value: cdktf.stringToHclTerraform(struct!.outputPortId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMatchingRulesPortMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateSwitchMatchingRulesPortMirroring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputNetworksIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputNetworksIngress = this._inputNetworksIngress;
    }
    if (this._inputPortIdsEgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputPortIdsEgress = this._inputPortIdsEgress;
    }
    if (this._inputPortIdsIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputPortIdsIngress = this._inputPortIdsIngress;
    }
    if (this._outputIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputIpAddress = this._outputIpAddress;
    }
    if (this._outputNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputNetwork = this._outputNetwork;
    }
    if (this._outputPortId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPortId = this._outputPortId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMatchingRulesPortMirroring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputNetworksIngress = undefined;
      this._inputPortIdsEgress = undefined;
      this._inputPortIdsIngress = undefined;
      this._outputIpAddress = undefined;
      this._outputNetwork = undefined;
      this._outputPortId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputNetworksIngress = value.inputNetworksIngress;
      this._inputPortIdsEgress = value.inputPortIdsEgress;
      this._inputPortIdsIngress = value.inputPortIdsIngress;
      this._outputIpAddress = value.outputIpAddress;
      this._outputNetwork = value.outputNetwork;
      this._outputPortId = value.outputPortId;
    }
  }

  // input_networks_ingress - computed: true, optional: true, required: false
  private _inputNetworksIngress?: string[]; 
  public get inputNetworksIngress() {
    return this.getListAttribute('input_networks_ingress');
  }
  public set inputNetworksIngress(value: string[]) {
    this._inputNetworksIngress = value;
  }
  public resetInputNetworksIngress() {
    this._inputNetworksIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNetworksIngressInput() {
    return this._inputNetworksIngress;
  }

  // input_port_ids_egress - computed: true, optional: true, required: false
  private _inputPortIdsEgress?: string[]; 
  public get inputPortIdsEgress() {
    return this.getListAttribute('input_port_ids_egress');
  }
  public set inputPortIdsEgress(value: string[]) {
    this._inputPortIdsEgress = value;
  }
  public resetInputPortIdsEgress() {
    this._inputPortIdsEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPortIdsEgressInput() {
    return this._inputPortIdsEgress;
  }

  // input_port_ids_ingress - computed: true, optional: true, required: false
  private _inputPortIdsIngress?: string[]; 
  public get inputPortIdsIngress() {
    return this.getListAttribute('input_port_ids_ingress');
  }
  public set inputPortIdsIngress(value: string[]) {
    this._inputPortIdsIngress = value;
  }
  public resetInputPortIdsIngress() {
    this._inputPortIdsIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPortIdsIngressInput() {
    return this._inputPortIdsIngress;
  }

  // output_ip_address - computed: false, optional: true, required: false
  private _outputIpAddress?: string; 
  public get outputIpAddress() {
    return this.getStringAttribute('output_ip_address');
  }
  public set outputIpAddress(value: string) {
    this._outputIpAddress = value;
  }
  public resetOutputIpAddress() {
    this._outputIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputIpAddressInput() {
    return this._outputIpAddress;
  }

  // output_network - computed: false, optional: true, required: false
  private _outputNetwork?: string; 
  public get outputNetwork() {
    return this.getStringAttribute('output_network');
  }
  public set outputNetwork(value: string) {
    this._outputNetwork = value;
  }
  public resetOutputNetwork() {
    this._outputNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputNetworkInput() {
    return this._outputNetwork;
  }

  // output_port_id - computed: false, optional: true, required: false
  private _outputPortId?: string; 
  public get outputPortId() {
    return this.getStringAttribute('output_port_id');
  }
  public set outputPortId(value: string) {
    this._outputPortId = value;
  }
  public resetOutputPortId() {
    this._outputPortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPortIdInput() {
    return this._outputPortId;
  }
}

export class SiteNetworktemplateSwitchMatchingRulesPortMirroringMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateSwitchMatchingRulesPortMirroring } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateSwitchMatchingRulesPortMirroringOutputReference {
    return new SiteNetworktemplateSwitchMatchingRulesPortMirroringOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateSwitchMatchingRulesStpConfig {
  /**
  * Switch STP priority. Range [0, 4k, 8k.. 60k] in steps of 4k. Bridge priority applies to both VSTP and RSTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#bridge_priority SiteNetworktemplate#bridge_priority}
  */
  readonly bridgePriority?: string;
}

export function siteNetworktemplateSwitchMatchingRulesStpConfigToTerraform(struct?: SiteNetworktemplateSwitchMatchingRulesStpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge_priority: cdktf.stringToTerraform(struct!.bridgePriority),
  }
}


export function siteNetworktemplateSwitchMatchingRulesStpConfigToHclTerraform(struct?: SiteNetworktemplateSwitchMatchingRulesStpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge_priority: {
      value: cdktf.stringToHclTerraform(struct!.bridgePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMatchingRulesStpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSwitchMatchingRulesStpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridgePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridgePriority = this._bridgePriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMatchingRulesStpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridgePriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridgePriority = value.bridgePriority;
    }
  }

  // bridge_priority - computed: true, optional: true, required: false
  private _bridgePriority?: string; 
  public get bridgePriority() {
    return this.getStringAttribute('bridge_priority');
  }
  public set bridgePriority(value: string) {
    this._bridgePriority = value;
  }
  public resetBridgePriority() {
    this._bridgePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgePriorityInput() {
    return this._bridgePriority;
  }
}
export interface SiteNetworktemplateSwitchMatchingRules {
  /**
  * additional CLI commands to append to the generated Junos config. **Note**: no check is done
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#additional_config_cmds SiteNetworktemplate#additional_config_cmds}
  */
  readonly additionalConfigCmds?: string[];
  /**
  * In-Band Management interface configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#ip_config SiteNetworktemplate#ip_config}
  */
  readonly ipConfig?: SiteNetworktemplateSwitchMatchingRulesIpConfig;
  /**
  * string the switch model must start with to use this rule. It is possible to combine with the `match_name` and `match_role` attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#match_model SiteNetworktemplate#match_model}
  */
  readonly matchModel?: string;
  /**
  * string the switch name must start with to use this rule. Use the `match_name_offset` to indicate the first character of the switch name to compare to. It is possible to combine with the `match_model` and `match_role` attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#match_name SiteNetworktemplate#match_name}
  */
  readonly matchName?: string;
  /**
  * first character of the switch name to compare to the `match_name` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#match_name_offset SiteNetworktemplate#match_name_offset}
  */
  readonly matchNameOffset?: number;
  /**
  * string the switch role must start with to use this rule. It is possible to combine with the `match_name` and `match_model` attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#match_role SiteNetworktemplate#match_role}
  */
  readonly matchRole?: string;
  /**
  * Rule name. WARNING: the name `default` is reserved and can only be used for the last rule in the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#name SiteNetworktemplate#name}
  */
  readonly name?: string;
  /**
  * Out-of-Band Management interface configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#oob_ip_config SiteNetworktemplate#oob_ip_config}
  */
  readonly oobIpConfig?: SiteNetworktemplateSwitchMatchingRulesOobIpConfig;
  /**
  * Property key is the port name or range (e.g. "ge-0/0/0-10")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port_config SiteNetworktemplate#port_config}
  */
  readonly portConfig?: { [key: string]: SiteNetworktemplateSwitchMatchingRulesPortConfig } | cdktf.IResolvable;
  /**
  * Property key is the port mirroring instance name. `port_mirroring` can be added under device/site settings. It takes interface and ports as input for ingress, interface as input for egress and can take interface and port as output. A maximum 4 mirroring ports is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port_mirroring SiteNetworktemplate#port_mirroring}
  */
  readonly portMirroring?: { [key: string]: SiteNetworktemplateSwitchMatchingRulesPortMirroring } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#stp_config SiteNetworktemplate#stp_config}
  */
  readonly stpConfig?: SiteNetworktemplateSwitchMatchingRulesStpConfig;
}

export function siteNetworktemplateSwitchMatchingRulesToTerraform(struct?: SiteNetworktemplateSwitchMatchingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_config_cmds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalConfigCmds),
    ip_config: siteNetworktemplateSwitchMatchingRulesIpConfigToTerraform(struct!.ipConfig),
    match_model: cdktf.stringToTerraform(struct!.matchModel),
    match_name: cdktf.stringToTerraform(struct!.matchName),
    match_name_offset: cdktf.numberToTerraform(struct!.matchNameOffset),
    match_role: cdktf.stringToTerraform(struct!.matchRole),
    name: cdktf.stringToTerraform(struct!.name),
    oob_ip_config: siteNetworktemplateSwitchMatchingRulesOobIpConfigToTerraform(struct!.oobIpConfig),
    port_config: cdktf.hashMapper(siteNetworktemplateSwitchMatchingRulesPortConfigToTerraform)(struct!.portConfig),
    port_mirroring: cdktf.hashMapper(siteNetworktemplateSwitchMatchingRulesPortMirroringToTerraform)(struct!.portMirroring),
    stp_config: siteNetworktemplateSwitchMatchingRulesStpConfigToTerraform(struct!.stpConfig),
  }
}


export function siteNetworktemplateSwitchMatchingRulesToHclTerraform(struct?: SiteNetworktemplateSwitchMatchingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_config_cmds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalConfigCmds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_config: {
      value: siteNetworktemplateSwitchMatchingRulesIpConfigToHclTerraform(struct!.ipConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateSwitchMatchingRulesIpConfig",
    },
    match_model: {
      value: cdktf.stringToHclTerraform(struct!.matchModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_name: {
      value: cdktf.stringToHclTerraform(struct!.matchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_name_offset: {
      value: cdktf.numberToHclTerraform(struct!.matchNameOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_role: {
      value: cdktf.stringToHclTerraform(struct!.matchRole),
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
    oob_ip_config: {
      value: siteNetworktemplateSwitchMatchingRulesOobIpConfigToHclTerraform(struct!.oobIpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateSwitchMatchingRulesOobIpConfig",
    },
    port_config: {
      value: cdktf.hashMapperHcl(siteNetworktemplateSwitchMatchingRulesPortConfigToHclTerraform)(struct!.portConfig),
      isBlock: true,
      type: "map",
      storageClassType: "SiteNetworktemplateSwitchMatchingRulesPortConfigMap",
    },
    port_mirroring: {
      value: cdktf.hashMapperHcl(siteNetworktemplateSwitchMatchingRulesPortMirroringToHclTerraform)(struct!.portMirroring),
      isBlock: true,
      type: "map",
      storageClassType: "SiteNetworktemplateSwitchMatchingRulesPortMirroringMap",
    },
    stp_config: {
      value: siteNetworktemplateSwitchMatchingRulesStpConfigToHclTerraform(struct!.stpConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateSwitchMatchingRulesStpConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMatchingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSwitchMatchingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalConfigCmds !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalConfigCmds = this._additionalConfigCmds;
    }
    if (this._ipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfig = this._ipConfig?.internalValue;
    }
    if (this._matchModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchModel = this._matchModel;
    }
    if (this._matchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchName = this._matchName;
    }
    if (this._matchNameOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNameOffset = this._matchNameOffset;
    }
    if (this._matchRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRole = this._matchRole;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oobIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oobIpConfig = this._oobIpConfig?.internalValue;
    }
    if (this._portConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portConfig = this._portConfig?.internalValue;
    }
    if (this._portMirroring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMirroring = this._portMirroring?.internalValue;
    }
    if (this._stpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpConfig = this._stpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMatchingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalConfigCmds = undefined;
      this._ipConfig.internalValue = undefined;
      this._matchModel = undefined;
      this._matchName = undefined;
      this._matchNameOffset = undefined;
      this._matchRole = undefined;
      this._name = undefined;
      this._oobIpConfig.internalValue = undefined;
      this._portConfig.internalValue = undefined;
      this._portMirroring.internalValue = undefined;
      this._stpConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalConfigCmds = value.additionalConfigCmds;
      this._ipConfig.internalValue = value.ipConfig;
      this._matchModel = value.matchModel;
      this._matchName = value.matchName;
      this._matchNameOffset = value.matchNameOffset;
      this._matchRole = value.matchRole;
      this._name = value.name;
      this._oobIpConfig.internalValue = value.oobIpConfig;
      this._portConfig.internalValue = value.portConfig;
      this._portMirroring.internalValue = value.portMirroring;
      this._stpConfig.internalValue = value.stpConfig;
    }
  }

  // additional_config_cmds - computed: false, optional: true, required: false
  private _additionalConfigCmds?: string[]; 
  public get additionalConfigCmds() {
    return this.getListAttribute('additional_config_cmds');
  }
  public set additionalConfigCmds(value: string[]) {
    this._additionalConfigCmds = value;
  }
  public resetAdditionalConfigCmds() {
    this._additionalConfigCmds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigCmdsInput() {
    return this._additionalConfigCmds;
  }

  // ip_config - computed: false, optional: true, required: false
  private _ipConfig = new SiteNetworktemplateSwitchMatchingRulesIpConfigOutputReference(this, "ip_config");
  public get ipConfig() {
    return this._ipConfig;
  }
  public putIpConfig(value: SiteNetworktemplateSwitchMatchingRulesIpConfig) {
    this._ipConfig.internalValue = value;
  }
  public resetIpConfig() {
    this._ipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigInput() {
    return this._ipConfig.internalValue;
  }

  // match_model - computed: false, optional: true, required: false
  private _matchModel?: string; 
  public get matchModel() {
    return this.getStringAttribute('match_model');
  }
  public set matchModel(value: string) {
    this._matchModel = value;
  }
  public resetMatchModel() {
    this._matchModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchModelInput() {
    return this._matchModel;
  }

  // match_name - computed: false, optional: true, required: false
  private _matchName?: string; 
  public get matchName() {
    return this.getStringAttribute('match_name');
  }
  public set matchName(value: string) {
    this._matchName = value;
  }
  public resetMatchName() {
    this._matchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameInput() {
    return this._matchName;
  }

  // match_name_offset - computed: true, optional: true, required: false
  private _matchNameOffset?: number; 
  public get matchNameOffset() {
    return this.getNumberAttribute('match_name_offset');
  }
  public set matchNameOffset(value: number) {
    this._matchNameOffset = value;
  }
  public resetMatchNameOffset() {
    this._matchNameOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameOffsetInput() {
    return this._matchNameOffset;
  }

  // match_role - computed: false, optional: true, required: false
  private _matchRole?: string; 
  public get matchRole() {
    return this.getStringAttribute('match_role');
  }
  public set matchRole(value: string) {
    this._matchRole = value;
  }
  public resetMatchRole() {
    this._matchRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRoleInput() {
    return this._matchRole;
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

  // oob_ip_config - computed: false, optional: true, required: false
  private _oobIpConfig = new SiteNetworktemplateSwitchMatchingRulesOobIpConfigOutputReference(this, "oob_ip_config");
  public get oobIpConfig() {
    return this._oobIpConfig;
  }
  public putOobIpConfig(value: SiteNetworktemplateSwitchMatchingRulesOobIpConfig) {
    this._oobIpConfig.internalValue = value;
  }
  public resetOobIpConfig() {
    this._oobIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oobIpConfigInput() {
    return this._oobIpConfig.internalValue;
  }

  // port_config - computed: false, optional: true, required: false
  private _portConfig = new SiteNetworktemplateSwitchMatchingRulesPortConfigMap(this, "port_config");
  public get portConfig() {
    return this._portConfig;
  }
  public putPortConfig(value: { [key: string]: SiteNetworktemplateSwitchMatchingRulesPortConfig } | cdktf.IResolvable) {
    this._portConfig.internalValue = value;
  }
  public resetPortConfig() {
    this._portConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConfigInput() {
    return this._portConfig.internalValue;
  }

  // port_mirroring - computed: false, optional: true, required: false
  private _portMirroring = new SiteNetworktemplateSwitchMatchingRulesPortMirroringMap(this, "port_mirroring");
  public get portMirroring() {
    return this._portMirroring;
  }
  public putPortMirroring(value: { [key: string]: SiteNetworktemplateSwitchMatchingRulesPortMirroring } | cdktf.IResolvable) {
    this._portMirroring.internalValue = value;
  }
  public resetPortMirroring() {
    this._portMirroring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMirroringInput() {
    return this._portMirroring.internalValue;
  }

  // stp_config - computed: false, optional: true, required: false
  private _stpConfig = new SiteNetworktemplateSwitchMatchingRulesStpConfigOutputReference(this, "stp_config");
  public get stpConfig() {
    return this._stpConfig;
  }
  public putStpConfig(value: SiteNetworktemplateSwitchMatchingRulesStpConfig) {
    this._stpConfig.internalValue = value;
  }
  public resetStpConfig() {
    this._stpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpConfigInput() {
    return this._stpConfig.internalValue;
  }
}

export class SiteNetworktemplateSwitchMatchingRulesList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSwitchMatchingRules[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSwitchMatchingRulesOutputReference {
    return new SiteNetworktemplateSwitchMatchingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSwitchMatching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enable SiteNetworktemplate#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * list of rules to define custom switch configuration based on different criteria. Each list must have at least one of `match_model`, `match_name` or `match_role` must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#rules SiteNetworktemplate#rules}
  */
  readonly rules?: SiteNetworktemplateSwitchMatchingRules[] | cdktf.IResolvable;
}

export function siteNetworktemplateSwitchMatchingToTerraform(struct?: SiteNetworktemplateSwitchMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    rules: cdktf.listMapper(siteNetworktemplateSwitchMatchingRulesToTerraform, false)(struct!.rules),
  }
}


export function siteNetworktemplateSwitchMatchingToHclTerraform(struct?: SiteNetworktemplateSwitchMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(siteNetworktemplateSwitchMatchingRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSwitchMatchingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSwitchMatching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMatching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._rules.internalValue = value.rules;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new SiteNetworktemplateSwitchMatchingRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SiteNetworktemplateSwitchMatchingRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface SiteNetworktemplateSwitchMgmtLocalAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#password SiteNetworktemplate#password}
  */
  readonly password?: string;
  /**
  * enum: `admin`, `helpdesk`, `none`, `read`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#role SiteNetworktemplate#role}
  */
  readonly role?: string;
}

export function siteNetworktemplateSwitchMgmtLocalAccountsToTerraform(struct?: SiteNetworktemplateSwitchMgmtLocalAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function siteNetworktemplateSwitchMgmtLocalAccountsToHclTerraform(struct?: SiteNetworktemplateSwitchMgmtLocalAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMgmtLocalAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateSwitchMgmtLocalAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMgmtLocalAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._role = value.role;
    }
  }

  // password - computed: false, optional: true, required: false
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

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class SiteNetworktemplateSwitchMgmtLocalAccountsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateSwitchMgmtLocalAccounts } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateSwitchMgmtLocalAccountsOutputReference {
    return new SiteNetworktemplateSwitchMgmtLocalAccountsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateSwitchMgmtProtectReCustom {
  /**
  * matched dst port, "0" means any. Note: For `protocol`==`any` and  `port_range`==`any`, configure `trusted_hosts` instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port_range SiteNetworktemplate#port_range}
  */
  readonly portRange?: string;
  /**
  * enum: `any`, `icmp`, `tcp`, `udp`. Note: For `protocol`==`any` and  `port_range`==`any`, configure `trusted_hosts` instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#protocol SiteNetworktemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#subnets SiteNetworktemplate#subnets}
  */
  readonly subnets: string[];
}

export function siteNetworktemplateSwitchMgmtProtectReCustomToTerraform(struct?: SiteNetworktemplateSwitchMgmtProtectReCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_range: cdktf.stringToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function siteNetworktemplateSwitchMgmtProtectReCustomToHclTerraform(struct?: SiteNetworktemplateSwitchMgmtProtectReCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMgmtProtectReCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSwitchMgmtProtectReCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMgmtProtectReCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
      this._subnets = value.subnets;
    }
  }

  // port_range - computed: true, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // subnets - computed: true, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class SiteNetworktemplateSwitchMgmtProtectReCustomList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSwitchMgmtProtectReCustom[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSwitchMgmtProtectReCustomOutputReference {
    return new SiteNetworktemplateSwitchMgmtProtectReCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSwitchMgmtProtectRe {
  /**
  * optionally, services we'll allow. enum: `icmp`, `ssh`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#allowed_services SiteNetworktemplate#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#custom SiteNetworktemplate#custom}
  */
  readonly custom?: SiteNetworktemplateSwitchMgmtProtectReCustom[] | cdktf.IResolvable;
  /**
  * When enabled, all traffic that is not essential to our operation will be dropped
  * e.g. ntp / dns / traffic to mist will be allowed by default
  *      if dhcpd is enabled, we'll make sure it works
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enabled SiteNetworktemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable hit count for Protect_RE policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#hit_count SiteNetworktemplate#hit_count}
  */
  readonly hitCount?: boolean | cdktf.IResolvable;
  /**
  * host/subnets we'll allow traffic to/from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#trusted_hosts SiteNetworktemplate#trusted_hosts}
  */
  readonly trustedHosts?: string[];
}

export function siteNetworktemplateSwitchMgmtProtectReToTerraform(struct?: SiteNetworktemplateSwitchMgmtProtectRe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServices),
    custom: cdktf.listMapper(siteNetworktemplateSwitchMgmtProtectReCustomToTerraform, false)(struct!.custom),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hit_count: cdktf.booleanToTerraform(struct!.hitCount),
    trusted_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedHosts),
  }
}


export function siteNetworktemplateSwitchMgmtProtectReToHclTerraform(struct?: SiteNetworktemplateSwitchMgmtProtectRe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom: {
      value: cdktf.listMapperHcl(siteNetworktemplateSwitchMgmtProtectReCustomToHclTerraform, false)(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSwitchMgmtProtectReCustomList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hit_count: {
      value: cdktf.booleanToHclTerraform(struct!.hitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMgmtProtectReOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSwitchMgmtProtectRe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServices = this._allowedServices;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitCount = this._hitCount;
    }
    if (this._trustedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedHosts = this._trustedHosts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMgmtProtectRe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedServices = undefined;
      this._custom.internalValue = undefined;
      this._enabled = undefined;
      this._hitCount = undefined;
      this._trustedHosts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedServices = value.allowedServices;
      this._custom.internalValue = value.custom;
      this._enabled = value.enabled;
      this._hitCount = value.hitCount;
      this._trustedHosts = value.trustedHosts;
    }
  }

  // allowed_services - computed: true, optional: true, required: false
  private _allowedServices?: string[]; 
  public get allowedServices() {
    return this.getListAttribute('allowed_services');
  }
  public set allowedServices(value: string[]) {
    this._allowedServices = value;
  }
  public resetAllowedServices() {
    this._allowedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices;
  }

  // custom - computed: true, optional: true, required: false
  private _custom = new SiteNetworktemplateSwitchMgmtProtectReCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: SiteNetworktemplateSwitchMgmtProtectReCustom[] | cdktf.IResolvable) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hit_count - computed: true, optional: true, required: false
  private _hitCount?: boolean | cdktf.IResolvable; 
  public get hitCount() {
    return this.getBooleanAttribute('hit_count');
  }
  public set hitCount(value: boolean | cdktf.IResolvable) {
    this._hitCount = value;
  }
  public resetHitCount() {
    this._hitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountInput() {
    return this._hitCount;
  }

  // trusted_hosts - computed: true, optional: true, required: false
  private _trustedHosts?: string[]; 
  public get trustedHosts() {
    return this.getListAttribute('trusted_hosts');
  }
  public set trustedHosts(value: string[]) {
    this._trustedHosts = value;
  }
  public resetTrustedHosts() {
    this._trustedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedHostsInput() {
    return this._trustedHosts;
  }
}
export interface SiteNetworktemplateSwitchMgmtTacacsAcctServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#host SiteNetworktemplate#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port SiteNetworktemplate#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#secret SiteNetworktemplate#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#timeout SiteNetworktemplate#timeout}
  */
  readonly timeout?: number;
}

export function siteNetworktemplateSwitchMgmtTacacsAcctServersToTerraform(struct?: SiteNetworktemplateSwitchMgmtTacacsAcctServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function siteNetworktemplateSwitchMgmtTacacsAcctServersToHclTerraform(struct?: SiteNetworktemplateSwitchMgmtTacacsAcctServers | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMgmtTacacsAcctServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSwitchMgmtTacacsAcctServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMgmtTacacsAcctServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._secret = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._secret = value.secret;
      this._timeout = value.timeout;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class SiteNetworktemplateSwitchMgmtTacacsAcctServersList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSwitchMgmtTacacsAcctServers[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSwitchMgmtTacacsAcctServersOutputReference {
    return new SiteNetworktemplateSwitchMgmtTacacsAcctServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSwitchMgmtTacacsTacplusServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#host SiteNetworktemplate#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#port SiteNetworktemplate#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#secret SiteNetworktemplate#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#timeout SiteNetworktemplate#timeout}
  */
  readonly timeout?: number;
}

export function siteNetworktemplateSwitchMgmtTacacsTacplusServersToTerraform(struct?: SiteNetworktemplateSwitchMgmtTacacsTacplusServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function siteNetworktemplateSwitchMgmtTacacsTacplusServersToHclTerraform(struct?: SiteNetworktemplateSwitchMgmtTacacsTacplusServers | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMgmtTacacsTacplusServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteNetworktemplateSwitchMgmtTacacsTacplusServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMgmtTacacsTacplusServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._secret = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._secret = value.secret;
      this._timeout = value.timeout;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class SiteNetworktemplateSwitchMgmtTacacsTacplusServersList extends cdktf.ComplexList {
  public internalValue? : SiteNetworktemplateSwitchMgmtTacacsTacplusServers[] | cdktf.IResolvable

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
  public get(index: number): SiteNetworktemplateSwitchMgmtTacacsTacplusServersOutputReference {
    return new SiteNetworktemplateSwitchMgmtTacacsTacplusServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteNetworktemplateSwitchMgmtTacacs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#acct_servers SiteNetworktemplate#acct_servers}
  */
  readonly acctServers?: SiteNetworktemplateSwitchMgmtTacacsAcctServers[] | cdktf.IResolvable;
  /**
  * enum: `admin`, `helpdesk`, `none`, `read`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#default_role SiteNetworktemplate#default_role}
  */
  readonly defaultRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enabled SiteNetworktemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Which network the TACACS server resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#network SiteNetworktemplate#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#tacplus_servers SiteNetworktemplate#tacplus_servers}
  */
  readonly tacplusServers?: SiteNetworktemplateSwitchMgmtTacacsTacplusServers[] | cdktf.IResolvable;
}

export function siteNetworktemplateSwitchMgmtTacacsToTerraform(struct?: SiteNetworktemplateSwitchMgmtTacacs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acct_servers: cdktf.listMapper(siteNetworktemplateSwitchMgmtTacacsAcctServersToTerraform, false)(struct!.acctServers),
    default_role: cdktf.stringToTerraform(struct!.defaultRole),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    network: cdktf.stringToTerraform(struct!.network),
    tacplus_servers: cdktf.listMapper(siteNetworktemplateSwitchMgmtTacacsTacplusServersToTerraform, false)(struct!.tacplusServers),
  }
}


export function siteNetworktemplateSwitchMgmtTacacsToHclTerraform(struct?: SiteNetworktemplateSwitchMgmtTacacs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acct_servers: {
      value: cdktf.listMapperHcl(siteNetworktemplateSwitchMgmtTacacsAcctServersToHclTerraform, false)(struct!.acctServers),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSwitchMgmtTacacsAcctServersList",
    },
    default_role: {
      value: cdktf.stringToHclTerraform(struct!.defaultRole),
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tacplus_servers: {
      value: cdktf.listMapperHcl(siteNetworktemplateSwitchMgmtTacacsTacplusServersToHclTerraform, false)(struct!.tacplusServers),
      isBlock: true,
      type: "list",
      storageClassType: "SiteNetworktemplateSwitchMgmtTacacsTacplusServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMgmtTacacsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSwitchMgmtTacacs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acctServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctServers = this._acctServers?.internalValue;
    }
    if (this._defaultRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRole = this._defaultRole;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._tacplusServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplusServers = this._tacplusServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMgmtTacacs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acctServers.internalValue = undefined;
      this._defaultRole = undefined;
      this._enabled = undefined;
      this._network = undefined;
      this._tacplusServers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acctServers.internalValue = value.acctServers;
      this._defaultRole = value.defaultRole;
      this._enabled = value.enabled;
      this._network = value.network;
      this._tacplusServers.internalValue = value.tacplusServers;
    }
  }

  // acct_servers - computed: false, optional: true, required: false
  private _acctServers = new SiteNetworktemplateSwitchMgmtTacacsAcctServersList(this, "acct_servers", false);
  public get acctServers() {
    return this._acctServers;
  }
  public putAcctServers(value: SiteNetworktemplateSwitchMgmtTacacsAcctServers[] | cdktf.IResolvable) {
    this._acctServers.internalValue = value;
  }
  public resetAcctServers() {
    this._acctServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctServersInput() {
    return this._acctServers.internalValue;
  }

  // default_role - computed: false, optional: true, required: false
  private _defaultRole?: string; 
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }
  public set defaultRole(value: string) {
    this._defaultRole = value;
  }
  public resetDefaultRole() {
    this._defaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // tacplus_servers - computed: false, optional: true, required: false
  private _tacplusServers = new SiteNetworktemplateSwitchMgmtTacacsTacplusServersList(this, "tacplus_servers", false);
  public get tacplusServers() {
    return this._tacplusServers;
  }
  public putTacplusServers(value: SiteNetworktemplateSwitchMgmtTacacsTacplusServers[] | cdktf.IResolvable) {
    this._tacplusServers.internalValue = value;
  }
  public resetTacplusServers() {
    this._tacplusServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusServersInput() {
    return this._tacplusServers.internalValue;
  }
}
export interface SiteNetworktemplateSwitchMgmt {
  /**
  * AP_affinity_threshold ap_affinity_threshold can be added as a field under site/setting. By default, this value is set to 12. If the field is set in both site/setting and org/setting, the value from site/setting will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#ap_affinity_threshold SiteNetworktemplate#ap_affinity_threshold}
  */
  readonly apAffinityThreshold?: number;
  /**
  * Set Banners for switches. Allows markup formatting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#cli_banner SiteNetworktemplate#cli_banner}
  */
  readonly cliBanner?: string;
  /**
  * Sets timeout for switches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#cli_idle_timeout SiteNetworktemplate#cli_idle_timeout}
  */
  readonly cliIdleTimeout?: number;
  /**
  * Rollback timer for commit confirmed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#config_revert_timer SiteNetworktemplate#config_revert_timer}
  */
  readonly configRevertTimer?: number;
  /**
  * Enable to provide the FQDN with DHCP option 81
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#dhcp_option_fqdn SiteNetworktemplate#dhcp_option_fqdn}
  */
  readonly dhcpOptionFqdn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#disable_oob_down_alarm SiteNetworktemplate#disable_oob_down_alarm}
  */
  readonly disableOobDownAlarm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#fips_enabled SiteNetworktemplate#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Property key is the user name. For Local user authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#local_accounts SiteNetworktemplate#local_accounts}
  */
  readonly localAccounts?: { [key: string]: SiteNetworktemplateSwitchMgmtLocalAccounts } | cdktf.IResolvable;
  /**
  * IP Address or FQDN of the Mist Edge used to proxy the switch management traffic to the Mist Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#mxedge_proxy_host SiteNetworktemplate#mxedge_proxy_host}
  */
  readonly mxedgeProxyHost?: string;
  /**
  * Mist Edge port used to proxy the switch management traffic to the Mist Cloud. Value in range 1-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#mxedge_proxy_port SiteNetworktemplate#mxedge_proxy_port}
  */
  readonly mxedgeProxyPort?: string;
  /**
  * Restrict inbound-traffic to host
  * when enabled, all traffic that is not essential to our operation will be dropped 
  * e.g. ntp / dns / traffic to mist will be allowed by default, if dhcpd is enabled, we'll make sure it works
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#protect_re SiteNetworktemplate#protect_re}
  */
  readonly protectRe?: SiteNetworktemplateSwitchMgmtProtectRe;
  /**
  * By default, only the configuration generated by Mist is cleaned up during the configuration process. If `true`, all the existing configuration will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#remove_existing_configs SiteNetworktemplate#remove_existing_configs}
  */
  readonly removeExistingConfigs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#root_password SiteNetworktemplate#root_password}
  */
  readonly rootPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#tacacs SiteNetworktemplate#tacacs}
  */
  readonly tacacs?: SiteNetworktemplateSwitchMgmtTacacs;
  /**
  * To use mxedge as proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#use_mxedge_proxy SiteNetworktemplate#use_mxedge_proxy}
  */
  readonly useMxedgeProxy?: boolean | cdktf.IResolvable;
}

export function siteNetworktemplateSwitchMgmtToTerraform(struct?: SiteNetworktemplateSwitchMgmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_affinity_threshold: cdktf.numberToTerraform(struct!.apAffinityThreshold),
    cli_banner: cdktf.stringToTerraform(struct!.cliBanner),
    cli_idle_timeout: cdktf.numberToTerraform(struct!.cliIdleTimeout),
    config_revert_timer: cdktf.numberToTerraform(struct!.configRevertTimer),
    dhcp_option_fqdn: cdktf.booleanToTerraform(struct!.dhcpOptionFqdn),
    disable_oob_down_alarm: cdktf.booleanToTerraform(struct!.disableOobDownAlarm),
    fips_enabled: cdktf.booleanToTerraform(struct!.fipsEnabled),
    local_accounts: cdktf.hashMapper(siteNetworktemplateSwitchMgmtLocalAccountsToTerraform)(struct!.localAccounts),
    mxedge_proxy_host: cdktf.stringToTerraform(struct!.mxedgeProxyHost),
    mxedge_proxy_port: cdktf.stringToTerraform(struct!.mxedgeProxyPort),
    protect_re: siteNetworktemplateSwitchMgmtProtectReToTerraform(struct!.protectRe),
    remove_existing_configs: cdktf.booleanToTerraform(struct!.removeExistingConfigs),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
    tacacs: siteNetworktemplateSwitchMgmtTacacsToTerraform(struct!.tacacs),
    use_mxedge_proxy: cdktf.booleanToTerraform(struct!.useMxedgeProxy),
  }
}


export function siteNetworktemplateSwitchMgmtToHclTerraform(struct?: SiteNetworktemplateSwitchMgmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_affinity_threshold: {
      value: cdktf.numberToHclTerraform(struct!.apAffinityThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cli_banner: {
      value: cdktf.stringToHclTerraform(struct!.cliBanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.cliIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_revert_timer: {
      value: cdktf.numberToHclTerraform(struct!.configRevertTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp_option_fqdn: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpOptionFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_oob_down_alarm: {
      value: cdktf.booleanToHclTerraform(struct!.disableOobDownAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fips_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fipsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_accounts: {
      value: cdktf.hashMapperHcl(siteNetworktemplateSwitchMgmtLocalAccountsToHclTerraform)(struct!.localAccounts),
      isBlock: true,
      type: "map",
      storageClassType: "SiteNetworktemplateSwitchMgmtLocalAccountsMap",
    },
    mxedge_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.mxedgeProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mxedge_proxy_port: {
      value: cdktf.stringToHclTerraform(struct!.mxedgeProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_re: {
      value: siteNetworktemplateSwitchMgmtProtectReToHclTerraform(struct!.protectRe),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateSwitchMgmtProtectRe",
    },
    remove_existing_configs: {
      value: cdktf.booleanToHclTerraform(struct!.removeExistingConfigs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    root_password: {
      value: cdktf.stringToHclTerraform(struct!.rootPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tacacs: {
      value: siteNetworktemplateSwitchMgmtTacacsToHclTerraform(struct!.tacacs),
      isBlock: true,
      type: "struct",
      storageClassType: "SiteNetworktemplateSwitchMgmtTacacs",
    },
    use_mxedge_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.useMxedgeProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateSwitchMgmtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateSwitchMgmt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apAffinityThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.apAffinityThreshold = this._apAffinityThreshold;
    }
    if (this._cliBanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliBanner = this._cliBanner;
    }
    if (this._cliIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliIdleTimeout = this._cliIdleTimeout;
    }
    if (this._configRevertTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRevertTimer = this._configRevertTimer;
    }
    if (this._dhcpOptionFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptionFqdn = this._dhcpOptionFqdn;
    }
    if (this._disableOobDownAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOobDownAlarm = this._disableOobDownAlarm;
    }
    if (this._fipsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fipsEnabled = this._fipsEnabled;
    }
    if (this._localAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAccounts = this._localAccounts?.internalValue;
    }
    if (this._mxedgeProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxedgeProxyHost = this._mxedgeProxyHost;
    }
    if (this._mxedgeProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxedgeProxyPort = this._mxedgeProxyPort;
    }
    if (this._protectRe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectRe = this._protectRe?.internalValue;
    }
    if (this._removeExistingConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeExistingConfigs = this._removeExistingConfigs;
    }
    if (this._rootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPassword = this._rootPassword;
    }
    if (this._tacacs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacacs = this._tacacs?.internalValue;
    }
    if (this._useMxedgeProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMxedgeProxy = this._useMxedgeProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateSwitchMgmt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apAffinityThreshold = undefined;
      this._cliBanner = undefined;
      this._cliIdleTimeout = undefined;
      this._configRevertTimer = undefined;
      this._dhcpOptionFqdn = undefined;
      this._disableOobDownAlarm = undefined;
      this._fipsEnabled = undefined;
      this._localAccounts.internalValue = undefined;
      this._mxedgeProxyHost = undefined;
      this._mxedgeProxyPort = undefined;
      this._protectRe.internalValue = undefined;
      this._removeExistingConfigs = undefined;
      this._rootPassword = undefined;
      this._tacacs.internalValue = undefined;
      this._useMxedgeProxy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apAffinityThreshold = value.apAffinityThreshold;
      this._cliBanner = value.cliBanner;
      this._cliIdleTimeout = value.cliIdleTimeout;
      this._configRevertTimer = value.configRevertTimer;
      this._dhcpOptionFqdn = value.dhcpOptionFqdn;
      this._disableOobDownAlarm = value.disableOobDownAlarm;
      this._fipsEnabled = value.fipsEnabled;
      this._localAccounts.internalValue = value.localAccounts;
      this._mxedgeProxyHost = value.mxedgeProxyHost;
      this._mxedgeProxyPort = value.mxedgeProxyPort;
      this._protectRe.internalValue = value.protectRe;
      this._removeExistingConfigs = value.removeExistingConfigs;
      this._rootPassword = value.rootPassword;
      this._tacacs.internalValue = value.tacacs;
      this._useMxedgeProxy = value.useMxedgeProxy;
    }
  }

  // ap_affinity_threshold - computed: false, optional: true, required: false
  private _apAffinityThreshold?: number; 
  public get apAffinityThreshold() {
    return this.getNumberAttribute('ap_affinity_threshold');
  }
  public set apAffinityThreshold(value: number) {
    this._apAffinityThreshold = value;
  }
  public resetApAffinityThreshold() {
    this._apAffinityThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apAffinityThresholdInput() {
    return this._apAffinityThreshold;
  }

  // cli_banner - computed: false, optional: true, required: false
  private _cliBanner?: string; 
  public get cliBanner() {
    return this.getStringAttribute('cli_banner');
  }
  public set cliBanner(value: string) {
    this._cliBanner = value;
  }
  public resetCliBanner() {
    this._cliBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliBannerInput() {
    return this._cliBanner;
  }

  // cli_idle_timeout - computed: false, optional: true, required: false
  private _cliIdleTimeout?: number; 
  public get cliIdleTimeout() {
    return this.getNumberAttribute('cli_idle_timeout');
  }
  public set cliIdleTimeout(value: number) {
    this._cliIdleTimeout = value;
  }
  public resetCliIdleTimeout() {
    this._cliIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliIdleTimeoutInput() {
    return this._cliIdleTimeout;
  }

  // config_revert_timer - computed: true, optional: true, required: false
  private _configRevertTimer?: number; 
  public get configRevertTimer() {
    return this.getNumberAttribute('config_revert_timer');
  }
  public set configRevertTimer(value: number) {
    this._configRevertTimer = value;
  }
  public resetConfigRevertTimer() {
    this._configRevertTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRevertTimerInput() {
    return this._configRevertTimer;
  }

  // dhcp_option_fqdn - computed: false, optional: true, required: false
  private _dhcpOptionFqdn?: boolean | cdktf.IResolvable; 
  public get dhcpOptionFqdn() {
    return this.getBooleanAttribute('dhcp_option_fqdn');
  }
  public set dhcpOptionFqdn(value: boolean | cdktf.IResolvable) {
    this._dhcpOptionFqdn = value;
  }
  public resetDhcpOptionFqdn() {
    this._dhcpOptionFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionFqdnInput() {
    return this._dhcpOptionFqdn;
  }

  // disable_oob_down_alarm - computed: false, optional: true, required: false
  private _disableOobDownAlarm?: boolean | cdktf.IResolvable; 
  public get disableOobDownAlarm() {
    return this.getBooleanAttribute('disable_oob_down_alarm');
  }
  public set disableOobDownAlarm(value: boolean | cdktf.IResolvable) {
    this._disableOobDownAlarm = value;
  }
  public resetDisableOobDownAlarm() {
    this._disableOobDownAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOobDownAlarmInput() {
    return this._disableOobDownAlarm;
  }

  // fips_enabled - computed: false, optional: true, required: false
  private _fipsEnabled?: boolean | cdktf.IResolvable; 
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }
  public set fipsEnabled(value: boolean | cdktf.IResolvable) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled;
  }

  // local_accounts - computed: false, optional: true, required: false
  private _localAccounts = new SiteNetworktemplateSwitchMgmtLocalAccountsMap(this, "local_accounts");
  public get localAccounts() {
    return this._localAccounts;
  }
  public putLocalAccounts(value: { [key: string]: SiteNetworktemplateSwitchMgmtLocalAccounts } | cdktf.IResolvable) {
    this._localAccounts.internalValue = value;
  }
  public resetLocalAccounts() {
    this._localAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAccountsInput() {
    return this._localAccounts.internalValue;
  }

  // mxedge_proxy_host - computed: false, optional: true, required: false
  private _mxedgeProxyHost?: string; 
  public get mxedgeProxyHost() {
    return this.getStringAttribute('mxedge_proxy_host');
  }
  public set mxedgeProxyHost(value: string) {
    this._mxedgeProxyHost = value;
  }
  public resetMxedgeProxyHost() {
    this._mxedgeProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxedgeProxyHostInput() {
    return this._mxedgeProxyHost;
  }

  // mxedge_proxy_port - computed: false, optional: true, required: false
  private _mxedgeProxyPort?: string; 
  public get mxedgeProxyPort() {
    return this.getStringAttribute('mxedge_proxy_port');
  }
  public set mxedgeProxyPort(value: string) {
    this._mxedgeProxyPort = value;
  }
  public resetMxedgeProxyPort() {
    this._mxedgeProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxedgeProxyPortInput() {
    return this._mxedgeProxyPort;
  }

  // protect_re - computed: false, optional: true, required: false
  private _protectRe = new SiteNetworktemplateSwitchMgmtProtectReOutputReference(this, "protect_re");
  public get protectRe() {
    return this._protectRe;
  }
  public putProtectRe(value: SiteNetworktemplateSwitchMgmtProtectRe) {
    this._protectRe.internalValue = value;
  }
  public resetProtectRe() {
    this._protectRe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectReInput() {
    return this._protectRe.internalValue;
  }

  // remove_existing_configs - computed: false, optional: true, required: false
  private _removeExistingConfigs?: boolean | cdktf.IResolvable; 
  public get removeExistingConfigs() {
    return this.getBooleanAttribute('remove_existing_configs');
  }
  public set removeExistingConfigs(value: boolean | cdktf.IResolvable) {
    this._removeExistingConfigs = value;
  }
  public resetRemoveExistingConfigs() {
    this._removeExistingConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeExistingConfigsInput() {
    return this._removeExistingConfigs;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // tacacs - computed: false, optional: true, required: false
  private _tacacs = new SiteNetworktemplateSwitchMgmtTacacsOutputReference(this, "tacacs");
  public get tacacs() {
    return this._tacacs;
  }
  public putTacacs(value: SiteNetworktemplateSwitchMgmtTacacs) {
    this._tacacs.internalValue = value;
  }
  public resetTacacs() {
    this._tacacs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsInput() {
    return this._tacacs.internalValue;
  }

  // use_mxedge_proxy - computed: true, optional: true, required: false
  private _useMxedgeProxy?: boolean | cdktf.IResolvable; 
  public get useMxedgeProxy() {
    return this.getBooleanAttribute('use_mxedge_proxy');
  }
  public set useMxedgeProxy(value: boolean | cdktf.IResolvable) {
    this._useMxedgeProxy = value;
  }
  public resetUseMxedgeProxy() {
    this._useMxedgeProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMxedgeProxyInput() {
    return this._useMxedgeProxy;
  }
}
export interface SiteNetworktemplateVrfConfig {
  /**
  * Whether to enable VRF (when supported on the device)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#enabled SiteNetworktemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function siteNetworktemplateVrfConfigToTerraform(struct?: SiteNetworktemplateVrfConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function siteNetworktemplateVrfConfigToHclTerraform(struct?: SiteNetworktemplateVrfConfig | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateVrfConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteNetworktemplateVrfConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateVrfConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface SiteNetworktemplateVrfInstancesExtraRoutes {
  /**
  * Next-hop address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#via SiteNetworktemplate#via}
  */
  readonly via: string;
}

export function siteNetworktemplateVrfInstancesExtraRoutesToTerraform(struct?: SiteNetworktemplateVrfInstancesExtraRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function siteNetworktemplateVrfInstancesExtraRoutesToHclTerraform(struct?: SiteNetworktemplateVrfInstancesExtraRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateVrfInstancesExtraRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateVrfInstancesExtraRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateVrfInstancesExtraRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._via = value.via;
    }
  }

  // via - computed: false, optional: false, required: true
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class SiteNetworktemplateVrfInstancesExtraRoutesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateVrfInstancesExtraRoutes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateVrfInstancesExtraRoutesOutputReference {
    return new SiteNetworktemplateVrfInstancesExtraRoutesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateVrfInstancesExtraRoutes6 {
  /**
  * Next-hop address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#via SiteNetworktemplate#via}
  */
  readonly via?: string;
}

export function siteNetworktemplateVrfInstancesExtraRoutes6ToTerraform(struct?: SiteNetworktemplateVrfInstancesExtraRoutes6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function siteNetworktemplateVrfInstancesExtraRoutes6ToHclTerraform(struct?: SiteNetworktemplateVrfInstancesExtraRoutes6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateVrfInstancesExtraRoutes6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateVrfInstancesExtraRoutes6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateVrfInstancesExtraRoutes6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._via = value.via;
    }
  }

  // via - computed: false, optional: true, required: false
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  public resetVia() {
    this._via = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class SiteNetworktemplateVrfInstancesExtraRoutes6Map extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateVrfInstancesExtraRoutes6 } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateVrfInstancesExtraRoutes6OutputReference {
    return new SiteNetworktemplateVrfInstancesExtraRoutes6OutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SiteNetworktemplateVrfInstances {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#evpn_auto_loopback_subnet SiteNetworktemplate#evpn_auto_loopback_subnet}
  */
  readonly evpnAutoLoopbackSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#evpn_auto_loopback_subnet6 SiteNetworktemplate#evpn_auto_loopback_subnet6}
  */
  readonly evpnAutoLoopbackSubnet6?: string;
  /**
  * Property key is the destination CIDR (e.g. "10.0.0.0/8")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#extra_routes SiteNetworktemplate#extra_routes}
  */
  readonly extraRoutes?: { [key: string]: SiteNetworktemplateVrfInstancesExtraRoutes } | cdktf.IResolvable;
  /**
  * Property key is the destination CIDR (e.g. "2a02:1234:420a:10c9::/64")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#extra_routes6 SiteNetworktemplate#extra_routes6}
  */
  readonly extraRoutes6?: { [key: string]: SiteNetworktemplateVrfInstancesExtraRoutes6 } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#networks SiteNetworktemplate#networks}
  */
  readonly networks?: string[];
}

export function siteNetworktemplateVrfInstancesToTerraform(struct?: SiteNetworktemplateVrfInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evpn_auto_loopback_subnet: cdktf.stringToTerraform(struct!.evpnAutoLoopbackSubnet),
    evpn_auto_loopback_subnet6: cdktf.stringToTerraform(struct!.evpnAutoLoopbackSubnet6),
    extra_routes: cdktf.hashMapper(siteNetworktemplateVrfInstancesExtraRoutesToTerraform)(struct!.extraRoutes),
    extra_routes6: cdktf.hashMapper(siteNetworktemplateVrfInstancesExtraRoutes6ToTerraform)(struct!.extraRoutes6),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
  }
}


export function siteNetworktemplateVrfInstancesToHclTerraform(struct?: SiteNetworktemplateVrfInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evpn_auto_loopback_subnet: {
      value: cdktf.stringToHclTerraform(struct!.evpnAutoLoopbackSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evpn_auto_loopback_subnet6: {
      value: cdktf.stringToHclTerraform(struct!.evpnAutoLoopbackSubnet6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_routes: {
      value: cdktf.hashMapperHcl(siteNetworktemplateVrfInstancesExtraRoutesToHclTerraform)(struct!.extraRoutes),
      isBlock: true,
      type: "map",
      storageClassType: "SiteNetworktemplateVrfInstancesExtraRoutesMap",
    },
    extra_routes6: {
      value: cdktf.hashMapperHcl(siteNetworktemplateVrfInstancesExtraRoutes6ToHclTerraform)(struct!.extraRoutes6),
      isBlock: true,
      type: "map",
      storageClassType: "SiteNetworktemplateVrfInstancesExtraRoutes6Map",
    },
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteNetworktemplateVrfInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SiteNetworktemplateVrfInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evpnAutoLoopbackSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnAutoLoopbackSubnet = this._evpnAutoLoopbackSubnet;
    }
    if (this._evpnAutoLoopbackSubnet6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnAutoLoopbackSubnet6 = this._evpnAutoLoopbackSubnet6;
    }
    if (this._extraRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraRoutes = this._extraRoutes?.internalValue;
    }
    if (this._extraRoutes6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraRoutes6 = this._extraRoutes6?.internalValue;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteNetworktemplateVrfInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evpnAutoLoopbackSubnet = undefined;
      this._evpnAutoLoopbackSubnet6 = undefined;
      this._extraRoutes.internalValue = undefined;
      this._extraRoutes6.internalValue = undefined;
      this._networks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evpnAutoLoopbackSubnet = value.evpnAutoLoopbackSubnet;
      this._evpnAutoLoopbackSubnet6 = value.evpnAutoLoopbackSubnet6;
      this._extraRoutes.internalValue = value.extraRoutes;
      this._extraRoutes6.internalValue = value.extraRoutes6;
      this._networks = value.networks;
    }
  }

  // evpn_auto_loopback_subnet - computed: false, optional: true, required: false
  private _evpnAutoLoopbackSubnet?: string; 
  public get evpnAutoLoopbackSubnet() {
    return this.getStringAttribute('evpn_auto_loopback_subnet');
  }
  public set evpnAutoLoopbackSubnet(value: string) {
    this._evpnAutoLoopbackSubnet = value;
  }
  public resetEvpnAutoLoopbackSubnet() {
    this._evpnAutoLoopbackSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnAutoLoopbackSubnetInput() {
    return this._evpnAutoLoopbackSubnet;
  }

  // evpn_auto_loopback_subnet6 - computed: false, optional: true, required: false
  private _evpnAutoLoopbackSubnet6?: string; 
  public get evpnAutoLoopbackSubnet6() {
    return this.getStringAttribute('evpn_auto_loopback_subnet6');
  }
  public set evpnAutoLoopbackSubnet6(value: string) {
    this._evpnAutoLoopbackSubnet6 = value;
  }
  public resetEvpnAutoLoopbackSubnet6() {
    this._evpnAutoLoopbackSubnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnAutoLoopbackSubnet6Input() {
    return this._evpnAutoLoopbackSubnet6;
  }

  // extra_routes - computed: false, optional: true, required: false
  private _extraRoutes = new SiteNetworktemplateVrfInstancesExtraRoutesMap(this, "extra_routes");
  public get extraRoutes() {
    return this._extraRoutes;
  }
  public putExtraRoutes(value: { [key: string]: SiteNetworktemplateVrfInstancesExtraRoutes } | cdktf.IResolvable) {
    this._extraRoutes.internalValue = value;
  }
  public resetExtraRoutes() {
    this._extraRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraRoutesInput() {
    return this._extraRoutes.internalValue;
  }

  // extra_routes6 - computed: false, optional: true, required: false
  private _extraRoutes6 = new SiteNetworktemplateVrfInstancesExtraRoutes6Map(this, "extra_routes6");
  public get extraRoutes6() {
    return this._extraRoutes6;
  }
  public putExtraRoutes6(value: { [key: string]: SiteNetworktemplateVrfInstancesExtraRoutes6 } | cdktf.IResolvable) {
    this._extraRoutes6.internalValue = value;
  }
  public resetExtraRoutes6() {
    this._extraRoutes6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraRoutes6Input() {
    return this._extraRoutes6.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }
}

export class SiteNetworktemplateVrfInstancesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SiteNetworktemplateVrfInstances } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SiteNetworktemplateVrfInstancesOutputReference {
    return new SiteNetworktemplateVrfInstancesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate mist_site_networktemplate}
*/
export class SiteNetworktemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_site_networktemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteNetworktemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteNetworktemplate to import
  * @param importFromId The id of the existing SiteNetworktemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteNetworktemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_site_networktemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site_networktemplate mist_site_networktemplate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteNetworktemplateConfig
  */
  public constructor(scope: Construct, id: string, config: SiteNetworktemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_site_networktemplate',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclPolicies.internalValue = config.aclPolicies;
    this._aclTags.internalValue = config.aclTags;
    this._additionalConfigCmds = config.additionalConfigCmds;
    this._autoUpgradeLinecard = config.autoUpgradeLinecard;
    this._defaultPortUsage = config.defaultPortUsage;
    this._dhcpSnooping.internalValue = config.dhcpSnooping;
    this._disabledSystemDefinedPortUsages = config.disabledSystemDefinedPortUsages;
    this._dnsServers = config.dnsServers;
    this._dnsSuffix = config.dnsSuffix;
    this._extraRoutes.internalValue = config.extraRoutes;
    this._extraRoutes6.internalValue = config.extraRoutes6;
    this._mistNac.internalValue = config.mistNac;
    this._networks.internalValue = config.networks;
    this._ntpServers = config.ntpServers;
    this._ospfAreas.internalValue = config.ospfAreas;
    this._portMirroring.internalValue = config.portMirroring;
    this._portUsages.internalValue = config.portUsages;
    this._radiusConfig.internalValue = config.radiusConfig;
    this._remoteSyslog.internalValue = config.remoteSyslog;
    this._siteId = config.siteId;
    this._snmpConfig.internalValue = config.snmpConfig;
    this._switchMatching.internalValue = config.switchMatching;
    this._switchMgmt.internalValue = config.switchMgmt;
    this._vrfConfig.internalValue = config.vrfConfig;
    this._vrfInstances.internalValue = config.vrfInstances;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_policies - computed: false, optional: true, required: false
  private _aclPolicies = new SiteNetworktemplateAclPoliciesList(this, "acl_policies", false);
  public get aclPolicies() {
    return this._aclPolicies;
  }
  public putAclPolicies(value: SiteNetworktemplateAclPolicies[] | cdktf.IResolvable) {
    this._aclPolicies.internalValue = value;
  }
  public resetAclPolicies() {
    this._aclPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclPoliciesInput() {
    return this._aclPolicies.internalValue;
  }

  // acl_tags - computed: false, optional: true, required: false
  private _aclTags = new SiteNetworktemplateAclTagsMap(this, "acl_tags");
  public get aclTags() {
    return this._aclTags;
  }
  public putAclTags(value: { [key: string]: SiteNetworktemplateAclTags } | cdktf.IResolvable) {
    this._aclTags.internalValue = value;
  }
  public resetAclTags() {
    this._aclTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclTagsInput() {
    return this._aclTags.internalValue;
  }

  // additional_config_cmds - computed: false, optional: true, required: false
  private _additionalConfigCmds?: string[]; 
  public get additionalConfigCmds() {
    return this.getListAttribute('additional_config_cmds');
  }
  public set additionalConfigCmds(value: string[]) {
    this._additionalConfigCmds = value;
  }
  public resetAdditionalConfigCmds() {
    this._additionalConfigCmds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigCmdsInput() {
    return this._additionalConfigCmds;
  }

  // auto_upgrade_linecard - computed: true, optional: true, required: false
  private _autoUpgradeLinecard?: boolean | cdktf.IResolvable; 
  public get autoUpgradeLinecard() {
    return this.getBooleanAttribute('auto_upgrade_linecard');
  }
  public set autoUpgradeLinecard(value: boolean | cdktf.IResolvable) {
    this._autoUpgradeLinecard = value;
  }
  public resetAutoUpgradeLinecard() {
    this._autoUpgradeLinecard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeLinecardInput() {
    return this._autoUpgradeLinecard;
  }

  // default_port_usage - computed: false, optional: true, required: false
  private _defaultPortUsage?: string; 
  public get defaultPortUsage() {
    return this.getStringAttribute('default_port_usage');
  }
  public set defaultPortUsage(value: string) {
    this._defaultPortUsage = value;
  }
  public resetDefaultPortUsage() {
    this._defaultPortUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortUsageInput() {
    return this._defaultPortUsage;
  }

  // dhcp_snooping - computed: false, optional: true, required: false
  private _dhcpSnooping = new SiteNetworktemplateDhcpSnoopingOutputReference(this, "dhcp_snooping");
  public get dhcpSnooping() {
    return this._dhcpSnooping;
  }
  public putDhcpSnooping(value: SiteNetworktemplateDhcpSnooping) {
    this._dhcpSnooping.internalValue = value;
  }
  public resetDhcpSnooping() {
    this._dhcpSnooping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingInput() {
    return this._dhcpSnooping.internalValue;
  }

  // disabled_system_defined_port_usages - computed: false, optional: true, required: false
  private _disabledSystemDefinedPortUsages?: string[]; 
  public get disabledSystemDefinedPortUsages() {
    return this.getListAttribute('disabled_system_defined_port_usages');
  }
  public set disabledSystemDefinedPortUsages(value: string[]) {
    this._disabledSystemDefinedPortUsages = value;
  }
  public resetDisabledSystemDefinedPortUsages() {
    this._disabledSystemDefinedPortUsages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledSystemDefinedPortUsagesInput() {
    return this._disabledSystemDefinedPortUsages;
  }

  // dns_servers - computed: true, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // dns_suffix - computed: true, optional: true, required: false
  private _dnsSuffix?: string[]; 
  public get dnsSuffix() {
    return this.getListAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string[]) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // extra_routes - computed: false, optional: true, required: false
  private _extraRoutes = new SiteNetworktemplateExtraRoutesMap(this, "extra_routes");
  public get extraRoutes() {
    return this._extraRoutes;
  }
  public putExtraRoutes(value: { [key: string]: SiteNetworktemplateExtraRoutes } | cdktf.IResolvable) {
    this._extraRoutes.internalValue = value;
  }
  public resetExtraRoutes() {
    this._extraRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraRoutesInput() {
    return this._extraRoutes.internalValue;
  }

  // extra_routes6 - computed: false, optional: true, required: false
  private _extraRoutes6 = new SiteNetworktemplateExtraRoutes6Map(this, "extra_routes6");
  public get extraRoutes6() {
    return this._extraRoutes6;
  }
  public putExtraRoutes6(value: { [key: string]: SiteNetworktemplateExtraRoutes6 } | cdktf.IResolvable) {
    this._extraRoutes6.internalValue = value;
  }
  public resetExtraRoutes6() {
    this._extraRoutes6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraRoutes6Input() {
    return this._extraRoutes6.internalValue;
  }

  // mist_nac - computed: false, optional: true, required: false
  private _mistNac = new SiteNetworktemplateMistNacOutputReference(this, "mist_nac");
  public get mistNac() {
    return this._mistNac;
  }
  public putMistNac(value: SiteNetworktemplateMistNac) {
    this._mistNac.internalValue = value;
  }
  public resetMistNac() {
    this._mistNac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mistNacInput() {
    return this._mistNac.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new SiteNetworktemplateNetworksMap(this, "networks");
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: { [key: string]: SiteNetworktemplateNetworks } | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // ntp_servers - computed: true, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // ospf_areas - computed: false, optional: true, required: false
  private _ospfAreas = new SiteNetworktemplateOspfAreasMap(this, "ospf_areas");
  public get ospfAreas() {
    return this._ospfAreas;
  }
  public putOspfAreas(value: { [key: string]: SiteNetworktemplateOspfAreas } | cdktf.IResolvable) {
    this._ospfAreas.internalValue = value;
  }
  public resetOspfAreas() {
    this._ospfAreas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfAreasInput() {
    return this._ospfAreas.internalValue;
  }

  // port_mirroring - computed: false, optional: true, required: false
  private _portMirroring = new SiteNetworktemplatePortMirroringMap(this, "port_mirroring");
  public get portMirroring() {
    return this._portMirroring;
  }
  public putPortMirroring(value: { [key: string]: SiteNetworktemplatePortMirroring } | cdktf.IResolvable) {
    this._portMirroring.internalValue = value;
  }
  public resetPortMirroring() {
    this._portMirroring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMirroringInput() {
    return this._portMirroring.internalValue;
  }

  // port_usages - computed: false, optional: true, required: false
  private _portUsages = new SiteNetworktemplatePortUsagesMap(this, "port_usages");
  public get portUsages() {
    return this._portUsages;
  }
  public putPortUsages(value: { [key: string]: SiteNetworktemplatePortUsages } | cdktf.IResolvable) {
    this._portUsages.internalValue = value;
  }
  public resetPortUsages() {
    this._portUsages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portUsagesInput() {
    return this._portUsages.internalValue;
  }

  // radius_config - computed: false, optional: true, required: false
  private _radiusConfig = new SiteNetworktemplateRadiusConfigOutputReference(this, "radius_config");
  public get radiusConfig() {
    return this._radiusConfig;
  }
  public putRadiusConfig(value: SiteNetworktemplateRadiusConfig) {
    this._radiusConfig.internalValue = value;
  }
  public resetRadiusConfig() {
    this._radiusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusConfigInput() {
    return this._radiusConfig.internalValue;
  }

  // remote_syslog - computed: false, optional: true, required: false
  private _remoteSyslog = new SiteNetworktemplateRemoteSyslogOutputReference(this, "remote_syslog");
  public get remoteSyslog() {
    return this._remoteSyslog;
  }
  public putRemoteSyslog(value: SiteNetworktemplateRemoteSyslog) {
    this._remoteSyslog.internalValue = value;
  }
  public resetRemoteSyslog() {
    this._remoteSyslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSyslogInput() {
    return this._remoteSyslog.internalValue;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // snmp_config - computed: false, optional: true, required: false
  private _snmpConfig = new SiteNetworktemplateSnmpConfigOutputReference(this, "snmp_config");
  public get snmpConfig() {
    return this._snmpConfig;
  }
  public putSnmpConfig(value: SiteNetworktemplateSnmpConfig) {
    this._snmpConfig.internalValue = value;
  }
  public resetSnmpConfig() {
    this._snmpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpConfigInput() {
    return this._snmpConfig.internalValue;
  }

  // switch_matching - computed: false, optional: true, required: false
  private _switchMatching = new SiteNetworktemplateSwitchMatchingOutputReference(this, "switch_matching");
  public get switchMatching() {
    return this._switchMatching;
  }
  public putSwitchMatching(value: SiteNetworktemplateSwitchMatching) {
    this._switchMatching.internalValue = value;
  }
  public resetSwitchMatching() {
    this._switchMatching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchMatchingInput() {
    return this._switchMatching.internalValue;
  }

  // switch_mgmt - computed: false, optional: true, required: false
  private _switchMgmt = new SiteNetworktemplateSwitchMgmtOutputReference(this, "switch_mgmt");
  public get switchMgmt() {
    return this._switchMgmt;
  }
  public putSwitchMgmt(value: SiteNetworktemplateSwitchMgmt) {
    this._switchMgmt.internalValue = value;
  }
  public resetSwitchMgmt() {
    this._switchMgmt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchMgmtInput() {
    return this._switchMgmt.internalValue;
  }

  // vrf_config - computed: false, optional: true, required: false
  private _vrfConfig = new SiteNetworktemplateVrfConfigOutputReference(this, "vrf_config");
  public get vrfConfig() {
    return this._vrfConfig;
  }
  public putVrfConfig(value: SiteNetworktemplateVrfConfig) {
    this._vrfConfig.internalValue = value;
  }
  public resetVrfConfig() {
    this._vrfConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfConfigInput() {
    return this._vrfConfig.internalValue;
  }

  // vrf_instances - computed: false, optional: true, required: false
  private _vrfInstances = new SiteNetworktemplateVrfInstancesMap(this, "vrf_instances");
  public get vrfInstances() {
    return this._vrfInstances;
  }
  public putVrfInstances(value: { [key: string]: SiteNetworktemplateVrfInstances } | cdktf.IResolvable) {
    this._vrfInstances.internalValue = value;
  }
  public resetVrfInstances() {
    this._vrfInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInstancesInput() {
    return this._vrfInstances.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_policies: cdktf.listMapper(siteNetworktemplateAclPoliciesToTerraform, false)(this._aclPolicies.internalValue),
      acl_tags: cdktf.hashMapper(siteNetworktemplateAclTagsToTerraform)(this._aclTags.internalValue),
      additional_config_cmds: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalConfigCmds),
      auto_upgrade_linecard: cdktf.booleanToTerraform(this._autoUpgradeLinecard),
      default_port_usage: cdktf.stringToTerraform(this._defaultPortUsage),
      dhcp_snooping: siteNetworktemplateDhcpSnoopingToTerraform(this._dhcpSnooping.internalValue),
      disabled_system_defined_port_usages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledSystemDefinedPortUsages),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      dns_suffix: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSuffix),
      extra_routes: cdktf.hashMapper(siteNetworktemplateExtraRoutesToTerraform)(this._extraRoutes.internalValue),
      extra_routes6: cdktf.hashMapper(siteNetworktemplateExtraRoutes6ToTerraform)(this._extraRoutes6.internalValue),
      mist_nac: siteNetworktemplateMistNacToTerraform(this._mistNac.internalValue),
      networks: cdktf.hashMapper(siteNetworktemplateNetworksToTerraform)(this._networks.internalValue),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServers),
      ospf_areas: cdktf.hashMapper(siteNetworktemplateOspfAreasToTerraform)(this._ospfAreas.internalValue),
      port_mirroring: cdktf.hashMapper(siteNetworktemplatePortMirroringToTerraform)(this._portMirroring.internalValue),
      port_usages: cdktf.hashMapper(siteNetworktemplatePortUsagesToTerraform)(this._portUsages.internalValue),
      radius_config: siteNetworktemplateRadiusConfigToTerraform(this._radiusConfig.internalValue),
      remote_syslog: siteNetworktemplateRemoteSyslogToTerraform(this._remoteSyslog.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
      snmp_config: siteNetworktemplateSnmpConfigToTerraform(this._snmpConfig.internalValue),
      switch_matching: siteNetworktemplateSwitchMatchingToTerraform(this._switchMatching.internalValue),
      switch_mgmt: siteNetworktemplateSwitchMgmtToTerraform(this._switchMgmt.internalValue),
      vrf_config: siteNetworktemplateVrfConfigToTerraform(this._vrfConfig.internalValue),
      vrf_instances: cdktf.hashMapper(siteNetworktemplateVrfInstancesToTerraform)(this._vrfInstances.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_policies: {
        value: cdktf.listMapperHcl(siteNetworktemplateAclPoliciesToHclTerraform, false)(this._aclPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteNetworktemplateAclPoliciesList",
      },
      acl_tags: {
        value: cdktf.hashMapperHcl(siteNetworktemplateAclTagsToHclTerraform)(this._aclTags.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SiteNetworktemplateAclTagsMap",
      },
      additional_config_cmds: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalConfigCmds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_upgrade_linecard: {
        value: cdktf.booleanToHclTerraform(this._autoUpgradeLinecard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_port_usage: {
        value: cdktf.stringToHclTerraform(this._defaultPortUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snooping: {
        value: siteNetworktemplateDhcpSnoopingToHclTerraform(this._dhcpSnooping.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteNetworktemplateDhcpSnooping",
      },
      disabled_system_defined_port_usages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledSystemDefinedPortUsages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_suffix: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSuffix),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extra_routes: {
        value: cdktf.hashMapperHcl(siteNetworktemplateExtraRoutesToHclTerraform)(this._extraRoutes.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SiteNetworktemplateExtraRoutesMap",
      },
      extra_routes6: {
        value: cdktf.hashMapperHcl(siteNetworktemplateExtraRoutes6ToHclTerraform)(this._extraRoutes6.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SiteNetworktemplateExtraRoutes6Map",
      },
      mist_nac: {
        value: siteNetworktemplateMistNacToHclTerraform(this._mistNac.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteNetworktemplateMistNac",
      },
      networks: {
        value: cdktf.hashMapperHcl(siteNetworktemplateNetworksToHclTerraform)(this._networks.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SiteNetworktemplateNetworksMap",
      },
      ntp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ospf_areas: {
        value: cdktf.hashMapperHcl(siteNetworktemplateOspfAreasToHclTerraform)(this._ospfAreas.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SiteNetworktemplateOspfAreasMap",
      },
      port_mirroring: {
        value: cdktf.hashMapperHcl(siteNetworktemplatePortMirroringToHclTerraform)(this._portMirroring.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SiteNetworktemplatePortMirroringMap",
      },
      port_usages: {
        value: cdktf.hashMapperHcl(siteNetworktemplatePortUsagesToHclTerraform)(this._portUsages.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SiteNetworktemplatePortUsagesMap",
      },
      radius_config: {
        value: siteNetworktemplateRadiusConfigToHclTerraform(this._radiusConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteNetworktemplateRadiusConfig",
      },
      remote_syslog: {
        value: siteNetworktemplateRemoteSyslogToHclTerraform(this._remoteSyslog.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteNetworktemplateRemoteSyslog",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_config: {
        value: siteNetworktemplateSnmpConfigToHclTerraform(this._snmpConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteNetworktemplateSnmpConfig",
      },
      switch_matching: {
        value: siteNetworktemplateSwitchMatchingToHclTerraform(this._switchMatching.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteNetworktemplateSwitchMatching",
      },
      switch_mgmt: {
        value: siteNetworktemplateSwitchMgmtToHclTerraform(this._switchMgmt.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteNetworktemplateSwitchMgmt",
      },
      vrf_config: {
        value: siteNetworktemplateVrfConfigToHclTerraform(this._vrfConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteNetworktemplateVrfConfig",
      },
      vrf_instances: {
        value: cdktf.hashMapperHcl(siteNetworktemplateVrfInstancesToHclTerraform)(this._vrfInstances.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SiteNetworktemplateVrfInstancesMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
