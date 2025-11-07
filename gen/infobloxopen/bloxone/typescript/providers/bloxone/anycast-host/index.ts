// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnycastHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array of AnycastConfigRef structures, identifying the anycast configurations that this host is a member of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#anycast_config_refs AnycastHost#anycast_config_refs}
  */
  readonly anycastConfigRefs?: AnycastHostAnycastConfigRefs[] | cdktf.IResolvable;
  /**
  * Struct BGP configuration; defines BGP configuration for one anycast-enabled on-prem host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#config_bgp AnycastHost#config_bgp}
  */
  readonly configBgp?: AnycastHostConfigBgp;
  /**
  * Struct OSPF configuration; defines OSPF configuration for one anycast-enabled on-prem host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#config_ospf AnycastHost#config_ospf}
  */
  readonly configOspf?: AnycastHostConfigOspf;
  /**
  * Struct OSPFv3 configuration; defines OSPFv3 configuration for one anycast-enabled on-prem host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#config_ospfv3 AnycastHost#config_ospfv3}
  */
  readonly configOspfv3?: AnycastHostConfigOspfv3;
  /**
  * Numeric host identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#id AnycastHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}
export interface AnycastHostAnycastConfigRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#anycast_config_name AnycastHost#anycast_config_name}
  */
  readonly anycastConfigName: string;
  /**
  * Routing protocols enabled for this anycast configuration, on a particular host. Valid protocol names are "BGP", "OSPF"/"OSPFv2", "OSPFv3".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#routing_protocols AnycastHost#routing_protocols}
  */
  readonly routingProtocols?: string[];
}

export function anycastHostAnycastConfigRefsToTerraform(struct?: AnycastHostAnycastConfigRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anycast_config_name: cdktf.stringToTerraform(struct!.anycastConfigName),
    routing_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routingProtocols),
  }
}


export function anycastHostAnycastConfigRefsToHclTerraform(struct?: AnycastHostAnycastConfigRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anycast_config_name: {
      value: cdktf.stringToHclTerraform(struct!.anycastConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routingProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnycastHostAnycastConfigRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnycastHostAnycastConfigRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anycastConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycastConfigName = this._anycastConfigName;
    }
    if (this._routingProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingProtocols = this._routingProtocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnycastHostAnycastConfigRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anycastConfigName = undefined;
      this._routingProtocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anycastConfigName = value.anycastConfigName;
      this._routingProtocols = value.routingProtocols;
    }
  }

  // anycast_config_name - computed: false, optional: false, required: true
  private _anycastConfigName?: string; 
  public get anycastConfigName() {
    return this.getStringAttribute('anycast_config_name');
  }
  public set anycastConfigName(value: string) {
    this._anycastConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastConfigNameInput() {
    return this._anycastConfigName;
  }

  // routing_protocols - computed: true, optional: true, required: false
  private _routingProtocols?: string[]; 
  public get routingProtocols() {
    return this.getListAttribute('routing_protocols');
  }
  public set routingProtocols(value: string[]) {
    this._routingProtocols = value;
  }
  public resetRoutingProtocols() {
    this._routingProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingProtocolsInput() {
    return this._routingProtocols;
  }
}

export class AnycastHostAnycastConfigRefsList extends cdktf.ComplexList {
  public internalValue? : AnycastHostAnycastConfigRefs[] | cdktf.IResolvable

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
  public get(index: number): AnycastHostAnycastConfigRefsOutputReference {
    return new AnycastHostAnycastConfigRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnycastHostConfigBgpFields {
  /**
  * The set of field mask paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#paths AnycastHost#paths}
  */
  readonly paths?: string[];
}

export function anycastHostConfigBgpFieldsToTerraform(struct?: AnycastHostConfigBgpFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function anycastHostConfigBgpFieldsToHclTerraform(struct?: AnycastHostConfigBgpFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnycastHostConfigBgpFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AnycastHostConfigBgpFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnycastHostConfigBgpFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
    }
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}
export interface AnycastHostConfigBgpNeighbors {
  /**
  * Autonomous system number of this BGP/anycast enabled on-prem host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#asn AnycastHost#asn}
  */
  readonly asn: number;
  /**
  * Autonomous system as text (supported in ASDOT or ASPLAIN format) Optional, requires the asn field to be set to the equivalent integer value of the ASDOT/ASPLAIN string contained in this field or be unset/zero.
  * 		Example:
  * 
  * 		| ASDOT       | ASPLAIN     | INTEGER     | VALID/INVALID |
  * 		|-------------|-------------|-------------|---------------|
  * 		| 0.1         | 1           | 1           | Valid         |
  * 		| 1           | 1           | 1           | Valid         |
  * 		| 65535       | 65535       | 65535       | Valid         |
  * 		| 0.65535     | 65535       | 65535       | Valid         |
  * 		| 1.0         | 65536       | 65536       | Valid         |
  * 		| 1.1         | 65537       | 65537       | Valid         |
  * 		| 1.65535     | 131071      | 131071      | Valid         |
  * 		| 65535.0     | 4294901760  | 4294901760  | Valid         |
  * 		| 65535.1     | 4294901761  | 4294901761  | Valid         |
  * 		| 65535.65535 | 4294967295  | 4294967295  | Valid         |
  * 		| 0.65536     |             |             | Invalid       |
  * 		| 65535.655536|             |             | Invalid       |
  * 		| 65536.0     |             |             | Invalid       |
  * 		| 65536.65535 |             |             | Invalid       |
  * 		|             | 4294967296  |             | Invalid       | 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#asn_text AnycastHost#asn_text}
  */
  readonly asnText?: string;
  /**
  * IPv4 address of the BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#ip_address AnycastHost#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Max hop count, if BGP multihop is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#max_hop_count AnycastHost#max_hop_count}
  */
  readonly maxHopCount?: number;
  /**
  * BGP multihop enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#multihop AnycastHost#multihop}
  */
  readonly multihop?: boolean | cdktf.IResolvable;
  /**
  * BGP protocol access password for this BGP neighbor, max 25 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#password AnycastHost#password}
  */
  readonly password?: string;
}

export function anycastHostConfigBgpNeighborsToTerraform(struct?: AnycastHostConfigBgpNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    asn_text: cdktf.stringToTerraform(struct!.asnText),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    max_hop_count: cdktf.numberToTerraform(struct!.maxHopCount),
    multihop: cdktf.booleanToTerraform(struct!.multihop),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function anycastHostConfigBgpNeighborsToHclTerraform(struct?: AnycastHostConfigBgpNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asn_text: {
      value: cdktf.stringToHclTerraform(struct!.asnText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_hop_count: {
      value: cdktf.numberToHclTerraform(struct!.maxHopCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multihop: {
      value: cdktf.booleanToHclTerraform(struct!.multihop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnycastHostConfigBgpNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AnycastHostConfigBgpNeighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._asnText !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnText = this._asnText;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._maxHopCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHopCount = this._maxHopCount;
    }
    if (this._multihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.multihop = this._multihop;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnycastHostConfigBgpNeighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._asnText = undefined;
      this._ipAddress = undefined;
      this._maxHopCount = undefined;
      this._multihop = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._asnText = value.asnText;
      this._ipAddress = value.ipAddress;
      this._maxHopCount = value.maxHopCount;
      this._multihop = value.multihop;
      this._password = value.password;
    }
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // asn_text - computed: true, optional: true, required: false
  private _asnText?: string; 
  public get asnText() {
    return this.getStringAttribute('asn_text');
  }
  public set asnText(value: string) {
    this._asnText = value;
  }
  public resetAsnText() {
    this._asnText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnTextInput() {
    return this._asnText;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // max_hop_count - computed: false, optional: true, required: false
  private _maxHopCount?: number; 
  public get maxHopCount() {
    return this.getNumberAttribute('max_hop_count');
  }
  public set maxHopCount(value: number) {
    this._maxHopCount = value;
  }
  public resetMaxHopCount() {
    this._maxHopCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopCountInput() {
    return this._maxHopCount;
  }

  // multihop - computed: false, optional: true, required: false
  private _multihop?: boolean | cdktf.IResolvable; 
  public get multihop() {
    return this.getBooleanAttribute('multihop');
  }
  public set multihop(value: boolean | cdktf.IResolvable) {
    this._multihop = value;
  }
  public resetMultihop() {
    this._multihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopInput() {
    return this._multihop;
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
}

export class AnycastHostConfigBgpNeighborsList extends cdktf.ComplexList {
  public internalValue? : AnycastHostConfigBgpNeighbors[] | cdktf.IResolvable

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
  public get(index: number): AnycastHostConfigBgpNeighborsOutputReference {
    return new AnycastHostConfigBgpNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AnycastHostConfigBgp {
  /**
  * Autonomous system number of this BGP/anycast enabled on-prem host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#asn AnycastHost#asn}
  */
  readonly asn: number;
  /**
  * Represents a set of symbolic field paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#fields AnycastHost#fields}
  */
  readonly fields?: AnycastHostConfigBgpFields;
  /**
  * BGP route hold-down timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#holddown_secs AnycastHost#holddown_secs}
  */
  readonly holddownSecs: number;
  /**
  * BGP keep-alive timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#keep_alive_secs AnycastHost#keep_alive_secs}
  */
  readonly keepAliveSecs?: number;
  /**
  * Enable/disable link detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#link_detect AnycastHost#link_detect}
  */
  readonly linkDetect?: boolean | cdktf.IResolvable;
  /**
  * List of BgpNeighbor structs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#neighbors AnycastHost#neighbors}
  */
  readonly neighbors?: AnycastHostConfigBgpNeighbors[] | cdktf.IResolvable;
  /**
  * Any predefined BGP configuration, with embedded new lines; the preamble will be prepended to the generated BGP configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#preamble AnycastHost#preamble}
  */
  readonly preamble?: string;
}

export function anycastHostConfigBgpToTerraform(struct?: AnycastHostConfigBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    fields: anycastHostConfigBgpFieldsToTerraform(struct!.fields),
    holddown_secs: cdktf.numberToTerraform(struct!.holddownSecs),
    keep_alive_secs: cdktf.numberToTerraform(struct!.keepAliveSecs),
    link_detect: cdktf.booleanToTerraform(struct!.linkDetect),
    neighbors: cdktf.listMapper(anycastHostConfigBgpNeighborsToTerraform, false)(struct!.neighbors),
    preamble: cdktf.stringToTerraform(struct!.preamble),
  }
}


export function anycastHostConfigBgpToHclTerraform(struct?: AnycastHostConfigBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fields: {
      value: anycastHostConfigBgpFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "struct",
      storageClassType: "AnycastHostConfigBgpFields",
    },
    holddown_secs: {
      value: cdktf.numberToHclTerraform(struct!.holddownSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive_secs: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_detect: {
      value: cdktf.booleanToHclTerraform(struct!.linkDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    neighbors: {
      value: cdktf.listMapperHcl(anycastHostConfigBgpNeighborsToHclTerraform, false)(struct!.neighbors),
      isBlock: true,
      type: "list",
      storageClassType: "AnycastHostConfigBgpNeighborsList",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnycastHostConfigBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AnycastHostConfigBgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._holddownSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.holddownSecs = this._holddownSecs;
    }
    if (this._keepAliveSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveSecs = this._keepAliveSecs;
    }
    if (this._linkDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDetect = this._linkDetect;
    }
    if (this._neighbors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbors = this._neighbors?.internalValue;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnycastHostConfigBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._fields.internalValue = undefined;
      this._holddownSecs = undefined;
      this._keepAliveSecs = undefined;
      this._linkDetect = undefined;
      this._neighbors.internalValue = undefined;
      this._preamble = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._fields.internalValue = value.fields;
      this._holddownSecs = value.holddownSecs;
      this._keepAliveSecs = value.keepAliveSecs;
      this._linkDetect = value.linkDetect;
      this._neighbors.internalValue = value.neighbors;
      this._preamble = value.preamble;
    }
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // asn_text - computed: true, optional: false, required: false
  public get asnText() {
    return this.getStringAttribute('asn_text');
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new AnycastHostConfigBgpFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: AnycastHostConfigBgpFields) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // holddown_secs - computed: false, optional: false, required: true
  private _holddownSecs?: number; 
  public get holddownSecs() {
    return this.getNumberAttribute('holddown_secs');
  }
  public set holddownSecs(value: number) {
    this._holddownSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownSecsInput() {
    return this._holddownSecs;
  }

  // keep_alive_secs - computed: true, optional: true, required: false
  private _keepAliveSecs?: number; 
  public get keepAliveSecs() {
    return this.getNumberAttribute('keep_alive_secs');
  }
  public set keepAliveSecs(value: number) {
    this._keepAliveSecs = value;
  }
  public resetKeepAliveSecs() {
    this._keepAliveSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveSecsInput() {
    return this._keepAliveSecs;
  }

  // link_detect - computed: false, optional: true, required: false
  private _linkDetect?: boolean | cdktf.IResolvable; 
  public get linkDetect() {
    return this.getBooleanAttribute('link_detect');
  }
  public set linkDetect(value: boolean | cdktf.IResolvable) {
    this._linkDetect = value;
  }
  public resetLinkDetect() {
    this._linkDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDetectInput() {
    return this._linkDetect;
  }

  // neighbors - computed: false, optional: true, required: false
  private _neighbors = new AnycastHostConfigBgpNeighborsList(this, "neighbors", false);
  public get neighbors() {
    return this._neighbors;
  }
  public putNeighbors(value: AnycastHostConfigBgpNeighbors[] | cdktf.IResolvable) {
    this._neighbors.internalValue = value;
  }
  public resetNeighbors() {
    this._neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborsInput() {
    return this._neighbors.internalValue;
  }

  // preamble - computed: false, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }
}
export interface AnycastHostConfigOspf {
  /**
  * OSPF area identifier; usually in the format of an IPv4 address (although not an address itself)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#area AnycastHost#area}
  */
  readonly area?: string;
  /**
  * OSPF area type; one of: "STANDARD", "STUB", "NSSA".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#area_type AnycastHost#area_type}
  */
  readonly areaType?: string;
  /**
  * OSPF authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#authentication_key AnycastHost#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * title: Numeric OSPF authentication key identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#authentication_key_id AnycastHost#authentication_key_id}
  */
  readonly authenticationKeyId?: number;
  /**
  * OSPF authentication type; one of "Clear", "MD5".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#authentication_type AnycastHost#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Explicit link cost for the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#cost AnycastHost#cost}
  */
  readonly cost?: number;
  /**
  * OSPF router dead interval timer in seconds; must be the same for all the routers on the same network; default: 40 secs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#dead_interval AnycastHost#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Period (in seconds) of OSPF Hello packet, sent by the OSPF router; must be the same for all the routers on the same network; default: 10 secs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#hello_interval AnycastHost#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Name of the interface that is configured with external IP address of the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#interface AnycastHost#interface}
  */
  readonly interface?: string;
  /**
  * Any predefined OSPF configuration, with embedded new lines; the preamble will be prepended to the generated BGP configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#preamble AnycastHost#preamble}
  */
  readonly preamble?: string;
  /**
  * Period (in seconds) of retransmitting for OSPF Database Description and Link State Requests; default: 5 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#retransmit_interval AnycastHost#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Estimated time to transmit link state advertisements; default: 1 sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#transmit_delay AnycastHost#transmit_delay}
  */
  readonly transmitDelay?: number;
}

export function anycastHostConfigOspfToTerraform(struct?: AnycastHostConfigOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.stringToTerraform(struct!.area),
    area_type: cdktf.stringToTerraform(struct!.areaType),
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    authentication_key_id: cdktf.numberToTerraform(struct!.authenticationKeyId),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    cost: cdktf.numberToTerraform(struct!.cost),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    interface: cdktf.stringToTerraform(struct!.interface),
    preamble: cdktf.stringToTerraform(struct!.preamble),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
  }
}


export function anycastHostConfigOspfToHclTerraform(struct?: AnycastHostConfigOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.stringToHclTerraform(struct!.area),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_type: {
      value: cdktf.stringToHclTerraform(struct!.areaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key_id: {
      value: cdktf.numberToHclTerraform(struct!.authenticationKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
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
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preamble: {
      value: cdktf.stringToHclTerraform(struct!.preamble),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnycastHostConfigOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AnycastHostConfigOspf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._area !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area;
    }
    if (this._areaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaType = this._areaType;
    }
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._authenticationKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyId = this._authenticationKeyId;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._preamble !== undefined) {
      hasAnyValues = true;
      internalValueResult.preamble = this._preamble;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnycastHostConfigOspf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._area = undefined;
      this._areaType = undefined;
      this._authenticationKey = undefined;
      this._authenticationKeyId = undefined;
      this._authenticationType = undefined;
      this._cost = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._interface = undefined;
      this._preamble = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._area = value.area;
      this._areaType = value.areaType;
      this._authenticationKey = value.authenticationKey;
      this._authenticationKeyId = value.authenticationKeyId;
      this._authenticationType = value.authenticationType;
      this._cost = value.cost;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._interface = value.interface;
      this._preamble = value.preamble;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
    }
  }

  // area - computed: false, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // area_type - computed: false, optional: true, required: false
  private _areaType?: string; 
  public get areaType() {
    return this.getStringAttribute('area_type');
  }
  public set areaType(value: string) {
    this._areaType = value;
  }
  public resetAreaType() {
    this._areaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaTypeInput() {
    return this._areaType;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // authentication_key_id - computed: false, optional: true, required: false
  private _authenticationKeyId?: number; 
  public get authenticationKeyId() {
    return this.getNumberAttribute('authentication_key_id');
  }
  public set authenticationKeyId(value: number) {
    this._authenticationKeyId = value;
  }
  public resetAuthenticationKeyId() {
    this._authenticationKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyIdInput() {
    return this._authenticationKeyId;
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

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
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

  // preamble - computed: false, optional: true, required: false
  private _preamble?: string; 
  public get preamble() {
    return this.getStringAttribute('preamble');
  }
  public set preamble(value: string) {
    this._preamble = value;
  }
  public resetPreamble() {
    this._preamble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleInput() {
    return this._preamble;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }
}
export interface AnycastHostConfigOspfv3 {
  /**
  * OSPF area identifier; usually in the format of an IPv4 address (although not an address itself)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#area AnycastHost#area}
  */
  readonly area?: string;
  /**
  * Explicit link cost for the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#cost AnycastHost#cost}
  */
  readonly cost?: number;
  /**
  * OSPF router dead interval timer in seconds; must be the same for all the routers on the same network; default: 40 sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#dead_interval AnycastHost#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Period (in seconds) of OSPF Hello packet, sent by the OSPF router; must be the same for all the routers on the same network; default: 10 secs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#hello_interval AnycastHost#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Name of the interface that is configured with external IP address of the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#interface AnycastHost#interface}
  */
  readonly interface?: string;
  /**
  * Period (in seconds) of retransmitting for OSPF Database Description and Link State Requests; default: 5 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#retransmit_interval AnycastHost#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Estimated time to transmit link state advertisements; default: 1 sec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#transmit_delay AnycastHost#transmit_delay}
  */
  readonly transmitDelay?: number;
}

export function anycastHostConfigOspfv3ToTerraform(struct?: AnycastHostConfigOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.stringToTerraform(struct!.area),
    cost: cdktf.numberToTerraform(struct!.cost),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    interface: cdktf.stringToTerraform(struct!.interface),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
  }
}


export function anycastHostConfigOspfv3ToHclTerraform(struct?: AnycastHostConfigOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.stringToHclTerraform(struct!.area),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
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
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AnycastHostConfigOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AnycastHostConfigOspfv3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._area !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnycastHostConfigOspfv3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._area = undefined;
      this._cost = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._interface = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._area = value.area;
      this._cost = value.cost;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._interface = value.interface;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
    }
  }

  // area - computed: false, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
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

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host bloxone_anycast_host}
*/
export class AnycastHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_anycast_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AnycastHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AnycastHost to import
  * @param importFromId The id of the existing AnycastHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AnycastHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_anycast_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/anycast_host bloxone_anycast_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnycastHostConfig
  */
  public constructor(scope: Construct, id: string, config: AnycastHostConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_anycast_host',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anycastConfigRefs.internalValue = config.anycastConfigRefs;
    this._configBgp.internalValue = config.configBgp;
    this._configOspf.internalValue = config.configOspf;
    this._configOspfv3.internalValue = config.configOspfv3;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anycast_config_refs - computed: false, optional: true, required: false
  private _anycastConfigRefs = new AnycastHostAnycastConfigRefsList(this, "anycast_config_refs", false);
  public get anycastConfigRefs() {
    return this._anycastConfigRefs;
  }
  public putAnycastConfigRefs(value: AnycastHostAnycastConfigRefs[] | cdktf.IResolvable) {
    this._anycastConfigRefs.internalValue = value;
  }
  public resetAnycastConfigRefs() {
    this._anycastConfigRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastConfigRefsInput() {
    return this._anycastConfigRefs.internalValue;
  }

  // config_bgp - computed: false, optional: true, required: false
  private _configBgp = new AnycastHostConfigBgpOutputReference(this, "config_bgp");
  public get configBgp() {
    return this._configBgp;
  }
  public putConfigBgp(value: AnycastHostConfigBgp) {
    this._configBgp.internalValue = value;
  }
  public resetConfigBgp() {
    this._configBgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configBgpInput() {
    return this._configBgp.internalValue;
  }

  // config_ospf - computed: false, optional: true, required: false
  private _configOspf = new AnycastHostConfigOspfOutputReference(this, "config_ospf");
  public get configOspf() {
    return this._configOspf;
  }
  public putConfigOspf(value: AnycastHostConfigOspf) {
    this._configOspf.internalValue = value;
  }
  public resetConfigOspf() {
    this._configOspf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOspfInput() {
    return this._configOspf.internalValue;
  }

  // config_ospfv3 - computed: false, optional: true, required: false
  private _configOspfv3 = new AnycastHostConfigOspfv3OutputReference(this, "config_ospfv3");
  public get configOspfv3() {
    return this._configOspfv3;
  }
  public putConfigOspfv3(value: AnycastHostConfigOspfv3) {
    this._configOspfv3.internalValue = value;
  }
  public resetConfigOspfv3() {
    this._configOspfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOspfv3Input() {
    return this._configOspfv3.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anycast_config_refs: cdktf.listMapper(anycastHostAnycastConfigRefsToTerraform, false)(this._anycastConfigRefs.internalValue),
      config_bgp: anycastHostConfigBgpToTerraform(this._configBgp.internalValue),
      config_ospf: anycastHostConfigOspfToTerraform(this._configOspf.internalValue),
      config_ospfv3: anycastHostConfigOspfv3ToTerraform(this._configOspfv3.internalValue),
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anycast_config_refs: {
        value: cdktf.listMapperHcl(anycastHostAnycastConfigRefsToHclTerraform, false)(this._anycastConfigRefs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AnycastHostAnycastConfigRefsList",
      },
      config_bgp: {
        value: anycastHostConfigBgpToHclTerraform(this._configBgp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AnycastHostConfigBgp",
      },
      config_ospf: {
        value: anycastHostConfigOspfToHclTerraform(this._configOspf.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AnycastHostConfigOspf",
      },
      config_ospfv3: {
        value: anycastHostConfigOspfv3ToHclTerraform(this._configOspfv3.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AnycastHostConfigOspfv3",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
