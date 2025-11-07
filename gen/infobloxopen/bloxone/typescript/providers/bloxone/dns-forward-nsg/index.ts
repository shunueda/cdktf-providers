// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsForwardNsgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Comment for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#comment DnsForwardNsg#comment}
  */
  readonly comment?: string;
  /**
  * Optional. External DNS servers to forward to. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#external_forwarders DnsForwardNsg#external_forwarders}
  */
  readonly externalForwarders?: DnsForwardNsgExternalForwarders[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to only forward.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#forwarders_only DnsForwardNsg#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#hosts DnsForwardNsg#hosts}
  */
  readonly hosts?: string[];
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#internal_forwarders DnsForwardNsg#internal_forwarders}
  */
  readonly internalForwarders?: string[];
  /**
  * Name of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#name DnsForwardNsg#name}
  */
  readonly name: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#nsgs DnsForwardNsg#nsgs}
  */
  readonly nsgs?: string[];
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#tags DnsForwardNsg#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DnsForwardNsgExternalForwarders {
  /**
  * Server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#address DnsForwardNsg#address}
  */
  readonly address: string;
  /**
  * Server FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#fqdn DnsForwardNsg#fqdn}
  */
  readonly fqdn?: string;
}

export function dnsForwardNsgExternalForwardersToTerraform(struct?: DnsForwardNsgExternalForwarders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dnsForwardNsgExternalForwardersToHclTerraform(struct?: DnsForwardNsgExternalForwarders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsForwardNsgExternalForwardersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsForwardNsgExternalForwarders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsForwardNsgExternalForwarders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._fqdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._fqdn = value.fqdn;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }
}

export class DnsForwardNsgExternalForwardersList extends cdktf.ComplexList {
  public internalValue? : DnsForwardNsgExternalForwarders[] | cdktf.IResolvable

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
  public get(index: number): DnsForwardNsgExternalForwardersOutputReference {
    return new DnsForwardNsgExternalForwardersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg bloxone_dns_forward_nsg}
*/
export class DnsForwardNsg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_forward_nsg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsForwardNsg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsForwardNsg to import
  * @param importFromId The id of the existing DnsForwardNsg that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsForwardNsg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_forward_nsg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_forward_nsg bloxone_dns_forward_nsg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsForwardNsgConfig
  */
  public constructor(scope: Construct, id: string, config: DnsForwardNsgConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_forward_nsg',
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
    this._comment = config.comment;
    this._externalForwarders.internalValue = config.externalForwarders;
    this._forwardersOnly = config.forwardersOnly;
    this._hosts = config.hosts;
    this._internalForwarders = config.internalForwarders;
    this._name = config.name;
    this._nsgs = config.nsgs;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // external_forwarders - computed: false, optional: true, required: false
  private _externalForwarders = new DnsForwardNsgExternalForwardersList(this, "external_forwarders", false);
  public get externalForwarders() {
    return this._externalForwarders;
  }
  public putExternalForwarders(value: DnsForwardNsgExternalForwarders[] | cdktf.IResolvable) {
    this._externalForwarders.internalValue = value;
  }
  public resetExternalForwarders() {
    this._externalForwarders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalForwardersInput() {
    return this._externalForwarders.internalValue;
  }

  // forwarders_only - computed: true, optional: true, required: false
  private _forwardersOnly?: boolean | cdktf.IResolvable; 
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }
  public set forwardersOnly(value: boolean | cdktf.IResolvable) {
    this._forwardersOnly = value;
  }
  public resetForwardersOnly() {
    this._forwardersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersOnlyInput() {
    return this._forwardersOnly;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_forwarders - computed: false, optional: true, required: false
  private _internalForwarders?: string[]; 
  public get internalForwarders() {
    return this.getListAttribute('internal_forwarders');
  }
  public set internalForwarders(value: string[]) {
    this._internalForwarders = value;
  }
  public resetInternalForwarders() {
    this._internalForwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalForwardersInput() {
    return this._internalForwarders;
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

  // nsgs - computed: false, optional: true, required: false
  private _nsgs?: string[]; 
  public get nsgs() {
    return this.getListAttribute('nsgs');
  }
  public set nsgs(value: string[]) {
    this._nsgs = value;
  }
  public resetNsgs() {
    this._nsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgsInput() {
    return this._nsgs;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      external_forwarders: cdktf.listMapper(dnsForwardNsgExternalForwardersToTerraform, false)(this._externalForwarders.internalValue),
      forwarders_only: cdktf.booleanToTerraform(this._forwardersOnly),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      internal_forwarders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalForwarders),
      name: cdktf.stringToTerraform(this._name),
      nsgs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgs),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_forwarders: {
        value: cdktf.listMapperHcl(dnsForwardNsgExternalForwardersToHclTerraform, false)(this._externalForwarders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsForwardNsgExternalForwardersList",
      },
      forwarders_only: {
        value: cdktf.booleanToHclTerraform(this._forwardersOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      internal_forwarders: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalForwarders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsgs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
