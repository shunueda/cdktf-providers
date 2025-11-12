// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateEncapConfig extends cdktf.TerraformMetaArguments {
  /**
  * DDOS Tunnel Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#encap_tmpl_name DdosZoneTemplateEncap#encap_tmpl_name}
  */
  readonly encapTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#id DdosZoneTemplateEncap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use original source ip for encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#preserve_source_ip DdosZoneTemplateEncap#preserve_source_ip}
  */
  readonly preserveSourceIp?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#user_tag DdosZoneTemplateEncap#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#uuid DdosZoneTemplateEncap#uuid}
  */
  readonly uuid?: string;
  /**
  * tunnel_encap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#tunnel_encap DdosZoneTemplateEncap#tunnel_encap}
  */
  readonly tunnelEncap?: DdosZoneTemplateEncapTunnelEncap;
}
export interface DdosZoneTemplateEncapTunnelEncapGreCfgGreAlways {
  /**
  * IPv4 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#gre_ipv4 DdosZoneTemplateEncap#gre_ipv4}
  */
  readonly greIpv4?: string;
  /**
  * IPv6 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#gre_ipv6 DdosZoneTemplateEncap#gre_ipv6}
  */
  readonly greIpv6?: string;
  /**
  * Encapsulate with key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#key_ipv4 DdosZoneTemplateEncap#key_ipv4}
  */
  readonly keyIpv4?: string;
  /**
  * Encapsulate with key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#key_ipv6 DdosZoneTemplateEncap#key_ipv6}
  */
  readonly keyIpv6?: string;
}

export function ddosZoneTemplateEncapTunnelEncapGreCfgGreAlwaysToTerraform(struct?: DdosZoneTemplateEncapTunnelEncapGreCfgGreAlwaysOutputReference | DdosZoneTemplateEncapTunnelEncapGreCfgGreAlways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_ipv4: cdktf.stringToTerraform(struct!.greIpv4),
    gre_ipv6: cdktf.stringToTerraform(struct!.greIpv6),
    key_ipv4: cdktf.stringToTerraform(struct!.keyIpv4),
    key_ipv6: cdktf.stringToTerraform(struct!.keyIpv6),
  }
}


export function ddosZoneTemplateEncapTunnelEncapGreCfgGreAlwaysToHclTerraform(struct?: DdosZoneTemplateEncapTunnelEncapGreCfgGreAlwaysOutputReference | DdosZoneTemplateEncapTunnelEncapGreCfgGreAlways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.greIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gre_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.greIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.keyIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.keyIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateEncapTunnelEncapGreCfgGreAlwaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateEncapTunnelEncapGreCfgGreAlways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.greIpv4 = this._greIpv4;
    }
    if (this._greIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.greIpv6 = this._greIpv6;
    }
    if (this._keyIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIpv4 = this._keyIpv4;
    }
    if (this._keyIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIpv6 = this._keyIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateEncapTunnelEncapGreCfgGreAlways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greIpv4 = undefined;
      this._greIpv6 = undefined;
      this._keyIpv4 = undefined;
      this._keyIpv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greIpv4 = value.greIpv4;
      this._greIpv6 = value.greIpv6;
      this._keyIpv4 = value.keyIpv4;
      this._keyIpv6 = value.keyIpv6;
    }
  }

  // gre_ipv4 - computed: false, optional: true, required: false
  private _greIpv4?: string; 
  public get greIpv4() {
    return this.getStringAttribute('gre_ipv4');
  }
  public set greIpv4(value: string) {
    this._greIpv4 = value;
  }
  public resetGreIpv4() {
    this._greIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greIpv4Input() {
    return this._greIpv4;
  }

  // gre_ipv6 - computed: false, optional: true, required: false
  private _greIpv6?: string; 
  public get greIpv6() {
    return this.getStringAttribute('gre_ipv6');
  }
  public set greIpv6(value: string) {
    this._greIpv6 = value;
  }
  public resetGreIpv6() {
    this._greIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greIpv6Input() {
    return this._greIpv6;
  }

  // key_ipv4 - computed: false, optional: true, required: false
  private _keyIpv4?: string; 
  public get keyIpv4() {
    return this.getStringAttribute('key_ipv4');
  }
  public set keyIpv4(value: string) {
    this._keyIpv4 = value;
  }
  public resetKeyIpv4() {
    this._keyIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIpv4Input() {
    return this._keyIpv4;
  }

  // key_ipv6 - computed: false, optional: true, required: false
  private _keyIpv6?: string; 
  public get keyIpv6() {
    return this.getStringAttribute('key_ipv6');
  }
  public set keyIpv6(value: string) {
    this._keyIpv6 = value;
  }
  public resetKeyIpv6() {
    this._keyIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIpv6Input() {
    return this._keyIpv6;
  }
}
export interface DdosZoneTemplateEncapTunnelEncapGreCfg {
  /**
  * Enable Tunnel encapsulation using GRE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#gre_encap DdosZoneTemplateEncap#gre_encap}
  */
  readonly greEncap?: number;
  /**
  * gre_always block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#gre_always DdosZoneTemplateEncap#gre_always}
  */
  readonly greAlways?: DdosZoneTemplateEncapTunnelEncapGreCfgGreAlways;
}

export function ddosZoneTemplateEncapTunnelEncapGreCfgToTerraform(struct?: DdosZoneTemplateEncapTunnelEncapGreCfgOutputReference | DdosZoneTemplateEncapTunnelEncapGreCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_encap: cdktf.numberToTerraform(struct!.greEncap),
    gre_always: ddosZoneTemplateEncapTunnelEncapGreCfgGreAlwaysToTerraform(struct!.greAlways),
  }
}


export function ddosZoneTemplateEncapTunnelEncapGreCfgToHclTerraform(struct?: DdosZoneTemplateEncapTunnelEncapGreCfgOutputReference | DdosZoneTemplateEncapTunnelEncapGreCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_encap: {
      value: cdktf.numberToHclTerraform(struct!.greEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_always: {
      value: ddosZoneTemplateEncapTunnelEncapGreCfgGreAlwaysToHclTerraform(struct!.greAlways),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateEncapTunnelEncapGreCfgGreAlwaysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateEncapTunnelEncapGreCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateEncapTunnelEncapGreCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.greEncap = this._greEncap;
    }
    if (this._greAlways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greAlways = this._greAlways?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateEncapTunnelEncapGreCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greEncap = undefined;
      this._greAlways.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greEncap = value.greEncap;
      this._greAlways.internalValue = value.greAlways;
    }
  }

  // gre_encap - computed: false, optional: true, required: false
  private _greEncap?: number; 
  public get greEncap() {
    return this.getNumberAttribute('gre_encap');
  }
  public set greEncap(value: number) {
    this._greEncap = value;
  }
  public resetGreEncap() {
    this._greEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greEncapInput() {
    return this._greEncap;
  }

  // gre_always - computed: false, optional: true, required: false
  private _greAlways = new DdosZoneTemplateEncapTunnelEncapGreCfgGreAlwaysOutputReference(this, "gre_always");
  public get greAlways() {
    return this._greAlways;
  }
  public putGreAlways(value: DdosZoneTemplateEncapTunnelEncapGreCfgGreAlways) {
    this._greAlways.internalValue = value;
  }
  public resetGreAlways() {
    this._greAlways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greAlwaysInput() {
    return this._greAlways.internalValue;
  }
}
export interface DdosZoneTemplateEncapTunnelEncapIpCfgAlways {
  /**
  * IPv4 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#ipv4_addr DdosZoneTemplateEncap#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * IPv6 address (IPv6-over-IPv4 / IPv4-over-IPv6 are not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#ipv6_addr DdosZoneTemplateEncap#ipv6_addr}
  */
  readonly ipv6Addr?: string;
}

export function ddosZoneTemplateEncapTunnelEncapIpCfgAlwaysToTerraform(struct?: DdosZoneTemplateEncapTunnelEncapIpCfgAlwaysOutputReference | DdosZoneTemplateEncapTunnelEncapIpCfgAlways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
  }
}


export function ddosZoneTemplateEncapTunnelEncapIpCfgAlwaysToHclTerraform(struct?: DdosZoneTemplateEncapTunnelEncapIpCfgAlwaysOutputReference | DdosZoneTemplateEncapTunnelEncapIpCfgAlways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateEncapTunnelEncapIpCfgAlwaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateEncapTunnelEncapIpCfgAlways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateEncapTunnelEncapIpCfgAlways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
    }
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }
}
export interface DdosZoneTemplateEncapTunnelEncapIpCfg {
  /**
  * Enable Tunnel encapsulation using IP in IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#ip_encap DdosZoneTemplateEncap#ip_encap}
  */
  readonly ipEncap?: number;
  /**
  * always block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#always DdosZoneTemplateEncap#always}
  */
  readonly always?: DdosZoneTemplateEncapTunnelEncapIpCfgAlways;
}

export function ddosZoneTemplateEncapTunnelEncapIpCfgToTerraform(struct?: DdosZoneTemplateEncapTunnelEncapIpCfgOutputReference | DdosZoneTemplateEncapTunnelEncapIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_encap: cdktf.numberToTerraform(struct!.ipEncap),
    always: ddosZoneTemplateEncapTunnelEncapIpCfgAlwaysToTerraform(struct!.always),
  }
}


export function ddosZoneTemplateEncapTunnelEncapIpCfgToHclTerraform(struct?: DdosZoneTemplateEncapTunnelEncapIpCfgOutputReference | DdosZoneTemplateEncapTunnelEncapIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_encap: {
      value: cdktf.numberToHclTerraform(struct!.ipEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    always: {
      value: ddosZoneTemplateEncapTunnelEncapIpCfgAlwaysToHclTerraform(struct!.always),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateEncapTunnelEncapIpCfgAlwaysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateEncapTunnelEncapIpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateEncapTunnelEncapIpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEncap = this._ipEncap;
    }
    if (this._always?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateEncapTunnelEncapIpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipEncap = undefined;
      this._always.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipEncap = value.ipEncap;
      this._always.internalValue = value.always;
    }
  }

  // ip_encap - computed: false, optional: true, required: false
  private _ipEncap?: number; 
  public get ipEncap() {
    return this.getNumberAttribute('ip_encap');
  }
  public set ipEncap(value: number) {
    this._ipEncap = value;
  }
  public resetIpEncap() {
    this._ipEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEncapInput() {
    return this._ipEncap;
  }

  // always - computed: false, optional: true, required: false
  private _always = new DdosZoneTemplateEncapTunnelEncapIpCfgAlwaysOutputReference(this, "always");
  public get always() {
    return this._always;
  }
  public putAlways(value: DdosZoneTemplateEncapTunnelEncapIpCfgAlways) {
    this._always.internalValue = value;
  }
  public resetAlways() {
    this._always.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always.internalValue;
  }
}
export interface DdosZoneTemplateEncapTunnelEncap {
  /**
  * gre_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#gre_cfg DdosZoneTemplateEncap#gre_cfg}
  */
  readonly greCfg?: DdosZoneTemplateEncapTunnelEncapGreCfg;
  /**
  * ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#ip_cfg DdosZoneTemplateEncap#ip_cfg}
  */
  readonly ipCfg?: DdosZoneTemplateEncapTunnelEncapIpCfg;
}

export function ddosZoneTemplateEncapTunnelEncapToTerraform(struct?: DdosZoneTemplateEncapTunnelEncapOutputReference | DdosZoneTemplateEncapTunnelEncap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_cfg: ddosZoneTemplateEncapTunnelEncapGreCfgToTerraform(struct!.greCfg),
    ip_cfg: ddosZoneTemplateEncapTunnelEncapIpCfgToTerraform(struct!.ipCfg),
  }
}


export function ddosZoneTemplateEncapTunnelEncapToHclTerraform(struct?: DdosZoneTemplateEncapTunnelEncapOutputReference | DdosZoneTemplateEncapTunnelEncap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_cfg: {
      value: ddosZoneTemplateEncapTunnelEncapGreCfgToHclTerraform(struct!.greCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateEncapTunnelEncapGreCfgList",
    },
    ip_cfg: {
      value: ddosZoneTemplateEncapTunnelEncapIpCfgToHclTerraform(struct!.ipCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosZoneTemplateEncapTunnelEncapIpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosZoneTemplateEncapTunnelEncapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosZoneTemplateEncapTunnelEncap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greCfg = this._greCfg?.internalValue;
    }
    if (this._ipCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCfg = this._ipCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosZoneTemplateEncapTunnelEncap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greCfg.internalValue = undefined;
      this._ipCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greCfg.internalValue = value.greCfg;
      this._ipCfg.internalValue = value.ipCfg;
    }
  }

  // gre_cfg - computed: false, optional: true, required: false
  private _greCfg = new DdosZoneTemplateEncapTunnelEncapGreCfgOutputReference(this, "gre_cfg");
  public get greCfg() {
    return this._greCfg;
  }
  public putGreCfg(value: DdosZoneTemplateEncapTunnelEncapGreCfg) {
    this._greCfg.internalValue = value;
  }
  public resetGreCfg() {
    this._greCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greCfgInput() {
    return this._greCfg.internalValue;
  }

  // ip_cfg - computed: false, optional: true, required: false
  private _ipCfg = new DdosZoneTemplateEncapTunnelEncapIpCfgOutputReference(this, "ip_cfg");
  public get ipCfg() {
    return this._ipCfg;
  }
  public putIpCfg(value: DdosZoneTemplateEncapTunnelEncapIpCfg) {
    this._ipCfg.internalValue = value;
  }
  public resetIpCfg() {
    this._ipCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCfgInput() {
    return this._ipCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap thunder_ddos_zone_template_encap}
*/
export class DdosZoneTemplateEncap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_encap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateEncap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateEncap to import
  * @param importFromId The id of the existing DdosZoneTemplateEncap that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateEncap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_encap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_encap thunder_ddos_zone_template_encap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateEncapConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateEncapConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_encap',
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
    this._encapTmplName = config.encapTmplName;
    this._id = config.id;
    this._preserveSourceIp = config.preserveSourceIp;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._tunnelEncap.internalValue = config.tunnelEncap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encap_tmpl_name - computed: false, optional: false, required: true
  private _encapTmplName?: string; 
  public get encapTmplName() {
    return this.getStringAttribute('encap_tmpl_name');
  }
  public set encapTmplName(value: string) {
    this._encapTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapTmplNameInput() {
    return this._encapTmplName;
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

  // preserve_source_ip - computed: false, optional: true, required: false
  private _preserveSourceIp?: number; 
  public get preserveSourceIp() {
    return this.getNumberAttribute('preserve_source_ip');
  }
  public set preserveSourceIp(value: number) {
    this._preserveSourceIp = value;
  }
  public resetPreserveSourceIp() {
    this._preserveSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceIpInput() {
    return this._preserveSourceIp;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // tunnel_encap - computed: false, optional: true, required: false
  private _tunnelEncap = new DdosZoneTemplateEncapTunnelEncapOutputReference(this, "tunnel_encap");
  public get tunnelEncap() {
    return this._tunnelEncap;
  }
  public putTunnelEncap(value: DdosZoneTemplateEncapTunnelEncap) {
    this._tunnelEncap.internalValue = value;
  }
  public resetTunnelEncap() {
    this._tunnelEncap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEncapInput() {
    return this._tunnelEncap.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encap_tmpl_name: cdktf.stringToTerraform(this._encapTmplName),
      id: cdktf.stringToTerraform(this._id),
      preserve_source_ip: cdktf.numberToTerraform(this._preserveSourceIp),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      tunnel_encap: ddosZoneTemplateEncapTunnelEncapToTerraform(this._tunnelEncap.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encap_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._encapTmplName),
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
      preserve_source_ip: {
        value: cdktf.numberToHclTerraform(this._preserveSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_encap: {
        value: ddosZoneTemplateEncapTunnelEncapToHclTerraform(this._tunnelEncap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosZoneTemplateEncapTunnelEncapList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
