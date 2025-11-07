// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstInterfaceIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP address of interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#addr DdosDstInterfaceIp#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#id DdosDstInterfaceIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable logging of limit exceed drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#log_enable DdosDstInterfaceIp#log_enable}
  */
  readonly logEnable?: number;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#log_periodic DdosDstInterfaceIp#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#user_tag DdosDstInterfaceIp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#uuid DdosDstInterfaceIp#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_proto_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#ip_proto_list DdosDstInterfaceIp#ip_proto_list}
  */
  readonly ipProtoList?: DdosDstInterfaceIpIpProtoListStruct[] | cdktf.IResolvable;
  /**
  * l4_type_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#l4_type_list DdosDstInterfaceIp#l4_type_list}
  */
  readonly l4TypeList?: DdosDstInterfaceIpL4TypeListStruct[] | cdktf.IResolvable;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#port_list DdosDstInterfaceIp#port_list}
  */
  readonly portList?: DdosDstInterfaceIpPortListStruct[] | cdktf.IResolvable;
}
export interface DdosDstInterfaceIpIpProtoListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#deny DdosDstInterfaceIp#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#glid DdosDstInterfaceIp#glid}
  */
  readonly glid?: string;
  /**
  * IP protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#port_num DdosDstInterfaceIp#port_num}
  */
  readonly portNum: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#user_tag DdosDstInterfaceIp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#uuid DdosDstInterfaceIp#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstInterfaceIpIpProtoListStructToTerraform(struct?: DdosDstInterfaceIpIpProtoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstInterfaceIpIpProtoListStructToHclTerraform(struct?: DdosDstInterfaceIpIpProtoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstInterfaceIpIpProtoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstInterfaceIpIpProtoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstInterfaceIpIpProtoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._portNum = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._glid = value.glid;
      this._portNum = value.portNum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
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
}

export class DdosDstInterfaceIpIpProtoListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstInterfaceIpIpProtoListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstInterfaceIpIpProtoListStructOutputReference {
    return new DdosDstInterfaceIpIpProtoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfg {
  /**
  * Only decapsulate GRE packet with this key (Hexadecimal 0x0-0xFFFFFFFF,decimal 0-4294967295)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#key DdosDstInterfaceIp#key}
  */
  readonly key?: string;
}

export function ddosDstInterfaceIpL4TypeListTunnelDecapKeyCfgToTerraform(struct?: DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ddosDstInterfaceIpL4TypeListTunnelDecapKeyCfgToHclTerraform(struct?: DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfgList extends cdktf.ComplexList {
  public internalValue? : DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable

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
  public get(index: number): DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfgOutputReference {
    return new DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstInterfaceIpL4TypeListTunnelDecap {
  /**
  * Enable GRE Tunnel decapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#gre_decap DdosDstInterfaceIp#gre_decap}
  */
  readonly greDecap?: number;
  /**
  * Enable IP Tunnel decapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#ip_decap DdosDstInterfaceIp#ip_decap}
  */
  readonly ipDecap?: number;
  /**
  * key_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#key_cfg DdosDstInterfaceIp#key_cfg}
  */
  readonly keyCfg?: DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable;
}

export function ddosDstInterfaceIpL4TypeListTunnelDecapToTerraform(struct?: DdosDstInterfaceIpL4TypeListTunnelDecapOutputReference | DdosDstInterfaceIpL4TypeListTunnelDecap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_decap: cdktf.numberToTerraform(struct!.greDecap),
    ip_decap: cdktf.numberToTerraform(struct!.ipDecap),
    key_cfg: cdktf.listMapper(ddosDstInterfaceIpL4TypeListTunnelDecapKeyCfgToTerraform, true)(struct!.keyCfg),
  }
}


export function ddosDstInterfaceIpL4TypeListTunnelDecapToHclTerraform(struct?: DdosDstInterfaceIpL4TypeListTunnelDecapOutputReference | DdosDstInterfaceIpL4TypeListTunnelDecap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_decap: {
      value: cdktf.numberToHclTerraform(struct!.greDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_cfg: {
      value: cdktf.listMapperHcl(ddosDstInterfaceIpL4TypeListTunnelDecapKeyCfgToHclTerraform, true)(struct!.keyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstInterfaceIpL4TypeListTunnelDecapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstInterfaceIpL4TypeListTunnelDecap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.greDecap = this._greDecap;
    }
    if (this._ipDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDecap = this._ipDecap;
    }
    if (this._keyCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCfg = this._keyCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstInterfaceIpL4TypeListTunnelDecap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greDecap = undefined;
      this._ipDecap = undefined;
      this._keyCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greDecap = value.greDecap;
      this._ipDecap = value.ipDecap;
      this._keyCfg.internalValue = value.keyCfg;
    }
  }

  // gre_decap - computed: false, optional: true, required: false
  private _greDecap?: number; 
  public get greDecap() {
    return this.getNumberAttribute('gre_decap');
  }
  public set greDecap(value: number) {
    this._greDecap = value;
  }
  public resetGreDecap() {
    this._greDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greDecapInput() {
    return this._greDecap;
  }

  // ip_decap - computed: false, optional: true, required: false
  private _ipDecap?: number; 
  public get ipDecap() {
    return this.getNumberAttribute('ip_decap');
  }
  public set ipDecap(value: number) {
    this._ipDecap = value;
  }
  public resetIpDecap() {
    this._ipDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDecapInput() {
    return this._ipDecap;
  }

  // key_cfg - computed: false, optional: true, required: false
  private _keyCfg = new DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfgList(this, "key_cfg", false);
  public get keyCfg() {
    return this._keyCfg;
  }
  public putKeyCfg(value: DdosDstInterfaceIpL4TypeListTunnelDecapKeyCfg[] | cdktf.IResolvable) {
    this._keyCfg.internalValue = value;
  }
  public resetKeyCfg() {
    this._keyCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCfgInput() {
    return this._keyCfg.internalValue;
  }
}
export interface DdosDstInterfaceIpL4TypeListTunnelRateLimit {
  /**
  * Enable inner IP rate limiting on GRE traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#gre_rate_limit DdosDstInterfaceIp#gre_rate_limit}
  */
  readonly greRateLimit?: number;
  /**
  * Enable inner IP rate limiting on IPinIP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#ip_rate_limit DdosDstInterfaceIp#ip_rate_limit}
  */
  readonly ipRateLimit?: number;
}

export function ddosDstInterfaceIpL4TypeListTunnelRateLimitToTerraform(struct?: DdosDstInterfaceIpL4TypeListTunnelRateLimitOutputReference | DdosDstInterfaceIpL4TypeListTunnelRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_rate_limit: cdktf.numberToTerraform(struct!.greRateLimit),
    ip_rate_limit: cdktf.numberToTerraform(struct!.ipRateLimit),
  }
}


export function ddosDstInterfaceIpL4TypeListTunnelRateLimitToHclTerraform(struct?: DdosDstInterfaceIpL4TypeListTunnelRateLimitOutputReference | DdosDstInterfaceIpL4TypeListTunnelRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.greRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstInterfaceIpL4TypeListTunnelRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstInterfaceIpL4TypeListTunnelRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.greRateLimit = this._greRateLimit;
    }
    if (this._ipRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRateLimit = this._ipRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstInterfaceIpL4TypeListTunnelRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greRateLimit = undefined;
      this._ipRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greRateLimit = value.greRateLimit;
      this._ipRateLimit = value.ipRateLimit;
    }
  }

  // gre_rate_limit - computed: false, optional: true, required: false
  private _greRateLimit?: number; 
  public get greRateLimit() {
    return this.getNumberAttribute('gre_rate_limit');
  }
  public set greRateLimit(value: number) {
    this._greRateLimit = value;
  }
  public resetGreRateLimit() {
    this._greRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greRateLimitInput() {
    return this._greRateLimit;
  }

  // ip_rate_limit - computed: false, optional: true, required: false
  private _ipRateLimit?: number; 
  public get ipRateLimit() {
    return this.getNumberAttribute('ip_rate_limit');
  }
  public set ipRateLimit(value: number) {
    this._ipRateLimit = value;
  }
  public resetIpRateLimit() {
    this._ipRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRateLimitInput() {
    return this._ipRateLimit;
  }
}
export interface DdosDstInterfaceIpL4TypeListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#deny DdosDstInterfaceIp#deny}
  */
  readonly deny?: number;
  /**
  * Drop fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#drop_frag_pkt DdosDstInterfaceIp#drop_frag_pkt}
  */
  readonly dropFragPkt?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#glid DdosDstInterfaceIp#glid}
  */
  readonly glid?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#protocol DdosDstInterfaceIp#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#user_tag DdosDstInterfaceIp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#uuid DdosDstInterfaceIp#uuid}
  */
  readonly uuid?: string;
  /**
  * tunnel_decap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#tunnel_decap DdosDstInterfaceIp#tunnel_decap}
  */
  readonly tunnelDecap?: DdosDstInterfaceIpL4TypeListTunnelDecap;
  /**
  * tunnel_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#tunnel_rate_limit DdosDstInterfaceIp#tunnel_rate_limit}
  */
  readonly tunnelRateLimit?: DdosDstInterfaceIpL4TypeListTunnelRateLimit;
}

export function ddosDstInterfaceIpL4TypeListStructToTerraform(struct?: DdosDstInterfaceIpL4TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    drop_frag_pkt: cdktf.numberToTerraform(struct!.dropFragPkt),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tunnel_decap: ddosDstInterfaceIpL4TypeListTunnelDecapToTerraform(struct!.tunnelDecap),
    tunnel_rate_limit: ddosDstInterfaceIpL4TypeListTunnelRateLimitToTerraform(struct!.tunnelRateLimit),
  }
}


export function ddosDstInterfaceIpL4TypeListStructToHclTerraform(struct?: DdosDstInterfaceIpL4TypeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_frag_pkt: {
      value: cdktf.numberToHclTerraform(struct!.dropFragPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_decap: {
      value: ddosDstInterfaceIpL4TypeListTunnelDecapToHclTerraform(struct!.tunnelDecap),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstInterfaceIpL4TypeListTunnelDecapList",
    },
    tunnel_rate_limit: {
      value: ddosDstInterfaceIpL4TypeListTunnelRateLimitToHclTerraform(struct!.tunnelRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstInterfaceIpL4TypeListTunnelRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstInterfaceIpL4TypeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstInterfaceIpL4TypeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._dropFragPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFragPkt = this._dropFragPkt;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tunnelDecap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDecap = this._tunnelDecap?.internalValue;
    }
    if (this._tunnelRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelRateLimit = this._tunnelRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstInterfaceIpL4TypeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._dropFragPkt = undefined;
      this._glid = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tunnelDecap.internalValue = undefined;
      this._tunnelRateLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._dropFragPkt = value.dropFragPkt;
      this._glid = value.glid;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tunnelDecap.internalValue = value.tunnelDecap;
      this._tunnelRateLimit.internalValue = value.tunnelRateLimit;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // drop_frag_pkt - computed: false, optional: true, required: false
  private _dropFragPkt?: number; 
  public get dropFragPkt() {
    return this.getNumberAttribute('drop_frag_pkt');
  }
  public set dropFragPkt(value: number) {
    this._dropFragPkt = value;
  }
  public resetDropFragPkt() {
    this._dropFragPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFragPktInput() {
    return this._dropFragPkt;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
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

  // tunnel_decap - computed: false, optional: true, required: false
  private _tunnelDecap = new DdosDstInterfaceIpL4TypeListTunnelDecapOutputReference(this, "tunnel_decap");
  public get tunnelDecap() {
    return this._tunnelDecap;
  }
  public putTunnelDecap(value: DdosDstInterfaceIpL4TypeListTunnelDecap) {
    this._tunnelDecap.internalValue = value;
  }
  public resetTunnelDecap() {
    this._tunnelDecap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDecapInput() {
    return this._tunnelDecap.internalValue;
  }

  // tunnel_rate_limit - computed: false, optional: true, required: false
  private _tunnelRateLimit = new DdosDstInterfaceIpL4TypeListTunnelRateLimitOutputReference(this, "tunnel_rate_limit");
  public get tunnelRateLimit() {
    return this._tunnelRateLimit;
  }
  public putTunnelRateLimit(value: DdosDstInterfaceIpL4TypeListTunnelRateLimit) {
    this._tunnelRateLimit.internalValue = value;
  }
  public resetTunnelRateLimit() {
    this._tunnelRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRateLimitInput() {
    return this._tunnelRateLimit.internalValue;
  }
}

export class DdosDstInterfaceIpL4TypeListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstInterfaceIpL4TypeListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstInterfaceIpL4TypeListStructOutputReference {
    return new DdosDstInterfaceIpL4TypeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstInterfaceIpPortListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#deny DdosDstInterfaceIp#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#glid DdosDstInterfaceIp#glid}
  */
  readonly glid?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#port_num DdosDstInterfaceIp#port_num}
  */
  readonly portNum: number;
  /**
  * 'tcp': tcp; 'udp': udp; 'http-probe': http port for interface health check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#protocol DdosDstInterfaceIp#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#user_tag DdosDstInterfaceIp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#uuid DdosDstInterfaceIp#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstInterfaceIpPortListStructToTerraform(struct?: DdosDstInterfaceIpPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    port_num: cdktf.numberToTerraform(struct!.portNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstInterfaceIpPortListStructToHclTerraform(struct?: DdosDstInterfaceIpPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
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
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstInterfaceIpPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstInterfaceIpPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstInterfaceIpPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._portNum = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deny = value.deny;
      this._glid = value.glid;
      this._portNum = value.portNum;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // glid - computed: false, optional: true, required: false
  private _glid?: string; 
  public get glid() {
    return this.getStringAttribute('glid');
  }
  public set glid(value: string) {
    this._glid = value;
  }
  public resetGlid() {
    this._glid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidInput() {
    return this._glid;
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
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
}

export class DdosDstInterfaceIpPortListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstInterfaceIpPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstInterfaceIpPortListStructOutputReference {
    return new DdosDstInterfaceIpPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip thunder_ddos_dst_interface_ip}
*/
export class DdosDstInterfaceIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_interface_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstInterfaceIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstInterfaceIp to import
  * @param importFromId The id of the existing DdosDstInterfaceIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstInterfaceIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_interface_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_interface_ip thunder_ddos_dst_interface_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstInterfaceIpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstInterfaceIpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_interface_ip',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addr = config.addr;
    this._id = config.id;
    this._logEnable = config.logEnable;
    this._logPeriodic = config.logPeriodic;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._ipProtoList.internalValue = config.ipProtoList;
    this._l4TypeList.internalValue = config.l4TypeList;
    this._portList.internalValue = config.portList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

  // log_enable - computed: false, optional: true, required: false
  private _logEnable?: number; 
  public get logEnable() {
    return this.getNumberAttribute('log_enable');
  }
  public set logEnable(value: number) {
    this._logEnable = value;
  }
  public resetLogEnable() {
    this._logEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnableInput() {
    return this._logEnable;
  }

  // log_periodic - computed: false, optional: true, required: false
  private _logPeriodic?: number; 
  public get logPeriodic() {
    return this.getNumberAttribute('log_periodic');
  }
  public set logPeriodic(value: number) {
    this._logPeriodic = value;
  }
  public resetLogPeriodic() {
    this._logPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPeriodicInput() {
    return this._logPeriodic;
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

  // ip_proto_list - computed: false, optional: true, required: false
  private _ipProtoList = new DdosDstInterfaceIpIpProtoListStructList(this, "ip_proto_list", false);
  public get ipProtoList() {
    return this._ipProtoList;
  }
  public putIpProtoList(value: DdosDstInterfaceIpIpProtoListStruct[] | cdktf.IResolvable) {
    this._ipProtoList.internalValue = value;
  }
  public resetIpProtoList() {
    this._ipProtoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoListInput() {
    return this._ipProtoList.internalValue;
  }

  // l4_type_list - computed: false, optional: true, required: false
  private _l4TypeList = new DdosDstInterfaceIpL4TypeListStructList(this, "l4_type_list", false);
  public get l4TypeList() {
    return this._l4TypeList;
  }
  public putL4TypeList(value: DdosDstInterfaceIpL4TypeListStruct[] | cdktf.IResolvable) {
    this._l4TypeList.internalValue = value;
  }
  public resetL4TypeList() {
    this._l4TypeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeListInput() {
    return this._l4TypeList.internalValue;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new DdosDstInterfaceIpPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: DdosDstInterfaceIpPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      id: cdktf.stringToTerraform(this._id),
      log_enable: cdktf.numberToTerraform(this._logEnable),
      log_periodic: cdktf.numberToTerraform(this._logPeriodic),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip_proto_list: cdktf.listMapper(ddosDstInterfaceIpIpProtoListStructToTerraform, true)(this._ipProtoList.internalValue),
      l4_type_list: cdktf.listMapper(ddosDstInterfaceIpL4TypeListStructToTerraform, true)(this._l4TypeList.internalValue),
      port_list: cdktf.listMapper(ddosDstInterfaceIpPortListStructToTerraform, true)(this._portList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr: {
        value: cdktf.stringToHclTerraform(this._addr),
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
      log_enable: {
        value: cdktf.numberToHclTerraform(this._logEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_periodic: {
        value: cdktf.numberToHclTerraform(this._logPeriodic),
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
      ip_proto_list: {
        value: cdktf.listMapperHcl(ddosDstInterfaceIpIpProtoListStructToHclTerraform, true)(this._ipProtoList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstInterfaceIpIpProtoListStructList",
      },
      l4_type_list: {
        value: cdktf.listMapperHcl(ddosDstInterfaceIpL4TypeListStructToHclTerraform, true)(this._l4TypeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstInterfaceIpL4TypeListStructList",
      },
      port_list: {
        value: cdktf.listMapperHcl(ddosDstInterfaceIpPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstInterfaceIpPortListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
