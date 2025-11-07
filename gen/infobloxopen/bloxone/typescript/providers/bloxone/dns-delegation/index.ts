// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsDelegationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Comment for zone delegation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation#comment DnsDelegation#comment}
  */
  readonly comment?: string;
  /**
  * Required. DNS zone delegation servers. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation#delegation_servers DnsDelegation#delegation_servers}
  */
  readonly delegationServers: DnsDelegationDelegationServers[] | cdktf.IResolvable;
  /**
  * Optional. _true_ to disable object. A disabled object is effectively non-existent when generating resource records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation#disabled DnsDelegation#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Delegation FQDN. The FQDN supplied at creation will be converted to canonical form.  Read-only after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation#fqdn DnsDelegation#fqdn}
  */
  readonly fqdn: string;
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation#tags DnsDelegation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation#view DnsDelegation#view}
  */
  readonly view?: string;
}
export interface DnsDelegationDelegationServers {
  /**
  * Optional. IP Address of nameserver.  Only required when fqdn of a delegation server falls under delegation fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation#address DnsDelegation#address}
  */
  readonly address?: string;
  /**
  * Required. FQDN of nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation#fqdn DnsDelegation#fqdn}
  */
  readonly fqdn: string;
}

export function dnsDelegationDelegationServersToTerraform(struct?: DnsDelegationDelegationServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
  }
}


export function dnsDelegationDelegationServersToHclTerraform(struct?: DnsDelegationDelegationServers | cdktf.IResolvable): any {
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

export class DnsDelegationDelegationServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsDelegationDelegationServers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsDelegationDelegationServers | cdktf.IResolvable | undefined) {
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

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
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

export class DnsDelegationDelegationServersList extends cdktf.ComplexList {
  public internalValue? : DnsDelegationDelegationServers[] | cdktf.IResolvable

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
  public get(index: number): DnsDelegationDelegationServersOutputReference {
    return new DnsDelegationDelegationServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation bloxone_dns_delegation}
*/
export class DnsDelegation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_delegation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsDelegation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsDelegation to import
  * @param importFromId The id of the existing DnsDelegation that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsDelegation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_delegation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_delegation bloxone_dns_delegation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsDelegationConfig
  */
  public constructor(scope: Construct, id: string, config: DnsDelegationConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_delegation',
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
    this._delegationServers.internalValue = config.delegationServers;
    this._disabled = config.disabled;
    this._fqdn = config.fqdn;
    this._tags = config.tags;
    this._view = config.view;
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

  // delegation_servers - computed: false, optional: false, required: true
  private _delegationServers = new DnsDelegationDelegationServersList(this, "delegation_servers", false);
  public get delegationServers() {
    return this._delegationServers;
  }
  public putDelegationServers(value: DnsDelegationDelegationServers[] | cdktf.IResolvable) {
    this._delegationServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationServersInput() {
    return this._delegationServers.internalValue;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
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

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      delegation_servers: cdktf.listMapper(dnsDelegationDelegationServersToTerraform, false)(this._delegationServers.internalValue),
      disabled: cdktf.booleanToTerraform(this._disabled),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      view: cdktf.stringToTerraform(this._view),
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
      delegation_servers: {
        value: cdktf.listMapperHcl(dnsDelegationDelegationServersToHclTerraform, false)(this._delegationServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsDelegationDelegationServersList",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
