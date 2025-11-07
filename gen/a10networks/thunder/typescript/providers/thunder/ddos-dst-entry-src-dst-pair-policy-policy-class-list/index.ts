// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstEntrySrcDstPairPolicyPolicyClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Always permit for the Source to bypass all feature & limit checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#bypass DdosDstEntrySrcDstPairPolicyPolicyClassList#bypass}
  */
  readonly bypass?: number;
  /**
  * Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#class_list_name DdosDstEntrySrcDstPairPolicyPolicyClassList#class_list_name}
  */
  readonly classListName: string;
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#dst_entry_name DdosDstEntrySrcDstPairPolicyPolicyClassList#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#glid DdosDstEntrySrcDstPairPolicyPolicyClassList#glid}
  */
  readonly glid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#id DdosDstEntrySrcDstPairPolicyPolicyClassList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#log_periodic DdosDstEntrySrcDstPairPolicyPolicyClassList#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Maximum count for dynamic src-dst entry under class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#max_dynamic_entry_count DdosDstEntrySrcDstPairPolicyPolicyClassList#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * SrcBasedPolicyName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#src_based_policy_name DdosDstEntrySrcDstPairPolicyPolicyClassList#src_based_policy_name}
  */
  readonly srcBasedPolicyName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#user_tag DdosDstEntrySrcDstPairPolicyPolicyClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#uuid DdosDstEntrySrcDstPairPolicyPolicyClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * app_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#app_type_src_dst_list DdosDstEntrySrcDstPairPolicyPolicyClassList#app_type_src_dst_list}
  */
  readonly appTypeSrcDstList?: DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStruct[] | cdktf.IResolvable;
  /**
  * class_list_overflow_policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#class_list_overflow_policy_list DdosDstEntrySrcDstPairPolicyPolicyClassList#class_list_overflow_policy_list}
  */
  readonly classListOverflowPolicyList?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStruct[] | cdktf.IResolvable;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#exceed_log_cfg DdosDstEntrySrcDstPairPolicyPolicyClassList#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfg;
  /**
  * l4_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#l4_type_src_dst_list DdosDstEntrySrcDstPairPolicyPolicyClassList#l4_type_src_dst_list}
  */
  readonly l4TypeSrcDstList?: DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#sampling_enable DdosDstEntrySrcDstPairPolicyPolicyClassList#sampling_enable}
  */
  readonly samplingEnable?: DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnable[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#template DdosDstEntrySrcDstPairPolicyPolicyClassList#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyPolicyClassListTemplate;
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#dns DdosDstEntrySrcDstPairPolicyPolicyClassList#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#http DdosDstEntrySrcDstPairPolicyPolicyClassList#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#sip DdosDstEntrySrcDstPairPolicyPolicyClassList#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#ssl_l4 DdosDstEntrySrcDstPairPolicyPolicyClassList#ssl_l4}
  */
  readonly sslL4?: string;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStruct {
  /**
  * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#protocol DdosDstEntrySrcDstPairPolicyPolicyClassList#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#user_tag DdosDstEntrySrcDstPairPolicyPolicyClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#uuid DdosDstEntrySrcDstPairPolicyPolicyClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#template DdosDstEntrySrcDstPairPolicyPolicyClassList#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    template: {
      value: ddosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate {
  /**
  * DDOS dns template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#dns DdosDstEntrySrcDstPairPolicyPolicyClassList#dns}
  */
  readonly dns?: string;
  /**
  * DDOS http template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#http DdosDstEntrySrcDstPairPolicyPolicyClassList#http}
  */
  readonly http?: string;
  /**
  * DDOS sip template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#sip DdosDstEntrySrcDstPairPolicyPolicyClassList#sip}
  */
  readonly sip?: string;
  /**
  * DDOS SSL-L4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#ssl_l4 DdosDstEntrySrcDstPairPolicyPolicyClassList#ssl_l4}
  */
  readonly sslL4?: string;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    http: cdktf.stringToTerraform(struct!.http),
    sip: cdktf.stringToTerraform(struct!.sip),
    ssl_l4: cdktf.stringToTerraform(struct!.sslL4),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip: {
      value: cdktf.stringToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_l4: {
      value: cdktf.stringToHclTerraform(struct!.sslL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sslL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslL4 = this._sslL4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._http = undefined;
      this._sip = undefined;
      this._sslL4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._http = value.http;
      this._sip = value.sip;
      this._sslL4 = value.sslL4;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: string; 
  public get sip() {
    return this.getStringAttribute('sip');
  }
  public set sip(value: string) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // ssl_l4 - computed: false, optional: true, required: false
  private _sslL4?: string; 
  public get sslL4() {
    return this.getStringAttribute('ssl_l4');
  }
  public set sslL4(value: string) {
    this._sslL4 = value;
  }
  public resetSslL4() {
    this._sslL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4Input() {
    return this._sslL4;
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct {
  /**
  * 'dns': dns; 'http': http; 'ssl-l4': ssl-l4; 'sip': sip;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#protocol DdosDstEntrySrcDstPairPolicyPolicyClassList#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#user_tag DdosDstEntrySrcDstPairPolicyPolicyClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#uuid DdosDstEntrySrcDstPairPolicyPolicyClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#template DdosDstEntrySrcDstPairPolicyPolicyClassList#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    template: {
      value: ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
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

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#log_enable DdosDstEntrySrcDstPairPolicyPolicyClassList#log_enable}
  */
  readonly logEnable?: number;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfgToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfgToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
    }
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
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate {
  /**
  * DDOS OTHER template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#other DdosDstEntrySrcDstPairPolicyPolicyClassList#other}
  */
  readonly other?: string;
  /**
  * DDOS TCP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#tcp DdosDstEntrySrcDstPairPolicyPolicyClassList#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#template_icmp_v4 DdosDstEntrySrcDstPairPolicyPolicyClassList#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#template_icmp_v6 DdosDstEntrySrcDstPairPolicyPolicyClassList#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
  /**
  * DDOS UDP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#udp DdosDstEntrySrcDstPairPolicyPolicyClassList#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other: {
      value: cdktf.stringToHclTerraform(struct!.other),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
      this._tcp = undefined;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
      this._tcp = value.tcp;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
      this._udp = value.udp;
    }
  }

  // other - computed: false, optional: true, required: false
  private _other?: string; 
  public get other() {
    return this.getStringAttribute('other');
  }
  public set other(value: string) {
    this._other = value;
  }
  public resetOther() {
    this._other = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#deny DdosDstEntrySrcDstPairPolicyPolicyClassList#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#glid DdosDstEntrySrcDstPairPolicyPolicyClassList#glid}
  */
  readonly glid?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#protocol DdosDstEntrySrcDstPairPolicyPolicyClassList#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#user_tag DdosDstEntrySrcDstPairPolicyPolicyClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#uuid DdosDstEntrySrcDstPairPolicyPolicyClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#template DdosDstEntrySrcDstPairPolicyPolicyClassList#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct | cdktf.IResolvable): any {
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
    template: {
      value: ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct | cdktf.IResolvable | undefined {
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
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
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
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
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

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#logging DdosDstEntrySrcDstPairPolicyPolicyClassList#logging}
  */
  readonly logging?: string;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logging = value.logging;
    }
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStruct {
  /**
  * Always permit for the Source to bypass all feature & limit checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#bypass DdosDstEntrySrcDstPairPolicyPolicyClassList#bypass}
  */
  readonly bypass?: number;
  /**
  * 'configuration': Configure src dst dynamic entry count overflow policy for class-list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#dummy_name DdosDstEntrySrcDstPairPolicyPolicyClassList#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#glid DdosDstEntrySrcDstPairPolicyPolicyClassList#glid}
  */
  readonly glid?: string;
  /**
  * Enable periodic log while event is continuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#log_periodic DdosDstEntrySrcDstPairPolicyPolicyClassList#log_periodic}
  */
  readonly logPeriodic?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#user_tag DdosDstEntrySrcDstPairPolicyPolicyClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#uuid DdosDstEntrySrcDstPairPolicyPolicyClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * app_type_src_dst_overflow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#app_type_src_dst_overflow_list DdosDstEntrySrcDstPairPolicyPolicyClassList#app_type_src_dst_overflow_list}
  */
  readonly appTypeSrcDstOverflowList?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct[] | cdktf.IResolvable;
  /**
  * exceed_log_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#exceed_log_cfg DdosDstEntrySrcDstPairPolicyPolicyClassList#exceed_log_cfg}
  */
  readonly exceedLogCfg?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfg;
  /**
  * l4_type_src_dst_overflow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#l4_type_src_dst_overflow_list DdosDstEntrySrcDstPairPolicyPolicyClassList#l4_type_src_dst_overflow_list}
  */
  readonly l4TypeSrcDstOverflowList?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#template DdosDstEntrySrcDstPairPolicyPolicyClassList#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.numberToTerraform(struct!.bypass),
    dummy_name: cdktf.stringToTerraform(struct!.dummyName),
    glid: cdktf.stringToTerraform(struct!.glid),
    log_periodic: cdktf.numberToTerraform(struct!.logPeriodic),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    app_type_src_dst_overflow_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructToTerraform, true)(struct!.appTypeSrcDstOverflowList),
    exceed_log_cfg: ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfgToTerraform(struct!.exceedLogCfg),
    l4_type_src_dst_overflow_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructToTerraform, true)(struct!.l4TypeSrcDstOverflowList),
    template: ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: cdktf.numberToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dummy_name: {
      value: cdktf.stringToHclTerraform(struct!.dummyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glid: {
      value: cdktf.stringToHclTerraform(struct!.glid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_periodic: {
      value: cdktf.numberToHclTerraform(struct!.logPeriodic),
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
    app_type_src_dst_overflow_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructToHclTerraform, true)(struct!.appTypeSrcDstOverflowList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructList",
    },
    exceed_log_cfg: {
      value: ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfgToHclTerraform(struct!.exceedLogCfg),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfgList",
    },
    l4_type_src_dst_overflow_list: {
      value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructToHclTerraform, true)(struct!.l4TypeSrcDstOverflowList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructList",
    },
    template: {
      value: ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    if (this._dummyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummyName = this._dummyName;
    }
    if (this._glid !== undefined) {
      hasAnyValues = true;
      internalValueResult.glid = this._glid;
    }
    if (this._logPeriodic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPeriodic = this._logPeriodic;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._appTypeSrcDstOverflowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appTypeSrcDstOverflowList = this._appTypeSrcDstOverflowList?.internalValue;
    }
    if (this._exceedLogCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedLogCfg = this._exceedLogCfg?.internalValue;
    }
    if (this._l4TypeSrcDstOverflowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4TypeSrcDstOverflowList = this._l4TypeSrcDstOverflowList?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypass = undefined;
      this._dummyName = undefined;
      this._glid = undefined;
      this._logPeriodic = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._appTypeSrcDstOverflowList.internalValue = undefined;
      this._exceedLogCfg.internalValue = undefined;
      this._l4TypeSrcDstOverflowList.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypass = value.bypass;
      this._dummyName = value.dummyName;
      this._glid = value.glid;
      this._logPeriodic = value.logPeriodic;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._appTypeSrcDstOverflowList.internalValue = value.appTypeSrcDstOverflowList;
      this._exceedLogCfg.internalValue = value.exceedLogCfg;
      this._l4TypeSrcDstOverflowList.internalValue = value.l4TypeSrcDstOverflowList;
      this._template.internalValue = value.template;
    }
  }

  // bypass - computed: false, optional: true, required: false
  private _bypass?: number; 
  public get bypass() {
    return this.getNumberAttribute('bypass');
  }
  public set bypass(value: number) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }

  // dummy_name - computed: false, optional: false, required: true
  private _dummyName?: string; 
  public get dummyName() {
    return this.getStringAttribute('dummy_name');
  }
  public set dummyName(value: string) {
    this._dummyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyNameInput() {
    return this._dummyName;
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

  // app_type_src_dst_overflow_list - computed: false, optional: true, required: false
  private _appTypeSrcDstOverflowList = new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStructList(this, "app_type_src_dst_overflow_list", false);
  public get appTypeSrcDstOverflowList() {
    return this._appTypeSrcDstOverflowList;
  }
  public putAppTypeSrcDstOverflowList(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListAppTypeSrcDstOverflowListStruct[] | cdktf.IResolvable) {
    this._appTypeSrcDstOverflowList.internalValue = value;
  }
  public resetAppTypeSrcDstOverflowList() {
    this._appTypeSrcDstOverflowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeSrcDstOverflowListInput() {
    return this._appTypeSrcDstOverflowList.internalValue;
  }

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListExceedLogCfg) {
    this._exceedLogCfg.internalValue = value;
  }
  public resetExceedLogCfg() {
    this._exceedLogCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogCfgInput() {
    return this._exceedLogCfg.internalValue;
  }

  // l4_type_src_dst_overflow_list - computed: false, optional: true, required: false
  private _l4TypeSrcDstOverflowList = new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStructList(this, "l4_type_src_dst_overflow_list", false);
  public get l4TypeSrcDstOverflowList() {
    return this._l4TypeSrcDstOverflowList;
  }
  public putL4TypeSrcDstOverflowList(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListL4TypeSrcDstOverflowListStruct[] | cdktf.IResolvable) {
    this._l4TypeSrcDstOverflowList.internalValue = value;
  }
  public resetL4TypeSrcDstOverflowList() {
    this._l4TypeSrcDstOverflowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeSrcDstOverflowListInput() {
    return this._l4TypeSrcDstOverflowList.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfg {
  /**
  * Enable logging of limit exceed drop's
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#log_enable DdosDstEntrySrcDstPairPolicyPolicyClassList#log_enable}
  */
  readonly logEnable?: number;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfgToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enable: cdktf.numberToTerraform(struct!.logEnable),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfgToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfgOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_enable: {
      value: cdktf.numberToHclTerraform(struct!.logEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnable = this._logEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnable = value.logEnable;
    }
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
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplate {
  /**
  * DDOS OTHER template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#other DdosDstEntrySrcDstPairPolicyPolicyClassList#other}
  */
  readonly other?: string;
  /**
  * DDOS TCP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#tcp DdosDstEntrySrcDstPairPolicyPolicyClassList#tcp}
  */
  readonly tcp?: string;
  /**
  * DDOS icmp-v4 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#template_icmp_v4 DdosDstEntrySrcDstPairPolicyPolicyClassList#template_icmp_v4}
  */
  readonly templateIcmpV4?: string;
  /**
  * DDOS icmp-v6 template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#template_icmp_v6 DdosDstEntrySrcDstPairPolicyPolicyClassList#template_icmp_v6}
  */
  readonly templateIcmpV6?: string;
  /**
  * DDOS UDP template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#udp DdosDstEntrySrcDstPairPolicyPolicyClassList#udp}
  */
  readonly udp?: string;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other: cdktf.stringToTerraform(struct!.other),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    template_icmp_v4: cdktf.stringToTerraform(struct!.templateIcmpV4),
    template_icmp_v6: cdktf.stringToTerraform(struct!.templateIcmpV6),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other: {
      value: cdktf.stringToHclTerraform(struct!.other),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v4: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_icmp_v6: {
      value: cdktf.stringToHclTerraform(struct!.templateIcmpV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._templateIcmpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV4 = this._templateIcmpV4;
    }
    if (this._templateIcmpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIcmpV6 = this._templateIcmpV6;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._other = undefined;
      this._tcp = undefined;
      this._templateIcmpV4 = undefined;
      this._templateIcmpV6 = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._other = value.other;
      this._tcp = value.tcp;
      this._templateIcmpV4 = value.templateIcmpV4;
      this._templateIcmpV6 = value.templateIcmpV6;
      this._udp = value.udp;
    }
  }

  // other - computed: false, optional: true, required: false
  private _other?: string; 
  public get other() {
    return this.getStringAttribute('other');
  }
  public set other(value: string) {
    this._other = value;
  }
  public resetOther() {
    this._other = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // template_icmp_v4 - computed: false, optional: true, required: false
  private _templateIcmpV4?: string; 
  public get templateIcmpV4() {
    return this.getStringAttribute('template_icmp_v4');
  }
  public set templateIcmpV4(value: string) {
    this._templateIcmpV4 = value;
  }
  public resetTemplateIcmpV4() {
    this._templateIcmpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV4Input() {
    return this._templateIcmpV4;
  }

  // template_icmp_v6 - computed: false, optional: true, required: false
  private _templateIcmpV6?: string; 
  public get templateIcmpV6() {
    return this.getStringAttribute('template_icmp_v6');
  }
  public set templateIcmpV6(value: string) {
    this._templateIcmpV6 = value;
  }
  public resetTemplateIcmpV6() {
    this._templateIcmpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIcmpV6Input() {
    return this._templateIcmpV6;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStruct {
  /**
  * Blacklist and Drop all incoming packets for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#deny DdosDstEntrySrcDstPairPolicyPolicyClassList#deny}
  */
  readonly deny?: number;
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#glid DdosDstEntrySrcDstPairPolicyPolicyClassList#glid}
  */
  readonly glid?: string;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#protocol DdosDstEntrySrcDstPairPolicyPolicyClassList#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#user_tag DdosDstEntrySrcDstPairPolicyPolicyClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#uuid DdosDstEntrySrcDstPairPolicyPolicyClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#template DdosDstEntrySrcDstPairPolicyPolicyClassList#template}
  */
  readonly template?: DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplate;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStructToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny: cdktf.numberToTerraform(struct!.deny),
    glid: cdktf.stringToTerraform(struct!.glid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: ddosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplateToTerraform(struct!.template),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStruct | cdktf.IResolvable): any {
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
    template: {
      value: ddosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStruct | cdktf.IResolvable | undefined {
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
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deny = undefined;
      this._glid = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
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
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
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

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStructOutputReference {
    return new DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnable {
  /**
  * 'all': all; 'packet_received': Packets Received; 'packet_dropped': Packets Dropped; 'entry_learned': Entry Learned; 'entry_count_overflow': Entry Count Overflow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#counters1 DdosDstEntrySrcDstPairPolicyPolicyClassList#counters1}
  */
  readonly counters1?: string;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnableToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnableToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnable | cdktf.IResolvable): any {
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

export class DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnableOutputReference {
    return new DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstEntrySrcDstPairPolicyPolicyClassListTemplate {
  /**
  * DDOS logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#logging DdosDstEntrySrcDstPairPolicyPolicyClassList#logging}
  */
  readonly logging?: string;
}

export function ddosDstEntrySrcDstPairPolicyPolicyClassListTemplateToTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function ddosDstEntrySrcDstPairPolicyPolicyClassListTemplateToHclTerraform(struct?: DdosDstEntrySrcDstPairPolicyPolicyClassListTemplateOutputReference | DdosDstEntrySrcDstPairPolicyPolicyClassListTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairPolicyPolicyClassListTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstEntrySrcDstPairPolicyPolicyClassListTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairPolicyPolicyClassListTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logging = value.logging;
    }
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list thunder_ddos_dst_entry_src_dst_pair_policy_policy_class_list}
*/
export class DdosDstEntrySrcDstPairPolicyPolicyClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_src_dst_pair_policy_policy_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstEntrySrcDstPairPolicyPolicyClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstEntrySrcDstPairPolicyPolicyClassList to import
  * @param importFromId The id of the existing DdosDstEntrySrcDstPairPolicyPolicyClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstEntrySrcDstPairPolicyPolicyClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_src_dst_pair_policy_policy_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_dst_entry_src_dst_pair_policy_policy_class_list thunder_ddos_dst_entry_src_dst_pair_policy_policy_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstEntrySrcDstPairPolicyPolicyClassListConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstEntrySrcDstPairPolicyPolicyClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_src_dst_pair_policy_policy_class_list',
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
    this._bypass = config.bypass;
    this._classListName = config.classListName;
    this._dstEntryName = config.dstEntryName;
    this._glid = config.glid;
    this._id = config.id;
    this._logPeriodic = config.logPeriodic;
    this._maxDynamicEntryCount = config.maxDynamicEntryCount;
    this._srcBasedPolicyName = config.srcBasedPolicyName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._appTypeSrcDstList.internalValue = config.appTypeSrcDstList;
    this._classListOverflowPolicyList.internalValue = config.classListOverflowPolicyList;
    this._exceedLogCfg.internalValue = config.exceedLogCfg;
    this._l4TypeSrcDstList.internalValue = config.l4TypeSrcDstList;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass - computed: false, optional: true, required: false
  private _bypass?: number; 
  public get bypass() {
    return this.getNumberAttribute('bypass');
  }
  public set bypass(value: number) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }

  // class_list_name - computed: false, optional: false, required: true
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
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

  // max_dynamic_entry_count - computed: false, optional: true, required: false
  private _maxDynamicEntryCount?: number; 
  public get maxDynamicEntryCount() {
    return this.getNumberAttribute('max_dynamic_entry_count');
  }
  public set maxDynamicEntryCount(value: number) {
    this._maxDynamicEntryCount = value;
  }
  public resetMaxDynamicEntryCount() {
    this._maxDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicEntryCountInput() {
    return this._maxDynamicEntryCount;
  }

  // src_based_policy_name - computed: false, optional: false, required: true
  private _srcBasedPolicyName?: string; 
  public get srcBasedPolicyName() {
    return this.getStringAttribute('src_based_policy_name');
  }
  public set srcBasedPolicyName(value: string) {
    this._srcBasedPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyNameInput() {
    return this._srcBasedPolicyName;
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

  // app_type_src_dst_list - computed: false, optional: true, required: false
  private _appTypeSrcDstList = new DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStructList(this, "app_type_src_dst_list", false);
  public get appTypeSrcDstList() {
    return this._appTypeSrcDstList;
  }
  public putAppTypeSrcDstList(value: DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._appTypeSrcDstList.internalValue = value;
  }
  public resetAppTypeSrcDstList() {
    this._appTypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeSrcDstListInput() {
    return this._appTypeSrcDstList.internalValue;
  }

  // class_list_overflow_policy_list - computed: false, optional: true, required: false
  private _classListOverflowPolicyList = new DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStructList(this, "class_list_overflow_policy_list", false);
  public get classListOverflowPolicyList() {
    return this._classListOverflowPolicyList;
  }
  public putClassListOverflowPolicyList(value: DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStruct[] | cdktf.IResolvable) {
    this._classListOverflowPolicyList.internalValue = value;
  }
  public resetClassListOverflowPolicyList() {
    this._classListOverflowPolicyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListOverflowPolicyListInput() {
    return this._classListOverflowPolicyList.internalValue;
  }

  // exceed_log_cfg - computed: false, optional: true, required: false
  private _exceedLogCfg = new DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfgOutputReference(this, "exceed_log_cfg");
  public get exceedLogCfg() {
    return this._exceedLogCfg;
  }
  public putExceedLogCfg(value: DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfg) {
    this._exceedLogCfg.internalValue = value;
  }
  public resetExceedLogCfg() {
    this._exceedLogCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedLogCfgInput() {
    return this._exceedLogCfg.internalValue;
  }

  // l4_type_src_dst_list - computed: false, optional: true, required: false
  private _l4TypeSrcDstList = new DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStructList(this, "l4_type_src_dst_list", false);
  public get l4TypeSrcDstList() {
    return this._l4TypeSrcDstList;
  }
  public putL4TypeSrcDstList(value: DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._l4TypeSrcDstList.internalValue = value;
  }
  public resetL4TypeSrcDstList() {
    this._l4TypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeSrcDstListInput() {
    return this._l4TypeSrcDstList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DdosDstEntrySrcDstPairPolicyPolicyClassListTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DdosDstEntrySrcDstPairPolicyPolicyClassListTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass: cdktf.numberToTerraform(this._bypass),
      class_list_name: cdktf.stringToTerraform(this._classListName),
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      glid: cdktf.stringToTerraform(this._glid),
      id: cdktf.stringToTerraform(this._id),
      log_periodic: cdktf.numberToTerraform(this._logPeriodic),
      max_dynamic_entry_count: cdktf.numberToTerraform(this._maxDynamicEntryCount),
      src_based_policy_name: cdktf.stringToTerraform(this._srcBasedPolicyName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      app_type_src_dst_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStructToTerraform, true)(this._appTypeSrcDstList.internalValue),
      class_list_overflow_policy_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStructToTerraform, true)(this._classListOverflowPolicyList.internalValue),
      exceed_log_cfg: ddosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfgToTerraform(this._exceedLogCfg.internalValue),
      l4_type_src_dst_list: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStructToTerraform, true)(this._l4TypeSrcDstList.internalValue),
      sampling_enable: cdktf.listMapper(ddosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      template: ddosDstEntrySrcDstPairPolicyPolicyClassListTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass: {
        value: cdktf.numberToHclTerraform(this._bypass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      class_list_name: {
        value: cdktf.stringToHclTerraform(this._classListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glid: {
        value: cdktf.stringToHclTerraform(this._glid),
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
      log_periodic: {
        value: cdktf.numberToHclTerraform(this._logPeriodic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_dynamic_entry_count: {
        value: cdktf.numberToHclTerraform(this._maxDynamicEntryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_based_policy_name: {
        value: cdktf.stringToHclTerraform(this._srcBasedPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      app_type_src_dst_list: {
        value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStructToHclTerraform, true)(this._appTypeSrcDstList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListAppTypeSrcDstListStructList",
      },
      class_list_overflow_policy_list: {
        value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStructToHclTerraform, true)(this._classListOverflowPolicyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListClassListOverflowPolicyListStructList",
      },
      exceed_log_cfg: {
        value: ddosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfgToHclTerraform(this._exceedLogCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListExceedLogCfgList",
      },
      l4_type_src_dst_list: {
        value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStructToHclTerraform, true)(this._l4TypeSrcDstList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListL4TypeSrcDstListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListSamplingEnableList",
      },
      template: {
        value: ddosDstEntrySrcDstPairPolicyPolicyClassListTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairPolicyPolicyClassListTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
