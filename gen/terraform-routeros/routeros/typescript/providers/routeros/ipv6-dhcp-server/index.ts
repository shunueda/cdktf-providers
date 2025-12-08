// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6DhcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#___path___ Ipv6DhcpServer#___path___}
  */
  readonly path?: string;
  /**
  * Firewall address lists to which the allocated addresses and prefixes will be added if the lease is bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#address_lists Ipv6DhcpServer#address_lists}
  */
  readonly addressLists?: string[];
  /**
  * IPv6 pool, from which to take IPv6 address for the clients. The prefix length of the pool must be 128.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#address_pool Ipv6DhcpServer#address_pool}
  */
  readonly addressPool?: string;
  /**
  * Creates a single simple queue entry for both IPv4 and IPv6 addresses, and uses the MAC address and DUID for identification. Requires IPv6 DHCP Server to have this option enabled as well to work properly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#allow_dual_stack_queue Ipv6DhcpServer#allow_dual_stack_queue}
  */
  readonly allowDualStackQueue?: boolean | cdktf.IResolvable;
  /**
  * A script that will be executed after binding is assigned or de-assigned. Internal `global` variables that can be used in the script:
  *     - bindingBound - set to `1` if bound, otherwise set to `0`
  *     - bindingServerName - dhcp server name
  *     - bindingDUID - DUID
  *     - bindingAddress - active address
  *     - bindingPrefix - active prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#binding_script Ipv6DhcpServer#binding_script}
  */
  readonly bindingScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#comment Ipv6DhcpServer#comment}
  */
  readonly comment?: string;
  /**
  * Add additional DHCP options from option list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#dhcp_option Ipv6DhcpServer#dhcp_option}
  */
  readonly dhcpOption?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#disabled Ipv6DhcpServer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#id Ipv6DhcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Do not reply to DHCPv6 address requests and process only prefixes. Without this setting even if server does not have address-pool configured, it has to respond to client that there is no address available for the client. That can lead up to the situation when DHCPv6 client requests address and prefix in a loop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#ignore_ia_na_bindings Ipv6DhcpServer#ignore_ia_na_bindings}
  */
  readonly ignoreIaNaBindings?: boolean | cdktf.IResolvable;
  /**
  * Specify where to place dynamic simple queue entries for static DCHP leases with a rate-limit parameter set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#insert_queue_before Ipv6DhcpServer#insert_queue_before}
  */
  readonly insertQueueBefore?: string;
  /**
  * The interface on which server will be running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#interface Ipv6DhcpServer#interface}
  */
  readonly interface: string;
  /**
  * The time that a client may use the assigned address. The client will try to renew this address after half of this time and will request a new address after the time limit expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#lease_time Ipv6DhcpServer#lease_time}
  */
  readonly leaseTime?: string;
  /**
  * Reference name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#name Ipv6DhcpServer#name}
  */
  readonly name: string;
  /**
  * A dynamically created queue for this lease will be configured as a child queue of the specified parent queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#parent_queue Ipv6DhcpServer#parent_queue}
  */
  readonly parentQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#preference Ipv6DhcpServer#preference}
  */
  readonly preference?: number;
  /**
  * IPv6 pool, from which to take IPv6 prefix for the clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#prefix_pool Ipv6DhcpServer#prefix_pool}
  */
  readonly prefixPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#rapid_commit Ipv6DhcpServer#rapid_commit}
  */
  readonly rapidCommit?: boolean | cdktf.IResolvable;
  /**
  * Distance of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#route_distance Ipv6DhcpServer#route_distance}
  */
  readonly routeDistance?: number;
  /**
  * Whether to use RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#use_radius Ipv6DhcpServer#use_radius}
  */
  readonly useRadius?: boolean | cdktf.IResolvable;
  /**
  * Allow the server to send Reconfigure messages to clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#use_reconfigure Ipv6DhcpServer#use_reconfigure}
  */
  readonly useReconfigure?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server routeros_ipv6_dhcp_server}
*/
export class Ipv6DhcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ipv6_dhcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6DhcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6DhcpServer to import
  * @param importFromId The id of the existing Ipv6DhcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6DhcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ipv6_dhcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ipv6_dhcp_server routeros_ipv6_dhcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6DhcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6DhcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ipv6_dhcp_server',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._addressLists = config.addressLists;
    this._addressPool = config.addressPool;
    this._allowDualStackQueue = config.allowDualStackQueue;
    this._bindingScript = config.bindingScript;
    this._comment = config.comment;
    this._dhcpOption = config.dhcpOption;
    this._disabled = config.disabled;
    this._id = config.id;
    this._ignoreIaNaBindings = config.ignoreIaNaBindings;
    this._insertQueueBefore = config.insertQueueBefore;
    this._interface = config.interface;
    this._leaseTime = config.leaseTime;
    this._name = config.name;
    this._parentQueue = config.parentQueue;
    this._preference = config.preference;
    this._prefixPool = config.prefixPool;
    this._rapidCommit = config.rapidCommit;
    this._routeDistance = config.routeDistance;
    this._useRadius = config.useRadius;
    this._useReconfigure = config.useReconfigure;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // address_lists - computed: false, optional: true, required: false
  private _addressLists?: string[]; 
  public get addressLists() {
    return cdktf.Fn.tolist(this.getListAttribute('address_lists'));
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  public resetAddressLists() {
    this._addressLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // address_pool - computed: false, optional: true, required: false
  private _addressPool?: string; 
  public get addressPool() {
    return this.getStringAttribute('address_pool');
  }
  public set addressPool(value: string) {
    this._addressPool = value;
  }
  public resetAddressPool() {
    this._addressPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolInput() {
    return this._addressPool;
  }

  // allow_dual_stack_queue - computed: false, optional: true, required: false
  private _allowDualStackQueue?: boolean | cdktf.IResolvable; 
  public get allowDualStackQueue() {
    return this.getBooleanAttribute('allow_dual_stack_queue');
  }
  public set allowDualStackQueue(value: boolean | cdktf.IResolvable) {
    this._allowDualStackQueue = value;
  }
  public resetAllowDualStackQueue() {
    this._allowDualStackQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDualStackQueueInput() {
    return this._allowDualStackQueue;
  }

  // binding_script - computed: false, optional: true, required: false
  private _bindingScript?: string; 
  public get bindingScript() {
    return this.getStringAttribute('binding_script');
  }
  public set bindingScript(value: string) {
    this._bindingScript = value;
  }
  public resetBindingScript() {
    this._bindingScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingScriptInput() {
    return this._bindingScript;
  }

  // comment - computed: false, optional: true, required: false
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

  // dhcp_option - computed: false, optional: true, required: false
  private _dhcpOption?: string[]; 
  public get dhcpOption() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_option'));
  }
  public set dhcpOption(value: string[]) {
    this._dhcpOption = value;
  }
  public resetDhcpOption() {
    this._dhcpOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionInput() {
    return this._dhcpOption;
  }

  // disabled - computed: false, optional: true, required: false
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

  // duid - computed: true, optional: false, required: false
  public get duid() {
    return this.getStringAttribute('duid');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
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

  // ignore_ia_na_bindings - computed: false, optional: true, required: false
  private _ignoreIaNaBindings?: boolean | cdktf.IResolvable; 
  public get ignoreIaNaBindings() {
    return this.getBooleanAttribute('ignore_ia_na_bindings');
  }
  public set ignoreIaNaBindings(value: boolean | cdktf.IResolvable) {
    this._ignoreIaNaBindings = value;
  }
  public resetIgnoreIaNaBindings() {
    this._ignoreIaNaBindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIaNaBindingsInput() {
    return this._ignoreIaNaBindings;
  }

  // insert_queue_before - computed: false, optional: true, required: false
  private _insertQueueBefore?: string; 
  public get insertQueueBefore() {
    return this.getStringAttribute('insert_queue_before');
  }
  public set insertQueueBefore(value: string) {
    this._insertQueueBefore = value;
  }
  public resetInsertQueueBefore() {
    this._insertQueueBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQueueBeforeInput() {
    return this._insertQueueBefore;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: string; 
  public get leaseTime() {
    return this.getStringAttribute('lease_time');
  }
  public set leaseTime(value: string) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
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

  // parent_queue - computed: false, optional: true, required: false
  private _parentQueue?: string; 
  public get parentQueue() {
    return this.getStringAttribute('parent_queue');
  }
  public set parentQueue(value: string) {
    this._parentQueue = value;
  }
  public resetParentQueue() {
    this._parentQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentQueueInput() {
    return this._parentQueue;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // prefix_pool - computed: false, optional: true, required: false
  private _prefixPool?: string; 
  public get prefixPool() {
    return this.getStringAttribute('prefix_pool');
  }
  public set prefixPool(value: string) {
    this._prefixPool = value;
  }
  public resetPrefixPool() {
    this._prefixPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPoolInput() {
    return this._prefixPool;
  }

  // rapid_commit - computed: false, optional: true, required: false
  private _rapidCommit?: boolean | cdktf.IResolvable; 
  public get rapidCommit() {
    return this.getBooleanAttribute('rapid_commit');
  }
  public set rapidCommit(value: boolean | cdktf.IResolvable) {
    this._rapidCommit = value;
  }
  public resetRapidCommit() {
    this._rapidCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidCommitInput() {
    return this._rapidCommit;
  }

  // route_distance - computed: false, optional: true, required: false
  private _routeDistance?: number; 
  public get routeDistance() {
    return this.getNumberAttribute('route_distance');
  }
  public set routeDistance(value: number) {
    this._routeDistance = value;
  }
  public resetRouteDistance() {
    this._routeDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDistanceInput() {
    return this._routeDistance;
  }

  // use_radius - computed: false, optional: true, required: false
  private _useRadius?: boolean | cdktf.IResolvable; 
  public get useRadius() {
    return this.getBooleanAttribute('use_radius');
  }
  public set useRadius(value: boolean | cdktf.IResolvable) {
    this._useRadius = value;
  }
  public resetUseRadius() {
    this._useRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRadiusInput() {
    return this._useRadius;
  }

  // use_reconfigure - computed: false, optional: true, required: false
  private _useReconfigure?: boolean | cdktf.IResolvable; 
  public get useReconfigure() {
    return this.getBooleanAttribute('use_reconfigure');
  }
  public set useReconfigure(value: boolean | cdktf.IResolvable) {
    this._useReconfigure = value;
  }
  public resetUseReconfigure() {
    this._useReconfigure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useReconfigureInput() {
    return this._useReconfigure;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressLists),
      address_pool: cdktf.stringToTerraform(this._addressPool),
      allow_dual_stack_queue: cdktf.booleanToTerraform(this._allowDualStackQueue),
      binding_script: cdktf.stringToTerraform(this._bindingScript),
      comment: cdktf.stringToTerraform(this._comment),
      dhcp_option: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpOption),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      ignore_ia_na_bindings: cdktf.booleanToTerraform(this._ignoreIaNaBindings),
      insert_queue_before: cdktf.stringToTerraform(this._insertQueueBefore),
      interface: cdktf.stringToTerraform(this._interface),
      lease_time: cdktf.stringToTerraform(this._leaseTime),
      name: cdktf.stringToTerraform(this._name),
      parent_queue: cdktf.stringToTerraform(this._parentQueue),
      preference: cdktf.numberToTerraform(this._preference),
      prefix_pool: cdktf.stringToTerraform(this._prefixPool),
      rapid_commit: cdktf.booleanToTerraform(this._rapidCommit),
      route_distance: cdktf.numberToTerraform(this._routeDistance),
      use_radius: cdktf.booleanToTerraform(this._useRadius),
      use_reconfigure: cdktf.booleanToTerraform(this._useReconfigure),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addressLists),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      address_pool: {
        value: cdktf.stringToHclTerraform(this._addressPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_dual_stack_queue: {
        value: cdktf.booleanToHclTerraform(this._allowDualStackQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      binding_script: {
        value: cdktf.stringToHclTerraform(this._bindingScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpOption),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_ia_na_bindings: {
        value: cdktf.booleanToHclTerraform(this._ignoreIaNaBindings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insert_queue_before: {
        value: cdktf.stringToHclTerraform(this._insertQueueBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_time: {
        value: cdktf.stringToHclTerraform(this._leaseTime),
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
      parent_queue: {
        value: cdktf.stringToHclTerraform(this._parentQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preference: {
        value: cdktf.numberToHclTerraform(this._preference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_pool: {
        value: cdktf.stringToHclTerraform(this._prefixPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rapid_commit: {
        value: cdktf.booleanToHclTerraform(this._rapidCommit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_distance: {
        value: cdktf.numberToHclTerraform(this._routeDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_radius: {
        value: cdktf.booleanToHclTerraform(this._useRadius),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_reconfigure: {
        value: cdktf.booleanToHclTerraform(this._useReconfigure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
