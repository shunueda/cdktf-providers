// https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Resource's IP/CIDR or FQDN/DNS zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#address Resource#address}
  */
  readonly address: string;
  /**
  * Set a DNS alias address for the Resource. Must be a DNS-valid name string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#alias Resource#alias}
  */
  readonly alias?: string;
  /**
  * This will set the approval model for the Resource. The valid values are `AUTOMATIC` and `MANUAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#approval_mode Resource#approval_mode}
  */
  readonly approvalMode?: string;
  /**
  * Set the resource as active or inactive. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#is_active Resource#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Determines whether assignments in the access block will override any existing assignments. Default is `true`. If set to `false`, assignments made outside of Terraform will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#is_authoritative Resource#is_authoritative}
  */
  readonly isAuthoritative?: boolean | cdktf.IResolvable;
  /**
  * Controls whether an "Open in Browser" shortcut will be shown for this Resource in the Twingate Client. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#is_browser_shortcut_enabled Resource#is_browser_shortcut_enabled}
  */
  readonly isBrowserShortcutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Controls whether this Resource will be visible in the main Resource list in the Twingate Client. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#is_visible Resource#is_visible}
  */
  readonly isVisible?: boolean | cdktf.IResolvable;
  /**
  * The name of the Resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#name Resource#name}
  */
  readonly name: string;
  /**
  * Restrict access to certain protocols and ports. By default or when this argument is not defined, there is no restriction, and all protocols and ports are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#protocols Resource#protocols}
  */
  readonly protocols?: ResourceProtocols;
  /**
  * Remote Network ID where the Resource lives
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#remote_network_id Resource#remote_network_id}
  */
  readonly remoteNetworkId: string;
  /**
  * The ID of a `twingate_security_policy` to set as this Resource's Security Policy. Default is `Default Policy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#security_policy_id Resource#security_policy_id}
  */
  readonly securityPolicyId?: string;
  /**
  * A map of key-value pair tags to set on this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#tags Resource#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The usage-based auto-lock duration for the Resource (in days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#usage_based_autolock_duration_days Resource#usage_based_autolock_duration_days}
  */
  readonly usageBasedAutolockDurationDays?: number;
  /**
  * access_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#access_group Resource#access_group}
  */
  readonly accessGroup?: ResourceAccessGroup[] | cdktf.IResolvable;
  /**
  * access_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#access_service Resource#access_service}
  */
  readonly accessService?: ResourceAccessService[] | cdktf.IResolvable;
}
export interface ResourceProtocolsTcp {
  /**
  * Whether to allow or deny all ports, or restrict protocol access within certain port ranges: Can be `RESTRICTED` (only listed ports are allowed), `ALLOW_ALL`, or `DENY_ALL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#policy Resource#policy}
  */
  readonly policy?: string;
  /**
  * List of port ranges between 1 and 65535 inclusive, in the format `100-200` for a range, or `8080` for a single port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#ports Resource#ports}
  */
  readonly ports?: string[];
}

export function resourceProtocolsTcpToTerraform(struct?: ResourceProtocolsTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function resourceProtocolsTcpToHclTerraform(struct?: ResourceProtocolsTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceProtocolsTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceProtocolsTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceProtocolsTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
      this._ports = value.ports;
    }
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface ResourceProtocolsUdp {
  /**
  * Whether to allow or deny all ports, or restrict protocol access within certain port ranges: Can be `RESTRICTED` (only listed ports are allowed), `ALLOW_ALL`, or `DENY_ALL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#policy Resource#policy}
  */
  readonly policy?: string;
  /**
  * List of port ranges between 1 and 65535 inclusive, in the format `100-200` for a range, or `8080` for a single port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#ports Resource#ports}
  */
  readonly ports?: string[];
}

export function resourceProtocolsUdpToTerraform(struct?: ResourceProtocolsUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function resourceProtocolsUdpToHclTerraform(struct?: ResourceProtocolsUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceProtocolsUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceProtocolsUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceProtocolsUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
      this._ports = value.ports;
    }
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface ResourceProtocols {
  /**
  * Whether to allow ICMP (ping) traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#allow_icmp Resource#allow_icmp}
  */
  readonly allowIcmp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#tcp Resource#tcp}
  */
  readonly tcp?: ResourceProtocolsTcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#udp Resource#udp}
  */
  readonly udp?: ResourceProtocolsUdp;
}

export function resourceProtocolsToTerraform(struct?: ResourceProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_icmp: cdktf.booleanToTerraform(struct!.allowIcmp),
    tcp: resourceProtocolsTcpToTerraform(struct!.tcp),
    udp: resourceProtocolsUdpToTerraform(struct!.udp),
  }
}


export function resourceProtocolsToHclTerraform(struct?: ResourceProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_icmp: {
      value: cdktf.booleanToHclTerraform(struct!.allowIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp: {
      value: resourceProtocolsTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceProtocolsTcp",
    },
    udp: {
      value: resourceProtocolsUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceProtocolsUdp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIcmp = this._allowIcmp;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowIcmp = undefined;
      this._tcp.internalValue = undefined;
      this._udp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowIcmp = value.allowIcmp;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
    }
  }

  // allow_icmp - computed: true, optional: true, required: false
  private _allowIcmp?: boolean | cdktf.IResolvable; 
  public get allowIcmp() {
    return this.getBooleanAttribute('allow_icmp');
  }
  public set allowIcmp(value: boolean | cdktf.IResolvable) {
    this._allowIcmp = value;
  }
  public resetAllowIcmp() {
    this._allowIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIcmpInput() {
    return this._allowIcmp;
  }

  // tcp - computed: true, optional: true, required: false
  private _tcp = new ResourceProtocolsTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: ResourceProtocolsTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: true, optional: true, required: false
  private _udp = new ResourceProtocolsUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: ResourceProtocolsUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }
}
export interface ResourceAccessGroup {
  /**
  * This will set the approval model on the edge. The valid values are `AUTOMATIC` and `MANUAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#approval_mode Resource#approval_mode}
  */
  readonly approvalMode?: string;
  /**
  * Group ID that will have permission to access the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#group_id Resource#group_id}
  */
  readonly groupId?: string;
  /**
  * The ID of a `twingate_security_policy` to use as the access policy for the group IDs in the access block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#security_policy_id Resource#security_policy_id}
  */
  readonly securityPolicyId?: string;
  /**
  * The usage-based auto-lock duration configured on the edge (in days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#usage_based_autolock_duration_days Resource#usage_based_autolock_duration_days}
  */
  readonly usageBasedAutolockDurationDays?: number;
}

export function resourceAccessGroupToTerraform(struct?: ResourceAccessGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approval_mode: cdktf.stringToTerraform(struct!.approvalMode),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    security_policy_id: cdktf.stringToTerraform(struct!.securityPolicyId),
    usage_based_autolock_duration_days: cdktf.numberToTerraform(struct!.usageBasedAutolockDurationDays),
  }
}


export function resourceAccessGroupToHclTerraform(struct?: ResourceAccessGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approval_mode: {
      value: cdktf.stringToHclTerraform(struct!.approvalMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.securityPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_based_autolock_duration_days: {
      value: cdktf.numberToHclTerraform(struct!.usageBasedAutolockDurationDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceAccessGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceAccessGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalMode = this._approvalMode;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._securityPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPolicyId = this._securityPolicyId;
    }
    if (this._usageBasedAutolockDurationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageBasedAutolockDurationDays = this._usageBasedAutolockDurationDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAccessGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalMode = undefined;
      this._groupId = undefined;
      this._securityPolicyId = undefined;
      this._usageBasedAutolockDurationDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvalMode = value.approvalMode;
      this._groupId = value.groupId;
      this._securityPolicyId = value.securityPolicyId;
      this._usageBasedAutolockDurationDays = value.usageBasedAutolockDurationDays;
    }
  }

  // approval_mode - computed: true, optional: true, required: false
  private _approvalMode?: string; 
  public get approvalMode() {
    return this.getStringAttribute('approval_mode');
  }
  public set approvalMode(value: string) {
    this._approvalMode = value;
  }
  public resetApprovalMode() {
    this._approvalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalModeInput() {
    return this._approvalMode;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // security_policy_id - computed: true, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // usage_based_autolock_duration_days - computed: true, optional: true, required: false
  private _usageBasedAutolockDurationDays?: number; 
  public get usageBasedAutolockDurationDays() {
    return this.getNumberAttribute('usage_based_autolock_duration_days');
  }
  public set usageBasedAutolockDurationDays(value: number) {
    this._usageBasedAutolockDurationDays = value;
  }
  public resetUsageBasedAutolockDurationDays() {
    this._usageBasedAutolockDurationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageBasedAutolockDurationDaysInput() {
    return this._usageBasedAutolockDurationDays;
  }
}

export class ResourceAccessGroupList extends cdktf.ComplexList {
  public internalValue? : ResourceAccessGroup[] | cdktf.IResolvable

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
  public get(index: number): ResourceAccessGroupOutputReference {
    return new ResourceAccessGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceAccessService {
  /**
  * The ID of the service account that should have access to this Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#service_account_id Resource#service_account_id}
  */
  readonly serviceAccountId?: string;
}

export function resourceAccessServiceToTerraform(struct?: ResourceAccessService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function resourceAccessServiceToHclTerraform(struct?: ResourceAccessService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceAccessServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceAccessService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAccessService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}

export class ResourceAccessServiceList extends cdktf.ComplexList {
  public internalValue? : ResourceAccessService[] | cdktf.IResolvable

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
  public get(index: number): ResourceAccessServiceOutputReference {
    return new ResourceAccessServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource twingate_resource}
*/
export class Resource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Resource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resource to import
  * @param importFromId The id of the existing Resource that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/resource twingate_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'twingate_resource',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._alias = config.alias;
    this._approvalMode = config.approvalMode;
    this._isActive = config.isActive;
    this._isAuthoritative = config.isAuthoritative;
    this._isBrowserShortcutEnabled = config.isBrowserShortcutEnabled;
    this._isVisible = config.isVisible;
    this._name = config.name;
    this._protocols.internalValue = config.protocols;
    this._remoteNetworkId = config.remoteNetworkId;
    this._securityPolicyId = config.securityPolicyId;
    this._tags = config.tags;
    this._usageBasedAutolockDurationDays = config.usageBasedAutolockDurationDays;
    this._accessGroup.internalValue = config.accessGroup;
    this._accessService.internalValue = config.accessService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // approval_mode - computed: true, optional: true, required: false
  private _approvalMode?: string; 
  public get approvalMode() {
    return this.getStringAttribute('approval_mode');
  }
  public set approvalMode(value: string) {
    this._approvalMode = value;
  }
  public resetApprovalMode() {
    this._approvalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalModeInput() {
    return this._approvalMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // is_authoritative - computed: true, optional: true, required: false
  private _isAuthoritative?: boolean | cdktf.IResolvable; 
  public get isAuthoritative() {
    return this.getBooleanAttribute('is_authoritative');
  }
  public set isAuthoritative(value: boolean | cdktf.IResolvable) {
    this._isAuthoritative = value;
  }
  public resetIsAuthoritative() {
    this._isAuthoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthoritativeInput() {
    return this._isAuthoritative;
  }

  // is_browser_shortcut_enabled - computed: true, optional: true, required: false
  private _isBrowserShortcutEnabled?: boolean | cdktf.IResolvable; 
  public get isBrowserShortcutEnabled() {
    return this.getBooleanAttribute('is_browser_shortcut_enabled');
  }
  public set isBrowserShortcutEnabled(value: boolean | cdktf.IResolvable) {
    this._isBrowserShortcutEnabled = value;
  }
  public resetIsBrowserShortcutEnabled() {
    this._isBrowserShortcutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBrowserShortcutEnabledInput() {
    return this._isBrowserShortcutEnabled;
  }

  // is_visible - computed: true, optional: true, required: false
  private _isVisible?: boolean | cdktf.IResolvable; 
  public get isVisible() {
    return this.getBooleanAttribute('is_visible');
  }
  public set isVisible(value: boolean | cdktf.IResolvable) {
    this._isVisible = value;
  }
  public resetIsVisible() {
    this._isVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVisibleInput() {
    return this._isVisible;
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

  // protocols - computed: true, optional: true, required: false
  private _protocols = new ResourceProtocolsOutputReference(this, "protocols");
  public get protocols() {
    return this._protocols;
  }
  public putProtocols(value: ResourceProtocols) {
    this._protocols.internalValue = value;
  }
  public resetProtocols() {
    this._protocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols.internalValue;
  }

  // remote_network_id - computed: false, optional: false, required: true
  private _remoteNetworkId?: string; 
  public get remoteNetworkId() {
    return this.getStringAttribute('remote_network_id');
  }
  public set remoteNetworkId(value: string) {
    this._remoteNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNetworkIdInput() {
    return this._remoteNetworkId;
  }

  // security_policy_id - computed: true, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // usage_based_autolock_duration_days - computed: true, optional: true, required: false
  private _usageBasedAutolockDurationDays?: number; 
  public get usageBasedAutolockDurationDays() {
    return this.getNumberAttribute('usage_based_autolock_duration_days');
  }
  public set usageBasedAutolockDurationDays(value: number) {
    this._usageBasedAutolockDurationDays = value;
  }
  public resetUsageBasedAutolockDurationDays() {
    this._usageBasedAutolockDurationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageBasedAutolockDurationDaysInput() {
    return this._usageBasedAutolockDurationDays;
  }

  // access_group - computed: false, optional: true, required: false
  private _accessGroup = new ResourceAccessGroupList(this, "access_group", true);
  public get accessGroup() {
    return this._accessGroup;
  }
  public putAccessGroup(value: ResourceAccessGroup[] | cdktf.IResolvable) {
    this._accessGroup.internalValue = value;
  }
  public resetAccessGroup() {
    this._accessGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupInput() {
    return this._accessGroup.internalValue;
  }

  // access_service - computed: false, optional: true, required: false
  private _accessService = new ResourceAccessServiceList(this, "access_service", true);
  public get accessService() {
    return this._accessService;
  }
  public putAccessService(value: ResourceAccessService[] | cdktf.IResolvable) {
    this._accessService.internalValue = value;
  }
  public resetAccessService() {
    this._accessService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessServiceInput() {
    return this._accessService.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      alias: cdktf.stringToTerraform(this._alias),
      approval_mode: cdktf.stringToTerraform(this._approvalMode),
      is_active: cdktf.booleanToTerraform(this._isActive),
      is_authoritative: cdktf.booleanToTerraform(this._isAuthoritative),
      is_browser_shortcut_enabled: cdktf.booleanToTerraform(this._isBrowserShortcutEnabled),
      is_visible: cdktf.booleanToTerraform(this._isVisible),
      name: cdktf.stringToTerraform(this._name),
      protocols: resourceProtocolsToTerraform(this._protocols.internalValue),
      remote_network_id: cdktf.stringToTerraform(this._remoteNetworkId),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      usage_based_autolock_duration_days: cdktf.numberToTerraform(this._usageBasedAutolockDurationDays),
      access_group: cdktf.listMapper(resourceAccessGroupToTerraform, true)(this._accessGroup.internalValue),
      access_service: cdktf.listMapper(resourceAccessServiceToTerraform, true)(this._accessService.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_mode: {
        value: cdktf.stringToHclTerraform(this._approvalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_authoritative: {
        value: cdktf.booleanToHclTerraform(this._isAuthoritative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_browser_shortcut_enabled: {
        value: cdktf.booleanToHclTerraform(this._isBrowserShortcutEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_visible: {
        value: cdktf.booleanToHclTerraform(this._isVisible),
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
      protocols: {
        value: resourceProtocolsToHclTerraform(this._protocols.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceProtocols",
      },
      remote_network_id: {
        value: cdktf.stringToHclTerraform(this._remoteNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
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
      usage_based_autolock_duration_days: {
        value: cdktf.numberToHclTerraform(this._usageBasedAutolockDurationDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_group: {
        value: cdktf.listMapperHcl(resourceAccessGroupToHclTerraform, true)(this._accessGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResourceAccessGroupList",
      },
      access_service: {
        value: cdktf.listMapperHcl(resourceAccessServiceToHclTerraform, true)(this._accessService.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResourceAccessServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
