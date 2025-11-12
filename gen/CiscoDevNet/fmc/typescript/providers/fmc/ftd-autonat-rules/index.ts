// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FtdAutonatRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#description FtdAutonatRules#description}
  */
  readonly description?: string;
  /**
  * Enable Fallthrough
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#fallthrough FtdAutonatRules#fallthrough}
  */
  readonly fallthrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#id FtdAutonatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#ipv6 FtdAutonatRules#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * The ID of the NAT policy this resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#nat_policy FtdAutonatRules#nat_policy}
  */
  readonly natPolicy: string;
  /**
  * The type of this resource, "static" or "dynamic"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#nat_type FtdAutonatRules#nat_type}
  */
  readonly natType: string;
  /**
  * Enable Net to Net
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#net_to_net FtdAutonatRules#net_to_net}
  */
  readonly netToNet?: boolean | cdktf.IResolvable;
  /**
  * Disable Proxy ARP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#no_proxy_arp FtdAutonatRules#no_proxy_arp}
  */
  readonly noProxyArp?: boolean | cdktf.IResolvable;
  /**
  * Enable perform route lookups for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#perform_route_lookup FtdAutonatRules#perform_route_lookup}
  */
  readonly performRouteLookup?: boolean | cdktf.IResolvable;
  /**
  * Enable Translate DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#translate_dns FtdAutonatRules#translate_dns}
  */
  readonly translateDns?: boolean | cdktf.IResolvable;
  /**
  * Interface is the destination translated network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#translated_network_is_destination_interface FtdAutonatRules#translated_network_is_destination_interface}
  */
  readonly translatedNetworkIsDestinationInterface?: boolean | cdktf.IResolvable;
  /**
  * Translated port for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#translated_port FtdAutonatRules#translated_port}
  */
  readonly translatedPort?: number;
  /**
  * destination_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#destination_interface FtdAutonatRules#destination_interface}
  */
  readonly destinationInterface?: FtdAutonatRulesDestinationInterface;
  /**
  * original_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#original_network FtdAutonatRules#original_network}
  */
  readonly originalNetwork?: FtdAutonatRulesOriginalNetwork;
  /**
  * original_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#original_port FtdAutonatRules#original_port}
  */
  readonly originalPort?: FtdAutonatRulesOriginalPort;
  /**
  * pat_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#pat_options FtdAutonatRules#pat_options}
  */
  readonly patOptions?: FtdAutonatRulesPatOptions;
  /**
  * source_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#source_interface FtdAutonatRules#source_interface}
  */
  readonly sourceInterface?: FtdAutonatRulesSourceInterface;
  /**
  * translated_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#translated_network FtdAutonatRules#translated_network}
  */
  readonly translatedNetwork?: FtdAutonatRulesTranslatedNetwork;
}
export interface FtdAutonatRulesDestinationInterface {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#id FtdAutonatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#type FtdAutonatRules#type}
  */
  readonly type: string;
}

export function ftdAutonatRulesDestinationInterfaceToTerraform(struct?: FtdAutonatRulesDestinationInterfaceOutputReference | FtdAutonatRulesDestinationInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdAutonatRulesDestinationInterfaceToHclTerraform(struct?: FtdAutonatRulesDestinationInterfaceOutputReference | FtdAutonatRulesDestinationInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class FtdAutonatRulesDestinationInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdAutonatRulesDestinationInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdAutonatRulesDestinationInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface FtdAutonatRulesOriginalNetwork {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#id FtdAutonatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#type FtdAutonatRules#type}
  */
  readonly type: string;
}

export function ftdAutonatRulesOriginalNetworkToTerraform(struct?: FtdAutonatRulesOriginalNetworkOutputReference | FtdAutonatRulesOriginalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdAutonatRulesOriginalNetworkToHclTerraform(struct?: FtdAutonatRulesOriginalNetworkOutputReference | FtdAutonatRulesOriginalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class FtdAutonatRulesOriginalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdAutonatRulesOriginalNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdAutonatRulesOriginalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface FtdAutonatRulesOriginalPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#port FtdAutonatRules#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#protocol FtdAutonatRules#protocol}
  */
  readonly protocol: string;
}

export function ftdAutonatRulesOriginalPortToTerraform(struct?: FtdAutonatRulesOriginalPortOutputReference | FtdAutonatRulesOriginalPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function ftdAutonatRulesOriginalPortToHclTerraform(struct?: FtdAutonatRulesOriginalPortOutputReference | FtdAutonatRulesOriginalPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class FtdAutonatRulesOriginalPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdAutonatRulesOriginalPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdAutonatRulesOriginalPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._protocol = value.protocol;
    }
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface FtdAutonatRulesPatOptionsPatPoolAddress {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#id FtdAutonatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#type FtdAutonatRules#type}
  */
  readonly type: string;
}

export function ftdAutonatRulesPatOptionsPatPoolAddressToTerraform(struct?: FtdAutonatRulesPatOptionsPatPoolAddressOutputReference | FtdAutonatRulesPatOptionsPatPoolAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdAutonatRulesPatOptionsPatPoolAddressToHclTerraform(struct?: FtdAutonatRulesPatOptionsPatPoolAddressOutputReference | FtdAutonatRulesPatOptionsPatPoolAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class FtdAutonatRulesPatOptionsPatPoolAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdAutonatRulesPatOptionsPatPoolAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdAutonatRulesPatOptionsPatPoolAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface FtdAutonatRulesPatOptions {
  /**
  * Enable Extended PAT table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#extended_pat_table FtdAutonatRules#extended_pat_table}
  */
  readonly extendedPatTable?: boolean | cdktf.IResolvable;
  /**
  * Include Reserve ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#include_reserve_ports FtdAutonatRules#include_reserve_ports}
  */
  readonly includeReservePorts?: boolean | cdktf.IResolvable;
  /**
  * Enable interface PAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#interface_pat FtdAutonatRules#interface_pat}
  */
  readonly interfacePat?: boolean | cdktf.IResolvable;
  /**
  * Enable Round Robin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#round_robin FtdAutonatRules#round_robin}
  */
  readonly roundRobin?: boolean | cdktf.IResolvable;
  /**
  * pat_pool_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#pat_pool_address FtdAutonatRules#pat_pool_address}
  */
  readonly patPoolAddress?: FtdAutonatRulesPatOptionsPatPoolAddress;
}

export function ftdAutonatRulesPatOptionsToTerraform(struct?: FtdAutonatRulesPatOptionsOutputReference | FtdAutonatRulesPatOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_pat_table: cdktf.booleanToTerraform(struct!.extendedPatTable),
    include_reserve_ports: cdktf.booleanToTerraform(struct!.includeReservePorts),
    interface_pat: cdktf.booleanToTerraform(struct!.interfacePat),
    round_robin: cdktf.booleanToTerraform(struct!.roundRobin),
    pat_pool_address: ftdAutonatRulesPatOptionsPatPoolAddressToTerraform(struct!.patPoolAddress),
  }
}


export function ftdAutonatRulesPatOptionsToHclTerraform(struct?: FtdAutonatRulesPatOptionsOutputReference | FtdAutonatRulesPatOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_pat_table: {
      value: cdktf.booleanToHclTerraform(struct!.extendedPatTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_reserve_ports: {
      value: cdktf.booleanToHclTerraform(struct!.includeReservePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_pat: {
      value: cdktf.booleanToHclTerraform(struct!.interfacePat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    round_robin: {
      value: cdktf.booleanToHclTerraform(struct!.roundRobin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pat_pool_address: {
      value: ftdAutonatRulesPatOptionsPatPoolAddressToHclTerraform(struct!.patPoolAddress),
      isBlock: true,
      type: "list",
      storageClassType: "FtdAutonatRulesPatOptionsPatPoolAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FtdAutonatRulesPatOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdAutonatRulesPatOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedPatTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedPatTable = this._extendedPatTable;
    }
    if (this._includeReservePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeReservePorts = this._includeReservePorts;
    }
    if (this._interfacePat !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfacePat = this._interfacePat;
    }
    if (this._roundRobin !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundRobin = this._roundRobin;
    }
    if (this._patPoolAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patPoolAddress = this._patPoolAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdAutonatRulesPatOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extendedPatTable = undefined;
      this._includeReservePorts = undefined;
      this._interfacePat = undefined;
      this._roundRobin = undefined;
      this._patPoolAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extendedPatTable = value.extendedPatTable;
      this._includeReservePorts = value.includeReservePorts;
      this._interfacePat = value.interfacePat;
      this._roundRobin = value.roundRobin;
      this._patPoolAddress.internalValue = value.patPoolAddress;
    }
  }

  // extended_pat_table - computed: false, optional: true, required: false
  private _extendedPatTable?: boolean | cdktf.IResolvable; 
  public get extendedPatTable() {
    return this.getBooleanAttribute('extended_pat_table');
  }
  public set extendedPatTable(value: boolean | cdktf.IResolvable) {
    this._extendedPatTable = value;
  }
  public resetExtendedPatTable() {
    this._extendedPatTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedPatTableInput() {
    return this._extendedPatTable;
  }

  // include_reserve_ports - computed: false, optional: true, required: false
  private _includeReservePorts?: boolean | cdktf.IResolvable; 
  public get includeReservePorts() {
    return this.getBooleanAttribute('include_reserve_ports');
  }
  public set includeReservePorts(value: boolean | cdktf.IResolvable) {
    this._includeReservePorts = value;
  }
  public resetIncludeReservePorts() {
    this._includeReservePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReservePortsInput() {
    return this._includeReservePorts;
  }

  // interface_pat - computed: false, optional: true, required: false
  private _interfacePat?: boolean | cdktf.IResolvable; 
  public get interfacePat() {
    return this.getBooleanAttribute('interface_pat');
  }
  public set interfacePat(value: boolean | cdktf.IResolvable) {
    this._interfacePat = value;
  }
  public resetInterfacePat() {
    this._interfacePat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacePatInput() {
    return this._interfacePat;
  }

  // round_robin - computed: false, optional: true, required: false
  private _roundRobin?: boolean | cdktf.IResolvable; 
  public get roundRobin() {
    return this.getBooleanAttribute('round_robin');
  }
  public set roundRobin(value: boolean | cdktf.IResolvable) {
    this._roundRobin = value;
  }
  public resetRoundRobin() {
    this._roundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin;
  }

  // pat_pool_address - computed: false, optional: true, required: false
  private _patPoolAddress = new FtdAutonatRulesPatOptionsPatPoolAddressOutputReference(this, "pat_pool_address");
  public get patPoolAddress() {
    return this._patPoolAddress;
  }
  public putPatPoolAddress(value: FtdAutonatRulesPatOptionsPatPoolAddress) {
    this._patPoolAddress.internalValue = value;
  }
  public resetPatPoolAddress() {
    this._patPoolAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patPoolAddressInput() {
    return this._patPoolAddress.internalValue;
  }
}
export interface FtdAutonatRulesSourceInterface {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#id FtdAutonatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#type FtdAutonatRules#type}
  */
  readonly type: string;
}

export function ftdAutonatRulesSourceInterfaceToTerraform(struct?: FtdAutonatRulesSourceInterfaceOutputReference | FtdAutonatRulesSourceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdAutonatRulesSourceInterfaceToHclTerraform(struct?: FtdAutonatRulesSourceInterfaceOutputReference | FtdAutonatRulesSourceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class FtdAutonatRulesSourceInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdAutonatRulesSourceInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdAutonatRulesSourceInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface FtdAutonatRulesTranslatedNetwork {
  /**
  * The ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#id FtdAutonatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#type FtdAutonatRules#type}
  */
  readonly type: string;
}

export function ftdAutonatRulesTranslatedNetworkToTerraform(struct?: FtdAutonatRulesTranslatedNetworkOutputReference | FtdAutonatRulesTranslatedNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ftdAutonatRulesTranslatedNetworkToHclTerraform(struct?: FtdAutonatRulesTranslatedNetworkOutputReference | FtdAutonatRulesTranslatedNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class FtdAutonatRulesTranslatedNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FtdAutonatRulesTranslatedNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FtdAutonatRulesTranslatedNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules fmc_ftd_autonat_rules}
*/
export class FtdAutonatRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_ftd_autonat_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FtdAutonatRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FtdAutonatRules to import
  * @param importFromId The id of the existing FtdAutonatRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FtdAutonatRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_ftd_autonat_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ftd_autonat_rules fmc_ftd_autonat_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FtdAutonatRulesConfig
  */
  public constructor(scope: Construct, id: string, config: FtdAutonatRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_ftd_autonat_rules',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._fallthrough = config.fallthrough;
    this._id = config.id;
    this._ipv6 = config.ipv6;
    this._natPolicy = config.natPolicy;
    this._natType = config.natType;
    this._netToNet = config.netToNet;
    this._noProxyArp = config.noProxyArp;
    this._performRouteLookup = config.performRouteLookup;
    this._translateDns = config.translateDns;
    this._translatedNetworkIsDestinationInterface = config.translatedNetworkIsDestinationInterface;
    this._translatedPort = config.translatedPort;
    this._destinationInterface.internalValue = config.destinationInterface;
    this._originalNetwork.internalValue = config.originalNetwork;
    this._originalPort.internalValue = config.originalPort;
    this._patOptions.internalValue = config.patOptions;
    this._sourceInterface.internalValue = config.sourceInterface;
    this._translatedNetwork.internalValue = config.translatedNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fallthrough - computed: false, optional: true, required: false
  private _fallthrough?: boolean | cdktf.IResolvable; 
  public get fallthrough() {
    return this.getBooleanAttribute('fallthrough');
  }
  public set fallthrough(value: boolean | cdktf.IResolvable) {
    this._fallthrough = value;
  }
  public resetFallthrough() {
    this._fallthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallthroughInput() {
    return this._fallthrough;
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // nat_policy - computed: false, optional: false, required: true
  private _natPolicy?: string; 
  public get natPolicy() {
    return this.getStringAttribute('nat_policy');
  }
  public set natPolicy(value: string) {
    this._natPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natPolicyInput() {
    return this._natPolicy;
  }

  // nat_type - computed: false, optional: false, required: true
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
  }

  // net_to_net - computed: false, optional: true, required: false
  private _netToNet?: boolean | cdktf.IResolvable; 
  public get netToNet() {
    return this.getBooleanAttribute('net_to_net');
  }
  public set netToNet(value: boolean | cdktf.IResolvable) {
    this._netToNet = value;
  }
  public resetNetToNet() {
    this._netToNet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netToNetInput() {
    return this._netToNet;
  }

  // no_proxy_arp - computed: false, optional: true, required: false
  private _noProxyArp?: boolean | cdktf.IResolvable; 
  public get noProxyArp() {
    return this.getBooleanAttribute('no_proxy_arp');
  }
  public set noProxyArp(value: boolean | cdktf.IResolvable) {
    this._noProxyArp = value;
  }
  public resetNoProxyArp() {
    this._noProxyArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyArpInput() {
    return this._noProxyArp;
  }

  // perform_route_lookup - computed: false, optional: true, required: false
  private _performRouteLookup?: boolean | cdktf.IResolvable; 
  public get performRouteLookup() {
    return this.getBooleanAttribute('perform_route_lookup');
  }
  public set performRouteLookup(value: boolean | cdktf.IResolvable) {
    this._performRouteLookup = value;
  }
  public resetPerformRouteLookup() {
    this._performRouteLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performRouteLookupInput() {
    return this._performRouteLookup;
  }

  // translate_dns - computed: false, optional: true, required: false
  private _translateDns?: boolean | cdktf.IResolvable; 
  public get translateDns() {
    return this.getBooleanAttribute('translate_dns');
  }
  public set translateDns(value: boolean | cdktf.IResolvable) {
    this._translateDns = value;
  }
  public resetTranslateDns() {
    this._translateDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateDnsInput() {
    return this._translateDns;
  }

  // translated_network_is_destination_interface - computed: false, optional: true, required: false
  private _translatedNetworkIsDestinationInterface?: boolean | cdktf.IResolvable; 
  public get translatedNetworkIsDestinationInterface() {
    return this.getBooleanAttribute('translated_network_is_destination_interface');
  }
  public set translatedNetworkIsDestinationInterface(value: boolean | cdktf.IResolvable) {
    this._translatedNetworkIsDestinationInterface = value;
  }
  public resetTranslatedNetworkIsDestinationInterface() {
    this._translatedNetworkIsDestinationInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedNetworkIsDestinationInterfaceInput() {
    return this._translatedNetworkIsDestinationInterface;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // destination_interface - computed: false, optional: true, required: false
  private _destinationInterface = new FtdAutonatRulesDestinationInterfaceOutputReference(this, "destination_interface");
  public get destinationInterface() {
    return this._destinationInterface;
  }
  public putDestinationInterface(value: FtdAutonatRulesDestinationInterface) {
    this._destinationInterface.internalValue = value;
  }
  public resetDestinationInterface() {
    this._destinationInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInterfaceInput() {
    return this._destinationInterface.internalValue;
  }

  // original_network - computed: false, optional: true, required: false
  private _originalNetwork = new FtdAutonatRulesOriginalNetworkOutputReference(this, "original_network");
  public get originalNetwork() {
    return this._originalNetwork;
  }
  public putOriginalNetwork(value: FtdAutonatRulesOriginalNetwork) {
    this._originalNetwork.internalValue = value;
  }
  public resetOriginalNetwork() {
    this._originalNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalNetworkInput() {
    return this._originalNetwork.internalValue;
  }

  // original_port - computed: false, optional: true, required: false
  private _originalPort = new FtdAutonatRulesOriginalPortOutputReference(this, "original_port");
  public get originalPort() {
    return this._originalPort;
  }
  public putOriginalPort(value: FtdAutonatRulesOriginalPort) {
    this._originalPort.internalValue = value;
  }
  public resetOriginalPort() {
    this._originalPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalPortInput() {
    return this._originalPort.internalValue;
  }

  // pat_options - computed: false, optional: true, required: false
  private _patOptions = new FtdAutonatRulesPatOptionsOutputReference(this, "pat_options");
  public get patOptions() {
    return this._patOptions;
  }
  public putPatOptions(value: FtdAutonatRulesPatOptions) {
    this._patOptions.internalValue = value;
  }
  public resetPatOptions() {
    this._patOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patOptionsInput() {
    return this._patOptions.internalValue;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface = new FtdAutonatRulesSourceInterfaceOutputReference(this, "source_interface");
  public get sourceInterface() {
    return this._sourceInterface;
  }
  public putSourceInterface(value: FtdAutonatRulesSourceInterface) {
    this._sourceInterface.internalValue = value;
  }
  public resetSourceInterface() {
    this._sourceInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface.internalValue;
  }

  // translated_network - computed: false, optional: true, required: false
  private _translatedNetwork = new FtdAutonatRulesTranslatedNetworkOutputReference(this, "translated_network");
  public get translatedNetwork() {
    return this._translatedNetwork;
  }
  public putTranslatedNetwork(value: FtdAutonatRulesTranslatedNetwork) {
    this._translatedNetwork.internalValue = value;
  }
  public resetTranslatedNetwork() {
    this._translatedNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedNetworkInput() {
    return this._translatedNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      fallthrough: cdktf.booleanToTerraform(this._fallthrough),
      id: cdktf.stringToTerraform(this._id),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      nat_policy: cdktf.stringToTerraform(this._natPolicy),
      nat_type: cdktf.stringToTerraform(this._natType),
      net_to_net: cdktf.booleanToTerraform(this._netToNet),
      no_proxy_arp: cdktf.booleanToTerraform(this._noProxyArp),
      perform_route_lookup: cdktf.booleanToTerraform(this._performRouteLookup),
      translate_dns: cdktf.booleanToTerraform(this._translateDns),
      translated_network_is_destination_interface: cdktf.booleanToTerraform(this._translatedNetworkIsDestinationInterface),
      translated_port: cdktf.numberToTerraform(this._translatedPort),
      destination_interface: ftdAutonatRulesDestinationInterfaceToTerraform(this._destinationInterface.internalValue),
      original_network: ftdAutonatRulesOriginalNetworkToTerraform(this._originalNetwork.internalValue),
      original_port: ftdAutonatRulesOriginalPortToTerraform(this._originalPort.internalValue),
      pat_options: ftdAutonatRulesPatOptionsToTerraform(this._patOptions.internalValue),
      source_interface: ftdAutonatRulesSourceInterfaceToTerraform(this._sourceInterface.internalValue),
      translated_network: ftdAutonatRulesTranslatedNetworkToTerraform(this._translatedNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallthrough: {
        value: cdktf.booleanToHclTerraform(this._fallthrough),
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
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_policy: {
        value: cdktf.stringToHclTerraform(this._natPolicy),
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
      net_to_net: {
        value: cdktf.booleanToHclTerraform(this._netToNet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_proxy_arp: {
        value: cdktf.booleanToHclTerraform(this._noProxyArp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      perform_route_lookup: {
        value: cdktf.booleanToHclTerraform(this._performRouteLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      translate_dns: {
        value: cdktf.booleanToHclTerraform(this._translateDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      translated_network_is_destination_interface: {
        value: cdktf.booleanToHclTerraform(this._translatedNetworkIsDestinationInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      translated_port: {
        value: cdktf.numberToHclTerraform(this._translatedPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destination_interface: {
        value: ftdAutonatRulesDestinationInterfaceToHclTerraform(this._destinationInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdAutonatRulesDestinationInterfaceList",
      },
      original_network: {
        value: ftdAutonatRulesOriginalNetworkToHclTerraform(this._originalNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdAutonatRulesOriginalNetworkList",
      },
      original_port: {
        value: ftdAutonatRulesOriginalPortToHclTerraform(this._originalPort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdAutonatRulesOriginalPortList",
      },
      pat_options: {
        value: ftdAutonatRulesPatOptionsToHclTerraform(this._patOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdAutonatRulesPatOptionsList",
      },
      source_interface: {
        value: ftdAutonatRulesSourceInterfaceToHclTerraform(this._sourceInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdAutonatRulesSourceInterfaceList",
      },
      translated_network: {
        value: ftdAutonatRulesTranslatedNetworkToHclTerraform(this._translatedNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FtdAutonatRulesTranslatedNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
