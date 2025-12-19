// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDynamicServiceClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of Aho-Corasick class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list#dns_class_list SlbTemplateDynamicServiceClassList#dns_class_list}
  */
  readonly dnsClassList: string;
  /**
  * Dynamic_service_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list#dynamic_service_name SlbTemplateDynamicServiceClassList#dynamic_service_name}
  */
  readonly dynamicServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list#id SlbTemplateDynamicServiceClassList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Priority of the class-list(the larger number, the higher priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list#priority SlbTemplateDynamicServiceClassList#priority}
  */
  readonly priority?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list#user_tag SlbTemplateDynamicServiceClassList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list#uuid SlbTemplateDynamicServiceClassList#uuid}
  */
  readonly uuid?: string;
  /**
  * dns_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list#dns_server SlbTemplateDynamicServiceClassList#dns_server}
  */
  readonly dnsServer?: SlbTemplateDynamicServiceClassListDnsServer[] | cdktf.IResolvable;
}
export interface SlbTemplateDynamicServiceClassListDnsServer {
  /**
  * DNS Server IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list#ipv4_dns_server SlbTemplateDynamicServiceClassList#ipv4_dns_server}
  */
  readonly ipv4DnsServer?: string;
  /**
  * DNS Server IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list#ipv6_dns_server SlbTemplateDynamicServiceClassList#ipv6_dns_server}
  */
  readonly ipv6DnsServer?: string;
}

export function slbTemplateDynamicServiceClassListDnsServerToTerraform(struct?: SlbTemplateDynamicServiceClassListDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_dns_server: cdktf.stringToTerraform(struct!.ipv4DnsServer),
    ipv6_dns_server: cdktf.stringToTerraform(struct!.ipv6DnsServer),
  }
}


export function slbTemplateDynamicServiceClassListDnsServerToHclTerraform(struct?: SlbTemplateDynamicServiceClassListDnsServer | cdktf.IResolvable): any {
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

export class SlbTemplateDynamicServiceClassListDnsServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateDynamicServiceClassListDnsServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplateDynamicServiceClassListDnsServer | cdktf.IResolvable | undefined) {
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

export class SlbTemplateDynamicServiceClassListDnsServerList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateDynamicServiceClassListDnsServer[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateDynamicServiceClassListDnsServerOutputReference {
    return new SlbTemplateDynamicServiceClassListDnsServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list thunder_slb_template_dynamic_service_class_list}
*/
export class SlbTemplateDynamicServiceClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dynamic_service_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDynamicServiceClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDynamicServiceClassList to import
  * @param importFromId The id of the existing SlbTemplateDynamicServiceClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDynamicServiceClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dynamic_service_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dynamic_service_class_list thunder_slb_template_dynamic_service_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDynamicServiceClassListConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDynamicServiceClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dynamic_service_class_list',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsClassList = config.dnsClassList;
    this._dynamicServiceName = config.dynamicServiceName;
    this._id = config.id;
    this._priority = config.priority;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dnsServer.internalValue = config.dnsServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dynamic_service_name - computed: false, optional: false, required: true
  private _dynamicServiceName?: string; 
  public get dynamicServiceName() {
    return this.getStringAttribute('dynamic_service_name');
  }
  public set dynamicServiceName(value: string) {
    this._dynamicServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicServiceNameInput() {
    return this._dynamicServiceName;
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
  private _dnsServer = new SlbTemplateDynamicServiceClassListDnsServerList(this, "dns_server", false);
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: SlbTemplateDynamicServiceClassListDnsServer[] | cdktf.IResolvable) {
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
      dns_class_list: cdktf.stringToTerraform(this._dnsClassList),
      dynamic_service_name: cdktf.stringToTerraform(this._dynamicServiceName),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dns_server: cdktf.listMapper(slbTemplateDynamicServiceClassListDnsServerToTerraform, true)(this._dnsServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_class_list: {
        value: cdktf.stringToHclTerraform(this._dnsClassList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_service_name: {
        value: cdktf.stringToHclTerraform(this._dynamicServiceName),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
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
      dns_server: {
        value: cdktf.listMapperHcl(slbTemplateDynamicServiceClassListDnsServerToHclTerraform, true)(this._dnsServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDynamicServiceClassListDnsServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
