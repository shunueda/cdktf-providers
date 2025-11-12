// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemRadiusServerAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'ignore': Ignore (default); 'append-entry': Append the AVPs to existing entry; 'replace-entry': Replace the AVPs of existing entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#accounting_interim_update SystemRadiusServerA#accounting_interim_update}
  */
  readonly accountingInterimUpdate?: string;
  /**
  * 'ignore': Ignore (default); 'delete-entries-using-attribute': Delete entries matching attribute in RADIUS Table;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#accounting_on SystemRadiusServerA#accounting_on}
  */
  readonly accountingOn?: string;
  /**
  * 'ignore': Ignore; 'append-entry': Append the AVPs to existing entry (default); 'replace-entry': Replace the AVPs of existing entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#accounting_start SystemRadiusServerA#accounting_start}
  */
  readonly accountingStart?: string;
  /**
  * 'ignore': Ignore; 'delete-entry': Delete the entry (default); 'delete-entry-and-sessions': Delete the entry and data sessions associated(CGN only);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#accounting_stop SystemRadiusServerA#accounting_stop}
  */
  readonly accountingStop?: string;
  /**
  * 'msisdn': Clear using MSISDN; 'imei': Clear using IMEI; 'imsi': Clear using IMSI; 'custom1': Clear using CUSTOM1 attribute configured; 'custom2': Clear using CUSTOM2 attribute configured; 'custom3': Clear using CUSTOM3 attribute configured; 'custom4': Clear using CUSTOM4 attribute configured; 'custom5': Clear using CUSTOM5 attribute configured; 'custom6': Clear using CUSTOM6 attribute configured;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#attribute_name SystemRadiusServerA#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Clear using customized attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#custom_attribute_name SystemRadiusServerA#custom_attribute_name}
  */
  readonly customAttributeName?: string;
  /**
  * Toggle option for RADIUS reply packet(Default: Accounting response will be sent)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#disable_reply SystemRadiusServerA#disable_reply}
  */
  readonly disableReply?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#id SystemRadiusServerA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure the listen port of RADIUS server (default 1813) (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#listen_port SystemRadiusServerA#listen_port}
  */
  readonly listenPort?: number;
  /**
  * Configure shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#secret SystemRadiusServerA#secret}
  */
  readonly secret?: number;
  /**
  * The RADIUS secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#secret_string SystemRadiusServerA#secret_string}
  */
  readonly secretString?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#uuid SystemRadiusServerA#uuid}
  */
  readonly uuid?: string;
  /**
  * Join a VRRP-A failover group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#vrid SystemRadiusServerA#vrid}
  */
  readonly vrid?: number;
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#attribute SystemRadiusServerA#attribute}
  */
  readonly attribute?: SystemRadiusServerAttributeA[] | cdktf.IResolvable;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#remote SystemRadiusServerA#remote}
  */
  readonly remote?: SystemRadiusServerRemoteA;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#sampling_enable SystemRadiusServerA#sampling_enable}
  */
  readonly samplingEnable?: SystemRadiusServerSamplingEnableA[] | cdktf.IResolvable;
}
export interface SystemRadiusServerAttributeA {
  /**
  * 'inside-ipv6-prefix': Framed IPv6 Prefix; 'inside-ip': Inside IP address; 'inside-ipv6': Inside IPv6 address; 'imei': International Mobile Equipment Identity (IMEI); 'imsi': International Mobile Subscriber Identity (IMSI); 'msisdn': Mobile Subscriber Integrated Services Digital Network-Number (MSISDN); 'custom1': Customized attribute 1; 'custom2': Customized attribute 2; 'custom3': Customized attribute 3; 'custom4': Customized attribute 4; 'custom5': Customized attribute 5; 'custom6': Customized attribute 6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#attribute_value SystemRadiusServerA#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * RADIUS attribute number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#custom_number SystemRadiusServerA#custom_number}
  */
  readonly customNumber?: number;
  /**
  * RADIUS vendor attribute information (RADIUS vendor ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#custom_vendor SystemRadiusServerA#custom_vendor}
  */
  readonly customVendor?: number;
  /**
  * Customized attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#name SystemRadiusServerA#name}
  */
  readonly name?: string;
  /**
  * RADIUS attribute number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#number SystemRadiusServerA#number}
  */
  readonly number?: number;
  /**
  * '32': Prefix length 32; '48': Prefix length 48; '64': Prefix length 64; '80': Prefix length 80; '96': Prefix length 96; '112': Prefix length 112;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#prefix_length SystemRadiusServerA#prefix_length}
  */
  readonly prefixLength?: string;
  /**
  * RADIUS attribute number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#prefix_number SystemRadiusServerA#prefix_number}
  */
  readonly prefixNumber?: number;
  /**
  * RADIUS vendor attribute information (RADIUS vendor ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#prefix_vendor SystemRadiusServerA#prefix_vendor}
  */
  readonly prefixVendor?: number;
  /**
  * 'hexadecimal': Type of attribute value is hexadecimal;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#value SystemRadiusServerA#value}
  */
  readonly value?: string;
  /**
  * RADIUS vendor attribute information (RADIUS vendor ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#vendor SystemRadiusServerA#vendor}
  */
  readonly vendor?: number;
}

export function systemRadiusServerAttributeAToTerraform(struct?: SystemRadiusServerAttributeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    custom_number: cdktf.numberToTerraform(struct!.customNumber),
    custom_vendor: cdktf.numberToTerraform(struct!.customVendor),
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    prefix_number: cdktf.numberToTerraform(struct!.prefixNumber),
    prefix_vendor: cdktf.numberToTerraform(struct!.prefixVendor),
    value: cdktf.stringToTerraform(struct!.value),
    vendor: cdktf.numberToTerraform(struct!.vendor),
  }
}


export function systemRadiusServerAttributeAToHclTerraform(struct?: SystemRadiusServerAttributeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_number: {
      value: cdktf.numberToHclTerraform(struct!.customNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_vendor: {
      value: cdktf.numberToHclTerraform(struct!.customVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_number: {
      value: cdktf.numberToHclTerraform(struct!.prefixNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_vendor: {
      value: cdktf.numberToHclTerraform(struct!.prefixVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.numberToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemRadiusServerAttributeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemRadiusServerAttributeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._customNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNumber = this._customNumber;
    }
    if (this._customVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVendor = this._customVendor;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._prefixNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNumber = this._prefixNumber;
    }
    if (this._prefixVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVendor = this._prefixVendor;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemRadiusServerAttributeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeValue = undefined;
      this._customNumber = undefined;
      this._customVendor = undefined;
      this._name = undefined;
      this._number = undefined;
      this._prefixLength = undefined;
      this._prefixNumber = undefined;
      this._prefixVendor = undefined;
      this._value = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeValue = value.attributeValue;
      this._customNumber = value.customNumber;
      this._customVendor = value.customVendor;
      this._name = value.name;
      this._number = value.number;
      this._prefixLength = value.prefixLength;
      this._prefixNumber = value.prefixNumber;
      this._prefixVendor = value.prefixVendor;
      this._value = value.value;
      this._vendor = value.vendor;
    }
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // custom_number - computed: false, optional: true, required: false
  private _customNumber?: number; 
  public get customNumber() {
    return this.getNumberAttribute('custom_number');
  }
  public set customNumber(value: number) {
    this._customNumber = value;
  }
  public resetCustomNumber() {
    this._customNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNumberInput() {
    return this._customNumber;
  }

  // custom_vendor - computed: false, optional: true, required: false
  private _customVendor?: number; 
  public get customVendor() {
    return this.getNumberAttribute('custom_vendor');
  }
  public set customVendor(value: number) {
    this._customVendor = value;
  }
  public resetCustomVendor() {
    this._customVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVendorInput() {
    return this._customVendor;
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

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // prefix_number - computed: false, optional: true, required: false
  private _prefixNumber?: number; 
  public get prefixNumber() {
    return this.getNumberAttribute('prefix_number');
  }
  public set prefixNumber(value: number) {
    this._prefixNumber = value;
  }
  public resetPrefixNumber() {
    this._prefixNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNumberInput() {
    return this._prefixNumber;
  }

  // prefix_vendor - computed: false, optional: true, required: false
  private _prefixVendor?: number; 
  public get prefixVendor() {
    return this.getNumberAttribute('prefix_vendor');
  }
  public set prefixVendor(value: number) {
    this._prefixVendor = value;
  }
  public resetPrefixVendor() {
    this._prefixVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVendorInput() {
    return this._prefixVendor;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: number; 
  public get vendor() {
    return this.getNumberAttribute('vendor');
  }
  public set vendor(value: number) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

export class SystemRadiusServerAttributeAList extends cdktf.ComplexList {
  public internalValue? : SystemRadiusServerAttributeA[] | cdktf.IResolvable

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
  public get(index: number): SystemRadiusServerAttributeAOutputReference {
    return new SystemRadiusServerAttributeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemRadiusServerRemoteIpListStructA {
  /**
  * IP-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#ip_list_name SystemRadiusServerA#ip_list_name}
  */
  readonly ipListName?: string;
  /**
  * Configure shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#ip_list_secret SystemRadiusServerA#ip_list_secret}
  */
  readonly ipListSecret?: number;
  /**
  * The RADIUS secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#ip_list_secret_string SystemRadiusServerA#ip_list_secret_string}
  */
  readonly ipListSecretString?: string;
}

export function systemRadiusServerRemoteIpListStructAToTerraform(struct?: SystemRadiusServerRemoteIpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_list_name: cdktf.stringToTerraform(struct!.ipListName),
    ip_list_secret: cdktf.numberToTerraform(struct!.ipListSecret),
    ip_list_secret_string: cdktf.stringToTerraform(struct!.ipListSecretString),
  }
}


export function systemRadiusServerRemoteIpListStructAToHclTerraform(struct?: SystemRadiusServerRemoteIpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_list_name: {
      value: cdktf.stringToHclTerraform(struct!.ipListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_list_secret: {
      value: cdktf.numberToHclTerraform(struct!.ipListSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_list_secret_string: {
      value: cdktf.stringToHclTerraform(struct!.ipListSecretString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemRadiusServerRemoteIpListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemRadiusServerRemoteIpListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipListName = this._ipListName;
    }
    if (this._ipListSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipListSecret = this._ipListSecret;
    }
    if (this._ipListSecretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipListSecretString = this._ipListSecretString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemRadiusServerRemoteIpListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipListName = undefined;
      this._ipListSecret = undefined;
      this._ipListSecretString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipListName = value.ipListName;
      this._ipListSecret = value.ipListSecret;
      this._ipListSecretString = value.ipListSecretString;
    }
  }

  // ip_list_name - computed: false, optional: true, required: false
  private _ipListName?: string; 
  public get ipListName() {
    return this.getStringAttribute('ip_list_name');
  }
  public set ipListName(value: string) {
    this._ipListName = value;
  }
  public resetIpListName() {
    this._ipListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListNameInput() {
    return this._ipListName;
  }

  // ip_list_secret - computed: false, optional: true, required: false
  private _ipListSecret?: number; 
  public get ipListSecret() {
    return this.getNumberAttribute('ip_list_secret');
  }
  public set ipListSecret(value: number) {
    this._ipListSecret = value;
  }
  public resetIpListSecret() {
    this._ipListSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListSecretInput() {
    return this._ipListSecret;
  }

  // ip_list_secret_string - computed: false, optional: true, required: false
  private _ipListSecretString?: string; 
  public get ipListSecretString() {
    return this.getStringAttribute('ip_list_secret_string');
  }
  public set ipListSecretString(value: string) {
    this._ipListSecretString = value;
  }
  public resetIpListSecretString() {
    this._ipListSecretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListSecretStringInput() {
    return this._ipListSecretString;
  }
}

export class SystemRadiusServerRemoteIpListStructAList extends cdktf.ComplexList {
  public internalValue? : SystemRadiusServerRemoteIpListStructA[] | cdktf.IResolvable

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
  public get(index: number): SystemRadiusServerRemoteIpListStructAOutputReference {
    return new SystemRadiusServerRemoteIpListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemRadiusServerRemoteA {
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#ip_list SystemRadiusServerA#ip_list}
  */
  readonly ipList?: SystemRadiusServerRemoteIpListStructA[] | cdktf.IResolvable;
}

export function systemRadiusServerRemoteAToTerraform(struct?: SystemRadiusServerRemoteAOutputReference | SystemRadiusServerRemoteA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_list: cdktf.listMapper(systemRadiusServerRemoteIpListStructAToTerraform, true)(struct!.ipList),
  }
}


export function systemRadiusServerRemoteAToHclTerraform(struct?: SystemRadiusServerRemoteAOutputReference | SystemRadiusServerRemoteA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_list: {
      value: cdktf.listMapperHcl(systemRadiusServerRemoteIpListStructAToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemRadiusServerRemoteIpListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemRadiusServerRemoteAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemRadiusServerRemoteA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemRadiusServerRemoteA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipList.internalValue = value.ipList;
    }
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new SystemRadiusServerRemoteIpListStructAList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: SystemRadiusServerRemoteIpListStructA[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }
}
export interface SystemRadiusServerSamplingEnableA {
  /**
  * 'all': all; 'msisdn-received': MSISDN Received; 'imei-received': IMEI Received; 'imsi-received': IMSI Received; 'custom-received': Custom attribute Received; 'radius-request-received': RADIUS Request Received; 'radius-request-dropped': RADIUS Request Dropped (Malformed Packet); 'request-bad-secret-dropped': RADIUS Request Bad Secret Dropped; 'request-no-key-vap-dropped': RADIUS Request No Key Attribute Dropped; 'request-malformed-dropped': RADIUS Request Malformed Dropped; 'request-ignored': RADIUS Request Ignored; 'radius-table-full': RADIUS Request Dropped (Table Full); 'secret-not-configured-dropped': RADIUS Secret Not Configured Dropped; 'ha-standby-dropped': HA Standby Dropped; 'ipv6-prefix-length-mismatch': Framed IPV6 Prefix Length Mismatch; 'invalid-key': Radius Request has Invalid Key Field; 'smp-created': RADIUS SMP Created; 'smp-deleted': RADIUS SMP Deleted; 'smp-mem-allocated': RADIUS SMP Memory Allocated; 'smp-mem-alloc-failed': RADIUS SMP Memory Allocation Failed; 'smp-mem-freed': RADIUS SMP Memory Freed; 'smp-in-rml': RADIUS SMP in RML; 'mem-allocated': RADIUS Memory Allocated; 'mem-alloc-failed': RADIUS Memory Allocation Failed; 'mem-freed': RADIUS Memory Freed; 'ha-sync-create-sent': HA Record Sync Create Sent; 'ha-sync-delete-sent': HA Record Sync Delete Sent; 'ha-sync-create-recv': HA Record Sync Create Received; 'ha-sync-delete-recv': HA Record Sync Delete Received; 'acct-on-filters-full': RADIUS Acct On Request Ignored(Filters Full); 'acct-on-dup-request': Duplicate RADIUS Acct On Request; 'ip-mismatch-delete': Radius Entry IP Mismatch Delete; 'ip-add-race-drop': Radius Entry IP Add Race Drop; 'ha-sync-no-key-vap-dropped': HA Record Sync No key dropped; 'inter-card-msg-fail-drop': Inter-Card Message Fail Drop; 'radius-packets-redirected': RADIUS packets redirected (SO); 'radius-packets-redirect-fail-dropped': RADIUS packets dropped due to redirect failure (SO); 'radius-packets-process-local': RADIUS packets processed locally without redirection (SO); 'radius-packets-dropped-not-lo': RADIUS packets dropped dest not loopback (SO); 'radius-inter-card-dup-redir': RADIUS packet dropped as redirected by other blade (SO);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#counters1 SystemRadiusServerA#counters1}
  */
  readonly counters1?: string;
}

export function systemRadiusServerSamplingEnableAToTerraform(struct?: SystemRadiusServerSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemRadiusServerSamplingEnableAToHclTerraform(struct?: SystemRadiusServerSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemRadiusServerSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemRadiusServerSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemRadiusServerSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemRadiusServerSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : SystemRadiusServerSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): SystemRadiusServerSamplingEnableAOutputReference {
    return new SystemRadiusServerSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server thunder_system_radius_server}
*/
export class SystemRadiusServerA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_radius_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemRadiusServerA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemRadiusServerA to import
  * @param importFromId The id of the existing SystemRadiusServerA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemRadiusServerA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_radius_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system_radius_server thunder_system_radius_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemRadiusServerAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemRadiusServerAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_radius_server',
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
    this._accountingInterimUpdate = config.accountingInterimUpdate;
    this._accountingOn = config.accountingOn;
    this._accountingStart = config.accountingStart;
    this._accountingStop = config.accountingStop;
    this._attributeName = config.attributeName;
    this._customAttributeName = config.customAttributeName;
    this._disableReply = config.disableReply;
    this._id = config.id;
    this._listenPort = config.listenPort;
    this._secret = config.secret;
    this._secretString = config.secretString;
    this._uuid = config.uuid;
    this._vrid = config.vrid;
    this._attribute.internalValue = config.attribute;
    this._remote.internalValue = config.remote;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting_interim_update - computed: false, optional: true, required: false
  private _accountingInterimUpdate?: string; 
  public get accountingInterimUpdate() {
    return this.getStringAttribute('accounting_interim_update');
  }
  public set accountingInterimUpdate(value: string) {
    this._accountingInterimUpdate = value;
  }
  public resetAccountingInterimUpdate() {
    this._accountingInterimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInterimUpdateInput() {
    return this._accountingInterimUpdate;
  }

  // accounting_on - computed: false, optional: true, required: false
  private _accountingOn?: string; 
  public get accountingOn() {
    return this.getStringAttribute('accounting_on');
  }
  public set accountingOn(value: string) {
    this._accountingOn = value;
  }
  public resetAccountingOn() {
    this._accountingOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingOnInput() {
    return this._accountingOn;
  }

  // accounting_start - computed: false, optional: true, required: false
  private _accountingStart?: string; 
  public get accountingStart() {
    return this.getStringAttribute('accounting_start');
  }
  public set accountingStart(value: string) {
    this._accountingStart = value;
  }
  public resetAccountingStart() {
    this._accountingStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingStartInput() {
    return this._accountingStart;
  }

  // accounting_stop - computed: false, optional: true, required: false
  private _accountingStop?: string; 
  public get accountingStop() {
    return this.getStringAttribute('accounting_stop');
  }
  public set accountingStop(value: string) {
    this._accountingStop = value;
  }
  public resetAccountingStop() {
    this._accountingStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingStopInput() {
    return this._accountingStop;
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // custom_attribute_name - computed: false, optional: true, required: false
  private _customAttributeName?: string; 
  public get customAttributeName() {
    return this.getStringAttribute('custom_attribute_name');
  }
  public set customAttributeName(value: string) {
    this._customAttributeName = value;
  }
  public resetCustomAttributeName() {
    this._customAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributeNameInput() {
    return this._customAttributeName;
  }

  // disable_reply - computed: false, optional: true, required: false
  private _disableReply?: number; 
  public get disableReply() {
    return this.getNumberAttribute('disable_reply');
  }
  public set disableReply(value: number) {
    this._disableReply = value;
  }
  public resetDisableReply() {
    this._disableReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReplyInput() {
    return this._disableReply;
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

  // listen_port - computed: false, optional: true, required: false
  private _listenPort?: number; 
  public get listenPort() {
    return this.getNumberAttribute('listen_port');
  }
  public set listenPort(value: number) {
    this._listenPort = value;
  }
  public resetListenPort() {
    this._listenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenPortInput() {
    return this._listenPort;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: number; 
  public get secret() {
    return this.getNumberAttribute('secret');
  }
  public set secret(value: number) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
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

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute = new SystemRadiusServerAttributeAList(this, "attribute", false);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: SystemRadiusServerAttributeA[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new SystemRadiusServerRemoteAOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: SystemRadiusServerRemoteA) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemRadiusServerSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemRadiusServerSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting_interim_update: cdktf.stringToTerraform(this._accountingInterimUpdate),
      accounting_on: cdktf.stringToTerraform(this._accountingOn),
      accounting_start: cdktf.stringToTerraform(this._accountingStart),
      accounting_stop: cdktf.stringToTerraform(this._accountingStop),
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      custom_attribute_name: cdktf.stringToTerraform(this._customAttributeName),
      disable_reply: cdktf.numberToTerraform(this._disableReply),
      id: cdktf.stringToTerraform(this._id),
      listen_port: cdktf.numberToTerraform(this._listenPort),
      secret: cdktf.numberToTerraform(this._secret),
      secret_string: cdktf.stringToTerraform(this._secretString),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid: cdktf.numberToTerraform(this._vrid),
      attribute: cdktf.listMapper(systemRadiusServerAttributeAToTerraform, true)(this._attribute.internalValue),
      remote: systemRadiusServerRemoteAToTerraform(this._remote.internalValue),
      sampling_enable: cdktf.listMapper(systemRadiusServerSamplingEnableAToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting_interim_update: {
        value: cdktf.stringToHclTerraform(this._accountingInterimUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting_on: {
        value: cdktf.stringToHclTerraform(this._accountingOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting_start: {
        value: cdktf.stringToHclTerraform(this._accountingStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting_stop: {
        value: cdktf.stringToHclTerraform(this._accountingStop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_name: {
        value: cdktf.stringToHclTerraform(this._attributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_attribute_name: {
        value: cdktf.stringToHclTerraform(this._customAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_reply: {
        value: cdktf.numberToHclTerraform(this._disableReply),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen_port: {
        value: cdktf.numberToHclTerraform(this._listenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret: {
        value: cdktf.numberToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
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
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attribute: {
        value: cdktf.listMapperHcl(systemRadiusServerAttributeAToHclTerraform, true)(this._attribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemRadiusServerAttributeAList",
      },
      remote: {
        value: systemRadiusServerRemoteAToHclTerraform(this._remote.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemRadiusServerRemoteAList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(systemRadiusServerSamplingEnableAToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemRadiusServerSamplingEnableAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
