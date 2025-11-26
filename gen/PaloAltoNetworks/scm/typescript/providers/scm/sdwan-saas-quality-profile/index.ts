// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdwanSaasQualityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#device SdwanSaasQualityProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#folder SdwanSaasQualityProfile#folder}
  */
  readonly folder?: string;
  /**
  * Monitor mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#monitor_mode SdwanSaasQualityProfile#monitor_mode}
  */
  readonly monitorMode: SdwanSaasQualityProfileMonitorMode;
  /**
  * Profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#name SdwanSaasQualityProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#snippet SdwanSaasQualityProfile#snippet}
  */
  readonly snippet?: string;
}
export interface SdwanSaasQualityProfileMonitorModeAdaptive {
}

export function sdwanSaasQualityProfileMonitorModeAdaptiveToTerraform(struct?: SdwanSaasQualityProfileMonitorModeAdaptive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdwanSaasQualityProfileMonitorModeAdaptiveToHclTerraform(struct?: SdwanSaasQualityProfileMonitorModeAdaptive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdwanSaasQualityProfileMonitorModeAdaptiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdwanSaasQualityProfileMonitorModeAdaptive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanSaasQualityProfileMonitorModeAdaptive | cdktf.IResolvable | undefined) {
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
export interface SdwanSaasQualityProfileMonitorModeHttpHttps {
  /**
  * Monitored URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#monitored_url SdwanSaasQualityProfile#monitored_url}
  */
  readonly monitoredUrl: string;
  /**
  * Probe interval (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#probe_interval SdwanSaasQualityProfile#probe_interval}
  */
  readonly probeInterval: number;
}

export function sdwanSaasQualityProfileMonitorModeHttpHttpsToTerraform(struct?: SdwanSaasQualityProfileMonitorModeHttpHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitored_url: cdktf.stringToTerraform(struct!.monitoredUrl),
    probe_interval: cdktf.numberToTerraform(struct!.probeInterval),
  }
}


export function sdwanSaasQualityProfileMonitorModeHttpHttpsToHclTerraform(struct?: SdwanSaasQualityProfileMonitorModeHttpHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitored_url: {
      value: cdktf.stringToHclTerraform(struct!.monitoredUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_interval: {
      value: cdktf.numberToHclTerraform(struct!.probeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdwanSaasQualityProfileMonitorModeHttpHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdwanSaasQualityProfileMonitorModeHttpHttps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitoredUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredUrl = this._monitoredUrl;
    }
    if (this._probeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeInterval = this._probeInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanSaasQualityProfileMonitorModeHttpHttps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitoredUrl = undefined;
      this._probeInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitoredUrl = value.monitoredUrl;
      this._probeInterval = value.probeInterval;
    }
  }

  // monitored_url - computed: false, optional: false, required: true
  private _monitoredUrl?: string; 
  public get monitoredUrl() {
    return this.getStringAttribute('monitored_url');
  }
  public set monitoredUrl(value: string) {
    this._monitoredUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredUrlInput() {
    return this._monitoredUrl;
  }

  // probe_interval - computed: false, optional: false, required: true
  private _probeInterval?: number; 
  public get probeInterval() {
    return this.getNumberAttribute('probe_interval');
  }
  public set probeInterval(value: number) {
    this._probeInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIntervalInput() {
    return this._probeInterval;
  }
}
export interface SdwanSaasQualityProfileMonitorModeStaticIpFqdn {
  /**
  * FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#fqdn_name SdwanSaasQualityProfile#fqdn_name}
  */
  readonly fqdnName: string;
  /**
  * Probe interval (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#probe_interval SdwanSaasQualityProfile#probe_interval}
  */
  readonly probeInterval: number;
}

export function sdwanSaasQualityProfileMonitorModeStaticIpFqdnToTerraform(struct?: SdwanSaasQualityProfileMonitorModeStaticIpFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn_name: cdktf.stringToTerraform(struct!.fqdnName),
    probe_interval: cdktf.numberToTerraform(struct!.probeInterval),
  }
}


export function sdwanSaasQualityProfileMonitorModeStaticIpFqdnToHclTerraform(struct?: SdwanSaasQualityProfileMonitorModeStaticIpFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn_name: {
      value: cdktf.stringToHclTerraform(struct!.fqdnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_interval: {
      value: cdktf.numberToHclTerraform(struct!.probeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdwanSaasQualityProfileMonitorModeStaticIpFqdnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdwanSaasQualityProfileMonitorModeStaticIpFqdn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnName = this._fqdnName;
    }
    if (this._probeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeInterval = this._probeInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanSaasQualityProfileMonitorModeStaticIpFqdn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdnName = undefined;
      this._probeInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdnName = value.fqdnName;
      this._probeInterval = value.probeInterval;
    }
  }

  // fqdn_name - computed: false, optional: false, required: true
  private _fqdnName?: string; 
  public get fqdnName() {
    return this.getStringAttribute('fqdn_name');
  }
  public set fqdnName(value: string) {
    this._fqdnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNameInput() {
    return this._fqdnName;
  }

  // probe_interval - computed: false, optional: false, required: true
  private _probeInterval?: number; 
  public get probeInterval() {
    return this.getNumberAttribute('probe_interval');
  }
  public set probeInterval(value: number) {
    this._probeInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIntervalInput() {
    return this._probeInterval;
  }
}
export interface SdwanSaasQualityProfileMonitorModeStaticIpIpAddress {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#name SdwanSaasQualityProfile#name}
  */
  readonly name: string;
  /**
  * Probe interval (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#probe_interval SdwanSaasQualityProfile#probe_interval}
  */
  readonly probeInterval: number;
}

export function sdwanSaasQualityProfileMonitorModeStaticIpIpAddressToTerraform(struct?: SdwanSaasQualityProfileMonitorModeStaticIpIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    probe_interval: cdktf.numberToTerraform(struct!.probeInterval),
  }
}


export function sdwanSaasQualityProfileMonitorModeStaticIpIpAddressToHclTerraform(struct?: SdwanSaasQualityProfileMonitorModeStaticIpIpAddress | cdktf.IResolvable): any {
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
    probe_interval: {
      value: cdktf.numberToHclTerraform(struct!.probeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdwanSaasQualityProfileMonitorModeStaticIpIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdwanSaasQualityProfileMonitorModeStaticIpIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._probeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeInterval = this._probeInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanSaasQualityProfileMonitorModeStaticIpIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._probeInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._probeInterval = value.probeInterval;
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

  // probe_interval - computed: false, optional: false, required: true
  private _probeInterval?: number; 
  public get probeInterval() {
    return this.getNumberAttribute('probe_interval');
  }
  public set probeInterval(value: number) {
    this._probeInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIntervalInput() {
    return this._probeInterval;
  }
}

export class SdwanSaasQualityProfileMonitorModeStaticIpIpAddressList extends cdktf.ComplexList {
  public internalValue? : SdwanSaasQualityProfileMonitorModeStaticIpIpAddress[] | cdktf.IResolvable

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
  public get(index: number): SdwanSaasQualityProfileMonitorModeStaticIpIpAddressOutputReference {
    return new SdwanSaasQualityProfileMonitorModeStaticIpIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdwanSaasQualityProfileMonitorModeStaticIp {
  /**
  * Fqdn
  * 
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#fqdn SdwanSaasQualityProfile#fqdn}
  */
  readonly fqdn?: SdwanSaasQualityProfileMonitorModeStaticIpFqdn;
  /**
  * List of IP addresses
  * 
  * > ℹ️ **Note:** You must specify exactly one of `fqdn` and `ip_address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#ip_address SdwanSaasQualityProfile#ip_address}
  */
  readonly ipAddress?: SdwanSaasQualityProfileMonitorModeStaticIpIpAddress[] | cdktf.IResolvable;
}

export function sdwanSaasQualityProfileMonitorModeStaticIpToTerraform(struct?: SdwanSaasQualityProfileMonitorModeStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: sdwanSaasQualityProfileMonitorModeStaticIpFqdnToTerraform(struct!.fqdn),
    ip_address: cdktf.listMapper(sdwanSaasQualityProfileMonitorModeStaticIpIpAddressToTerraform, false)(struct!.ipAddress),
  }
}


export function sdwanSaasQualityProfileMonitorModeStaticIpToHclTerraform(struct?: SdwanSaasQualityProfileMonitorModeStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: sdwanSaasQualityProfileMonitorModeStaticIpFqdnToHclTerraform(struct!.fqdn),
      isBlock: true,
      type: "struct",
      storageClassType: "SdwanSaasQualityProfileMonitorModeStaticIpFqdn",
    },
    ip_address: {
      value: cdktf.listMapperHcl(sdwanSaasQualityProfileMonitorModeStaticIpIpAddressToHclTerraform, false)(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "SdwanSaasQualityProfileMonitorModeStaticIpIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdwanSaasQualityProfileMonitorModeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdwanSaasQualityProfileMonitorModeStaticIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanSaasQualityProfileMonitorModeStaticIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = value.fqdn;
      this._ipAddress.internalValue = value.ipAddress;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new SdwanSaasQualityProfileMonitorModeStaticIpFqdnOutputReference(this, "fqdn");
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: SdwanSaasQualityProfileMonitorModeStaticIpFqdn) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new SdwanSaasQualityProfileMonitorModeStaticIpIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: SdwanSaasQualityProfileMonitorModeStaticIpIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}
export interface SdwanSaasQualityProfileMonitorMode {
  /**
  * Adaptive
  * 
  * > ℹ️ **Note:** You must specify exactly one of `adaptive`, `http_https`, and `static_ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#adaptive SdwanSaasQualityProfile#adaptive}
  */
  readonly adaptive?: SdwanSaasQualityProfileMonitorModeAdaptive;
  /**
  * Http https
  * 
  * > ℹ️ **Note:** You must specify exactly one of `adaptive`, `http_https`, and `static_ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#http_https SdwanSaasQualityProfile#http_https}
  */
  readonly httpHttps?: SdwanSaasQualityProfileMonitorModeHttpHttps;
  /**
  * Static ip
  * 
  * > ℹ️ **Note:** You must specify exactly one of `adaptive`, `http_https`, and `static_ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#static_ip SdwanSaasQualityProfile#static_ip}
  */
  readonly staticIp?: SdwanSaasQualityProfileMonitorModeStaticIp;
}

export function sdwanSaasQualityProfileMonitorModeToTerraform(struct?: SdwanSaasQualityProfileMonitorMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive: sdwanSaasQualityProfileMonitorModeAdaptiveToTerraform(struct!.adaptive),
    http_https: sdwanSaasQualityProfileMonitorModeHttpHttpsToTerraform(struct!.httpHttps),
    static_ip: sdwanSaasQualityProfileMonitorModeStaticIpToTerraform(struct!.staticIp),
  }
}


export function sdwanSaasQualityProfileMonitorModeToHclTerraform(struct?: SdwanSaasQualityProfileMonitorMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive: {
      value: sdwanSaasQualityProfileMonitorModeAdaptiveToHclTerraform(struct!.adaptive),
      isBlock: true,
      type: "struct",
      storageClassType: "SdwanSaasQualityProfileMonitorModeAdaptive",
    },
    http_https: {
      value: sdwanSaasQualityProfileMonitorModeHttpHttpsToHclTerraform(struct!.httpHttps),
      isBlock: true,
      type: "struct",
      storageClassType: "SdwanSaasQualityProfileMonitorModeHttpHttps",
    },
    static_ip: {
      value: sdwanSaasQualityProfileMonitorModeStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "struct",
      storageClassType: "SdwanSaasQualityProfileMonitorModeStaticIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdwanSaasQualityProfileMonitorModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdwanSaasQualityProfileMonitorMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptive = this._adaptive?.internalValue;
    }
    if (this._httpHttps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHttps = this._httpHttps?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanSaasQualityProfileMonitorMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adaptive.internalValue = undefined;
      this._httpHttps.internalValue = undefined;
      this._staticIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adaptive.internalValue = value.adaptive;
      this._httpHttps.internalValue = value.httpHttps;
      this._staticIp.internalValue = value.staticIp;
    }
  }

  // adaptive - computed: false, optional: true, required: false
  private _adaptive = new SdwanSaasQualityProfileMonitorModeAdaptiveOutputReference(this, "adaptive");
  public get adaptive() {
    return this._adaptive;
  }
  public putAdaptive(value: SdwanSaasQualityProfileMonitorModeAdaptive) {
    this._adaptive.internalValue = value;
  }
  public resetAdaptive() {
    this._adaptive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveInput() {
    return this._adaptive.internalValue;
  }

  // http_https - computed: false, optional: true, required: false
  private _httpHttps = new SdwanSaasQualityProfileMonitorModeHttpHttpsOutputReference(this, "http_https");
  public get httpHttps() {
    return this._httpHttps;
  }
  public putHttpHttps(value: SdwanSaasQualityProfileMonitorModeHttpHttps) {
    this._httpHttps.internalValue = value;
  }
  public resetHttpHttps() {
    this._httpHttps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHttpsInput() {
    return this._httpHttps.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new SdwanSaasQualityProfileMonitorModeStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SdwanSaasQualityProfileMonitorModeStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile scm_sdwan_saas_quality_profile}
*/
export class SdwanSaasQualityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_sdwan_saas_quality_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdwanSaasQualityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdwanSaasQualityProfile to import
  * @param importFromId The id of the existing SdwanSaasQualityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdwanSaasQualityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_sdwan_saas_quality_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_saas_quality_profile scm_sdwan_saas_quality_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdwanSaasQualityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SdwanSaasQualityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_sdwan_saas_quality_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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
    this._folder = config.folder;
    this._monitorMode.internalValue = config.monitorMode;
    this._name = config.name;
    this._snippet = config.snippet;
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

  // monitor_mode - computed: false, optional: false, required: true
  private _monitorMode = new SdwanSaasQualityProfileMonitorModeOutputReference(this, "monitor_mode");
  public get monitorMode() {
    return this._monitorMode;
  }
  public putMonitorMode(value: SdwanSaasQualityProfileMonitorMode) {
    this._monitorMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorModeInput() {
    return this._monitorMode.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      monitor_mode: sdwanSaasQualityProfileMonitorModeToTerraform(this._monitorMode.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
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
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_mode: {
        value: sdwanSaasQualityProfileMonitorModeToHclTerraform(this._monitorMode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SdwanSaasQualityProfileMonitorMode",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
