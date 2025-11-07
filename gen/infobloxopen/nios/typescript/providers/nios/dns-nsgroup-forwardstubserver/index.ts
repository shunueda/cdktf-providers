// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_nsgroup_forwardstubserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsNsgroupForwardstubserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for the Forward Stub Server Name Server Group; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_nsgroup_forwardstubserver#comment DnsNsgroupForwardstubserver#comment}
  */
  readonly comment?: string;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_nsgroup_forwardstubserver#extattrs DnsNsgroupForwardstubserver#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The list of external servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_nsgroup_forwardstubserver#external_servers DnsNsgroupForwardstubserver#external_servers}
  */
  readonly externalServers: DnsNsgroupForwardstubserverExternalServers[] | cdktf.IResolvable;
  /**
  * The name of this Forward Stub Server Name Server Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_nsgroup_forwardstubserver#name DnsNsgroupForwardstubserver#name}
  */
  readonly name: string;
}
export interface DnsNsgroupForwardstubserverExternalServers {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_nsgroup_forwardstubserver#address DnsNsgroupForwardstubserver#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_nsgroup_forwardstubserver#name DnsNsgroupForwardstubserver#name}
  */
  readonly name: string;
}

export function dnsNsgroupForwardstubserverExternalServersToTerraform(struct?: DnsNsgroupForwardstubserverExternalServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dnsNsgroupForwardstubserverExternalServersToHclTerraform(struct?: DnsNsgroupForwardstubserverExternalServers | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsNsgroupForwardstubserverExternalServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsNsgroupForwardstubserverExternalServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsNsgroupForwardstubserverExternalServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
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

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
  }

  // stealth - computed: true, optional: false, required: false
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }

  // tsig_key - computed: true, optional: false, required: false
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }

  // tsig_key_alg - computed: true, optional: false, required: false
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }

  // tsig_key_name - computed: true, optional: false, required: false
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }

  // use_tsig_key_name - computed: true, optional: false, required: false
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
}

export class DnsNsgroupForwardstubserverExternalServersList extends cdktf.ComplexList {
  public internalValue? : DnsNsgroupForwardstubserverExternalServers[] | cdktf.IResolvable

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
  public get(index: number): DnsNsgroupForwardstubserverExternalServersOutputReference {
    return new DnsNsgroupForwardstubserverExternalServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_nsgroup_forwardstubserver nios_dns_nsgroup_forwardstubserver}
*/
export class DnsNsgroupForwardstubserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_nsgroup_forwardstubserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsNsgroupForwardstubserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsNsgroupForwardstubserver to import
  * @param importFromId The id of the existing DnsNsgroupForwardstubserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_nsgroup_forwardstubserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsNsgroupForwardstubserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_nsgroup_forwardstubserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_nsgroup_forwardstubserver nios_dns_nsgroup_forwardstubserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsNsgroupForwardstubserverConfig
  */
  public constructor(scope: Construct, id: string, config: DnsNsgroupForwardstubserverConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_nsgroup_forwardstubserver',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
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
    this._extattrs = config.extattrs;
    this._externalServers.internalValue = config.externalServers;
    this._name = config.name;
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

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // external_servers - computed: false, optional: false, required: true
  private _externalServers = new DnsNsgroupForwardstubserverExternalServersList(this, "external_servers", false);
  public get externalServers() {
    return this._externalServers;
  }
  public putExternalServers(value: DnsNsgroupForwardstubserverExternalServers[] | cdktf.IResolvable) {
    this._externalServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServersInput() {
    return this._externalServers.internalValue;
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      external_servers: cdktf.listMapper(dnsNsgroupForwardstubserverExternalServersToTerraform, false)(this._externalServers.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      external_servers: {
        value: cdktf.listMapperHcl(dnsNsgroupForwardstubserverExternalServersToHclTerraform, false)(this._externalServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsNsgroupForwardstubserverExternalServersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
