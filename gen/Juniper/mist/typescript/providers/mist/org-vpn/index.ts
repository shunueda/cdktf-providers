// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#name OrgVpn#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#org_id OrgVpn#org_id}
  */
  readonly orgId?: string;
  /**
  * Only if `type`==`hub_spoke`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#path_selection OrgVpn#path_selection}
  */
  readonly pathSelection?: OrgVpnPathSelection;
  /**
  * For `type`==`hub_spoke`, Property key is the VPN name. For `type`==`mesh`, Property key is the Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#paths OrgVpn#paths}
  */
  readonly paths: { [key: string]: OrgVpnPaths } | cdktf.IResolvable;
  /**
  * enum: `hub_spoke`, `mesh`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#type OrgVpn#type}
  */
  readonly type?: string;
}
export interface OrgVpnPathSelection {
  /**
  * enum: `disabled`, `simple`, `manual`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#strategy OrgVpn#strategy}
  */
  readonly strategy?: string;
}

export function orgVpnPathSelectionToTerraform(struct?: OrgVpnPathSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function orgVpnPathSelectionToHclTerraform(struct?: OrgVpnPathSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVpnPathSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgVpnPathSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVpnPathSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._strategy = value.strategy;
    }
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface OrgVpnPathsPeerPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#preference OrgVpn#preference}
  */
  readonly preference?: number;
}

export function orgVpnPathsPeerPathsToTerraform(struct?: OrgVpnPathsPeerPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: cdktf.numberToTerraform(struct!.preference),
  }
}


export function orgVpnPathsPeerPathsToHclTerraform(struct?: OrgVpnPathsPeerPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class OrgVpnPathsPeerPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgVpnPathsPeerPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVpnPathsPeerPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference = value.preference;
    }
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

export class OrgVpnPathsPeerPathsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgVpnPathsPeerPaths } | cdktf.IResolvable

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
  public get(key: string): OrgVpnPathsPeerPathsOutputReference {
    return new OrgVpnPathsPeerPathsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgVpnPathsTrafficShaping {
  /**
  * percentages for different class of traffic: high / medium / low / best-effort adding up to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#class_percentage OrgVpn#class_percentage}
  */
  readonly classPercentage?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#enabled OrgVpn#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#max_tx_kbps OrgVpn#max_tx_kbps}
  */
  readonly maxTxKbps?: number;
}

export function orgVpnPathsTrafficShapingToTerraform(struct?: OrgVpnPathsTrafficShaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_percentage: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.classPercentage),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_tx_kbps: cdktf.numberToTerraform(struct!.maxTxKbps),
  }
}


export function orgVpnPathsTrafficShapingToHclTerraform(struct?: OrgVpnPathsTrafficShaping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_percentage: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.classPercentage),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_tx_kbps: {
      value: cdktf.numberToHclTerraform(struct!.maxTxKbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVpnPathsTrafficShapingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgVpnPathsTrafficShaping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.classPercentage = this._classPercentage;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxTxKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTxKbps = this._maxTxKbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVpnPathsTrafficShaping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classPercentage = undefined;
      this._enabled = undefined;
      this._maxTxKbps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classPercentage = value.classPercentage;
      this._enabled = value.enabled;
      this._maxTxKbps = value.maxTxKbps;
    }
  }

  // class_percentage - computed: false, optional: true, required: false
  private _classPercentage?: number[]; 
  public get classPercentage() {
    return this.getNumberListAttribute('class_percentage');
  }
  public set classPercentage(value: number[]) {
    this._classPercentage = value;
  }
  public resetClassPercentage() {
    this._classPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classPercentageInput() {
    return this._classPercentage;
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

  // max_tx_kbps - computed: false, optional: true, required: false
  private _maxTxKbps?: number; 
  public get maxTxKbps() {
    return this.getNumberAttribute('max_tx_kbps');
  }
  public set maxTxKbps(value: number) {
    this._maxTxKbps = value;
  }
  public resetMaxTxKbps() {
    this._maxTxKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTxKbpsInput() {
    return this._maxTxKbps;
  }
}
export interface OrgVpnPaths {
  /**
  * enum: `broadband`, `lte`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#bfd_profile OrgVpn#bfd_profile}
  */
  readonly bfdProfile?: string;
  /**
  * If `type`==`mesh` and for SSR only, whether to use tunnel mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#bfd_use_tunnel_mode OrgVpn#bfd_use_tunnel_mode}
  */
  readonly bfdUseTunnelMode?: boolean | cdktf.IResolvable;
  /**
  * If different from the wan port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#ip OrgVpn#ip}
  */
  readonly ip?: string;
  /**
  * If `type`==`mesh`, Property key is the Peer Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#peer_paths OrgVpn#peer_paths}
  */
  readonly peerPaths?: { [key: string]: OrgVpnPathsPeerPaths } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#pod OrgVpn#pod}
  */
  readonly pod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#traffic_shaping OrgVpn#traffic_shaping}
  */
  readonly trafficShaping?: OrgVpnPathsTrafficShaping;
}

export function orgVpnPathsToTerraform(struct?: OrgVpnPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_profile: cdktf.stringToTerraform(struct!.bfdProfile),
    bfd_use_tunnel_mode: cdktf.booleanToTerraform(struct!.bfdUseTunnelMode),
    ip: cdktf.stringToTerraform(struct!.ip),
    peer_paths: cdktf.hashMapper(orgVpnPathsPeerPathsToTerraform)(struct!.peerPaths),
    pod: cdktf.numberToTerraform(struct!.pod),
    traffic_shaping: orgVpnPathsTrafficShapingToTerraform(struct!.trafficShaping),
  }
}


export function orgVpnPathsToHclTerraform(struct?: OrgVpnPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_profile: {
      value: cdktf.stringToHclTerraform(struct!.bfdProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_use_tunnel_mode: {
      value: cdktf.booleanToHclTerraform(struct!.bfdUseTunnelMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_paths: {
      value: cdktf.hashMapperHcl(orgVpnPathsPeerPathsToHclTerraform)(struct!.peerPaths),
      isBlock: true,
      type: "map",
      storageClassType: "OrgVpnPathsPeerPathsMap",
    },
    pod: {
      value: cdktf.numberToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_shaping: {
      value: orgVpnPathsTrafficShapingToHclTerraform(struct!.trafficShaping),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgVpnPathsTrafficShaping",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVpnPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgVpnPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdProfile = this._bfdProfile;
    }
    if (this._bfdUseTunnelMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdUseTunnelMode = this._bfdUseTunnelMode;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._peerPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerPaths = this._peerPaths?.internalValue;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._trafficShaping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficShaping = this._trafficShaping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVpnPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfdProfile = undefined;
      this._bfdUseTunnelMode = undefined;
      this._ip = undefined;
      this._peerPaths.internalValue = undefined;
      this._pod = undefined;
      this._trafficShaping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfdProfile = value.bfdProfile;
      this._bfdUseTunnelMode = value.bfdUseTunnelMode;
      this._ip = value.ip;
      this._peerPaths.internalValue = value.peerPaths;
      this._pod = value.pod;
      this._trafficShaping.internalValue = value.trafficShaping;
    }
  }

  // bfd_profile - computed: false, optional: true, required: false
  private _bfdProfile?: string; 
  public get bfdProfile() {
    return this.getStringAttribute('bfd_profile');
  }
  public set bfdProfile(value: string) {
    this._bfdProfile = value;
  }
  public resetBfdProfile() {
    this._bfdProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdProfileInput() {
    return this._bfdProfile;
  }

  // bfd_use_tunnel_mode - computed: false, optional: true, required: false
  private _bfdUseTunnelMode?: boolean | cdktf.IResolvable; 
  public get bfdUseTunnelMode() {
    return this.getBooleanAttribute('bfd_use_tunnel_mode');
  }
  public set bfdUseTunnelMode(value: boolean | cdktf.IResolvable) {
    this._bfdUseTunnelMode = value;
  }
  public resetBfdUseTunnelMode() {
    this._bfdUseTunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdUseTunnelModeInput() {
    return this._bfdUseTunnelMode;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // peer_paths - computed: false, optional: true, required: false
  private _peerPaths = new OrgVpnPathsPeerPathsMap(this, "peer_paths");
  public get peerPaths() {
    return this._peerPaths;
  }
  public putPeerPaths(value: { [key: string]: OrgVpnPathsPeerPaths } | cdktf.IResolvable) {
    this._peerPaths.internalValue = value;
  }
  public resetPeerPaths() {
    this._peerPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPathsInput() {
    return this._peerPaths.internalValue;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: number; 
  public get pod() {
    return this.getNumberAttribute('pod');
  }
  public set pod(value: number) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // traffic_shaping - computed: false, optional: true, required: false
  private _trafficShaping = new OrgVpnPathsTrafficShapingOutputReference(this, "traffic_shaping");
  public get trafficShaping() {
    return this._trafficShaping;
  }
  public putTrafficShaping(value: OrgVpnPathsTrafficShaping) {
    this._trafficShaping.internalValue = value;
  }
  public resetTrafficShaping() {
    this._trafficShaping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShapingInput() {
    return this._trafficShaping.internalValue;
  }
}

export class OrgVpnPathsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgVpnPaths } | cdktf.IResolvable

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
  public get(key: string): OrgVpnPathsOutputReference {
    return new OrgVpnPathsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn mist_org_vpn}
*/
export class OrgVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgVpn to import
  * @param importFromId The id of the existing OrgVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_vpn mist_org_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgVpnConfig
  */
  public constructor(scope: Construct, id: string, config: OrgVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_vpn',
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
    this._name = config.name;
    this._orgId = config.orgId;
    this._pathSelection.internalValue = config.pathSelection;
    this._paths.internalValue = config.paths;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // path_selection - computed: false, optional: true, required: false
  private _pathSelection = new OrgVpnPathSelectionOutputReference(this, "path_selection");
  public get pathSelection() {
    return this._pathSelection;
  }
  public putPathSelection(value: OrgVpnPathSelection) {
    this._pathSelection.internalValue = value;
  }
  public resetPathSelection() {
    this._pathSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathSelectionInput() {
    return this._pathSelection.internalValue;
  }

  // paths - computed: false, optional: false, required: true
  private _paths = new OrgVpnPathsMap(this, "paths");
  public get paths() {
    return this._paths;
  }
  public putPaths(value: { [key: string]: OrgVpnPaths } | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      path_selection: orgVpnPathSelectionToTerraform(this._pathSelection.internalValue),
      paths: cdktf.hashMapper(orgVpnPathsToTerraform)(this._paths.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_selection: {
        value: orgVpnPathSelectionToHclTerraform(this._pathSelection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgVpnPathSelection",
      },
      paths: {
        value: cdktf.hashMapperHcl(orgVpnPathsToHclTerraform)(this._paths.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgVpnPathsMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
