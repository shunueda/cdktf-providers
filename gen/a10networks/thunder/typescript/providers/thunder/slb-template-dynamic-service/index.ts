// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDynamicServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#id SlbTemplateDynamicService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Dynamic Service Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#name SlbTemplateDynamicService#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#user_tag SlbTemplateDynamicService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#uuid SlbTemplateDynamicService#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#class_list_list SlbTemplateDynamicService#class_list_list}
  */
  readonly classListList?: SlbTemplateDynamicServiceClassListListStruct[] | cdktf.IResolvable;
  /**
  * dns_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#dns_server SlbTemplateDynamicService#dns_server}
  */
  readonly dnsServer?: SlbTemplateDynamicServiceDnsServer[] | cdktf.IResolvable;
}
export interface SlbTemplateDynamicServiceClassListListDnsServer {
  /**
  * DNS Server IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#ipv4_dns_server SlbTemplateDynamicService#ipv4_dns_server}
  */
  readonly ipv4DnsServer?: string;
  /**
  * DNS Server IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#ipv6_dns_server SlbTemplateDynamicService#ipv6_dns_server}
  */
  readonly ipv6DnsServer?: string;
}

export function slbTemplateDynamicServiceClassListListDnsServerToTerraform(struct?: SlbTemplateDynamicServiceClassListListDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_dns_server: cdktf.stringToTerraform(struct!.ipv4DnsServer),
    ipv6_dns_server: cdktf.stringToTerraform(struct!.ipv6DnsServer),
  }
}


export function slbTemplateDynamicServiceClassListListDnsServerToHclTerraform(struct?: SlbTemplateDynamicServiceClassListListDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.ipv4DnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.ipv6DnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDynamicServiceClassListListDnsServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDynamicServiceClassListListDnsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4DnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4DnsServer = this._ipv4DnsServer;
    }
    if (this._ipv6DnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DnsServer = this._ipv6DnsServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDynamicServiceClassListListDnsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4DnsServer = undefined;
      this._ipv6DnsServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4DnsServer = value.ipv4DnsServer;
      this._ipv6DnsServer = value.ipv6DnsServer;
    }
  }

  // ipv4_dns_server - computed: false, optional: true, required: false
  private _ipv4DnsServer?: string; 
  public get ipv4DnsServer() {
    return this.getStringAttribute('ipv4_dns_server');
  }
  public set ipv4DnsServer(value: string) {
    this._ipv4DnsServer = value;
  }
  public resetIpv4DnsServer() {
    this._ipv4DnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DnsServerInput() {
    return this._ipv4DnsServer;
  }

  // ipv6_dns_server - computed: false, optional: true, required: false
  private _ipv6DnsServer?: string; 
  public get ipv6DnsServer() {
    return this.getStringAttribute('ipv6_dns_server');
  }
  public set ipv6DnsServer(value: string) {
    this._ipv6DnsServer = value;
  }
  public resetIpv6DnsServer() {
    this._ipv6DnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServerInput() {
    return this._ipv6DnsServer;
  }
}

export class SlbTemplateDynamicServiceClassListListDnsServerList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDynamicServiceClassListListDnsServer[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDynamicServiceClassListListDnsServerOutputReference {
    return new SlbTemplateDynamicServiceClassListListDnsServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDynamicServiceClassListListStruct {
  /**
  * Name of Aho-Corasick class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#dns_class_list SlbTemplateDynamicService#dns_class_list}
  */
  readonly dnsClassList: string;
  /**
  * Priority of the class-list(the larger number, the higher priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#priority SlbTemplateDynamicService#priority}
  */
  readonly priority?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#user_tag SlbTemplateDynamicService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#uuid SlbTemplateDynamicService#uuid}
  */
  readonly uuid?: string;
  /**
  * dns_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#dns_server SlbTemplateDynamicService#dns_server}
  */
  readonly dnsServer?: SlbTemplateDynamicServiceClassListListDnsServer[] | cdktf.IResolvable;
}

export function slbTemplateDynamicServiceClassListListStructToTerraform(struct?: SlbTemplateDynamicServiceClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_class_list: cdktf.stringToTerraform(struct!.dnsClassList),
    priority: cdktf.numberToTerraform(struct!.priority),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dns_server: cdktf.listMapper(slbTemplateDynamicServiceClassListListDnsServerToTerraform, true)(struct!.dnsServer),
  }
}


export function slbTemplateDynamicServiceClassListListStructToHclTerraform(struct?: SlbTemplateDynamicServiceClassListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_class_list: {
      value: cdktf.stringToHclTerraform(struct!.dnsClassList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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
    dns_server: {
      value: cdktf.listMapperHcl(slbTemplateDynamicServiceClassListListDnsServerToHclTerraform, true)(struct!.dnsServer),
      isBlock: true,
      type: "list",
      storageClassType: "SlbTemplateDynamicServiceClassListListDnsServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDynamicServiceClassListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDynamicServiceClassListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsClassList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsClassList = this._dnsClassList;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dnsServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDynamicServiceClassListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsClassList = undefined;
      this._priority = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._dnsServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsClassList = value.dnsClassList;
      this._priority = value.priority;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._dnsServer.internalValue = value.dnsServer;
    }
  }

  // dns_class_list - computed: false, optional: false, required: true
  private _dnsClassList?: string; 
  public get dnsClassList() {
    return this.getStringAttribute('dns_class_list');
  }
  public set dnsClassList(value: string) {
    this._dnsClassList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsClassListInput() {
    return this._dnsClassList;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer = new SlbTemplateDynamicServiceClassListListDnsServerList(this, "dns_server", false);
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: SlbTemplateDynamicServiceClassListListDnsServer[] | cdktf.IResolvable) {
    this._dnsServer.internalValue = value;
  }
  public resetDnsServer() {
    this._dnsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer.internalValue;
  }
}

export class SlbTemplateDynamicServiceClassListListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDynamicServiceClassListListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDynamicServiceClassListListStructOutputReference {
    return new SlbTemplateDynamicServiceClassListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateDynamicServiceDnsServer {
  /**
  * DNS Server IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#ipv4_dns_server SlbTemplateDynamicService#ipv4_dns_server}
  */
  readonly ipv4DnsServer?: string;
  /**
  * DNS Server IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#ipv6_dns_server SlbTemplateDynamicService#ipv6_dns_server}
  */
  readonly ipv6DnsServer?: string;
}

export function slbTemplateDynamicServiceDnsServerToTerraform(struct?: SlbTemplateDynamicServiceDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_dns_server: cdktf.stringToTerraform(struct!.ipv4DnsServer),
    ipv6_dns_server: cdktf.stringToTerraform(struct!.ipv6DnsServer),
  }
}


export function slbTemplateDynamicServiceDnsServerToHclTerraform(struct?: SlbTemplateDynamicServiceDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.ipv4DnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_dns_server: {
      value: cdktf.stringToHclTerraform(struct!.ipv6DnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDynamicServiceDnsServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDynamicServiceDnsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4DnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4DnsServer = this._ipv4DnsServer;
    }
    if (this._ipv6DnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DnsServer = this._ipv6DnsServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDynamicServiceDnsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4DnsServer = undefined;
      this._ipv6DnsServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4DnsServer = value.ipv4DnsServer;
      this._ipv6DnsServer = value.ipv6DnsServer;
    }
  }

  // ipv4_dns_server - computed: false, optional: true, required: false
  private _ipv4DnsServer?: string; 
  public get ipv4DnsServer() {
    return this.getStringAttribute('ipv4_dns_server');
  }
  public set ipv4DnsServer(value: string) {
    this._ipv4DnsServer = value;
  }
  public resetIpv4DnsServer() {
    this._ipv4DnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DnsServerInput() {
    return this._ipv4DnsServer;
  }

  // ipv6_dns_server - computed: false, optional: true, required: false
  private _ipv6DnsServer?: string; 
  public get ipv6DnsServer() {
    return this.getStringAttribute('ipv6_dns_server');
  }
  public set ipv6DnsServer(value: string) {
    this._ipv6DnsServer = value;
  }
  public resetIpv6DnsServer() {
    this._ipv6DnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServerInput() {
    return this._ipv6DnsServer;
  }
}

export class SlbTemplateDynamicServiceDnsServerList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDynamicServiceDnsServer[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDynamicServiceDnsServerOutputReference {
    return new SlbTemplateDynamicServiceDnsServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service thunder_slb_template_dynamic_service}
*/
export class SlbTemplateDynamicService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dynamic_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDynamicService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDynamicService to import
  * @param importFromId The id of the existing SlbTemplateDynamicService that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDynamicService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dynamic_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_dynamic_service thunder_slb_template_dynamic_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDynamicServiceConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDynamicServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dynamic_service',
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
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._classListList.internalValue = config.classListList;
    this._dnsServer.internalValue = config.dnsServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // class_list_list - computed: false, optional: true, required: false
  private _classListList = new SlbTemplateDynamicServiceClassListListStructList(this, "class_list_list", false);
  public get classListList() {
    return this._classListList;
  }
  public putClassListList(value: SlbTemplateDynamicServiceClassListListStruct[] | cdktf.IResolvable) {
    this._classListList.internalValue = value;
  }
  public resetClassListList() {
    this._classListList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListListInput() {
    return this._classListList.internalValue;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer = new SlbTemplateDynamicServiceDnsServerList(this, "dns_server", false);
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: SlbTemplateDynamicServiceDnsServer[] | cdktf.IResolvable) {
    this._dnsServer.internalValue = value;
  }
  public resetDnsServer() {
    this._dnsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      class_list_list: cdktf.listMapper(slbTemplateDynamicServiceClassListListStructToTerraform, true)(this._classListList.internalValue),
      dns_server: cdktf.listMapper(slbTemplateDynamicServiceDnsServerToTerraform, true)(this._dnsServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      class_list_list: {
        value: cdktf.listMapperHcl(slbTemplateDynamicServiceClassListListStructToHclTerraform, true)(this._classListList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDynamicServiceClassListListStructList",
      },
      dns_server: {
        value: cdktf.listMapperHcl(slbTemplateDynamicServiceDnsServerToHclTerraform, true)(this._dnsServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDynamicServiceDnsServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
