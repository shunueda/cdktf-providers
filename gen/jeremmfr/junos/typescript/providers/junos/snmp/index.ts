// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * JVision ARP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#arp Snmp#arp}
  */
  readonly arp?: boolean | cdktf.IResolvable;
  /**
  * Enable host name resolution for JVision ARP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#arp_host_name_resolution Snmp#arp_host_name_resolution}
  */
  readonly arpHostNameResolution?: boolean | cdktf.IResolvable;
  /**
  * Clean supported lines when destroy this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#clean_on_destroy Snmp#clean_on_destroy}
  */
  readonly cleanOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Contact information for administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#contact Snmp#contact}
  */
  readonly contact?: string;
  /**
  * System description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#description Snmp#description}
  */
  readonly description?: string;
  /**
  * SNMPv3 engine ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#engine_id Snmp#engine_id}
  */
  readonly engineId?: string;
  /**
  * Filter requests with duplicate source address/port and request ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#filter_duplicates Snmp#filter_duplicates}
  */
  readonly filterDuplicates?: boolean | cdktf.IResolvable;
  /**
  * Regular expressions to list of interfaces that needs to be filtered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#filter_interfaces Snmp#filter_interfaces}
  */
  readonly filterInterfaces?: string[];
  /**
  * Filter all internal interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#filter_internal_interfaces Snmp#filter_internal_interfaces}
  */
  readonly filterInternalInterfaces?: boolean | cdktf.IResolvable;
  /**
  * Filter interfaces config for ifNumber and ipv6Interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#if_count_with_filter_interfaces Snmp#if_count_with_filter_interfaces}
  */
  readonly ifCountWithFilterInterfaces?: boolean | cdktf.IResolvable;
  /**
  * Restrict SNMP requests to interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#interface Snmp#interface}
  */
  readonly interface?: string[];
  /**
  * Physical location of system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#location Snmp#location}
  */
  readonly location?: string;
  /**
  * Enable SNMP routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#routing_instance_access Snmp#routing_instance_access}
  */
  readonly routingInstanceAccess?: boolean | cdktf.IResolvable;
  /**
  * Allow/Deny SNMP access to routing instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#routing_instance_access_list Snmp#routing_instance_access_list}
  */
  readonly routingInstanceAccessList?: string[];
  /**
  * health_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#health_monitor Snmp#health_monitor}
  */
  readonly healthMonitor?: SnmpHealthMonitor;
}
export interface SnmpHealthMonitor {
  /**
  * Falling threshold applied to all monitored objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#falling_threshold Snmp#falling_threshold}
  */
  readonly fallingThreshold?: number;
  /**
  * Enable IDP health monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#idp Snmp#idp}
  */
  readonly idp?: boolean | cdktf.IResolvable;
  /**
  * Falling threshold applied to all idp monitored objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#idp_falling_threshold Snmp#idp_falling_threshold}
  */
  readonly idpFallingThreshold?: number;
  /**
  * Interval between idp samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#idp_interval Snmp#idp_interval}
  */
  readonly idpInterval?: number;
  /**
  * Rising threshold applied to all monitored idp objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#idp_rising_threshold Snmp#idp_rising_threshold}
  */
  readonly idpRisingThreshold?: number;
  /**
  * Interval between samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#interval Snmp#interval}
  */
  readonly interval?: number;
  /**
  * Rising threshold applied to all monitored objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#rising_threshold Snmp#rising_threshold}
  */
  readonly risingThreshold?: number;
}

export function snmpHealthMonitorToTerraform(struct?: SnmpHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    falling_threshold: cdktf.numberToTerraform(struct!.fallingThreshold),
    idp: cdktf.booleanToTerraform(struct!.idp),
    idp_falling_threshold: cdktf.numberToTerraform(struct!.idpFallingThreshold),
    idp_interval: cdktf.numberToTerraform(struct!.idpInterval),
    idp_rising_threshold: cdktf.numberToTerraform(struct!.idpRisingThreshold),
    interval: cdktf.numberToTerraform(struct!.interval),
    rising_threshold: cdktf.numberToTerraform(struct!.risingThreshold),
  }
}


export function snmpHealthMonitorToHclTerraform(struct?: SnmpHealthMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    falling_threshold: {
      value: cdktf.numberToHclTerraform(struct!.fallingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idp: {
      value: cdktf.booleanToHclTerraform(struct!.idp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_falling_threshold: {
      value: cdktf.numberToHclTerraform(struct!.idpFallingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idp_interval: {
      value: cdktf.numberToHclTerraform(struct!.idpInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idp_rising_threshold: {
      value: cdktf.numberToHclTerraform(struct!.idpRisingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rising_threshold: {
      value: cdktf.numberToHclTerraform(struct!.risingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpHealthMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnmpHealthMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallingThreshold = this._fallingThreshold;
    }
    if (this._idp !== undefined) {
      hasAnyValues = true;
      internalValueResult.idp = this._idp;
    }
    if (this._idpFallingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpFallingThreshold = this._idpFallingThreshold;
    }
    if (this._idpInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpInterval = this._idpInterval;
    }
    if (this._idpRisingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpRisingThreshold = this._idpRisingThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._risingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.risingThreshold = this._risingThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpHealthMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallingThreshold = undefined;
      this._idp = undefined;
      this._idpFallingThreshold = undefined;
      this._idpInterval = undefined;
      this._idpRisingThreshold = undefined;
      this._interval = undefined;
      this._risingThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallingThreshold = value.fallingThreshold;
      this._idp = value.idp;
      this._idpFallingThreshold = value.idpFallingThreshold;
      this._idpInterval = value.idpInterval;
      this._idpRisingThreshold = value.idpRisingThreshold;
      this._interval = value.interval;
      this._risingThreshold = value.risingThreshold;
    }
  }

  // falling_threshold - computed: false, optional: true, required: false
  private _fallingThreshold?: number; 
  public get fallingThreshold() {
    return this.getNumberAttribute('falling_threshold');
  }
  public set fallingThreshold(value: number) {
    this._fallingThreshold = value;
  }
  public resetFallingThreshold() {
    this._fallingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallingThresholdInput() {
    return this._fallingThreshold;
  }

  // idp - computed: false, optional: true, required: false
  private _idp?: boolean | cdktf.IResolvable; 
  public get idp() {
    return this.getBooleanAttribute('idp');
  }
  public set idp(value: boolean | cdktf.IResolvable) {
    this._idp = value;
  }
  public resetIdp() {
    this._idp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp;
  }

  // idp_falling_threshold - computed: false, optional: true, required: false
  private _idpFallingThreshold?: number; 
  public get idpFallingThreshold() {
    return this.getNumberAttribute('idp_falling_threshold');
  }
  public set idpFallingThreshold(value: number) {
    this._idpFallingThreshold = value;
  }
  public resetIdpFallingThreshold() {
    this._idpFallingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpFallingThresholdInput() {
    return this._idpFallingThreshold;
  }

  // idp_interval - computed: false, optional: true, required: false
  private _idpInterval?: number; 
  public get idpInterval() {
    return this.getNumberAttribute('idp_interval');
  }
  public set idpInterval(value: number) {
    this._idpInterval = value;
  }
  public resetIdpInterval() {
    this._idpInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIntervalInput() {
    return this._idpInterval;
  }

  // idp_rising_threshold - computed: false, optional: true, required: false
  private _idpRisingThreshold?: number; 
  public get idpRisingThreshold() {
    return this.getNumberAttribute('idp_rising_threshold');
  }
  public set idpRisingThreshold(value: number) {
    this._idpRisingThreshold = value;
  }
  public resetIdpRisingThreshold() {
    this._idpRisingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpRisingThresholdInput() {
    return this._idpRisingThreshold;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // rising_threshold - computed: false, optional: true, required: false
  private _risingThreshold?: number; 
  public get risingThreshold() {
    return this.getNumberAttribute('rising_threshold');
  }
  public set risingThreshold(value: number) {
    this._risingThreshold = value;
  }
  public resetRisingThreshold() {
    this._risingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get risingThresholdInput() {
    return this._risingThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp junos_snmp}
*/
export class Snmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snmp to import
  * @param importFromId The id of the existing Snmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/snmp junos_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_snmp',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arp = config.arp;
    this._arpHostNameResolution = config.arpHostNameResolution;
    this._cleanOnDestroy = config.cleanOnDestroy;
    this._contact = config.contact;
    this._description = config.description;
    this._engineId = config.engineId;
    this._filterDuplicates = config.filterDuplicates;
    this._filterInterfaces = config.filterInterfaces;
    this._filterInternalInterfaces = config.filterInternalInterfaces;
    this._ifCountWithFilterInterfaces = config.ifCountWithFilterInterfaces;
    this._interface = config.interface;
    this._location = config.location;
    this._routingInstanceAccess = config.routingInstanceAccess;
    this._routingInstanceAccessList = config.routingInstanceAccessList;
    this._healthMonitor.internalValue = config.healthMonitor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp - computed: false, optional: true, required: false
  private _arp?: boolean | cdktf.IResolvable; 
  public get arp() {
    return this.getBooleanAttribute('arp');
  }
  public set arp(value: boolean | cdktf.IResolvable) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // arp_host_name_resolution - computed: false, optional: true, required: false
  private _arpHostNameResolution?: boolean | cdktf.IResolvable; 
  public get arpHostNameResolution() {
    return this.getBooleanAttribute('arp_host_name_resolution');
  }
  public set arpHostNameResolution(value: boolean | cdktf.IResolvable) {
    this._arpHostNameResolution = value;
  }
  public resetArpHostNameResolution() {
    this._arpHostNameResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpHostNameResolutionInput() {
    return this._arpHostNameResolution;
  }

  // clean_on_destroy - computed: false, optional: true, required: false
  private _cleanOnDestroy?: boolean | cdktf.IResolvable; 
  public get cleanOnDestroy() {
    return this.getBooleanAttribute('clean_on_destroy');
  }
  public set cleanOnDestroy(value: boolean | cdktf.IResolvable) {
    this._cleanOnDestroy = value;
  }
  public resetCleanOnDestroy() {
    this._cleanOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanOnDestroyInput() {
    return this._cleanOnDestroy;
  }

  // contact - computed: false, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // engine_id - computed: false, optional: true, required: false
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  public resetEngineId() {
    this._engineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // filter_duplicates - computed: false, optional: true, required: false
  private _filterDuplicates?: boolean | cdktf.IResolvable; 
  public get filterDuplicates() {
    return this.getBooleanAttribute('filter_duplicates');
  }
  public set filterDuplicates(value: boolean | cdktf.IResolvable) {
    this._filterDuplicates = value;
  }
  public resetFilterDuplicates() {
    this._filterDuplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDuplicatesInput() {
    return this._filterDuplicates;
  }

  // filter_interfaces - computed: false, optional: true, required: false
  private _filterInterfaces?: string[]; 
  public get filterInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_interfaces'));
  }
  public set filterInterfaces(value: string[]) {
    this._filterInterfaces = value;
  }
  public resetFilterInterfaces() {
    this._filterInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInterfacesInput() {
    return this._filterInterfaces;
  }

  // filter_internal_interfaces - computed: false, optional: true, required: false
  private _filterInternalInterfaces?: boolean | cdktf.IResolvable; 
  public get filterInternalInterfaces() {
    return this.getBooleanAttribute('filter_internal_interfaces');
  }
  public set filterInternalInterfaces(value: boolean | cdktf.IResolvable) {
    this._filterInternalInterfaces = value;
  }
  public resetFilterInternalInterfaces() {
    this._filterInternalInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInternalInterfacesInput() {
    return this._filterInternalInterfaces;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if_count_with_filter_interfaces - computed: false, optional: true, required: false
  private _ifCountWithFilterInterfaces?: boolean | cdktf.IResolvable; 
  public get ifCountWithFilterInterfaces() {
    return this.getBooleanAttribute('if_count_with_filter_interfaces');
  }
  public set ifCountWithFilterInterfaces(value: boolean | cdktf.IResolvable) {
    this._ifCountWithFilterInterfaces = value;
  }
  public resetIfCountWithFilterInterfaces() {
    this._ifCountWithFilterInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifCountWithFilterInterfacesInput() {
    return this._ifCountWithFilterInterfaces;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // routing_instance_access - computed: false, optional: true, required: false
  private _routingInstanceAccess?: boolean | cdktf.IResolvable; 
  public get routingInstanceAccess() {
    return this.getBooleanAttribute('routing_instance_access');
  }
  public set routingInstanceAccess(value: boolean | cdktf.IResolvable) {
    this._routingInstanceAccess = value;
  }
  public resetRoutingInstanceAccess() {
    this._routingInstanceAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceAccessInput() {
    return this._routingInstanceAccess;
  }

  // routing_instance_access_list - computed: false, optional: true, required: false
  private _routingInstanceAccessList?: string[]; 
  public get routingInstanceAccessList() {
    return cdktf.Fn.tolist(this.getListAttribute('routing_instance_access_list'));
  }
  public set routingInstanceAccessList(value: string[]) {
    this._routingInstanceAccessList = value;
  }
  public resetRoutingInstanceAccessList() {
    this._routingInstanceAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceAccessListInput() {
    return this._routingInstanceAccessList;
  }

  // health_monitor - computed: false, optional: true, required: false
  private _healthMonitor = new SnmpHealthMonitorOutputReference(this, "health_monitor");
  public get healthMonitor() {
    return this._healthMonitor;
  }
  public putHealthMonitor(value: SnmpHealthMonitor) {
    this._healthMonitor.internalValue = value;
  }
  public resetHealthMonitor() {
    this._healthMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorInput() {
    return this._healthMonitor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp: cdktf.booleanToTerraform(this._arp),
      arp_host_name_resolution: cdktf.booleanToTerraform(this._arpHostNameResolution),
      clean_on_destroy: cdktf.booleanToTerraform(this._cleanOnDestroy),
      contact: cdktf.stringToTerraform(this._contact),
      description: cdktf.stringToTerraform(this._description),
      engine_id: cdktf.stringToTerraform(this._engineId),
      filter_duplicates: cdktf.booleanToTerraform(this._filterDuplicates),
      filter_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterInterfaces),
      filter_internal_interfaces: cdktf.booleanToTerraform(this._filterInternalInterfaces),
      if_count_with_filter_interfaces: cdktf.booleanToTerraform(this._ifCountWithFilterInterfaces),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      location: cdktf.stringToTerraform(this._location),
      routing_instance_access: cdktf.booleanToTerraform(this._routingInstanceAccess),
      routing_instance_access_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routingInstanceAccessList),
      health_monitor: snmpHealthMonitorToTerraform(this._healthMonitor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp: {
        value: cdktf.booleanToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      arp_host_name_resolution: {
        value: cdktf.booleanToHclTerraform(this._arpHostNameResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clean_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._cleanOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contact: {
        value: cdktf.stringToHclTerraform(this._contact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_duplicates: {
        value: cdktf.booleanToHclTerraform(this._filterDuplicates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterInterfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_internal_interfaces: {
        value: cdktf.booleanToHclTerraform(this._filterInternalInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      if_count_with_filter_interfaces: {
        value: cdktf.booleanToHclTerraform(this._ifCountWithFilterInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_instance_access: {
        value: cdktf.booleanToHclTerraform(this._routingInstanceAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_instance_access_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routingInstanceAccessList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      health_monitor: {
        value: snmpHealthMonitorToHclTerraform(this._healthMonitor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnmpHealthMonitor",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
