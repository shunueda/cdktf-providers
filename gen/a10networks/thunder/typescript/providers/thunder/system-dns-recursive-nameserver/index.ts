// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDnsRecursiveNameserverAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use the configured name servers of shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver#follow_shared SystemDnsRecursiveNameserverA#follow_shared}
  */
  readonly followShared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver#id SystemDnsRecursiveNameserverA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver#uuid SystemDnsRecursiveNameserverA#uuid}
  */
  readonly uuid?: string;
  /**
  * server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver#server_list SystemDnsRecursiveNameserverA#server_list}
  */
  readonly serverList?: SystemDnsRecursiveNameserverServerListStructA[] | cdktf.IResolvable;
}
export interface SystemDnsRecursiveNameserverServerListStructA {
  /**
  * Specify IPv4 server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver#ipv4_addr SystemDnsRecursiveNameserverA#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Specify IPv6 server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver#ipv6_addr SystemDnsRecursiveNameserverA#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Description for this ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver#v4_desc SystemDnsRecursiveNameserverA#v4_desc}
  */
  readonly v4Desc?: string;
  /**
  * Description for this ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver#v6_desc SystemDnsRecursiveNameserverA#v6_desc}
  */
  readonly v6Desc?: string;
}

export function systemDnsRecursiveNameserverServerListStructAToTerraform(struct?: SystemDnsRecursiveNameserverServerListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    v4_desc: cdktf.stringToTerraform(struct!.v4Desc),
    v6_desc: cdktf.stringToTerraform(struct!.v6Desc),
  }
}


export function systemDnsRecursiveNameserverServerListStructAToHclTerraform(struct?: SystemDnsRecursiveNameserverServerListStructA | cdktf.IResolvable): any {
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
    v4_desc: {
      value: cdktf.stringToHclTerraform(struct!.v4Desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_desc: {
      value: cdktf.stringToHclTerraform(struct!.v6Desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDnsRecursiveNameserverServerListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDnsRecursiveNameserverServerListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._v4Desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Desc = this._v4Desc;
    }
    if (this._v6Desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Desc = this._v6Desc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDnsRecursiveNameserverServerListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._v4Desc = undefined;
      this._v6Desc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._v4Desc = value.v4Desc;
      this._v6Desc = value.v6Desc;
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

  // v4_desc - computed: false, optional: true, required: false
  private _v4Desc?: string; 
  public get v4Desc() {
    return this.getStringAttribute('v4_desc');
  }
  public set v4Desc(value: string) {
    this._v4Desc = value;
  }
  public resetV4Desc() {
    this._v4Desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4DescInput() {
    return this._v4Desc;
  }

  // v6_desc - computed: false, optional: true, required: false
  private _v6Desc?: string; 
  public get v6Desc() {
    return this.getStringAttribute('v6_desc');
  }
  public set v6Desc(value: string) {
    this._v6Desc = value;
  }
  public resetV6Desc() {
    this._v6Desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6DescInput() {
    return this._v6Desc;
  }
}

export class SystemDnsRecursiveNameserverServerListStructAList extends cdktf.ComplexList {
  public internalValue? : SystemDnsRecursiveNameserverServerListStructA[] | cdktf.IResolvable

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
  public get(index: number): SystemDnsRecursiveNameserverServerListStructAOutputReference {
    return new SystemDnsRecursiveNameserverServerListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver thunder_system_dns_recursive_nameserver}
*/
export class SystemDnsRecursiveNameserverA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_dns_recursive_nameserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDnsRecursiveNameserverA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDnsRecursiveNameserverA to import
  * @param importFromId The id of the existing SystemDnsRecursiveNameserverA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDnsRecursiveNameserverA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_dns_recursive_nameserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns_recursive_nameserver thunder_system_dns_recursive_nameserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDnsRecursiveNameserverAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDnsRecursiveNameserverAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_dns_recursive_nameserver',
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
    this._followShared = config.followShared;
    this._id = config.id;
    this._uuid = config.uuid;
    this._serverList.internalValue = config.serverList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // follow_shared - computed: false, optional: true, required: false
  private _followShared?: number; 
  public get followShared() {
    return this.getNumberAttribute('follow_shared');
  }
  public set followShared(value: number) {
    this._followShared = value;
  }
  public resetFollowShared() {
    this._followShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followSharedInput() {
    return this._followShared;
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

  // server_list - computed: false, optional: true, required: false
  private _serverList = new SystemDnsRecursiveNameserverServerListStructAList(this, "server_list", false);
  public get serverList() {
    return this._serverList;
  }
  public putServerList(value: SystemDnsRecursiveNameserverServerListStructA[] | cdktf.IResolvable) {
    this._serverList.internalValue = value;
  }
  public resetServerList() {
    this._serverList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverListInput() {
    return this._serverList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      follow_shared: cdktf.numberToTerraform(this._followShared),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      server_list: cdktf.listMapper(systemDnsRecursiveNameserverServerListStructAToTerraform, true)(this._serverList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      follow_shared: {
        value: cdktf.numberToHclTerraform(this._followShared),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_list: {
        value: cdktf.listMapperHcl(systemDnsRecursiveNameserverServerListStructAToHclTerraform, true)(this._serverList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemDnsRecursiveNameserverServerListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
