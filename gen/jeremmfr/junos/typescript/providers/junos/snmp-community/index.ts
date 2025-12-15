// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpCommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow read-only access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#authorization_read_only SnmpCommunity#authorization_read_only}
  */
  readonly authorizationReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Allow read and write access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#authorization_read_write SnmpCommunity#authorization_read_write}
  */
  readonly authorizationReadWrite?: boolean | cdktf.IResolvable;
  /**
  * The name of client list or prefix list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#client_list_name SnmpCommunity#client_list_name}
  */
  readonly clientListName?: string;
  /**
  * List of source address prefix ranges to accept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#clients SnmpCommunity#clients}
  */
  readonly clients?: string[];
  /**
  * The name of snmp community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#name SnmpCommunity#name}
  */
  readonly name: string;
  /**
  * View name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#view SnmpCommunity#view}
  */
  readonly view?: string;
  /**
  * routing_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#routing_instance SnmpCommunity#routing_instance}
  */
  readonly routingInstance?: SnmpCommunityRoutingInstance[] | cdktf.IResolvable;
}
export interface SnmpCommunityRoutingInstance {
  /**
  * The name of client list or prefix list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#client_list_name SnmpCommunity#client_list_name}
  */
  readonly clientListName?: string;
  /**
  * List of source address prefix ranges to accept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#clients SnmpCommunity#clients}
  */
  readonly clients?: string[];
  /**
  * Name of routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#name SnmpCommunity#name}
  */
  readonly name: string;
}

export function snmpCommunityRoutingInstanceToTerraform(struct?: SnmpCommunityRoutingInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_list_name: cdktf.stringToTerraform(struct!.clientListName),
    clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clients),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function snmpCommunityRoutingInstanceToHclTerraform(struct?: SnmpCommunityRoutingInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_list_name: {
      value: cdktf.stringToHclTerraform(struct!.clientListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class SnmpCommunityRoutingInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpCommunityRoutingInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientListName = this._clientListName;
    }
    if (this._clients !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpCommunityRoutingInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientListName = undefined;
      this._clients = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientListName = value.clientListName;
      this._clients = value.clients;
      this._name = value.name;
    }
  }

  // client_list_name - computed: false, optional: true, required: false
  private _clientListName?: string; 
  public get clientListName() {
    return this.getStringAttribute('client_list_name');
  }
  public set clientListName(value: string) {
    this._clientListName = value;
  }
  public resetClientListName() {
    this._clientListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientListNameInput() {
    return this._clientListName;
  }

  // clients - computed: false, optional: true, required: false
  private _clients?: string[]; 
  public get clients() {
    return cdktf.Fn.tolist(this.getListAttribute('clients'));
  }
  public set clients(value: string[]) {
    this._clients = value;
  }
  public resetClients() {
    this._clients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
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
}

export class SnmpCommunityRoutingInstanceList extends cdktf.ComplexList {
  public internalValue? : SnmpCommunityRoutingInstance[] | cdktf.IResolvable

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
  public get(index: number): SnmpCommunityRoutingInstanceOutputReference {
    return new SnmpCommunityRoutingInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community junos_snmp_community}
*/
export class SnmpCommunity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_snmp_community";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpCommunity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpCommunity to import
  * @param importFromId The id of the existing SnmpCommunity that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpCommunity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_snmp_community", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_community junos_snmp_community} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpCommunityConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpCommunityConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_snmp_community',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizationReadOnly = config.authorizationReadOnly;
    this._authorizationReadWrite = config.authorizationReadWrite;
    this._clientListName = config.clientListName;
    this._clients = config.clients;
    this._name = config.name;
    this._view = config.view;
    this._routingInstance.internalValue = config.routingInstance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_read_only - computed: false, optional: true, required: false
  private _authorizationReadOnly?: boolean | cdktf.IResolvable; 
  public get authorizationReadOnly() {
    return this.getBooleanAttribute('authorization_read_only');
  }
  public set authorizationReadOnly(value: boolean | cdktf.IResolvable) {
    this._authorizationReadOnly = value;
  }
  public resetAuthorizationReadOnly() {
    this._authorizationReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationReadOnlyInput() {
    return this._authorizationReadOnly;
  }

  // authorization_read_write - computed: false, optional: true, required: false
  private _authorizationReadWrite?: boolean | cdktf.IResolvable; 
  public get authorizationReadWrite() {
    return this.getBooleanAttribute('authorization_read_write');
  }
  public set authorizationReadWrite(value: boolean | cdktf.IResolvable) {
    this._authorizationReadWrite = value;
  }
  public resetAuthorizationReadWrite() {
    this._authorizationReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationReadWriteInput() {
    return this._authorizationReadWrite;
  }

  // client_list_name - computed: false, optional: true, required: false
  private _clientListName?: string; 
  public get clientListName() {
    return this.getStringAttribute('client_list_name');
  }
  public set clientListName(value: string) {
    this._clientListName = value;
  }
  public resetClientListName() {
    this._clientListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientListNameInput() {
    return this._clientListName;
  }

  // clients - computed: false, optional: true, required: false
  private _clients?: string[]; 
  public get clients() {
    return cdktf.Fn.tolist(this.getListAttribute('clients'));
  }
  public set clients(value: string[]) {
    this._clients = value;
  }
  public resetClients() {
    this._clients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // view - computed: false, optional: true, required: false
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

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance = new SnmpCommunityRoutingInstanceList(this, "routing_instance", false);
  public get routingInstance() {
    return this._routingInstance;
  }
  public putRoutingInstance(value: SnmpCommunityRoutingInstance[] | cdktf.IResolvable) {
    this._routingInstance.internalValue = value;
  }
  public resetRoutingInstance() {
    this._routingInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_read_only: cdktf.booleanToTerraform(this._authorizationReadOnly),
      authorization_read_write: cdktf.booleanToTerraform(this._authorizationReadWrite),
      client_list_name: cdktf.stringToTerraform(this._clientListName),
      clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clients),
      name: cdktf.stringToTerraform(this._name),
      view: cdktf.stringToTerraform(this._view),
      routing_instance: cdktf.listMapper(snmpCommunityRoutingInstanceToTerraform, true)(this._routingInstance.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_read_only: {
        value: cdktf.booleanToHclTerraform(this._authorizationReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization_read_write: {
        value: cdktf.booleanToHclTerraform(this._authorizationReadWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_list_name: {
        value: cdktf.stringToHclTerraform(this._clientListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_instance: {
        value: cdktf.listMapperHcl(snmpCommunityRoutingInstanceToHclTerraform, true)(this._routingInstance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpCommunityRoutingInstanceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
