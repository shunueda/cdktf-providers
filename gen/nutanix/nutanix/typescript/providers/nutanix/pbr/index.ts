// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PbrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#action Pbr#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#api_version Pbr#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#id Pbr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#is_bidirectional Pbr#is_bidirectional}
  */
  readonly isBidirectional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#name Pbr#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#priority Pbr#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#protocol_type Pbr#protocol_type}
  */
  readonly protocolType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#service_ip_list Pbr#service_ip_list}
  */
  readonly serviceIpList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#vpc_name Pbr#vpc_name}
  */
  readonly vpcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#vpc_reference_uuid Pbr#vpc_reference_uuid}
  */
  readonly vpcReferenceUuid?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#destination Pbr#destination}
  */
  readonly destination: PbrDestination;
  /**
  * protocol_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#protocol_parameters Pbr#protocol_parameters}
  */
  readonly protocolParameters?: PbrProtocolParameters;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#source Pbr#source}
  */
  readonly source: PbrSource;
}
export interface PbrDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#address_type Pbr#address_type}
  */
  readonly addressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#prefix_length Pbr#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#subnet_ip Pbr#subnet_ip}
  */
  readonly subnetIp?: string;
}

export function pbrDestinationToTerraform(struct?: PbrDestinationOutputReference | PbrDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    subnet_ip: cdktf.stringToTerraform(struct!.subnetIp),
  }
}


export function pbrDestinationToHclTerraform(struct?: PbrDestinationOutputReference | PbrDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ip: {
      value: cdktf.stringToHclTerraform(struct!.subnetIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PbrDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._subnetIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIp = this._subnetIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressType = undefined;
      this._prefixLength = undefined;
      this._subnetIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressType = value.addressType;
      this._prefixLength = value.prefixLength;
      this._subnetIp = value.subnetIp;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // subnet_ip - computed: false, optional: true, required: false
  private _subnetIp?: string; 
  public get subnetIp() {
    return this.getStringAttribute('subnet_ip');
  }
  public set subnetIp(value: string) {
    this._subnetIp = value;
  }
  public resetSubnetIp() {
    this._subnetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpInput() {
    return this._subnetIp;
  }
}
export interface PbrProtocolParametersIcmp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#icmp_code Pbr#icmp_code}
  */
  readonly icmpCode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#icmp_type Pbr#icmp_type}
  */
  readonly icmpType: number;
}

export function pbrProtocolParametersIcmpToTerraform(struct?: PbrProtocolParametersIcmpOutputReference | PbrProtocolParametersIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.numberToTerraform(struct!.icmpCode),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
  }
}


export function pbrProtocolParametersIcmpToHclTerraform(struct?: PbrProtocolParametersIcmpOutputReference | PbrProtocolParametersIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_code: {
      value: cdktf.numberToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrProtocolParametersIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PbrProtocolParametersIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrProtocolParametersIcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpCode = undefined;
      this._icmpType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
    }
  }

  // icmp_code - computed: false, optional: false, required: true
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: false, required: true
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }
}
export interface PbrProtocolParametersTcpDestinationPortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#end_port Pbr#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#start_port Pbr#start_port}
  */
  readonly startPort?: number;
}

export function pbrProtocolParametersTcpDestinationPortRangeListStructToTerraform(struct?: PbrProtocolParametersTcpDestinationPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function pbrProtocolParametersTcpDestinationPortRangeListStructToHclTerraform(struct?: PbrProtocolParametersTcpDestinationPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrProtocolParametersTcpDestinationPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrProtocolParametersTcpDestinationPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrProtocolParametersTcpDestinationPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class PbrProtocolParametersTcpDestinationPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : PbrProtocolParametersTcpDestinationPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): PbrProtocolParametersTcpDestinationPortRangeListStructOutputReference {
    return new PbrProtocolParametersTcpDestinationPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrProtocolParametersTcpSourcePortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#end_port Pbr#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#start_port Pbr#start_port}
  */
  readonly startPort?: number;
}

export function pbrProtocolParametersTcpSourcePortRangeListStructToTerraform(struct?: PbrProtocolParametersTcpSourcePortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function pbrProtocolParametersTcpSourcePortRangeListStructToHclTerraform(struct?: PbrProtocolParametersTcpSourcePortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrProtocolParametersTcpSourcePortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrProtocolParametersTcpSourcePortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrProtocolParametersTcpSourcePortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class PbrProtocolParametersTcpSourcePortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : PbrProtocolParametersTcpSourcePortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): PbrProtocolParametersTcpSourcePortRangeListStructOutputReference {
    return new PbrProtocolParametersTcpSourcePortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrProtocolParametersTcp {
  /**
  * destination_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#destination_port_range_list Pbr#destination_port_range_list}
  */
  readonly destinationPortRangeList?: PbrProtocolParametersTcpDestinationPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * source_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#source_port_range_list Pbr#source_port_range_list}
  */
  readonly sourcePortRangeList?: PbrProtocolParametersTcpSourcePortRangeListStruct[] | cdktf.IResolvable;
}

export function pbrProtocolParametersTcpToTerraform(struct?: PbrProtocolParametersTcpOutputReference | PbrProtocolParametersTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_range_list: cdktf.listMapper(pbrProtocolParametersTcpDestinationPortRangeListStructToTerraform, true)(struct!.destinationPortRangeList),
    source_port_range_list: cdktf.listMapper(pbrProtocolParametersTcpSourcePortRangeListStructToTerraform, true)(struct!.sourcePortRangeList),
  }
}


export function pbrProtocolParametersTcpToHclTerraform(struct?: PbrProtocolParametersTcpOutputReference | PbrProtocolParametersTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port_range_list: {
      value: cdktf.listMapperHcl(pbrProtocolParametersTcpDestinationPortRangeListStructToHclTerraform, true)(struct!.destinationPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "PbrProtocolParametersTcpDestinationPortRangeListStructList",
    },
    source_port_range_list: {
      value: cdktf.listMapperHcl(pbrProtocolParametersTcpSourcePortRangeListStructToHclTerraform, true)(struct!.sourcePortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "PbrProtocolParametersTcpSourcePortRangeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrProtocolParametersTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PbrProtocolParametersTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRangeList = this._destinationPortRangeList?.internalValue;
    }
    if (this._sourcePortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRangeList = this._sourcePortRangeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrProtocolParametersTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPortRangeList.internalValue = undefined;
      this._sourcePortRangeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPortRangeList.internalValue = value.destinationPortRangeList;
      this._sourcePortRangeList.internalValue = value.sourcePortRangeList;
    }
  }

  // destination_port_range_list - computed: false, optional: true, required: false
  private _destinationPortRangeList = new PbrProtocolParametersTcpDestinationPortRangeListStructList(this, "destination_port_range_list", false);
  public get destinationPortRangeList() {
    return this._destinationPortRangeList;
  }
  public putDestinationPortRangeList(value: PbrProtocolParametersTcpDestinationPortRangeListStruct[] | cdktf.IResolvable) {
    this._destinationPortRangeList.internalValue = value;
  }
  public resetDestinationPortRangeList() {
    this._destinationPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeListInput() {
    return this._destinationPortRangeList.internalValue;
  }

  // source_port_range_list - computed: false, optional: true, required: false
  private _sourcePortRangeList = new PbrProtocolParametersTcpSourcePortRangeListStructList(this, "source_port_range_list", false);
  public get sourcePortRangeList() {
    return this._sourcePortRangeList;
  }
  public putSourcePortRangeList(value: PbrProtocolParametersTcpSourcePortRangeListStruct[] | cdktf.IResolvable) {
    this._sourcePortRangeList.internalValue = value;
  }
  public resetSourcePortRangeList() {
    this._sourcePortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeListInput() {
    return this._sourcePortRangeList.internalValue;
  }
}
export interface PbrProtocolParametersUdpDestinationPortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#end_port Pbr#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#start_port Pbr#start_port}
  */
  readonly startPort?: number;
}

export function pbrProtocolParametersUdpDestinationPortRangeListStructToTerraform(struct?: PbrProtocolParametersUdpDestinationPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function pbrProtocolParametersUdpDestinationPortRangeListStructToHclTerraform(struct?: PbrProtocolParametersUdpDestinationPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrProtocolParametersUdpDestinationPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrProtocolParametersUdpDestinationPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrProtocolParametersUdpDestinationPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class PbrProtocolParametersUdpDestinationPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : PbrProtocolParametersUdpDestinationPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): PbrProtocolParametersUdpDestinationPortRangeListStructOutputReference {
    return new PbrProtocolParametersUdpDestinationPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrProtocolParametersUdpSourcePortRangeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#end_port Pbr#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#start_port Pbr#start_port}
  */
  readonly startPort?: number;
}

export function pbrProtocolParametersUdpSourcePortRangeListStructToTerraform(struct?: PbrProtocolParametersUdpSourcePortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function pbrProtocolParametersUdpSourcePortRangeListStructToHclTerraform(struct?: PbrProtocolParametersUdpSourcePortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrProtocolParametersUdpSourcePortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbrProtocolParametersUdpSourcePortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrProtocolParametersUdpSourcePortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class PbrProtocolParametersUdpSourcePortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : PbrProtocolParametersUdpSourcePortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): PbrProtocolParametersUdpSourcePortRangeListStructOutputReference {
    return new PbrProtocolParametersUdpSourcePortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbrProtocolParametersUdp {
  /**
  * destination_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#destination_port_range_list Pbr#destination_port_range_list}
  */
  readonly destinationPortRangeList?: PbrProtocolParametersUdpDestinationPortRangeListStruct[] | cdktf.IResolvable;
  /**
  * source_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#source_port_range_list Pbr#source_port_range_list}
  */
  readonly sourcePortRangeList?: PbrProtocolParametersUdpSourcePortRangeListStruct[] | cdktf.IResolvable;
}

export function pbrProtocolParametersUdpToTerraform(struct?: PbrProtocolParametersUdpOutputReference | PbrProtocolParametersUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_port_range_list: cdktf.listMapper(pbrProtocolParametersUdpDestinationPortRangeListStructToTerraform, true)(struct!.destinationPortRangeList),
    source_port_range_list: cdktf.listMapper(pbrProtocolParametersUdpSourcePortRangeListStructToTerraform, true)(struct!.sourcePortRangeList),
  }
}


export function pbrProtocolParametersUdpToHclTerraform(struct?: PbrProtocolParametersUdpOutputReference | PbrProtocolParametersUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_port_range_list: {
      value: cdktf.listMapperHcl(pbrProtocolParametersUdpDestinationPortRangeListStructToHclTerraform, true)(struct!.destinationPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "PbrProtocolParametersUdpDestinationPortRangeListStructList",
    },
    source_port_range_list: {
      value: cdktf.listMapperHcl(pbrProtocolParametersUdpSourcePortRangeListStructToHclTerraform, true)(struct!.sourcePortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "PbrProtocolParametersUdpSourcePortRangeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrProtocolParametersUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PbrProtocolParametersUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRangeList = this._destinationPortRangeList?.internalValue;
    }
    if (this._sourcePortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRangeList = this._sourcePortRangeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrProtocolParametersUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPortRangeList.internalValue = undefined;
      this._sourcePortRangeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPortRangeList.internalValue = value.destinationPortRangeList;
      this._sourcePortRangeList.internalValue = value.sourcePortRangeList;
    }
  }

  // destination_port_range_list - computed: false, optional: true, required: false
  private _destinationPortRangeList = new PbrProtocolParametersUdpDestinationPortRangeListStructList(this, "destination_port_range_list", false);
  public get destinationPortRangeList() {
    return this._destinationPortRangeList;
  }
  public putDestinationPortRangeList(value: PbrProtocolParametersUdpDestinationPortRangeListStruct[] | cdktf.IResolvable) {
    this._destinationPortRangeList.internalValue = value;
  }
  public resetDestinationPortRangeList() {
    this._destinationPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeListInput() {
    return this._destinationPortRangeList.internalValue;
  }

  // source_port_range_list - computed: false, optional: true, required: false
  private _sourcePortRangeList = new PbrProtocolParametersUdpSourcePortRangeListStructList(this, "source_port_range_list", false);
  public get sourcePortRangeList() {
    return this._sourcePortRangeList;
  }
  public putSourcePortRangeList(value: PbrProtocolParametersUdpSourcePortRangeListStruct[] | cdktf.IResolvable) {
    this._sourcePortRangeList.internalValue = value;
  }
  public resetSourcePortRangeList() {
    this._sourcePortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeListInput() {
    return this._sourcePortRangeList.internalValue;
  }
}
export interface PbrProtocolParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#protocol_number Pbr#protocol_number}
  */
  readonly protocolNumber?: string;
  /**
  * icmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#icmp Pbr#icmp}
  */
  readonly icmp?: PbrProtocolParametersIcmp;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#tcp Pbr#tcp}
  */
  readonly tcp?: PbrProtocolParametersTcp;
  /**
  * udp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#udp Pbr#udp}
  */
  readonly udp?: PbrProtocolParametersUdp;
}

export function pbrProtocolParametersToTerraform(struct?: PbrProtocolParametersOutputReference | PbrProtocolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_number: cdktf.stringToTerraform(struct!.protocolNumber),
    icmp: pbrProtocolParametersIcmpToTerraform(struct!.icmp),
    tcp: pbrProtocolParametersTcpToTerraform(struct!.tcp),
    udp: pbrProtocolParametersUdpToTerraform(struct!.udp),
  }
}


export function pbrProtocolParametersToHclTerraform(struct?: PbrProtocolParametersOutputReference | PbrProtocolParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol_number: {
      value: cdktf.stringToHclTerraform(struct!.protocolNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp: {
      value: pbrProtocolParametersIcmpToHclTerraform(struct!.icmp),
      isBlock: true,
      type: "list",
      storageClassType: "PbrProtocolParametersIcmpList",
    },
    tcp: {
      value: pbrProtocolParametersTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "list",
      storageClassType: "PbrProtocolParametersTcpList",
    },
    udp: {
      value: pbrProtocolParametersUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "list",
      storageClassType: "PbrProtocolParametersUdpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrProtocolParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PbrProtocolParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolNumber = this._protocolNumber;
    }
    if (this._icmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp?.internalValue;
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

  public set internalValue(value: PbrProtocolParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protocolNumber = undefined;
      this._icmp.internalValue = undefined;
      this._tcp.internalValue = undefined;
      this._udp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protocolNumber = value.protocolNumber;
      this._icmp.internalValue = value.icmp;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
    }
  }

  // protocol_number - computed: false, optional: true, required: false
  private _protocolNumber?: string; 
  public get protocolNumber() {
    return this.getStringAttribute('protocol_number');
  }
  public set protocolNumber(value: string) {
    this._protocolNumber = value;
  }
  public resetProtocolNumber() {
    this._protocolNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumberInput() {
    return this._protocolNumber;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp = new PbrProtocolParametersIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: PbrProtocolParametersIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new PbrProtocolParametersTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: PbrProtocolParametersTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: false, optional: true, required: false
  private _udp = new PbrProtocolParametersUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: PbrProtocolParametersUdp) {
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
export interface PbrSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#address_type Pbr#address_type}
  */
  readonly addressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#prefix_length Pbr#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#subnet_ip Pbr#subnet_ip}
  */
  readonly subnetIp?: string;
}

export function pbrSourceToTerraform(struct?: PbrSourceOutputReference | PbrSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    subnet_ip: cdktf.stringToTerraform(struct!.subnetIp),
  }
}


export function pbrSourceToHclTerraform(struct?: PbrSourceOutputReference | PbrSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ip: {
      value: cdktf.stringToHclTerraform(struct!.subnetIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbrSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PbrSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._subnetIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIp = this._subnetIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbrSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressType = undefined;
      this._prefixLength = undefined;
      this._subnetIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressType = value.addressType;
      this._prefixLength = value.prefixLength;
      this._subnetIp = value.subnetIp;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // subnet_ip - computed: false, optional: true, required: false
  private _subnetIp?: string; 
  public get subnetIp() {
    return this.getStringAttribute('subnet_ip');
  }
  public set subnetIp(value: string) {
    this._subnetIp = value;
  }
  public resetSubnetIp() {
    this._subnetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpInput() {
    return this._subnetIp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr nutanix_pbr}
*/
export class Pbr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_pbr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pbr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pbr to import
  * @param importFromId The id of the existing Pbr that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pbr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_pbr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/pbr nutanix_pbr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PbrConfig
  */
  public constructor(scope: Construct, id: string, config: PbrConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_pbr',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._apiVersion = config.apiVersion;
    this._id = config.id;
    this._isBidirectional = config.isBidirectional;
    this._name = config.name;
    this._priority = config.priority;
    this._protocolType = config.protocolType;
    this._serviceIpList = config.serviceIpList;
    this._vpcName = config.vpcName;
    this._vpcReferenceUuid = config.vpcReferenceUuid;
    this._destination.internalValue = config.destination;
    this._protocolParameters.internalValue = config.protocolParameters;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

  // is_bidirectional - computed: true, optional: true, required: false
  private _isBidirectional?: boolean | cdktf.IResolvable; 
  public get isBidirectional() {
    return this.getBooleanAttribute('is_bidirectional');
  }
  public set isBidirectional(value: boolean | cdktf.IResolvable) {
    this._isBidirectional = value;
  }
  public resetIsBidirectional() {
    this._isBidirectional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBidirectionalInput() {
    return this._isBidirectional;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol_type - computed: false, optional: false, required: true
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // service_ip_list - computed: true, optional: true, required: false
  private _serviceIpList?: string[]; 
  public get serviceIpList() {
    return this.getListAttribute('service_ip_list');
  }
  public set serviceIpList(value: string[]) {
    this._serviceIpList = value;
  }
  public resetServiceIpList() {
    this._serviceIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpListInput() {
    return this._serviceIpList;
  }

  // vpc_name - computed: true, optional: true, required: false
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  public resetVpcName() {
    this._vpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }

  // vpc_reference_uuid - computed: true, optional: true, required: false
  private _vpcReferenceUuid?: string; 
  public get vpcReferenceUuid() {
    return this.getStringAttribute('vpc_reference_uuid');
  }
  public set vpcReferenceUuid(value: string) {
    this._vpcReferenceUuid = value;
  }
  public resetVpcReferenceUuid() {
    this._vpcReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReferenceUuidInput() {
    return this._vpcReferenceUuid;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new PbrDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: PbrDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // protocol_parameters - computed: false, optional: true, required: false
  private _protocolParameters = new PbrProtocolParametersOutputReference(this, "protocol_parameters");
  public get protocolParameters() {
    return this._protocolParameters;
  }
  public putProtocolParameters(value: PbrProtocolParameters) {
    this._protocolParameters.internalValue = value;
  }
  public resetProtocolParameters() {
    this._protocolParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolParametersInput() {
    return this._protocolParameters.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new PbrSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: PbrSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      api_version: cdktf.stringToTerraform(this._apiVersion),
      id: cdktf.stringToTerraform(this._id),
      is_bidirectional: cdktf.booleanToTerraform(this._isBidirectional),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      service_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIpList),
      vpc_name: cdktf.stringToTerraform(this._vpcName),
      vpc_reference_uuid: cdktf.stringToTerraform(this._vpcReferenceUuid),
      destination: pbrDestinationToTerraform(this._destination.internalValue),
      protocol_parameters: pbrProtocolParametersToTerraform(this._protocolParameters.internalValue),
      source: pbrSourceToTerraform(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
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
      is_bidirectional: {
        value: cdktf.booleanToHclTerraform(this._isBidirectional),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol_type: {
        value: cdktf.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIpList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_name: {
        value: cdktf.stringToHclTerraform(this._vpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_reference_uuid: {
        value: cdktf.stringToHclTerraform(this._vpcReferenceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: pbrDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PbrDestinationList",
      },
      protocol_parameters: {
        value: pbrProtocolParametersToHclTerraform(this._protocolParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PbrProtocolParametersList",
      },
      source: {
        value: pbrSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PbrSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
