// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#device Zone#device}
  */
  readonly device?: string;
  /**
  * Device acl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#device_acl Zone#device_acl}
  */
  readonly deviceAcl?: ZoneDeviceAcl;
  /**
  * Dos log setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#dos_log_setting Zone#dos_log_setting}
  */
  readonly dosLogSetting?: string;
  /**
  * Dos profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#dos_profile Zone#dos_profile}
  */
  readonly dosProfile?: string;
  /**
  * Enable device identification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#enable_device_identification Zone#enable_device_identification}
  */
  readonly enableDeviceIdentification?: boolean | cdktf.IResolvable;
  /**
  * Enable user identification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#enable_user_identification Zone#enable_user_identification}
  */
  readonly enableUserIdentification?: boolean | cdktf.IResolvable;
  /**
  * Folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#folder Zone#folder}
  */
  readonly folder?: string;
  /**
  * Alphanumeric string begin with letter: [0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#name Zone#name}
  */
  readonly name: string;
  /**
  * Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#network Zone#network}
  */
  readonly network?: ZoneNetwork;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#snippet Zone#snippet}
  */
  readonly snippet?: string;
  /**
  * User acl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#user_acl Zone#user_acl}
  */
  readonly userAcl?: ZoneUserAcl;
}
export interface ZoneDeviceAcl {
  /**
  * Exclude list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#exclude_list Zone#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * Include list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#include_list Zone#include_list}
  */
  readonly includeList?: string[];
}

export function zoneDeviceAclToTerraform(struct?: ZoneDeviceAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeList),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
  }
}


export function zoneDeviceAclToHclTerraform(struct?: ZoneDeviceAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneDeviceAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneDeviceAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList;
    }
    if (this._includeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeList = this._includeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneDeviceAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeList = undefined;
      this._includeList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeList = value.excludeList;
      this._includeList = value.includeList;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList?: string[]; 
  public get excludeList() {
    return this.getListAttribute('exclude_list');
  }
  public set excludeList(value: string[]) {
    this._excludeList = value;
  }
  public resetExcludeList() {
    this._excludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return this.getListAttribute('include_list');
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
  }
}
export interface ZoneNetworkTunnel {
}

export function zoneNetworkTunnelToTerraform(struct?: ZoneNetworkTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zoneNetworkTunnelToHclTerraform(struct?: ZoneNetworkTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZoneNetworkTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneNetworkTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneNetworkTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZoneNetwork {
  /**
  * Enable packet buffer protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#enable_packet_buffer_protection Zone#enable_packet_buffer_protection}
  */
  readonly enablePacketBufferProtection?: boolean | cdktf.IResolvable;
  /**
  * External
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#external Zone#external}
  */
  readonly external?: string[];
  /**
  * Layer2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#layer2 Zone#layer2}
  */
  readonly layer2?: string[];
  /**
  * Layer3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#layer3 Zone#layer3}
  */
  readonly layer3?: string[];
  /**
  * Log setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#log_setting Zone#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Tap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#tap Zone#tap}
  */
  readonly tap?: string[];
  /**
  * Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#tunnel Zone#tunnel}
  */
  readonly tunnel?: ZoneNetworkTunnel;
  /**
  * Virtual wire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#virtual_wire Zone#virtual_wire}
  */
  readonly virtualWire?: string[];
  /**
  * Zone protection profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#zone_protection_profile Zone#zone_protection_profile}
  */
  readonly zoneProtectionProfile?: string;
}

export function zoneNetworkToTerraform(struct?: ZoneNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_packet_buffer_protection: cdktf.booleanToTerraform(struct!.enablePacketBufferProtection),
    external: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.external),
    layer2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.layer2),
    layer3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.layer3),
    log_setting: cdktf.stringToTerraform(struct!.logSetting),
    tap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tap),
    tunnel: zoneNetworkTunnelToTerraform(struct!.tunnel),
    virtual_wire: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virtualWire),
    zone_protection_profile: cdktf.stringToTerraform(struct!.zoneProtectionProfile),
  }
}


export function zoneNetworkToHclTerraform(struct?: ZoneNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_packet_buffer_protection: {
      value: cdktf.booleanToHclTerraform(struct!.enablePacketBufferProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.external),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    layer2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.layer2),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    layer3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.layer3),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_setting: {
      value: cdktf.stringToHclTerraform(struct!.logSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tap),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tunnel: {
      value: zoneNetworkTunnelToHclTerraform(struct!.tunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "ZoneNetworkTunnel",
    },
    virtual_wire: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virtualWire),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    zone_protection_profile: {
      value: cdktf.stringToHclTerraform(struct!.zoneProtectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePacketBufferProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePacketBufferProtection = this._enablePacketBufferProtection;
    }
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._layer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer2 = this._layer2;
    }
    if (this._layer3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer3 = this._layer3;
    }
    if (this._logSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetting = this._logSetting;
    }
    if (this._tap !== undefined) {
      hasAnyValues = true;
      internalValueResult.tap = this._tap;
    }
    if (this._tunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel?.internalValue;
    }
    if (this._virtualWire !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualWire = this._virtualWire;
    }
    if (this._zoneProtectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneProtectionProfile = this._zoneProtectionProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePacketBufferProtection = undefined;
      this._external = undefined;
      this._layer2 = undefined;
      this._layer3 = undefined;
      this._logSetting = undefined;
      this._tap = undefined;
      this._tunnel.internalValue = undefined;
      this._virtualWire = undefined;
      this._zoneProtectionProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePacketBufferProtection = value.enablePacketBufferProtection;
      this._external = value.external;
      this._layer2 = value.layer2;
      this._layer3 = value.layer3;
      this._logSetting = value.logSetting;
      this._tap = value.tap;
      this._tunnel.internalValue = value.tunnel;
      this._virtualWire = value.virtualWire;
      this._zoneProtectionProfile = value.zoneProtectionProfile;
    }
  }

  // enable_packet_buffer_protection - computed: false, optional: true, required: false
  private _enablePacketBufferProtection?: boolean | cdktf.IResolvable; 
  public get enablePacketBufferProtection() {
    return this.getBooleanAttribute('enable_packet_buffer_protection');
  }
  public set enablePacketBufferProtection(value: boolean | cdktf.IResolvable) {
    this._enablePacketBufferProtection = value;
  }
  public resetEnablePacketBufferProtection() {
    this._enablePacketBufferProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePacketBufferProtectionInput() {
    return this._enablePacketBufferProtection;
  }

  // external - computed: false, optional: true, required: false
  private _external?: string[]; 
  public get external() {
    return this.getListAttribute('external');
  }
  public set external(value: string[]) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // layer2 - computed: false, optional: true, required: false
  private _layer2?: string[]; 
  public get layer2() {
    return this.getListAttribute('layer2');
  }
  public set layer2(value: string[]) {
    this._layer2 = value;
  }
  public resetLayer2() {
    this._layer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2Input() {
    return this._layer2;
  }

  // layer3 - computed: false, optional: true, required: false
  private _layer3?: string[]; 
  public get layer3() {
    return this.getListAttribute('layer3');
  }
  public set layer3(value: string[]) {
    this._layer3 = value;
  }
  public resetLayer3() {
    this._layer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer3Input() {
    return this._layer3;
  }

  // log_setting - computed: false, optional: true, required: false
  private _logSetting?: string; 
  public get logSetting() {
    return this.getStringAttribute('log_setting');
  }
  public set logSetting(value: string) {
    this._logSetting = value;
  }
  public resetLogSetting() {
    this._logSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingInput() {
    return this._logSetting;
  }

  // tap - computed: false, optional: true, required: false
  private _tap?: string[]; 
  public get tap() {
    return this.getListAttribute('tap');
  }
  public set tap(value: string[]) {
    this._tap = value;
  }
  public resetTap() {
    this._tap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tapInput() {
    return this._tap;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel = new ZoneNetworkTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: ZoneNetworkTunnel) {
    this._tunnel.internalValue = value;
  }
  public resetTunnel() {
    this._tunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }

  // virtual_wire - computed: false, optional: true, required: false
  private _virtualWire?: string[]; 
  public get virtualWire() {
    return this.getListAttribute('virtual_wire');
  }
  public set virtualWire(value: string[]) {
    this._virtualWire = value;
  }
  public resetVirtualWire() {
    this._virtualWire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWireInput() {
    return this._virtualWire;
  }

  // zone_protection_profile - computed: false, optional: true, required: false
  private _zoneProtectionProfile?: string; 
  public get zoneProtectionProfile() {
    return this.getStringAttribute('zone_protection_profile');
  }
  public set zoneProtectionProfile(value: string) {
    this._zoneProtectionProfile = value;
  }
  public resetZoneProtectionProfile() {
    this._zoneProtectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneProtectionProfileInput() {
    return this._zoneProtectionProfile;
  }
}
export interface ZoneUserAcl {
  /**
  * Exclude list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#exclude_list Zone#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * Include list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#include_list Zone#include_list}
  */
  readonly includeList?: string[];
}

export function zoneUserAclToTerraform(struct?: ZoneUserAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeList),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
  }
}


export function zoneUserAclToHclTerraform(struct?: ZoneUserAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneUserAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZoneUserAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList;
    }
    if (this._includeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeList = this._includeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneUserAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeList = undefined;
      this._includeList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeList = value.excludeList;
      this._includeList = value.includeList;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList?: string[]; 
  public get excludeList() {
    return this.getListAttribute('exclude_list');
  }
  public set excludeList(value: string[]) {
    this._excludeList = value;
  }
  public resetExcludeList() {
    this._excludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return this.getListAttribute('include_list');
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone scm_zone}
*/
export class Zone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Zone to import
  * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Zone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/zone scm_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_zone',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._deviceAcl.internalValue = config.deviceAcl;
    this._dosLogSetting = config.dosLogSetting;
    this._dosProfile = config.dosProfile;
    this._enableDeviceIdentification = config.enableDeviceIdentification;
    this._enableUserIdentification = config.enableUserIdentification;
    this._folder = config.folder;
    this._name = config.name;
    this._network.internalValue = config.network;
    this._snippet = config.snippet;
    this._userAcl.internalValue = config.userAcl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // device_acl - computed: false, optional: true, required: false
  private _deviceAcl = new ZoneDeviceAclOutputReference(this, "device_acl");
  public get deviceAcl() {
    return this._deviceAcl;
  }
  public putDeviceAcl(value: ZoneDeviceAcl) {
    this._deviceAcl.internalValue = value;
  }
  public resetDeviceAcl() {
    this._deviceAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAclInput() {
    return this._deviceAcl.internalValue;
  }

  // dos_log_setting - computed: false, optional: true, required: false
  private _dosLogSetting?: string; 
  public get dosLogSetting() {
    return this.getStringAttribute('dos_log_setting');
  }
  public set dosLogSetting(value: string) {
    this._dosLogSetting = value;
  }
  public resetDosLogSetting() {
    this._dosLogSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosLogSettingInput() {
    return this._dosLogSetting;
  }

  // dos_profile - computed: false, optional: true, required: false
  private _dosProfile?: string; 
  public get dosProfile() {
    return this.getStringAttribute('dos_profile');
  }
  public set dosProfile(value: string) {
    this._dosProfile = value;
  }
  public resetDosProfile() {
    this._dosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosProfileInput() {
    return this._dosProfile;
  }

  // enable_device_identification - computed: false, optional: true, required: false
  private _enableDeviceIdentification?: boolean | cdktf.IResolvable; 
  public get enableDeviceIdentification() {
    return this.getBooleanAttribute('enable_device_identification');
  }
  public set enableDeviceIdentification(value: boolean | cdktf.IResolvable) {
    this._enableDeviceIdentification = value;
  }
  public resetEnableDeviceIdentification() {
    this._enableDeviceIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeviceIdentificationInput() {
    return this._enableDeviceIdentification;
  }

  // enable_user_identification - computed: false, optional: true, required: false
  private _enableUserIdentification?: boolean | cdktf.IResolvable; 
  public get enableUserIdentification() {
    return this.getBooleanAttribute('enable_user_identification');
  }
  public set enableUserIdentification(value: boolean | cdktf.IResolvable) {
    this._enableUserIdentification = value;
  }
  public resetEnableUserIdentification() {
    this._enableUserIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserIdentificationInput() {
    return this._enableUserIdentification;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

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

  // network - computed: false, optional: true, required: false
  private _network = new ZoneNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ZoneNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // user_acl - computed: false, optional: true, required: false
  private _userAcl = new ZoneUserAclOutputReference(this, "user_acl");
  public get userAcl() {
    return this._userAcl;
  }
  public putUserAcl(value: ZoneUserAcl) {
    this._userAcl.internalValue = value;
  }
  public resetUserAcl() {
    this._userAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAclInput() {
    return this._userAcl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      device_acl: zoneDeviceAclToTerraform(this._deviceAcl.internalValue),
      dos_log_setting: cdktf.stringToTerraform(this._dosLogSetting),
      dos_profile: cdktf.stringToTerraform(this._dosProfile),
      enable_device_identification: cdktf.booleanToTerraform(this._enableDeviceIdentification),
      enable_user_identification: cdktf.booleanToTerraform(this._enableUserIdentification),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      network: zoneNetworkToTerraform(this._network.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
      user_acl: zoneUserAclToTerraform(this._userAcl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_acl: {
        value: zoneDeviceAclToHclTerraform(this._deviceAcl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneDeviceAcl",
      },
      dos_log_setting: {
        value: cdktf.stringToHclTerraform(this._dosLogSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dos_profile: {
        value: cdktf.stringToHclTerraform(this._dosProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_device_identification: {
        value: cdktf.booleanToHclTerraform(this._enableDeviceIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_user_identification: {
        value: cdktf.booleanToHclTerraform(this._enableUserIdentification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      network: {
        value: zoneNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneNetwork",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_acl: {
        value: zoneUserAclToHclTerraform(this._userAcl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZoneUserAcl",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
