// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link#id Link#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of two IPv4 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link#ipv4 Link#ipv4}
  */
  readonly ipv4?: string[];
  /**
  * List of two IPv6 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link#ipv6 Link#ipv6}
  */
  readonly ipv6?: string[];
  /**
  * List of two ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link#ports Link#ports}
  */
  readonly ports: string[];
  /**
  * Inform the system that the current link should use EVPN/BGP underlay for VXLAN transport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link#underlay Link#underlay}
  */
  readonly underlay?: string;
  /**
  * mclag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link#mclag Link#mclag}
  */
  readonly mclag?: LinkMclag[] | cdktf.IResolvable;
}
export interface LinkMclag {
  /**
  * MC-LAG anycast MAC address. Recommended range 44:38:39:ff:00:00 - 44:38:39:ff:ff:ff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link#anycastmacaddr Link#anycastmacaddr}
  */
  readonly anycastmacaddr: string;
  /**
  * MC-LAG shared IPV4 address. Shall be part of any IPAM defined subnet with the purpose set to loopback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link#sharedipv4addr Link#sharedipv4addr}
  */
  readonly sharedipv4Addr: string;
}

export function linkMclagToTerraform(struct?: LinkMclag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anycastmacaddr: cdktf.stringToTerraform(struct!.anycastmacaddr),
    sharedipv4addr: cdktf.stringToTerraform(struct!.sharedipv4Addr),
  }
}


export function linkMclagToHclTerraform(struct?: LinkMclag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anycastmacaddr: {
      value: cdktf.stringToHclTerraform(struct!.anycastmacaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sharedipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.sharedipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LinkMclagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LinkMclag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anycastmacaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycastmacaddr = this._anycastmacaddr;
    }
    if (this._sharedipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedipv4Addr = this._sharedipv4Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LinkMclag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anycastmacaddr = undefined;
      this._sharedipv4Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anycastmacaddr = value.anycastmacaddr;
      this._sharedipv4Addr = value.sharedipv4Addr;
    }
  }

  // anycastmacaddr - computed: false, optional: false, required: true
  private _anycastmacaddr?: string; 
  public get anycastmacaddr() {
    return this.getStringAttribute('anycastmacaddr');
  }
  public set anycastmacaddr(value: string) {
    this._anycastmacaddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastmacaddrInput() {
    return this._anycastmacaddr;
  }

  // sharedipv4addr - computed: false, optional: false, required: true
  private _sharedipv4Addr?: string; 
  public get sharedipv4Addr() {
    return this.getStringAttribute('sharedipv4addr');
  }
  public set sharedipv4Addr(value: string) {
    this._sharedipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedipv4AddrInput() {
    return this._sharedipv4Addr;
  }
}

export class LinkMclagList extends cdktf.ComplexList {
  public internalValue? : LinkMclag[] | cdktf.IResolvable

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
  public get(index: number): LinkMclagOutputReference {
    return new LinkMclagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link netris_link}
*/
export class Link extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Link resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Link to import
  * @param importFromId The id of the existing Link that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Link to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/link netris_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinkConfig
  */
  public constructor(scope: Construct, id: string, config: LinkConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_link',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6',
        providerVersionConstraint: '3.6.6'
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
    this._ipv4 = config.ipv4;
    this._ipv6 = config.ipv6;
    this._ports = config.ports;
    this._underlay = config.underlay;
    this._mclag.internalValue = config.mclag;
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

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string[]; 
  public get ipv4() {
    return this.getListAttribute('ipv4');
  }
  public set ipv4(value: string[]) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string[]; 
  public get ipv6() {
    return this.getListAttribute('ipv6');
  }
  public set ipv6(value: string[]) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // underlay - computed: false, optional: true, required: false
  private _underlay?: string; 
  public get underlay() {
    return this.getStringAttribute('underlay');
  }
  public set underlay(value: string) {
    this._underlay = value;
  }
  public resetUnderlay() {
    this._underlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get underlayInput() {
    return this._underlay;
  }

  // mclag - computed: false, optional: true, required: false
  private _mclag = new LinkMclagList(this, "mclag", true);
  public get mclag() {
    return this._mclag;
  }
  public putMclag(value: LinkMclag[] | cdktf.IResolvable) {
    this._mclag.internalValue = value;
  }
  public resetMclag() {
    this._mclag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagInput() {
    return this._mclag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4),
      ipv6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      underlay: cdktf.stringToTerraform(this._underlay),
      mclag: cdktf.listMapper(linkMclagToTerraform, true)(this._mclag.internalValue),
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
      ipv4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      underlay: {
        value: cdktf.stringToHclTerraform(this._underlay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mclag: {
        value: cdktf.listMapperHcl(linkMclagToHclTerraform, true)(this._mclag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LinkMclagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
