// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Active active device binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#active_active_device_binding NatRule#active_active_device_binding}
  */
  readonly activeActiveDeviceBinding?: string;
  /**
  * NAT rule description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#description NatRule#description}
  */
  readonly description?: string;
  /**
  * Destination address(es) of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#destination NatRule#destination}
  */
  readonly destination: string[];
  /**
  * Destination translation configuration (Static/P-D-N-T).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#destination_translation NatRule#destination_translation}
  */
  readonly destinationTranslation?: NatRuleDestinationTranslation;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#device NatRule#device}
  */
  readonly device?: string;
  /**
  * Disable NAT rule?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#disabled NatRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Dynamic destination translation configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#dynamic_destination_translation NatRule#dynamic_destination_translation}
  */
  readonly dynamicDestinationTranslation?: NatRuleDynamicDestinationTranslation;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#folder NatRule#folder}
  */
  readonly folder?: string;
  /**
  * Source zone(s) of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#from NatRule#from}
  */
  readonly from: string[];
  /**
  * NAT rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#name NatRule#name}
  */
  readonly name: string;
  /**
  * NAT type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#nat_type NatRule#nat_type}
  */
  readonly natType?: string;
  /**
  * The relative position of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#position NatRule#position}
  */
  readonly position?: string;
  /**
  * The service of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#service NatRule#service}
  */
  readonly service: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#snippet NatRule#snippet}
  */
  readonly snippet?: string;
  /**
  * Source address(es) of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#source NatRule#source}
  */
  readonly source: string[];
  /**
  * Source translation configuration (Static/P-D-N-T).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#source_translation NatRule#source_translation}
  */
  readonly sourceTranslation?: NatRuleSourceTranslation;
  /**
  * NAT rule tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#tag NatRule#tag}
  */
  readonly tag?: string[];
  /**
  * Destination zone of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#to NatRule#to}
  */
  readonly to: string[];
  /**
  * Destination interface of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#to_interface NatRule#to_interface}
  */
  readonly toInterface?: string;
}
export interface NatRuleDestinationTranslationDnsRewrite {
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#direction NatRule#direction}
  */
  readonly direction?: string;
}

export function natRuleDestinationTranslationDnsRewriteToTerraform(struct?: NatRuleDestinationTranslationDnsRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
  }
}


export function natRuleDestinationTranslationDnsRewriteToHclTerraform(struct?: NatRuleDestinationTranslationDnsRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleDestinationTranslationDnsRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleDestinationTranslationDnsRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleDestinationTranslationDnsRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }
}
export interface NatRuleDestinationTranslation {
  /**
  * Dns rewrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#dns_rewrite NatRule#dns_rewrite}
  */
  readonly dnsRewrite?: NatRuleDestinationTranslationDnsRewrite;
  /**
  * Translated address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#translated_address NatRule#translated_address}
  */
  readonly translatedAddress?: string;
  /**
  * Translated port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#translated_port NatRule#translated_port}
  */
  readonly translatedPort?: number;
}

export function natRuleDestinationTranslationToTerraform(struct?: NatRuleDestinationTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_rewrite: natRuleDestinationTranslationDnsRewriteToTerraform(struct!.dnsRewrite),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
    translated_port: cdktf.numberToTerraform(struct!.translatedPort),
  }
}


export function natRuleDestinationTranslationToHclTerraform(struct?: NatRuleDestinationTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_rewrite: {
      value: natRuleDestinationTranslationDnsRewriteToHclTerraform(struct!.dnsRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "NatRuleDestinationTranslationDnsRewrite",
    },
    translated_address: {
      value: cdktf.stringToHclTerraform(struct!.translatedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_port: {
      value: cdktf.numberToHclTerraform(struct!.translatedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleDestinationTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleDestinationTranslation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRewrite = this._dnsRewrite?.internalValue;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    if (this._translatedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedPort = this._translatedPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleDestinationTranslation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsRewrite.internalValue = undefined;
      this._translatedAddress = undefined;
      this._translatedPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsRewrite.internalValue = value.dnsRewrite;
      this._translatedAddress = value.translatedAddress;
      this._translatedPort = value.translatedPort;
    }
  }

  // dns_rewrite - computed: false, optional: true, required: false
  private _dnsRewrite = new NatRuleDestinationTranslationDnsRewriteOutputReference(this, "dns_rewrite");
  public get dnsRewrite() {
    return this._dnsRewrite;
  }
  public putDnsRewrite(value: NatRuleDestinationTranslationDnsRewrite) {
    this._dnsRewrite.internalValue = value;
  }
  public resetDnsRewrite() {
    this._dnsRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRewriteInput() {
    return this._dnsRewrite.internalValue;
  }

  // translated_address - computed: false, optional: true, required: false
  private _translatedAddress?: string; 
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }
  public set translatedAddress(value: string) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }

  // translated_port - computed: false, optional: true, required: false
  private _translatedPort?: number; 
  public get translatedPort() {
    return this.getNumberAttribute('translated_port');
  }
  public set translatedPort(value: number) {
    this._translatedPort = value;
  }
  public resetTranslatedPort() {
    this._translatedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedPortInput() {
    return this._translatedPort;
  }
}
export interface NatRuleDynamicDestinationTranslation {
  /**
  * Distribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#distribution NatRule#distribution}
  */
  readonly distribution?: string;
  /**
  * Translated address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#translated_address NatRule#translated_address}
  */
  readonly translatedAddress?: string;
  /**
  * Translated port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#translated_port NatRule#translated_port}
  */
  readonly translatedPort?: number;
}

export function natRuleDynamicDestinationTranslationToTerraform(struct?: NatRuleDynamicDestinationTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution: cdktf.stringToTerraform(struct!.distribution),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
    translated_port: cdktf.numberToTerraform(struct!.translatedPort),
  }
}


export function natRuleDynamicDestinationTranslationToHclTerraform(struct?: NatRuleDynamicDestinationTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribution: {
      value: cdktf.stringToHclTerraform(struct!.distribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_address: {
      value: cdktf.stringToHclTerraform(struct!.translatedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_port: {
      value: cdktf.numberToHclTerraform(struct!.translatedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleDynamicDestinationTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleDynamicDestinationTranslation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    if (this._translatedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedPort = this._translatedPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleDynamicDestinationTranslation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distribution = undefined;
      this._translatedAddress = undefined;
      this._translatedPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distribution = value.distribution;
      this._translatedAddress = value.translatedAddress;
      this._translatedPort = value.translatedPort;
    }
  }

  // distribution - computed: false, optional: true, required: false
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  public resetDistribution() {
    this._distribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // translated_address - computed: false, optional: true, required: false
  private _translatedAddress?: string; 
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }
  public set translatedAddress(value: string) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }

  // translated_port - computed: false, optional: true, required: false
  private _translatedPort?: number; 
  public get translatedPort() {
    return this.getNumberAttribute('translated_port');
  }
  public set translatedPort(value: number) {
    this._translatedPort = value;
  }
  public resetTranslatedPort() {
    this._translatedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedPortInput() {
    return this._translatedPort;
  }
}
export interface NatRuleSourceTranslationDynamicIpFallback {
  /**
  * Floating IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#floating_ip NatRule#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#interface NatRule#interface}
  */
  readonly interface?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#ip NatRule#ip}
  */
  readonly ip?: string;
  /**
  * Fallback IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#translated_address NatRule#translated_address}
  */
  readonly translatedAddress?: string[];
}

export function natRuleSourceTranslationDynamicIpFallbackToTerraform(struct?: NatRuleSourceTranslationDynamicIpFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
    translated_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.translatedAddress),
  }
}


export function natRuleSourceTranslationDynamicIpFallbackToHclTerraform(struct?: NatRuleSourceTranslationDynamicIpFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.translatedAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleSourceTranslationDynamicIpFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleSourceTranslationDynamicIpFallback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleSourceTranslationDynamicIpFallback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp = undefined;
      this._interface = undefined;
      this._ip = undefined;
      this._translatedAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp = value.floatingIp;
      this._interface = value.interface;
      this._ip = value.ip;
      this._translatedAddress = value.translatedAddress;
    }
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // translated_address - computed: false, optional: true, required: false
  private _translatedAddress?: string[]; 
  public get translatedAddress() {
    return this.getListAttribute('translated_address');
  }
  public set translatedAddress(value: string[]) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }
}
export interface NatRuleSourceTranslationDynamicIp {
  /**
  * Fallback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#fallback NatRule#fallback}
  */
  readonly fallback?: NatRuleSourceTranslationDynamicIpFallback;
  /**
  * Translated IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#translated_address NatRule#translated_address}
  */
  readonly translatedAddress?: string[];
}

export function natRuleSourceTranslationDynamicIpToTerraform(struct?: NatRuleSourceTranslationDynamicIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback: natRuleSourceTranslationDynamicIpFallbackToTerraform(struct!.fallback),
    translated_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.translatedAddress),
  }
}


export function natRuleSourceTranslationDynamicIpToHclTerraform(struct?: NatRuleSourceTranslationDynamicIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback: {
      value: natRuleSourceTranslationDynamicIpFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "struct",
      storageClassType: "NatRuleSourceTranslationDynamicIpFallback",
    },
    translated_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.translatedAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleSourceTranslationDynamicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleSourceTranslationDynamicIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback?.internalValue;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleSourceTranslationDynamicIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallback.internalValue = undefined;
      this._translatedAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallback.internalValue = value.fallback;
      this._translatedAddress = value.translatedAddress;
    }
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback = new NatRuleSourceTranslationDynamicIpFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: NatRuleSourceTranslationDynamicIpFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // translated_address - computed: false, optional: true, required: false
  private _translatedAddress?: string[]; 
  public get translatedAddress() {
    return this.getListAttribute('translated_address');
  }
  public set translatedAddress(value: string[]) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }
}
export interface NatRuleSourceTranslationDynamicIpAndPort {
  /**
  * Floating IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#floating_ip NatRule#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#interface NatRule#interface}
  */
  readonly interface?: string;
  /**
  * Translated source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#ip NatRule#ip}
  */
  readonly ip?: string;
  /**
  * Translated source IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#translated_address NatRule#translated_address}
  */
  readonly translatedAddress?: string[];
}

export function natRuleSourceTranslationDynamicIpAndPortToTerraform(struct?: NatRuleSourceTranslationDynamicIpAndPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
    translated_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.translatedAddress),
  }
}


export function natRuleSourceTranslationDynamicIpAndPortToHclTerraform(struct?: NatRuleSourceTranslationDynamicIpAndPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.translatedAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleSourceTranslationDynamicIpAndPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleSourceTranslationDynamicIpAndPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleSourceTranslationDynamicIpAndPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp = undefined;
      this._interface = undefined;
      this._ip = undefined;
      this._translatedAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp = value.floatingIp;
      this._interface = value.interface;
      this._ip = value.ip;
      this._translatedAddress = value.translatedAddress;
    }
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // translated_address - computed: false, optional: true, required: false
  private _translatedAddress?: string[]; 
  public get translatedAddress() {
    return this.getListAttribute('translated_address');
  }
  public set translatedAddress(value: string[]) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }
}
export interface NatRuleSourceTranslationStaticIp {
  /**
  * Bi directional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#bi_directional NatRule#bi_directional}
  */
  readonly biDirectional?: string;
  /**
  * Translated IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#translated_address NatRule#translated_address}
  */
  readonly translatedAddress?: string;
}

export function natRuleSourceTranslationStaticIpToTerraform(struct?: NatRuleSourceTranslationStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bi_directional: cdktf.stringToTerraform(struct!.biDirectional),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
  }
}


export function natRuleSourceTranslationStaticIpToHclTerraform(struct?: NatRuleSourceTranslationStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bi_directional: {
      value: cdktf.stringToHclTerraform(struct!.biDirectional),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_address: {
      value: cdktf.stringToHclTerraform(struct!.translatedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleSourceTranslationStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleSourceTranslationStaticIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._biDirectional !== undefined) {
      hasAnyValues = true;
      internalValueResult.biDirectional = this._biDirectional;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleSourceTranslationStaticIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._biDirectional = undefined;
      this._translatedAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._biDirectional = value.biDirectional;
      this._translatedAddress = value.translatedAddress;
    }
  }

  // bi_directional - computed: false, optional: true, required: false
  private _biDirectional?: string; 
  public get biDirectional() {
    return this.getStringAttribute('bi_directional');
  }
  public set biDirectional(value: string) {
    this._biDirectional = value;
  }
  public resetBiDirectional() {
    this._biDirectional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biDirectionalInput() {
    return this._biDirectional;
  }

  // translated_address - computed: false, optional: true, required: false
  private _translatedAddress?: string; 
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }
  public set translatedAddress(value: string) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }
}
export interface NatRuleSourceTranslation {
  /**
  * Dynamic IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#dynamic_ip NatRule#dynamic_ip}
  */
  readonly dynamicIp?: NatRuleSourceTranslationDynamicIp;
  /**
  * Dynamic IP and port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#dynamic_ip_and_port NatRule#dynamic_ip_and_port}
  */
  readonly dynamicIpAndPort?: NatRuleSourceTranslationDynamicIpAndPort;
  /**
  * Static IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#static_ip NatRule#static_ip}
  */
  readonly staticIp?: NatRuleSourceTranslationStaticIp;
}

export function natRuleSourceTranslationToTerraform(struct?: NatRuleSourceTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_ip: natRuleSourceTranslationDynamicIpToTerraform(struct!.dynamicIp),
    dynamic_ip_and_port: natRuleSourceTranslationDynamicIpAndPortToTerraform(struct!.dynamicIpAndPort),
    static_ip: natRuleSourceTranslationStaticIpToTerraform(struct!.staticIp),
  }
}


export function natRuleSourceTranslationToHclTerraform(struct?: NatRuleSourceTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_ip: {
      value: natRuleSourceTranslationDynamicIpToHclTerraform(struct!.dynamicIp),
      isBlock: true,
      type: "struct",
      storageClassType: "NatRuleSourceTranslationDynamicIp",
    },
    dynamic_ip_and_port: {
      value: natRuleSourceTranslationDynamicIpAndPortToHclTerraform(struct!.dynamicIpAndPort),
      isBlock: true,
      type: "struct",
      storageClassType: "NatRuleSourceTranslationDynamicIpAndPort",
    },
    static_ip: {
      value: natRuleSourceTranslationStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "struct",
      storageClassType: "NatRuleSourceTranslationStaticIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleSourceTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleSourceTranslation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicIp = this._dynamicIp?.internalValue;
    }
    if (this._dynamicIpAndPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicIpAndPort = this._dynamicIpAndPort?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleSourceTranslation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicIp.internalValue = undefined;
      this._dynamicIpAndPort.internalValue = undefined;
      this._staticIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicIp.internalValue = value.dynamicIp;
      this._dynamicIpAndPort.internalValue = value.dynamicIpAndPort;
      this._staticIp.internalValue = value.staticIp;
    }
  }

  // dynamic_ip - computed: false, optional: true, required: false
  private _dynamicIp = new NatRuleSourceTranslationDynamicIpOutputReference(this, "dynamic_ip");
  public get dynamicIp() {
    return this._dynamicIp;
  }
  public putDynamicIp(value: NatRuleSourceTranslationDynamicIp) {
    this._dynamicIp.internalValue = value;
  }
  public resetDynamicIp() {
    this._dynamicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicIpInput() {
    return this._dynamicIp.internalValue;
  }

  // dynamic_ip_and_port - computed: false, optional: true, required: false
  private _dynamicIpAndPort = new NatRuleSourceTranslationDynamicIpAndPortOutputReference(this, "dynamic_ip_and_port");
  public get dynamicIpAndPort() {
    return this._dynamicIpAndPort;
  }
  public putDynamicIpAndPort(value: NatRuleSourceTranslationDynamicIpAndPort) {
    this._dynamicIpAndPort.internalValue = value;
  }
  public resetDynamicIpAndPort() {
    this._dynamicIpAndPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicIpAndPortInput() {
    return this._dynamicIpAndPort.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new NatRuleSourceTranslationStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: NatRuleSourceTranslationStaticIp) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule scm_nat_rule}
*/
export class NatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NatRule to import
  * @param importFromId The id of the existing NatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/nat_rule scm_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_nat_rule',
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
    this._activeActiveDeviceBinding = config.activeActiveDeviceBinding;
    this._description = config.description;
    this._destination = config.destination;
    this._destinationTranslation.internalValue = config.destinationTranslation;
    this._device = config.device;
    this._disabled = config.disabled;
    this._dynamicDestinationTranslation.internalValue = config.dynamicDestinationTranslation;
    this._folder = config.folder;
    this._from = config.from;
    this._name = config.name;
    this._natType = config.natType;
    this._position = config.position;
    this._service = config.service;
    this._snippet = config.snippet;
    this._source = config.source;
    this._sourceTranslation.internalValue = config.sourceTranslation;
    this._tag = config.tag;
    this._to = config.to;
    this._toInterface = config.toInterface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_active_device_binding - computed: false, optional: true, required: false
  private _activeActiveDeviceBinding?: string; 
  public get activeActiveDeviceBinding() {
    return this.getStringAttribute('active_active_device_binding');
  }
  public set activeActiveDeviceBinding(value: string) {
    this._activeActiveDeviceBinding = value;
  }
  public resetActiveActiveDeviceBinding() {
    this._activeActiveDeviceBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveDeviceBindingInput() {
    return this._activeActiveDeviceBinding;
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

  // destination - computed: false, optional: false, required: true
  private _destination?: string[]; 
  public get destination() {
    return this.getListAttribute('destination');
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_translation - computed: false, optional: true, required: false
  private _destinationTranslation = new NatRuleDestinationTranslationOutputReference(this, "destination_translation");
  public get destinationTranslation() {
    return this._destinationTranslation;
  }
  public putDestinationTranslation(value: NatRuleDestinationTranslation) {
    this._destinationTranslation.internalValue = value;
  }
  public resetDestinationTranslation() {
    this._destinationTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTranslationInput() {
    return this._destinationTranslation.internalValue;
  }

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

  // disabled - computed: true, optional: true, required: false
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

  // dynamic_destination_translation - computed: false, optional: true, required: false
  private _dynamicDestinationTranslation = new NatRuleDynamicDestinationTranslationOutputReference(this, "dynamic_destination_translation");
  public get dynamicDestinationTranslation() {
    return this._dynamicDestinationTranslation;
  }
  public putDynamicDestinationTranslation(value: NatRuleDynamicDestinationTranslation) {
    this._dynamicDestinationTranslation.internalValue = value;
  }
  public resetDynamicDestinationTranslation() {
    this._dynamicDestinationTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDestinationTranslationInput() {
    return this._dynamicDestinationTranslation.internalValue;
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

  // from - computed: false, optional: false, required: true
  private _from?: string[]; 
  public get from() {
    return this.getListAttribute('from');
  }
  public set from(value: string[]) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // nat_type - computed: true, optional: true, required: false
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  public resetNatType() {
    this._natType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
  }

  // position - computed: true, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // source - computed: false, optional: false, required: true
  private _source?: string[]; 
  public get source() {
    return this.getListAttribute('source');
  }
  public set source(value: string[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_translation - computed: false, optional: true, required: false
  private _sourceTranslation = new NatRuleSourceTranslationOutputReference(this, "source_translation");
  public get sourceTranslation() {
    return this._sourceTranslation;
  }
  public putSourceTranslation(value: NatRuleSourceTranslation) {
    this._sourceTranslation.internalValue = value;
  }
  public resetSourceTranslation() {
    this._sourceTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTranslationInput() {
    return this._sourceTranslation.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // to - computed: false, optional: false, required: true
  private _to?: string[]; 
  public get to() {
    return this.getListAttribute('to');
  }
  public set to(value: string[]) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // to_interface - computed: false, optional: true, required: false
  private _toInterface?: string; 
  public get toInterface() {
    return this.getStringAttribute('to_interface');
  }
  public set toInterface(value: string) {
    this._toInterface = value;
  }
  public resetToInterface() {
    this._toInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInterfaceInput() {
    return this._toInterface;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_active_device_binding: cdktf.stringToTerraform(this._activeActiveDeviceBinding),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      destination_translation: natRuleDestinationTranslationToTerraform(this._destinationTranslation.internalValue),
      device: cdktf.stringToTerraform(this._device),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dynamic_destination_translation: natRuleDynamicDestinationTranslationToTerraform(this._dynamicDestinationTranslation.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      from: cdktf.listMapper(cdktf.stringToTerraform, false)(this._from),
      name: cdktf.stringToTerraform(this._name),
      nat_type: cdktf.stringToTerraform(this._natType),
      position: cdktf.stringToTerraform(this._position),
      service: cdktf.stringToTerraform(this._service),
      snippet: cdktf.stringToTerraform(this._snippet),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      source_translation: natRuleSourceTranslationToTerraform(this._sourceTranslation.internalValue),
      tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tag),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
      to_interface: cdktf.stringToTerraform(this._toInterface),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_active_device_binding: {
        value: cdktf.stringToHclTerraform(this._activeActiveDeviceBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destination),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destination_translation: {
        value: natRuleDestinationTranslationToHclTerraform(this._destinationTranslation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NatRuleDestinationTranslation",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_destination_translation: {
        value: natRuleDynamicDestinationTranslationToHclTerraform(this._dynamicDestinationTranslation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NatRuleDynamicDestinationTranslation",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._from),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_type: {
        value: cdktf.stringToHclTerraform(this._natType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.stringToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
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
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_translation: {
        value: natRuleSourceTranslationToHclTerraform(this._sourceTranslation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NatRuleSourceTranslation",
      },
      tag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tag),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._to),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      to_interface: {
        value: cdktf.stringToHclTerraform(this._toInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
