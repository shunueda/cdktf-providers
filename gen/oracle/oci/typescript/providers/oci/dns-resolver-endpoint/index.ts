// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsResolverEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#endpoint_type DnsResolverEndpoint#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#forwarding_address DnsResolverEndpoint#forwarding_address}
  */
  readonly forwardingAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#id DnsResolverEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#is_forwarding DnsResolverEndpoint#is_forwarding}
  */
  readonly isForwarding: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#is_listening DnsResolverEndpoint#is_listening}
  */
  readonly isListening: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#listening_address DnsResolverEndpoint#listening_address}
  */
  readonly listeningAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#name DnsResolverEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#nsg_ids DnsResolverEndpoint#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#resolver_id DnsResolverEndpoint#resolver_id}
  */
  readonly resolverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#scope DnsResolverEndpoint#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#subnet_id DnsResolverEndpoint#subnet_id}
  */
  readonly subnetId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#timeouts DnsResolverEndpoint#timeouts}
  */
  readonly timeouts?: DnsResolverEndpointTimeouts;
}
export interface DnsResolverEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#create DnsResolverEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#delete DnsResolverEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#update DnsResolverEndpoint#update}
  */
  readonly update?: string;
}

export function dnsResolverEndpointTimeoutsToTerraform(struct?: DnsResolverEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dnsResolverEndpointTimeoutsToHclTerraform(struct?: DnsResolverEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsResolverEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsResolverEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsResolverEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint oci_dns_resolver_endpoint}
*/
export class DnsResolverEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dns_resolver_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsResolverEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsResolverEndpoint to import
  * @param importFromId The id of the existing DnsResolverEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsResolverEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dns_resolver_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/dns_resolver_endpoint oci_dns_resolver_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsResolverEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DnsResolverEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_resolver_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpointType = config.endpointType;
    this._forwardingAddress = config.forwardingAddress;
    this._id = config.id;
    this._isForwarding = config.isForwarding;
    this._isListening = config.isListening;
    this._listeningAddress = config.listeningAddress;
    this._name = config.name;
    this._nsgIds = config.nsgIds;
    this._resolverId = config.resolverId;
    this._scope = config.scope;
    this._subnetId = config.subnetId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // endpoint_type - computed: true, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // forwarding_address - computed: true, optional: true, required: false
  private _forwardingAddress?: string; 
  public get forwardingAddress() {
    return this.getStringAttribute('forwarding_address');
  }
  public set forwardingAddress(value: string) {
    this._forwardingAddress = value;
  }
  public resetForwardingAddress() {
    this._forwardingAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingAddressInput() {
    return this._forwardingAddress;
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

  // is_forwarding - computed: false, optional: false, required: true
  private _isForwarding?: boolean | cdktf.IResolvable; 
  public get isForwarding() {
    return this.getBooleanAttribute('is_forwarding');
  }
  public set isForwarding(value: boolean | cdktf.IResolvable) {
    this._isForwarding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isForwardingInput() {
    return this._isForwarding;
  }

  // is_listening - computed: false, optional: false, required: true
  private _isListening?: boolean | cdktf.IResolvable; 
  public get isListening() {
    return this.getBooleanAttribute('is_listening');
  }
  public set isListening(value: boolean | cdktf.IResolvable) {
    this._isListening = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isListeningInput() {
    return this._isListening;
  }

  // listening_address - computed: true, optional: true, required: false
  private _listeningAddress?: string; 
  public get listeningAddress() {
    return this.getStringAttribute('listening_address');
  }
  public set listeningAddress(value: string) {
    this._listeningAddress = value;
  }
  public resetListeningAddress() {
    this._listeningAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningAddressInput() {
    return this._listeningAddress;
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

  // nsg_ids - computed: false, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // resolver_id - computed: false, optional: false, required: true
  private _resolverId?: string; 
  public get resolverId() {
    return this.getStringAttribute('resolver_id');
  }
  public set resolverId(value: string) {
    this._resolverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverIdInput() {
    return this._resolverId;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // self - computed: true, optional: false, required: false
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DnsResolverEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DnsResolverEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      forwarding_address: cdktf.stringToTerraform(this._forwardingAddress),
      id: cdktf.stringToTerraform(this._id),
      is_forwarding: cdktf.booleanToTerraform(this._isForwarding),
      is_listening: cdktf.booleanToTerraform(this._isListening),
      listening_address: cdktf.stringToTerraform(this._listeningAddress),
      name: cdktf.stringToTerraform(this._name),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      resolver_id: cdktf.stringToTerraform(this._resolverId),
      scope: cdktf.stringToTerraform(this._scope),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: dnsResolverEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding_address: {
        value: cdktf.stringToHclTerraform(this._forwardingAddress),
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
      is_forwarding: {
        value: cdktf.booleanToHclTerraform(this._isForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_listening: {
        value: cdktf.booleanToHclTerraform(this._isListening),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      listening_address: {
        value: cdktf.stringToHclTerraform(this._listeningAddress),
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
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resolver_id: {
        value: cdktf.stringToHclTerraform(this._resolverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dnsResolverEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsResolverEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
